import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';

import { SendNewsRoutingModule } from './sendNews-routing.module';
import { SendNewsComponent } from './sendNews.component';
import {AppProperties} from '../../../app.properties';
import { AppService } from '../../../app-service';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PageHeaderModule } from '../../../shared';

import { UEditorModule } from '../../../../../lib';
@NgModule({
    imports: [
        CommonModule, SendNewsRoutingModule, TranslateModule,
        CKEditorModule, PageHeaderModule, FormsModule, FileUploadModule,
        UEditorModule.forRoot({
        // 指定ueditor.js路径目录
        path: 'assets/ueditor/',
        // 默认全局配置项
        options: {
          themePath: '/assets/ueditor/themes/'
        }
      }),
    ],
    providers: [AppService, AppProperties],
    declarations: [SendNewsComponent]
})
export class SendNewsModule {}
