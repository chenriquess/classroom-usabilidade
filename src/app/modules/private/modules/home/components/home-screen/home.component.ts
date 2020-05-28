import { Component } from '@angular/core';
import { disciplinas } from '../../../../../../shared/models/variables';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  disciplinas;

  constructor() {
    this.disciplinas = this.getDisciplinas();
  }

  getBookmarkColor(cor: string) {
    return `border-right-color: ${ cor }; border-left-color: ${ cor }`;
  }


  getDisciplinas() {
    const formated = [];
    const lastIndex = disciplinas.length;
    let subArr = [];
    let counter = 1;

    for (let i = 0; i < disciplinas.length; i++) {
      if (counter <= 2) {
        subArr.push(disciplinas[i]);
        counter++;
      }
      if (counter > 2 || i === lastIndex - 1) {
        formated.push(subArr);
        subArr = [];
        counter = 1;
      }
    }

    return formated;
  }
}
