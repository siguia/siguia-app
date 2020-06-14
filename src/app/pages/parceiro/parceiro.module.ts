import { NgModule } from '@angular/core';

import { ParceiroPageRoutingModule } from './parceiro-routing.module';

import { ParceiroPage } from './parceiro.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ParceiroPageRoutingModule
  ],
  declarations: [ParceiroPage]
})
export class ParceiroPageModule {}
