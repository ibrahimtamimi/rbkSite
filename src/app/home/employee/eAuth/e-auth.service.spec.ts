import { TestBed, inject } from '@angular/core/testing';

import { EAuthService } from './e-auth.service';

describe('EAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EAuthService]
    });
  });

  it('should ...', inject([EAuthService], (service: EAuthService) => {
    expect(service).toBeTruthy();
  }));
});
