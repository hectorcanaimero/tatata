import { Observable } from 'rxjs';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Observable<any>;

  constructor(private db: DataService) { }

  ngOnInit(): void {
    this.items$ = this.db.getDataApi();
  }

}
