import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-old',
  templateUrl: './app-old.component.html',
  styleUrls: ['./app-old.component.scss']
})
export class AppOldComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
