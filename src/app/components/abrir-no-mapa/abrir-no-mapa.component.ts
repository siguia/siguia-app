import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrir-no-mapa',
  templateUrl: './abrir-no-mapa.component.html',
  styleUrls: ['./abrir-no-mapa.component.scss'],
})
export class AbrirNoMapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  abrirNoMapa() {
    window.open('geo:0,0?q=Feira+de+Santana+BA', '_system');
  }
}
