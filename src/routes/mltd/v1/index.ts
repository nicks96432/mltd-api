import { FastifyPluginCallback } from "fastify";
import IdolRoute from "./IdolRoute";

const routes: FastifyPluginCallback = (instance, _opts, done) => {
    IdolRoute(instance);
    done();
};

export default routes;
