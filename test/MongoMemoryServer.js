import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = new MongoMemoryServer();

export const connectMongodb = async () => {
	await mongod.start();
	const uri = mongod.getUri();
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

export const closeMongodb = async () => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongod.stop();
};

export const clearData = async () => {
	const collections = mongoose.connection.collections;
	for (const key in collections) await collections[key].deleteMany();
};
