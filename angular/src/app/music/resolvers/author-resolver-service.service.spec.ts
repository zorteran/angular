import { TestBed } from '@angular/core/testing';

import { AuthorResolverServiceService } from './author-resolver-service.service';

describe('AuthorResolverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorResolverServiceService = TestBed.get(AuthorResolverServiceService);
    expect(service).toBeTruthy();
  });
});
