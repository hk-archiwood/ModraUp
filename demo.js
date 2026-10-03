// Screenshot gallery for the standalone product page.
const isEnglish = document.documentElement.lang === 'en';
const screenshots = isEnglish ? englishCopy.screenshots : [
  {
    "src": "assets/SmallHouse.png",
    "title": "阴影效果展示",
    "alt": "ModraUp 实机截图：小屋模型与地面阴影",
    "description": "通过小屋模型与地面投影，展示建筑体块的阴影效果。"
  },
  {
    "src": "assets/Add3DText.png",
    "title": "脚本创建 3D 文字",
    "alt": "ModraUp 实机截图：Ruby 脚本创建 ModraUp 立体文字",
    "description": "通过 Ruby 控制台创建 ModraUp 立体文字，展示脚本与几何生成。"
  },
  {
    "src": "assets/Secion.png",
    "title": "剖切功能展示",
    "alt": "ModraUp 实机截图：厨房模型与多个剖切平面",
    "description": "使用多个剖切平面查看厨房模型的内部结构与构造细节。"
  },
  {
    "src": "assets/BigTerrain.png",
    "title": "大模型测试 · 地形",
    "alt": "ModraUp 实机截图：地形大模型与性能信息",
    "description": "地形大模型的操作测试截图，保留视口中的性能信息。"
  },
  {
    "src": "assets/BigModel-1.png",
    "title": "商业建筑 · 近景",
    "alt": "ModraUp 实机截图：室外商业建筑大模型的近景视角",
    "description": "室外商业建筑大模型测试，近景展示建筑立面、材质与广场细节。"
  },
  {
    "src": "assets/BigModel-2.png",
    "title": "商业建筑 · 俯视",
    "alt": "ModraUp 实机截图：室外商业建筑大模型的俯视视角",
    "description": "同一商业建筑大模型的俯视测试画面，展示建筑群、屋顶与场地布局。"
  }
];
const screenshotTabs = [...document.querySelectorAll('[data-screenshot]')];
const screenshotDialog = document.getElementById('screenshot-dialog');
const screenshotOpen = document.getElementById('screenshot-open');
let selectedScreenshot = 0;
function selectScreenshot(index) {
  selectedScreenshot = (index + screenshots.length) % screenshots.length;
  const item = screenshots[selectedScreenshot];
  screenshotTabs.forEach((button,i) => {
    button.setAttribute('aria-selected',String(i === selectedScreenshot));
    button.tabIndex = i === selectedScreenshot ? 0 : -1;
  });
  document.getElementById('screenshot-panel').setAttribute('aria-labelledby',screenshotTabs[selectedScreenshot].id);
  for (const id of ['screenshot-main','lightbox-image']) {
    const img = document.getElementById(id);
    img.src = item.src;
    img.alt = item.alt;
  }
  document.getElementById('screenshot-title').textContent = item.title;
  document.getElementById('screenshot-description').textContent = item.description;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('screenshot-original').href = item.src;
  screenshotOpen.setAttribute('aria-label',(isEnglish ? 'Enlarge: ' : '放大查看：')+item.title);
  const count = String(selectedScreenshot+1).padStart(2,'0')+' / '+String(screenshots.length).padStart(2,'0');
  document.getElementById('screenshot-count').textContent = count;
  document.getElementById('lightbox-count').textContent = count;
}
function closeLightbox() { screenshotDialog.close(); }
screenshotTabs.forEach((button,i) => {
  button.addEventListener('click',() => selectScreenshot(i));
  button.addEventListener('keydown',e => {
    let next;
    if (e.key === 'ArrowRight') next = (i+1)%screenshots.length;
    if (e.key === 'ArrowLeft') next = (i+screenshots.length-1)%screenshots.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = screenshots.length-1;
    if (next !== undefined) { e.preventDefault(); selectScreenshot(next); screenshotTabs[next].focus(); }
  });
});
screenshotOpen.addEventListener('click',() => screenshotDialog.showModal());
document.getElementById('lightbox-close').addEventListener('click',closeLightbox);
screenshotDialog.addEventListener('click',e => {
  if (e.target !== screenshotDialog) return;
  const rect = screenshotDialog.getBoundingClientRect();
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) closeLightbox();
});
screenshotDialog.addEventListener('close',() => screenshotOpen.focus());
screenshotDialog.addEventListener('keydown',e => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); selectScreenshot(selectedScreenshot+(e.key==='ArrowLeft'?-1:1)); }
});
document.getElementById('screenshot-previous').addEventListener('click',() => selectScreenshot(selectedScreenshot-1));
document.getElementById('screenshot-next').addEventListener('click',() => selectScreenshot(selectedScreenshot+1));

const features=isEnglish ? englishCopy.features : {
  modeling:{number:'01 / MODELING',title:['画出轮廓，','推拉成形。'],description:'从直线、矩形和圆开始，用推拉赋予平面体积。捕捉端点、中点与交点，配合轴向锁定和数值输入，让直觉与精度一起工作。',tags:['绘图工具','推拉 / 偏移','移动 / 旋转 / 缩放','路径放样'],heading:'把想法变成几何',rows:[['R','从轮廓开始','直线、矩形、圆、多边形与圆弧。'],['P','建立体积','沿面法向推拉，支持定距与重复操作。'],['M','调整到位','移动、旋转、缩放，复制与阵列。']],footer:'推断捕捉 · 轴向锁定 · 数值输入'},
  organize:{number:'02 / ORGANIZATION',title:['把复杂模型，','整理得清清楚楚。'],description:'用群组隔离几何，用组件复用定义。双击进入嵌套层级，集中编辑当前内容；群组独立修改，组件共享变化，让重复设计更容易维护。',tags:['嵌套编辑','组件复用','组件浏览','复制与粘贴'],heading:'让每一部分各就其位',rows:[['G','整理几何','建立群组，整体移动、旋转或缩放。'],['C','复用组件','相同定义的多个实例共享编辑结果。'],['↳','进入层级','双击进入，Esc 返回上一层编辑上下文。']],footer:'群组隔离 · 定义复用 · 层级编辑'},
  appearance:{number:'03 / EXPRESSION',title:['给空间，','你自己的表达。'],description:'应用颜色与纹理，调整边线和显示样式，设置时间与太阳阴影。用场景保存观察状态，用剖切查看内部空间，辅以文字标注与 3D 文字。',tags:['材质与纹理','边线与样式','太阳阴影','剖切与文字'],heading:'从几何到空间表达',rows:[['色','设定材质','颜色、纹理、不透明度与视口取样。'],['光','观察阴影','调整日期与时间，观察太阳投影。'],['剖','看清内部','剖切裁切与填充，原生格式保留设置。']],footer:'场景视图 · 剖切平面 · 文字引注'},
  extend:{number:'04 / EXTENSIONS',title:['让你的工具，','融入工作流。'],description:'通过 Ruby API 创建与修改模型，使用控制台探索自动化，利用工具栏和 HTML 界面构建扩展。API 持续完善，既有插件的具体兼容性需要验证。',tags:['Ruby 控制台','同名 API','工具栏扩展','HTML 插件界面'],heading:'为重复工作添加自己的工具',rows:[['rb','操作模型','访问模型、实体、材质与组件。'],['UI','构建界面','菜单、工具栏、HTML 对话框与托盘。'],['⚙','扩展加载','加载 Ruby 扩展，逐项验证插件行为。']],footer:'开发中 · 尚未完整覆盖 SketchUp API'}
};
const tabs=[...document.querySelectorAll('[data-feature]')];
function selectFeature(button){const f=features[button.dataset.feature];tabs.forEach(b=>{b.setAttribute('aria-selected',String(b===button));b.tabIndex=b===button?0:-1;});document.getElementById('feature-panel').setAttribute('aria-labelledby',button.id);document.getElementById('feature-number').textContent=f.number;const title=document.getElementById('feature-title');title.replaceChildren(document.createTextNode(f.title[0]),document.createElement('br'),document.createTextNode(f.title[1]));document.getElementById('feature-description').textContent=f.description;document.getElementById('feature-tags').replaceChildren(...f.tags.map(label=>{const span=document.createElement('span');span.textContent=label;return span;}));const detail=document.getElementById('feature-detail');detail.querySelector('.detail-head>span').textContent=f.heading;detail.querySelectorAll('.detail-row').forEach((row,i)=>{row.querySelector('b').textContent=f.rows[i][0];row.querySelector('strong').textContent=f.rows[i][1];row.querySelector('p').textContent=f.rows[i][2];});detail.querySelector('.detail-footer').textContent=f.footer;}
tabs.forEach((button,i)=>{button.addEventListener('click',()=>selectFeature(button));button.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();tabs[next].focus();selectFeature(tabs[next]);}});});
document.getElementById('year').textContent=new Date().getFullYear();
