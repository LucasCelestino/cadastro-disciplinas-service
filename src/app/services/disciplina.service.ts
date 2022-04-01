import { Injectable } from '@angular/core';
import { disciplinasList } from '../Disciplinas';

interface Disciplinas {
  id: number;
  nome: string;
  dia: string;
  horario: string;
  ementa: string;
  objetivo: string;
}

@Injectable()
export class DisciplinaService {
  disciplinas: Array<Disciplinas> = disciplinasList;

  constructor() {}

  getDisciplinas() {
    return this.disciplinas;
  }

  add(
    id: number,
    nome: string,
    dia: string,
    horario: string,
    ementa: string,
    objetivo: string
  ) {
    this.disciplinas.push({ id, nome, dia, horario, ementa, objetivo });
  }

  remove(index: number) {
    this.disciplinas.slice(index, 1);
  }
}
