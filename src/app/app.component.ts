import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

import { take, delay } from 'rxjs/operators';


import { DataService } from './shared/services/data.service';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Aniversario';
  timer: boolean = false;
  options: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/datafiles/T11VsOdRDtsaJlw/data.json',
    // path: '../assets/lotties/lotties.json',
    loop: false
  };

  options1: AnimationOptions = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_i6sqnxav.json',
    // path: '../assets/lotties/lotties-1.json',
    loop: false
  };
  constructor(
    router: Router,
    private db: DataService,
    private gtmService: GoogleTagManagerService
  ) {
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        this.gtmService.pushTag({ event: 'page', pageName: item.url })
      };
    });
    this.db.getRegion().pipe(take(1)).subscribe();
    this.db.getLojas().pipe(take(1)).subscribe();
  }

  ngAfterViewInit(): void {
    timer(3000).subscribe(() => {
      this.timer = true;
    })
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
