import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule  } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { ContentGoodsRoutingModule } from './contentGoods-routing.module';
import { ContentGoodsComponent } from './contentGoods.component';
import {AppService} from '../../../../app-service';
import {AppProperties} from '../../../../app.properties';

@NgModule({
    imports: [
        CommonModule,
        ContentGoodsRoutingModule,
        TranslateModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        NgbDropdownModule.forRoot(),
        PaginationModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [ContentGoodsComponent]
})
export class ContentGoodsModule {}
