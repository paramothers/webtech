import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";
import { headersToString } from "selenium-webdriver/http";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heroes => (this.heros = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe(hero => this.heros.push(hero));
  }

  delete(hero: Hero): void {

    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}