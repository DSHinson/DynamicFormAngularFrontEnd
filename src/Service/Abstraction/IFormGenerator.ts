import { FormGroup } from "@angular/forms";
import { dynamicInputModel } from "src/Model/dynamicInput.model";

export abstract class IFormGenerator{

    abstract toFormGroup (questions: dynamicInputModel<string>[] ) : FormGroup;
}