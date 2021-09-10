import { Injectable } from '@angular/core';

@Injectable()
export class DisciplinasService {

  disciplinas: string[] = [
    'Arquitetura Orientada a Servicos',
     'Projeto de Encontrabilidade', 
     'Tópicos Especiais para Internet',
     'Inglês VI',
     'Desenvolvimento para Dispositivos Móveis II',
     'Sistemas Internet TCC'
  ];

  constructor() { }

  add(title: string) {
    this.disciplinas.push(title);
  }
  remove(index: number) {
    this.disciplinas.splice(index, 1);
  }
  getList() {
    return this.disciplinas;
  }
}