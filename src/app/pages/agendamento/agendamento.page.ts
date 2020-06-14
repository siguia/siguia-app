import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { fakeParceiro } from 'src/app/app.module';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  agendamento: Agendamento;
  cancelando: boolean;

  constructor(
    public actionSheetController: ActionSheetController,
    public router: Router,
  ) { }

  ngOnInit() {
    this.agendamento = {
      id: 3,
      uuid: 'a7dasd78as7d98asd7',
      confirmado: false,
      motorista: {
        id: 3,
        uuid: 'a7dasd78as7d98asd7',
        nome: 'Janderson',
        telefone: 'Janderson',
        placa: 'QOX-4513',
      },
      parceiro: fakeParceiro
    }
    let time = 8000;
    setTimeout(() => {
      this.agendamento.confirmado = !this.agendamento.confirmado;
    }, time);
  }

  async cancelar() {
    const actionSheet = await this.actionSheetController.create({
      header: '',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Cancelar Agendamento',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.cancelando = true;
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
          }
        },
        {
          icon: 'close',
          role: 'cancel',
          text: 'Fechar'
        }
      ]
    });
    await actionSheet.present();
  }
}
