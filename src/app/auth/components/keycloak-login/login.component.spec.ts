import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCloakLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: KeyCloakLoginComponent;
  let fixture: ComponentFixture<KeyCloakLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyCloakLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyCloakLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
