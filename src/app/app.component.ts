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
  app3="Sèche linge";

  appareils = [
    {
      name:'Frigo',
      status:'OFF'
    },
    {
      name:'Machine à laver',
      status:'ON'
    },
    {
      name:'Mixeur',
      status:'OFF'
    },
    {
      name:'Sèche-linge',
      status:'ON'
    },
  ]

  constructor(){
    setTimeout( ()=>{this.isAuth =true;} , 3000 ); 
  }

  allOn(){
    console.log("Allumer les appareils");
  }
}
