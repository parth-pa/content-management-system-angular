import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackformComponent } from './feedbackform.component';

describe('FeedbackformComponent', () => {
  let component: FeedbackformComponent;
  let fixture: ComponentFixture<FeedbackformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
