import { TestBed } from '@angular/core/testing';

import { StudentSkillsService } from './student-skills.service';

describe('StudentSkillsService', () => {
  let service: StudentSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
