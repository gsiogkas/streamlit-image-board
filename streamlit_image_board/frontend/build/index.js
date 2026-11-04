var Ro = { exports: {} }, Nr = {}, Mo = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Wf() {
  if (Pa) return Y;
  Pa = 1;
  var c = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), B = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), Q = Symbol.iterator;
  function V(p) {
    return p === null || typeof p != "object" ? null : (p = Q && p[Q] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var pe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = Object.assign, ee = {};
  function K(p, v, H) {
    this.props = p, this.context = v, this.refs = ee, this.updater = H || pe;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(p, v) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, v, "setState");
  }, K.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function ke() {
  }
  ke.prototype = K.prototype;
  function Ee(p, v, H) {
    this.props = p, this.context = v, this.refs = ee, this.updater = H || pe;
  }
  var ie = Ee.prototype = new ke();
  ie.constructor = Ee, he(ie, K.prototype), ie.isPureReactComponent = !0;
  var te = Array.isArray, le = Object.prototype.hasOwnProperty, J = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(p, v, H) {
    var W, X = {}, Z = null, ue = null;
    if (v != null) for (W in v.ref !== void 0 && (ue = v.ref), v.key !== void 0 && (Z = "" + v.key), v) le.call(v, W) && !je.hasOwnProperty(W) && (X[W] = v[W]);
    var ne = arguments.length - 2;
    if (ne === 1) X.children = H;
    else if (1 < ne) {
      for (var se = Array(ne), Ve = 0; Ve < ne; Ve++) se[Ve] = arguments[Ve + 2];
      X.children = se;
    }
    if (p && p.defaultProps) for (W in ne = p.defaultProps, ne) X[W] === void 0 && (X[W] = ne[W]);
    return { $$typeof: c, type: p, key: Z, ref: ue, props: X, _owner: J.current };
  }
  function yt(p, v) {
    return { $$typeof: c, type: p.type, key: v, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Oe(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function Ke(p) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(H) {
      return v[H];
    });
  }
  var xe = /\/+/g;
  function Be(p, v) {
    return typeof p == "object" && p !== null && p.key != null ? Ke("" + p.key) : v.toString(36);
  }
  function $e(p, v, H, W, X) {
    var Z = typeof p;
    (Z === "undefined" || Z === "boolean") && (p = null);
    var ue = !1;
    if (p === null) ue = !0;
    else switch (Z) {
      case "string":
      case "number":
        ue = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case c:
          case u:
            ue = !0;
        }
    }
    if (ue) return ue = p, X = X(ue), p = W === "" ? "." + Be(ue, 0) : W, te(X) ? (H = "", p != null && (H = p.replace(xe, "$&/") + "/"), $e(X, v, H, "", function(Ve) {
      return Ve;
    })) : X != null && (Oe(X) && (X = yt(X, H + (!X.key || ue && ue.key === X.key ? "" : ("" + X.key).replace(xe, "$&/") + "/") + p)), v.push(X)), 1;
    if (ue = 0, W = W === "" ? "." : W + ":", te(p)) for (var ne = 0; ne < p.length; ne++) {
      Z = p[ne];
      var se = W + Be(Z, ne);
      ue += $e(Z, v, H, se, X);
    }
    else if (se = V(p), typeof se == "function") for (p = se.call(p), ne = 0; !(Z = p.next()).done; ) Z = Z.value, se = W + Be(Z, ne++), ue += $e(Z, v, H, se, X);
    else if (Z === "object") throw v = String(p), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return ue;
  }
  function Ye(p, v, H) {
    if (p == null) return p;
    var W = [], X = 0;
    return $e(p, W, "", "", function(Z) {
      return v.call(H, Z, X++);
    }), W;
  }
  function De(p) {
    if (p._status === -1) {
      var v = p._result;
      v = v(), v.then(function(H) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = H);
      }, function(H) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = H);
      }), p._status === -1 && (p._status = 0, p._result = v);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ge = { current: null }, C = { transition: null }, D = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: C, ReactCurrentOwner: J };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Y.Children = { map: Ye, forEach: function(p, v, H) {
    Ye(p, function() {
      v.apply(this, arguments);
    }, H);
  }, count: function(p) {
    var v = 0;
    return Ye(p, function() {
      v++;
    }), v;
  }, toArray: function(p) {
    return Ye(p, function(v) {
      return v;
    }) || [];
  }, only: function(p) {
    if (!Oe(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, Y.Component = K, Y.Fragment = d, Y.Profiler = E, Y.PureComponent = Ee, Y.StrictMode = S, Y.Suspense = T, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, Y.act = _, Y.cloneElement = function(p, v, H) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var W = he({}, p.props), X = p.key, Z = p.ref, ue = p._owner;
    if (v != null) {
      if (v.ref !== void 0 && (Z = v.ref, ue = J.current), v.key !== void 0 && (X = "" + v.key), p.type && p.type.defaultProps) var ne = p.type.defaultProps;
      for (se in v) le.call(v, se) && !je.hasOwnProperty(se) && (W[se] = v[se] === void 0 && ne !== void 0 ? ne[se] : v[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) W.children = H;
    else if (1 < se) {
      ne = Array(se);
      for (var Ve = 0; Ve < se; Ve++) ne[Ve] = arguments[Ve + 2];
      W.children = ne;
    }
    return { $$typeof: c, type: p.type, key: X, ref: Z, props: W, _owner: ue };
  }, Y.createContext = function(p) {
    return p = { $$typeof: B, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: $, _context: p }, p.Consumer = p;
  }, Y.createElement = Qe, Y.createFactory = function(p) {
    var v = Qe.bind(null, p);
    return v.type = p, v;
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(p) {
    return { $$typeof: L, render: p };
  }, Y.isValidElement = Oe, Y.lazy = function(p) {
    return { $$typeof: b, _payload: { _status: -1, _result: p }, _init: De };
  }, Y.memo = function(p, v) {
    return { $$typeof: O, type: p, compare: v === void 0 ? null : v };
  }, Y.startTransition = function(p) {
    var v = C.transition;
    C.transition = {};
    try {
      p();
    } finally {
      C.transition = v;
    }
  }, Y.unstable_act = _, Y.useCallback = function(p, v) {
    return ge.current.useCallback(p, v);
  }, Y.useContext = function(p) {
    return ge.current.useContext(p);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(p) {
    return ge.current.useDeferredValue(p);
  }, Y.useEffect = function(p, v) {
    return ge.current.useEffect(p, v);
  }, Y.useId = function() {
    return ge.current.useId();
  }, Y.useImperativeHandle = function(p, v, H) {
    return ge.current.useImperativeHandle(p, v, H);
  }, Y.useInsertionEffect = function(p, v) {
    return ge.current.useInsertionEffect(p, v);
  }, Y.useLayoutEffect = function(p, v) {
    return ge.current.useLayoutEffect(p, v);
  }, Y.useMemo = function(p, v) {
    return ge.current.useMemo(p, v);
  }, Y.useReducer = function(p, v, H) {
    return ge.current.useReducer(p, v, H);
  }, Y.useRef = function(p) {
    return ge.current.useRef(p);
  }, Y.useState = function(p) {
    return ge.current.useState(p);
  }, Y.useSyncExternalStore = function(p, v, H) {
    return ge.current.useSyncExternalStore(p, v, H);
  }, Y.useTransition = function() {
    return ge.current.useTransition();
  }, Y.version = "18.3.1", Y;
}
var Ta;
function Io() {
  return Ta || (Ta = 1, Mo.exports = Wf()), Mo.exports;
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
var La;
function Qf() {
  if (La) return Nr;
  La = 1;
  var c = Io(), u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, E = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(L, T, O) {
    var b, Q = {}, V = null, pe = null;
    O !== void 0 && (V = "" + O), T.key !== void 0 && (V = "" + T.key), T.ref !== void 0 && (pe = T.ref);
    for (b in T) S.call(T, b) && !$.hasOwnProperty(b) && (Q[b] = T[b]);
    if (L && L.defaultProps) for (b in T = L.defaultProps, T) Q[b] === void 0 && (Q[b] = T[b]);
    return { $$typeof: u, type: L, key: V, ref: pe, props: Q, _owner: E.current };
  }
  return Nr.Fragment = d, Nr.jsx = B, Nr.jsxs = B, Nr;
}
var Ra;
function Kf() {
  return Ra || (Ra = 1, Ro.exports = Qf()), Ro.exports;
}
var U = Kf(), G = Io(), Ul = {}, jo = { exports: {} }, be = {}, Oo = { exports: {} }, Do = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Yf() {
  return Ma || (Ma = 1, (function(c) {
    function u(C, D) {
      var _ = C.length;
      C.push(D);
      e: for (; 0 < _; ) {
        var p = _ - 1 >>> 1, v = C[p];
        if (0 < E(v, D)) C[p] = D, C[_] = v, _ = p;
        else break e;
      }
    }
    function d(C) {
      return C.length === 0 ? null : C[0];
    }
    function S(C) {
      if (C.length === 0) return null;
      var D = C[0], _ = C.pop();
      if (_ !== D) {
        C[0] = _;
        e: for (var p = 0, v = C.length, H = v >>> 1; p < H; ) {
          var W = 2 * (p + 1) - 1, X = C[W], Z = W + 1, ue = C[Z];
          if (0 > E(X, _)) Z < v && 0 > E(ue, X) ? (C[p] = ue, C[Z] = _, p = Z) : (C[p] = X, C[W] = _, p = W);
          else if (Z < v && 0 > E(ue, _)) C[p] = ue, C[Z] = _, p = Z;
          else break e;
        }
      }
      return D;
    }
    function E(C, D) {
      var _ = C.sortIndex - D.sortIndex;
      return _ !== 0 ? _ : C.id - D.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var $ = performance;
      c.unstable_now = function() {
        return $.now();
      };
    } else {
      var B = Date, L = B.now();
      c.unstable_now = function() {
        return B.now() - L;
      };
    }
    var T = [], O = [], b = 1, Q = null, V = 3, pe = !1, he = !1, ee = !1, K = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(C) {
      for (var D = d(O); D !== null; ) {
        if (D.callback === null) S(O);
        else if (D.startTime <= C) S(O), D.sortIndex = D.expirationTime, u(T, D);
        else break;
        D = d(O);
      }
    }
    function te(C) {
      if (ee = !1, ie(C), !he) if (d(T) !== null) he = !0, De(le);
      else {
        var D = d(O);
        D !== null && ge(te, D.startTime - C);
      }
    }
    function le(C, D) {
      he = !1, ee && (ee = !1, ke(Qe), Qe = -1), pe = !0;
      var _ = V;
      try {
        for (ie(D), Q = d(T); Q !== null && (!(Q.expirationTime > D) || C && !Ke()); ) {
          var p = Q.callback;
          if (typeof p == "function") {
            Q.callback = null, V = Q.priorityLevel;
            var v = p(Q.expirationTime <= D);
            D = c.unstable_now(), typeof v == "function" ? Q.callback = v : Q === d(T) && S(T), ie(D);
          } else S(T);
          Q = d(T);
        }
        if (Q !== null) var H = !0;
        else {
          var W = d(O);
          W !== null && ge(te, W.startTime - D), H = !1;
        }
        return H;
      } finally {
        Q = null, V = _, pe = !1;
      }
    }
    var J = !1, je = null, Qe = -1, yt = 5, Oe = -1;
    function Ke() {
      return !(c.unstable_now() - Oe < yt);
    }
    function xe() {
      if (je !== null) {
        var C = c.unstable_now();
        Oe = C;
        var D = !0;
        try {
          D = je(!0, C);
        } finally {
          D ? Be() : (J = !1, je = null);
        }
      } else J = !1;
    }
    var Be;
    if (typeof Ee == "function") Be = function() {
      Ee(xe);
    };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), Ye = $e.port2;
      $e.port1.onmessage = xe, Be = function() {
        Ye.postMessage(null);
      };
    } else Be = function() {
      K(xe, 0);
    };
    function De(C) {
      je = C, J || (J = !0, Be());
    }
    function ge(C, D) {
      Qe = K(function() {
        C(c.unstable_now());
      }, D);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, c.unstable_continueExecution = function() {
      he || pe || (he = !0, De(le));
    }, c.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : yt = 0 < C ? Math.floor(1e3 / C) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, c.unstable_getFirstCallbackNode = function() {
      return d(T);
    }, c.unstable_next = function(C) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = V;
      }
      var _ = V;
      V = D;
      try {
        return C();
      } finally {
        V = _;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(C, D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var _ = V;
      V = C;
      try {
        return D();
      } finally {
        V = _;
      }
    }, c.unstable_scheduleCallback = function(C, D, _) {
      var p = c.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? p + _ : p) : _ = p, C) {
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
      return v = _ + v, C = { id: b++, callback: D, priorityLevel: C, startTime: _, expirationTime: v, sortIndex: -1 }, _ > p ? (C.sortIndex = _, u(O, C), d(T) === null && C === d(O) && (ee ? (ke(Qe), Qe = -1) : ee = !0, ge(te, _ - p))) : (C.sortIndex = v, u(T, C), he || pe || (he = !0, De(le))), C;
    }, c.unstable_shouldYield = Ke, c.unstable_wrapCallback = function(C) {
      var D = V;
      return function() {
        var _ = V;
        V = D;
        try {
          return C.apply(this, arguments);
        } finally {
          V = _;
        }
      };
    };
  })(Do)), Do;
}
var ja;
function Gf() {
  return ja || (ja = 1, Oo.exports = Yf()), Oo.exports;
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
var Oa;
function Xf() {
  if (Oa) return be;
  Oa = 1;
  var c = Io(), u = Gf();
  function d(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), E = {};
  function $(e, t) {
    B(e, t), B(e + "Capture", t);
  }
  function B(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) S.add(t[e]);
  }
  var L = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, b = {}, Q = {};
  function V(e) {
    return T.call(Q, e) ? !0 : T.call(b, e) ? !1 : O.test(e) ? Q[e] = !0 : (b[e] = !0, !1);
  }
  function pe(e, t, n, r) {
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
  function he(e, t, n, r) {
    if (t === null || typeof t > "u" || pe(e, t, n, r)) return !0;
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
  function ee(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    K[e] = new ee(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    K[t] = new ee(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    K[e] = new ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    K[e] = new ee(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    K[e] = new ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    K[e] = new ee(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    K[e] = new ee(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    K[e] = new ee(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    K[e] = new ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ke = /[\-:]([a-z])/g;
  function Ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ke,
      Ee
    );
    K[t] = new ee(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ke, Ee);
    K[t] = new ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ke, Ee);
    K[t] = new ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    K[e] = new ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    K[e] = new ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ie(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (he(t, n, l, r) && (n = null), r || l === null ? V(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, le = Symbol.for("react.element"), J = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), Ke = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), Ye = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), C = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, p;
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
  var H = !1;
  function W(e, t) {
    if (!e || H) return "";
    H = !0;
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
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s]; ) s--;
        for (; 1 <= o && 0 <= s; o--, s--) if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if (o--, s--, 0 > s || l[o] !== i[s]) {
                var a = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= o && 0 <= s);
          break;
        }
      }
    } finally {
      H = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function X(e) {
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
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case J:
        return "Portal";
      case yt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Be:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ke:
        return (e.displayName || "Context") + ".Consumer";
      case Oe:
        return (e._context.displayName || "Context") + ".Provider";
      case xe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ye:
        return t = e.displayName || null, t !== null ? t : Z(e.type) || "Memo";
      case De:
        t = e._payload, e = e._init;
        try {
          return Z(e(t));
        } catch {
        }
    }
    return null;
  }
  function ue(e) {
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
        return Z(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
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
  function ne(e) {
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
  function se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ve(e) {
    var t = se(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function gn(e) {
    e._valueTracker || (e._valueTracker = Ve(e));
  }
  function mn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = se(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function bt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function $n(e, t) {
    var n = t.checked;
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function zr(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ne(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Pr(e, t) {
    t = t.checked, t != null && ie(e, "checked", t, !1);
  }
  function hn(e, t) {
    Pr(e, t);
    var n = ne(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? R(e, t.type, n) : t.hasOwnProperty("defaultValue") && R(e, t.type, ne(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Tr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function R(e, t, n) {
    (t !== "number" || bt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ae = Array.isArray;
  function lt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ne(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(d(92));
        if (ae(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ne(n) };
  }
  function Ao(e, t) {
    var n = ne(t.value), r = ne(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Bo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function $o(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $l(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $o(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Lr, Vo = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Lr = Lr || document.createElement("div"), Lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Lr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hn = {
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
  }, Ya = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hn).forEach(function(e) {
    Ya.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Hn[t] = Hn[e];
    });
  });
  function Ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hn.hasOwnProperty(e) && Hn[e] ? ("" + t).trim() : t + "px";
  }
  function Wo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ho(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ga = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Vl(e, t) {
    if (t) {
      if (Ga[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(d(62));
    }
  }
  function Hl(e, t) {
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
  var Wl = null;
  function Ql(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Kl = null, vn = null, yn = null;
  function Qo(e) {
    if (e = fr(e)) {
      if (typeof Kl != "function") throw Error(d(280));
      var t = e.stateNode;
      t && (t = br(t), Kl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    vn ? yn ? yn.push(e) : yn = [e] : vn = e;
  }
  function Yo() {
    if (vn) {
      var e = vn, t = yn;
      if (yn = vn = null, Qo(e), t) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
  }
  function Go(e, t) {
    return e(t);
  }
  function Xo() {
  }
  var Yl = !1;
  function Zo(e, t, n) {
    if (Yl) return e(t, n);
    Yl = !0;
    try {
      return Go(e, t, n);
    } finally {
      Yl = !1, (vn !== null || yn !== null) && (Xo(), Yo());
    }
  }
  function Wn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = br(n);
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
  var Gl = !1;
  if (L) try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", { get: function() {
      Gl = !0;
    } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    Gl = !1;
  }
  function Xa(e, t, n, r, l, i, o, s, a) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Kn = !1, Rr = null, Mr = !1, Xl = null, Za = { onError: function(e) {
    Kn = !0, Rr = e;
  } };
  function Ja(e, t, n, r, l, i, o, s, a) {
    Kn = !1, Rr = null, Xa.apply(Za, arguments);
  }
  function qa(e, t, n, r, l, i, o, s, a) {
    if (Ja.apply(this, arguments), Kn) {
      if (Kn) {
        var h = Rr;
        Kn = !1, Rr = null;
      } else throw Error(d(198));
      Mr || (Mr = !0, Xl = h);
    }
  }
  function en(e) {
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
  function Jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qo(e) {
    if (en(e) !== e) throw Error(d(188));
  }
  function ba(e) {
    var t = e.alternate;
    if (!t) {
      if (t = en(e), t === null) throw Error(d(188));
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
          if (i === n) return qo(l), e;
          if (i === r) return qo(l), t;
          i = i.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, s = l.child; s; ) {
          if (s === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (s === r) {
            o = !0, r = l, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!o) {
          for (s = i.child; s; ) {
            if (s === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (s === r) {
              o = !0, r = i, n = l;
              break;
            }
            s = s.sibling;
          }
          if (!o) throw Error(d(189));
        }
      }
      if (n.alternate !== r) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : t;
  }
  function bo(e) {
    return e = ba(e), e !== null ? eu(e) : null;
  }
  function eu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = eu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var tu = u.unstable_scheduleCallback, nu = u.unstable_cancelCallback, ec = u.unstable_shouldYield, tc = u.unstable_requestPaint, Se = u.unstable_now, nc = u.unstable_getCurrentPriorityLevel, Zl = u.unstable_ImmediatePriority, ru = u.unstable_UserBlockingPriority, jr = u.unstable_NormalPriority, rc = u.unstable_LowPriority, lu = u.unstable_IdlePriority, Or = null, kt = null;
  function lc(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function") try {
      kt.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var ft = Math.clz32 ? Math.clz32 : uc, ic = Math.log, oc = Math.LN2;
  function uc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ic(e) / oc | 0) | 0;
  }
  var Dr = 64, Fr = 4194304;
  function Yn(e) {
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
  function Ir(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var s = o & ~l;
      s !== 0 ? r = Yn(s) : (i &= o, i !== 0 && (r = Yn(i)));
    } else o = n & ~l, o !== 0 ? r = Yn(o) : i !== 0 && (r = Yn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ft(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function sc(e, t) {
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
  function ac(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - ft(i), s = 1 << o, a = l[o];
      a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (l[o] = sc(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
    }
  }
  function Jl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var e = Dr;
    return Dr <<= 1, (Dr & 4194240) === 0 && (Dr = 64), e;
  }
  function ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n;
  }
  function cc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ft(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function bl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var oe = 0;
  function ou(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var uu, ei, su, au, cu, ti = !1, Ur = [], jt = null, Ot = null, Dt = null, Xn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), Ft = [], fc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ot = null;
        break;
      case "mouseover":
      case "mouseout":
        Dt = null;
        break;
      case "pointerover":
      case "pointerout":
        Xn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(t.pointerId);
    }
  }
  function Jn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = fr(t), t !== null && ei(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function dc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return jt = Jn(jt, e, t, n, r, l), !0;
      case "dragenter":
        return Ot = Jn(Ot, e, t, n, r, l), !0;
      case "mouseover":
        return Dt = Jn(Dt, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Xn.set(i, Jn(Xn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Zn.set(i, Jn(Zn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function du(e) {
    var t = tn(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Jo(n), t !== null) {
            e.blockedOn = t, cu(e.priority, function() {
              su(n);
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
  function Ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Wl = r, n.target.dispatchEvent(r), Wl = null;
      } else return t = fr(n), t !== null && ei(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pu(e, t, n) {
    Ar(e) && n.delete(t);
  }
  function pc() {
    ti = !1, jt !== null && Ar(jt) && (jt = null), Ot !== null && Ar(Ot) && (Ot = null), Dt !== null && Ar(Dt) && (Dt = null), Xn.forEach(pu), Zn.forEach(pu);
  }
  function qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ti || (ti = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, pc)));
  }
  function bn(e) {
    function t(l) {
      return qn(l, e);
    }
    if (0 < Ur.length) {
      qn(Ur[0], e);
      for (var n = 1; n < Ur.length; n++) {
        var r = Ur[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (jt !== null && qn(jt, e), Ot !== null && qn(Ot, e), Dt !== null && qn(Dt, e), Xn.forEach(t), Zn.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) du(n), n.blockedOn === null && Ft.shift();
  }
  var wn = te.ReactCurrentBatchConfig, Br = !0;
  function gc(e, t, n, r) {
    var l = oe, i = wn.transition;
    wn.transition = null;
    try {
      oe = 1, ni(e, t, n, r);
    } finally {
      oe = l, wn.transition = i;
    }
  }
  function mc(e, t, n, r) {
    var l = oe, i = wn.transition;
    wn.transition = null;
    try {
      oe = 4, ni(e, t, n, r);
    } finally {
      oe = l, wn.transition = i;
    }
  }
  function ni(e, t, n, r) {
    if (Br) {
      var l = ri(e, t, n, r);
      if (l === null) ki(e, t, r, $r, n), fu(e, r);
      else if (dc(l, e, t, n, r)) r.stopPropagation();
      else if (fu(e, r), t & 4 && -1 < fc.indexOf(e)) {
        for (; l !== null; ) {
          var i = fr(l);
          if (i !== null && uu(i), i = ri(e, t, n, r), i === null && ki(e, t, r, $r, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else ki(e, t, r, null, n);
    }
  }
  var $r = null;
  function ri(e, t, n, r) {
    if ($r = null, e = Ql(r), e = tn(e), e !== null) if (t = en(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Jo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return $r = e, null;
  }
  function gu(e) {
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
        switch (nc()) {
          case Zl:
            return 1;
          case ru:
            return 4;
          case jr:
          case rc:
            return 16;
          case lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null, li = null, Vr = null;
  function mu() {
    if (Vr) return Vr;
    var e, t = li, n = t.length, r, l = "value" in It ? It.value : It.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Vr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Hr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Wr() {
    return !0;
  }
  function hu() {
    return !1;
  }
  function et(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wr : hu, this.isPropagationStopped = hu, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wr);
    }, persist: function() {
    }, isPersistent: Wr }), t;
  }
  var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ii = et(kn), er = _({}, kn, { view: 0, detail: 0 }), hc = et(er), oi, ui, tr, Qr = _({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ai, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== tr && (tr && e.type === "mousemove" ? (oi = e.screenX - tr.screenX, ui = e.screenY - tr.screenY) : ui = oi = 0, tr = e), oi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ui;
  } }), vu = et(Qr), vc = _({}, Qr, { dataTransfer: 0 }), yc = et(vc), wc = _({}, er, { relatedTarget: 0 }), si = et(wc), kc = _({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xc = et(kc), Sc = _({}, kn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), _c = et(Sc), Cc = _({}, kn, { data: 0 }), yu = et(Cc), Ec = {
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
  }, Nc = {
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
  }, zc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zc[e]) ? !!t[e] : !1;
  }
  function ai() {
    return Pc;
  }
  var Tc = _({}, er, { key: function(e) {
    if (e.key) {
      var t = Ec[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Hr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ai, charCode: function(e) {
    return e.type === "keypress" ? Hr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Hr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Lc = et(Tc), Rc = _({}, Qr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wu = et(Rc), Mc = _({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ai }), jc = et(Mc), Oc = _({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dc = et(Oc), Fc = _({}, Qr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ic = et(Fc), Uc = [9, 13, 27, 32], ci = L && "CompositionEvent" in window, nr = null;
  L && "documentMode" in document && (nr = document.documentMode);
  var Ac = L && "TextEvent" in window && !nr, ku = L && (!ci || nr && 8 < nr && 11 >= nr), xu = " ", Su = !1;
  function _u(e, t) {
    switch (e) {
      case "keyup":
        return Uc.indexOf(t.keyCode) !== -1;
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
  function Cu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function Bc(e, t) {
    switch (e) {
      case "compositionend":
        return Cu(t);
      case "keypress":
        return t.which !== 32 ? null : (Su = !0, xu);
      case "textInput":
        return e = t.data, e === xu && Su ? null : e;
      default:
        return null;
    }
  }
  function $c(e, t) {
    if (xn) return e === "compositionend" || !ci && _u(e, t) ? (e = mu(), Vr = li = It = null, xn = !1, e) : null;
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
        return ku && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vc[e.type] : t === "textarea";
  }
  function Nu(e, t, n, r) {
    Ko(r), t = Zr(t, "onChange"), 0 < t.length && (n = new ii("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var rr = null, lr = null;
  function Hc(e) {
    Wu(e, 0);
  }
  function Kr(e) {
    var t = Nn(e);
    if (mn(t)) return e;
  }
  function Wc(e, t) {
    if (e === "change") return t;
  }
  var zu = !1;
  if (L) {
    var fi;
    if (L) {
      var di = "oninput" in document;
      if (!di) {
        var Pu = document.createElement("div");
        Pu.setAttribute("oninput", "return;"), di = typeof Pu.oninput == "function";
      }
      fi = di;
    } else fi = !1;
    zu = fi && (!document.documentMode || 9 < document.documentMode);
  }
  function Tu() {
    rr && (rr.detachEvent("onpropertychange", Lu), lr = rr = null);
  }
  function Lu(e) {
    if (e.propertyName === "value" && Kr(lr)) {
      var t = [];
      Nu(t, lr, e, Ql(e)), Zo(Hc, t);
    }
  }
  function Qc(e, t, n) {
    e === "focusin" ? (Tu(), rr = t, lr = n, rr.attachEvent("onpropertychange", Lu)) : e === "focusout" && Tu();
  }
  function Kc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kr(lr);
  }
  function Yc(e, t) {
    if (e === "click") return Kr(t);
  }
  function Gc(e, t) {
    if (e === "input" || e === "change") return Kr(t);
  }
  function Xc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : Xc;
  function ir(e, t) {
    if (dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!T.call(t, l) || !dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mu(e, t) {
    var n = Ru(e);
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
      n = Ru(n);
    }
  }
  function ju(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ju(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ou() {
    for (var e = window, t = bt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = bt(e.document);
    }
    return t;
  }
  function pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Zc(e) {
    var t = Ou(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ju(n.ownerDocument.documentElement, n)) {
      if (r !== null && pi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Mu(n, i);
          var o = Mu(
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
  var Jc = L && "documentMode" in document && 11 >= document.documentMode, Sn = null, gi = null, or = null, mi = !1;
  function Du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mi || Sn == null || Sn !== bt(r) || (r = Sn, "selectionStart" in r && pi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && ir(or, r) || (or = r, r = Zr(gi, "onSelect"), 0 < r.length && (t = new ii("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
  }
  function Yr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var _n = { animationend: Yr("Animation", "AnimationEnd"), animationiteration: Yr("Animation", "AnimationIteration"), animationstart: Yr("Animation", "AnimationStart"), transitionend: Yr("Transition", "TransitionEnd") }, hi = {}, Fu = {};
  L && (Fu = document.createElement("div").style, "AnimationEvent" in window || (delete _n.animationend.animation, delete _n.animationiteration.animation, delete _n.animationstart.animation), "TransitionEvent" in window || delete _n.transitionend.transition);
  function Gr(e) {
    if (hi[e]) return hi[e];
    if (!_n[e]) return e;
    var t = _n[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fu) return hi[e] = t[n];
    return e;
  }
  var Iu = Gr("animationend"), Uu = Gr("animationiteration"), Au = Gr("animationstart"), Bu = Gr("transitionend"), $u = /* @__PURE__ */ new Map(), Vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ut(e, t) {
    $u.set(e, t), $(t, [e]);
  }
  for (var vi = 0; vi < Vu.length; vi++) {
    var yi = Vu[vi], qc = yi.toLowerCase(), bc = yi[0].toUpperCase() + yi.slice(1);
    Ut(qc, "on" + bc);
  }
  Ut(Iu, "onAnimationEnd"), Ut(Uu, "onAnimationIteration"), Ut(Au, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(Bu, "onTransitionEnd"), B("onMouseEnter", ["mouseout", "mouseover"]), B("onMouseLeave", ["mouseout", "mouseover"]), B("onPointerEnter", ["pointerout", "pointerover"]), B("onPointerLeave", ["pointerout", "pointerover"]), $("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
  function Hu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, qa(r, t, void 0, e), e.currentTarget = null;
  }
  function Wu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o], a = s.instance, h = s.currentTarget;
          if (s = s.listener, a !== i && l.isPropagationStopped()) break e;
          Hu(l, s, h), i = a;
        }
        else for (o = 0; o < r.length; o++) {
          if (s = r[o], a = s.instance, h = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
          Hu(l, s, h), i = a;
        }
      }
    }
    if (Mr) throw e = Xl, Mr = !1, Xl = null, e;
  }
  function fe(e, t) {
    var n = t[Ni];
    n === void 0 && (n = t[Ni] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Qu(t, e, 2, !1), n.add(r));
  }
  function wi(e, t, n) {
    var r = 0;
    t && (r |= 4), Qu(n, e, r, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function sr(e) {
    if (!e[Xr]) {
      e[Xr] = !0, S.forEach(function(n) {
        n !== "selectionchange" && (ef.has(n) || wi(n, !1, e), wi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, wi("selectionchange", !1, t));
    }
  }
  function Qu(e, t, n, r) {
    switch (gu(t)) {
      case 1:
        var l = gc;
        break;
      case 4:
        l = mc;
        break;
      default:
        l = ni;
    }
    n = l.bind(null, t, n, e), l = void 0, !Gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ki(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || s.nodeType === 8 && s.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var a = o.tag;
          if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
          o = o.return;
        }
        for (; s !== null; ) {
          if (o = tn(s), o === null) return;
          if (a = o.tag, a === 5 || a === 6) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
    Zo(function() {
      var h = i, w = Ql(n), k = [];
      e: {
        var y = $u.get(e);
        if (y !== void 0) {
          var N = ii, P = e;
          switch (e) {
            case "keypress":
              if (Hr(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Lc;
              break;
            case "focusin":
              P = "focus", N = si;
              break;
            case "focusout":
              P = "blur", N = si;
              break;
            case "beforeblur":
            case "afterblur":
              N = si;
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
              N = vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = yc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = jc;
              break;
            case Iu:
            case Uu:
            case Au:
              N = xc;
              break;
            case Bu:
              N = Dc;
              break;
            case "scroll":
              N = hc;
              break;
            case "wheel":
              N = Ic;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = wu;
          }
          var M = (t & 4) !== 0, _e = !M && e === "scroll", g = M ? y !== null ? y + "Capture" : null : y;
          M = [];
          for (var f = h, m; f !== null; ) {
            m = f;
            var x = m.stateNode;
            if (m.tag === 5 && x !== null && (m = x, g !== null && (x = Wn(f, g), x != null && M.push(ar(f, x, m)))), _e) break;
            f = f.return;
          }
          0 < M.length && (y = new N(y, P, null, n, w), k.push({ event: y, listeners: M }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", y && n !== Wl && (P = n.relatedTarget || n.fromElement) && (tn(P) || P[Et])) break e;
          if ((N || y) && (y = w.window === w ? w : (y = w.ownerDocument) ? y.defaultView || y.parentWindow : window, N ? (P = n.relatedTarget || n.toElement, N = h, P = P ? tn(P) : null, P !== null && (_e = en(P), P !== _e || P.tag !== 5 && P.tag !== 6) && (P = null)) : (N = null, P = h), N !== P)) {
            if (M = vu, x = "onMouseLeave", g = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (M = wu, x = "onPointerLeave", g = "onPointerEnter", f = "pointer"), _e = N == null ? y : Nn(N), m = P == null ? y : Nn(P), y = new M(x, f + "leave", N, n, w), y.target = _e, y.relatedTarget = m, x = null, tn(w) === h && (M = new M(g, f + "enter", P, n, w), M.target = m, M.relatedTarget = _e, x = M), _e = x, N && P) t: {
              for (M = N, g = P, f = 0, m = M; m; m = Cn(m)) f++;
              for (m = 0, x = g; x; x = Cn(x)) m++;
              for (; 0 < f - m; ) M = Cn(M), f--;
              for (; 0 < m - f; ) g = Cn(g), m--;
              for (; f--; ) {
                if (M === g || g !== null && M === g.alternate) break t;
                M = Cn(M), g = Cn(g);
              }
              M = null;
            }
            else M = null;
            N !== null && Ku(k, y, N, M, !1), P !== null && _e !== null && Ku(k, _e, P, M, !0);
          }
        }
        e: {
          if (y = h ? Nn(h) : window, N = y.nodeName && y.nodeName.toLowerCase(), N === "select" || N === "input" && y.type === "file") var j = Wc;
          else if (Eu(y)) if (zu) j = Gc;
          else {
            j = Kc;
            var F = Qc;
          }
          else (N = y.nodeName) && N.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (j = Yc);
          if (j && (j = j(e, h))) {
            Nu(k, j, n, w);
            break e;
          }
          F && F(e, y, h), e === "focusout" && (F = y._wrapperState) && F.controlled && y.type === "number" && R(y, "number", y.value);
        }
        switch (F = h ? Nn(h) : window, e) {
          case "focusin":
            (Eu(F) || F.contentEditable === "true") && (Sn = F, gi = h, or = null);
            break;
          case "focusout":
            or = gi = Sn = null;
            break;
          case "mousedown":
            mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mi = !1, Du(k, n, w);
            break;
          case "selectionchange":
            if (Jc) break;
          case "keydown":
          case "keyup":
            Du(k, n, w);
        }
        var I;
        if (ci) e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
        else xn ? _u(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
        A && (ku && n.locale !== "ko" && (xn || A !== "onCompositionStart" ? A === "onCompositionEnd" && xn && (I = mu()) : (It = w, li = "value" in It ? It.value : It.textContent, xn = !0)), F = Zr(h, A), 0 < F.length && (A = new yu(A, e, null, n, w), k.push({ event: A, listeners: F }), I ? A.data = I : (I = Cu(n), I !== null && (A.data = I)))), (I = Ac ? Bc(e, n) : $c(e, n)) && (h = Zr(h, "onBeforeInput"), 0 < h.length && (w = new yu("onBeforeInput", "beforeinput", null, n, w), k.push({ event: w, listeners: h }), w.data = I));
      }
      Wu(k, t);
    });
  }
  function ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Wn(e, n), i != null && r.unshift(ar(e, i, l)), i = Wn(e, t), i != null && r.push(ar(e, i, l))), e = e.return;
    }
    return r;
  }
  function Cn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ku(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var s = n, a = s.alternate, h = s.stateNode;
      if (a !== null && a === r) break;
      s.tag === 5 && h !== null && (s = h, l ? (a = Wn(n, i), a != null && o.unshift(ar(n, a, s))) : l || (a = Wn(n, i), a != null && o.push(ar(n, a, s)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var tf = /\r\n?/g, nf = /\u0000|\uFFFD/g;
  function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(tf, `
`).replace(nf, "");
  }
  function Jr(e, t, n) {
    if (t = Yu(t), Yu(e) !== t && n) throw Error(d(425));
  }
  function qr() {
  }
  var xi = null, Si = null;
  function _i(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ci = typeof setTimeout == "function" ? setTimeout : void 0, rf = typeof clearTimeout == "function" ? clearTimeout : void 0, Gu = typeof Promise == "function" ? Promise : void 0, lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gu < "u" ? function(e) {
    return Gu.resolve(null).then(e).catch(of);
  } : Ci;
  function of(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ei(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), bn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    bn(t);
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
  function Xu(e) {
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
  var En = Math.random().toString(36).slice(2), xt = "__reactFiber$" + En, cr = "__reactProps$" + En, Et = "__reactContainer$" + En, Ni = "__reactEvents$" + En, uf = "__reactListeners$" + En, sf = "__reactHandles$" + En;
  function tn(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Et] || n[xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xu(e); e !== null; ) {
          if (n = e[xt]) return n;
          e = Xu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function fr(e) {
    return e = e[xt] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Nn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function br(e) {
    return e[cr] || null;
  }
  var zi = [], zn = -1;
  function Bt(e) {
    return { current: e };
  }
  function de(e) {
    0 > zn || (e.current = zi[zn], zi[zn] = null, zn--);
  }
  function ce(e, t) {
    zn++, zi[zn] = e.current, e.current = t;
  }
  var $t = {}, Fe = Bt($t), Ge = Bt(!1), nn = $t;
  function Pn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function el() {
    de(Ge), de(Fe);
  }
  function Zu(e, t, n) {
    if (Fe.current !== $t) throw Error(d(168));
    ce(Fe, t), ce(Ge, n);
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, ue(e) || "Unknown", l));
    return _({}, n, r);
  }
  function tl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, nn = Fe.current, ce(Fe, e), ce(Ge, Ge.current), !0;
  }
  function qu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n ? (e = Ju(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, de(Ge), de(Fe), ce(Fe, e)) : de(Ge), ce(Ge, n);
  }
  var Nt = null, nl = !1, Pi = !1;
  function bu(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  function af(e) {
    nl = !0, bu(e);
  }
  function Vt() {
    if (!Pi && Nt !== null) {
      Pi = !0;
      var e = 0, t = oe;
      try {
        var n = Nt;
        for (oe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Nt = null, nl = !1;
      } catch (l) {
        throw Nt !== null && (Nt = Nt.slice(e + 1)), tu(Zl, Vt), l;
      } finally {
        oe = t, Pi = !1;
      }
    }
    return null;
  }
  var Tn = [], Ln = 0, rl = null, ll = 0, it = [], ot = 0, rn = null, zt = 1, Pt = "";
  function ln(e, t) {
    Tn[Ln++] = ll, Tn[Ln++] = rl, rl = e, ll = t;
  }
  function es(e, t, n) {
    it[ot++] = zt, it[ot++] = Pt, it[ot++] = rn, rn = e;
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
  function Ti(e) {
    e.return !== null && (ln(e, 1), es(e, 1, 0));
  }
  function Li(e) {
    for (; e === rl; ) rl = Tn[--Ln], Tn[Ln] = null, ll = Tn[--Ln], Tn[Ln] = null;
    for (; e === rn; ) rn = it[--ot], it[ot] = null, Pt = it[--ot], it[ot] = null, zt = it[--ot], it[ot] = null;
  }
  var tt = null, nt = null, me = !1, pt = null;
  function ts(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, nt = At(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, nt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: zt, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, nt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ri(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Mi(e) {
    if (me) {
      var t = nt;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (Ri(e)) throw Error(d(418));
          t = At(n.nextSibling);
          var r = tt;
          t && ns(e, t) ? ts(r, n) : (e.flags = e.flags & -4097 | 2, me = !1, tt = e);
        }
      } else {
        if (Ri(e)) throw Error(d(418));
        e.flags = e.flags & -4097 | 2, me = !1, tt = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    tt = e;
  }
  function il(e) {
    if (e !== tt) return !1;
    if (!me) return rs(e), me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_i(e.type, e.memoizedProps)), t && (t = nt)) {
      if (Ri(e)) throw ls(), Error(d(418));
      for (; t; ) ts(e, t), t = At(t.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                nt = At(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        nt = null;
      }
    } else nt = tt ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = nt; e; ) e = At(e.nextSibling);
  }
  function Rn() {
    nt = tt = null, me = !1;
  }
  function ji(e) {
    pt === null ? pt = [e] : pt.push(e);
  }
  var cf = te.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(d(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(d(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var s = l.refs;
          o === null ? delete s[i] : s[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function ol(e, t) {
    throw e = Object.prototype.toString.call(t), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function is(e) {
    var t = e._init;
    return t(e._payload);
  }
  function os(e) {
    function t(g, f) {
      if (e) {
        var m = g.deletions;
        m === null ? (g.deletions = [f], g.flags |= 16) : m.push(f);
      }
    }
    function n(g, f) {
      if (!e) return null;
      for (; f !== null; ) t(g, f), f = f.sibling;
      return null;
    }
    function r(g, f) {
      for (g = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? g.set(f.key, f) : g.set(f.index, f), f = f.sibling;
      return g;
    }
    function l(g, f) {
      return g = Zt(g, f), g.index = 0, g.sibling = null, g;
    }
    function i(g, f, m) {
      return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < f ? (g.flags |= 2, f) : m) : (g.flags |= 2, f)) : (g.flags |= 1048576, f);
    }
    function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function s(g, f, m, x) {
      return f === null || f.tag !== 6 ? (f = Eo(m, g.mode, x), f.return = g, f) : (f = l(f, m), f.return = g, f);
    }
    function a(g, f, m, x) {
      var j = m.type;
      return j === je ? w(g, f, m.props.children, x, m.key) : f !== null && (f.elementType === j || typeof j == "object" && j !== null && j.$$typeof === De && is(j) === f.type) ? (x = l(f, m.props), x.ref = dr(g, f, m), x.return = g, x) : (x = Ll(m.type, m.key, m.props, null, g.mode, x), x.ref = dr(g, f, m), x.return = g, x);
    }
    function h(g, f, m, x) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = No(m, g.mode, x), f.return = g, f) : (f = l(f, m.children || []), f.return = g, f);
    }
    function w(g, f, m, x, j) {
      return f === null || f.tag !== 7 ? (f = pn(m, g.mode, x, j), f.return = g, f) : (f = l(f, m), f.return = g, f);
    }
    function k(g, f, m) {
      if (typeof f == "string" && f !== "" || typeof f == "number") return f = Eo("" + f, g.mode, m), f.return = g, f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case le:
            return m = Ll(f.type, f.key, f.props, null, g.mode, m), m.ref = dr(g, null, f), m.return = g, m;
          case J:
            return f = No(f, g.mode, m), f.return = g, f;
          case De:
            var x = f._init;
            return k(g, x(f._payload), m);
        }
        if (ae(f) || D(f)) return f = pn(f, g.mode, m, null), f.return = g, f;
        ol(g, f);
      }
      return null;
    }
    function y(g, f, m, x) {
      var j = f !== null ? f.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : s(g, f, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            return m.key === j ? a(g, f, m, x) : null;
          case J:
            return m.key === j ? h(g, f, m, x) : null;
          case De:
            return j = m._init, y(
              g,
              f,
              j(m._payload),
              x
            );
        }
        if (ae(m) || D(m)) return j !== null ? null : w(g, f, m, x, null);
        ol(g, m);
      }
      return null;
    }
    function N(g, f, m, x, j) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(m) || null, s(f, g, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case le:
            return g = g.get(x.key === null ? m : x.key) || null, a(f, g, x, j);
          case J:
            return g = g.get(x.key === null ? m : x.key) || null, h(f, g, x, j);
          case De:
            var F = x._init;
            return N(g, f, m, F(x._payload), j);
        }
        if (ae(x) || D(x)) return g = g.get(m) || null, w(f, g, x, j, null);
        ol(f, x);
      }
      return null;
    }
    function P(g, f, m, x) {
      for (var j = null, F = null, I = f, A = f = 0, Le = null; I !== null && A < m.length; A++) {
        I.index > A ? (Le = I, I = null) : Le = I.sibling;
        var re = y(g, I, m[A], x);
        if (re === null) {
          I === null && (I = Le);
          break;
        }
        e && I && re.alternate === null && t(g, I), f = i(re, f, A), F === null ? j = re : F.sibling = re, F = re, I = Le;
      }
      if (A === m.length) return n(g, I), me && ln(g, A), j;
      if (I === null) {
        for (; A < m.length; A++) I = k(g, m[A], x), I !== null && (f = i(I, f, A), F === null ? j = I : F.sibling = I, F = I);
        return me && ln(g, A), j;
      }
      for (I = r(g, I); A < m.length; A++) Le = N(I, g, A, m[A], x), Le !== null && (e && Le.alternate !== null && I.delete(Le.key === null ? A : Le.key), f = i(Le, f, A), F === null ? j = Le : F.sibling = Le, F = Le);
      return e && I.forEach(function(Jt) {
        return t(g, Jt);
      }), me && ln(g, A), j;
    }
    function M(g, f, m, x) {
      var j = D(m);
      if (typeof j != "function") throw Error(d(150));
      if (m = j.call(m), m == null) throw Error(d(151));
      for (var F = j = null, I = f, A = f = 0, Le = null, re = m.next(); I !== null && !re.done; A++, re = m.next()) {
        I.index > A ? (Le = I, I = null) : Le = I.sibling;
        var Jt = y(g, I, re.value, x);
        if (Jt === null) {
          I === null && (I = Le);
          break;
        }
        e && I && Jt.alternate === null && t(g, I), f = i(Jt, f, A), F === null ? j = Jt : F.sibling = Jt, F = Jt, I = Le;
      }
      if (re.done) return n(
        g,
        I
      ), me && ln(g, A), j;
      if (I === null) {
        for (; !re.done; A++, re = m.next()) re = k(g, re.value, x), re !== null && (f = i(re, f, A), F === null ? j = re : F.sibling = re, F = re);
        return me && ln(g, A), j;
      }
      for (I = r(g, I); !re.done; A++, re = m.next()) re = N(I, g, A, re.value, x), re !== null && (e && re.alternate !== null && I.delete(re.key === null ? A : re.key), f = i(re, f, A), F === null ? j = re : F.sibling = re, F = re);
      return e && I.forEach(function(Hf) {
        return t(g, Hf);
      }), me && ln(g, A), j;
    }
    function _e(g, f, m, x) {
      if (typeof m == "object" && m !== null && m.type === je && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            e: {
              for (var j = m.key, F = f; F !== null; ) {
                if (F.key === j) {
                  if (j = m.type, j === je) {
                    if (F.tag === 7) {
                      n(g, F.sibling), f = l(F, m.props.children), f.return = g, g = f;
                      break e;
                    }
                  } else if (F.elementType === j || typeof j == "object" && j !== null && j.$$typeof === De && is(j) === F.type) {
                    n(g, F.sibling), f = l(F, m.props), f.ref = dr(g, F, m), f.return = g, g = f;
                    break e;
                  }
                  n(g, F);
                  break;
                } else t(g, F);
                F = F.sibling;
              }
              m.type === je ? (f = pn(m.props.children, g.mode, x, m.key), f.return = g, g = f) : (x = Ll(m.type, m.key, m.props, null, g.mode, x), x.ref = dr(g, f, m), x.return = g, g = x);
            }
            return o(g);
          case J:
            e: {
              for (F = m.key; f !== null; ) {
                if (f.key === F) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                  n(g, f.sibling), f = l(f, m.children || []), f.return = g, g = f;
                  break e;
                } else {
                  n(g, f);
                  break;
                }
                else t(g, f);
                f = f.sibling;
              }
              f = No(m, g.mode, x), f.return = g, g = f;
            }
            return o(g);
          case De:
            return F = m._init, _e(g, f, F(m._payload), x);
        }
        if (ae(m)) return P(g, f, m, x);
        if (D(m)) return M(g, f, m, x);
        ol(g, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(g, f.sibling), f = l(f, m), f.return = g, g = f) : (n(g, f), f = Eo(m, g.mode, x), f.return = g, g = f), o(g)) : n(g, f);
    }
    return _e;
  }
  var Mn = os(!0), us = os(!1), ul = Bt(null), sl = null, jn = null, Oi = null;
  function Di() {
    Oi = jn = sl = null;
  }
  function Fi(e) {
    var t = ul.current;
    de(ul), e._currentValue = t;
  }
  function Ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function On(e, t) {
    sl = e, Oi = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ze = !0), e.firstContext = null);
  }
  function ut(e) {
    var t = e._currentValue;
    if (Oi !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
      if (sl === null) throw Error(d(308));
      jn = e, sl.dependencies = { lanes: 0, firstContext: e };
    } else jn = jn.next = e;
    return t;
  }
  var on = null;
  function Ui(e) {
    on === null ? on = [e] : on.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ui(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Tt(e, r);
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ht = !1;
  function Ai(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (q & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Tt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Ui(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Tt(e, n);
  }
  function al(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, bl(e, n);
    }
  }
  function cs(e, t) {
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
  function cl(e, t, n, r) {
    var l = e.updateQueue;
    Ht = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var a = s, h = a.next;
      a.next = null, o === null ? i = h : o.next = h, o = a;
      var w = e.alternate;
      w !== null && (w = w.updateQueue, s = w.lastBaseUpdate, s !== o && (s === null ? w.firstBaseUpdate = h : s.next = h, w.lastBaseUpdate = a));
    }
    if (i !== null) {
      var k = l.baseState;
      o = 0, w = h = a = null, s = i;
      do {
        var y = s.lane, N = s.eventTime;
        if ((r & y) === y) {
          w !== null && (w = w.next = {
            eventTime: N,
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          });
          e: {
            var P = e, M = s;
            switch (y = t, N = n, M.tag) {
              case 1:
                if (P = M.payload, typeof P == "function") {
                  k = P.call(N, k, y);
                  break e;
                }
                k = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = M.payload, y = typeof P == "function" ? P.call(N, k, y) : P, y == null) break e;
                k = _({}, k, y);
                break e;
              case 2:
                Ht = !0;
            }
          }
          s.callback !== null && s.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [s] : y.push(s));
        } else N = { eventTime: N, lane: y, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, w === null ? (h = w = N, a = k) : w = w.next = N, o |= y;
        if (s = s.next, s === null) {
          if (s = l.shared.pending, s === null) break;
          y = s, s = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
        }
      } while (!0);
      if (w === null && (a = k), l.baseState = a, l.firstBaseUpdate = h, l.lastBaseUpdate = w, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      an |= o, e.lanes = o, e.memoizedState = k;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(d(191, l));
        l.call(r);
      }
    }
  }
  var pr = {}, St = Bt(pr), gr = Bt(pr), mr = Bt(pr);
  function un(e) {
    if (e === pr) throw Error(d(174));
    return e;
  }
  function Bi(e, t) {
    switch (ce(mr, t), ce(gr, e), ce(St, pr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $l(t, e);
    }
    de(St), ce(St, t);
  }
  function Dn() {
    de(St), de(gr), de(mr);
  }
  function ds(e) {
    un(mr.current);
    var t = un(St.current), n = $l(t, e.type);
    t !== n && (ce(gr, e), ce(St, n));
  }
  function $i(e) {
    gr.current === e && (de(St), de(gr));
  }
  var ve = Bt(0);
  function fl(e) {
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
  var Vi = [];
  function Hi() {
    for (var e = 0; e < Vi.length; e++) Vi[e]._workInProgressVersionPrimary = null;
    Vi.length = 0;
  }
  var dl = te.ReactCurrentDispatcher, Wi = te.ReactCurrentBatchConfig, sn = 0, ye = null, Ne = null, Pe = null, pl = !1, hr = !1, vr = 0, ff = 0;
  function Ie() {
    throw Error(d(321));
  }
  function Qi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function Ki(e, t, n, r, l, i) {
    if (sn = i, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, dl.current = e === null || e.memoizedState === null ? mf : hf, e = n(r, l), hr) {
      i = 0;
      do {
        if (hr = !1, vr = 0, 25 <= i) throw Error(d(301));
        i += 1, Pe = Ne = null, t.updateQueue = null, dl.current = vf, e = n(r, l);
      } while (hr);
    }
    if (dl.current = hl, t = Ne !== null && Ne.next !== null, sn = 0, Pe = Ne = ye = null, pl = !1, t) throw Error(d(300));
    return e;
  }
  function Yi() {
    var e = vr !== 0;
    return vr = 0, e;
  }
  function _t() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Pe === null ? ye.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function st() {
    if (Ne === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Pe === null ? ye.memoizedState : Pe.next;
    if (t !== null) Pe = t, Ne = e;
    else {
      if (e === null) throw Error(d(310));
      Ne = e, e = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, Pe === null ? ye.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Gi(e) {
    var t = st(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = Ne, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var s = o = null, a = null, h = i;
      do {
        var w = h.lane;
        if ((sn & w) === w) a !== null && (a = a.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var k = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          a === null ? (s = a = k, o = r) : a = a.next = k, ye.lanes |= w, an |= w;
        }
        h = h.next;
      } while (h !== null && h !== i);
      a === null ? o = r : a.next = s, dt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, ye.lanes |= i, an |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Xi(e) {
    var t = st(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      dt(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function ps() {
  }
  function gs(e, t) {
    var n = ye, r = st(), l = t(), i = !dt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Ze = !0), r = r.queue, Zi(vs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Pe !== null && Pe.memoizedState.tag & 1) {
      if (n.flags |= 2048, wr(9, hs.bind(null, n, r, l, t), void 0, null), Te === null) throw Error(d(349));
      (sn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function hs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ys(t) && ws(e);
  }
  function vs(e, t, n) {
    return n(function() {
      ys(t) && ws(e);
    });
  }
  function ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var t = Tt(e, 1);
    t !== null && vt(t, e, 1, -1);
  }
  function ks(e) {
    var t = _t();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: yr, lastRenderedState: e }, t.queue = e, e = e.dispatch = gf.bind(null, ye, e), [t.memoizedState, e];
  }
  function wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function xs() {
    return st().memoizedState;
  }
  function gl(e, t, n, r) {
    var l = _t();
    ye.flags |= e, l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ml(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ne !== null) {
      var o = Ne.memoizedState;
      if (i = o.destroy, r !== null && Qi(r, o.deps)) {
        l.memoizedState = wr(t, n, i, r);
        return;
      }
    }
    ye.flags |= e, l.memoizedState = wr(1 | t, n, i, r);
  }
  function Ss(e, t) {
    return gl(8390656, 8, e, t);
  }
  function Zi(e, t) {
    return ml(2048, 8, e, t);
  }
  function _s(e, t) {
    return ml(4, 2, e, t);
  }
  function Cs(e, t) {
    return ml(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ns(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ml(4, 4, Es.bind(null, t, e), n);
  }
  function Ji() {
  }
  function zs(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ps(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ts(e, t, n) {
    return (sn & 21) === 0 ? (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n) : (dt(n, t) || (n = iu(), ye.lanes |= n, an |= n, e.baseState = !0), t);
  }
  function df(e, t) {
    var n = oe;
    oe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Wi.transition;
    Wi.transition = {};
    try {
      e(!1), t();
    } finally {
      oe = n, Wi.transition = r;
    }
  }
  function Ls() {
    return st().memoizedState;
  }
  function pf(e, t, n) {
    var r = Gt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Ms(t, n);
    else if (n = ss(e, t, n, r), n !== null) {
      var l = We();
      vt(n, e, r, l), js(n, t, r);
    }
  }
  function gf(e, t, n) {
    var r = Gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Ms(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, s = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = s, dt(s, o)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Ui(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = ss(e, t, l, r), n !== null && (l = We(), vt(n, e, r, l), js(n, t, r));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye;
  }
  function Ms(e, t) {
    hr = pl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, bl(e, n);
    }
  }
  var hl = { readContext: ut, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useInsertionEffect: Ie, useLayoutEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useMutableSource: Ie, useSyncExternalStore: Ie, useId: Ie, unstable_isNewReconciler: !1 }, mf = { readContext: ut, useCallback: function(e, t) {
    return _t().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ut, useEffect: Ss, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, gl(
      4194308,
      4,
      Es.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return gl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return gl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = _t();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = _t();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pf.bind(null, ye, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = _t();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ks, useDebugValue: Ji, useDeferredValue: function(e) {
    return _t().memoizedState = e;
  }, useTransition: function() {
    var e = ks(!1), t = e[0];
    return e = df.bind(null, e[1]), _t().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ye, l = _t();
    if (me) {
      if (n === void 0) throw Error(d(407));
      n = n();
    } else {
      if (n = t(), Te === null) throw Error(d(349));
      (sn & 30) !== 0 || ms(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Ss(vs.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, wr(9, hs.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = _t(), t = Te.identifierPrefix;
    if (me) {
      var n = Pt, r = zt;
      n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = vr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = ff++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, hf = {
    readContext: ut,
    useCallback: zs,
    useContext: ut,
    useEffect: Zi,
    useImperativeHandle: Ns,
    useInsertionEffect: _s,
    useLayoutEffect: Cs,
    useMemo: Ps,
    useReducer: Gi,
    useRef: xs,
    useState: function() {
      return Gi(yr);
    },
    useDebugValue: Ji,
    useDeferredValue: function(e) {
      var t = st();
      return Ts(t, Ne.memoizedState, e);
    },
    useTransition: function() {
      var e = Gi(yr)[0], t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: gs,
    useId: Ls,
    unstable_isNewReconciler: !1
  }, vf = { readContext: ut, useCallback: zs, useContext: ut, useEffect: Zi, useImperativeHandle: Ns, useInsertionEffect: _s, useLayoutEffect: Cs, useMemo: Ps, useReducer: Xi, useRef: xs, useState: function() {
    return Xi(yr);
  }, useDebugValue: Ji, useDeferredValue: function(e) {
    var t = st();
    return Ne === null ? t.memoizedState = e : Ts(t, Ne.memoizedState, e);
  }, useTransition: function() {
    var e = Xi(yr)[0], t = st().memoizedState;
    return [e, t];
  }, useMutableSource: ps, useSyncExternalStore: gs, useId: Ls, unstable_isNewReconciler: !1 };
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var vl = { isMounted: function(e) {
    return (e = e._reactInternals) ? en(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = We(), l = Gt(e), i = Lt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Wt(e, i, l), t !== null && (vt(t, e, l, r), al(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = We(), l = Gt(e), i = Lt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wt(e, i, l), t !== null && (vt(t, e, l, r), al(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = We(), r = Gt(e), l = Lt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Wt(e, l, r), t !== null && (vt(t, e, r, n), al(t, e, r));
  } };
  function Os(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ir(n, r) || !ir(l, i) : !0;
  }
  function Ds(e, t, n) {
    var r = !1, l = $t, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ut(i) : (l = Xe(t) ? nn : Fe.current, r = t.contextTypes, i = (r = r != null) ? Pn(e, l) : $t), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Fs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
  }
  function bi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ai(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = ut(i) : (i = Xe(t) ? nn : Fe.current, l.context = Pn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (qi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), cl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "", r = t;
      do
        n += X(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function eo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function to(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var yf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Cl || (Cl = !0, vo = r), to(e, t);
    }, n;
  }
  function Us(e, t, n) {
    n = Lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        to(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      to(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function As(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new yf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Mf.bind(null, e, t, n), t.then(e, e));
  }
  function Bs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $s(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, Wt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var wf = te.ReactCurrentOwner, Ze = !1;
  function He(e, t, n, r) {
    t.child = e === null ? us(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function Vs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return On(t, l), r = Ki(e, t, n, r, i, l), n = Yi(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (me && n && Ti(t), t.flags |= 1, He(e, t, r, l), t.child);
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Co(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ws(e, t, i, r, l)) : (e = Ll(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ir, n(o, r) && e.ref === t.ref) return Rt(e, t, l);
    }
    return t.flags |= 1, e = Zt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ir(i, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ze = !0);
      else return t.lanes = e.lanes, Rt(e, t, l);
    }
    return no(e, t, n, r, l);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ce(Un, rt), rt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ce(Un, rt), rt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ce(Un, rt), rt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ce(Un, rt), rt |= r;
    return He(e, t, l, n), t.child;
  }
  function Ks(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function no(e, t, n, r, l) {
    var i = Xe(n) ? nn : Fe.current;
    return i = Pn(t, i), On(t, l), n = Ki(e, t, n, r, i, l), r = Yi(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (me && r && Ti(t), t.flags |= 1, He(e, t, n, l), t.child);
  }
  function Ys(e, t, n, r, l) {
    if (Xe(n)) {
      var i = !0;
      tl(t);
    } else i = !1;
    if (On(t, l), t.stateNode === null) wl(e, t), Ds(t, n, r), bi(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, s = t.memoizedProps;
      o.props = s;
      var a = o.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = ut(h) : (h = Xe(n) ? nn : Fe.current, h = Pn(t, h));
      var w = n.getDerivedStateFromProps, k = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      k || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== h) && Fs(t, o, r, h), Ht = !1;
      var y = t.memoizedState;
      o.state = y, cl(t, r, o, l), a = t.memoizedState, s !== r || y !== a || Ge.current || Ht ? (typeof w == "function" && (qi(t, n, w, r), a = t.memoizedState), (s = Ht || Os(t, n, s, r, y, a, h)) ? (k || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = h, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, as(e, t), s = t.memoizedProps, h = t.type === t.elementType ? s : gt(t.type, s), o.props = h, k = t.pendingProps, y = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = ut(a) : (a = Xe(n) ? nn : Fe.current, a = Pn(t, a));
      var N = n.getDerivedStateFromProps;
      (w = typeof N == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== k || y !== a) && Fs(t, o, r, a), Ht = !1, y = t.memoizedState, o.state = y, cl(t, r, o, l);
      var P = t.memoizedState;
      s !== k || y !== P || Ge.current || Ht ? (typeof N == "function" && (qi(t, n, N, r), P = t.memoizedState), (h = Ht || Os(t, n, h, r, y, P, a) || !1) ? (w || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, P, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), o.props = r, o.state = P, o.context = a, r = h) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ro(e, t, n, r, i, l);
  }
  function ro(e, t, n, r, l, i) {
    Ks(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && qu(t, n, !1), Rt(e, t, i);
    r = t.stateNode, wf.current = t;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Mn(t, e.child, null, i), t.child = Mn(t, null, s, i)) : He(e, t, s, i), t.memoizedState = r.state, l && qu(t, n, !0), t.child;
  }
  function Gs(e) {
    var t = e.stateNode;
    t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1), Bi(e, t.containerInfo);
  }
  function Xs(e, t, n, r, l) {
    return Rn(), ji(l), t.flags |= 256, He(e, t, n, r), t.child;
  }
  var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function io(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = ve.current, i = !1, o = (t.flags & 128) !== 0, s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ce(ve, l & 1), e === null)
      return Mi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Rl(o, r, 0, null), e = pn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = io(n), t.memoizedState = lo, e) : oo(t, o));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return kf(e, t, o, r, s, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
      var a = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Zt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Zt(s, i) : (i = pn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? io(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = lo, r;
    }
    return i = e.child, e = i.sibling, r = Zt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function oo(e, t) {
    return t = Rl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function yl(e, t, n, r) {
    return r !== null && ji(r), Mn(t, e.child, null, n), e = oo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function kf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = eo(Error(d(422))), yl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Rl({ mode: "visible", children: r.children }, l, 0, null), i = pn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Mn(t, e.child, null, o), t.child.memoizedState = io(o), t.memoizedState = lo, i);
    if ((t.mode & 1) === 0) return yl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
      return r = s, i = Error(d(419)), r = eo(i, r, void 0), yl(e, t, o, r);
    }
    if (s = (o & e.childLanes) !== 0, Ze || s) {
      if (r = Te, r !== null) {
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
      return _o(), r = eo(Error(d(421))), yl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, nt = At(l.nextSibling), tt = t, me = !0, pt = null, e !== null && (it[ot++] = zt, it[ot++] = Pt, it[ot++] = rn, zt = e.id, Pt = e.overflow, rn = t), t = oo(t, r.children), t.flags |= 4096, t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ii(e.return, t, n);
  }
  function uo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (He(e, t, r.children, n), r = ve.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
        else if (e.tag === 19) Js(e, n, t);
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
    if (ce(ve, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && fl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), uo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && fl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        uo(t, !0, n, null, i);
        break;
      case "together":
        uo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Rt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function xf(e, t, n) {
    switch (t.tag) {
      case 3:
        Gs(t), Rn();
        break;
      case 5:
        ds(t);
        break;
      case 1:
        Xe(t.type) && tl(t);
        break;
      case 4:
        Bi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ce(ul, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ce(ve, ve.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zs(e, t, n) : (ce(ve, ve.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
        ce(ve, ve.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ce(ve, ve.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Qs(e, t, n);
    }
    return Rt(e, t, n);
  }
  var bs, so, ea, ta;
  bs = function(e, t) {
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
  }, so = function() {
  }, ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, un(St.current);
      var i = null;
      switch (n) {
        case "input":
          l = $n(e, l), r = $n(e, r), i = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = wt(e, l), r = wt(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr);
      }
      Vl(n, r);
      var o;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var s = l[h];
        for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
      for (h in r) {
        var a = r[h];
        if (s = l != null ? l[h] : void 0, r.hasOwnProperty(h) && a !== s && (a != null || s != null)) if (h === "style") if (s) {
          for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
        } else n || (i || (i = []), i.push(
          h,
          n
        )), n = a;
        else h === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(h, a)) : h === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(h, "" + a) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (E.hasOwnProperty(h) ? (a != null && h === "onScroll" && fe("scroll", e), i || s === a || (i = [])) : (i = i || []).push(h, a));
      }
      n && (i = i || []).push("style", n);
      var h = i;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, ta = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function kr(e, t) {
    if (!me) switch (e.tailMode) {
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
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Sf(e, t, n) {
    var r = t.pendingProps;
    switch (Li(t), t.tag) {
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
        return Ue(t), null;
      case 1:
        return Xe(t.type) && el(), Ue(t), null;
      case 3:
        return r = t.stateNode, Dn(), de(Ge), de(Fe), Hi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pt !== null && (ko(pt), pt = null))), so(e, t), Ue(t), null;
      case 5:
        $i(t);
        var l = un(mr.current);
        if (n = t.type, e !== null && t.stateNode != null) ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Ue(t), null;
          }
          if (e = un(St.current), il(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[xt] = t, r[cr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ur.length; l++) fe(ur[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe(
                  "error",
                  r
                ), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                zr(r, i), fe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, fe("invalid", r);
                break;
              case "textarea":
                Uo(r, i), fe("invalid", r);
            }
            Vl(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Jr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Jr(
                r.textContent,
                s,
                e
              ), l = ["children", "" + s]) : E.hasOwnProperty(o) && s != null && o === "onScroll" && fe("scroll", r);
            }
            switch (n) {
              case "input":
                gn(r), Tr(r, i, !0);
                break;
              case "textarea":
                gn(r), Bo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = qr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $o(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[xt] = t, e[cr] = r, bs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Hl(n, r), n) {
                case "dialog":
                  fe("cancel", e), fe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ur.length; l++) fe(ur[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  fe(
                    "error",
                    e
                  ), fe("load", e), l = r;
                  break;
                case "details":
                  fe("toggle", e), l = r;
                  break;
                case "input":
                  zr(e, r), l = $n(e, r), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), fe("invalid", e);
                  break;
                case "textarea":
                  Uo(e, r), l = wt(e, r), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              Vl(n, l), s = l;
              for (i in s) if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? Wo(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Vo(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Vn(e, a) : typeof a == "number" && Vn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (E.hasOwnProperty(i) ? a != null && i === "onScroll" && fe("scroll", e) : a != null && ie(e, i, a, o));
              }
              switch (n) {
                case "input":
                  gn(e), Tr(e, r, !1);
                  break;
                case "textarea":
                  gn(e), Bo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ne(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? lt(e, !!r.multiple, i, !1) : r.defaultValue != null && lt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = qr);
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
        return Ue(t), null;
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (n = un(mr.current), un(St.current), il(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[xt] = t, (i = r.nodeValue !== n) && (e = tt, e !== null)) switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xt] = t, t.stateNode = r;
        }
        return Ue(t), null;
      case 13:
        if (de(ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (me && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ls(), Rn(), t.flags |= 98560, i = !1;
          else if (i = il(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(d(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(d(317));
              i[xt] = t;
            } else Rn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), i = !1;
          } else pt !== null && (ko(pt), pt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ve.current & 1) !== 0 ? ze === 0 && (ze = 3) : _o())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
      case 4:
        return Dn(), so(e, t), e === null && sr(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return Fi(t.type._context), Ue(t), null;
      case 17:
        return Xe(t.type) && el(), Ue(t), null;
      case 19:
        if (de(ve), i = t.memoizedState, i === null) return Ue(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) kr(i, !1);
        else {
          if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = fl(e), o !== null) {
              for (t.flags |= 128, kr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ce(ve, ve.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Se() > An && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = fl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !me) return Ue(t), null;
          } else 2 * Se() - i.renderingStartTime > An && n !== 1073741824 && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Se(), t.sibling = null, n = ve.current, ce(ve, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
      case 22:
      case 23:
        return So(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (rt & 1073741824) !== 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function _f(e, t) {
    switch (Li(t), t.tag) {
      case 1:
        return Xe(t.type) && el(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Dn(), de(Ge), de(Fe), Hi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return $i(t), null;
      case 13:
        if (de(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(d(340));
          Rn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return de(ve), null;
      case 4:
        return Dn(), null;
      case 10:
        return Fi(t.type._context), null;
      case 22:
      case 23:
        return So(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var kl = !1, Ae = !1, Cf = typeof WeakSet == "function" ? WeakSet : Set, z = null;
  function In(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      we(e, t, r);
    }
    else n.current = null;
  }
  function ao(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var na = !1;
  function Ef(e, t) {
    if (xi = Br, e = Ou(), pi(e)) {
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
          var o = 0, s = -1, a = -1, h = 0, w = 0, k = e, y = null;
          t: for (; ; ) {
            for (var N; k !== n || l !== 0 && k.nodeType !== 3 || (s = o + l), k !== i || r !== 0 && k.nodeType !== 3 || (a = o + r), k.nodeType === 3 && (o += k.nodeValue.length), (N = k.firstChild) !== null; )
              y = k, k = N;
            for (; ; ) {
              if (k === e) break t;
              if (y === n && ++h === l && (s = o), y === i && ++w === r && (a = o), (N = k.nextSibling) !== null) break;
              k = y, y = k.parentNode;
            }
            k = N;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Si = { focusedElem: e, selectionRange: n }, Br = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
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
              var M = P.memoizedProps, _e = P.memoizedState, g = t.stateNode, f = g.getSnapshotBeforeUpdate(t.elementType === t.type ? M : gt(t.type, M), _e);
              g.__reactInternalSnapshotBeforeUpdate = f;
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
        we(t, t.return, x);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, z = e;
        break;
      }
      z = t.return;
    }
    return P = na, na = !1, P;
  }
  function xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && ao(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function xl(e, t) {
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
  function co(e) {
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
  function ra(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ra(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xt], delete t[cr], delete t[Ni], delete t[uf], delete t[sf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ia(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qr));
    else if (r !== 4 && (e = e.child, e !== null)) for (fo(e, t, n), e = e.sibling; e !== null; ) fo(e, t, n), e = e.sibling;
  }
  function po(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), e = e.sibling;
  }
  var Re = null, mt = !1;
  function Qt(e, t, n) {
    for (n = n.child; n !== null; ) oa(e, t, n), n = n.sibling;
  }
  function oa(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function") try {
      kt.onCommitFiberUnmount(Or, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ae || In(n, t);
      case 6:
        var r = Re, l = mt;
        Re = null, Qt(e, t, n), Re = r, mt = l, Re !== null && (mt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
      case 18:
        Re !== null && (mt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Ei(e.parentNode, n) : e.nodeType === 1 && Ei(e, n), bn(e)) : Ei(Re, n.stateNode));
        break;
      case 4:
        r = Re, l = mt, Re = n.stateNode.containerInfo, mt = !0, Qt(e, t, n), Re = r, mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ao(n, t, o), l = l.next;
          } while (l !== r);
        }
        Qt(e, t, n);
        break;
      case 1:
        if (!Ae && (In(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          we(n, t, s);
        }
        Qt(e, t, n);
        break;
      case 21:
        Qt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ae = (r = Ae) || n.memoizedState !== null, Qt(e, t, n), Ae = r) : Qt(e, t, n);
        break;
      default:
        Qt(e, t, n);
    }
  }
  function ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Cf()), t.forEach(function(r) {
        var l = Of.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              Re = s.stateNode, mt = !1;
              break e;
            case 3:
              Re = s.stateNode.containerInfo, mt = !0;
              break e;
            case 4:
              Re = s.stateNode.containerInfo, mt = !0;
              break e;
          }
          s = s.return;
        }
        if (Re === null) throw Error(d(160));
        oa(i, o, l), Re = null, mt = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (h) {
        we(l, t, h);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sa(t, e), t = t.sibling;
  }
  function sa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), Ct(e), r & 4) {
          try {
            xr(3, e, e.return), xl(3, e);
          } catch (M) {
            we(e, e.return, M);
          }
          try {
            xr(5, e, e.return);
          } catch (M) {
            we(e, e.return, M);
          }
        }
        break;
      case 1:
        ht(t, e), Ct(e), r & 512 && n !== null && In(n, n.return);
        break;
      case 5:
        if (ht(t, e), Ct(e), r & 512 && n !== null && In(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (M) {
            we(e, e.return, M);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            s === "input" && i.type === "radio" && i.name != null && Pr(l, i), Hl(s, o);
            var h = Hl(s, i);
            for (o = 0; o < a.length; o += 2) {
              var w = a[o], k = a[o + 1];
              w === "style" ? Wo(l, k) : w === "dangerouslySetInnerHTML" ? Vo(l, k) : w === "children" ? Vn(l, k) : ie(l, w, k, h);
            }
            switch (s) {
              case "input":
                hn(l, i);
                break;
              case "textarea":
                Ao(l, i);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var N = i.value;
                N != null ? lt(l, !!i.multiple, N, !1) : y !== !!i.multiple && (i.defaultValue != null ? lt(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : lt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[cr] = i;
          } catch (M) {
            we(e, e.return, M);
          }
        }
        break;
      case 6:
        if (ht(t, e), Ct(e), r & 4) {
          if (e.stateNode === null) throw Error(d(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (M) {
            we(e, e.return, M);
          }
        }
        break;
      case 3:
        if (ht(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          bn(t.containerInfo);
        } catch (M) {
          we(e, e.return, M);
        }
        break;
      case 4:
        ht(t, e), Ct(e);
        break;
      case 13:
        ht(t, e), Ct(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ho = Se())), r & 4 && ua(e);
        break;
      case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ae = (h = Ae) || w, ht(t, e), Ae = h) : ht(t, e), Ct(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0) for (z = e, w = e.child; w !== null; ) {
            for (k = z = w; z !== null; ) {
              switch (y = z, N = y.child, y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, y, y.return);
                  break;
                case 1:
                  In(y, y.return);
                  var P = y.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = y, n = y.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (M) {
                      we(r, n, M);
                    }
                  }
                  break;
                case 5:
                  In(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    fa(k);
                    continue;
                  }
              }
              N !== null ? (N.return = y, z = N) : fa(k);
            }
            w = w.sibling;
          }
          e: for (w = null, k = e; ; ) {
            if (k.tag === 5) {
              if (w === null) {
                w = k;
                try {
                  l = k.stateNode, h ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = k.stateNode, a = k.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Ho("display", o));
                } catch (M) {
                  we(e, e.return, M);
                }
              }
            } else if (k.tag === 6) {
              if (w === null) try {
                k.stateNode.nodeValue = h ? "" : k.memoizedProps;
              } catch (M) {
                we(e, e.return, M);
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
        ht(t, e), Ct(e), r & 4 && ua(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (la(n)) {
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
            r.flags & 32 && (Vn(l, ""), r.flags &= -33);
            var i = ia(e);
            po(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, s = ia(e);
            fo(e, s, o);
            break;
          default:
            throw Error(d(161));
        }
      } catch (a) {
        we(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Nf(e, t, n) {
    z = e, aa(e);
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var l = z, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || kl;
        if (!o) {
          var s = l.alternate, a = s !== null && s.memoizedState !== null || Ae;
          s = kl;
          var h = Ae;
          if (kl = o, (Ae = a) && !h) for (z = l; z !== null; ) o = z, a = o.child, o.tag === 22 && o.memoizedState !== null ? da(l) : a !== null ? (a.return = o, z = a) : da(l);
          for (; i !== null; ) z = i, aa(i), i = i.sibling;
          z = l, kl = s, Ae = h;
        }
        ca(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, z = i) : ca(e);
    }
  }
  function ca(e) {
    for (; z !== null; ) {
      var t = z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && fs(t, i, r);
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
                fs(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    k !== null && bn(k);
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
          Ae || t.flags & 512 && co(t);
        } catch (y) {
          we(t, t.return, y);
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
  function fa(e) {
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
  function da(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xl(4, t);
            } catch (a) {
              we(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                we(t, l, a);
              }
            }
            var i = t.return;
            try {
              co(t);
            } catch (a) {
              we(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              co(t);
            } catch (a) {
              we(t, o, a);
            }
        }
      } catch (a) {
        we(t, t.return, a);
      }
      if (t === e) {
        z = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, z = s;
        break;
      }
      z = t.return;
    }
  }
  var zf = Math.ceil, Sl = te.ReactCurrentDispatcher, go = te.ReactCurrentOwner, at = te.ReactCurrentBatchConfig, q = 0, Te = null, Ce = null, Me = 0, rt = 0, Un = Bt(0), ze = 0, Sr = null, an = 0, _l = 0, mo = 0, _r = null, Je = null, ho = 0, An = 1 / 0, Mt = null, Cl = !1, vo = null, Kt = null, El = !1, Yt = null, Nl = 0, Cr = 0, yo = null, zl = -1, Pl = 0;
  function We() {
    return (q & 6) !== 0 ? Se() : zl !== -1 ? zl : zl = Se();
  }
  function Gt(e) {
    return (e.mode & 1) === 0 ? 1 : (q & 2) !== 0 && Me !== 0 ? Me & -Me : cf.transition !== null ? (Pl === 0 && (Pl = iu()), Pl) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gu(e.type)), e);
  }
  function vt(e, t, n, r) {
    if (50 < Cr) throw Cr = 0, yo = null, Error(d(185));
    Gn(e, n, r), ((q & 2) === 0 || e !== Te) && (e === Te && ((q & 2) === 0 && (_l |= n), ze === 4 && Xt(e, Me)), qe(e, r), n === 1 && q === 0 && (t.mode & 1) === 0 && (An = Se() + 500, nl && Vt()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    ac(e, t);
    var r = Ir(e, e === Te ? Me : 0);
    if (r === 0) n !== null && nu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && nu(n), t === 1) e.tag === 0 ? af(ga.bind(null, e)) : bu(ga.bind(null, e)), lf(function() {
        (q & 6) === 0 && Vt();
      }), n = null;
      else {
        switch (ou(r)) {
          case 1:
            n = Zl;
            break;
          case 4:
            n = ru;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = lu;
            break;
          default:
            n = jr;
        }
        n = Sa(n, pa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pa(e, t) {
    if (zl = -1, Pl = 0, (q & 6) !== 0) throw Error(d(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n) return null;
    var r = Ir(e, e === Te ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Tl(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var i = ha();
      (Te !== e || Me !== t) && (Mt = null, An = Se() + 500, fn(e, t));
      do
        try {
          Lf();
          break;
        } catch (s) {
          ma(e, s);
        }
      while (!0);
      Di(), Sl.current = i, q = l, Ce !== null ? t = 0 : (Te = null, Me = 0, t = ze);
    }
    if (t !== 0) {
      if (t === 2 && (l = Jl(e), l !== 0 && (r = l, t = wo(e, l))), t === 1) throw n = Sr, fn(e, 0), Xt(e, r), qe(e, Se()), n;
      if (t === 6) Xt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Pf(l) && (t = Tl(e, r), t === 2 && (i = Jl(e), i !== 0 && (r = i, t = wo(e, i))), t === 1)) throw n = Sr, fn(e, 0), Xt(e, r), qe(e, Se()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            dn(e, Je, Mt);
            break;
          case 3:
            if (Xt(e, r), (r & 130023424) === r && (t = ho + 500 - Se(), 10 < t)) {
              if (Ir(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                We(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ci(dn.bind(null, e, Je, Mt), t);
              break;
            }
            dn(e, Je, Mt);
            break;
          case 4:
            if (Xt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - ft(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ci(dn.bind(null, e, Je, Mt), r);
              break;
            }
            dn(e, Je, Mt);
            break;
          case 5:
            dn(e, Je, Mt);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return qe(e, Se()), e.callbackNode === n ? pa.bind(null, e) : null;
  }
  function wo(e, t) {
    var n = _r;
    return e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256), e = Tl(e, t), e !== 2 && (t = Je, Je = n, t !== null && ko(t)), e;
  }
  function ko(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function Pf(e) {
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
    for (t &= ~mo, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ga(e) {
    if ((q & 6) !== 0) throw Error(d(327));
    Bn();
    var t = Ir(e, 0);
    if ((t & 1) === 0) return qe(e, Se()), null;
    var n = Tl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Jl(e);
      r !== 0 && (t = r, n = wo(e, r));
    }
    if (n === 1) throw n = Sr, fn(e, 0), Xt(e, t), qe(e, Se()), n;
    if (n === 6) throw Error(d(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Je, Mt), qe(e, Se()), null;
  }
  function xo(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      q = n, q === 0 && (An = Se() + 500, nl && Vt());
    }
  }
  function cn(e) {
    Yt !== null && Yt.tag === 0 && (q & 6) === 0 && Bn();
    var t = q;
    q |= 1;
    var n = at.transition, r = oe;
    try {
      if (at.transition = null, oe = 1, e) return e();
    } finally {
      oe = r, at.transition = n, q = t, (q & 6) === 0 && Vt();
    }
  }
  function So() {
    rt = Un.current, de(Un);
  }
  function fn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, rf(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
      var r = n;
      switch (Li(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && el();
          break;
        case 3:
          Dn(), de(Ge), de(Fe), Hi();
          break;
        case 5:
          $i(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          de(ve);
          break;
        case 19:
          de(ve);
          break;
        case 10:
          Fi(r.type._context);
          break;
        case 22:
        case 23:
          So();
      }
      n = n.return;
    }
    if (Te = e, Ce = e = Zt(e.current, null), Me = rt = t, ze = 0, Sr = null, mo = _l = an = 0, Je = _r = null, on !== null) {
      for (t = 0; t < on.length; t++) if (n = on[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      on = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = Ce;
      try {
        if (Di(), dl.current = hl, pl) {
          for (var r = ye.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          pl = !1;
        }
        if (sn = 0, Pe = Ne = ye = null, hr = !1, vr = 0, go.current = null, n === null || n.return === null) {
          ze = 1, Sr = t, Ce = null;
          break;
        }
        e: {
          var i = e, o = n.return, s = n, a = t;
          if (t = Me, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var h = a, w = s, k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var y = w.alternate;
              y ? (w.updateQueue = y.updateQueue, w.memoizedState = y.memoizedState, w.lanes = y.lanes) : (w.updateQueue = null, w.memoizedState = null);
            }
            var N = Bs(o);
            if (N !== null) {
              N.flags &= -257, $s(N, o, s, i, t), N.mode & 1 && As(i, h, t), t = N, a = h;
              var P = t.updateQueue;
              if (P === null) {
                var M = /* @__PURE__ */ new Set();
                M.add(a), t.updateQueue = M;
              } else P.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                As(i, h, t), _o();
                break e;
              }
              a = Error(d(426));
            }
          } else if (me && s.mode & 1) {
            var _e = Bs(o);
            if (_e !== null) {
              (_e.flags & 65536) === 0 && (_e.flags |= 256), $s(_e, o, s, i, t), ji(Fn(a, s));
              break e;
            }
          }
          i = a = Fn(a, s), ze !== 4 && (ze = 2), _r === null ? _r = [i] : _r.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Is(i, a, t);
                cs(i, g);
                break e;
              case 1:
                s = a;
                var f = i.type, m = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Kt === null || !Kt.has(m)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var x = Us(i, s, t);
                  cs(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ya(n);
      } catch (j) {
        t = j, Ce === n && n !== null && (Ce = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = Sl.current;
    return Sl.current = hl, e === null ? hl : e;
  }
  function _o() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4), Te === null || (an & 268435455) === 0 && (_l & 268435455) === 0 || Xt(Te, Me);
  }
  function Tl(e, t) {
    var n = q;
    q |= 2;
    var r = ha();
    (Te !== e || Me !== t) && (Mt = null, fn(e, t));
    do
      try {
        Tf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if (Di(), q = n, Sl.current = r, Ce !== null) throw Error(d(261));
    return Te = null, Me = 0, ze;
  }
  function Tf() {
    for (; Ce !== null; ) va(Ce);
  }
  function Lf() {
    for (; Ce !== null && !ec(); ) va(Ce);
  }
  function va(e) {
    var t = xa(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps, t === null ? ya(e) : Ce = t, go.current = null;
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Sf(n, t, rt), n !== null) {
          Ce = n;
          return;
        }
      } else {
        if (n = _f(n, t), n !== null) {
          n.flags &= 32767, Ce = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ze = 6, Ce = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function dn(e, t, n) {
    var r = oe, l = at.transition;
    try {
      at.transition = null, oe = 1, Rf(e, t, n, r);
    } finally {
      at.transition = l, oe = r;
    }
    return null;
  }
  function Rf(e, t, n, r) {
    do
      Bn();
    while (Yt !== null);
    if ((q & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(d(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (cc(e, i), e === Te && (Ce = Te = null, Me = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || El || (El = !0, Sa(jr, function() {
      return Bn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = at.transition, at.transition = null;
      var o = oe;
      oe = 1;
      var s = q;
      q |= 4, go.current = null, Ef(e, n), sa(n, e), Zc(Si), Br = !!xi, Si = xi = null, e.current = n, Nf(n), tc(), q = s, oe = o, at.transition = i;
    } else e.current = n;
    if (El && (El = !1, Yt = e, Nl = l), i = e.pendingLanes, i === 0 && (Kt = null), lc(n.stateNode), qe(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Cl) throw Cl = !1, e = vo, vo = null, e;
    return (Nl & 1) !== 0 && e.tag !== 0 && Bn(), i = e.pendingLanes, (i & 1) !== 0 ? e === yo ? Cr++ : (Cr = 0, yo = e) : Cr = 0, Vt(), null;
  }
  function Bn() {
    if (Yt !== null) {
      var e = ou(Nl), t = at.transition, n = oe;
      try {
        if (at.transition = null, oe = 16 > e ? 16 : e, Yt === null) var r = !1;
        else {
          if (e = Yt, Yt = null, Nl = 0, (q & 6) !== 0) throw Error(d(331));
          var l = q;
          for (q |= 4, z = e.current; z !== null; ) {
            var i = z, o = i.child;
            if ((z.flags & 16) !== 0) {
              var s = i.deletions;
              if (s !== null) {
                for (var a = 0; a < s.length; a++) {
                  var h = s[a];
                  for (z = h; z !== null; ) {
                    var w = z;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xr(8, w, i);
                    }
                    var k = w.child;
                    if (k !== null) k.return = w, z = k;
                    else for (; z !== null; ) {
                      w = z;
                      var y = w.sibling, N = w.return;
                      if (ra(w), w === h) {
                        z = null;
                        break;
                      }
                      if (y !== null) {
                        y.return = N, z = y;
                        break;
                      }
                      z = N;
                    }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var M = P.child;
                  if (M !== null) {
                    P.child = null;
                    do {
                      var _e = M.sibling;
                      M.sibling = null, M = _e;
                    } while (M !== null);
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
                  xr(9, i, i.return);
              }
              var g = i.sibling;
              if (g !== null) {
                g.return = i.return, z = g;
                break e;
              }
              z = i.return;
            }
          }
          var f = e.current;
          for (z = f; z !== null; ) {
            o = z;
            var m = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && m !== null) m.return = o, z = m;
            else e: for (o = f; z !== null; ) {
              if (s = z, (s.flags & 2048) !== 0) try {
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xl(9, s);
                }
              } catch (j) {
                we(s, s.return, j);
              }
              if (s === o) {
                z = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                x.return = s.return, z = x;
                break e;
              }
              z = s.return;
            }
          }
          if (q = l, Vt(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
            kt.onPostCommitFiberRoot(Or, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        oe = n, at.transition = t;
      }
    }
    return !1;
  }
  function wa(e, t, n) {
    t = Fn(n, t), t = Is(e, t, 1), e = Wt(e, t, 1), t = We(), e !== null && (Gn(e, 1, t), qe(e, t));
  }
  function we(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
          e = Fn(n, e), e = Us(t, e, 1), t = Wt(t, e, 1), e = We(), t !== null && (Gn(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = We(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (Me & n) === n && (ze === 4 || ze === 3 && (Me & 130023424) === Me && 500 > Se() - ho ? fn(e, 0) : mo |= n), qe(e, t);
  }
  function ka(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Fr, Fr <<= 1, (Fr & 130023424) === 0 && (Fr = 4194304)));
    var n = We();
    e = Tt(e, t), e !== null && (Gn(e, t, n), qe(e, n));
  }
  function jf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ka(e, n);
  }
  function Of(e, t) {
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
    r !== null && r.delete(t), ka(e, n);
  }
  var xa;
  xa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ze = !1, xf(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
    else Ze = !1, me && (t.flags & 1048576) !== 0 && es(t, ll, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        wl(e, t), e = t.pendingProps;
        var l = Pn(t, Fe.current);
        On(t, n), l = Ki(null, t, r, e, l, n);
        var i = Yi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (i = !0, tl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ai(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, bi(t, r, e, n), t = ro(null, t, r, !0, i, n)) : (t.tag = 0, me && i && Ti(t), He(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (wl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ff(r), e = gt(r, e), l) {
            case 0:
              t = no(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = Vs(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, gt(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), no(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), Ys(e, t, r, l, n);
      case 3:
        e: {
          if (Gs(t), e === null) throw Error(d(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, as(e, t), cl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Fn(Error(d(423)), t), t = Xs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Fn(Error(d(424)), t), t = Xs(e, t, r, n, l);
            break e;
          } else for (nt = At(t.stateNode.containerInfo.firstChild), tt = t, me = !0, pt = null, n = us(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Rn(), r === l) {
              t = Rt(e, t, n);
              break e;
            }
            He(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ds(t), e === null && Mi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, _i(r, l) ? o = null : i !== null && _i(r, i) && (t.flags |= 32), Ks(e, t), He(e, t, o, n), t.child;
      case 6:
        return e === null && Mi(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return Bi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Mn(t, null, r, n) : He(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), Vs(e, t, r, l, n);
      case 7:
        return He(e, t, t.pendingProps, n), t.child;
      case 8:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, ce(ul, r._currentValue), r._currentValue = o, i !== null) if (dt(i.value, o)) {
            if (i.children === l.children && !Ge.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var s = i.dependencies;
            if (s !== null) {
              o = i.child;
              for (var a = s.firstContext; a !== null; ) {
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
                  i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ii(
                    i.return,
                    n,
                    t
                  ), s.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(d(341));
              o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ii(o, n, t), o = i.sibling;
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
          He(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, On(t, n), l = ut(l), r = r(l), t.flags |= 1, He(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = gt(r, t.pendingProps), l = gt(r.type, l), Hs(e, t, r, l, n);
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), wl(e, t), t.tag = 1, Xe(r) ? (e = !0, tl(t)) : e = !1, On(t, n), Ds(t, r, l), bi(t, r, l, n), ro(null, t, r, !0, e, n);
      case 19:
        return qs(e, t, n);
      case 22:
        return Qs(e, t, n);
    }
    throw Error(d(156, t.tag));
  };
  function Sa(e, t) {
    return tu(e, t);
  }
  function Df(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(e, t, n, r) {
    return new Df(e, t, n, r);
  }
  function Co(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ff(e) {
    if (typeof e == "function") return Co(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === xe) return 11;
      if (e === Ye) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ll(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") Co(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case je:
        return pn(n.children, l, i, t);
      case Qe:
        o = 8, l |= 8;
        break;
      case yt:
        return e = ct(12, n, t, l | 2), e.elementType = yt, e.lanes = i, e;
      case Be:
        return e = ct(13, n, t, l), e.elementType = Be, e.lanes = i, e;
      case $e:
        return e = ct(19, n, t, l), e.elementType = $e, e.lanes = i, e;
      case ge:
        return Rl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Oe:
            o = 10;
            break e;
          case Ke:
            o = 9;
            break e;
          case xe:
            o = 11;
            break e;
          case Ye:
            o = 14;
            break e;
          case De:
            o = 16, r = null;
            break e;
        }
        throw Error(d(130, e == null ? e : typeof e, ""));
    }
    return t = ct(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function pn(e, t, n, r) {
    return e = ct(7, e, r, t), e.lanes = n, e;
  }
  function Rl(e, t, n, r) {
    return e = ct(22, e, r, t), e.elementType = ge, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Eo(e, t, n) {
    return e = ct(6, e, null, t), e.lanes = n, e;
  }
  function No(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function If(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function zo(e, t, n, r, l, i, o, s, a) {
    return e = new If(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ct(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ai(i), e;
  }
  function Uf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function _a(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
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
      if (Xe(n)) return Ju(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, i, o, s, a) {
    return e = zo(n, r, !0, e, l, i, o, s, a), e.context = _a(null), n = e.current, r = We(), l = Gt(n), i = Lt(r, l), i.callback = t ?? null, Wt(n, i, l), e.current.lanes = l, Gn(e, l, r), qe(e, r), e;
  }
  function Ml(e, t, n, r) {
    var l = t.current, i = We(), o = Gt(l);
    return n = _a(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wt(l, t, o), e !== null && (vt(e, l, o, i), al(e, l, o)), o;
  }
  function jl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ea(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Po(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t);
  }
  function Af() {
    return null;
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function To(e) {
    this._internalRoot = e;
  }
  Ol.prototype.render = To.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    Ml(e, t, null, null);
  }, Ol.prototype.unmount = To.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      cn(function() {
        Ml(null, e, null, null);
      }), t[Et] = null;
    }
  };
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = au();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
      Ft.splice(n, 0, e), n === 0 && du(e);
    }
  };
  function Lo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Dl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function za() {
  }
  function Bf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var h = jl(o);
          i.call(h);
        };
      }
      var o = Ca(t, r, e, 0, null, !1, !1, "", za);
      return e._reactRootContainer = o, e[Et] = o.current, sr(e.nodeType === 8 ? e.parentNode : e), cn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var h = jl(a);
        s.call(h);
      };
    }
    var a = zo(e, 0, !1, null, null, !1, !1, "", za);
    return e._reactRootContainer = a, e[Et] = a.current, sr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
      Ml(t, a, n, r);
    }), a;
  }
  function Fl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var s = l;
        l = function() {
          var a = jl(o);
          s.call(a);
        };
      }
      Ml(t, o, e, l);
    } else o = Bf(n, t, e, l, r);
    return jl(o);
  }
  uu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Yn(t.pendingLanes);
          n !== 0 && (bl(t, n | 1), qe(t, Se()), (q & 6) === 0 && (An = Se() + 500, Vt()));
        }
        break;
      case 13:
        cn(function() {
          var r = Tt(e, 1);
          if (r !== null) {
            var l = We();
            vt(r, e, 1, l);
          }
        }), Po(e, 1);
    }
  }, ei = function(e) {
    if (e.tag === 13) {
      var t = Tt(e, 134217728);
      if (t !== null) {
        var n = We();
        vt(t, e, 134217728, n);
      }
      Po(e, 134217728);
    }
  }, su = function(e) {
    if (e.tag === 13) {
      var t = Gt(e), n = Tt(e, t);
      if (n !== null) {
        var r = We();
        vt(n, e, t, r);
      }
      Po(e, t);
    }
  }, au = function() {
    return oe;
  }, cu = function(e, t) {
    var n = oe;
    try {
      return oe = e, t();
    } finally {
      oe = n;
    }
  }, Kl = function(e, t, n) {
    switch (t) {
      case "input":
        if (hn(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = br(r);
              if (!l) throw Error(d(90));
              mn(r), hn(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ao(e, n);
        break;
      case "select":
        t = n.value, t != null && lt(e, !!n.multiple, t, !1);
    }
  }, Go = xo, Xo = cn;
  var $f = { usingClientEntryPoint: !1, Events: [fr, Nn, br, Ko, Yo, xo] }, Er = { findFiberByHostInstance: tn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vf = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: te.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Er.findFiberByHostInstance || Af, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Il.isDisabled && Il.supportsFiber) try {
      Or = Il.inject(Vf), kt = Il;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f, be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lo(t)) throw Error(d(200));
    return Uf(e, t, null, n);
  }, be.createRoot = function(e, t) {
    if (!Lo(e)) throw Error(d(299));
    var n = !1, r = "", l = Na;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = zo(e, 1, !1, null, null, n, !1, r, l), e[Et] = t.current, sr(e.nodeType === 8 ? e.parentNode : e), new To(t);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = bo(t), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return cn(e);
  }, be.hydrate = function(e, t, n) {
    if (!Dl(t)) throw Error(d(200));
    return Fl(null, e, t, !0, n);
  }, be.hydrateRoot = function(e, t, n) {
    if (!Lo(e)) throw Error(d(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Na;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ca(t, null, e, 1, n ?? null, l, !1, i, o), e[Et] = t.current, sr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ol(t);
  }, be.render = function(e, t, n) {
    if (!Dl(t)) throw Error(d(200));
    return Fl(null, e, t, !1, n);
  }, be.unmountComponentAtNode = function(e) {
    if (!Dl(e)) throw Error(d(40));
    return e._reactRootContainer ? (cn(function() {
      Fl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Et] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = xo, be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Dl(n)) throw Error(d(200));
    if (e == null || e._reactInternals === void 0) throw Error(d(38));
    return Fl(e, t, n, !1, r);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var Da;
function Zf() {
  if (Da) return jo.exports;
  Da = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (u) {
        console.error(u);
      }
  }
  return c(), jo.exports = Xf(), jo.exports;
}
var Fa;
function Jf() {
  if (Fa) return Ul;
  Fa = 1;
  var c = Zf();
  return Ul.createRoot = c.createRoot, Ul.hydrateRoot = c.hydrateRoot, Ul;
}
var qf = Jf();
const bf = /* @__PURE__ */ new Set([
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
]), ed = {
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
function td(c) {
  const u = {};
  for (const [d, S] of Object.entries(c)) {
    const E = ed[d];
    !E || S == null || (u[E] = String(S));
  }
  return u;
}
function nd(c) {
  return c.replace(/-([a-z])/g, (u, d) => d.toUpperCase());
}
function rd(c) {
  if (typeof c == "number" && Number.isFinite(c)) return c;
  if (typeof c != "string") return null;
  const u = c.trim();
  if (!u || u.length > 120) return null;
  const d = u.toLowerCase();
  return d.includes("url(") || d.includes("expression(") || d.includes("javascript:") || d.includes("@import") || d.includes("</") ? null : u;
}
function qt(c) {
  if (!c || typeof c != "object" || Array.isArray(c)) return {};
  const u = {};
  for (const [d, S] of Object.entries(c)) {
    const E = nd(d);
    if (!bf.has(E)) continue;
    const $ = rd(S);
    $ != null && (u[E] = $);
  }
  return u;
}
const Ia = {
  bg: "--sig-bg",
  background: "--sig-bg",
  surface: "--sig-surface",
  surfaceHover: "--sig-surface-hover",
  border: "--sig-border",
  text: "--sig-text",
  muted: "--sig-muted",
  accent: "--sig-accent",
  accentSoft: "--sig-accent-soft",
  selection: "--sig-selection",
  danger: "--sig-danger",
  dangerSoft: "--sig-danger-soft",
  radius: "--sig-radius",
  shadow: "--sig-shadow",
  panel: "--sig-panel",
  panelHover: "--sig-panel-hover",
  // also accept CSS-variable style keys
  "--sig-bg": "--sig-bg",
  "--sig-surface": "--sig-surface",
  "--sig-surface-hover": "--sig-surface-hover",
  "--sig-border": "--sig-border",
  "--sig-text": "--sig-text",
  "--sig-muted": "--sig-muted",
  "--sig-accent": "--sig-accent",
  "--sig-accent-soft": "--sig-accent-soft",
  "--sig-selection": "--sig-selection",
  "--sig-danger": "--sig-danger",
  "--sig-danger-soft": "--sig-danger-soft",
  "--sig-radius": "--sig-radius",
  "--sig-shadow": "--sig-shadow",
  "--sig-panel": "--sig-panel",
  "--sig-panel-hover": "--sig-panel-hover"
};
function ld(c) {
  return c.replace(/-([a-z])/g, (u, d) => d.toUpperCase());
}
function id(c) {
  if (typeof c == "number" && Number.isFinite(c)) return String(c);
  if (typeof c != "string") return null;
  const u = c.trim();
  if (!u || u.length > 160) return null;
  const d = u.toLowerCase();
  return d.includes("url(") || d.includes("expression(") || d.includes("javascript:") || d.includes("@import") || d.includes("</") ? null : u;
}
function od(c) {
  return c === "dark" || c === "light" || c === "auto" ? c : "light";
}
function Fo(c) {
  return c === "light" || c === "dark" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ud(c) {
  if (!c || typeof c != "object") return {};
  const u = {};
  for (const [d, S] of Object.entries(c)) {
    const E = id(S);
    if (E == null) continue;
    const $ = Ia[d] || Ia[ld(d)];
    if ($) {
      u[$] = E;
      continue;
    }
    d.startsWith("--sig-") && (u[d] = E);
  }
  return u;
}
function Wa(c) {
  return c === "select" || c === "open" || c === "none" ? c : null;
}
function Qa(c) {
  if (!c || typeof c != "object") return null;
  const u = c;
  if (typeof u.id != "string" || !u.id) return null;
  const d = u.variant === "primary" || u.variant === "danger" || u.variant === "ghost" ? u.variant : "default", S = u.size === "sm" || u.size === "lg" ? u.size : "md";
  return {
    id: u.id,
    label: typeof u.label == "string" ? u.label : u.id,
    variant: d,
    size: S,
    style: qt(u.style),
    disabled: !!u.disabled
  };
}
function sd(c) {
  if (!c || typeof c != "object") return null;
  const u = c, d = typeof u.text == "string" ? u.text : typeof u.label == "string" ? u.label : null;
  if (d == null) return null;
  const S = typeof u.id == "string" && u.id ? u.id : `text-${d.slice(0, 24)}`, E = u.variant === "muted" || u.variant === "accent" || u.variant === "danger" || u.variant === "badge" ? u.variant : "default";
  return {
    id: S,
    text: d,
    style: qt(u.style),
    variant: E,
    clickable: !!u.clickable
  };
}
function ad(c) {
  if (!c || typeof c != "object") return null;
  const u = c;
  if (typeof u.id != "string" || typeof u.src != "string") return null;
  const d = Array.isArray(u.buttons) ? u.buttons.map(Qa).filter((Q) => Q != null) : [], S = Array.isArray(u.texts) ? u.texts.map(sd).filter((Q) => Q != null) : [], E = typeof u.label == "string" ? u.label : u.id, $ = u.hover_text ?? u.hoverText, B = u.card_style ?? u.cardStyle ?? u.style ?? null, L = {
    ...qt(
      typeof u.background == "string" || typeof u.color == "string" ? {
        ...typeof u.background == "string" ? { background: u.background } : {},
        ...typeof u.color == "string" ? { color: u.color } : {},
        ...typeof u.font_family == "string" || typeof u.fontFamily == "string" ? {
          fontFamily: u.font_family || u.fontFamily
        } : {}
      } : {}
    ),
    ...qt(B)
  }, T = u.open_url ?? u.openUrl ?? u.href ?? u.link, O = u.size_bytes ?? u.sizeBytes ?? u.size ?? u.bytes ?? u.filesize;
  let b = null;
  if (typeof O == "number" && Number.isFinite(O) && O >= 0)
    b = Math.floor(O);
  else if (typeof O == "string" && O.trim()) {
    const Q = Number(O);
    Number.isFinite(Q) && Q >= 0 && (b = Math.floor(Q));
  }
  return {
    id: u.id,
    src: u.src,
    label: E,
    label_style: qt(u.label_style ?? u.labelStyle),
    caption: typeof u.caption == "string" ? u.caption : "",
    caption_style: qt(u.caption_style ?? u.captionStyle),
    hover_text: typeof $ == "string" && $.length > 0 ? $ : E,
    card_style: L,
    image_click: Wa(u.image_click ?? u.imageClick),
    open_url: typeof T == "string" ? T : "",
    size_bytes: b,
    disabled: !!u.disabled,
    buttons: d,
    texts: S
  };
}
function Ua(c) {
  const u = c ?? {}, d = Array.isArray(u.items) ? u.items.map(ad).filter((O) => O != null) : [], S = Array.isArray(u.selected_ids) ? u.selected_ids.map(String) : [], E = Array.isArray(u.buttons) ? u.buttons.map(Qa).filter((O) => O != null) : [], $ = Number(u.columns), B = Number.isFinite($) ? Math.max(1, Math.min($, 8)) : 4, L = typeof u.selection_color == "string" && u.selection_color.trim() ? u.selection_color.trim() : "", T = Wa(u.image_click) ?? (u.selectable === !1 ? "open" : "select");
  return {
    items: d,
    columns: B,
    gap: Math.max(0, Number(u.gap) || 0),
    selectable: u.selectable !== !1,
    show_checkboxes: u.show_checkboxes !== !1,
    image_click: T,
    open_in_new_tab: u.open_in_new_tab !== !1,
    show_hover_text: u.show_hover_text !== !1,
    show_card_info: u.show_card_info !== !1,
    show_selection_stats: u.show_selection_stats !== !1,
    selection_color: L,
    theme: od(u.theme),
    theme_overrides: (() => {
      const O = ud(
        u.theme_overrides ?? {}
      ), b = {};
      for (const [Q, V] of Object.entries(O))
        typeof V == "string" && (b[Q] = V);
      return b;
    })(),
    card_style: qt(u.card_style),
    button_style: qt(u.button_style),
    selected_ids: S,
    multi_select: u.multi_select !== !1,
    show_select_all: !!u.show_select_all,
    buttons: E,
    max_height: Math.max(120, Number(u.max_height) || 640),
    page_size: (() => {
      const O = Number(u.page_size);
      return !Number.isFinite(O) || O <= 0 ? 0 : Math.max(1, Math.min(Math.floor(O), 200));
    })(),
    rows: (() => {
      const O = Number(u.rows);
      return !Number.isFinite(O) || O <= 0 ? 0 : Math.max(1, Math.min(Math.floor(O), 12));
    })(),
    show_layout_controls: !!u.show_layout_controls,
    pager_position: u.pager_position === "bottom" ? "bottom" : "top",
    total_count: (() => {
      if (u.total_count == null) return -1;
      const O = Number(u.total_count);
      return !Number.isFinite(O) || O < 0 ? -1 : Math.floor(O);
    })(),
    page_index: (() => {
      const O = Number(u.page_index);
      return !Number.isFinite(O) || O < 0 ? 0 : Math.floor(O);
    })(),
    show_items: u.show_items !== !1,
    thumbnail_fit: u.thumbnail_fit === "contain" ? "contain" : "cover",
    empty_message: typeof u.empty_message == "string" ? u.empty_message : "No images"
  };
}
function Aa(c) {
  return [...c].sort().join("\0");
}
function Ba({
  label: c,
  value: u,
  min: d,
  max: S,
  onChange: E
}) {
  return /* @__PURE__ */ U.jsxs("div", { className: "sig-layout-stepper", role: "group", "aria-label": c, children: [
    /* @__PURE__ */ U.jsx("span", { className: "sig-layout-label", children: c }),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn sig-btn-sm",
        disabled: u <= d,
        "aria-label": `Decrease ${c}`,
        onClick: () => E(Math.max(d, u - 1)),
        children: "−"
      }
    ),
    /* @__PURE__ */ U.jsx("span", { className: "sig-layout-value", "aria-live": "polite", children: u }),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn sig-btn-sm",
        disabled: u >= S,
        "aria-label": `Increase ${c}`,
        onClick: () => E(Math.min(S, u + 1)),
        children: "+"
      }
    )
  ] });
}
function Ka({
  button: c,
  onClick: u,
  className: d = ""
}) {
  const S = c.size !== "md" ? `sig-btn-${c.size}` : "";
  return /* @__PURE__ */ U.jsx(
    "button",
    {
      type: "button",
      className: `sig-btn sig-btn-${c.variant} ${S} ${d}`.trim(),
      style: c.style,
      disabled: c.disabled,
      onClick: (E) => {
        E.stopPropagation(), u(c.id);
      },
      children: c.label
    }
  );
}
function cd({
  text: c,
  onClick: u
}) {
  const d = [
    "sig-text",
    c.variant !== "default" ? `sig-text-${c.variant}` : "",
    c.clickable ? "sig-text-clickable" : ""
  ].filter(Boolean).join(" ");
  return c.clickable ? /* @__PURE__ */ U.jsx(
    "span",
    {
      className: d,
      style: c.style,
      title: c.text,
      role: "button",
      tabIndex: 0,
      onClick: (S) => {
        S.stopPropagation(), u(c.id);
      },
      onKeyDown: (S) => {
        (S.key === "Enter" || S.key === " ") && (S.preventDefault(), S.stopPropagation(), u(c.id));
      },
      children: c.text
    }
  ) : /* @__PURE__ */ U.jsx("span", { className: d, style: c.style, title: c.text, children: c.text });
}
function fd(c, u) {
  return c.image_click ?? u;
}
function dd({
  item: c,
  selected: u,
  selectable: d,
  showCheckboxes: S,
  showHoverText: E,
  showCardInfo: $,
  thumbnailFit: B,
  cardStyle: L,
  imageClick: T,
  openInNewTab: O,
  onToggle: b,
  onOpen: Q,
  onButton: V
}) {
  const pe = fd(c, T), he = c.open_url || c.src, ee = () => {
    if (!c.disabled && pe !== "none") {
      if (pe === "select") {
        d && b(c.id);
        return;
      }
      he && O && typeof window < "u" && window.open(he, "_blank", "noopener,noreferrer"), Q(c.id, he);
    }
  }, K = (le) => {
    c.disabled || le.target.closest("input, button") || (le.stopPropagation(), ee());
  }, ke = (le) => {
    c.disabled || (le.key === "Enter" || le.key === " ") && (le.preventDefault(), ee());
  }, Ee = {
    ...L,
    ...c.card_style
  }, ie = !c.disabled && pe !== "none", te = pe === "select" ? `${u ? "Deselect" : "Select"} ${c.label}` : pe === "open" ? `Open ${c.label}` : c.label;
  return /* @__PURE__ */ U.jsxs(
    "article",
    {
      className: [
        "sig-card",
        u ? "sig-card-selected" : "",
        c.disabled ? "sig-card-disabled" : "",
        $ ? "" : "sig-card-image-only"
      ].filter(Boolean).join(" "),
      style: Ee,
      tabIndex: ie ? 0 : -1,
      "aria-selected": d ? u : void 0,
      "aria-disabled": c.disabled || void 0,
      onKeyDown: ie ? ke : void 0,
      children: [
        /* @__PURE__ */ U.jsxs(
          "div",
          {
            className: [
              "sig-thumb-wrap",
              u ? "sig-thumb-wrap-selected" : "",
              pe === "none" ? "sig-thumb-wrap-static" : ""
            ].filter(Boolean).join(" "),
            role: ie ? "button" : void 0,
            "aria-label": ie ? te : c.label,
            onClick: ie ? K : void 0,
            children: [
              d && S && /* @__PURE__ */ U.jsx(
                "input",
                {
                  className: "sig-check",
                  type: "checkbox",
                  checked: u,
                  disabled: c.disabled,
                  "aria-label": `Select ${c.label}`,
                  onChange: () => b(c.id),
                  onClick: (le) => le.stopPropagation()
                }
              ),
              /* @__PURE__ */ U.jsx(
                "img",
                {
                  className: "sig-thumb",
                  src: c.src,
                  alt: c.label,
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  style: { objectFit: B }
                }
              ),
              E && c.hover_text ? /* @__PURE__ */ U.jsx("div", { className: "sig-hover-overlay", title: c.hover_text, children: c.hover_text }) : null
            ]
          }
        ),
        $ ? /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
          /* @__PURE__ */ U.jsxs("div", { className: "sig-meta", children: [
            /* @__PURE__ */ U.jsx("div", { className: "sig-label", title: c.label, style: c.label_style, children: c.label }),
            c.caption ? /* @__PURE__ */ U.jsx(
              "div",
              {
                className: "sig-caption",
                title: c.caption,
                style: c.caption_style,
                children: c.caption
              }
            ) : null
          ] }),
          c.texts.length > 0 ? /* @__PURE__ */ U.jsx("div", { className: "sig-texts", children: c.texts.map((le) => /* @__PURE__ */ U.jsx(
            cd,
            {
              text: le,
              onClick: (J) => V(J, c.id)
            },
            le.id
          )) }) : null,
          c.buttons.length > 0 ? /* @__PURE__ */ U.jsx("div", { className: "sig-card-actions", children: c.buttons.map((le) => /* @__PURE__ */ U.jsx(
            Ka,
            {
              button: { ...le, disabled: le.disabled || c.disabled },
              onClick: (J) => V(J, c.id)
            },
            le.id
          )) }) : null
        ] }) : null
      ]
    }
  );
}
function $a(c, u) {
  const d = new Set(c.map(String)), S = u.filter((E) => d.has(E));
  for (const E of d)
    S.includes(E) || S.push(E);
  return S;
}
function pd(c) {
  if (!Number.isFinite(c) || c < 0) return "";
  const u = ["B", "KB", "MB", "GB", "TB"];
  let d = c, S = 0;
  for (; d >= 1024 && S < u.length - 1; )
    d /= 1024, S += 1;
  return S === 0 ? `${Math.round(d)} B` : `${d.toFixed(1)} ${u[S]}`;
}
function Va(c, u, d) {
  const S = new Map(u.map((T) => [T.id, T]));
  let E = 0, $ = 0;
  for (const T of c) {
    const O = S.get(T);
    !O || O.size_bytes == null || (E += 1, $ += O.size_bytes);
  }
  let L = `${c.length} selected`;
  return d && (L = `${L} / ${d}`), E > 0 && (L = `${L} · ${pd($)}`), L;
}
function gd({
  setStateValue: c,
  ...u
}) {
  const d = Aa(u.selected_ids), [S, E] = G.useState(() => u.selected_ids), $ = G.useRef(0), B = G.useRef(d), L = G.useRef(!1), T = G.useMemo(() => u.items.map((R) => R.id), [u.items]), O = G.useMemo(() => T.join("\0"), [T]), [b, Q] = G.useState(() => u.columns), [V, pe] = G.useState(
    () => u.rows > 0 ? u.rows : u.show_layout_controls ? 2 : 0
  );
  G.useEffect(() => {
    Q(u.columns);
  }, [u.columns]), G.useEffect(() => {
    u.rows > 0 ? pe(u.rows) : u.show_layout_controls || pe(0);
  }, [u.rows, u.show_layout_controls]);
  const he = G.useCallback(
    (R, ae) => {
      c("layout_columns", R), c("layout_rows", ae > 0 ? ae : null);
    },
    [c]
  );
  G.useEffect(() => {
    he(b, V);
  }, [b, V, he]);
  const ee = b, K = u.total_count >= 0, ke = G.useMemo(() => V > 0 ? Math.max(1, ee * V) : u.page_size > 0 ? u.page_size : 0, [u.page_size, ee, V]), Ee = K ? u.total_count : u.items.length, ie = ke ? Math.max(1, Math.ceil(Math.max(0, Ee) / ke) || 1) : 1, [te, le] = G.useState(
    () => Math.min(Math.max(0, u.page_index || 0), Math.max(0, ie - 1))
  ), J = G.useCallback(
    (R) => {
      const ae = Math.min(Math.max(0, R), Math.max(0, ie - 1));
      le(ae), K && c("page_index", ae);
    },
    [K, ie, c]
  );
  G.useEffect(() => {
    if (K) {
      const R = Math.min(
        Math.max(0, u.page_index || 0),
        Math.max(0, ie - 1)
      );
      le(R);
      return;
    }
    le((R) => Math.min(Math.max(0, R), ie - 1));
  }, [K, u.page_index, ie, O]);
  const je = G.useMemo(() => {
    if (!ke || K) return u.items;
    const R = te * ke;
    return u.items.slice(R, R + ke);
  }, [u.items, K, te, ke]), Qe = G.useCallback(
    (R) => {
      Q(R), he(R, V), J(0);
    },
    [he, J, V]
  ), yt = G.useCallback(
    (R) => {
      pe(R), he(b, R), J(0);
    },
    [b, he, J]
  );
  G.useEffect(() => {
    if (d === B.current) {
      L.current = !1;
      return;
    }
    if (L.current)
      return;
    B.current = d;
    const R = $a(u.selected_ids, T);
    E(R), c("selected_ids", R), c("selected_csv", R.join(","));
  }, [d, u.selected_ids, T, c]);
  const Oe = G.useCallback(
    (R) => {
      const ae = $a(R, T), lt = Aa(ae);
      B.current = lt, L.current = !0, E(ae), c("selected_ids", ae), c("selected_csv", ae.join(","));
    },
    [T, c]
  ), Ke = G.useCallback(
    (R, ae) => {
      $.current += 1, c("clicked_button", R), c("clicked_item", ae), c("action_nonce", $.current);
    },
    [c]
  ), xe = G.useMemo(
    () => u.items.filter((R) => !R.disabled).map((R) => R.id),
    [u.items]
  ), Be = G.useCallback(
    (R) => {
      if (!u.selectable) return;
      const ae = u.items.find((wt) => wt.id === R);
      if (!ae || ae.disabled) return;
      let lt;
      if (u.multi_select) {
        const wt = new Set(S);
        wt.has(R) ? wt.delete(R) : wt.add(R), lt = [...wt];
      } else
        lt = S.includes(R) ? [] : [R];
      Oe(lt);
    },
    [u.items, u.multi_select, u.selectable, Oe, S]
  ), $e = G.useCallback(() => {
    Oe([...xe]);
  }, [xe, Oe]), Ye = G.useCallback(() => {
    Oe([]);
  }, [Oe]), De = G.useCallback(
    (R) => Ke(R, null),
    [Ke]
  ), ge = G.useCallback(
    (R, ae) => Ke(R, ae),
    [Ke]
  ), C = G.useCallback(
    (R, ae) => Ke("open", R),
    [Ke]
  ), D = xe.filter(
    (R) => S.includes(R)
  ).length, _ = xe.length > 0 && D === xe.length, p = D > 0 && !_, v = D === 0, H = G.useCallback(() => {
    _ ? Ye() : $e();
  }, [_, Ye, $e]), W = G.useCallback(() => J(0), [J]), X = G.useCallback(() => J(te - 1), [te, J]), Z = G.useCallback(() => J(te + 1), [te, J]), ue = G.useCallback(
    () => J(Math.max(0, ie - 1)),
    [ie, J]
  ), [ne, se] = G.useState(
    () => Fo(u.theme)
  );
  G.useEffect(() => {
    if (se(Fo(u.theme)), u.theme !== "auto" || typeof window > "u") return;
    const R = window.matchMedia("(prefers-color-scheme: dark)"), ae = () => se(Fo("auto"));
    return R.addEventListener("change", ae), () => R.removeEventListener("change", ae);
  }, [u.theme]);
  const Ve = {
    ...u.theme_overrides,
    ...u.selection_color ? {
      "--sig-selection": u.selection_color,
      "--sig-accent": u.selection_color
    } : {},
    ...td(u.button_style)
  }, gn = {
    display: "grid",
    gridTemplateColumns: `repeat(${ee}, minmax(0, 1fr))`,
    gap: u.gap,
    width: "100%"
  }, mn = ke > 0 && (K ? Ee > 0 : u.items.length > 0), bt = u.pager_position !== "bottom", $n = Ee === 0 ? 0 : te * ke + 1, zr = Math.min(Ee, (te + 1) * ke), Pr = Ee === 0 ? "Page 0 of 0" : `Page ${te + 1} of ${ie}`, hn = mn ? /* @__PURE__ */ U.jsxs("div", { className: "sig-pager", role: "navigation", "aria-label": "Board pages", children: [
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: te <= 0,
        onClick: W,
        "aria-label": "First page",
        title: "First page",
        children: "First"
      }
    ),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: te <= 0,
        onClick: X,
        "aria-label": "Previous page",
        title: "Previous page",
        children: "Prev"
      }
    ),
    /* @__PURE__ */ U.jsxs("span", { className: "sig-pager-label", "aria-live": "polite", children: [
      Pr,
      /* @__PURE__ */ U.jsxs("span", { className: "sig-pager-range", children: [
        " ",
        "· ",
        $n,
        "–",
        zr,
        " of ",
        Ee
      ] })
    ] }),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: te >= ie - 1,
        onClick: Z,
        "aria-label": "Next page",
        title: "Next page",
        children: "Next"
      }
    ),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: te >= ie - 1,
        onClick: ue,
        "aria-label": "Last page",
        title: "Last page",
        children: "Last"
      }
    )
  ] }) : null, Tr = u.show_items && (u.show_select_all || u.buttons.length > 0 || u.selectable) || u.show_layout_controls;
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: `sig-root sig-theme-${ne}`,
      "data-theme": ne,
      style: Ve,
      children: [
        Tr ? /* @__PURE__ */ U.jsxs("div", { className: "sig-toolbar", children: [
          u.selectable ? /* @__PURE__ */ U.jsx(
            "span",
            {
              className: "sig-count",
              title: u.show_selection_stats ? "Selected file count and total size (all pages)" : void 0,
              children: u.show_selection_stats ? Va(S, u.items, xe.length) : `${D} selected${xe.length ? ` / ${xe.length}` : ""}`
            }
          ) : !u.show_items && u.show_selection_stats ? (
            // Chrome-only host mode: still announce global selection.
            /* @__PURE__ */ U.jsx(
              "span",
              {
                className: "sig-count",
                title: "Selected file count (host checklist)",
                children: Va(S, u.items, 0)
              }
            )
          ) : u.show_items ? /* @__PURE__ */ U.jsxs("span", { className: "sig-count", children: [
            u.items.length,
            " images"
          ] }) : null,
          u.show_select_all ? /* @__PURE__ */ U.jsxs("div", { className: "sig-select-all", children: [
            /* @__PURE__ */ U.jsxs(
              "button",
              {
                type: "button",
                className: [
                  "sig-select-all-master",
                  _ ? "sig-select-all-master-on" : "",
                  p ? "sig-select-all-master-partial" : ""
                ].filter(Boolean).join(" "),
                disabled: xe.length === 0,
                "aria-pressed": _,
                "aria-label": _ ? "Deselect all" : "Select all",
                title: _ ? "Deselect all pages" : p ? "Select remaining (all pages)" : "Select all (all pages)",
                onClick: H,
                children: [
                  /* @__PURE__ */ U.jsx(
                    "span",
                    {
                      className: "sig-select-all-box",
                      "aria-hidden": "true",
                      "data-state": _ ? "all" : p ? "some" : "none"
                    }
                  ),
                  /* @__PURE__ */ U.jsx("span", { children: "All" })
                ]
              }
            ),
            /* @__PURE__ */ U.jsx(
              "button",
              {
                type: "button",
                className: "sig-btn",
                disabled: _ || xe.length === 0,
                onClick: $e,
                title: "Select every item across all pages",
                children: "Select all"
              }
            ),
            /* @__PURE__ */ U.jsx(
              "button",
              {
                type: "button",
                className: "sig-btn",
                disabled: v,
                onClick: Ye,
                title: "Clear selection on all pages",
                children: "Deselect all"
              }
            )
          ] }) : null,
          u.buttons.map((R) => /* @__PURE__ */ U.jsx(Ka, { button: R, onClick: De }, R.id)),
          u.show_layout_controls ? /* @__PURE__ */ U.jsxs("div", { className: "sig-layout-controls", children: [
            /* @__PURE__ */ U.jsx(
              Ba,
              {
                label: "Columns",
                value: ee,
                min: 1,
                max: 8,
                onChange: Qe
              }
            ),
            /* @__PURE__ */ U.jsx(
              Ba,
              {
                label: "Rows",
                value: V > 0 ? V : 2,
                min: 1,
                max: 8,
                onChange: (R) => {
                  V <= 0 && pe(R), yt(R);
                }
              }
            )
          ] }) : null
        ] }) : null,
        bt ? hn : null,
        u.show_items ? /* @__PURE__ */ U.jsx(
          "div",
          {
            className: mn ? "sig-page" : "sig-scroll",
            style: mn ? void 0 : { maxHeight: u.max_height },
            children: u.items.length === 0 ? /* @__PURE__ */ U.jsx("div", { className: "sig-empty", children: u.empty_message }) : /* @__PURE__ */ U.jsx("div", { className: "sig-grid", style: gn, children: je.map((R) => /* @__PURE__ */ U.jsx(
              dd,
              {
                item: R,
                selected: S.includes(R.id),
                selectable: u.selectable,
                showCheckboxes: u.show_checkboxes,
                showHoverText: u.show_hover_text,
                showCardInfo: u.show_card_info,
                thumbnailFit: u.thumbnail_fit,
                cardStyle: u.card_style,
                imageClick: u.image_click,
                openInNewTab: u.open_in_new_tab,
                onToggle: Be,
                onOpen: C,
                onButton: ge
              },
              R.id
            )) })
          }
        ) : null,
        bt ? null : hn
      ]
    }
  );
}
const md = '.sig-root{--sig-bg: transparent;--sig-panel: #ffffff;--sig-panel-hover: #f8fafc;--sig-surface: rgba(15, 23, 42, .04);--sig-surface-hover: rgba(15, 23, 42, .08);--sig-border: rgba(15, 23, 42, .12);--sig-text: #0f172a;--sig-muted: #64748b;--sig-accent: #0f766e;--sig-accent-soft: rgba(15, 118, 110, .14);--sig-selection: var(--sig-accent);--sig-danger: #b91c1c;--sig-danger-soft: rgba(185, 28, 28, .12);--sig-radius: 10px;--sig-shadow: 0 1px 2px rgba(15, 23, 42, .06);--sig-card-hover-border: rgba(15, 118, 110, .35);--sig-card-hover-shadow: 0 6px 18px rgba(15, 23, 42, .08);--sig-check-bg: #ffffff;--sig-overlay-fg: #ffffff;box-sizing:border-box;color:var(--sig-text);color-scheme:light;font-family:Segoe UI,ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.35;width:100%;height:100%;display:flex;flex-direction:column;gap:10px;padding:2px;background:var(--sig-bg);-webkit-user-select:none;user-select:none}.sig-root.sig-theme-dark{color-scheme:dark;--sig-bg: transparent;--sig-panel: #1e293b;--sig-panel-hover: #334155;--sig-surface: rgba(148, 163, 184, .12);--sig-surface-hover: rgba(148, 163, 184, .2);--sig-border: rgba(148, 163, 184, .28);--sig-text: #e2e8f0;--sig-muted: #94a3b8;--sig-accent: #2dd4bf;--sig-accent-soft: rgba(45, 212, 191, .18);--sig-selection: var(--sig-accent);--sig-danger: #f87171;--sig-danger-soft: rgba(248, 113, 113, .18);--sig-shadow: 0 1px 2px rgba(0, 0, 0, .35);--sig-card-hover-border: rgba(45, 212, 191, .45);--sig-card-hover-shadow: 0 8px 22px rgba(0, 0, 0, .35);--sig-check-bg: #0f172a;--sig-overlay-fg: #f8fafc;--sig-btn-bg: var(--sig-panel);--sig-btn-fg: var(--sig-text);--sig-btn-border: var(--sig-border);--sig-btn-primary-bg: var(--sig-accent);--sig-btn-primary-fg: #042f2e;--sig-btn-danger-bg: var(--sig-danger-soft);--sig-btn-danger-fg: var(--sig-danger);--sig-btn-shadow: var(--sig-shadow)}.sig-root *,.sig-root *:before,.sig-root *:after{box-sizing:border-box}.sig-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:32px;flex:0 0 auto}.sig-count{color:var(--sig-muted);font-variant-numeric:tabular-nums;margin-right:auto;font-weight:600;letter-spacing:.01em}.sig-select-all{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px}.sig-select-all-master{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--sig-border);border-radius:8px;background:var(--sig-panel);box-shadow:var(--sig-shadow);cursor:pointer;font:inherit;font-weight:650;color:var(--sig-text)}.sig-select-all-master:disabled{opacity:.45;cursor:not-allowed}.sig-select-all-master-on{border-color:var(--sig-selection, var(--sig-accent));background:color-mix(in srgb,var(--sig-selection, var(--sig-accent)) 12%,var(--sig-panel))}.sig-select-all-box{width:16px;height:16px;border:2px solid var(--sig-border);border-radius:4px;display:inline-block;position:relative;flex:0 0 auto;background:var(--sig-check-bg)}.sig-select-all-master-on .sig-select-all-box,.sig-select-all-box[data-state=all]{border-color:var(--sig-selection, var(--sig-accent));background:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=all]:after{content:"";position:absolute;left:3px;top:0;width:5px;height:9px;border:solid var(--sig-overlay-fg);border-width:0 2px 2px 0;transform:rotate(45deg)}.sig-select-all-box[data-state=some]{border-color:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=some]:after{content:"";position:absolute;left:2px;right:2px;top:6px;height:2px;background:var(--sig-selection, var(--sig-accent));border-radius:1px}.sig-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--sig-btn-border-width, 1px) var(--sig-btn-border-style, solid) var(--sig-btn-border, var(--sig-border));background:var(--sig-btn-bg, var(--sig-panel));color:var(--sig-btn-fg, var(--sig-text));border-radius:var(--sig-btn-radius, 8px);padding:var(--sig-btn-padding, 6px 10px);font:inherit;font-family:var(--sig-btn-font-family, inherit);font-size:var(--sig-btn-font-size, inherit);font-weight:var(--sig-btn-font-weight, 600);cursor:pointer;transition:background .12s ease,border-color .12s ease,transform 80ms ease,box-shadow .12s ease;box-shadow:var(--sig-btn-shadow, var(--sig-shadow))}.sig-btn-sm{padding:3px 8px;font-size:12px;border-radius:calc(var(--sig-btn-radius, 8px) * .75)}.sig-btn-lg{padding:9px 16px;font-size:15px}.sig-btn:hover:not(:disabled){filter:brightness(.97)}.sig-btn:active:not(:disabled){transform:translateY(1px)}.sig-btn:disabled{opacity:.45;cursor:not-allowed}.sig-btn-primary{background:var(--sig-btn-primary-bg, var(--sig-accent));border-color:transparent;color:var(--sig-btn-primary-fg, var(--sig-overlay-fg))}.sig-btn-primary:hover:not(:disabled){filter:brightness(1.05)}.sig-btn-danger{background:var(--sig-btn-danger-bg, var(--sig-danger-soft));border-color:transparent;color:var(--sig-btn-danger-fg, var(--sig-danger))}.sig-btn-danger:hover:not(:disabled){filter:brightness(.96)}.sig-btn-ghost{background:transparent;box-shadow:none;border-color:transparent}.sig-scroll{flex:1 1 auto;min-height:0;overflow:auto;padding-right:2px;scrollbar-gutter:stable}.sig-page{flex:1 1 auto;overflow:visible;min-height:0}.sig-layout-controls{display:inline-flex;flex-wrap:wrap;align-items:center;gap:10px;margin-left:auto}.sig-layout-stepper{display:inline-flex;align-items:center;gap:4px;padding:2px 4px;border:1px solid var(--sig-border);border-radius:8px;background:var(--sig-panel);box-shadow:var(--sig-shadow)}.sig-layout-label{color:var(--sig-muted);font-weight:650;font-size:12px;padding:0 4px 0 6px}.sig-layout-value{min-width:1.5ch;text-align:center;font-variant-numeric:tabular-nums;font-weight:700}.sig-pager{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;flex:0 0 auto;padding-top:2px}.sig-pager-label{color:var(--sig-muted);font-variant-numeric:tabular-nums;font-weight:600;min-width:10ch;text-align:center}.sig-pager-range{font-weight:500;opacity:.9}.sig-grid{display:grid!important;width:100%;align-content:start;grid-auto-rows:auto}.sig-empty{color:var(--sig-muted);padding:24px 8px;text-align:center}.sig-card{--sig-card-fg: var(--sig-text);position:relative;display:flex;flex-direction:column;border:1px solid var(--sig-border);border-radius:var(--sig-radius);background:var(--sig-panel);color:var(--sig-card-fg);overflow:hidden;box-shadow:var(--sig-shadow);transition:border-color .14s ease,box-shadow .14s ease,transform .14s ease;outline:none}.sig-card:hover{border-color:var(--sig-card-hover-border);box-shadow:var(--sig-card-hover-shadow);transform:translateY(-1px)}.sig-card:focus-visible{border-color:var(--sig-accent);box-shadow:0 0 0 3px var(--sig-accent-soft)}.sig-card-selected{border-color:var(--sig-selection);box-shadow:0 0 0 2px color-mix(in srgb,var(--sig-selection) 22%,transparent)}.sig-card-image-only .sig-thumb-wrap{border-radius:inherit}.sig-card-disabled{opacity:.55;filter:grayscale(.15)}.sig-thumb-wrap{position:relative;aspect-ratio:1 / 1;background:var(--sig-surface);overflow:hidden;cursor:pointer;box-shadow:inset 0 0 0 0 transparent;transition:box-shadow .14s ease}.sig-thumb-wrap-static{cursor:default}.sig-thumb-wrap-selected{box-shadow:inset 0 0 0 4px var(--sig-selection)}.sig-thumb-wrap-selected:after{content:"";position:absolute;top:4px;right:4px;bottom:4px;left:4px;border:1px solid rgba(255,255,255,.55);pointer-events:none;z-index:1}.sig-thumb{width:100%;height:100%;display:block;object-fit:cover;transition:transform .18s ease}.sig-card:hover .sig-thumb{transform:scale(1.03)}.sig-hover-overlay{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:28px 10px 10px;color:var(--sig-overlay-fg);font-weight:650;font-size:12px;line-height:1.3;background:linear-gradient(to top,rgba(15,23,42,.82) 0%,rgba(15,23,42,.35) 55%,transparent 100%);opacity:0;transform:translateY(4px);transition:opacity .14s ease,transform .14s ease;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-thumb-wrap:hover .sig-hover-overlay,.sig-thumb-wrap:focus-within .sig-hover-overlay{opacity:1;transform:translateY(0)}.sig-check{position:absolute;top:8px;left:8px;z-index:3;width:22px;height:22px;margin:0;accent-color:var(--sig-selection);cursor:pointer;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.sig-meta{display:flex;flex-direction:column;gap:2px;padding:8px 10px 10px;min-width:0}.sig-label{font-weight:650;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-caption{color:color-mix(in srgb,currentColor 62%,transparent);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-card-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 10px}.sig-card-actions .sig-btn{padding:4px 8px;font-size:12px;font-weight:600}.sig-texts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 8px}.sig-text{display:inline-block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.sig-text-muted{color:var(--sig-muted);font-size:12px}.sig-text-accent{color:var(--sig-accent);font-weight:650}.sig-text-danger{color:var(--sig-danger);font-weight:650}.sig-text-badge{color:#fff;background:var(--sig-accent);border-radius:999px;padding:2px 8px;font-size:11px;font-weight:700;letter-spacing:.02em}.sig-text-clickable{cursor:pointer}.sig-text-clickable:hover{text-decoration:underline}.sig-text-clickable:focus-visible{outline:2px solid var(--sig-accent);outline-offset:2px;border-radius:4px}', Ha = "streamlit-image-board-styles";
function hd(c) {
  var E;
  if (typeof document > "u") return;
  const u = c && "getRootNode" in c ? c.getRootNode() : c ?? document, d = u instanceof ShadowRoot ? u : u instanceof Document ? u.head : document.head;
  if ((E = d.querySelector) != null && E.call(d, `#${Ha}`))
    return;
  const S = document.createElement("style");
  S.id = Ha, S.textContent = md, d.appendChild(S);
}
const Al = /* @__PURE__ */ new WeakMap();
function vd(c, u, d) {
  let S = Ua(u), E = {
    selected_ids: [...S.selected_ids],
    selected_csv: S.selected_ids.join(","),
    clicked_button: null,
    clicked_item: null,
    action_nonce: 0,
    layout_columns: S.columns,
    layout_rows: S.rows > 0 ? S.rows : null,
    page_index: S.total_count >= 0 ? S.page_index : null
  };
  const $ = (L, T) => {
    if (L === "selected_ids") {
      const O = Array.isArray(T) ? T.map(String) : [];
      E = {
        ...E,
        selected_ids: O,
        selected_csv: O.join(",")
      };
    } else L === "selected_csv" ? E = {
      ...E,
      selected_csv: typeof T == "string" ? T : ""
    } : L === "clicked_button" ? E = {
      ...E,
      clicked_button: typeof T == "string" ? T : null
    } : L === "clicked_item" ? E = {
      ...E,
      clicked_item: typeof T == "string" ? T : null
    } : L === "action_nonce" ? E = {
      ...E,
      action_nonce: typeof T == "number" ? T : 0
    } : L === "layout_columns" ? E = {
      ...E,
      layout_columns: typeof T == "number" ? T : null
    } : L === "layout_rows" ? E = {
      ...E,
      layout_rows: typeof T == "number" ? T : null
    } : L === "page_index" && (E = {
      ...E,
      page_index: typeof T == "number" ? T : null
    });
    d == null || d(E);
  }, B = () => {
    hd(c);
    let L = Al.get(c);
    L || (L = qf.createRoot(c), Al.set(c, L)), L.render(
      /* @__PURE__ */ U.jsx(G.StrictMode, { children: /* @__PURE__ */ U.jsx(gd, { ...S, setStateValue: $ }) })
    );
  };
  return B(), {
    update(L) {
      S = Ua({ ...S, ...L }), B();
    },
    destroy() {
      const L = Al.get(c);
      L && (L.unmount(), Al.delete(c)), c instanceof HTMLElement && c.replaceChildren();
    }
  };
}
const Bl = /* @__PURE__ */ new WeakMap(), yd = (c) => {
  const { data: u, parentElement: d, setStateValue: S } = c, E = d.querySelector(".react-root");
  if (!E)
    throw new Error("Unexpected: React root element not found");
  let $ = Bl.get(d);
  if ($)
    $.setStateValue = S, $.controller.update(u);
  else {
    const B = {
      setStateValue: S,
      controller: null
    };
    B.controller = vd(E, u, (L) => {
      B.setStateValue("selected_ids", L.selected_ids), B.setStateValue("selected_csv", L.selected_csv), B.setStateValue("clicked_button", L.clicked_button), B.setStateValue("clicked_item", L.clicked_item), B.setStateValue("action_nonce", L.action_nonce), B.setStateValue("layout_columns", L.layout_columns), B.setStateValue("layout_rows", L.layout_rows), B.setStateValue("page_index", L.page_index);
    }), Bl.set(d, B), $ = B;
  }
  return () => {
    const B = Bl.get(d);
    B && (B.controller.destroy(), Bl.delete(d));
  };
};
export {
  yd as default
};
