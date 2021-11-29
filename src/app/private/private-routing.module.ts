import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [{ 
  path: '', component: PrivateComponent,
  children: [
    { path: '', redirectTo: 'montagem' },
    { path: 'montagem', loadChildren: () => import('./montagem/montagem.module').then(m => m.MontagemModule) },
    { path: 'componente', loadChildren: () => import('./componente/componente.module').then(m => m.ComponenteModule) },
    { path: 'cadastrar-montagem', loadChildren: () => import('./cadastrar-montagem/cadastrar-montagem.module').then(m => m.CadastrarMontagemModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
