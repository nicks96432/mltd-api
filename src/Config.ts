import dotenv from "dotenv";
import Joi from "joi";
import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);

if (process.env.NODE_ENV !== "production") {
	dotenv.config({ path: process.env.NODE_ENV === "test" ? "./.env.test" : "./.env" });
}

const { error, value } = Joi.object()
	.keys({
		NODE_ENV: Joi.string().valid("production", "development", "test").required(),
		PORT: Joi.number().positive().default(48763),
		MONGO_URL: Joi.string().required(),
		PUBLIC_KEY: Joi.string().required(),
		PRIVATE_KEY: Joi.string().required(),
	})
	.unknown()
	.required()
	.validate(process.env);

if (error) throw new Error(`config validation failed: ${error.message}`);

const config = {
	nodeEnv: value.NODE_ENV,
	mongoUrl: value.MONGO_URL,
	port: value.PORT,
	publicKey: value.PUBLIC_KEY,
	privateKey: value.PRIVATE_KEY,
};

export default config;
