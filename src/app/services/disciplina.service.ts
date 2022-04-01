import { Injectable } from '@angular/core';
import { disciplinasList } from '../Disciplinas';

interface Disciplinas {
  id:number,
  nome:string,
  dia:string,
  horario:string,
  ementa:string,
  objetivo:string,
}

@Injectable()
export class DisciplinaService {



  constructor() {}
}
