"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = getStore;
exports.DevTools = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexDevtools = require("vuex-devtools");

var _m2Core = require("m2-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @method 获取Vuex的Store对象
 * @param {Object} options 当前扩展配置(可能包含state, mutations, getters, actions, modules, devtools)
 * @returns {Object} 获取Store对象
 */
function getStore() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _vue.default.use(_vuex.default);

  var _options$devtools = options.devtools,
      devtools = _options$devtools === void 0 ? false : _options$devtools,
      config = _objectWithoutProperties(options, ["devtools"]);

  var state = config.state,
      mutations = config.mutations,
      getters = config.getters,
      actions = config.actions,
      modules = config.modules;
  var middlewares = [];

  if (devtools || _m2Core.IsDev) {
    middlewares.push(_vuexDevtools.devtoolsMiddleware);
  }

  return new _vuex.default.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    modules: modules,
    middlewares: middlewares
  });
} // 导出Vuex-DevTools在app.vue中使用


var DevTools = _vuexDevtools.Devtools;
exports.DevTools = DevTools;