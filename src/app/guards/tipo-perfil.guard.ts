import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { FirestoreService } from '../servicios/firestore.service';

export const tipoPerfilGuard: CanActivateFn = (route, state) => {
  const nav = inject(NavController);
  const loginSrv = inject(LoginService);
  const firestore = inject(FirestoreService);
  return true;
};
