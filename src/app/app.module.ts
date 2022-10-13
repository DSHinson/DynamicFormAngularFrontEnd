import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBaseComponent } from './Views/formBase/form-base/form-base.component';

//service abstractions
import { IFormGenerator } from 'src/Service/Abstraction/IFormGenerator';
import { IInputService } from 'src/Service/Abstraction/IInput.Service';

//service implementations
import { formGeneratorService } from 'src/Service/Implementation/formGenerator.service';
import { InputService } from 'src/Service/Implementation/Input.Service';
@NgModule({
  declarations: [
    AppComponent,
    FormBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:IInputService,useClass:InputService},
    {provide:IFormGenerator,useClass:formGeneratorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
