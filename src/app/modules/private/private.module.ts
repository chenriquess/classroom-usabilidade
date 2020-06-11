import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { AtividadesRecentesComponent } from './modules/components/atividades-recentes/atividades-recentes/atividades-recentes.component';


@NgModule({
  declarations: [
    PrivateComponent,
    AtividadesRecentesComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule {
}
