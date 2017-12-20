/**
 * Created by zhouyang on 2016/12/6.
 */
//***************************************

function $(id) { //id
    return document.getElementById(id);

}

//**************************************   myfn

var myfn = {

    getnodeTagname: function (node, tag) { //node 父类节点

        return node.getElementsByTagName(tag);
    },


    getnodeTagnameByID: function (node_id, tag) { // node_id:父类的id   tag 标签名
        return $(node_id).getElementsByTagName(tag);
    },


    changeArrt: function (node, json) { //动态修改属性  json{'width':'100px'}
        for (var key in json) { //node 要修改的节点

            node.style[key] = json[key];
        }
    },

    //doms元素集合    fn作为参数
    each: function (doms, fn) {
        for (var i = 0; i < doms.length; i++) {
            //使用时声明fn           
            fn(doms[i], i); //fn的调用
        }

    },

    //运动
    starMove: function (obj, json, fn) {
        clearInterval(obj.timer);
        var speed = 0,
            target = 0,
            cur_style = 0;
        obj.timer = setInterval(function () {
            //设置一个旗帜,记录
            var flag = true;
            for (var k in json) {
                if ('opacity' == k) { //透明度
                    cur_style = getCssStyle(obj, k) == 0 ? 0 : parseInt(parseFloat(getCssStyle(obj, k)) * 100) || 100;
                    target = json[k] * 100;
                } else if ('scrollTop' == k) { // 滚动
                    cur_style = obj.scrollTop;
                    target = parseInt(json[k]);
                } else { //其他属性
                    cur_style = parseInt(getCssStyle(obj, k)) || 0;
                    target = json[k];
                }
                speed = (target - cur_style) / 10;

                speed = (target > cur_style) ? Math.ceil(speed) : Math.floor(speed);

                if ('opacity' == k) {

                    obj.style.opacity = (cur_style + speed) / 100;
                    obj.style.filter = 'alpha(opacity:' + (cur_style + speed) + ')';

                } else if ('zIndex' == k) {
                    obj.style[k] = json[k];

                } else if ('scrollTop' == k) { // 滚动
                    obj.scrollTop = cur_style + speed;
                } else {
                    obj.style[k] = cur_style + speed + 'px';
                }



                //有一个动画没结束,就不能清除定时器
                if (cur_style != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }

        }, 30)
    },



    uniCodelength: function (text) { //text字符串  
        var sym = 0;
        var length = 0;
        for (var i = 0; i < text.length; i++) {
            sym = text.charCodeAt(i);
            if (sym <= 127 && sym > 0) {
                length += 1;
            } else {
                length += 2;
            }
        }
        return length;
    },

    //事件 .tag_id(event) 返回id
    tag_id: function (event) {
        var event = event || window.event;
        return event.target ? event.target.id : event.srcElement.id;
    },

    //阻止冒泡
    cancelBubble: function (event) {

        var event = event || window.event;
        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    //获取选中文字 
    selection_text: function () {
        var selection_text = '';
        if (window.getSelection) {
            selection_text = window.getSelection().toString();
        } else {
            selection_text = document.selection.creatRange().text;
        }

        return selection_text;

    },

    //取消选中
    cancelSelection: function () {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

    },

    cookie: {
        set: function (name, value) {
            // 缓存过期时间
            console.log("set");
            let Days = 30
            let exp = new Date()
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
            document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
        },
        get: function (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = arr
            arr = document.cookie.match(reg)
            if (arr) {
                return unescape(arr[2])
            } else {
                return null
            }
        },
        del: function (name) {
            let exp = new Date()
            exp.setTime(exp.getTime() - 1)
            let cval = this.cookie.get(name)
            if (cval != null) {
                document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
            }
        }
    }
}

//*******************************    获取样式
function getCssStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
//*************************************

/*
 *  获取scrollTop和left
 *  用法: scroll().top;  scroll().left;
 */

function scroll() {

    if (window.pageXOffset != null) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }

    } else if (document.compatMode == 'CSS1Compat') {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }

    }
    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft

    }
}
/*
 *  获取window height和width
 *  用法: client().height;  client().width;
 */

function client() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode == 'CSS1Compat') {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}


/*
 * 判断浏览器
 */
function getOs() {
    var OsObject = "";
    if (isIE = navigator.userAgent.indexOf("MSIE") != -1) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") != -1) {
        return "Firefox";
    }
    if (isChrome = navigator.userAgent.indexOf("Chrome") != -1) {
        return "Chrome";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari";
    }
    if (isOpera = navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera";
    }
}