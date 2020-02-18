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
