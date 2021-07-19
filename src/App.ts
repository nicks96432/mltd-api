import express, { Express } from "express";
import { Server } from "http";
import helmet from "helmet";
import IdolController from "./controller/IdolController";
import CardController from "./controller/CardController";

class App {
	private app: Express;

	constructor(nodeEnv: string = "production") {
		this.app = express();

		this.app.use(helmet({ contentSecurityPolicy: false }));
		this.app.use(express.static(nodeEnv === "production" ? "./static" : "./build/static"));

		this.app
			.route("/mltd/v1/idols")
			.get(IdolController.getIdols)
			.post(express.json(), IdolController.postIdol);

		this.app
			.route("/mltd/v1/idols/:idolID")
			.get(IdolController.getIdol)
			.delete(IdolController.deleteIdol);

		this.app.get("/mltd/v1/cards", CardController.getCards);
	}

	public listen = (port: number, callback?: () => void): Server =>
		this.app.listen(port, callback);
}

export default App;
