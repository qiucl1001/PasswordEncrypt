# coding: utf-8
# author: QCL
# software: PyCharm Professional Edition 2018.2.8
import os
import execjs
from passwordencrypt.settings import JS_PATH


def get_js_filename(py_filename):
    js_filename = py_filename.replace("py", "js")
    return js_filename


def get_ctx_obj(filename=None):
    js_path = os.path.join(JS_PATH, filename)
    try:
        with open(js_path, "r") as f:
            ctx = execjs.compile(f.read())
    except Exception as e:
        print(e.args)
        return
    return ctx



