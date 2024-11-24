import { Component, inject, OnInit } from '@angular/core';
import { FirestoreService } from '../servicios/firestore.service';
import { Viaje} from '../_models/viajes';
import { InteraccionService } from '../servicios/interaccion.service';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { DatosService } from '../datos.service';




@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {


 

  viajes: Viaje[] = [];
  data: Viaje = {
    id: '',
    fecha: '',
    patente: '',
    vehiculo: '',
    origen: '',
    destino: '',
    pasajeros: '',
    gama:'',
    precio: '',
    img: '',
    usuarioId: '',
    idPasajero: '',
    estado: 'pendiente',
  }


  viajeService = inject(DatosService);

  firestore = inject(FirestoreService);
  interaccion = inject(InteraccionService);
  loginSrv = inject(LoginService);
  nav = inject(NavController);

  
  
  constructor() {
  }

  ngOnInit() {}

  agregarViaje(){
    this.interaccion.presentLoading('Generando Viaje...');
    this.viajeService.agregarViaje(this.data)
    .then(() => {
      this.interaccion.closeLoading();
      this.interaccion.presentToast('Generado con éxito!')
      this.nav.navigateRoot('/home');
      console.log('viaje agregado con exito');
    })
    .catch((error) =>{
      this.interaccion.closeLoading();
      this.interaccion.presentToast('Intente nuevamente!')
      console.log('error',error);
    });
  }

  solicitarViaje(){

  }

}
