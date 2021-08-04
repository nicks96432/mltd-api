import type { FastifyReply, FastifyRequest } from "fastify";
import type { Idol } from "../types";
import { IdolModel } from "../models";
import App from "../App";

export const IdolController = {
    getIdol: async (
        request: FastifyRequest<{ Params: { idolID: string } }>,
        reply: FastifyReply
    ) => {
        const idolID = request.params.idolID;
        const id = parseInt(idolID, 10);
        if (idolID === "") {
            await IdolController.getIdols(request, reply);
            return;
        } else if (!/^[1-9]\d*$/.test(idolID)) {
            reply
                .status(400)
                .send({ status: 400, message: `invalid idol ID: ${idolID}` });
            return;
        }
        try {
            let idol: Idol | null = await IdolModel.findOne(
                { id },
                { _id: false, __v: false }
            ).lean();
            if (idol !== null) reply.status(200).send(idol);
            else
                reply
                    .status(404)
                    .send({ status: 404, message: `idol ${id} not found` });
        } catch (err) {
            reply
                .status(500)
                .send({ status: 500, message: "server internal error" });
            App.log.error(err);
        }
    },
    getIdols: async (_req: FastifyRequest, reply: FastifyReply) => {
        try {
            const idols: Idol[] = await IdolModel.find(
                {},
                { _id: false, __v: false }
            )
                .lean()
                .sort({ id: 1 });
            reply.status(200).send(idols);
        } catch (err) {
            reply
                .status(500)
                .send({ status: 500, message: "server internal error" });
            App.log.error(err);
        }
    }
};
