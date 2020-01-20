"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _vue = _interopRequireDefault(require("vue"));

var _m2Core = require("m2-core");

var _filters = _interopRequireDefault(require("../filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.config.productionTip = false;
/**
 * @method 渲染Vue应用的根组件
 * @param {Object} rootApp 当前应用的根组件(可能是对象或组件)
 * @param {Object} options 当前扩展配置(可能包含boot, router,store,lazy-load)
 * @returns {Object} 获取根组件的实例
 */

function render(rootApp) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!rootApp || !rootApp.component && !rootApp.render) {
    console.error('Vue根组件参数rootApp或rootApp.component尚未配置, 应用无法启动！');
    return;
  } // 为Vue实例挂载数据总线


  _vue.default.prototype.$bus = new _vue.default(); // 为Vue实例挂载防抖节流

  _vue.default.prototype.$bus.$throttle = _m2Core.DataEvent.throttle;
  _vue.default.prototype.$bus.$debounce = _m2Core.DataEvent.debounce; // 为Vue注册全局过滤器

  _filters.default.map(function (filter) {
    return _vue.default.filter(filter.name, filter.rule);
  }); // 在App渲染之前执行初始化


  var router = options.router,
      store = options.store,
      init = options.init;
  typeof init === 'function' && init(_vue.default);
  return new _vue.default({
    router: router,
    store: store,
    render: function render(h) {
      return h(rootApp.component || rootApp);
    }
  }).$mount(rootApp.root || '#app');
}