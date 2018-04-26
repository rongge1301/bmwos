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
    }
}