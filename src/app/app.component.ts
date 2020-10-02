import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  isAuth = false;

  app1="Machine à laver";
  app2="Machine  kawa";
  app3="Sèche linge"

  constructor(){
    setTimeout( ()=>{this.isAuth =true;} , 3000 ); 
  }

  allOn(){
    console.log("Allumer les appareils");
  }
}
