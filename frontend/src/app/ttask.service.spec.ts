import { TestBed } from '@angular/core/testing';

import { TtaskService } from './ttask.service';

describe('TtaskService', () => {
  let service: TtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
