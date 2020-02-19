export const PRODUCT_NAV_ITEMS = [
  {
    type: 'xiaomi',
    title: '小米手机',
    children: []
  },
  {
    type: 'redmi',
    title: 'Redmi 红米',
    children: [
      { url: require('assets/img/header/nav-2-1.jpg'), name: 'Redmi K30', price: 1599 },
      { url: require('assets/img/header/nav-2-2.jpg'), name: 'Redmi K30 G5', price: 1999 },
      { url: require('assets/img/header/nav-2-3.png'), name: 'Redmi 8A', price: 599 },
      { url: require('assets/img/header/nav-2-4.png'), name: 'Redmi Note 8', price: 899 },
      { url: require('assets/img/header/nav-2-5.png'), name: 'Redmi Note 8 Pro', price: 1199 },
      { url: require('assets/img/header/nav-2-6.png'), name: 'Redmi 8', price: 699 }
    ]
  },
  {
    type: 'tv',
    title: '小米电视',
    children: [
      { url: require('assets/img/header/nav-3-1.jpg'), name: 'Redmi 红米电视 70英寸 R70A', price: 3299 },
      { url: require('assets/img/header/nav-3-2.jpg'), name: '小米壁画电视 65英寸', price: 6999 },
      { url: require('assets/img/header/nav-3-3.png'), name: '小米全面屏电视E55A', price: 1799 },
      { url: require('assets/img/header/nav-3-4.jpg'), name: '小米电视4A 32英寸', price: 799 },
      { url: require('assets/img/header/nav-3-5.jpg'), name: '小米电视4A 55英寸', price: 1699 },
      { url: require('assets/img/header/nav-3-6.png'), name: '小米电视4A 65英寸', price: 2699 }
    ]
  }
]

export const BOTTOM_BAR_ITEMS = [
  { icon: 'icon-reserve', text: '预约维修服务' },
  { icon: 'icon-7day', text: '7天无理由退货' },
  { icon: 'icon-15day', text: '15天免费换货' },
  { icon: 'icon-post', text: '满150元包邮' }
]

export const SWIPER_SLIDE_ITEMS = [
  { id: 42, url: require('assets/img/sliders/slide-1.jpg'), desc: '小米CC9' },
  { id: 43, url: require('assets/img/sliders/slide-2.jpg'), desc: 'Redmi Note 7' },
  { id: 44, url: require('assets/img/sliders/slide-3.jpg'), desc: '小米全面屏电视E55A' },
  { id: 45, url: require('assets/img/sliders/slide-4.jpg'), desc: '米家互联网洗烘一体机' },
  { id: 46, url: require('assets/img/sliders/slide-5.jpg'), desc: '米家只能门锁 青春版' }
]

export const NAV_MENU_ITEMS = [
  { id: 101, text: '手机 电话卡', url: 'https://www.mi.com/p/1915.html' },
  { id: 102, text: '电视 盒子', url: 'https://www.mi.com/a/h/9819.html' },
  { id: 103, text: '笔记本 显示器 平板', url: 'https://www.mi.com/a/h/7529.html' },
  { id: 104, text: '家电 插线板', url: 'https://www.mi.com/p/9285.html' },
  { id: 105, text: '出行 穿戴', url: 'https://www.mi.com/p/9289.html' },
  { id: 106, text: '智能 路由器', url: 'https://www.mi.com/a/h/8363.html' },
  { id: 107, text: '电源 配件', url: 'https://www.mi.com/p/9290.html' },
  { id: 108, text: '健康 儿童', url: 'https://www.mi.com/p/9291.html' },
  { id: 109, text: '耳机 音响', url: 'https://www.mi.com/p/9292.html' },
  { id: 110, text: '生活 箱包', url: 'https://www.mi.com/p/9293.html' }
]
