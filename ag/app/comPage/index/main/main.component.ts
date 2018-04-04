import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import {Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [routerTransition()]
})
export class MainComponent implements OnInit {
    constructor() {}

    ngOnInit() {
      console.log($(window).height());
      const winHeight = $(document).scrollTop();
      console.log(`${scrollY}/${winHeight}`);
      $(window).scroll(() => {
        const scrollY = $(document).scrollTop(); // 获取垂直滚动的距离，即滚动了多少
        if (scrollY > 100) { // 如果滚动距离大于250px则隐藏，否则删除隐藏类
          $('.header-backgroup').addClass('hiddened');
        } else {
          $('.header-backgroup').removeClass('hiddened');
        }
        if (scrollY === winHeight) { // 如果没滚动到顶部，删除显示类，否则添加显示类
          $('.header-backgroup').removeClass('showed');
        } else {
          $('.header-backgroup').addClass('showed');
        }
      });
    }
}
