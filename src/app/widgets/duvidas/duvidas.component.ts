import { timer } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import md from 'markdown-it';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.scss']
})
export class DuvidasComponent implements OnInit {

  @Input() items: any = [];
  private markdown;
  outHtml: any;
  constructor() { }

  ngOnInit(): void {
    timer(200).subscribe(() => {
      console.log(this.items);
      this.renderMarkdown(this.items.text)
    });
  }

  renderMarkdown = (content: string): void => {
    this.markdown = md();
    this.outHtml = this.markdown.render(content);
  }
}
