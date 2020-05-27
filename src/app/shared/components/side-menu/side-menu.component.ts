import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  disciplinas: any = [
    {
      cor: '#17987a',
      nome: 'Usabilidade',
      link: '/private/disciplinas/usabilidade'
    },
    {
      cor: '#6a00bd',
      nome: 'Sistemas de Informação',
      link: '/private/disciplinas/sistemas-informacao'
    },
    {
      cor: '#1b03ff',
      nome: 'Testes',
      link: '/private/disciplinas/dev-mobile'
    },
    {
      cor: '#bcbd00',
      nome: 'Mobile',
      link: '/private/disciplinas/dev-web'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  /*mouseEnter($event) {
    console.log('enter:', $event);
    $event.target.style.width = '200px';
  }

  mouseLeave($event) {
    console.log('leave:', $event);
    $event.target.style.width = 'auto';
  }*/
}
