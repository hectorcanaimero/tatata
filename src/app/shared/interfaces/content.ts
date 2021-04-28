export interface Post {
  id: number;
  slug?: string;
  title?: string;
  link?: string;
  featured_media?: number;
  thumbnail?: string;
  medium?: string;
  full?: string;
  content?: string;
}

export interface Lojas {
  id:        number;
  slug:      string;
  status:    string;
  title:     any;
  content:   any;
  title1:    string;
  content1:  string;
  thumbnail: string;
  medium:    string;
  full:      string;
  region:    string;
  cidade:    string;
  cod_loja:  string;
  lng:       string;
  lat:       string;
  servicos:  string;
  setores:   string;
  telefone:  string;
  maps:      string;
  avaliacao: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}
export interface ParsedContent {
  endereco?: string;
  telefone?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  diasNormais?: string;
  todosDias?: string;
  domingo?: string;
  segundaQuinta?: string;
  sextaSabado?: string;
}

export interface Title {
  rendered: string;
}
