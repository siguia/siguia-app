import { fakeParceiro } from 'src/app/app.module';
import { Component, OnInit } from '@angular/core';
import { ParceiroService } from 'src/app/services/parceiro.service';
import { ActivatedRoute } from '@angular/router';
import { Parceiro } from 'src/app/models/parceiro';

@Component({
  selector: 'app-lista-parceiros',
  templateUrl: './lista-parceiros.page.html',
  styleUrls: ['./lista-parceiros.page.scss'],
})
export class ListaParceirosPage implements OnInit {
  parceiros = [];
  origem = '';
  destino = '';
  lat_long = '';

  constructor(
    private parceiroService: ParceiroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(query=> {
      this.origem = this.origem ? this.origem : query.origem;
      this.destino = this.destino ? this.destino : query.destino;
      this.parceiroService.buscar(this.origem, this.destino, this.lat_long).subscribe(
        response => {
          this.parceiros = response as Parceiro[];
          this.parceiros.forEach(parceiro => {
            parceiro.fotos = [];
            parceiro.fotos.push({
              link: fakeParceiro.fotos[0].link
            });
            parceiro.fotos.push({
              link: fakeParceiro.fotos[1].link
            });
            parceiro.fotos.push({
              link: fakeParceiro.fotos[2].link
            });
          });
          console.log(this.parceiros);
        }
      );
    });
  }
}
