import { fakeParceiro } from 'src/app/app.module';
import { Component, OnInit } from '@angular/core';


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
