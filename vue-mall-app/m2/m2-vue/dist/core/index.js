"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = require("./render");

Object.keys(_render).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _render[key];
    }
  });
});

var _route = require("./route");

Object.keys(_route).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _route[key];
    }
  });
});