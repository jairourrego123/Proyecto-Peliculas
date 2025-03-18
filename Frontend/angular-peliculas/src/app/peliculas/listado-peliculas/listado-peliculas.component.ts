import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ListadoGenericoComponent } from "../../compartidos/components/listado-generico/listado-generico.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent,MatButtonModule,MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  @Input({required:true})
  peliculas! : any[]

  removerPelicula(pelicula : any){
    const index = this.peliculas.findIndex((p)=>p.titulo === pelicula.titulo)
    this.peliculas.splice(index,1)
  }
}
