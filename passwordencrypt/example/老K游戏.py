# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
老K游戏登录'username'、'password'加密参数破解
url：http://www.lkgame.com/login.html
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


username = "13088888888"
password = "666666"
js_pattern = 'getUerPwd("{0}","{1}")'.format(username, password)
print(ctx.eval(js_pattern))