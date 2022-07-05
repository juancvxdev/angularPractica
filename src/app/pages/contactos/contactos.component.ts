import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  firstname : string = 'Jimmy'
  lastname : string = 'Curillo'
  age : number = 25
  color: string ='#1976D2'


  constructor(private router: Router, private contactosService: ContactosService) { }

  ngOnInit(): void {
  }
  
  goAcercaDe(){
    let params: NavigationExtras = {
      queryParams: {
        nombre: this.firstname,
        apellido: this.lastname,
        age: this.age
      }} 
    this.router.navigate(['pages/acercade'],params)
  }

  doGuardar(){
    let contacto: Contacto = new Contacto
    contacto.firstname=this.firstname
    contacto.lastname=this.lastname
    contacto.age=this.age
    this.contactosService.setContacto(contacto)

    this.router.navigate(['pages/listado'])
    
    //this.loadContactos()

    //console.log(this.firstname, this.lastname)
  }

}
