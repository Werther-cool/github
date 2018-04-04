import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAdminLoginComponent } from './userAdminLogin.component';

const routes: Routes = [
  {path: '', component: UserAdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminLoginRoutingModule {}
