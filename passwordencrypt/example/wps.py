# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
wps登录页'password'加密参数破解
url: https://account.wps.cn/
"""
import os
import requests
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


def get_pass_key():
    with requests.get(
        url="https://account.wps.cn/api/v3/passkey?_=" + str(int(time.time()*1000)),
        headers={
            "referer": "https://account.wps.cn/",
            "x-requested-with": "XMLHttpRequest",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/80.0.3987.132 Safari/537.36",
        }
    ) as response:
        if response.status_code == 200:
            json_str = response.json()
            pass_key = json_str.get("pass_key")
            return pass_key


def get_encrypt_password():
    password = "666666"
    pass_key = get_pass_key()
    js_pattern = 'get_password("{0}", "{1}")'.format(password, pass_key)
    print(ctx.eval(js_pattern))


if __name__ == '__main__':
    # get_encrypt_password()
    dic = {
    'a': '{"a":"FFFF0N00000000006FE3","c":"1591100315125:0.4340306176006885","d":"ic_login","h":{"key1":"code0",'
         '"nvcCode":200,"umidToken":"T808A0ACF71D36F012C3E478E6365F2EE066EFF423469444A83557B4ADF"},"j":{"test":1},'
         '"b":"124#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'
         'g0w9AoRx==","e":"Lood-WrevNavPnShNNB-9DQU6PwkRnb3YMBFKOIdSit9tuEUdiugeouLEJG0uvIa-9Z-k-lQ6fL3lpbcTxPN4fk9Wu'
         '-Q71ExCDYni5eDYwVSG_W5NXXiw0SnMK_GknTTTFhOiVDaaNOdAoCLDoRnw-KkNLP9cR55VcITbra5U0-JjXqdimV7LUbFLDjABFLmYizM'
         '9JlKkpiqJYbEB2zQGA"}',
    'v': '0.04',
    'callback': 'callback'
    }
    from urllib import parse
    print(parse.urlencode(dic))

