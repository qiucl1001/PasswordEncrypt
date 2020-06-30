# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
天安财险登录页'pwd'加密参数破解
url: https://tianaw.95505.cn/tacpc/#/login
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


print(ctx.eval('encryptByDES("777777")'))