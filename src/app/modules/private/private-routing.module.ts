import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';


const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'disciplina',
        loadChildren: () => import('./modules/disciplina/disciplina.module').then(m => m.DisciplinaModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'atividades',
        loadChildren: () => import('./modules/atividades/atividades.module').then(m => m.AtividadesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
