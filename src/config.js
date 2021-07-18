import Joi from "joi";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
	dotenv.config({ path: process.env.NODE_ENV === "test" ? "./.env.test" : "./.env" });
}

const keys = {
	PORT: Joi.number(),
	SESSION_SECRET: Joi.string().required(),
};

if (process.env.NODE_ENV !== "test") keys.MONGO_URL = Joi.string().required();

const dotenvSchema = Joi.object().keys(keys).unknown().required();

const { error, value } = dotenvSchema.validate(process.env);

if (error) throw new Error(`dotenv validation failed: ${error.message}`);

const config = {
	port: value.PORT,
	mongoUrl: value.MONGO_URL,
	sessionSecret: value.SESSION_SECRET,
};

export default config;
