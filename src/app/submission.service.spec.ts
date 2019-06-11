import { TestBed, inject } from "@angular/core/testing";

import { SubmissionService } from "./submission.service";
import { AppTestingModule } from "./app-testing.module";

describe("SubmissionService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      providers: [SubmissionService]
    });
  });

  it("should be created", inject(
    [SubmissionService],
    (service: SubmissionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
