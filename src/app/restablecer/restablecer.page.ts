import { Component, inject, OnInit } from '@angular/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  
  alertController = inject(AlertController);
  nav = inject(NavController);

  email :string = '';

  constructor() { }

  ngOnInit() {
  }

  async resetPassword(){
    if(!this.email){
      this.alert('Error','Por favor ingrese correo electrónico valido');
      console.log('nada');
      
    }
    try{
      await FirebaseAuthentication.sendPasswordResetEmail({email : this.email});
      this.alert('Éxito','Se ha enviado un enlace para restablecer la contraseña a tu correo.');
      this.nav.navigateRoot('/loginpasajero')
      console.log('enlace enviado');

    }catch(error){
      this.alert('Error!','Hubo un problema al enviar enlace. Verifique su correo e intente nuevamente.');
      console.log('error');   
    }

  }
  async alert(header: string, message:string){
    const showAlert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await showAlert.present();
  }




}
