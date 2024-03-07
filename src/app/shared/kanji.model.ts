import { Reading } from "./reading.model";

export class Kanji{
    constructor(public id: number | null, public character: string, public readings: Reading[]){}
}
