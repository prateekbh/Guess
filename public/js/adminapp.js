webpackJsonp([4],{

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_AdminBase_AdminBase_jsx__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_adminapp_css__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_adminapp_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_adminapp_css__);






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Layout"],
  null,
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__component_AdminBase_AdminBase_jsx__["a" /* default */], null)
), document.getElementById('app'));

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AdminImageChooser_AdminImageChooser_jsx__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AdminBase_css__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AdminBase_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__AdminBase_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AdminBase = function (_Component) {
	_inherits(AdminBase, _Component);

	function AdminBase() {
		_classCallCheck(this, AdminBase);

		var _this = _possibleConstructorReturn(this, (AdminBase.__proto__ || Object.getPrototypeOf(AdminBase)).call(this));

		_this.state = {
			fetchingResults: false,
			fetchedResults: false,
			searchTerm: '',
			chosenImages: []
		};
		return _this;
	}

	_createClass(AdminBase, [{
		key: 'fetchResults',
		value: function fetchResults() {
			var _this2 = this;

			fetch('/adminapi/search?q=' + this.state.searchTerm).then(function (d) {
				return d.json();
			}).then(function (data) {
				_this2.setState({
					fetchingResults: false,
					resultWord: data.word,
					fetchedResults: data.images
				});
			}).catch(function (e) {});
			this.setState({
				fetchingResults: true,
				searchTerm: ''
			});
		}
	}, {
		key: 'chooseImage',
		value: function chooseImage(e) {
			if (this.state.chosenImages.length < 4 && this.state.chosenImages.indexOf(e) === -1) {
				var newImages = this.state.chosenImages;
				newImages.push(e);
				this.setState({
					chosenImages: newImages
				});
			}
		}
	}, {
		key: 'sendWord',
		value: function sendWord() {
			var _this3 = this;

			if (!this.state.actualWord) {
				alert('enter a word');
				return;
			}

			var payload = {
				word: this.state.actualWord,
				images: this.state.chosenImages
			};
			this.setState({
				fetchingResults: false,
				fetchedResults: false,
				searchTerm: '',
				chosenImages: []
			});
			fetch('/adminapi/saveword', {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: new Headers({
					'content-type': 'application/json'
				}),
				credentials: 'include'
			}).then(function (res) {
				if (res.ok) {
					alert('saved');
					_this3.setState({
						actualWord: ''
					});
				} else {
					alert('errored');
				}
			}).catch(function (e) {});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page page-adminbase' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'container-searchbox' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["TextField"], { label: 'Word', value: this.state.searchTerm, autofocus: 'true', onChange: function onChange(e) {
							_this4.setState({
								searchTerm: e.target.value
							});
						} }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
						{ 'with-ripple': true, onClick: this.fetchResults.bind(this) },
						'Search'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'progress' },
					this.state.fetchingResults && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Progress"], { indeterminate: true })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'grid' },
					this.state.fetchedResults && this.state.fetchedResults.map(function (e) {
						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__AdminImageChooser_AdminImageChooser_jsx__["a" /* default */], { choosen: _this4.state.chosenImages.indexOf(e) !== -1, src: e, onClick: _this4.chooseImage.bind(_this4, e) });
					})
				),
				this.state.chosenImages.length === 4 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'sendButton' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
						{ fab: true, accent: true, onClick: this.sendWord.bind(this) },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'svg',
							{ fill: '#FFFFFF', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' })
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'chosen-toast' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'wordDetails' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'word' },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["TextField"], { placeholder: 'word', maxlength: '8', value: this.state.actualWord, onChange: function onChange(e) {
									_this4.setState({
										actualWord: e.target.value
									});
								} })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'chosenImages' },
							this.state.chosenImages.map(function (img) {
								return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { width: '80', src: img, alt: '', className: 'img' });
							})
						)
					)
				)
			);
		}
	}]);

	return AdminBase;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = AdminBase;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AdminImageChooser_css__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AdminImageChooser_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AdminImageChooser_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AdminImageChooser = function (_Component) {
	_inherits(AdminImageChooser, _Component);

	function AdminImageChooser() {
		_classCallCheck(this, AdminImageChooser);

		return _possibleConstructorReturn(this, (AdminImageChooser.__proto__ || Object.getPrototypeOf(AdminImageChooser)).apply(this, arguments));
	}

	_createClass(AdminImageChooser, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				_extends({ className: this.props.choosen ? 'control-imagechooser choosen' : 'control-imagechooser' }, this.props),
				this.props.choosen && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'tick' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'svg',
						{ fill: '#FFFFFF', height: '24', viewBox: '0 0 24 24', width: '24' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: 'img-thumb', style: "background-image: url(" + this.props.src + ")" })
			);
		}
	}]);

	return AdminImageChooser;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = AdminImageChooser;

/***/ })

},[133]);