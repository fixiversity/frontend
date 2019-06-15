import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RankedinstitutionsComponent } from "./rankedinstitutions.component";
import { AppTestingModule } from "../test/app-testing.module";

describe("RankedinstitutionsComponent", () => {
  let component: RankedinstitutionsComponent;
  let fixture: ComponentFixture<RankedinstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedinstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
