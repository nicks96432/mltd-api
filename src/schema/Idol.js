import mongoose from "mongoose";

const idolSchema = new mongoose.Schema(
	{
		_id: { type: Number, required: true },
		type: { type: String, enum: ["Princess", "Fairy", "Angel"], required: true },
		name_zh: { type: String, required: true, dropDups: true },
		name_jp: { type: String, required: true, dropDups: true },
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

idolSchema.set("toJSON", {
	transform: (_, ret) => {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
	},
});

const Idol = mongoose.model("Idol", idolSchema);

export default Idol;
