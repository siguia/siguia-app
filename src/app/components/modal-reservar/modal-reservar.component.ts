import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-reservar',
  templateUrl: './modal-reservar.component.html',
  styleUrls: ['./modal-reservar.component.scss'],
})
export class ModalReservarComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    public router: Router,
  ) { }

  ngOnInit() {}

  enviar() {
    this.router.navigate(['/agendamentos', '1']);
  }
}
