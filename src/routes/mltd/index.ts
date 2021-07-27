import { FastifyPluginCallback } from "fastify";
import v1 from "./v1";

const routes: FastifyPluginCallback = (instance, _opts, done) => {
	instance.register(v1, { prefix: "/v1" });
	instance.setNotFoundHandler((request, reply) =>
		reply.status(404).send(`${request.method} ${request.url} not found`)
	);
	done();
};

export default routes;
