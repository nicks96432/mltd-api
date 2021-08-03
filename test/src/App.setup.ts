import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { IdolModel } from "../../src/models";
import idols from "./idols.json";

export const idolArray: any[] = [];
for (const idol of Object.values(idols)) idolArray.push(idol);

const mongod = new MongoMemoryServer();

export const setupMongoDB = async () => {
    await mongod.start();
    const uri = mongod.getUri();
    mongoose.set("useCreateIndex", true);
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await IdolModel.insertMany(idolArray);
};

export const closeMongoDB = async () => {
    try {
        await mongoose.connection.close();
        await mongod.stop(true);
    } catch (err) {
        console.error(err);
    }
};
