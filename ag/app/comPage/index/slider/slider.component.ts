import { Component, NgModule, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Rx';
import * as $ from 'jquery';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
@NgModule({
  imports: [
    Observable
  ]
})
export class SliderComponent implements OnInit {
    // userName = '';

    constructor(private translate: TranslateService, public router: Router) {
    }
    ngOnInit() {
      this.setBannerWidthAndHeight();
      let t;
      let index = -1;
      const times = 6000; // 间隔时间
      t = setInterval(play, times);
      function play() {
        index++;
        if ( index > 3 ) {
          index = 0;
        }
        $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
        $('.cir').eq(index).addClass('cr').siblings().removeClass('cr');
      }
      // $('.cir').on('click', () => {
      //         });

      // $('.pre').on('click', () => {
      //   console.log('pre');
      //   index--;
      //   if ( index < 0) {
      //     index = 3;
      //   }
      //   $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
      //   $('.cir').eq(index).addClass('cr').siblings().removeClass('cr');
      // });
      // $('.next').on('click', () => {
      //   index++;
      //   if (index > 3) {
      //     index = 0;
      //   }
      //   $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
      //   $('.cir').eq(index).addClass('cr').siblings().removeClass('cr');
      // });
      // $('.banner').hover(
      //   function(){
      //     clearInterval(t);
      //   },
      //   function(){
      //     t = setInterval(plays, times);
      //     function plays () {
      //       index++;
      //       if ( index > 3 ) { index = 0; }
      //       $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
      //       $('.cir').eq(index).addClass('cr').siblings().removeClass('cr');
      //     }
      //   }
      // );
    }
    setBannerWidthAndHeight() {
      this.initWidthAndHeight();
      Observable.fromEvent(window, 'resize').subscribe((event) => {
        this.initWidthAndHeight();
      });
    }
    initWidthAndHeight() {
      $('.banner').css('height', window.innerHeight);
      $('.imgbox').css('height', window.innerHeight);
      $('.img').css('height', window.innerHeight);
      $('.banner').css('width', window.innerWidth);
      $('.imgbox').css('width', window.innerWidth);
      $('.img').css('width', window.innerWidth);
    }
    cr(flag) {
      $('.cir').eq(flag).addClass('cr').siblings().removeClass('cr');
      $('.img').eq(flag).fadeIn(600).siblings().fadeOut(600);
    }
}
