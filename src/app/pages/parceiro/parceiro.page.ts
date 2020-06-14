import { Component, OnInit } from '@angular/core';
import { Parceiro } from 'src/app/models/parceiro';
import { ModalReservarComponent } from 'src/app/components/modal-reservar/modal-reservar.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { fakeParceiro } from 'src/app/app.module';

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.page.html',
  styleUrls: ['./parceiro.page.scss'],
})
export class ParceiroPage implements OnInit {
  parceiro: Parceiro = fakeParceiro;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    this.parceiro = fakeParceiro;
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

