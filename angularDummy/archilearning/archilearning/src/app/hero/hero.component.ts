import { Component, OnInit } from "@angular/core";
import { Hero } from "app/hero";

@Component({
  selector: "app-hero",

  template: `
    <p>
      {{heroName}}
    </p>
  `,
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  heroName: string;
  constructor() {}

  ngOnInit() {}


}
