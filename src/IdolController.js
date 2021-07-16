import Idol from "./schema/Idol";

const IdolController = {
	getIdols: async (_, res) => {
		try {
			const idols = await Idol.find({});
			res.status(200).json(idols);
		} catch (err) {
			res.status(500).send(err);
		}
	},
	getIdol: async (req, res) => {
		try {
			let idol = await Idol.findOne({ _id: req.params.idolID });
			if (idol !== null) res.status(200).json(idol);
			else res.status(404).send(`idol ${req.params.idolID} not found`);
		} catch (err) {
			res.status(500).send(err);
		}
	},
	postIdol: async (req, res) => {
		try {
			const idol = await Idol.create(req.body);
			res.status(201).json(idol);
		} catch (err) {
			if (err.code === 11000) res.status(400).send("idol already exists");
			else res.status(500).send(err);
		}
	},
	deleteIdol: async (req, res) => {
		try {
			const result = await Idol.deleteOne({ _id: req.params.idolID });
			if (result.deletedCount === 1) res.status(200).send("success");
			else res.status(404).send(`idol ${req.params.idolID} not found`);
		} catch (err) {
			res.status(500).send(err);
		}
	},
};

export default IdolController;
