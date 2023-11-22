import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../interfaces/list.iterface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListsService } from '../service/lists.service';

@Component({
  selector: 'app-mostrar-lista',
  templateUrl: './mostrar-lista.component.html',
  styleUrl: './mostrar-lista.component.css'
})
export class MostrarListaComponent {
  @Input() listaTareas: Tarea[] = [];
  @Output() onDeleteLista: EventEmitter<number> = new EventEmitter()
  @Output() onCambiaMarca: EventEmitter<number> = new EventEmitter()

  constructor(private snackBar: MatSnackBar, private listsService: ListsService) { }

  tareaTemp: Tarea = {
    name: '',
    desc: '',
    completada: false
  }

  idTemp: number = 0

  name: string = ''

  visible: boolean = false;

  deleteLista(id: number, name: string){
    this.showSnackbar(name)
    this.onDeleteLista.emit(id)
  }

  cambiarMarca(id: number){
    this.onCambiaMarca.emit(id)
  }

  showSnackbar(content: string) {
    this.snackBar.open(`Se ha borrado la tarea ${content}`, '', {
      duration: 3000
    });
  }

  pasarTarea(id: number, nombre: string){
    this.name = nombre
    this.idTemp = id
    this.visible = true
    this.listsService.setVisibleTarea(true)
}

  editarTarea(){
    this.listsService.editarTarea(this.tareaTemp, this.idTemp)
    this.tareaTemp = {
      name: '',
      desc: '',
      completada: false
    }
    this.idTemp = 0
    this.visible = false
    this.listsService.setVisibleTarea(false)
  }

  cancelarEditar(){
    this.visible = false
    this.listsService.setVisibleTarea(false)
    this.tareaTemp = {
      name: '',
      desc: '',
      completada: false
    }
    this.idTemp = 0

  }

}
