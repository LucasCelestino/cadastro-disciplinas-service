import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
})
export class DisciplinaComponent implements OnInit {
  disciplinas: Array<any>;

  disciplinasList = [
    {
      nome: 'Desenvolvimento para Servidores II',
    },
    {
      nome: 'Desenvolvimento para dispositivos móveis I',
    },
    {
      nome: 'Inglês V',
    },
    {
      nome: 'Negócios e Marketing Eletrônicos',
    },
    {
      nome: 'Projeto de prototipagem e testes de Usabilidade',
    },
    {
      nome: 'Projeto do trabalho de graduação em Sistemas',
    },
    {
      nome: 'Tópicos Especiais em Sistemas para Internet II',
    },
  ];

  constructor(public disciplinasService: DisciplinaService) {
    this.disciplinas = disciplinasService.getDisciplinas();
  }

  getDisciplinas() {
    return this.disciplinasList;
  }

  ngOnInit() {}
}
