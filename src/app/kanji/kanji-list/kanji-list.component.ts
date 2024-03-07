import { Component, OnInit } from '@angular/core';
import { Kanji } from 'src/app/shared/kanji.model';
import { KanjiService } from '../kanji.service';

@Component({
  selector: 'app-kanji-list',
  templateUrl: './kanji-list.component.html',
  styleUrls: ['./kanji-list.component.css']
})
export class KanjiListComponent implements OnInit {
  kanjiList: Kanji[] = []

  constructor(private kanjiService: KanjiService){
    this.kanjiList = kanjiService.getKanjiList();
  }

  ngOnInit(): void {
    this.kanjiService.changed.subscribe(() => {
      this.kanjiList = this.kanjiService.getKanjiList();
    });
  }
}
