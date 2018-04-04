import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../router.animations';
import {_document} from "@angular/platform-browser/src/browser";
// import {CooperationPage} from "./cooperationPage";
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';
import * as $ from 'jquery';
// import {Cooperation} from "./cooperation.form";
@Component({
  selector: 'app-firstpage',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  animations: [routerTransition()]
})

export class FirstComponent implements OnInit {
  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService) {
  }
  ngOnInit() {
    $('app-slider').css('display', '');
    $('.content').css('margin-top', '0').css('height', '450');
  }
}
