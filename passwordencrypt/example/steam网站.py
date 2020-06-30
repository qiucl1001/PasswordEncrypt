# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
steam网站登录'passwd'加密参数破解
url: https://store.steampowered.com/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = "777777"
publickey_exp = "010001"
publickey_mod = "dd580e28f509f9a1697f3eefa0645804f00b445fa3e17bc6641689809ca173cc08ffc630dd84f4537b89c91719ade980b6cbb3730e90d40cc7e4413a11e76ffc68b5390b5bb8d7dfb31f14e56d5aef890384c5499d1c46f1e0c753e0b20245331625fed12cd3ae725b1cedfcd5805ab1bc9395f7412bd1fa7870a569c5fb3b36113dd95602d6472ab14e0233d155cdc6aaf13f4e12a01e0a04209df4c3d3ad26e895636981fac52948a8f445fe3208f595ac7858776545ea26c88a408e50347112e5f8d0fe85c181b7350ca44bb2a82f96063aa4a80fce1902210db0c7dc836b3272c616974c514dd1e3f5114566efc2373eb5ed4ea04358014f1378a23807ff"

js = 'get_password("{0}", "{1}", "{2}")'.format(password, publickey_mod, publickey_exp)
print(ctx.eval(js))
