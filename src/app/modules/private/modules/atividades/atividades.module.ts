import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AtividadesRoutingModule } from './atividades-routing.module';
import { AtividadesComponent } from './components/atividades/atividades.component';



@NgModule({
  declarations: [AtividadesComponent],
  imports: [
    CommonModule,
    AtividadesRoutingModule,
    SharedModule
  ]
})
export class AtividadesModule { }
