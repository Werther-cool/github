/*���*/
;(function (w) {
    var itcast = {
        /*�����Է�*/
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

/*��װ����*/
itcast.extend(itcast,{
    //ȥ����߿ո�
    ltrim:function(str){
        return str.replace(/(^\s*)/g,'');
    },
    //ȥ���ұ߿ո�
    rtrim:function(str){
        return str.replace(/(\s*$)/g,'');
    },
    //ȥ���ո�
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //ajax - ǰ������ѧϰ��
    myAjax:function(URL,fn){
        var xhr = createXHR();	//������һ�������������IE6���ݡ�
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                }else{
                    alert("������ļ���");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        //�հ���ʽ����Ϊ�������ֻ������ajax���������Է�������
        function createXHR() {
            //�����������ڡ�JavaScript�߼�������� ��3�桷��21��
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
    //�򵥵����ݰ�formateString
    formateString:function(str, data){
        return str.replace(/@\((\w+)\)/g, function(match, key){
            return typeof data[key] === "undefined" ? '' : data[key]});
    },
    //�����
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    },
    //�������ͼ��
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

/*ѡ����*/
;(function ($$) {
    
    /* ��װ�ظ�����
    *  �ڲ�ʹ��
    * */
    function pushArray(doms,result) {
        for (var j =0,len = doms.length; j<len;j++){
            result.push(doms[j]);
        }
    }

    /* ����*/
    /* html5 ѡ����*/
    $$.$all = function (selector,context) {
        context = context || document;
        this.elements = context.querySelectorAll(selector);
        /*����this ʵ����ʽ����*/
        return this;
    };

    /* id ѡ����*/
    $$.$id = function (id) {
        return document.getElementById(id);
    };
    
    /* tag ѡ����*/
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

    /* class ѡ����*/
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

    /* ����ѡ���� ����*/
    $$.$group =function (select) {
        var result = [] ,doms = [];
        var arr = $$.trim(select).split(',');

        for(var i =0;i<arr.length;i++){
            var item = $$.trim(arr[i]);
            var first = item.charAt(0);
            var index = item.indexOf(first);
            /* ���� ����*/
            /* ��ѡ���� */
            if(first == '.' ){
                doms = $$.$class(item.slice(index+1));
                /* result �����Ľ��
                *  doms ��һ��α���� �޷�ֱ��ʹ�� result.push(doms);
                * */
                pushArray(doms,result);
            }else if(first == "#"){
                doms = [$$.$id(item.slice(index+1))];
                /* id��ȡ���ǵ���Ԫ��*/
                pushArray(doms,result);
            }else{
                doms = $$.$tag(item);
                pushArray(doms,result);
            }
            return result;
        }

    };

    /* ���ѡ���� */
    /* ˼·: ������һ���ַ��� split �и�� arr
    *  ����arr �õ�ÿһ�� �ж����� id class tag
    *  id,��ѡ�񵽵���� context��
    *  class,���ж� context ��û������ -> �еĻ�,����ÿһ�� ���в���class
    *  tag ͬ class
    *  �ݹ����
    * */
    $$.$cengji = function (select) {
        /* result : �м���
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
                /* ֻ��һ�� ��Ҫ���� [] ��������,�ſ��Ա���*/
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


    $$.$cengci = function (select) {
        var result = [],context = [];
        var sel = $$.trim(select).split(' ');
        for (var i = 0; i < sel.length; i++) {
            var item = sel[i];
            var first = item.charAt(0);
            var index = item.indexOf(first);
            
            if(first == '#'){
                pushArray([$$.$id($$.trim(item.slice(index+1)))],result);
                context = result;
            }else if(first == "."){
                if(context.length){
                    for (var j = 0; j < context.length; j++) {
                        pushArray($$.$class($$.trim(item.slice(index+1)),context[j]),result);
                    }
                }else{
                    pushArray($$.$class($$.trim(item.slice(index+1)),context),result);
                }
                
                context =result;
            }else{
                if(context.length){
                    for (var j = 0; j < context.length; j++) {
                        pushArray($$.$tag($$.trim(item),context[j]),result)
                    }
                }else{
                    pushArray($$.$tag($$.trim(item),context),result)
                }
                context =result;
            }
        }
        return context;

    }




    /* ����Ӳ㼶
    *  �����ڲ�ʹ�ò��
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


/*�¼����*/
;(function ($$) {
    $$.on = function (type,fn) {
        
        var doms = this.elements;
        
        for (var i=0,len=doms.length;i<len;i++){
            if(doms[i].addEventListener){
                doms[i].addEventListener(type,fn,false);
            }else if(doms[i].attachEvent){
                //ie
                doms[i].attachEvent('on',type,fn);
            }
        }
        return this;
    }
})(itcast);

/*css���*/
;(function ($$) {
    $$.css = function (key, value) {
        var doms = this.elements;
        
        if(doms.length){
        //���������
            if(value){
                //��ֵ -> ����
                for(var i=0;i<doms.length;i++){
                    //���õ�һ����
                    setStyle(doms[i],key,value);
                }
            }else{
                // ->ȡֵ
                getStyle(dom[0],key);
            }
        }else{ 
        //�����������
            if(value){
                setStyle(dom,key,value);
            }else{
                getStyle(dom,key);
            }
        }
        
        /*��һ����*/
        function setStyle(dom,key, value) {
            dom[key] = value;
        }
        /*��һȡֵ*/
        function getStyle(dom,key) {
            if(dom.currentStyle){
                //ie
                return dom.currentStyle[key];
            }else{
                return getComputedStyle(dom,null)[key];
            }
        }
        return this;
    }
    
    $$.hide = function () {
        this.css('display','none');
        return this;
    };
    $$.show = function () {
        this.css('display','block');
        return this;
    };
})(itcast);

/*���Կ��*/
;(function ($$) {

    /* ���÷���
    *  ���Բ���,��ȡ���Ե�ֵ,�������Ե�ֵ, attr('test','target','_blank')
    * */
    $$.attr =function (key,value) {
        var doms = this.elements;
        if(value){
            for(var i=0; i<doms.length; i++){
                doms[i].setAttribute(key,value);
            }
        }else{
            return doms[0].getAttribute(key);
        }
        return this;
    };

    $$.addClass =function (name) {
        var doms = this.elements;
        /* ����Ǽ���*/
        for(var i=0;i<doms.length;i++){
            addName(dom[i],name);
        }
        return this;
    };
    $$.removeClass =function (name) {
        var doms = this.elements;
        for(var i =0;i<doms.length;i++){
            removeName(doms[i],name);
        }
        return this;
    };
    /* ˽�з���
    *  �ڲ�ʹ��
    * */

    function addName(dom,name) {
        dom.className = dom.className + ' ' + name;
    };

    function removeName(dom,name) {
        dom.className = dom.className.replace(name,'');
    };
    
})(itcast);





























