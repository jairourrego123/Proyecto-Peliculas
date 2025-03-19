import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actores',
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actores.component.html',
  styleUrl: './crear-actores.component.css'
})
export class CrearActoresComponent {

  guardarCambios(actor: ActorCreacionDTO){
    console.log("Creando actor",actor);
    
  }
}
