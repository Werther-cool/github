/**
 * Created by zhouyang on 2017/2/21.
 */
;(function (window,undefined) {

    /*工厂方法*/
    var myQuery =function (selector) {

        return  new myQuery.prototype.init(selector);
    };

    /*修改jQuery的原型*/
    //myQuery.fn =
     myQuery.prototype ={
        constructor : myQuery,
    
        /*jQuery的构造器*/
         init :function (selector) {
             /*重载: 根据传入的值不同*/

             /*1.传入 '' null undefined NaN  0  false , 直接返回空对象, this*/
             if(!selector){
                 return this;
             }
             /*2.判断是否为Function*/
             else if(myQuery.isFunction(selector)){
                 myQuery.ready(selector);
             }

             /*3.传入的是否为字符串,3.1 html 片段 3.2 选择器 */
             else if(myQuery.isString(selector)){

                 /*去空格*/
                 selector = myQuery.trim(selector);
                 /*3.1 html片段*/
                 if(myQuery.isHTML(selector)){
                     var temp = document.createElement("div");
                     temp.innerHTML = selector;
                     [].push.apply(this,temp.children);
                 }
                 /*3.2 选择器*/
                 else{

                     var nodes = document.querySelectorAll(selector);
                     [].push.apply(this,nodes);
                 }
             }
             /*3.传入的是数组,会把数组/伪数组 中的每一项添加到JQ对象中*/
             else if(myQuery.isArrayLike(selector)){
                 // 1.先将伪数组转化为真数组
                 selector = [].slice.call(selector);
                 // 2.再利用apply将真数组设置给jQ对象
                 [].push.apply(this,selector);

             }
             /*4.其他情况直接把传入的内容添加到JQ中*/
             else{
                 this[0] = selector;
                 this.length = 1;
             }

         },
         myQuery:'1.00',
         selector: " ",
         length: 0,
         toArray:function () {
             return [].slice.call(this);
         },
         get:function(index) {
             // 1.判断有没有传入index
                if(arguments.length ==0){
                    return this.toArray();
                }
             // 2.判断是否是正数
                else if(index>0){
                    return this[index];
                }
             // 3.判断是否是负数
                else{
                    return this[this.length + index];
                }
         },
         eq: function (index) {
             return (arguments.length == 0 )? myQuery() : myQuery(this.get(index));
         },
         first: function () {
             return this.eq(0);
         },
         last:function () {
             return this.eq(-1);
         },
         push:[].push,
         sort: [].sort,
         splice: [].splice,
         /* 遍历当前jq实例 */
         each:function (fn) {
             myQuery.each(this,fn);
         },
         /*遍历指定对象 ,根据fn的返回结果生成一个新的数组*/
         map:function (fn) {
             return myQuery.map(this,fn);
         }    
         
    };
    /*设置init 的原型属性*/
    // Give the init function the jQuery prototype for later instantiation
    // jQuery 没有使用 new 运算符将 jQuery 显示的实例化，而是直接调用其函数
    // 要实现这样,那么 jQuery 就要看成一个类，且返回一个正确的实例
    // 且实例还要能正确访问 jQuery 类原型上的属性与方法
    // 通过原型传递解决问题，把 jQuery 的原型传递给jQuery.prototype.init.prototype
    // jQuery.fn.init.prototype = jQuery.fn;
    // 所以通过这个方法生成的实例 this 所指向的 仍然是 jQuery.fn(jQuery.prototype)，所以能正确访问 jQuery 类原型上的属性与方法
    // myQuery.fn.init.prototype = myQuery.fn;
    myQuery.prototype.init.prototype = myQuery.prototype;

    // 扩展合并函数
    // 合并两个或更多对象的属性到第一个对象中，jQuery 后续的大部分功能都通过该函数扩展
    // 虽然实现方式一样，但是要注意区分用法的不一样，那么为什么两个方法指向同一个函数实现，但是却实现不同的功能呢,
    // 阅读源码就能发现这归功于 this 的强大力量
    // 如果传入两个或多个对象，所有对象的属性会被添加到第一个对象 target
    // 如果只传入一个对象，则将对象的属性添加到 jQuery 对象中，也就是添加静态方法
    // 用这种方式，我们可以为 jQuery 命名空间增加新的方法，可以用于编写 jQuery 插件
    // 如果不想改变传入的对象，可以传入一个空对象：$.extend({}, object1, object2);
    // 默认合并操作是不迭代的，即便 target 的某个属性是对象或属性，也会被完全覆盖而不是合并
    // 如果第一个参数是 true，则是深拷贝
    // 从 object 原型继承的属性会被拷贝，值为 undefined 的属性不会被拷贝
    // 因为性能原因，JavaScript 自带类型的属性不会合并
    /*给外界提供 扩展方法 jQ的方法, 实例的方法 */
    /* 构造函数和 实例的方法 并不通过 这里 实现同步*/
    myQuery.extend = myQuery.prototype.extend =function (obj) {

            for(var key in obj){
                this[key] = obj[key];
            }
        //扩展 extend 对象合并方法
        if (arguments.length > 1){
            var obj = arguments[0];
            console.log(obj);
            var arr = myQuery(arguments).toArray();
            arr = arr.slice(1,arr.length);

            myQuery.each(arr,function () {
                for(var key in this){
                    obj[key] = this[key];
                }
            });
            return obj;
        }
    };


    /*扩展静态方法 jQuery 的方法*/
    myQuery.extend({

        isString:function (str) {
            return typeof str == "string";
        },
        isHTML :function (html) {

            if(!myQuery.isString(html)){
                return false;
            }

            /*  < 开头
             *   > 结尾
             *   大于三个字符
             * */
            return html.charAt(0) == "<" && html.charAt(html.length-1) == ">" && (html.length >= 3);
        },

        /*去除两端空格*/
        trim:function (str) {

            if(!myQuery.isString(str)){
                return str;
            }

            if(str.trim){
                return str.trim();
            }else{
                return str.replace(/^\s+|\s+$/g,'');
            }


        },

        isObject:function (obj) {
            if(obj == null){
                return ;
            }
            return typeof obj == "object";
        },

        isWindow:function (w) {
            return w.window === window;
        },

        isArrayLike :function (arr) {
            // 1.排除非对象和window
            if(!myQuery.isObject(arr) || myQuery.isWindow(arr) ){
                return false;
            }
            // 2.判断是否是真数组
            //     Object.prototype
            else if( ({}).toString.apply(arr) == '[Object Array]'){
                return true;
            }
            // 3.判断是否是伪数组
            else if( "length" in arr && (arr.length == 0 || arr.length -1 in arr )){
                return true;
            }
            return false;
        },

        isFunction:function (fn) {
            return typeof  fn === "function";

        },
        /* onload */
        ready:function (fn) {
            // 1.直接判断当前document.readyState的状态 ie
            if(document.readyState === " complete"){
                fn();
            }
            // 2.判断当前浏览器是否支持addEventListener
            else if(document.addEventListener){
                addEventListener("DOMContentLoaded",fn);
            }
            // 3.如果当前浏览器不支持addEventListener, 那么我们就使用attachEvent
            else{
                document.attachEvent("onreadystatechange",function () {
                    // 由于onreadystatechange事件肯能触发多次, 所以需要进一步判断是否真正的加载完毕
                    if(document.readyState === 'complete'){
                        fn();
                    }
                })
            }
        },
        
        each:function (obj,fn) {
            var value;
            // 1.判断是否是数组(包含真数组和伪数组)
            if(myQuery.isArrayLike(obj)){
               
                for(var i=0,len=obj.length; i<len;i++){

                    //调用fn,同时修改this指向,index,value
                    value = fn.call(obj[i],i,obj[i]);
                    // return false -> 跳出循环
                    // 在判断里,就调用了方法
                    if(value== false){
                      break;
                    }
                }
            }
            else if(myQuery(isObject(obj))){
                for(var key in obj){
                    value = fn.call(obj[key],key,obj[key]);
                    if(value == false){
                        break;
                    }
                }
            }
            return obj;
        },
        
        map: function (obj,fn) {
            var res = [];
            // 1.判断是否是数组
            if(myQuery.isArrayLike(obj)){
                
                myQuery.each(obj,function (index,value) {
                    var temp = fn(index,value);
                    if(temp){
                        res.push(temp);
                    }
                })
            }
            // 2.判断是否是对象
            else if(myQuery.isObject(obj)){
                myQuery.each(obj,function (index,value) {
                    var temp = fn(index,value);
                    if(temp){
                        res.push(temp);
                    }
                })
            }
        }

    });

    /*扩展实例方法*/
    // 不能写 myQuery.prototype.extend ,this 指向原型
    myQuery.prototype.extend({

        empty: function () {
            //1 遍历传入的对象
            for(var i=0,len =this.length;i<len;i++){
                this[i].innerHTML = '';
            }
            return this;
        },
        /*删除自己*/
        remove: function () {
            for (var i = 0; i < this.length; i++) {
                this[i].parentNode.removeChild(this[i])
            }
            return this;
        },
        /*有值设置,无值取值*/
        html:function (html) {
            /*无值*/
            if(arguments.length==0) {
                return this[0].innerHTML;
            }
            /*有值*/
            else{
                // console.log(this);
                myQuery.each(this,function () {
                    this.innerHTML = html;
                })
            }
            return this;
        },
        
        /*有值设置,无值取值*/
        text:function (text) {
            if(arguments.length == 0){
                var res = '';
                this.each(function () {
                    res += this.innerText;
                });
                return res;
            }
            else{
                this.each(function () {
                    // this[index].innerHTML = text;
                    // this指向遍历的每个元素
                    this.innerText = text;
                });
                return this;
            }
        },

        /*
         1、appendTo ==> 把所有的元素，添加到指定的元素中
         2、append ==> 给所有的元素，添加新的内容
         3、prependTo ==> 把所有的元素，添加到指定元素中的最前面
         4、prepend ==> 给所有的元素的最前面，添加新的元素
         */
        appendTo:function (target) {
            //1 对传入的数据进行包装
            target = $(target);
            var res = [];
            var self =this;
            this.each(function (j,s) {
                target.each(function (i,t) {
            if(j == 0) {
                t.appendChild(s);
                res.push(s);
            }
                var temp = s.cloneNode(true);
                t.appendChild(temp);
                res.push(temp);
                })
            });
            return res;
        },
        prependTo:function (target) {
            //1 对传入的数据进行包装
            target = $(target);
            var res = [];
            var self = this;
            this.each(function (j,s) {
                target.each(function (i,t) {
                    if(j == 0) {
                        t.insertBefore(s,t.firstChild);
                        res.push(s);
                    }
                    var temp = s.cloneNode(true);
                    t.insertBefore(temp,t.firstChild);
                    res.push(temp);
                })
            });
            return res;
        },
        append :function (content) {
            // 遍历当前jQ实例,取出每一个元素
            this.each(function () {
              this.innerHTML += content;
            })

        },
        // 4、prepend ==> 给所有的元素的最前面，添加新的元素
        prepend:function (content) {
            if(myQuery.isString(content)){
                // 遍历当前jQ实例,
                this.each(function () {
                    this.innerHTML = content + '\n' + this.innerHTML;
                });
                
            }else{
                this.prependTo.call(content,this);
            }
        }
        
    });


    /*通过window 暴露给外部*/
    window.myQuery = window.$ =myQuery;

})(window);