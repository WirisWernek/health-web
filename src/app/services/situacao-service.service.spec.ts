import { TestBed } from '@angular/core/testing';

import { SituacaoService } from './situacao-service.service';

describe('SituacaoServiceService', () => {
  let service: SituacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
