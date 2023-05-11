import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrouselComponent } from './user-crousel.component';

describe('UserCrouselComponent', () => {
  let component: UserCrouselComponent;
  let fixture: ComponentFixture<UserCrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
