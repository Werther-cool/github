import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import { BsModalService , BsModalRef} from 'ngx-bootstrap/modal';
import {VmInventory} from './vmInventory';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../../../app.properties';
import {AppService} from '../../../../app-service';
import { VmInventoryForm } from './vmInventory.form';
import * as $ from 'jquery';
import {VmInventoryRoutingModule} from './vmInventory-routing.module';
@Component({
    selector: 'app-vminventory',
    templateUrl: './vmInventory.component.html',
    styleUrls: ['./vmInventory.component.scss'],
    // styleUrls: ['./vmInventory.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'],
    animations: [routerTransition()]
})
export class VmInventoryComponent implements OnInit {
    userName = '';

  public findVmInventoryUrl: string;
  public findVmInventoryInitInfoUrl: string;
  public vmInventoryList;
  public companyInfoList;
  public itemInfoList;
  public list = [];
    @Input() vmInventoryForm: VmInventoryForm;
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
  public rotate = true;
  public obj: object;
    constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
                private appProperties: AppProperties, private appService: AppService) {
      this.findVmInventoryUrl = appProperties.getUrl() + '/vmInventory/findVmInventory' ;
      this.findVmInventoryInitInfoUrl = appProperties.getUrl() + '/vmInventory/initInfo' ;
      this.nextText = '下一页';
      this.previousText = '上一页';
    }

    ngOnInit() {
      this.vmInventoryForm = new VmInventoryForm();
      this.vmInventoryForm.pageSize = 20;
      this.loading = true;
      this.loadingbg = false;
      this.disable = true;
      this.getData();
    }
    getData() {
      this.appService.postData(this.findVmInventoryInitInfoUrl, '', '').subscribe(
        data => {
          this.itemInfoList = data.returnObject.itemTypeInfo.sonNode;
          this.companyInfoList = data.returnObject.companyInfo;
          this.itemInfoList.forEach(item => {
            this.obj  = {
              id: item.id,
              name: item.name,
              parentId: item.parentId
            };
            this.list.push(this.obj);
          });
          this.itemInfoList.forEach(item => {
            item.sonNode.forEach(sitem => {
              this.obj = {
                id: sitem.id,
                name: sitem.name,
                parentId: sitem.parentId
              };
              this.list.push(this.obj);
            });
          });
          console.log(this.list);
          console.log(this.itemInfoList);
          console.log(data);
        },
        error => {
          console.log('erro:' + error.message);
        }
      );
      this.appService.postData(this.findVmInventoryUrl, this.vmInventoryForm, '').subscribe(
        data => {
          console.log(data);
          this.vmInventoryList = data.returnObject;
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
      this.vmInventoryForm.currentPage = this.currentPage;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    pageChanged(event: any): void {
      this.vmInventoryForm.currentPage = event.page;
      this.loading = true;
      this.loadingbg = true;
      this.getData();
    }
    checkData() {
      this.loading = true;
      this.loadingbg = true;
      const startDateInput = new Date(this.startDateInput);
      // const endDateInput = new Date(this.endDateInput);
      const startDate = startDateInput.getFullYear() + '-' + (startDateInput.getMonth() + 1) + '-' + startDateInput.getDate();
      // const endDate = endDateInput.getFullYear() + '-' + (endDateInput.getMonth() + 1) + '-' + endDateInput.getDate();
      if (this.companyId !== null) {
        this.vmInventoryForm.companyId = this.companyId;
      }
      if (this.itemId !== null) {
        this.vmInventoryForm.itemId = this.itemId;
      }
      if (this.startDateInput !== null && this.startDateInput !== undefined) {
        this.vmInventoryForm.startDate = startDate;
      }
      // if (this.endDateInput !== null && this.endDateInput !== undefined) {
      //   this.contentGoodsForm.endDate = endDate;
      // }
      this.appService.postData(this.findVmInventoryUrl, this.vmInventoryForm, '').subscribe(
        data => {
          console.log(data);
          this.vmInventoryList = data.returnObject;
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
