import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public images = [
    "/assets/images/home/college.jpg",
    "/assets/images/home/limerick.jpg"
  ];

  constructor() {}

  ngOnInit() {}
}
