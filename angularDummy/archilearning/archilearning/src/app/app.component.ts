import { Component } from "@angular/core";
import { Hero } from "app/hero";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  //   template: `
  //  <h1>{{title}}</h1><br>

  //   <ul>
  //     <li *ngFor="let hero of heroes">{{hero.id}} - {{hero.name}}</li>
  //   </ul>
  //   <h3>My Favourate hero {{myHero.name}}</h3>
  //   <p *ngIf="heroes.length > 2">There are more Heros !</p>

  //   <img style="height:30px" src="{{imageUrl}}">
  // <p>The sum of 1 + 2 is : {{1+2+getVal()}}</p>
  // <img [src] = "myImageUrl" alt="image not found" />

  // <button [disabled]="isDisabled()">Disabled</button>
  //   `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isSpecial: boolean = true;
  badCurly: string = "";
  colspan: number = 2;
  myImageUrl = "../assets/flower.jpg";
  title: string;
  pavalanName:string = 'pavalan2';
  myHero: Hero;
  imageUrl: string = "../favicon.ico";
  //heros: string[] = ["ramarajan", "vijaykanth", "sathiyaraj"];
  heroes = [new Hero(1, "param"), new Hero(2, "pavalan"), new Hero(3, "padhu")];
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  myHero2: string = "paramasivam";
  constructor() {
    this.title = "Angular Architecture learning !";
    // this.myHero = "Pavalan";
    this.myHero = this.heroes[0];
  }

  getVal(): number {
    return 23;
  }

  isDisabled(): boolean {
    return true;
  }
  onSave(): void {
    console.log("save button clicked "+this.pavalanName);
  }


}
