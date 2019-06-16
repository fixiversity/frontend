import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatDatepickerModule,
  MatSlideToggleModule
} from "@angular/material";

import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { FlexLayoutModule } from "@angular/flex-layout";

import { IssueComponent } from "./issue/issue.component";
import { NavigatorComponent } from "./navigator/navigator.component";
import { AppRoutingModule } from ".//app-routing.module";
import { CommentComponent } from "./comment/comment.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {
  AngularFirestoreModule,
  AngularFirestore
} from "@angular/fire/firestore";
import { NavRouteComponent } from "./navigator/nav-route/nav-route.component";
import { HomeComponent } from "./home/home.component";
import { RankedinstitutionsComponent } from "./rankedinstitutions/rankedinstitutions.component";
import { ResolutionComponent } from "./issue/resolution/resolution.component";
import { IssueSubmitComponent } from "./issue/issue-submit/issue-submit.component";
import { Error404Component } from "./error404/error404.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material/core";

import { FirebaseUIModule } from "firebaseui-angular";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import { LoaderComponent } from "./loader/loader.component";

import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: ["public_profile", "email", "user_likes", "user_friends"],
      customParameters: {
        auth_type: "reauthenticate"
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl: '<your-tos-link>',
  // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    CommentComponent,
    NavigatorComponent,
    NavRouteComponent,
    HomeComponent,
    RankedinstitutionsComponent,
    ResolutionComponent,
    Error404Component,
    IssueSubmitComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ReactiveFormsModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    NgbCarouselModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
