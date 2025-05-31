import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMultaComponent } from './crud-multa.component';

describe('CrudMultaComponent', () => {
  let component: CrudMultaComponent;
  let fixture: ComponentFixture<CrudMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
