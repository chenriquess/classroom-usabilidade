import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesRecentesComponent } from './atividades-recentes.component';

describe('AtividadesRecentesComponent', () => {
  let component: AtividadesRecentesComponent;
  let fixture: ComponentFixture<AtividadesRecentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesRecentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
