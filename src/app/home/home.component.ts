import { Component, OnInit } from '@angular/core';
import { TemporizadorService } from '../temporizador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ms: number;

  constructor(public temporizador: TemporizadorService) {
    this.ms = 0;
  }

  ngOnInit() {}

  startTemporizador() {
    this.temporizador.start(this.ms);
  }
}
