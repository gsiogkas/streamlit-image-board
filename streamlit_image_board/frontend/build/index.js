var Pi = { exports: {} }, wr = {}, zi = { exports: {} }, B = {};
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
function Bf() {
  if (Pa) return B;
  Pa = 1;
  var m = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), U = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), $ = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), H = Symbol.iterator;
  function K(f) {
    return f === null || typeof f != "object" ? null : (f = H && f[H] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ke = Object.assign, te = {};
  function q(f, y, A) {
    this.props = f, this.context = y, this.refs = te, this.updater = A || ye;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(f, y) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, y, "setState");
  }, q.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function Ye() {
  }
  Ye.prototype = q.prototype;
  function he(f, y, A) {
    this.props = f, this.context = y, this.refs = te, this.updater = A || ye;
  }
  var ae = he.prototype = new Ye();
  ae.constructor = he, ke(ae, q.prototype), ae.isPureReactComponent = !0;
  var W = Array.isArray, _e = Object.prototype.hasOwnProperty, Pe = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ae(f, y, A) {
    var V, G = {}, X = null, ne = null;
    if (y != null) for (V in y.ref !== void 0 && (ne = y.ref), y.key !== void 0 && (X = "" + y.key), y) _e.call(y, V) && !je.hasOwnProperty(V) && (G[V] = y[V]);
    var b = arguments.length - 2;
    if (b === 1) G.children = A;
    else if (1 < b) {
      for (var ue = Array(b), Ze = 0; Ze < b; Ze++) ue[Ze] = arguments[Ze + 2];
      G.children = ue;
    }
    if (f && f.defaultProps) for (V in b = f.defaultProps, b) G[V] === void 0 && (G[V] = b[V]);
    return { $$typeof: m, type: f, key: X, ref: ne, props: G, _owner: Pe.current };
  }
  function F(f, y) {
    return { $$typeof: m, type: f.type, key: y, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function de(f) {
    return typeof f == "object" && f !== null && f.$$typeof === m;
  }
  function Ge(f) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(A) {
      return y[A];
    });
  }
  var ze = /\/+/g;
  function Xe(f, y) {
    return typeof f == "object" && f !== null && f.key != null ? Ge("" + f.key) : y.toString(36);
  }
  function ut(f, y, A, V, G) {
    var X = typeof f;
    (X === "undefined" || X === "boolean") && (f = null);
    var ne = !1;
    if (f === null) ne = !0;
    else switch (X) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case m:
          case c:
            ne = !0;
        }
    }
    if (ne) return ne = f, G = G(ne), f = V === "" ? "." + Xe(ne, 0) : V, W(G) ? (A = "", f != null && (A = f.replace(ze, "$&/") + "/"), ut(G, y, A, "", function(Ze) {
      return Ze;
    })) : G != null && (de(G) && (G = F(G, A + (!G.key || ne && ne.key === G.key ? "" : ("" + G.key).replace(ze, "$&/") + "/") + f)), y.push(G)), 1;
    if (ne = 0, V = V === "" ? "." : V + ":", W(f)) for (var b = 0; b < f.length; b++) {
      X = f[b];
      var ue = V + Xe(X, b);
      ne += ut(X, y, A, ue, G);
    }
    else if (ue = K(f), typeof ue == "function") for (f = ue.call(f), b = 0; !(X = f.next()).done; ) X = X.value, ue = V + Xe(X, b++), ne += ut(X, y, A, ue, G);
    else if (X === "object") throw y = String(f), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function ht(f, y, A) {
    if (f == null) return f;
    var V = [], G = 0;
    return ut(f, V, "", "", function(X) {
      return y.call(A, X, G++);
    }), V;
  }
  function Be(f) {
    if (f._status === -1) {
      var y = f._result;
      y = y(), y.then(function(A) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = A);
      }, function(A) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = A);
      }), f._status === -1 && (f._status = 0, f._result = y);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var pe = { current: null }, x = { transition: null }, O = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: x, ReactCurrentOwner: Pe };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return B.Children = { map: ht, forEach: function(f, y, A) {
    ht(f, function() {
      y.apply(this, arguments);
    }, A);
  }, count: function(f) {
    var y = 0;
    return ht(f, function() {
      y++;
    }), y;
  }, toArray: function(f) {
    return ht(f, function(y) {
      return y;
    }) || [];
  }, only: function(f) {
    if (!de(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, B.Component = q, B.Fragment = p, B.Profiler = R, B.PureComponent = he, B.StrictMode = T, B.Suspense = M, B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, B.act = C, B.cloneElement = function(f, y, A) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var V = ke({}, f.props), G = f.key, X = f.ref, ne = f._owner;
    if (y != null) {
      if (y.ref !== void 0 && (X = y.ref, ne = Pe.current), y.key !== void 0 && (G = "" + y.key), f.type && f.type.defaultProps) var b = f.type.defaultProps;
      for (ue in y) _e.call(y, ue) && !je.hasOwnProperty(ue) && (V[ue] = y[ue] === void 0 && b !== void 0 ? b[ue] : y[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1) V.children = A;
    else if (1 < ue) {
      b = Array(ue);
      for (var Ze = 0; Ze < ue; Ze++) b[Ze] = arguments[Ze + 2];
      V.children = b;
    }
    return { $$typeof: m, type: f.type, key: G, ref: X, props: V, _owner: ne };
  }, B.createContext = function(f) {
    return f = { $$typeof: U, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: Q, _context: f }, f.Consumer = f;
  }, B.createElement = Ae, B.createFactory = function(f) {
    var y = Ae.bind(null, f);
    return y.type = f, y;
  }, B.createRef = function() {
    return { current: null };
  }, B.forwardRef = function(f) {
    return { $$typeof: D, render: f };
  }, B.isValidElement = de, B.lazy = function(f) {
    return { $$typeof: le, _payload: { _status: -1, _result: f }, _init: Be };
  }, B.memo = function(f, y) {
    return { $$typeof: $, type: f, compare: y === void 0 ? null : y };
  }, B.startTransition = function(f) {
    var y = x.transition;
    x.transition = {};
    try {
      f();
    } finally {
      x.transition = y;
    }
  }, B.unstable_act = C, B.useCallback = function(f, y) {
    return pe.current.useCallback(f, y);
  }, B.useContext = function(f) {
    return pe.current.useContext(f);
  }, B.useDebugValue = function() {
  }, B.useDeferredValue = function(f) {
    return pe.current.useDeferredValue(f);
  }, B.useEffect = function(f, y) {
    return pe.current.useEffect(f, y);
  }, B.useId = function() {
    return pe.current.useId();
  }, B.useImperativeHandle = function(f, y, A) {
    return pe.current.useImperativeHandle(f, y, A);
  }, B.useInsertionEffect = function(f, y) {
    return pe.current.useInsertionEffect(f, y);
  }, B.useLayoutEffect = function(f, y) {
    return pe.current.useLayoutEffect(f, y);
  }, B.useMemo = function(f, y) {
    return pe.current.useMemo(f, y);
  }, B.useReducer = function(f, y, A) {
    return pe.current.useReducer(f, y, A);
  }, B.useRef = function(f) {
    return pe.current.useRef(f);
  }, B.useState = function(f) {
    return pe.current.useState(f);
  }, B.useSyncExternalStore = function(f, y, A) {
    return pe.current.useSyncExternalStore(f, y, A);
  }, B.useTransition = function() {
    return pe.current.useTransition();
  }, B.version = "18.3.1", B;
}
var za;
function ji() {
  return za || (za = 1, zi.exports = Bf()), zi.exports;
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
  if (Ta) return wr;
  Ta = 1;
  var m = ji(), c = Symbol.for("react.element"), p = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, R = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(D, M, $) {
    var le, H = {}, K = null, ye = null;
    $ !== void 0 && (K = "" + $), M.key !== void 0 && (K = "" + M.key), M.ref !== void 0 && (ye = M.ref);
    for (le in M) T.call(M, le) && !Q.hasOwnProperty(le) && (H[le] = M[le]);
    if (D && D.defaultProps) for (le in M = D.defaultProps, M) H[le] === void 0 && (H[le] = M[le]);
    return { $$typeof: c, type: D, key: K, ref: ye, props: H, _owner: R.current };
  }
  return wr.Fragment = p, wr.jsx = U, wr.jsxs = U, wr;
}
var Ra;
function $f() {
  return Ra || (Ra = 1, Pi.exports = Vf()), Pi.exports;
}
var J = $f(), Le = ji(), Rl = {}, Ti = { exports: {} }, Ke = {}, Ri = { exports: {} }, Li = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function Hf() {
  return La || (La = 1, (function(m) {
    function c(x, O) {
      var C = x.length;
      x.push(O);
      e: for (; 0 < C; ) {
        var f = C - 1 >>> 1, y = x[f];
        if (0 < R(y, O)) x[f] = O, x[C] = y, C = f;
        else break e;
      }
    }
    function p(x) {
      return x.length === 0 ? null : x[0];
    }
    function T(x) {
      if (x.length === 0) return null;
      var O = x[0], C = x.pop();
      if (C !== O) {
        x[0] = C;
        e: for (var f = 0, y = x.length, A = y >>> 1; f < A; ) {
          var V = 2 * (f + 1) - 1, G = x[V], X = V + 1, ne = x[X];
          if (0 > R(G, C)) X < y && 0 > R(ne, G) ? (x[f] = ne, x[X] = C, f = X) : (x[f] = G, x[V] = C, f = V);
          else if (X < y && 0 > R(ne, C)) x[f] = ne, x[X] = C, f = X;
          else break e;
        }
      }
      return O;
    }
    function R(x, O) {
      var C = x.sortIndex - O.sortIndex;
      return C !== 0 ? C : x.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Q = performance;
      m.unstable_now = function() {
        return Q.now();
      };
    } else {
      var U = Date, D = U.now();
      m.unstable_now = function() {
        return U.now() - D;
      };
    }
    var M = [], $ = [], le = 1, H = null, K = 3, ye = !1, ke = !1, te = !1, q = typeof setTimeout == "function" ? setTimeout : null, Ye = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ae(x) {
      for (var O = p($); O !== null; ) {
        if (O.callback === null) T($);
        else if (O.startTime <= x) T($), O.sortIndex = O.expirationTime, c(M, O);
        else break;
        O = p($);
      }
    }
    function W(x) {
      if (te = !1, ae(x), !ke) if (p(M) !== null) ke = !0, Be(_e);
      else {
        var O = p($);
        O !== null && pe(W, O.startTime - x);
      }
    }
    function _e(x, O) {
      ke = !1, te && (te = !1, Ye(Ae), Ae = -1), ye = !0;
      var C = K;
      try {
        for (ae(O), H = p(M); H !== null && (!(H.expirationTime > O) || x && !Ge()); ) {
          var f = H.callback;
          if (typeof f == "function") {
            H.callback = null, K = H.priorityLevel;
            var y = f(H.expirationTime <= O);
            O = m.unstable_now(), typeof y == "function" ? H.callback = y : H === p(M) && T(M), ae(O);
          } else T(M);
          H = p(M);
        }
        if (H !== null) var A = !0;
        else {
          var V = p($);
          V !== null && pe(W, V.startTime - O), A = !1;
        }
        return A;
      } finally {
        H = null, K = C, ye = !1;
      }
    }
    var Pe = !1, je = null, Ae = -1, F = 5, de = -1;
    function Ge() {
      return !(m.unstable_now() - de < F);
    }
    function ze() {
      if (je !== null) {
        var x = m.unstable_now();
        de = x;
        var O = !0;
        try {
          O = je(!0, x);
        } finally {
          O ? Xe() : (Pe = !1, je = null);
        }
      } else Pe = !1;
    }
    var Xe;
    if (typeof he == "function") Xe = function() {
      he(ze);
    };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), ht = ut.port2;
      ut.port1.onmessage = ze, Xe = function() {
        ht.postMessage(null);
      };
    } else Xe = function() {
      q(ze, 0);
    };
    function Be(x) {
      je = x, Pe || (Pe = !0, Xe());
    }
    function pe(x, O) {
      Ae = q(function() {
        x(m.unstable_now());
      }, O);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, m.unstable_continueExecution = function() {
      ke || ye || (ke = !0, Be(_e));
    }, m.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < x ? Math.floor(1e3 / x) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, m.unstable_getFirstCallbackNode = function() {
      return p(M);
    }, m.unstable_next = function(x) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = K;
      }
      var C = K;
      K = O;
      try {
        return x();
      } finally {
        K = C;
      }
    }, m.unstable_pauseExecution = function() {
    }, m.unstable_requestPaint = function() {
    }, m.unstable_runWithPriority = function(x, O) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var C = K;
      K = x;
      try {
        return O();
      } finally {
        K = C;
      }
    }, m.unstable_scheduleCallback = function(x, O, C) {
      var f = m.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? f + C : f) : C = f, x) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = C + y, x = { id: le++, callback: O, priorityLevel: x, startTime: C, expirationTime: y, sortIndex: -1 }, C > f ? (x.sortIndex = C, c($, x), p(M) === null && x === p($) && (te ? (Ye(Ae), Ae = -1) : te = !0, pe(W, C - f))) : (x.sortIndex = y, c(M, x), ke || ye || (ke = !0, Be(_e))), x;
    }, m.unstable_shouldYield = Ge, m.unstable_wrapCallback = function(x) {
      var O = K;
      return function() {
        var C = K;
        K = O;
        try {
          return x.apply(this, arguments);
        } finally {
          K = C;
        }
      };
    };
  })(Li)), Li;
}
var ja;
function Wf() {
  return ja || (ja = 1, Ri.exports = Hf()), Ri.exports;
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
var Da;
function Qf() {
  if (Da) return Ke;
  Da = 1;
  var m = ji(), c = Wf();
  function p(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var T = /* @__PURE__ */ new Set(), R = {};
  function Q(e, t) {
    U(e, t), U(e + "Capture", t);
  }
  function U(e, t) {
    for (R[e] = t, e = 0; e < t.length; e++) T.add(t[e]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, le = {}, H = {};
  function K(e) {
    return M.call(H, e) ? !0 : M.call(le, e) ? !1 : $.test(e) ? H[e] = !0 : (le[e] = !0, !1);
  }
  function ye(e, t, n, r) {
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
  function ke(e, t, n, r) {
    if (t === null || typeof t > "u" || ye(e, t, n, r)) return !0;
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
  function te(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    q[e] = new te(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    q[t] = new te(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    q[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    q[e] = new te(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    q[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    q[e] = new te(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    q[e] = new te(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    q[e] = new te(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    q[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ye = /[\-:]([a-z])/g;
  function he(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Ye,
      he
    );
    q[t] = new te(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ye, he);
    q[t] = new te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ye, he);
    q[t] = new te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    q[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    q[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ae(e, t, n, r) {
    var l = q.hasOwnProperty(t) ? q[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ke(t, n, l, r) && (n = null), r || l === null ? K(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var W = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), Ge = Symbol.for("react.context"), ze = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), x = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object" ? null : (e = x && e[x] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, f;
  function y(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var A = !1;
  function V(e, t) {
    if (!e || A) return "";
    A = !0;
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
        } catch (g) {
          var r = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          r = g;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (var l = g.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      A = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function G(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = V(e.type, !1), e;
      case 11:
        return e = V(e.type.render, !1), e;
      case 1:
        return e = V(e.type, !0), e;
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case Pe:
        return "Portal";
      case F:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ge:
        return (e.displayName || "Context") + ".Consumer";
      case de:
        return (e._context.displayName || "Context") + ".Provider";
      case ze:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ht:
        return t = e.displayName || null, t !== null ? t : X(e.type) || "Memo";
      case Be:
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
        return t === Ae ? "StrictMode" : "Mode";
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
  function b(e) {
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
  function ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ze(e) {
    var t = ue(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function Di(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ue(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Dl(e, t) {
    var n = t.checked;
    return C({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Mi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = b(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Oi(e, t) {
    t = t.checked, t != null && ae(e, "checked", t, !1);
  }
  function Ml(e, t) {
    Oi(e, t);
    var n = b(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ol(e, t.type, b(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ii(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ol(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function sn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + b(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return C({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Fi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(p(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: b(n) };
  }
  function Ui(e, t) {
    var n = b(t.value), r = b(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ai(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Bi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var xr, Vi = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
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
  }, Ha = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function(e) {
    Ha.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
    });
  });
  function $i(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function Hi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = $i(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Wa = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ul(e, t) {
    if (t) {
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Al(e, t) {
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
  var Bl = null;
  function Vl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $l = null, an = null, cn = null;
  function Wi(e) {
    if (e = lr(e)) {
      if (typeof $l != "function") throw Error(p(280));
      var t = e.stateNode;
      t && (t = Qr(t), $l(e.stateNode, e.type, t));
    }
  }
  function Qi(e) {
    an ? cn ? cn.push(e) : cn = [e] : an = e;
  }
  function Ki() {
    if (an) {
      var e = an, t = cn;
      if (cn = an = null, Wi(e), t) for (e = 0; e < t.length; e++) Wi(t[e]);
    }
  }
  function Yi(e, t) {
    return e(t);
  }
  function Gi() {
  }
  var Hl = !1;
  function Xi(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Yi(e, t, n);
    } finally {
      Hl = !1, (an !== null || cn !== null) && (Gi(), Ki());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
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
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (D) try {
    var Un = {};
    Object.defineProperty(Un, "passive", { get: function() {
      Wl = !0;
    } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
  } catch {
    Wl = !1;
  }
  function Qa(e, t, n, r, l, o, i, u, s) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (w) {
      this.onError(w);
    }
  }
  var An = !1, _r = null, Er = !1, Ql = null, Ka = { onError: function(e) {
    An = !0, _r = e;
  } };
  function Ya(e, t, n, r, l, o, i, u, s) {
    An = !1, _r = null, Qa.apply(Ka, arguments);
  }
  function Ga(e, t, n, r, l, o, i, u, s) {
    if (Ya.apply(this, arguments), An) {
      if (An) {
        var g = _r;
        An = !1, _r = null;
      } else throw Error(p(198));
      Er || (Er = !0, Ql = g);
    }
  }
  function Gt(e) {
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
  function Zi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ji(e) {
    if (Gt(e) !== e) throw Error(p(188));
  }
  function Xa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Gt(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ji(l), e;
          if (o === r) return Ji(l), t;
          o = o.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (u === r) {
            i = !0, r = l, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              i = !0, n = o, r = l;
              break;
            }
            if (u === r) {
              i = !0, r = o, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function qi(e) {
    return e = Xa(e), e !== null ? bi(e) : null;
  }
  function bi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = bi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var eu = c.unstable_scheduleCallback, tu = c.unstable_cancelCallback, Za = c.unstable_shouldYield, Ja = c.unstable_requestPaint, ge = c.unstable_now, qa = c.unstable_getCurrentPriorityLevel, Kl = c.unstable_ImmediatePriority, nu = c.unstable_UserBlockingPriority, Cr = c.unstable_NormalPriority, ba = c.unstable_LowPriority, ru = c.unstable_IdlePriority, Nr = null, gt = null;
  function ec(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function") try {
      gt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var st = Math.clz32 ? Math.clz32 : rc, tc = Math.log, nc = Math.LN2;
  function rc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (tc(e) / nc | 0) | 0;
  }
  var Pr = 64, zr = 4194304;
  function Bn(e) {
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = Bn(u) : (o &= i, o !== 0 && (r = Bn(o)));
    } else i = n & ~l, i !== 0 ? r = Bn(i) : o !== 0 && (r = Bn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - st(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function lc(e, t) {
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
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - st(o), u = 1 << i, s = l[i];
      s === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = lc(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var e = Pr;
    return Pr <<= 1, (Pr & 4194240) === 0 && (Pr = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - st(t), e[t] = n;
  }
  function ic(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Xl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var ee = 0;
  function ou(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var iu, Zl, uu, su, au, Jl = !1, Rr = [], Tt = null, Rt = null, Lt = null, $n = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), jt = [], uc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
        break;
      case "dragenter":
      case "dragleave":
        Rt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && Zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Tt = Wn(Tt, e, t, n, r, l), !0;
      case "dragenter":
        return Rt = Wn(Rt, e, t, n, r, l), !0;
      case "mouseover":
        return Lt = Wn(Lt, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return $n.set(o, Wn($n.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Hn.set(o, Wn(Hn.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function fu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Zi(n), t !== null) {
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
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Bl = r, n.target.dispatchEvent(r), Bl = null;
      } else return t = lr(n), t !== null && Zl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function du(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function ac() {
    Jl = !1, Tt !== null && Lr(Tt) && (Tt = null), Rt !== null && Lr(Rt) && (Rt = null), Lt !== null && Lr(Lt) && (Lt = null), $n.forEach(du), Hn.forEach(du);
  }
  function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, ac)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Rr.length) {
      Qn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tt !== null && Qn(Tt, e), Rt !== null && Qn(Rt, e), Lt !== null && Qn(Lt, e), $n.forEach(t), Hn.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null); ) fu(n), n.blockedOn === null && jt.shift();
  }
  var fn = W.ReactCurrentBatchConfig, jr = !0;
  function cc(e, t, n, r) {
    var l = ee, o = fn.transition;
    fn.transition = null;
    try {
      ee = 1, ql(e, t, n, r);
    } finally {
      ee = l, fn.transition = o;
    }
  }
  function fc(e, t, n, r) {
    var l = ee, o = fn.transition;
    fn.transition = null;
    try {
      ee = 4, ql(e, t, n, r);
    } finally {
      ee = l, fn.transition = o;
    }
  }
  function ql(e, t, n, r) {
    if (jr) {
      var l = bl(e, t, n, r);
      if (l === null) vo(e, t, r, Dr, n), cu(e, r);
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if (cu(e, r), t & 4 && -1 < uc.indexOf(e)) {
        for (; l !== null; ) {
          var o = lr(l);
          if (o !== null && iu(o), o = bl(e, t, n, r), o === null && vo(e, t, r, Dr, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else vo(e, t, r, null, n);
    }
  }
  var Dr = null;
  function bl(e, t, n, r) {
    if (Dr = null, e = Vl(r), e = Xt(e), e !== null) if (t = Gt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Zi(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Dr = e, null;
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
        switch (qa()) {
          case Kl:
            return 1;
          case nu:
            return 4;
          case Cr:
          case ba:
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
  var Dt = null, eo = null, Mr = null;
  function mu() {
    if (Mr) return Mr;
    var e, t = eo, n = t.length, r, l = "value" in Dt ? Dt.value : Dt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Or(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function hu() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ir : hu, this.isPropagationStopped = hu, this;
    }
    return C(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
    }, persist: function() {
    }, isPersistent: Ir }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, to = Je(dn), Yn = C({}, dn, { view: 0, detail: 0 }), dc = Je(Yn), no, ro, Gn, Fr = C({}, Yn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (no = e.screenX - Gn.screenX, ro = e.screenY - Gn.screenY) : ro = no = 0, Gn = e), no);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ro;
  } }), gu = Je(Fr), pc = C({}, Fr, { dataTransfer: 0 }), mc = Je(pc), hc = C({}, Yn, { relatedTarget: 0 }), lo = Je(hc), gc = C({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vc = Je(gc), yc = C({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wc = Je(yc), kc = C({}, dn, { data: 0 }), vu = Je(kc), Sc = {
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
  }, xc = {
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
  }, _c = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ec(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _c[e]) ? !!t[e] : !1;
  }
  function oo() {
    return Ec;
  }
  var Cc = C({}, Yn, { key: function(e) {
    if (e.key) {
      var t = Sc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oo, charCode: function(e) {
    return e.type === "keypress" ? Or(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nc = Je(Cc), Pc = C({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = Je(Pc), zc = C({}, Yn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oo }), Tc = Je(zc), Rc = C({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lc = Je(Rc), jc = C({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Dc = Je(jc), Mc = [9, 13, 27, 32], io = D && "CompositionEvent" in window, Xn = null;
  D && "documentMode" in document && (Xn = document.documentMode);
  var Oc = D && "TextEvent" in window && !Xn, wu = D && (!io || Xn && 8 < Xn && 11 >= Xn), ku = " ", Su = !1;
  function xu(e, t) {
    switch (e) {
      case "keyup":
        return Mc.indexOf(t.keyCode) !== -1;
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
  var pn = !1;
  function Ic(e, t) {
    switch (e) {
      case "compositionend":
        return _u(t);
      case "keypress":
        return t.which !== 32 ? null : (Su = !0, ku);
      case "textInput":
        return e = t.data, e === ku && Su ? null : e;
      default:
        return null;
    }
  }
  function Fc(e, t) {
    if (pn) return e === "compositionend" || !io && xu(e, t) ? (e = mu(), Mr = eo = Dt = null, pn = !1, e) : null;
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
  var Uc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uc[e.type] : t === "textarea";
  }
  function Cu(e, t, n, r) {
    Qi(r), t = $r(t, "onChange"), 0 < t.length && (n = new to("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Zn = null, Jn = null;
  function Ac(e) {
    Hu(e, 0);
  }
  function Ur(e) {
    var t = yn(e);
    if (Di(t)) return e;
  }
  function Bc(e, t) {
    if (e === "change") return t;
  }
  var Nu = !1;
  if (D) {
    var uo;
    if (D) {
      var so = "oninput" in document;
      if (!so) {
        var Pu = document.createElement("div");
        Pu.setAttribute("oninput", "return;"), so = typeof Pu.oninput == "function";
      }
      uo = so;
    } else uo = !1;
    Nu = uo && (!document.documentMode || 9 < document.documentMode);
  }
  function zu() {
    Zn && (Zn.detachEvent("onpropertychange", Tu), Jn = Zn = null);
  }
  function Tu(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      Cu(t, Jn, e, Vl(e)), Xi(Ac, t);
    }
  }
  function Vc(e, t, n) {
    e === "focusin" ? (zu(), Zn = t, Jn = n, Zn.attachEvent("onpropertychange", Tu)) : e === "focusout" && zu();
  }
  function $c(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Jn);
  }
  function Hc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Qc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : Qc;
  function qn(e, t) {
    if (at(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!M.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lu(e, t) {
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
  function Du() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Kc(e) {
    var t = Du(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ju(n.ownerDocument.documentElement, n)) {
      if (r !== null && ao(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Lu(n, o);
          var i = Lu(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Yc = D && "documentMode" in document && 11 >= document.documentMode, mn = null, co = null, bn = null, fo = !1;
  function Mu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fo || mn == null || mn !== Sr(r) || (r = mn, "selectionStart" in r && ao(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bn && qn(bn, r) || (bn = r, r = $r(co, "onSelect"), 0 < r.length && (t = new to("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hn = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, po = {}, Ou = {};
  D && (Ou = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Br(e) {
    if (po[e]) return po[e];
    if (!hn[e]) return e;
    var t = hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ou) return po[e] = t[n];
    return e;
  }
  var Iu = Br("animationend"), Fu = Br("animationiteration"), Uu = Br("animationstart"), Au = Br("transitionend"), Bu = /* @__PURE__ */ new Map(), Vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mt(e, t) {
    Bu.set(e, t), Q(t, [e]);
  }
  for (var mo = 0; mo < Vu.length; mo++) {
    var ho = Vu[mo], Gc = ho.toLowerCase(), Xc = ho[0].toUpperCase() + ho.slice(1);
    Mt(Gc, "on" + Xc);
  }
  Mt(Iu, "onAnimationEnd"), Mt(Fu, "onAnimationIteration"), Mt(Uu, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(Au, "onTransitionEnd"), U("onMouseEnter", ["mouseout", "mouseover"]), U("onMouseLeave", ["mouseout", "mouseover"]), U("onPointerEnter", ["pointerout", "pointerover"]), U("onPointerLeave", ["pointerout", "pointerover"]), Q("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Q("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Q("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Q("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function $u(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ga(r, t, void 0, e), e.currentTarget = null;
  }
  function Hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, g = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
          $u(l, u, g), o = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, g = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
          $u(l, u, g), o = s;
        }
      }
    }
    if (Er) throw e = Ql, Er = !1, Ql = null, e;
  }
  function oe(e, t) {
    var n = t[_o];
    n === void 0 && (n = t[_o] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Wu(t, e, 2, !1), n.add(r));
  }
  function go(e, t, n) {
    var r = 0;
    t && (r |= 4), Wu(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Vr]) {
      e[Vr] = !0, T.forEach(function(n) {
        n !== "selectionchange" && (Zc.has(n) || go(n, !1, e), go(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || (t[Vr] = !0, go("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, r) {
    switch (pu(t)) {
      case 1:
        var l = cc;
        break;
      case 4:
        l = fc;
        break;
      default:
        l = ql;
    }
    n = l.bind(null, t, n, e), l = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function vo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = Xt(u), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Xi(function() {
      var g = o, w = Vl(n), k = [];
      e: {
        var v = Bu.get(e);
        if (v !== void 0) {
          var _ = to, N = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Nc;
              break;
            case "focusin":
              N = "focus", _ = lo;
              break;
            case "focusout":
              N = "blur", _ = lo;
              break;
            case "beforeblur":
            case "afterblur":
              _ = lo;
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
              _ = gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = mc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Tc;
              break;
            case Iu:
            case Fu:
            case Uu:
              _ = vc;
              break;
            case Au:
              _ = Lc;
              break;
            case "scroll":
              _ = dc;
              break;
            case "wheel":
              _ = Dc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = yu;
          }
          var P = (t & 4) !== 0, ve = !P && e === "scroll", d = P ? v !== null ? v + "Capture" : null : v;
          P = [];
          for (var a = g, h; a !== null; ) {
            h = a;
            var S = h.stateNode;
            if (h.tag === 5 && S !== null && (h = S, d !== null && (S = Fn(a, d), S != null && P.push(nr(a, S, h)))), ve) break;
            a = a.return;
          }
          0 < P.length && (v = new _(v, N, null, n, w), k.push({ event: v, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", v && n !== Bl && (N = n.relatedTarget || n.fromElement) && (Xt(N) || N[St])) break e;
          if ((_ || v) && (v = w.window === w ? w : (v = w.ownerDocument) ? v.defaultView || v.parentWindow : window, _ ? (N = n.relatedTarget || n.toElement, _ = g, N = N ? Xt(N) : null, N !== null && (ve = Gt(N), N !== ve || N.tag !== 5 && N.tag !== 6) && (N = null)) : (_ = null, N = g), _ !== N)) {
            if (P = gu, S = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (P = yu, S = "onPointerLeave", d = "onPointerEnter", a = "pointer"), ve = _ == null ? v : yn(_), h = N == null ? v : yn(N), v = new P(S, a + "leave", _, n, w), v.target = ve, v.relatedTarget = h, S = null, Xt(w) === g && (P = new P(d, a + "enter", N, n, w), P.target = h, P.relatedTarget = ve, S = P), ve = S, _ && N) t: {
              for (P = _, d = N, a = 0, h = P; h; h = gn(h)) a++;
              for (h = 0, S = d; S; S = gn(S)) h++;
              for (; 0 < a - h; ) P = gn(P), a--;
              for (; 0 < h - a; ) d = gn(d), h--;
              for (; a--; ) {
                if (P === d || d !== null && P === d.alternate) break t;
                P = gn(P), d = gn(d);
              }
              P = null;
            }
            else P = null;
            _ !== null && Qu(k, v, _, P, !1), N !== null && ve !== null && Qu(k, ve, N, P, !0);
          }
        }
        e: {
          if (v = g ? yn(g) : window, _ = v.nodeName && v.nodeName.toLowerCase(), _ === "select" || _ === "input" && v.type === "file") var z = Bc;
          else if (Eu(v)) if (Nu) z = Wc;
          else {
            z = $c;
            var L = Vc;
          }
          else (_ = v.nodeName) && _.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (z = Hc);
          if (z && (z = z(e, g))) {
            Cu(k, z, n, w);
            break e;
          }
          L && L(e, v, g), e === "focusout" && (L = v._wrapperState) && L.controlled && v.type === "number" && Ol(v, "number", v.value);
        }
        switch (L = g ? yn(g) : window, e) {
          case "focusin":
            (Eu(L) || L.contentEditable === "true") && (mn = L, co = g, bn = null);
            break;
          case "focusout":
            bn = co = mn = null;
            break;
          case "mousedown":
            fo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fo = !1, Mu(k, n, w);
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            Mu(k, n, w);
        }
        var j;
        if (io) e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
        else pn ? xu(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
        I && (wu && n.locale !== "ko" && (pn || I !== "onCompositionStart" ? I === "onCompositionEnd" && pn && (j = mu()) : (Dt = w, eo = "value" in Dt ? Dt.value : Dt.textContent, pn = !0)), L = $r(g, I), 0 < L.length && (I = new vu(I, e, null, n, w), k.push({ event: I, listeners: L }), j ? I.data = j : (j = _u(n), j !== null && (I.data = j)))), (j = Oc ? Ic(e, n) : Fc(e, n)) && (g = $r(g, "onBeforeInput"), 0 < g.length && (w = new vu("onBeforeInput", "beforeinput", null, n, w), k.push({ event: w, listeners: g }), w.data = j));
      }
      Hu(k, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Fn(e, n), o != null && r.unshift(nr(e, o, l)), o = Fn(e, t), o != null && r.push(nr(e, o, l))), e = e.return;
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n, s = u.alternate, g = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && g !== null && (u = g, l ? (s = Fn(n, o), s != null && i.unshift(nr(n, s, u))) : l || (s = Fn(n, o), s != null && i.push(nr(n, s, u)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Jc = /\r\n?/g, qc = /\u0000|\uFFFD/g;
  function Ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jc, `
`).replace(qc, "");
  }
  function Hr(e, t, n) {
    if (t = Ku(t), Ku(e) !== t && n) throw Error(p(425));
  }
  function Wr() {
  }
  var yo = null, wo = null;
  function ko(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var So = typeof setTimeout == "function" ? setTimeout : void 0, bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Yu = typeof Promise == "function" ? Promise : void 0, ef = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu < "u" ? function(e) {
    return Yu.resolve(null).then(e).catch(tf);
  } : So;
  function tf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Kn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Ot(e) {
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
  var vn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + vn, rr = "__reactProps$" + vn, St = "__reactContainer$" + vn, _o = "__reactEvents$" + vn, nf = "__reactListeners$" + vn, rf = "__reactHandles$" + vn;
  function Xt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[St] || n[vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gu(e); e !== null; ) {
          if (n = e[vt]) return n;
          e = Gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function lr(e) {
    return e = e[vt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Eo = [], wn = -1;
  function It(e) {
    return { current: e };
  }
  function ie(e) {
    0 > wn || (e.current = Eo[wn], Eo[wn] = null, wn--);
  }
  function re(e, t) {
    wn++, Eo[wn] = e.current, e.current = t;
  }
  var Ft = {}, De = It(Ft), Ve = It(!1), Zt = Ft;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function $e(e) {
    return e = e.childContextTypes, e != null;
  }
  function Kr() {
    ie(Ve), ie(De);
  }
  function Xu(e, t, n) {
    if (De.current !== Ft) throw Error(p(168));
    re(De, t), re(Ve, n);
  }
  function Zu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, ne(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Zt = De.current, re(De, e), re(Ve, Ve.current), !0;
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n ? (e = Zu(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, ie(Ve), ie(De), re(De, e)) : ie(Ve), re(Ve, n);
  }
  var xt = null, Gr = !1, Co = !1;
  function qu(e) {
    xt === null ? xt = [e] : xt.push(e);
  }
  function lf(e) {
    Gr = !0, qu(e);
  }
  function Ut() {
    if (!Co && xt !== null) {
      Co = !0;
      var e = 0, t = ee;
      try {
        var n = xt;
        for (ee = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        xt = null, Gr = !1;
      } catch (l) {
        throw xt !== null && (xt = xt.slice(e + 1)), eu(Kl, Ut), l;
      } finally {
        ee = t, Co = !1;
      }
    }
    return null;
  }
  var Sn = [], xn = 0, Xr = null, Zr = 0, tt = [], nt = 0, Jt = null, _t = 1, Et = "";
  function qt(e, t) {
    Sn[xn++] = Zr, Sn[xn++] = Xr, Xr = e, Zr = t;
  }
  function bu(e, t, n) {
    tt[nt++] = _t, tt[nt++] = Et, tt[nt++] = Jt, Jt = e;
    var r = _t;
    e = Et;
    var l = 32 - st(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - st(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, _t = 1 << 32 - st(t) + l | n << l | r, Et = o + e;
    } else _t = 1 << o | n << l | r, Et = e;
  }
  function No(e) {
    e.return !== null && (qt(e, 1), bu(e, 1, 0));
  }
  function Po(e) {
    for (; e === Xr; ) Xr = Sn[--xn], Sn[xn] = null, Zr = Sn[--xn], Sn[xn] = null;
    for (; e === Jt; ) Jt = tt[--nt], tt[nt] = null, Et = tt[--nt], tt[nt] = null, _t = tt[--nt], tt[nt] = null;
  }
  var qe = null, be = null, se = !1, ct = null;
  function es(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, be = Ot(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, be = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: _t, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, be = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function To(e) {
    if (se) {
      var t = be;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (zo(e)) throw Error(p(418));
          t = Ot(n.nextSibling);
          var r = qe;
          t && ts(e, t) ? es(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, qe = e);
        }
      } else {
        if (zo(e)) throw Error(p(418));
        e.flags = e.flags & -4097 | 2, se = !1, qe = e;
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qe = e;
  }
  function Jr(e) {
    if (e !== qe) return !1;
    if (!se) return ns(e), se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ko(e.type, e.memoizedProps)), t && (t = be)) {
      if (zo(e)) throw rs(), Error(p(418));
      for (; t; ) es(e, t), t = Ot(t.nextSibling);
    }
    if (ns(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                be = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = qe ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = be; e; ) e = Ot(e.nextSibling);
  }
  function _n() {
    be = qe = null, se = !1;
  }
  function Ro(e) {
    ct === null ? ct = [e] : ct.push(e);
  }
  var of = W.ReactCurrentBatchConfig;
  function or(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function qr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function os(e) {
    function t(d, a) {
      if (e) {
        var h = d.deletions;
        h === null ? (d.deletions = [a], d.flags |= 16) : h.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) t(d, a), a = a.sibling;
      return null;
    }
    function r(d, a) {
      for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
      return d;
    }
    function l(d, a) {
      return d = Kt(d, a), d.index = 0, d.sibling = null, d;
    }
    function o(d, a, h) {
      return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < a ? (d.flags |= 2, a) : h) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
    }
    function i(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, a, h, S) {
      return a === null || a.tag !== 6 ? (a = Si(h, d.mode, S), a.return = d, a) : (a = l(a, h), a.return = d, a);
    }
    function s(d, a, h, S) {
      var z = h.type;
      return z === je ? w(d, a, h.props.children, S, h.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Be && ls(z) === a.type) ? (S = l(a, h.props), S.ref = or(d, a, h), S.return = d, S) : (S = xl(h.type, h.key, h.props, null, d.mode, S), S.ref = or(d, a, h), S.return = d, S);
    }
    function g(d, a, h, S) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== h.containerInfo || a.stateNode.implementation !== h.implementation ? (a = xi(h, d.mode, S), a.return = d, a) : (a = l(a, h.children || []), a.return = d, a);
    }
    function w(d, a, h, S, z) {
      return a === null || a.tag !== 7 ? (a = un(h, d.mode, S, z), a.return = d, a) : (a = l(a, h), a.return = d, a);
    }
    function k(d, a, h) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = Si("" + a, d.mode, h), a.return = d, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case _e:
            return h = xl(a.type, a.key, a.props, null, d.mode, h), h.ref = or(d, null, a), h.return = d, h;
          case Pe:
            return a = xi(a, d.mode, h), a.return = d, a;
          case Be:
            var S = a._init;
            return k(d, S(a._payload), h);
        }
        if (Mn(a) || O(a)) return a = un(a, d.mode, h, null), a.return = d, a;
        qr(d, a);
      }
      return null;
    }
    function v(d, a, h, S) {
      var z = a !== null ? a.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number") return z !== null ? null : u(d, a, "" + h, S);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case _e:
            return h.key === z ? s(d, a, h, S) : null;
          case Pe:
            return h.key === z ? g(d, a, h, S) : null;
          case Be:
            return z = h._init, v(
              d,
              a,
              z(h._payload),
              S
            );
        }
        if (Mn(h) || O(h)) return z !== null ? null : w(d, a, h, S, null);
        qr(d, h);
      }
      return null;
    }
    function _(d, a, h, S, z) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return d = d.get(h) || null, u(a, d, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case _e:
            return d = d.get(S.key === null ? h : S.key) || null, s(a, d, S, z);
          case Pe:
            return d = d.get(S.key === null ? h : S.key) || null, g(a, d, S, z);
          case Be:
            var L = S._init;
            return _(d, a, h, L(S._payload), z);
        }
        if (Mn(S) || O(S)) return d = d.get(h) || null, w(a, d, S, z, null);
        qr(a, S);
      }
      return null;
    }
    function N(d, a, h, S) {
      for (var z = null, L = null, j = a, I = a = 0, Ne = null; j !== null && I < h.length; I++) {
        j.index > I ? (Ne = j, j = null) : Ne = j.sibling;
        var Z = v(d, j, h[I], S);
        if (Z === null) {
          j === null && (j = Ne);
          break;
        }
        e && j && Z.alternate === null && t(d, j), a = o(Z, a, I), L === null ? z = Z : L.sibling = Z, L = Z, j = Ne;
      }
      if (I === h.length) return n(d, j), se && qt(d, I), z;
      if (j === null) {
        for (; I < h.length; I++) j = k(d, h[I], S), j !== null && (a = o(j, a, I), L === null ? z = j : L.sibling = j, L = j);
        return se && qt(d, I), z;
      }
      for (j = r(d, j); I < h.length; I++) Ne = _(j, d, I, h[I], S), Ne !== null && (e && Ne.alternate !== null && j.delete(Ne.key === null ? I : Ne.key), a = o(Ne, a, I), L === null ? z = Ne : L.sibling = Ne, L = Ne);
      return e && j.forEach(function(Yt) {
        return t(d, Yt);
      }), se && qt(d, I), z;
    }
    function P(d, a, h, S) {
      var z = O(h);
      if (typeof z != "function") throw Error(p(150));
      if (h = z.call(h), h == null) throw Error(p(151));
      for (var L = z = null, j = a, I = a = 0, Ne = null, Z = h.next(); j !== null && !Z.done; I++, Z = h.next()) {
        j.index > I ? (Ne = j, j = null) : Ne = j.sibling;
        var Yt = v(d, j, Z.value, S);
        if (Yt === null) {
          j === null && (j = Ne);
          break;
        }
        e && j && Yt.alternate === null && t(d, j), a = o(Yt, a, I), L === null ? z = Yt : L.sibling = Yt, L = Yt, j = Ne;
      }
      if (Z.done) return n(
        d,
        j
      ), se && qt(d, I), z;
      if (j === null) {
        for (; !Z.done; I++, Z = h.next()) Z = k(d, Z.value, S), Z !== null && (a = o(Z, a, I), L === null ? z = Z : L.sibling = Z, L = Z);
        return se && qt(d, I), z;
      }
      for (j = r(d, j); !Z.done; I++, Z = h.next()) Z = _(j, d, I, Z.value, S), Z !== null && (e && Z.alternate !== null && j.delete(Z.key === null ? I : Z.key), a = o(Z, a, I), L === null ? z = Z : L.sibling = Z, L = Z);
      return e && j.forEach(function(Af) {
        return t(d, Af);
      }), se && qt(d, I), z;
    }
    function ve(d, a, h, S) {
      if (typeof h == "object" && h !== null && h.type === je && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case _e:
            e: {
              for (var z = h.key, L = a; L !== null; ) {
                if (L.key === z) {
                  if (z = h.type, z === je) {
                    if (L.tag === 7) {
                      n(d, L.sibling), a = l(L, h.props.children), a.return = d, d = a;
                      break e;
                    }
                  } else if (L.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Be && ls(z) === L.type) {
                    n(d, L.sibling), a = l(L, h.props), a.ref = or(d, L, h), a.return = d, d = a;
                    break e;
                  }
                  n(d, L);
                  break;
                } else t(d, L);
                L = L.sibling;
              }
              h.type === je ? (a = un(h.props.children, d.mode, S, h.key), a.return = d, d = a) : (S = xl(h.type, h.key, h.props, null, d.mode, S), S.ref = or(d, a, h), S.return = d, d = S);
            }
            return i(d);
          case Pe:
            e: {
              for (L = h.key; a !== null; ) {
                if (a.key === L) if (a.tag === 4 && a.stateNode.containerInfo === h.containerInfo && a.stateNode.implementation === h.implementation) {
                  n(d, a.sibling), a = l(a, h.children || []), a.return = d, d = a;
                  break e;
                } else {
                  n(d, a);
                  break;
                }
                else t(d, a);
                a = a.sibling;
              }
              a = xi(h, d.mode, S), a.return = d, d = a;
            }
            return i(d);
          case Be:
            return L = h._init, ve(d, a, L(h._payload), S);
        }
        if (Mn(h)) return N(d, a, h, S);
        if (O(h)) return P(d, a, h, S);
        qr(d, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, a !== null && a.tag === 6 ? (n(d, a.sibling), a = l(a, h), a.return = d, d = a) : (n(d, a), a = Si(h, d.mode, S), a.return = d, d = a), i(d)) : n(d, a);
    }
    return ve;
  }
  var En = os(!0), is = os(!1), br = It(null), el = null, Cn = null, Lo = null;
  function jo() {
    Lo = Cn = el = null;
  }
  function Do(e) {
    var t = br.current;
    ie(br), e._currentValue = t;
  }
  function Mo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Nn(e, t) {
    el = e, Lo = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (He = !0), e.firstContext = null);
  }
  function rt(e) {
    var t = e._currentValue;
    if (Lo !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
      if (el === null) throw Error(p(308));
      Cn = e, el.dependencies = { lanes: 0, firstContext: e };
    } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Oo(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Oo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Io(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ss(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Nt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Y & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Oo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  function as(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, g = s.next;
      s.next = null, i === null ? o = g : i.next = g, i = s;
      var w = e.alternate;
      w !== null && (w = w.updateQueue, u = w.lastBaseUpdate, u !== i && (u === null ? w.firstBaseUpdate = g : u.next = g, w.lastBaseUpdate = s));
    }
    if (o !== null) {
      var k = l.baseState;
      i = 0, w = g = s = null, u = o;
      do {
        var v = u.lane, _ = u.eventTime;
        if ((r & v) === v) {
          w !== null && (w = w.next = {
            eventTime: _,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var N = e, P = u;
            switch (v = t, _ = n, P.tag) {
              case 1:
                if (N = P.payload, typeof N == "function") {
                  k = N.call(_, k, v);
                  break e;
                }
                k = N;
                break e;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = P.payload, v = typeof N == "function" ? N.call(_, k, v) : N, v == null) break e;
                k = C({}, k, v);
                break e;
              case 2:
                At = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u));
        } else _ = { eventTime: _, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, w === null ? (g = w = _, s = k) : w = w.next = _, i |= v;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (w === null && (s = k), l.baseState = s, l.firstBaseUpdate = g, l.lastBaseUpdate = w, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      nn |= i, e.lanes = i, e.memoizedState = k;
    }
  }
  function cs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(p(191, l));
        l.call(r);
      }
    }
  }
  var ir = {}, yt = It(ir), ur = It(ir), sr = It(ir);
  function en(e) {
    if (e === ir) throw Error(p(174));
    return e;
  }
  function Fo(e, t) {
    switch (re(sr, t), re(ur, e), re(yt, ir), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fl(t, e);
    }
    ie(yt), re(yt, t);
  }
  function Pn() {
    ie(yt), ie(ur), ie(sr);
  }
  function fs(e) {
    en(sr.current);
    var t = en(yt.current), n = Fl(t, e.type);
    t !== n && (re(ur, e), re(yt, n));
  }
  function Uo(e) {
    ur.current === e && (ie(yt), ie(ur));
  }
  var ce = It(0);
  function rl(e) {
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
  var Ao = [];
  function Bo() {
    for (var e = 0; e < Ao.length; e++) Ao[e]._workInProgressVersionPrimary = null;
    Ao.length = 0;
  }
  var ll = W.ReactCurrentDispatcher, Vo = W.ReactCurrentBatchConfig, tn = 0, fe = null, Se = null, Ee = null, ol = !1, ar = !1, cr = 0, uf = 0;
  function Me() {
    throw Error(p(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function Ho(e, t, n, r, l, o) {
    if (tn = o, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? ff : df, e = n(r, l), ar) {
      o = 0;
      do {
        if (ar = !1, cr = 0, 25 <= o) throw Error(p(301));
        o += 1, Ee = Se = null, t.updateQueue = null, ll.current = pf, e = n(r, l);
      } while (ar);
    }
    if (ll.current = sl, t = Se !== null && Se.next !== null, tn = 0, Ee = Se = fe = null, ol = !1, t) throw Error(p(300));
    return e;
  }
  function Wo() {
    var e = cr !== 0;
    return cr = 0, e;
  }
  function wt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ee === null ? fe.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
  }
  function lt() {
    if (Se === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Se.next;
    var t = Ee === null ? fe.memoizedState : Ee.next;
    if (t !== null) Ee = t, Se = e;
    else {
      if (e === null) throw Error(p(310));
      Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, Ee === null ? fe.memoizedState = Ee = e : Ee = Ee.next = e;
    }
    return Ee;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qo(e) {
    var t = lt(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = Se, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, s = null, g = o;
      do {
        var w = g.lane;
        if ((tn & w) === w) s !== null && (s = s.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var k = {
            lane: w,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          s === null ? (u = s = k, i = r) : s = s.next = k, fe.lanes |= w, nn |= w;
        }
        g = g.next;
      } while (g !== null && g !== o);
      s === null ? i = r : s.next = u, at(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, fe.lanes |= o, nn |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ko(e) {
    var t = lt(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      at(o, t.memoizedState) || (He = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function ds() {
  }
  function ps(e, t) {
    var n = fe, r = lt(), l = t(), o = !at(r.memoizedState, l);
    if (o && (r.memoizedState = l, He = !0), r = r.queue, Yo(gs.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ee !== null && Ee.memoizedState.tag & 1) {
      if (n.flags |= 2048, dr(9, hs.bind(null, n, r, l, t), void 0, null), Ce === null) throw Error(p(349));
      (tn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function hs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, vs(t) && ys(e);
  }
  function gs(e, t, n) {
    return n(function() {
      vs(t) && ys(e);
    });
  }
  function vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function ys(e) {
    var t = Ct(e, 1);
    t !== null && mt(t, e, 1, -1);
  }
  function ws(e) {
    var t = wt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cf.bind(null, fe, e), [t.memoizedState, e];
  }
  function dr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return lt().memoizedState;
  }
  function il(e, t, n, r) {
    var l = wt();
    fe.flags |= e, l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ul(e, t, n, r) {
    var l = lt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Se !== null) {
      var i = Se.memoizedState;
      if (o = i.destroy, r !== null && $o(r, i.deps)) {
        l.memoizedState = dr(t, n, o, r);
        return;
      }
    }
    fe.flags |= e, l.memoizedState = dr(1 | t, n, o, r);
  }
  function Ss(e, t) {
    return il(8390656, 8, e, t);
  }
  function Yo(e, t) {
    return ul(2048, 8, e, t);
  }
  function xs(e, t) {
    return ul(4, 2, e, t);
  }
  function _s(e, t) {
    return ul(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Cs(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(4, 4, Es.bind(null, t, e), n);
  }
  function Go() {
  }
  function Ns(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ps(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zs(e, t, n) {
    return (tn & 21) === 0 ? (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n) : (at(n, t) || (n = lu(), fe.lanes |= n, nn |= n, e.baseState = !0), t);
  }
  function sf(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Vo.transition;
    Vo.transition = {};
    try {
      e(!1), t();
    } finally {
      ee = n, Vo.transition = r;
    }
  }
  function Ts() {
    return lt().memoizedState;
  }
  function af(e, t, n) {
    var r = Wt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Ls(t, n);
    else if (n = us(e, t, n, r), n !== null) {
      var l = Ue();
      mt(n, e, r, l), js(n, t, r);
    }
  }
  function cf(e, t, n) {
    var r = Wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Ls(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, at(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Oo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = us(e, t, l, r), n !== null && (l = Ue(), mt(n, e, r, l), js(n, t, r));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Ls(e, t) {
    ar = ol = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  var sl = { readContext: rt, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, ff = { readContext: rt, useCallback: function(e, t) {
    return wt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: rt, useEffect: Ss, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, il(
      4194308,
      4,
      Es.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return il(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return il(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = wt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = af.bind(null, fe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = wt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ws, useDebugValue: Go, useDeferredValue: function(e) {
    return wt().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), t = e[0];
    return e = sf.bind(null, e[1]), wt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = fe, l = wt();
    if (se) {
      if (n === void 0) throw Error(p(407));
      n = n();
    } else {
      if (n = t(), Ce === null) throw Error(p(349));
      (tn & 30) !== 0 || ms(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Ss(gs.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, dr(9, hs.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = wt(), t = Ce.identifierPrefix;
    if (se) {
      var n = Et, r = _t;
      n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = uf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, df = {
    readContext: rt,
    useCallback: Ns,
    useContext: rt,
    useEffect: Yo,
    useImperativeHandle: Cs,
    useInsertionEffect: xs,
    useLayoutEffect: _s,
    useMemo: Ps,
    useReducer: Qo,
    useRef: ks,
    useState: function() {
      return Qo(fr);
    },
    useDebugValue: Go,
    useDeferredValue: function(e) {
      var t = lt();
      return zs(t, Se.memoizedState, e);
    },
    useTransition: function() {
      var e = Qo(fr)[0], t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: ds,
    useSyncExternalStore: ps,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, pf = { readContext: rt, useCallback: Ns, useContext: rt, useEffect: Yo, useImperativeHandle: Cs, useInsertionEffect: xs, useLayoutEffect: _s, useMemo: Ps, useReducer: Ko, useRef: ks, useState: function() {
    return Ko(fr);
  }, useDebugValue: Go, useDeferredValue: function(e) {
    var t = lt();
    return Se === null ? t.memoizedState = e : zs(t, Se.memoizedState, e);
  }, useTransition: function() {
    var e = Ko(fr)[0], t = lt().memoizedState;
    return [e, t];
  }, useMutableSource: ds, useSyncExternalStore: ps, useId: Ts, unstable_isNewReconciler: !1 };
  function ft(e, t) {
    if (e && e.defaultProps) {
      t = C({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = { isMounted: function(e) {
    return (e = e._reactInternals) ? Gt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ue(), l = Wt(e), o = Nt(r, l);
    o.payload = t, n != null && (o.callback = n), t = Bt(e, o, l), t !== null && (mt(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ue(), l = Wt(e), o = Nt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Bt(e, o, l), t !== null && (mt(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ue(), r = Wt(e), l = Nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (mt(t, e, r, n), tl(t, e, r));
  } };
  function Ds(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, o) : !0;
  }
  function Ms(e, t, n) {
    var r = !1, l = Ft, o = t.contextType;
    return typeof o == "object" && o !== null ? o = rt(o) : (l = $e(t) ? Zt : De.current, r = t.contextTypes, o = (r = r != null) ? kn(e, l) : Ft), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Os(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Zo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Io(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = rt(o) : (o = $e(t) ? Zt : De.current, l.context = kn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Xo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += G(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Jo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function qo(e, t) {
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
    n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      gl || (gl = !0, pi = r), qo(e, t);
    }, n;
  }
  function Fs(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        qo(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      qo(e, t), typeof r != "function" && ($t === null ? $t = /* @__PURE__ */ new Set([this]) : $t.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = zf.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var hf = W.ReactCurrentOwner, He = !1;
  function Fe(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : En(t, e.child, n, r);
  }
  function Vs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Nn(t, l), r = Ho(e, t, n, r, o, l), n = Wo(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (se && n && No(t), t.flags |= 1, Fe(e, t, r, l), t.child);
  }
  function $s(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ki(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Hs(e, t, o, r, l)) : (e = xl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qn, n(i, r) && e.ref === t.ref) return Pt(e, t, l);
    }
    return t.flags |= 1, e = Kt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (qn(o, r) && e.ref === t.ref) if (He = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (He = !0);
      else return t.lanes = e.lanes, Pt(e, t, l);
    }
    return bo(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(Rn, et), et |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(Rn, et), et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, re(Rn, et), et |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, re(Rn, et), et |= r;
    return Fe(e, t, l, n), t.child;
  }
  function Qs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function bo(e, t, n, r, l) {
    var o = $e(n) ? Zt : De.current;
    return o = kn(t, o), Nn(t, l), n = Ho(e, t, n, r, o, l), r = Wo(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (se && r && No(t), t.flags |= 1, Fe(e, t, n, l), t.child);
  }
  function Ks(e, t, n, r, l) {
    if ($e(n)) {
      var o = !0;
      Yr(t);
    } else o = !1;
    if (Nn(t, l), t.stateNode === null) fl(e, t), Ms(t, n, r), Zo(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, u = t.memoizedProps;
      i.props = u;
      var s = i.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = rt(g) : (g = $e(n) ? Zt : De.current, g = kn(t, g));
      var w = n.getDerivedStateFromProps, k = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== g) && Os(t, i, r, g), At = !1;
      var v = t.memoizedState;
      i.state = v, nl(t, r, i, l), s = t.memoizedState, u !== r || v !== s || Ve.current || At ? (typeof w == "function" && (Xo(t, n, w, r), s = t.memoizedState), (u = At || Ds(t, n, u, r, v, s, g)) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = g, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, ss(e, t), u = t.memoizedProps, g = t.type === t.elementType ? u : ft(t.type, u), i.props = g, k = t.pendingProps, v = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = rt(s) : (s = $e(n) ? Zt : De.current, s = kn(t, s));
      var _ = n.getDerivedStateFromProps;
      (w = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== k || v !== s) && Os(t, i, r, s), At = !1, v = t.memoizedState, i.state = v, nl(t, r, i, l);
      var N = t.memoizedState;
      u !== k || v !== N || Ve.current || At ? (typeof _ == "function" && (Xo(t, n, _, r), N = t.memoizedState), (g = At || Ds(t, n, g, r, v, N, s) || !1) ? (w || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, N, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), i.props = r, i.state = N, i.context = s, r = g) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ei(e, t, n, r, o, l);
  }
  function ei(e, t, n, r, l, o) {
    Qs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Ju(t, n, !1), Pt(e, t, o);
    r = t.stateNode, hf.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = En(t, e.child, null, o), t.child = En(t, null, u, o)) : Fe(e, t, u, o), t.memoizedState = r.state, l && Ju(t, n, !0), t.child;
  }
  function Ys(e) {
    var t = e.stateNode;
    t.pendingContext ? Xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xu(e, t.context, !1), Fo(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return _n(), Ro(l), t.flags |= 256, Fe(e, t, n, r), t.child;
  }
  var ti = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ni(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps, l = ce.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(ce, l & 1), e === null)
      return To(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = _l(i, r, 0, null), e = un(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ni(n), t.memoizedState = ti, e) : ri(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return gf(e, t, i, r, u, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (i & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Kt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Kt(u, o) : (o = un(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ni(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ti, r;
    }
    return o = e.child, e = o.sibling, r = Kt(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ri(e, t) {
    return t = _l({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cl(e, t, n, r) {
    return r !== null && Ro(r), En(t, e.child, null, n), e = ri(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function gf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Jo(Error(p(422))), cl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = _l({ mode: "visible", children: r.children }, l, 0, null), o = un(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && En(t, e.child, null, i), t.child.memoizedState = ni(i), t.memoizedState = ti, o);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(p(419)), r = Jo(o, r, void 0), cl(e, t, i, r);
    }
    if (u = (i & e.childLanes) !== 0, He || u) {
      if (r = Ce, r !== null) {
        switch (i & -i) {
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
        l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ct(e, l), mt(r, e, l, -1));
      }
      return wi(), r = Jo(Error(p(421))), cl(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, be = Ot(l.nextSibling), qe = t, se = !0, ct = null, e !== null && (tt[nt++] = _t, tt[nt++] = Et, tt[nt++] = Jt, _t = e.id, Et = e.overflow, Jt = t), t = ri(t, r.children), t.flags |= 4096, t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Mo(e.return, t, n);
  }
  function li(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (Fe(e, t, r.children, n), r = ce.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (re(ce, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), li(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && rl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        li(t, !0, n, null, o);
        break;
      case "together":
        li(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function vf(e, t, n) {
    switch (t.tag) {
      case 3:
        Ys(t), _n();
        break;
      case 5:
        fs(t);
        break;
      case 1:
        $e(t.type) && Yr(t);
        break;
      case 4:
        Fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        re(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (re(ce, ce.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Xs(e, t, n) : (re(ce, ce.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
        re(ce, ce.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(ce, ce.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ws(e, t, n);
    }
    return Pt(e, t, n);
  }
  var qs, oi, bs, ea;
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
  }, oi = function() {
  }, bs = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, en(yt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Dl(e, l), r = Dl(e, r), o = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Il(e, l), r = Il(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      Ul(n, r);
      var i;
      n = null;
      for (g in l) if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null) if (g === "style") {
        var u = l[g];
        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (R.hasOwnProperty(g) ? o || (o = []) : (o = o || []).push(g, null));
      for (g in r) {
        var s = r[g];
        if (u = l != null ? l[g] : void 0, r.hasOwnProperty(g) && s !== u && (s != null || u != null)) if (g === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
        } else n || (o || (o = []), o.push(
          g,
          n
        )), n = s;
        else g === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(g, s)) : g === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(g, "" + s) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (R.hasOwnProperty(g) ? (s != null && g === "onScroll" && oe("scroll", e), o || u === s || (o = [])) : (o = o || []).push(g, s));
      }
      n && (o = o || []).push("style", n);
      var g = o;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, ea = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function pr(e, t) {
    if (!se) switch (e.tailMode) {
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
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function yf(e, t, n) {
    var r = t.pendingProps;
    switch (Po(t), t.tag) {
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
        return Oe(t), null;
      case 1:
        return $e(t.type) && Kr(), Oe(t), null;
      case 3:
        return r = t.stateNode, Pn(), ie(Ve), ie(De), Bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ct !== null && (gi(ct), ct = null))), oi(e, t), Oe(t), null;
      case 5:
        Uo(t);
        var l = en(sr.current);
        if (n = t.type, e !== null && t.stateNode != null) bs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return Oe(t), null;
          }
          if (e = en(yt.current), Jr(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[vt] = t, r[rr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                oe("cancel", r), oe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) oe(er[l], r);
                break;
              case "source":
                oe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  r
                ), oe("load", r);
                break;
              case "details":
                oe("toggle", r);
                break;
              case "input":
                Mi(r, o), oe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, oe("invalid", r);
                break;
              case "textarea":
                Fi(r, o), oe("invalid", r);
            }
            Ul(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : R.hasOwnProperty(i) && u != null && i === "onScroll" && oe("scroll", r);
            }
            switch (n) {
              case "input":
                kr(r), Ii(r, o, !0);
                break;
              case "textarea":
                kr(r), Ai(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Wr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[rr] = r, qs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = Al(n, r), n) {
                case "dialog":
                  oe("cancel", e), oe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  oe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) oe(er[l], e);
                  l = r;
                  break;
                case "source":
                  oe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  oe(
                    "error",
                    e
                  ), oe("load", e), l = r;
                  break;
                case "details":
                  oe("toggle", e), l = r;
                  break;
                case "input":
                  Mi(e, r), l = Dl(e, r), oe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), oe("invalid", e);
                  break;
                case "textarea":
                  Fi(e, r), l = Il(e, r), oe("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Hi(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Vi(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && On(e, s) : typeof s == "number" && On(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (R.hasOwnProperty(o) ? s != null && o === "onScroll" && oe("scroll", e) : s != null && ae(e, o, s, i));
              }
              switch (n) {
                case "input":
                  kr(e), Ii(e, r, !1);
                  break;
                case "textarea":
                  kr(e), Ai(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + b(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? sn(e, !!r.multiple, o, !1) : r.defaultValue != null && sn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
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
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (n = en(sr.current), en(yt.current), Jr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (o = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (ie(ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (se && be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) rs(), _n(), t.flags |= 98560, o = !1;
          else if (o = Jr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(p(317));
              o[vt] = t;
            } else _n(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Oe(t), o = !1;
          } else ct !== null && (gi(ct), ct = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ce.current & 1) !== 0 ? xe === 0 && (xe = 3) : wi())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return Pn(), oi(e, t), e === null && tr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return Do(t.type._context), Oe(t), null;
      case 17:
        return $e(t.type) && Kr(), Oe(t), null;
      case 19:
        if (ie(ce), o = t.memoizedState, o === null) return Oe(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) pr(o, !1);
        else {
          if (xe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = rl(e), i !== null) {
              for (t.flags |= 128, pr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return re(ce, ce.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ge() > Ln && (t.flags |= 128, r = !0, pr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = rl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !se) return Oe(t), null;
          } else 2 * ge() - o.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, pr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ge(), t.sibling = null, n = ce.current, re(ce, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return yi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (et & 1073741824) !== 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function wf(e, t) {
    switch (Po(t), t.tag) {
      case 1:
        return $e(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pn(), ie(Ve), ie(De), Bo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Uo(t), null;
      case 13:
        if (ie(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          _n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ie(ce), null;
      case 4:
        return Pn(), null;
      case 10:
        return Do(t.type._context), null;
      case 22:
      case 23:
        return yi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1, Ie = !1, kf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      me(e, t, r);
    }
    else n.current = null;
  }
  function ii(e, t, n) {
    try {
      n();
    } catch (r) {
      me(e, t, r);
    }
  }
  var ta = !1;
  function Sf(e, t) {
    if (yo = jr, e = Du(), ao(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, g = 0, w = 0, k = e, v = null;
          t: for (; ; ) {
            for (var _; k !== n || l !== 0 && k.nodeType !== 3 || (u = i + l), k !== o || r !== 0 && k.nodeType !== 3 || (s = i + r), k.nodeType === 3 && (i += k.nodeValue.length), (_ = k.firstChild) !== null; )
              v = k, k = _;
            for (; ; ) {
              if (k === e) break t;
              if (v === n && ++g === l && (u = i), v === o && ++w === r && (s = i), (_ = k.nextSibling) !== null) break;
              k = v, v = k.parentNode;
            }
            k = _;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wo = { focusedElem: e, selectionRange: n }, jr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
    else for (; E !== null; ) {
      t = E;
      try {
        var N = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (N !== null) {
              var P = N.memoizedProps, ve = N.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? P : ft(t.type, P), ve);
              d.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var h = t.stateNode.containerInfo;
            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (S) {
        me(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, E = e;
        break;
      }
      E = t.return;
    }
    return N = ta, ta = !1, N;
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && ii(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
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
  function ui(e) {
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
    t !== null && (e.alternate = null, na(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[rr], delete t[_o], delete t[nf], delete t[rf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null)) for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), e = e.sibling;
  }
  function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), e = e.sibling;
  }
  var Te = null, dt = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) oa(e, t, n), n = n.sibling;
  }
  function oa(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function") try {
      gt.onCommitFiberUnmount(Nr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ie || Tn(n, t);
      case 6:
        var r = Te, l = dt;
        Te = null, Vt(e, t, n), Te = r, dt = l, Te !== null && (dt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null && (dt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? xo(e.parentNode, n) : e.nodeType === 1 && xo(e, n), Kn(e)) : xo(Te, n.stateNode));
        break;
      case 4:
        r = Te, l = dt, Te = n.stateNode.containerInfo, dt = !0, Vt(e, t, n), Te = r, dt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ii(n, t, i), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Ie && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          me(n, t, u);
        }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Vt(e, t, n), Ie = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new kf()), t.forEach(function(r) {
        var l = Rf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Te = u.stateNode, dt = !1;
              break e;
            case 3:
              Te = u.stateNode.containerInfo, dt = !0;
              break e;
            case 4:
              Te = u.stateNode.containerInfo, dt = !0;
              break e;
          }
          u = u.return;
        }
        if (Te === null) throw Error(p(160));
        oa(o, i, l), Te = null, dt = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (g) {
        me(l, t, g);
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
        if (pt(t, e), kt(e), r & 4) {
          try {
            mr(3, e, e.return), pl(3, e);
          } catch (P) {
            me(e, e.return, P);
          }
          try {
            mr(5, e, e.return);
          } catch (P) {
            me(e, e.return, P);
          }
        }
        break;
      case 1:
        pt(t, e), kt(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (pt(t, e), kt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (P) {
            me(e, e.return, P);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && Oi(l, o), Al(u, i);
            var g = Al(u, o);
            for (i = 0; i < s.length; i += 2) {
              var w = s[i], k = s[i + 1];
              w === "style" ? Hi(l, k) : w === "dangerouslySetInnerHTML" ? Vi(l, k) : w === "children" ? On(l, k) : ae(l, w, k, g);
            }
            switch (u) {
              case "input":
                Ml(l, o);
                break;
              case "textarea":
                Ui(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var _ = o.value;
                _ != null ? sn(l, !!o.multiple, _, !1) : v !== !!o.multiple && (o.defaultValue != null ? sn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : sn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[rr] = o;
          } catch (P) {
            me(e, e.return, P);
          }
        }
        break;
      case 6:
        if (pt(t, e), kt(e), r & 4) {
          if (e.stateNode === null) throw Error(p(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (P) {
            me(e, e.return, P);
          }
        }
        break;
      case 3:
        if (pt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (P) {
          me(e, e.return, P);
        }
        break;
      case 4:
        pt(t, e), kt(e);
        break;
      case 13:
        pt(t, e), kt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (di = ge())), r & 4 && ia(e);
        break;
      case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (g = Ie) || w, pt(t, e), Ie = g) : pt(t, e), kt(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !w && (e.mode & 1) !== 0) for (E = e, w = e.child; w !== null; ) {
            for (k = E = w; E !== null; ) {
              switch (v = E, _ = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mr(4, v, v.return);
                  break;
                case 1:
                  Tn(v, v.return);
                  var N = v.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                    } catch (P) {
                      me(r, n, P);
                    }
                  }
                  break;
                case 5:
                  Tn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ca(k);
                    continue;
                  }
              }
              _ !== null ? (_.return = v, E = _) : ca(k);
            }
            w = w.sibling;
          }
          e: for (w = null, k = e; ; ) {
            if (k.tag === 5) {
              if (w === null) {
                w = k;
                try {
                  l = k.stateNode, g ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = k.stateNode, s = k.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = $i("display", i));
                } catch (P) {
                  me(e, e.return, P);
                }
              }
            } else if (k.tag === 6) {
              if (w === null) try {
                k.stateNode.nodeValue = g ? "" : k.memoizedProps;
              } catch (P) {
                me(e, e.return, P);
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
        pt(t, e), kt(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        pt(
          t,
          e
        ), kt(e);
    }
  }
  function kt(e) {
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
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), r.flags &= -33);
            var o = la(e);
            ai(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = la(e);
            si(e, u, i);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        me(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xf(e, t, n) {
    E = e, sa(e);
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || Ie;
          u = dl;
          var g = Ie;
          if (dl = i, (Ie = s) && !g) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? fa(l) : s !== null ? (s.return = i, E = s) : fa(l);
          for (; o !== null; ) E = o, sa(o), o = o.sibling;
          E = l, dl = u, Ie = g;
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, E = o) : aa(e);
    }
  }
  function aa(e) {
    for (; E !== null; ) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && cs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                cs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var g = t.alternate;
                if (g !== null) {
                  var w = g.memoizedState;
                  if (w !== null) {
                    var k = w.dehydrated;
                    k !== null && Kn(k);
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
              throw Error(p(163));
          }
          Ie || t.flags & 512 && ui(t);
        } catch (v) {
          me(t, t.return, v);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, E = n;
        break;
      }
      E = t.return;
    }
  }
  function ca(e) {
    for (; E !== null; ) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, E = n;
        break;
      }
      E = t.return;
    }
  }
  function fa(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              me(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                me(t, l, s);
              }
            }
            var o = t.return;
            try {
              ui(t);
            } catch (s) {
              me(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ui(t);
            } catch (s) {
              me(t, i, s);
            }
        }
      } catch (s) {
        me(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, E = u;
        break;
      }
      E = t.return;
    }
  }
  var _f = Math.ceil, ml = W.ReactCurrentDispatcher, ci = W.ReactCurrentOwner, ot = W.ReactCurrentBatchConfig, Y = 0, Ce = null, we = null, Re = 0, et = 0, Rn = It(0), xe = 0, hr = null, nn = 0, hl = 0, fi = 0, gr = null, We = null, di = 0, Ln = 1 / 0, zt = null, gl = !1, pi = null, $t = null, vl = !1, Ht = null, yl = 0, vr = 0, mi = null, wl = -1, kl = 0;
  function Ue() {
    return (Y & 6) !== 0 ? ge() : wl !== -1 ? wl : wl = ge();
  }
  function Wt(e) {
    return (e.mode & 1) === 0 ? 1 : (Y & 2) !== 0 && Re !== 0 ? Re & -Re : of.transition !== null ? (kl === 0 && (kl = lu()), kl) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pu(e.type)), e);
  }
  function mt(e, t, n, r) {
    if (50 < vr) throw vr = 0, mi = null, Error(p(185));
    Vn(e, n, r), ((Y & 2) === 0 || e !== Ce) && (e === Ce && ((Y & 2) === 0 && (hl |= n), xe === 4 && Qt(e, Re)), Qe(e, r), n === 1 && Y === 0 && (t.mode & 1) === 0 && (Ln = ge() + 500, Gr && Ut()));
  }
  function Qe(e, t) {
    var n = e.callbackNode;
    oc(e, t);
    var r = Tr(e, e === Ce ? Re : 0);
    if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && tu(n), t === 1) e.tag === 0 ? lf(pa.bind(null, e)) : qu(pa.bind(null, e)), ef(function() {
        (Y & 6) === 0 && Ut();
      }), n = null;
      else {
        switch (ou(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = nu;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = ru;
            break;
          default:
            n = Cr;
        }
        n = Sa(n, da.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function da(e, t) {
    if (wl = -1, kl = 0, (Y & 6) !== 0) throw Error(p(327));
    var n = e.callbackNode;
    if (jn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === Ce ? Re : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = Y;
      Y |= 2;
      var o = ha();
      (Ce !== e || Re !== t) && (zt = null, Ln = ge() + 500, ln(e, t));
      do
        try {
          Nf();
          break;
        } catch (u) {
          ma(e, u);
        }
      while (!0);
      jo(), ml.current = o, Y = l, we !== null ? t = 0 : (Ce = null, Re = 0, t = xe);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = hi(e, l))), t === 1) throw n = hr, ln(e, 0), Qt(e, r), Qe(e, ge()), n;
      if (t === 6) Qt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Ef(l) && (t = Sl(e, r), t === 2 && (o = Yl(e), o !== 0 && (r = o, t = hi(e, o))), t === 1)) throw n = hr, ln(e, 0), Qt(e, r), Qe(e, ge()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            on(e, We, zt);
            break;
          case 3:
            if (Qt(e, r), (r & 130023424) === r && (t = di + 500 - ge(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ue(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = So(on.bind(null, e, We, zt), t);
              break;
            }
            on(e, We, zt);
            break;
          case 4:
            if (Qt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - st(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = So(on.bind(null, e, We, zt), r);
              break;
            }
            on(e, We, zt);
            break;
          case 5:
            on(e, We, zt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Qe(e, ge()), e.callbackNode === n ? da.bind(null, e) : null;
  }
  function hi(e, t) {
    var n = gr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = We, We = n, t !== null && gi(t)), e;
  }
  function gi(e) {
    We === null ? We = e : We.push.apply(We, e);
  }
  function Ef(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!at(o(), l)) return !1;
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
  function Qt(e, t) {
    for (t &= ~fi, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - st(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function pa(e) {
    if ((Y & 6) !== 0) throw Error(p(327));
    jn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return Qe(e, ge()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && (t = r, n = hi(e, r));
    }
    if (n === 1) throw n = hr, ln(e, 0), Qt(e, t), Qe(e, ge()), n;
    if (n === 6) throw Error(p(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, We, zt), Qe(e, ge()), null;
  }
  function vi(e, t) {
    var n = Y;
    Y |= 1;
    try {
      return e(t);
    } finally {
      Y = n, Y === 0 && (Ln = ge() + 500, Gr && Ut());
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && (Y & 6) === 0 && jn();
    var t = Y;
    Y |= 1;
    var n = ot.transition, r = ee;
    try {
      if (ot.transition = null, ee = 1, e) return e();
    } finally {
      ee = r, ot.transition = n, Y = t, (Y & 6) === 0 && Ut();
    }
  }
  function yi() {
    et = Rn.current, ie(Rn);
  }
  function ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bc(n)), we !== null) for (n = we.return; n !== null; ) {
      var r = n;
      switch (Po(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Kr();
          break;
        case 3:
          Pn(), ie(Ve), ie(De), Bo();
          break;
        case 5:
          Uo(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          ie(ce);
          break;
        case 19:
          ie(ce);
          break;
        case 10:
          Do(r.type._context);
          break;
        case 22:
        case 23:
          yi();
      }
      n = n.return;
    }
    if (Ce = e, we = e = Kt(e.current, null), Re = et = t, xe = 0, hr = null, fi = hl = nn = 0, We = gr = null, bt !== null) {
      for (t = 0; t < bt.length; t++) if (n = bt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      bt = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = we;
      try {
        if (jo(), ll.current = sl, ol) {
          for (var r = fe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ol = !1;
        }
        if (tn = 0, Ee = Se = fe = null, ar = !1, cr = 0, ci.current = null, n === null || n.return === null) {
          xe = 1, hr = t, we = null;
          break;
        }
        e: {
          var o = e, i = n.return, u = n, s = t;
          if (t = Re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var g = s, w = u, k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var v = w.alternate;
              v ? (w.updateQueue = v.updateQueue, w.memoizedState = v.memoizedState, w.lanes = v.lanes) : (w.updateQueue = null, w.memoizedState = null);
            }
            var _ = As(i);
            if (_ !== null) {
              _.flags &= -257, Bs(_, i, u, o, t), _.mode & 1 && Us(o, g, t), t = _, s = g;
              var N = t.updateQueue;
              if (N === null) {
                var P = /* @__PURE__ */ new Set();
                P.add(s), t.updateQueue = P;
              } else N.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Us(o, g, t), wi();
                break e;
              }
              s = Error(p(426));
            }
          } else if (se && u.mode & 1) {
            var ve = As(i);
            if (ve !== null) {
              (ve.flags & 65536) === 0 && (ve.flags |= 256), Bs(ve, i, u, o, t), Ro(zn(s, u));
              break e;
            }
          }
          o = s = zn(s, u), xe !== 4 && (xe = 2), gr === null ? gr = [o] : gr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var d = Is(o, s, t);
                as(o, d);
                break e;
              case 1:
                u = s;
                var a = o.type, h = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && ($t === null || !$t.has(h)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = Fs(o, u, t);
                  as(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        va(n);
      } catch (z) {
        t = z, we === n && n !== null && (we = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = ml.current;
    return ml.current = sl, e === null ? sl : e;
  }
  function wi() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ce === null || (nn & 268435455) === 0 && (hl & 268435455) === 0 || Qt(Ce, Re);
  }
  function Sl(e, t) {
    var n = Y;
    Y |= 2;
    var r = ha();
    (Ce !== e || Re !== t) && (zt = null, ln(e, t));
    do
      try {
        Cf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if (jo(), Y = n, ml.current = r, we !== null) throw Error(p(261));
    return Ce = null, Re = 0, xe;
  }
  function Cf() {
    for (; we !== null; ) ga(we);
  }
  function Nf() {
    for (; we !== null && !Za(); ) ga(we);
  }
  function ga(e) {
    var t = ka(e.alternate, e, et);
    e.memoizedProps = e.pendingProps, t === null ? va(e) : we = t, ci.current = null;
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = yf(n, t, et), n !== null) {
          we = n;
          return;
        }
      } else {
        if (n = wf(n, t), n !== null) {
          n.flags &= 32767, we = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          xe = 6, we = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    xe === 0 && (xe = 5);
  }
  function on(e, t, n) {
    var r = ee, l = ot.transition;
    try {
      ot.transition = null, ee = 1, Pf(e, t, n, r);
    } finally {
      ot.transition = l, ee = r;
    }
    return null;
  }
  function Pf(e, t, n, r) {
    do
      jn();
    while (Ht !== null);
    if ((Y & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (ic(e, o), e === Ce && (we = Ce = null, Re = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vl || (vl = !0, Sa(Cr, function() {
      return jn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = ot.transition, ot.transition = null;
      var i = ee;
      ee = 1;
      var u = Y;
      Y |= 4, ci.current = null, Sf(e, n), ua(n, e), Kc(wo), jr = !!yo, wo = yo = null, e.current = n, xf(n), Ja(), Y = u, ee = i, ot.transition = o;
    } else e.current = n;
    if (vl && (vl = !1, Ht = e, yl = l), o = e.pendingLanes, o === 0 && ($t = null), ec(n.stateNode), Qe(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (gl) throw gl = !1, e = pi, pi = null, e;
    return (yl & 1) !== 0 && e.tag !== 0 && jn(), o = e.pendingLanes, (o & 1) !== 0 ? e === mi ? vr++ : (vr = 0, mi = e) : vr = 0, Ut(), null;
  }
  function jn() {
    if (Ht !== null) {
      var e = ou(yl), t = ot.transition, n = ee;
      try {
        if (ot.transition = null, ee = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, yl = 0, (Y & 6) !== 0) throw Error(p(331));
          var l = Y;
          for (Y |= 4, E = e.current; E !== null; ) {
            var o = E, i = o.child;
            if ((E.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var g = u[s];
                  for (E = g; E !== null; ) {
                    var w = E;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, w, o);
                    }
                    var k = w.child;
                    if (k !== null) k.return = w, E = k;
                    else for (; E !== null; ) {
                      w = E;
                      var v = w.sibling, _ = w.return;
                      if (na(w), w === g) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = _, E = v;
                        break;
                      }
                      E = _;
                    }
                  }
                }
                var N = o.alternate;
                if (N !== null) {
                  var P = N.child;
                  if (P !== null) {
                    N.child = null;
                    do {
                      var ve = P.sibling;
                      P.sibling = null, P = ve;
                    } while (P !== null);
                  }
                }
                E = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) i.return = o, E = i;
            else e: for (; E !== null; ) {
              if (o = E, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  mr(9, o, o.return);
              }
              var d = o.sibling;
              if (d !== null) {
                d.return = o.return, E = d;
                break e;
              }
              E = o.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var h = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && h !== null) h.return = i, E = h;
            else e: for (i = a; E !== null; ) {
              if (u = E, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pl(9, u);
                }
              } catch (z) {
                me(u, u.return, z);
              }
              if (u === i) {
                E = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, E = S;
                break e;
              }
              E = u.return;
            }
          }
          if (Y = l, Ut(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
            gt.onPostCommitFiberRoot(Nr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ee = n, ot.transition = t;
      }
    }
    return !1;
  }
  function ya(e, t, n) {
    t = zn(n, t), t = Is(e, t, 1), e = Bt(e, t, 1), t = Ue(), e !== null && (Vn(e, 1, t), Qe(e, t));
  }
  function me(e, t, n) {
    if (e.tag === 3) ya(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
          e = zn(n, e), e = Fs(t, e, 1), t = Bt(t, e, 1), e = Ue(), t !== null && (Vn(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ue(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Re & n) === n && (xe === 4 || xe === 3 && (Re & 130023424) === Re && 500 > ge() - di ? ln(e, 0) : fi |= n), Qe(e, t);
  }
  function wa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = zr, zr <<= 1, (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Ue();
    e = Ct(e, t), e !== null && (Vn(e, t, n), Qe(e, n));
  }
  function Tf(e) {
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
        throw Error(p(314));
    }
    r !== null && r.delete(t), wa(e, n);
  }
  var ka;
  ka = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) He = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return He = !1, vf(e, t, n);
      He = (e.flags & 131072) !== 0;
    }
    else He = !1, se && (t.flags & 1048576) !== 0 && bu(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = kn(t, De.current);
        Nn(t, n), l = Ho(null, t, r, e, l, n);
        var o = Wo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (o = !0, Yr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Io(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Zo(t, r, e, n), t = ei(null, t, r, !0, o, n)) : (t.tag = 0, se && o && No(t), Fe(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = jf(r), e = ft(r, e), l) {
            case 0:
              t = bo(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Vs(null, t, r, e, n);
              break e;
            case 14:
              t = $s(null, t, r, ft(r.type, e), n);
              break e;
          }
          throw Error(p(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), bo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), Ks(e, t, r, l, n);
      case 3:
        e: {
          if (Ys(t), e === null) throw Error(p(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, ss(e, t), nl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = zn(Error(p(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(p(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (be = Ot(t.stateNode.containerInfo.firstChild), qe = t, se = !0, ct = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_n(), r === l) {
              t = Pt(e, t, n);
              break e;
            }
            Fe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return fs(t), e === null && To(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ko(r, l) ? i = null : o !== null && ko(r, o) && (t.flags |= 32), Qs(e, t), Fe(e, t, i, n), t.child;
      case 6:
        return e === null && To(t), null;
      case 13:
        return Xs(e, t, n);
      case 4:
        return Fo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = En(t, null, r, n) : Fe(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), Vs(e, t, r, l, n);
      case 7:
        return Fe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Fe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Fe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, re(br, r._currentValue), r._currentValue = i, o !== null) if (at(o.value, i)) {
            if (o.children === l.children && !Ve.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = Nt(-1, n & -n), s.tag = 2;
                    var g = o.updateQueue;
                    if (g !== null) {
                      g = g.shared;
                      var w = g.pending;
                      w === null ? s.next = s : (s.next = w.next, w.next = s), g.pending = s;
                    }
                  }
                  o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Mo(
                    o.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(p(341));
              i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Mo(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          Fe(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Nn(t, n), l = rt(l), r = r(l), t.flags |= 1, Fe(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ft(r, t.pendingProps), l = ft(r.type, l), $s(e, t, r, l, n);
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), fl(e, t), t.tag = 1, $e(r) ? (e = !0, Yr(t)) : e = !1, Nn(t, n), Ms(t, r, l), Zo(t, r, l, n), ei(null, t, r, !0, e, n);
      case 19:
        return Js(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Sa(e, t) {
    return eu(e, t);
  }
  function Lf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function it(e, t, n, r) {
    return new Lf(e, t, n, r);
  }
  function ki(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jf(e) {
    if (typeof e == "function") return ki(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ze) return 11;
      if (e === ht) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function xl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ki(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case je:
        return un(n.children, l, o, t);
      case Ae:
        i = 8, l |= 8;
        break;
      case F:
        return e = it(12, n, t, l | 2), e.elementType = F, e.lanes = o, e;
      case Xe:
        return e = it(13, n, t, l), e.elementType = Xe, e.lanes = o, e;
      case ut:
        return e = it(19, n, t, l), e.elementType = ut, e.lanes = o, e;
      case pe:
        return _l(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case de:
            i = 10;
            break e;
          case Ge:
            i = 9;
            break e;
          case ze:
            i = 11;
            break e;
          case ht:
            i = 14;
            break e;
          case Be:
            i = 16, r = null;
            break e;
        }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
    return t = it(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function un(e, t, n, r) {
    return e = it(7, e, r, t), e.lanes = n, e;
  }
  function _l(e, t, n, r) {
    return e = it(22, e, r, t), e.elementType = pe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Si(e, t, n) {
    return e = it(6, e, null, t), e.lanes = n, e;
  }
  function xi(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Df(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function _i(e, t, n, r, l, o, i, u, s) {
    return e = new Df(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = it(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Io(o), e;
  }
  function Mf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Pe, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function xa(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($e(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if ($e(n)) return Zu(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, o, i, u, s) {
    return e = _i(n, r, !0, e, l, o, i, u, s), e.context = xa(null), n = e.current, r = Ue(), l = Wt(n), o = Nt(r, l), o.callback = t ?? null, Bt(n, o, l), e.current.lanes = l, Vn(e, l, r), Qe(e, r), e;
  }
  function El(e, t, n, r) {
    var l = t.current, o = Ue(), i = Wt(l);
    return n = xa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, i), e !== null && (mt(e, l, i, o), tl(e, l, i)), i;
  }
  function Cl(e) {
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
  function Ei(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t);
  }
  function Of() {
    return null;
  }
  var Ca = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ci(e) {
    this._internalRoot = e;
  }
  Nl.prototype.render = Ci.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    El(e, t, null, null);
  }, Nl.prototype.unmount = Ci.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rn(function() {
        El(null, e, null, null);
      }), t[St] = null;
    }
  };
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = su();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++) ;
      jt.splice(n, 0, e), n === 0 && fu(e);
    }
  };
  function Ni(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Na() {
  }
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var g = Cl(i);
          o.call(g);
        };
      }
      var i = _a(t, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = i, e[St] = i.current, tr(e.nodeType === 8 ? e.parentNode : e), rn(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var g = Cl(s);
        u.call(g);
      };
    }
    var s = _i(e, 0, !1, null, null, !1, !1, "", Na);
    return e._reactRootContainer = s, e[St] = s.current, tr(e.nodeType === 8 ? e.parentNode : e), rn(function() {
      El(t, s, n, r);
    }), s;
  }
  function zl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = Cl(i);
          u.call(s);
        };
      }
      El(t, i, e, l);
    } else i = If(n, t, e, l, r);
    return Cl(i);
  }
  iu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Qe(t, ge()), (Y & 6) === 0 && (Ln = ge() + 500, Ut()));
        }
        break;
      case 13:
        rn(function() {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Ue();
            mt(r, e, 1, l);
          }
        }), Ei(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
        var n = Ue();
        mt(t, e, 134217728, n);
      }
      Ei(e, 134217728);
    }
  }, uu = function(e) {
    if (e.tag === 13) {
      var t = Wt(e), n = Ct(e, t);
      if (n !== null) {
        var r = Ue();
        mt(n, e, t, r);
      }
      Ei(e, t);
    }
  }, su = function() {
    return ee;
  }, au = function(e, t) {
    var n = ee;
    try {
      return ee = e, t();
    } finally {
      ee = n;
    }
  }, $l = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ml(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Qr(r);
              if (!l) throw Error(p(90));
              Di(r), Ml(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ui(e, n);
        break;
      case "select":
        t = n.value, t != null && sn(e, !!n.multiple, t, !1);
    }
  }, Yi = vi, Gi = rn;
  var Ff = { usingClientEntryPoint: !1, Events: [lr, yn, Qr, Qi, Ki, vi] }, yr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = qi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Of, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Nr = Tl.inject(Uf), gt = Tl;
    } catch {
    }
  }
  return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff, Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ni(t)) throw Error(p(200));
    return Mf(e, t, null, n);
  }, Ke.createRoot = function(e, t) {
    if (!Ni(e)) throw Error(p(299));
    var n = !1, r = "", l = Ca;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = _i(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new Ci(t);
  }, Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = qi(t), e = e === null ? null : e.stateNode, e;
  }, Ke.flushSync = function(e) {
    return rn(e);
  }, Ke.hydrate = function(e, t, n) {
    if (!Pl(t)) throw Error(p(200));
    return zl(null, e, t, !0, n);
  }, Ke.hydrateRoot = function(e, t, n) {
    if (!Ni(e)) throw Error(p(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Ca;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = _a(t, null, e, 1, n ?? null, l, !1, o, i), e[St] = t.current, tr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Nl(t);
  }, Ke.render = function(e, t, n) {
    if (!Pl(t)) throw Error(p(200));
    return zl(null, e, t, !1, n);
  }, Ke.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(p(40));
    return e._reactRootContainer ? (rn(function() {
      zl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[St] = null;
      });
    }), !0) : !1;
  }, Ke.unstable_batchedUpdates = vi, Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Pl(n)) throw Error(p(200));
    if (e == null || e._reactInternals === void 0) throw Error(p(38));
    return zl(e, t, n, !1, r);
  }, Ke.version = "18.3.1-next-f1338f8080-20240426", Ke;
}
var Ma;
function Kf() {
  if (Ma) return Ti.exports;
  Ma = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (c) {
        console.error(c);
      }
  }
  return m(), Ti.exports = Qf(), Ti.exports;
}
var Oa;
function Yf() {
  if (Oa) return Rl;
  Oa = 1;
  var m = Kf();
  return Rl.createRoot = m.createRoot, Rl.hydrateRoot = m.hydrateRoot, Rl;
}
var Gf = Yf();
const Xf = /* @__PURE__ */ new Set([
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
  "alignSelf"
]);
function Zf(m) {
  return m.replace(/-([a-z])/g, (c, p) => p.toUpperCase());
}
function Jf(m) {
  if (typeof m == "number" && Number.isFinite(m)) return m;
  if (typeof m != "string") return null;
  const c = m.trim();
  if (!c || c.length > 120) return null;
  const p = c.toLowerCase();
  return p.includes("url(") || p.includes("expression(") || p.includes("javascript:") || p.includes("@import") || p.includes("</") ? null : c;
}
function Dn(m) {
  if (!m || typeof m != "object" || Array.isArray(m)) return {};
  const c = {};
  for (const [p, T] of Object.entries(m)) {
    const R = Zf(p);
    if (!Xf.has(R)) continue;
    const Q = Jf(T);
    Q != null && (c[R] = Q);
  }
  return c;
}
function Ba(m) {
  return m === "select" || m === "open" || m === "none" ? m : null;
}
function Va(m) {
  if (!m || typeof m != "object") return null;
  const c = m;
  if (typeof c.id != "string" || !c.id) return null;
  const p = c.variant === "primary" || c.variant === "danger" ? c.variant : "default";
  return {
    id: c.id,
    label: typeof c.label == "string" ? c.label : c.id,
    variant: p,
    disabled: !!c.disabled
  };
}
function qf(m) {
  if (!m || typeof m != "object") return null;
  const c = m, p = typeof c.text == "string" ? c.text : typeof c.label == "string" ? c.label : null;
  if (p == null) return null;
  const T = typeof c.id == "string" && c.id ? c.id : `text-${p.slice(0, 24)}`, R = c.variant === "muted" || c.variant === "accent" || c.variant === "danger" || c.variant === "badge" ? c.variant : "default";
  return {
    id: T,
    text: p,
    style: Dn(c.style),
    variant: R,
    clickable: !!c.clickable
  };
}
function bf(m) {
  if (!m || typeof m != "object") return null;
  const c = m;
  if (typeof c.id != "string" || typeof c.src != "string") return null;
  const p = Array.isArray(c.buttons) ? c.buttons.map(Va).filter(($) => $ != null) : [], T = Array.isArray(c.texts) ? c.texts.map(qf).filter(($) => $ != null) : [], R = typeof c.label == "string" ? c.label : c.id, Q = c.hover_text ?? c.hoverText, U = c.card_style ?? c.cardStyle ?? c.style ?? null, D = {
    ...Dn(
      typeof c.background == "string" || typeof c.color == "string" ? {
        ...typeof c.background == "string" ? { background: c.background } : {},
        ...typeof c.color == "string" ? { color: c.color } : {},
        ...typeof c.font_family == "string" || typeof c.fontFamily == "string" ? {
          fontFamily: c.font_family || c.fontFamily
        } : {}
      } : {}
    ),
    ...Dn(U)
  }, M = c.open_url ?? c.openUrl ?? c.href ?? c.link;
  return {
    id: c.id,
    src: c.src,
    label: R,
    label_style: Dn(c.label_style ?? c.labelStyle),
    caption: typeof c.caption == "string" ? c.caption : "",
    caption_style: Dn(c.caption_style ?? c.captionStyle),
    hover_text: typeof Q == "string" && Q.length > 0 ? Q : R,
    card_style: D,
    image_click: Ba(c.image_click ?? c.imageClick),
    open_url: typeof M == "string" ? M : "",
    disabled: !!c.disabled,
    buttons: p,
    texts: T
  };
}
function Ia(m) {
  const c = m ?? {}, p = Array.isArray(c.items) ? c.items.map(bf).filter(($) => $ != null) : [], T = Array.isArray(c.selected_ids) ? c.selected_ids.map(String) : [], R = Array.isArray(c.buttons) ? c.buttons.map(Va).filter(($) => $ != null) : [], Q = Number(c.columns), U = Number.isFinite(Q) ? Math.max(1, Math.min(Q, 8)) : 4, D = typeof c.selection_color == "string" && c.selection_color.trim() ? c.selection_color.trim() : "#0f766e", M = Ba(c.image_click) ?? (c.selectable === !1 ? "open" : "select");
  return {
    items: p,
    columns: U,
    gap: Math.max(0, Number(c.gap) || 0),
    selectable: c.selectable !== !1,
    show_checkboxes: c.show_checkboxes !== !1,
    image_click: M,
    open_in_new_tab: c.open_in_new_tab !== !1,
    show_hover_text: c.show_hover_text !== !1,
    selection_color: D,
    card_style: Dn(c.card_style),
    selected_ids: T,
    multi_select: c.multi_select !== !1,
    show_select_all: !!c.show_select_all,
    buttons: R,
    max_height: Math.max(120, Number(c.max_height) || 640),
    thumbnail_fit: c.thumbnail_fit === "contain" ? "contain" : "cover",
    empty_message: typeof c.empty_message == "string" ? c.empty_message : "No images"
  };
}
function Fa(m) {
  return [...m].sort().join("\0");
}
function $a({
  button: m,
  onClick: c,
  className: p = ""
}) {
  return /* @__PURE__ */ J.jsx(
    "button",
    {
      type: "button",
      className: `sig-btn sig-btn-${m.variant} ${p}`.trim(),
      disabled: m.disabled,
      onClick: (T) => {
        T.stopPropagation(), c(m.id);
      },
      children: m.label
    }
  );
}
function ed({
  text: m,
  onClick: c
}) {
  const p = [
    "sig-text",
    m.variant !== "default" ? `sig-text-${m.variant}` : "",
    m.clickable ? "sig-text-clickable" : ""
  ].filter(Boolean).join(" ");
  return m.clickable ? /* @__PURE__ */ J.jsx(
    "span",
    {
      className: p,
      style: m.style,
      title: m.text,
      role: "button",
      tabIndex: 0,
      onClick: (T) => {
        T.stopPropagation(), c(m.id);
      },
      onKeyDown: (T) => {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), T.stopPropagation(), c(m.id));
      },
      children: m.text
    }
  ) : /* @__PURE__ */ J.jsx("span", { className: p, style: m.style, title: m.text, children: m.text });
}
function td(m, c) {
  return m.image_click ?? c;
}
function nd({
  item: m,
  selected: c,
  selectable: p,
  showCheckboxes: T,
  showHoverText: R,
  thumbnailFit: Q,
  cardStyle: U,
  imageClick: D,
  openInNewTab: M,
  onToggle: $,
  onOpen: le,
  onButton: H
}) {
  const K = td(m, D), ye = m.open_url || m.src, ke = () => {
    if (!m.disabled && K !== "none") {
      if (K === "select") {
        p && $(m.id);
        return;
      }
      ye && M && typeof window < "u" && window.open(ye, "_blank", "noopener,noreferrer"), le(m.id, ye);
    }
  }, te = (W) => {
    m.disabled || W.target.closest("input, button") || (W.stopPropagation(), ke());
  }, q = (W) => {
    m.disabled || (W.key === "Enter" || W.key === " ") && (W.preventDefault(), ke());
  }, Ye = {
    ...U,
    ...m.card_style
  }, he = !m.disabled && K !== "none", ae = K === "select" ? `${c ? "Deselect" : "Select"} ${m.label}` : K === "open" ? `Open ${m.label}` : m.label;
  return /* @__PURE__ */ J.jsxs(
    "article",
    {
      className: [
        "sig-card",
        c ? "sig-card-selected" : "",
        m.disabled ? "sig-card-disabled" : ""
      ].filter(Boolean).join(" "),
      style: Ye,
      tabIndex: he ? 0 : -1,
      "aria-selected": p ? c : void 0,
      "aria-disabled": m.disabled || void 0,
      onKeyDown: he ? q : void 0,
      children: [
        /* @__PURE__ */ J.jsxs(
          "div",
          {
            className: [
              "sig-thumb-wrap",
              c ? "sig-thumb-wrap-selected" : "",
              K === "none" ? "sig-thumb-wrap-static" : ""
            ].filter(Boolean).join(" "),
            role: he ? "button" : void 0,
            "aria-label": he ? ae : m.label,
            onClick: he ? te : void 0,
            children: [
              p && T && /* @__PURE__ */ J.jsx(
                "input",
                {
                  className: "sig-check",
                  type: "checkbox",
                  checked: c,
                  disabled: m.disabled,
                  "aria-label": `Select ${m.label}`,
                  onChange: () => $(m.id),
                  onClick: (W) => W.stopPropagation()
                }
              ),
              /* @__PURE__ */ J.jsx(
                "img",
                {
                  className: "sig-thumb",
                  src: m.src,
                  alt: m.label,
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  style: { objectFit: Q }
                }
              ),
              R && m.hover_text ? /* @__PURE__ */ J.jsx("div", { className: "sig-hover-overlay", title: m.hover_text, children: m.hover_text }) : null
            ]
          }
        ),
        /* @__PURE__ */ J.jsxs("div", { className: "sig-meta", children: [
          /* @__PURE__ */ J.jsx("div", { className: "sig-label", title: m.label, style: m.label_style, children: m.label }),
          m.caption ? /* @__PURE__ */ J.jsx(
            "div",
            {
              className: "sig-caption",
              title: m.caption,
              style: m.caption_style,
              children: m.caption
            }
          ) : null
        ] }),
        m.texts.length > 0 ? /* @__PURE__ */ J.jsx("div", { className: "sig-texts", children: m.texts.map((W) => /* @__PURE__ */ J.jsx(
          ed,
          {
            text: W,
            onClick: (_e) => H(_e, m.id)
          },
          W.id
        )) }) : null,
        m.buttons.length > 0 ? /* @__PURE__ */ J.jsx("div", { className: "sig-card-actions", children: m.buttons.map((W) => /* @__PURE__ */ J.jsx(
          $a,
          {
            button: { ...W, disabled: W.disabled || m.disabled },
            onClick: (_e) => H(_e, m.id)
          },
          W.id
        )) }) : null
      ]
    }
  );
}
function Ua(m, c) {
  const p = new Set(m.map(String)), T = c.filter((R) => p.has(R));
  for (const R of p)
    T.includes(R) || T.push(R);
  return T;
}
function rd({
  setStateValue: m,
  ...c
}) {
  const p = Fa(c.selected_ids), [T, R] = Le.useState(() => c.selected_ids), Q = Le.useRef(0), U = Le.useRef(p), D = Le.useRef(!1), M = Le.useMemo(() => c.items.map((F) => F.id), [c.items]);
  Le.useEffect(() => {
    if (p === U.current) {
      D.current = !1;
      return;
    }
    D.current || (U.current = p, R(Ua(c.selected_ids, M)));
  }, [p, c.selected_ids, M]);
  const $ = Le.useCallback(
    (F) => {
      const de = Ua(F, M), Ge = Fa(de);
      U.current = Ge, D.current = !0, R(de), m("selected_ids", de), m("selected_csv", de.join(","));
    },
    [M, m]
  ), le = Le.useCallback(
    (F, de) => {
      Q.current += 1, m("clicked_button", F), m("clicked_item", de), m("action_nonce", Q.current);
    },
    [m]
  ), H = Le.useMemo(
    () => c.items.filter((F) => !F.disabled).map((F) => F.id),
    [c.items]
  ), K = Le.useCallback(
    (F) => {
      if (!c.selectable) return;
      const de = c.items.find((ze) => ze.id === F);
      if (!de || de.disabled) return;
      let Ge;
      if (c.multi_select) {
        const ze = new Set(T);
        ze.has(F) ? ze.delete(F) : ze.add(F), Ge = [...ze];
      } else
        Ge = T.includes(F) ? [] : [F];
      $(Ge);
    },
    [c.items, c.multi_select, c.selectable, $, T]
  ), ye = Le.useCallback(() => {
    $([...H]);
  }, [H, $]), ke = Le.useCallback(() => {
    $([]);
  }, [$]), te = Le.useCallback(
    (F) => le(F, null),
    [le]
  ), q = Le.useCallback(
    (F, de) => le(F, de),
    [le]
  ), Ye = Le.useCallback(
    (F, de) => le("open", F),
    [le]
  ), he = H.filter(
    (F) => T.includes(F)
  ).length, ae = H.length > 0 && he === H.length, W = he > 0 && !ae, _e = he === 0, Pe = Le.useCallback(() => {
    ae ? ke() : ye();
  }, [ae, ke, ye]), je = {
    "--sig-selection": c.selection_color,
    "--sig-accent": c.selection_color
  }, Ae = {
    display: "grid",
    gridTemplateColumns: `repeat(${c.columns}, minmax(0, 1fr))`,
    gap: c.gap,
    width: "100%"
  };
  return /* @__PURE__ */ J.jsxs("div", { className: "sig-root", style: je, children: [
    (c.show_select_all || c.buttons.length > 0 || c.selectable) && /* @__PURE__ */ J.jsxs("div", { className: "sig-toolbar", children: [
      c.selectable ? /* @__PURE__ */ J.jsxs("span", { className: "sig-count", children: [
        he,
        " selected",
        H.length ? ` / ${H.length}` : ""
      ] }) : /* @__PURE__ */ J.jsxs("span", { className: "sig-count", children: [
        c.items.length,
        " images"
      ] }),
      c.show_select_all ? /* @__PURE__ */ J.jsxs("div", { className: "sig-select-all", children: [
        /* @__PURE__ */ J.jsxs(
          "button",
          {
            type: "button",
            className: [
              "sig-select-all-master",
              ae ? "sig-select-all-master-on" : "",
              W ? "sig-select-all-master-partial" : ""
            ].filter(Boolean).join(" "),
            disabled: H.length === 0,
            "aria-pressed": ae,
            "aria-label": ae ? "Deselect all" : "Select all",
            title: ae ? "Deselect all" : W ? "Select remaining" : "Select all",
            onClick: Pe,
            children: [
              /* @__PURE__ */ J.jsx(
                "span",
                {
                  className: "sig-select-all-box",
                  "aria-hidden": "true",
                  "data-state": ae ? "all" : W ? "some" : "none"
                }
              ),
              /* @__PURE__ */ J.jsx("span", { children: "All" })
            ]
          }
        ),
        /* @__PURE__ */ J.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: ae || H.length === 0,
            onClick: ye,
            children: "Select all"
          }
        ),
        /* @__PURE__ */ J.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: _e,
            onClick: ke,
            children: "Deselect all"
          }
        )
      ] }) : null,
      c.buttons.map((F) => /* @__PURE__ */ J.jsx($a, { button: F, onClick: te }, F.id))
    ] }),
    /* @__PURE__ */ J.jsx("div", { className: "sig-scroll", style: { maxHeight: c.max_height }, children: c.items.length === 0 ? /* @__PURE__ */ J.jsx("div", { className: "sig-empty", children: c.empty_message }) : /* @__PURE__ */ J.jsx("div", { className: "sig-grid", style: Ae, children: c.items.map((F) => /* @__PURE__ */ J.jsx(
      nd,
      {
        item: F,
        selected: T.includes(F.id),
        selectable: c.selectable,
        showCheckboxes: c.show_checkboxes,
        showHoverText: c.show_hover_text,
        thumbnailFit: c.thumbnail_fit,
        cardStyle: c.card_style,
        imageClick: c.image_click,
        openInNewTab: c.open_in_new_tab,
        onToggle: K,
        onOpen: Ye,
        onButton: q
      },
      F.id
    )) }) })
  ] });
}
const ld = '.sig-root{--sig-bg: transparent;--sig-surface: rgba(15, 23, 42, .04);--sig-surface-hover: rgba(15, 23, 42, .08);--sig-border: rgba(15, 23, 42, .12);--sig-text: #0f172a;--sig-muted: #64748b;--sig-accent: #0f766e;--sig-accent-soft: rgba(15, 118, 110, .14);--sig-selection: var(--sig-accent);--sig-danger: #b91c1c;--sig-danger-soft: rgba(185, 28, 28, .12);--sig-radius: 10px;--sig-shadow: 0 1px 2px rgba(15, 23, 42, .06);box-sizing:border-box;color:var(--sig-text);font-family:Segoe UI,ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.35;width:100%;height:100%;display:flex;flex-direction:column;gap:10px;padding:2px;background:var(--sig-bg);-webkit-user-select:none;user-select:none}.sig-root *,.sig-root *:before,.sig-root *:after{box-sizing:border-box}.sig-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:32px;flex:0 0 auto}.sig-count{color:var(--sig-muted);font-variant-numeric:tabular-nums;margin-right:auto}.sig-select-all{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px}.sig-select-all-master{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--sig-border);border-radius:8px;background:#fff;box-shadow:var(--sig-shadow);cursor:pointer;font:inherit;font-weight:650;color:var(--sig-text)}.sig-select-all-master:disabled{opacity:.45;cursor:not-allowed}.sig-select-all-master-on{border-color:var(--sig-selection, var(--sig-accent));background:color-mix(in srgb,var(--sig-selection, var(--sig-accent)) 12%,#fff)}.sig-select-all-box{width:16px;height:16px;border:2px solid var(--sig-border);border-radius:4px;display:inline-block;position:relative;flex:0 0 auto;background:#fff}.sig-select-all-master-on .sig-select-all-box,.sig-select-all-box[data-state=all]{border-color:var(--sig-selection, var(--sig-accent));background:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=all]:after{content:"";position:absolute;left:3px;top:0;width:5px;height:9px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.sig-select-all-box[data-state=some]{border-color:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=some]:after{content:"";position:absolute;left:2px;right:2px;top:6px;height:2px;background:var(--sig-selection, var(--sig-accent));border-radius:1px}.sig-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--sig-border);background:#fff;color:var(--sig-text);border-radius:8px;padding:6px 10px;font:inherit;font-weight:600;cursor:pointer;transition:background .12s ease,border-color .12s ease,transform 80ms ease,box-shadow .12s ease;box-shadow:var(--sig-shadow)}.sig-btn:hover:not(:disabled){background:var(--sig-surface-hover)}.sig-btn:active:not(:disabled){transform:translateY(1px)}.sig-btn:disabled{opacity:.45;cursor:not-allowed}.sig-btn-primary{background:var(--sig-accent);border-color:transparent;color:#fff}.sig-btn-primary:hover:not(:disabled){background:#0d9488}.sig-btn-danger{background:var(--sig-danger-soft);border-color:transparent;color:var(--sig-danger)}.sig-btn-danger:hover:not(:disabled){background:#b91c1c33}.sig-btn-ghost{background:transparent;box-shadow:none}.sig-scroll{flex:1 1 auto;min-height:0;overflow:auto;padding-right:2px;scrollbar-gutter:stable}.sig-grid{display:grid!important;width:100%;align-content:start;grid-auto-rows:auto}.sig-empty{color:var(--sig-muted);padding:24px 8px;text-align:center}.sig-card{--sig-card-fg: var(--sig-text);position:relative;display:flex;flex-direction:column;border:1px solid var(--sig-border);border-radius:var(--sig-radius);background:#fff;color:var(--sig-card-fg);overflow:hidden;box-shadow:var(--sig-shadow);transition:border-color .14s ease,box-shadow .14s ease,transform .14s ease;outline:none}.sig-card:hover{border-color:#0f766e59;box-shadow:0 6px 18px #0f172a14;transform:translateY(-1px)}.sig-card:focus-visible{border-color:var(--sig-accent);box-shadow:0 0 0 3px var(--sig-accent-soft)}.sig-card-selected{border-color:var(--sig-selection);box-shadow:0 0 0 2px color-mix(in srgb,var(--sig-selection) 22%,transparent)}.sig-card-disabled{opacity:.55;filter:grayscale(.15)}.sig-thumb-wrap{position:relative;aspect-ratio:1 / 1;background:var(--sig-surface);overflow:hidden;cursor:pointer;box-shadow:inset 0 0 0 0 transparent;transition:box-shadow .14s ease}.sig-thumb-wrap-static{cursor:default}.sig-thumb-wrap-selected{box-shadow:inset 0 0 0 4px var(--sig-selection)}.sig-thumb-wrap-selected:after{content:"";position:absolute;top:4px;right:4px;bottom:4px;left:4px;border:1px solid rgba(255,255,255,.55);pointer-events:none;z-index:1}.sig-thumb{width:100%;height:100%;display:block;object-fit:cover;transition:transform .18s ease}.sig-card:hover .sig-thumb{transform:scale(1.03)}.sig-hover-overlay{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:28px 10px 10px;color:#fff;font-weight:650;font-size:12px;line-height:1.3;background:linear-gradient(to top,rgba(15,23,42,.82) 0%,rgba(15,23,42,.35) 55%,transparent 100%);opacity:0;transform:translateY(4px);transition:opacity .14s ease,transform .14s ease;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-thumb-wrap:hover .sig-hover-overlay,.sig-thumb-wrap:focus-within .sig-hover-overlay{opacity:1;transform:translateY(0)}.sig-check{position:absolute;top:8px;left:8px;z-index:3;width:22px;height:22px;margin:0;accent-color:var(--sig-selection);cursor:pointer;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.sig-meta{display:flex;flex-direction:column;gap:2px;padding:8px 10px 10px;min-width:0}.sig-label{font-weight:650;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-caption{color:color-mix(in srgb,currentColor 62%,transparent);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-card-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 10px}.sig-card-actions .sig-btn{padding:4px 8px;font-size:12px;font-weight:600}.sig-texts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 8px}.sig-text{display:inline-block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.sig-text-muted{color:var(--sig-muted);font-size:12px}.sig-text-accent{color:var(--sig-accent);font-weight:650}.sig-text-danger{color:var(--sig-danger);font-weight:650}.sig-text-badge{color:#fff;background:var(--sig-accent);border-radius:999px;padding:2px 8px;font-size:11px;font-weight:700;letter-spacing:.02em}.sig-text-clickable{cursor:pointer}.sig-text-clickable:hover{text-decoration:underline}.sig-text-clickable:focus-visible{outline:2px solid var(--sig-accent);outline-offset:2px;border-radius:4px}', Aa = "streamlit-image-board-styles";
function od(m) {
  var R;
  if (typeof document > "u") return;
  const c = m && "getRootNode" in m ? m.getRootNode() : m ?? document, p = c instanceof ShadowRoot ? c : c instanceof Document ? c.head : document.head;
  if ((R = p.querySelector) != null && R.call(p, `#${Aa}`))
    return;
  const T = document.createElement("style");
  T.id = Aa, T.textContent = ld, p.appendChild(T);
}
const Ll = /* @__PURE__ */ new WeakMap();
function id(m, c, p) {
  let T = Ia(c), R = {
    selected_ids: [...T.selected_ids],
    selected_csv: T.selected_ids.join(","),
    clicked_button: null,
    clicked_item: null,
    action_nonce: 0
  };
  const Q = (D, M) => {
    if (D === "selected_ids") {
      const $ = Array.isArray(M) ? M.map(String) : [];
      R = {
        ...R,
        selected_ids: $,
        selected_csv: $.join(",")
      };
    } else D === "selected_csv" ? R = {
      ...R,
      selected_csv: typeof M == "string" ? M : ""
    } : D === "clicked_button" ? R = {
      ...R,
      clicked_button: typeof M == "string" ? M : null
    } : D === "clicked_item" ? R = {
      ...R,
      clicked_item: typeof M == "string" ? M : null
    } : D === "action_nonce" && (R = {
      ...R,
      action_nonce: typeof M == "number" ? M : 0
    });
    p == null || p(R);
  }, U = () => {
    od(m);
    let D = Ll.get(m);
    D || (D = Gf.createRoot(m), Ll.set(m, D)), D.render(
      /* @__PURE__ */ J.jsx(Le.StrictMode, { children: /* @__PURE__ */ J.jsx(rd, { ...T, setStateValue: Q }) })
    );
  };
  return U(), {
    update(D) {
      T = Ia({ ...T, ...D }), U();
    },
    destroy() {
      const D = Ll.get(m);
      D && (D.unmount(), Ll.delete(m)), m instanceof HTMLElement && m.replaceChildren();
    }
  };
}
const jl = /* @__PURE__ */ new WeakMap(), ud = (m) => {
  const { data: c, parentElement: p, setStateValue: T } = m, R = p.querySelector(".react-root");
  if (!R)
    throw new Error("Unexpected: React root element not found");
  let Q = jl.get(p);
  if (Q)
    Q.setStateValue = T, Q.controller.update(c);
  else {
    const U = {
      setStateValue: T,
      controller: null
    };
    U.controller = id(R, c, (D) => {
      U.setStateValue("selected_ids", D.selected_ids), U.setStateValue("selected_csv", D.selected_csv), U.setStateValue("clicked_button", D.clicked_button), U.setStateValue("clicked_item", D.clicked_item), U.setStateValue("action_nonce", D.action_nonce);
    }), jl.set(p, U), Q = U;
  }
  return () => {
    const U = jl.get(p);
    U && (U.controller.destroy(), jl.delete(p));
  };
};
export {
  ud as default
};
