import { TestBed } from '@angular/core/testing';

import { UsingOAuthService } from './using_oauth.service';

describe('UsingOAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsingOAuthService = TestBed.get(UsingOAuthService);
    expect(service).toBeTruthy();
  });
});
