import { Component, inject } from '@angular/core';
import { AnimationController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';
//import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-loginconductor',
  templateUrl: './loginconductor.page.html',
  styleUrls: ['./loginconductor.page.scss'],
})
export class LoginconductorPage implements ViewDidEnter,ViewWillEnter {



  
  usuarioCond:string = '';
  passCond:string = '';
  
  navController = inject(NavController);
  loginSrv = inject(LoginService);
  
  constructor() {
  }

  ionViewWillEnter(): void {
    
  }

  ionViewDidEnter(): void {
    this.usuarioCond = '';
    this.passCond = '';
  }
  
  async ingresar(){
    await this.loginSrv.login(this.usuarioCond,this.passCond);
    this.navController.navigateForward('/conductor');
    //this.interaction.presentToast('Usuario')
  }


}
