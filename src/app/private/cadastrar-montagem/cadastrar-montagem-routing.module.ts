import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarMontagemComponent } from './cadastrar-montagem.component';

const routes: Routes = [{ path: '', component: CadastrarMontagemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarMontagemRoutingModule { }
