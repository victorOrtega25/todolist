import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/list.iterface';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  visible: boolean = false

  tareas: Tarea[] = [
    //{
    //  name: 'Compras de supermercado',
    //  desc: 'Compras de supermercado',
    //  completada: false
    //},
    //{
    //  name: 'Compras de supermercado1',
    //  desc: 'Compras de supermercado1',
    //  completada: false
    //},
    //{
    //  name: 'Compras de supermercado2',
    //  desc: 'Compras de supermercado2',
    //  completada: false
    //},
    //{
    //  name: 'Compras de supermercado3',
    //  desc: 'Compras de supermercado3',
    //  completada: false
    //},
    //{
    //  name: 'Compras de supermercado4',
    //  desc: 'Compras de supermercado4',
    //  completada: true
    //},
    //{
    //  name: 'Compras de supermercado5',
    //  desc: 'Compras de supermercado5',
    //  completada: true
    //},

  ];

  addList(list: Tarea) {
    if(list.name.length === 0){
      list.name = 'Sin nombre'
    }
    if(list.desc.length === 0){
      list.desc = 'Sin descripción'
    }
    this.tareas.unshift(list);
  }

  borrarLista(id: number){
    this.tareas.splice(id, 1);
    console.log(this.tareas)
  }


  get getTareas(): Tarea[] {
    return this.tareas;
  }

  borrarCompletadas(){
    this.tareas = this.tareas.filter(tarea => tarea.completada === false)
  }

  borrarTodas(){
    this.tareas = []
  }

  cambiarMarca(id: number){
    let tareaTemp: Tarea = this.tareas[id]
    this.tareas.splice(id, 1);
    if(tareaTemp.completada){
      tareaTemp.completada = false
      this.tareas.unshift(tareaTemp)
    }else{
      tareaTemp.completada = true
      this.tareas.push(tareaTemp)
    }
  }

  editarTarea(item: Tarea, id: number){
    this.tareas[id] = item
  }

  get getVisibleTarea(){
    return this.visible
  }

  setVisibleTarea(visible: boolean){
    this.visible = visible
  }
}
