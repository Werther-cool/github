import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-side',
    templateUrl: './side.component.html',
    styleUrls: ['./side.component.scss']
})
export class SideComponent {
    isActive = false;
    showMenu  = '';
    menuState1 = false;
    menuState2 = false;
    menuState3 = false;
    menuState4 = false;

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    // tab切换，点击事件传自定义下标，TagName获取元素，加上[下标]
  asideBar(tit) {
        const length = document.getElementsByClassName('changeColor').length;
        document.getElementsByTagName('li')[tit].style.backgroundColor = '#FF814F';
        for ( let i = 0; i < length ; i++) {
          if ( i !== tit ) {
            document.getElementsByTagName('li')[i].style.backgroundColor = '#FFFFFF';
          }
        }
    }

  toggle(tag) {
      if (tag === 1) {
        this.menuState1 = !this.menuState1;
      } else if (tag === 2) {
        this.menuState2 = !this.menuState2;
      } else if (tag === 3) {
        this.menuState3 = !this.menuState3;
      } else if (tag === 4) {
        this.menuState4 = !this.menuState4;
      }
  }

}
