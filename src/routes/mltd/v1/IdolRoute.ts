import { FastifyInstance } from "fastify";
import { IdolController } from "../../../controllers";

const IdolRoute = (app: FastifyInstance) =>
    app
        .all("/idols", IdolController.getIdols)
        .all("/idols/:idolID", IdolController.getIdol);

export default IdolRoute;
