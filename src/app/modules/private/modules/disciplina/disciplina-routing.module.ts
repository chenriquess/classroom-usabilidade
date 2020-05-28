import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';


const routes: Routes = [
  {
    path: ':id',
    component: DisciplinaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule {
}
