import { Component, inject, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-encurso',
  templateUrl: './encurso.page.html',
  styleUrls: ['./encurso.page.scss'],
})
export class EncursoPage implements OnInit {

  viajes: any[]=[];
  datos=inject(DatosService);

  userCondition: boolean | null = null;
  

  constructor() {
    this.datos.mostrarEnCurso2().subscribe(viajes =>{
      this.viajes = viajes;
    });
    
   }

  ngOnInit() {
    
    this.datos.tipousuario2().subscribe(condition => {
      this.userCondition = condition;
      console.log('tipo usuario ->  tr',this.userCondition);
      if(this.userCondition){
        this.datos.mostrarEnCurso2().subscribe(viajes =>{
          this.viajes = viajes;
          console.log('tipo usuario ->  true',this.userCondition);
        });
      }
      if(this.userCondition==false){
        this.datos.mostrarEnCursoPasajero2().subscribe(viajes => {
          this.viajes = viajes;
          console.log('tipo usuario ->  true',this.userCondition);
        });
      }
    });  
  }

  finalizar(id:string){
    this.datos.finalizar(id);
  }

}
