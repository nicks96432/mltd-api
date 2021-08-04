import { FastifyPluginCallback } from "fastify";
import mltd from "./mltd/";

const Routes: FastifyPluginCallback = (instance, _opts, done) => {
    instance.register(mltd, { prefix: "/mltd" });
    done();
};

export default Routes;
