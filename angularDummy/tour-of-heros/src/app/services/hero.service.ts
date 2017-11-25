import { Injectable } from "@angular/core";
import { Hero } from "../hero";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class HeroService {
  private heroesUrl = "api/heroes";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  updateHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http
      .put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id ${hero.id}`)),
        catchError(this.handleError<any>("updateHero"))
      );
  }
  getHeros(): Observable<Hero[]> {
    this.log("HeroService : fetch completed");

    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError("getHeros", []))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((hero: Hero) => this.log(`added Hero ${hero.id}`)),
        catchError(this.handleError<Hero>(`addHero`))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    const urlTemp = `${this.heroesUrl}/${id}`;
    return this.http
      .get<Hero>(urlTemp)
      .pipe(
        tap(_ => this.log(`the hero fetched ${id}`)),
        catchError(this.handleError<Hero>(`getHero${id}`))
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http
      .delete<Hero>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted Hero ${id}`)),
        catchError(this.handleError<Hero>("deleteHero"))
      );
  }

  searchHeros(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<Hero[]>(`api/heroes/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found heros matching ${term}`)),
        catchError(this.handleError<Hero[]>(`SearchHeros`, []))
      );
  }

  private log(message: string) {
    this.messageService.add("HeroService : " + message);
  }
}
