/**
 * 实拍图清单（景点 / 文化名片 / 美食）
 * 程序生成，请勿手动修改；把图片放到 assets/photos/<id>/、assets/culture/<id>/ 或 assets/food/<id>/ 后重新运行 node scripts/build_photos.js 即可
 */
const PHOTOS = {
  "bahe": [
    {
      "file": "assets/photos/bahe/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "bailing": [
    {
      "file": "assets/photos/bailing/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "bailong": [
    {
      "file": "assets/photos/bailong/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "dkty": [
    {
      "file": "assets/photos/dkty/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "duxiufeng": [
    {
      "file": "assets/photos/duxiufeng/01.jpg",
      "caption": "",
      "credit": "广西日报-广西新闻网（丽川文化森林公园报道）"
    }
  ],
  "jls": [
    {
      "file": "assets/photos/jls/01.jpg",
      "caption": "",
      "credit": "网友实拍"
    },
    {
      "file": "assets/photos/jls/02.jpg",
      "caption": "",
      "credit": "网友实拍"
    },
    {
      "file": "assets/photos/jls/03.jpg",
      "caption": "",
      "credit": "网友实拍"
    }
  ],
  "lcsl": [
    {
      "file": "assets/photos/lcsl/01.png",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "litun": [
    {
      "file": "assets/photos/litun/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "niutou": [
    {
      "file": "assets/photos/niutou/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "piaoyan": [
    {
      "file": "assets/photos/piaoyan/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "qingyin": [
    {
      "file": "assets/photos/qingyin/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "ruolan": [
    {
      "file": "assets/photos/ruolan/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "sicheng": [
    {
      "file": "assets/photos/sicheng/01.png",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "tianci": [
    {
      "file": "assets/photos/tianci/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "wanfu": [
    {
      "file": "assets/photos/wanfu/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "xiakedaog": [
    {
      "file": "assets/photos/xiakedaog/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "xingyoucamp": [
    {
      "file": "assets/photos/xingyoucamp/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "xingyouteng": [
    {
      "file": "assets/photos/xingyouteng/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "yanlin": [
    {
      "file": "assets/photos/yanlin/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ]
};
const CULTURE_PHOTOS = {
  "dalang": [
    {
      "file": "assets/culture/dalang/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "shuangjiang": [
    {
      "file": "assets/culture/shuangjiang/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "tiandengjs": [
    {
      "file": "assets/culture/tiandengjs/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "xiake": [
    {
      "file": "assets/culture/xiake/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "zhitianjiao": [
    {
      "file": "assets/culture/zhitianjiao/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ]
};
const FOOD_PHOTOS = {
  "bahecha": [
    {
      "file": "assets/food/bahecha/01.jpg",
      "caption": "",
      "credit": "当代广西网（把荷茶园报道）"
    }
  ],
  "bailingya": [
    {
      "file": "assets/food/bailingya/01.jpg",
      "caption": "",
      "credit": "惠农网（天等土鸭）"
    }
  ],
  "bojiyan": [
    {
      "file": "assets/food/bojiyan/01.jpg",
      "caption": "",
      "credit": "天等文旅公众号"
    }
  ],
  "daroujiang": [
    {
      "file": "assets/food/daroujiang/01.jpg",
      "caption": "",
      "credit": "特色谷网"
    }
  ],
  "guanglangfen": [
    {
      "file": "assets/food/guanglangfen/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "kudingcha": [
    {
      "file": "assets/food/kudingcha/01.jpg",
      "caption": "",
      "credit": "特色谷网"
    }
  ],
  "shagao": [
    {
      "file": "assets/food/shagao/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ],
  "suanbaiqie": [
    {
      "file": "assets/food/suanbaiqie/01.jpg",
      "caption": "",
      "credit": "天等文旅公众号"
    }
  ],
  "wuciciba": [
    {
      "file": "assets/food/wuciciba/01.jpg",
      "caption": "",
      "credit": "中国新闻网广西频道（宁明县五色糯米饭报道）"
    }
  ],
  "xingyoutengcha": [
    {
      "file": "assets/food/xingyoutengcha/01.jpg",
      "caption": "",
      "credit": "天等县人民政府门户网站"
    }
  ],
  "zhitianjiang": [
    {
      "file": "assets/food/zhitianjiang/01.jpg",
      "caption": "",
      "credit": "特色谷网"
    }
  ],
  "zhitianjiao": [
    {
      "file": "assets/food/zhitianjiao/01.jpg",
      "caption": "",
      "credit": "崇左文旅公众号"
    }
  ]
};
