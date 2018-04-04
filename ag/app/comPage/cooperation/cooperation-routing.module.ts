import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CooperationComponent } from './cooperation.component';

const routes: Routes = [
  {
    path: '', component: CooperationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CooperationRoutingModule {}
