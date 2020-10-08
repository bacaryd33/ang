import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styles: [
  ]
})
export class PostListComponentComponent implements OnInit {

  @Input() list: Array<String>;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(value): string{
    if (value === 1){
      return "green";
    }else{
      if(value=== -1){
        return "red";
      }
      else{
        return "grey";
      }
    }
  }
}
