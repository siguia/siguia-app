import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

const links = [
  'https://i0.wp.com/trucao.com.br/wp-content/uploads/2019/05/capa_site.jpg?fit=1920%2C1080&ssl=1',
  'https://static.ndonline.com.br/2012/11/11-11-2012-15-36-00-caminhoneiros-descanso-nova-legislacao.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuen7kBs6X8VoetSlRqZ6dtl5bBZ7yf_VsHwd346Mho2VTBw44&usqp=CAU'
]

export const fakeParceiro = {
  id: 1,
  uuid: '987rt98y7rt89yr7tyr',
  nome: 'Posto Chefão',
  classificacao: 4.5,
  telefone: '(31) 97887-9965',
  fotos: [
    {
      link: links[randomInt(0, 2)]
    },
    {
      link: links[randomInt(0, 2)]
    },
    {
      link: links[randomInt(0, 2)]
    },
  ]
}

export const fakeAgendamento = {
  uuid: 'piodsapdosoadsapdosadoodi',
  parceiro: fakeParceiro,
  motorista: {},
}

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}