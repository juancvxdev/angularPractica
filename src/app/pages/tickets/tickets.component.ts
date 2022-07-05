import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ParqueaderoService } from 'src/app/services/parqueadero.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();

  constructor(private parqueaderoService :ParqueaderoService,
    private router:Router) { }

  ngOnInit(): void {
  }

  doGuardar(){
    this.parqueaderoService.ingresoVehiculo(this.vehiculo).subscribe( data => {
      console.log(data);
      this.router.navigate(['pages/listado'])
    })
  }



}
