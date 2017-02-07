/*框架*/
;(function (w) {
    var itcast = {
        /*子属性法*/
        elements : [],
        extend:function(tar, source) {

            for(var i in source){
                tar[i] = source[i];
            }
            return tar;
        },
    }
    w.itcast = w.$$ = itcast;

})(window);

/*封装基础*/
itcast.extend(itcast,{
    //去除左边空格
    ltrim:function(str){
        return str.replace(/(^\s*)/g,'');
    },
    //去除右边空格
    rtrim:function(str){
        return str.replace(/(\s*$)/g,'');
    },
    //去除空格
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //ajax - 前面我们学习的
    myAjax:function(URL,fn){
        var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                }else{
                    alert("错误的文件！");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
        function createXHR() {
            //本函数来自于《JavaScript高级程序设计 第3版》第21章
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    },
    //简单的数据绑定formateString
    formateString:function(str, data){
        return str.replace(/@\((\w+)\)/g, function(match, key){
            return typeof data[key] === "undefined" ? '' : data[key]});
    },
    //随机数
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    },
    //数据类型检测
    isNumber:function (val){
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean:function (val) {
        return typeof val ==="boolean";
    },
    isString:function (val) {
        return typeof val === "string";
    },
    isUndefined:function (val) {
        return typeof val === "undefined";
    },
    isObj:function (str){
        if(str === null || typeof str === 'undefined'){
            return false;
        }
        return typeof str === 'object';
    },
    isNull:function (val){
        return  val === null;
    },
    isArray:function (arr) {
        if(arr === null || typeof arr === 'undefined'){
            return false;
        }
        return arr.constructor === Array;
    }
})

/*选择框架*/
;(function ($$) {
    
    /* 封装重复代码
    *  内部使用
    * */
    function pushArray(doms,result) {
        for (var j =0,len = doms.length; j<len;j++){
            result.push(doms[j]);
        }
    }

    /* 公有*/
    /* html5 选择器*/
    $$.$all = function (selector,context) {
        context = context || document;
        this.elements = context.querySelectorAll(selector);
        /*返回this 实现链式访问*/
        return this;
    };

    /* id 选择器*/
    $$.$id = function (id) {
        return document.getElementById(id);
    };
    
    /* tag 选择器*/
    $$.$tag =function (tag,context) {
        if(typeof context == "string"){
            context = $$.$id(context);
        }
        if(context){
            return context.getElementsByTagName(tag);
        }else{
            return document.getElementsByTagName(context);
        }
    }

    /* class 选择器*/
    $$.$class =function (className,context) {
        var doms = [], arr=[];
        if(typeof context == "string"){
            context = $$.$id(context);
        }else{
            context = document;
        }
        if(context.getElementsByClassName){
            return context.getElementsByClassName(className);
        }else{
             doms = context.getElementsByTagName("*");
            for(var i =0; i<doms.length; i++){
                if( doms[i].className.indexOf(className) != -1){
                    arr.push(doms[i]);
                }
            }
            return arr;
        }
    };

    /* 分组选择器 并集*/
    $$.$group =function (select) {
        var result = [] ,doms = [];
        var arr = $$.trim(select).split(',');

        for(var i =0;i<arr.length;i++){
            var item = $$.trim(arr[i]);
            var first = item.charAt(0);
            var index = item.indexOf(first);
            /* 分类 检索*/
            /* 类选择器 */
            if(first == '.' ){
                doms = $$.$class(item.slice(index+1));
                /* result 是最后的结果
                *  doms 是一个伪数组 无法直接使用 result.push(doms);
                * */
                pushArray(doms,result);
            }else if(first == "#"){
                doms = [$$.$id(item.slice(index+1))];
                /* id获取的是单个元素*/
                pushArray(doms,result);
            }else{
                doms = $$.$tag(item);
                pushArray(doms,result);
            }
            return result;
        }

    };

    /* 层次选择器 */
    /* 思路: 参数是一个字符串 split 切割成 arr
    *  遍历arr 拿到每一项 判断类型 id class tag
    *  id,将选择到的添加 context中
    *  class,先判断 context 有没有内容 -> 有的话,遍历每一项 进行查找class
    *  tag 同 class
    *  递归调用
    * */
    $$.$cengji = function (select) {
        /* result : 中间量
         * context
         * */
        var result = [], context = [];
        var sel = $$.trim(select).split(' ');
        for(var k = 0; k<sel.length; k++){
            var item = $$.trim(sel[k]);
            var first = item.charAt(0);
            var index = item.indexOf(first);

            if(first == '#'){
                /* id*/
                /* 只有一项 需要加上 [] 才是数组,才可以遍历*/
                pushArray([$$.$id(item.slice(index+1))],result);
                context = result;
            }else if(first == '.'){
                if(context.length){
                    for(var i = 0; i<context.length; i++){
                        pushArray($$.$class($$.trim(item.slice(index+1)),context[i]),result)
                    }
                }else{
                    pushArray($$.$class($$.trim(item.slice(index+1)),context[i]),result)
                }
                context = result;
            }else{  // tag
                if(context.length){
                    for(var i =0;i<context.length;i++){
                        pushArray($$.$tag($$.trim(item),context[i]),result);
                    }
                }else{
                    pushArray($$.$tag($$.trim(item),context[i]),result);
                }
                context = result;
            }
        }
        
        return context;
    };
    
    /* 多组加层级
    *  多组内部使用层次
    * */
    
    $$.$select = function (str) {
        var result = [];
        var sel = $$.trim(str).slice(',');
        for (var i=0; i<sel.length; i++){
            var select = $$.trim(sel[i]);
            var context = [];
            context = $$.$cengci(select);
            pushArray(context,result);
        };
        return result;
    }
    
    
})(itcast);


/*事件框架*/
;(function ($$) {
    $$.on = function (type,fn) {
        var doms = this.elements;
    }
    
    
    
    
})(itcast);
































