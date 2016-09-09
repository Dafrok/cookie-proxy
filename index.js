'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new Proxy({}, {
  get: function get(target, name) {
    var result = '';
    var cookieList = document.cookie.split('; ');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cookieList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        var data = item.split('=');
        if (data[0] === name) {
          return data[1];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  set: function set(obj, prop, value) {
    document.cookie = prop + '=' + value;
  }
});
