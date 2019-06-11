import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResolutionComponent } from "./resolution.component";
import { AppTestingModule } from "src/app/app-testing.module";

describe("ResolutionComponent", () => {
  let component: ResolutionComponent;
  let fixture: ComponentFixture<ResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
