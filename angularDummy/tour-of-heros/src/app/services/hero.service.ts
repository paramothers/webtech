import { Injectable } from "@angular/core";
import { Hero } from "../hero";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HeroService {
  private heroesUrl: string = "api/heroes";
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeros(): Observable<Hero[]> {
    this.messageService.add("HeroService : fetch completed");
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROS.find(hero => hero.id === id));
  }
  private log(message: string) {
    this.messageService.add("HeroService : " + message);
  }
}
