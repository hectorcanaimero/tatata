import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
