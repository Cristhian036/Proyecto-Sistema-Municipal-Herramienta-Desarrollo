import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiasComponent } from './listar-noticias.component';

describe('ListarNoticiasComponent', () => {
  let component: ListarNoticiasComponent;
  let fixture: ComponentFixture<ListarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
