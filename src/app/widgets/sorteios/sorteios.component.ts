import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteios',
  templateUrl: './sorteios.component.html',
  styleUrls: ['./sorteios.component.scss']
})
export class SorteiosComponent implements OnInit {


  @Input() item: any | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
