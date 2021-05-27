import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() posts: any;

  constructor() {
    this.title = '';
    this.content = '';
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit(): void {
  }

}
