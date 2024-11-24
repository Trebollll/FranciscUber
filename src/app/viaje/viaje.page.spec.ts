import { TestBed } from '@angular/core/testing';
import { TestingService } from '../testing.service';

describe('ViajePage', () => {
  let service: TestingService;

  beforeEach((() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
    
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('Validar patentes', () => {
    const patente1 = 'XX-XX-12';
    let esValido1 = service.validarCorreo(patente1);
    expect(esValido1).toBeTrue;
  });

  it('Validar patentes', () => {
    const patente2 = 'XX-12-34';
    let esValido2 = service.validarCorreo(patente2);
    expect(esValido2).toBeTrue;
  });

  it('Validar patentes', () => {
    const patente3 = 'XX*12-34';
    let esValido3 = service.validarCorreo(patente3);
    expect(esValido3).toBeFalse;
  });

  it('Validar patentes', () => {
    const patente4 = 'XXX-12-34';
    let esValido4 = service.validarCorreo(patente4);
    expect(esValido4).toBeFalse;
  });

  it('Validar patentes', () => {
    const patente5 = 'XX-123-45';
    let esValido5 = service.validarCorreo(patente5);
    expect(esValido5).toBeFalse;
  });

  it('Validar patentes', () => {
    const patente6 = 'XX-12-345';
    let esValido6 = service.validarCorreo(patente6);
    expect(esValido6).toBeFalse;
  });

  it('Validar patentes', () => {
    const patente7 = 'X-12-34';
    let esValido7 = service.validarCorreo(patente7);
    expect(esValido7).toBeFalse;
  });

  it('Validar patentes', () => {
    const patente8 = 'XX-1-23';
    let esValido8 = service.validarCorreo(patente8);
    expect(esValido8).toBeFalse;
  });

});
