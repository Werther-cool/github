/**
 * 
 * Created by zhouyang on 2017/2/2.
 */

function $$() {
    
}
$$.prototype ={
    extend:function (tar,source) {
        
        for (var i in source){
            
            tar[i] = source[i];
        }
        return tar;
    }
};
var $$ = new $$();

$$.extend($$,{
    css:function () {
        
    }
    
});


/*运动框架*/
function Animate() {
 
    /*默认值*/
    this.config ={
        duration:16,
        ease:'liner'

    },
    
    /*用一个对象来保存运动相关的数据*/
    this._obj = {};
    
    /*没添加一个对象,index+1*/
    this.index = 1;
    
    /*queen : 装的是需要运动物体 obj*/
    this._queen = [];
    /*初始化函数*/
    this._init();
}
Animate.prototype ={
    

    /*--------------------------------------------------
     *  公用API
     *  提供给使用框架的人
     *  用户来调用的方法
     *  用法:
     *  div.add(id,('height':500))
     * -------------------------------------------------*/
    
    /*自定义动画*/
    setConfig:function (json) {
        var that = this;
        $$.extend(this.config,json);
    },

    
    /* ------------------------------------------------
     *添加部  -- add
     *部门职责描述: 添加元素 以及确定我要对哪个属性做动画
     *-------------------------------------------------*/

    add :function () {


        var options = arguments;
        var id = arguments[0];
        var json = arguments[1];
        var duration = arguments[2];
        
        this._adapter(id,json,duration);
        this._run();
    },

    /*适配器 - 单一职责原则
     * 用来保存运行的基本数据
     * */
    _adapter :function (id,source,duration) {
        var _obj ={};
        this.index++;
        _obj.index = this.index;
        _obj.dom = $$.isString(id) ? $$.$id(id) : id;
        _obj.duration = duration;
        _obj.now = +new Date();
        
        /*target:多种属性的变化值*/
        var target = [];
        for (var item in source){
            var json ={};
            /*起始值*/
            json.start = parseFloat($$.css(_obj.dom,item));
            json.distance = parseFloat(source[item]) - json.start;
            json.property = item;
            target.push(json);
        }
        _obj.styles = target;
        this._queen.push(_obj);
    },

    /*-------------------运行 核心:run-------------------*/
    
    /* run 循环调用loop*/
    _run:function () {
        var self =this;
        setInterval(function () {
            self._loop();
        },self.duration)
    },
    /*循环遍历queen 是每个需要运动的物体  调用 move*/
    _loop : function () {
        var queen = this._queen;
        for(var i=0;i<queen.length;i++){
            this._move(queen[i]);
        }
    },
    /*实现单个物体的运动*/
    _move :function (_obj) {
        var pass = +new Date();
        _obj.pass = pass - _obj.now;

        var dom = _obj.dom;
        var styles = _obj.styles;

        /*时间进程*/
        var tween = _getTween(_obj.now,pass,_obj.duration,this.config.ease);
        if(tween>=1){
            tween =1;
        }else{
            for(var i = 0;i<styles.length;i++){
               // oneMove(styles[i])
                $$.css(dom,styles[i].property,styles[i].start+styles[i].distance * tween + 'px');
            }

        }

        
        /*实现单个物体的 单个运动*/
        /*
        function oneMove(styleOne){
            $$.css(dom,styleOne.property,styleOne.start+styleOne.distance * tween + 'px');
            
        }
*/
    },


    /*-------------------公用部分------------------------*/

    eases:{
        //线性匀速
        linear:function (t, b, c, d){
            return (c - b) * (t/ d);
        },
        //弹性运动
        easeOutBounce:function (t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        //其他
        swing: function (t, b, c, d) {
            return this.easeOutQuad(t, b, c, d);
        },
        easeInQuad: function (t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (t, b, c, d) {
            return c - this.easeOutBounce (d-t, 0, c, d) + b;
        },
        easeInOutBounce: function (t, b, c, d) {
            if (t < d/2) return this.easeInBounce (t*2, 0, c, d) * .5 + b;
            return this.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    },
    _getTween:function (now,pass,duration,ease) {
        var yongshi = pass - now;

        return this.eases[ease](yongshi,0,1,duration);
    },

    
    /*-------------------- 后勤部 --------------------------*/
    
    _destroy : function(obj){
      /*   var self =this;*/
        this._queen.splice(obj.index,1);
        for (var i in obj){
            delete obj[i];
        }
        obj = null;
    }
    
    
};

$$.animate = new Animate();