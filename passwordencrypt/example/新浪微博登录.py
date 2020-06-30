# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
新浪微博登录'su','sp'加密参数破解
url: https://weibo.com/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


# 获取su加密参数
user_name = '13088888888'
js_su = 'get_user("{}")'.format(user_name)
print(ctx.eval(js_su) + "\n")

# 获取sp加密参数
password = '777777'
pubkey = "EB2A38568661887FA180BDDB5CABD5F21C7BFD59C090CB2D245A87AC253062882729293E5506350508E7F9AA3BB77F433323149" \
         "0F915F6D63C55FE2F08A49B353F444AD3993CACC02DB784ABBB8E42A9B1BBFFFB38BE18D78E87A0E41B9B8F73A928EE0CCEE1F6739" \
         "884B9777E4FE9E88A1BBE495927AC4A799B3181D6442443"
server_time = "1590825867"
nonce = "CRNJLW"
js_sp = 'get_password("{0}","{1}","{2}","{3}")'.format(password, pubkey, server_time, nonce)
print(ctx.eval(js_sp))