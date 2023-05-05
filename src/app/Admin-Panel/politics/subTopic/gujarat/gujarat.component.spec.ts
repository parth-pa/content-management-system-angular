import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratComponent } from './gujarat.component';

describe('GujaratComponent', () => {
  let component: GujaratComponent;
  let fixture: ComponentFixture<GujaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GujaratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GujaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
