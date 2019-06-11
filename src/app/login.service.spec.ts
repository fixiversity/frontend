import { TestBed, inject } from "@angular/core/testing";

import { LoginService } from "./login.service";
import { AppTestingModule } from "./app-testing.module";

describe("LoginService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      providers: [LoginService]
    });
  });

  it("should be created", inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
