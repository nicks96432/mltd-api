import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import App from "../src/App";
import "../src/config";

const mongod = new MongoMemoryServer();
let httpServer;

export const startServer = async () => {
	await mongod.start();
	const uri = mongod.getUri();
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	httpServer = App.listen(Math.floor(Math.random() * 48763) + 1000);
};

export const stopServer = async () => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongod.stop();
	httpServer.close();
};

export const clearData = async () => {
	const collections = mongoose.connection.collections;
	for (const key in collections) await collections[key].deleteMany();
};
