import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../interfaces/list.iterface';

@Component({
  selector: 'app-add-lista',
  templateUrl: './add-lista.component.html',
  styleUrl: './add-lista.component.css'
})
export class AddListaComponent {
  @Input() visible: boolean = false;
  @Output() aniadirLista: EventEmitter<Tarea> = new EventEmitter();
  
  listaTemp: Tarea = {
    name: '',
    desc: '',
    completada: false
  }


  onNuevaLista(): void {
    this.aniadirLista.emit(this.listaTemp);
    this.listaTemp = {
      name: '',
      desc: '',
      completada: false
    }
  }




}
