import type { HTTPMethods, InjectOptions } from "fastify";
import { closeMongoDB, setupMongoDB, idolArray } from "./App.setup";
import App from "../../src/App";

describe("test MLTD idol API", () => {
    beforeAll(async () => await setupMongoDB());
    afterAll(async () => await closeMongoDB(), 20000);

    const methods: HTTPMethods[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

    it("should return an array of 53 idols for any request for /mltd/v1/idols", async () => {
        expect.assertions(methods.length * 2);
        await Promise.all(
            methods.map(async method => {
                const response = await App.inject({
                    method,
                    url: "/mltd/v1/idols"
                });
                expect(response.statusCode).toEqual(200);
                expect(response.body).toEqual(JSON.stringify(idolArray));
            })
        );
    }, 20000);

    const iteration = 1000;

    it(`random request for random idol ${iteration} times`, async () => {
        expect.assertions(iteration * 2);
        const requests: (InjectOptions & { id: number })[] = [];
        for (let i = 0; i < iteration; ++i) {
            const id = Math.floor(Math.random() * idolArray.length) + 1;
            const method = methods[Math.floor(Math.random() * methods.length)];
            requests.push({ url: `/mltd/v1/idols/${id}`, method, id });
        }
        await Promise.all(
            requests.map(async request => {
                const response = await App.inject(request);
                expect(response.statusCode).toEqual(200);
                expect(response.body).toEqual(
                    JSON.stringify(idolArray[request.id - 1])
                );
            })
        );
    }, 10000);

    it("testing bad requests", async () => {
        expect.assertions(20);
        const invalidIdolIDs = [
            "starburst stream",
            "AAAAAAAA",
            "0123456789",
            "星爆氣流斬",
            "0000000000001",
            "       2",
            "4.8763",
            "[1]",
            "[object Object]",
            "console.log(0.0)"
        ];
        await Promise.all(
            invalidIdolIDs.map(async id => {
                const response = await App.inject({
                    method: "GET",
                    url: `/mltd/v1/idols/${id}`
                });
                expect(response.statusCode).toEqual(400);
                expect(response.body).toEqual(
                    JSON.stringify({
                        status: 400,
                        message: `invalid idol ID: ${id}`
                    })
                );
            })
        );
    });
});
