import cookie from 'js-cookie'
export default {
    /*任意进制加密*/
    EnChTo: function (h, data) {
        var monyer = [];
        var i, s;
        for (i = 0; i < data.length; i++) {
            monyer += data.charCodeAt(i).toString(h) + " ";
        }
        return monyer.toString();
    },
    /*任意进制解密*/
    DeChTo: function (h, data) {
        var monyer = [];
        var i;
        var s = data.split(" ");
        for (i = 0; i < s.length; i++) {
            monyer += String.fromCharCode(parseInt(s[i], h));
        }
        return monyer.toString();
    },
    setCookie: function (key, data, type, opt) {
        if (data == "" || data == null) {
            return;
        }
        if (type == "json" && typeof (data) == "object") {
            cookie(key, this.EnChTo(16, encodeURI(JSON.stringify(data))), opt || { path: '/' });
        } else if (type != "json") {
            cookie(key, this.EnChTo(16, encodeURI(data)), opt || { path: '/' });
        }
    },
    getCookie: function (key, type) {
        var data = cookie(key);
        if (data == null || data == 'null') {
            return null;
        }
        data = this.DeChTo(16, data);
        data = decodeURI(data);
        if (type == "json") {
            return JSON.parse(data.substring(0, data.length - 2) + "}");
        } else {
            return data.substring(0, data.length - 1);
        }
    },
    /* 
        格式化表单，返回数组
    
    */
    formatForm: function (ele) {
        //["Brand=BMW&Brand=Audi"]
        let arr = [];
        let idArr = $(ele).serialize().split('&');
        for (var i = 0; i < idArr.length; i++) {
            arr.push(idArr[i].split('=')[1]);
        }
        return arr;
    },
    tab: function (tabtitle, tabcontent) {
        $(tabcontent).eq(0).show();
        $(tabtitle).on('click', function (params) {
            $(tabcontent).hide();
            var tablabel = $(this).attr('tab-label');
            $('.' + tablabel).show();
        })
    },
    /* 
        获取url参数
    */
    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'); // 匹配目标参数
        var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
        if (result != null) {
            return decodeURIComponent(result[2]);
        } else {
            return null;
        }

    }
}