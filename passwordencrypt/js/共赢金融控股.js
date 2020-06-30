function des(str) {
var c1, c2, c3;
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var i = 0,
len = str.length,
string = '';

while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt((c1 & 0x3) << 4);
        string += "==";
        break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        string += base64EncodeChars.charAt((c2 & 0xF) << 2);
        string += "=";
        break;
    }
    c3 = str.charCodeAt(i++);
    string += base64EncodeChars.charAt(c1 >> 2);
    string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    string += base64EncodeChars.charAt(c3 & 0x3F)
}
return string;
}

function get_password(p) {
var __LOGIN_KEY = "bxEsCAEIaFeZOBKnrloctczicbfAfrevdRdrHFwMldoOrpxPlX";
return des(__LOGIN_KEY + "%u6570%u5b57" + p + "%u52a0%u5bc6");
}