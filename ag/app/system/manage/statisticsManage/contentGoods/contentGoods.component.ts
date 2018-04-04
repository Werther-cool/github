import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import { BsModalService , BsModalRef} from 'ngx-bootstrap/modal';
import {ContentGoods} from './contentGoods';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import {ContentGoodsForm} from './contentGoods.form';
import * as $ from 'jquery';
@Component({
    selector: 'app-contentgoods',
    templateUrl: './contentGoods.component.html',
    styleUrls: ['./contentGoods.component.scss'],
    // styleUrls: ['./vmInventory.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'],
    animations: [routerTransition()]
})
export class ContentGoodsComponent implements OnInit {
    userName = '';

  public findItemSaleStatisticsUrl: string;
  public findItemSaleStatisticsInitInfoUrl: string;
  public itemSaleStatisticsList;
  public companyInfoList;
  public itemInfoList;
    @Input() contentGoodsForm: ContentGoodsForm;
  public currentPage: number;
  public text: number;
  public nextText: string;
  public previousText: string;
    public pageSize: number;
    public totalNum: number;
  public totalPage: number;
  public startDateInput: string;
  public endDateInput: string;
  public companyId: number;
  public itemId: number;
  public loading: boolean;
  public loadingbg: boolean;
  public disable: boolean;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService) {
      this.findItemSaleStatisticsUrl = appProperties.getUrl() + '/itemSaleStatistics/findItemSaleStatistics' ;
      this.findItemSaleStatisticsInitInfoUrl = appProperties.getUrl() + '/itemSaleStatistics/initInfo' ;
      this.nextText = '下一页';
      this.previousText = '上一页';
    }

    ngOnInit() {
      this.contentGoodsForm = new ContentGoodsForm();
      this.loading = true;
      this.loadingbg = false;
      this.disable = true;
      this.getData();
    }
    getData() {
      this.appService.postData(this.findItemSaleStatisticsInitInfoUrl, '', '').subscribe(
        data => {
          this.companyInfoList = data.returnObject.companyInfo;
          this.itemInfoList = data.returnObject.itemInfo;
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
      this.appService.postData(this.findItemSaleStatisticsUrl, this.contentGoodsForm, '').subscribe(
        data => {
          console.log(data);
          this.itemSaleStatisticsList = data.returnObject;
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
      this.contentGoodsForm.currentPage = this.currentPage;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    pageChanged(event: any): void {
      this.contentGoodsForm.currentPage = event.page;
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
        this.contentGoodsForm.companyId = this.companyId;
      }
      if (this.itemId !== null) {
        this.contentGoodsForm.itemId = this.itemId;
      }
      if (this.startDateInput !== null && this.startDateInput !== undefined) {
        this.contentGoodsForm.startDate = startDate;
      }
      if (this.endDateInput !== null && this.endDateInput !== undefined) {
        this.contentGoodsForm.endDate = endDate;
      }
      this.appService.postData(this.findItemSaleStatisticsUrl, this.contentGoodsForm, '').subscribe(
        data => {
          console.log(data);
          this.itemSaleStatisticsList = data.returnObject;
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
    selectedItem() {
      this.itemId = Number($('#itemSelect').find('option:selected').val());
    }
    selectedCompany(index) {
      this.companyId = index;
    }
}
