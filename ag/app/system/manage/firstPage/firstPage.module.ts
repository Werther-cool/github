import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FirstPageRoutingModule } from './firstPage-routing.module';
import { FirstPageComponent } from './firstPage.component';
import {AppService} from '../../../app-service';
import {AppProperties} from '../../../app.properties';

@NgModule({
    imports: [
        CommonModule,
        FirstPageRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [FirstPageComponent]
})
export class FirstPageModule {}
