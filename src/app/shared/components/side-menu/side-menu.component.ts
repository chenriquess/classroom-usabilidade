import { Component, OnInit } from '@angular/core';
import { disciplinas } from '../../models/variables';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  disciplinas = disciplinas;
}
