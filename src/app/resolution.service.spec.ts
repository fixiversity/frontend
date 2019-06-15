import { TestBed, inject } from "@angular/core/testing";

import { ResolutionService } from "./resolution.service";
import { AppTestingModule } from "./app-testing.module";

describe("ResolutionService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      providers: [ResolutionService]
    });
  });

  it("should be created", inject(
    [ResolutionService],
    (service: ResolutionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
