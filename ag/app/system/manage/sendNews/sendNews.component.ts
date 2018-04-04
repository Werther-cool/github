import { Component, OnInit, Input, ChangeDetectorRef   } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../router.animations';
import {NewForm} from './new.form';
import {AppProperties} from '../../../app.properties';
import {AppService} from '../../../app-service';

@Component({
    selector: 'app-sendnews',
    templateUrl: './sendNews.component.html',
    styleUrls: ['./sendNews.component.scss'],
    animations: [routerTransition()]
})
export class SendNewsComponent implements OnInit {
    userName = '';
    @Input() newForm: NewForm;

    private addTmpUrl: string;
    private addNewUrl: string;
    public full_source: string;
    public message: string;
    constructor(private translate: TranslateService, public router: Router,
                private changeDetectorRef: ChangeDetectorRef,
                private appProperties: AppProperties, private appService: AppService) {
      this.changeDetectorRef = changeDetectorRef;
      this.full_source = '';
      this.addTmpUrl = appProperties.getUrl() + '/page/addCarNews' ;
      this.addNewUrl = appProperties.getUrl() + '/page/addCarNews';
      this.message = '';
    }

    ngOnInit() {
      this.newForm = new NewForm();
    }

   saveNew(typeid) {
    const myHttpHead = 'login';
    this.newForm.typeId = typeid;
    this.newForm.userId = sessionStorage.userId;
    this.appService.postData(this.addNewUrl, this.newForm, myHttpHead).subscribe(
      data => {
        this.message = data['message'];
        this.ngOnInit();
      },
      error => {
        console.log('erro:' + error.message);
      }
    );
  }


}
