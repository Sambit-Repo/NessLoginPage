import { TestBed } from '@angular/core/testing';

import { UsingBasicAuthService } from './using_basic_auth.service';

describe('UsingBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsingBasicAuthService = TestBed.get(UsingBasicAuthService);
    expect(service).toBeTruthy();
  });
});
