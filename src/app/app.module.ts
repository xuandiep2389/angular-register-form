import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RxJsComponent } from './rx-js/rx-js.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    RxJsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
