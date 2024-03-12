import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kanji } from 'src/app/shared/kanji.model';
import { KanjiService } from '../kanji.service';

@Component({
  selector: 'app-kanji-detail',
  templateUrl: './kanji-detail.component.html',
  styleUrls: ['./kanji-detail.component.css']
})
export class KanjiDetailComponent {
  kanji: Kanji;

  constructor(private route: ActivatedRoute, private kanjiService: KanjiService){
    const id = +this.route.snapshot.params['id'];
    
    this.kanji = this.kanjiService.getKanji(id);
  }
}
