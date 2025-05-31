import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaComponent } from './resultado-busqueda.component';

describe('ResultadoBusquedaComponent', () => {
  let component: ResultadoBusquedaComponent;
  let fixture: ComponentFixture<ResultadoBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
