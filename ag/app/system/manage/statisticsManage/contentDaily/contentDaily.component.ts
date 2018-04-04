import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import { BsModalService , BsModalRef} from 'ngx-bootstrap/modal';
import {ContentDaily} from './contentDaily';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import {ContentDailyForm} from './contentDaily.form';
@Component({
    selector: 'app-contentdaily',
    templateUrl: './contentDaily.component.html',
    styleUrls: ['./contentDaily.component.scss'],
    animations: [routerTransition()]
})
export class ContentDailyComponent implements OnInit {
    userName = '';

    public firstPage: ContentDaily;
  public findPayRecordUrl: string;
  public findPayRecordDetailUrl: string;
  public initInfoFindPayRecordUrl: string;
  public payRecordPerDayList;
  public payRecordPerDayDetailList;
  public companyList;
  public totalPage: number;
  public totalNum: number;
  public pageSize: number;
  public companyId: number;
  public nextText: string;
  public previousText: string;
  public startDateInput: string;
  public endDateInput: string;
  public currentPage: number;
  public text;
  public loading: boolean;
  public loadingbg: boolean;
  public disable: boolean;
  public rotate = true;
  public modalRef: BsModalRef;
    @Input() contentDailyForm: ContentDailyForm;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService, private modalService: BsModalService) {
      this.findPayRecordUrl = appProperties.getUrl() + '/payRecordPerDay/findPayRecordPerDay' ;
      this.initInfoFindPayRecordUrl = appProperties.getUrl() + '/payRecordPerDay/initInfo' ;
      this.findPayRecordDetailUrl = appProperties.getUrl() + '/payRecord/findPayRecord' ;
      this.nextText = '下一页';
      this.previousText = '上一页';
      this.pageSize = 10;
    }

    ngOnInit() {
       this.contentDailyForm = new ContentDailyForm();
       this.loading = true;
       this.loadingbg = false;
       this.disable = true;
       this.getData();
    }
    getData() {
      this.appService.postData(this.initInfoFindPayRecordUrl, '', '').subscribe(
        data => {
          console.log(data.returnObject);
          this.companyList = data.returnObject;
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
      this.appService.postData(this.findPayRecordUrl, this.contentDailyForm, '').subscribe(
        data => {
          this.payRecordPerDayList = data.returnObject;
          this.totalPage = data.totalPage;
          this.currentPage = data.currentPage;
          this.totalNum = data.total;
          this.loading = false;
          this.loadingbg = false;
          this.disable = false;
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    turnToPage(pageNo: number): void {
      if (!(/(^[1-9]\d*$)/.test(pageNo.toString()))) {
        alert('请输入正整数');
        this.text = null;
        return;
      }
      if (pageNo > this.totalPage) {
        alert('超出页码范围了！');
        this.text = null;
        return;
      }
      this.currentPage = pageNo;
      this.contentDailyForm.currentPage = this.currentPage;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    pageChanged(event: any): void {
      this.contentDailyForm.currentPage = event.page;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    checkData() {
      this.loading = true;
      this.loadingbg = true;
      const startDateInput = new Date(this.startDateInput);
      const endDateInput = new Date(this.endDateInput);
      const startDate = startDateInput.getFullYear() + '-' + (startDateInput.getMonth() + 1) + '-' + startDateInput.getDate();
      const endDate = endDateInput.getFullYear() + '-' + (endDateInput.getMonth() + 1) + '-' + endDateInput.getDate();
      if (this.companyId !== null && this.companyId !== undefined) {
        this.contentDailyForm.companyId = this.companyId;
      }
      if (this.startDateInput !== null && this.startDateInput !== undefined) {
        this.contentDailyForm.startDate = startDate;
      }
      if (this.endDateInput !== null && this.endDateInput !== undefined) {
        this.contentDailyForm.endDate = endDate;
      }
      console.log(this.contentDailyForm);
      this.appService.postData(this.findPayRecordUrl, this.contentDailyForm, '').subscribe(
        data => {
          console.log(data);
          this.payRecordPerDayList = data.returnObject;
          this.totalPage = data.totalPage;
          this.currentPage = data.currentPage;
          this.totalNum = data.total;
          this.loading = false;
          this.loadingbg = false;
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    exportsData() {
      // TODO
    }
    selectedCompany(index) {
      this.companyId = index;
    }
    detail(template: TemplateRef<any>, item) {
      this.modalRef = this.modalService.show(template,
        Object.assign({}, { class: 'modal-lg' }));
      console.log(item.createTime);
      console.log(this.nextDay(item.createTime));
      this.contentDailyForm.companyId = 53;
      this.contentDailyForm.startDate = item.createTime;
      this.contentDailyForm.endDate = this.nextDay(item.createTime);
      this.appService.postData(this.findPayRecordDetailUrl, this.contentDailyForm, '').subscribe(
        data => {
          this.payRecordPerDayDetailList = data.returnObject[0].payDtoList;
          console.log(this.payRecordPerDayDetailList);
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    nextDay(date) {
      if (date === null || date === undefined) {
        console.log('date 空了');
        return;
      }
      const yesterday_milliseconds = new Date(date).getTime() + 1000 * 60 * 60 * 24;
      const yesterday = new Date(yesterday_milliseconds);
      const strYear = yesterday.getFullYear();
      const strDay = yesterday.getDate();
      const strMonth = yesterday.getMonth() + 1;
      return strYear + '-' + strMonth + '-' + strDay;
    }
}
