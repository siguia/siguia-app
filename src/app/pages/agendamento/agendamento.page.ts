import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { fakeParceiro } from '../parceiro/parceiro.page';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

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
      confirmado: true,
      motorista: {
        nome: 'Janderson',
        telefone: 'Janderson',
        placa: 'QOX-4513',
      },
      parceiro: fakeParceiro
    }
    let time = 3000;
    setTimeout(() => {
      this.agendamento.confirmado = !this.agendamento.confirmado;
      setTimeout(() => {
        this.agendamento.confirmado = !this.agendamento.confirmado;
        setTimeout(() => {
          this.agendamento.confirmado = !this.agendamento.confirmado;
          setTimeout(() => {
            this.agendamento.confirmado = !this.agendamento.confirmado;
            setTimeout(() => {
              this.agendamento.confirmado = !this.agendamento.confirmado;
              setTimeout(() => {
                this.agendamento.confirmado = !this.agendamento.confirmado;
              }, time);
            }, time);
          }, time);
        }, time);
      }, time);
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
