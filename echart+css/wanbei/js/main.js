$(document).ready(function () {

    var currentPage = 0;      //当前的页面数
    var lock = true;        //函数节流，给定的一个变量
    $(document).mousewheel(function (e, delta) {
        if (lock) {
         
            if (delta>0) {
                delta=1;
            }else{
                delta=-1;
            }
            currentPage = currentPage - delta;
            if (currentPage < 0) {
                currentPage = 0;
            }
            if (currentPage > 7) {
                currentPage = 7;
            }
            console.log(currentPage);
           
        
            $('.container .page').removeClass('page_on');
            // $('.container .page:nth-of-type('+(currentPage)+')').addClass('page_on ');
                 
            var nowPage = $('.container .page'+currentPage);
            nowPage.addClass('page_on ');
            // if (currentPage==0) {
            //     nowPage.addClass('animated zoomIn');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated zoomIn')
            //     }, 1000);
            // }else if (currentPage==1){
            //     nowPage.addClass('animated flip');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated flip')
            //     }, 1000);
            // }else if (currentPage==2){
            //     nowPage.addClass('animated bounceInRight');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated bounceInRight')
            //     }, 1000);
            // }else if (currentPage==3){
            //     nowPage.addClass('animated fadeInLeft');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated fadeInLeft')
            //     }, 1000);
            // }else if (currentPage==4){
            //     nowPage.addClass('animated flipInX');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated flipInX')
            //     }, 1000);
            // }else if (currentPage==5){
            //     nowPage.addClass('animated rotateInUpRight');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated rotateInUpRight')
            //     }, 1000);
            // }else if (currentPage==6){
            //     nowPage.addClass('animated slideInUp');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated slideInUp')
            //     }, 1000);
            // }else if (currentPage==7){
            //     nowPage.addClass('animated slideInDown');
            //     setTimeout(() => {
            //         nowPage.removeClass('animated slideInDown')
            //     }, 1000);
            // }
          
        



            //函数节流
            lock = false;
            //设置一个定时器，当这个时间到了以后，Lock又恢复为true
            setTimeout(function(){
                lock=true;
            },1500);
        }
    });
});