import mongoose from "mongoose";
import type { Idol } from "../types";

const IdolSchema = new mongoose.Schema<Idol>(
    {
        id: { type: Number, required: true, unique: true },
        type: {
            type: String,
            enum: ["Princess", "Fairy", "Angel", "Ex"],
            required: true
        },
        name: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        height: { type: Number, required: true },
        weight: { type: Number, required: true },
        birthday: { type: Date, required: true },
        measurements: {
            type: {
                bust: { type: Number, required: true },
                waist: { type: Number, required: true },
                hips: { type: Number, required: true }
            },
            required: true
        },
        bloodtype: {
            type: String,
            enum: ["A", "B", "O", "AB"],
            required: true
        },
        leftHand: { type: Boolean, required: true },
        origin: { type: String, required: true },
        hobby: { type: String, required: true },
        trick: { type: String, required: true },
        like: { type: String, required: true },
        CV: { type: String, required: true }
    },
    { strict: "throw" }
);

export const IdolModel = mongoose.connection
    .useDb("MLTD")
    .model<Idol>("Idol-zh", IdolSchema, "Idol-zh");
