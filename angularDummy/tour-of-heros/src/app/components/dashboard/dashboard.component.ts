import { Component, OnInit } from "@angular/core";
import { Hero } from "../../hero";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heros: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit() {

    this.getHeores();
  }

  getHeores() {
    this.heroService.getHeros()
      .subscribe(heroes => {
        this.heros = heroes.slice(1, 3);
      });
  }
}
