import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
    this.title = '';
    this.content = '';
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit(): void {
  }

  jaimepas() {
    this.loveIts--;
  }

  jaime() {
    this.loveIts++;
  }

}
