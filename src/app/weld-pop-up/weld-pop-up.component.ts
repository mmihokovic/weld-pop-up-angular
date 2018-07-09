import { Component, OnInit, Input} from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'weld-pop-up',
  templateUrl: './weld-pop-up.component.html',
  styleUrls: ['./weld-pop-up.component.css']
})
export class WeldPopUpComponent{
    shown: boolean = false;

    open (content: string): void{
        this.shown = true;
    }

    close(): void{
        this.shown = false;
    }

}