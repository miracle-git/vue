"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _m2Core = require("m2-core");

var _default = [{
  name: 'date',
  rule: function rule(val, fmt) {
    return _m2Core.DataUtil.formatDate(val, fmt);
  }
}, {
  name: 'datetime',
  rule: function rule(val, short, fmt) {
    return short ? _m2Core.DataUtil.formatShortDateTime(val, fmt) : _m2Core.DataUtil.formatDateTime(val, fmt);
  }
}, {
  name: 'time',
  rule: function rule(val, short, fmt) {
    return short ? _m2Core.DataUtil.formatShortTime(val, fmt) : _m2Core.DataUtil.formatTime(val, fmt);
  }
}];
exports.default = _default;