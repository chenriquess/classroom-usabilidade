import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    [
      {
        img: '../../../../../../../assets/images/cards/science_card.jpg',
        titulo: 'Lorem Ipsum',
        cor: '#17987a'
      },
      {
        img: '../../../../../../../assets/images/cards/book_card.jpg',
        titulo: 'Lorem Ipsum',
        cor: '#6a00bd'
      }
    ],
    [
      {
        img: '../../../../../../../assets/images/cards/science_card.jpg',
        titulo: 'Lorem Ipsum',
        cor: '#1b03ff'
      },
      {
        img: '../../../../../../../assets/images/cards/book_card.jpg',
        titulo: 'Lorem Ipsum',
        cor: '#bcbd00'
      }
    ]
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getBookmarkColor(cor: string) {
    return `border-right-color: ${ cor }; border-left-color: ${ cor }`;
  }
}
