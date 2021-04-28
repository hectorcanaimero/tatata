import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compre-online',
  templateUrl: './compre-online.component.html',
  styleUrls: ['./compre-online.component.scss']
})
export class CompreOnlineComponent implements OnInit {

  zero: boolean = false;
  @Input() item: any = []

  constructor() { }

  ngOnInit(): void {
  }

  toogle = () => this.zero = !this.zero;
}
