import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/shared/Constants';
import { Kanji } from 'src/app/shared/kanji.model';
import { ReadingType } from 'src/app/shared/reading-type.model';
import { Reading } from 'src/app/shared/reading.model';
import { CustomValidators } from '../custom-validators';
import { KanjiService } from '../kanji.service';

@Component({
  selector: 'app-kanji-edit',
  templateUrl: './kanji-edit.component.html',
  styleUrls: ['./kanji-edit.component.css']
})
export class KanjiEditComponent {
  kanjiForm!: FormGroup;
  readingTypes: ReadingType[] = Constants.readingTypes;
  kanji: Kanji;

  constructor(private kanjiService: KanjiService){
    const id = 1;
    this.kanji = kanjiService.getKanji(id);
  }

  ngOnInit(): void {
    this.kanjiForm = new FormGroup({
      readings: new FormArray(
        this.kanji.readings.map(
          (r:Reading) => new FormGroup({
            id: new FormControl(r.id),
            readingType: new FormControl(r.readingType.id),
            label: new FormControl(r.label)
          })
        ), [Validators.required, CustomValidators.atLeastOneReading]
      )
    }); 
  }

  onAddReading(){
    (<FormArray>this.kanjiForm.get('readings')).push(
      new FormGroup({
        id: new FormControl(null),
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
        (r: {id: number, readingType: number, label: string}) => r.label != null && r.label.trim() != ''
      ).map(
        (r: {id: number, readingType: number, label: string}) => new Reading(r.id, Constants.readingTypes[r.readingType - 1], r.label)
    );

    this.kanji.readings = readings;
    this.kanjiService.updateKanji(this.kanji);
  }
}
