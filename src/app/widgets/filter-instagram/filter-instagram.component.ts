import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './filter-instagram.component.html',
  styleUrls: ['./filter-instagram.component.scss']
})
export class FilterInstagramComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void { }

}
