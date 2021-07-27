import Next from "next";
import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifyHelmet from "fastify-helmet";
import fastifyCompress from "fastify-compress";
import fastifyRateLimit from "fastify-rate-limit";
import Config from "./Config";
import routes from "./routes";

const dev = Config.nodeEnv !== "production";
const test = Config.nodeEnv === "test";

const App = fastify({
	logger: {
		level: test ? "error" : "info",
		prettyPrint: { colorize: dev },
		// TODO: 等fastify更新再uncomment這行
		// file: dev ? undefined : "./fastify.log",
	},
});

App.register(async (instance, _opts, done) => {
	const app = Next({ dev });
	const handler = app.getRequestHandler();
	try {
		await app.prepare();
		instance
			.get("/_next/*", async (request, reply) => {
				await handler(request.raw, reply.raw);
				reply.sent = true;
			})
			.all("/", async (request, reply) => {
				await handler(request.raw, reply.raw);
				reply.sent = true;
			})
			.setNotFoundHandler(async (request, reply) => {
				await app.render404(request.raw, reply.raw);
				reply.sent = true;
			});
		done();
	} catch (err) {
		done(err);
	}
});

App.register(fastifyCors)
	.register(fastifyHelmet, { contentSecurityPolicy: false })
	.register(fastifyCompress, { encodings: ["br", "gzip", "deflate", "identity"] })
	.register(routes)
	.register(fastifyRateLimit, {
		max: 5000,
		ban: 500000,
		timeWindow: 60000,
		allowList: ["127.0.0.1"],
		cache: 10000,
	});

export default App;
