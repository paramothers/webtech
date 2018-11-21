import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  showHistoryLink = true;

  /**
   * this constructor, subscribe with Router for events.
   * it interested only for NavigationEnd events only
   * if toggle the flag based on url
   * @param router
   */
  constructor(private router: Router) {

    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showHistoryLink = !(e.url.startsWith('/workout') || e.url.startsWith('/history'));
      });
  }

}

