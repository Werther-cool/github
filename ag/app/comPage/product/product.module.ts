import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [ProductComponent]
})
export class ProductPageModule {}
