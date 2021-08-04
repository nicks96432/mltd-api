export type DecDigit =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9";
export type HexLowerDigit = "a" | "b" | "c" | "d" | "e" | "f";
export type HexUpperDigit = "A" | "B" | "C" | "D" | "E" | "F";
export type HexCharLower = DecDigit | HexLowerDigit;
export type HexCharUpper = DecDigit | HexUpperDigit;

export type HexRGBColor =
    | `#${HexCharLower}${HexCharLower}${HexCharLower}`
    | `#${HexCharLower}${HexCharLower}${HexCharLower}${HexCharLower}${HexCharLower}${HexCharLower}`
    | `#${HexCharUpper}${HexCharUpper}${HexCharUpper}`
    | `#${HexCharUpper}${HexCharUpper}${HexCharUpper}${HexCharUpper}${HexCharUpper}${HexCharUpper}`;

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
    color: HexRGBColor;
}
