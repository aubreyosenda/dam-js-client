function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { DAMError, AuthenticationError, ValidationError, NotFoundError, RateLimitError, NetworkError } from './errors.js';
export var DAMClient = /*#__PURE__*/function () {
  function DAMClient(config) {
    _classCallCheck(this, DAMClient);
    if (!config || !config.apiUrl || !config.keyId || !config.keySecret) {
      throw new ValidationError('Missing required configuration: apiUrl, keyId, and keySecret are required');
    }
    this.apiUrl = config.apiUrl.replace(/\/$/, '');
    this.keyId = config.keyId;
    this.keySecret = config.keySecret;
    this.baseUrl = "".concat(this.apiUrl, "/api");
    this.timeout = config.timeout || 30000;
  }
  return _createClass(DAMClient, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(endpoint) {
        var options,
          url,
          headers,
          controller,
          timeoutId,
          fetchOptions,
          response,
          data,
          _args = arguments,
          _t,
          _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              url = "".concat(this.baseUrl).concat(endpoint);
              headers = _objectSpread({
                'X-API-Key-ID': this.keyId,
                'X-API-Key-Secret': this.keySecret
              }, options.headers);
              if (!(options.body instanceof FormData)) {
                headers['Content-Type'] = 'application/json';
              }
              controller = new AbortController();
              timeoutId = setTimeout(function () {
                return controller.abort();
              }, this.timeout);
              _context.p = 1;
              fetchOptions = _objectSpread({
                method: options.method || 'GET',
                headers: headers,
                signal: controller.signal
              }, options);
              if (options.body && !(options.body instanceof FormData)) {
                fetchOptions.body = JSON.stringify(options.body);
              }
              _context.n = 2;
              return fetch(url, fetchOptions);
            case 2:
              response = _context.v;
              clearTimeout(timeoutId);
              _context.n = 3;
              return response.json();
            case 3:
              data = _context.v;
              if (response.ok) {
                _context.n = 9;
                break;
              }
              _t = response.status;
              _context.n = _t === 401 ? 4 : _t === 404 ? 5 : _t === 429 ? 6 : _t === 400 ? 7 : 8;
              break;
            case 4:
              throw new AuthenticationError(data.message || 'Invalid API credentials');
            case 5:
              throw new NotFoundError(data.message || 'Resource not found');
            case 6:
              throw new RateLimitError(data.message || 'Rate limit exceeded');
            case 7:
              throw new ValidationError(data.message || 'Validation failed', data.errors);
            case 8:
              throw new DAMError(data.message || "Request failed with status ".concat(response.status), 'API_ERROR');
            case 9:
              return _context.a(2, data);
            case 10:
              _context.p = 10;
              _t2 = _context.v;
              clearTimeout(timeoutId);
              if (!(_t2.name === 'AbortError')) {
                _context.n = 11;
                break;
              }
              throw new DAMError('Request timeout', 'TIMEOUT');
            case 11:
              if (!(_t2 instanceof DAMError)) {
                _context.n = 12;
                break;
              }
              throw _t2;
            case 12:
              throw new NetworkError(_t2.message);
            case 13:
              return _context.a(2);
          }
        }, _callee, this, [[1, 10]]);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }() // ==================== PUBLIC UPLOAD METHODS ====================
    /**
     * Upload single file
     * @param {File} file - The file to upload
     * @param {Object} options - Upload options
     * @returns {Promise} Upload result
     */
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(file) {
        var options,
          formData,
          _args2 = arguments;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              if (!(!file || !(file instanceof File))) {
                _context2.n = 1;
                break;
              }
              throw new ValidationError('File must be a valid File object');
            case 1:
              formData = new FormData();
              formData.append('file', file);
              if (options.folderId) {
                formData.append('folder_id', options.folderId);
              }
              if (options.metadata) {
                formData.append('metadata', JSON.stringify(options.metadata));
              }
              return _context2.a(2, this.request('/public/single', {
                method: 'POST',
                body: formData
              }));
          }
        }, _callee2, this);
      }));
      function uploadFile(_x2) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
    /**
     * Upload multiple files
     * @param {File[]} files - Array of files to upload
     * @param {Object} options - Upload options
     * @returns {Promise} Upload result
     */
  }, {
    key: "uploadMultipleFiles",
    value: (function () {
      var _uploadMultipleFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(files) {
        var options,
          formData,
          _args3 = arguments;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              if (!(!files || !Array.isArray(files) || files.length === 0)) {
                _context3.n = 1;
                break;
              }
              throw new ValidationError('Files must be a non-empty array');
            case 1:
              formData = new FormData();
              files.forEach(function (file) {
                if (!(file instanceof File)) {
                  throw new ValidationError('All items must be valid File objects');
                }
                formData.append('files', file);
              });
              if (options.folderId) {
                formData.append('folder_id', options.folderId);
              }
              if (options.metadata) {
                formData.append('metadata', JSON.stringify(options.metadata));
              }
              return _context3.a(2, this.request('/public/multiple', {
                method: 'POST',
                body: formData
              }));
          }
        }, _callee3, this);
      }));
      function uploadMultipleFiles(_x3) {
        return _uploadMultipleFiles.apply(this, arguments);
      }
      return uploadMultipleFiles;
    }()
    /**
     * Upload file with progress tracking
     * @param {File} file - The file to upload
     * @param {Object} options - Upload options
     * @param {Function} onProgress - Progress callback
     * @returns {Promise} Upload result
     */
    )
  }, {
    key: "uploadFileWithProgress",
    value: (function () {
      var _uploadFileWithProgress = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(file) {
        var _this = this;
        var options,
          onProgress,
          _args4 = arguments;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              onProgress = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
              return _context4.a(2, new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                var url = "".concat(_this.baseUrl, "/public/single");

                // Progress tracking
                if (onProgress && typeof onProgress === 'function') {
                  xhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                      var percent = Math.round(e.loaded / e.total * 100);
                      onProgress(percent, e.loaded, e.total);
                    }
                  });
                }
                xhr.addEventListener('load', function () {
                  if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                      var response = JSON.parse(xhr.responseText);
                      resolve(response);
                    } catch (err) {
                      reject(new ValidationError('Invalid JSON response'));
                    }
                  } else {
                    try {
                      var error = JSON.parse(xhr.responseText);
                      reject(new DAMError(error.message || 'Upload failed', 'UPLOAD_ERROR'));
                    } catch (_unused) {
                      reject(new DAMError("Upload failed with status ".concat(xhr.status), 'UPLOAD_ERROR'));
                    }
                  }
                });
                xhr.addEventListener('error', function () {
                  reject(new NetworkError('Network error during upload'));
                });
                xhr.open('POST', url);
                xhr.setRequestHeader('X-API-Key-ID', _this.keyId);
                xhr.setRequestHeader('X-API-Key-Secret', _this.keySecret);
                var formData = new FormData();
                formData.append('file', file);
                if (options.folderId) {
                  formData.append('folder_id', options.folderId);
                }
                if (options.metadata) {
                  formData.append('metadata', JSON.stringify(options.metadata));
                }
                xhr.send(formData);
              }));
          }
        }, _callee4);
      }));
      function uploadFileWithProgress(_x4) {
        return _uploadFileWithProgress.apply(this, arguments);
      }
      return uploadFileWithProgress;
    }() // ==================== FILE MANAGEMENT ====================
    /**
     * Get files with optional filtering
     * @param {Object} options - Filter options
     * @returns {Promise} Files list
     */
    )
  }, {
    key: "getFiles",
    value: function () {
      var _getFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var options,
          params,
          query,
          _args5 = arguments;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              params = new URLSearchParams();
              if (options.folderId) params.append('folder_id', options.folderId);
              if (options.mimeType) params.append('mime_type', options.mimeType);
              if (options.search) params.append('search', options.search);
              if (options.limit) params.append('limit', options.limit);
              if (options.offset) params.append('offset', options.offset);
              query = params.toString();
              return _context5.a(2, this.request("/public/files".concat(query ? '?' + query : '')));
          }
        }, _callee5, this);
      }));
      function getFiles() {
        return _getFiles.apply(this, arguments);
      }
      return getFiles;
    }()
    /**
     * Get single file by ID
     * @param {string} fileId - File ID
     * @returns {Promise} File data
     */
  }, {
    key: "getFile",
    value: (function () {
      var _getFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(fileId) {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (fileId) {
                _context6.n = 1;
                break;
              }
              throw new ValidationError('File ID is required');
            case 1:
              return _context6.a(2, this.request("/public/files/".concat(fileId)));
          }
        }, _callee6, this);
      }));
      function getFile(_x5) {
        return _getFile.apply(this, arguments);
      }
      return getFile;
    }()
    /**
     * Delete file by ID
     * @param {string} fileId - File ID
     * @returns {Promise} Delete result
     */
    )
  }, {
    key: "deleteFile",
    value: (function () {
      var _deleteFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(fileId) {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (fileId) {
                _context7.n = 1;
                break;
              }
              throw new ValidationError('File ID is required');
            case 1:
              return _context7.a(2, this.request("/public/files/".concat(fileId), {
                method: 'DELETE'
              }));
          }
        }, _callee7, this);
      }));
      function deleteFile(_x6) {
        return _deleteFile.apply(this, arguments);
      }
      return deleteFile;
    }()
    /**
     * Generate file URL with transformations
     * @param {string} fileId - File ID
     * @param {Object} transformOptions - Transformation options
     * @returns {string} File URL
     */
    )
  }, {
    key: "getFileUrl",
    value: function getFileUrl(fileId) {
      var transformOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!fileId) return null;
      if (!transformOptions) {
        return "".concat(this.apiUrl, "/api/transform/").concat(fileId);
      }
      var params = new URLSearchParams();
      if (transformOptions.width) params.append('w', transformOptions.width);
      if (transformOptions.height) params.append('h', transformOptions.height);
      if (transformOptions.fit) params.append('fit', transformOptions.fit);
      if (transformOptions.format) params.append('format', transformOptions.format);
      if (transformOptions.quality) params.append('quality', transformOptions.quality);
      if (transformOptions.blur) params.append('blur', transformOptions.blur);
      if (transformOptions.grayscale) params.append('grayscale', 'true');
      if (transformOptions.rotate) params.append('rotate', transformOptions.rotate);
      var query = params.toString();
      return "".concat(this.apiUrl, "/api/transform/").concat(fileId).concat(query ? '?' + query : '');
    }

    // ==================== UTILITY METHODS ====================

    /**
     * Test API connection
     * @returns {Promise} Connection test result
     */
  }, {
    key: "testConnection",
    value: function () {
      var _testConnection = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var result, _t3;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return this.request('/health');
            case 1:
              result = _context8.v;
              return _context8.a(2, {
                success: true,
                message: 'Connection successful',
                data: result
              });
            case 2:
              _context8.p = 2;
              _t3 = _context8.v;
              return _context8.a(2, {
                success: false,
                message: _t3.message,
                error: _t3
              });
          }
        }, _callee8, this, [[0, 2]]);
      }));
      function testConnection() {
        return _testConnection.apply(this, arguments);
      }
      return testConnection;
    }()
    /**
     * Get API information
     * @returns {Promise} API info
     */
  }, {
    key: "getApiInfo",
    value: (function () {
      var _getApiInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              return _context9.a(2, this.request('/'));
          }
        }, _callee9, this);
      }));
      function getApiInfo() {
        return _getApiInfo.apply(this, arguments);
      }
      return getApiInfo;
    }())
  }]);
}();
export default DAMClient;