# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
"""
url：https://www.aqistudy.cn/
"""
import os
import requests
from passwordencrypt.utils import get_execjs_instance

current_filename = os.path.basename(__file__)
js_filename = get_execjs_instance.get_js_filename(current_filename)
ctx = get_execjs_instance.get_ctx_obj(js_filename)

# Params
method = 'GETDETAIL'
city = '杭州'
type = 'HOUR'
start_time = '2020-05-01 00:00:00'
end_time = '2018-05-29 23:00:00'


# Get params
js = 'getPostParamCode("{0}", "{1}", "{2}", "{3}", "{4}")'.format(method, city, type, start_time, end_time)
params = ctx.eval(js)


# 发起post请求
with requests.post(
    url='https://www.aqistudy$qcl.cn/apinew/aqistudyapi.php',
    data={
        'd': params
    }
) as response:
    if response.status_code == 200:
        res = response.text
        print(res)
        # 对加密的响应数据进行解密
        js = 'decodeData("{0}")'.format(res)
        print(ctx.eval(js))
