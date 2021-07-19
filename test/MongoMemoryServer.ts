import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import App from "../src/App";

const mongod = new MongoMemoryServer();

export const startServer = async () => {
	await mongod.start();
	const uri = mongod.getUri();
	mongoose.set("useCreateIndex", true);
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const app = new App("test");
	return app.listen(Math.floor(Math.random() * 48763) + 1000);
};

export const stopServer = async () => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongod.stop();
};

export const clearData = async () => {
	const collections = mongoose.connection.collections;
	for (const key in collections) await collections[key].deleteMany({});
};
