import { NgModule } from '@angular/core';

import { ListaParceirosPageRoutingModule } from './lista-parceiros-routing.module';

import { ListaParceirosPage } from './lista-parceiros.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ListaParceirosPageRoutingModule
  ],
  declarations: [
    ListaParceirosPage
  ]
})
export class ListaParceirosPageModule {}
