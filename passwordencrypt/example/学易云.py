# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
学易云登录页'password'加密参数破解
url: http://passport.xueyiyun.com/login?ReturnUrl=%2F
"""
import os
import base64
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = '666666'
js_pattern = 'get_password("{}")'.format(password)

res = ctx.eval(js_pattern)
print(base64.b64encode(res.encode("utf-8")).decode("utf-8") )
