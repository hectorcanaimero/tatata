import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-2',
  templateUrl: './widget-2.component.html',
  styleUrls: ['./widget-2.component.scss']
})
export class Widget2Component implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void { }

}
