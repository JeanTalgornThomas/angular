import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts = [
    {
      title: 'Travail en hauteur',
      content: 'Ce module présente différentes situations de travail en hauteur et les équipements qui peuvent y être rencontrés.',
      loveIts: 10,
      created_at: 'Tue May 25 2021 10:40:00'
    },
    {
      title: 'Portrait de Vincent',
      content: 'Encore cette histoire qui casse la tete',
      loveIts: 15,
      created_at: 'Tue May 25 2021 10:20:00'
    },
    {
      title: 'Semaine de la sécurité routière au travail',
      content: 'Dans le cadre de la semaine mondiale de la sécurité routière au travail, nous te partageons aujourd’hui une sensibilisation sur les risques routiers.',
      loveIts: 32,
      created_at: 'Wed May 19 2021 15:47:00'
    },
    {
      title: 'Une minute avec - Arthur',
      content: 'Aujourd’hui on passe notre toute première « Minute avec… » Arthur, consultant et membre de la Tribu depuis 2019.',
      loveIts: 36,
      created_at: 'Tue May 11 2021 09:12:00'
    },
    {
      title: 'Une nouvelle interface pour la plateforme digital learning',
      content: 'Votre plateforme digital learning évolue !',
      loveIts: 12,
      created_at: 'Mon May 10 2021 11:38:00'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
