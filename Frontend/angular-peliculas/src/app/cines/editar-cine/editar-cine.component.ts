import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-cine',
  imports: [],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {

@Input({transform:numberAttribute})
  id!: number
  
}
