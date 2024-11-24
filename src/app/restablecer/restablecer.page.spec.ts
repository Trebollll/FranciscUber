import { TestBed } from '@angular/core/testing';
import { TestingService } from '../testing.service';

describe('RestablecerPage', () => {
  let service: TestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('Validar formatos de los correos', () => {
    const correo1 = 'messi@messi.cl';
    let esValido1 = service.validarCorreo(correo1);
    expect(esValido1).toBeTrue;
  });
  
  it('Validar formatos de los correos', () => {
    const correo2 = 'cristiano@cristiano.com';
    let esValido2 = service.validarCorreo(correo2);
    expect(esValido2).toBeTrue;
  });
  
  it('Validar formatos de los correos', () => {
    const correo3 = 'coffycoffy.cl';
    let esValido3 = service.validarCorreo(correo3);
    expect(esValido3).toBeFalse;
  });
  
  it('Validar formatos de los correos', () => {
    const correo4 = 'coffy@coffycl';
    let esValido4 = service.validarCorreo(correo4);
    expect(esValido4).toBeFalse;
  });
  
  it('Validar formatos de los correos', () => {
    const correo5 = 'coffy@coffy.net';
    let esValido5 = service.validarCorreo(correo5);
    expect(esValido5).toBeFalse;
  });  

});
