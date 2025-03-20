import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../../funciones/toBase64';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  @Input({required:true})
  titulo!: string;

  @Input()
  imagenGuardada?: string 

  @Output()
  imagen = new EventEmitter<File>()
  
  imagenBase64?: string;

  cambio(event : Event){
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length>0) {
      const file: File  = input.files[0]
      toBase64(file).then((valor: string)=>this.imagenBase64 = valor)
      .catch((error)=>console.log(error));
      
      this.imagen.emit(file)
      this.imagenBase64 = undefined
    }
  }
}
