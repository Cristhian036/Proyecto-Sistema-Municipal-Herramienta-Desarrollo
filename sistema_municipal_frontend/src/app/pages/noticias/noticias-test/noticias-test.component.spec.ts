import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasTestComponent } from './noticias-test.component';

describe('NoticiasTestComponent', () => {
  let component: NoticiasTestComponent;
  let fixture: ComponentFixture<NoticiasTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
