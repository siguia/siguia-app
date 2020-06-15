import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardParceiroComponent } from './components/card-parceiro/card-parceiro.component';
import { SlideFotosComponent } from './components/slide-fotos/slide-fotos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterButtonComponent } from './components/footer-button/footer-button.component';
import { ModalReservarComponent } from './components/modal-reservar/modal-reservar.component';
import { AbrirNoMapaComponent } from './components/abrir-no-mapa/abrir-no-mapa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SlideFotosComponent,
    CardParceiroComponent,
    FooterButtonComponent,
    AbrirNoMapaComponent,
  ],
  declarations: [
    FooterButtonComponent,
    SlideFotosComponent,
    CardParceiroComponent,
    ModalReservarComponent,
    AbrirNoMapaComponent,
  ],
  entryComponents: [
    ModalReservarComponent,
  ]
})
export class SharedModule { }
