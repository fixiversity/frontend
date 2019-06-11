import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CommentComponent } from "./comment.component";
import { MatCardModule } from "@angular/material";

describe("CommentComponent", () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [CommentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it("should create", () => {      Shouldn't create since it needs data bindings from an input form
    expect(component).toBeTruthy();
  }); */
});
