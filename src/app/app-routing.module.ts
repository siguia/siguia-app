import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'parceiros',
    loadChildren: () => import('./pages/lista-parceiros/lista-parceiros.module').then( m => m.ListaParceirosPageModule)
  },
  {
    path: 'parceiros/:id',
    loadChildren: () => import('./pages/parceiro/parceiro.module').then( m => m.ParceiroPageModule)
  },
  {
    path: 'agendamentos/:id',
    loadChildren: () => import('./pages/agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
