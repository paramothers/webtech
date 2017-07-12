import { Component, OnInit } from '@angular/core';
import {MovielistService} from '../services/movelist/movielist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
user: string='sample of binding';
logoPath: string = 'assets/log.png';
  title: string='Testing of Directive and binding';
  listItems: any[] ;
  constructor(private movelist: MovielistService) { 

    this.listItems = this.movelist.getMovies();
  }

  ngOnInit() {
  }

  onSelecct(){
    console.log("submit button clicked ");
  }

}
