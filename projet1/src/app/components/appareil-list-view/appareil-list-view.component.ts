import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-list-view',
  templateUrl: './appareil-list-view.component.html',
  styleUrls: ['./appareil-list-view.component.css']
})
export class AppareilListViewComponent implements OnInit {

  @Input() titre: string;
  @Input() status: string;
  @Input() date: Date;

  constructor() {
    this.titre = '';
    this.status = '';
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  getStatus(valeur?: any) {
    if(valeur == true) {
      this.status = 'Allumé';
    }
    if(valeur == false) {
      this.status = 'Eteint';
    }
  }

}
