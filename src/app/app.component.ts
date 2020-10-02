import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  isAuth = false;

  constructor(){
    setTimeout( ()=>{this.isAuth =true;} , 3000 ); 
  }

  allOn(){
    console.log("Allumer les appareils");
  }
}
