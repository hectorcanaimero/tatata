import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  @Input() item: any = [];

  options: AnimationOptions = {
    path: 'https://assets4.lottiefiles.com/private_files/lf30_exa5jczj.json'
    // path: '../../../assets/lotties/foguete.json',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
