$(document).ready(function () {

    var currentPage = 0;      //当前的页面数
    var lock = true;        //函数节流，给定的一个变量
    $(document).mousewheel(function (e, delta) {
        if (lock) {
            currentPage = currentPage - delta;
            if (currentPage < 0) {
                currentPage = 0;
            }
            if (currentPage > 4) {
                currentPage = 4;
            }
            console.log(currentPage);
           
        
            $('.container .page').removeClass('page_on animated');
            $('.container .page:nth-of-type('+(currentPage)+')').addClass('page_on animated');
            // $(".container").css({"top":currentPage * -100 + "%"});
            //函数节流
            lock = false;
            //设置一个定时器，当这个时间到了以后，Lock又恢复为true
            setTimeout(function(){
                lock=true;
            },1000);
        }
    });
});