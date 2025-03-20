import { Component, EventEmitter, inject, Input, input, model, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";
@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {

  ngOnInit(): void {
    
    if (this.modelo!==undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  
  private formBuilder = inject(FormBuilder);

  @Input()
  modelo?: ActorDTO
  
  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>()


  form = this.formBuilder.group({
    nombre:['',{
      validators:[Validators.required]
    }],
    fechaNacimiento: new FormControl<Date| null>(null,{
      validators:[Validators.required,fechaNoPuedeSerFutura()]
    }),
    imagen: new FormControl<File | string |null>(null,
      {validators:[Validators.required]})
  })

  obtenerErrorCampoNombre():string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return "El campo nombre es requerido "
    }
    return ''
  }

  obtenerErrorCampoFechaNacimiento():string {
    let campo = this.form.controls.fechaNacimiento;

    if (campo.hasError('required')) {
      return "La fecha de nacimiento es requerida"
    }
    if (campo.hasError("futuro")) {
      return campo.getError("futuro").mensaje
    }
    return ''
  }

  procesarImagen(imagen : File){
    this.form.controls.imagen.setValue(imagen)
  }
  guardarCambios(){

    if (!this.form.valid) {
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    if (typeof actor.imagen ==="string") {
      actor.imagen = undefined
    }
    this.posteoFormulario.emit(actor)
  }
}
