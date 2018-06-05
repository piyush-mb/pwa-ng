import { TestBed, inject } from '@angular/core/testing';

import { NewsletterService } from './messaging.service';

describe('NewsletterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterService]
    });
  });

  it('should be created', inject([NewsletterService], (service: NewsletterService) => {
    expect(service).toBeTruthy();
  }));
});
