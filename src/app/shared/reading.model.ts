import { ReadingType } from "./reading-type.model";

export class Reading{
    constructor(public id: number | null, public readingType: ReadingType, public label: string){}
}
