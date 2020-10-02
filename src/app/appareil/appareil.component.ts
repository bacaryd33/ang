import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styles: [
  ]
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  appareilStatus: string = "OFF";

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
}
