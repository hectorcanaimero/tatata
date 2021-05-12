import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {



  @Input() items: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
