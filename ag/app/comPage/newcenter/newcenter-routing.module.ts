import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcenterComponent} from './newcenter.component';

const routes: Routes = [
  {
    path: '', component: NewcenterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcenterRoutingModule {}
