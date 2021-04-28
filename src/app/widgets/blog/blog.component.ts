import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/content';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() item: any = [];
  items$: Observable<Post[]>;

  constructor(private db: DataService) { }

  ngOnInit(): void {
    this.items$ = this.db.getPostTagLimit(this.item.tag, this.item.cant);
  }

}
