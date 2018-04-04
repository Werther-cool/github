import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule  } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { VmInventoryRoutingModule } from './vmInventory-routing.module';
import { VmInventoryComponent } from './vmInventory.component';
import {AppService} from '../../../../app-service';
import {AppProperties} from '../../../../app.properties';

@NgModule({
    imports: [
        CommonModule,
      VmInventoryRoutingModule,
        TranslateModule,
        FormsModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        NgbDropdownModule.forRoot(),
        PaginationModule.forRoot()
    ],
    providers: [AppService, AppProperties],
    declarations: [VmInventoryComponent]
})
export class VmInventoryModule {}
