import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mulher';
  constructor(
    router: Router,
    private gtmService: GoogleTagManagerService
  ) {
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        this.gtmService.pushTag({ event: 'page', pageName: item.url })
      };
    });
  }
}
