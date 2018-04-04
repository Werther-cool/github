import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentManageRoutingModule } from './contentManage-routing.module';
import { ContentManageComponent } from './contentManage.component';
import {AppService} from '../../../../app-service';
import {AppProperties} from '../../../../app.properties';

@NgModule({
    imports: [
        CommonModule,
        ContentManageRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [ContentManageComponent]
})
export class ContentManageModule {}
