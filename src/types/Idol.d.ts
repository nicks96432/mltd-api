export interface Idol {
    id: number;
    type: "Princess" | "Fairy" | "Angel" | "Ex";
    name: string;
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
    CV: string;
    color: string;
}
