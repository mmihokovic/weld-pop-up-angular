import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {WeldPopUpComponent} from './weld-pop-up/weld-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WeldPopUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
