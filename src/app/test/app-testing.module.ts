import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "../app.component";
import { IssueComponent } from "../issue/issue.component";
import { CommentComponent } from "../comment/comment.component";
import { NavigatorComponent } from "../navigator/navigator.component";
import { NavRouteComponent } from "../navigator/nav-route/nav-route.component";
import { HomeComponent } from "../home/home.component";
import { RankedinstitutionsComponent } from "../rankedinstitutions/rankedinstitutions.component";
import { ResolutionComponent } from "../issue/resolution/resolution.component";
import { Error404Component } from "../error404/error404.component";
import { IssueSubmitComponent } from "../issue/issue-submit/issue-submit.component";
import { LoaderComponent } from "../loader/loader.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MAT_DATE_LOCALE
} from "@angular/material";
import { AppRoutingModule } from "../app-routing.module";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import {
  AngularFirestoreModule,
  AngularFirestore
} from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { ReactiveFormsModule } from "@angular/forms";
import { FirebaseUIModule } from "firebaseui-angular";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import { APP_BASE_HREF } from "@angular/common";

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
    CommonModule,
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
    AngularFirestore,
    { provide: APP_BASE_HREF, useValue: "/home" }
  ],
  bootstrap: [AppComponent]
})
export class AppTestingModule {}
