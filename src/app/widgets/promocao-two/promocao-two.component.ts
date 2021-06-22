import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocao-two',
  templateUrl: './promocao-two.component.html',
  styleUrls: ['./promocao-two.component.scss']
})
export class PromocaoTwoComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
