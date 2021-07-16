import mongoose from "mongoose";
import App from "./App";
import http from "http";

if (!process.env.MONGO_URL) {
	console.log("Missing MONGO_URL.");
	process.exit(1);
}
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => {
	console.log("connected");

	const PORT = process.env.PORT || 48763;

	const httpServer = http.createServer(App);

	httpServer.listen(PORT, () => console.log(`Server is listening at port ${PORT}.`));
});
