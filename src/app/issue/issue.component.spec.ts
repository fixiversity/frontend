import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IssueComponent } from "./issue.component";
import { AppTestingModule } from "../test/app-testing.module";

describe("IssueComponent", () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
