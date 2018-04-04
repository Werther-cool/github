import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import {ContentGoodsStatistics} from './contentGoodsStatistics';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import {ContentGoodsStatisticsForm} from './contentGoodsStatistics.form';
@Component({
    selector: 'app-contentgoodsstatistics',
    templateUrl: './contentGoodsStatistics.component.html',
    styleUrls: ['./contentGoodsStatistics.component.scss'],
    // styleUrls: ['./contentGoodsStatistics.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'],
    animations: [routerTransition()]
})
export class ContentGoodsStatisticsComponent implements OnInit {
    userName = '';

    public firstPage: ContentGoodsStatistics;
    private firstPageUrl: string;
    @Input() firstPageForm: ContentGoodsStatisticsForm;
    public message: string;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService) {
      this.message = '';
      this.firstPageUrl = appProperties.getUrl() + '/page/inFirstPage' ;
    }

    ngOnInit() {
      this.firstPageForm = new ContentGoodsStatisticsForm();
      this.firstPage = new ContentGoodsStatistics();
      this.firstPageForm.userId = sessionStorage.userId;
    }
}
