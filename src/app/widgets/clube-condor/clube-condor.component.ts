import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clube-condor',
  templateUrl: './clube-condor.component.html',
  styleUrls: ['./clube-condor.component.scss']
})
export class ClubeCondorComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
