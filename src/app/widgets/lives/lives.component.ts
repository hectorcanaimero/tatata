import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.scss']
})
export class LivesComponent implements OnInit {

  @Input() item: any = [];
  isActive = true;

  constructor() { }

  ngOnInit(): void {
  }

}
