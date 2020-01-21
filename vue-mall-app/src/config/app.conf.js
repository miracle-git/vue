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

export const PROFILE_ORDER_LIST = [
  { icon: '#weixin', color: '#ff8198', info: '我的消息' },
  { icon: '#point', color: '#fc7b53', info: '积分商城' },
  { icon: '#vip', color: '#ffc636', info: '会员卡' }
]

export const PROFILE_SERVICE_LIST = [
  { icon: '#order', color: '#ff8198', info: '我的购物车' },
  { icon: '#download', color: '#ff8198', info: '下载购物APP' }
]
