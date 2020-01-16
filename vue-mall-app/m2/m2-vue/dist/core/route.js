"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRouter = getRouter;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method 获取路由配置对象
 * @param {Array} routesConfig 当前路由配置对象
 * @param {Object} options 当前扩展配置(可能包含mode,base,redirect)
 * @returns {Object} 获取路由配置对象
 */
function getRouter(routesConfig) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _vue.default.use(_vueRouter.default);

  options.redirect && routesConfig.unshift({
    path: '',
    redirect: options.redirect
  });
  return new _vueRouter.default({
    mode: options.mode || 'history',
    base: options.base || process.env.BASE_URL,
    routes: routesConfig
  });
}