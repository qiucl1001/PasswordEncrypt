function hex_md5(e) {
    return "" == e ? e : rstr2hex(rstr_md5(str2rstr_utf8(e)))
}

function hex_hmac_md5(e, t) {
    return rstr2hex(rstr_hmac_md5(str2rstr_utf8(e), str2rstr_utf8(t)))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase()
}

function rstr_md5(e) {
    return binl2rstr(binl_md5(rstr2binl(e), 8 * e.length))
}

function rstr_hmac_md5(e, t) {
    var i = rstr2binl(e);
    i.length > 16 && (i = binl_md5(i, 8 * e.length));
    for (var n = Array(16), o = Array(16), a = 0; a < 16; a++)
    n[a] = 909522486 ^ i[a], o[a] = 1549556828 ^ i[a];
    var s = binl_md5(n.concat(rstr2binl(t)), 512 + 8 * t.length);
    return binl2rstr(binl_md5(o.concat(s), 640))
}
var hexcase = 0;
function rstr2hex(e) {
    for (var t, i = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < e.length; o++)
    t = e.charCodeAt(o), n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
    return n
}

function str2rstr_utf8(e) {
    for (var t, i, n = "", o = -1; ++o < e.length;)
    t = e.charCodeAt(o), i = o + 1 < e.length ? e.charCodeAt(o + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= i && i <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & i), o++), t <= 127 ? n += String.fromCharCode(t) : t <= 2047 ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
    return n
}

function rstr2binl(e) {
    for (var t = Array(e.length >> 2), i = 0; i < t.length; i++)
    t[i] = 0;
    for (var i = 0; i < 8 * e.length; i += 8)
    t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
    return t
}

function binl2rstr(e) {
    for (var t = "", i = 0; i < 32 * e.length; i += 8)
    t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
    return t
}

function binl_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
    for (var i = 1732584193, n = -271733879, o = -1732584194, a = 271733878, s = 0; s < e.length; s += 16) {
        var r = i,
            c = n,
            l = o,
            d = a;
        i = md5_ff(i, n, o, a, e[s + 0], 7, -680876936), a = md5_ff(a, i, n, o, e[s + 1], 12, -389564586), o = md5_ff(o, a, i, n, e[s + 2], 17, 606105819), n = md5_ff(n, o, a, i, e[s + 3], 22, -1044525330), i = md5_ff(i, n, o, a, e[s + 4], 7, -176418897), a = md5_ff(a, i, n, o, e[s + 5], 12, 1200080426), o = md5_ff(o, a, i, n, e[s + 6], 17, -1473231341), n = md5_ff(n, o, a, i, e[s + 7], 22, -45705983), i = md5_ff(i, n, o, a, e[s + 8], 7, 1770035416), a = md5_ff(a, i, n, o, e[s + 9], 12, -1958414417), o = md5_ff(o, a, i, n, e[s + 10], 17, -42063), n = md5_ff(n, o, a, i, e[s + 11], 22, -1990404162), i = md5_ff(i, n, o, a, e[s + 12], 7, 1804603682), a = md5_ff(a, i, n, o, e[s + 13], 12, -40341101), o = md5_ff(o, a, i, n, e[s + 14], 17, -1502002290), n = md5_ff(n, o, a, i, e[s + 15], 22, 1236535329), i = md5_gg(i, n, o, a, e[s + 1], 5, -165796510), a = md5_gg(a, i, n, o, e[s + 6], 9, -1069501632), o = md5_gg(o, a, i, n, e[s + 11], 14, 643717713), n = md5_gg(n, o, a, i, e[s + 0], 20, -373897302), i = md5_gg(i, n, o, a, e[s + 5], 5, -701558691), a = md5_gg(a, i, n, o, e[s + 10], 9, 38016083), o = md5_gg(o, a, i, n, e[s + 15], 14, -660478335), n = md5_gg(n, o, a, i, e[s + 4], 20, -405537848), i = md5_gg(i, n, o, a, e[s + 9], 5, 568446438), a = md5_gg(a, i, n, o, e[s + 14], 9, -1019803690), o = md5_gg(o, a, i, n, e[s + 3], 14, -187363961), n = md5_gg(n, o, a, i, e[s + 8], 20, 1163531501), i = md5_gg(i, n, o, a, e[s + 13], 5, -1444681467), a = md5_gg(a, i, n, o, e[s + 2], 9, -51403784), o = md5_gg(o, a, i, n, e[s + 7], 14, 1735328473), n = md5_gg(n, o, a, i, e[s + 12], 20, -1926607734), i = md5_hh(i, n, o, a, e[s + 5], 4, -378558), a = md5_hh(a, i, n, o, e[s + 8], 11, -2022574463), o = md5_hh(o, a, i, n, e[s + 11], 16, 1839030562), n = md5_hh(n, o, a, i, e[s + 14], 23, -35309556), i = md5_hh(i, n, o, a, e[s + 1], 4, -1530992060), a = md5_hh(a, i, n, o, e[s + 4], 11, 1272893353), o = md5_hh(o, a, i, n, e[s + 7], 16, -155497632), n = md5_hh(n, o, a, i, e[s + 10], 23, -1094730640), i = md5_hh(i, n, o, a, e[s + 13], 4, 681279174), a = md5_hh(a, i, n, o, e[s + 0], 11, -358537222), o = md5_hh(o, a, i, n, e[s + 3], 16, -722521979), n = md5_hh(n, o, a, i, e[s + 6], 23, 76029189), i = md5_hh(i, n, o, a, e[s + 9], 4, -640364487), a = md5_hh(a, i, n, o, e[s + 12], 11, -421815835), o = md5_hh(o, a, i, n, e[s + 15], 16, 530742520), n = md5_hh(n, o, a, i, e[s + 2], 23, -995338651), i = md5_ii(i, n, o, a, e[s + 0], 6, -198630844), a = md5_ii(a, i, n, o, e[s + 7], 10, 1126891415), o = md5_ii(o, a, i, n, e[s + 14], 15, -1416354905), n = md5_ii(n, o, a, i, e[s + 5], 21, -57434055), i = md5_ii(i, n, o, a, e[s + 12], 6, 1700485571), a = md5_ii(a, i, n, o, e[s + 3], 10, -1894986606), o = md5_ii(o, a, i, n, e[s + 10], 15, -1051523), n = md5_ii(n, o, a, i, e[s + 1], 21, -2054922799), i = md5_ii(i, n, o, a, e[s + 8], 6, 1873313359), a = md5_ii(a, i, n, o, e[s + 15], 10, -30611744), o = md5_ii(o, a, i, n, e[s + 6], 15, -1560198380), n = md5_ii(n, o, a, i, e[s + 13], 21, 1309151649), i = md5_ii(i, n, o, a, e[s + 4], 6, -145523070), a = md5_ii(a, i, n, o, e[s + 11], 10, -1120210379), o = md5_ii(o, a, i, n, e[s + 2], 15, 718787259), n = md5_ii(n, o, a, i, e[s + 9], 21, -343485551), i = safe_add(i, r), n = safe_add(n, c), o = safe_add(o, l), a = safe_add(a, d)
    }
    return Array(i, n, o, a)
}

function md5_cmn(e, t, i, n, o, a) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(n, a)), o), i)
}

function md5_ff(e, t, i, n, o, a, s) {
    return md5_cmn(t & i | ~t & n, e, t, o, a, s)
}

function md5_gg(e, t, i, n, o, a, s) {
    return md5_cmn(t & n | i & ~n, e, t, o, a, s)
}

function md5_hh(e, t, i, n, o, a, s) {
    return md5_cmn(t ^ i ^ n, e, t, o, a, s)
}

function md5_ii(e, t, i, n, o, a, s) {
    return md5_cmn(i ^ (t | ~n), e, t, o, a, s)
}

function safe_add(e, t) {
    var i = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}

function getPwd(password) {
    return hex_md5(password)
}