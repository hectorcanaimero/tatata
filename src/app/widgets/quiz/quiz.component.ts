import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  url: any;
  @Input() item: any = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    timer(100).subscribe(() => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.quiz.link);
    });
  }

}
