import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fakeParceiro } from '../parceiro/parceiro.page';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.page.html',
  styleUrls: ['./lista-parceiros.page.scss'],
})
export class ListaParceirosPage implements OnInit {
  parceiros = [];

  constructor() { }

  ngOnInit() {
    this.parceiros = Array(5).fill(fakeParceiro)
  }

}
