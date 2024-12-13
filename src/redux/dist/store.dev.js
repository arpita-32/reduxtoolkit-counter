"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _CounterSlice = _interopRequireDefault(require("./slices/CounterSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    counter: _CounterSlice["default"]
  }
});
exports.store = store;
//# sourceMappingURL=store.dev.js.map
