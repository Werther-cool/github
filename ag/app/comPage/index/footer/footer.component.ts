import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import {Observable} from '../../../../../node_modules/rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class FooterComponent implements OnInit {
    // userName = '';

    constructor(private translate: TranslateService, public router: Router) {
    }

    ngOnInit() {
      $('.footer-backgroup').css('width', window.innerWidth);
      $('.footer-text').css('width', window.innerWidth);
      Observable.fromEvent(window, 'resize').subscribe((event) => {
        $('.footer-backgroup').css('width', window.innerWidth);
        $('.footer-text').css('width', window.innerWidth);
      });
    }

    loginout(): void {
        // this.router.navigate(['userAdminLogin']);
    }

}
