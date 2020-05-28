import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DisciplinaRoutingModule } from './disciplina-routing.module';



@NgModule({
  declarations: [DisciplinaComponent],
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    SharedModule
  ]
})
export class DisciplinaModule { }
