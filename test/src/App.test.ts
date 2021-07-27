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

	it("testing bad requests", async () => {
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
			"console.log(0.0)",
		];
		invalidIdolIDs.forEach(async (id) => {
			const response = await App.inject({ method: "GET", url: `/mltd/v1/idols/${id}` });
			expect(response.statusCode).toEqual(400);
			expect(response.body).toEqual(
				JSON.stringify({ status: 400, message: `invalid idol ID: ${id}` })
			);
		});
	});
});
