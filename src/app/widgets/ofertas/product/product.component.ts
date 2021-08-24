import { isPlatformBrowser } from '@angular/common';
import { Component, Input, Inject, PLATFORM_ID, OnChanges, SimpleChanges } from '@angular/core';
import { ObjectHandleService } from 'src/app/shared/services/object-handle.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {
  @Input() ofertas: any = [];
  @Input() loja: string;

  product: any = [];
  vigencia: any = [];
  public shops: any = [];
  imagem: any = [];
  link: string;
  valor: number;
  items: any = [];
  active: boolean;
  constructor(
    public objectHandleService: ObjectHandleService,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ofertas = changes.ofertas.currentValue;
  }

  dataLayer = (name: string) => {
    if (isPlatformBrowser(this.platformId)) {
      window['dataLayer'].push({
        event: 'productLanding',
        storeName: this.loja,
        productName: name
      });
    }
  }

  clickAction = (name: string, type: string) => {
    if (isPlatformBrowser(this.platformId)) {
      window['dataLayer'].push({
        event: 'productpageAction',
        productButton: type,
        productName: name
      });
    }
  }
}
