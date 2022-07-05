import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactosService } from 'src/app/services/contactos.service';
import { ParqueaderoService } from 'src/app/services/parqueadero.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado: any[] = []
  tickets: any

  constructor(private router: Router,private contactosService: ContactosService, private parqueaderoService:ParqueaderoService) { }

  ngOnInit(): void {
    this.loadContactos()
  }


  loadContactos(){
    this.listado = this.contactosService.getContactos()
    this.tickets = this.parqueaderoService.getTickets()
    this.tickets = this.parqueaderoService.getTicketsTemp()
    
  }

  goTickets(){
    this.router.navigate(['pages/tickets'])
  }

  doRetirar(numeroTicket:number){
    this.parqueaderoService.salidaVehiculo(numeroTicket).subscribe( data => {
      console.log(data);
      this.loadContactos()
    })

  }

}
