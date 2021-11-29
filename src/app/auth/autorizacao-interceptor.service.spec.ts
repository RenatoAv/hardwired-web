import { TestBed } from '@angular/core/testing';

import { AutorizacaoInterceptorService } from './autorizacao-interceptor.service';

describe('AutorizacaoInterceptorService', () => {
  let service: AutorizacaoInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizacaoInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
