import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  comunicationObject = new EventEmitter();

  constructor() { }

  // Funciónque que recibe dos textos, el mensajey el destinarario, crea un objeto y lo emite
  emitir(mensaje: string, destination:string) {
    const obj = {
      msg: mensaje,
      dest: destination
    };
    this.comunicationObject.emit(JSON.stringify(obj));
  }
}
