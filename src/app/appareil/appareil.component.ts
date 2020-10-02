import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styles: [
  ]
})
export class AppareilComponent implements OnInit {

  appareilName: string = "Machine à laver";
  appareilStatus: string = "OFF";

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
}
