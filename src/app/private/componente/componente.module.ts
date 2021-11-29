import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponenteRoutingModule } from './componente-routing.module';
import { ComponenteComponent } from './componente.component';


@NgModule({
  declarations: [
    ComponenteComponent
  ],
  imports: [
    CommonModule,
    ComponenteRoutingModule
  ]
})
export class ComponenteModule { }
