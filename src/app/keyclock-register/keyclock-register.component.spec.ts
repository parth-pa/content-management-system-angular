import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyclockRegisterComponent } from './keyclock-register.component';

describe('KeyclockRegisterComponent', () => {
  let component: KeyclockRegisterComponent;
  let fixture: ComponentFixture<KeyclockRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyclockRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyclockRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
