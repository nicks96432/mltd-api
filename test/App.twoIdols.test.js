import supertest from "supertest";
import { connectMongodb, clearData, closeMongodb } from "./MongoMemoryServer";
import App from "../src/App";

describe("test idol API with 2 idols", () => {
	let httpServer;

	beforeAll(async () => {
		await connectMongodb();
		httpServer = App.listen(process.env.PORT || 48763);
	});

	afterAll(async () => {
		await clearData();
		await closeMongodb();
		httpServer.close();
	});

	it("should return an array of 0 idol for GET /mltd/m1/idols", (done) => {
		supertest(App)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err, res) => {
				if (err) err(done);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(0);
				done();
			});
	});

	it("should return a successful response for POST /mltd/v1/idols with idol 14", (done) => {
		supertest(App)
			.post("/mltd/v1/idols")
			.send({
				_id: 14,
				CV_jp: "山崎　はるか",
				CV_zh: "山崎遙",
				type: "Princess",
				age: 14,
				name_jp: "春日　未来",
				name_zh: "春日 未來",
				birthday: "0000-06-28T00:00:00.000Z",
				height: 156,
				weight: 42,
				measurements: {
					bust: 78,
					waist: 54,
					hips: 77,
				},
				origin: "東京都",
				like: "演唱會",
				trick: "唱歌",
				hobby: "蒐集可愛的髮夾",
				leftHand: false,
				bloodtype: "O",
			})
			.expect(201, done);
	});

	it("should be bad request for POST /mltd/v1/idols with idol 14", (done) => {
		supertest(App)
			.post("/mltd/v1/idols")
			.send({
				_id: 14,
				CV_jp: "山崎　はるか",
				CV_zh: "山崎遙",
				type: "Princess",
				age: 14,
				name_jp: "春日　未来",
				name_zh: "春日 未來",
				birthday: "0000-06-28T00:00:00.000Z",
				height: 156,
				weight: 42,
				measurements: {
					bust: 78,
					waist: 54,
					hips: 77,
				},
				origin: "東京都",
				like: "演唱會",
				trick: "唱歌",
				hobby: "蒐集可愛的髮夾",
				leftHand: false,
				bloodtype: "O",
			})
			.expect(400, done);
	});

	it("should return a successful response for POST /mltd/v1/idols with idol 15", (done) => {
		supertest(App)
			.post("/mltd/v1/idols")
			.send({
				_id: 15,
				CV_jp: "田所　あずさ",
				CV_zh: "田所梓",
				type: "Fairy",
				age: 14,
				name_jp: "最上　静香",
				name_zh: "最上 靜香",
				birthday: "0000-09-14T00:00:00.000Z",
				height: 162,
				weight: 44,
				measurements: {
					bust: 76,
					waist: 53,
					hips: 77,
				},
				origin: "琦玉縣",
				like: "烏龍麵",
				trick: "鋼琴",
				hobby: "網球",
				leftHand: false,
				bloodtype: "A",
			})
			.expect(201, done);
	});

	it("should return an array of 2 idols for GET /mltd/v1/idols", (done) => {
		supertest(App)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(2);
				done();
			});
	});

	it("should return a correct idol for GET /mltd/v1/idols/14", (done) => {
		supertest(App)
			.get("/mltd/v1/idols/14")
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				expect(res.body).toEqual({
					id: 14,
					CV_jp: "山崎　はるか",
					CV_zh: "山崎遙",
					type: "Princess",
					age: 14,
					name_jp: "春日　未来",
					name_zh: "春日 未來",
					birthday: "0000-06-28T00:00:00.000Z",
					height: 156,
					weight: 42,
					measurements: {
						bust: 78,
						waist: 54,
						hips: 77,
					},
					origin: "東京都",
					like: "演唱會",
					trick: "唱歌",
					hobby: "蒐集可愛的髮夾",
					leftHand: false,
					bloodtype: "O",
				});
				done();
			});
	});

	it("should return a correct idol for GET /mltd/v1/idols/15", (done) => {
		supertest(App)
			.get("/mltd/v1/idols/15")
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				expect(res.body).toEqual({
					id: 15,
					CV_jp: "田所　あずさ",
					CV_zh: "田所梓",
					type: "Fairy",
					age: 14,
					name_jp: "最上　静香",
					name_zh: "最上 靜香",
					birthday: "0000-09-14T00:00:00.000Z",
					height: 162,
					weight: 44,
					measurements: {
						bust: 76,
						waist: 53,
						hips: 77,
					},
					origin: "琦玉縣",
					like: "烏龍麵",
					trick: "鋼琴",
					hobby: "網球",
					leftHand: false,
					bloodtype: "A",
				});
				done();
			});
	});

	it("should return 200 for DELETE /mltd/v1/idols/15", (done) => {
		supertest(App).delete("/mltd/v1/idols/15").expect(200, done);
	});

	it("should return an array of 1 idol for GET /mltd/v1/idols", (done) => {
		supertest(App)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(1);
				done();
			});
	});

	it("should return 200 for DELETE /mltd/v1/idols/14", (done) => {
		supertest(App).delete("/mltd/v1/idols/14").expect(200, done);
	});

	it("should return 404 for DELETE /mltd/v1/idols/14", (done) => {
		supertest(App).delete("/mltd/v1/idols/14").expect(404, done);
	});

	it("should return 404 for GET /mltd/v1/idols/15", (done) => {
		supertest(App).get("/mltd/v1/idols/15").expect(404, done);
	});

	it("should return an array of 0 idol for GET /mltd/v1/idols", (done) => {
		supertest(App)
			.get("/mltd/v1/idols")
			.expect(200)
			.end((err, res) => {
				if (err) done(err);
				expect(Array.isArray(res.body)).toBe(true);
				expect(res.body).toHaveLength(0);
				done();
			});
	});
});
