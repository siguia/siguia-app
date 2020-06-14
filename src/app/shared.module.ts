import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardParceiroComponent } from './components/card-parceiro/card-parceiro.component';
import { SlideFotosComponent } from './components/slide-fotos/slide-fotos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterButtonComponent } from './components/footer-button/footer-button.component';
import { ModalReservarComponent } from './components/modal-reservar/modal-reservar.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SlideFotosComponent,
    CardParceiroComponent,
    FooterButtonComponent,
  ],
  declarations: [
    FooterButtonComponent,
    SlideFotosComponent,
    CardParceiroComponent,
    ModalReservarComponent,
  ],
  entryComponents: [
    ModalReservarComponent,
  ]
})
export class SharedModule { }
