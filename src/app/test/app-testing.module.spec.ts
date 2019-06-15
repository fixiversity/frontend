import { AppTestingModule } from "./app-testing.module";

describe("AppTestingModule", () => {
  let appTestingModule: AppTestingModule;

  beforeEach(() => {
    appTestingModule = new AppTestingModule();
  });

  it("should create an instance", () => {
    expect(appTestingModule).toBeTruthy();
  });
});
