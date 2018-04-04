import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import {ContentManage} from './contentManage';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import {ContentManageForm} from './contentManage.form';
@Component({
    selector: 'app-contentmanage',
    templateUrl: './contentManage.component.html',
    styleUrls: ['./contentManage.component.scss'],
    // styleUrls: ['./contentManage.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'],
    animations: [routerTransition()]
})
export class ContentManageComponent implements OnInit {
    userName = '';

    public firstPage: ContentManage;
    private firstPageUrl: string;
    @Input() firstPageForm: ContentManageForm;
    public message: string;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService) {
      this.message = '';
      this.firstPageUrl = appProperties.getUrl() + '/page/inFirstPage' ;
    }

    ngOnInit() {
      this.firstPageForm = new ContentManageForm();
      this.firstPage = new ContentManage();
      this.firstPageForm.userId = sessionStorage.userId;
      this.getFirstPageData();
    }
    getFirstPageData() {
      const myHttpHead = 'login';
      this.appService.postData(this.firstPageUrl, this.firstPageForm, myHttpHead).subscribe(
        data => {
          console.log('message=' +  data['message']);
          if (data['status'] === 1) {
            this.firstPage.fansCount = data['returnObject']['fansCount'];
            this.firstPage.viewCount = data['returnObject']['viewCount'];
            this.firstPage.collectionCount = data['returnObject']['collectioncount'];
            this.firstPage.likeCount = data['returnObject']['likeCount'];
          } else {
            localStorage.setItem('isLoggedin', 'false');
            this.message = data['message'];
            alert(this.message);
          }
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
}
