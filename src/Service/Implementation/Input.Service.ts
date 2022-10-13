import { dynamicInputModel } from "src/Model/dynamicInput.model";
import { IInputService } from "../Abstraction/IInput.Service";

export class InputService implements IInputService{

    questions:Array< dynamicInputModel<string|null>> = [];

    getQuestions(): Array< dynamicInputModel<string|null>> {
        
        this.questions.push(new dynamicInputModel({
            key: 'braveRating',
            label: 'Bravery Rating',
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            type:"Select",
            required: true,
            value: '',
            order: 3
          }),
    
          new dynamicInputModel({
            key: 'firstName',
            label: 'First name',
            type:"Text",
            value: '',
            required: true,
            order: 1
          }),
          new dynamicInputModel({
            key: 'Gender',
            label: 'Gender',
            value: '',
            type:"Select",
            options: [
              {key: 'Male',  value: 'Male'},
              {key: 'Female',  value: 'Female'},
            ],
            order: 4
          }),
    
          new dynamicInputModel({
            key: 'emailAddress',
            label: 'Email',
            type: 'email',
            order: 2
          }));

          return this.questions;
    }
 
}