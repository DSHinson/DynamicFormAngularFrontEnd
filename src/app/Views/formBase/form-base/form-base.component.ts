import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { dynamicInputModel } from 'src/Model/dynamicInput.model';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent implements OnInit {

  @Input() question!: dynamicInputModel<string | null>;
  @Input() form!: FormGroup;
  get isValid() {
     return this.form.controls[this.question.key]!.valid; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
