import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
})
export class DisciplinaComponent implements OnInit {
  disciplinas: Array<any>;

  constructor(public disciplinasService: DisciplinaService) {
    this.disciplinas = disciplinasService.getDisciplinas();
    this.getDisciplinas();
  }

  getDisciplinas() {
    return this.disciplinas;
  }

  ngOnInit() {}
}
