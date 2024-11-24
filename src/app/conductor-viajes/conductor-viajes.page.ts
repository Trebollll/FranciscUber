import { Component, inject, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { LoginService } from '../login.service';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-conductor-viajes',
  templateUrl: './conductor-viajes.page.html',
  styleUrls: ['./conductor-viajes.page.scss'],
})
export class ConductorViajesPage implements OnInit {

  viajes: any[]=[];
  datos=inject(DatosService);



  //nuevo
  loginSrv = inject(LoginService);
  firestore = inject(FirestoreService);

  
  

  constructor() { }

  ngOnInit() {

    
    this.datos.mostrarCreadosConductor().subscribe(viajes =>{
      this.viajes = viajes;
    });
  }

   

 

  eliminar(id:string){
    this.datos.eliminar(id);
  }


}
