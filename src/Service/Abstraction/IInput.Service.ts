import { dynamicInputModel } from "src/Model/dynamicInput.model";

export abstract class IInputService{
    
  abstract  getQuestions(): Array<dynamicInputModel<string|null>>;
}