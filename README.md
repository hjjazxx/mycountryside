# 我的家乡文旅主题网站 · 天等

《人工智能导论》实践三作品：一个纯静态的天等县文旅主题站点（HTML + CSS + 原生 JS，无构建步骤、无依赖）。

## 目录结构

```
我的家乡文旅主题网站/
├── index.html            站点唯一入口
├── styles.css            全站样式
├── js/
│   ├── data.js           景点 / 文化名片 / 美食的文案数据
│   ├── photos.js         图片清单（由脚本生成，勿手改）
│   └── app.js            页面渲染与交互逻辑
├── assets/
│   ├── photos/<id>/      景点实拍图
│   ├── culture/<id>/     文化名片配图
│   ├── food/<id>/        美食配图
│   └── video/            视频文件（约 63MB）
├── scripts/
│   ├── serve.js          本地预览服务（支持 Range，视频可拖动进度）
│   └── build_photos.js   扫描图片目录，生成 js/photos.js
└── docs/
    └── 图片采集说明.md    图片来源、版权与采集说明
```

## 本地预览

```bash
node scripts/serve.js
# 默认 8124 端口；被占用时指定端口：
PORT=8125 node scripts/serve.js
```

启动后终端会打印本机与局域网地址，手机连同一 Wi-Fi 即可扫码/输入网址访问。

## 新增图片

1. 在对应目录建一个以 `id` 命名的文件夹（例如 `assets/photos/xxx/`），把图片放进去，命名 `01.jpg`、`02.jpg`……
2. 运行 `node scripts/build_photos.js` 重新生成 `js/photos.js`。
3. 若该 `id` 还没有文案，在 `js/data.js` 中补充对应条目。

图片来源与版权备注见 `scripts/build_photos.js` 里的 `creditMap` 等映射表。

## 部署

站点为纯静态文件（HTML + CSS + 原生 JS，无需构建），整个文件夹上传到任意静态托管即可上线，例如把文件夹拖到 <https://app.netlify.com/drop>。

注意 `assets/video/` 约 63MB，上传前请确认托管服务的容量限制。
