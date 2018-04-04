import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideToLeft } from '../../../router.animations';
@Component({
    selector: 'app-usertest',
    templateUrl: './userTest.component.html',
    styleUrls: ['./userTest.component.scss'],
    animations: [slideToLeft()]
})
export class UserTestComponent implements OnInit {
    userName = '';

    constructor(private translate: TranslateService, public router: Router) {
    }

    ngOnInit() {}


}
