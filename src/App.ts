import Next from "next";
import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifyHelmet from "fastify-helmet";
import fastifyCompress from "fastify-compress";
import fastifyRateLimit from "fastify-rate-limit";
import Routes from "./routes";
import Config from "./Config";

const dev = Config.nodeEnv !== "production";
const test = Config.nodeEnv === "test";

const App = fastify({
    logger: {
        level: test ? "error" : "info",
        prettyPrint: { colorize: dev },
        file: dev ? undefined : "./fastify.log"
    },
    pluginTimeout: 20000
});

App.register(async (instance, _opts, done) => {
    const app = Next({ dev });
    const handler = app.getRequestHandler();
    await app.prepare();
    try {
        instance
            .all("/*", async (request, reply) => {
                handler(request.raw, reply.raw);
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
    .register(fastifyCompress, {
        encodings: ["br", "gzip", "deflate", "identity"]
    })
    .register(Routes)
    .register(fastifyRateLimit, {
        max: 5000,
        ban: 500000,
        timeWindow: 60000,
        allowList: ["0.0.0.0"],
        cache: 10000
    });

export default App;
