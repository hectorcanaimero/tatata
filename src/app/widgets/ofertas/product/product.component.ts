import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, Inject, PLATFORM_ID, OnChanges, SimpleChanges } from '@angular/core';
import { ObjectHandleService } from 'src/app/shared/services/object-handle.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() ofertas: any = [];
  @Input() loja: string;

  kit_value: any = undefined;
  kit_content: string;
  kit_titulo: string;
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

  ngOnInit(): void {
    this.proccess(this.ofertas.dsc_kit);
  }

  // tslint:disable-next-line: typedef
  ngOnChanges(changes: SimpleChanges): void {
    this.loja = changes.loja.currentValue;
    this.ofertas = changes.ofertas.currentValue;
  }

  private proccess = (kit: string) => {
    const startWithLeve = kit.startsWith('Leve');
    const startWithMas = kit.indexOf('+');
    if(startWithLeve) {
      this.kit_titulo = kit.split('.')[0];
      this.kit_content = this.proccessContent(kit.split('.')[1]);
      this.kit_value = this.proccessPreco(kit);
    } else if(startWithMas === -1) {
      this.kit_titulo = kit.split('.')[0];
      this.kit_content = this.proccessContent(kit.split('.')[1]);
      this.kit_value = this.proccessPreco(kit);
    }
    else {
      this.kit_titulo = kit;
      this.kit_value = this.proccessPreco(kit);
    }
  }

  proccessPreco = (kit) => {
    const data = kit.split('$')[1];
    const valor = Number(data.replace(',', '.'));
    if (typeof valor === 'number') {
      return valor;
    }
    return null;
  }


  proccessContent = (kit) => kit.split('R')[0];

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
