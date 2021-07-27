import mongoose from "mongoose";
import App from "./App";
import Config from "./Config";

mongoose.set("useCreateIndex", true);

mongoose.connection.once("open", async () => {
	console.log("connected to mongodb");
	try {
		await App.listen(Config.port, "0.0.0.0");
	} catch (err) {
		App.log.error(err);
		process.exit(1);
	}
});

mongoose.connect(Config.mongoUrl!, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
