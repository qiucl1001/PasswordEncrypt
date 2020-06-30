# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
人人网登录'password'加密参数破解
url: http://www.renren.com/
"""
import os
import re
import requests
from passwordencrypt.utils import get_execjs_instance
from passwordencrypt.libs.chaojiying import Chaojiying
from passwordencrypt.settings import CJY_USERNAME, CJY_PASSWORD, CJY_SOFT_ID


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


def get_params():
    with requests.get(
        url="http://login.renren.com/ajax/getEncryptKey",
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/80.0.3987.132 Safari/537.36"
        }
    ) as response:
        if response.status_code == 200:
            result = response.json()
            e = result.get("e")
            n = result.get("n")
            maxdigits = result.get("maxdigits")
            rkey = result.get("rkey")
            return e, n, maxdigits, rkey


def get_encrypt_pwd(password):
    e, n, maxdigits, rkey = get_params()
    js_pattern = 'get_password("{0}", "{1}", "{2}", "{3}")'.format(password, e, n, maxdigits)
    res = ctx.eval(js_pattern)
    return re.sub(" ", "", res), rkey


def get_pic(img_url):
    with requests.get(img_url) as response:
        if response.status_code == 200:
            pic_content = response.content
            with open('verify.png', "wb") as fp:
                fp.write(pic_content)
            # 借用三方打码平台
            return get_verify(pic_content)


def get_verify(pic_content):
    chaojiying = Chaojiying(CJY_USERNAME, CJY_PASSWORD, CJY_SOFT_ID)
    verify = chaojiying.post_pic(pic_content, 1006)
    return verify


def get_verify_code():
    login_url = "http://www.renren.com/"
    with requests.get(
        url=login_url,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                              "Chrome/80.0.3987.132 Safari/537.36"
            }
    ) as response:
        if response.status_code == 200:
            html = response.text
            img_url = re.search(r'<dd>*?<img.*?verifyPic_login.*?src="(.*?)".*?</dd>', html, re.S)
            if img_url:
                img_url = img_url.group(1)
                return get_pic(img_url)


def login_rr(username, pwd):
    password, rkey = get_encrypt_pwd(pwd)
    icode = get_verify_code().get("pic_str")

    form_data = {
        "email": username,
        "icode": icode,
        "origURL": "http://www.renren.com/home",
        "domain": "renren.com",
        "key_id": "1",
        "captcha_type": "web_login",
        "password": password,
        "rkey": rkey,
        "f": "",
    }
    print(form_data)
    # 发送人人网登录请求
    login_url = "http://www.renren.com/ajaxLogin/login?1=1&uniqueTimestamp=" + ctx.eval('get_uniqueTimestamp()')
    print(login_url)
    with requests.post(
        url=login_url,
        headers={
            "Host": "www.renren.com",
            "Origin": "http://www.renren.com",
            "Pragma": "no-cache",
            "Referer": "http://www.renren.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/80.0.3987.132 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
        },
        data=form_data
    ) as response:
        if response.status_code == 200:
            with open('renren.html', "w") as f:
                f.write(response.text)
            for k, v in response.cookies.items():
                print(k + "=" + v)


def main():
    username = input("请输入用户名：")
    pwd = input("请输入密码：")
    login_rr(username, pwd)


if __name__ == '__main__':
    main()


