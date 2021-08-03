export type JSONType =
    | null
    | boolean
    | number
    | string
    | JSONType[]
    | Record<string, JSONType>;

export interface Response {
    status: number;
    description: string;
    example?: object;
}
