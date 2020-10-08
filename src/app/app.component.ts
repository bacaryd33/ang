import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve,reject) => {
    const date = new Date();
    setTimeout( () => {
      resolve(date);
    },
    2000);
  });
  title = "Angular Mini Thread"
  list =[
      {  
        title: "Mon premier post",  
        content: "Lorem Ipsum",  
        loveIts: null,  
        created_at: new Date()
      },
      {  
        title: "Mon second post",  
        content: "Lorem Ipsum",  
        loveIts: null,  
        created_at: new Date()
      },
      {  
        title: "Mon troisième post",  
        content: "Lorem Ipsum",  
        loveIts: null,  
        created_at: new Date()
      },
   ]; 
  appon="ON";
  appoff="OFF";
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
