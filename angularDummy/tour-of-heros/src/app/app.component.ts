import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  //templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1> <br>
   <h2>My favorate hero is {{myHero}}</h2>

  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  title = " Tour of Heros";
  myHero = "Arjun";


}
