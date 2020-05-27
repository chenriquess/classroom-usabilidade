import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ContainerPadraoComponent } from './components/container-padrao/container-padrao.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    ContainerPadraoComponent
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    ContainerPadraoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
