import { closeMongoDB, setupMongoDB, idolArray } from "./App.setup";
import { HTTPMethods } from "fastify";
import App from "../../src/App";

describe("test MLTD idol API", () => {
	beforeAll(async () => await setupMongoDB());
	afterAll(async () => await closeMongoDB());

	const methods: HTTPMethods[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

	it("should return an array of 53 idols for any request for /mltd/v1/idols", async () => {
		methods.forEach(async (method) => {
			const response = await App.inject({ method, url: "/mltd/v1/idols" });
			expect(response.statusCode).toEqual(200);
			expect(response.body).toEqual(JSON.stringify(idolArray));
		});
	});

	it("random request for random idol 100 times", async () => {
		for (let i = 0; i < 100; ++i) {
			const id = Math.floor(Math.random() * idolArray.length) + 1;
			const method = methods[Math.floor(Math.random() * methods.length)];
			const response = await App.inject({ method, url: `/mltd/v1/idols/${id}` });
			expect(response.statusCode).toEqual(200);
			expect(response.body).toEqual(JSON.stringify(idolArray[id - 1]));
		}
	}, 15000);
});
