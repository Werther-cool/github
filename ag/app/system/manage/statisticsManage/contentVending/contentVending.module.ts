import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { ContentVendingRoutingModule } from './contentVending-routing.module';
import { ContentVendingComponent } from './contentVeding.component';
import {AppService} from '../../../../app-service';
import {AppProperties} from '../../../../app.properties';

@NgModule({
    imports: [
        CommonModule,
        ContentVendingRoutingModule,
        TranslateModule,
        FormsModule,
        ModalModule.forRoot(),
        NgbDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [ContentVendingComponent]
})
export class ContentVendingModule {}
