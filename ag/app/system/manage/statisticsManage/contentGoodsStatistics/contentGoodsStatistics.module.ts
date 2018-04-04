import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentGoodsStatisticsRoutingModule } from './contentGoodsStatistics-routing.module';
import { ContentGoodsStatisticsComponent } from './contentGoodsStatistics.component';
import {AppService} from '../../../../app-service';
import {AppProperties} from '../../../../app.properties';

@NgModule({
    imports: [
        CommonModule,
        ContentGoodsStatisticsRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [ContentGoodsStatisticsComponent]
})
export class ContentGoodsStatisticsModule {}
