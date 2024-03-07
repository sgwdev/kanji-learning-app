import { Component, Input } from '@angular/core';
import { Kanji } from 'src/app/shared/kanji.model';
import { KanjiService } from '../kanji.service';

@Component({
  selector: 'app-kanji-detail',
  templateUrl: './kanji-detail.component.html',
  styleUrls: ['./kanji-detail.component.css']
})
export class KanjiDetailComponent {
  kanji: Kanji;

  constructor(private kanjiService: KanjiService){
    const id = 1;
    this.kanji = kanjiService.getKanji(id);
  }
}
