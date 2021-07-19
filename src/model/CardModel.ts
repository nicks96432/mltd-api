import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
	// TODO: 定義cardSchema
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
