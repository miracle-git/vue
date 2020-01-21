export const TAB_BAR_DATA = [
  { path: '/home', icon: require('assets/img/tabbar/home.svg'), activeIcon: require('assets/img/tabbar/home_active.svg'), text: '首页' },
  { path: '/category', icon: require('assets/img/tabbar/category.svg'), activeIcon: require('assets/img/tabbar/category_active.svg'), text: '分类' },
  { path: '/shopcart', icon: require('assets/img/tabbar/shopcart.svg'), activeIcon: require('assets/img/tabbar/shopcart_active.svg'), text: '购物车' },
  { path: '/profile', icon: require('assets/img/tabbar/profile.svg'), activeIcon: require('assets/img/tabbar/profile_active.svg'), text: '我的' }
]

export const EVENT_BUS_NAMES = {
  PRODUCT_IMAGE_LOAD: 'PRODUCT_IMAGE_LOAD'
}

export const DETAIL_NAV_BAR_DATA = [
  { key: 'product', value: '商品' },
  { key: 'params', value: '参数' },
  { key: 'comment', value: '评论' },
  { key: 'recommend', value: '推荐' }
]
