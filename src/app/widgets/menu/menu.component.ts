import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('navbar', { static: true }) navbar: NavbarComponent

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
    const nav = document.getElementsByClassName('navbar-toggler')
    console.log(nav);
  }
}
