# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
39健康网登录'pwd'加密参数破解
url：https://my.39.net/passport/Login.aspx
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


# 用户名和密码使用的是同一套加密方式
password = "666666"
js_pattern = 'get_password("{}")'.format(password)
print(ctx.eval(js_pattern))
