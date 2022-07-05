import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  listado: any[] = []

  constructor() { }

  getContactos(){
    return this.listado;
  }
  setContacto(contacto: Contacto){
    this.listado.push(contacto);
  }
}
