import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  friendList;

  constructor() { }

  ngOnInit(): void {
    this.friendList = this.friendlistRecovery();
  }

  friendlistRecovery() {
    return [{
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'TURMA - USABILIDADE DE SISTEMAS DE INFORMAÇÃO',
      message: 'Gabriel Toledo: Sed ut...',
      status: '09:51',
    },
    {
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'TURMA - TESTES DE SOFTWARE',
      message: 'Fabrício Dias: sem aula...',
      status: 'Ontem',
    },
    {
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'TURMA - DESENVOLVIMENTO MOBILE 1',
      message: 'Daniel Abella: não',
      status: 'Ontem',
    },
    {
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'TURMA - DESENVOLVIMENTO MOBILE 2',
      message: 'Daniel Abella: não',
      status: 'Ontem',
    },
    {
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'TURMA - SISTEMAS DE INFORMAÇÃO',
      message: 'Carlos Herriot: Bom dia, turma!',
      status: 'Ontem',
    },
    {
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'Carlos Henrique',
      message: 'Continue estudando angular!',
      status: '01/06',
    },
    {
      photo: '../../../../../../../assets/images/profile-pictures/no_picture.png',
      name: 'Lucas Tiago',
      message: 'Tô ocupado, depois falo com você.',
      status: '01/06',
    }
    ]
  }

}
