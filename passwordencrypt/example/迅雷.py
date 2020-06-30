# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
迅雷登录'pwd'加密参数破解
url：http://www.kankan.com/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


username = "13088888888"
password = "666666"
captcha = "ASDf"
js_pattern = 'get_password("{0}","{1}","{2}")'.format(password, password, captcha)
print(ctx.eval(js_pattern))
