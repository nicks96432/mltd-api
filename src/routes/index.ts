import { FastifyPluginCallback } from "fastify";
import nextRoutes from "next-routes";
import mltd from "./mltd/";

export const DocRoutes = new nextRoutes().add({
    name: "index",
    pattern: "/",
    page: "index"
});

export const ApiRoutes: FastifyPluginCallback = (instance, _opts, done) => {
    instance.register(mltd, { prefix: "/mltd" });
    done();
};
