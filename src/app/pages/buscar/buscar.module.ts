import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuscarPageRoutingModule } from './buscar-routing.module';
import { BuscarPage } from './buscar.page';
import { ParceiroService } from 'src/app/services/parceiro.service';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule
  ],
  declarations: [
    BuscarPage
  ],
  providers: [
    ParceiroService
  ]
})
export class BuscarPageModule {}
