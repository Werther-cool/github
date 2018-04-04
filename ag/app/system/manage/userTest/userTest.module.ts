import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UserTestRoutingModule } from './userTest-routing.module';
import { UserTestComponent } from './userTest.component';

@NgModule({
    imports: [
        CommonModule,
      UserTestRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [UserTestComponent]
})
export class UserTestModule {}
