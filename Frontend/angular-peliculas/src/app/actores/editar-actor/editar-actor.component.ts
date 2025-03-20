import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  @Input({transform:numberAttribute})
  id!: number;

  actor: ActorDTO = {id: 1, nombre:'hom Halland',fechaNacimiento: new Date(1999,0,25),imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/330px-Tom_Hardy_by_Gage_Skidmore.jpg"}

  guardarCambios( actor:ActorCreacionDTO){
    console.log("Editando Actor",actor)
  }
}
