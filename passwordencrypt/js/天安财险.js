var CryptoJS = require("crypto-js");

function Encrypt(l) {
    var n = CryptoJS.enc.Utf8.parse("t171420100302rsa")
        , t = CryptoJS.enc.Utf8.parse("t171420100302rsa")
        , e = CryptoJS.enc.Utf8.parse(l)
        , a = CryptoJS.AES.encrypt(e, n, {
        iv: t,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(a.ciphertext)
}

function get_password(username, password) {
   var data = {'body': {'loginMethod': '1',
          'name': username,
          'password': password
          },
 'head': {'userCode': username,
          'channelCode': '101',
          'transTime': (new Date()).getTime(),
          'transToken': null,
          'customerId': '',
          'transSerialNumber': ''
          }
 };
    return Encrypt(JSON.stringify(data))
}

function encryptByDES(e) {
return CryptoJS.MD5(e + "TuD00Iqz4ge7gzIe2rmjSAFFKtaIBmnr8S").toString()
}
