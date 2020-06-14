import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { Parceiro } from 'src/app/models/parceiro';

@Component({
  selector: 'app-card-parceiro',
  templateUrl: './card-parceiro.component.html',
  styleUrls: ['./card-parceiro.component.scss'],
})
export class CardParceiroComponent implements OnInit {
  @ViewChild(IonSlides) slider: IonSlides;
  @Input() parceiro: Parceiro;

  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 4,
    centeredSlides: false,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async toast(message: string) {
    this.showToast({message});
  }

  async showToast(alert: any) {
    alert.duration = alert.duration || 200;
    alert.color = alert.color || 'primary';
    const toast = await this.toastController.create(alert);
    toast.present();
  }

  async toastSuccess(message: string) {
    const color = 'success';
    this.showToast({message, color});
  }
}
