export const XM_APP_KEYS = {
  loginUserId: 'xm:login-user-id',
  addToCart: 'xm:evt-add-to-cart'
}

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
  { id: 109, text: '耳机 音箱', url: 'https://www.mi.com/p/9292.html' },
  { id: 110, text: '生活 箱包', url: 'https://www.mi.com/p/9293.html' }
]

export const NAV_MENU_LIST_ITEMS = {
  101: [
    [
      { id: 30, text: '小米10 Pro', url: require('assets/img/menus/1/menu-1-1-1.png') },
      { id: 31, text: 'Redmi 8', url: require('assets/img/menus/1/menu-1-1-2.png') },
      { id: 32, text: '小米CC美图定制版', url: require('assets/img/menus/1/menu-1-1-3.png') },
      { id: 33, text: '移动4G+专区', url: require('assets/img/menus/1/menu-1-1-4.jpg') }
    ],
    [
      { id: 30, text: '小米10', url: require('assets/img/menus/1/menu-1-2-1.png') },
      { id: 31, text: '小米MIX Alpha', url: require('assets/img/menus/1/menu-1-2-2.png') },
      { id: 32, text: '小米CC9e', url: require('assets/img/menus/1/menu-1-2-3.png') },
      { id: 33, text: '小米移动电话卡', url: require('assets/img/menus/1/menu-1-2-4.jpg') }
    ],
    [
      { id: 30, text: 'Redmi K30 4G', url: require('assets/img/menus/1/menu-1-3-1.jpg') },
      { id: 31, text: '小米9 Pro 5G', url: require('assets/img/menus/1/menu-1-3-2.png') },
      { id: 32, text: '小米MIX3', url: require('assets/img/menus/1/menu-1-3-3.png') },
      { id: 33, text: '手机上门维修', url: require('assets/img/menus/1/menu-1-3-4.png') }
    ],
    [
      { id: 30, text: 'Redmi K30 5G', url: require('assets/img/menus/1/menu-1-4-1.jpg') },
      { id: 31, text: 'Redmi Note 8 Pro', url: require('assets/img/menus/1/menu-1-4-2.png') },
      { id: 32, text: '黑鲨手机2 Pro', url: require('assets/img/menus/1/menu-1-4-3.png') }
    ],
    [
      { id: 30, text: '小米CC9 Pro', url: require('assets/img/menus/1/menu-1-5-1.png') },
      { id: 31, text: 'Redmi Note 8', url: require('assets/img/menus/1/menu-1-5-2.png') },
      { id: 32, text: 'Redmi 7A', url: require('assets/img/menus/1/menu-1-5-3.jpg') }
    ],
    [
      { id: 30, text: 'Redmi 8A', url: require('assets/img/menus/1/menu-1-6-1.png') },
      { id: 31, text: '小米CC9', url: require('assets/img/menus/1/menu-1-6-2.png') },
      { id: 32, text: 'Redmi Note 7 Pro', url: require('assets/img/menus/1/menu-1-6-3.jpg') }
    ]
  ],
  102: [
    [
      { id: 30, text: '小米电视5 55英寸', url: require('assets/img/menus/2/menu-2-1-1.png') },
      { id: 31, text: 'Redmi 红米电视 70英寸', url: require('assets/img/menus/2/menu-2-1-2.jpg') },
      { id: 32, text: '小米电视4A 43英寸青春版', url: require('assets/img/menus/2/menu-2-1-3.png') },
      { id: 33, text: '小米电视4C 32英寸', url: require('assets/img/menus/2/menu-2-1-4.png') }
    ],
    [
      { id: 30, text: '小米电视5 65英寸', url: require('assets/img/menus/2/menu-2-2-1.png') },
      { id: 31, text: '全面屏电视 65英寸', url: require('assets/img/menus/2/menu-2-2-2.jpg') },
      { id: 32, text: '小米电视4A 49英寸', url: require('assets/img/menus/2/menu-2-2-3.jpg') },
      { id: 33, text: '小米电视4C 40英寸', url: require('assets/img/menus/2/menu-2-2-4.jpg') }
    ],
    [
      { id: 30, text: '小米电视5 55英寸', url: require('assets/img/menus/2/menu-2-3-1.png') },
      { id: 31, text: '全面屏电视 55英寸', url: require('assets/img/menus/2/menu-2-3-2.jpg') },
      { id: 32, text: '小米电视4A 50英寸', url: require('assets/img/menus/2/menu-2-3-3.png') },
      { id: 33, text: '小米电视4C 43英寸', url: require('assets/img/menus/2/menu-2-3-4.png') }
    ],
    [
      { id: 30, text: '小米电视5 Pro 55英寸', url: require('assets/img/menus/2/menu-2-4-1.png') },
      { id: 31, text: '小米壁画电视 65英寸', url: require('assets/img/menus/2/menu-2-4-2.jpg') },
      { id: 32, text: '小米电视4A 55英寸', url: require('assets/img/menus/2/menu-2-4-3.png') },
      { id: 33, text: '小米电视4C 50英寸', url: require('assets/img/menus/2/menu-2-4-4.png') }
    ],
    [
      { id: 30, text: '小米电视5 Pro 65英寸', url: require('assets/img/menus/2/menu-2-5-1.png') },
      { id: 31, text: '小米全面屏电视', url: require('assets/img/menus/2/menu-2-5-2.jpg') },
      { id: 32, text: '小米电视4A 58英寸', url: require('assets/img/menus/2/menu-2-5-3.png') },
      { id: 33, text: '小米电视4C 55英寸', url: require('assets/img/menus/2/menu-2-5-4.jpg') }
    ],
    [
      { id: 30, text: '小米电视5 Pro 75英寸', url: require('assets/img/menus/2/menu-2-6-1.png') },
      { id: 31, text: '小米电视4A 32英寸', url: require('assets/img/menus/2/menu-2-6-2.png') },
      { id: 32, text: '小米电视4A 65英寸', url: require('assets/img/menus/2/menu-2-6-3.png') },
      { id: 33, text: '小米电视4X 43英寸', url: require('assets/img/menus/2/menu-2-6-4.png') }
    ]
  ],
  103: [
    [
      { id: 30, text: 'RedmiBook 13', url: require('assets/img/menus/3/menu-3-1-1.jpg') },
      { id: 31, text: '显示器', url: require('assets/img/menus/3/menu-3-1-2.png') },
      { id: 32, text: '小米笔记本内胆包', url: require('assets/img/menus/3/menu-3-1-3.jpg') }
    ],
    [
      { id: 30, text: '小米笔记本 15.6"', url: require('assets/img/menus/3/menu-3-2-1.png') },
      { id: 31, text: '小米平板4', url: require('assets/img/menus/3/menu-3-2-2.jpg') }
    ],
    [
      { id: 30, text: '小米笔记本 13.3"', url: require('assets/img/menus/3/menu-3-3-1.png') },
      { id: 31, text: '键鼠套装', url: require('assets/img/menus/3/menu-3-3-2.png') }
    ],
    [
      { id: 30, text: '小米笔记本 12.5"', url: require('assets/img/menus/3/menu-3-4-1.jpg') },
      { id: 31, text: '鼠标', url: require('assets/img/menus/3/menu-3-4-2.png') }
    ],
    [
      { id: 30, text: 'RedmiBook 14', url: require('assets/img/menus/3/menu-3-5-1.png') },
      { id: 31, text: '转换器', url: require('assets/img/menus/3/menu-3-5-2.png') }
    ],
    [
      { id: 30, text: '小米游戏本', url: require('assets/img/menus/3/menu-3-6-1.jpg') },
      { id: 31, text: '平板配件', url: require('assets/img/menus/3/menu-3-6-2.jpg') }
    ]
  ],
  104: [
    [
      { id: 30, text: '冰箱', url: require('assets/img/menus/4/menu-4-1-1.jpg') },
      { id: 31, text: '微波炉', url: require('assets/img/menus/4/menu-4-1-2.jpg') },
      { id: 32, text: '电磁炉', url: require('assets/img/menus/4/menu-4-1-3.jpg') },
      { id: 33, text: '插线板', url: require('assets/img/menus/4/menu-4-1-4.jpg') }
    ],
    [
      { id: 30, text: '立式空调', url: require('assets/img/menus/4/menu-4-2-1.png') },
      { id: 31, text: '电烤箱', url: require('assets/img/menus/4/menu-4-2-2.jpg') },
      { id: 32, text: '电水壶', url: require('assets/img/menus/4/menu-4-2-3.jpg') },
      { id: 33, text: '新风机', url: require('assets/img/menus/4/menu-4-2-4.jpg') }
    ],
    [
      { id: 30, text: '壁挂空调', url: require('assets/img/menus/4/menu-4-3-1.png') },
      { id: 31, text: '扫地机器人', url: require('assets/img/menus/4/menu-4-3-2.jpg') },
      { id: 32, text: '滤水壶', url: require('assets/img/menus/4/menu-4-3-3.jpg') },
      { id: 33, text: '电暖器', url: require('assets/img/menus/4/menu-4-3-4.jpg') }
    ],
    [
      { id: 30, text: '滚筒洗衣机', url: require('assets/img/menus/4/menu-4-4-1.png') },
      { id: 31, text: '吸尘器', url: require('assets/img/menus/4/menu-4-4-2.jpg') },
      { id: 32, text: '落地风扇', url: require('assets/img/menus/4/menu-4-4-3.png') },
      { id: 33, text: '电压力锅', url: require('assets/img/menus/4/menu-4-4-4.jpg') }
    ],
    [
      { id: 30, text: 'Redmi全自动波轮洗衣机', url: require('assets/img/menus/4/menu-4-5-1.jpg') },
      { id: 31, text: '空气净化器', url: require('assets/img/menus/4/menu-4-5-2.jpg') },
      { id: 32, text: '投影仪', url: require('assets/img/menus/4/menu-4-5-3.png') },
      { id: 33, text: '料理机', url: require('assets/img/menus/4/menu-4-5-4.jpg') }
    ],
    [
      { id: 30, text: '净水器', url: require('assets/img/menus/4/menu-4-6-1.jpg') },
      { id: 31, text: '电饭煲', url: require('assets/img/menus/4/menu-4-6-2.jpg') },
      { id: 32, text: '灯具', url: require('assets/img/menus/4/menu-4-6-3.jpg') },
      { id: 33, text: '电煮壶', url: require('assets/img/menus/4/menu-4-6-4.jpg') }
    ]
  ],
  105: [
    [
      { id: 30, text: '小米手表', url: require('assets/img/menus/5/menu-5-1-1.png') },
      { id: 31, text: '车载充电器', url: require('assets/img/menus/5/menu-5-1-2.jpg') },
      { id: 32, text: '平衡轮', url: require('assets/img/menus/5/menu-5-1-3.jpg') }
    ],
    [
      { id: 30, text: '小米手环', url: require('assets/img/menus/5/menu-5-2-1.png') },
      { id: 31, text: '平衡车配件', url: require('assets/img/menus/5/menu-5-2-2.jpg') },
      { id: 32, text: '石英表', url: require('assets/img/menus/5/menu-5-2-3.jpg') }
    ],
    [
      { id: 30, text: 'VR', url: require('assets/img/menus/5/menu-5-3-1.jpg') },
      { id: 31, text: '智能后视镜', url: require('assets/img/menus/5/menu-5-3-2.jpg') }
    ],
    [
      { id: 30, text: '平衡车', url: require('assets/img/menus/5/menu-5-4-1.jpg') },
      { id: 31, text: '只能记录仪', url: require('assets/img/menus/5/menu-5-4-2.jpg') }
    ],
    [
      { id: 30, text: '滑板车', url: require('assets/img/menus/5/menu-5-5-1.jpg') },
      { id: 31, text: '无线车充', url: require('assets/img/menus/5/menu-5-5-2.jpg') }
    ],
    [
      { id: 30, text: '自行车', url: require('assets/img/menus/5/menu-5-6-1.png') },
      { id: 31, text: '充电宝', url: require('assets/img/menus/5/menu-5-6-2.jpg') }
    ]
  ],
  106: [
    [
      { id: 30, text: '打印机', url: require('assets/img/menus/6/menu-6-1-1.jpg') },
      { id: 31, text: '摄像机', url: require('assets/img/menus/6/menu-6-1-2.jpg') },
      { id: 32, text: '小爱音箱', url: require('assets/img/menus/6/menu-6-1-3.jpg') }
    ],
    [
      { id: 30, text: '喷墨打印机', url: require('assets/img/menus/6/menu-6-2-1.png') },
      { id: 31, text: '照相机', url: require('assets/img/menus/6/menu-6-2-2.jpg') },
      { id: 32, text: '云服务空间年卡', url: require('assets/img/menus/6/menu-6-2-3.png') }
    ],
    [
      { id: 30, text: '喷墨打印机墨水', url: require('assets/img/menus/6/menu-6-3-1.png') },
      { id: 31, text: '智能门锁', url: require('assets/img/menus/6/menu-6-3-2.jpg') },
      { id: 32, text: '云服务空间月卡', url: require('assets/img/menus/6/menu-6-3-3.png') }
    ],
    [
      { id: 30, text: '小米路由器', url: require('assets/img/menus/6/menu-6-4-1.png') },
      { id: 31, text: '视频门铃', url: require('assets/img/menus/6/menu-6-4-2.jpg') }
    ],
    [
      { id: 30, text: '智能家庭', url: require('assets/img/menus/6/menu-6-5-1.jpg') },
      { id: 31, text: '小爱老师', url: require('assets/img/menus/6/menu-6-5-2.png') }
    ],
    [
      { id: 30, text: '对讲机', url: require('assets/img/menus/6/menu-6-6-1.jpg') },
      { id: 31, text: 'Redmi路由器', url: require('assets/img/menus/6/menu-6-6-2.png') }
    ]
  ],
  107: [
    [
      { id: 30, text: '移动电源', url: require('assets/img/menus/7/menu-7-1-1.png') },
      { id: 31, text: '手电筒', url: require('assets/img/menus/7/menu-7-1-2.jpg') },
      { id: 32, text: '数据线', url: require('assets/img/menus/7/menu-7-1-3.jpg') }
    ],
    [
      { id: 30, text: '手机壳', url: require('assets/img/menus/7/menu-7-2-1.jpg') },
      { id: 31, text: '手机贴膜', url: require('assets/img/menus/7/menu-7-2-2.jpg') }
    ],
    [
      { id: 30, text: '车充', url: require('assets/img/menus/7/menu-7-3-1.jpg') },
      { id: 31, text: '无线充电器', url: require('assets/img/menus/7/menu-7-3-2.png') }
    ],
    [
      { id: 30, text: '充电器', url: require('assets/img/menus/7/menu-7-4-1.png') },
      { id: 31, text: '平板配件', url: require('assets/img/menus/7/menu-7-4-2.jpg') }
    ],
    [
      { id: 30, text: '电池', url: require('assets/img/menus/7/menu-7-5-1.jpg') },
      { id: 31, text: '黑鲨配件', url: require('assets/img/menus/7/menu-7-5-2.jpg') }
    ],
    [
      { id: 30, text: '自拍杆', url: require('assets/img/menus/7/menu-7-6-1.jpg') },
      { id: 31, text: '其他配件', url: require('assets/img/menus/7/menu-7-6-2.jpg') }
    ]
  ],
  108: [
    [
      { id: 30, text: '洗手机', url: require('assets/img/menus/8/menu-8-1-1.jpg') },
      { id: 31, text: '体重秤', url: require('assets/img/menus/8/menu-8-1-2.png') },
      { id: 32, text: '儿童滑板车', url: require('assets/img/menus/8/menu-8-1-3.jpg') },
      { id: 33, text: '走步机', url: require('assets/img/menus/8/menu-8-1-4.jpg') }
    ],
    [
      { id: 30, text: '修剪器', url: require('assets/img/menus/8/menu-8-2-1.jpg') },
      { id: 31, text: '体脂秤', url: require('assets/img/menus/8/menu-8-2-2.jpg') },
      { id: 32, text: '婴儿推车', url: require('assets/img/menus/8/menu-8-2-3.jpg') },
      { id: 33, text: '点读笔', url: require('assets/img/menus/8/menu-8-2-4.jpg') }
    ],
    [
      { id: 30, text: '剃须刀', url: require('assets/img/menus/8/menu-8-3-1.jpg') },
      { id: 31, text: '早教启智', url: require('assets/img/menus/8/menu-8-3-2.jpg') },
      { id: 32, text: '儿童书包', url: require('assets/img/menus/8/menu-8-3-3.jpg') }
    ],
    [
      { id: 30, text: '日光镜', url: require('assets/img/menus/8/menu-8-4-1.jpg') },
      { id: 31, text: '遥控电动', url: require('assets/img/menus/8/menu-8-4-2.jpg') },
      { id: 32, text: '婴儿理发器', url: require('assets/img/menus/8/menu-8-4-3.jpg') }
    ],
    [
      { id: 30, text: '牙刷', url: require('assets/img/menus/8/menu-8-5-1.jpg') },
      { id: 31, text: '益智积木', url: require('assets/img/menus/8/menu-8-5-2.jpg') },
      { id: 32, text: '儿童保温杯', url: require('assets/img/menus/8/menu-8-5-3.jpg') }
    ],
    [
      { id: 30, text: '吹风机', url: require('assets/img/menus/8/menu-8-6-1.jpg') },
      { id: 31, text: '儿童手表', url: require('assets/img/menus/8/menu-8-6-2.jpg') },
      { id: 32, text: '健身车', url: require('assets/img/menus/8/menu-8-6-3.png') }
    ]
  ],
  109: [
    [
      { id: 30, text: '音箱 Pro', url: require('assets/img/menus/9/menu-9-1-1.png') },
      { id: 31, text: '品牌耳机', url: require('assets/img/menus/9/menu-9-1-2.jpg') },
      { id: 32, text: '小爱触屏音箱', url: require('assets/img/menus/9/menu-9-1-3.jpg') }
    ],
    [
      { id: 30, text: '小爱音箱', url: require('assets/img/menus/9/menu-9-2-1.png') },
      { id: 31, text: '蓝牙音箱', url: require('assets/img/menus/9/menu-9-2-2.png') }
    ],
    [
      { id: 30, text: '小爱音箱 Play版', url: require('assets/img/menus/9/menu-9-3-1.jpg') },
      { id: 31, text: '小米AI音箱', url: require('assets/img/menus/9/menu-9-3-2.jpg') }
    ],
    [
      { id: 30, text: '线控耳机', url: require('assets/img/menus/9/menu-9-4-1.jpg') },
      { id: 31, text: '小爱音箱HD', url: require('assets/img/menus/9/menu-9-4-2.jpg') }
    ],
    [
      { id: 30, text: '蓝牙耳机', url: require('assets/img/menus/9/menu-9-5-1.jpg') },
      { id: 31, text: 'k歌耳机', url: require('assets/img/menus/9/menu-9-5-2.jpg') }
    ],
    [
      { id: 30, text: '头戴耳机', url: require('assets/img/menus/9/menu-9-6-1.jpg') },
      { id: 31, text: 'Redmi音箱', url: require('assets/img/menus/9/menu-9-6-2.png') }
    ]
  ],
  110: [
    [
      { id: 30, text: '小背包', url: require('assets/img/menus/10/menu-10-1-1.jpg') },
      { id: 31, text: '床垫', url: require('assets/img/menus/10/menu-10-1-2.jpg') },
      { id: 32, text: '驱蚊器', url: require('assets/img/menus/10/menu-10-1-3.jpg') }
    ],
    [
      { id: 30, text: '双肩包', url: require('assets/img/menus/10/menu-10-2-1.jpg') },
      { id: 31, text: '枕头', url: require('assets/img/menus/10/menu-10-2-2.png') },
      { id: 32, text: '尤克里里', url: require('assets/img/menus/10/menu-10-2-3.jpg') }
    ],
    [
      { id: 30, text: '胸包', url: require('assets/img/menus/10/menu-10-3-1.jpg') },
      { id: 31, text: '饰品', url: require('assets/img/menus/10/menu-10-3-2.jpg') },
      { id: 32, text: '毛巾/浴巾', url: require('assets/img/menus/10/menu-10-3-3.jpg') }
    ],
    [
      { id: 30, text: '旅行箱', url: require('assets/img/menus/10/menu-10-4-1.jpg') },
      { id: 31, text: '螺丝刀', url: require('assets/img/menus/10/menu-10-4-2.jpg') },
      { id: 32, text: '米兔', url: require('assets/img/menus/10/menu-10-4-3.jpg') }
    ],
    [
      { id: 30, text: '运动鞋', url: require('assets/img/menus/10/menu-10-5-1.jpg') },
      { id: 31, text: '保温杯', url: require('assets/img/menus/10/menu-10-5-2.jpg') },
      { id: 32, text: '笔', url: require('assets/img/menus/10/menu-10-5-3.jpg') }
    ],
    [
      { id: 30, text: '眼镜', url: require('assets/img/menus/10/menu-10-6-1.jpg') },
      { id: 31, text: '伞', url: require('assets/img/menus/10/menu-10-6-2.jpg') }
    ]
  ]
}

export const ADV_LIST_ITEMS = [
  { id: 32, url: require('assets/img/advs/adv-1.png'), desc: '小米9 超值买赠' },
  { id: 45, url: require('assets/img/advs/adv-2.jpg'), desc: 'Redmi K20 Pro 尊享版' },
  { id: 47, url: require('assets/img/advs/adv-3.png'), desc: 'Redmi Note 7' },
  { id: 48, url: require('assets/img/advs/adv-4.jpg'), desc: '小米MIX3' }
]

export const BANNER_LIST_ITEMS = [
  { id: 33, url: require('assets/img/banners/banner-1.png'), desc: '小米CC全新系列发布会' },
  { id: 48, url: require('assets/img/banners/banner-2.jpg'), desc: '小米MIX Alpha' }
]
