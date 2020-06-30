# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
1号店网站登录'password'加密参数破解
url: https://www.yhd.com/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


# 用户名和密码使用的是同一套加密方式
username = "13088888888"
password = "666666"
js_pattern = 'getUnPwd("{0}","{1}")'.format(username, password)
print(ctx.eval(js_pattern))

