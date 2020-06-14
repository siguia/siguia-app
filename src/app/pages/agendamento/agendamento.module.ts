import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentoPageRoutingModule } from './agendamento-routing.module';

import { AgendamentoPage } from './agendamento.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AgendamentoPageRoutingModule
  ],
  declarations: [AgendamentoPage]
})
export class AgendamentoPageModule {}
