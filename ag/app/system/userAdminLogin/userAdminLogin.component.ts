import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import { AppService } from '../../app-service';
import {UserAdminForm} from './userAdmin.form';
@Component({
  selector: 'app-useradminlogin',
  templateUrl: './userAdminLogin.component.html',
  styleUrls: ['./userAdminLogin.component.scss'],
  animations: [routerTransition()]
})
export class UserAdminLoginComponent implements OnInit {
  private loginTitle: string ;
  private sendMessageUrl: string;
  private loginUrl: string;
  public  message: string;
  public myVar: string;
  @Input() userAdminForm: UserAdminForm;

  constructor(private http: HttpClient, private router: Router,
              private appProperties: AppProperties, private appService: AppService) {
    this.loginTitle = 'denfer';
    this.loginUrl = appProperties.getUrl() + '/page/appUserLogin' ;
    this.sendMessageUrl = appProperties.getUrl() + '/page/sendMessage' ;
  }

  ngOnInit() {
    this.userAdminForm = new UserAdminForm ();
    this.message = '';
  }

  getMessage() {
    const myHttpHead = 'login';
    this.appService.postData(this.sendMessageUrl, this.userAdminForm, myHttpHead).subscribe(
      data => {
        console.log('message=' +  data['message']);
        if (data['status'] === 1) {
          localStorage.setItem('isLoggedin', 'true');
          sessionStorage.checkNum = data['returnObject']['checkNum'];
          sessionStorage.userMobile = this.userAdminForm.userMobile;
        } else {
          this.message = data['message'];
          alert(this.message);
        }
      },
      error => {
        console.log('erro:' + error.message);
      }
    );

  }

  onLoggedin() {
    const myHttpHead = 'login';
    console.log('userMobile=' + this.userAdminForm.userMobile);
    if (this.userAdminForm.userMobile === undefined) {
      this.message = '请输入手机号码';
    }else {
    this.appService.postData(this.loginUrl, this.userAdminForm, myHttpHead).subscribe(
      data => {
        console.log('message=' +  data['message']);
        if (data['status'] === 1) {
          localStorage.setItem('isLoggedin', 'true');
          sessionStorage.userMobile = this.userAdminForm.userMobile;
          sessionStorage.userToken = data['returnObject']['userToken'];
          sessionStorage.userId = data['returnObject']['userId'];
          console.log('userId=' + sessionStorage.userId );
          sessionStorage.userName = data['returnObject']['userName'];
          sessionStorage.userImg = data['returnObject']['userImg'];
          this.router.navigate(['main']);
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
}
