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
      },
      {
        img: '../../../../../../../assets/images/cards/book_card.jpg',
        titulo: 'Lorem Ipsum',
      },
      {
        img: '../../../../../../../assets/images/cards/book2_card.jpg',
        titulo: 'Lorem Ipsum',
      }
    ],
    [
      {
        img: '../../../../../../../assets/images/cards/science_card.jpg',
        titulo: 'Lorem Ipsum',
      },
      {
        img: '../../../../../../../assets/images/cards/book_card.jpg',
        titulo: 'Lorem Ipsum',
      },
      {
        img: '../../../../../../../assets/images/cards/book2_card.jpg',
        titulo: 'Lorem Ipsum',
      }
    ]
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
