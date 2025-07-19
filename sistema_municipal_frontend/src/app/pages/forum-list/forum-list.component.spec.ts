import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListComponent } from './forum-list.component';

describe('ForumListComponent', () => {
  let component: ForumListComponent;
  let fixture: ComponentFixture<ForumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
