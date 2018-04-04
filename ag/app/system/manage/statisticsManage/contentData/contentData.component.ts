import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import { BsModalService , BsModalRef} from 'ngx-bootstrap/modal';
import {ContentData} from './contentData';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import {ContentDataForm} from './contentData.form';
import * as $ from 'jquery';

@Component({
    selector: 'app-contentdata',
    templateUrl: './contentData.component.html',
    styleUrls: ['./contentData.component.scss'],
    animations: [routerTransition()]
})
export class ContentDataComponent implements OnInit {

  public payRecordUrl: string;
  public payRecordStateUrl: string;
  public updateOrderStateUrl: string;
  public payRecordInitInfoUrl: string;
  public deletePayRecordUrl: string;
  public payDtoListItemId: number;
  public currentPage: number;
  public text: number;
  public nextText: string;
  public previousText: string;
  public sumPrice: number;
  public sumCostPrice: number;
  public payDtoList;
  public payTypeList;
  public idList;
  public payRecordStateList;
  public rotate: boolean;
  public loading: boolean;
  public loadingbg: boolean;
  public disable: boolean;
  public totalPage: number;
  public modalRef: BsModalRef;
  public modalMessage: number;
  public modalMessageMiddle: string;
  public itemId: number;
  public vendingMachinesCode: number;
  public payCode: string;
  public miaoshu: string;
  public ptCode: string;
  public startDateInput: string;
  public endDateInput: string;
    @Input() contentDataForm: ContentDataForm;
    public pageSize: number;
    public totalNum: number;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService, private modalService: BsModalService) {
      this.payRecordUrl = appProperties.getUrl() + '/payRecord/findPayRecord' ;
      this.payRecordStateUrl = appProperties.getUrl() + '/payRecord/findPayState';
      this.updateOrderStateUrl = appProperties.getUrl() + '/payRecord/updateOrderState';
      this.payRecordInitInfoUrl = appProperties.getUrl() + '/payRecord/initInfo';
      this.deletePayRecordUrl = appProperties.getUrl() + '/payRecord/deletePayRecord';
      this.nextText = '下一页';
      this.previousText = '上一页';
      this.rotate = true;
      this.pageSize = 10;
      this.payTypeList = [];
      this.idList = [];
    }

    ngOnInit() {
      this.contentDataForm = new ContentDataForm();
      // this.contentDataForm.companyId = 53;
      // this.contentDataForm.startDate = '2018-01-01';
      // this.contentDataForm.currentPage = 1;
      // this.contentDataForm.pageSize = this.pageSize;
      this.loading = true;
      this.loadingbg = false;
      this.disable = true;
      this.getData();
    }
    getData() {
      this.appService.postData(this.payRecordInitInfoUrl, '', '').subscribe(
        data => {
          const list = data.returnObject.payTypeList;
          if (this.payTypeList === undefined || this.payTypeList.length === 0) {
            for (const i in list) {
              if (true) {
                this.payTypeList.push(list[i]);
              }
            }
          }
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
      this.appService.postData(this.payRecordUrl, this.contentDataForm, '').subscribe(
        data => {
          console.log(data);
          this.payDtoList = data.returnObject[0].payDtoList;
          console.log(this.payDtoList);
          this.currentPage = data.currentPage;
          this.sumPrice = data.returnObject[0].sumPayReocrd.sumPrice;
          this.sumCostPrice = data.returnObject[0].sumPayReocrd.sumCostPrice;
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
      this.contentDataForm.currentPage = this.currentPage;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    pageChanged(event: any): void {
      this.contentDataForm.currentPage = event.page;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    openModal(template: TemplateRef<any>, index) {
      this.modalRef = this.modalService.show(template);
      this.getPayRecordState();
      this.payDtoListItemId = this.payDtoList[index].id;
    }
    confirm(): void {
      this.modalMessage = Number(this.modalMessageMiddle);
      if (isNaN(this.modalMessage) || this.modalMessage === 0) {
        alert('请选择');
        return;
      }
      console.log(this.modalMessage);
      this.updateOrderState(this.modalMessage, this.payDtoListItemId);
      // this.updateOrderStates(this.modalMessage, this.payDtoListItemId);
      this.modalRef.hide();
    }
    decline(): void {
      this.modalMessage = null;
      this.modalRef.hide();
    }
    select() {
       this.modalMessageMiddle = $('#select').val().toString();
    }
    getPayRecordState() {
      this.appService.postData(this.payRecordStateUrl, null).subscribe(
        data => {
          this.payRecordStateList = data.returnObject;
        } ,
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    updateOrderState(state, id) {
      // const body = 'state=' + state  + '&id=' + id;
      this.appService.postData(this.updateOrderStateUrl, {state, id}).subscribe(
        data => {
          if (data.status === 1) {
            alert('更新成功');
            this.loading = true;
            this.loadingbg = true;
            this.getData();
          } else {
            alert('更新失败，请重试');
          }
        } ,
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    check() {
      this.loading = true;
      this.loadingbg = true;
      const startDateInput = new Date(this.startDateInput);
      const endDateInput = new Date(this.endDateInput);
      const startDate = startDateInput.getFullYear() + '-' + (startDateInput.getMonth() + 1) + '-' + startDateInput.getDate();
      const endDate = endDateInput.getFullYear() + '-' + (endDateInput.getMonth() + 1) + '-' + endDateInput.getDate();
      if (this.itemId !== null && this.itemId !== undefined) {
        this.contentDataForm.itemId = this.itemId;
      }
      if (this.vendingMachinesCode !== null && this.vendingMachinesCode !== undefined) {
        this.contentDataForm.vendingMachinesCode = this.vendingMachinesCode;
      }
      if (this.payCode !== null && this.payCode !== undefined) {
        this.contentDataForm.payCode = this.payCode;
      }
      if (this.miaoshu !== null && this.miaoshu !== undefined) {
        this.contentDataForm.miaoshu = this.miaoshu;
      }
      if (this.ptCode !== null && this.ptCode !== undefined) {
        this.contentDataForm.ptCode = this.ptCode;
      }
      if (this.startDateInput !== null && this.startDateInput !== undefined) {
        this.contentDataForm.startDate = startDate;
      }
      if (this.endDateInput !== null && this.endDateInput !== undefined) {
        this.contentDataForm.endDate = endDate;
      }
      console.log(this.contentDataForm);
      this.appService.postData(this.payRecordUrl, this.contentDataForm, '').subscribe(
        data => {
          console.log(data);
          this.payDtoList = data.returnObject[0].payDtoList;
          console.log(this.payDtoList);
          this.currentPage = data.currentPage;
          this.sumPrice = data.returnObject[0].sumPayReocrd.sumPrice;
          this.sumCostPrice = data.returnObject[0].sumPayReocrd.sumCostPrice;
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
    reset() {
      this.itemId = null;
      this.vendingMachinesCode = null;
      this.payCode = null;
      this.miaoshu = null;
      this.ptCode = null;
      this.startDateInput = null;
      this.endDateInput = null;
      this.contentDataForm.itemId = null;
      this.contentDataForm.vendingMachinesCode = null;
      this.contentDataForm.payCode = null;
      this.contentDataForm.miaoshu = null;
      this.contentDataForm.ptCode = null;
      this.contentDataForm.startDate = null;
      this.contentDataForm.endDate = null;
    }
    checkboxClick(item) {
        if (this.idList.indexOf(item.id) > -1) {
          this.idList.splice(this.idList.indexOf(item.id), 1);
        } else if (this.idList.indexOf(item.id) === -1) {
          this.idList.push(item.id);
        }
        console.log(this.idList);
    }
    delete() {
      this.appService.postData(this.deletePayRecordUrl, this.idList, '').subscribe(
        data => {
          console.log(data.status);
          if (data.status === 1) {
            this.loading = true;
            this.loadingbg = true;
            this.getData();
          } else {
            alert('删除失败，请重试');
          }
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
    }
    // updateOrderStates(state, id) {
    //   const formData: FormData = new FormData(); // 自动搜索表单信息(表单内没有name属性的input不会被搜索到)，IE<=9不支持FormData
    //   formData.append('state', state);
    //   formData.append('id', id);
    //   const _this = this;
    //   $.ajax({
    //     type: 'post',
    //     url: this.updateOrderStateUrl,
    //     data: formData,
    //     contentType: false, // 当有文件要上传时，此项是必须的，否则后台无法识别文件流的起始位置(详见：#1)
    //     processData: false, // 是否序列化data属性，默认true(注意：false时type必须是post，详见：#2)
    //     success: function(data) {
    //       if (data.status === 1) {
    //         alert('更新成功');
    //         _this.payDtoList = null;
    //         _this.getData();
    //       } else {
    //         alert('更新失败，请重试');
    //       }
    //     }
    //   });
    // }
}
