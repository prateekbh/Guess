webpackJsonp([1],{

/***/ 137:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LevelBadge_LevelBadge_jsx__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewTiles_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PreviewTiles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__PreviewTiles_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

		_this.state = {
			largenedImageIndex: -1
		};
		return _this;
	}

	_createClass(Header, [{
		key: 'enlargeImage',
		value: function enlargeImage(index) {
			if (this.state.largenedImageIndex === index) {
				this.setState({
					largenedImageIndex: -1
				});
			} else {
				this.setState({
					largenedImageIndex: index,
					ahead: true
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: this.props.mode + "-tiles" },
				this.props.images && this.props.images.map(function (e, index) {
					var imageStyle = "background-image:url(" + e + ");";
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: index === _this2.state.largenedImageIndex ? "large tile" : "tile",
							style: _this2.state.largenedImageIndex !== -1 && index !== _this2.state.largenedImageIndex ? "opacity: 0.1" : "" },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: 'pic',
							style: imageStyle,
							onClick: _this2.enlargeImage.bind(_this2, index) })
					);
				}),
				this.props.mode == 'preview' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__LevelBadge_LevelBadge_jsx__["a" /* default */], { level: this.props.level })
			);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Header;

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_firebaseUtils__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Splash_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Splash_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Splash_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Splash = function (_Component) {
	_inherits(Splash, _Component);

	function Splash() {
		_classCallCheck(this, Splash);

		var _this = _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).call(this));

		_this.state = {
			isLoading: false,
			stretchWindow: false,
			winHeight: 0,
			enableSocialLogin: false
		};
		return _this;
	}

	_createClass(Splash, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_firebaseUtils__["a" /* requestFirebase */])(function (_ref) {
				var firebase = _ref.firebase;

				_this2.firebase = firebase;
				_this2.setState({
					enableSocialLogin: true
				});
			});
			if (window.dialogPolyfill) {
				dialogPolyfill.registerDialog(this.nameDialog.base);
				dialogPolyfill.registerDialog(this.offlineDialog.base);
			}
		}
	}, {
		key: 'login',
		value: function login() {
			var _this3 = this;

			this.setState({
				isLoading: true
			});
			if (navigator.onLine) {
				var firebase = this.firebase;
				var provider = new firebase.auth.GoogleAuthProvider();
				firebase.auth().signInWithPopup(provider).then(function (result) {
					_this3.props.setUser({
						authToken: result.credential.idToken
					});
				}).catch(function (err) {
					console.log('woops, cant get your profile!', err);
				});
			} else {
				this.offlineDialog.showModal();
			}
		}
	}, {
		key: 'sendGuestName',
		value: function sendGuestName() {
			var name = this.state.guestName;
			this.nameDialog.close();
			if (name && name.length > 1) {
				navigator.onLine ? this.props.setUser({
					authToken: null,
					name: name
				}) : this.offlineDialog.showModal();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'screen-splash', style: this.state.stretchWindow ? 'height:' + this.state.winHeight + 'px' : '' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'logo-container' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: '/images/logo.svg', className: 'logo', alt: 'guess logo' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'loading' },
					this.state.isLoading || this.props.user.name ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Progress"], { indeterminate: true }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'btn-google' },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
								{ raised: true, onClick: this.login.bind(this), disabled: !this.state.enableSocialLogin },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'div',
									null,
									'Sign in with Google'
								)
							)
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'btn-guest' },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
								{ raised: true, onClick: function onClick() {
										_this4.setState({
											winHeight: window.innerHeight,
											stretchWindow: true
										}, function () {
											_this4.nameDialog.showModal();
										});
									} },
								'Continue as guest'
							)
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"],
					{ ref: function ref(nameDialog) {
							_this4.nameDialog = nameDialog;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Title,
						null,
						'Guest name'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Content,
						null,
						'Please let us know your name',
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["TextField"], { maxlength: '20',
							ref: function ref(nameField) {
								return _this4.nameField = nameField;
							},
							onChange: function onChange(e) {
								_this4.setState({
									guestName: e.target.value
								});
							},
							value: this.state.guestName,
							onKeyUp: function onKeyUp(e) {
								if (e.key === 'Enter') {
									document.activeElement && document.activeElement.blur();
									_this4.sendGuestName();
								}
							} })
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Actions,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
							{ colored: true, onClick: this.sendGuestName.bind(this) },
							'Done'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
							{ onClick: function onClick() {
									_this4.setState({
										winHeight: window.innerHeight,
										stretchWindow: true
									}, function () {
										_this4.nameDialog.close();
									});
								} },
							'Cancel'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"],
					{ ref: function ref(offlineDialog) {
							_this4.offlineDialog = offlineDialog;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Title,
						null,
						'Offline!'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Content,
						null,
						'Woops, you need to be online for signing in.'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Actions,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
							{ colored: true, onClick: function onClick() {
									_this4.offlineDialog.close();
								} },
							'Okay'
						)
					)
				)
			);
		}
	}]);

	return Splash;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Splash;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".play-tiles, .preview-tiles{\n\tposition: relative;\n\ttext-align: center;\n\twidth: 100%;\n\tleft: 0;\n\tright: 0;\n\tmargin: 40px auto;\n}\n\n.play-tiles .tile, .preview-tiles .tile{\n\tposition: relative;\n\twidth: 50%;\n\tfloat: left;\n\tpadding: 4px;\n\twill-change: transform opacity;\n\t-webkit-transition-duration: 300ms;\n\t        transition-duration: 300ms;\n\t-webkit-transition-property: -webkit-transform opacity;\n\ttransition-property: -webkit-transform opacity;\n\ttransition-property: transform opacity;\n\ttransition-property: transform opacity, -webkit-transform opacity;\n}\n\n.play-tiles .pic, .preview-tiles .pic{\n\tborder: 4px solid #455A64;\n\tbox-shadow: 0px 0px 8px #111;\n\tborder-radius: 3px;\n\twidth: 100%;\n\tbackground-size: cover;\n\tbackground-position: center;\n}\n\n.play-tiles .level, .preview-tiles .level{\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 0;\n\tmargin: auto;\n}\n\n.play-tiles .mdl-typography--title, .preview-tiles .mdl-typography--title{\n\tfont-size: 14px;\n}\n\n.play-tiles:after, .preview-tiles:after{\n\tcontent: '';\n\tdisplay: table;\n\tclear: both;\n}\n\n.preview-tiles{\n\tmax-width: 300px;\n}\n\n.preview-tiles .pic{\n\theight: 15%;\n}\n\n.play-tiles{\n\tmax-width: 400px;\n\tmin-width: 320px;\n}\n\n.play-tiles .tile{\n\twidth: 50%;\n}\n\n.play-tiles .pic{\n\theight: 20%;\n}\n\n.play-tiles .large.tile{\n\tz-index: 2;\n}\n\n.play-tiles .large.tile:nth-child(1) {\n\t-webkit-transform: translate3d(50%, 50%, 0) scale(1.8);\n\t        transform: translate3d(50%, 50%, 0) scale(1.8);\n}\n\n.play-tiles .large.tile:nth-child(2) {\n\t-webkit-transform: translate3d(-50%, 50%, 0) scale(1.8);\n\t        transform: translate3d(-50%, 50%, 0) scale(1.8);\n}\n\n.play-tiles .large.tile:nth-child(3) {\n\t-webkit-transform: translate3d(50%, -50%, 0) scale(1.8);\n\t        transform: translate3d(50%, -50%, 0) scale(1.8);\n}\n\n.play-tiles .large.tile:nth-child(4) {\n\t-webkit-transform: translate3d(-50%, -50%, 0) scale(1.8);\n\t        transform: translate3d(-50%, -50%, 0) scale(1.8);\n}\n\n@media (min-width: 800px) {\n\t.preview-tiles .pic{\n\t\theight: 110px;\n\t}\n\t.play-tiles .pic{\n\t\theight: 150px;\n\t}\n}", ""]);

// exports


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./PreviewTiles.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./PreviewTiles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".screen-home .container-play, .screen-home {\n    text-align: center;\n    margin-top: -30px;\n}\n.screen-home .container-play .mdl-button, .screen-home .mdl-button{\n    font-size: 24px;\n    padding: 8px;\n    height: auto;\n    width: 200px;\n}\n.screen-home .container-share {\n    margin-top: 20px;\n}\n.screen-home .container-share .mdl-button{\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n    background: rgb(0,150,136);\n}", ""]);

// exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./Home.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./Home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Splash_Splash_jsx__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_word_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_user_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PreviewTiles_PreviewTiles_jsx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Home_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			ga('send', 'pageview', location.pathname);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, state) {
			if (!prevProps.userReducer.name && this.props.userReducer.name && this.props.wordReducer.words.length < 25) {
				this.props.dispatch(__WEBPACK_IMPORTED_MODULE_5__actions_word_actions__["g" /* fetchNewWords */](this.props.wordReducer.lastWord || 0));
			}
			if (!prevProps.wordReducer.wordsLoaded && this.props.wordReducer.wordsLoaded && this.props.wordReducer.giveNotificateionHint) {
				this.props.dispatch({
					type: __WEBPACK_IMPORTED_MODULE_5__actions_word_actions__["a" /* NOTIFICATION_HINT */]
				});
			}
		}
	}, {
		key: 'startPlay',
		value: function startPlay() {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_preact_router__["route"])('/play');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (!this.props.wordReducer.wordsLoaded) {
				return null;
			}
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'screen-home' },
				(this.props.wordReducer.words.length == 0 || !this.props.userReducer.name) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__Splash_Splash_jsx__["a" /* default */], {
					showHome: this.showHome,
					user: this.props.userReducer,
					setUser: function setUser(data) {
						if (data.authToken) {
							_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_user_actions__["b" /* loginUser */]({ authToken: data.authToken }));
						} else {
							_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_user_actions__["b" /* loginUser */]({ name: data.name }));
						}
					} }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__PreviewTiles_PreviewTiles_jsx__["a" /* default */], {
						images: this.props.wordReducer.words[0] && this.props.wordReducer.words[0].images,
						level: this.props.userReducer.level, mode: 'preview' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'container-play' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
						{ accent: true, raised: true, onCLick: this.startPlay.bind(this) },
						'Play'
					)
				),
				navigator.share && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'container-share' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
						{ fab: true, colored: true, raised: true, onCLick: function onCLick() {
								ga('send', 'event', 'Engagement', 'Share', 'Share Initiated');
								navigator.share({
									title: document.title,
									text: "Let play this awesome game- Guess",
									url: "https://playguess.herokuapp.com/"
								}).then(function () {
									ga('send', 'event', 'Engagement', 'Share', 'Share Done');
								}).catch(function (error) {
									ga('send', 'event', 'Engagement', 'Share', 'Share Errored');
								});
							} },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Icon"], { icon: 'share' })
					)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact_redux__["connect"])(function (state) {
	return {
		wordReducer: state.wordReducer,
		userReducer: state.userReducer
	};
})(Home);

/***/ })

});