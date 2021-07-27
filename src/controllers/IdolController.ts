import { FastifyReply, FastifyRequest } from "fastify";
import { IdolModel } from "../models";

export const IdolController = {
	getIdol: async (
		request: FastifyRequest<{ Params: { idolID: number } }>,
		reply: FastifyReply
	) => {
		try {
			let idol = await IdolModel.findOne(
				{ id: request.params.idolID },
				{ _id: false, __v: false }
			);
			if (idol !== null) reply.status(200).send(idol);
			else reply.status(404).send(`idol ${request.params.idolID} not found`);
		} catch (err) {
			reply.status(500).send("server internal error");
			console.error(err);
		}
	},
	getIdols: async (_req: FastifyRequest, reply: FastifyReply) => {
		try {
			const idols = await IdolModel.find({}, { _id: false, __v: false }).sort({ id: 1 });
			reply.status(200).send(idols);
		} catch (err) {
			reply.status(500).send(err);
			console.error(err);
		}
	},
};
