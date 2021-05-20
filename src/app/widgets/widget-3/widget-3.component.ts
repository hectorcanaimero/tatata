import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectFade,   Navigation, Pagination, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);

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
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      360:  { slidesPerView: 1 },
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3.5 },
      1200: { slidesPerView: 3.5 },
    },
  };

  constructor() { }

  ngOnInit(): void { }

  onSlideChange = (ev: any) => {
    this.visual = ev.activeIndex + 1;
  }
}
