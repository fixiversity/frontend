import { TestBed, inject } from "@angular/core/testing";

import { IssueService } from "./issue.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";

describe("IssueService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      providers: [IssueService, AngularFirestore]
    });
  });

  it("should be created", inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));
});
