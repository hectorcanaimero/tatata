import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation, A11y, Lazy } from "swiper/core";

SwiperCore.use([Pagination, Navigation, A11y, Lazy]);

@Component({
  selector: 'app-widget-3',
  templateUrl: './widget-3.component.html',
  styleUrls: ['./widget-3.component.scss'],
})

export class Widget3Component implements OnInit {

  @Input() item: any = [];
  visual: number = 1;

  options = {
    freemode: true,
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: true,
  };

  constructor() { }

  ngOnInit(): void { }

  onSlideChange = (ev: any) => {
    this.visual = ev.activeIndex + 1;
  }
}
