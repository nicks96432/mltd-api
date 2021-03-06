import { FastifyPluginCallback } from "fastify";
import v1 from "./v1";

const Routes: FastifyPluginCallback = (instance, _opts, done) => {
    instance.register(v1, { prefix: "/v1" });
    done();
};

export default Routes;
