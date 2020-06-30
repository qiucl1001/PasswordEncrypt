# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
全国中职学校学生管理系统登录页"username"和"password"参数破解
url: http://zzxt.hee.gov.cn/
"""
import os
from passwordencrypt.utils import get_execjs_instance


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


username = "13088888888"
password = "666666"

js_user_pattern = 'get_username("{}")'.format(username)
print(ctx.eval(js_user_pattern) + "\n")

js_password_pattern = 'get_password("{}")'.format(password)
print(ctx.eval(js_password_pattern))