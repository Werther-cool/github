import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule  } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ContentDataRoutingModule } from './contentData-routing.module';
import { ContentDataComponent } from './contentData.component';
import {AppService} from '../../../../app-service';
import {AppProperties} from '../../../../app.properties';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [
        CommonModule,
        ContentDataRoutingModule,
        TranslateModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        NgbDropdownModule.forRoot(),
        PaginationModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [ContentDataComponent]
})
export class ContentDataModule {
}
