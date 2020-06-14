import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-reservar',
  templateUrl: './modal-reservar.component.html',
  styleUrls: ['./modal-reservar.component.scss'],
})
export class ModalReservarComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
}
