import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontagemRoutingModule } from './montagem-routing.module';
import { MontagemComponent } from './montagem.component';
import { PaginacaoModule } from 'src/app/shared/paginacao/paginacao.module';


@NgModule({
  declarations: [
    MontagemComponent
  ],
  imports: [
    CommonModule,
    MontagemRoutingModule,
    PaginacaoModule
  ]
})
export class MontagemModule { }
