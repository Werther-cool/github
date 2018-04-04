import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../../router.animations';
import {_document} from "@angular/platform-browser/src/browser";
import {FirstPage} from "./firstPage";
import {HttpClient} from "@angular/common/http";
import {AppProperties} from "../../../app.properties";
import {AppService} from "../../../app-service";
import {FirstPageForm} from "./firstPage.form";
@Component({
    selector: 'app-firstpage',
    templateUrl: './firstPage.component.html',
    styleUrls: ['./firstPage.component.scss'],
    animations: [routerTransition()]
})
export class FirstPageComponent implements OnInit {
    userName = '';

    public firstPage: FirstPage;
    private firstPageUrl: string;
    @Input() firstPageForm: FirstPageForm;
    public message: string;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService) {
      this.message = '';
      this.firstPageUrl = appProperties.getUrl() + '/page/inFirstPage' ;
    }

    ngOnInit() {
      this.firstPageForm = new FirstPageForm();
      this.firstPage = new FirstPage();
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
    // tab切换，点击事件传自定义下标，id获取元素，定义字符串前缀+[下标]
    change(index) {
      let s = 'main';
       s += index;
      document.getElementById(s).style.display = 'block';
      for ( let i = 0; i < 5 ; i++) {
        if ( i !== index ) {
          document.getElementById('main' + i).style.display = 'none';
        }
      }
    }
}
