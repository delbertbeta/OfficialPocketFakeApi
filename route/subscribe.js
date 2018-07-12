const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (global.subscribed) {
    let obj = {
      "code": 0,
      "data": [{
          "id": "SCUTgenie",
          "name": "华工小灯神",
          "face": "https://img01.sogoucdn.com/app/a/100520090/oIWsFtxxB3SfuEqY1UGHPh8rh-SM",
          "description": "我是小灯神,这是一个神奇的...",
          "catagory": [],
          "message": {
            'title': '【家庭】农村和城市的在一起真的没有未来吗？ | 悄悄话',
            'description': '现实已经这么骨感了,爱情就纯粹一点吧~',
            'image': 'http://mmbiz.qpic.cn/mmbiz_jpg/JawzsTSIAf7TG93W1yrhicwczPAsap9F8VqEEmVW1RRsKqMsVdRhAoUhnMXa1pWOGh8TtR4K1hBibSEmibKVDxgcg/0?wx_fmt=jpeg',
            'url': 'http://mp.weixin.qq.com/s?timestamp=1531407362&src=3&ver=1&signature=iPLObaG0P13cD*dIWCpA2oh-knB2px0KlDaxujpVDA6m-qzm66lX7f2wcyge*LifWG-FCt2hGvxY7Orm0HEr0Y*lPbnIjFmVTx7KjjwflTSnnXphM46oAgIXPRkfjhufwfAkv-r9jKxKBSbfNS6aO6pam9AkX-9ApoXHJnBj6AE='
          }
        },
        {
          "id": "scut1117",
          "name": "华南理工大学",
          "face": "http://wx.qlogo.cn/mmhead/Q3auHgzwzM59rdlcuGr5yOb4UffoGtF9bQby0DSUBCLibeFeR64eP4Q/0",
          "description": "华南理工大学官方微信公...",
          "catagory": [],
          "message": {
            "title": "塑造建筑的气场   《人民日报》专访华南理工大学何镜堂院士",
            "description": "追求创新更强调精益求精”,7月12日,《人民日报》“治学者”专栏以“何镜堂塑造建筑的气场”为题,报道了中国工程院院士、华南...",
            "image": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http://mmbiz.qpic.cn/mmbiz_jpg/Lsgn6FcklBF9IwlfZ26Fib5SZvALk4uFza0QmH0ia8ibnPpEfc3R8fqbsvibPg4rl46MtUBl3fLj31uEpAwNhhJHQg/0?wx_fmt=jpeg",
            "url": "http://mp.weixin.qq.com/s?src=11&timestamp=1531406179&ver=994&signature=QS7NlcoK4TW0drUVyC7ZTfB0nj1FGis5Mn-Uu9rTco8aMOvrOS7robdhik4*HzV8*-Lpt*EZjx75j5U6H9ZueEAX-6bDY3NeZcaOMKepTUuv3GiROD0WU-*vs5cV6Eb0&new=1"
          }
        }
      ]
    }
    if (global.addedCatagory) {
      obj.data[0].catagory = [{
        "id": "id",
        "name": "我觉得还行"
      }]
    }
    res.send(obj);
  } else {
    let obj = {
      "code": 0,
      "data": [{
        "id": "scut1117",
        "name": "华南理工大学",
        "face": "http://wx.qlogo.cn/mmhead/Q3auHgzwzM59rdlcuGr5yOb4UffoGtF9bQby0DSUBCLibeFeR64eP4Q/0",
        "description": "华南理工大学官方微信公...",
        "catagory": [],
        "message": {
          "title": "塑造建筑的气场   《人民日报》专访华南理工大学何镜堂院士",
          "description": "追求创新更强调精益求精”,7月12日,《人民日报》“治学者”专栏以“何镜堂塑造建筑的气场”为题,报道了中国工程院院士、华南...",
          "image": "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=http://mmbiz.qpic.cn/mmbiz_jpg/Lsgn6FcklBF9IwlfZ26Fib5SZvALk4uFza0QmH0ia8ibnPpEfc3R8fqbsvibPg4rl46MtUBl3fLj31uEpAwNhhJHQg/0?wx_fmt=jpeg",
          "url": "http://mp.weixin.qq.com/s?src=11&timestamp=1531406179&ver=994&signature=QS7NlcoK4TW0drUVyC7ZTfB0nj1FGis5Mn-Uu9rTco8aMOvrOS7robdhik4*HzV8*-Lpt*EZjx75j5U6H9ZueEAX-6bDY3NeZcaOMKepTUuv3GiROD0WU-*vs5cV6Eb0&new=1"
        }
      }]
    }
    res.send(obj);
  }

})

module.exports = router;