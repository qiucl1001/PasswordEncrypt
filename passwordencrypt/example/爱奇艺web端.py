# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
爱奇艺web端登录'passwd'加密参数破解
url: https://www.iqiyi.com/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = '7777777'
js = 'get_passwd("{}")'.format(password)
res = ctx.eval(js)
print(res)
