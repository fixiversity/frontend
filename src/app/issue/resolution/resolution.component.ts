import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit, Input } from "@angular/core";
import { Resolution } from "src/app/resolution";
import { ResolutionService } from "src/app/resolution.service";

@Component({
  selector: "app-resolution",
  templateUrl: "./resolution.component.html",
  styleUrls: ["./resolution.component.css"]
})
export class ResolutionComponent implements OnInit {
  @Input() id: string;
  resolution$: any;
  resolution: Resolution;
  resAuthor: any;
  display: boolean;
  uid: string;

  constructor(
    private service: ResolutionService,
    private afAuth: AngularFireAuth
  ) {}

  async ngOnInit() {
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

    this.resolution$ = await this.service.getResolution(this.id);
    this.resolution = this.resolution$.data();
    this.resAuthor = await this.resolution.user.get().then(snapshot => {
      return snapshot.data();
    });
  }

  upvoteAdequacy() {
    this.resolution.rating++;
    this.service.updateResolution(this.resolution$.ref, this.resolution);
  }

  downvoteAdequacy() {
    this.resolution.rating--;
  }
}
