import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mulher';
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
}
