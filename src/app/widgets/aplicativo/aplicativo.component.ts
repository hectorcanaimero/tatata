import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aplicativo',
  templateUrl: './aplicativo.component.html',
  styleUrls: ['./aplicativo.component.scss']
})
export class AplicativoComponent implements OnInit {

  @Input() item: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  trackById = (index: number, item: any) => item.id;

}
