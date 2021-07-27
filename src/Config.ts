import Joi from "joi";
import dotenv from "dotenv";
import type { Config } from "./types";

if (process.env.NODE_ENV !== "production") dotenv.config();

const env = {
	nodeEnv: process.env.NODE_ENV,
	mongoUrl: process.env.MONGO_URL,
	port: process.env.PORT,
};

let schema: any = {
	nodeEnv: Joi.string().valid("production", "development", "test").required(),
	port: Joi.number().positive().default(48763),
};
if (process.env.NODE_ENV !== "test") schema.mongoUrl = Joi.string().required();

let { error, value } = Joi.object().keys(schema).unknown().required().validate(env);

if (error) throw new Error(`config validation failed: ${error.message}`);

const config: Config = {
	nodeEnv: value.nodeEnv,
	mongoUrl: value.mongoUrl,
	port: value.port,
};

export default config;
