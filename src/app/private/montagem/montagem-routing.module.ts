import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontagemComponent } from './montagem.component';

const routes: Routes = [{ path: '', component: MontagemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MontagemRoutingModule { }
