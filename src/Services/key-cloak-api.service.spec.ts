import { TestBed } from '@angular/core/testing';

import { KeyCloakApiService } from './key-cloak-api.service';

describe('KeyCloakApiService', () => {
  let service: KeyCloakApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyCloakApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
