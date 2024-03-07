import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Constants } from "../shared/Constants";
import { Kanji } from "../shared/kanji.model";
import { ReadingType } from "../shared/reading-type.model";
import { Reading } from "../shared/reading.model";

@Injectable({
    providedIn: 'root'
})
export class KanjiService{
    onReading = Constants.readingTypes[0];
    kunReading = Constants.readingTypes[1];
    changed = new Subject<void>();
    
    private kanji: Kanji[] = [];

    getKanjiList(){
        return this.kanji.slice();
    }

    getKanji(id: number){
        return this.kanji.find(k => k.id == id) as Kanji;
    }

    addKanji(kanji: Kanji){
        kanji.id = this.kanji.length + 1;
        this.kanji.push(kanji);
        this.changed.next();
    }

    updateKanji(kanji: Kanji){
        let savedKanji = this.kanji.find(k => k.id == kanji.id);
        if(savedKanji){
            savedKanji.readings = kanji.readings;
        }
    }
}
