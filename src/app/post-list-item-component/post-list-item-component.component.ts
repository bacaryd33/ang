import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styles: [
  ]
})
export class PostListItemComponentComponent implements OnInit {
  
  @Input() title: String;
  @Input() content: String;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit(): void {
  }
  
  SetLike(newvalue): number {
    if(this.loveIts !== newvalue){
      this.loveIts = newvalue;
    }else{
      return newvalue;
    }
  }
}