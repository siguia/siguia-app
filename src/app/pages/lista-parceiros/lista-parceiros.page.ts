import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.page.html',
  styleUrls: ['./lista-parceiros.page.scss'],
})
export class ListaParceirosPage implements OnInit {
  parceiros = [];

  constructor() { }

  ngOnInit() {
    this.parceiros = Array(5).fill({
      nome: 'Posto Chefão',
      classificacao: 4.5,
      telefone: '(31) 97887-9965',
      fotos: [
        {
          link: this.links[this.randomInt(0, 2)]
        },
        {
          link: this.links[this.randomInt(0, 2)]
        },
        {
          link: this.links[this.randomInt(0, 2)]
        },
      ]
    })
  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  links = [
    'https://i0.wp.com/trucao.com.br/wp-content/uploads/2019/05/capa_site.jpg?fit=1920%2C1080&ssl=1',
    'https://static.ndonline.com.br/2012/11/11-11-2012-15-36-00-caminhoneiros-descanso-nova-legislacao.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuen7kBs6X8VoetSlRqZ6dtl5bBZ7yf_VsHwd346Mho2VTBw44&usqp=CAU'
  ]
}
