/**
 * Created by zhouyang on 2017/2/2.
 */

var $$ = function () {

}

$$.prototype = {
    extend : function (tar,source) {
        /*遍历对象*/
        for(var i in source){
            tar[i] = source[i];
        }
        return tar;
    }
};

$$ = new $$();



/*封装Css*/
$$.extend($$,{
    /*样式*/
    css : function (context, key, value) {
        var dom = $$.isString(context) ? $$.$all(context) : context;
        /*如果是数组*/
        if(dom.length){
            /*有值,表示设置*/
            if(value){
                for( var i = dom.length-1; i<=0; i--){
                    setStyle(dom[i],key,value);
                }
            
            }else{ /*获取*/
                return getStyle(dom[0]);
            }
        }else{
            if(value){
                setStyle(dom,key,value);
            }else{
                return getStyle(dom);
            }
        }
        
        function getStyle(dom,key) {
            if(dom.currentStyle){
                return dom.currentStyle[key];
            }else{
                return getComputedStyle(dom,null)[key];
            }
        }
        function setStyle(dom,key,value) {
            dom.style[key] = value;
        }
    },

    /*显示和隐藏*/
    hide : function (context) {
        var dom = $$.$all(context);
        for (var i=0,len=dom.length; i<len; i++){
            $$.css(dom[i],'display','none');
        }
    },
    show :function (context) {
        var dom = $$.$all(context);
        for(var i=0,len=dom.length; i<len; i++){
            $$.css(dom[i],'display','block');
        }
    }

});


/*封装属性框架*/
$$.extend($$,{
  /*属性操作,获取属性的值,设置属性的值 at tr (text,target,_blank)*/
    attr:function (context,key, value) {
        var dom = $$.$all(context);

        if(dom.length){
            if(value){
                for (var i=0,len=dom.length;i<len;i++){
                    dom[i].setAttribute(key,value);
                }
            }else{
                return dom[0].getAttribute(key);
            }

        } else{
            if(value){
                dom.setAttribute(key, value);
            }else{
                return dom.getAttribute(key);
            }
        }
    },

    /*动态添加class*/
    addClass : function (context,name) {
        var doms = $$.$all(context);
        /*如果是集合*/
        if(doms.length){
            for(var i=0;i<doms.length;i++){
               addName(doms[i]);
            }
        }else{
            /*如果不是集合*/
            addName(doms);
        }
        /*内调函数:单个添加类名*/
        function addName(doms) {
            doms.className = doms.className + ' ' +name;
        }
    },

    removeClass : function (context,name) {
        var doms = $$.$all(context);
        /*如果是集合*/
        if(doms.length){
            for(var i=0;i<doms.length;i++){
                removeName(doms[i]);
            }
        }else{
            /*如果不是集合*/
            removeName(doms)
        }
        /*内调函数:单个移除类名*/
        function removeName(doms) {
            doms.className = doms.className.replace(name, '');
        }
    }
});

/*内容框架*/
$$.extend($$,{
   /*innerHtml的函数版本*/
    html:function (context,value) {
        var doms = $$.$all(context);
        /*设置*/
        if(value){
            for(var i=0;i<soms.length;i++){
                doms[i].innerHTML = value ;
            }
        }else{
            /*取值*/
            return doms[0].innerHTML;
        }
    }
});


//封装DOM框架 -- 放在后面
$$.extend({
    //选择
    eq:function(){},
    first:function(){},
    last:function(){},
    //元素的插入和删除 克隆
    append:function(){},
    empty:function(){},
    remove:function(){},
    clone:function(){}
})





























