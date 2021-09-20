import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ddv',
  templateUrl: './ddv.component.html',
  styleUrls: ['./ddv.component.scss']
})
export class DdvComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
