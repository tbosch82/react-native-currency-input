"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FakeCurrencyInput: true,
  TextWithCursor: true,
  formatNumber: true
};
Object.defineProperty(exports, "FakeCurrencyInput", {
  enumerable: true,
  get: function () {
    return _FakeCurrencyInput.default;
  }
});
Object.defineProperty(exports, "TextWithCursor", {
  enumerable: true,
  get: function () {
    return _TextWithCursor.default;
  }
});
Object.defineProperty(exports, "formatNumber", {
  enumerable: true,
  get: function () {
    return _formatNumber.default;
  }
});
exports.default = void 0;

var _CurrencyInput = require("./CurrencyInput");

var _FakeCurrencyInput = _interopRequireDefault(require("./FakeCurrencyInput"));

var _TextWithCursor = _interopRequireDefault(require("./TextWithCursor"));

var _formatNumber = _interopRequireDefault(require("./utils/formatNumber"));

var _props = require("./props");

Object.keys(_props).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _props[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _props[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _CurrencyInput.CurrencyInput;
exports.default = _default;
//# sourceMappingURL=index.js.map