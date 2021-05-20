import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-1',
  templateUrl: './widget-1.component.html',
  styleUrls: ['./widget-1.component.scss']
})
export class Widget1Component implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void { }

}
