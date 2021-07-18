import mongoose from "mongoose";
import App from "./App";
import config from "./config";

mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => {
	console.log("connected to mongodb");

	const PORT = process.env.PORT || 48763;

	App.listen(PORT, () => console.log(`Server is listening at port ${PORT}.`));
});
