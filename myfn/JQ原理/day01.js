/**
 * Created by zhouyang on 2017/2/21.
 */
;(function (window,undefined) {
    
    /*工厂方法*/
    var myQuery =function (selector) {

        return  new myQuery.prototype.init(selector);
    };
    
    /*修改jQuery的原型*/
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
            
        }
    };
    /*设置init 的原型属性*/
    myQuery.prototype.init.prototype =myQuery.prototype;
    
    /*给外界提供 扩展方法 jQ的方法, 实例的方法 */
    myQuery.extend = myQuery.prototype.extend =function (obj) {
        for(var key in obj){
            this[key] = obj[key];
        }
    }
    
    
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
        }


        
    });
    
    /*通过window 暴露给外部*/
    window.myQuery = window.$ =myQuery;
    
})(window);