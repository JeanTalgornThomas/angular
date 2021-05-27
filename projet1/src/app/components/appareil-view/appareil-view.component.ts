import { Component, Input, OnInit } from '@angular/core';
import { AppareilsService } from 'src/app/services/appareils.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  @Input() titre: string;
  @Input() status: string;
  @Input() date: Date;
  @Input() appareils: any;

  constructor(private appareilService: AppareilsService) {
    this.titre = '';
    this.status = '';
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
      return true;
    } else {
      return null;
    }
  }

}
