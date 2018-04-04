import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserAdminLoginRoutingModule } from './userAdminLogin-rooting.module';
import { UserAdminLoginComponent } from './userAdminLogin.component';

import {AppProperties} from '../../app.properties';
import { AppService } from '../../app-service';
@NgModule({
  imports: [CommonModule, UserAdminLoginRoutingModule, FormsModule, HttpClientModule ],
  providers: [AppService, AppProperties],
  declarations: [UserAdminLoginComponent]
})
export class UserAdminLoginModule {}
