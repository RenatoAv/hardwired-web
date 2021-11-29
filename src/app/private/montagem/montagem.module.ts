import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontagemRoutingModule } from './montagem-routing.module';
import { MontagemComponent } from './montagem.component';


@NgModule({
  declarations: [
    MontagemComponent
  ],
  imports: [
    CommonModule,
    MontagemRoutingModule
  ]
})
export class MontagemModule { }
