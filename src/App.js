import express from "express";
import helmet from "helmet";
import IdolController from "./controller/IdolController";
import CardController from "./controller/CardController";
import "./config";

const App = express();

App.use(helmet({ contentSecurityPolicy: false }));
App.use(express.static(process.env.NODE_ENV === "production" ? "./static" : "./build/static"));

App.route("/mltd/v1/idols")
	.get(IdolController.getIdols)
	.post(express.json(), IdolController.postIdol);

App.route("/mltd/v1/idols/:idolID").get(IdolController.getIdol).delete(IdolController.deleteIdol);

App.get("/mltd/v1/cards", CardController.getCards);

export default App;
