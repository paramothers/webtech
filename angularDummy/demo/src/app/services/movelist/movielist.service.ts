import { Injectable } from '@angular/core';


@Injectable()
export class MovielistService {

 listItems: any[] = ['Move one','Move two','Move THREE','Move four','Move five'];
  constructor() { }

  getMovies() :any[]{

    return this.listItems;
  }

}
