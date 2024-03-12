import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/Constants';
import { Kanji } from 'src/app/shared/kanji.model';
import { ReadingType } from 'src/app/shared/reading-type.model';
import { Reading } from 'src/app/shared/reading.model';
import { CustomValidators } from '../custom-validators';
import { KanjiService } from '../kanji.service';

@Component({
  selector: 'app-new-kanji',
  templateUrl: './new-kanji.component.html',
  styleUrls: ['./new-kanji.component.css']
})
export class NewKanjiComponent implements OnInit {
  kanjiForm!: FormGroup;
  readingTypes = Constants.readingTypes;
  existingKanji = this.kanjiService.getKanjiList().map(k => k.character);

  constructor(private router: Router, private kanjiService: KanjiService){ }

  ngOnInit(): void {
    this.kanjiService.changed.subscribe(
      () => this.existingKanji = this.kanjiService.getKanjiList().map(k => k.character)
    ); 

    this.kanjiForm = new FormGroup({
      character: new FormControl(null, [Validators.required, CustomValidators.onlyOne(this.existingKanji)]),
      readings: new FormArray([
        new FormGroup({
          readingType: new FormControl(this.readingTypes[0].id),
          label: new FormControl(null)
        })
      ], [Validators.required, CustomValidators.atLeastOneReading])
    });
  }

  onAddReading(){
    (<FormArray>this.kanjiForm.get('readings')).push(
      new FormGroup({
        readingType: new FormControl(this.readingTypes[0].id),
        label: new FormControl(null)
      })
    );
  }

  getReadingControls(){
    return (this.kanjiForm.get('readings') as FormArray).controls;
  }

  onSubmit(){
    if(!this.kanjiForm.valid){
      return;
    }

    const readings: Reading[] = this.kanjiForm.value['readings'].filter(
        (x: {readingType: number, label: string}) => x.label != null && x.label.trim() != ''
      ).map(
        (x: {readingType: number, label: string}) => new Reading(null, Constants.readingTypes[x.readingType - 1], x.label)
    );

    let kanji = new Kanji(
      null,
      this.kanjiForm.value['character'],
      readings
    );
    
    this.kanjiService.addKanji(kanji);
    this.router.navigate(['/kanji', kanji.id]);
  }
}
