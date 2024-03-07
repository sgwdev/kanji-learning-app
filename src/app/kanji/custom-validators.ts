import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    static atLeastOneReading(controlArray: FormArray) : {[s: string]: boolean} | null {        
        let valid = controlArray.controls.some((element) => {
          let label = element.get('label')?.value;
          return (label != null && label.trim() != '');
        });
    
        return valid ? null : {'atLeastOneReading': true};
    }

    static onlyOne (existingValues: string[]): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const alreadyExists = existingValues.some((element) => {
          return control.value != null && control.value.trim() == element;
        });

        return alreadyExists ? {'alreadyExists': true} : null;
      };
    }
}
