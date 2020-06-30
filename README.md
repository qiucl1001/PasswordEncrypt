## PasswordEncrypt

### 本项目主要演示了JS逆向之Web端各大网站登录密码加密参数破解

## 环境搭建
```
1. 安装并配置---> Python Version: >= 3.5
2. 安装并配置---> PhantomJS
3. 安装并配置---> android<JDK+SDK>
4. 安装并配置---> Node.js

```

## 安装三方库依赖
```shell
pip install -r requirements.txt
```

## 以下为各大网站登录页地址

📃目录
- 360
    - [登录页超链接](https://i.360.cn/login/?src=pcw_home&destUrl=https://www.360.cn/)
    
- B站
    - [登录页超链接](https://passport.bilibili.com/login)
    
- E宠商城
    - [登录页超链接](https://www.epet.com/)
    
- qq空间
    - [登录页超链接](https://qzone.qq.com/)
    
- steam网站
    - [登录页超链接](https://store.steampowered.com/) 
       
- WPS
    - [登录页超链接](https://account.wps.cn/) 
    
- YY登录
    - [登录页超链接](https://aq.yy.com/index.do)
    
- 一加网
    - [登录页超链接](https://account.oneplus.com/cn/signin)
    
- 1号店
    - [登录页超链接](https://www.yhd.com/)

- 中华英才网
    - [登录页超链接](http://www.chinahr.com/home/sr/)

- 中国移动掌上门户
    - [登录页超链接](https://login.10086.cn/html/login/touch.html?channelID=12022&backUrl=http://wap.10086.cn/jx/index_791_793.html)

- 中烟新商盟
    - [登录页超链接](http://www.xinshangmeng.com/)

- 9游
    - [登录页超链接](http://uhg.9you.com/)

- 263云通信
    - [登录页超链接](https://www.263.net/)

- DJ(京东商城)
    - [登录页超链接](https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F)

- 人人网
    - [登录页超链接](http://www.renren.com/)

- 人人贷
    - [登录页超链接](http://renrendai.com/login)

- 优酷
    - [登录页超链接](https://youku.com/)

- 39健康网
    - [登录页超链接](https://my.39.net/passport/Login.aspx)

- 全国中职学校学生管理系统
    - [登录页超链接](http://zzxt.hee.gov.cn/)

- 共赢金融控股
    - [登录页超链接](https://www.wlgyjr.com/index.php?ctl=user&act=login)

- 匀加速商城
    - [登录页超链接](http://www.15yunmall.com/pc/login/index)

- 北京时间
    - [登录页超链接](https://www.btime.com/)

- 华为官网
    - [登录页超链接](https://www.huawei.com/cn/)

- 华强电子网站
    - [登录页超链接](https://passport.hqew.com/login)
    
- 和讯网
    - [登录页超链接](http://www.hexun.com/)

- 唯品会
    - [登录页超链接](https://passport.vip.com/login)

- 嘟嘟网络游戏
    - [登录页超链接](https://www.dd373.com/)

- 国美网
    - [登录页超链接](https://login.gome.com.cn/login)

- 土巴兔
    - [登录页超链接](http://shangrao.to8to.com/)

- 土豆菜谱
    - [登录页超链接](https://www.haodou.com/)

- 大众点评
    - [登录页超链接](https://account.dianping.com/login)

- 大麦网
    - [登录页超链接](https://passport.damai.cn/login)

- 天安财险
    - [登录页超链接](https://tianaw.95505.cn/tacpc/#/login)

- 学易云
    - [登录页超链接](http://passport.xueyiyun.com/login?ReturnUrl=%2F)

- 完美网站
    - [登录页超链接](https://passport.wanmei.com/login?location=L3NhZmUv)

- 宜贷网
    - [登录页超链接](https://www.yidai.com/user/login/)

- 小米商城
    - [登录页超链接](https://account.xiaomi.com/pass/serviceLogin)

- 开源中国
    - [登录页超链接](https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2F)

- 当乐网
    - [登录页超链接](https://oauth.d.cn/auth/goLogin.html)

- 微信公众平台
    - [登录页超链接](https://mp.weixin.qq.com/)

- 恒信易贷
    - [登录页超链接](https://www.p2phx.com/login)

- 房价网
    - [登录页超链接](http://nanchang.fangjia.com/)

- 房天下
    - [登录页超链接](https://passport.fang.com/)

- 推推99
    - [登录页超链接](http://www.tuitui99.com/)

- 搜狐
    - [登录页超链接](https://www.sohu.com/)

- 支付宝
    - [登录页超链接](https://authsa128.alipay.com/login/index.htm)

- 斗鱼
    - [登录页超链接](http://www.douyu.com/directory)

- 新华网电子邮局
    - [登录页超链接](https://mail.xinhuanet.com/index.php)

- 新浪二手房
    - [登录页超链接](http://j.esf.leju.com/ucenter/login?curcity=shangrao)

- 新浪微博
    - [登录页超链接](https://weibo.com/)
    
- 易车
    - [登录页超链接](http://www.bitauto.com/)

- 有赞网
    - [登录页超链接](https://account.youzan.com/login)

- 欢乐go
    - [登录页超链接](https://login.189.cn/web/login)

- 深圳证券交易所
    - [登录页超链接](http://www.szse.cn/)

- 爱奇艺web端
    - [登录页超链接](https://www.iqiyi.com/)

- 爱应用
    - [登录页超链接](http://www.iappstoday.com/)

- 猫眼电影
    - [登录页超链接](https://passport.meituan.com/account/unitivelogin)

- 珍爱网
    - [登录页超链接](https://www.zhenai.com/n/login)

- 189邮箱
    - [登录页超链接](https://webmail30.189.cn/w2/)

- 真气网
    - [登录页超链接](https://www.aqistudy.cn/)

- 空中网
    - [登录页超链接](https://passport.kongzhong.com/login)

- 筑龙学社
    - [登录页超链接](https://www.zhulong.com/)

- 粉笔网
    - [登录页超链接](https://fenbi.com/page/home)

- 纵横网
    - [登录页超链接](https://passport.zongheng.com/)

- 网易163
    - [登录页超链接](https://www.163.com/)

- 126网易邮箱
    - [登录页超链接](https://www.126.com/)

- 网易免费邮箱
    - [登录页超链接](https://www.yeah.net/)

- 美团
    - [登录页超链接](https://passport.meituan.com/account/unitivelogin)

- 老K游戏
    - [登录页超链接](http://www.lkgame.com/login.html)

- 聚惠商城
    - [登录页超链接](http://www.minshengec.com/loginNew/index.jhtml)

- 腾讯企业邮箱
    - [登录页超链接](http://mail.yw.gov.cn/)

- 芒果TV
    - [登录页超链接](https://www.mgtv.com/)

- 苏宁易购
    - [登录页超链接](https://passport.suning.com/ids/login)
    
- 蘑菇
    - [登录页超链接](https://portal.mogu.com/user/newlogin)    
    
- 虎牙
    - [登录页超链接](https://www.huya.com/g)       

- 试客联盟
    - [登录页超链接](http://login.shikee.com/)           
    
- 财新网
    - [登录页超链接](http://www.caixin.com/)      
    
- 迅雷看看
    - [登录页超链接](http://www.kankan.com/)       

- 途牛
    - [登录页超链接](https://passport.tuniu.com/login?origin=https://www.tuniu.com/ssoConnect)    

- 逗游
    - [登录页超链接](https://www.doyo.cn/passport/login)      

- 金牛理财
    - [登录页超链接](https://buyfund.jnlc.com/etrading/sys/web/loginUC)      
    
- 锦江WeHotel
    - [登录页超链接](https://hotel.bestwehotel.com/NewLogin/?go=https%3A%2F%2Fhotel.bestwehotel.com%2F)       
    
- 长房集团
    - [登录页超链接](http://eip.chanfine.com/login.jsp)     
    
- 长江证券
    - [登录页超链接](https://www.95579.com/)      

- 阿里云
    - [登录页超链接](https://www.aliyun.com/)        

- 阿里云邮箱
    - [登录页超链接](https://account.aliyun.com/login/qr_login.htm)     

- 风行网
    - [登录页超链接](http://www.fun.tv/)    
    
- 飞卢小说
    - [登录页超链接](https://b.faloo.com/)     
 
- 魅族
    - [登录页超链接](https://www.meizu.com/) 
    