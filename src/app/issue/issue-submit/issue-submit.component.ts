import { LoginService } from "./../../login.service";
import { SubmissionService } from "./../../submission.service";
import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure
} from "firebaseui-angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { validateDate } from "../../validators/validateDate";

@Component({
  selector: "app-issue-submit",
  templateUrl: "./issue-submit.component.html",
  styleUrls: ["./issue-submit.component.css"]
})
export class IssueSubmitComponent implements OnInit {
  submitForm = this.formBuilder.group({
    title: ["", [Validators.required]],
    description: [""],
    criteria: [""],
    severity: [""],
    category: [""],
    firstDetected: ["", [Validators.min, Validators.max, validateDate]],
    acceptedDeadline: ["", [Validators.min, Validators.max, validateDate]]
  });

  minDetected = new Date(2000, 0, 1);
  maxDetected = new Date();

  minAccepted = new Date();
  maxAccepted = new Date(2030, 0, 1);
  uid: string;

  constructor(
    private submitService: SubmissionService,
    private afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(
      user => {
        try {
          this.uid = user.uid;
        } catch (error) {
          console.log("User not logged in!");
        }
      },
      error => {
        console.log("AuthState error:", error);
      }
    );
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  async onSubmit() {
    console.log("Validity:", this.submitForm.valid);
    if (this.submitForm.valid) {
      const {
        title,
        description,
        criteria,
        severity,
        category,
        firstAccepted,
        acceptedDeadline
      } = this.submitForm.value;
      const id = await this.submitService.getID();
      const user = await this.loginService.getTestUser();
      const resolutions = [];
      this.submitService.updateIssues({
        id,
        title,
        description,
        resolutions,
        user
      });
      console.log("Form submitted:", this.submitForm.value);
    } else {
      console.log("Invalid form, no submission");
    }
  }

  getErrorDisplay(control: string, type: string) {
    const response = {
      invalidDate: "You must enter a valid date",
      required: "This field is required"
    };
    const result = this.findErrorOf(control);
    if (result != null) {
      return response[type];
    }
  }

  findErrorOf(control: string) {
    const controls = this.submitForm.controls;
    const keys = Object.keys(controls);
    const index = keys.indexOf(control);

    const errors = keys.map(function(objectKey) {
      const value = controls[objectKey];
      if (objectKey === control) {
        return value.errors;
      } else {
        return null;
      }
    });
    return errors[index];
  }

  successCallback(successData: FirebaseUISignInSuccessWithAuthResult) {
    console.log("Success!", successData.authResult);
  }
  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log("Error", errorData);
  }
}
