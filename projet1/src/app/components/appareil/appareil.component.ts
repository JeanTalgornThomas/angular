import { Component, Input, OnInit } from '@angular/core';
import { AppareilsService } from 'src/app/services/appareils.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareils: any;

  constructor(private appareilService: AppareilsService) { }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

}
