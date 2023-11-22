import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListaComponent } from './add-lista/add-lista.component';
import { MostrarListaComponent } from './mostrar-lista/mostrar-lista.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AddListaComponent,
    MostrarListaComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class ListasModule { }
