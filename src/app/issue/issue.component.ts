import { Component, OnInit } from "@angular/core";
import { Issue } from "../issue";

import { ActivatedRoute, ParamMap } from "@angular/router";
import { IssueService } from "../issue.service";

import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Comment } from "../comment";
import { User } from "../user";
import { DocumentSnapshot } from "@angular/fire/firestore";
import { Resolution } from "../resolution";
import { Challenge } from "../challenge";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "issue",
  templateUrl: "./issue.component.html",
  styleUrls: ["./issue.component.css"]
})
export class IssueComponent implements OnInit {
  issue$: Observable<Issue>;
  issue: Issue = new Issue();

  comments: Comment[] = [];
  challenges: Challenge[] = [];

  resID: string;

  title: string;

  description: string;
  author: User = new User();

  constructor(private route: ActivatedRoute, private service: IssueService) {}

  ngOnInit() {
    this.issue$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getIssue(+params.get("id")))
    );

    this.issue$.subscribe(issue => {
      this.issue = issue;

      issue.user.get().then((author: DocumentSnapshot<User>) => {
        this.author = author.data();
      });

      this.resID = issue.resolutions[0].id;

      this.service.getComments(this.issue.id).subscribe(comments => {
        this.comments = comments;
      });
      console.log(this.comments, this.issue);

      // issue.resolutions[0].get().then((resolution: DocumentSnapshot<Resolution>) => {
      //   const data = resolution.data();
      //   this.resolution = data;

      //   data.user.get().then((author: DocumentSnapshot<User>, self= this) => {
      //     self.resAuthor = author.data();
      //   });
      // });
    });
  }

  newComment(author: string, content: string) {
    console.log(author, content);
    // this.comments.push(new Comment(new User(author, 0, 'University Placeholder'), 0, content));
  }
  newChallenge(author: string, content: string) {
    console.log(author, content);
    this.challenges.push(
      new Challenge(new User(author, 0, "University Placeholder"), 0, content)
    );
  }
}
