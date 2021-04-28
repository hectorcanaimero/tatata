export interface Ofertas {
  id?: number;
  campanhaId?: number;
  campanha?: number;
  hostId?: number;
  host?: number;
  loja?: number;
  departamento?: number;
  slug?: string;
  preco_regular?: number;
  parcela_regular?: number;
  qtd_regular?: number;
  preco_clube?: number;
  parcela_clube?: number;
  qtd_clube?: number;
  preco_cashback: number;
  dsc_kit?: string;
  cod_kit?: number;
  start?: Date;
  end?: Date;
  c_at?: Date;
  produtos?: Produtos;
}

export interface Produtos {
  id?: number;
  cod_campanha?: number;
  slugCampanha?: string;
  cod_produto?: number;
  dsc_produto?: string;
  dsc_descricao?: string;
  dsc_kit?: string;
  embalagem?: string;
  departamento?: number;
  dsc_departamento?: string;
  setor?: number;
  dsc_setor?: string;
  start?: Date;
  end?: Date;
  slug?: string;
  image?: string;
  legal?: any;
  status: number;
  c_at?: Date;
  campanhaId?: any;
}

export interface Menu {
  codigo?: number;
  departamento?: string;
  slug?: string;
}
