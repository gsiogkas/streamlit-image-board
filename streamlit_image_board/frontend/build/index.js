var To = { exports: {} }, Cr = {}, Lo = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function $f() {
  if (za) return K;
  za = 1;
  var f = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), B = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function Q(p) {
    return p === null || typeof p != "object" ? null : (p = Y && p[Y] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, pe = Object.assign, q = {};
  function H(p, v, $) {
    this.props = p, this.context = v, this.refs = q, this.updater = $ || fe;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(p, v) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, v, "setState");
  }, H.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function we() {
  }
  we.prototype = H.prototype;
  function he(p, v, $) {
    this.props = p, this.context = v, this.refs = q, this.updater = $ || fe;
  }
  var se = he.prototype = new we();
  se.constructor = he, pe(se, H.prototype), se.isPureReactComponent = !0;
  var _e = Array.isArray, le = Object.prototype.hasOwnProperty, ve = { current: null }, ke = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(p, v, $) {
    var W, G = {}, X = null, ne = null;
    if (v != null) for (W in v.ref !== void 0 && (ne = v.ref), v.key !== void 0 && (X = "" + v.key), v) le.call(v, W) && !ke.hasOwnProperty(W) && (G[W] = v[W]);
    var ee = arguments.length - 2;
    if (ee === 1) G.children = $;
    else if (1 < ee) {
      for (var oe = Array(ee), Ie = 0; Ie < ee; Ie++) oe[Ie] = arguments[Ie + 2];
      G.children = oe;
    }
    if (p && p.defaultProps) for (W in ee = p.defaultProps, ee) G[W] === void 0 && (G[W] = ee[W]);
    return { $$typeof: f, type: p, key: X, ref: ne, props: G, _owner: ve.current };
  }
  function ze(p, v) {
    return { $$typeof: f, type: p.type, key: v, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function at(p) {
    return typeof p == "object" && p !== null && p.$$typeof === f;
  }
  function ct(p) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function($) {
      return v[$];
    });
  }
  var We = /\/+/g;
  function $e(p, v) {
    return typeof p == "object" && p !== null && p.key != null ? ct("" + p.key) : v.toString(36);
  }
  function Je(p, v, $, W, G) {
    var X = typeof p;
    (X === "undefined" || X === "boolean") && (p = null);
    var ne = !1;
    if (p === null) ne = !0;
    else switch (X) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case f:
          case s:
            ne = !0;
        }
    }
    if (ne) return ne = p, G = G(ne), p = W === "" ? "." + $e(ne, 0) : W, _e(G) ? ($ = "", p != null && ($ = p.replace(We, "$&/") + "/"), Je(G, v, $, "", function(Ie) {
      return Ie;
    })) : G != null && (at(G) && (G = ze(G, $ + (!G.key || ne && ne.key === G.key ? "" : ("" + G.key).replace(We, "$&/") + "/") + p)), v.push(G)), 1;
    if (ne = 0, W = W === "" ? "." : W + ":", _e(p)) for (var ee = 0; ee < p.length; ee++) {
      X = p[ee];
      var oe = W + $e(X, ee);
      ne += Je(X, v, $, oe, G);
    }
    else if (oe = Q(p), typeof oe == "function") for (p = oe.call(p), ee = 0; !(X = p.next()).done; ) X = X.value, oe = W + $e(X, ee++), ne += Je(X, v, $, oe, G);
    else if (X === "object") throw v = String(p), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function nt(p, v, $) {
    if (p == null) return p;
    var W = [], G = 0;
    return Je(p, W, "", "", function(X) {
      return v.call($, X, G++);
    }), W;
  }
  function Pe(p) {
    if (p._status === -1) {
      var v = p._result;
      v = v(), v.then(function($) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = $);
      }, function($) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = $);
      }), p._status === -1 && (p._status = 0, p._result = v);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var b = { current: null }, S = { transition: null }, I = { ReactCurrentDispatcher: b, ReactCurrentBatchConfig: S, ReactCurrentOwner: ve };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return K.Children = { map: nt, forEach: function(p, v, $) {
    nt(p, function() {
      v.apply(this, arguments);
    }, $);
  }, count: function(p) {
    var v = 0;
    return nt(p, function() {
      v++;
    }), v;
  }, toArray: function(p) {
    return nt(p, function(v) {
      return v;
    }) || [];
  }, only: function(p) {
    if (!at(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, K.Component = H, K.Fragment = d, K.Profiler = E, K.PureComponent = he, K.StrictMode = _, K.Suspense = L, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, K.act = N, K.cloneElement = function(p, v, $) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var W = pe({}, p.props), G = p.key, X = p.ref, ne = p._owner;
    if (v != null) {
      if (v.ref !== void 0 && (X = v.ref, ne = ve.current), v.key !== void 0 && (G = "" + v.key), p.type && p.type.defaultProps) var ee = p.type.defaultProps;
      for (oe in v) le.call(v, oe) && !ke.hasOwnProperty(oe) && (W[oe] = v[oe] === void 0 && ee !== void 0 ? ee[oe] : v[oe]);
    }
    var oe = arguments.length - 2;
    if (oe === 1) W.children = $;
    else if (1 < oe) {
      ee = Array(oe);
      for (var Ie = 0; Ie < oe; Ie++) ee[Ie] = arguments[Ie + 2];
      W.children = ee;
    }
    return { $$typeof: f, type: p.type, key: G, ref: X, props: W, _owner: ne };
  }, K.createContext = function(p) {
    return p = { $$typeof: B, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: V, _context: p }, p.Consumer = p;
  }, K.createElement = Ne, K.createFactory = function(p) {
    var v = Ne.bind(null, p);
    return v.type = p, v;
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(p) {
    return { $$typeof: R, render: p };
  }, K.isValidElement = at, K.lazy = function(p) {
    return { $$typeof: re, _payload: { _status: -1, _result: p }, _init: Pe };
  }, K.memo = function(p, v) {
    return { $$typeof: A, type: p, compare: v === void 0 ? null : v };
  }, K.startTransition = function(p) {
    var v = S.transition;
    S.transition = {};
    try {
      p();
    } finally {
      S.transition = v;
    }
  }, K.unstable_act = N, K.useCallback = function(p, v) {
    return b.current.useCallback(p, v);
  }, K.useContext = function(p) {
    return b.current.useContext(p);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(p) {
    return b.current.useDeferredValue(p);
  }, K.useEffect = function(p, v) {
    return b.current.useEffect(p, v);
  }, K.useId = function() {
    return b.current.useId();
  }, K.useImperativeHandle = function(p, v, $) {
    return b.current.useImperativeHandle(p, v, $);
  }, K.useInsertionEffect = function(p, v) {
    return b.current.useInsertionEffect(p, v);
  }, K.useLayoutEffect = function(p, v) {
    return b.current.useLayoutEffect(p, v);
  }, K.useMemo = function(p, v) {
    return b.current.useMemo(p, v);
  }, K.useReducer = function(p, v, $) {
    return b.current.useReducer(p, v, $);
  }, K.useRef = function(p) {
    return b.current.useRef(p);
  }, K.useState = function(p) {
    return b.current.useState(p);
  }, K.useSyncExternalStore = function(p, v, $) {
    return b.current.useSyncExternalStore(p, v, $);
  }, K.useTransition = function() {
    return b.current.useTransition();
  }, K.version = "18.3.1", K;
}
var Pa;
function Do() {
  return Pa || (Pa = 1, Lo.exports = $f()), Lo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function Vf() {
  if (Ta) return Cr;
  Ta = 1;
  var f = Do(), s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, E = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(R, L, A) {
    var re, Y = {}, Q = null, fe = null;
    A !== void 0 && (Q = "" + A), L.key !== void 0 && (Q = "" + L.key), L.ref !== void 0 && (fe = L.ref);
    for (re in L) _.call(L, re) && !V.hasOwnProperty(re) && (Y[re] = L[re]);
    if (R && R.defaultProps) for (re in L = R.defaultProps, L) Y[re] === void 0 && (Y[re] = L[re]);
    return { $$typeof: s, type: R, key: Q, ref: fe, props: Y, _owner: E.current };
  }
  return Cr.Fragment = d, Cr.jsx = B, Cr.jsxs = B, Cr;
}
var La;
function Hf() {
  return La || (La = 1, To.exports = Vf()), To.exports;
}
var F = Hf(), Z = Do(), Ml = {}, Ro = { exports: {} }, Ze = {}, jo = { exports: {} }, Mo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Wf() {
  return Ra || (Ra = 1, (function(f) {
    function s(S, I) {
      var N = S.length;
      S.push(I);
      e: for (; 0 < N; ) {
        var p = N - 1 >>> 1, v = S[p];
        if (0 < E(v, I)) S[p] = I, S[N] = v, N = p;
        else break e;
      }
    }
    function d(S) {
      return S.length === 0 ? null : S[0];
    }
    function _(S) {
      if (S.length === 0) return null;
      var I = S[0], N = S.pop();
      if (N !== I) {
        S[0] = N;
        e: for (var p = 0, v = S.length, $ = v >>> 1; p < $; ) {
          var W = 2 * (p + 1) - 1, G = S[W], X = W + 1, ne = S[X];
          if (0 > E(G, N)) X < v && 0 > E(ne, G) ? (S[p] = ne, S[X] = N, p = X) : (S[p] = G, S[W] = N, p = W);
          else if (X < v && 0 > E(ne, N)) S[p] = ne, S[X] = N, p = X;
          else break e;
        }
      }
      return I;
    }
    function E(S, I) {
      var N = S.sortIndex - I.sortIndex;
      return N !== 0 ? N : S.id - I.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var V = performance;
      f.unstable_now = function() {
        return V.now();
      };
    } else {
      var B = Date, R = B.now();
      f.unstable_now = function() {
        return B.now() - R;
      };
    }
    var L = [], A = [], re = 1, Y = null, Q = 3, fe = !1, pe = !1, q = !1, H = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function se(S) {
      for (var I = d(A); I !== null; ) {
        if (I.callback === null) _(A);
        else if (I.startTime <= S) _(A), I.sortIndex = I.expirationTime, s(L, I);
        else break;
        I = d(A);
      }
    }
    function _e(S) {
      if (q = !1, se(S), !pe) if (d(L) !== null) pe = !0, Pe(le);
      else {
        var I = d(A);
        I !== null && b(_e, I.startTime - S);
      }
    }
    function le(S, I) {
      pe = !1, q && (q = !1, we(Ne), Ne = -1), fe = !0;
      var N = Q;
      try {
        for (se(I), Y = d(L); Y !== null && (!(Y.expirationTime > I) || S && !ct()); ) {
          var p = Y.callback;
          if (typeof p == "function") {
            Y.callback = null, Q = Y.priorityLevel;
            var v = p(Y.expirationTime <= I);
            I = f.unstable_now(), typeof v == "function" ? Y.callback = v : Y === d(L) && _(L), se(I);
          } else _(L);
          Y = d(L);
        }
        if (Y !== null) var $ = !0;
        else {
          var W = d(A);
          W !== null && b(_e, W.startTime - I), $ = !1;
        }
        return $;
      } finally {
        Y = null, Q = N, fe = !1;
      }
    }
    var ve = !1, ke = null, Ne = -1, ze = 5, at = -1;
    function ct() {
      return !(f.unstable_now() - at < ze);
    }
    function We() {
      if (ke !== null) {
        var S = f.unstable_now();
        at = S;
        var I = !0;
        try {
          I = ke(!0, S);
        } finally {
          I ? $e() : (ve = !1, ke = null);
        }
      } else ve = !1;
    }
    var $e;
    if (typeof he == "function") $e = function() {
      he(We);
    };
    else if (typeof MessageChannel < "u") {
      var Je = new MessageChannel(), nt = Je.port2;
      Je.port1.onmessage = We, $e = function() {
        nt.postMessage(null);
      };
    } else $e = function() {
      H(We, 0);
    };
    function Pe(S) {
      ke = S, ve || (ve = !0, $e());
    }
    function b(S, I) {
      Ne = H(function() {
        S(f.unstable_now());
      }, I);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, f.unstable_continueExecution = function() {
      pe || fe || (pe = !0, Pe(le));
    }, f.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ze = 0 < S ? Math.floor(1e3 / S) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, f.unstable_getFirstCallbackNode = function() {
      return d(L);
    }, f.unstable_next = function(S) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = Q;
      }
      var N = Q;
      Q = I;
      try {
        return S();
      } finally {
        Q = N;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(S, I) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var N = Q;
      Q = S;
      try {
        return I();
      } finally {
        Q = N;
      }
    }, f.unstable_scheduleCallback = function(S, I, N) {
      var p = f.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? p + N : p) : N = p, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = N + v, S = { id: re++, callback: I, priorityLevel: S, startTime: N, expirationTime: v, sortIndex: -1 }, N > p ? (S.sortIndex = N, s(A, S), d(L) === null && S === d(A) && (q ? (we(Ne), Ne = -1) : q = !0, b(_e, N - p))) : (S.sortIndex = v, s(L, S), pe || fe || (pe = !0, Pe(le))), S;
    }, f.unstable_shouldYield = ct, f.unstable_wrapCallback = function(S) {
      var I = Q;
      return function() {
        var N = Q;
        Q = I;
        try {
          return S.apply(this, arguments);
        } finally {
          Q = N;
        }
      };
    };
  })(Mo)), Mo;
}
var ja;
function Qf() {
  return ja || (ja = 1, jo.exports = Wf()), jo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Kf() {
  if (Ma) return Ze;
  Ma = 1;
  var f = Do(), s = Qf();
  function d(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), E = {};
  function V(e, t) {
    B(e, t), B(e + "Capture", t);
  }
  function B(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) _.add(t[e]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, re = {}, Y = {};
  function Q(e) {
    return L.call(Y, e) ? !0 : L.call(re, e) ? !1 : A.test(e) ? Y[e] = !0 : (re[e] = !0, !1);
  }
  function fe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function pe(e, t, n, r) {
    if (t === null || typeof t > "u" || fe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function q(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    H[e] = new q(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    H[t] = new q(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    H[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    H[e] = new q(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    H[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    H[e] = new q(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    H[e] = new q(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    H[e] = new q(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    H[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function he(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      we,
      he
    );
    H[t] = new q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(we, he);
    H[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(we, he);
    H[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    H[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    H[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function se(e, t, n, r) {
    var l = H.hasOwnProperty(t) ? H[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pe(t, n, l, r) && (n = null), r || l === null ? Q(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var _e = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, le = Symbol.for("react.element"), ve = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), Ne = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), at = Symbol.for("react.provider"), ct = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), Je = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var N = Object.assign, p;
  function v(e) {
    if (p === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      p = t && t[1] || "";
    }
    return `
` + p + e;
  }
  var $ = !1;
  function W(e, t) {
    if (!e || $) return "";
    $ = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (var l = h.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
        for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || l[o] !== i[u]) {
                var a = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= o && 0 <= u);
          break;
        }
      }
    } finally {
      $ = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function G(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = W(e.type, !1), e;
      case 11:
        return e = W(e.type.render, !1), e;
      case 1:
        return e = W(e.type, !0), e;
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ke:
        return "Fragment";
      case ve:
        return "Portal";
      case ze:
        return "Profiler";
      case Ne:
        return "StrictMode";
      case $e:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ct:
        return (e.displayName || "Context") + ".Consumer";
      case at:
        return (e._context.displayName || "Context") + ".Provider";
      case We:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case nt:
        return t = e.displayName || null, t !== null ? t : X(e.type) || "Memo";
      case Pe:
        t = e._payload, e = e._init;
        try {
          return X(e(t));
        } catch {
        }
    }
    return null;
  }
  function ne(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return X(t);
      case 8:
        return t === Ne ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ee(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ie(e) {
    var t = oe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function pn(e) {
    e._valueTracker || (e._valueTracker = Ie(e));
  }
  function M(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = oe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ce(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function _t(e, t) {
    var n = t.checked;
    return N({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ct(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Oo(e, t) {
    t = t.checked, t != null && se(e, "checked", t, !1);
  }
  function Il(e, t) {
    Oo(e, t);
    var n = ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Io(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Fl(e, t, n) {
    (t !== "number" || Ce(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function gn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ee(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return N({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Fo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(d(92));
        if (An(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function Uo(e, t) {
    var n = ee(t.value), r = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ao(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Er, $o = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Er = Er || document.createElement("div"), Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Er.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Bn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var $n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Wa = ["Webkit", "ms", "Moz", "O"];
  Object.keys($n).forEach(function(e) {
    Wa.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), $n[t] = $n[e];
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $n.hasOwnProperty(e) && $n[e] ? ("" + t).trim() : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Qa = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bl(e, t) {
    if (t) {
      if (Qa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(d(62));
    }
  }
  function $l(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vl = null;
  function Hl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wl = null, mn = null, hn = null;
  function Wo(e) {
    if (e = ar(e)) {
      if (typeof Wl != "function") throw Error(d(280));
      var t = e.stateNode;
      t && (t = Gr(t), Wl(e.stateNode, e.type, t));
    }
  }
  function Qo(e) {
    mn ? hn ? hn.push(e) : hn = [e] : mn = e;
  }
  function Ko() {
    if (mn) {
      var e = mn, t = hn;
      if (hn = mn = null, Wo(e), t) for (e = 0; e < t.length; e++) Wo(t[e]);
    }
  }
  function Yo(e, t) {
    return e(t);
  }
  function Go() {
  }
  var Ql = !1;
  function Xo(e, t, n) {
    if (Ql) return e(t, n);
    Ql = !0;
    try {
      return Yo(e, t, n);
    } finally {
      Ql = !1, (mn !== null || hn !== null) && (Go(), Ko());
    }
  }
  function Vn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Gr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(d(231, t, typeof n));
    return n;
  }
  var Kl = !1;
  if (R) try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", { get: function() {
      Kl = !0;
    } }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn);
  } catch {
    Kl = !1;
  }
  function Ka(e, t, n, r, l, i, o, u, a) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Wn = !1, Nr = null, zr = !1, Yl = null, Ya = { onError: function(e) {
    Wn = !0, Nr = e;
  } };
  function Ga(e, t, n, r, l, i, o, u, a) {
    Wn = !1, Nr = null, Ka.apply(Ya, arguments);
  }
  function Xa(e, t, n, r, l, i, o, u, a) {
    if (Ga.apply(this, arguments), Wn) {
      if (Wn) {
        var h = Nr;
        Wn = !1, Nr = null;
      } else throw Error(d(198));
      zr || (zr = !0, Yl = h);
    }
  }
  function bt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Zo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Jo(e) {
    if (bt(e) !== e) throw Error(d(188));
  }
  function Za(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bt(e), t === null) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Jo(l), e;
          if (i === r) return Jo(l), t;
          i = i.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (u === r) {
            o = !0, r = l, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (u === r) {
              o = !0, r = i, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(d(189));
        }
      }
      if (n.alternate !== r) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : t;
  }
  function qo(e) {
    return e = Za(e), e !== null ? bo(e) : null;
  }
  function bo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = bo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var eu = s.unstable_scheduleCallback, tu = s.unstable_cancelCallback, Ja = s.unstable_shouldYield, qa = s.unstable_requestPaint, xe = s.unstable_now, ba = s.unstable_getCurrentPriorityLevel, Gl = s.unstable_ImmediatePriority, nu = s.unstable_UserBlockingPriority, Pr = s.unstable_NormalPriority, ec = s.unstable_LowPriority, ru = s.unstable_IdlePriority, Tr = null, yt = null;
  function tc(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function") try {
      yt.onCommitFiberRoot(Tr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var ft = Math.clz32 ? Math.clz32 : lc, nc = Math.log, rc = Math.LN2;
  function lc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nc(e) / rc | 0) | 0;
  }
  var Lr = 64, Rr = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? r = Qn(u) : (i &= o, i !== 0 && (r = Qn(i)));
    } else o = n & ~l, o !== 0 ? r = Qn(o) : i !== 0 && (r = Qn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ft(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function ic(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function oc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - ft(i), u = 1 << o, a = l[o];
      a === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = ic(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
    }
  }
  function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var e = Lr;
    return Lr <<= 1, (Lr & 4194240) === 0 && (Lr = 64), e;
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n;
  }
  function uc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ft(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Jl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var ie = 0;
  function iu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ou, ql, uu, su, au, bl = !1, Mr = [], Mt = null, Dt = null, Ot = null, Yn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), It = [], sc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mt = null;
        break;
      case "dragenter":
      case "dragleave":
        Dt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(t.pointerId);
    }
  }
  function Xn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = ar(t), t !== null && ql(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function ac(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Mt = Xn(Mt, e, t, n, r, l), !0;
      case "dragenter":
        return Dt = Xn(Dt, e, t, n, r, l), !0;
      case "mouseover":
        return Ot = Xn(Ot, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Yn.set(i, Xn(Yn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Gn.set(i, Xn(Gn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function fu(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = bt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Zo(n), t !== null) {
            e.blockedOn = t, au(e.priority, function() {
              uu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Dr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vl = r, n.target.dispatchEvent(r), Vl = null;
      } else return t = ar(n), t !== null && ql(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function du(e, t, n) {
    Dr(e) && n.delete(t);
  }
  function cc() {
    bl = !1, Mt !== null && Dr(Mt) && (Mt = null), Dt !== null && Dr(Dt) && (Dt = null), Ot !== null && Dr(Ot) && (Ot = null), Yn.forEach(du), Gn.forEach(du);
  }
  function Zn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, cc)));
  }
  function Jn(e) {
    function t(l) {
      return Zn(l, e);
    }
    if (0 < Mr.length) {
      Zn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
        var r = Mr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Mt !== null && Zn(Mt, e), Dt !== null && Zn(Dt, e), Ot !== null && Zn(Ot, e), Yn.forEach(t), Gn.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) fu(n), n.blockedOn === null && It.shift();
  }
  var vn = _e.ReactCurrentBatchConfig, Or = !0;
  function fc(e, t, n, r) {
    var l = ie, i = vn.transition;
    vn.transition = null;
    try {
      ie = 1, ei(e, t, n, r);
    } finally {
      ie = l, vn.transition = i;
    }
  }
  function dc(e, t, n, r) {
    var l = ie, i = vn.transition;
    vn.transition = null;
    try {
      ie = 4, ei(e, t, n, r);
    } finally {
      ie = l, vn.transition = i;
    }
  }
  function ei(e, t, n, r) {
    if (Or) {
      var l = ti(e, t, n, r);
      if (l === null) yi(e, t, r, Ir, n), cu(e, r);
      else if (ac(l, e, t, n, r)) r.stopPropagation();
      else if (cu(e, r), t & 4 && -1 < sc.indexOf(e)) {
        for (; l !== null; ) {
          var i = ar(l);
          if (i !== null && ou(i), i = ti(e, t, n, r), i === null && yi(e, t, r, Ir, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else yi(e, t, r, null, n);
    }
  }
  var Ir = null;
  function ti(e, t, n, r) {
    if (Ir = null, e = Hl(r), e = en(e), e !== null) if (t = bt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Zo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ir = e, null;
  }
  function pu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ba()) {
          case Gl:
            return 1;
          case nu:
            return 4;
          case Pr:
          case ec:
            return 16;
          case ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ft = null, ni = null, Fr = null;
  function gu() {
    if (Fr) return Fr;
    var e, t = ni, n = t.length, r, l = "value" in Ft ? Ft.value : Ft.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ur(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ar() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function qe(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ar : mu, this.isPropagationStopped = mu, this;
    }
    return N(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ar);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ar);
    }, persist: function() {
    }, isPersistent: Ar }), t;
  }
  var yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ri = qe(yn), qn = N({}, yn, { view: 0, detail: 0 }), pc = qe(qn), li, ii, bn, Br = N({}, qn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ui, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== bn && (bn && e.type === "mousemove" ? (li = e.screenX - bn.screenX, ii = e.screenY - bn.screenY) : ii = li = 0, bn = e), li);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ii;
  } }), hu = qe(Br), gc = N({}, Br, { dataTransfer: 0 }), mc = qe(gc), hc = N({}, qn, { relatedTarget: 0 }), oi = qe(hc), vc = N({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = qe(vc), wc = N({}, yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), kc = qe(wc), xc = N({}, yn, { data: 0 }), vu = qe(xc), Sc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _c = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Cc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ec(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Cc[e]) ? !!t[e] : !1;
  }
  function ui() {
    return Ec;
  }
  var Nc = N({}, qn, { key: function(e) {
    if (e.key) {
      var t = Sc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _c[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ui, charCode: function(e) {
    return e.type === "keypress" ? Ur(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), zc = qe(Nc), Pc = N({}, Br, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = qe(Pc), Tc = N({}, qn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ui }), Lc = qe(Tc), Rc = N({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jc = qe(Rc), Mc = N({}, Br, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Dc = qe(Mc), Oc = [9, 13, 27, 32], si = R && "CompositionEvent" in window, er = null;
  R && "documentMode" in document && (er = document.documentMode);
  var Ic = R && "TextEvent" in window && !er, wu = R && (!si || er && 8 < er && 11 >= er), ku = " ", xu = !1;
  function Su(e, t) {
    switch (e) {
      case "keyup":
        return Oc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _u(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var wn = !1;
  function Fc(e, t) {
    switch (e) {
      case "compositionend":
        return _u(t);
      case "keypress":
        return t.which !== 32 ? null : (xu = !0, ku);
      case "textInput":
        return e = t.data, e === ku && xu ? null : e;
      default:
        return null;
    }
  }
  function Uc(e, t) {
    if (wn) return e === "compositionend" || !si && Su(e, t) ? (e = gu(), Fr = ni = Ft = null, wn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return wu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ac = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ac[e.type] : t === "textarea";
  }
  function Eu(e, t, n, r) {
    Qo(r), t = Qr(t, "onChange"), 0 < t.length && (n = new ri("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var tr = null, nr = null;
  function Bc(e) {
    Hu(e, 0);
  }
  function $r(e) {
    var t = Cn(e);
    if (M(t)) return e;
  }
  function $c(e, t) {
    if (e === "change") return t;
  }
  var Nu = !1;
  if (R) {
    var ai;
    if (R) {
      var ci = "oninput" in document;
      if (!ci) {
        var zu = document.createElement("div");
        zu.setAttribute("oninput", "return;"), ci = typeof zu.oninput == "function";
      }
      ai = ci;
    } else ai = !1;
    Nu = ai && (!document.documentMode || 9 < document.documentMode);
  }
  function Pu() {
    tr && (tr.detachEvent("onpropertychange", Tu), nr = tr = null);
  }
  function Tu(e) {
    if (e.propertyName === "value" && $r(nr)) {
      var t = [];
      Eu(t, nr, e, Hl(e)), Xo(Bc, t);
    }
  }
  function Vc(e, t, n) {
    e === "focusin" ? (Pu(), tr = t, nr = n, tr.attachEvent("onpropertychange", Tu)) : e === "focusout" && Pu();
  }
  function Hc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return $r(nr);
  }
  function Wc(e, t) {
    if (e === "click") return $r(t);
  }
  function Qc(e, t) {
    if (e === "input" || e === "change") return $r(t);
  }
  function Kc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : Kc;
  function rr(e, t) {
    if (dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!L.call(t, l) || !dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ru(e, t) {
    var n = Lu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Lu(n);
    }
  }
  function ju(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ju(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Mu() {
    for (var e = window, t = Ce(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ce(e.document);
    }
    return t;
  }
  function fi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Yc(e) {
    var t = Mu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ju(n.ownerDocument.documentElement, n)) {
      if (r !== null && fi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ru(n, i);
          var o = Ru(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Gc = R && "documentMode" in document && 11 >= document.documentMode, kn = null, di = null, lr = null, pi = !1;
  function Du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pi || kn == null || kn !== Ce(r) || (r = kn, "selectionStart" in r && fi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && rr(lr, r) || (lr = r, r = Qr(di, "onSelect"), 0 < r.length && (t = new ri("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn)));
  }
  function Vr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var xn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, gi = {}, Ou = {};
  R && (Ou = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
  function Hr(e) {
    if (gi[e]) return gi[e];
    if (!xn[e]) return e;
    var t = xn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ou) return gi[e] = t[n];
    return e;
  }
  var Iu = Hr("animationend"), Fu = Hr("animationiteration"), Uu = Hr("animationstart"), Au = Hr("transitionend"), Bu = /* @__PURE__ */ new Map(), $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ut(e, t) {
    Bu.set(e, t), V(t, [e]);
  }
  for (var mi = 0; mi < $u.length; mi++) {
    var hi = $u[mi], Xc = hi.toLowerCase(), Zc = hi[0].toUpperCase() + hi.slice(1);
    Ut(Xc, "on" + Zc);
  }
  Ut(Iu, "onAnimationEnd"), Ut(Fu, "onAnimationIteration"), Ut(Uu, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(Au, "onTransitionEnd"), B("onMouseEnter", ["mouseout", "mouseover"]), B("onMouseLeave", ["mouseout", "mouseover"]), B("onPointerEnter", ["pointerout", "pointerover"]), B("onPointerLeave", ["pointerout", "pointerover"]), V("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), V("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), V("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), V("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), V("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), V("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jc = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
  function Vu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Xa(r, t, void 0, e), e.currentTarget = null;
  }
  function Hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], a = u.instance, h = u.currentTarget;
          if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
          Vu(l, u, h), i = a;
        }
        else for (o = 0; o < r.length; o++) {
          if (u = r[o], a = u.instance, h = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
          Vu(l, u, h), i = a;
        }
      }
    }
    if (zr) throw e = Yl, zr = !1, Yl = null, e;
  }
  function ae(e, t) {
    var n = t[Ci];
    n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Wu(t, e, 2, !1), n.add(r));
  }
  function vi(e, t, n) {
    var r = 0;
    t && (r |= 4), Wu(n, e, r, t);
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function or(e) {
    if (!e[Wr]) {
      e[Wr] = !0, _.forEach(function(n) {
        n !== "selectionchange" && (Jc.has(n) || vi(n, !1, e), vi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wr] || (t[Wr] = !0, vi("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, r) {
    switch (pu(t)) {
      case 1:
        var l = fc;
        break;
      case 4:
        l = dc;
        break;
      default:
        l = ei;
    }
    n = l.bind(null, t, n, e), l = void 0, !Kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function yi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var a = o.tag;
          if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
          o = o.return;
        }
        for (; u !== null; ) {
          if (o = en(u), o === null) return;
          if (a = o.tag, a === 5 || a === 6) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Xo(function() {
      var h = i, w = Hl(n), k = [];
      e: {
        var y = Bu.get(e);
        if (y !== void 0) {
          var C = ri, P = e;
          switch (e) {
            case "keypress":
              if (Ur(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = zc;
              break;
            case "focusin":
              P = "focus", C = oi;
              break;
            case "focusout":
              P = "blur", C = oi;
              break;
            case "beforeblur":
            case "afterblur":
              C = oi;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = mc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Lc;
              break;
            case Iu:
            case Fu:
            case Uu:
              C = yc;
              break;
            case Au:
              C = jc;
              break;
            case "scroll":
              C = pc;
              break;
            case "wheel":
              C = Dc;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = kc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = yu;
          }
          var T = (t & 4) !== 0, Se = !T && e === "scroll", g = T ? y !== null ? y + "Capture" : null : y;
          T = [];
          for (var c = h, m; c !== null; ) {
            m = c;
            var x = m.stateNode;
            if (m.tag === 5 && x !== null && (m = x, g !== null && (x = Vn(c, g), x != null && T.push(ur(c, x, m)))), Se) break;
            c = c.return;
          }
          0 < T.length && (y = new C(y, P, null, n, w), k.push({ event: y, listeners: T }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Vl && (P = n.relatedTarget || n.fromElement) && (en(P) || P[Et])) break e;
          if ((C || y) && (y = w.window === w ? w : (y = w.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (P = n.relatedTarget || n.toElement, C = h, P = P ? en(P) : null, P !== null && (Se = bt(P), P !== Se || P.tag !== 5 && P.tag !== 6) && (P = null)) : (C = null, P = h), C !== P)) {
            if (T = hu, x = "onMouseLeave", g = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (T = yu, x = "onPointerLeave", g = "onPointerEnter", c = "pointer"), Se = C == null ? y : Cn(C), m = P == null ? y : Cn(P), y = new T(x, c + "leave", C, n, w), y.target = Se, y.relatedTarget = m, x = null, en(w) === h && (T = new T(g, c + "enter", P, n, w), T.target = m, T.relatedTarget = Se, x = T), Se = x, C && P) t: {
              for (T = C, g = P, c = 0, m = T; m; m = Sn(m)) c++;
              for (m = 0, x = g; x; x = Sn(x)) m++;
              for (; 0 < c - m; ) T = Sn(T), c--;
              for (; 0 < m - c; ) g = Sn(g), m--;
              for (; c--; ) {
                if (T === g || g !== null && T === g.alternate) break t;
                T = Sn(T), g = Sn(g);
              }
              T = null;
            }
            else T = null;
            C !== null && Qu(k, y, C, T, !1), P !== null && Se !== null && Qu(k, Se, P, T, !0);
          }
        }
        e: {
          if (y = h ? Cn(h) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var j = $c;
          else if (Cu(y)) if (Nu) j = Qc;
          else {
            j = Hc;
            var D = Vc;
          }
          else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (j = Wc);
          if (j && (j = j(e, h))) {
            Eu(k, j, n, w);
            break e;
          }
          D && D(e, y, h), e === "focusout" && (D = y._wrapperState) && D.controlled && y.type === "number" && Fl(y, "number", y.value);
        }
        switch (D = h ? Cn(h) : window, e) {
          case "focusin":
            (Cu(D) || D.contentEditable === "true") && (kn = D, di = h, lr = null);
            break;
          case "focusout":
            lr = di = kn = null;
            break;
          case "mousedown":
            pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pi = !1, Du(k, n, w);
            break;
          case "selectionchange":
            if (Gc) break;
          case "keydown":
          case "keyup":
            Du(k, n, w);
        }
        var O;
        if (si) e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
        else wn ? Su(e, n) && (U = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
        U && (wu && n.locale !== "ko" && (wn || U !== "onCompositionStart" ? U === "onCompositionEnd" && wn && (O = gu()) : (Ft = w, ni = "value" in Ft ? Ft.value : Ft.textContent, wn = !0)), D = Qr(h, U), 0 < D.length && (U = new vu(U, e, null, n, w), k.push({ event: U, listeners: D }), O ? U.data = O : (O = _u(n), O !== null && (U.data = O)))), (O = Ic ? Fc(e, n) : Uc(e, n)) && (h = Qr(h, "onBeforeInput"), 0 < h.length && (w = new vu("onBeforeInput", "beforeinput", null, n, w), k.push({ event: w, listeners: h }), w.data = O));
      }
      Hu(k, t);
    });
  }
  function ur(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Vn(e, n), i != null && r.unshift(ur(e, i, l)), i = Vn(e, t), i != null && r.push(ur(e, i, l))), e = e.return;
    }
    return r;
  }
  function Sn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n, a = u.alternate, h = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 && h !== null && (u = h, l ? (a = Vn(n, i), a != null && o.unshift(ur(n, a, u))) : l || (a = Vn(n, i), a != null && o.push(ur(n, a, u)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var qc = /\r\n?/g, bc = /\u0000|\uFFFD/g;
  function Ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(qc, `
`).replace(bc, "");
  }
  function Kr(e, t, n) {
    if (t = Ku(t), Ku(e) !== t && n) throw Error(d(425));
  }
  function Yr() {
  }
  var wi = null, ki = null;
  function xi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Si = typeof setTimeout == "function" ? setTimeout : void 0, ef = typeof clearTimeout == "function" ? clearTimeout : void 0, Yu = typeof Promise == "function" ? Promise : void 0, tf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu < "u" ? function(e) {
    return Yu.resolve(null).then(e).catch(nf);
  } : Si;
  function nf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function _i(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Jn(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Gu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _n = Math.random().toString(36).slice(2), wt = "__reactFiber$" + _n, sr = "__reactProps$" + _n, Et = "__reactContainer$" + _n, Ci = "__reactEvents$" + _n, rf = "__reactListeners$" + _n, lf = "__reactHandles$" + _n;
  function en(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Et] || n[wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gu(e); e !== null; ) {
          if (n = e[wt]) return n;
          e = Gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ar(e) {
    return e = e[wt] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Gr(e) {
    return e[sr] || null;
  }
  var Ei = [], En = -1;
  function Bt(e) {
    return { current: e };
  }
  function ce(e) {
    0 > En || (e.current = Ei[En], Ei[En] = null, En--);
  }
  function ue(e, t) {
    En++, Ei[En] = e.current, e.current = t;
  }
  var $t = {}, Fe = Bt($t), Qe = Bt(!1), tn = $t;
  function Nn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function Xr() {
    ce(Qe), ce(Fe);
  }
  function Xu(e, t, n) {
    if (Fe.current !== $t) throw Error(d(168));
    ue(Fe, t), ue(Qe, n);
  }
  function Zu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, ne(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Zr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, tn = Fe.current, ue(Fe, e), ue(Qe, Qe.current), !0;
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n ? (e = Zu(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ce(Qe), ce(Fe), ue(Fe, e)) : ce(Qe), ue(Qe, n);
  }
  var Nt = null, Jr = !1, Ni = !1;
  function qu(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  function of(e) {
    Jr = !0, qu(e);
  }
  function Vt() {
    if (!Ni && Nt !== null) {
      Ni = !0;
      var e = 0, t = ie;
      try {
        var n = Nt;
        for (ie = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Nt = null, Jr = !1;
      } catch (l) {
        throw Nt !== null && (Nt = Nt.slice(e + 1)), eu(Gl, Vt), l;
      } finally {
        ie = t, Ni = !1;
      }
    }
    return null;
  }
  var zn = [], Pn = 0, qr = null, br = 0, rt = [], lt = 0, nn = null, zt = 1, Pt = "";
  function rn(e, t) {
    zn[Pn++] = br, zn[Pn++] = qr, qr = e, br = t;
  }
  function bu(e, t, n) {
    rt[lt++] = zt, rt[lt++] = Pt, rt[lt++] = nn, nn = e;
    var r = zt;
    e = Pt;
    var l = 32 - ft(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - ft(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, zt = 1 << 32 - ft(t) + l | n << l | r, Pt = i + e;
    } else zt = 1 << i | n << l | r, Pt = e;
  }
  function zi(e) {
    e.return !== null && (rn(e, 1), bu(e, 1, 0));
  }
  function Pi(e) {
    for (; e === qr; ) qr = zn[--Pn], zn[Pn] = null, br = zn[--Pn], zn[Pn] = null;
    for (; e === nn; ) nn = rt[--lt], rt[lt] = null, Pt = rt[--lt], rt[lt] = null, zt = rt[--lt], rt[lt] = null;
  }
  var be = null, et = null, de = !1, pt = null;
  function es(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, be = e, et = At(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, be = e, et = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: zt, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, be = e, et = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ti(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Li(e) {
    if (de) {
      var t = et;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (Ti(e)) throw Error(d(418));
          t = At(n.nextSibling);
          var r = be;
          t && ts(e, t) ? es(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, be = e);
        }
      } else {
        if (Ti(e)) throw Error(d(418));
        e.flags = e.flags & -4097 | 2, de = !1, be = e;
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    be = e;
  }
  function el(e) {
    if (e !== be) return !1;
    if (!de) return ns(e), de = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)), t && (t = et)) {
      if (Ti(e)) throw rs(), Error(d(418));
      for (; t; ) es(e, t), t = At(t.nextSibling);
    }
    if (ns(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                et = At(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = et; e; ) e = At(e.nextSibling);
  }
  function Tn() {
    et = be = null, de = !1;
  }
  function Ri(e) {
    pt === null ? pt = [e] : pt.push(e);
  }
  var uf = _e.ReactCurrentBatchConfig;
  function cr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(d(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(d(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var u = l.refs;
          o === null ? delete u[i] : u[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
    function t(g, c) {
      if (e) {
        var m = g.deletions;
        m === null ? (g.deletions = [c], g.flags |= 16) : m.push(c);
      }
    }
    function n(g, c) {
      if (!e) return null;
      for (; c !== null; ) t(g, c), c = c.sibling;
      return null;
    }
    function r(g, c) {
      for (g = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? g.set(c.key, c) : g.set(c.index, c), c = c.sibling;
      return g;
    }
    function l(g, c) {
      return g = Zt(g, c), g.index = 0, g.sibling = null, g;
    }
    function i(g, c, m) {
      return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < c ? (g.flags |= 2, c) : m) : (g.flags |= 2, c)) : (g.flags |= 1048576, c);
    }
    function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function u(g, c, m, x) {
      return c === null || c.tag !== 6 ? (c = _o(m, g.mode, x), c.return = g, c) : (c = l(c, m), c.return = g, c);
    }
    function a(g, c, m, x) {
      var j = m.type;
      return j === ke ? w(g, c, m.props.children, x, m.key) : c !== null && (c.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Pe && ls(j) === c.type) ? (x = l(c, m.props), x.ref = cr(g, c, m), x.return = g, x) : (x = El(m.type, m.key, m.props, null, g.mode, x), x.ref = cr(g, c, m), x.return = g, x);
    }
    function h(g, c, m, x) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Co(m, g.mode, x), c.return = g, c) : (c = l(c, m.children || []), c.return = g, c);
    }
    function w(g, c, m, x, j) {
      return c === null || c.tag !== 7 ? (c = dn(m, g.mode, x, j), c.return = g, c) : (c = l(c, m), c.return = g, c);
    }
    function k(g, c, m) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = _o("" + c, g.mode, m), c.return = g, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case le:
            return m = El(c.type, c.key, c.props, null, g.mode, m), m.ref = cr(g, null, c), m.return = g, m;
          case ve:
            return c = Co(c, g.mode, m), c.return = g, c;
          case Pe:
            var x = c._init;
            return k(g, x(c._payload), m);
        }
        if (An(c) || I(c)) return c = dn(c, g.mode, m, null), c.return = g, c;
        tl(g, c);
      }
      return null;
    }
    function y(g, c, m, x) {
      var j = c !== null ? c.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : u(g, c, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            return m.key === j ? a(g, c, m, x) : null;
          case ve:
            return m.key === j ? h(g, c, m, x) : null;
          case Pe:
            return j = m._init, y(
              g,
              c,
              j(m._payload),
              x
            );
        }
        if (An(m) || I(m)) return j !== null ? null : w(g, c, m, x, null);
        tl(g, m);
      }
      return null;
    }
    function C(g, c, m, x, j) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(m) || null, u(c, g, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case le:
            return g = g.get(x.key === null ? m : x.key) || null, a(c, g, x, j);
          case ve:
            return g = g.get(x.key === null ? m : x.key) || null, h(c, g, x, j);
          case Pe:
            var D = x._init;
            return C(g, c, m, D(x._payload), j);
        }
        if (An(x) || I(x)) return g = g.get(m) || null, w(c, g, x, j, null);
        tl(c, x);
      }
      return null;
    }
    function P(g, c, m, x) {
      for (var j = null, D = null, O = c, U = c = 0, Me = null; O !== null && U < m.length; U++) {
        O.index > U ? (Me = O, O = null) : Me = O.sibling;
        var te = y(g, O, m[U], x);
        if (te === null) {
          O === null && (O = Me);
          break;
        }
        e && O && te.alternate === null && t(g, O), c = i(te, c, U), D === null ? j = te : D.sibling = te, D = te, O = Me;
      }
      if (U === m.length) return n(g, O), de && rn(g, U), j;
      if (O === null) {
        for (; U < m.length; U++) O = k(g, m[U], x), O !== null && (c = i(O, c, U), D === null ? j = O : D.sibling = O, D = O);
        return de && rn(g, U), j;
      }
      for (O = r(g, O); U < m.length; U++) Me = C(O, g, U, m[U], x), Me !== null && (e && Me.alternate !== null && O.delete(Me.key === null ? U : Me.key), c = i(Me, c, U), D === null ? j = Me : D.sibling = Me, D = Me);
      return e && O.forEach(function(Jt) {
        return t(g, Jt);
      }), de && rn(g, U), j;
    }
    function T(g, c, m, x) {
      var j = I(m);
      if (typeof j != "function") throw Error(d(150));
      if (m = j.call(m), m == null) throw Error(d(151));
      for (var D = j = null, O = c, U = c = 0, Me = null, te = m.next(); O !== null && !te.done; U++, te = m.next()) {
        O.index > U ? (Me = O, O = null) : Me = O.sibling;
        var Jt = y(g, O, te.value, x);
        if (Jt === null) {
          O === null && (O = Me);
          break;
        }
        e && O && Jt.alternate === null && t(g, O), c = i(Jt, c, U), D === null ? j = Jt : D.sibling = Jt, D = Jt, O = Me;
      }
      if (te.done) return n(
        g,
        O
      ), de && rn(g, U), j;
      if (O === null) {
        for (; !te.done; U++, te = m.next()) te = k(g, te.value, x), te !== null && (c = i(te, c, U), D === null ? j = te : D.sibling = te, D = te);
        return de && rn(g, U), j;
      }
      for (O = r(g, O); !te.done; U++, te = m.next()) te = C(O, g, U, te.value, x), te !== null && (e && te.alternate !== null && O.delete(te.key === null ? U : te.key), c = i(te, c, U), D === null ? j = te : D.sibling = te, D = te);
      return e && O.forEach(function(Bf) {
        return t(g, Bf);
      }), de && rn(g, U), j;
    }
    function Se(g, c, m, x) {
      if (typeof m == "object" && m !== null && m.type === ke && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            e: {
              for (var j = m.key, D = c; D !== null; ) {
                if (D.key === j) {
                  if (j = m.type, j === ke) {
                    if (D.tag === 7) {
                      n(g, D.sibling), c = l(D, m.props.children), c.return = g, g = c;
                      break e;
                    }
                  } else if (D.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Pe && ls(j) === D.type) {
                    n(g, D.sibling), c = l(D, m.props), c.ref = cr(g, D, m), c.return = g, g = c;
                    break e;
                  }
                  n(g, D);
                  break;
                } else t(g, D);
                D = D.sibling;
              }
              m.type === ke ? (c = dn(m.props.children, g.mode, x, m.key), c.return = g, g = c) : (x = El(m.type, m.key, m.props, null, g.mode, x), x.ref = cr(g, c, m), x.return = g, g = x);
            }
            return o(g);
          case ve:
            e: {
              for (D = m.key; c !== null; ) {
                if (c.key === D) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(g, c.sibling), c = l(c, m.children || []), c.return = g, g = c;
                  break e;
                } else {
                  n(g, c);
                  break;
                }
                else t(g, c);
                c = c.sibling;
              }
              c = Co(m, g.mode, x), c.return = g, g = c;
            }
            return o(g);
          case Pe:
            return D = m._init, Se(g, c, D(m._payload), x);
        }
        if (An(m)) return P(g, c, m, x);
        if (I(m)) return T(g, c, m, x);
        tl(g, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(g, c.sibling), c = l(c, m), c.return = g, g = c) : (n(g, c), c = _o(m, g.mode, x), c.return = g, g = c), o(g)) : n(g, c);
    }
    return Se;
  }
  var Ln = is(!0), os = is(!1), nl = Bt(null), rl = null, Rn = null, ji = null;
  function Mi() {
    ji = Rn = rl = null;
  }
  function Di(e) {
    var t = nl.current;
    ce(nl), e._currentValue = t;
  }
  function Oi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function jn(e, t) {
    rl = e, ji = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ye = !0), e.firstContext = null);
  }
  function it(e) {
    var t = e._currentValue;
    if (ji !== e) if (e = { context: e, memoizedValue: t, next: null }, Rn === null) {
      if (rl === null) throw Error(d(308));
      Rn = e, rl.dependencies = { lanes: 0, firstContext: e };
    } else Rn = Rn.next = e;
    return t;
  }
  var ln = null;
  function Ii(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ii(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Tt(e, r);
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ht = !1;
  function Fi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ss(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (J & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Tt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Ii(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Tt(e, n);
  }
  function ll(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Jl(e, n);
    }
  }
  function as(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function il(e, t, n, r) {
    var l = e.updateQueue;
    Ht = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u, h = a.next;
      a.next = null, o === null ? i = h : o.next = h, o = a;
      var w = e.alternate;
      w !== null && (w = w.updateQueue, u = w.lastBaseUpdate, u !== o && (u === null ? w.firstBaseUpdate = h : u.next = h, w.lastBaseUpdate = a));
    }
    if (i !== null) {
      var k = l.baseState;
      o = 0, w = h = a = null, u = i;
      do {
        var y = u.lane, C = u.eventTime;
        if ((r & y) === y) {
          w !== null && (w = w.next = {
            eventTime: C,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var P = e, T = u;
            switch (y = t, C = n, T.tag) {
              case 1:
                if (P = T.payload, typeof P == "function") {
                  k = P.call(C, k, y);
                  break e;
                }
                k = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = T.payload, y = typeof P == "function" ? P.call(C, k, y) : P, y == null) break e;
                k = N({}, k, y);
                break e;
              case 2:
                Ht = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [u] : y.push(u));
        } else C = { eventTime: C, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, w === null ? (h = w = C, a = k) : w = w.next = C, o |= y;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          y = u, u = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
        }
      } while (!0);
      if (w === null && (a = k), l.baseState = a, l.firstBaseUpdate = h, l.lastBaseUpdate = w, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      sn |= o, e.lanes = o, e.memoizedState = k;
    }
  }
  function cs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(d(191, l));
        l.call(r);
      }
    }
  }
  var fr = {}, kt = Bt(fr), dr = Bt(fr), pr = Bt(fr);
  function on(e) {
    if (e === fr) throw Error(d(174));
    return e;
  }
  function Ui(e, t) {
    switch (ue(pr, t), ue(dr, e), ue(kt, fr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Al(t, e);
    }
    ce(kt), ue(kt, t);
  }
  function Mn() {
    ce(kt), ce(dr), ce(pr);
  }
  function fs(e) {
    on(pr.current);
    var t = on(kt.current), n = Al(t, e.type);
    t !== n && (ue(dr, e), ue(kt, n));
  }
  function Ai(e) {
    dr.current === e && (ce(kt), ce(dr));
  }
  var ge = Bt(0);
  function ol(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Bi = [];
  function $i() {
    for (var e = 0; e < Bi.length; e++) Bi[e]._workInProgressVersionPrimary = null;
    Bi.length = 0;
  }
  var ul = _e.ReactCurrentDispatcher, Vi = _e.ReactCurrentBatchConfig, un = 0, me = null, Te = null, Re = null, sl = !1, gr = !1, mr = 0, sf = 0;
  function Ue() {
    throw Error(d(321));
  }
  function Hi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function Wi(e, t, n, r, l, i) {
    if (un = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ul.current = e === null || e.memoizedState === null ? df : pf, e = n(r, l), gr) {
      i = 0;
      do {
        if (gr = !1, mr = 0, 25 <= i) throw Error(d(301));
        i += 1, Re = Te = null, t.updateQueue = null, ul.current = gf, e = n(r, l);
      } while (gr);
    }
    if (ul.current = fl, t = Te !== null && Te.next !== null, un = 0, Re = Te = me = null, sl = !1, t) throw Error(d(300));
    return e;
  }
  function Qi() {
    var e = mr !== 0;
    return mr = 0, e;
  }
  function xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Re === null ? me.memoizedState = Re = e : Re = Re.next = e, Re;
  }
  function ot() {
    if (Te === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Re === null ? me.memoizedState : Re.next;
    if (t !== null) Re = t, Te = e;
    else {
      if (e === null) throw Error(d(310));
      Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Re === null ? me.memoizedState = Re = e : Re = Re.next = e;
    }
    return Re;
  }
  function hr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ki(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = Te, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var u = o = null, a = null, h = i;
      do {
        var w = h.lane;
        if ((un & w) === w) a !== null && (a = a.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var k = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          a === null ? (u = a = k, o = r) : a = a.next = k, me.lanes |= w, sn |= w;
        }
        h = h.next;
      } while (h !== null && h !== i);
      a === null ? o = r : a.next = u, dt(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, me.lanes |= i, sn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yi(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      dt(i, t.memoizedState) || (Ye = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function ds() {
  }
  function ps(e, t) {
    var n = me, r = ot(), l = t(), i = !dt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Ye = !0), r = r.queue, Gi(hs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Re !== null && Re.memoizedState.tag & 1) {
      if (n.flags |= 2048, vr(9, ms.bind(null, n, r, l, t), void 0, null), je === null) throw Error(d(349));
      (un & 30) !== 0 || gs(n, t, l);
    }
    return l;
  }
  function gs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ms(e, t, n, r) {
    t.value = n, t.getSnapshot = r, vs(t) && ys(e);
  }
  function hs(e, t, n) {
    return n(function() {
      vs(t) && ys(e);
    });
  }
  function vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function ys(e) {
    var t = Tt(e, 1);
    t !== null && vt(t, e, 1, -1);
  }
  function ws(e) {
    var t = xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ff.bind(null, me, e), [t.memoizedState, e];
  }
  function vr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return ot().memoizedState;
  }
  function al(e, t, n, r) {
    var l = xt();
    me.flags |= e, l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function cl(e, t, n, r) {
    var l = ot();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Te !== null) {
      var o = Te.memoizedState;
      if (i = o.destroy, r !== null && Hi(r, o.deps)) {
        l.memoizedState = vr(t, n, i, r);
        return;
      }
    }
    me.flags |= e, l.memoizedState = vr(1 | t, n, i, r);
  }
  function xs(e, t) {
    return al(8390656, 8, e, t);
  }
  function Gi(e, t) {
    return cl(2048, 8, e, t);
  }
  function Ss(e, t) {
    return cl(4, 2, e, t);
  }
  function _s(e, t) {
    return cl(4, 4, e, t);
  }
  function Cs(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Es(e, t, n) {
    return n = n != null ? n.concat([e]) : null, cl(4, 4, Cs.bind(null, t, e), n);
  }
  function Xi() {
  }
  function Ns(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function zs(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ps(e, t, n) {
    return (un & 21) === 0 ? (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n) : (dt(n, t) || (n = lu(), me.lanes |= n, sn |= n, e.baseState = !0), t);
  }
  function af(e, t) {
    var n = ie;
    ie = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Vi.transition;
    Vi.transition = {};
    try {
      e(!1), t();
    } finally {
      ie = n, Vi.transition = r;
    }
  }
  function Ts() {
    return ot().memoizedState;
  }
  function cf(e, t, n) {
    var r = Gt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ls(e)) Rs(t, n);
    else if (n = us(e, t, n, r), n !== null) {
      var l = He();
      vt(n, e, r, l), js(n, t, r);
    }
  }
  function ff(e, t, n) {
    var r = Gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Rs(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, u = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = u, dt(u, o)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Ii(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = us(e, t, l, r), n !== null && (l = He(), vt(n, e, r, l), js(n, t, r));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function Rs(e, t) {
    gr = sl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Jl(e, n);
    }
  }
  var fl = { readContext: it, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: !1 }, df = { readContext: it, useCallback: function(e, t) {
    return xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: it, useEffect: xs, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, al(
      4194308,
      4,
      Cs.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return al(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return al(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = cf.bind(null, me, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ws, useDebugValue: Xi, useDeferredValue: function(e) {
    return xt().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), t = e[0];
    return e = af.bind(null, e[1]), xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = me, l = xt();
    if (de) {
      if (n === void 0) throw Error(d(407));
      n = n();
    } else {
      if (n = t(), je === null) throw Error(d(349));
      (un & 30) !== 0 || gs(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, xs(hs.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, vr(9, ms.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = xt(), t = je.identifierPrefix;
    if (de) {
      var n = Pt, r = zt;
      n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = sf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, pf = {
    readContext: it,
    useCallback: Ns,
    useContext: it,
    useEffect: Gi,
    useImperativeHandle: Es,
    useInsertionEffect: Ss,
    useLayoutEffect: _s,
    useMemo: zs,
    useReducer: Ki,
    useRef: ks,
    useState: function() {
      return Ki(hr);
    },
    useDebugValue: Xi,
    useDeferredValue: function(e) {
      var t = ot();
      return Ps(t, Te.memoizedState, e);
    },
    useTransition: function() {
      var e = Ki(hr)[0], t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: ds,
    useSyncExternalStore: ps,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, gf = { readContext: it, useCallback: Ns, useContext: it, useEffect: Gi, useImperativeHandle: Es, useInsertionEffect: Ss, useLayoutEffect: _s, useMemo: zs, useReducer: Yi, useRef: ks, useState: function() {
    return Yi(hr);
  }, useDebugValue: Xi, useDeferredValue: function(e) {
    var t = ot();
    return Te === null ? t.memoizedState = e : Ps(t, Te.memoizedState, e);
  }, useTransition: function() {
    var e = Yi(hr)[0], t = ot().memoizedState;
    return [e, t];
  }, useMutableSource: ds, useSyncExternalStore: ps, useId: Ts, unstable_isNewReconciler: !1 };
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = N({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Zi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : N({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var dl = { isMounted: function(e) {
    return (e = e._reactInternals) ? bt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = He(), l = Gt(e), i = Lt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Wt(e, i, l), t !== null && (vt(t, e, l, r), ll(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = He(), l = Gt(e), i = Lt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wt(e, i, l), t !== null && (vt(t, e, l, r), ll(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = He(), r = Gt(e), l = Lt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Wt(e, l, r), t !== null && (vt(t, e, r, n), ll(t, e, r));
  } };
  function Ms(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !rr(n, r) || !rr(l, i) : !0;
  }
  function Ds(e, t, n) {
    var r = !1, l = $t, i = t.contextType;
    return typeof i == "object" && i !== null ? i = it(i) : (l = Ke(t) ? tn : Fe.current, r = t.contextTypes, i = (r = r != null) ? Nn(e, l) : $t), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = dl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Os(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dl.enqueueReplaceState(t, t.state, null);
  }
  function Ji(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Fi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = it(i) : (i = Ke(t) ? tn : Fe.current, l.context = Nn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Zi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && dl.enqueueReplaceState(l, l.state, null), il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Dn(e, t) {
    try {
      var n = "", r = t;
      do
        n += G(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function qi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      wl || (wl = !0, mo = r), bi(e, t);
    }, n;
  }
  function Fs(e, t, n) {
    n = Lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        bi(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      bi(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Tf.bind(null, e, t, n), t.then(e, e));
  }
  function As(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bs(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, Wt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var hf = _e.ReactCurrentOwner, Ye = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : Ln(t, e.child, n, r);
  }
  function $s(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return jn(t, l), r = Wi(e, t, n, r, i, l), n = Qi(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (de && n && zi(t), t.flags |= 1, Ve(e, t, r, l), t.child);
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !So(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Hs(e, t, i, r, l)) : (e = El(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : rr, n(o, r) && e.ref === t.ref) return Rt(e, t, l);
    }
    return t.flags |= 1, e = Zt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (rr(i, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ye = !0);
      else return t.lanes = e.lanes, Rt(e, t, l);
    }
    return eo(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(In, tt), tt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(In, tt), tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ue(In, tt), tt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(In, tt), tt |= r;
    return Ve(e, t, l, n), t.child;
  }
  function Qs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function eo(e, t, n, r, l) {
    var i = Ke(n) ? tn : Fe.current;
    return i = Nn(t, i), jn(t, l), n = Wi(e, t, n, r, i, l), r = Qi(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (de && r && zi(t), t.flags |= 1, Ve(e, t, n, l), t.child);
  }
  function Ks(e, t, n, r, l) {
    if (Ke(n)) {
      var i = !0;
      Zr(t);
    } else i = !1;
    if (jn(t, l), t.stateNode === null) gl(e, t), Ds(t, n, r), Ji(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, u = t.memoizedProps;
      o.props = u;
      var a = o.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = it(h) : (h = Ke(n) ? tn : Fe.current, h = Nn(t, h));
      var w = n.getDerivedStateFromProps, k = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      k || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== h) && Os(t, o, r, h), Ht = !1;
      var y = t.memoizedState;
      o.state = y, il(t, r, o, l), a = t.memoizedState, u !== r || y !== a || Qe.current || Ht ? (typeof w == "function" && (Zi(t, n, w, r), a = t.memoizedState), (u = Ht || Ms(t, n, u, r, y, a, h)) ? (k || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = h, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, ss(e, t), u = t.memoizedProps, h = t.type === t.elementType ? u : gt(t.type, u), o.props = h, k = t.pendingProps, y = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = Ke(n) ? tn : Fe.current, a = Nn(t, a));
      var C = n.getDerivedStateFromProps;
      (w = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== k || y !== a) && Os(t, o, r, a), Ht = !1, y = t.memoizedState, o.state = y, il(t, r, o, l);
      var P = t.memoizedState;
      u !== k || y !== P || Qe.current || Ht ? (typeof C == "function" && (Zi(t, n, C, r), P = t.memoizedState), (h = Ht || Ms(t, n, h, r, y, P, a) || !1) ? (w || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, P, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), o.props = r, o.state = P, o.context = a, r = h) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return to(e, t, n, r, i, l);
  }
  function to(e, t, n, r, l, i) {
    Qs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Ju(t, n, !1), Rt(e, t, i);
    r = t.stateNode, hf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Ln(t, e.child, null, i), t.child = Ln(t, null, u, i)) : Ve(e, t, u, i), t.memoizedState = r.state, l && Ju(t, n, !0), t.child;
  }
  function Ys(e) {
    var t = e.stateNode;
    t.pendingContext ? Xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xu(e, t.context, !1), Ui(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return Tn(), Ri(l), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var no = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ro(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps, l = ge.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ue(ge, l & 1), e === null)
      return Li(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Nl(o, r, 0, null), e = dn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ro(n), t.memoizedState = no, e) : lo(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return vf(e, t, o, r, u, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
      var a = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Zt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Zt(u, i) : (i = dn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ro(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = no, r;
    }
    return i = e.child, e = i.sibling, r = Zt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function lo(e, t) {
    return t = Nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function pl(e, t, n, r) {
    return r !== null && Ri(r), Ln(t, e.child, null, n), e = lo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = qi(Error(d(422))), pl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), i = dn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Ln(t, e.child, null, o), t.child.memoizedState = ro(o), t.memoizedState = no, i);
    if ((t.mode & 1) === 0) return pl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, i = Error(d(419)), r = qi(i, r, void 0), pl(e, t, o, r);
    }
    if (u = (o & e.childLanes) !== 0, Ye || u) {
      if (r = je, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Tt(e, l), vt(r, e, l, -1));
      }
      return xo(), r = qi(Error(d(421))), pl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, et = At(l.nextSibling), be = t, de = !0, pt = null, e !== null && (rt[lt++] = zt, rt[lt++] = Pt, rt[lt++] = nn, zt = e.id, Pt = e.overflow, nn = t), t = lo(t, r.children), t.flags |= 4096, t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Oi(e.return, t, n);
  }
  function io(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (Ve(e, t, r.children, n), r = ge.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
        else if (e.tag === 19) Zs(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ue(ge, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ol(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), io(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ol(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        io(t, !0, n, null, i);
        break;
      case "together":
        io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function gl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Rt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function yf(e, t, n) {
    switch (t.tag) {
      case 3:
        Ys(t), Tn();
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Ke(t.type) && Zr(t);
        break;
      case 4:
        Ui(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ue(nl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ue(ge, ge.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Xs(e, t, n) : (ue(ge, ge.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
        ue(ge, ge.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ue(ge, ge.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ws(e, t, n);
    }
    return Rt(e, t, n);
  }
  var qs, oo, bs, ea;
  qs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, oo = function() {
  }, bs = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, on(kt.current);
      var i = null;
      switch (n) {
        case "input":
          l = _t(e, l), r = _t(e, r), i = [];
          break;
        case "select":
          l = N({}, l, { value: void 0 }), r = N({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Ul(e, l), r = Ul(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
      }
      Bl(n, r);
      var o;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var u = l[h];
        for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
      for (h in r) {
        var a = r[h];
        if (u = l != null ? l[h] : void 0, r.hasOwnProperty(h) && a !== u && (a != null || u != null)) if (h === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
        } else n || (i || (i = []), i.push(
          h,
          n
        )), n = a;
        else h === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(h, a)) : h === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(h, "" + a) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (E.hasOwnProperty(h) ? (a != null && h === "onScroll" && ae("scroll", e), i || u === a || (i = [])) : (i = i || []).push(h, a));
      }
      n && (i = i || []).push("style", n);
      var h = i;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, ea = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function yr(e, t) {
    if (!de) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function wf(e, t, n) {
    var r = t.pendingProps;
    switch (Pi(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ae(t), null;
      case 1:
        return Ke(t.type) && Xr(), Ae(t), null;
      case 3:
        return r = t.stateNode, Mn(), ce(Qe), ce(Fe), $i(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (el(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pt !== null && (yo(pt), pt = null))), oo(e, t), Ae(t), null;
      case 5:
        Ai(t);
        var l = on(pr.current);
        if (n = t.type, e !== null && t.stateNode != null) bs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Ae(t), null;
          }
          if (e = on(kt.current), el(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[wt] = t, r[sr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ae("cancel", r), ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ir.length; l++) ae(ir[l], r);
                break;
              case "source":
                ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ae(
                  "error",
                  r
                ), ae("load", r);
                break;
              case "details":
                ae("toggle", r);
                break;
              case "input":
                Ct(r, i), ae("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ae("invalid", r);
                break;
              case "textarea":
                Fo(r, i), ae("invalid", r);
            }
            Bl(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Kr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Kr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : E.hasOwnProperty(o) && u != null && o === "onScroll" && ae("scroll", r);
            }
            switch (n) {
              case "input":
                pn(r), Io(r, i, !0);
                break;
              case "textarea":
                pn(r), Ao(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Yr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[wt] = t, e[sr] = r, qs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = $l(n, r), n) {
                case "dialog":
                  ae("cancel", e), ae("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ae("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ir.length; l++) ae(ir[l], e);
                  l = r;
                  break;
                case "source":
                  ae("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ae(
                    "error",
                    e
                  ), ae("load", e), l = r;
                  break;
                case "details":
                  ae("toggle", e), l = r;
                  break;
                case "input":
                  Ct(e, r), l = _t(e, r), ae("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = N({}, r, { value: void 0 }), ae("invalid", e);
                  break;
                case "textarea":
                  Fo(e, r), l = Ul(e, r), ae("invalid", e);
                  break;
                default:
                  l = r;
              }
              Bl(n, l), u = l;
              for (i in u) if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style" ? Ho(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && $o(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Bn(e, a) : typeof a == "number" && Bn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (E.hasOwnProperty(i) ? a != null && i === "onScroll" && ae("scroll", e) : a != null && se(e, i, a, o));
              }
              switch (n) {
                case "input":
                  pn(e), Io(e, r, !1);
                  break;
                case "textarea":
                  pn(e), Ao(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? gn(e, !!r.multiple, i, !1) : r.defaultValue != null && gn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Yr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ae(t), null;
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (n = on(pr.current), on(kt.current), el(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (i = r.nodeValue !== n) && (e = be, e !== null)) switch (e.tag) {
              case 3:
                Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
        }
        return Ae(t), null;
      case 13:
        if (ce(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (de && et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) rs(), Tn(), t.flags |= 98560, i = !1;
          else if (i = el(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(d(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(d(317));
              i[wt] = t;
            } else Tn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ae(t), i = !1;
          } else pt !== null && (yo(pt), pt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ge.current & 1) !== 0 ? Le === 0 && (Le = 3) : xo())), t.updateQueue !== null && (t.flags |= 4), Ae(t), null);
      case 4:
        return Mn(), oo(e, t), e === null && or(t.stateNode.containerInfo), Ae(t), null;
      case 10:
        return Di(t.type._context), Ae(t), null;
      case 17:
        return Ke(t.type) && Xr(), Ae(t), null;
      case 19:
        if (ce(ge), i = t.memoizedState, i === null) return Ae(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) yr(i, !1);
        else {
          if (Le !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = ol(e), o !== null) {
              for (t.flags |= 128, yr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ue(ge, ge.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && xe() > Fn && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ol(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !de) return Ae(t), null;
          } else 2 * xe() - i.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xe(), t.sibling = null, n = ge.current, ue(ge, r ? n & 1 | 2 : n & 1), t) : (Ae(t), null);
      case 22:
      case 23:
        return ko(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (tt & 1073741824) !== 0 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function kf(e, t) {
    switch (Pi(t), t.tag) {
      case 1:
        return Ke(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Mn(), ce(Qe), ce(Fe), $i(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ai(t), null;
      case 13:
        if (ce(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(d(340));
          Tn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(ge), null;
      case 4:
        return Mn(), null;
      case 10:
        return Di(t.type._context), null;
      case 22:
      case 23:
        return ko(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1, Be = !1, xf = typeof WeakSet == "function" ? WeakSet : Set, z = null;
  function On(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ye(e, t, r);
    }
    else n.current = null;
  }
  function uo(e, t, n) {
    try {
      n();
    } catch (r) {
      ye(e, t, r);
    }
  }
  var ta = !1;
  function Sf(e, t) {
    if (wi = Or, e = Mu(), fi(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, u = -1, a = -1, h = 0, w = 0, k = e, y = null;
          t: for (; ; ) {
            for (var C; k !== n || l !== 0 && k.nodeType !== 3 || (u = o + l), k !== i || r !== 0 && k.nodeType !== 3 || (a = o + r), k.nodeType === 3 && (o += k.nodeValue.length), (C = k.firstChild) !== null; )
              y = k, k = C;
            for (; ; ) {
              if (k === e) break t;
              if (y === n && ++h === l && (u = o), y === i && ++w === r && (a = o), (C = k.nextSibling) !== null) break;
              k = y, y = k.parentNode;
            }
            k = C;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ki = { focusedElem: e, selectionRange: n }, Or = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
    else for (; z !== null; ) {
      t = z;
      try {
        var P = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (P !== null) {
              var T = P.memoizedProps, Se = P.memoizedState, g = t.stateNode, c = g.getSnapshotBeforeUpdate(t.elementType === t.type ? T : gt(t.type, T), Se);
              g.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (x) {
        ye(t, t.return, x);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, z = e;
        break;
      }
      z = t.return;
    }
    return P = ta, ta = !1, P;
  }
  function wr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && uo(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function so(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function na(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, na(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[sr], delete t[Ci], delete t[rf], delete t[lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ra(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ao(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ao(e, t, n), e = e.sibling; e !== null; ) ao(e, t, n), e = e.sibling;
  }
  function co(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (co(e, t, n), e = e.sibling; e !== null; ) co(e, t, n), e = e.sibling;
  }
  var De = null, mt = !1;
  function Qt(e, t, n) {
    for (n = n.child; n !== null; ) ia(e, t, n), n = n.sibling;
  }
  function ia(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function") try {
      yt.onCommitFiberUnmount(Tr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Be || On(n, t);
      case 6:
        var r = De, l = mt;
        De = null, Qt(e, t, n), De = r, mt = l, De !== null && (mt ? (e = De, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
        break;
      case 18:
        De !== null && (mt ? (e = De, n = n.stateNode, e.nodeType === 8 ? _i(e.parentNode, n) : e.nodeType === 1 && _i(e, n), Jn(e)) : _i(De, n.stateNode));
        break;
      case 4:
        r = De, l = mt, De = n.stateNode.containerInfo, mt = !0, Qt(e, t, n), De = r, mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && uo(n, t, o), l = l.next;
          } while (l !== r);
        }
        Qt(e, t, n);
        break;
      case 1:
        if (!Be && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ye(n, t, u);
        }
        Qt(e, t, n);
        break;
      case 21:
        Qt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, Qt(e, t, n), Be = r) : Qt(e, t, n);
        break;
      default:
        Qt(e, t, n);
    }
  }
  function oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new xf()), t.forEach(function(r) {
        var l = Rf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              De = u.stateNode, mt = !1;
              break e;
            case 3:
              De = u.stateNode.containerInfo, mt = !0;
              break e;
            case 4:
              De = u.stateNode.containerInfo, mt = !0;
              break e;
          }
          u = u.return;
        }
        if (De === null) throw Error(d(160));
        ia(i, o, l), De = null, mt = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (h) {
        ye(l, t, h);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ua(t, e), t = t.sibling;
  }
  function ua(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), St(e), r & 4) {
          try {
            wr(3, e, e.return), hl(3, e);
          } catch (T) {
            ye(e, e.return, T);
          }
          try {
            wr(5, e, e.return);
          } catch (T) {
            ye(e, e.return, T);
          }
        }
        break;
      case 1:
        ht(t, e), St(e), r & 512 && n !== null && On(n, n.return);
        break;
      case 5:
        if (ht(t, e), St(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Bn(l, "");
          } catch (T) {
            ye(e, e.return, T);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            u === "input" && i.type === "radio" && i.name != null && Oo(l, i), $l(u, o);
            var h = $l(u, i);
            for (o = 0; o < a.length; o += 2) {
              var w = a[o], k = a[o + 1];
              w === "style" ? Ho(l, k) : w === "dangerouslySetInnerHTML" ? $o(l, k) : w === "children" ? Bn(l, k) : se(l, w, k, h);
            }
            switch (u) {
              case "input":
                Il(l, i);
                break;
              case "textarea":
                Uo(l, i);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var C = i.value;
                C != null ? gn(l, !!i.multiple, C, !1) : y !== !!i.multiple && (i.defaultValue != null ? gn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : gn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[sr] = i;
          } catch (T) {
            ye(e, e.return, T);
          }
        }
        break;
      case 6:
        if (ht(t, e), St(e), r & 4) {
          if (e.stateNode === null) throw Error(d(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (T) {
            ye(e, e.return, T);
          }
        }
        break;
      case 3:
        if (ht(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Jn(t.containerInfo);
        } catch (T) {
          ye(e, e.return, T);
        }
        break;
      case 4:
        ht(t, e), St(e);
        break;
      case 13:
        ht(t, e), St(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (go = xe())), r & 4 && oa(e);
        break;
      case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (h = Be) || w, ht(t, e), Be = h) : ht(t, e), St(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0) for (z = e, w = e.child; w !== null; ) {
            for (k = z = w; z !== null; ) {
              switch (y = z, C = y.child, y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, y, y.return);
                  break;
                case 1:
                  On(y, y.return);
                  var P = y.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = y, n = y.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (T) {
                      ye(r, n, T);
                    }
                  }
                  break;
                case 5:
                  On(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    ca(k);
                    continue;
                  }
              }
              C !== null ? (C.return = y, z = C) : ca(k);
            }
            w = w.sibling;
          }
          e: for (w = null, k = e; ; ) {
            if (k.tag === 5) {
              if (w === null) {
                w = k;
                try {
                  l = k.stateNode, h ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = k.stateNode, a = k.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Vo("display", o));
                } catch (T) {
                  ye(e, e.return, T);
                }
              }
            } else if (k.tag === 6) {
              if (w === null) try {
                k.stateNode.nodeValue = h ? "" : k.memoizedProps;
              } catch (T) {
                ye(e, e.return, T);
              }
            } else if ((k.tag !== 22 && k.tag !== 23 || k.memoizedState === null || k === e) && k.child !== null) {
              k.child.return = k, k = k.child;
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              w === k && (w = null), k = k.return;
            }
            w === k && (w = null), k.sibling.return = k.return, k = k.sibling;
          }
        }
        break;
      case 19:
        ht(t, e), St(e), r & 4 && oa(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ra(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(d(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Bn(l, ""), r.flags &= -33);
            var i = la(e);
            co(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, u = la(e);
            ao(e, u, o);
            break;
          default:
            throw Error(d(161));
        }
      } catch (a) {
        ye(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _f(e, t, n) {
    z = e, sa(e);
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var l = z, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var u = l.alternate, a = u !== null && u.memoizedState !== null || Be;
          u = ml;
          var h = Be;
          if (ml = o, (Be = a) && !h) for (z = l; z !== null; ) o = z, a = o.child, o.tag === 22 && o.memoizedState !== null ? fa(l) : a !== null ? (a.return = o, z = a) : fa(l);
          for (; i !== null; ) z = i, sa(i), i = i.sibling;
          z = l, ml = u, Be = h;
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, z = i) : aa(e);
    }
  }
  function aa(e) {
    for (; z !== null; ) {
      var t = z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && cs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                cs(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var h = t.alternate;
                if (h !== null) {
                  var w = h.memoizedState;
                  if (w !== null) {
                    var k = w.dehydrated;
                    k !== null && Jn(k);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(d(163));
          }
          Be || t.flags & 512 && so(t);
        } catch (y) {
          ye(t, t.return, y);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, z = n;
        break;
      }
      z = t.return;
    }
  }
  function ca(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, z = n;
        break;
      }
      z = t.return;
    }
  }
  function fa(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (a) {
              ye(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                ye(t, l, a);
              }
            }
            var i = t.return;
            try {
              so(t);
            } catch (a) {
              ye(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              so(t);
            } catch (a) {
              ye(t, o, a);
            }
        }
      } catch (a) {
        ye(t, t.return, a);
      }
      if (t === e) {
        z = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, z = u;
        break;
      }
      z = t.return;
    }
  }
  var Cf = Math.ceil, vl = _e.ReactCurrentDispatcher, fo = _e.ReactCurrentOwner, ut = _e.ReactCurrentBatchConfig, J = 0, je = null, Ee = null, Oe = 0, tt = 0, In = Bt(0), Le = 0, kr = null, sn = 0, yl = 0, po = 0, xr = null, Ge = null, go = 0, Fn = 1 / 0, jt = null, wl = !1, mo = null, Kt = null, kl = !1, Yt = null, xl = 0, Sr = 0, ho = null, Sl = -1, _l = 0;
  function He() {
    return (J & 6) !== 0 ? xe() : Sl !== -1 ? Sl : Sl = xe();
  }
  function Gt(e) {
    return (e.mode & 1) === 0 ? 1 : (J & 2) !== 0 && Oe !== 0 ? Oe & -Oe : uf.transition !== null ? (_l === 0 && (_l = lu()), _l) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pu(e.type)), e);
  }
  function vt(e, t, n, r) {
    if (50 < Sr) throw Sr = 0, ho = null, Error(d(185));
    Kn(e, n, r), ((J & 2) === 0 || e !== je) && (e === je && ((J & 2) === 0 && (yl |= n), Le === 4 && Xt(e, Oe)), Xe(e, r), n === 1 && J === 0 && (t.mode & 1) === 0 && (Fn = xe() + 500, Jr && Vt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    oc(e, t);
    var r = jr(e, e === je ? Oe : 0);
    if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && tu(n), t === 1) e.tag === 0 ? of(pa.bind(null, e)) : qu(pa.bind(null, e)), tf(function() {
        (J & 6) === 0 && Vt();
      }), n = null;
      else {
        switch (iu(r)) {
          case 1:
            n = Gl;
            break;
          case 4:
            n = nu;
            break;
          case 16:
            n = Pr;
            break;
          case 536870912:
            n = ru;
            break;
          default:
            n = Pr;
        }
        n = xa(n, da.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function da(e, t) {
    if (Sl = -1, _l = 0, (J & 6) !== 0) throw Error(d(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n) return null;
    var r = jr(e, e === je ? Oe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Cl(e, r);
    else {
      t = r;
      var l = J;
      J |= 2;
      var i = ma();
      (je !== e || Oe !== t) && (jt = null, Fn = xe() + 500, cn(e, t));
      do
        try {
          zf();
          break;
        } catch (u) {
          ga(e, u);
        }
      while (!0);
      Mi(), vl.current = i, J = l, Ee !== null ? t = 0 : (je = null, Oe = 0, t = Le);
    }
    if (t !== 0) {
      if (t === 2 && (l = Xl(e), l !== 0 && (r = l, t = vo(e, l))), t === 1) throw n = kr, cn(e, 0), Xt(e, r), Xe(e, xe()), n;
      if (t === 6) Xt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Ef(l) && (t = Cl(e, r), t === 2 && (i = Xl(e), i !== 0 && (r = i, t = vo(e, i))), t === 1)) throw n = kr, cn(e, 0), Xt(e, r), Xe(e, xe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            fn(e, Ge, jt);
            break;
          case 3:
            if (Xt(e, r), (r & 130023424) === r && (t = go + 500 - xe(), 10 < t)) {
              if (jr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                He(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Si(fn.bind(null, e, Ge, jt), t);
              break;
            }
            fn(e, Ge, jt);
            break;
          case 4:
            if (Xt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - ft(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Si(fn.bind(null, e, Ge, jt), r);
              break;
            }
            fn(e, Ge, jt);
            break;
          case 5:
            fn(e, Ge, jt);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Xe(e, xe()), e.callbackNode === n ? da.bind(null, e) : null;
  }
  function vo(e, t) {
    var n = xr;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && yo(t)), e;
  }
  function yo(e) {
    Ge === null ? Ge = e : Ge.push.apply(Ge, e);
  }
  function Ef(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Xt(e, t) {
    for (t &= ~po, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function pa(e) {
    if ((J & 6) !== 0) throw Error(d(327));
    Un();
    var t = jr(e, 0);
    if ((t & 1) === 0) return Xe(e, xe()), null;
    var n = Cl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && (t = r, n = vo(e, r));
    }
    if (n === 1) throw n = kr, cn(e, 0), Xt(e, t), Xe(e, xe()), n;
    if (n === 6) throw Error(d(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, Ge, jt), Xe(e, xe()), null;
  }
  function wo(e, t) {
    var n = J;
    J |= 1;
    try {
      return e(t);
    } finally {
      J = n, J === 0 && (Fn = xe() + 500, Jr && Vt());
    }
  }
  function an(e) {
    Yt !== null && Yt.tag === 0 && (J & 6) === 0 && Un();
    var t = J;
    J |= 1;
    var n = ut.transition, r = ie;
    try {
      if (ut.transition = null, ie = 1, e) return e();
    } finally {
      ie = r, ut.transition = n, J = t, (J & 6) === 0 && Vt();
    }
  }
  function ko() {
    tt = In.current, ce(In);
  }
  function cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ef(n)), Ee !== null) for (n = Ee.return; n !== null; ) {
      var r = n;
      switch (Pi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Xr();
          break;
        case 3:
          Mn(), ce(Qe), ce(Fe), $i();
          break;
        case 5:
          Ai(r);
          break;
        case 4:
          Mn();
          break;
        case 13:
          ce(ge);
          break;
        case 19:
          ce(ge);
          break;
        case 10:
          Di(r.type._context);
          break;
        case 22:
        case 23:
          ko();
      }
      n = n.return;
    }
    if (je = e, Ee = e = Zt(e.current, null), Oe = tt = t, Le = 0, kr = null, po = yl = sn = 0, Ge = xr = null, ln !== null) {
      for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      ln = null;
    }
    return e;
  }
  function ga(e, t) {
    do {
      var n = Ee;
      try {
        if (Mi(), ul.current = fl, sl) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          sl = !1;
        }
        if (un = 0, Re = Te = me = null, gr = !1, mr = 0, fo.current = null, n === null || n.return === null) {
          Le = 1, kr = t, Ee = null;
          break;
        }
        e: {
          var i = e, o = n.return, u = n, a = t;
          if (t = Oe, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var h = a, w = u, k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var y = w.alternate;
              y ? (w.updateQueue = y.updateQueue, w.memoizedState = y.memoizedState, w.lanes = y.lanes) : (w.updateQueue = null, w.memoizedState = null);
            }
            var C = As(o);
            if (C !== null) {
              C.flags &= -257, Bs(C, o, u, i, t), C.mode & 1 && Us(i, h, t), t = C, a = h;
              var P = t.updateQueue;
              if (P === null) {
                var T = /* @__PURE__ */ new Set();
                T.add(a), t.updateQueue = T;
              } else P.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                Us(i, h, t), xo();
                break e;
              }
              a = Error(d(426));
            }
          } else if (de && u.mode & 1) {
            var Se = As(o);
            if (Se !== null) {
              (Se.flags & 65536) === 0 && (Se.flags |= 256), Bs(Se, o, u, i, t), Ri(Dn(a, u));
              break e;
            }
          }
          i = a = Dn(a, u), Le !== 4 && (Le = 2), xr === null ? xr = [i] : xr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Is(i, a, t);
                as(i, g);
                break e;
              case 1:
                u = a;
                var c = i.type, m = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Kt === null || !Kt.has(m)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var x = Fs(i, u, t);
                  as(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        va(n);
      } catch (j) {
        t = j, Ee === n && n !== null && (Ee = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = vl.current;
    return vl.current = fl, e === null ? fl : e;
  }
  function xo() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4), je === null || (sn & 268435455) === 0 && (yl & 268435455) === 0 || Xt(je, Oe);
  }
  function Cl(e, t) {
    var n = J;
    J |= 2;
    var r = ma();
    (je !== e || Oe !== t) && (jt = null, cn(e, t));
    do
      try {
        Nf();
        break;
      } catch (l) {
        ga(e, l);
      }
    while (!0);
    if (Mi(), J = n, vl.current = r, Ee !== null) throw Error(d(261));
    return je = null, Oe = 0, Le;
  }
  function Nf() {
    for (; Ee !== null; ) ha(Ee);
  }
  function zf() {
    for (; Ee !== null && !Ja(); ) ha(Ee);
  }
  function ha(e) {
    var t = ka(e.alternate, e, tt);
    e.memoizedProps = e.pendingProps, t === null ? va(e) : Ee = t, fo.current = null;
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = wf(n, t, tt), n !== null) {
          Ee = n;
          return;
        }
      } else {
        if (n = kf(n, t), n !== null) {
          n.flags &= 32767, Ee = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Le = 6, Ee = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function fn(e, t, n) {
    var r = ie, l = ut.transition;
    try {
      ut.transition = null, ie = 1, Pf(e, t, n, r);
    } finally {
      ut.transition = l, ie = r;
    }
    return null;
  }
  function Pf(e, t, n, r) {
    do
      Un();
    while (Yt !== null);
    if ((J & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(d(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (uc(e, i), e === je && (Ee = je = null, Oe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || kl || (kl = !0, xa(Pr, function() {
      return Un(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = ut.transition, ut.transition = null;
      var o = ie;
      ie = 1;
      var u = J;
      J |= 4, fo.current = null, Sf(e, n), ua(n, e), Yc(ki), Or = !!wi, ki = wi = null, e.current = n, _f(n), qa(), J = u, ie = o, ut.transition = i;
    } else e.current = n;
    if (kl && (kl = !1, Yt = e, xl = l), i = e.pendingLanes, i === 0 && (Kt = null), tc(n.stateNode), Xe(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (wl) throw wl = !1, e = mo, mo = null, e;
    return (xl & 1) !== 0 && e.tag !== 0 && Un(), i = e.pendingLanes, (i & 1) !== 0 ? e === ho ? Sr++ : (Sr = 0, ho = e) : Sr = 0, Vt(), null;
  }
  function Un() {
    if (Yt !== null) {
      var e = iu(xl), t = ut.transition, n = ie;
      try {
        if (ut.transition = null, ie = 16 > e ? 16 : e, Yt === null) var r = !1;
        else {
          if (e = Yt, Yt = null, xl = 0, (J & 6) !== 0) throw Error(d(331));
          var l = J;
          for (J |= 4, z = e.current; z !== null; ) {
            var i = z, o = i.child;
            if ((z.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var h = u[a];
                  for (z = h; z !== null; ) {
                    var w = z;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wr(8, w, i);
                    }
                    var k = w.child;
                    if (k !== null) k.return = w, z = k;
                    else for (; z !== null; ) {
                      w = z;
                      var y = w.sibling, C = w.return;
                      if (na(w), w === h) {
                        z = null;
                        break;
                      }
                      if (y !== null) {
                        y.return = C, z = y;
                        break;
                      }
                      z = C;
                    }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var T = P.child;
                  if (T !== null) {
                    P.child = null;
                    do {
                      var Se = T.sibling;
                      T.sibling = null, T = Se;
                    } while (T !== null);
                  }
                }
                z = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, z = o;
            else e: for (; z !== null; ) {
              if (i = z, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  wr(9, i, i.return);
              }
              var g = i.sibling;
              if (g !== null) {
                g.return = i.return, z = g;
                break e;
              }
              z = i.return;
            }
          }
          var c = e.current;
          for (z = c; z !== null; ) {
            o = z;
            var m = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && m !== null) m.return = o, z = m;
            else e: for (o = c; z !== null; ) {
              if (u = z, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hl(9, u);
                }
              } catch (j) {
                ye(u, u.return, j);
              }
              if (u === o) {
                z = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                x.return = u.return, z = x;
                break e;
              }
              z = u.return;
            }
          }
          if (J = l, Vt(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
            yt.onPostCommitFiberRoot(Tr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ie = n, ut.transition = t;
      }
    }
    return !1;
  }
  function ya(e, t, n) {
    t = Dn(n, t), t = Is(e, t, 1), e = Wt(e, t, 1), t = He(), e !== null && (Kn(e, 1, t), Xe(e, t));
  }
  function ye(e, t, n) {
    if (e.tag === 3) ya(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
          e = Dn(n, e), e = Fs(t, e, 1), t = Wt(t, e, 1), e = He(), t !== null && (Kn(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Tf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, je === e && (Oe & n) === n && (Le === 4 || Le === 3 && (Oe & 130023424) === Oe && 500 > xe() - go ? cn(e, 0) : po |= n), Xe(e, t);
  }
  function wa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Rr, Rr <<= 1, (Rr & 130023424) === 0 && (Rr = 4194304)));
    var n = He();
    e = Tt(e, t), e !== null && (Kn(e, t, n), Xe(e, n));
  }
  function Lf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wa(e, n);
  }
  function Rf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    r !== null && r.delete(t), wa(e, n);
  }
  var ka;
  ka = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) Ye = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ye = !1, yf(e, t, n);
      Ye = (e.flags & 131072) !== 0;
    }
    else Ye = !1, de && (t.flags & 1048576) !== 0 && bu(t, br, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        gl(e, t), e = t.pendingProps;
        var l = Nn(t, Fe.current);
        jn(t, n), l = Wi(null, t, r, e, l, n);
        var i = Qi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (i = !0, Zr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Fi(t), l.updater = dl, t.stateNode = l, l._reactInternals = t, Ji(t, r, e, n), t = to(null, t, r, !0, i, n)) : (t.tag = 0, de && i && zi(t), Ve(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Mf(r), e = gt(r, e), l) {
            case 0:
              t = eo(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = $s(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(d(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), eo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), Ks(e, t, r, l, n);
      case 3:
        e: {
          if (Ys(t), e === null) throw Error(d(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, ss(e, t), il(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Dn(Error(d(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Dn(Error(d(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (et = At(t.stateNode.containerInfo.firstChild), be = t, de = !0, pt = null, n = os(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Tn(), r === l) {
              t = Rt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return fs(t), e === null && Li(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, xi(r, l) ? o = null : i !== null && xi(r, i) && (t.flags |= 32), Qs(e, t), Ve(e, t, o, n), t.child;
      case 6:
        return e === null && Li(t), null;
      case 13:
        return Xs(e, t, n);
      case 4:
        return Ui(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), $s(e, t, r, l, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, ue(nl, r._currentValue), r._currentValue = o, i !== null) if (dt(i.value, o)) {
            if (i.children === l.children && !Qe.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var u = i.dependencies;
            if (u !== null) {
              o = i.child;
              for (var a = u.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (i.tag === 1) {
                    a = Lt(-1, n & -n), a.tag = 2;
                    var h = i.updateQueue;
                    if (h !== null) {
                      h = h.shared;
                      var w = h.pending;
                      w === null ? a.next = a : (a.next = w.next, w.next = a), h.pending = a;
                    }
                  }
                  i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Oi(
                    i.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(d(341));
              o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Oi(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          Ve(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, jn(t, n), l = it(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = gt(r, t.pendingProps), l = gt(r.type, l), Vs(e, t, r, l, n);
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), gl(e, t), t.tag = 1, Ke(r) ? (e = !0, Zr(t)) : e = !1, jn(t, n), Ds(t, r, l), Ji(t, r, l, n), to(null, t, r, !0, e, n);
      case 19:
        return Js(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(d(156, t.tag));
  };
  function xa(e, t) {
    return eu(e, t);
  }
  function jf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(e, t, n, r) {
    return new jf(e, t, n, r);
  }
  function So(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Mf(e) {
    if (typeof e == "function") return So(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === We) return 11;
      if (e === nt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function El(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") So(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case ke:
        return dn(n.children, l, i, t);
      case Ne:
        o = 8, l |= 8;
        break;
      case ze:
        return e = st(12, n, t, l | 2), e.elementType = ze, e.lanes = i, e;
      case $e:
        return e = st(13, n, t, l), e.elementType = $e, e.lanes = i, e;
      case Je:
        return e = st(19, n, t, l), e.elementType = Je, e.lanes = i, e;
      case b:
        return Nl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case at:
            o = 10;
            break e;
          case ct:
            o = 9;
            break e;
          case We:
            o = 11;
            break e;
          case nt:
            o = 14;
            break e;
          case Pe:
            o = 16, r = null;
            break e;
        }
        throw Error(d(130, e == null ? e : typeof e, ""));
    }
    return t = st(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function dn(e, t, n, r) {
    return e = st(7, e, r, t), e.lanes = n, e;
  }
  function Nl(e, t, n, r) {
    return e = st(22, e, r, t), e.elementType = b, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function _o(e, t, n) {
    return e = st(6, e, null, t), e.lanes = n, e;
  }
  function Co(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Df(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Eo(e, t, n, r, l, i, o, u, a) {
    return e = new Df(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fi(i), e;
  }
  function Of(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ve, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Sa(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
      if (bt(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(d(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n)) return Zu(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, i, o, u, a) {
    return e = Eo(n, r, !0, e, l, i, o, u, a), e.context = Sa(null), n = e.current, r = He(), l = Gt(n), i = Lt(r, l), i.callback = t ?? null, Wt(n, i, l), e.current.lanes = l, Kn(e, l, r), Xe(e, r), e;
  }
  function zl(e, t, n, r) {
    var l = t.current, i = He(), o = Gt(l);
    return n = Sa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wt(l, t, o), e !== null && (vt(e, l, o, i), ll(e, l, o)), o;
  }
  function Pl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    Ca(e, t), (e = e.alternate) && Ca(e, t);
  }
  function If() {
    return null;
  }
  var Ea = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zo(e) {
    this._internalRoot = e;
  }
  Tl.prototype.render = zo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    zl(e, t, null, null);
  }, Tl.prototype.unmount = zo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      an(function() {
        zl(null, e, null, null);
      }), t[Et] = null;
    }
  };
  function Tl(e) {
    this._internalRoot = e;
  }
  Tl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = su();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
      It.splice(n, 0, e), n === 0 && fu(e);
    }
  };
  function Po(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Na() {
  }
  function Ff(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var h = Pl(o);
          i.call(h);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = o, e[Et] = o.current, or(e.nodeType === 8 ? e.parentNode : e), an(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var h = Pl(a);
        u.call(h);
      };
    }
    var a = Eo(e, 0, !1, null, null, !1, !1, "", Na);
    return e._reactRootContainer = a, e[Et] = a.current, or(e.nodeType === 8 ? e.parentNode : e), an(function() {
      zl(t, a, n, r);
    }), a;
  }
  function Rl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var a = Pl(o);
          u.call(a);
        };
      }
      zl(t, o, e, l);
    } else o = Ff(n, t, e, l, r);
    return Pl(o);
  }
  ou = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 && (Jl(t, n | 1), Xe(t, xe()), (J & 6) === 0 && (Fn = xe() + 500, Vt()));
        }
        break;
      case 13:
        an(function() {
          var r = Tt(e, 1);
          if (r !== null) {
            var l = He();
            vt(r, e, 1, l);
          }
        }), No(e, 1);
    }
  }, ql = function(e) {
    if (e.tag === 13) {
      var t = Tt(e, 134217728);
      if (t !== null) {
        var n = He();
        vt(t, e, 134217728, n);
      }
      No(e, 134217728);
    }
  }, uu = function(e) {
    if (e.tag === 13) {
      var t = Gt(e), n = Tt(e, t);
      if (n !== null) {
        var r = He();
        vt(n, e, t, r);
      }
      No(e, t);
    }
  }, su = function() {
    return ie;
  }, au = function(e, t) {
    var n = ie;
    try {
      return ie = e, t();
    } finally {
      ie = n;
    }
  }, Wl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Il(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Gr(r);
              if (!l) throw Error(d(90));
              M(r), Il(r, l);
            }
          }
        }
        break;
      case "textarea":
        Uo(e, n);
        break;
      case "select":
        t = n.value, t != null && gn(e, !!n.multiple, t, !1);
    }
  }, Yo = wo, Go = an;
  var Uf = { usingClientEntryPoint: !1, Events: [ar, Cn, Gr, Qo, Ko, wo] }, _r = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Af = { bundleType: _r.bundleType, version: _r.version, rendererPackageName: _r.rendererPackageName, rendererConfig: _r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = qo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: _r.findFiberByHostInstance || If, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jl.isDisabled && jl.supportsFiber) try {
      Tr = jl.inject(Af), yt = jl;
    } catch {
    }
  }
  return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf, Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Po(t)) throw Error(d(200));
    return Of(e, t, null, n);
  }, Ze.createRoot = function(e, t) {
    if (!Po(e)) throw Error(d(299));
    var n = !1, r = "", l = Ea;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Eo(e, 1, !1, null, null, n, !1, r, l), e[Et] = t.current, or(e.nodeType === 8 ? e.parentNode : e), new zo(t);
  }, Ze.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = qo(t), e = e === null ? null : e.stateNode, e;
  }, Ze.flushSync = function(e) {
    return an(e);
  }, Ze.hydrate = function(e, t, n) {
    if (!Ll(t)) throw Error(d(200));
    return Rl(null, e, t, !0, n);
  }, Ze.hydrateRoot = function(e, t, n) {
    if (!Po(e)) throw Error(d(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Ea;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = _a(t, null, e, 1, n ?? null, l, !1, i, o), e[Et] = t.current, or(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Tl(t);
  }, Ze.render = function(e, t, n) {
    if (!Ll(t)) throw Error(d(200));
    return Rl(null, e, t, !1, n);
  }, Ze.unmountComponentAtNode = function(e) {
    if (!Ll(e)) throw Error(d(40));
    return e._reactRootContainer ? (an(function() {
      Rl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Et] = null;
      });
    }), !0) : !1;
  }, Ze.unstable_batchedUpdates = wo, Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ll(n)) throw Error(d(200));
    if (e == null || e._reactInternals === void 0) throw Error(d(38));
    return Rl(e, t, n, !1, r);
  }, Ze.version = "18.3.1-next-f1338f8080-20240426", Ze;
}
var Da;
function Yf() {
  if (Da) return Ro.exports;
  Da = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), Ro.exports = Kf(), Ro.exports;
}
var Oa;
function Gf() {
  if (Oa) return Ml;
  Oa = 1;
  var f = Yf();
  return Ml.createRoot = f.createRoot, Ml.hydrateRoot = f.hydrateRoot, Ml;
}
var Xf = Gf();
const Zf = /* @__PURE__ */ new Set([
  "color",
  "background",
  "backgroundColor",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "fontFamily",
  "lineHeight",
  "letterSpacing",
  "textAlign",
  "textDecoration",
  "textTransform",
  "opacity",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "border",
  "borderRadius",
  "borderColor",
  "borderWidth",
  "borderStyle",
  "boxShadow",
  "whiteSpace",
  "overflow",
  "textOverflow",
  "maxWidth",
  "width",
  "display",
  "alignSelf",
  // Button theme extras (mapped to CSS variables in the gallery)
  "primaryBackground",
  "primaryColor",
  "dangerBackground",
  "dangerColor"
]), Jf = {
  background: "--sig-btn-bg",
  backgroundColor: "--sig-btn-bg",
  color: "--sig-btn-fg",
  borderRadius: "--sig-btn-radius",
  borderColor: "--sig-btn-border",
  borderWidth: "--sig-btn-border-width",
  borderStyle: "--sig-btn-border-style",
  fontSize: "--sig-btn-font-size",
  fontWeight: "--sig-btn-font-weight",
  fontFamily: "--sig-btn-font-family",
  padding: "--sig-btn-padding",
  boxShadow: "--sig-btn-shadow",
  primaryBackground: "--sig-btn-primary-bg",
  primaryColor: "--sig-btn-primary-fg",
  dangerBackground: "--sig-btn-danger-bg",
  dangerColor: "--sig-btn-danger-fg"
};
function qf(f) {
  const s = {};
  for (const [d, _] of Object.entries(f)) {
    const E = Jf[d];
    !E || _ == null || (s[E] = String(_));
  }
  return s;
}
function bf(f) {
  return f.replace(/-([a-z])/g, (s, d) => d.toUpperCase());
}
function ed(f) {
  if (typeof f == "number" && Number.isFinite(f)) return f;
  if (typeof f != "string") return null;
  const s = f.trim();
  if (!s || s.length > 120) return null;
  const d = s.toLowerCase();
  return d.includes("url(") || d.includes("expression(") || d.includes("javascript:") || d.includes("@import") || d.includes("</") ? null : s;
}
function qt(f) {
  if (!f || typeof f != "object" || Array.isArray(f)) return {};
  const s = {};
  for (const [d, _] of Object.entries(f)) {
    const E = bf(d);
    if (!Zf.has(E)) continue;
    const V = ed(_);
    V != null && (s[E] = V);
  }
  return s;
}
function $a(f) {
  return f === "select" || f === "open" || f === "none" ? f : null;
}
function Va(f) {
  if (!f || typeof f != "object") return null;
  const s = f;
  if (typeof s.id != "string" || !s.id) return null;
  const d = s.variant === "primary" || s.variant === "danger" || s.variant === "ghost" ? s.variant : "default", _ = s.size === "sm" || s.size === "lg" ? s.size : "md";
  return {
    id: s.id,
    label: typeof s.label == "string" ? s.label : s.id,
    variant: d,
    size: _,
    style: qt(s.style),
    disabled: !!s.disabled
  };
}
function td(f) {
  if (!f || typeof f != "object") return null;
  const s = f, d = typeof s.text == "string" ? s.text : typeof s.label == "string" ? s.label : null;
  if (d == null) return null;
  const _ = typeof s.id == "string" && s.id ? s.id : `text-${d.slice(0, 24)}`, E = s.variant === "muted" || s.variant === "accent" || s.variant === "danger" || s.variant === "badge" ? s.variant : "default";
  return {
    id: _,
    text: d,
    style: qt(s.style),
    variant: E,
    clickable: !!s.clickable
  };
}
function nd(f) {
  if (!f || typeof f != "object") return null;
  const s = f;
  if (typeof s.id != "string" || typeof s.src != "string") return null;
  const d = Array.isArray(s.buttons) ? s.buttons.map(Va).filter((Y) => Y != null) : [], _ = Array.isArray(s.texts) ? s.texts.map(td).filter((Y) => Y != null) : [], E = typeof s.label == "string" ? s.label : s.id, V = s.hover_text ?? s.hoverText, B = s.card_style ?? s.cardStyle ?? s.style ?? null, R = {
    ...qt(
      typeof s.background == "string" || typeof s.color == "string" ? {
        ...typeof s.background == "string" ? { background: s.background } : {},
        ...typeof s.color == "string" ? { color: s.color } : {},
        ...typeof s.font_family == "string" || typeof s.fontFamily == "string" ? {
          fontFamily: s.font_family || s.fontFamily
        } : {}
      } : {}
    ),
    ...qt(B)
  }, L = s.open_url ?? s.openUrl ?? s.href ?? s.link, A = s.size_bytes ?? s.sizeBytes ?? s.size ?? s.bytes ?? s.filesize;
  let re = null;
  if (typeof A == "number" && Number.isFinite(A) && A >= 0)
    re = Math.floor(A);
  else if (typeof A == "string" && A.trim()) {
    const Y = Number(A);
    Number.isFinite(Y) && Y >= 0 && (re = Math.floor(Y));
  }
  return {
    id: s.id,
    src: s.src,
    label: E,
    label_style: qt(s.label_style ?? s.labelStyle),
    caption: typeof s.caption == "string" ? s.caption : "",
    caption_style: qt(s.caption_style ?? s.captionStyle),
    hover_text: typeof V == "string" && V.length > 0 ? V : E,
    card_style: R,
    image_click: $a(s.image_click ?? s.imageClick),
    open_url: typeof L == "string" ? L : "",
    size_bytes: re,
    disabled: !!s.disabled,
    buttons: d,
    texts: _
  };
}
function Ia(f) {
  const s = f ?? {}, d = Array.isArray(s.items) ? s.items.map(nd).filter((A) => A != null) : [], _ = Array.isArray(s.selected_ids) ? s.selected_ids.map(String) : [], E = Array.isArray(s.buttons) ? s.buttons.map(Va).filter((A) => A != null) : [], V = Number(s.columns), B = Number.isFinite(V) ? Math.max(1, Math.min(V, 8)) : 4, R = typeof s.selection_color == "string" && s.selection_color.trim() ? s.selection_color.trim() : "#0f766e", L = $a(s.image_click) ?? (s.selectable === !1 ? "open" : "select");
  return {
    items: d,
    columns: B,
    gap: Math.max(0, Number(s.gap) || 0),
    selectable: s.selectable !== !1,
    show_checkboxes: s.show_checkboxes !== !1,
    image_click: L,
    open_in_new_tab: s.open_in_new_tab !== !1,
    show_hover_text: s.show_hover_text !== !1,
    show_card_info: s.show_card_info !== !1,
    show_selection_stats: s.show_selection_stats !== !1,
    selection_color: R,
    card_style: qt(s.card_style),
    button_style: qt(s.button_style),
    selected_ids: _,
    multi_select: s.multi_select !== !1,
    show_select_all: !!s.show_select_all,
    buttons: E,
    max_height: Math.max(120, Number(s.max_height) || 640),
    page_size: (() => {
      const A = Number(s.page_size);
      return !Number.isFinite(A) || A <= 0 ? 0 : Math.max(1, Math.min(Math.floor(A), 200));
    })(),
    rows: (() => {
      const A = Number(s.rows);
      return !Number.isFinite(A) || A <= 0 ? 0 : Math.max(1, Math.min(Math.floor(A), 12));
    })(),
    show_layout_controls: !!s.show_layout_controls,
    pager_position: s.pager_position === "bottom" ? "bottom" : "top",
    thumbnail_fit: s.thumbnail_fit === "contain" ? "contain" : "cover",
    empty_message: typeof s.empty_message == "string" ? s.empty_message : "No images"
  };
}
function Fa(f) {
  return [...f].sort().join("\0");
}
function Ua({
  label: f,
  value: s,
  min: d,
  max: _,
  onChange: E
}) {
  return /* @__PURE__ */ F.jsxs("div", { className: "sig-layout-stepper", role: "group", "aria-label": f, children: [
    /* @__PURE__ */ F.jsx("span", { className: "sig-layout-label", children: f }),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn sig-btn-sm",
        disabled: s <= d,
        "aria-label": `Decrease ${f}`,
        onClick: () => E(Math.max(d, s - 1)),
        children: "−"
      }
    ),
    /* @__PURE__ */ F.jsx("span", { className: "sig-layout-value", "aria-live": "polite", children: s }),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn sig-btn-sm",
        disabled: s >= _,
        "aria-label": `Increase ${f}`,
        onClick: () => E(Math.min(_, s + 1)),
        children: "+"
      }
    )
  ] });
}
function Ha({
  button: f,
  onClick: s,
  className: d = ""
}) {
  const _ = f.size !== "md" ? `sig-btn-${f.size}` : "";
  return /* @__PURE__ */ F.jsx(
    "button",
    {
      type: "button",
      className: `sig-btn sig-btn-${f.variant} ${_} ${d}`.trim(),
      style: f.style,
      disabled: f.disabled,
      onClick: (E) => {
        E.stopPropagation(), s(f.id);
      },
      children: f.label
    }
  );
}
function rd({
  text: f,
  onClick: s
}) {
  const d = [
    "sig-text",
    f.variant !== "default" ? `sig-text-${f.variant}` : "",
    f.clickable ? "sig-text-clickable" : ""
  ].filter(Boolean).join(" ");
  return f.clickable ? /* @__PURE__ */ F.jsx(
    "span",
    {
      className: d,
      style: f.style,
      title: f.text,
      role: "button",
      tabIndex: 0,
      onClick: (_) => {
        _.stopPropagation(), s(f.id);
      },
      onKeyDown: (_) => {
        (_.key === "Enter" || _.key === " ") && (_.preventDefault(), _.stopPropagation(), s(f.id));
      },
      children: f.text
    }
  ) : /* @__PURE__ */ F.jsx("span", { className: d, style: f.style, title: f.text, children: f.text });
}
function ld(f, s) {
  return f.image_click ?? s;
}
function id({
  item: f,
  selected: s,
  selectable: d,
  showCheckboxes: _,
  showHoverText: E,
  showCardInfo: V,
  thumbnailFit: B,
  cardStyle: R,
  imageClick: L,
  openInNewTab: A,
  onToggle: re,
  onOpen: Y,
  onButton: Q
}) {
  const fe = ld(f, L), pe = f.open_url || f.src, q = () => {
    if (!f.disabled && fe !== "none") {
      if (fe === "select") {
        d && re(f.id);
        return;
      }
      pe && A && typeof window < "u" && window.open(pe, "_blank", "noopener,noreferrer"), Y(f.id, pe);
    }
  }, H = (le) => {
    f.disabled || le.target.closest("input, button") || (le.stopPropagation(), q());
  }, we = (le) => {
    f.disabled || (le.key === "Enter" || le.key === " ") && (le.preventDefault(), q());
  }, he = {
    ...R,
    ...f.card_style
  }, se = !f.disabled && fe !== "none", _e = fe === "select" ? `${s ? "Deselect" : "Select"} ${f.label}` : fe === "open" ? `Open ${f.label}` : f.label;
  return /* @__PURE__ */ F.jsxs(
    "article",
    {
      className: [
        "sig-card",
        s ? "sig-card-selected" : "",
        f.disabled ? "sig-card-disabled" : "",
        V ? "" : "sig-card-image-only"
      ].filter(Boolean).join(" "),
      style: he,
      tabIndex: se ? 0 : -1,
      "aria-selected": d ? s : void 0,
      "aria-disabled": f.disabled || void 0,
      onKeyDown: se ? we : void 0,
      children: [
        /* @__PURE__ */ F.jsxs(
          "div",
          {
            className: [
              "sig-thumb-wrap",
              s ? "sig-thumb-wrap-selected" : "",
              fe === "none" ? "sig-thumb-wrap-static" : ""
            ].filter(Boolean).join(" "),
            role: se ? "button" : void 0,
            "aria-label": se ? _e : f.label,
            onClick: se ? H : void 0,
            children: [
              d && _ && /* @__PURE__ */ F.jsx(
                "input",
                {
                  className: "sig-check",
                  type: "checkbox",
                  checked: s,
                  disabled: f.disabled,
                  "aria-label": `Select ${f.label}`,
                  onChange: () => re(f.id),
                  onClick: (le) => le.stopPropagation()
                }
              ),
              /* @__PURE__ */ F.jsx(
                "img",
                {
                  className: "sig-thumb",
                  src: f.src,
                  alt: f.label,
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  style: { objectFit: B }
                }
              ),
              E && f.hover_text ? /* @__PURE__ */ F.jsx("div", { className: "sig-hover-overlay", title: f.hover_text, children: f.hover_text }) : null
            ]
          }
        ),
        V ? /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
          /* @__PURE__ */ F.jsxs("div", { className: "sig-meta", children: [
            /* @__PURE__ */ F.jsx("div", { className: "sig-label", title: f.label, style: f.label_style, children: f.label }),
            f.caption ? /* @__PURE__ */ F.jsx(
              "div",
              {
                className: "sig-caption",
                title: f.caption,
                style: f.caption_style,
                children: f.caption
              }
            ) : null
          ] }),
          f.texts.length > 0 ? /* @__PURE__ */ F.jsx("div", { className: "sig-texts", children: f.texts.map((le) => /* @__PURE__ */ F.jsx(
            rd,
            {
              text: le,
              onClick: (ve) => Q(ve, f.id)
            },
            le.id
          )) }) : null,
          f.buttons.length > 0 ? /* @__PURE__ */ F.jsx("div", { className: "sig-card-actions", children: f.buttons.map((le) => /* @__PURE__ */ F.jsx(
            Ha,
            {
              button: { ...le, disabled: le.disabled || f.disabled },
              onClick: (ve) => Q(ve, f.id)
            },
            le.id
          )) }) : null
        ] }) : null
      ]
    }
  );
}
function Aa(f, s) {
  const d = new Set(f.map(String)), _ = s.filter((E) => d.has(E));
  for (const E of d)
    _.includes(E) || _.push(E);
  return _;
}
function od(f) {
  if (!Number.isFinite(f) || f < 0) return "";
  const s = ["B", "KB", "MB", "GB", "TB"];
  let d = f, _ = 0;
  for (; d >= 1024 && _ < s.length - 1; )
    d /= 1024, _ += 1;
  return _ === 0 ? `${Math.round(d)} B` : `${d.toFixed(1)} ${s[_]}`;
}
function ud(f, s, d) {
  const _ = new Map(s.map((L) => [L.id, L]));
  let E = 0, V = 0;
  for (const L of f) {
    const A = _.get(L);
    !A || A.size_bytes == null || (E += 1, V += A.size_bytes);
  }
  let R = `${f.length} selected`;
  return d && (R = `${R} / ${d}`), E > 0 && (R = `${R} · ${od(V)}`), R;
}
function sd({
  setStateValue: f,
  ...s
}) {
  const d = Fa(s.selected_ids), [_, E] = Z.useState(() => s.selected_ids), V = Z.useRef(0), B = Z.useRef(d), R = Z.useRef(!1), L = Z.useMemo(() => s.items.map((M) => M.id), [s.items]), A = Z.useMemo(() => L.join("\0"), [L]), [re, Y] = Z.useState(() => s.columns), [Q, fe] = Z.useState(
    () => s.rows > 0 ? s.rows : s.show_layout_controls ? 2 : 0
  );
  Z.useEffect(() => {
    Y(s.columns);
  }, [s.columns]), Z.useEffect(() => {
    s.rows > 0 ? fe(s.rows) : s.show_layout_controls || fe(0);
  }, [s.rows, s.show_layout_controls]);
  const pe = Z.useCallback(
    (M, Ce) => {
      f("layout_columns", M), f("layout_rows", Ce > 0 ? Ce : null);
    },
    [f]
  );
  Z.useEffect(() => {
    pe(re, Q);
  }, [re, Q, pe]);
  const q = re, H = Z.useMemo(() => Q > 0 ? Math.max(1, q * Q) : s.page_size > 0 ? s.page_size : 0, [s.page_size, q, Q]), we = H ? Math.max(1, Math.ceil(s.items.length / H)) : 1, [he, se] = Z.useState(0);
  Z.useEffect(() => {
    se((M) => Math.min(Math.max(0, M), we - 1));
  }, [we, A]);
  const _e = Z.useMemo(() => {
    if (!H) return s.items;
    const M = he * H;
    return s.items.slice(M, M + H);
  }, [s.items, he, H]), le = Z.useCallback(
    (M) => {
      Y(M), pe(M, Q), se(0);
    },
    [pe, Q]
  ), ve = Z.useCallback(
    (M) => {
      fe(M), pe(re, M), se(0);
    },
    [re, pe]
  );
  Z.useEffect(() => {
    if (d === B.current) {
      R.current = !1;
      return;
    }
    R.current || (B.current = d, E(Aa(s.selected_ids, L)));
  }, [d, s.selected_ids, L]);
  const ke = Z.useCallback(
    (M) => {
      const Ce = Aa(M, L), _t = Fa(Ce);
      B.current = _t, R.current = !0, E(Ce), f("selected_ids", Ce), f("selected_csv", Ce.join(","));
    },
    [L, f]
  ), Ne = Z.useCallback(
    (M, Ce) => {
      V.current += 1, f("clicked_button", M), f("clicked_item", Ce), f("action_nonce", V.current);
    },
    [f]
  ), ze = Z.useMemo(
    () => s.items.filter((M) => !M.disabled).map((M) => M.id),
    [s.items]
  ), at = Z.useCallback(
    (M) => {
      if (!s.selectable) return;
      const Ce = s.items.find((Ct) => Ct.id === M);
      if (!Ce || Ce.disabled) return;
      let _t;
      if (s.multi_select) {
        const Ct = new Set(_);
        Ct.has(M) ? Ct.delete(M) : Ct.add(M), _t = [...Ct];
      } else
        _t = _.includes(M) ? [] : [M];
      ke(_t);
    },
    [s.items, s.multi_select, s.selectable, ke, _]
  ), ct = Z.useCallback(() => {
    ke([...ze]);
  }, [ze, ke]), We = Z.useCallback(() => {
    ke([]);
  }, [ke]), $e = Z.useCallback(
    (M) => Ne(M, null),
    [Ne]
  ), Je = Z.useCallback(
    (M, Ce) => Ne(M, Ce),
    [Ne]
  ), nt = Z.useCallback(
    (M, Ce) => Ne("open", M),
    [Ne]
  ), Pe = ze.filter(
    (M) => _.includes(M)
  ).length, b = ze.length > 0 && Pe === ze.length, S = Pe > 0 && !b, I = Pe === 0, N = Z.useCallback(() => {
    b ? We() : ct();
  }, [b, We, ct]), p = Z.useCallback(() => se(0), []), v = Z.useCallback(() => {
    se((M) => Math.max(0, M - 1));
  }, []), $ = Z.useCallback(() => {
    se((M) => Math.min(we - 1, M + 1));
  }, [we]), W = Z.useCallback(() => {
    se(Math.max(0, we - 1));
  }, [we]), G = {
    "--sig-selection": s.selection_color,
    "--sig-accent": s.selection_color,
    ...qf(s.button_style)
  }, X = {
    display: "grid",
    gridTemplateColumns: `repeat(${q}, minmax(0, 1fr))`,
    gap: s.gap,
    width: "100%"
  }, ne = H > 0 && s.items.length > 0, ee = s.pager_position !== "bottom", oe = s.items.length === 0 ? "Page 0 of 0" : `Page ${he + 1} of ${we}`, Ie = ne ? /* @__PURE__ */ F.jsxs("div", { className: "sig-pager", role: "navigation", "aria-label": "Board pages", children: [
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: he <= 0,
        onClick: p,
        "aria-label": "First page",
        title: "First page",
        children: "First"
      }
    ),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: he <= 0,
        onClick: v,
        "aria-label": "Previous page",
        title: "Previous page",
        children: "Prev"
      }
    ),
    /* @__PURE__ */ F.jsxs("span", { className: "sig-pager-label", "aria-live": "polite", children: [
      oe,
      /* @__PURE__ */ F.jsxs("span", { className: "sig-pager-range", children: [
        " ",
        "· ",
        he * H + 1,
        "–",
        Math.min(s.items.length, (he + 1) * H),
        " of",
        " ",
        s.items.length
      ] })
    ] }),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: he >= we - 1,
        onClick: $,
        "aria-label": "Next page",
        title: "Next page",
        children: "Next"
      }
    ),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: he >= we - 1,
        onClick: W,
        "aria-label": "Last page",
        title: "Last page",
        children: "Last"
      }
    )
  ] }) : null, pn = s.show_select_all || s.buttons.length > 0 || s.selectable || s.show_layout_controls;
  return /* @__PURE__ */ F.jsxs("div", { className: "sig-root", style: G, children: [
    pn ? /* @__PURE__ */ F.jsxs("div", { className: "sig-toolbar", children: [
      s.selectable ? /* @__PURE__ */ F.jsx(
        "span",
        {
          className: "sig-count",
          title: s.show_selection_stats ? "Selected file count and total size (all pages)" : void 0,
          children: s.show_selection_stats ? ud(_, s.items, ze.length) : `${Pe} selected${ze.length ? ` / ${ze.length}` : ""}`
        }
      ) : /* @__PURE__ */ F.jsxs("span", { className: "sig-count", children: [
        s.items.length,
        " images"
      ] }),
      s.show_select_all ? /* @__PURE__ */ F.jsxs("div", { className: "sig-select-all", children: [
        /* @__PURE__ */ F.jsxs(
          "button",
          {
            type: "button",
            className: [
              "sig-select-all-master",
              b ? "sig-select-all-master-on" : "",
              S ? "sig-select-all-master-partial" : ""
            ].filter(Boolean).join(" "),
            disabled: ze.length === 0,
            "aria-pressed": b,
            "aria-label": b ? "Deselect all" : "Select all",
            title: b ? "Deselect all pages" : S ? "Select remaining (all pages)" : "Select all (all pages)",
            onClick: N,
            children: [
              /* @__PURE__ */ F.jsx(
                "span",
                {
                  className: "sig-select-all-box",
                  "aria-hidden": "true",
                  "data-state": b ? "all" : S ? "some" : "none"
                }
              ),
              /* @__PURE__ */ F.jsx("span", { children: "All" })
            ]
          }
        ),
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: b || ze.length === 0,
            onClick: ct,
            title: "Select every item across all pages",
            children: "Select all"
          }
        ),
        /* @__PURE__ */ F.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: I,
            onClick: We,
            title: "Clear selection on all pages",
            children: "Deselect all"
          }
        )
      ] }) : null,
      s.buttons.map((M) => /* @__PURE__ */ F.jsx(Ha, { button: M, onClick: $e }, M.id)),
      s.show_layout_controls ? /* @__PURE__ */ F.jsxs("div", { className: "sig-layout-controls", children: [
        /* @__PURE__ */ F.jsx(
          Ua,
          {
            label: "Columns",
            value: q,
            min: 1,
            max: 8,
            onChange: le
          }
        ),
        /* @__PURE__ */ F.jsx(
          Ua,
          {
            label: "Rows",
            value: Q > 0 ? Q : 2,
            min: 1,
            max: 8,
            onChange: (M) => {
              Q <= 0 && fe(M), ve(M);
            }
          }
        )
      ] }) : null
    ] }) : null,
    ee ? Ie : null,
    /* @__PURE__ */ F.jsx(
      "div",
      {
        className: ne ? "sig-page" : "sig-scroll",
        style: ne ? void 0 : { maxHeight: s.max_height },
        children: s.items.length === 0 ? /* @__PURE__ */ F.jsx("div", { className: "sig-empty", children: s.empty_message }) : /* @__PURE__ */ F.jsx("div", { className: "sig-grid", style: X, children: _e.map((M) => /* @__PURE__ */ F.jsx(
          id,
          {
            item: M,
            selected: _.includes(M.id),
            selectable: s.selectable,
            showCheckboxes: s.show_checkboxes,
            showHoverText: s.show_hover_text,
            showCardInfo: s.show_card_info,
            thumbnailFit: s.thumbnail_fit,
            cardStyle: s.card_style,
            imageClick: s.image_click,
            openInNewTab: s.open_in_new_tab,
            onToggle: at,
            onOpen: nt,
            onButton: Je
          },
          M.id
        )) })
      }
    ),
    ee ? null : Ie
  ] });
}
const ad = '.sig-root{--sig-bg: transparent;--sig-surface: rgba(15, 23, 42, .04);--sig-surface-hover: rgba(15, 23, 42, .08);--sig-border: rgba(15, 23, 42, .12);--sig-text: #0f172a;--sig-muted: #64748b;--sig-accent: #0f766e;--sig-accent-soft: rgba(15, 118, 110, .14);--sig-selection: var(--sig-accent);--sig-danger: #b91c1c;--sig-danger-soft: rgba(185, 28, 28, .12);--sig-radius: 10px;--sig-shadow: 0 1px 2px rgba(15, 23, 42, .06);box-sizing:border-box;color:var(--sig-text);font-family:Segoe UI,ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.35;width:100%;height:100%;display:flex;flex-direction:column;gap:10px;padding:2px;background:var(--sig-bg);-webkit-user-select:none;user-select:none}.sig-root *,.sig-root *:before,.sig-root *:after{box-sizing:border-box}.sig-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:32px;flex:0 0 auto}.sig-count{color:var(--sig-muted);font-variant-numeric:tabular-nums;margin-right:auto;font-weight:600;letter-spacing:.01em}.sig-select-all{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px}.sig-select-all-master{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--sig-border);border-radius:8px;background:#fff;box-shadow:var(--sig-shadow);cursor:pointer;font:inherit;font-weight:650;color:var(--sig-text)}.sig-select-all-master:disabled{opacity:.45;cursor:not-allowed}.sig-select-all-master-on{border-color:var(--sig-selection, var(--sig-accent));background:color-mix(in srgb,var(--sig-selection, var(--sig-accent)) 12%,#fff)}.sig-select-all-box{width:16px;height:16px;border:2px solid var(--sig-border);border-radius:4px;display:inline-block;position:relative;flex:0 0 auto;background:#fff}.sig-select-all-master-on .sig-select-all-box,.sig-select-all-box[data-state=all]{border-color:var(--sig-selection, var(--sig-accent));background:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=all]:after{content:"";position:absolute;left:3px;top:0;width:5px;height:9px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.sig-select-all-box[data-state=some]{border-color:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=some]:after{content:"";position:absolute;left:2px;right:2px;top:6px;height:2px;background:var(--sig-selection, var(--sig-accent));border-radius:1px}.sig-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--sig-btn-border-width, 1px) var(--sig-btn-border-style, solid) var(--sig-btn-border, var(--sig-border));background:var(--sig-btn-bg, #fff);color:var(--sig-btn-fg, var(--sig-text));border-radius:var(--sig-btn-radius, 8px);padding:var(--sig-btn-padding, 6px 10px);font:inherit;font-family:var(--sig-btn-font-family, inherit);font-size:var(--sig-btn-font-size, inherit);font-weight:var(--sig-btn-font-weight, 600);cursor:pointer;transition:background .12s ease,border-color .12s ease,transform 80ms ease,box-shadow .12s ease;box-shadow:var(--sig-btn-shadow, var(--sig-shadow))}.sig-btn-sm{padding:3px 8px;font-size:12px;border-radius:calc(var(--sig-btn-radius, 8px) * .75)}.sig-btn-lg{padding:9px 16px;font-size:15px}.sig-btn:hover:not(:disabled){filter:brightness(.97)}.sig-btn:active:not(:disabled){transform:translateY(1px)}.sig-btn:disabled{opacity:.45;cursor:not-allowed}.sig-btn-primary{background:var(--sig-btn-primary-bg, var(--sig-accent));border-color:transparent;color:var(--sig-btn-primary-fg, #fff)}.sig-btn-primary:hover:not(:disabled){filter:brightness(1.05)}.sig-btn-danger{background:var(--sig-btn-danger-bg, var(--sig-danger-soft));border-color:transparent;color:var(--sig-btn-danger-fg, var(--sig-danger))}.sig-btn-danger:hover:not(:disabled){filter:brightness(.96)}.sig-btn-ghost{background:transparent;box-shadow:none;border-color:transparent}.sig-scroll{flex:1 1 auto;min-height:0;overflow:auto;padding-right:2px;scrollbar-gutter:stable}.sig-page{flex:1 1 auto;overflow:visible;min-height:0}.sig-layout-controls{display:inline-flex;flex-wrap:wrap;align-items:center;gap:10px;margin-left:auto}.sig-layout-stepper{display:inline-flex;align-items:center;gap:4px;padding:2px 4px;border:1px solid var(--sig-border);border-radius:8px;background:#fff;box-shadow:var(--sig-shadow)}.sig-layout-label{color:var(--sig-muted);font-weight:650;font-size:12px;padding:0 4px 0 6px}.sig-layout-value{min-width:1.5ch;text-align:center;font-variant-numeric:tabular-nums;font-weight:700}.sig-pager{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;flex:0 0 auto;padding-top:2px}.sig-pager-label{color:var(--sig-muted);font-variant-numeric:tabular-nums;font-weight:600;min-width:10ch;text-align:center}.sig-pager-range{font-weight:500;opacity:.9}.sig-grid{display:grid!important;width:100%;align-content:start;grid-auto-rows:auto}.sig-empty{color:var(--sig-muted);padding:24px 8px;text-align:center}.sig-card{--sig-card-fg: var(--sig-text);position:relative;display:flex;flex-direction:column;border:1px solid var(--sig-border);border-radius:var(--sig-radius);background:#fff;color:var(--sig-card-fg);overflow:hidden;box-shadow:var(--sig-shadow);transition:border-color .14s ease,box-shadow .14s ease,transform .14s ease;outline:none}.sig-card:hover{border-color:#0f766e59;box-shadow:0 6px 18px #0f172a14;transform:translateY(-1px)}.sig-card:focus-visible{border-color:var(--sig-accent);box-shadow:0 0 0 3px var(--sig-accent-soft)}.sig-card-selected{border-color:var(--sig-selection);box-shadow:0 0 0 2px color-mix(in srgb,var(--sig-selection) 22%,transparent)}.sig-card-image-only .sig-thumb-wrap{border-radius:inherit}.sig-card-disabled{opacity:.55;filter:grayscale(.15)}.sig-thumb-wrap{position:relative;aspect-ratio:1 / 1;background:var(--sig-surface);overflow:hidden;cursor:pointer;box-shadow:inset 0 0 0 0 transparent;transition:box-shadow .14s ease}.sig-thumb-wrap-static{cursor:default}.sig-thumb-wrap-selected{box-shadow:inset 0 0 0 4px var(--sig-selection)}.sig-thumb-wrap-selected:after{content:"";position:absolute;top:4px;right:4px;bottom:4px;left:4px;border:1px solid rgba(255,255,255,.55);pointer-events:none;z-index:1}.sig-thumb{width:100%;height:100%;display:block;object-fit:cover;transition:transform .18s ease}.sig-card:hover .sig-thumb{transform:scale(1.03)}.sig-hover-overlay{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:28px 10px 10px;color:#fff;font-weight:650;font-size:12px;line-height:1.3;background:linear-gradient(to top,rgba(15,23,42,.82) 0%,rgba(15,23,42,.35) 55%,transparent 100%);opacity:0;transform:translateY(4px);transition:opacity .14s ease,transform .14s ease;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-thumb-wrap:hover .sig-hover-overlay,.sig-thumb-wrap:focus-within .sig-hover-overlay{opacity:1;transform:translateY(0)}.sig-check{position:absolute;top:8px;left:8px;z-index:3;width:22px;height:22px;margin:0;accent-color:var(--sig-selection);cursor:pointer;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.sig-meta{display:flex;flex-direction:column;gap:2px;padding:8px 10px 10px;min-width:0}.sig-label{font-weight:650;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-caption{color:color-mix(in srgb,currentColor 62%,transparent);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-card-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 10px}.sig-card-actions .sig-btn{padding:4px 8px;font-size:12px;font-weight:600}.sig-texts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 8px}.sig-text{display:inline-block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.sig-text-muted{color:var(--sig-muted);font-size:12px}.sig-text-accent{color:var(--sig-accent);font-weight:650}.sig-text-danger{color:var(--sig-danger);font-weight:650}.sig-text-badge{color:#fff;background:var(--sig-accent);border-radius:999px;padding:2px 8px;font-size:11px;font-weight:700;letter-spacing:.02em}.sig-text-clickable{cursor:pointer}.sig-text-clickable:hover{text-decoration:underline}.sig-text-clickable:focus-visible{outline:2px solid var(--sig-accent);outline-offset:2px;border-radius:4px}', Ba = "streamlit-image-board-styles";
function cd(f) {
  var E;
  if (typeof document > "u") return;
  const s = f && "getRootNode" in f ? f.getRootNode() : f ?? document, d = s instanceof ShadowRoot ? s : s instanceof Document ? s.head : document.head;
  if ((E = d.querySelector) != null && E.call(d, `#${Ba}`))
    return;
  const _ = document.createElement("style");
  _.id = Ba, _.textContent = ad, d.appendChild(_);
}
const Dl = /* @__PURE__ */ new WeakMap();
function fd(f, s, d) {
  let _ = Ia(s), E = {
    selected_ids: [..._.selected_ids],
    selected_csv: _.selected_ids.join(","),
    clicked_button: null,
    clicked_item: null,
    action_nonce: 0,
    layout_columns: _.columns,
    layout_rows: _.rows > 0 ? _.rows : null
  };
  const V = (R, L) => {
    if (R === "selected_ids") {
      const A = Array.isArray(L) ? L.map(String) : [];
      E = {
        ...E,
        selected_ids: A,
        selected_csv: A.join(",")
      };
    } else R === "selected_csv" ? E = {
      ...E,
      selected_csv: typeof L == "string" ? L : ""
    } : R === "clicked_button" ? E = {
      ...E,
      clicked_button: typeof L == "string" ? L : null
    } : R === "clicked_item" ? E = {
      ...E,
      clicked_item: typeof L == "string" ? L : null
    } : R === "action_nonce" ? E = {
      ...E,
      action_nonce: typeof L == "number" ? L : 0
    } : R === "layout_columns" ? E = {
      ...E,
      layout_columns: typeof L == "number" ? L : null
    } : R === "layout_rows" && (E = {
      ...E,
      layout_rows: typeof L == "number" ? L : null
    });
    d == null || d(E);
  }, B = () => {
    cd(f);
    let R = Dl.get(f);
    R || (R = Xf.createRoot(f), Dl.set(f, R)), R.render(
      /* @__PURE__ */ F.jsx(Z.StrictMode, { children: /* @__PURE__ */ F.jsx(sd, { ..._, setStateValue: V }) })
    );
  };
  return B(), {
    update(R) {
      _ = Ia({ ..._, ...R }), B();
    },
    destroy() {
      const R = Dl.get(f);
      R && (R.unmount(), Dl.delete(f)), f instanceof HTMLElement && f.replaceChildren();
    }
  };
}
const Ol = /* @__PURE__ */ new WeakMap(), dd = (f) => {
  const { data: s, parentElement: d, setStateValue: _ } = f, E = d.querySelector(".react-root");
  if (!E)
    throw new Error("Unexpected: React root element not found");
  let V = Ol.get(d);
  if (V)
    V.setStateValue = _, V.controller.update(s);
  else {
    const B = {
      setStateValue: _,
      controller: null
    };
    B.controller = fd(E, s, (R) => {
      B.setStateValue("selected_ids", R.selected_ids), B.setStateValue("selected_csv", R.selected_csv), B.setStateValue("clicked_button", R.clicked_button), B.setStateValue("clicked_item", R.clicked_item), B.setStateValue("action_nonce", R.action_nonce), B.setStateValue("layout_columns", R.layout_columns), B.setStateValue("layout_rows", R.layout_rows);
    }), Ol.set(d, B), V = B;
  }
  return () => {
    const B = Ol.get(d);
    B && (B.controller.destroy(), Ol.delete(d));
  };
};
export {
  dd as default
};
