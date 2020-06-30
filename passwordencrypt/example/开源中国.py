# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
开源中国登录'pwd'加密参数破解
url：https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2F
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = "666666"
js_pattern = 'get_password("{}")'.format(password)
print(ctx.eval(js_pattern))
