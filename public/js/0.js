webpackJsonp([0],{

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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DownloadMore_css__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DownloadMore_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DownloadMore_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DownloadMore = function (_Component) {
	_inherits(DownloadMore, _Component);

	function DownloadMore() {
		_classCallCheck(this, DownloadMore);

		return _possibleConstructorReturn(this, (DownloadMore.__proto__ || Object.getPrototypeOf(DownloadMore)).apply(this, arguments));
	}

	_createClass(DownloadMore, [{
		key: 'downloadGames',
		value: function downloadGames() {
			var _this2 = this;

			if (navigator.onLine) {
				this.setState({
					loading: true
				}, function () {
					_this2.props.fetchWords();
				});
			} else {
				this.setState({
					dialogMessage: 'You dont have an active Internet connection!!!'
				}, function () {
					_this2.dialog.showModal();
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'screen-download' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'center face' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: '/images/surprised.svg', height: '120' })
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'text mdl-typography--title' },
						'Seems like you ran outta games! Here lets download a few more'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'center actions' },
					this.state.loading ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Progress"], { indeterminate: true }) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
						{ accent: true, raised: true, onClick: this.downloadGames.bind(this) },
						'Download'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"],
					{ ref: function ref(dialog) {
							_this3.dialog = dialog;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Title,
						null,
						'Woops'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Content,
						null,
						this.state.dialogMessage
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Dialog"].Actions,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
							{ onClick: function onClick() {
									_this3.dialog.close();
								} },
							'No!'
						)
					)
				)
			);
		}
	}]);

	return DownloadMore;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = DownloadMore;

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GuessedWord_css__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GuessedWord_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__GuessedWord_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GuessedWord = function (_Component) {
    _inherits(GuessedWord, _Component);

    function GuessedWord() {
        _classCallCheck(this, GuessedWord);

        return _possibleConstructorReturn(this, (GuessedWord.__proto__ || Object.getPrototypeOf(GuessedWord)).apply(this, arguments));
    }

    _createClass(GuessedWord, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var letters = this.props.guess;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: 'guessed-word' },
                letters && letters.map(function (data) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'div',
                        { className: 'blank mdl-typography--title', onClick: function onClick() {
                                _this2.props.removeFromGuess(data);
                            } },
                        data.letter
                    );
                })
            );
        }
    }]);

    return GuessedWord;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = GuessedWord;

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LetterPlatter_css__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LetterPlatter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__LetterPlatter_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var LetterPlatter = function (_Component) {
    _inherits(LetterPlatter, _Component);

    function LetterPlatter() {
        _classCallCheck(this, LetterPlatter);

        return _possibleConstructorReturn(this, (LetterPlatter.__proto__ || Object.getPrototypeOf(LetterPlatter)).apply(this, arguments));
    }

    _createClass(LetterPlatter, [{
        key: 'sendLetter',
        value: function sendLetter(index) {
            this.props.onLetterSelect({
                index: index,
                letter: this.props.letters[index]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: this.props.isGuessed ? 'platter guessed' : 'platter' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: 'letters' },
                    this.props.letters && this.props.letters.map(function (letter, index) {
                        var showLetter = true;
                        _this2.props.guess.forEach(function (data) {
                            if (data.index === index && letter === data.letter) {
                                showLetter = false;
                            }
                        });
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            'div',
                            { className: 'letter mdl-typography--title' },
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                                __WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
                                { accent: true, raised: true, disabled: !showLetter || !letter,
                                    onClick: function onClick() {
                                        _this2.sendLetter(index);
                                    } },
                                showLetter ? letter : ''
                            )
                        );
                    })
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: 'hints' },
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'div',
                        { className: 'letter mdl-typography--title' },
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            __WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
                            { colored: true, raised: true, icon: true,
                                onClick: this.props.giveHint, disabled: this.props.minorHintGiven },
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Icon"], { icon: 'favorite' })
                        )
                    ),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'div',
                        { className: 'letter bulbHint mdl-typography--title' },
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            __WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
                            {
                                colored: true, raised: true, icon: true,
                                onClick: this.props.removeWrongLetters, disabled: this.props.majorHintGiven },
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Icon"], { icon: 'wb_incandescent' })
                        )
                    )
                )
            );
        }
    }]);

    return LetterPlatter;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = LetterPlatter;

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_mdl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VictorySplash_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VictorySplash_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__VictorySplash_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var VictorySplash = function (_Component) {
    _inherits(VictorySplash, _Component);

    function VictorySplash() {
        _classCallCheck(this, VictorySplash);

        return _possibleConstructorReturn(this, (VictorySplash.__proto__ || Object.getPrototypeOf(VictorySplash)).apply(this, arguments));
    }

    _createClass(VictorySplash, [{
        key: 'render',
        value: function render() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: 'splash-victory' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: 'ribbonholder' },
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'div',
                        { className: 'ribbon' },
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            'div',
                            { className: 'stars' },
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Icon"], { icon: 'stars' })
                        ),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            'div',
                            { className: 'text mdl-typography--title' },
                            'YOU WON'
                        ),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            'div',
                            { className: 'stars' },
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Icon"], { icon: 'stars' })
                        )
                    )
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: 'continueholder' },
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        __WEBPACK_IMPORTED_MODULE_1_preact_mdl__["Button"],
                        { accent: true, raised: true, onClick: this.props.onContinue },
                        'Continue'
                    )
                )
            );
        }
    }]);

    return VictorySplash;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = VictorySplash;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".screen-download {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n}\n.screen-download .center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.screen-download .face {\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6;\n    width: 100%;\n    color: #fff;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.screen-download .text{\n    text-align: center;\n    padding: 16px;\n}\n.screen-download .actions {\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4;\n    width: 100%;\n}\n.screen-download .actions .mdl-button {\n    font-size: 18px;\n}", ""]);

// exports


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".guessed-word{\n    max-width: 400px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 16px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.guessed-word .blank{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 40px;\n    height: 40px;\n    border-bottom: 1px solid #fff;\n    margin-right: 8px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 24px;\n}", ""]);

// exports


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".platter{\n    max-width: 400px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-transition-duration: 1s;\n            transition-duration: 1s;\n    -webkit-transition-property: opacify;\n    transition-property: opacify;\n    will-change: opacify;\n}\n.platter .letters{\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6;\n}\n.platter .hints{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.platter .letter{\n    display: inline-block;\n    font-weight: 700;\n    padding: 8px;\n    width: 16.66%;\n}\n.platter .letter button{\n    border-radius: 3px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 40px;\n    min-width: 0px;\n    width: 100%;\n    font-size: 20px;\n    font-weight: 300;\n    padding: 0 8px;\n}\n.platter .bulbHint{\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg);\n}\n.platter .hints .letter{\n    width: 100%;\n}\n.platter .hints .letter button{\n    width: 100%;\n}\n.platter.guessed{\n    opacity: 0.2;\n}", ""]);

// exports


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".screen-play{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n}\n.screen-play .play-tiles{\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6;\n}\n.screen-play .wordsection{\n    -webkit-box-flex: 5;\n        -ms-flex: 5;\n            flex: 5;\n}", ""]);

// exports


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, ".splash-victory{\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n}\n\n.splash-victory .ribbonholder{\n    height: 60%;\n    padding-top: 25vh;\n    -webkit-animation-name: appearFromLeft;\n            animation-name: appearFromLeft;\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n\n.splash-victory .continueholder{\n    height: 40%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n\n}\n\n.splash-victory .continueholder .mdl-button{\n    margin-top: 25%;\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    -webkit-animation-name: scaleFromHorizon;\n            animation-name: scaleFromHorizon;\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n\n.splash-victory .ribbon{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-image: -webkit-linear-gradient(left, rgba(254,183,69,0) 0%, rgba(254,183,69,1) 20%, rgba(254,183,69,1) 80%, rgba(254,183,69,0) 100%);\n    background-image: linear-gradient(to right, rgba(254,183,69,0) 0%, rgba(254,183,69,1) 20%, rgba(254,183,69,1) 80%, rgba(254,183,69,0) 100%);\n    height: 100px;\n\n}\n\n.splash-victory .ribbon .text{\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-item-align: center;\n        align-self: center;\n    font-size: 24px;\n    color:#000;\n\n}\n\n.splash-victory .ribbon .stars{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-item-align: center;\n        align-self: center;\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    -webkit-animation-name: endlessRotation;\n            animation-name: endlessRotation;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n\n}\n\n.splash-victory .ribbon .material-icons{\n    font-size: 30px;\n\n}\n\n@-webkit-keyframes appearFromLeft{\n    from{\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%);\n        opacity: 0;\n    }\n    to{\n        -webkit-transform: translateX(0%);\n                transform: translateX(0%);\n        opacity: 1;\n    }\n}\n\n@keyframes appearFromLeft{\n    from{\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%);\n        opacity: 0;\n    }\n    to{\n        -webkit-transform: translateX(0%);\n                transform: translateX(0%);\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes scaleFromHorizon{\n    from{\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    to{\n        -webkit-transform: scale(2);\n                transform: scale(2);\n    }\n}\n\n@keyframes scaleFromHorizon{\n    from{\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    to{\n        -webkit-transform: scale(2);\n                transform: scale(2);\n    }\n}\n\n@-webkit-keyframes endlessRotation{\n    from{\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    to{\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes endlessRotation{\n    from{\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    to{\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}", ""]);

// exports


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./DownloadMore.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./DownloadMore.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./GuessedWord.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./GuessedWord.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./LetterPlatter.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./LetterPlatter.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./Play.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./Play.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(138)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./VictorySplash.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./VictorySplash.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 55:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_Header_jsx__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_game_actions__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PreviewTiles_PreviewTiles_jsx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__GuessedWord_GuessedWord_jsx__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LetterPlatter_LetterPlatter_jsx__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__VictorySplash_VictorySplash_jsx__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DownloadMore_DownloadMore_jsx__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_wordUtils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_firebaseUtils__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Play_css__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Play_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Play_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var Play = function (_Component) {
	_inherits(Play, _Component);

	function Play() {
		_classCallCheck(this, Play);

		var _this = _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this));

		_this.state = {
			won: false,
			wordsGuessed: 0,
			hint: {
				charge: 5,
				action: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["b" /* GIVE_HINT */]
			}
		};
		return _this;
	}

	_createClass(Play, [{
		key: 'addTimeCount',
		value: function addTimeCount() {
			this.props.dispatch({
				type: __WEBPACK_IMPORTED_MODULE_7__actions_game_actions__["a" /* LOG_TIME */]
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			ga('send', 'pageview', location.pathname);
			ga('send', 'event', 'Play', 'Word', 'Play_Screen_Shown');
			if (this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters) {
				this.props.dispatch({
					type: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["c" /* SET_SCRABBLED_LETTERS */],
					data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_wordUtils__["a" /* scrabble */])(this.props.wordReducer.words[0].word)
				});
			}
			setInterval(function () {
				if (!_this2.state.won) {
					if (window.requestIdleCallback) {
						requestIdleCallback(_this2.addTimeCount.bind(_this2));
					} else {
						_this2.addTimeCount();
					}
				}
			}, 1000);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_firebaseUtils__["a" /* requestFirebase */])(function (_ref) {
				var messaging = _ref.messaging;

				window.messaging = messaging;
				window.dispatchEvent && window.dispatchEvent(new Event("messaging available"));
			});
			if (window.dialogPolyfill) {
				dialogPolyfill.registerDialog(this.hintDialog.base);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			var _this3 = this;

			if (this.props.wordReducer.words[0] && !this.props.wordReducer.words[0].scrabbledLetters) {
				this.setState({
					won: false
				});
				this.props.dispatch({
					type: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["c" /* SET_SCRABBLED_LETTERS */],
					data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_wordUtils__["a" /* scrabble */])(this.props.wordReducer.words[0].word)
				});
			} else if (this.props.wordReducer.words[0] && this.props.wordReducer.words[0].scrabbledLetters) {
				var guessedWord = '';
				this.props.wordReducer.words[0].guessedLetters.forEach(function (data) {
					guessedWord += data.letter;
				});
				if (!this.state.won && this.props.wordReducer.words[0].word.toLowerCase() === guessedWord.toLowerCase()) {
					this.setState({
						wordsGuessed: this.state.wordsGuessed + 1,
						won: true
					}, function () {
						ga('send', 'event', 'Play', 'Word', 'Guessed_' + _this3.state.wordsGuessed);
					});
				}
			} else if (!this.props.wordReducer.lastWord) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_preact_router__["route"])('/');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			if (this.props.wordReducer.words[0]) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'screen-play' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_8__PreviewTiles_PreviewTiles_jsx__["a" /* default */], {
						images: this.props.wordReducer.words[0] && this.props.wordReducer.words[0].images, mode: 'play' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'wordsection' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_9__GuessedWord_GuessedWord_jsx__["a" /* default */], { guess: this.props.wordReducer.words[0].guessedLetters,
							removeFromGuess: function removeFromGuess(data) {
								_this4.props.dispatch({
									type: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["d" /* REMOVE_LETTER_TO_GUESSED_WORD */],
									data: data
								});
							} }),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_10__LetterPlatter_LetterPlatter_jsx__["a" /* default */], {
							isGuessed: this.state.won,
							letters: this.props.wordReducer.words[0].scrabbledLetters,
							guess: this.props.wordReducer.words[0].guessedLetters,
							minorHintGiven: this.props.wordReducer.words[0].minorHintGiven,
							majorHintGiven: this.props.wordReducer.words[0].majorHintGiven,
							giveHint: function giveHint() {
								if (_this4.props.userReducer.coins >= 5) {
									_this4.setState({
										hint: {
											charge: 5,
											action: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["b" /* GIVE_HINT */]
										}
									});
									_this4.hintDialog.showModal();
								}
							},
							removeWrongLetters: function removeWrongLetters() {
								if (_this4.props.userReducer.coins >= 20) {
									_this4.setState({
										hint: {
											charge: 20,
											action: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["e" /* REMOVE_WRONG_OPTIONS */]
										}
									});
									_this4.hintDialog.showModal();
								}
							},
							onLetterSelect: function onLetterSelect(data) {
								_this4.props.dispatch({
									type: __WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["f" /* ADD_LETTER_TO_GUESSED_WORD */],
									data: data
								});
							} }),
						this.state.won && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_11__VictorySplash_VictorySplash_jsx__["a" /* default */], { onContinue: function onContinue() {
								var word = _this4.props.wordReducer.words[0];
								__WEBPACK_IMPORTED_MODULE_7__actions_game_actions__["b" /* saveTime */](word._id, word.timeLapsed, word.images);
								_this4.props.dispatch({
									type: __WEBPACK_IMPORTED_MODULE_7__actions_game_actions__["c" /* WORD_GUESSED */]
								});
								if (_this4.state.wordsGuessed > 0 && window.deferredPrompt) {
									ga('send', 'event', 'Engagement', 'A2HS', 'Showing');
									_this4.a2hsDialog.showModal();
								}

								if (_this4.props.wordReducer.words.length < 25) {
									_this4.props.dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["g" /* fetchNewWords */](_this4.props.wordReducer.lastWord || 0));
								}
							} })
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"],
						{ ref: function ref(hintDialog) {
								_this4.hintDialog = hintDialog;
							} },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"].Title,
							null,
							'Hint'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"].Content,
							null,
							'You will be charged ',
							this.state.hint.charge,
							' coins for this hint.'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"].Actions,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
								{ colored: true, onClick: function onClick() {
										_this4.props.dispatch({
											type: _this4.state.hint.action
										});
										_this4.hintDialog.close();
									} },
								'Cool'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
								{ onClick: function onClick() {
										_this4.hintDialog.close();
									} },
								'No!'
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"],
						{ ref: function ref(a2hsDialog) {
								_this4.a2hsDialog = a2hsDialog;
							} },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"].Title,
							null,
							'Like Us?'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"].Content,
							null,
							'Add our icon on homescreen to comeback easier. NO APP DOWNLOAD PROMISE!'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Dialog"].Actions,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
								{ colored: true, onClick: function onClick() {
										_this4.a2hsDialog.close();
										window.deferredPrompt.prompt();
										window.deferredPrompt.userChoice.then(function (choiceResult) {
											if (choiceResult.outcome == 'dismissed') {
												ga('send', 'event', 'Engagement', 'A2HS', 'Dismissed');
											} else {
												ga('send', 'event', 'Engagement', 'A2HS', 'Accepted');
											}
											// We no longer need the prompt.  Clear it up.
											window.deferredPrompt = null;
										});
									} },
								'Yes!'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_mdl__["Button"],
								{ onClick: function onClick() {
										_this4.a2hsDialog.close();
										window.deferredPrompt = null;
										ga('send', 'event', 'Engagement', 'A2HS', 'Rejected');
									} },
								'Hate you'
							)
						)
					)
				);
			} else {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_12__DownloadMore_DownloadMore_jsx__["a" /* default */], { fetchWords: function fetchWords() {
						_this4.props.dispatch(__WEBPACK_IMPORTED_MODULE_6__actions_word_actions__["g" /* fetchNewWords */](_this4.props.wordReducer.lastWord || 0));
					} });
			}
		}
	}]);

	return Play;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact_redux__["connect"])(function (state) {
	return {
		wordReducer: state.wordReducer,
		userReducer: state.userReducer
	};
})(Play);

/***/ })

});