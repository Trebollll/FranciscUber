import { Component, inject, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-solicitudes-viajes',
  templateUrl: './solicitudes-viajes.page.html',
  styleUrls: ['./solicitudes-viajes.page.scss'],
})
export class SolicitudesViajesPage implements OnInit {

  viajes: any[]=[];
  datos=inject(DatosService);
  constructor() { }

  ngOnInit() {
    this.datos.obtenerViajeActivosPorUsuario().subscribe(viajes =>{
      this.viajes = viajes;
    })
  }

  aceptarViaje(id:string){
    this.datos.aceptarViaje(id);
  }

  rechazarViaje(id:string){
    this.datos.rechazarViaje(id);
  }

}
