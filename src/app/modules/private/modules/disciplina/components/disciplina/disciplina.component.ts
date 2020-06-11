import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent {

  constructor(private toastr: ToastrService) {}

  compartilhadoSucesso() {
    this.toastr.success('Compartilhado com sucesso!');
  }

}
