import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }

  validarCorreo(correo: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(cl|com)$/;
    return regex.test(correo);
  }

  validarPatente(patente: string): boolean {
    const regex = /^[A-Z]{2}-\d{2}-\d{2}$|^[A-Z]{2}-[A-Z]{2}-\d{2}$/;
    return regex.test(patente);
  }

  validarRegistro(nombre: string, correo: string, edad: number, rol: string, contrasena: string): boolean {
    if (!nombre || nombre.trim().length === 0) {
      return false;
    }

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(cl|com)$/;
    if (!regexCorreo.test(correo)) {
      return false;
    }

    if (edad < 18) {
      return false;
    }

    if (rol !== 'pasajero' && rol !== 'conductor') {
      return false;
    }

    if (contrasena.length < 7) {
      return false;
    }

    return true;
  }

}
