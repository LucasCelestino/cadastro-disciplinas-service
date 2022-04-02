import { Component, OnInit } from '@angular/core';
import { TemporizadorService } from '../temporizador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public temporizador: TemporizadorService) {
    this.temporizador.start(1000);
  }

  ngOnInit() {}
}
