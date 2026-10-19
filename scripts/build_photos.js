// 扫描 assets/photos/<id>/ 目录，生成 js/photos.js 清单
const fs = require('fs');
const path = require('path');

const SITE = path.resolve(__dirname, '..'); // 站点根目录（本脚本位于 scripts/ 下）
const ASSETS = path.join(SITE, 'assets', 'photos');

const creditMap = {
  jls: '网友实拍',
  lcsl: '崇左文旅公众号',
  dkty: '崇左文旅公众号',
  yanlin: '崇左文旅公众号',
  bailong: '崇左文旅公众号',
  bailing: '崇左文旅公众号',
  wanfu: '崇左文旅公众号',
  niutou: '崇左文旅公众号',
  sicheng: '崇左文旅公众号',
  piaoyan: '崇左文旅公众号',
  xingyoucamp: '崇左文旅公众号',
  litun: '崇左文旅公众号',
  tianci: '崇左文旅公众号',
  ruolan: '崇左文旅公众号',
  bahe: '崇左文旅公众号',
  xiakedaog: '天等县人民政府门户网站',
  xingyouteng: '天等县人民政府门户网站',
  qingyin: '天等县人民政府门户网站',
  duxiufeng: '广西日报-广西新闻网（丽川文化森林公园报道）'
};

const cultureCreditMap = {
  shuangjiang: '天等县人民政府门户网站',
  dalang: '天等县人民政府门户网站',
  xiake: '天等县人民政府门户网站',
  tiandengjs: '崇左文旅公众号',
  zhitianjiao: '崇左文旅公众号'
};

const foodCreditMap = {
  zhitianjiao: '崇左文旅公众号',
  zhitianjiang: '特色谷网',
  bojiyan: '天等文旅公众号',
  wuciciba: '中国新闻网广西频道（宁明县五色糯米饭报道）',
  suanbaiqie: '天等文旅公众号',
  shagao: '崇左文旅公众号',
  guanglangfen: '崇左文旅公众号',
  xingyoutengcha: '天等县人民政府门户网站',
  kudingcha: '特色谷网',
  bailingya: '惠农网（天等土鸭）',
  bahecha: '当代广西网（把荷茶园报道）',
  daroujiang: '特色谷网'
};

function scan(baseDir, relPrefix, creditMap) {
  const photos = {};
  if (fs.existsSync(baseDir)) {
    fs.readdirSync(baseDir).forEach(id => {
      const dir = path.join(baseDir, id);
      if (!fs.statSync(dir).isDirectory()) return;
      const list = fs.readdirSync(dir)
        .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
        .sort()
        .map((f, i) => ({
          file: `${relPrefix}/${id}/${f}`,
          caption: '',
          credit: creditMap[id] || '来源见页脚'
        }));
      if (list.length) photos[id] = list;
    });
  }
  return photos;
}

const spotPhotos = scan(ASSETS, 'assets/photos', creditMap);
const culturePhotos = scan(path.join(SITE, 'assets', 'culture'), 'assets/culture', cultureCreditMap);
const foodPhotos = scan(path.join(SITE, 'assets', 'food'), 'assets/food', foodCreditMap);

const out = path.join(SITE, 'js', 'photos.js');
const content = `/**\n * 实拍图清单（景点 / 文化名片 / 美食）\n * 程序生成，请勿手动修改；把图片放到 assets/photos/<id>/、assets/culture/<id>/ 或 assets/food/<id>/ 后重新运行 node scripts/build_photos.js 即可\n */\nconst PHOTOS = ${JSON.stringify(spotPhotos, null, 2)};\nconst CULTURE_PHOTOS = ${JSON.stringify(culturePhotos, null, 2)};\nconst FOOD_PHOTOS = ${JSON.stringify(foodPhotos, null, 2)};\n`;
fs.writeFileSync(out, content, 'utf8');
console.log(`已生成 js/photos.js：景点 ${Object.keys(spotPhotos).length} 个，文化名片 ${Object.keys(culturePhotos).length} 个，美食 ${Object.keys(foodPhotos).length} 个。`);
