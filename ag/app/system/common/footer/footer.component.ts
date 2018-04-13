import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    // userName = '';

    constructor(private translate: TranslateService, public router: Router) {
    }

    ngOnInit() {}

    loginout(): void {
        // this.router.navigate(['userAdminLogin']);
    }

}