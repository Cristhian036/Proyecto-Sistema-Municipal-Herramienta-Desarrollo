import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMultaComponent } from './buscar-multa.component';

describe('BuscarMultaComponent', () => {
  let component: BuscarMultaComponent;
  let fixture: ComponentFixture<BuscarMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
