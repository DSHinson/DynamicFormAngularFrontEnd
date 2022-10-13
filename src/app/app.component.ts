import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IInputService } from 'src/Service/Abstraction/IInput.Service';
import { IFormGenerator } from 'src/Service/Abstraction/IFormGenerator'; 
import { dynamicInputModel } from 'src/Model/dynamicInput.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() questions: dynamicInputModel<string|null>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private InputService:IInputService,private FormGenerator:IFormGenerator)
  {

  }

  title = 'testApp';
  ngOnInit() {
    this.questions = this.InputService.getQuestions();
    this.form = this.FormGenerator.toFormGroup(this.questions as dynamicInputModel<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
