# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
中国移动掌上门户登录'password'加密参数破解
url：https://login.10086.cn/html/login/touch.html?channelID=12022&backUrl=http://wap.10086.cn/jx/index_791_793.html
"""
import os
from passwordencrypt.utils import get_execjs_instance
os.environ["EXECJS_RUNTIME"] = "phantomjs"


current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)


password = "666666"
js_pattern = 'encrypt("{}")'.format(password)
print(ctx.eval(js_pattern))
