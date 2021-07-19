import { Request, Response } from "express";
import escape from "escape-html";
import IdolModel from "../model/IdolModel";

const IdolController = {
	getIdol: async (req: Request, res: Response) => {
		try {
			let idol = await IdolModel.findOne(
				{ id: parseInt(req.params.idolID) },
				{ _id: false, __v: false }
			);
			if (idol !== null) res.status(200).json(idol);
			else res.status(404).send(`idol ${escape(req.params.idolID)} not found`);
		} catch (err) {
			res.status(500).send("server internal error");
			console.error(err);
		}
	},
	getIdols: async (_req: Request, res: Response) => {
		try {
			const idols = await IdolModel.find({}, { _id: false, __v: false });
			res.status(200).json(idols);
		} catch (err) {
			res.status(500).send("server internal error");
			console.error(err);
		}
	},
	postIdol: async (req: Request, res: Response) => {
		try {
			const idol = (await IdolModel.create(req.body)).toObject();
			delete idol.__v;
			delete idol._id;
			res.status(201).json(idol);
		} catch (err) {
			if (err.code === 11000) res.status(400).send("idol already exists");
			else {
				res.status(500).send("server internal error");
				console.error(err);
			}
		}
	},
	deleteIdol: async (req: Request, res: Response) => {
		try {
			const result = await IdolModel.deleteOne({ id: parseInt(req.params.idolID) });
			if (result.deletedCount === 1) res.status(200).send("success");
			else
				res.status(404)
					.header("Content-Type", "text/plain")
					.send(`idol ${escape(req.params.idolID)} not found`);
		} catch (err) {
			res.status(500).send("server internal error");
			console.error(err);
		}
	},
};

export default IdolController;
