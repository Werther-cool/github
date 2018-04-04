import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import { BsModalService , BsModalRef} from 'ngx-bootstrap/modal';
import {ContentVending} from './contentVending';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import {ContentVendingForm} from './contentVending.form';
import {el} from '@angular/platform-browser/testing/src/browser_util';
@Component({
    selector: 'app-contentvending',
    templateUrl: './contentVeding.component.html',
    styleUrls: ['./contentVending.component.scss'],
    animations: [routerTransition()]
})
export class ContentVendingComponent implements OnInit {
    userName = '';

  public findPerMachinesSaleUrl: string;
  public findPerMachinesSaleInitUrl: string;
    @Input() contentVendingForm: ContentVendingForm;
  public currentPage: number;
  public text: number;
  public nextText: string;
  public previousText: string;
  public startDateInput: string;
  public endDateInput: string;
  public machinesSaleStatisticsList;
  public machinesCompanyList;
  public companyId: number;
  public vendingMachinesCode: number;
  public pageSize: number;
  public totalNum: number;
  public totalPage: number;
  public loading: boolean;
  public loadingbg: boolean;
  public disable: boolean;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService) {
      this.findPerMachinesSaleUrl = appProperties.getUrl() + '/machinesSaleStatistics/findPerMachinesSale' ;
      this.findPerMachinesSaleInitUrl = appProperties.getUrl() + '/machinesSaleStatistics/initInfo' ;
      this.nextText = '下一页';
      this.previousText = '上一页';
    }

    ngOnInit() {
      this.contentVendingForm = new ContentVendingForm();
      this.loading = true;
      this.loadingbg = false;
      this.disable = true;
      this.getData();
    }
    getData() {
      this.appService.postData(this.findPerMachinesSaleUrl, this.contentVendingForm, '').subscribe(
        data => {
          this.machinesSaleStatisticsList = data.returnObject;
          console.log(this.machinesSaleStatisticsList);
          this.currentPage = data.currentPage;
          this.totalNum = data.total;
          this.totalPage = data.totalPage;
          this.loading = false;
          this.loadingbg = false;
          this.disable = false;
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
      this.appService.postData(this.findPerMachinesSaleInitUrl, '', '').subscribe(
        data => {
           this.machinesCompanyList = data.returnObject;
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
      this.contentVendingForm.currentPage = this.currentPage;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    pageChanged(event: any): void {
      this.contentVendingForm.currentPage = event.page;
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
      if (this.companyId !== null) {
        this.contentVendingForm.companyId = this.companyId;
      }
      if (this.vendingMachinesCode !== null) {
        this.contentVendingForm.vendingMachinesCode = this.vendingMachinesCode;
      }
      if (this.startDateInput !== null && this.startDateInput !== undefined) {
        this.contentVendingForm.startDate = startDate;
      }
      if (this.endDateInput !== null && this.endDateInput !== undefined) {
        this.contentVendingForm.endDate = endDate;
      }
      console.log(this.contentVendingForm);
      this.appService.postData(this.findPerMachinesSaleUrl, this.contentVendingForm, '').subscribe(
        data => {
          this.machinesSaleStatisticsList = data.returnObject;
          console.log(this.machinesSaleStatisticsList);
          this.currentPage = data.currentPage;
          this.totalNum = data.total;
          this.totalPage = data.totalPage;
          this.loading = false;
          this.loadingbg = false;
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    selected(index) {
        this.companyId = index;
    }
    returnTwoDecimal(num) {
      return num.toFixed(2);
    }
}
