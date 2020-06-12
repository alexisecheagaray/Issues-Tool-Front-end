import { TestBed, async, inject } from '@angular/core/testing';

import { AuthSupportGuard } from './auth-support.guard';

describe('AuthSupportGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSupportGuard]
    });
  });

  it('should ...', inject([AuthSupportGuard], (guard: AuthSupportGuard) => {
    expect(guard).toBeTruthy();
  }));
});
