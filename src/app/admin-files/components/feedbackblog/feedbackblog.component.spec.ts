import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackblogComponent } from './feedbackblog.component';

describe('FeedbackblogComponent', () => {
  let component: FeedbackblogComponent;
  let fixture: ComponentFixture<FeedbackblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
