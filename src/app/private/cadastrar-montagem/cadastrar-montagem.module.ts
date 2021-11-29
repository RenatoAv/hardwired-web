import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarMontagemRoutingModule } from './cadastrar-montagem-routing.module';
import { CadastrarMontagemComponent } from './cadastrar-montagem.component';


@NgModule({
  declarations: [
    CadastrarMontagemComponent
  ],
  imports: [
    CommonModule,
    CadastrarMontagemRoutingModule
  ]
})
export class CadastrarMontagemModule { }
