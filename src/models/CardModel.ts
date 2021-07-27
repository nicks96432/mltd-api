import mongoose from "mongoose";
import type { Card } from "../types";

const CardSchema = new mongoose.Schema<Card>({
	// TODO: 定義cardSchema
});

export const CardModel = mongoose.connection
	.useDb("MLTD")
	.model<Card>("Card-zh", CardSchema, "Card-zh");
