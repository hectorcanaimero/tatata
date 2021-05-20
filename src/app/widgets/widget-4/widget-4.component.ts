import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/content';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-widget-4',
  templateUrl: './widget-4.component.html',
  styleUrls: ['./widget-4.component.scss']
})
export class Widget4Component implements OnInit {

  @Input() item: any = [];
  items$: Observable<Post[]>;

  constructor(private db: DataService) { }

  ngOnInit(): void {
    this.items$ = this.db.getPostTagLimit(this.item.config.tag, this.item.config.cant);
  }

}
