import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,
    TranslateModule,
    FormsModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [InfoComponent]
})
export class InfoPageModule {}
