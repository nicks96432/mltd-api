import mongoose from "mongoose";

interface Idol {
	id: number;
	type: "Princess" | "Fairy" | "Angel" | "Guest";
	name_zh: string;
	name_jp: string;
	age: number;
	height: number;
	weight: number;
	birthday: Date;
	measurements: { bust: number; waist: number; hips: number };
	bloodtype: "A" | "B" | "O" | "AB";
	leftHand: boolean;
	origin: string;
	hobby: string;
	trick: string;
	like: string;
	CV_zh: string;
	CV_jp: string;
}

const IdolSchema = new mongoose.Schema<Idol>(
	{
		id: { type: Number, required: true, unique: true },
		type: { type: String, enum: ["Princess", "Fairy", "Angel", "Guest"], required: true },
		name_zh: { type: String, required: true, unique: true },
		name_jp: { type: String, required: true, unique: true },
		age: { type: Number, required: true },
		height: { type: Number, required: true },
		weight: { type: Number, required: true },
		birthday: { type: Date, required: true },
		measurements: {
			type: {
				bust: { type: Number, required: true },
				waist: { type: Number, required: true },
				hips: { type: Number, required: true },
			},
			required: true,
		},
		bloodtype: { type: String, enum: ["A", "B", "O", "AB"], required: true },
		leftHand: { type: Boolean, required: true },
		origin: { type: String, required: true },
		hobby: { type: String, required: true },
		trick: { type: String, required: true },
		like: { type: String, required: true },
		CV_zh: { type: String, required: true },
		CV_jp: { type: String, required: true },
	},
	{ strict: "throw" }
);

const IdolModel = mongoose.model<Idol>("Idol", IdolSchema);

export default IdolModel;
