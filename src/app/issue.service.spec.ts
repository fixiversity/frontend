import { TestBed, inject } from "@angular/core/testing";

import { IssueService } from "./issue.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AppTestingModule } from "./app-testing.module";

describe("IssueService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      providers: [IssueService]
    });
  });

  it("should be created", inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));
});
