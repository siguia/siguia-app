import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParceiroService } from 'src/app/services/parceiro.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  origem = '';
  destino = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  buscar() {
    this.router.navigate(['/parceiros'], {
      queryParams: {
        origem: this.origem,
        destino: this.destino,
      }
    });
  }
}
