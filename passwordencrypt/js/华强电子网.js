window=this;navigator = {};//如果需要用到浏览器协议头，请在<加载代码> 按钮 右侧选择 navigator.js
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , base64DecodeChars = new Array((-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),(-1),62,(-1),(-1),(-1),63,52,53,54,55,56,57,58,59,60,61,(-1),(-1),(-1),(-1),(-1),(-1),(-1),0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,(-1),(-1),(-1),(-1),(-1),(-1),26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,(-1),(-1),(-1),(-1),(-1))
  , isFF = !!window.addEventListener
  , HqmServiceObj = null
  , HqmClientEntUrl = ""
  , HqmClientDefUrl = "";

function base64encode2(e) {
    var a, c, r, o, t, n;
    for (r = e.length,
    c = 0,
    a = ""; c < r; ) {
        if (o = 255 & e.charCodeAt(c++),
        c == r) {
            a += base64EncodeChars.charAt(o >> 2),
            a += base64EncodeChars.charAt((3 & o) << 4),
            a += "==";
            break
        }
        if (t = e.charCodeAt(c++),
        c == r) {
            a += base64EncodeChars.charAt(o >> 2),
            a += base64EncodeChars.charAt((3 & o) << 4 | (240 & t) >> 4),
            a += base64EncodeChars.charAt((15 & t) << 2),
            a += "=";
            break
        }
        n = e.charCodeAt(c++),
        a += base64EncodeChars.charAt(o >> 2),
        a += base64EncodeChars.charAt((3 & o) << 4 | (240 & t) >> 4),
        a += base64EncodeChars.charAt((15 & t) << 2 | (192 & n) >> 6),
        a += base64EncodeChars.charAt(63 & n)
    }
    return a
}

function getPwd(password){
return base64encode2(password)
}