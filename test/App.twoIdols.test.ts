import supertest, { Response } from "supertest";
import { Server } from "http";
import { startServer, stopServer, clearData } from "./MongoMemoryServer";
import idols from "./idols.json";

describe("test idol API with 2 idols", () => {
	let app: Server;
	beforeAll(async () => (app = await startServer()));

	afterAll(async () => {
		await clearData();
		await stopServer();
		app.close();
	});

	it("should return an array of 0 idol for GET /mltd/m1/idols", (done) => {
		supertest(app)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err: any, res: Response) => {
				if (err) err(done);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(0);
				done();
			});
	});

	it("should return a successful response for POST /mltd/v1/idols with idol 春日　未来", (done) => {
		supertest(app)
			.post("/mltd/v1/idols")
			.send(idols["春日　未来"])
			.expect(201)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(res.body).toEqual(idols["春日　未来"]);
				done();
			});
	});

	it("should be bad request for POST /mltd/v1/idols with idol 春日　未来", (done) => {
		supertest(app).post("/mltd/v1/idols").send(idols["春日　未来"]).expect(400, done);
	});

	it("should return a successful response for POST /mltd/v1/idols with idol 最上　静香", (done) => {
		supertest(app)
			.post("/mltd/v1/idols")
			.send(idols["最上　静香"])
			.expect(201)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(res.body).toEqual(idols["最上　静香"]);
				done();
			});
	});

	it("should return an array of 2 idols for GET /mltd/v1/idols", (done) => {
		supertest(app)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(2);
				done();
			});
	});

	it("should return a correct idol for GET /mltd/v1/idols/14", (done) => {
		supertest(app)
			.get("/mltd/v1/idols/14")
			.expect(200)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(res.body).toEqual(idols["春日　未来"]);
				done();
			});
	});

	it("should return a correct idol for GET /mltd/v1/idols/15", (done) => {
		supertest(app)
			.get("/mltd/v1/idols/15")
			.expect(200)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(res.body).toEqual(idols["最上　静香"]);
				done();
			});
	});

	it("should return 200 for DELETE /mltd/v1/idols/15", (done) => {
		supertest(app).delete("/mltd/v1/idols/15").expect(200, done);
	});

	it("should return an array of 1 idol for GET /mltd/v1/idols", (done) => {
		supertest(app)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(1);
				done();
			});
	});

	it("should return 200 for DELETE /mltd/v1/idols/14", (done) => {
		supertest(app).delete("/mltd/v1/idols/14").expect(200, done);
	});

	it("should return 404 for DELETE /mltd/v1/idols/14", (done) => {
		supertest(app).delete("/mltd/v1/idols/14").expect(404, done);
	});

	it("should return 404 for GET /mltd/v1/idols/15", (done) => {
		supertest(app).get("/mltd/v1/idols/15").expect(404, done);
	});

	it("should return an array of 0 idol for GET /mltd/v1/idols", (done) => {
		supertest(app)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err: any, res: Response) => {
				if (err) done(err);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(0);
				done();
			});
	});
});
