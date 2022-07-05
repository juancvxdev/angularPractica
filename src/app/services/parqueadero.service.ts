import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  constructor(private http: HttpClient) { }
  getTickets() {
    let url = environment.WS_PATH + "parqueadero/tickets"
    return this.http.get<any>(url);
  }
  getTicketsTemp() {
    let url = environment.WS_PATH + "parqueadero/ticketsTemp"
    return this.http.get<any>(url);
  }
  ingresoVehiculo(vehiculo: Vehiculo) {
    let url = environment.WS_PATH + "parqueadero/ingreso"
    return this.http.post(url, vehiculo);
  }

  salidaVehiculo(numero: number) {
    let url = environment.WS_PATH + "parqueadero/salida"
    return this.http.post(url, numero);

  }

}
