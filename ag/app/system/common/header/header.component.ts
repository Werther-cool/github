import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public userName: string;
    public userImg: string;
    constructor(private translate: TranslateService, public router: Router) {

    }

    ngOnInit() {
      console.log('message=' +  sessionStorage.userImg);
      this.userName = sessionStorage.userName ;
      this.userImg = 'http://pu.imquanzi.com/' + sessionStorage.userImg ;
      console.log('message=' +  this.userImg);
    }

    userLoginout(): void {

      this.router.navigate(['userAdminLogin']);
    }

}
