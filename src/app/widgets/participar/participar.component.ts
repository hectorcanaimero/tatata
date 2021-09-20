import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participar',
  templateUrl: './participar.component.html',
  styleUrls: ['./participar.component.scss']
})
export class ParticiparComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
