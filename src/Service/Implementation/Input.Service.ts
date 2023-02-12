import { dynamicInputModel } from "src/Model/dynamicInput.model";
import { IInputService } from "../Abstraction/IInput.Service";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InputService implements IInputService {

  constructor(private http: HttpClient) { }

  getQuestions():Observable< Array<dynamicInputModel<string | null>>> {
   return this.http.get<Array<dynamicInputModel<string | null>>>('./assets/testData.json')
      .pipe(
        map(data => {
          return data.map(item => new dynamicInputModel(item))
        })
      )
  }

}