import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
})
export class DisciplinaComponent implements OnInit {
  disciplinas: Array<any>;
  disciplinaInput;

  constructor(public disciplinasService: DisciplinaService) {
    this.disciplinas = disciplinasService.getDisciplinas();
    this.getDisciplinas();
  }

  getDisciplinas() {
    return this.disciplinas;
  }

  removerDisciplina(disciplina) {
    this.disciplinasService.remove(this.disciplinas.indexOf(disciplina, 0));
  }

  adicionarDisciplina() {
    this.disciplinasService.add(this.disciplinaInput);
  }

  ngOnInit() {}
}
