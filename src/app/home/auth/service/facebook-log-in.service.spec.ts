import { TestBed, inject } from '@angular/core/testing';

import { FacebookLogInService } from './facebook-log-in.service';

describe('FacebookLogInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookLogInService]
    });
  });

  it('should ...', inject([FacebookLogInService], (service: FacebookLogInService) => {
    expect(service).toBeTruthy();
  }));
});
