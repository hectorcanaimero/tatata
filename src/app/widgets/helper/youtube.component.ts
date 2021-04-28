import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
    selector: 'app-youtube',
    template: `<div class="embed-responsive embed-responsive-16by9 rounded" style='z-index:1 !important;'>
        <iframe class="embed-responsive-item" [src]="this.video"></iframe>
    </div>`
})
export class YoutubeComponent implements OnInit {

    @Input() id: string;
    video: any;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
      timer(100).subscribe(() => {
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${ this.id }`);
      });
    }
}
