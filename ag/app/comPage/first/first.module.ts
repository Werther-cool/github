import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
// import { SliderComponent } from '../index/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [FirstComponent]
})
export class FirstPageModule {}
