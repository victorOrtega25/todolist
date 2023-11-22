import { Component } from '@angular/core';
import { ListsService } from '../../listas/service/lists.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private listsService: ListsService) {
    
  }

  borrarCompletadas() {
    this.listsService.borrarCompletadas();
  }

  borrarTodas(){
    this.listsService.borrarTodas();
  }
}
