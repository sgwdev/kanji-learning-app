import { ReadingType } from "./reading-type.model";

export class Constants {
    static readonly onReading: Readonly<ReadingType> = new ReadingType(1, 'On');
    static readonly kunReading: Readonly<ReadingType> = new ReadingType(2, 'Kun');
    static get readingTypes() : Readonly<ReadingType>[] { return [this.onReading, this.kunReading] };  
}
