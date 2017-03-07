webpackJsonp([2],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var firebase = function () {
    /*! @license Firebase v3.6.9
        Build: 3.6.9-rc.1
        Terms: https://firebase.google.com/terms/ */
    var firebase = null;(function () {
        var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        },
            h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
            _l = function l() {
            _l = function l() {};h.Symbol || (h.Symbol = ba);
        },
            ca = 0,
            ba = function ba(a) {
            return "jscomp_symbol_" + (a || "") + ca++;
        },
            _n = function n() {
            _l();var a = h.Symbol.iterator;a || (a = h.Symbol.iterator = h.Symbol("iterator"));"function" != typeof Array.prototype[a] && aa(Array.prototype, a, { configurable: !0, writable: !0, value: function value() {
                    return m(this);
                } });_n = function n() {};
        },
            m = function m(a) {
            var b = 0;return da(function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            });
        },
            da = function da(a) {
            _n();a = { next: a };a[h.Symbol.iterator] = function () {
                return this;
            };return a;
        },
            q = this,
            r = function r() {},
            t = function t(a) {
            var b = typeof a === "undefined" ? "undefined" : _typeof(a);if ("object" == b) {
                if (a) {
                    if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
                } else return "null";
            } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
        },
            v = function v(a) {
            return "function" == t(a);
        },
            ea = function ea(a, b, c) {
            return a.call.apply(a.bind, arguments);
        },
            fa = function fa(a, b, c) {
            if (!a) throw Error();if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);return function () {
                    var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
                };
            }return function () {
                return a.apply(b, arguments);
            };
        },
            _w = function w(a, b, c) {
            _w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;return _w.apply(null, arguments);
        },
            x = function x(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);return function () {
                var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
            };
        },
            y = function y(a, b) {
            function c() {}c.prototype = b.prototype;a.ba = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.aa = function (a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
                    d[e - 2] = arguments[e];
                }return b.prototype[c].apply(a, d);
            };
        };var z;z = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : global;function __extends(a, b) {
            function c() {
                this.constructor = a;
            }for (var d in b) {
                b.hasOwnProperty(d) && (a[d] = b[d]);
            }a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
        }
        function __decorate(a, b, c, d) {
            var e = arguments.length,
                f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
                g;g = z.Reflect;if ("object" === (typeof g === "undefined" ? "undefined" : _typeof(g)) && "function" === typeof g.decorate) f = g.decorate(a, b, c, d);else for (var k = a.length - 1; 0 <= k; k--) {
                if (g = a[k]) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
            }return 3 < e && f && Object.defineProperty(b, c, f), f;
        }function __metadata(a, b) {
            var c = z.Reflect;if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) && "function" === typeof c.metadata) return c.metadata(a, b);
        }
        var __param = function __param(a, b) {
            return function (c, d) {
                b(c, d, a);
            };
        },
            __awaiter = function __awaiter(a, b, c, d) {
            return new (c || (c = Promise))(function (e, f) {
                function g(a) {
                    try {
                        p(d.next(a));
                    } catch (u) {
                        f(u);
                    }
                }function k(a) {
                    try {
                        p(d.throw(a));
                    } catch (u) {
                        f(u);
                    }
                }function p(a) {
                    a.done ? e(a.value) : new c(function (b) {
                        b(a.value);
                    }).then(g, k);
                }p((d = d.apply(a, b)).next());
            });
        };"undefined" !== typeof z.M && z.M || (z.__extends = __extends, z.__decorate = __decorate, z.__metadata = __metadata, z.__param = __param, z.__awaiter = __awaiter);var A = function A(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, A);else {
                var b = Error().stack;b && (this.stack = b);
            }a && (this.message = String(a));
        };y(A, Error);A.prototype.name = "CustomError";var ga = function ga(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
                d += c.shift() + e.shift();
            }return d + c.join("%s");
        };var B = function B(a, b) {
            b.unshift(a);A.call(this, ga.apply(null, b));b.shift();
        };y(B, A);B.prototype.name = "AssertionError";var ha = function ha(a, b, c, d) {
            var e = "Assertion failed";if (c) var e = e + (": " + c),
                f = d;else a && (e += ": " + a, f = b);throw new B("" + e, f || []);
        },
            C = function C(a, b, c) {
            a || ha("", null, b, Array.prototype.slice.call(arguments, 2));
        },
            D = function D(a, b, c) {
            v(a) || ha("Expected function but got %s: %s.", [t(a), a], b, Array.prototype.slice.call(arguments, 2));
        };var E = function E(a, b, c) {
            this.T = c;this.N = a;this.U = b;this.s = 0;this.o = null;
        };E.prototype.get = function () {
            var a;0 < this.s ? (this.s--, a = this.o, this.o = a.next, a.next = null) : a = this.N();return a;
        };E.prototype.put = function (a) {
            this.U(a);this.s < this.T && (this.s++, a.next = this.o, this.o = a);
        };var F;a: {
            var ia = q.navigator;if (ia) {
                var ja = ia.userAgent;if (ja) {
                    F = ja;break a;
                }
            }F = "";
        };var ka = function ka(a) {
            q.setTimeout(function () {
                throw a;
            }, 0);
        },
            G,
            la = function la() {
            var a = q.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == F.indexOf("Presto") && (a = function a() {
                var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
                    a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = _w(function (a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
                }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
                        b.postMessage(c, d);
                    } };
            });if ("undefined" !== typeof a && -1 == F.indexOf("Trident") && -1 == F.indexOf("MSIE")) {
                var b = new a(),
                    c = {},
                    d = c;b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;var a = c.G;c.G = null;a();
                    }
                };return function (a) {
                    d.next = { G: a };d = d.next;b.port2.postMessage(0);
                };
            }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
                var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
                    b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
                };document.documentElement.appendChild(b);
            } : function (a) {
                q.setTimeout(a, 0);
            };
        };var H = function H() {
            this.v = this.f = null;
        },
            ma = new E(function () {
            return new I();
        }, function (a) {
            a.reset();
        }, 100);H.prototype.add = function (a, b) {
            var c = ma.get();c.set(a, b);this.v ? this.v.next = c : (C(!this.f), this.f = c);this.v = c;
        };H.prototype.remove = function () {
            var a = null;this.f && (a = this.f, this.f = this.f.next, this.f || (this.v = null), a.next = null);return a;
        };var I = function I() {
            this.next = this.scope = this.B = null;
        };I.prototype.set = function (a, b) {
            this.B = a;this.scope = b;this.next = null;
        };
        I.prototype.reset = function () {
            this.next = this.scope = this.B = null;
        };var M = function M(a, b) {
            J || na();K || (J(), K = !0);oa.add(a, b);
        },
            J,
            na = function na() {
            if (-1 != String(q.Promise).indexOf("[native code]")) {
                var a = q.Promise.resolve(void 0);J = function J() {
                    a.then(pa);
                };
            } else J = function J() {
                var a = pa;!v(q.setImmediate) || q.Window && q.Window.prototype && -1 == F.indexOf("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (G || (G = la()), G(a)) : q.setImmediate(a);
            };
        },
            K = !1,
            oa = new H(),
            pa = function pa() {
            for (var a; a = oa.remove();) {
                try {
                    a.B.call(a.scope);
                } catch (b) {
                    ka(b);
                }ma.put(a);
            }K = !1;
        };var O = function O(a, b) {
            this.b = 0;this.L = void 0;this.j = this.g = this.u = null;this.m = this.A = !1;if (a != r) try {
                var c = this;a.call(b, function (a) {
                    N(c, 2, a);
                }, function (a) {
                    try {
                        if (a instanceof Error) throw a;throw Error("Promise rejected.");
                    } catch (e) {}N(c, 3, a);
                });
            } catch (d) {
                N(this, 3, d);
            }
        },
            qa = function qa() {
            this.next = this.context = this.h = this.c = this.child = null;this.w = !1;
        };qa.prototype.reset = function () {
            this.context = this.h = this.c = this.child = null;this.w = !1;
        };
        var ra = new E(function () {
            return new qa();
        }, function (a) {
            a.reset();
        }, 100),
            sa = function sa(a, b, c) {
            var d = ra.get();d.c = a;d.h = b;d.context = c;return d;
        },
            ua = function ua(a, b, c) {
            ta(a, b, c, null) || M(x(b, a));
        };O.prototype.then = function (a, b, c) {
            null != a && D(a, "opt_onFulfilled should be a function.");null != b && D(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this, v(a) ? a : null, v(b) ? b : null, c);
        };O.prototype.then = O.prototype.then;O.prototype.$goog_Thenable = !0;
        O.prototype.X = function (a, b) {
            return va(this, null, a, b);
        };var xa = function xa(a, b) {
            a.g || 2 != a.b && 3 != a.b || wa(a);C(null != b.c);a.j ? a.j.next = b : a.g = b;a.j = b;
        },
            va = function va(a, b, c, d) {
            var e = sa(null, null, null);e.child = new O(function (a, g) {
                e.c = b ? function (c) {
                    try {
                        var e = b.call(d, c);a(e);
                    } catch (L) {
                        g(L);
                    }
                } : a;e.h = c ? function (b) {
                    try {
                        var e = c.call(d, b);a(e);
                    } catch (L) {
                        g(L);
                    }
                } : g;
            });e.child.u = a;xa(a, e);return e.child;
        };O.prototype.Y = function (a) {
            C(1 == this.b);this.b = 0;N(this, 2, a);
        };O.prototype.Z = function (a) {
            C(1 == this.b);this.b = 0;N(this, 3, a);
        };
        var N = function N(a, b, c) {
            0 == a.b && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.b = 1, ta(c, a.Y, a.Z, a) || (a.L = c, a.b = b, a.u = null, wa(a), 3 != b || ya(a, c)));
        },
            ta = function ta(a, b, c, d) {
            if (a instanceof O) return null != b && D(b, "opt_onFulfilled should be a function."), null != c && D(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), xa(a, sa(b || r, c || null, d)), !0;var e;if (a) try {
                e = !!a.$goog_Thenable;
            } catch (g) {
                e = !1;
            } else e = !1;if (e) return a.then(b, c, d), !0;e = typeof a === "undefined" ? "undefined" : _typeof(a);if ("object" == e && null != a || "function" == e) try {
                var f = a.then;if (v(f)) return za(a, f, b, c, d), !0;
            } catch (g) {
                return c.call(d, g), !0;
            }return !1;
        },
            za = function za(a, b, c, d, e) {
            var f = !1,
                g = function g(a) {
                f || (f = !0, c.call(e, a));
            },
                k = function k(a) {
                f || (f = !0, d.call(e, a));
            };try {
                b.call(a, g, k);
            } catch (p) {
                k(p);
            }
        },
            wa = function wa(a) {
            a.A || (a.A = !0, M(a.P, a));
        },
            Aa = function Aa(a) {
            var b = null;a.g && (b = a.g, a.g = b.next, b.next = null);a.g || (a.j = null);null != b && C(null != b.c);return b;
        };
        O.prototype.P = function () {
            for (var a; a = Aa(this);) {
                var b = this.b,
                    c = this.L;if (3 == b && a.h && !a.w) {
                    var d;for (d = this; d && d.m; d = d.u) {
                        d.m = !1;
                    }
                }if (a.child) a.child.u = null, Ba(a, b, c);else try {
                    a.w ? a.c.call(a.context) : Ba(a, b, c);
                } catch (e) {
                    Ca.call(null, e);
                }ra.put(a);
            }this.A = !1;
        };var Ba = function Ba(a, b, c) {
            2 == b ? a.c.call(a.context, c) : a.h && a.h.call(a.context, c);
        },
            ya = function ya(a, b) {
            a.m = !0;M(function () {
                a.m && Ca.call(null, b);
            });
        },
            Ca = ka;function P(a, b) {
            if (!(b instanceof Object)) return b;switch (b.constructor) {case Date:
                    return new Date(b.getTime());case Object:
                    void 0 === a && (a = {});break;case Array:
                    a = [];break;default:
                    return b;}for (var c in b) {
                b.hasOwnProperty(c) && (a[c] = P(a[c], b[c]));
            }return a;
        };O.all = function (a) {
            return new O(function (b, c) {
                var d = a.length,
                    e = [];if (d) for (var f = function f(a, c) {
                    d--;e[a] = c;0 == d && b(e);
                }, g = function g(a) {
                    c(a);
                }, k = 0, p; k < a.length; k++) {
                    p = a[k], ua(p, x(f, k), g);
                } else b(e);
            });
        };O.resolve = function (a) {
            if (a instanceof O) return a;var b = new O(r);N(b, 2, a);return b;
        };O.reject = function (a) {
            return new O(function (b, c) {
                c(a);
            });
        };O.prototype["catch"] = O.prototype.X;var Q = O;"undefined" !== typeof Promise && (Q = Promise);var Da = Q;function Ea(a, b) {
            a = new R(a, b);return a.subscribe.bind(a);
        }var R = function R(a, b) {
            var c = this;this.a = [];this.K = 0;this.task = Da.resolve();this.l = !1;this.D = b;this.task.then(function () {
                a(c);
            }).catch(function (a) {
                c.error(a);
            });
        };R.prototype.next = function (a) {
            S(this, function (b) {
                b.next(a);
            });
        };R.prototype.error = function (a) {
            S(this, function (b) {
                b.error(a);
            });this.close(a);
        };R.prototype.complete = function () {
            S(this, function (a) {
                a.complete();
            });this.close();
        };
        R.prototype.subscribe = function (a, b, c) {
            var d = this,
                e;if (void 0 === a && void 0 === b && void 0 === c) throw Error("Missing Observer.");e = Fa(a) ? a : { next: a, error: b, complete: c };void 0 === e.next && (e.next = T);void 0 === e.error && (e.error = T);void 0 === e.complete && (e.complete = T);a = this.$.bind(this, this.a.length);this.l && this.task.then(function () {
                try {
                    d.H ? e.error(d.H) : e.complete();
                } catch (f) {}
            });this.a.push(e);return a;
        };
        R.prototype.$ = function (a) {
            void 0 !== this.a && void 0 !== this.a[a] && (delete this.a[a], --this.K, 0 === this.K && void 0 !== this.D && this.D(this));
        };var S = function S(a, b) {
            if (!a.l) for (var c = 0; c < a.a.length; c++) {
                Ga(a, c, b);
            }
        },
            Ga = function Ga(a, b, c) {
            a.task.then(function () {
                if (void 0 !== a.a && void 0 !== a.a[b]) try {
                    c(a.a[b]);
                } catch (d) {
                    "undefined" !== typeof console && console.error && console.error(d);
                }
            });
        };R.prototype.close = function (a) {
            var b = this;this.l || (this.l = !0, void 0 !== a && (this.H = a), this.task.then(function () {
                b.a = void 0;b.D = void 0;
            }));
        };
        function Fa(a) {
            if ("object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) || null === a) return !1;var b;b = ["next", "error", "complete"];_n();var c = b[Symbol.iterator];b = c ? c.call(b) : m(b);for (c = b.next(); !c.done; c = b.next()) {
                if (c = c.value, c in a && "function" === typeof a[c]) return !0;
            }return !1;
        }function T() {};var Ha = Error.captureStackTrace,
            V = function V(a, b) {
            this.code = a;this.message = b;if (Ha) Ha(this, U.prototype.create);else {
                var c = Error.apply(this, arguments);this.name = "FirebaseError";Object.defineProperty(this, "stack", { get: function get() {
                        return c.stack;
                    } });
            }
        };V.prototype = Object.create(Error.prototype);V.prototype.constructor = V;V.prototype.name = "FirebaseError";var U = function U(a, b, c) {
            this.V = a;this.W = b;this.O = c;this.pattern = /\{\$([^}]+)}/g;
        };
        U.prototype.create = function (a, b) {
            void 0 === b && (b = {});var c = this.O[a];a = this.V + "/" + a;var c = void 0 === c ? "Error" : c.replace(this.pattern, function (a, c) {
                a = b[c];return void 0 !== a ? a.toString() : "<" + c + "?>";
            }),
                c = this.W + ": " + c + " (" + a + ").",
                c = new V(a, c),
                d;for (d in b) {
                b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
            }return c;
        };var W = Q,
            X = function X(a, b, c) {
            var d = this;this.I = c;this.J = !1;this.i = {};this.C = b;this.F = P(void 0, a);a = "serviceAccount" in this.F;("credential" in this.F || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function (a) {
                var b = c.INTERNAL.useAsService(d, a);null !== b && (b = d.S.bind(d, b), d[a] = b);
            });
        };X.prototype.delete = function () {
            var a = this;return new W(function (b) {
                Y(a);b();
            }).then(function () {
                a.I.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function (b) {
                    return a.i[b].INTERNAL.delete();
                }));
            }).then(function () {
                a.J = !0;a.i = {};
            });
        };X.prototype.S = function (a) {
            Y(this);void 0 === this.i[a] && (this.i[a] = this.I.INTERNAL.factories[a](this, this.R.bind(this)));return this.i[a];
        };X.prototype.R = function (a) {
            P(this, a);
        };
        var Y = function Y(a) {
            a.J && Z("app-deleted", { name: a.C });
        };h.Object.defineProperties(X.prototype, { name: { configurable: !0, enumerable: !0, get: function get() {
                    Y(this);return this.C;
                } }, options: { configurable: !0, enumerable: !0, get: function get() {
                    Y(this);return this.F;
                } } });X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");
        function Ia() {
            function a(a) {
                a = a || "[DEFAULT]";var b = d[a];void 0 === b && Z("no-app", { name: a });return b;
            }function b(a, b) {
                Object.keys(e).forEach(function (d) {
                    d = c(a, d);if (null !== d && f[d]) f[d](b, a);
                });
            }function c(a, b) {
                if ("serverAuth" === b) return null;var c = b;a = a.options;"auth" === b && (a.serviceAccount || a.credential) && (c = "serverAuth", "serverAuth" in e || Z("sa-not-supported"));return c;
            }var d = {},
                e = {},
                f = {},
                g = { __esModule: !0, initializeApp: function initializeApp(a, c) {
                    void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name", { name: c + "" });void 0 !== d[c] && Z("duplicate-app", { name: c });a = new X(a, c, g);d[c] = a;b(a, "create");void 0 != a.INTERNAL && void 0 != a.INTERNAL.getToken || P(a, { INTERNAL: { getToken: function getToken() {
                                return W.resolve(null);
                            }, addAuthTokenListener: function addAuthTokenListener() {}, removeAuthTokenListener: function removeAuthTokenListener() {} } });return a;
                }, app: a, apps: null, Promise: W, SDK_VERSION: "0.0.0", INTERNAL: { registerService: function registerService(b, c, d, u) {
                        e[b] && Z("duplicate-service", { name: b });e[b] = c;u && (f[b] = u);c = function c(_c) {
                            void 0 === _c && (_c = a());return _c[b]();
                        };void 0 !== d && P(c, d);return g[b] = c;
                    }, createFirebaseNamespace: Ia, extendNamespace: function extendNamespace(a) {
                        P(g, a);
                    }, createSubscribe: Ea, ErrorFactory: U, removeApp: function removeApp(a) {
                        b(d[a], "delete");delete d[a];
                    }, factories: e, useAsService: c, Promise: O, deepExtend: P } };g["default"] = g;Object.defineProperty(g, "apps", { get: function get() {
                    return Object.keys(d).map(function (a) {
                        return d[a];
                    });
                } });a.App = X;return g;
        }function Z(a, b) {
            throw Ja.create(a, b);
        }
        var Ja = new U("app", "Firebase", { "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()", "bad-app-name": "Illegal App name: '{$name}", "duplicate-app": "Firebase App named '{$name}' already exists", "app-deleted": "Firebase App named '{$name}' already deleted", "duplicate-service": "Firebase service named '{$name}' already registered", "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain" });"undefined" !== typeof firebase && (firebase = Ia());
    }).call(this);
    firebase.SDK_VERSION = "3.6.9";
    return firebase;
}.call((typeof global === "undefined" ? "undefined" : _typeof(global)) !== undefined ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) !== undefined ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined ? window : {});
module.exports = firebase;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var firebase = __webpack_require__(48);
(function () {
  /*! @license Firebase v3.6.9
      Build: 3.6.9-rc.1
      Terms: https://firebase.google.com/terms/ */
  (function () {
    var h,
        aa = aa || {},
        l = this,
        ba = function ba() {},
        m = function m(a) {
      var b = typeof a === "undefined" ? "undefined" : _typeof(a);if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    },
        ca = function ca(a) {
      return null === a;
    },
        da = function da(a) {
      return "array" == m(a);
    },
        ea = function ea(a) {
      var b = m(a);return "array" == b || "object" == b && "number" == typeof a.length;
    },
        p = function p(a) {
      return "string" == typeof a;
    },
        fa = function fa(a) {
      return "number" == typeof a;
    },
        q = function q(a) {
      return "function" == m(a);
    },
        ga = function ga(a) {
      var b = typeof a === "undefined" ? "undefined" : _typeof(a);return "object" == b && null != a || "function" == b;
    },
        ha = function ha(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
        ia = function ia(a, b, c) {
      if (!a) throw Error();if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);return function () {
          var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
        };
      }return function () {
        return a.apply(b, arguments);
      };
    },
        _r = function r(a, b, c) {
      _r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;return _r.apply(null, arguments);
    },
        ja = function ja(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);return function () {
        var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
      };
    },
        ka = Date.now || function () {
      return +new Date();
    },
        t = function t(a, b) {
      function c() {}c.prototype = b.prototype;a.jd = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.Cf = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
          d[e - 2] = arguments[e];
        }return b.prototype[c].apply(a, d);
      };
    };var u = function u(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, u);else {
        var b = Error().stack;b && (this.stack = b);
      }a && (this.message = String(a));
    };t(u, Error);u.prototype.name = "CustomError";var la = function la(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
        d += c.shift() + e.shift();
      }return d + c.join("%s");
    },
        ma = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        na = /&/g,
        oa = /</g,
        pa = />/g,
        qa = /"/g,
        ra = /'/g,
        sa = /\x00/g,
        ta = /[\x00&<>"']/,
        v = function v(a, b) {
      return -1 != a.indexOf(b);
    },
        ua = function ua(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var va = function va(a, b) {
      b.unshift(a);u.call(this, la.apply(null, b));b.shift();
    };t(va, u);va.prototype.name = "AssertionError";
    var wa = function wa(a, b, c, d) {
      var e = "Assertion failed";if (c) var e = e + (": " + c),
          f = d;else a && (e += ": " + a, f = b);throw new va("" + e, f || []);
    },
        w = function w(a, b, c) {
      a || wa("", null, b, Array.prototype.slice.call(arguments, 2));
    },
        xa = function xa(a, b) {
      throw new va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
        ya = function ya(a, b, c) {
      fa(a) || wa("Expected number but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));return a;
    },
        za = function za(a, b, c) {
      p(a) || wa("Expected string but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
        Aa = function Aa(a, b, c) {
      q(a) || wa("Expected function but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
    };var Ba = Array.prototype.indexOf ? function (a, b, c) {
      w(null != a.length);return Array.prototype.indexOf.call(a, b, c);
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }return -1;
    },
        x = Array.prototype.forEach ? function (a, b, c) {
      w(null != a.length);Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    },
        Ca = function Ca(a, b) {
      for (var c = p(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    },
        Da = Array.prototype.map ? function (a, b, c) {
      w(null != a.length);return Array.prototype.map.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++) {
        g in f && (e[g] = b.call(c, f[g], g, a));
      }return e;
    },
        Ea = Array.prototype.some ? function (a, b, c) {
      w(null != a.length);return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return !0;
      }return !1;
    },
        Ga = function Ga(a) {
      var b;a: {
        b = Fa;for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;break a;
          }
        }b = -1;
      }return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
    },
        Ha = function Ha(a, b) {
      return 0 <= Ba(a, b);
    },
        Ja = function Ja(a, b) {
      b = Ba(a, b);var c;(c = 0 <= b) && Ia(a, b);return c;
    },
        Ia = function Ia(a, b) {
      w(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
        Ka = function Ka(a, b) {
      var c = 0;Ca(a, function (d, e) {
        b.call(void 0, d, e, a) && Ia(a, e) && c++;
      });
    },
        La = function La(a) {
      return Array.prototype.concat.apply(Array.prototype, arguments);
    },
        Ma = function Ma(a) {
      var b = a.length;if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }return c;
      }return [];
    };var Na = function Na(a, b) {
      for (var c in a) {
        b.call(void 0, a[c], c, a);
      }
    },
        Oa = function Oa(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = a[d];
      }return b;
    },
        Pa = function Pa(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = d;
      }return b;
    },
        Qa = function Qa(a) {
      for (var b in a) {
        return !1;
      }return !0;
    },
        Ra = function Ra(a, b) {
      for (var c in a) {
        if (!(c in b) || a[c] !== b[c]) return !1;
      }for (c in b) {
        if (!(c in a)) return !1;
      }return !0;
    },
        Sa = function Sa(a) {
      var b = {},
          c;for (c in a) {
        b[c] = a[c];
      }return b;
    },
        Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ua = function Ua(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];for (c in d) {
          a[c] = d[c];
        }for (var f = 0; f < Ta.length; f++) {
          c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    };var Va;a: {
      var Xa = l.navigator;if (Xa) {
        var Ya = Xa.userAgent;if (Ya) {
          Va = Ya;break a;
        }
      }Va = "";
    }var z = function z(a) {
      return v(Va, a);
    };var Za = function Za(a) {
      Za[" "](a);return a;
    };Za[" "] = ba;var ab = function ab(a, b) {
      var c = $a;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var bb = z("Opera"),
        A = z("Trident") || z("MSIE"),
        cb = z("Edge"),
        db = cb || A,
        eb = z("Gecko") && !(v(Va.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        fb = v(Va.toLowerCase(), "webkit") && !z("Edge"),
        gb = function gb() {
      var a = l.document;return a ? a.documentMode : void 0;
    },
        hb;
    a: {
      var ib = "",
          jb = function () {
        var a = Va;if (eb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
        );if (cb) return (/Edge\/([\d\.]+)/.exec(a)
        );if (A) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (fb) return (/WebKit\/(\S+)/.exec(a)
        );if (bb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();jb && (ib = jb ? jb[1] : "");if (A) {
        var kb = gb();if (null != kb && kb > parseFloat(ib)) {
          hb = String(kb);break a;
        }
      }hb = ib;
    }
    var lb = hb,
        $a = {},
        B = function B(a) {
      return ab(a, function () {
        for (var b = 0, c = ma(String(lb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              k = d[f] || "";do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];if (0 == g[0].length && 0 == k[0].length) break;b = ua(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || ua(0 == g[2].length, 0 == k[2].length) || ua(g[2], k[2]);g = g[3];k = k[3];
          } while (0 == b);
        }return 0 <= b;
      });
    },
        mb;var nb = l.document;
    mb = nb && A ? gb() || ("CSS1Compat" == nb.compatMode ? parseInt(lb, 10) : 5) : void 0;var ob = function ob(a) {
      return Da(a, function (a) {
        a = a.toString(16);return 1 < a.length ? a : "0" + a;
      }).join("");
    };var pb = null,
        qb = null,
        sb = function sb(a) {
      var b = "";rb(a, function (a) {
        b += String.fromCharCode(a);
      });return b;
    },
        rb = function rb(a, b) {
      function c(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
              e = qb[c];if (null != e) return e;if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }return b;
      }tb();for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            k = c(64);if (64 === k && -1 === e) break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
      }
    },
        tb = function tb() {
      if (!pb) {
        pb = {};qb = {};for (var a = 0; 65 > a; a++) {
          pb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), qb[pb[a]] = a, 62 <= a && (qb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
        }
      }
    };var ub = function ub() {
      this.ya = -1;
    };var xb = function xb(a, b) {
      this.ya = 64;this.Qb = l.Uint8Array ? new Uint8Array(this.ya) : Array(this.ya);this.vc = this.Ya = 0;this.h = [];this.Ye = a;this.Cd = b;this.yf = l.Int32Array ? new Int32Array(64) : Array(64);void 0 !== vb || (vb = l.Int32Array ? new Int32Array(wb) : wb);this.reset();
    },
        vb;t(xb, ub);for (var yb = [], zb = 0; 63 > zb; zb++) {
      yb[zb] = 0;
    }var Ab = La(128, yb);xb.prototype.reset = function () {
      this.vc = this.Ya = 0;this.h = l.Int32Array ? new Int32Array(this.Cd) : Ma(this.Cd);
    };
    var Bb = function Bb(a) {
      var b = a.Qb;w(b.length == a.ya);for (var c = a.yf, d = 0, e = 0; e < b.length;) {
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      }for (b = 16; 64 > b; b++) {
        var e = c[b - 15] | 0,
            d = c[b - 2] | 0,
            f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
            g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;c[b] = f + g | 0;
      }for (var d = a.h[0] | 0, e = a.h[1] | 0, k = a.h[2] | 0, n = a.h[3] | 0, y = a.h[4] | 0, Wa = a.h[5] | 0, Eb = a.h[6] | 0, f = a.h[7] | 0, b = 0; 64 > b; b++) {
        var $g = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0,
            g = y & Wa ^ ~y & Eb,
            f = f + ((y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) | 0,
            g = g + (vb[b] | 0) | 0,
            g = f + (g + (c[b] | 0) | 0) | 0,
            f = Eb,
            Eb = Wa,
            Wa = y,
            y = n + g | 0,
            n = k,
            k = e,
            e = d,
            d = g + $g | 0;
      }a.h[0] = a.h[0] + d | 0;a.h[1] = a.h[1] + e | 0;a.h[2] = a.h[2] + k | 0;a.h[3] = a.h[3] + n | 0;a.h[4] = a.h[4] + y | 0;a.h[5] = a.h[5] + Wa | 0;a.h[6] = a.h[6] + Eb | 0;a.h[7] = a.h[7] + f | 0;
    };
    xb.prototype.update = function (a, b) {
      void 0 === b && (b = a.length);var c = 0,
          d = this.Ya;if (p(a)) for (; c < b;) {
        this.Qb[d++] = a.charCodeAt(c++), d == this.ya && (Bb(this), d = 0);
      } else if (ea(a)) for (; c < b;) {
        var e = a[c++];if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");this.Qb[d++] = e;d == this.ya && (Bb(this), d = 0);
      } else throw Error("message must be string or array");this.Ya = d;this.vc += b;
    };
    xb.prototype.digest = function () {
      var a = [],
          b = 8 * this.vc;56 > this.Ya ? this.update(Ab, 56 - this.Ya) : this.update(Ab, this.ya - (this.Ya - 56));for (var c = 63; 56 <= c; c--) {
        this.Qb[c] = b & 255, b /= 256;
      }Bb(this);for (c = b = 0; c < this.Ye; c++) {
        for (var d = 24; 0 <= d; d -= 8) {
          a[b++] = this.h[c] >> d & 255;
        }
      }return a;
    };
    var wb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];var Db = function Db() {
      xb.call(this, 8, Cb);
    };t(Db, xb);var Cb = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];var Fb = !A || 9 <= Number(mb),
        Gb = A && !B("9");!fb || B("528");eb && B("1.9b") || A && B("8") || bb && B("9.5") || fb && B("528");eb && !B("8") || A && B("9");var Hb = function Hb() {
      this.Aa = this.Aa;this.gc = this.gc;
    };Hb.prototype.Aa = !1;Hb.prototype.isDisposed = function () {
      return this.Aa;
    };Hb.prototype.Ta = function () {
      if (this.gc) for (; this.gc.length;) {
        this.gc.shift()();
      }
    };var Ib = function Ib(a, b) {
      this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.bb = !1;this.Nd = !0;
    };Ib.prototype.preventDefault = function () {
      this.defaultPrevented = !0;this.Nd = !1;
    };var Jb = function Jb(a, b) {
      Ib.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.key = "";this.charCode = this.keyCode = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.Ua = this.state = null;a && this.init(a, b);
    };t(Jb, Ib);
    Jb.prototype.init = function (a, b) {
      var c = this.type = a.type,
          d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;if (b = a.relatedTarget) {
        if (eb) {
          var e;a: {
            try {
              Za(b.nodeName);e = !0;break a;
            } catch (f) {}e = !1;
          }e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);this.relatedTarget = b;null === d ? (this.offsetX = fb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = fb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.key = a.key || "";this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.state = a.state;this.Ua = a;a.defaultPrevented && this.preventDefault();
    };Jb.prototype.preventDefault = function () {
      Jb.jd.preventDefault.call(this);var a = this.Ua;if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Gb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };Jb.prototype.Ae = function () {
      return this.Ua;
    };var Kb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Lb = 0;var Mb = function Mb(a, b, c, d, e) {
      this.listener = a;this.lc = null;this.src = b;this.type = c;this.capture = !!d;this.Yb = e;this.key = ++Lb;this.hb = this.Pb = !1;
    },
        Nb = function Nb(a) {
      a.hb = !0;a.listener = null;a.lc = null;a.src = null;a.Yb = null;
    };var Ob = function Ob(a) {
      this.src = a;this.C = {};this.Lb = 0;
    };Ob.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();a = this.C[f];a || (a = this.C[f] = [], this.Lb++);var g = Pb(a, b, d, e);-1 < g ? (b = a[g], c || (b.Pb = !1)) : (b = new Mb(b, this.src, f, !!d, e), b.Pb = c, a.push(b));return b;
    };Ob.prototype.remove = function (a, b, c, d) {
      a = a.toString();if (!(a in this.C)) return !1;var e = this.C[a];b = Pb(e, b, c, d);return -1 < b ? (Nb(e[b]), Ia(e, b), 0 == e.length && (delete this.C[a], this.Lb--), !0) : !1;
    };
    var Qb = function Qb(a, b) {
      var c = b.type;c in a.C && Ja(a.C[c], b) && (Nb(b), 0 == a.C[c].length && (delete a.C[c], a.Lb--));
    };Ob.prototype.Kc = function (a, b, c, d) {
      a = this.C[a.toString()];var e = -1;a && (e = Pb(a, b, c, d));return -1 < e ? a[e] : null;
    };var Pb = function Pb(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];if (!f.hb && f.listener == b && f.capture == !!c && f.Yb == d) return e;
      }return -1;
    };var Rb = "closure_lm_" + (1E6 * Math.random() | 0),
        Sb = {},
        Tb = 0,
        Ub = function Ub(a, b, c, d, e) {
      if (da(b)) for (var f = 0; f < b.length; f++) {
        Ub(a, b[f], c, d, e);
      } else c = Vb(c), a && a[Kb] ? a.listen(b, c, d, e) : Wb(a, b, c, !1, d, e);
    },
        Wb = function Wb(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");var g = !!e,
          k = Xb(a);k || (a[Rb] = k = new Ob(a));c = k.add(b, c, d, e, f);if (!c.lc) {
        d = Yb();c.lc = d;d.src = a;d.listener = c;if (a.addEventListener) a.addEventListener(b.toString(), d, g);else if (a.attachEvent) a.attachEvent(Zb(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");
        Tb++;
      }
    },
        Yb = function Yb() {
      var a = $b,
          b = Fb ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);if (!c) return c;
      };return b;
    },
        ac = function ac(a, b, c, d, e) {
      if (da(b)) for (var f = 0; f < b.length; f++) {
        ac(a, b[f], c, d, e);
      } else c = Vb(c), a && a[Kb] ? bc(a, b, c, d, e) : Wb(a, b, c, !0, d, e);
    },
        cc = function cc(a, b, c, d, e) {
      if (da(b)) for (var f = 0; f < b.length; f++) {
        cc(a, b[f], c, d, e);
      } else c = Vb(c), a && a[Kb] ? a.aa.remove(String(b), c, d, e) : a && (a = Xb(a)) && (b = a.Kc(b, c, !!d, e)) && dc(b);
    },
        dc = function dc(a) {
      if (!fa(a) && a && !a.hb) {
        var b = a.src;if (b && b[Kb]) Qb(b.aa, a);else {
          var c = a.type,
              d = a.lc;b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Zb(c), d);Tb--;(c = Xb(b)) ? (Qb(c, a), 0 == c.Lb && (c.src = null, b[Rb] = null)) : Nb(a);
        }
      }
    },
        Zb = function Zb(a) {
      return a in Sb ? Sb[a] : Sb[a] = "on" + a;
    },
        fc = function fc(a, b, c, d) {
      var e = !0;if (a = Xb(a)) if (b = a.C[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];f && f.capture == c && !f.hb && (f = ec(f, d), e = e && !1 !== f);
      }return e;
    },
        ec = function ec(a, b) {
      var c = a.listener,
          d = a.Yb || a.src;a.Pb && dc(a);return c.call(d, b);
    },
        $b = function $b(a, b) {
      if (a.hb) return !0;if (!Fb) {
        if (!b) a: {
          b = ["window", "event"];for (var c = l, d; d = b.shift();) {
            if (null != c[d]) c = c[d];else {
              b = null;break a;
            }
          }b = c;
        }d = b;b = new Jb(d, this);c = !0;if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;if (0 == d.keyCode) try {
              d.keyCode = -1;break a;
            } catch (g) {
              e = !0;
            }if (e || void 0 == d.returnValue) d.returnValue = !0;
          }d = [];for (e = b.currentTarget; e; e = e.parentNode) {
            d.push(e);
          }a = a.type;for (e = d.length - 1; !b.bb && 0 <= e; e--) {
            b.currentTarget = d[e];var f = fc(d[e], a, !0, b),
                c = c && f;
          }for (e = 0; !b.bb && e < d.length; e++) {
            b.currentTarget = d[e], f = fc(d[e], a, !1, b), c = c && f;
          }
        }return c;
      }return ec(a, new Jb(b, this));
    },
        Xb = function Xb(a) {
      a = a[Rb];return a instanceof Ob ? a : null;
    },
        gc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Vb = function Vb(a) {
      w(a, "Listener can not be null.");if (q(a)) return a;w(a.handleEvent, "An object listener must have handleEvent method.");a[gc] || (a[gc] = function (b) {
        return a.handleEvent(b);
      });return a[gc];
    };var hc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var jc = function jc() {
      this.sc = "";this.ge = ic;
    };jc.prototype.bc = !0;jc.prototype.Wb = function () {
      return this.sc;
    };jc.prototype.toString = function () {
      return "Const{" + this.sc + "}";
    };var kc = function kc(a) {
      if (a instanceof jc && a.constructor === jc && a.ge === ic) return a.sc;xa("expected object of type Const, got '" + a + "'");return "type_error:Const";
    },
        ic = {},
        lc = function lc(a) {
      var b = new jc();b.sc = a;return b;
    };lc("");var nc = function nc() {
      this.jc = "";this.he = mc;
    };nc.prototype.bc = !0;nc.prototype.Wb = function () {
      return this.jc;
    };nc.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.jc + "}";
    };var mc = {};var pc = function pc() {
      this.ma = "";this.fe = oc;
    };pc.prototype.bc = !0;pc.prototype.Wb = function () {
      return this.ma;
    };pc.prototype.toString = function () {
      return "SafeUrl{" + this.ma + "}";
    };
    var qc = function qc(a) {
      if (a instanceof pc && a.constructor === pc && a.fe === oc) return a.ma;xa("expected object of type SafeUrl, got '" + a + "' of type " + m(a));return "type_error:SafeUrl";
    },
        rc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        tc = function tc(a) {
      if (a instanceof pc) return a;a = a.bc ? a.Wb() : String(a);rc.test(a) || (a = "about:invalid#zClosurez");return sc(a);
    },
        oc = {},
        sc = function sc(a) {
      var b = new pc();b.ma = a;return b;
    };sc("about:blank");var wc = function wc(a) {
      var b = [];uc(new vc(), a, b);return b.join("");
    },
        vc = function vc() {
      this.nc = void 0;
    },
        uc = function uc(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
          if (da(b)) {
            var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++) {
              c.push(e), e = d[f], uc(a, a.nc ? a.nc.call(d, String(f), e) : e, c), e = ",";
            }c.push("]");return;
          }if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");f = "";for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), xc(d, c), c.push(":"), uc(a, a.nc ? a.nc.call(b, d, e) : e, c), f = ","));
            }c.push("}");return;
          }
        }switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "string":
            xc(b, c);break;case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":
            c.push(String(b));break;case "function":
            c.push("null");break;default:
            throw Error("Unknown type: " + (typeof b === "undefined" ? "undefined" : _typeof(b)));}
      }
    },
        yc = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        zc = /\uffff/.test("\uFFFF") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        xc = function xc(a, b) {
      b.push('"', a.replace(zc, function (a) {
        var b = yc[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), yc[a] = b);return b;
      }), '"');
    };var Ac = function Ac() {};Ac.prototype.md = null;var Bc = function Bc(a) {
      return a.md || (a.md = a.Pc());
    };var Cc,
        Dc = function Dc() {};t(Dc, Ac);Dc.prototype.Rb = function () {
      var a = Ec(this);return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };Dc.prototype.Pc = function () {
      var a = {};Ec(this) && (a[0] = !0, a[1] = !0);return a;
    };
    var Ec = function Ec(a) {
      if (!a.Bd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];try {
            return new ActiveXObject(d), a.Bd = d;
          } catch (e) {}
        }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }return a.Bd;
    };Cc = new Dc();var Fc = function Fc() {};t(Fc, Ac);Fc.prototype.Rb = function () {
      var a = new XMLHttpRequest();if ("withCredentials" in a) return a;if ("undefined" != typeof XDomainRequest) return new Gc();throw Error("Unsupported browser");
    };Fc.prototype.Pc = function () {
      return {};
    };
    var Gc = function Gc() {
      this.pa = new XDomainRequest();this.readyState = 0;this.onreadystatechange = null;this.responseText = "";this.status = -1;this.statusText = this.responseXML = null;this.pa.onload = _r(this.De, this);this.pa.onerror = _r(this.yd, this);this.pa.onprogress = _r(this.Ee, this);this.pa.ontimeout = _r(this.Fe, this);
    };h = Gc.prototype;h.open = function (a, b, c) {
      if (null != c && !c) throw Error("Only async requests are supported.");this.pa.open(a, b);
    };
    h.send = function (a) {
      if (a) {
        if ("string" == typeof a) this.pa.send(a);else throw Error("Only string data is supported");
      } else this.pa.send();
    };h.abort = function () {
      this.pa.abort();
    };h.setRequestHeader = function () {};h.De = function () {
      this.status = 200;this.responseText = this.pa.responseText;Hc(this, 4);
    };h.yd = function () {
      this.status = 500;this.responseText = "";Hc(this, 4);
    };h.Fe = function () {
      this.yd();
    };h.Ee = function () {
      this.status = 200;Hc(this, 1);
    };var Hc = function Hc(a, b) {
      a.readyState = b;if (a.onreadystatechange) a.onreadystatechange();
    };var Jc = function Jc() {
      this.ma = "";this.ee = Ic;
    };Jc.prototype.bc = !0;Jc.prototype.Wb = function () {
      return this.ma;
    };Jc.prototype.toString = function () {
      return "SafeHtml{" + this.ma + "}";
    };var Kc = function Kc(a) {
      if (a instanceof Jc && a.constructor === Jc && a.ee === Ic) return a.ma;xa("expected object of type SafeHtml, got '" + a + "' of type " + m(a));return "type_error:SafeHtml";
    },
        Ic = {};Jc.prototype.Me = function (a) {
      this.ma = a;return this;
    };!eb && !A || A && 9 <= Number(mb) || eb && B("1.9.1");A && B("9");var Mc = function Mc(a, b) {
      Na(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Lc.hasOwnProperty(d) ? a.setAttribute(Lc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      });
    },
        Lc = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };var Nc = function Nc(a, b, c) {
      this.Qe = c;this.oe = a;this.ef = b;this.fc = 0;this.Zb = null;
    };Nc.prototype.get = function () {
      var a;0 < this.fc ? (this.fc--, a = this.Zb, this.Zb = a.next, a.next = null) : a = this.oe();return a;
    };Nc.prototype.put = function (a) {
      this.ef(a);this.fc < this.Qe && (this.fc++, a.next = this.Zb, this.Zb = a);
    };var Oc = function Oc(a) {
      l.setTimeout(function () {
        throw a;
      }, 0);
    },
        Pc,
        Qc = function Qc() {
      var a = l.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function a() {
        var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
            a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
            a = _r(function (a) {
          if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
        }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
            b.postMessage(c, d);
          } };
      });if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
        var b = new a(),
            c = {},
            d = c;b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;var a = c.pd;c.pd = null;a();
          }
        };return function (a) {
          d.next = { pd: a };d = d.next;b.port2.postMessage(0);
        };
      }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
          b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
        };document.documentElement.appendChild(b);
      } : function (a) {
        l.setTimeout(a, 0);
      };
    };var Rc = function Rc() {
      this.yc = this.Na = null;
    },
        Tc = new Nc(function () {
      return new Sc();
    }, function (a) {
      a.reset();
    }, 100);Rc.prototype.add = function (a, b) {
      var c = Tc.get();c.set(a, b);this.yc ? this.yc.next = c : (w(!this.Na), this.Na = c);this.yc = c;
    };Rc.prototype.remove = function () {
      var a = null;this.Na && (a = this.Na, this.Na = this.Na.next, this.Na || (this.yc = null), a.next = null);return a;
    };var Sc = function Sc() {
      this.next = this.scope = this.Jc = null;
    };Sc.prototype.set = function (a, b) {
      this.Jc = a;this.scope = b;this.next = null;
    };
    Sc.prototype.reset = function () {
      this.next = this.scope = this.Jc = null;
    };var Yc = function Yc(a, b) {
      Uc || Vc();Wc || (Uc(), Wc = !0);Xc.add(a, b);
    },
        Uc,
        Vc = function Vc() {
      if (-1 != String(l.Promise).indexOf("[native code]")) {
        var a = l.Promise.resolve(void 0);Uc = function Uc() {
          a.then(Zc);
        };
      } else Uc = function Uc() {
        var a = Zc;!q(l.setImmediate) || l.Window && l.Window.prototype && !z("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Pc || (Pc = Qc()), Pc(a)) : l.setImmediate(a);
      };
    },
        Wc = !1,
        Xc = new Rc(),
        Zc = function Zc() {
      for (var a; a = Xc.remove();) {
        try {
          a.Jc.call(a.scope);
        } catch (b) {
          Oc(b);
        }Tc.put(a);
      }Wc = !1;
    };var $c = function $c(a) {
      a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0;
    },
        ad = function ad(a) {
      if (!a) return !1;try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };var C = function C(a, b) {
      this.M = 0;this.na = void 0;this.Ra = this.ja = this.s = null;this.Xb = this.Ic = !1;if (a != ba) try {
        var c = this;a.call(b, function (a) {
          bd(c, 2, a);
        }, function (a) {
          if (!(a instanceof cd)) try {
            if (a instanceof Error) throw a;throw Error("Promise rejected.");
          } catch (e) {}bd(c, 3, a);
        });
      } catch (d) {
        bd(this, 3, d);
      }
    },
        dd = function dd() {
      this.next = this.context = this.$a = this.Fa = this.child = null;this.ob = !1;
    };dd.prototype.reset = function () {
      this.context = this.$a = this.Fa = this.child = null;this.ob = !1;
    };
    var ed = new Nc(function () {
      return new dd();
    }, function (a) {
      a.reset();
    }, 100),
        fd = function fd(a, b, c) {
      var d = ed.get();d.Fa = a;d.$a = b;d.context = c;return d;
    },
        D = function D(a) {
      if (a instanceof C) return a;var b = new C(ba);bd(b, 2, a);return b;
    },
        E = function E(a) {
      return new C(function (b, c) {
        c(a);
      });
    },
        hd = function hd(a, b, c) {
      gd(a, b, c, null) || Yc(ja(b, a));
    },
        id = function id(a) {
      return new C(function (b) {
        var c = a.length,
            d = [];if (c) for (var e = function e(a, _e, f) {
          c--;d[a] = _e ? { ye: !0, value: f } : { ye: !1, reason: f };0 == c && b(d);
        }, f = 0, g; f < a.length; f++) {
          g = a[f], hd(g, ja(e, f, !0), ja(e, f, !1));
        } else b(d);
      });
    };C.prototype.then = function (a, b, c) {
      null != a && Aa(a, "opt_onFulfilled should be a function.");null != b && Aa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return jd(this, q(a) ? a : null, q(b) ? b : null, c);
    };$c(C);var ld = function ld(a, b) {
      b = fd(b, b, void 0);b.ob = !0;kd(a, b);return a;
    };C.prototype.c = function (a, b) {
      return jd(this, null, a, b);
    };C.prototype.cancel = function (a) {
      0 == this.M && Yc(function () {
        var b = new cd(a);md(this, b);
      }, this);
    };
    var md = function md(a, b) {
      if (0 == a.M) if (a.s) {
        var c = a.s;if (c.ja) {
          for (var d = 0, e = null, f = null, g = c.ja; g && (g.ob || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }e && (0 == c.M && 1 == d ? md(c, b) : (f ? (d = f, w(c.ja), w(null != d), d.next == c.Ra && (c.Ra = d), d.next = d.next.next) : nd(c), od(c, e, 3, b)));
        }a.s = null;
      } else bd(a, 3, b);
    },
        kd = function kd(a, b) {
      a.ja || 2 != a.M && 3 != a.M || pd(a);w(null != b.Fa);a.Ra ? a.Ra.next = b : a.ja = b;a.Ra = b;
    },
        jd = function jd(a, b, c, d) {
      var e = fd(null, null, null);e.child = new C(function (a, g) {
        e.Fa = b ? function (c) {
          try {
            var e = b.call(d, c);a(e);
          } catch (y) {
            g(y);
          }
        } : a;e.$a = c ? function (b) {
          try {
            var e = c.call(d, b);void 0 === e && b instanceof cd ? g(b) : a(e);
          } catch (y) {
            g(y);
          }
        } : g;
      });e.child.s = a;kd(a, e);return e.child;
    };C.prototype.rf = function (a) {
      w(1 == this.M);this.M = 0;bd(this, 2, a);
    };C.prototype.sf = function (a) {
      w(1 == this.M);this.M = 0;bd(this, 3, a);
    };
    var bd = function bd(a, b, c) {
      0 == a.M && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.M = 1, gd(c, a.rf, a.sf, a) || (a.na = c, a.M = b, a.s = null, pd(a), 3 != b || c instanceof cd || qd(a, c)));
    },
        gd = function gd(a, b, c, d) {
      if (a instanceof C) return null != b && Aa(b, "opt_onFulfilled should be a function."), null != c && Aa(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), kd(a, fd(b || ba, c || null, d)), !0;if (ad(a)) return a.then(b, c, d), !0;if (ga(a)) try {
        var e = a.then;if (q(e)) return rd(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }return !1;
    },
        rd = function rd(a, b, c, d, e) {
      var f = !1,
          g = function g(a) {
        f || (f = !0, c.call(e, a));
      },
          k = function k(a) {
        f || (f = !0, d.call(e, a));
      };try {
        b.call(a, g, k);
      } catch (n) {
        k(n);
      }
    },
        pd = function pd(a) {
      a.Ic || (a.Ic = !0, Yc(a.te, a));
    },
        nd = function nd(a) {
      var b = null;a.ja && (b = a.ja, a.ja = b.next, b.next = null);a.ja || (a.Ra = null);null != b && w(null != b.Fa);return b;
    };C.prototype.te = function () {
      for (var a; a = nd(this);) {
        od(this, a, this.M, this.na);
      }this.Ic = !1;
    };
    var od = function od(a, b, c, d) {
      if (3 == c && b.$a && !b.ob) for (; a && a.Xb; a = a.s) {
        a.Xb = !1;
      }if (b.child) b.child.s = null, sd(b, c, d);else try {
        b.ob ? b.Fa.call(b.context) : sd(b, c, d);
      } catch (e) {
        td.call(null, e);
      }ed.put(b);
    },
        sd = function sd(a, b, c) {
      2 == b ? a.Fa.call(a.context, c) : a.$a && a.$a.call(a.context, c);
    },
        qd = function qd(a, b) {
      a.Xb = !0;Yc(function () {
        a.Xb && td.call(null, b);
      });
    },
        td = Oc,
        cd = function cd(a) {
      u.call(this, a);
    };t(cd, u);cd.prototype.name = "cancel"; /*
                                             Portions of this code are from MochiKit, received by
                                             The Closure Authors under the MIT license. All other code is Copyright
                                             2005-2009 The Closure Authors. All Rights Reserved.
                                             */
    var ud = function ud(a, b) {
      this.pc = [];this.Hd = a;this.sd = b || null;this.rb = this.Wa = !1;this.na = void 0;this.fd = this.ld = this.Dc = !1;this.wc = 0;this.s = null;this.Ec = 0;
    };ud.prototype.cancel = function (a) {
      if (this.Wa) this.na instanceof ud && this.na.cancel();else {
        if (this.s) {
          var b = this.s;delete this.s;a ? b.cancel(a) : (b.Ec--, 0 >= b.Ec && b.cancel());
        }this.Hd ? this.Hd.call(this.sd, this) : this.fd = !0;this.Wa || vd(this, new wd());
      }
    };ud.prototype.qd = function (a, b) {
      this.Dc = !1;xd(this, a, b);
    };
    var xd = function xd(a, b, c) {
      a.Wa = !0;a.na = c;a.rb = !b;yd(a);
    },
        Ad = function Ad(a) {
      if (a.Wa) {
        if (!a.fd) throw new zd();a.fd = !1;
      }
    };ud.prototype.callback = function (a) {
      Ad(this);Bd(a);xd(this, !0, a);
    };
    var vd = function vd(a, b) {
      Ad(a);Bd(b);xd(a, !1, b);
    },
        Bd = function Bd(a) {
      w(!(a instanceof ud), "An execution sequence may not be initiated with a blocking Deferred.");
    },
        Fd = function Fd(a) {
      var b = Cd("https://apis.google.com/js/client.js?onload=" + Dd);Ed(b, null, a, void 0);
    },
        Ed = function Ed(a, b, c, d) {
      w(!a.ld, "Blocking Deferreds can not be re-used");a.pc.push([b, c, d]);a.Wa && yd(a);
    };ud.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new C(function (a, b) {
        d = a;e = b;
      });Ed(this, d, function (a) {
        a instanceof wd ? f.cancel() : e(a);
      });return f.then(a, b, c);
    };
    $c(ud);
    var Gd = function Gd(a) {
      return Ea(a.pc, function (a) {
        return q(a[1]);
      });
    },
        yd = function yd(a) {
      if (a.wc && a.Wa && Gd(a)) {
        var b = a.wc,
            c = Hd[b];c && (l.clearTimeout(c.sb), delete Hd[b]);a.wc = 0;
      }a.s && (a.s.Ec--, delete a.s);for (var b = a.na, d = c = !1; a.pc.length && !a.Dc;) {
        var e = a.pc.shift(),
            f = e[0],
            g = e[1],
            e = e[2];if (f = a.rb ? g : f) try {
          var k = f.call(e || a.sd, b);void 0 !== k && (a.rb = a.rb && (k == b || k instanceof Error), a.na = b = k);if (ad(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.Dc = !0;
        } catch (n) {
          b = n, a.rb = !0, Gd(a) || (c = !0);
        }
      }a.na = b;d && (k = _r(a.qd, a, !0), d = _r(a.qd, a, !1), b instanceof ud ? (Ed(b, k, d), b.ld = !0) : b.then(k, d));c && (b = new Id(b), Hd[b.sb] = b, a.wc = b.sb);
    },
        zd = function zd() {
      u.call(this);
    };t(zd, u);zd.prototype.message = "Deferred has already fired";zd.prototype.name = "AlreadyCalledError";var wd = function wd() {
      u.call(this);
    };t(wd, u);wd.prototype.message = "Deferred was canceled";wd.prototype.name = "CanceledError";var Id = function Id(a) {
      this.sb = l.setTimeout(_r(this.qf, this), 0);this.O = a;
    };
    Id.prototype.qf = function () {
      w(Hd[this.sb], "Cannot throw an error that is not scheduled.");delete Hd[this.sb];throw this.O;
    };var Hd = {};var Cd = function Cd(a) {
      var b = new nc();b.jc = a;return Jd(b);
    },
        Jd = function Jd(a) {
      var b = {},
          c = b.document || document,
          d;a instanceof nc && a.constructor === nc && a.he === mc ? d = a.jc : (xa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + m(a)), d = "type_error:TrustedResourceUrl");var e = document.createElement("SCRIPT");a = { Od: e, Kb: void 0 };var f = new ud(Kd, a),
          g = null,
          k = null != b.timeout ? b.timeout : 5E3;0 < k && (g = window.setTimeout(function () {
        Ld(e, !0);vd(f, new Md(1, "Timeout reached for loading script " + d));
      }, k), a.Kb = g);e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Ld(e, b.Df || !1, g), f.callback(null));
      };e.onerror = function () {
        Ld(e, !0, g);vd(f, new Md(0, "Error while loading script " + d));
      };a = b.attributes || {};Ua(a, { type: "text/javascript", charset: "UTF-8", src: d });Mc(e, a);Nd(c).appendChild(e);return f;
    },
        Nd = function Nd(a) {
      var b;return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
    },
        Kd = function Kd() {
      if (this && this.Od) {
        var a = this.Od;a && "SCRIPT" == a.tagName && Ld(a, !0, this.Kb);
      }
    },
        Ld = function Ld(a, b, c) {
      null != c && l.clearTimeout(c);a.onload = ba;a.onerror = ba;a.onreadystatechange = ba;b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    },
        Md = function Md(a, b) {
      var c = "Jsloader error (code #" + a + ")";b && (c += ": " + b);u.call(this, c);this.code = a;
    };t(Md, u);var Od = function Od() {
      Hb.call(this);this.aa = new Ob(this);this.ke = this;this.Vc = null;
    };t(Od, Hb);Od.prototype[Kb] = !0;h = Od.prototype;h.addEventListener = function (a, b, c, d) {
      Ub(this, a, b, c, d);
    };h.removeEventListener = function (a, b, c, d) {
      cc(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
      Pd(this);var b,
          c = this.Vc;if (c) {
        b = [];for (var d = 1; c; c = c.Vc) {
          b.push(c), w(1E3 > ++d, "infinite loop");
        }
      }c = this.ke;d = a.type || a;if (p(a)) a = new Ib(a, c);else if (a instanceof Ib) a.target = a.target || c;else {
        var e = a;a = new Ib(d, c);Ua(a, e);
      }var e = !0,
          f;if (b) for (var g = b.length - 1; !a.bb && 0 <= g; g--) {
        f = a.currentTarget = b[g], e = Qd(f, d, !0, a) && e;
      }a.bb || (f = a.currentTarget = c, e = Qd(f, d, !0, a) && e, a.bb || (e = Qd(f, d, !1, a) && e));if (b) for (g = 0; !a.bb && g < b.length; g++) {
        f = a.currentTarget = b[g], e = Qd(f, d, !1, a) && e;
      }return e;
    };
    h.Ta = function () {
      Od.jd.Ta.call(this);if (this.aa) {
        var a = this.aa,
            b = 0,
            c;for (c in a.C) {
          for (var d = a.C[c], e = 0; e < d.length; e++) {
            ++b, Nb(d[e]);
          }delete a.C[c];a.Lb--;
        }
      }this.Vc = null;
    };h.listen = function (a, b, c, d) {
      Pd(this);return this.aa.add(String(a), b, !1, c, d);
    };
    var bc = function bc(a, b, c, d, e) {
      a.aa.add(String(b), c, !0, d, e);
    },
        Qd = function Qd(a, b, c, d) {
      b = a.aa.C[String(b)];if (!b) return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];if (g && !g.hb && g.capture == c) {
          var k = g.listener,
              n = g.Yb || g.src;g.Pb && Qb(a.aa, g);e = !1 !== k.call(n, d) && e;
        }
      }return e && 0 != d.Nd;
    };Od.prototype.Kc = function (a, b, c, d) {
      return this.aa.Kc(String(a), b, c, d);
    };var Pd = function Pd(a) {
      w(a.aa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };var Rd = "StopIteration" in l ? l.StopIteration : { message: "StopIteration", stack: "" },
        Sd = function Sd() {};Sd.prototype.next = function () {
      throw Rd;
    };Sd.prototype.je = function () {
      return this;
    };var Td = function Td(a, b) {
      this.ba = {};this.w = [];this.nb = this.o = 0;var c = arguments.length;if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else a && this.addAll(a);
    };Td.prototype.X = function () {
      Ud(this);for (var a = [], b = 0; b < this.w.length; b++) {
        a.push(this.ba[this.w[b]]);
      }return a;
    };Td.prototype.ka = function () {
      Ud(this);return this.w.concat();
    };Td.prototype.pb = function (a) {
      return Vd(this.ba, a);
    };
    Td.prototype.remove = function (a) {
      return Vd(this.ba, a) ? (delete this.ba[a], this.o--, this.nb++, this.w.length > 2 * this.o && Ud(this), !0) : !1;
    };var Ud = function Ud(a) {
      if (a.o != a.w.length) {
        for (var b = 0, c = 0; b < a.w.length;) {
          var d = a.w[b];Vd(a.ba, d) && (a.w[c++] = d);b++;
        }a.w.length = c;
      }if (a.o != a.w.length) {
        for (var e = {}, c = b = 0; b < a.w.length;) {
          d = a.w[b], Vd(e, d) || (a.w[c++] = d, e[d] = 1), b++;
        }a.w.length = c;
      }
    };h = Td.prototype;h.get = function (a, b) {
      return Vd(this.ba, a) ? this.ba[a] : b;
    };
    h.set = function (a, b) {
      Vd(this.ba, a) || (this.o++, this.w.push(a), this.nb++);this.ba[a] = b;
    };h.addAll = function (a) {
      var b;a instanceof Td ? (b = a.ka(), a = a.X()) : (b = Pa(a), a = Oa(a));for (var c = 0; c < b.length; c++) {
        this.set(b[c], a[c]);
      }
    };h.forEach = function (a, b) {
      for (var c = this.ka(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);a.call(b, f, e, this);
      }
    };h.clone = function () {
      return new Td(this);
    };
    h.je = function (a) {
      Ud(this);var b = 0,
          c = this.nb,
          d = this,
          e = new Sd();e.next = function () {
        if (c != d.nb) throw Error("The map has changed since the iterator was created");if (b >= d.w.length) throw Rd;var e = d.w[b++];return a ? e : d.ba[e];
      };return e;
    };var Vd = function Vd(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };var Wd = function Wd(a) {
      if (a.X && "function" == typeof a.X) return a.X();if (p(a)) return a.split("");if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }return b;
      }return Oa(a);
    },
        Xd = function Xd(a) {
      if (a.ka && "function" == typeof a.ka) return a.ka();if (!a.X || "function" != typeof a.X) {
        if (ea(a) || p(a)) {
          var b = [];a = a.length;for (var c = 0; c < a; c++) {
            b.push(c);
          }return b;
        }return Pa(a);
      }
    },
        Yd = function Yd(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ea(a) || p(a)) x(a, b, void 0);else for (var c = Xd(a), d = Wd(a), e = d.length, f = 0; f < e; f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    };var Zd = function Zd(a, b, c, d, e) {
      this.reset(a, b, c, d, e);
    };Zd.prototype.ud = null;var $d = 0;Zd.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || $d++;d || ka();this.wb = a;this.Ve = b;delete this.ud;
    };Zd.prototype.Rd = function (a) {
      this.wb = a;
    };var ae = function ae(a) {
      this.We = a;this.zd = this.Fc = this.wb = this.s = null;
    },
        be = function be(a, b) {
      this.name = a;this.value = b;
    };be.prototype.toString = function () {
      return this.name;
    };var ce = new be("SEVERE", 1E3),
        de = new be("CONFIG", 700),
        ee = new be("FINE", 500);ae.prototype.getParent = function () {
      return this.s;
    };ae.prototype.Rd = function (a) {
      this.wb = a;
    };var fe = function fe(a) {
      if (a.wb) return a.wb;if (a.s) return fe(a.s);xa("Root logger has no level set.");return null;
    };
    ae.prototype.log = function (a, b, c) {
      if (a.value >= fe(this).value) for (q(b) && (b = b()), a = new Zd(a, String(b), this.We), c && (a.ud = c), c = "log:" + a.Ve, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
        var d = c,
            e = a;if (d.zd) for (var f = 0; b = d.zd[f]; f++) {
          b(e);
        }c = c.getParent();
      }
    };
    var ge = {},
        he = null,
        ie = function ie(a) {
      he || (he = new ae(""), ge[""] = he, he.Rd(de));var b;if (!(b = ge[a])) {
        b = new ae(a);var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = ie(a.substr(0, c));c.Fc || (c.Fc = {});c.Fc[d] = b;b.s = c;ge[a] = b;
      }return b;
    };var F = function F(a, b) {
      a && a.log(ee, b, void 0);
    };var je = function je(a, b, c) {
      if (q(a)) c && (a = _r(a, c));else if (a && "function" == typeof a.handleEvent) a = _r(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
    },
        ke = function ke(a) {
      var b = null;return new C(function (c, d) {
        b = je(function () {
          c(void 0);
        }, a);-1 == b && d(Error("Failed to schedule timer."));
      }).c(function (a) {
        l.clearTimeout(b);throw a;
      });
    };var le = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        me = function me(a, b) {
      if (a) {
        a = a.split("&");for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e,
              f = null;0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
      }
    };var G = function G(a) {
      Od.call(this);this.headers = new Td();this.Ac = a || null;this.qa = !1;this.zc = this.b = null;this.vb = this.Fd = this.ec = "";this.Ca = this.Nc = this.cc = this.Hc = !1;this.kb = 0;this.uc = null;this.Md = "";this.xc = this.cf = this.ae = !1;
    };t(G, Od);var ne = G.prototype,
        oe = ie("goog.net.XhrIo");ne.T = oe;var pe = /^https?$/i,
        qe = ["POST", "PUT"];
    G.prototype.send = function (a, b, c, d) {
      if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ec + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.ec = a;this.vb = "";this.Fd = b;this.Hc = !1;this.qa = !0;this.b = this.Ac ? this.Ac.Rb() : Cc.Rb();this.zc = this.Ac ? Bc(this.Ac) : Bc(Cc);this.b.onreadystatechange = _r(this.Jd, this);this.cf && "onprogress" in this.b && (this.b.onprogress = _r(function (a) {
        this.Id(a, !0);
      }, this), this.b.upload && (this.b.upload.onprogress = _r(this.Id, this)));try {
        F(this.T, re(this, "Opening Xhr")), this.Nc = !0, this.b.open(b, String(a), !0), this.Nc = !1;
      } catch (f) {
        F(this.T, re(this, "Error opening Xhr: " + f.message));this.O(5, f);return;
      }a = c || "";var e = this.headers.clone();d && Yd(d, function (a, b) {
        e.set(b, a);
      });d = Ga(e.ka());c = l.FormData && a instanceof l.FormData;!Ha(qe, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {
        this.b.setRequestHeader(b, a);
      }, this);this.Md && (this.b.responseType = this.Md);"withCredentials" in this.b && this.b.withCredentials !== this.ae && (this.b.withCredentials = this.ae);try {
        se(this), 0 < this.kb && (this.xc = te(this.b), F(this.T, re(this, "Will abort after " + this.kb + "ms if incomplete, xhr2 " + this.xc)), this.xc ? (this.b.timeout = this.kb, this.b.ontimeout = _r(this.Kb, this)) : this.uc = je(this.Kb, this.kb, this)), F(this.T, re(this, "Sending request")), this.cc = !0, this.b.send(a), this.cc = !1;
      } catch (f) {
        F(this.T, re(this, "Send error: " + f.message)), this.O(5, f);
      }
    };var te = function te(a) {
      return A && B(9) && fa(a.timeout) && void 0 !== a.ontimeout;
    },
        Fa = function Fa(a) {
      return "content-type" == a.toLowerCase();
    };
    G.prototype.Kb = function () {
      "undefined" != typeof aa && this.b && (this.vb = "Timed out after " + this.kb + "ms, aborting", F(this.T, re(this, this.vb)), this.dispatchEvent("timeout"), this.abort(8));
    };G.prototype.O = function (a, b) {
      this.qa = !1;this.b && (this.Ca = !0, this.b.abort(), this.Ca = !1);this.vb = b;ue(this);ve(this);
    };var ue = function ue(a) {
      a.Hc || (a.Hc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
    G.prototype.abort = function () {
      this.b && this.qa && (F(this.T, re(this, "Aborting")), this.qa = !1, this.Ca = !0, this.b.abort(), this.Ca = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ve(this));
    };G.prototype.Ta = function () {
      this.b && (this.qa && (this.qa = !1, this.Ca = !0, this.b.abort(), this.Ca = !1), ve(this, !0));G.jd.Ta.call(this);
    };G.prototype.Jd = function () {
      this.isDisposed() || (this.Nc || this.cc || this.Ca ? we(this) : this.$e());
    };G.prototype.$e = function () {
      we(this);
    };
    var we = function we(a) {
      if (a.qa && "undefined" != typeof aa) if (a.zc[1] && 4 == xe(a) && 2 == ye(a)) F(a.T, re(a, "Local request error detected and ignored"));else if (a.cc && 4 == xe(a)) je(a.Jd, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == xe(a)) {
        F(a.T, re(a, "Request complete"));a.qa = !1;try {
          var b = ye(a),
              c;a: switch (b) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
              c = !0;break a;default:
              c = !1;}var d;if (!(d = c)) {
            var e;if (e = 0 === b) {
              var f = String(a.ec).match(le)[1] || null;if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                  f = g.substr(0, g.length - 1);e = !pe.test(f ? f.toLowerCase() : "");
            }d = e;
          }if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            var k;try {
              k = 2 < xe(a) ? a.b.statusText : "";
            } catch (n) {
              F(a.T, "Can not get status: " + n.message), k = "";
            }a.vb = k + " [" + ye(a) + "]";ue(a);
          }
        } finally {
          ve(a);
        }
      }
    };G.prototype.Id = function (a, b) {
      w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(ze(a, "progress"));this.dispatchEvent(ze(a, b ? "downloadprogress" : "uploadprogress"));
    };
    var ze = function ze(a, b) {
      return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
    },
        ve = function ve(a, b) {
      if (a.b) {
        se(a);var c = a.b,
            d = a.zc[0] ? ba : null;a.b = null;a.zc = null;b || a.dispatchEvent("ready");try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.T) && a.log(ce, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    },
        se = function se(a) {
      a.b && a.xc && (a.b.ontimeout = null);fa(a.uc) && (l.clearTimeout(a.uc), a.uc = null);
    },
        xe = function xe(a) {
      return a.b ? a.b.readyState : 0;
    },
        ye = function ye(a) {
      try {
        return 2 < xe(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
        Ae = function Ae(a) {
      try {
        return a.b ? a.b.responseText : "";
      } catch (b) {
        return F(a.T, "Can not get responseText: " + b.message), "";
      }
    },
        re = function re(a, b) {
      return b + " [" + a.Fd + " " + a.ec + " " + ye(a) + "]";
    };var Be = function Be(a, b) {
      this.$ = this.La = this.da = "";this.ab = null;this.Ba = this.sa = "";this.R = this.Pe = !1;var c;a instanceof Be ? (this.R = void 0 !== b ? b : a.R, Ce(this, a.da), c = a.La, H(this), this.La = c, De(this, a.$), Ee(this, a.ab), Fe(this, a.sa), Ge(this, a.V.clone()), a = a.Ba, H(this), this.Ba = a) : a && (c = String(a).match(le)) ? (this.R = !!b, Ce(this, c[1] || "", !0), a = c[2] || "", H(this), this.La = He(a), De(this, c[3] || "", !0), Ee(this, c[4]), Fe(this, c[5] || "", !0), Ge(this, c[6] || "", !0), a = c[7] || "", H(this), this.Ba = He(a)) : (this.R = !!b, this.V = new I(null, 0, this.R));
    };Be.prototype.toString = function () {
      var a = [],
          b = this.da;b && a.push(Ie(b, Je, !0), ":");var c = this.$;if (c || "file" == b) a.push("//"), (b = this.La) && a.push(Ie(b, Je, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.ab, null != c && a.push(":", String(c));if (c = this.sa) this.$ && "/" != c.charAt(0) && a.push("/"), a.push(Ie(c, "/" == c.charAt(0) ? Ke : Le, !0));(c = this.V.toString()) && a.push("?", c);(c = this.Ba) && a.push("#", Ie(c, Me));return a.join("");
    };
    Be.prototype.resolve = function (a) {
      var b = this.clone(),
          c = !!a.da;c ? Ce(b, a.da) : c = !!a.La;if (c) {
        var d = a.La;H(b);b.La = d;
      } else c = !!a.$;c ? De(b, a.$) : c = null != a.ab;d = a.sa;if (c) Ee(b, a.ab);else if (c = !!a.sa) {
        if ("/" != d.charAt(0)) if (this.$ && !this.sa) d = "/" + d;else {
          var e = b.sa.lastIndexOf("/");-1 != e && (d = b.sa.substr(0, e + 1) + d);
        }e = d;if (".." == e || "." == e) d = "";else if (v(e, "./") || v(e, "/.")) {
          for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
            var k = e[g++];"." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
          }d = f.join("/");
        } else d = e;
      }c ? Fe(b, d) : c = "" !== a.V.toString();c ? Ge(b, a.V.clone()) : c = !!a.Ba;c && (a = a.Ba, H(b), b.Ba = a);return b;
    };Be.prototype.clone = function () {
      return new Be(this);
    };
    var Ce = function Ce(a, b, c) {
      H(a);a.da = c ? He(b, !0) : b;a.da && (a.da = a.da.replace(/:$/, ""));
    },
        De = function De(a, b, c) {
      H(a);a.$ = c ? He(b, !0) : b;
    },
        Ee = function Ee(a, b) {
      H(a);if (b) {
        b = Number(b);if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);a.ab = b;
      } else a.ab = null;
    },
        Fe = function Fe(a, b, c) {
      H(a);a.sa = c ? He(b, !0) : b;
    },
        Ge = function Ge(a, b, c) {
      H(a);b instanceof I ? (a.V = b, a.V.ed(a.R)) : (c || (b = Ie(b, Ne)), a.V = new I(b, 0, a.R));
    },
        J = function J(a, b, c) {
      H(a);a.V.set(b, c);
    },
        Oe = function Oe(a, b) {
      return a.V.get(b);
    },
        Pe = function Pe(a, b) {
      H(a);a.V.remove(b);
    },
        H = function H(a) {
      if (a.Pe) throw Error("Tried to modify a read-only Uri");
    };Be.prototype.ed = function (a) {
      this.R = a;this.V && this.V.ed(a);return this;
    };
    var Qe = function Qe(a) {
      return a instanceof Be ? a.clone() : new Be(a, void 0);
    },
        Re = function Re(a, b) {
      var c = new Be(null, void 0);Ce(c, "https");a && De(c, a);b && Fe(c, b);return c;
    },
        He = function He(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
        Ie = function Ie(a, b, c) {
      return p(a) ? (a = encodeURI(a).replace(b, Se), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
        Se = function Se(a) {
      a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
        Je = /[#\/\?@]/g,
        Le = /[\#\?:]/g,
        Ke = /[\#\?]/g,
        Ne = /[\#\?@]/g,
        Me = /#/g,
        I = function I(a, b, c) {
      this.o = this.l = null;this.N = a || null;this.R = !!c;
    },
        Te = function Te(a) {
      a.l || (a.l = new Td(), a.o = 0, a.N && me(a.N, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    },
        Ve = function Ve(a) {
      var b = Xd(a);if ("undefined" == typeof b) throw Error("Keys are undefined");var c = new I(null, 0, void 0);a = Wd(a);for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = a[d];da(f) ? Ue(c, e, f) : c.add(e, f);
      }return c;
    };h = I.prototype;
    h.add = function (a, b) {
      Te(this);this.N = null;a = this.P(a);var c = this.l.get(a);c || this.l.set(a, c = []);c.push(b);this.o = ya(this.o) + 1;return this;
    };h.remove = function (a) {
      Te(this);a = this.P(a);return this.l.pb(a) ? (this.N = null, this.o = ya(this.o) - this.l.get(a).length, this.l.remove(a)) : !1;
    };h.pb = function (a) {
      Te(this);a = this.P(a);return this.l.pb(a);
    };h.ka = function () {
      Te(this);for (var a = this.l.X(), b = this.l.ka(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }return c;
    };
    h.X = function (a) {
      Te(this);var b = [];if (p(a)) this.pb(a) && (b = La(b, this.l.get(this.P(a))));else {
        a = this.l.X();for (var c = 0; c < a.length; c++) {
          b = La(b, a[c]);
        }
      }return b;
    };h.set = function (a, b) {
      Te(this);this.N = null;a = this.P(a);this.pb(a) && (this.o = ya(this.o) - this.l.get(a).length);this.l.set(a, [b]);this.o = ya(this.o) + 1;return this;
    };h.get = function (a, b) {
      a = a ? this.X(a) : [];return 0 < a.length ? String(a[0]) : b;
    };var Ue = function Ue(a, b, c) {
      a.remove(b);0 < c.length && (a.N = null, a.l.set(a.P(b), Ma(c)), a.o = ya(a.o) + c.length);
    };
    I.prototype.toString = function () {
      if (this.N) return this.N;if (!this.l) return "";for (var a = [], b = this.l.ka(), c = 0; c < b.length; c++) {
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
          var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g);
        }
      }return this.N = a.join("&");
    };I.prototype.clone = function () {
      var a = new I();a.N = this.N;this.l && (a.l = this.l.clone(), a.o = this.o);return a;
    };I.prototype.P = function (a) {
      a = String(a);this.R && (a = a.toLowerCase());return a;
    };
    I.prototype.ed = function (a) {
      a && !this.R && (Te(this), this.N = null, this.l.forEach(function (a, c) {
        var b = c.toLowerCase();c != b && (this.remove(c), Ue(this, b, a));
      }, this));this.R = a;
    };var We = function We() {
      var a = K();return A && !!mb && 11 == mb || /Edge\/\d+/.test(a);
    },
        Xe = function Xe() {
      return l.window && l.window.location.href || "";
    },
        Ye = function Ye(a, b) {
      b = b || l.window;var c = "about:blank";a && (c = qc(tc(a)));b.location.href = c;
    },
        Ze = function Ze(a, b) {
      var c = [],
          d;for (d in a) {
        d in b ? _typeof(a[d]) != _typeof(b[d]) ? c.push(d) : da(a[d]) ? Ra(a[d], b[d]) || c.push(d) : "object" == _typeof(a[d]) && null != a[d] && null != b[d] ? 0 < Ze(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      }for (d in b) {
        d in a || c.push(d);
      }return c;
    },
        af = function af() {
      var a;
      a = K();a = "Chrome" != $e(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !A || !mb || 9 < mb;
    },
        bf = function bf(a) {
      a = (a || K()).toLowerCase();return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
    },
        cf = function cf(a) {
      a = a || l.window;try {
        a.close();
      } catch (b) {}
    },
        df = function df(a, b, c) {
      var d = Math.floor(1E9 * Math.random()).toString();b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2,
          f = (window.screen.availWidth - b) / 2;b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };c = K().toLowerCase();d && (b.target = d, v(c, "crios/") && (b.target = "_blank"));"Firefox" == $e(K()) && (a = a || "http://localhost", b.scrollbars = !0);var g;c = a || "about:blank";(d = b) || (d = {});a = window;b = c instanceof pc ? c : tc("undefined" != typeof c.href ? c.href : String(c));c = d.target || c.target;e = [];for (g in d) {
        switch (g) {case "width":case "height":case "top":case "left":
            e.push(g + "=" + d[g]);break;case "target":case "noreferrer":
            break;
          default:
            e.push(g + "=" + (d[g] ? 1 : 0));}
      }g = e.join(",");(z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ga(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g === "undefined" ? "undefined" : _typeof(g), w(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof pc ? b : tc(b), g.href = qc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = qc(b), g && (db && v(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = lc("b/12014412, meta tag with sanitized URL"), ta.test(d) && (-1 != d.indexOf("&") && (d = d.replace(na, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(oa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(pa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(qa, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(ra, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(sa, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', za(kc(a), "must provide justification"), w(!/^[\s\xa0]*$/.test(kc(a)), "must provide non-empty justification"), g.document.write(Kc(new Jc().Me(d))), g.document.close())) : g = a.open(qc(b), c, g);if (g) try {
        g.focus();
      } catch (k) {}return g;
    },
        ef = function ef(a) {
      return new C(function (b) {
        var c = function c() {
          ke(2E3).then(function () {
            if (!a || a.closed) b();else return c();
          });
        };return c();
      });
    },
        ff = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        gf = function gf() {
      var a = null;return new C(function (b) {
        "complete" == l.document.readyState ? b() : (a = function a() {
          b();
        }, ac(window, "load", a));
      }).c(function (b) {
        cc(window, "load", a);throw b;
      });
    },
        jf = function jf() {
      return hf(void 0) ? gf().then(function () {
        return new C(function (a, b) {
          var c = l.document,
              d = setTimeout(function () {
            b(Error("Cordova framework is not ready."));
          }, 1E3);c.addEventListener("deviceready", function () {
            clearTimeout(d);a();
          }, !1);
        });
      }) : E(Error("Cordova must run in an Android or iOS file scheme."));
    },
        hf = function hf(a) {
      a = a || K();return !("file:" !== kf() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    },
        lf = function lf() {
      var a = l.window;try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
        L = function L() {
      return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
    },
        mf = function mf() {
      var a = L();return "ReactNative" === a || "Node" === a;
    },
        $e = function $e(a) {
      var b = a.toLowerCase();if (v(b, "opera/") || v(b, "opr/") || v(b, "opios/")) return "Opera";if (v(b, "iemobile")) return "IEMobile";if (v(b, "msie") || v(b, "trident/")) return "IE";if (v(b, "edge/")) return "Edge";if (v(b, "firefox/")) return "Firefox";if (v(b, "silk/")) return "Silk";if (v(b, "blackberry")) return "Blackberry";if (v(b, "webos")) return "Webos";if (!v(b, "safari/") || v(b, "chrome/") || v(b, "crios/") || v(b, "android")) {
        if (!v(b, "chrome/") && !v(b, "crios/") || v(b, "edge/")) {
          if (v(b, "android")) return "Android";
          if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
        } else return "Chrome";
      } else return "Safari";return "Other";
    },
        nf = function nf(a) {
      var b = L();return ("Browser" === b ? $e(K()) : b) + "/JsCore/" + a;
    },
        K = function K() {
      return l.navigator && l.navigator.userAgent || "";
    },
        M = function M(a, b) {
      a = a.split(".");b = b || l;for (var c = 0; c < a.length && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && null != b; c++) {
        b = b[a[c]];
      }c != a.length && (b = void 0);return b;
    },
        qf = function qf() {
      var a;if (a = (of() || "chrome-extension:" === kf() || hf() && !1) && !mf()) a: {
        try {
          var b = l.localStorage,
              c = pf();if (b) {
            b.setItem(c, "1");b.removeItem(c);a = We() ? !!l.indexedDB : !0;break a;
          }
        } catch (d) {}a = !1;
      }return a;
    },
        of = function of() {
      return "http:" === kf() || "https:" === kf();
    },
        kf = function kf() {
      return l.location && l.location.protocol || null;
    },
        rf = function rf(a) {
      a = a || K();return bf(a) || "Firefox" == $e(a) ? !1 : !0;
    },
        sf = function sf(a) {
      return "undefined" === typeof a ? null : wc(a);
    },
        tf = function tf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
      }return b;
    },
        uf = function uf(a) {
      if (null !== a) return JSON.parse(a);
    },
        pf = function pf(a) {
      return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
    },
        vf = function vf(a) {
      a = a || K();return "Safari" == $e(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
    },
        wf = function wf() {
      var a = l.___jsl;if (a && a.H) for (var b in a.H) {
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
          a.CP[c] = null;
        }
      }
    },
        xf = function xf() {
      return l.navigator && "boolean" === typeof l.navigator.onLine ? l.navigator.onLine : !0;
    },
        yf = function yf(a, b, c, d) {
      if (a > b) throw Error("Short delay should be less than long delay!");
      this.mf = a;this.Ue = b;a = c || K();d = d || L();this.Oe = bf(a) || "ReactNative" === d;
    };yf.prototype.get = function () {
      return this.Oe ? this.Ue : this.mf;
    };var zf;try {
      var Af = {};Object.defineProperty(Af, "abcd", { configurable: !0, enumerable: !0, value: 1 });Object.defineProperty(Af, "abcd", { configurable: !0, enumerable: !0, value: 2 });zf = 2 == Af.abcd;
    } catch (a) {
      zf = !1;
    }
    var N = function N(a, b, c) {
      zf ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c;
    },
        Bf = function Bf(a, b) {
      if (b) for (var c in b) {
        b.hasOwnProperty(c) && N(a, c, b[c]);
      }
    },
        Cf = function Cf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }return b;
    },
        Df = function Df(a, b) {
      if (!b || !b.length) return !0;if (!a) return !1;for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];if (void 0 === d || null === d || "" === d) return !1;
      }return !0;
    },
        Ef = function Ef(a) {
      var b = a;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && null != a) {
        var b = "length" in a ? [] : {},
            c;for (c in a) {
          N(b, c, Ef(a[c]));
        }
      }return b;
    };var Ff = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        Gf = { be: { Ab: 500, zb: 600, providerId: "facebook.com", oc: Ff }, ce: { Ab: 500, zb: 620, providerId: "github.com", oc: Ff }, de: { Ab: 515, zb: 680, providerId: "google.com", oc: Ff }, ie: { Ab: 485, zb: 705, providerId: "twitter.com", oc: "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ") } },
        Hf = function Hf(a) {
      for (var b in Gf) {
        if (Gf[b].providerId == a) return Gf[b];
      }return null;
    },
        If = function If(a) {
      return (a = Hf(a)) && a.oc || [];
    };var O = function O(a, b) {
      this.code = "auth/" + a;this.message = b || Jf[a] || "";
    };t(O, Error);O.prototype.D = function () {
      return { name: this.code, code: this.code, message: this.message };
    };
    var Kf = function Kf(a) {
      var b = a && (a.name || a.code);return b ? new O(b.substring(5), a.message) : null;
    },
        Jf = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "cordova-not-ready": "Cordova framework is not ready.",
      "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.",
      "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
      "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.",
      "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "missing-iframe-start": "An internal error has occurred.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
      "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.",
      "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
      "provider-already-linked": "User can only be linked to one identity for the given provider.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
      "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };var P = function P(a, b, c, d, e) {
      this.ga = a;this.F = b || null;this.mb = c || null;this.dd = d || null;this.O = e || null;if (this.mb || this.O) {
        if (this.mb && this.O) throw new O("invalid-auth-event");if (this.mb && !this.dd) throw new O("invalid-auth-event");
      } else throw new O("invalid-auth-event");
    };P.prototype.Vb = function () {
      return this.dd;
    };P.prototype.getError = function () {
      return this.O;
    };P.prototype.D = function () {
      return { type: this.ga, eventId: this.F, urlResponse: this.mb, sessionId: this.dd, error: this.O && this.O.D() };
    };
    var Lf = function Lf(a) {
      a = a || {};return a.type ? new P(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Kf(a.error)) : null;
    };var Mf = function Mf(a) {
      var b = "unauthorized-domain",
          c = void 0,
          d = Qe(a);a = d.$;d = d.da;"http" != d && "https" != d ? b = "operation-not-supported-in-this-environment" : c = la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a);O.call(this, b, c);
    };t(Mf, O);var Nf = function Nf(a) {
      this.Te = a.sub;ka();this.Sb = a.email || null;
    };var Of = function Of(a, b, c, d) {
      var e = {};ga(c) ? e = c : b && p(c) && p(d) ? e = { oauthToken: c, oauthTokenSecret: d } : !b && p(c) && (e = { accessToken: c });if (b || !e.idToken && !e.accessToken) {
        if (b && e.oauthToken && e.oauthTokenSecret) N(this, "accessToken", e.oauthToken), N(this, "secret", e.oauthTokenSecret);else {
          if (b) throw new O("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");throw new O("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
        }
      } else e.idToken && N(this, "idToken", e.idToken), e.accessToken && N(this, "accessToken", e.accessToken);N(this, "provider", a);
    };Of.prototype.Ub = function (a) {
      return Pf(a, Qf(this));
    };Of.prototype.Gd = function (a, b) {
      var c = Qf(this);c.idToken = b;return Rf(a, c);
    };var Qf = function Qf(a) {
      var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.provider;return { postBody: Ve(b).toString(), requestUri: "http://localhost" };
    };
    Of.prototype.D = function () {
      var a = { provider: this.provider };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a;
    };
    var Sf = function Sf(a, b, c) {
      var d = !!b,
          e = c || [];b = function b() {
        Bf(this, { providerId: a, isOAuthProvider: !0 });this.cd = [];this.rd = {};"google.com" == a && this.addScope("profile");
      };d || (b.prototype.addScope = function (a) {
        Ha(this.cd, a) || this.cd.push(a);
      });b.prototype.setCustomParameters = function (a) {
        this.rd = Sa(a);
      };b.prototype.Be = function () {
        var a = tf(this.rd),
            b;for (b in a) {
          a[b] = a[b].toString();
        }a = Sa(a);for (b = 0; b < e.length; b++) {
          var c = e[b];c in a && delete a[c];
        }return a;
      };b.prototype.Ce = function () {
        return Ma(this.cd);
      };b.credential = function (b, c) {
        return new Of(a, d, b, c);
      };Bf(b, { PROVIDER_ID: a });return b;
    },
        Tf = Sf("facebook.com", !1, If("facebook.com"));Tf.prototype.addScope = Tf.prototype.addScope || void 0;var Uf = Sf("github.com", !1, If("github.com"));Uf.prototype.addScope = Uf.prototype.addScope || void 0;var Vf = Sf("google.com", !1, If("google.com"));Vf.prototype.addScope = Vf.prototype.addScope || void 0;
    Vf.credential = function (a, b) {
      if (!a && !b) throw new O("argument-error", "credential failed: must provide the ID token and/or the access token.");return new Of("google.com", !1, ga(a) ? a : { idToken: a || null, accessToken: b || null });
    };var Wf = Sf("twitter.com", !0, If("twitter.com")),
        Xf = function Xf(a, b) {
      this.Sb = a;this.Wc = b;N(this, "provider", "password");
    };Xf.prototype.Ub = function (a) {
      return Q(a, Yf, { email: this.Sb, password: this.Wc });
    };Xf.prototype.Gd = function (a, b) {
      return Q(a, Zf, { idToken: b, email: this.Sb, password: this.Wc });
    };
    Xf.prototype.D = function () {
      return { email: this.Sb, password: this.Wc };
    };var $f = function $f() {
      Bf(this, { providerId: "password", isOAuthProvider: !1 });
    };Bf($f, { PROVIDER_ID: "password" });
    var ag = { Bf: $f, be: Tf, de: Vf, ce: Uf, ie: Wf },
        bg = function bg(a) {
      var b = a && a.providerId;if (!b) return null;var c = a && a.oauthAccessToken,
          d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;for (var e in ag) {
        if (ag[e].PROVIDER_ID == b) try {
          return ag[e].credential({ accessToken: c, idToken: a, oauthToken: c, oauthTokenSecret: d });
        } catch (f) {
          break;
        }
      }return null;
    },
        cg = function cg(a) {
      if (!a.isOAuthProvider) throw new O("invalid-oauth-provider");
    };var dg = function dg(a, b, c, d) {
      O.call(this, a, d);N(this, "email", b);N(this, "credential", c);
    };t(dg, O);dg.prototype.D = function () {
      var a = { code: this.code, message: this.message, email: this.email },
          b = this.credential && this.credential.D();b && (Ua(a, b), a.providerId = b.provider, delete a.provider);return a;
    };var eg = function eg(a) {
      if (a.code) {
        var b = a.code || "";0 == b.indexOf("auth/") && (b = b.substring(5));return a.email ? new dg(b, a.email, bg(a), a.message) : new O(b, a.message || void 0);
      }return null;
    };var fg = function fg(a) {
      this.Af = a;
    };t(fg, Ac);fg.prototype.Rb = function () {
      return new this.Af();
    };fg.prototype.Pc = function () {
      return {};
    };
    var R = function R(a, b, c) {
      var d;d = "Node" == L();d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;if (!d) throw new O("internal-error", "The XMLHttpRequest compatibility library was not found.");this.j = a;a = b || {};this.hf = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.jf = a.secureTokenTimeout || gg;this.Pd = Sa(a.secureTokenHeaders || hg);this.we = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.xe = a.firebaseTimeout || ig;this.wd = Sa(a.firebaseHeaders || jg);c && (this.wd["X-Client-Version"] = c, this.Pd["X-Client-Version"] = c);this.ne = new Fc();this.zf = new fg(d);
    },
        kg,
        gg = new yf(3E4, 6E4),
        hg = { "Content-Type": "application/x-www-form-urlencoded" },
        ig = new yf(3E4, 6E4),
        jg = { "Content-Type": "application/json" },
        mg = function mg(a, b, c, d, e, f, g) {
      xf() ? (af() ? a = _r(a.lf, a) : (kg || (kg = new C(function (a, b) {
        lg(a, b);
      })), a = _r(a.kf, a)), a(b, c, d, e, f, g)) : c && c(null);
    };
    R.prototype.lf = function (a, b, c, d, e, f) {
      var g = "Node" == L(),
          k = mf() ? g ? new G(this.zf) : new G() : new G(this.ne),
          n;f && (k.kb = Math.max(0, f), n = setTimeout(function () {
        k.dispatchEvent("timeout");
      }, f));k.listen("complete", function () {
        n && clearTimeout(n);var a = null;try {
          a = JSON.parse(Ae(this)) || null;
        } catch (Wa) {
          a = null;
        }b && b(a);
      });bc(k, "ready", function () {
        n && clearTimeout(n);this.Aa || (this.Aa = !0, this.Ta());
      });bc(k, "timeout", function () {
        n && clearTimeout(n);this.Aa || (this.Aa = !0, this.Ta());b && b(null);
      });k.send(a, c, d, e);
    };
    var Dd = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        lg = function lg(a, b) {
      ((window.gapi || {}).client || {}).request ? a() : (l[Dd] = function () {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      }, Fd(function () {
        b(Error("CORS_UNSUPPORTED"));
      }));
    };
    R.prototype.kf = function (a, b, c, d, e) {
      var f = this;kg.then(function () {
        window.gapi.client.setApiKey(f.j);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function callback(a) {
            window.gapi.auth.setToken(g);b && b(a);
          } });
      }).c(function (a) {
        b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } });
      });
    };
    var og = function og(a, b) {
      return new C(function (c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? mg(a, a.hf + "?key=" + encodeURIComponent(a.j), function (a) {
          a ? a.error ? d(ng(a)) : a.access_token && a.refresh_token ? c(a) : d(new O("internal-error")) : d(new O("network-request-failed"));
        }, "POST", Ve(b).toString(), a.Pd, a.jf.get()) : d(new O("internal-error"));
      });
    },
        pg = function pg(a, b, c, d, e) {
      var f = Qe(a.we + b);J(f, "key", a.j);e && J(f, "cb", ka().toString());var g = "GET" == c;if (g) for (var k in d) {
        d.hasOwnProperty(k) && J(f, k, d[k]);
      }return new C(function (b, e) {
        mg(a, f.toString(), function (a) {
          a ? a.error ? e(ng(a)) : b(a) : e(new O("network-request-failed"));
        }, c, g ? void 0 : wc(tf(d)), a.wd, a.xe.get());
      });
    },
        qg = function qg(a) {
      if (!hc.test(a.email)) throw new O("invalid-email");
    },
        rg = function rg(a) {
      "email" in a && qg(a);
    },
        tg = function tg(a, b) {
      return Q(a, sg, { identifier: b, continueUri: of() ? Xe() : "http://localhost" }).then(function (a) {
        return a.allProviders || [];
      });
    },
        vg = function vg(a) {
      return Q(a, ug, {}).then(function (a) {
        return a.authorizedDomains || [];
      });
    },
        wg = function wg(a) {
      if (!a.idToken) throw new O("internal-error");
    };R.prototype.signInAnonymously = function () {
      return Q(this, xg, {});
    };R.prototype.updateEmail = function (a, b) {
      return Q(this, yg, { idToken: a, email: b });
    };R.prototype.updatePassword = function (a, b) {
      return Q(this, Zf, { idToken: a, password: b });
    };var zg = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };R.prototype.updateProfile = function (a, b) {
      var c = { idToken: a },
          d = [];Na(zg, function (a, f) {
        var e = b[f];null === e ? d.push(a) : f in b && (c[f] = e);
      });d.length && (c.deleteAttribute = d);return Q(this, yg, c);
    };
    R.prototype.sendPasswordResetEmail = function (a) {
      return Q(this, Ag, { requestType: "PASSWORD_RESET", email: a });
    };R.prototype.sendEmailVerification = function (a) {
      return Q(this, Bg, { requestType: "VERIFY_EMAIL", idToken: a });
    };
    var Dg = function Dg(a, b, c) {
      return Q(a, Cg, { idToken: b, deleteProvider: c });
    },
        Eg = function Eg(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody) throw new O("internal-error");
    },
        Fg = function Fg(a) {
      var b = null;a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = eg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = eg(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = eg(a));if (b) throw b;if (!a.idToken) throw new O("internal-error");
    },
        Pf = function Pf(a, b) {
      b.returnIdpCredential = !0;return Q(a, Gg, b);
    },
        Rf = function Rf(a, b) {
      b.returnIdpCredential = !0;return Q(a, Hg, b);
    },
        Ig = function Ig(a) {
      if (!a.oobCode) throw new O("invalid-action-code");
    };R.prototype.confirmPasswordReset = function (a, b) {
      return Q(this, Jg, { oobCode: a, newPassword: b });
    };R.prototype.checkActionCode = function (a) {
      return Q(this, Kg, { oobCode: a });
    };R.prototype.applyActionCode = function (a) {
      return Q(this, Lg, { oobCode: a });
    };
    var Lg = { endpoint: "setAccountInfo", K: Ig, jb: "email" },
        Kg = { endpoint: "resetPassword", K: Ig, va: function va(a) {
        if (!a.email || !a.requestType) throw new O("internal-error");
      } },
        Mg = { endpoint: "signupNewUser", K: function K(a) {
        qg(a);if (!a.password) throw new O("weak-password");
      }, va: wg, wa: !0 },
        sg = { endpoint: "createAuthUri" },
        Ng = { endpoint: "deleteAccount", ib: ["idToken"] },
        Cg = { endpoint: "setAccountInfo", ib: ["idToken", "deleteProvider"], K: function K(a) {
        if (!da(a.deleteProvider)) throw new O("internal-error");
      } },
        Og = { endpoint: "getAccountInfo" },
        Bg = { endpoint: "getOobConfirmationCode", ib: ["idToken", "requestType"], K: function K(a) {
        if ("VERIFY_EMAIL" != a.requestType) throw new O("internal-error");
      }, jb: "email" },
        Ag = { endpoint: "getOobConfirmationCode", ib: ["requestType"], K: function K(a) {
        if ("PASSWORD_RESET" != a.requestType) throw new O("internal-error");qg(a);
      }, jb: "email" },
        ug = { me: !0, endpoint: "getProjectConfig", Ie: "GET" },
        Jg = { endpoint: "resetPassword", K: Ig, jb: "email" },
        yg = { endpoint: "setAccountInfo", ib: ["idToken"], K: rg, wa: !0 },
        Zf = { endpoint: "setAccountInfo", ib: ["idToken"],
      K: function K(a) {
        rg(a);if (!a.password) throw new O("weak-password");
      }, va: wg, wa: !0 },
        xg = { endpoint: "signupNewUser", va: wg, wa: !0 },
        Gg = { endpoint: "verifyAssertion", K: Eg, va: Fg, wa: !0 },
        Hg = { endpoint: "verifyAssertion", K: function K(a) {
        Eg(a);if (!a.idToken) throw new O("internal-error");
      }, va: Fg, wa: !0 },
        Pg = { endpoint: "verifyCustomToken", K: function K(a) {
        if (!a.token) throw new O("invalid-custom-token");
      }, va: wg, wa: !0 },
        Yf = { endpoint: "verifyPassword", K: function K(a) {
        qg(a);if (!a.password) throw new O("wrong-password");
      }, va: wg, wa: !0 },
        Q = function Q(a, b, c) {
      if (!Df(c, b.ib)) return E(new O("internal-error"));var d = b.Ie || "POST",
          e;return D(c).then(b.K).then(function () {
        b.wa && (c.returnSecureToken = !0);return pg(a, b.endpoint, d, c, b.me || !1);
      }).then(function (a) {
        return e = a;
      }).then(b.va).then(function () {
        if (!b.jb) return e;if (!(b.jb in e)) throw new O("internal-error");return e[b.jb];
      });
    },
        ng = function ng(a) {
      var b, c;c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };if (c = d[c] ? new O(d[c]) : null) return c;c = a.error && a.error.message || "";d = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired",
        CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled" };b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;for (var e in d) {
        if (0 === c.indexOf(e)) return new O(d[e], b);
      }!b && a && (b = sf(a));return new O("internal-error", b);
    };var Qg = function Qg(a) {
      this.U = a;
    };Qg.prototype.value = function () {
      return this.U;
    };Qg.prototype.Sd = function (a) {
      this.U.style = a;return this;
    };var Rg = function Rg(a) {
      this.U = a || {};
    };Rg.prototype.value = function () {
      return this.U;
    };Rg.prototype.Sd = function (a) {
      this.U.style = a;return this;
    };var Tg = function Tg(a) {
      this.xf = a;this.ac = null;this.Uc = Sg(this);
    },
        Ug = function Ug(a) {
      var b = new Rg();b.U.where = document.body;b.U.url = a.xf;b.U.messageHandlersFilter = M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.U.attributes = b.U.attributes || {};new Qg(b.U.attributes).Sd({ position: "absolute", top: "-100px", width: "1px", height: "1px" });b.U.dontclear = !0;return b;
    },
        Sg = function Sg(a) {
      return Vg().then(function () {
        return new C(function (b, c) {
          M("gapi.iframes.getContext")().open(Ug(a).value(), function (d) {
            a.ac = d;a.ac.restyle({ setHideOnLeave: !1 });
            var e = setTimeout(function () {
              c(Error("Network Error"));
            }, Wg.get()),
                f = function f() {
              clearTimeout(e);b();
            };d.ping(f).then(f, function () {
              c(Error("Network Error"));
            });
          });
        });
      });
    };Tg.prototype.sendMessage = function (a) {
      var b = this;return this.Uc.then(function () {
        return new C(function (c) {
          b.ac.send(a.type, a, c, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    };
    var Xg = function Xg(a, b) {
      a.Uc.then(function () {
        a.ac.register("authEvent", b, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    },
        Yg = new yf(3E4, 6E4),
        Wg = new yf(5E3, 15E3),
        Vg = function Vg() {
      return new C(function (a, b) {
        if (xf()) {
          var c = function c() {
            wf();M("gapi.load")("gapi.iframes", { callback: a, ontimeout: function ontimeout() {
                wf();b(Error("Network Error"));
              }, timeout: Yg.get() });
          };if (M("gapi.iframes.Iframe")) a();else if (M("gapi.load")) c();else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();l[d] = function () {
              M("gapi.load") ? c() : b(Error("Network Error"));
            };D(Cd("https://apis.google.com/js/api.js?onload=" + d)).c(function () {
              b(Error("Network Error"));
            });
          }
        } else b(Error("Network Error"));
      });
    };var Zg = function Zg(a, b, c) {
      this.v = a;this.j = b;this.B = c;this.Ma = null;this.Mb = Re(this.v, "/__/auth/iframe");J(this.Mb, "apiKey", this.j);J(this.Mb, "appName", this.B);
    };Zg.prototype.setVersion = function (a) {
      this.Ma = a;return this;
    };Zg.prototype.toString = function () {
      this.Ma ? J(this.Mb, "v", this.Ma) : Pe(this.Mb, "v");return this.Mb.toString();
    };var ah = function ah(a, b, c, d, e) {
      this.v = a;this.j = b;this.B = c;this.le = d;this.Ma = this.F = this.ad = null;this.kc = e;
    };ah.prototype.setVersion = function (a) {
      this.Ma = a;return this;
    };
    ah.prototype.toString = function () {
      var a = Re(this.v, "/__/auth/handler");J(a, "apiKey", this.j);J(a, "appName", this.B);J(a, "authType", this.le);if (this.kc.isOAuthProvider) {
        J(a, "providerId", this.kc.providerId);var b = this.kc.Ce();b && b.length && J(a, "scopes", b.join(","));b = this.kc.Be();Qa(b) || J(a, "customParameters", sf(b));
      }this.ad ? J(a, "redirectUrl", this.ad) : Pe(a, "redirectUrl");this.F ? J(a, "eventId", this.F) : Pe(a, "eventId");this.Ma ? J(a, "v", this.Ma) : Pe(a, "v");if (this.Nb) for (var c in this.Nb) {
        this.Nb.hasOwnProperty(c) && !Oe(a, c) && J(a, c, this.Nb[c]);
      }return a.toString();
    };
    var bh = function bh(a, b, c, d) {
      this.v = a;this.j = b;this.B = c;this.ze = (this.za = d || null) ? nf(this.za) : null;d = this.za;this.Je = new Zg(a, b, c).setVersion(d).toString();this.ia = [];this.g = new R(b, null, this.ze);this.dc = this.ra = null;
    },
        ch = function ch(a) {
      var b = Xe();return vg(a).then(function (a) {
        a: {
          for (var c = Qe(b), e = c.da, c = c.$, f = 0; f < a.length; f++) {
            var g;var k = a[f];g = c;var n = e;0 == k.indexOf("chrome-extension://") ? g = Qe(k).$ == g && "chrome-extension" == n : "http" != n && "https" != n ? g = !1 : ff.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = new RegExp("^(.+\\." + k + "|" + k + ")$", "i").test(g));if (g) {
              a = !0;break a;
            }
          }a = !1;
        }if (!a) throw new Mf(Xe());
      });
    };h = bh.prototype;h.ub = function () {
      if (this.dc) return this.dc;var a = this;return this.dc = gf().then(function () {
        a.$b = new Tg(a.Je);dh(a);
      });
    };h.Hb = function (a, b, c) {
      var d = new O("popup-closed-by-user"),
          e = new O("web-storage-unsupported"),
          f = this,
          g = !1;return this.Da().then(function () {
        eh(f).then(function (c) {
          c || (a && cf(a), b(e), g = !0);
        });
      }).c(function () {}).then(function () {
        if (!g) return ef(a);
      }).then(function () {
        if (!g) return ke(c).then(function () {
          b(d);
        });
      });
    };
    h.Td = function () {
      var a = K();return !rf(a) && !vf(a);
    };h.Ad = function () {
      return !1;
    };h.Bb = function (a, b, c, d, e, f, g) {
      if (!a) return E(new O("popup-blocked"));if (g && !rf()) return this.Da().c(function (b) {
        cf(a);e(b);
      }), d(), D();this.ra || (this.ra = ch(this.g));var k = this;return this.ra.then(function () {
        var b = k.Da().c(function (b) {
          cf(a);e(b);throw b;
        });d();return b;
      }).then(function () {
        cg(c);if (!g) {
          var d = fh(k.v, k.j, k.B, b, c, null, f, k.za);Ye(d, a);
        }
      }).c(function (a) {
        "auth/network-request-failed" == a.code && (k.ra = null);throw a;
      });
    };
    h.Cb = function (a, b, c) {
      this.ra || (this.ra = ch(this.g));var d = this;return this.ra.then(function () {
        cg(b);var e = fh(d.v, d.j, d.B, a, b, Xe(), c, d.za);Ye(e);
      });
    };h.Da = function () {
      var a = this;return this.ub().then(function () {
        return a.$b.Uc;
      }).c(function () {
        a.ra = null;throw new O("network-request-failed");
      });
    };h.Wd = function () {
      return !0;
    };
    var fh = function fh(a, b, c, d, e, f, g, k, n) {
      a = new ah(a, b, c, d, e);a.ad = f;a.F = g;f = a.setVersion(k);f.Nb = Sa(n || null);return f.toString();
    },
        dh = function dh(a) {
      if (!a.$b) throw Error("IfcHandler must be initialized!");Xg(a.$b, function (b) {
        var c = {};if (b && b.authEvent) {
          var d = !1;b = Lf(b.authEvent);for (c = 0; c < a.ia.length; c++) {
            d = a.ia[c](b) || d;
          }c = {};c.status = d ? "ACK" : "ERROR";return D(c);
        }c.status = "ERROR";return D(c);
      });
    },
        eh = function eh(a) {
      var b = { type: "webStorageSupport" };return a.ub().then(function () {
        return a.$b.sendMessage(b);
      }).then(function (a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;throw Error();
      });
    };bh.prototype.Oa = function (a) {
      this.ia.push(a);
    };bh.prototype.Fb = function (a) {
      Ka(this.ia, function (b) {
        return b == a;
      });
    };var gh = function gh(a) {
      this.A = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.A) throw new O("internal-error", "The React Native compatibility library was not found.");
    };h = gh.prototype;h.get = function (a) {
      return D(this.A.getItem(a)).then(function (a) {
        return a && uf(a);
      });
    };h.set = function (a, b) {
      return D(this.A.setItem(a, sf(b)));
    };h.remove = function (a) {
      return D(this.A.removeItem(a));
    };h.Pa = function () {};h.Ja = function () {};var hh = function hh() {
      this.A = {};
    };h = hh.prototype;h.get = function (a) {
      return D(this.A[a]);
    };h.set = function (a, b) {
      this.A[a] = b;return D();
    };h.remove = function (a) {
      delete this.A[a];return D();
    };h.Pa = function () {};h.Ja = function () {};var jh = function jh() {
      if (!ih()) {
        if ("Node" == L()) throw new O("internal-error", "The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");
      }this.A = l.localStorage || firebase.INTERNAL.node.localStorage;
    },
        ih = function ih() {
      var a = "Node" == L(),
          a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = jh.prototype;
    h.get = function (a) {
      var b = this;return D().then(function () {
        var c = b.A.getItem(a);return uf(c);
      });
    };h.set = function (a, b) {
      var c = this;return D().then(function () {
        var d = sf(b);null === d ? c.remove(a) : c.A.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return D().then(function () {
        b.A.removeItem(a);
      });
    };h.Pa = function (a) {
      l.window && Ub(l.window, "storage", a);
    };h.Ja = function (a) {
      l.window && cc(l.window, "storage", a);
    };var kh = function kh() {
      this.A = {};
    };h = kh.prototype;h.get = function () {
      return D(null);
    };h.set = function () {
      return D();
    };h.remove = function () {
      return D();
    };h.Pa = function () {};h.Ja = function () {};var mh = function mh() {
      if (!lh()) {
        if ("Node" == L()) throw new O("internal-error", "The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");
      }this.A = l.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
        lh = function lh() {
      var a = "Node" == L(),
          a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = mh.prototype;
    h.get = function (a) {
      var b = this;return D().then(function () {
        var c = b.A.getItem(a);return uf(c);
      });
    };h.set = function (a, b) {
      var c = this;return D().then(function () {
        var d = sf(b);null === d ? c.remove(a) : c.A.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return D().then(function () {
        b.A.removeItem(a);
      });
    };h.Pa = function () {};h.Ja = function () {};var nh = function nh(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new O("web-storage-unsupported");this.pe = a;this.Tc = b;this.Gc = c;this.$d = d;this.nb = e;this.Y = {};this.Ib = [];this.xb = 0;this.Ke = f || l.indexedDB;
    },
        oh,
        ph = function ph(a) {
      return new C(function (b, c) {
        var d = a.Ke.open(a.pe, a.nb);d.onerror = function (a) {
          c(Error(a.target.errorCode));
        };d.onupgradeneeded = function (b) {
          b = b.target.result;try {
            b.createObjectStore(a.Tc, { keyPath: a.Gc });
          } catch (f) {
            c(f);
          }
        };d.onsuccess = function (a) {
          b(a.target.result);
        };
      });
    },
        qh = function qh(a) {
      a.Dd || (a.Dd = ph(a));return a.Dd;
    },
        rh = function rh(a, b) {
      return b.objectStore(a.Tc);
    },
        sh = function sh(a, b, c) {
      return b.transaction([a.Tc], c ? "readwrite" : "readonly");
    },
        th = function th(a) {
      return new C(function (b, c) {
        a.onsuccess = function (a) {
          a && a.target ? b(a.target.result) : b();
        };a.onerror = function (a) {
          c(Error(a.target.errorCode));
        };
      });
    };h = nh.prototype;
    h.set = function (a, b) {
      var c = !1,
          d,
          e = this;return ld(qh(this).then(function (b) {
        d = b;b = rh(e, sh(e, d, !0));return th(b.get(a));
      }).then(function (f) {
        var g = rh(e, sh(e, d, !0));if (f) return f.value = b, th(g.put(f));e.xb++;c = !0;f = {};f[e.Gc] = a;f[e.$d] = b;return th(g.add(f));
      }).then(function () {
        e.Y[a] = b;
      }), function () {
        c && e.xb--;
      });
    };h.get = function (a) {
      var b = this;return qh(this).then(function (c) {
        return th(rh(b, sh(b, c, !1)).get(a));
      }).then(function (a) {
        return a && a.value;
      });
    };
    h.remove = function (a) {
      var b = !1,
          c = this;return ld(qh(this).then(function (d) {
        b = !0;c.xb++;return th(rh(c, sh(c, d, !0))["delete"](a));
      }).then(function () {
        delete c.Y[a];
      }), function () {
        b && c.xb--;
      });
    };
    h.pf = function () {
      var a = this;return qh(this).then(function (b) {
        var c = rh(a, sh(a, b, !1));return c.getAll ? th(c.getAll()) : new C(function (a, b) {
          var d = [],
              e = c.openCursor();e.onsuccess = function (b) {
            (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
          };e.onerror = function (a) {
            b(Error(a.target.errorCode));
          };
        });
      }).then(function (b) {
        var c = {},
            d = [];if (0 == a.xb) {
          for (d = 0; d < b.length; d++) {
            c[b[d][a.Gc]] = b[d][a.$d];
          }d = Ze(a.Y, c);a.Y = c;
        }return d;
      });
    };h.Pa = function (a) {
      0 == this.Ib.length && this.gd();this.Ib.push(a);
    };
    h.Ja = function (a) {
      Ka(this.Ib, function (b) {
        return b == a;
      });0 == this.Ib.length && this.rc();
    };h.gd = function () {
      var a = this;this.rc();var b = function b() {
        a.Xc = ke(800).then(_r(a.pf, a)).then(function (b) {
          0 < b.length && x(a.Ib, function (a) {
            a(b);
          });
        }).then(b).c(function (a) {
          "STOP_EVENT" != a.message && b();
        });return a.Xc;
      };b();
    };h.rc = function () {
      this.Xc && this.Xc.cancel("STOP_EVENT");
    };var xh = function xh() {
      this.td = { Browser: uh, Node: vh, ReactNative: wh }[L()];
    },
        yh,
        uh = { I: jh, kd: mh },
        vh = { I: jh, kd: mh },
        wh = { I: gh, kd: kh };var zh = function zh(a) {
      var b = {},
          c = a.email,
          d = a.newEmail;a = a.requestType;if (!c || !a) throw Error("Invalid provider user info!");b.fromEmail = d || null;b.email = c;N(this, "operation", a);N(this, "data", Ef(b));
    };var Ah = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        S = function S(a, b) {
      return { name: a || "", fa: "a valid string", optional: !!b, ha: p };
    },
        T = function T(a) {
      return { name: a || "", fa: "a valid object", optional: !1, ha: ga };
    },
        Bh = function Bh(a, b) {
      return { name: a || "", fa: "a function", optional: !!b, ha: q };
    },
        Ch = function Ch() {
      return { name: "", fa: "null", optional: !1, ha: ca };
    },
        Dh = function Dh() {
      return { name: "credential", fa: "a valid credential", optional: !1, ha: function ha(a) {
          return !(!a || !a.Ub);
        } };
    },
        Eh = function Eh() {
      return { name: "authProvider",
        fa: "a valid Auth provider", optional: !1, ha: function ha(a) {
          return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
        } };
    },
        Fh = function Fh(a, b, c, d) {
      return { name: c || "", fa: a.fa + " or " + b.fa, optional: !!d, ha: function ha(c) {
          return a.ha(c) || b.ha(c);
        } };
    };var Hh = function Hh(a, b) {
      for (var c in b) {
        var d = b[c].name;a[d] = Gh(d, a[c], b[c].a);
      }
    },
        U = function U(a, b, c, d) {
      a[b] = Gh(b, c, d);
    },
        Gh = function Gh(a, b, c) {
      if (!c) return b;var d = Ih(a);a = function a() {
        var a = Array.prototype.slice.call(arguments),
            e;a: {
          e = Array.prototype.slice.call(a);var k;k = 0;for (var n = !1, y = 0; y < c.length; y++) {
            if (c[y].optional) n = !0;else {
              if (n) throw new O("internal-error", "Argument validator encountered a required argument after an optional argument.");k++;
            }
          }n = c.length;if (e.length < k || n < e.length) e = "Expected " + (k == n ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + n + " arguments") + " but got " + e.length + ".";else {
            for (k = 0; k < e.length; k++) {
              if (n = c[k].optional && void 0 === e[k], !c[k].ha(e[k]) && !n) {
                e = c[k];if (0 > k || k >= Ah.length) throw new O("internal-error", "Argument validator received an unsupported number of arguments.");e = Ah[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.fa + ".";break a;
              }
            }e = null;
          }
        }if (e) throw new O("argument-error", d + " failed: " + e);return b.apply(this, a);
      };for (var e in b) {
        a[e] = b[e];
      }for (e in b.prototype) {
        a.prototype[e] = b.prototype[e];
      }return a;
    },
        Ih = function Ih(a) {
      a = a.split(".");return a[a.length - 1];
    };var Jh = function Jh(a, b, c, d) {
      this.Xe = a;this.Qd = b;this.ff = c;this.Gb = d;this.S = {};yh || (yh = new xh());a = yh;try {
        var e;We() ? (oh || (oh = new nh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = oh) : e = new a.td.I();this.Ha = e;
      } catch (f) {
        this.Ha = new hh(), this.Gb = !0;
      }try {
        this.tc = new a.td.kd();
      } catch (f) {
        this.tc = new hh();
      }this.hd = _r(this.Ud, this);this.Y = {};
    },
        Kh,
        Lh = function Lh() {
      Kh || (Kh = new Jh("firebase", ":", !vf(K()) && lf() ? !0 : !1, rf()));return Kh;
    };h = Jh.prototype;
    h.P = function (a, b) {
      return this.Xe + this.Qd + a.name + (b ? this.Qd + b : "");
    };h.get = function (a, b) {
      return (a.I ? this.Ha : this.tc).get(this.P(a, b));
    };h.remove = function (a, b) {
      b = this.P(a, b);a.I && !this.Gb && (this.Y[b] = null);return (a.I ? this.Ha : this.tc).remove(b);
    };h.set = function (a, b, c) {
      var d = this.P(a, c),
          e = this,
          f = a.I ? this.Ha : this.tc;return f.set(d, b).then(function () {
        return f.get(d);
      }).then(function (b) {
        a.I && !this.Gb && (e.Y[d] = b);
      });
    };
    h.addListener = function (a, b, c) {
      a = this.P(a, b);this.Gb || (this.Y[a] = l.localStorage.getItem(a));Qa(this.S) && this.gd();this.S[a] || (this.S[a] = []);this.S[a].push(c);
    };h.removeListener = function (a, b, c) {
      a = this.P(a, b);this.S[a] && (Ka(this.S[a], function (a) {
        return a == c;
      }), 0 == this.S[a].length && delete this.S[a]);Qa(this.S) && this.rc();
    };h.gd = function () {
      this.Ha.Pa(this.hd);this.Gb || We() || Mh(this);
    };
    var Mh = function Mh(a) {
      Nh(a);a.Sc = setInterval(function () {
        for (var b in a.S) {
          var c = l.localStorage.getItem(b),
              d = a.Y[b];c != d && (a.Y[b] = c, c = new Jb({ type: "storage", key: b, target: window, oldValue: d, newValue: c, bf: !0 }), a.Ud(c));
        }
      }, 1E3);
    },
        Nh = function Nh(a) {
      a.Sc && (clearInterval(a.Sc), a.Sc = null);
    };Jh.prototype.rc = function () {
      this.Ha.Ja(this.hd);Nh(this);
    };
    Jh.prototype.Ud = function (a) {
      if (a && a.Ae) {
        var b = a.Ua.key;"undefined" !== typeof a.Ua.bf ? this.Ha.Ja(this.hd) : Nh(this);if (this.ff) {
          var c = l.localStorage.getItem(b);a = a.Ua.newValue;a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b));
        }this.Y[b] = l.localStorage.getItem(b);this.nd(b);
      } else x(a, _r(this.nd, this));
    };Jh.prototype.nd = function (a) {
      this.S[a] && x(this.S[a], function (a) {
        a();
      });
    };var Oh = function Oh(a, b) {
      this.u = a;this.i = b || Lh();
    },
        Ph = { name: "authEvent", I: !0 },
        Qh = function Qh(a) {
      return a.i.get(Ph, a.u).then(function (a) {
        return Lf(a);
      });
    };Oh.prototype.Oa = function (a) {
      this.i.addListener(Ph, this.u, a);
    };Oh.prototype.Fb = function (a) {
      this.i.removeListener(Ph, this.u, a);
    };var Rh = function Rh(a) {
      this.i = a || Lh();
    },
        Sh = { name: "sessionId", I: !1 };Rh.prototype.Vb = function (a) {
      return this.i.get(Sh, a);
    };var Th = function Th(a, b, c, d, e, f) {
      this.v = a;this.j = b;this.B = c;this.za = d || null;this.Vd = b + ":" + c;this.gf = new Rh();this.xd = new Oh(this.Vd);this.Oc = null;this.ia = [];this.Ne = e || 500;this.df = f || 2E3;this.tb = this.hc = null;
    },
        Uh = function Uh(a) {
      return new O("invalid-cordova-configuration", a);
    };
    Th.prototype.Da = function () {
      return this.Qc ? this.Qc : this.Qc = jf().then(function () {
        if ("function" !== typeof M("universalLinks.subscribe", l)) throw Uh("cordova-universal-links-plugin is not installed");if ("undefined" === typeof M("BuildInfo.packageName", l)) throw Uh("cordova-plugin-buildinfo is not installed");if ("function" !== typeof M("cordova.plugins.browsertab.openUrl", l)) throw Uh("cordova-plugin-browsertab is not installed");if ("function" !== typeof M("cordova.InAppBrowser.open", l)) throw Uh("cordova-plugin-inappbrowser is not installed");
      }, function () {
        throw new O("cordova-not-ready");
      });
    };var Vh = function Vh() {
      for (var a = 20, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }return b.join("");
    },
        Wh = function Wh(a) {
      var b = new Db();b.update(a);return ob(b.digest());
    };h = Th.prototype;h.Hb = function (a, b) {
      b(new O("operation-not-supported-in-this-environment"));return D();
    };h.Bb = function () {
      return E(new O("operation-not-supported-in-this-environment"));
    };h.Wd = function () {
      return !1;
    };h.Td = function () {
      return !0;
    };
    h.Ad = function () {
      return !0;
    };
    h.Cb = function (a, b, c) {
      if (this.hc) return E(new O("redirect-operation-pending"));var d = this,
          e = l.document,
          f = null,
          g = null,
          k = null,
          n = null;return this.hc = ld(D().then(function () {
        cg(b);return Xh(d);
      }).then(function () {
        return Yh(d, a, b, c);
      }).then(function () {
        return new C(function (a, b) {
          g = function g() {
            var b = M("cordova.plugins.browsertab.close", l);a();"function" === typeof b && b();d.tb && "function" === typeof d.tb.close && (d.tb.close(), d.tb = null);return !1;
          };d.Oa(g);k = function k() {
            f || (f = ke(d.df).then(function () {
              b(new O("redirect-cancelled-by-user"));
            }));
          };n = function n() {
            var a = l.document;(a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : 1) && k();
          };e.addEventListener("resume", k, !1);K().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
        }).c(function (a) {
          return Zh(d).then(function () {
            throw a;
          });
        });
      }), function () {
        k && e.removeEventListener("resume", k, !1);n && e.removeEventListener("visibilitychange", n, !1);f && f.cancel();g && d.Fb(g);d.hc = null;
      });
    };
    var Yh = function Yh(a, b, c, d) {
      var e = Vh(),
          f = new P(b, d, null, e, new O("no-auth-event")),
          g = M("BuildInfo.packageName", l);if ("string" !== typeof g) throw new O("invalid-cordova-configuration");var k = M("BuildInfo.displayName", l),
          n = {};if (K().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (K().toLowerCase().match(/android/)) n.apn = g;else return E(new O("operation-not-supported-in-this-environment"));k && (n.appDisplayName = k);e = Wh(e);n.sessionId = e;var y = fh(a.v, a.j, a.B, b, c, null, d, a.za, n);return a.Da().then(function () {
        var b = a.Vd;return a.gf.i.set(Ph, f.D(), b);
      }).then(function () {
        var b = M("cordova.plugins.browsertab.isAvailable", l);if ("function" !== typeof b) throw new O("invalid-cordova-configuration");var c = null;b(function (b) {
          if (b) {
            c = M("cordova.plugins.browsertab.openUrl", l);if ("function" !== typeof c) throw new O("invalid-cordova-configuration");c(y);
          } else {
            c = M("cordova.InAppBrowser.open", l);if ("function" !== typeof c) throw new O("invalid-cordova-configuration");b = c;var d;d = K();d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
            a.tb = b(y, d ? "_blank" : "_system", "location=yes");
          }
        });
      });
    },
        $h = function $h(a, b) {
      for (var c = 0; c < a.ia.length; c++) {
        try {
          a.ia[c](b);
        } catch (d) {}
      }
    },
        Xh = function Xh(a) {
      a.Oc || (a.Oc = a.Da().then(function () {
        return new C(function (b) {
          var c = function c(d) {
            b(d);a.Fb(c);return !1;
          };a.Oa(c);ai(a);
        });
      }));return a.Oc;
    },
        Zh = function Zh(a) {
      var b = null;return Qh(a.xd).then(function (c) {
        b = c;c = a.xd;return c.i.remove(Ph, c.u);
      }).then(function () {
        return b;
      });
    },
        ai = function ai(a) {
      var b = M("universalLinks.subscribe", l);if ("function" !== typeof b) throw new O("invalid-cordova-configuration");
      var c = new P("unknown", null, null, null, new O("no-auth-event")),
          d = !1,
          e = ke(a.Ne).then(function () {
        return Zh(a).then(function () {
          d || $h(a, c);
        });
      }),
          f = function f(b) {
        d = !0;e && e.cancel();Zh(a).then(function (d) {
          var e = c;if (d && b && b.url) {
            var e = null,
                f;f = b.url;var g = Qe(f),
                k = Oe(g, "link"),
                n = Oe(Qe(k), "link"),
                g = Oe(g, "deep_link_id");f = Oe(Qe(g), "link") || g || n || k || f;-1 != f.indexOf("/__/auth/callback") && (e = Qe(f), e = uf(Oe(e, "error") || null), e = (e = "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) ? Kf(e) : null) ? new P(d.ga, d.F, null, null, e) : new P(d.ga, d.F, f, d.Vb()));e = e || c;
          }$h(a, e);
        });
      },
          g = l.handleOpenURL;l.handleOpenURL = function (a) {
        0 == a.indexOf(M("BuildInfo.packageName", l) + "://") && f({ url: a });if ("function" === typeof g) try {
          g(a);
        } catch (n) {
          console.error(n);
        }
      };b(null, f);
    };Th.prototype.Oa = function (a) {
      this.ia.push(a);Xh(this).c(function () {});
    };Th.prototype.Fb = function (a) {
      Ka(this.ia, function (b) {
        return b == a;
      });
    };var bi = function bi(a) {
      this.u = a;this.i = Lh();
    },
        ci = { name: "pendingRedirect", I: !1 },
        di = function di(a) {
      return a.i.set(ci, "pending", a.u);
    },
        ei = function ei(a) {
      return a.i.remove(ci, a.u);
    },
        fi = function fi(a) {
      return a.i.get(ci, a.u).then(function (a) {
        return "pending" == a;
      });
    };var V = function V(a, b, c) {
      this.v = a;this.j = b;this.B = c;this.Jb = [];this.Za = !1;this.Cc = _r(this.Mc, this);this.cb = new gi(this);this.Kd = new hi(this);this.yb = new bi(this.j + ":" + this.B);this.lb = {};this.lb.unknown = this.cb;this.lb.signInViaRedirect = this.cb;this.lb.linkViaRedirect = this.cb;this.lb.signInViaPopup = this.Kd;this.lb.linkViaPopup = this.Kd;this.G = ii(this.v, this.j, this.B);
    },
        ii = function ii(a, b, c) {
      var d = firebase.SDK_VERSION || null;return hf() ? new Th(a, b, c, d) : new bh(a, b, c, d);
    };
    V.prototype.reset = function () {
      this.Za = !1;this.G.Fb(this.Cc);this.G = ii(this.v, this.j, this.B);
    };V.prototype.ub = function () {
      var a = this;this.Za || (this.Za = !0, this.G.Oa(this.Cc));var b = this.G;return this.G.Da().c(function (c) {
        a.G == b && a.reset();throw c;
      });
    };var li = function li(a) {
      a.G.Td() && a.ub().c(function (b) {
        var c = new P("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));ji(b) && a.Mc(c);
      });a.G.Ad() || ki(a.cb);
    };
    V.prototype.subscribe = function (a) {
      Ha(this.Jb, a) || this.Jb.push(a);if (!this.Za) {
        var b = this;fi(this.yb).then(function (a) {
          a ? ei(b.yb).then(function () {
            b.ub().c(function (a) {
              var c = new P("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));ji(a) && b.Mc(c);
            });
          }) : li(b);
        }).c(function () {
          li(b);
        });
      }
    };V.prototype.unsubscribe = function (a) {
      Ka(this.Jb, function (b) {
        return b == a;
      });
    };
    V.prototype.Mc = function (a) {
      if (!a) throw new O("invalid-auth-event");for (var b = !1, c = 0; c < this.Jb.length; c++) {
        var d = this.Jb[c];if (d.od(a.ga, a.F)) {
          (b = this.lb[a.ga]) && b.Ld(a, d);b = !0;break;
        }
      }ki(this.cb);return b;
    };var mi = new yf(2E3, 1E4),
        ni = new yf(3E4, 6E4);V.prototype.getRedirectResult = function () {
      return this.cb.getRedirectResult();
    };V.prototype.Bb = function (a, b, c, d, e) {
      var f = this;return this.G.Bb(a, b, c, function () {
        f.Za || (f.Za = !0, f.G.Oa(f.Cc));
      }, function () {
        f.reset();
      }, d, e);
    };
    var ji = function ji(a) {
      return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
    };V.prototype.Cb = function (a, b, c) {
      var d = this,
          e;return di(this.yb).then(function () {
        return d.G.Cb(a, b, c).c(function (a) {
          if (ji(a)) throw new O("operation-not-supported-in-this-environment");e = a;return ei(d.yb).then(function () {
            throw e;
          });
        }).then(function () {
          return d.G.Wd() ? new C(function () {}) : ei(d.yb).then(function () {
            return d.getRedirectResult();
          }).then(function () {}).c(function () {});
        });
      });
    };
    V.prototype.Hb = function (a, b, c, d) {
      return this.G.Hb(c, function (c) {
        a.Ka(b, null, c, d);
      }, mi.get());
    };var oi = {},
        pi = function pi(a, b, c) {
      var d = b + ":" + c;oi[d] || (oi[d] = new V(a, b, c));return oi[d];
    },
        gi = function gi(a) {
      this.i = a;this.gb = null;this.Eb = [];this.Db = [];this.eb = null;this.$c = !1;
    };gi.prototype.reset = function () {
      this.gb = null;this.eb && (this.eb.cancel(), this.eb = null);
    };
    gi.prototype.Ld = function (a, b) {
      if (!a) return E(new O("invalid-auth-event"));this.reset();this.$c = !0;var c = a.ga,
          d = a.F,
          e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
          f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;"unknown" != c || e || f ? a = a.O ? this.Yc(a, b) : b.qb(c, d) ? this.Zc(a, b) : E(new O("invalid-auth-event")) : (qi(this, !1, null, null), a = D());return a;
    };var ki = function ki(a) {
      a.$c || (a.$c = !0, qi(a, !1, null, null));
    };
    gi.prototype.Yc = function (a) {
      qi(this, !0, null, a.getError());return D();
    };gi.prototype.Zc = function (a, b) {
      var c = this,
          d = a.ga;b = b.qb(d, a.F);var e = a.mb;a = a.Vb();var f = "signInViaRedirect" == d || "linkViaRedirect" == d;return b(e, a).then(function (a) {
        qi(c, f, a, null);
      }).c(function (a) {
        qi(c, f, null, a);
      });
    };
    var ri = function ri(a, b) {
      a.gb = function () {
        return E(b);
      };if (a.Db.length) for (var c = 0; c < a.Db.length; c++) {
        a.Db[c](b);
      }
    },
        si = function si(a, b) {
      a.gb = function () {
        return D(b);
      };if (a.Eb.length) for (var c = 0; c < a.Eb.length; c++) {
        a.Eb[c](b);
      }
    },
        qi = function qi(a, b, c, d) {
      b ? d ? ri(a, d) : si(a, c) : si(a, { user: null });a.Eb = [];a.Db = [];
    };gi.prototype.getRedirectResult = function () {
      var a = this;return new C(function (b, c) {
        a.gb ? a.gb().then(b, c) : (a.Eb.push(b), a.Db.push(c), ti(a));
      });
    };
    var ti = function ti(a) {
      var b = new O("timeout");a.eb && a.eb.cancel();a.eb = ke(ni.get()).then(function () {
        a.gb || qi(a, !0, null, b);
      });
    },
        hi = function hi(a) {
      this.i = a;
    };hi.prototype.Ld = function (a, b) {
      if (!a) return E(new O("invalid-auth-event"));var c = a.ga,
          d = a.F;return a.O ? this.Yc(a, b) : b.qb(c, d) ? this.Zc(a, b) : E(new O("invalid-auth-event"));
    };hi.prototype.Yc = function (a, b) {
      b.Ka(a.ga, null, a.getError(), a.F);return D();
    };
    hi.prototype.Zc = function (a, b) {
      var c = a.F,
          d = a.ga,
          e = b.qb(d, c),
          f = a.mb;a = a.Vb();return e(f, a).then(function (a) {
        b.Ka(d, a, null, c);
      }).c(function (a) {
        b.Ka(d, null, a, c);
      });
    };var ui = function ui(a) {
      this.g = a;this.xa = this.W = null;this.Va = 0;
    };ui.prototype.D = function () {
      return { apiKey: this.g.j, refreshToken: this.W, accessToken: this.xa, expirationTime: this.Va };
    };
    var wi = function wi(a, b) {
      var c = b.idToken,
          d = b.refreshToken;b = vi(b.expiresIn);a.xa = c;a.Va = b;a.W = d;
    },
        vi = function vi(a) {
      return ka() + 1E3 * parseInt(a, 10);
    },
        xi = function xi(a, b) {
      return og(a.g, b).then(function (b) {
        a.xa = b.access_token;a.Va = vi(b.expires_in);a.W = b.refresh_token;return { accessToken: a.xa, expirationTime: a.Va, refreshToken: a.W };
      }).c(function (b) {
        "auth/user-token-expired" == b.code && (a.W = null);throw b;
      });
    },
        yi = function yi(a) {
      return !(!a.xa || a.W);
    };
    ui.prototype.getToken = function (a) {
      a = !!a;return yi(this) ? E(new O("user-token-expired")) : a || !this.xa || ka() > this.Va - 3E4 ? this.W ? xi(this, { grant_type: "refresh_token", refresh_token: this.W }) : D(null) : D({ accessToken: this.xa, expirationTime: this.Va, refreshToken: this.W });
    };var zi = function zi(a, b, c, d, e) {
      Bf(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, providerId: b });
    },
        Ai = function Ai(a, b) {
      Ib.call(this, a);for (var c in b) {
        this[c] = b[c];
      }
    };t(Ai, Ib);
    var W = function W(a, b, c) {
      this.Z = [];this.j = a.apiKey;this.B = a.appName;this.v = a.authDomain || null;a = firebase.SDK_VERSION ? nf(firebase.SDK_VERSION) : null;this.g = new R(this.j, null, a);this.ea = new ui(this.g);Bi(this, b.idToken);wi(this.ea, b);N(this, "refreshToken", this.ea.W);Ci(this, c || {});Od.call(this);this.ic = !1;this.v && qf() && (this.m = pi(this.v, this.j, this.B));this.qc = [];this.Bc = D();
    };t(W, Od);
    W.prototype.ta = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1),
          d = this;return this.Bc = this.Bc.then(function () {
        return a.apply(d, c);
      }, function () {
        return a.apply(d, c);
      });
    };
    var Bi = function Bi(a, b) {
      a.Ed = b;N(a, "_lat", b);
    },
        Di = function Di(a, b) {
      Ka(a.qc, function (a) {
        return a == b;
      });
    },
        Ei = function Ei(a) {
      for (var b = [], c = 0; c < a.qc.length; c++) {
        b.push(a.qc[c](a));
      }return id(b).then(function () {
        return a;
      });
    },
        Fi = function Fi(a) {
      a.m && !a.ic && (a.ic = !0, a.m.subscribe(a));
    },
        Ci = function Ci(a, b) {
      Bf(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, isAnonymous: b.isAnonymous || !1, providerData: [] });
    };N(W.prototype, "providerId", "firebase");
    var Gi = function Gi() {},
        Hi = function Hi(a) {
      return D().then(function () {
        if (a.re) throw new O("app-deleted");
      });
    },
        Ii = function Ii(a) {
      return Da(a.providerData, function (a) {
        return a.providerId;
      });
    },
        Ki = function Ki(a, b) {
      b && (Ji(a, b.providerId), a.providerData.push(b));
    },
        Ji = function Ji(a, b) {
      Ka(a.providerData, function (a) {
        return a.providerId == b;
      });
    },
        Li = function Li(a, b, c) {
      ("uid" != b || c) && a.hasOwnProperty(b) && N(a, b, c);
    };
    W.prototype.copy = function (a) {
      var b = this;b != a && (Bf(this, { uid: a.uid, displayName: a.displayName, photoURL: a.photoURL, email: a.email, emailVerified: a.emailVerified, isAnonymous: a.isAnonymous, providerData: [] }), x(a.providerData, function (a) {
        Ki(b, a);
      }), this.ea = a.ea, N(this, "refreshToken", this.ea.W));
    };W.prototype.reload = function () {
      var a = this;return Hi(this).then(function () {
        return Mi(a).then(function () {
          return Ei(a);
        }).then(Gi);
      });
    };
    var Mi = function Mi(a) {
      return a.getToken().then(function (b) {
        var c = a.isAnonymous;return Ni(a, b).then(function () {
          c || Li(a, "isAnonymous", !1);return b;
        }).c(function (b) {
          "auth/user-token-expired" == b.code && (a.dispatchEvent(new Ai("userDeleted")), Oi(a));throw b;
        });
      });
    };
    W.prototype.getToken = function (a) {
      var b = this,
          c = yi(this.ea);return Hi(this).then(function () {
        return b.ea.getToken(a);
      }).then(function (a) {
        if (!a) throw new O("internal-error");a.accessToken != b.Ed && (Bi(b, a.accessToken), b.Ea());Li(b, "refreshToken", a.refreshToken);return a.accessToken;
      }).c(function (a) {
        if ("auth/user-token-expired" == a.code && !c) return Ei(b).then(function () {
          Li(b, "refreshToken", null);throw a;
        });throw a;
      });
    };
    var Pi = function Pi(a, b) {
      b.idToken && a.Ed != b.idToken && (wi(a.ea, b), a.Ea(), Bi(a, b.idToken), Li(a, "refreshToken", a.ea.W));
    };W.prototype.Ea = function () {
      this.dispatchEvent(new Ai("tokenChanged"));
    };var Ni = function Ni(a, b) {
      return Q(a.g, Og, { idToken: b }).then(_r(a.af, a));
    };
    W.prototype.af = function (a) {
      a = a.users;if (!a || !a.length) throw new O("internal-error");a = a[0];Ci(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified });for (var b = Qi(a), c = 0; c < b.length; c++) {
        Ki(this, b[c]);
      }Li(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    };
    var Qi = function Qi(a) {
      return (a = a.providerUserInfo) && a.length ? Da(a, function (a) {
        return new zi(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
      }) : [];
    };
    W.prototype.reauthenticate = function (a) {
      var b = this;return this.f(a.Ub(this.g).then(function (a) {
        var c;a: {
          var e = a.idToken.split(".");if (3 == e.length) {
            for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++) {
              e += ".";
            }try {
              var k = JSON.parse(sb(e));if (k.sub && k.iss && k.aud && k.exp) {
                c = new Nf(k);break a;
              }
            } catch (n) {}
          }c = null;
        }if (!c || b.uid != c.Te) throw new O("user-mismatch");Pi(b, a);return b.reload();
      }));
    };
    var Ri = function Ri(a, b) {
      return Mi(a).then(function () {
        if (Ha(Ii(a), b)) return Ei(a).then(function () {
          throw new O("provider-already-linked");
        });
      });
    };h = W.prototype;h.Re = function (a) {
      var b = this;return this.f(Ri(this, a.provider).then(function () {
        return b.getToken();
      }).then(function (c) {
        return a.Gd(b.g, c);
      }).then(_r(this.vd, this)));
    };h.link = function (a) {
      return this.ta(this.Re, a);
    };h.vd = function (a) {
      Pi(this, a);var b = this;return this.reload().then(function () {
        return b;
      });
    };
    h.uf = function (a) {
      var b = this;return this.f(this.getToken().then(function (c) {
        return b.g.updateEmail(c, a);
      }).then(function (a) {
        Pi(b, a);return b.reload();
      }));
    };h.updateEmail = function (a) {
      return this.ta(this.uf, a);
    };h.vf = function (a) {
      var b = this;return this.f(this.getToken().then(function (c) {
        return b.g.updatePassword(c, a);
      }).then(function (a) {
        Pi(b, a);return b.reload();
      }));
    };h.updatePassword = function (a) {
      return this.ta(this.vf, a);
    };
    h.wf = function (a) {
      if (void 0 === a.displayName && void 0 === a.photoURL) return Hi(this);var b = this;return this.f(this.getToken().then(function (c) {
        return b.g.updateProfile(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function (a) {
        Pi(b, a);Li(b, "displayName", a.displayName || null);Li(b, "photoURL", a.photoUrl || null);return Ei(b);
      }).then(Gi));
    };h.updateProfile = function (a) {
      return this.ta(this.wf, a);
    };
    h.tf = function (a) {
      var b = this;return this.f(Mi(this).then(function (c) {
        return Ha(Ii(b), a) ? Dg(b.g, c, [a]).then(function (a) {
          var c = {};x(a.providerUserInfo || [], function (a) {
            c[a.providerId] = !0;
          });x(Ii(b), function (a) {
            c[a] || Ji(b, a);
          });return Ei(b);
        }) : Ei(b).then(function () {
          throw new O("no-such-provider");
        });
      }));
    };h.unlink = function (a) {
      return this.ta(this.tf, a);
    };h.qe = function () {
      var a = this;return this.f(this.getToken().then(function (b) {
        return Q(a.g, Ng, { idToken: b });
      }).then(function () {
        a.dispatchEvent(new Ai("userDeleted"));
      })).then(function () {
        Oi(a);
      });
    };
    h["delete"] = function () {
      return this.ta(this.qe);
    };h.od = function (a, b) {
      return "linkViaPopup" == a && (this.la || null) == b && this.ca || "linkViaRedirect" == a && (this.mc || null) == b ? !0 : !1;
    };h.Ka = function (a, b, c, d) {
      "linkViaPopup" == a && d == (this.la || null) && (c && this.Ga ? this.Ga(c) : b && !c && this.ca && this.ca(b), this.J && (this.J.cancel(), this.J = null), delete this.ca, delete this.Ga);
    };h.qb = function (a, b) {
      return "linkViaPopup" == a && b == (this.la || null) || "linkViaRedirect" == a && (this.mc || null) == b ? _r(this.ue, this) : null;
    };
    h.Tb = function () {
      return pf(this.uid + ":::");
    };
    var Ti = function Ti(a, b) {
      if (!qf()) return E(new O("operation-not-supported-in-this-environment"));var c = Hf(b.providerId),
          d = a.Tb(),
          e = null;(!rf() || lf()) && a.v && b.isOAuthProvider && (e = fh(a.v, a.j, a.B, "linkViaPopup", b, null, d, firebase.SDK_VERSION || null));var f = df(e, c && c.Ab, c && c.zb),
          c = Ri(a, b.providerId).then(function () {
        return Ei(a);
      }).then(function () {
        Si(a);return a.getToken();
      }).then(function () {
        return a.m.Bb(f, "linkViaPopup", b, d, !!e);
      }).then(function () {
        return new C(function (b, c) {
          a.Ka("linkViaPopup", null, new O("cancelled-popup-request"), a.la || null);a.ca = b;a.Ga = c;a.la = d;a.J = a.m.Hb(a, "linkViaPopup", f, d);
        });
      }).then(function (a) {
        f && cf(f);return a;
      }).c(function (a) {
        f && cf(f);throw a;
      });return a.f(c);
    };W.prototype.linkWithPopup = function (a) {
      var b = Ti(this, a);return this.ta(function () {
        return b;
      });
    };
    W.prototype.Se = function (a) {
      if (!qf()) return E(new O("operation-not-supported-in-this-environment"));var b = this,
          c = null,
          d = this.Tb(),
          e = Ri(this, a.providerId).then(function () {
        Si(b);return b.getToken();
      }).then(function () {
        b.mc = d;return Ei(b);
      }).then(function (a) {
        b.Ia && (a = b.Ia, a = a.i.set(Ui, b.D(), a.u));return a;
      }).then(function () {
        return b.m.Cb("linkViaRedirect", a, d);
      }).c(function (a) {
        c = a;if (b.Ia) return Vi(b.Ia);throw c;
      }).then(function () {
        if (c) throw c;
      });return this.f(e);
    };
    W.prototype.linkWithRedirect = function (a) {
      return this.ta(this.Se, a);
    };var Si = function Si(a) {
      if (!a.m || !a.ic) {
        if (a.m && !a.ic) throw new O("internal-error");throw new O("auth-domain-config-required");
      }
    };W.prototype.ue = function (a, b) {
      var c = this;this.J && (this.J.cancel(), this.J = null);var d = null,
          e = this.getToken().then(function (d) {
        return Rf(c.g, { requestUri: a, sessionId: b, idToken: d });
      }).then(function (a) {
        d = bg(a);return c.vd(a);
      }).then(function (a) {
        return { user: a, credential: d };
      });return this.f(e);
    };
    W.prototype.sendEmailVerification = function () {
      var a = this;return this.f(this.getToken().then(function (b) {
        return a.g.sendEmailVerification(b);
      }).then(function (b) {
        if (a.email != b) return a.reload();
      }).then(function () {}));
    };var Oi = function Oi(a) {
      for (var b = 0; b < a.Z.length; b++) {
        a.Z[b].cancel("app-deleted");
      }a.Z = [];a.re = !0;N(a, "refreshToken", null);a.m && a.m.unsubscribe(a);
    };W.prototype.f = function (a) {
      var b = this;this.Z.push(a);ld(a, function () {
        Ja(b.Z, a);
      });return a;
    };W.prototype.toJSON = function () {
      return this.D();
    };
    W.prototype.D = function () {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.j, appName: this.B, authDomain: this.v, stsTokenManager: this.ea.D(), redirectEventId: this.mc || null };x(this.providerData, function (b) {
        a.providerData.push(Cf(b));
      });return a;
    };
    var Wi = function Wi(a) {
      if (!a.apiKey) return null;var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
          c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - ka()) / 1E3;else return null;var d = new W(b, c, a);a.providerData && x(a.providerData, function (a) {
        if (a) {
          var b = {};Bf(b, a);Ki(d, b);
        }
      });a.redirectEventId && (d.mc = a.redirectEventId);
      return d;
    },
        Xi = function Xi(a, b, c) {
      var d = new W(a, b);c && (d.Ia = c);return d.reload().then(function () {
        return d;
      });
    };var Yi = function Yi(a) {
      this.u = a;this.i = Lh();
    },
        Ui = { name: "redirectUser", I: !1 },
        Vi = function Vi(a) {
      return a.i.remove(Ui, a.u);
    },
        Zi = function Zi(a, b) {
      return a.i.get(Ui, a.u).then(function (a) {
        a && b && (a.authDomain = b);return Wi(a || {});
      });
    };var $i = function $i(a) {
      this.u = a;this.i = Lh();
    },
        aj = { name: "authUser", I: !0 },
        bj = function bj(a, b) {
      return a.i.set(aj, b.D(), a.u);
    },
        cj = function cj(a) {
      return a.i.remove(aj, a.u);
    },
        dj = function dj(a, b) {
      return a.i.get(aj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return Wi(a || {});
      });
    };var Y = function Y(a) {
      this.Sa = !1;N(this, "app", a);if (X(this).options && X(this).options.apiKey) a = firebase.SDK_VERSION ? nf(firebase.SDK_VERSION) : null, this.g = new R(X(this).options && X(this).options.apiKey, null, a);else throw new O("invalid-api-key");this.Z = [];this.Qa = [];this.Ze = firebase.INTERNAL.createSubscribe(_r(this.Le, this));ej(this, null);this.oa = new $i(X(this).options.apiKey + ":" + X(this).name);this.fb = new Yi(X(this).options.apiKey + ":" + X(this).name);this.Ob = this.f(fj(this));this.ua = this.f(gj(this));this.Rc = !1;this.Lc = _r(this.nf, this);this.Yd = _r(this.Xa, this);this.Zd = _r(this.He, this);this.Xd = _r(this.Ge, this);hj(this);this.INTERNAL = {};this.INTERNAL["delete"] = _r(this["delete"], this);
    };Y.prototype.toJSON = function () {
      return { apiKey: X(this).options.apiKey, authDomain: X(this).options.authDomain, appName: X(this).name, currentUser: Z(this) && Z(this).D() };
    };
    var ij = function ij(a) {
      return a.se || E(new O("auth-domain-config-required"));
    },
        hj = function hj(a) {
      var b = X(a).options.authDomain,
          c = X(a).options.apiKey;b && qf() && (a.se = a.Ob.then(function () {
        if (!a.Sa) return a.m = pi(b, c, X(a).name), a.m.subscribe(a), Z(a) && Fi(Z(a)), a.bd && (Fi(a.bd), a.bd = null), a.m;
      }));
    };h = Y.prototype;h.od = function (a, b) {
      switch (a) {case "unknown":case "signInViaRedirect":
          return !0;case "signInViaPopup":
          return this.la == b && !!this.ca;default:
          return !1;}
    };
    h.Ka = function (a, b, c, d) {
      "signInViaPopup" == a && this.la == d && (c && this.Ga ? this.Ga(c) : b && !c && this.ca && this.ca(b), this.J && (this.J.cancel(), this.J = null), delete this.ca, delete this.Ga);
    };h.qb = function (a, b) {
      return "signInViaRedirect" == a || "signInViaPopup" == a && this.la == b && this.ca ? _r(this.ve, this) : null;
    };
    h.ve = function (a, b) {
      var c = this;a = { requestUri: a, sessionId: b };this.J && (this.J.cancel(), this.J = null);var d = null,
          e = Pf(c.g, a).then(function (a) {
        d = bg(a);return a;
      });a = c.Ob.then(function () {
        return e;
      }).then(function (a) {
        return jj(c, a);
      }).then(function () {
        return { user: Z(c), credential: d };
      });return this.f(a);
    };h.Tb = function () {
      return pf();
    };
    h.signInWithPopup = function (a) {
      if (!qf()) return E(new O("operation-not-supported-in-this-environment"));var b = this,
          c = Hf(a.providerId),
          d = this.Tb(),
          e = null;(!rf() || lf()) && X(this).options.authDomain && a.isOAuthProvider && (e = fh(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));var f = df(e, c && c.Ab, c && c.zb),
          c = ij(this).then(function (b) {
        return b.Bb(f, "signInViaPopup", a, d, !!e);
      }).then(function () {
        return new C(function (a, c) {
          b.Ka("signInViaPopup", null, new O("cancelled-popup-request"), b.la);b.ca = a;b.Ga = c;b.la = d;b.J = b.m.Hb(b, "signInViaPopup", f, d);
        });
      }).then(function (a) {
        f && cf(f);return a;
      }).c(function (a) {
        f && cf(f);throw a;
      });return this.f(c);
    };h.signInWithRedirect = function (a) {
      if (!qf()) return E(new O("operation-not-supported-in-this-environment"));var b = this,
          c = ij(this).then(function () {
        return b.m.Cb("signInViaRedirect", a);
      });return this.f(c);
    };
    h.getRedirectResult = function () {
      if (!qf()) return E(new O("operation-not-supported-in-this-environment"));var a = this,
          b = ij(this).then(function () {
        return a.m.getRedirectResult();
      });return this.f(b);
    };
    var jj = function jj(a, b) {
      var c = {};c.apiKey = X(a).options.apiKey;c.authDomain = X(a).options.authDomain;c.appName = X(a).name;return a.Ob.then(function () {
        return Xi(c, b, a.fb);
      }).then(function (b) {
        if (Z(a) && b.uid == Z(a).uid) return Z(a).copy(b), a.Xa(b);ej(a, b);Fi(b);return a.Xa(b);
      }).then(function () {
        a.Ea();
      });
    },
        ej = function ej(a, b) {
      Z(a) && (Di(Z(a), a.Yd), cc(Z(a), "tokenChanged", a.Zd), cc(Z(a), "userDeleted", a.Xd));b && (b.qc.push(a.Yd), Ub(b, "tokenChanged", a.Zd), Ub(b, "userDeleted", a.Xd));N(a, "currentUser", b);
    };
    Y.prototype.signOut = function () {
      var a = this,
          b = this.ua.then(function () {
        if (!Z(a)) return D();ej(a, null);return cj(a.oa).then(function () {
          a.Ea();
        });
      });return this.f(b);
    };
    var kj = function kj(a) {
      var b = Zi(a.fb, X(a).options.authDomain).then(function (b) {
        if (a.bd = b) b.Ia = a.fb;return Vi(a.fb);
      });return a.f(b);
    },
        fj = function fj(a) {
      var b = X(a).options.authDomain,
          c = kj(a).then(function () {
        return dj(a.oa, b);
      }).then(function (b) {
        return b ? (b.Ia = a.fb, b.reload().then(function () {
          return bj(a.oa, b).then(function () {
            return b;
          });
        }).c(function (c) {
          return "auth/network-request-failed" == c.code ? b : cj(a.oa);
        })) : null;
      }).then(function (b) {
        ej(a, b || null);
      });return a.f(c);
    },
        gj = function gj(a) {
      return a.Ob.then(function () {
        return a.getRedirectResult();
      }).c(function () {}).then(function () {
        if (!a.Sa) return a.Lc();
      }).c(function () {}).then(function () {
        if (!a.Sa) {
          a.Rc = !0;var b = a.oa;b.i.addListener(aj, b.u, a.Lc);
        }
      });
    };Y.prototype.nf = function () {
      var a = this;return dj(this.oa, X(this).options.authDomain).then(function (b) {
        if (!a.Sa) {
          var c;if (c = Z(a) && b) {
            c = Z(a).uid;var d = b.uid;c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
          }if (c) return Z(a).copy(b), Z(a).getToken();if (Z(a) || b) ej(a, b), b && (Fi(b), b.Ia = a.fb), a.m && a.m.subscribe(a), a.Ea();
        }
      });
    };Y.prototype.Xa = function (a) {
      return bj(this.oa, a);
    };Y.prototype.He = function () {
      this.Ea();this.Xa(Z(this));
    };
    Y.prototype.Ge = function () {
      this.signOut();
    };var lj = function lj(a, b) {
      return a.f(b.then(function (b) {
        return jj(a, b);
      }).then(function () {
        return Z(a);
      }));
    };h = Y.prototype;h.Le = function (a) {
      var b = this;this.addAuthTokenListener(function () {
        a.next(Z(b));
      });
    };h.onAuthStateChanged = function (a, b, c) {
      var d = this;this.Rc && firebase.Promise.resolve().then(function () {
        q(a) ? a(Z(d)) : q(a.next) && a.next(Z(d));
      });return this.Ze(a, b, c);
    };
    h.getToken = function (a) {
      var b = this,
          c = this.ua.then(function () {
        return Z(b) ? Z(b).getToken(a).then(function (a) {
          return { accessToken: a };
        }) : null;
      });return this.f(c);
    };h.signInWithCustomToken = function (a) {
      var b = this;return this.ua.then(function () {
        return lj(b, Q(b.g, Pg, { token: a }));
      }).then(function (a) {
        Li(a, "isAnonymous", !1);return b.Xa(a);
      }).then(function () {
        return Z(b);
      });
    };h.signInWithEmailAndPassword = function (a, b) {
      var c = this;return this.ua.then(function () {
        return lj(c, Q(c.g, Yf, { email: a, password: b }));
      });
    };
    h.createUserWithEmailAndPassword = function (a, b) {
      var c = this;return this.ua.then(function () {
        return lj(c, Q(c.g, Mg, { email: a, password: b }));
      });
    };h.signInWithCredential = function (a) {
      var b = this;return this.ua.then(function () {
        return lj(b, a.Ub(b.g));
      });
    };h.signInAnonymously = function () {
      var a = Z(this),
          b = this;return a && a.isAnonymous ? D(a) : this.ua.then(function () {
        return lj(b, b.g.signInAnonymously());
      }).then(function (a) {
        Li(a, "isAnonymous", !0);return b.Xa(a);
      }).then(function () {
        return Z(b);
      });
    };
    var X = function X(a) {
      return a.app;
    },
        Z = function Z(a) {
      return a.currentUser;
    };h = Y.prototype;h.Ea = function () {
      if (this.Rc) for (var a = 0; a < this.Qa.length; a++) {
        if (this.Qa[a]) this.Qa[a](Z(this) && Z(this)._lat || null);
      }
    };h.addAuthTokenListener = function (a) {
      var b = this;this.Qa.push(a);this.f(this.ua.then(function () {
        b.Sa || Ha(b.Qa, a) && a(Z(b) && Z(b)._lat || null);
      }));
    };h.removeAuthTokenListener = function (a) {
      Ka(this.Qa, function (b) {
        return b == a;
      });
    };
    h["delete"] = function () {
      this.Sa = !0;for (var a = 0; a < this.Z.length; a++) {
        this.Z[a].cancel("app-deleted");
      }this.Z = [];this.oa && (a = this.oa, a.i.removeListener(aj, a.u, this.Lc));this.m && this.m.unsubscribe(this);return firebase.Promise.resolve();
    };h.f = function (a) {
      var b = this;this.Z.push(a);ld(a, function () {
        Ja(b.Z, a);
      });return a;
    };h.fetchProvidersForEmail = function (a) {
      return this.f(tg(this.g, a));
    };h.verifyPasswordResetCode = function (a) {
      return this.checkActionCode(a).then(function (a) {
        return a.data.email;
      });
    };
    h.confirmPasswordReset = function (a, b) {
      return this.f(this.g.confirmPasswordReset(a, b).then(function () {}));
    };h.checkActionCode = function (a) {
      return this.f(this.g.checkActionCode(a).then(function (a) {
        return new zh(a);
      }));
    };h.applyActionCode = function (a) {
      return this.f(this.g.applyActionCode(a).then(function () {}));
    };h.sendPasswordResetEmail = function (a) {
      return this.f(this.g.sendPasswordResetEmail(a).then(function () {}));
    };Hh(Y.prototype, { applyActionCode: { name: "applyActionCode", a: [S("code")] }, checkActionCode: { name: "checkActionCode", a: [S("code")] }, confirmPasswordReset: { name: "confirmPasswordReset", a: [S("code"), S("newPassword")] }, createUserWithEmailAndPassword: { name: "createUserWithEmailAndPassword", a: [S("email"), S("password")] }, fetchProvidersForEmail: { name: "fetchProvidersForEmail", a: [S("email")] }, getRedirectResult: { name: "getRedirectResult", a: [] }, onAuthStateChanged: { name: "onAuthStateChanged", a: [Fh(T(), Bh(), "nextOrObserver"), Bh("opt_error", !0), Bh("opt_completed", !0)] }, sendPasswordResetEmail: { name: "sendPasswordResetEmail", a: [S("email")] }, signInAnonymously: { name: "signInAnonymously", a: [] }, signInWithCredential: { name: "signInWithCredential", a: [Dh()] }, signInWithCustomToken: { name: "signInWithCustomToken", a: [S("token")] }, signInWithEmailAndPassword: { name: "signInWithEmailAndPassword", a: [S("email"), S("password")] }, signInWithPopup: { name: "signInWithPopup", a: [Eh()] }, signInWithRedirect: { name: "signInWithRedirect", a: [Eh()] }, signOut: { name: "signOut",
        a: [] }, toJSON: { name: "toJSON", a: [S(null, !0)] }, verifyPasswordResetCode: { name: "verifyPasswordResetCode", a: [S("code")] } });
    Hh(W.prototype, { "delete": { name: "delete", a: [] }, getToken: { name: "getToken", a: [{ name: "opt_forceRefresh", fa: "a boolean", optional: !0, ha: function ha(a) {
            return "boolean" == typeof a;
          } }] }, link: { name: "link", a: [Dh()] }, linkWithPopup: { name: "linkWithPopup", a: [Eh()] }, linkWithRedirect: { name: "linkWithRedirect", a: [Eh()] }, reauthenticate: { name: "reauthenticate", a: [Dh()] }, reload: { name: "reload", a: [] }, sendEmailVerification: { name: "sendEmailVerification", a: [] }, toJSON: { name: "toJSON", a: [S(null, !0)] }, unlink: { name: "unlink", a: [S("provider")] },
      updateEmail: { name: "updateEmail", a: [S("email")] }, updatePassword: { name: "updatePassword", a: [S("password")] }, updateProfile: { name: "updateProfile", a: [T("profile")] } });Hh(C.prototype, { c: { name: "catch" }, then: { name: "then" } });U($f, "credential", function (a, b) {
      return new Xf(a, b);
    }, [S("email"), S("password")]);Hh(Tf.prototype, { addScope: { name: "addScope", a: [S("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [T("customOAuthParameters")] } });U(Tf, "credential", Tf.credential, [Fh(S(), T(), "token")]);
    Hh(Uf.prototype, { addScope: { name: "addScope", a: [S("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [T("customOAuthParameters")] } });U(Uf, "credential", Uf.credential, [Fh(S(), T(), "token")]);Hh(Vf.prototype, { addScope: { name: "addScope", a: [S("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [T("customOAuthParameters")] } });U(Vf, "credential", Vf.credential, [Fh(S(), Fh(T(), Ch()), "idToken"), Fh(S(), Ch(), "accessToken", !0)]);Hh(Wf.prototype, { setCustomParameters: { name: "setCustomParameters", a: [T("customOAuthParameters")] } });
    U(Wf, "credential", Wf.credential, [Fh(S(), T(), "token"), S("secret", !0)]);
    (function () {
      if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = { Auth: Y, Error: O };U(a, "EmailAuthProvider", $f, []);U(a, "FacebookAuthProvider", Tf, []);U(a, "GithubAuthProvider", Uf, []);U(a, "GoogleAuthProvider", Vf, []);U(a, "TwitterAuthProvider", Wf, []);firebase.INTERNAL.registerService("auth", function (a, c) {
          a = new Y(a);c({ INTERNAL: { getToken: _r(a.getToken, a), addAuthTokenListener: _r(a.addAuthTokenListener, a), removeAuthTokenListener: _r(a.removeAuthTokenListener, a) } });return a;
        }, a, function (a, c) {
          if ("create" === a) try {
            c.auth();
          } catch (d) {}
        });firebase.INTERNAL.extendNamespace({ User: W });
      } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).call(this);
}).call((typeof global === "undefined" ? "undefined" : _typeof(global)) !== undefined ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) !== undefined ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined ? window : {});
module.exports = firebase.auth;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var firebase = __webpack_require__(48);
(function () {
    /*! @license Firebase v3.6.9
        Build: 3.6.9-rc.1
        Terms: https://firebase.google.com/terms/ */
    (function () {
        var f = function f(a, b) {
            function c() {}c.prototype = b.prototype;a.prototype = new c();for (var d in b) {
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, d);e && Object.defineProperty(a, d, e);
                } else a[d] = b[d];
            }
        },
            g = this,
            h = function h(a) {
            var b = typeof a === "undefined" ? "undefined" : _typeof(a);if ("object" == b) {
                if (a) {
                    if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
                } else return "null";
            } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
        },
            k = function k(a, b) {
            function c() {}c.prototype = b.prototype;a.B = b.prototype;a.prototype = new c();a.u = function (a, c, n) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
                    d[e - 2] = arguments[e];
                }return b.prototype[c].apply(a, d);
            };
        };var m = {},
            p = (m["only-available-in-window"] = "This method is available in a Window context.", m["only-available-in-sw"] = "This method is available in a service worker context.", m["should-be-overriden"] = "This method should be overriden by extended classes.", m["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", m["permission-default"] = "The required permissions were not granted and dismissed instead.", m["permission-blocked"] = "The required permissions were not granted and blocked instead.", m["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", m["notifications-blocked"] = "Notifications have been blocked.", m["failed-serviceworker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", m["sw-registration-expected"] = "A service worker registration was the expected input.", m["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.", m["invalid-saved-token"] = "Unable to access details of the saved token.", m["sw-reg-redundant"] = "The service worker being used for push was made redundant.", m["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$message}", m["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", m["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.", m["use-sw-before-get-token"] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", m["invalid-delete-token"] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", m["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.", m["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.", m["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.", m["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", m["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", m["failed-to-delete-token"] = "Unable to delete the currently saved token.", m["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", m["incorrect-gcm-sender-id"] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", m);var q = { userVisibleOnly: !0, applicationServerKey: new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]) };var r = function r(a, b) {
            var c = {};return c["firebase-messaging-msg-type"] = a, c["firebase-messaging-msg-data"] = b, c;
        };var u = function u(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, u);else {
                var b = Error().stack;b && (this.stack = b);
            }a && (this.message = String(a));
        };k(u, Error);var v = function v(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
                d += c.shift() + e.shift();
            }return d + c.join("%s");
        };var w = function w(a, b) {
            b.unshift(a);u.call(this, v.apply(null, b));b.shift();
        };k(w, u);var x = function x(a, b, c) {
            if (!a) {
                var d = "Assertion failed";if (b) var d = d + (": " + b),
                    e = Array.prototype.slice.call(arguments, 2);throw new w("" + d, e || []);
            }
        };var y = null;var A = function A(a) {
            a = new Uint8Array(a);var b = h(a);x("array" == b || "object" == b && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");if (!y) for (y = {}, b = 0; 65 > b; b++) {
                y[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
            }for (var b = y, c = [], d = 0; d < a.length; d += 3) {
                var e = a[d],
                    n = d + 1 < a.length,
                    l = n ? a[d + 1] : 0,
                    z = d + 2 < a.length,
                    t = z ? a[d + 2] : 0,
                    M = e >> 2,
                    e = (e & 3) << 4 | l >> 4,
                    l = (l & 15) << 2 | t >> 6,
                    t = t & 63;z || (t = 64, n || (l = 64));c.push(b[M], b[e], b[l], b[t]);
            }return c.join("").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        };var B = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", p),
            C = function C() {
            this.a = null;
        },
            D = function D(a) {
            if (a.a) return a.a;a.a = new Promise(function (a, c) {
                var b = g.indexedDB.open("fcm_token_details_db", 1);b.onerror = function (a) {
                    c(a.target.error);
                };b.onsuccess = function (b) {
                    a(b.target.result);
                };b.onupgradeneeded = function (a) {
                    a = a.target.result.createObjectStore("fcm_token_object_Store", { keyPath: "swScope" });a.createIndex("fcmSenderId", "fcmSenderId", { unique: !1 });a.createIndex("fcmToken", "fcmToken", { unique: !0 });
                };
            });
            return a.a;
        },
            E = function E(a) {
            a.a ? a.a.then(function (b) {
                b.close();a.a = null;
            }) : Promise.resolve();
        },
            F = function F(a, b) {
            return D(a).then(function (a) {
                return new Promise(function (c, e) {
                    var d = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror = function (a) {
                        e(a.target.error);
                    };d.onsuccess = function (a) {
                        c(a.target.result);
                    };
                });
            });
        },
            G = function G(a, b) {
            return D(a).then(function (a) {
                return new Promise(function (c, e) {
                    var d = [],
                        l = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
                    l.onerror = function (a) {
                        e(a.target.error);
                    };l.onsuccess = function (a) {
                        (a = a.target.result) ? (a.value.fcmSenderId === b && d.push(a.value), a.continue()) : c(d);
                    };
                });
            });
        },
            H = function H(a, b, c) {
            var d = A(b.getKey("p256dh")),
                e = A(b.getKey("auth"));a = "authorized_entity=" + a + "&" + ("endpoint=" + b.endpoint + "&") + ("encryption_key=" + d + "&") + ("encryption_auth=" + e);c && (a += "&pushSet=" + c);c = new Headers();c.append("Content-Type", "application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe", { method: "POST",
                headers: c, body: a }).then(function (a) {
                return a.json();
            }).then(function (a) {
                if (a.error) throw B.create("token-subscribe-failed", { message: a.error.message });if (!a.token) throw B.create("token-subscribe-no-token");if (!a.pushSet) throw B.create("token-subscribe-no-push-set");return { token: a.token, pushSet: a.pushSet };
            });
        },
            I = function I(a, b, c, d, e, n) {
            var l = { swScope: c.scope, endpoint: d.endpoint, auth: A(d.getKey("auth")), p256dh: A(d.getKey("p256dh")), fcmToken: e, fcmPushSet: n, fcmSenderId: b };return D(a).then(function (a) {
                return new Promise(function (b, c) {
                    var d = a.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").put(l);d.onerror = function (a) {
                        c(a.target.error);
                    };d.onsuccess = function () {
                        b();
                    };
                });
            });
        };
        C.prototype.i = function (a, b) {
            return b instanceof ServiceWorkerRegistration ? "string" !== typeof a || 0 === a.length ? Promise.reject(B.create("bad-sender-id")) : G(this, a).then(function (c) {
                if (0 !== c.length) {
                    var d = c.findIndex(function (c) {
                        return b.scope === c.swScope && a === c.fcmSenderId;
                    });if (-1 !== d) return c[d];
                }
            }).then(function (a) {
                if (a) return b.pushManager.getSubscription().catch(function () {
                    throw B.create("get-subscription-failed");
                }).then(function (b) {
                    var c;if (c = b) c = b.endpoint === a.endpoint && A(b.getKey("auth")) === a.auth && A(b.getKey("p256dh")) === a.p256dh;if (c) return a.fcmToken;
                });
            }) : Promise.reject(B.create("sw-registration-expected"));
        };C.prototype.getSavedToken = C.prototype.i;
        C.prototype.h = function (a, b) {
            var c = this;return "string" !== typeof a || 0 === a.length ? Promise.reject(B.create("bad-sender-id")) : b instanceof ServiceWorkerRegistration ? b.pushManager.getSubscription().then(function (a) {
                return a ? a : b.pushManager.subscribe(q);
            }).then(function (d) {
                return H(a, d).then(function (e) {
                    return I(c, a, b, d, e.token, e.pushSet).then(function () {
                        return e.token;
                    });
                });
            }) : Promise.reject(B.create("sw-registration-expected"));
        };C.prototype.createToken = C.prototype.h;
        C.prototype.deleteToken = function (a) {
            var b = this;return "string" !== typeof a || 0 === a.length ? Promise.reject(B.create("invalid-delete-token")) : F(this, a).then(function (a) {
                if (!a) throw B.create("delete-token-not-found");return D(b).then(function (b) {
                    return new Promise(function (c, d) {
                        var e = b.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror = function (a) {
                            d(a.target.error);
                        };e.onsuccess = function (b) {
                            0 === b.target.result ? d(B.create("failed-to-delete-token")) : c(a);
                        };
                    });
                });
            });
        };var J = function J(a) {
            var b = this;this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", p);if (!a.options.messagingSenderId || "string" !== typeof a.options.messagingSenderId) throw this.a.create("bad-sender-id");this.l = a.options.messagingSenderId;this.c = new C();this.app = a;this.INTERNAL = {};this.INTERNAL.delete = function () {
                return b.delete;
            };
        };
        J.prototype.getToken = function () {
            var a = this,
                b = Notification.permission;return "granted" !== b ? "denied" === b ? Promise.reject(this.a.create("notifications-blocked")) : Promise.resolve(null) : this.f().then(function (b) {
                return a.c.i(a.l, b).then(function (c) {
                    return c ? c : a.c.h(a.l, b);
                });
            });
        };J.prototype.getToken = J.prototype.getToken;J.prototype.deleteToken = function (a) {
            var b = this;return this.c.deleteToken(a).then(function () {
                return b.f();
            }).then(function (a) {
                return a ? a.pushManager.getSubscription() : null;
            }).then(function (a) {
                if (a) return a.unsubscribe();
            });
        };
        J.prototype.deleteToken = J.prototype.deleteToken;J.prototype.f = function () {
            throw this.a.create("should-be-overriden");
        };J.prototype.requestPermission = function () {
            throw this.a.create("only-available-in-window");
        };J.prototype.useServiceWorker = function () {
            throw this.a.create("only-available-in-window");
        };J.prototype.useServiceWorker = J.prototype.useServiceWorker;J.prototype.onMessage = function () {
            throw this.a.create("only-available-in-window");
        };J.prototype.onMessage = J.prototype.onMessage;
        J.prototype.onTokenRefresh = function () {
            throw this.a.create("only-available-in-window");
        };J.prototype.onTokenRefresh = J.prototype.onTokenRefresh;J.prototype.setBackgroundMessageHandler = function () {
            throw this.a.create("only-available-in-sw");
        };J.prototype.setBackgroundMessageHandler = J.prototype.setBackgroundMessageHandler;J.prototype.delete = function () {
            E(this.c);
        };var K = self,
            P = function P(a) {
            J.call(this, a);var b = this;this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", p);K.addEventListener("push", function (a) {
                return L(b, a);
            }, !1);K.addEventListener("pushsubscriptionchange", function (a) {
                return N(b, a);
            }, !1);K.addEventListener("notificationclick", function (a) {
                return O(b, a);
            }, !1);this.b = null;
        };f(P, J);
        var L = function L(a, b) {
            var c;try {
                c = b.data.json();
            } catch (e) {
                return;
            }var d = Q().then(function (b) {
                if (b) {
                    if (c.notification || a.b) return R(a, c);
                } else {
                    if ((b = c) && "object" === _typeof(b.notification)) {
                        var d = Object.assign({}, b.notification),
                            e = {};d.data = (e.FCM_MSG = b, e);b = d;
                    } else b = void 0;if (b) return K.registration.showNotification(b.title || "", b);if (a.b) return a.b(c);
                }
            });b.waitUntil(d);
        },
            N = function N(a, b) {
            var c = a.getToken().then(function (b) {
                if (!b) throw a.a.create("no-fcm-token-for-resubscribe");var c = a.c;return F(c, b).then(function (b) {
                    if (!b) throw a.a.create("invalid-saved-token");
                    return K.registration.pushManager.subscribe(q).then(function (a) {
                        return H(b.w, a, b.v);
                    }).catch(function (d) {
                        return c.deleteToken(b.A).then(function () {
                            throw a.a.create("unable-to-resubscribe", { message: d });
                        });
                    });
                });
            });b.waitUntil(c);
        },
            O = function O(a, b) {
            if (b.notification && b.notification.data && b.notification.data.FCM_MSG) {
                b.stopImmediatePropagation();b.notification.close();var c = b.notification.data.FCM_MSG,
                    d = c.notification.click_action;if (d) {
                    var e = S(d).then(function (a) {
                        return a ? a : K.clients.openWindow(d);
                    }).then(function (b) {
                        if (b) return delete c.notification, T(a, b, r("notification-clicked", c));
                    });b.waitUntil(e);
                }
            }
        };P.prototype.setBackgroundMessageHandler = function (a) {
            if (a && "function" !== typeof a) throw this.a.create("bg-handler-function-expected");this.b = a;
        };P.prototype.setBackgroundMessageHandler = P.prototype.setBackgroundMessageHandler;
        var S = function S(a) {
            var b = new URL(a).href;return K.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then(function (a) {
                for (var c = null, e = 0; e < a.length; e++) {
                    if (new URL(a[e].url).href === b) {
                        c = a[e];break;
                    }
                }if (c) return c.focus(), c;
            });
        },
            T = function T(a, b, c) {
            return new Promise(function (d, e) {
                if (!b) return e(a.a.create("no-window-client-to-msg"));b.postMessage(c);d();
            });
        },
            Q = function Q() {
            return K.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then(function (a) {
                return a.some(function (a) {
                    return "visible" === a.visibilityState;
                });
            });
        },
            R = function R(a, b) {
            return K.clients.matchAll({ type: "window", includeUncontrolled: !0 }).then(function (c) {
                var d = r("push-msg-received", b);return Promise.all(c.map(function (b) {
                    return T(a, b, d);
                }));
            });
        };P.prototype.f = function () {
            return Promise.resolve(K.registration);
        };var V = function V(a) {
            J.call(this, a);var b = this;this.j = null;this.m = firebase.INTERNAL.createSubscribe(function (a) {
                b.j = a;
            });this.s = null;this.o = firebase.INTERNAL.createSubscribe(function (a) {
                b.s = a;
            });U(this);
        };f(V, J);
        V.prototype.getToken = function () {
            var a = this;return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") ? W(this).then(function () {
                return J.prototype.getToken.call(a);
            }) : Promise.reject(this.a.create("unsupported-browser"));
        };V.prototype.getToken = V.prototype.getToken;
        var W = function W(a) {
            if (a.g) return a.g;var b = document.querySelector('link[rel="manifest"]');b ? a.g = fetch(b.href).then(function (a) {
                return a.json();
            }).catch(function () {
                return Promise.resolve();
            }).then(function (b) {
                if (b && b.gcm_sender_id && "103953800507" !== b.gcm_sender_id) throw a.a.create("incorrect-gcm-sender-id");
            }) : a.g = Promise.resolve();return a.g;
        };
        V.prototype.requestPermission = function () {
            var a = this;return "granted" === Notification.permission ? Promise.resolve() : new Promise(function (b, c) {
                var d = function d(_d) {
                    return "granted" === _d ? b() : "denied" === _d ? c(a.a.create("permission-blocked")) : c(a.a.create("permission-default"));
                },
                    e = Notification.requestPermission(function (a) {
                    e || d(a);
                });e && e.then(d);
            });
        };V.prototype.requestPermission = V.prototype.requestPermission;
        V.prototype.useServiceWorker = function (a) {
            if (!(a instanceof ServiceWorkerRegistration)) throw this.a.create("sw-registration-expected");if ("undefined" !== typeof this.b) throw this.a.create("use-sw-before-get-token");this.b = a;
        };V.prototype.useServiceWorker = V.prototype.useServiceWorker;V.prototype.onMessage = function (a, b, c) {
            return this.m(a, b, c);
        };V.prototype.onMessage = V.prototype.onMessage;V.prototype.onTokenRefresh = function (a, b, c) {
            return this.o(a, b, c);
        };V.prototype.onTokenRefresh = V.prototype.onTokenRefresh;
        var X = function X(a, b) {
            var c = b.installing || b.waiting || b.active;return new Promise(function (d, e) {
                if (c) {
                    if ("activated" === c.state) d(b);else if ("redundant" === c.state) e(a.a.create("sw-reg-redundant"));else {
                        var n = function n() {
                            if ("activated" === c.state) d(b);else if ("redundant" === c.state) e(a.a.create("sw-reg-redundant"));else return;c.removeEventListener("statechange", n);
                        };c.addEventListener("statechange", n);
                    }
                } else e(a.a.create("no-sw-in-reg"));
            });
        };
        V.prototype.f = function () {
            var a = this;if (this.b) return X(this, this.b);this.b = null;return navigator.serviceWorker.register("/firebase-messaging-sw.js", { scope: "/firebase-cloud-messaging-push-scope" }).catch(function (b) {
                throw a.a.create("failed-serviceworker-registration", { browserErrorMessage: b.message });
            }).then(function (b) {
                return X(a, b).then(function () {
                    a.b = b;b.update();return b;
                });
            });
        };
        var U = function U(a) {
            "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function (b) {
                if (b.data && b.data["firebase-messaging-msg-type"]) switch (b = b.data, b["firebase-messaging-msg-type"]) {case "push-msg-received":case "notification-clicked":
                        a.j.next(b["firebase-messaging-msg-data"]);}
            }, !1);
        };if (!(firebase && firebase.INTERNAL && firebase.INTERNAL.registerService)) throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging", function (a) {
            return self && "ServiceWorkerGlobalScope" in self ? new P(a) : new V(a);
        }, { Messaging: V });
    }).call(this);
}).call((typeof global === "undefined" ? "undefined" : _typeof(global)) !== undefined ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) !== undefined ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined ? window : {});
module.exports = firebase.messaging;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })

});