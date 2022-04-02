import { Injectable } from '@angular/core';
import { disciplinasList } from './Disciplinas';

interface Disciplinas {
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  disciplinas: Array<Disciplinas> = disciplinasList;

  constructor() {}

  getDisciplinas() {
    return this.disciplinas;
  }

  add(id: number, nome: string) {
    this.disciplinas.push({ nome });
  }

  remove(index: number) {
    this.disciplinas.slice(index, 1);
  }
}
