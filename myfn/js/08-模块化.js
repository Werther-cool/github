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
    }
    
    
    
    
})(itcast);
































