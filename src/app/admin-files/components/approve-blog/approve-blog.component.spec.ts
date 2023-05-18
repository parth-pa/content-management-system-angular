import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBlogComponent } from './approve-blog.component';

describe('ApproveBlogComponent', () => {
  let component: ApproveBlogComponent;
  let fixture: ComponentFixture<ApproveBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
