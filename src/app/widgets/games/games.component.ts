import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() one: any = [];
  @Input() two: any = [];


  constructor() { }

  ngOnInit(): void {
  }

}
