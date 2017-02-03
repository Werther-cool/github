/**
 * Created by zhouyang on 2017/1/31.
 */
var $$ = function () {

}

$$.prototype = {
    extend:function (tar,source) {
        //给$$对象 扩充方法
        for(var i in source){
            tar[i] = source[i];
        }
        return tar;
    },


    isString:function (val) {
        return typeof val === "string";
    }
};

var $$ =new $$();

/*选择器框架*/
$$.extend($$,{
    $id :function (id) {
       return document.getElementById(id);
   },

    $tag : function (tag,context) {
        if(typeof context === 'string'){
            context = $$.$id(context);
        }
        if(context){
            return context.getElementsByTagName(tag);
        }else{
            return document.getElementsByTagName(tag);
        }
    },

    $class : function(classname,context){
        var dom,elements;
        if($$.isString(context)){
            context = document.getElementById(contexnt);
        }
        if(context.getElementsByClassName){
            return context.getElementsByClassName(classname);
        }else{
            dom = context.getElementsByTagName("*");
            for (var i =0;i<dom.length;i++){
                if(dom[i].className.indexOf(classname) != -1){
                    elements.push(dom[i]);
                }
            }
            return elements;
        }

    },

    /*分组选择器*/
    $group : function (context) {
        var result=[],doms=[];
        var arr = $$.trim(context).split(',');

        for(var i=0,len=arr.length;i<len;i++){
            var item = $$.trim(arr[i]);
            var first = item.charAt(0);
            var index = item.indexOf(first);
            if(first === "."){ //类
                doms = $$.$class(item.slice(index+1));
                pushArray(doms,result);
            }else if(first === "#"){
                doms = [$$.$id(item.slice(index +1))]

                pushArray(doms,result);
            }else{
                doms = $$.$tag(item);
                pushArray(doms,result);
            }
        }
        return result;
        
        function pushArray(doms,result){
            for(var j =0;j<doms.length;j++){
                result.push(doms[j]);
            }
        }
    },
    /*层级选择器*/
    $cengci:function (select) {
        /*各个击破*/
        var sel = $$.trim(select).split(' ');
        var result = [];
        var context = [];
        for (var i = 0; i < sel.length; i++) {
            result = [];
            var item = $$.trim(sel[i]);
            var first = sel[i].charAt(0);
            var index = sel.indexOf(first);

            if (item === "#") {
                /*id*/
                pushArray($$.$id(item.slice(index+1)),result);
                context = result;
            }else if(first === '.'){
                /*类*/
                if(context.length){
                    for(var j=0;j<context.length;j++){
                        pushArray($$.$class(item.slice(index +1)),context[j]);
                    }
                    pushArray($$,$class(item.slice(index+1)),context);
                }
            }else{
                /*标签*/
                if(context.length){
                    for(var j=0;j<context.length;j++){
                        pushArray($$.$tag(item.slice(item)),context[j]);
                    }
                }else{
                    pushArray($$.$tag(item.slice(item)),context);
                }
            }
        }
        return context;
        /*内部重复函数*/
        function pushArray(doms, result) {
            for (var j = 0; j < doms.length; j++) {
                result.push(doms[j]);
            }
        }
    },

    /*多组 和层次*/
    $select : function(str){
        var result = [];
        var context = [];
        var item = $$.item(str).split(',');
        for(var i = 0;glen = item.length;i++){
            var select = $$.trim(item[i]);
            var result = [];
            result = $$.$cengci(select);
            pushArray(result,context);
        };
        return context;
        /*内部重复函数*/
        function pushArray(doms, result) {
            for (var j = 0; j < doms.length; j++) {
                result.push(doms[j]);
            }
        }

    },
    /*html5选择器 移动端通用 相当于sizzle jQuery的选择器*/

    $all : function (selector,context) {
        context = context || document;
        return context.querySelectorAll(selector);
    }
    
});































