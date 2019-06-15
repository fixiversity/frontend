import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IssueSubmitComponent } from "./issue-submit.component";
import { AppTestingModule } from "src/app/app-testing.module";

describe("IssueSubmitComponent", () => {
  let component: IssueSubmitComponent;
  let fixture: ComponentFixture<IssueSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
