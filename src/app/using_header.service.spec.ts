import { TestBed } from '@angular/core/testing';

import { UsingHeaderService } from './using_header.service';

describe('UsingHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsingHeaderService = TestBed.get(UsingHeaderService);
    expect(service).toBeTruthy();
  });
});
