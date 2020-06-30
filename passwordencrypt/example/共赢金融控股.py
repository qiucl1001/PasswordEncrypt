# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
共赢金融控股登录页'password'AES加密破解
url: https://www.wlgyjr.com/index.php?ctl=user&act=login
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = "666666"
js_pattern = 'get_password("{}")'.format(password)
print(ctx.eval(js_pattern))
