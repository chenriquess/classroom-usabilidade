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
      nome: 'lorem ipsum',
      link: '/private/home'
    },
    {
      cor: '#6a00bd',
      nome: 'lorem ipsum',
      link: '/other'
    },
    {
      cor: '#1b03ff',
      nome: 'lorem ipsum',
      link: '/other'
    },
    {
      cor: '#bcbd00',
      nome: 'lorem ipsum',
      link: '/other'
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
