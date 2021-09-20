import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

registerLocaleData(localePt);
import { APP_ROUTE } from './app.routes';
import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';


declare var Hammer;

export class HammerConfig extends HammerGestureConfig {
  // tslint:disable-next-line: typedef
  buildHammer = (element: HTMLElement) => {
    const mc = new Hammer(element, {
      touchAction: 'auto',
      inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
      recognizers: [ [  Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL } ] ]
    });
    return mc;
  }
}

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  APP_ROUTE,
    BrowserModule,
    HammerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
    { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
