import { Injectable } from "@angular/core";
import { Hero } from "../hero";
import { HEROS } from "../mock-heros";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeros(): Observable<Hero[]> {

    this.messageService.add('HeroService : fetch completed');
    return of(HEROS);
  }
}
