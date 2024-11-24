import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajePage } from './viaje.page';
import { DireccionViajeComponent } from '../direccion-viaje/direccion-viaje.component';

const routes: Routes = [
  {
    path: '',
    component: ViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
  
})
export class ViajePageRoutingModule {}
