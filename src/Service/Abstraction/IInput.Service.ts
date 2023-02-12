import { Observable } from "rxjs";
import { dynamicInputModel } from "src/Model/dynamicInput.model";

export abstract class IInputService{
    
  abstract  getQuestions(): Observable<Array<dynamicInputModel<string|null>>>;
}