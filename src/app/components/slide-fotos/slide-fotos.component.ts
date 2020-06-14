import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-fotos',
  templateUrl: './slide-fotos.component.html',
  styleUrls: ['./slide-fotos.component.scss'],
})
export class SlideFotosComponent implements OnInit {

  @Input() fotos: any[];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  constructor() { }

  ngOnInit() {}

}
