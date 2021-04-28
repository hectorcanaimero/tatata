import { Injectable } from '@angular/core';
import {formatCurrency} from '@angular/common';
import { ParsedContent } from '../interfaces/content';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ObjectHandleService {

  constructor() { }
  urlProduto = (id: number): string => `${ environment.v5 }/${ id }.jpg`;

  removerEspacosAcentosMinuscula(palavra: string): string {
    const replace = /\ /gi;
    return palavra.trim().replace(replace, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  formaPagamentoCartaoCondor(qtdClube: number, parcelaClube: number): string {
    const valorParcela = formatCurrency(parcelaClube, 'pt', 'R$', 'R$');
    return `${qtdClube}x de ${valorParcela} no cartão condor`;
  }

  formaPagamentoRegular(qtdClube: number, parcelaClube: number): string {
    const valorParcela = formatCurrency(parcelaClube, 'pt', 'R$', 'R$');
    return `${qtdClube}x de ${valorParcela} no cartão`;
  }
  retornarNumerosAleatorios(numeroInicial: number, numeroFinal: number, quantidade: number, podeRepetir: boolean): Array<number>{
    const numerosAleatorios = new Array<number>();
    while (numerosAleatorios.length < quantidade) {
      const numeroAleatoriaGerado = Math.floor(Math.random() * (numeroFinal - numeroInicial) + numeroInicial);
      if (podeRepetir === true) {
        numerosAleatorios.push(numeroAleatoriaGerado);
      } else {
        if (!numerosAleatorios.includes(numeroAleatoriaGerado)){
          numerosAleatorios.push(numeroAleatoriaGerado);
        }
      }
    }
    return numerosAleatorios;
  }
  sortArray(array: Array<any>, field: string): Array<any> {
    return array.sort((a, b) => (a[field] > b[field]) ? 1 : -1);
  }
  sortArrayDescending(array: Array<any>, field: string): Array<any> {
    return array.sort((a, b) => (b[field] > a[field]) ? 1 : -1);
  }
  filterArray(array: Array<any>): Array<any> {
    return array.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
  }
  criarArrayNElementosLinha(array: Array<any>, elementosPorLinha: number): Array<any>{
    const arrayAux = new Array<any>();
    let arrayLinha = new Array<any>();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < array.length; i++) {
      if (arrayLinha.length < elementosPorLinha) {
        arrayLinha.push(array[i]);
      } else if (arrayLinha.length === elementosPorLinha) {
        arrayAux.push(arrayLinha);
        arrayLinha = new Array<any>();
        arrayLinha.push(array[i]);
      }
    }
    if (arrayLinha.length !== 0) {
      arrayAux.push(arrayLinha);
    }
    return arrayAux;
  }
  parseHtmlLoja(html: string): ParsedContent {
    const dadosFormatados: ParsedContent = {}  as ParsedContent;
    const textoSemTags = html.replace(/<[^>]*>/g, '');
    const dadosSeparados = textoSemTags.split('\n');
    // console.log(textoSemTags)
    dadosSeparados.forEach(linhaAtual => {
      try {
        if (linhaAtual.startsWith('Endereço')) {
          const dadosAux = linhaAtual.split('Endereço:');
          dadosFormatados.endereco = dadosAux[1].trim();
        } else if (linhaAtual.startsWith('Telefone')) {
          const dadosAux = linhaAtual.split('Telefone');
          dadosFormatados.telefone =   dadosAux[1].replace(':', '').trim();
        } else if (linhaAtual.startsWith('Bairro')) {
          const dadosAux = linhaAtual.split('Bairro:');
          const dadoAuxCep = dadosAux[1].replace('&#8211;', '').trim().split('CEP:');
          dadosFormatados.bairro = dadoAuxCep[0].trim();
          dadosFormatados.cep = dadoAuxCep[1].trim();
        } else if (linhaAtual.startsWith('De segunda a sábado')) {
          const dadosAux = linhaAtual.split('De segunda a sábado:');
          dadosFormatados.diasNormais = dadosAux[1].trim();
        }  else if (linhaAtual.startsWith('De sexta a sábado')) {
          const dadosAux = linhaAtual.split('De sexta a sábado:');
          dadosFormatados.sextaSabado = dadosAux[1].trim();
        }   else if (linhaAtual.startsWith('De segunda a quinta')) {
          const dadosAux = linhaAtual.split('De segunda a quinta:');
          dadosFormatados.segundaQuinta = dadosAux[1].trim();
        } else if (linhaAtual.startsWith('Todos os dias')) {
          const dadosAux = linhaAtual.split('Todos os dias:');
          dadosFormatados.todosDias = dadosAux[1].trim();
        } else if (linhaAtual.startsWith('Domingo')) {
          const dadosAux = linhaAtual.split('Domingo:');
          dadosFormatados.domingo = dadosAux[1].trim();
        } else if (linhaAtual.trim().endsWith('Brasil') || linhaAtual.trim().endsWith('Brasil.')) {
          dadosFormatados.cidade = linhaAtual.replace('&#8211;', '-').trim();
        }
      } catch (e) {
        // console.log('linhaAtual', linhaAtual);
      }
   });
    return dadosFormatados;
  }
}
