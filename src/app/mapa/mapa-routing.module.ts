import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CUSTOM_ELEMENTS_SCHEMA  }  from  '@angular/core' ;

import { MapaPage } from './mapa.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPageRoutingModule {}
