import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atividades-recentes',
  templateUrl: './atividades-recentes.component.html',
  styleUrls: ['./atividades-recentes.component.scss']
})
export class AtividadesRecentesComponent implements OnInit {
  listaCards;
  constructor() {
    this.listaCards = this.preencherDisciplinas();
  }

  ngOnInit(): void {
  }

  preencherDisciplinas() {
    return [
      {
        disciplina: 'Usabilidade de SI',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        dataEntrega: '10/06/2020',
        cor: '#17987a'
      },
      {
        disciplina: 'Sistemas de Informação',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        dataEntrega: '10/06/2020',
        cor: '#6a00bd'
      },
      {
        disciplina: 'Testes de Software',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        dataEntrega: '10/06/2020',
        cor: '#1b03ff'
      },
      {
        disciplina: 'Desenvolvimento Mobile',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        dataEntrega: '10/06/2020',
        cor: '#bcbd00'
      },
      {
        disciplina: 'Desenvolvimento Mobile 2',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        dataEntrega: '10/06/2020',
        cor: '#1bca67'
      }
    ];
  }

  getBookmarkColor(cor: string) {
    return `border-right-color: ${ cor }; border-left-color: ${ cor }`;
  }

}
