import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  isNavOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isNavOpen = !this.isNavOpen;
  }

}
