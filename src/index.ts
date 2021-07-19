import mongoose from "mongoose";
import App from "./App";
import Config from "./Config";

mongoose.connect(Config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => {
	console.log("connected to mongodb");

	const app = new App(Config.nodeEnv);
	app.listen(Config.port, () => console.log(`Server is listening at port ${Config.port}.`));
});
