import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ListadoComponent } from './pages/listado/listado.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { TicketsComponent } from './pages/tickets/tickets.component'

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    ContactosComponent,
    ListadoComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
