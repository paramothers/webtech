import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  // templateUrl: './app.component.html',
  template: `
 <h1>{{title}}</h1><br>

  <ul>
    <li *ngFor="let hero of heros">{{hero}}</li>
  </ul>
  <h3>My Favourate hero {{myHero}}</h3>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string;
  myHero: string;
  heros: string[] = ["ramarajan", "vijaykanth", "sathiyaraj"];

  constructor() {
    this.title = "Angular Architecture learning !";
    this.myHero = "Pavalan";
    this.myHero = this.heros[0];
  }
}
