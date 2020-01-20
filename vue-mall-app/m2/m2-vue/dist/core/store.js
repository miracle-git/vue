"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = getStore;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method 获取Vuex的Store对象
 * @param {Object} options 当前扩展配置(可能包含state, mutations, getters, actions, modules, devtools)
 * @returns {Object} 获取Store对象
 */
function getStore() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _vue.default.use(_vuex.default);

  var state = options.state,
      mutations = options.mutations,
      getters = options.getters,
      actions = options.actions,
      modules = options.modules;
  return new _vuex.default.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    modules: modules
  });
}