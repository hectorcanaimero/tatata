import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() item: any = [];
  @Input() menu: any = [];
  @Input() participar: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
