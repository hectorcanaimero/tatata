import { timer } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-condor-em-casa',
  templateUrl: './condor-em-casa.component.html',
  styleUrls: ['./condor-em-casa.component.scss']
})
export class CondorEmCasaComponent implements OnInit {

  @Input() item: any = [];
  constructor() { }

  ngOnInit(): void {
    timer(300).subscribe(() => console.log(this.item));
  }

}
