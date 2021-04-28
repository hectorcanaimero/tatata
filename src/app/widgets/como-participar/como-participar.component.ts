import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-participar',
  templateUrl: './como-participar.component.html',
  styleUrls: ['./como-participar.component.scss']
})
export class ComoParticiparComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
