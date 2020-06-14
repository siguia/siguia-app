import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fakeParceiro, fakeAgendamento } from 'src/app/app.module';

@Component({
  selector: 'app-modal-reservar',
  templateUrl: './modal-reservar.component.html',
  styleUrls: ['./modal-reservar.component.scss'],
})
export class ModalReservarComponent implements OnInit {
  @Output() agendamento = new EventEmitter<any>();

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  enviar() {
    this.modalCtrl.dismiss(fakeAgendamento);
  }
}
