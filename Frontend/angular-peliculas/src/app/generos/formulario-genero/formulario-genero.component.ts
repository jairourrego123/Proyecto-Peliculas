import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GeneroCreacionDto, GeneroDto } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent  implements OnInit {

  ngOnInit(): void {

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }

  }

  

  private formbuilder = inject(FormBuilder)

  @Input()
  modelo?:GeneroDto

  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDto>()

  form = this.formbuilder.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayuscula()]}]
  })

  obtenerErrorCampoNombre():string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return "El campo nombre es requerido "
    }

    if (nombre.hasError('primeraLetraMayiscula')) {
      return nombre.getError('primeraLetraMayiscula').mensaje;
      
    }
    return ""
  }

  guardarCambios(){

    if (!this.form.valid) {
      return;
    }

    const genero = this.form.value as GeneroCreacionDto;
    this.posteoFormulario.emit(genero)
  }
}
