import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import {Router} from '@angular/router';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [routerTransition()]
})
export class MainComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
      const isLoggedin = localStorage.getItem('isLoggedin');
      // if (isLoggedin !== undefined && isLoggedin !== null && isLoggedin === 'true') {
      //   this.router.navigate(['main']);
      // }else {
      //   this.router.navigate(['systemAdminLogin']);
      // }
    }
}
