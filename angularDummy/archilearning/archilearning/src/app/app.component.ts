import { Component } from "@angular/core";
import { Hero } from "app/hero";

@Component({
  selector: "app-root",
  // templateUrl: './app.component.html',
  template: `
 <h1>{{title}}</h1><br>

  <ul>
    <li *ngFor="let hero of heroes">{{hero.id}} - {{hero.name}}</li>
  </ul>
  <h3>My Favourate hero {{myHero.name}}</h3>
  <p *ngIf="heroes.length > 2">There are more Heros !</p>

  <img style="height:30px" src="{{imageUrl}}">
<p>The sum of 1 + 2 is : {{1+2+getVal()}}</p>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string;
  myHero: Hero;
  imageUrl: string = "../favicon.ico";
  //heros: string[] = ["ramarajan", "vijaykanth", "sathiyaraj"];
  heroes = [new Hero(1, "param"), new Hero(2, "pavalan"), new Hero(3, "padhu")];
  constructor() {
    this.title = "Angular Architecture learning !";
    // this.myHero = "Pavalan";
    this.myHero = this.heroes[0];
  }

  getVal() : number{

     return 23;
  }
}
