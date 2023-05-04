import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogDataComponent } from './add-blog-data.component';

describe('AddBlogDataComponent', () => {
  let component: AddBlogDataComponent;
  let fixture: ComponentFixture<AddBlogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
