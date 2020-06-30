loginJs = function(s) {
    var len = s.length;
    var rs = "";
    for (var i = 0; i < len; i++) {
        var k = s.substring(i, i + 1);
        rs += "$" + (s.charCodeAt(i) + "1") + ";";
    }
    return rs;
}