import { Component, ViewChild } from '@angular/core';

import {WeldPopUpComponent} from './weld-pop-up/weld-pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("weldPopUp")
  private weldPopUpComponent : WeldPopUpComponent;

  openPopup():void{
    this.weldPopUpComponent.open("bla");
  }
}
