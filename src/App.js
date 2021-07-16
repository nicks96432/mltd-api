import express from "express";
import IdolController from "./IdolController";
import helmet from "helmet";

const App = express();

App.use(
	helmet({
		contentSecurityPolicy: false,
	})
);
App.use(express.static("./static"));

App.get("/mltd/v1/events", (_, res) => res.send("test"));

App.get("/mltd/v1/cards", (_, res) => res.send("ㄐㄐ"));

App.get("/mltd/v1/idols", IdolController.getIdols);

App.post("/mltd/v1/idols", express.json(), IdolController.postIdol);

App.get("/mltd/v1/idols/:idolID", IdolController.getIdol);

App.delete("/mltd/v1/idols/:idolID", IdolController.deleteIdol);

export default App;
