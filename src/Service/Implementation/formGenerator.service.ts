import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dynamicInputModel } from 'src/Model/dynamicInput.model';
import { IFormGenerator } from 'src/Service/Abstraction/IFormGenerator';


@Injectable()
export class formGeneratorService implements IFormGenerator
{

    constructor()
    {}

    toFormGroup(questions: dynamicInputModel<string>[] ) {
        const group: any = {};
    
        questions.forEach(question => {
          group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                  : new FormControl(question.value || '');
        });
        return new FormGroup(group);
      }
}