import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreBlogComponent } from './restore-blog.component';

describe('RestoreBlogComponent', () => {
  let component: RestoreBlogComponent;
  let fixture: ComponentFixture<RestoreBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoreBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoreBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
