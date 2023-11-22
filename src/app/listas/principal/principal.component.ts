import { Component } from '@angular/core';
import { ListsService } from '../service/lists.service';
import { Tarea } from '../interfaces/list.iterface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  constructor(private listsService: ListsService) {
    
  }

  get getTareas(): Tarea[] {
    return this.listsService.getTareas;
  }

  get getVisibleTarea(){
    return this.listsService.getVisibleTarea;
  }


  addList(list: Tarea) {
    this.listsService.addList(list);
  }

  deleteLista(id: number){
    this.listsService.borrarLista(id);
  }

  cambiarMarca(id: number){
    this.listsService.cambiarMarca(id);
  }

}
