import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMultasComponent } from './lista-multas.component';

describe('ListaMultasComponent', () => {
  let component: ListaMultasComponent;
  let fixture: ComponentFixture<ListaMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
