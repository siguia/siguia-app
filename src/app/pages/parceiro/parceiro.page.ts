import { Component, OnInit } from '@angular/core';
import { Parceiro } from 'src/app/models/parceiro';
import { ModalReservarComponent } from 'src/app/components/modal-reservar/modal-reservar.component';
import { ModalController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { fakeParceiro } from 'src/app/app.module';
import { ParceiroService } from 'src/app/services/parceiro.service';

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.page.html',
  styleUrls: ['./parceiro.page.scss'],
})
export class ParceiroPage implements OnInit {
  parceiro: Parceiro = {};

  constructor(
    private modalController: ModalController,
    private router: Router,
    private parceiroService: ParceiroService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'carregando...'
    });
    await loading.present();
    return loading;
  }

  async ngOnInit() {
    const loading = await this.presentLoading();
    this.route.params.subscribe(params => {
      const id = params.uuid;
      this.parceiroService.get(id).subscribe(
        response => {
          loading.dismiss();
          this.parceiro = response as Parceiro;
          this.parceiro.fotos = [];
          this.parceiro.fotos.push({
            link: fakeParceiro.fotos[0].link
          });
          this.parceiro.fotos.push({
            link: fakeParceiro.fotos[1].link
          });
          this.parceiro.fotos.push({
            link: fakeParceiro.fotos[2].link
          });
        }
      );
    })
  }

  async reservar() {
    const modal = await this.modalController.create({
      component: ModalReservarComponent,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(
      (reponse: any) => {
        this.router.navigate(['/agendamentos', reponse.data.uuid]);
      }
    );
    return await modal.present();
  }
}

