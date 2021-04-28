import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  items$: Observable<any>;

  constructor(private db: DataService) { }

  ngOnInit(): void {
    this.items$ = this.db.getDataApi();
  }

}
