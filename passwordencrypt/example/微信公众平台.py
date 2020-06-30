# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
微信公众平台登录密码'passwd'加密参数破解<这里'passwd'密文不算加密，而是采用了MD5哈希算法>
url: https://mp.weixin.qq.com/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = '7777777'
js = 'get_pwd("{}")'.format(password)
print(ctx.eval(js))
