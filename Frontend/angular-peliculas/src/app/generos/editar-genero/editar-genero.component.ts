import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDto, GeneroDto } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

  @Input({transform:numberAttribute})
  id!: number;

  genero: GeneroDto = {id:1,nombre:'Comedia'}
  guardarCambios(genero : GeneroCreacionDto){
    console.log("Registro a aactualizar", genero);
    
  }
}
