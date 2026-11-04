var zo = { exports: {} }, wr = {}, Po = { exports: {} }, K = {};
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
function Bf() {
  if (za) return K;
  za = 1;
  var f = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), V = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), A = Symbol.iterator;
  function Y(p) {
    return p === null || typeof p != "object" ? null : (p = A && p[A] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _e = Object.assign, X = {};
  function G(p, v, S) {
    this.props = p, this.context = v, this.refs = X, this.updater = S || le;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(p, v) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, v, "setState");
  }, G.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = G.prototype;
  function Be(p, v, S) {
    this.props = p, this.context = v, this.refs = X, this.updater = S || le;
  }
  var ve = Be.prototype = new pe();
  ve.constructor = Be, _e(ve, G.prototype), ve.isPureReactComponent = !0;
  var ge = Array.isArray, b = Object.prototype.hasOwnProperty, me = { current: null }, Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(p, v, S) {
    var F, Q = {}, W = null, ne = null;
    if (v != null) for (F in v.ref !== void 0 && (ne = v.ref), v.key !== void 0 && (W = "" + v.key), v) b.call(v, F) && !Re.hasOwnProperty(F) && (Q[F] = v[F]);
    var ee = arguments.length - 2;
    if (ee === 1) Q.children = S;
    else if (1 < ee) {
      for (var ae = Array(ee), Xe = 0; Xe < ee; Xe++) ae[Xe] = arguments[Xe + 2];
      Q.children = ae;
    }
    if (p && p.defaultProps) for (F in ee = p.defaultProps, ee) Q[F] === void 0 && (Q[F] = ee[F]);
    return { $$typeof: f, type: p, key: W, ref: ne, props: Q, _owner: me.current };
  }
  function Ee(p, v) {
    return { $$typeof: f, type: p.type, key: v, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Ye(p) {
    return typeof p == "object" && p !== null && p.$$typeof === f;
  }
  function kt(p) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(S) {
      return v[S];
    });
  }
  var et = /\/+/g;
  function Fe(p, v) {
    return typeof p == "object" && p !== null && p.key != null ? kt("" + p.key) : v.toString(36);
  }
  function Ge(p, v, S, F, Q) {
    var W = typeof p;
    (W === "undefined" || W === "boolean") && (p = null);
    var ne = !1;
    if (p === null) ne = !0;
    else switch (W) {
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
    if (ne) return ne = p, Q = Q(ne), p = F === "" ? "." + Fe(ne, 0) : F, ge(Q) ? (S = "", p != null && (S = p.replace(et, "$&/") + "/"), Ge(Q, v, S, "", function(Xe) {
      return Xe;
    })) : Q != null && (Ye(Q) && (Q = Ee(Q, S + (!Q.key || ne && ne.key === Q.key ? "" : ("" + Q.key).replace(et, "$&/") + "/") + p)), v.push(Q)), 1;
    if (ne = 0, F = F === "" ? "." : F + ":", ge(p)) for (var ee = 0; ee < p.length; ee++) {
      W = p[ee];
      var ae = F + Fe(W, ee);
      ne += Ge(W, v, S, ae, Q);
    }
    else if (ae = Y(p), typeof ae == "function") for (p = ae.call(p), ee = 0; !(W = p.next()).done; ) W = W.value, ae = F + Fe(W, ee++), ne += Ge(W, v, S, ae, Q);
    else if (W === "object") throw v = String(p), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function tt(p, v, S) {
    if (p == null) return p;
    var F = [], Q = 0;
    return Ge(p, F, "", "", function(W) {
      return v.call(S, W, Q++);
    }), F;
  }
  function je(p) {
    if (p._status === -1) {
      var v = p._result;
      v = v(), v.then(function(S) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = S);
      }, function(S) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = S);
      }), p._status === -1 && (p._status = 0, p._result = v);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var se = { current: null }, _ = { transition: null }, D = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: _, ReactCurrentOwner: me };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return K.Children = { map: tt, forEach: function(p, v, S) {
    tt(p, function() {
      v.apply(this, arguments);
    }, S);
  }, count: function(p) {
    var v = 0;
    return tt(p, function() {
      v++;
    }), v;
  }, toArray: function(p) {
    return tt(p, function(v) {
      return v;
    }) || [];
  }, only: function(p) {
    if (!Ye(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, K.Component = G, K.Fragment = d, K.Profiler = L, K.PureComponent = Be, K.StrictMode = N, K.Suspense = j, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, K.act = C, K.cloneElement = function(p, v, S) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var F = _e({}, p.props), Q = p.key, W = p.ref, ne = p._owner;
    if (v != null) {
      if (v.ref !== void 0 && (W = v.ref, ne = me.current), v.key !== void 0 && (Q = "" + v.key), p.type && p.type.defaultProps) var ee = p.type.defaultProps;
      for (ae in v) b.call(v, ae) && !Re.hasOwnProperty(ae) && (F[ae] = v[ae] === void 0 && ee !== void 0 ? ee[ae] : v[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) F.children = S;
    else if (1 < ae) {
      ee = Array(ae);
      for (var Xe = 0; Xe < ae; Xe++) ee[Xe] = arguments[Xe + 2];
      F.children = ee;
    }
    return { $$typeof: f, type: p.type, key: Q, ref: W, props: F, _owner: ne };
  }, K.createContext = function(p) {
    return p = { $$typeof: V, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: H, _context: p }, p.Consumer = p;
  }, K.createElement = Pe, K.createFactory = function(p) {
    var v = Pe.bind(null, p);
    return v.type = p, v;
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(p) {
    return { $$typeof: M, render: p };
  }, K.isValidElement = Ye, K.lazy = function(p) {
    return { $$typeof: Z, _payload: { _status: -1, _result: p }, _init: je };
  }, K.memo = function(p, v) {
    return { $$typeof: B, type: p, compare: v === void 0 ? null : v };
  }, K.startTransition = function(p) {
    var v = _.transition;
    _.transition = {};
    try {
      p();
    } finally {
      _.transition = v;
    }
  }, K.unstable_act = C, K.useCallback = function(p, v) {
    return se.current.useCallback(p, v);
  }, K.useContext = function(p) {
    return se.current.useContext(p);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(p) {
    return se.current.useDeferredValue(p);
  }, K.useEffect = function(p, v) {
    return se.current.useEffect(p, v);
  }, K.useId = function() {
    return se.current.useId();
  }, K.useImperativeHandle = function(p, v, S) {
    return se.current.useImperativeHandle(p, v, S);
  }, K.useInsertionEffect = function(p, v) {
    return se.current.useInsertionEffect(p, v);
  }, K.useLayoutEffect = function(p, v) {
    return se.current.useLayoutEffect(p, v);
  }, K.useMemo = function(p, v) {
    return se.current.useMemo(p, v);
  }, K.useReducer = function(p, v, S) {
    return se.current.useReducer(p, v, S);
  }, K.useRef = function(p) {
    return se.current.useRef(p);
  }, K.useState = function(p) {
    return se.current.useState(p);
  }, K.useSyncExternalStore = function(p, v, S) {
    return se.current.useSyncExternalStore(p, v, S);
  }, K.useTransition = function() {
    return se.current.useTransition();
  }, K.version = "18.3.1", K;
}
var Pa;
function jo() {
  return Pa || (Pa = 1, Po.exports = Bf()), Po.exports;
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
function $f() {
  if (Ta) return wr;
  Ta = 1;
  var f = jo(), s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), N = Object.prototype.hasOwnProperty, L = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(M, j, B) {
    var Z, A = {}, Y = null, le = null;
    B !== void 0 && (Y = "" + B), j.key !== void 0 && (Y = "" + j.key), j.ref !== void 0 && (le = j.ref);
    for (Z in j) N.call(j, Z) && !H.hasOwnProperty(Z) && (A[Z] = j[Z]);
    if (M && M.defaultProps) for (Z in j = M.defaultProps, j) A[Z] === void 0 && (A[Z] = j[Z]);
    return { $$typeof: s, type: M, key: Y, ref: le, props: A, _owner: L.current };
  }
  return wr.Fragment = d, wr.jsx = V, wr.jsxs = V, wr;
}
var La;
function Vf() {
  return La || (La = 1, zo.exports = $f()), zo.exports;
}
var $ = Vf(), ue = jo(), Ll = {}, To = { exports: {} }, Ke = {}, Lo = { exports: {} }, Ro = {};
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
function Hf() {
  return Ra || (Ra = 1, (function(f) {
    function s(_, D) {
      var C = _.length;
      _.push(D);
      e: for (; 0 < C; ) {
        var p = C - 1 >>> 1, v = _[p];
        if (0 < L(v, D)) _[p] = D, _[C] = v, C = p;
        else break e;
      }
    }
    function d(_) {
      return _.length === 0 ? null : _[0];
    }
    function N(_) {
      if (_.length === 0) return null;
      var D = _[0], C = _.pop();
      if (C !== D) {
        _[0] = C;
        e: for (var p = 0, v = _.length, S = v >>> 1; p < S; ) {
          var F = 2 * (p + 1) - 1, Q = _[F], W = F + 1, ne = _[W];
          if (0 > L(Q, C)) W < v && 0 > L(ne, Q) ? (_[p] = ne, _[W] = C, p = W) : (_[p] = Q, _[F] = C, p = F);
          else if (W < v && 0 > L(ne, C)) _[p] = ne, _[W] = C, p = W;
          else break e;
        }
      }
      return D;
    }
    function L(_, D) {
      var C = _.sortIndex - D.sortIndex;
      return C !== 0 ? C : _.id - D.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      f.unstable_now = function() {
        return H.now();
      };
    } else {
      var V = Date, M = V.now();
      f.unstable_now = function() {
        return V.now() - M;
      };
    }
    var j = [], B = [], Z = 1, A = null, Y = 3, le = !1, _e = !1, X = !1, G = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ve(_) {
      for (var D = d(B); D !== null; ) {
        if (D.callback === null) N(B);
        else if (D.startTime <= _) N(B), D.sortIndex = D.expirationTime, s(j, D);
        else break;
        D = d(B);
      }
    }
    function ge(_) {
      if (X = !1, ve(_), !_e) if (d(j) !== null) _e = !0, je(b);
      else {
        var D = d(B);
        D !== null && se(ge, D.startTime - _);
      }
    }
    function b(_, D) {
      _e = !1, X && (X = !1, pe(Pe), Pe = -1), le = !0;
      var C = Y;
      try {
        for (ve(D), A = d(j); A !== null && (!(A.expirationTime > D) || _ && !kt()); ) {
          var p = A.callback;
          if (typeof p == "function") {
            A.callback = null, Y = A.priorityLevel;
            var v = p(A.expirationTime <= D);
            D = f.unstable_now(), typeof v == "function" ? A.callback = v : A === d(j) && N(j), ve(D);
          } else N(j);
          A = d(j);
        }
        if (A !== null) var S = !0;
        else {
          var F = d(B);
          F !== null && se(ge, F.startTime - D), S = !1;
        }
        return S;
      } finally {
        A = null, Y = C, le = !1;
      }
    }
    var me = !1, Re = null, Pe = -1, Ee = 5, Ye = -1;
    function kt() {
      return !(f.unstable_now() - Ye < Ee);
    }
    function et() {
      if (Re !== null) {
        var _ = f.unstable_now();
        Ye = _;
        var D = !0;
        try {
          D = Re(!0, _);
        } finally {
          D ? Fe() : (me = !1, Re = null);
        }
      } else me = !1;
    }
    var Fe;
    if (typeof Be == "function") Fe = function() {
      Be(et);
    };
    else if (typeof MessageChannel < "u") {
      var Ge = new MessageChannel(), tt = Ge.port2;
      Ge.port1.onmessage = et, Fe = function() {
        tt.postMessage(null);
      };
    } else Fe = function() {
      G(et, 0);
    };
    function je(_) {
      Re = _, me || (me = !0, Fe());
    }
    function se(_, D) {
      Pe = G(function() {
        _(f.unstable_now());
      }, D);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, f.unstable_continueExecution = function() {
      _e || le || (_e = !0, je(b));
    }, f.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ee = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, f.unstable_getFirstCallbackNode = function() {
      return d(j);
    }, f.unstable_next = function(_) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = Y;
      }
      var C = Y;
      Y = D;
      try {
        return _();
      } finally {
        Y = C;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(_, D) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var C = Y;
      Y = _;
      try {
        return D();
      } finally {
        Y = C;
      }
    }, f.unstable_scheduleCallback = function(_, D, C) {
      var p = f.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? p + C : p) : C = p, _) {
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
      return v = C + v, _ = { id: Z++, callback: D, priorityLevel: _, startTime: C, expirationTime: v, sortIndex: -1 }, C > p ? (_.sortIndex = C, s(B, _), d(j) === null && _ === d(B) && (X ? (pe(Pe), Pe = -1) : X = !0, se(ge, C - p))) : (_.sortIndex = v, s(j, _), _e || le || (_e = !0, je(b))), _;
    }, f.unstable_shouldYield = kt, f.unstable_wrapCallback = function(_) {
      var D = Y;
      return function() {
        var C = Y;
        Y = D;
        try {
          return _.apply(this, arguments);
        } finally {
          Y = C;
        }
      };
    };
  })(Ro)), Ro;
}
var ja;
function Wf() {
  return ja || (ja = 1, Lo.exports = Hf()), Lo.exports;
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
function Qf() {
  if (Ma) return Ke;
  Ma = 1;
  var f = jo(), s = Wf();
  function d(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var N = /* @__PURE__ */ new Set(), L = {};
  function H(e, t) {
    V(e, t), V(e + "Capture", t);
  }
  function V(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) N.add(t[e]);
  }
  var M = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Z = {}, A = {};
  function Y(e) {
    return j.call(A, e) ? !0 : j.call(Z, e) ? !1 : B.test(e) ? A[e] = !0 : (Z[e] = !0, !1);
  }
  function le(e, t, n, r) {
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
  function _e(e, t, n, r) {
    if (t === null || typeof t > "u" || le(e, t, n, r)) return !0;
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
  function X(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    G[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    G[t] = new X(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    G[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    G[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    G[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    G[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    G[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    G[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    G[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var pe = /[\-:]([a-z])/g;
  function Be(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      pe,
      Be
    );
    G[t] = new X(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(pe, Be);
    G[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(pe, Be);
    G[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    G[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    G[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ve(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_e(t, n, l, r) && (n = null), r || l === null ? Y(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ge = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), me = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), Ye = Symbol.for("react.provider"), kt = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), _ = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, p;
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
  var S = !1;
  function F(e, t) {
    if (!e || S) return "";
    S = !0;
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
      S = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function Q(e) {
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
        return e = F(e.type, !1), e;
      case 11:
        return e = F(e.type.render, !1), e;
      case 1:
        return e = F(e.type, !0), e;
      default:
        return "";
    }
  }
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case me:
        return "Portal";
      case Ee:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case Ge:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case kt:
        return (e.displayName || "Context") + ".Consumer";
      case Ye:
        return (e._context.displayName || "Context") + ".Provider";
      case et:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case tt:
        return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
      case je:
        t = e._payload, e = e._init;
        try {
          return W(e(t));
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
        return W(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
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
  function ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xe(e) {
    var t = ae(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function kr(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function Mo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ae(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function xr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ml(e, t) {
    var n = t.checked;
    return C({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Do(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Oo(e, t) {
    t = t.checked, t != null && ve(e, "checked", t, !1);
  }
  function Dl(e, t) {
    Oo(e, t);
    var n = ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ol(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Io(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ol(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function an(e, t, n, r) {
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
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return C({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Fo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(d(92));
        if (Dn(n)) {
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
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Sr, $o = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Wa = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ul(e, t) {
    if (t) {
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(d(62));
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
  function $l(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, cn = null, fn = null;
  function Wo(e) {
    if (e = lr(e)) {
      if (typeof Vl != "function") throw Error(d(280));
      var t = e.stateNode;
      t && (t = Qr(t), Vl(e.stateNode, e.type, t));
    }
  }
  function Qo(e) {
    cn ? fn ? fn.push(e) : fn = [e] : cn = e;
  }
  function Ko() {
    if (cn) {
      var e = cn, t = fn;
      if (fn = cn = null, Wo(e), t) for (e = 0; e < t.length; e++) Wo(t[e]);
    }
  }
  function Yo(e, t) {
    return e(t);
  }
  function Go() {
  }
  var Hl = !1;
  function Xo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Yo(e, t, n);
    } finally {
      Hl = !1, (cn !== null || fn !== null) && (Go(), Ko());
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
    if (n && typeof n != "function") throw Error(d(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (M) try {
    var Un = {};
    Object.defineProperty(Un, "passive", { get: function() {
      Wl = !0;
    } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
  } catch {
    Wl = !1;
  }
  function Qa(e, t, n, r, l, i, o, u, a) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var An = !1, _r = null, Er = !1, Ql = null, Ka = { onError: function(e) {
    An = !0, _r = e;
  } };
  function Ya(e, t, n, r, l, i, o, u, a) {
    An = !1, _r = null, Qa.apply(Ka, arguments);
  }
  function Ga(e, t, n, r, l, i, o, u, a) {
    if (Ya.apply(this, arguments), An) {
      if (An) {
        var h = _r;
        An = !1, _r = null;
      } else throw Error(d(198));
      Er || (Er = !0, Ql = h);
    }
  }
  function Xt(e) {
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
    if (Xt(e) !== e) throw Error(d(188));
  }
  function Xa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Xt(e), t === null) throw Error(d(188));
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
    return e = Xa(e), e !== null ? bo(e) : null;
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
  var eu = s.unstable_scheduleCallback, tu = s.unstable_cancelCallback, Za = s.unstable_shouldYield, Ja = s.unstable_requestPaint, ye = s.unstable_now, qa = s.unstable_getCurrentPriorityLevel, Kl = s.unstable_ImmediatePriority, nu = s.unstable_UserBlockingPriority, Cr = s.unstable_NormalPriority, ba = s.unstable_LowPriority, ru = s.unstable_IdlePriority, Nr = null, mt = null;
  function ec(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function") try {
      mt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var st = Math.clz32 ? Math.clz32 : rc, tc = Math.log, nc = Math.LN2;
  function rc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (tc(e) / nc | 0) | 0;
  }
  var zr = 64, Pr = 4194304;
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
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? r = Bn(u) : (i &= o, i !== 0 && (r = Bn(i)));
    } else o = n & ~l, o !== 0 ? r = Bn(o) : i !== 0 && (r = Bn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
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
  function ic(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - st(i), u = 1 << o, a = l[o];
      a === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = lc(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
    }
  }
  function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var e = zr;
    return zr <<= 1, (zr & 4194240) === 0 && (zr = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $n(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - st(t), e[t] = n;
  }
  function oc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - st(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Xl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - st(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var te = 0;
  function iu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ou, Zl, uu, su, au, Jl = !1, Lr = [], Tt = null, Lt = null, Rt = null, Vn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), jt = [], uc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && Zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Tt = Wn(Tt, e, t, n, r, l), !0;
      case "dragenter":
        return Lt = Wn(Lt, e, t, n, r, l), !0;
      case "mouseover":
        return Rt = Wn(Rt, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Vn.set(i, Wn(Vn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Hn.set(i, Wn(Hn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function fu(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Xt(t);
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
  function Rr(e) {
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
    Rr(e) && n.delete(t);
  }
  function ac() {
    Jl = !1, Tt !== null && Rr(Tt) && (Tt = null), Lt !== null && Rr(Lt) && (Lt = null), Rt !== null && Rr(Rt) && (Rt = null), Vn.forEach(du), Hn.forEach(du);
  }
  function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, ac)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Lr.length) {
      Qn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tt !== null && Qn(Tt, e), Lt !== null && Qn(Lt, e), Rt !== null && Qn(Rt, e), Vn.forEach(t), Hn.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null); ) fu(n), n.blockedOn === null && jt.shift();
  }
  var dn = ge.ReactCurrentBatchConfig, jr = !0;
  function cc(e, t, n, r) {
    var l = te, i = dn.transition;
    dn.transition = null;
    try {
      te = 1, ql(e, t, n, r);
    } finally {
      te = l, dn.transition = i;
    }
  }
  function fc(e, t, n, r) {
    var l = te, i = dn.transition;
    dn.transition = null;
    try {
      te = 4, ql(e, t, n, r);
    } finally {
      te = l, dn.transition = i;
    }
  }
  function ql(e, t, n, r) {
    if (jr) {
      var l = bl(e, t, n, r);
      if (l === null) hi(e, t, r, Mr, n), cu(e, r);
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if (cu(e, r), t & 4 && -1 < uc.indexOf(e)) {
        for (; l !== null; ) {
          var i = lr(l);
          if (i !== null && ou(i), i = bl(e, t, n, r), i === null && hi(e, t, r, Mr, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else hi(e, t, r, null, n);
    }
  }
  var Mr = null;
  function bl(e, t, n, r) {
    if (Mr = null, e = $l(r), e = Zt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Zo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Mr = e, null;
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
  var Mt = null, ei = null, Dr = null;
  function gu() {
    if (Dr) return Dr;
    var e, t = ei, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Dr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Or(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function Ze(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ir : mu, this.isPropagationStopped = mu, this;
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
  var pn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ti = Ze(pn), Yn = C({}, pn, { view: 0, detail: 0 }), dc = Ze(Yn), ni, ri, Gn, Fr = C({}, Yn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ii, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (ni = e.screenX - Gn.screenX, ri = e.screenY - Gn.screenY) : ri = ni = 0, Gn = e), ni);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ri;
  } }), hu = Ze(Fr), pc = C({}, Fr, { dataTransfer: 0 }), gc = Ze(pc), mc = C({}, Yn, { relatedTarget: 0 }), li = Ze(mc), hc = C({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vc = Ze(hc), yc = C({}, pn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wc = Ze(yc), kc = C({}, pn, { data: 0 }), vu = Ze(kc), xc = {
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
  }, Sc = {
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
  function ii() {
    return Ec;
  }
  var Cc = C({}, Yn, { key: function(e) {
    if (e.key) {
      var t = xc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ii, charCode: function(e) {
    return e.type === "keypress" ? Or(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nc = Ze(Cc), zc = C({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = Ze(zc), Pc = C({}, Yn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ii }), Tc = Ze(Pc), Lc = C({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rc = Ze(Lc), jc = C({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mc = Ze(jc), Dc = [9, 13, 27, 32], oi = M && "CompositionEvent" in window, Xn = null;
  M && "documentMode" in document && (Xn = document.documentMode);
  var Oc = M && "TextEvent" in window && !Xn, wu = M && (!oi || Xn && 8 < Xn && 11 >= Xn), ku = " ", xu = !1;
  function Su(e, t) {
    switch (e) {
      case "keyup":
        return Dc.indexOf(t.keyCode) !== -1;
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
  var gn = !1;
  function Ic(e, t) {
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
  function Fc(e, t) {
    if (gn) return e === "compositionend" || !oi && Su(e, t) ? (e = gu(), Dr = ei = Mt = null, gn = !1, e) : null;
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
    Qo(r), t = Vr(t, "onChange"), 0 < t.length && (n = new ti("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Zn = null, Jn = null;
  function Ac(e) {
    Hu(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Mo(t)) return e;
  }
  function Bc(e, t) {
    if (e === "change") return t;
  }
  var Nu = !1;
  if (M) {
    var ui;
    if (M) {
      var si = "oninput" in document;
      if (!si) {
        var zu = document.createElement("div");
        zu.setAttribute("oninput", "return;"), si = typeof zu.oninput == "function";
      }
      ui = si;
    } else ui = !1;
    Nu = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Pu() {
    Zn && (Zn.detachEvent("onpropertychange", Tu), Jn = Zn = null);
  }
  function Tu(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      Cu(t, Jn, e, $l(e)), Xo(Ac, t);
    }
  }
  function $c(e, t, n) {
    e === "focusin" ? (Pu(), Zn = t, Jn = n, Zn.attachEvent("onpropertychange", Tu)) : e === "focusout" && Pu();
  }
  function Vc(e) {
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
      if (!j.call(t, l) || !at(e[l], t[l])) return !1;
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
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function ai(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Kc(e) {
    var t = Mu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ju(n.ownerDocument.documentElement, n)) {
      if (r !== null && ai(n)) {
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
  var Yc = M && "documentMode" in document && 11 >= document.documentMode, mn = null, ci = null, bn = null, fi = !1;
  function Du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi || mn == null || mn !== xr(r) || (r = mn, "selectionStart" in r && ai(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bn && qn(bn, r) || (bn = r, r = Vr(ci, "onSelect"), 0 < r.length && (t = new ti("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hn = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, di = {}, Ou = {};
  M && (Ou = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Br(e) {
    if (di[e]) return di[e];
    if (!hn[e]) return e;
    var t = hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ou) return di[e] = t[n];
    return e;
  }
  var Iu = Br("animationend"), Fu = Br("animationiteration"), Uu = Br("animationstart"), Au = Br("transitionend"), Bu = /* @__PURE__ */ new Map(), $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dt(e, t) {
    Bu.set(e, t), H(t, [e]);
  }
  for (var pi = 0; pi < $u.length; pi++) {
    var gi = $u[pi], Gc = gi.toLowerCase(), Xc = gi[0].toUpperCase() + gi.slice(1);
    Dt(Gc, "on" + Xc);
  }
  Dt(Iu, "onAnimationEnd"), Dt(Fu, "onAnimationIteration"), Dt(Uu, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Au, "onTransitionEnd"), V("onMouseEnter", ["mouseout", "mouseover"]), V("onMouseLeave", ["mouseout", "mouseover"]), V("onPointerEnter", ["pointerout", "pointerover"]), V("onPointerLeave", ["pointerout", "pointerover"]), H("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), H("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), H("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), H("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Vu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ga(r, t, void 0, e), e.currentTarget = null;
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
    if (Er) throw e = Ql, Er = !1, Ql = null, e;
  }
  function ie(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Wu(t, e, 2, !1), n.add(r));
  }
  function mi(e, t, n) {
    var r = 0;
    t && (r |= 4), Wu(n, e, r, t);
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[$r]) {
      e[$r] = !0, N.forEach(function(n) {
        n !== "selectionchange" && (Zc.has(n) || mi(n, !1, e), mi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || (t[$r] = !0, mi("selectionchange", !1, t));
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
  function hi(e, t, n, r, l) {
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
          if (o = Zt(u), o === null) return;
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
      var h = i, w = $l(n), k = [];
      e: {
        var y = Bu.get(e);
        if (y !== void 0) {
          var E = ti, P = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Nc;
              break;
            case "focusin":
              P = "focus", E = li;
              break;
            case "focusout":
              P = "blur", E = li;
              break;
            case "beforeblur":
            case "afterblur":
              E = li;
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
              E = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = gc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Tc;
              break;
            case Iu:
            case Fu:
            case Uu:
              E = vc;
              break;
            case Au:
              E = Rc;
              break;
            case "scroll":
              E = dc;
              break;
            case "wheel":
              E = Mc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = yu;
          }
          var T = (t & 4) !== 0, we = !T && e === "scroll", g = T ? y !== null ? y + "Capture" : null : y;
          T = [];
          for (var c = h, m; c !== null; ) {
            m = c;
            var x = m.stateNode;
            if (m.tag === 5 && x !== null && (m = x, g !== null && (x = Fn(c, g), x != null && T.push(nr(c, x, m)))), we) break;
            c = c.return;
          }
          0 < T.length && (y = new E(y, P, null, n, w), k.push({ event: y, listeners: T }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", y && n !== Bl && (P = n.relatedTarget || n.fromElement) && (Zt(P) || P[xt])) break e;
          if ((E || y) && (y = w.window === w ? w : (y = w.ownerDocument) ? y.defaultView || y.parentWindow : window, E ? (P = n.relatedTarget || n.toElement, E = h, P = P ? Zt(P) : null, P !== null && (we = Xt(P), P !== we || P.tag !== 5 && P.tag !== 6) && (P = null)) : (E = null, P = h), E !== P)) {
            if (T = hu, x = "onMouseLeave", g = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (T = yu, x = "onPointerLeave", g = "onPointerEnter", c = "pointer"), we = E == null ? y : wn(E), m = P == null ? y : wn(P), y = new T(x, c + "leave", E, n, w), y.target = we, y.relatedTarget = m, x = null, Zt(w) === h && (T = new T(g, c + "enter", P, n, w), T.target = m, T.relatedTarget = we, x = T), we = x, E && P) t: {
              for (T = E, g = P, c = 0, m = T; m; m = vn(m)) c++;
              for (m = 0, x = g; x; x = vn(x)) m++;
              for (; 0 < c - m; ) T = vn(T), c--;
              for (; 0 < m - c; ) g = vn(g), m--;
              for (; c--; ) {
                if (T === g || g !== null && T === g.alternate) break t;
                T = vn(T), g = vn(g);
              }
              T = null;
            }
            else T = null;
            E !== null && Qu(k, y, E, T, !1), P !== null && we !== null && Qu(k, we, P, T, !0);
          }
        }
        e: {
          if (y = h ? wn(h) : window, E = y.nodeName && y.nodeName.toLowerCase(), E === "select" || E === "input" && y.type === "file") var R = Bc;
          else if (Eu(y)) if (Nu) R = Wc;
          else {
            R = Vc;
            var O = $c;
          }
          else (E = y.nodeName) && E.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (R = Hc);
          if (R && (R = R(e, h))) {
            Cu(k, R, n, w);
            break e;
          }
          O && O(e, y, h), e === "focusout" && (O = y._wrapperState) && O.controlled && y.type === "number" && Ol(y, "number", y.value);
        }
        switch (O = h ? wn(h) : window, e) {
          case "focusin":
            (Eu(O) || O.contentEditable === "true") && (mn = O, ci = h, bn = null);
            break;
          case "focusout":
            bn = ci = mn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fi = !1, Du(k, n, w);
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            Du(k, n, w);
        }
        var I;
        if (oi) e: {
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
        else gn ? Su(e, n) && (U = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
        U && (wu && n.locale !== "ko" && (gn || U !== "onCompositionStart" ? U === "onCompositionEnd" && gn && (I = gu()) : (Mt = w, ei = "value" in Mt ? Mt.value : Mt.textContent, gn = !0)), O = Vr(h, U), 0 < O.length && (U = new vu(U, e, null, n, w), k.push({ event: U, listeners: O }), I ? U.data = I : (I = _u(n), I !== null && (U.data = I)))), (I = Oc ? Ic(e, n) : Fc(e, n)) && (h = Vr(h, "onBeforeInput"), 0 < h.length && (w = new vu("onBeforeInput", "beforeinput", null, n, w), k.push({ event: w, listeners: h }), w.data = I));
      }
      Hu(k, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Fn(e, n), i != null && r.unshift(nr(e, i, l)), i = Fn(e, t), i != null && r.push(nr(e, i, l))), e = e.return;
    }
    return r;
  }
  function vn(e) {
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
      u.tag === 5 && h !== null && (u = h, l ? (a = Fn(n, i), a != null && o.unshift(nr(n, a, u))) : l || (a = Fn(n, i), a != null && o.push(nr(n, a, u)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Jc = /\r\n?/g, qc = /\u0000|\uFFFD/g;
  function Ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jc, `
`).replace(qc, "");
  }
  function Hr(e, t, n) {
    if (t = Ku(t), Ku(e) !== t && n) throw Error(d(425));
  }
  function Wr() {
  }
  var vi = null, yi = null;
  function wi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ki = typeof setTimeout == "function" ? setTimeout : void 0, bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Yu = typeof Promise == "function" ? Promise : void 0, ef = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu < "u" ? function(e) {
    return Yu.resolve(null).then(e).catch(tf);
  } : ki;
  function tf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xi(e, t) {
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
  var yn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + yn, rr = "__reactProps$" + yn, xt = "__reactContainer$" + yn, Si = "__reactEvents$" + yn, nf = "__reactListeners$" + yn, rf = "__reactHandles$" + yn;
  function Zt(e) {
    var t = e[ht];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xt] || n[ht]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gu(e); e !== null; ) {
          if (n = e[ht]) return n;
          e = Gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function lr(e) {
    return e = e[ht] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var _i = [], kn = -1;
  function It(e) {
    return { current: e };
  }
  function oe(e) {
    0 > kn || (e.current = _i[kn], _i[kn] = null, kn--);
  }
  function re(e, t) {
    kn++, _i[kn] = e.current, e.current = t;
  }
  var Ft = {}, Me = It(Ft), $e = It(!1), Jt = Ft;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ve(e) {
    return e = e.childContextTypes, e != null;
  }
  function Kr() {
    oe($e), oe(Me);
  }
  function Xu(e, t, n) {
    if (Me.current !== Ft) throw Error(d(168));
    re(Me, t), re($e, n);
  }
  function Zu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, ne(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Jt = Me.current, re(Me, e), re($e, $e.current), !0;
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n ? (e = Zu(e, t, Jt), r.__reactInternalMemoizedMergedChildContext = e, oe($e), oe(Me), re(Me, e)) : oe($e), re($e, n);
  }
  var St = null, Gr = !1, Ei = !1;
  function qu(e) {
    St === null ? St = [e] : St.push(e);
  }
  function lf(e) {
    Gr = !0, qu(e);
  }
  function Ut() {
    if (!Ei && St !== null) {
      Ei = !0;
      var e = 0, t = te;
      try {
        var n = St;
        for (te = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        St = null, Gr = !1;
      } catch (l) {
        throw St !== null && (St = St.slice(e + 1)), eu(Kl, Ut), l;
      } finally {
        te = t, Ei = !1;
      }
    }
    return null;
  }
  var Sn = [], _n = 0, Xr = null, Zr = 0, nt = [], rt = 0, qt = null, _t = 1, Et = "";
  function bt(e, t) {
    Sn[_n++] = Zr, Sn[_n++] = Xr, Xr = e, Zr = t;
  }
  function bu(e, t, n) {
    nt[rt++] = _t, nt[rt++] = Et, nt[rt++] = qt, qt = e;
    var r = _t;
    e = Et;
    var l = 32 - st(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - st(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, _t = 1 << 32 - st(t) + l | n << l | r, Et = i + e;
    } else _t = 1 << i | n << l | r, Et = e;
  }
  function Ci(e) {
    e.return !== null && (bt(e, 1), bu(e, 1, 0));
  }
  function Ni(e) {
    for (; e === Xr; ) Xr = Sn[--_n], Sn[_n] = null, Zr = Sn[--_n], Sn[_n] = null;
    for (; e === qt; ) qt = nt[--rt], nt[rt] = null, Et = nt[--rt], nt[rt] = null, _t = nt[--rt], nt[rt] = null;
  }
  var Je = null, qe = null, ce = !1, ct = null;
  function es(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = Ot(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qt !== null ? { id: _t, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, qe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pi(e) {
    if (ce) {
      var t = qe;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (zi(e)) throw Error(d(418));
          t = Ot(n.nextSibling);
          var r = Je;
          t && ts(e, t) ? es(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Je = e);
        }
      } else {
        if (zi(e)) throw Error(d(418));
        e.flags = e.flags & -4097 | 2, ce = !1, Je = e;
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Je = e;
  }
  function Jr(e) {
    if (e !== Je) return !1;
    if (!ce) return ns(e), ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t && (t = qe)) {
      if (zi(e)) throw rs(), Error(d(418));
      for (; t; ) es(e, t), t = Ot(t.nextSibling);
    }
    if (ns(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Je ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = qe; e; ) e = Ot(e.nextSibling);
  }
  function En() {
    qe = Je = null, ce = !1;
  }
  function Ti(e) {
    ct === null ? ct = [e] : ct.push(e);
  }
  var of = ge.ReactCurrentBatchConfig;
  function ir(e, t, n) {
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
  function qr(e, t) {
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
      return g = Kt(g, c), g.index = 0, g.sibling = null, g;
    }
    function i(g, c, m) {
      return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < c ? (g.flags |= 2, c) : m) : (g.flags |= 2, c)) : (g.flags |= 1048576, c);
    }
    function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function u(g, c, m, x) {
      return c === null || c.tag !== 6 ? (c = xo(m, g.mode, x), c.return = g, c) : (c = l(c, m), c.return = g, c);
    }
    function a(g, c, m, x) {
      var R = m.type;
      return R === Re ? w(g, c, m.props.children, x, m.key) : c !== null && (c.elementType === R || typeof R == "object" && R !== null && R.$$typeof === je && ls(R) === c.type) ? (x = l(c, m.props), x.ref = ir(g, c, m), x.return = g, x) : (x = Sl(m.type, m.key, m.props, null, g.mode, x), x.ref = ir(g, c, m), x.return = g, x);
    }
    function h(g, c, m, x) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = So(m, g.mode, x), c.return = g, c) : (c = l(c, m.children || []), c.return = g, c);
    }
    function w(g, c, m, x, R) {
      return c === null || c.tag !== 7 ? (c = sn(m, g.mode, x, R), c.return = g, c) : (c = l(c, m), c.return = g, c);
    }
    function k(g, c, m) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = xo("" + c, g.mode, m), c.return = g, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case b:
            return m = Sl(c.type, c.key, c.props, null, g.mode, m), m.ref = ir(g, null, c), m.return = g, m;
          case me:
            return c = So(c, g.mode, m), c.return = g, c;
          case je:
            var x = c._init;
            return k(g, x(c._payload), m);
        }
        if (Dn(c) || D(c)) return c = sn(c, g.mode, m, null), c.return = g, c;
        qr(g, c);
      }
      return null;
    }
    function y(g, c, m, x) {
      var R = c !== null ? c.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return R !== null ? null : u(g, c, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case b:
            return m.key === R ? a(g, c, m, x) : null;
          case me:
            return m.key === R ? h(g, c, m, x) : null;
          case je:
            return R = m._init, y(
              g,
              c,
              R(m._payload),
              x
            );
        }
        if (Dn(m) || D(m)) return R !== null ? null : w(g, c, m, x, null);
        qr(g, m);
      }
      return null;
    }
    function E(g, c, m, x, R) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(m) || null, u(c, g, "" + x, R);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case b:
            return g = g.get(x.key === null ? m : x.key) || null, a(c, g, x, R);
          case me:
            return g = g.get(x.key === null ? m : x.key) || null, h(c, g, x, R);
          case je:
            var O = x._init;
            return E(g, c, m, O(x._payload), R);
        }
        if (Dn(x) || D(x)) return g = g.get(m) || null, w(c, g, x, R, null);
        qr(c, x);
      }
      return null;
    }
    function P(g, c, m, x) {
      for (var R = null, O = null, I = c, U = c = 0, ze = null; I !== null && U < m.length; U++) {
        I.index > U ? (ze = I, I = null) : ze = I.sibling;
        var q = y(g, I, m[U], x);
        if (q === null) {
          I === null && (I = ze);
          break;
        }
        e && I && q.alternate === null && t(g, I), c = i(q, c, U), O === null ? R = q : O.sibling = q, O = q, I = ze;
      }
      if (U === m.length) return n(g, I), ce && bt(g, U), R;
      if (I === null) {
        for (; U < m.length; U++) I = k(g, m[U], x), I !== null && (c = i(I, c, U), O === null ? R = I : O.sibling = I, O = I);
        return ce && bt(g, U), R;
      }
      for (I = r(g, I); U < m.length; U++) ze = E(I, g, U, m[U], x), ze !== null && (e && ze.alternate !== null && I.delete(ze.key === null ? U : ze.key), c = i(ze, c, U), O === null ? R = ze : O.sibling = ze, O = ze);
      return e && I.forEach(function(Yt) {
        return t(g, Yt);
      }), ce && bt(g, U), R;
    }
    function T(g, c, m, x) {
      var R = D(m);
      if (typeof R != "function") throw Error(d(150));
      if (m = R.call(m), m == null) throw Error(d(151));
      for (var O = R = null, I = c, U = c = 0, ze = null, q = m.next(); I !== null && !q.done; U++, q = m.next()) {
        I.index > U ? (ze = I, I = null) : ze = I.sibling;
        var Yt = y(g, I, q.value, x);
        if (Yt === null) {
          I === null && (I = ze);
          break;
        }
        e && I && Yt.alternate === null && t(g, I), c = i(Yt, c, U), O === null ? R = Yt : O.sibling = Yt, O = Yt, I = ze;
      }
      if (q.done) return n(
        g,
        I
      ), ce && bt(g, U), R;
      if (I === null) {
        for (; !q.done; U++, q = m.next()) q = k(g, q.value, x), q !== null && (c = i(q, c, U), O === null ? R = q : O.sibling = q, O = q);
        return ce && bt(g, U), R;
      }
      for (I = r(g, I); !q.done; U++, q = m.next()) q = E(I, g, U, q.value, x), q !== null && (e && q.alternate !== null && I.delete(q.key === null ? U : q.key), c = i(q, c, U), O === null ? R = q : O.sibling = q, O = q);
      return e && I.forEach(function(Af) {
        return t(g, Af);
      }), ce && bt(g, U), R;
    }
    function we(g, c, m, x) {
      if (typeof m == "object" && m !== null && m.type === Re && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case b:
            e: {
              for (var R = m.key, O = c; O !== null; ) {
                if (O.key === R) {
                  if (R = m.type, R === Re) {
                    if (O.tag === 7) {
                      n(g, O.sibling), c = l(O, m.props.children), c.return = g, g = c;
                      break e;
                    }
                  } else if (O.elementType === R || typeof R == "object" && R !== null && R.$$typeof === je && ls(R) === O.type) {
                    n(g, O.sibling), c = l(O, m.props), c.ref = ir(g, O, m), c.return = g, g = c;
                    break e;
                  }
                  n(g, O);
                  break;
                } else t(g, O);
                O = O.sibling;
              }
              m.type === Re ? (c = sn(m.props.children, g.mode, x, m.key), c.return = g, g = c) : (x = Sl(m.type, m.key, m.props, null, g.mode, x), x.ref = ir(g, c, m), x.return = g, g = x);
            }
            return o(g);
          case me:
            e: {
              for (O = m.key; c !== null; ) {
                if (c.key === O) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(g, c.sibling), c = l(c, m.children || []), c.return = g, g = c;
                  break e;
                } else {
                  n(g, c);
                  break;
                }
                else t(g, c);
                c = c.sibling;
              }
              c = So(m, g.mode, x), c.return = g, g = c;
            }
            return o(g);
          case je:
            return O = m._init, we(g, c, O(m._payload), x);
        }
        if (Dn(m)) return P(g, c, m, x);
        if (D(m)) return T(g, c, m, x);
        qr(g, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(g, c.sibling), c = l(c, m), c.return = g, g = c) : (n(g, c), c = xo(m, g.mode, x), c.return = g, g = c), o(g)) : n(g, c);
    }
    return we;
  }
  var Cn = is(!0), os = is(!1), br = It(null), el = null, Nn = null, Li = null;
  function Ri() {
    Li = Nn = el = null;
  }
  function ji(e) {
    var t = br.current;
    oe(br), e._currentValue = t;
  }
  function Mi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function zn(e, t) {
    el = e, Li = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (He = !0), e.firstContext = null);
  }
  function lt(e) {
    var t = e._currentValue;
    if (Li !== e) if (e = { context: e, memoizedValue: t, next: null }, Nn === null) {
      if (el === null) throw Error(d(308));
      Nn = e, el.dependencies = { lanes: 0, firstContext: e };
    } else Nn = Nn.next = e;
    return t;
  }
  var en = null;
  function Di(e) {
    en === null ? en = [e] : en.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Di(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Oi(e) {
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
    if (r = r.shared, (J & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Di(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
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
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
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
        var y = u.lane, E = u.eventTime;
        if ((r & y) === y) {
          w !== null && (w = w.next = {
            eventTime: E,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var P = e, T = u;
            switch (y = t, E = n, T.tag) {
              case 1:
                if (P = T.payload, typeof P == "function") {
                  k = P.call(E, k, y);
                  break e;
                }
                k = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = T.payload, y = typeof P == "function" ? P.call(E, k, y) : P, y == null) break e;
                k = C({}, k, y);
                break e;
              case 2:
                At = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [u] : y.push(u));
        } else E = { eventTime: E, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, w === null ? (h = w = E, a = k) : w = w.next = E, o |= y;
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
      rn |= o, e.lanes = o, e.memoizedState = k;
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
  var or = {}, vt = It(or), ur = It(or), sr = It(or);
  function tn(e) {
    if (e === or) throw Error(d(174));
    return e;
  }
  function Ii(e, t) {
    switch (re(sr, t), re(ur, e), re(vt, or), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fl(t, e);
    }
    oe(vt), re(vt, t);
  }
  function Pn() {
    oe(vt), oe(ur), oe(sr);
  }
  function fs(e) {
    tn(sr.current);
    var t = tn(vt.current), n = Fl(t, e.type);
    t !== n && (re(ur, e), re(vt, n));
  }
  function Fi(e) {
    ur.current === e && (oe(vt), oe(ur));
  }
  var fe = It(0);
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
  var Ui = [];
  function Ai() {
    for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var ll = ge.ReactCurrentDispatcher, Bi = ge.ReactCurrentBatchConfig, nn = 0, de = null, xe = null, Ce = null, il = !1, ar = !1, cr = 0, uf = 0;
  function De() {
    throw Error(d(321));
  }
  function $i(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (nn = i, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? ff : df, e = n(r, l), ar) {
      i = 0;
      do {
        if (ar = !1, cr = 0, 25 <= i) throw Error(d(301));
        i += 1, Ce = xe = null, t.updateQueue = null, ll.current = pf, e = n(r, l);
      } while (ar);
    }
    if (ll.current = sl, t = xe !== null && xe.next !== null, nn = 0, Ce = xe = de = null, il = !1, t) throw Error(d(300));
    return e;
  }
  function Hi() {
    var e = cr !== 0;
    return cr = 0, e;
  }
  function yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ce === null ? de.memoizedState = Ce = e : Ce = Ce.next = e, Ce;
  }
  function it() {
    if (xe === null) {
      var e = de.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ce === null ? de.memoizedState : Ce.next;
    if (t !== null) Ce = t, xe = e;
    else {
      if (e === null) throw Error(d(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Ce === null ? de.memoizedState = Ce = e : Ce = Ce.next = e;
    }
    return Ce;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = it(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = xe, l = r.baseQueue, i = n.pending;
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
        if ((nn & w) === w) a !== null && (a = a.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var k = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          a === null ? (u = a = k, o = r) : a = a.next = k, de.lanes |= w, rn |= w;
        }
        h = h.next;
      } while (h !== null && h !== i);
      a === null ? o = r : a.next = u, at(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, de.lanes |= i, rn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qi(e) {
    var t = it(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      at(i, t.memoizedState) || (He = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function ds() {
  }
  function ps(e, t) {
    var n = de, r = it(), l = t(), i = !at(r.memoizedState, l);
    if (i && (r.memoizedState = l, He = !0), r = r.queue, Ki(hs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ce !== null && Ce.memoizedState.tag & 1) {
      if (n.flags |= 2048, dr(9, ms.bind(null, n, r, l, t), void 0, null), Ne === null) throw Error(d(349));
      (nn & 30) !== 0 || gs(n, t, l);
    }
    return l;
  }
  function gs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function ys(e) {
    var t = Ct(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function ws(e) {
    var t = yt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cf.bind(null, de, e), [t.memoizedState, e];
  }
  function dr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return it().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = yt();
    de.flags |= e, l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ul(e, t, n, r) {
    var l = it();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (xe !== null) {
      var o = xe.memoizedState;
      if (i = o.destroy, r !== null && $i(r, o.deps)) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    de.flags |= e, l.memoizedState = dr(1 | t, n, i, r);
  }
  function xs(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return ul(2048, 8, e, t);
  }
  function Ss(e, t) {
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
  function Yi() {
  }
  function Ns(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function zs(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ps(e, t, n) {
    return (nn & 21) === 0 ? (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n) : (at(n, t) || (n = lu(), de.lanes |= n, rn |= n, e.baseState = !0), t);
  }
  function sf(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Bi.transition;
    Bi.transition = {};
    try {
      e(!1), t();
    } finally {
      te = n, Bi.transition = r;
    }
  }
  function Ts() {
    return it().memoizedState;
  }
  function af(e, t, n) {
    var r = Wt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ls(e)) Rs(t, n);
    else if (n = us(e, t, n, r), n !== null) {
      var l = Ae();
      gt(n, e, r, l), js(n, t, r);
    }
  }
  function cf(e, t, n) {
    var r = Wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Rs(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, u = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = u, at(u, o)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Di(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = us(e, t, l, r), n !== null && (l = Ae(), gt(n, e, r, l), js(n, t, r));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de;
  }
  function Rs(e, t) {
    ar = il = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  var sl = { readContext: lt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, ff = { readContext: lt, useCallback: function(e, t) {
    return yt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: lt, useEffect: xs, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(
      4194308,
      4,
      Es.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ol(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ol(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = yt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = yt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = af.bind(null, de, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = yt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ws, useDebugValue: Yi, useDeferredValue: function(e) {
    return yt().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), t = e[0];
    return e = sf.bind(null, e[1]), yt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = de, l = yt();
    if (ce) {
      if (n === void 0) throw Error(d(407));
      n = n();
    } else {
      if (n = t(), Ne === null) throw Error(d(349));
      (nn & 30) !== 0 || gs(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, xs(hs.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, dr(9, ms.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = yt(), t = Ne.identifierPrefix;
    if (ce) {
      var n = Et, r = _t;
      n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = uf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, df = {
    readContext: lt,
    useCallback: Ns,
    useContext: lt,
    useEffect: Ki,
    useImperativeHandle: Cs,
    useInsertionEffect: Ss,
    useLayoutEffect: _s,
    useMemo: zs,
    useReducer: Wi,
    useRef: ks,
    useState: function() {
      return Wi(fr);
    },
    useDebugValue: Yi,
    useDeferredValue: function(e) {
      var t = it();
      return Ps(t, xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Wi(fr)[0], t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: ds,
    useSyncExternalStore: ps,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, pf = { readContext: lt, useCallback: Ns, useContext: lt, useEffect: Ki, useImperativeHandle: Cs, useInsertionEffect: Ss, useLayoutEffect: _s, useMemo: zs, useReducer: Qi, useRef: ks, useState: function() {
    return Qi(fr);
  }, useDebugValue: Yi, useDeferredValue: function(e) {
    var t = it();
    return xe === null ? t.memoizedState = e : Ps(t, xe.memoizedState, e);
  }, useTransition: function() {
    var e = Qi(fr)[0], t = it().memoizedState;
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
  function Gi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = Wt(e), i = Nt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Bt(e, i, l), t !== null && (gt(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = Wt(e), i = Nt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Bt(e, i, l), t !== null && (gt(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ae(), r = Wt(e), l = Nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (gt(t, e, r, n), tl(t, e, r));
  } };
  function Ms(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, i) : !0;
  }
  function Ds(e, t, n) {
    var r = !1, l = Ft, i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (l = Ve(t) ? Jt : Me.current, r = t.contextTypes, i = (r = r != null) ? xn(e, l) : Ft), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Os(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Oi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = lt(i) : (i = Ve(t) ? Jt : Me.current, l.context = xn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Gi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Tn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Q(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var gf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      hl || (hl = !0, po = r), Ji(e, t);
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
        Ji(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Ji(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new gf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Pf.bind(null, e, t, n), t.then(e, e));
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
  var mf = ge.ReactCurrentOwner, He = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function $s(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return zn(t, l), r = Vi(e, t, n, r, i, l), n = Hi(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, zt(e, t, l)) : (ce && n && Ci(t), t.flags |= 1, Ue(e, t, r, l), t.child);
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !ko(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Hs(e, t, i, r, l)) : (e = Sl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref) return zt(e, t, l);
    }
    return t.flags |= 1, e = Kt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref) if (He = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (He = !0);
      else return t.lanes = e.lanes, zt(e, t, l);
    }
    return qi(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(Rn, be), be |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(Rn, be), be |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, re(Rn, be), be |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, re(Rn, be), be |= r;
    return Ue(e, t, l, n), t.child;
  }
  function Qs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function qi(e, t, n, r, l) {
    var i = Ve(n) ? Jt : Me.current;
    return i = xn(t, i), zn(t, l), n = Vi(e, t, n, r, i, l), r = Hi(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, zt(e, t, l)) : (ce && r && Ci(t), t.flags |= 1, Ue(e, t, n, l), t.child);
  }
  function Ks(e, t, n, r, l) {
    if (Ve(n)) {
      var i = !0;
      Yr(t);
    } else i = !1;
    if (zn(t, l), t.stateNode === null) fl(e, t), Ds(t, n, r), Xi(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, u = t.memoizedProps;
      o.props = u;
      var a = o.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = lt(h) : (h = Ve(n) ? Jt : Me.current, h = xn(t, h));
      var w = n.getDerivedStateFromProps, k = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      k || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== h) && Os(t, o, r, h), At = !1;
      var y = t.memoizedState;
      o.state = y, nl(t, r, o, l), a = t.memoizedState, u !== r || y !== a || $e.current || At ? (typeof w == "function" && (Gi(t, n, w, r), a = t.memoizedState), (u = At || Ms(t, n, u, r, y, a, h)) ? (k || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = h, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, ss(e, t), u = t.memoizedProps, h = t.type === t.elementType ? u : ft(t.type, u), o.props = h, k = t.pendingProps, y = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = lt(a) : (a = Ve(n) ? Jt : Me.current, a = xn(t, a));
      var E = n.getDerivedStateFromProps;
      (w = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== k || y !== a) && Os(t, o, r, a), At = !1, y = t.memoizedState, o.state = y, nl(t, r, o, l);
      var P = t.memoizedState;
      u !== k || y !== P || $e.current || At ? (typeof E == "function" && (Gi(t, n, E, r), P = t.memoizedState), (h = At || Ms(t, n, h, r, y, P, a) || !1) ? (w || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, P, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, P, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), o.props = r, o.state = P, o.context = a, r = h) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Qs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Ju(t, n, !1), zt(e, t, i);
    r = t.stateNode, mf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Cn(t, e.child, null, i), t.child = Cn(t, null, u, i)) : Ue(e, t, u, i), t.memoizedState = r.state, l && Ju(t, n, !0), t.child;
  }
  function Ys(e) {
    var t = e.stateNode;
    t.pendingContext ? Xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xu(e, t.context, !1), Ii(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return En(), Ti(l), t.flags |= 256, Ue(e, t, n, r), t.child;
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps, l = fe.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(fe, l & 1), e === null)
      return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = _l(o, r, 0, null), e = sn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = to(n), t.memoizedState = eo, e) : no(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return hf(e, t, o, r, u, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
      var a = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Kt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Kt(u, i) : (i = sn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? to(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = eo, r;
    }
    return i = e.child, e = i.sibling, r = Kt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function no(e, t) {
    return t = _l({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cl(e, t, n, r) {
    return r !== null && Ti(r), Cn(t, e.child, null, n), e = no(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function hf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Zi(Error(d(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = _l({ mode: "visible", children: r.children }, l, 0, null), i = sn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Cn(t, e.child, null, o), t.child.memoizedState = to(o), t.memoizedState = eo, i);
    if ((t.mode & 1) === 0) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, i = Error(d(419)), r = Zi(i, r, void 0), cl(e, t, o, r);
    }
    if (u = (o & e.childLanes) !== 0, He || u) {
      if (r = Ne, r !== null) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ct(e, l), gt(r, e, l, -1));
      }
      return wo(), r = Zi(Error(d(421))), cl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, qe = Ot(l.nextSibling), Je = t, ce = !0, ct = null, e !== null && (nt[rt++] = _t, nt[rt++] = Et, nt[rt++] = qt, _t = e.id, Et = e.overflow, qt = t), t = no(t, r.children), t.flags |= 4096, t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Mi(e.return, t, n);
  }
  function ro(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (Ue(e, t, r.children, n), r = fe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (re(fe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && rl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ro(t, !0, n, null, i);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function zt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function vf(e, t, n) {
    switch (t.tag) {
      case 3:
        Ys(t), En();
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Ve(t.type) && Yr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        re(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (re(fe, fe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Xs(e, t, n) : (re(fe, fe.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
        re(fe, fe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(fe, fe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ws(e, t, n);
    }
    return zt(e, t, n);
  }
  var qs, lo, bs, ea;
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
  }, lo = function() {
  }, bs = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, tn(vt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Ml(e, l), r = Ml(e, r), i = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Il(e, l), r = Il(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      Ul(n, r);
      var o;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var u = l[h];
        for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (L.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
      for (h in r) {
        var a = r[h];
        if (u = l != null ? l[h] : void 0, r.hasOwnProperty(h) && a !== u && (a != null || u != null)) if (h === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
        } else n || (i || (i = []), i.push(
          h,
          n
        )), n = a;
        else h === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(h, a)) : h === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(h, "" + a) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (L.hasOwnProperty(h) ? (a != null && h === "onScroll" && ie("scroll", e), i || u === a || (i = [])) : (i = i || []).push(h, a));
      }
      n && (i = i || []).push("style", n);
      var h = i;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, ea = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function pr(e, t) {
    if (!ce) switch (e.tailMode) {
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
    switch (Ni(t), t.tag) {
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
        return Ve(t.type) && Kr(), Oe(t), null;
      case 3:
        return r = t.stateNode, Pn(), oe($e), oe(Me), Ai(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ct !== null && (ho(ct), ct = null))), lo(e, t), Oe(t), null;
      case 5:
        Fi(t);
        var l = tn(sr.current);
        if (n = t.type, e !== null && t.stateNode != null) bs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Oe(t), null;
          }
          if (e = tn(vt.current), Jr(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[ht] = t, r[rr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ie("cancel", r), ie("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) ie(er[l], r);
                break;
              case "source":
                ie("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  r
                ), ie("load", r);
                break;
              case "details":
                ie("toggle", r);
                break;
              case "input":
                Do(r, i), ie("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ie("invalid", r);
                break;
              case "textarea":
                Fo(r, i), ie("invalid", r);
            }
            Ul(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : L.hasOwnProperty(o) && u != null && o === "onScroll" && ie("scroll", r);
            }
            switch (n) {
              case "input":
                kr(r), Io(r, i, !0);
                break;
              case "textarea":
                kr(r), Ao(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Wr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ht] = t, e[rr] = r, qs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Al(n, r), n) {
                case "dialog":
                  ie("cancel", e), ie("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ie("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) ie(er[l], e);
                  l = r;
                  break;
                case "source":
                  ie("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ie(
                    "error",
                    e
                  ), ie("load", e), l = r;
                  break;
                case "details":
                  ie("toggle", e), l = r;
                  break;
                case "input":
                  Do(e, r), l = Ml(e, r), ie("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), ie("invalid", e);
                  break;
                case "textarea":
                  Fo(e, r), l = Il(e, r), ie("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), u = l;
              for (i in u) if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style" ? Ho(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && $o(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && On(e, a) : typeof a == "number" && On(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (L.hasOwnProperty(i) ? a != null && i === "onScroll" && ie("scroll", e) : a != null && ve(e, i, a, o));
              }
              switch (n) {
                case "input":
                  kr(e), Io(e, r, !1);
                  break;
                case "textarea":
                  kr(e), Ao(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? an(e, !!r.multiple, i, !1) : r.defaultValue != null && an(
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
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (n = tn(sr.current), tn(vt.current), Jr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (i = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (oe(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ce && qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) rs(), En(), t.flags |= 98560, i = !1;
          else if (i = Jr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(d(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(d(317));
              i[ht] = t;
            } else En(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Oe(t), i = !1;
          } else ct !== null && (ho(ct), ct = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (fe.current & 1) !== 0 ? Se === 0 && (Se = 3) : wo())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return Pn(), lo(e, t), e === null && tr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return ji(t.type._context), Oe(t), null;
      case 17:
        return Ve(t.type) && Kr(), Oe(t), null;
      case 19:
        if (oe(fe), i = t.memoizedState, i === null) return Oe(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) pr(i, !1);
        else {
          if (Se !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = rl(e), o !== null) {
              for (t.flags |= 128, pr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return re(fe, fe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ye() > jn && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = rl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !ce) return Oe(t), null;
          } else 2 * ye() - i.renderingStartTime > jn && n !== 1073741824 && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ye(), t.sibling = null, n = fe.current, re(fe, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return yo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (be & 1073741824) !== 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function wf(e, t) {
    switch (Ni(t), t.tag) {
      case 1:
        return Ve(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pn(), oe($e), oe(Me), Ai(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Fi(t), null;
      case 13:
        if (oe(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(d(340));
          En();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return oe(fe), null;
      case 4:
        return Pn(), null;
      case 10:
        return ji(t.type._context), null;
      case 22:
      case 23:
        return yo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1, Ie = !1, kf = typeof WeakSet == "function" ? WeakSet : Set, z = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      he(e, t, r);
    }
    else n.current = null;
  }
  function io(e, t, n) {
    try {
      n();
    } catch (r) {
      he(e, t, r);
    }
  }
  var ta = !1;
  function xf(e, t) {
    if (vi = jr, e = Mu(), ai(e)) {
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
            for (var E; k !== n || l !== 0 && k.nodeType !== 3 || (u = o + l), k !== i || r !== 0 && k.nodeType !== 3 || (a = o + r), k.nodeType === 3 && (o += k.nodeValue.length), (E = k.firstChild) !== null; )
              y = k, k = E;
            for (; ; ) {
              if (k === e) break t;
              if (y === n && ++h === l && (u = o), y === i && ++w === r && (a = o), (E = k.nextSibling) !== null) break;
              k = y, y = k.parentNode;
            }
            k = E;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yi = { focusedElem: e, selectionRange: n }, jr = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
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
              var T = P.memoizedProps, we = P.memoizedState, g = t.stateNode, c = g.getSnapshotBeforeUpdate(t.elementType === t.type ? T : ft(t.type, T), we);
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
        he(t, t.return, x);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, z = e;
        break;
      }
      z = t.return;
    }
    return P = ta, ta = !1, P;
  }
  function gr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && io(t, n, i);
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
  function oo(e) {
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
    t !== null && (e.alternate = null, na(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[rr], delete t[Si], delete t[nf], delete t[rf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null)) for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
  }
  var Te = null, dt = !1;
  function $t(e, t, n) {
    for (n = n.child; n !== null; ) ia(e, t, n), n = n.sibling;
  }
  function ia(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function") try {
      mt.onCommitFiberUnmount(Nr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ie || Ln(n, t);
      case 6:
        var r = Te, l = dt;
        Te = null, $t(e, t, n), Te = r, dt = l, Te !== null && (dt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null && (dt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? xi(e.parentNode, n) : e.nodeType === 1 && xi(e, n), Kn(e)) : xi(Te, n.stateNode));
        break;
      case 4:
        r = Te, l = dt, Te = n.stateNode.containerInfo, dt = !0, $t(e, t, n), Te = r, dt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o), l = l.next;
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (!Ie && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          he(n, t, u);
        }
        $t(e, t, n);
        break;
      case 21:
        $t(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, $t(e, t, n), Ie = r) : $t(e, t, n);
        break;
      default:
        $t(e, t, n);
    }
  }
  function oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new kf()), t.forEach(function(r) {
        var l = Lf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, u = o;
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
        if (Te === null) throw Error(d(160));
        ia(i, o, l), Te = null, dt = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (h) {
        he(l, t, h);
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
        if (pt(t, e), wt(e), r & 4) {
          try {
            gr(3, e, e.return), pl(3, e);
          } catch (T) {
            he(e, e.return, T);
          }
          try {
            gr(5, e, e.return);
          } catch (T) {
            he(e, e.return, T);
          }
        }
        break;
      case 1:
        pt(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return);
        break;
      case 5:
        if (pt(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (T) {
            he(e, e.return, T);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            u === "input" && i.type === "radio" && i.name != null && Oo(l, i), Al(u, o);
            var h = Al(u, i);
            for (o = 0; o < a.length; o += 2) {
              var w = a[o], k = a[o + 1];
              w === "style" ? Ho(l, k) : w === "dangerouslySetInnerHTML" ? $o(l, k) : w === "children" ? On(l, k) : ve(l, w, k, h);
            }
            switch (u) {
              case "input":
                Dl(l, i);
                break;
              case "textarea":
                Uo(l, i);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null ? an(l, !!i.multiple, E, !1) : y !== !!i.multiple && (i.defaultValue != null ? an(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : an(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[rr] = i;
          } catch (T) {
            he(e, e.return, T);
          }
        }
        break;
      case 6:
        if (pt(t, e), wt(e), r & 4) {
          if (e.stateNode === null) throw Error(d(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (T) {
            he(e, e.return, T);
          }
        }
        break;
      case 3:
        if (pt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (T) {
          he(e, e.return, T);
        }
        break;
      case 4:
        pt(t, e), wt(e);
        break;
      case 13:
        pt(t, e), wt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (fo = ye())), r & 4 && oa(e);
        break;
      case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (h = Ie) || w, pt(t, e), Ie = h) : pt(t, e), wt(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0) for (z = e, w = e.child; w !== null; ) {
            for (k = z = w; z !== null; ) {
              switch (y = z, E = y.child, y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gr(4, y, y.return);
                  break;
                case 1:
                  Ln(y, y.return);
                  var P = y.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = y, n = y.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (T) {
                      he(r, n, T);
                    }
                  }
                  break;
                case 5:
                  Ln(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    ca(k);
                    continue;
                  }
              }
              E !== null ? (E.return = y, z = E) : ca(k);
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
                  he(e, e.return, T);
                }
              }
            } else if (k.tag === 6) {
              if (w === null) try {
                k.stateNode.nodeValue = h ? "" : k.memoizedProps;
              } catch (T) {
                he(e, e.return, T);
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
        pt(t, e), wt(e), r & 4 && oa(e);
        break;
      case 21:
        break;
      default:
        pt(
          t,
          e
        ), wt(e);
    }
  }
  function wt(e) {
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
            r.flags & 32 && (On(l, ""), r.flags &= -33);
            var i = la(e);
            so(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, u = la(e);
            uo(e, u, o);
            break;
          default:
            throw Error(d(161));
        }
      } catch (a) {
        he(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sf(e, t, n) {
    z = e, sa(e);
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var l = z, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var u = l.alternate, a = u !== null && u.memoizedState !== null || Ie;
          u = dl;
          var h = Ie;
          if (dl = o, (Ie = a) && !h) for (z = l; z !== null; ) o = z, a = o.child, o.tag === 22 && o.memoizedState !== null ? fa(l) : a !== null ? (a.return = o, z = a) : fa(l);
          for (; i !== null; ) z = i, sa(i), i = i.sibling;
          z = l, dl = u, Ie = h;
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
              Ie || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
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
              throw Error(d(163));
          }
          Ie || t.flags & 512 && oo(t);
        } catch (y) {
          he(t, t.return, y);
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
              pl(4, t);
            } catch (a) {
              he(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                he(t, l, a);
              }
            }
            var i = t.return;
            try {
              oo(t);
            } catch (a) {
              he(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (a) {
              he(t, o, a);
            }
        }
      } catch (a) {
        he(t, t.return, a);
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
  var _f = Math.ceil, gl = ge.ReactCurrentDispatcher, ao = ge.ReactCurrentOwner, ot = ge.ReactCurrentBatchConfig, J = 0, Ne = null, ke = null, Le = 0, be = 0, Rn = It(0), Se = 0, mr = null, rn = 0, ml = 0, co = 0, hr = null, We = null, fo = 0, jn = 1 / 0, Pt = null, hl = !1, po = null, Vt = null, vl = !1, Ht = null, yl = 0, vr = 0, go = null, wl = -1, kl = 0;
  function Ae() {
    return (J & 6) !== 0 ? ye() : wl !== -1 ? wl : wl = ye();
  }
  function Wt(e) {
    return (e.mode & 1) === 0 ? 1 : (J & 2) !== 0 && Le !== 0 ? Le & -Le : of.transition !== null ? (kl === 0 && (kl = lu()), kl) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pu(e.type)), e);
  }
  function gt(e, t, n, r) {
    if (50 < vr) throw vr = 0, go = null, Error(d(185));
    $n(e, n, r), ((J & 2) === 0 || e !== Ne) && (e === Ne && ((J & 2) === 0 && (ml |= n), Se === 4 && Qt(e, Le)), Qe(e, r), n === 1 && J === 0 && (t.mode & 1) === 0 && (jn = ye() + 500, Gr && Ut()));
  }
  function Qe(e, t) {
    var n = e.callbackNode;
    ic(e, t);
    var r = Tr(e, e === Ne ? Le : 0);
    if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && tu(n), t === 1) e.tag === 0 ? lf(pa.bind(null, e)) : qu(pa.bind(null, e)), ef(function() {
        (J & 6) === 0 && Ut();
      }), n = null;
      else {
        switch (iu(r)) {
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
        n = xa(n, da.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function da(e, t) {
    if (wl = -1, kl = 0, (J & 6) !== 0) throw Error(d(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === Ne ? Le : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = J;
      J |= 2;
      var i = ma();
      (Ne !== e || Le !== t) && (Pt = null, jn = ye() + 500, on(e, t));
      do
        try {
          Nf();
          break;
        } catch (u) {
          ga(e, u);
        }
      while (!0);
      Ri(), gl.current = i, J = l, ke !== null ? t = 0 : (Ne = null, Le = 0, t = Se);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = mo(e, l))), t === 1) throw n = mr, on(e, 0), Qt(e, r), Qe(e, ye()), n;
      if (t === 6) Qt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Ef(l) && (t = xl(e, r), t === 2 && (i = Yl(e), i !== 0 && (r = i, t = mo(e, i))), t === 1)) throw n = mr, on(e, 0), Qt(e, r), Qe(e, ye()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            un(e, We, Pt);
            break;
          case 3:
            if (Qt(e, r), (r & 130023424) === r && (t = fo + 500 - ye(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ae(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ki(un.bind(null, e, We, Pt), t);
              break;
            }
            un(e, We, Pt);
            break;
          case 4:
            if (Qt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - st(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ki(un.bind(null, e, We, Pt), r);
              break;
            }
            un(e, We, Pt);
            break;
          case 5:
            un(e, We, Pt);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Qe(e, ye()), e.callbackNode === n ? da.bind(null, e) : null;
  }
  function mo(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = xl(e, t), e !== 2 && (t = We, We = n, t !== null && ho(t)), e;
  }
  function ho(e) {
    We === null ? We = e : We.push.apply(We, e);
  }
  function Ef(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!at(i(), l)) return !1;
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
    for (t &= ~co, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - st(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function pa(e) {
    if ((J & 6) !== 0) throw Error(d(327));
    Mn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return Qe(e, ye()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && (t = r, n = mo(e, r));
    }
    if (n === 1) throw n = mr, on(e, 0), Qt(e, t), Qe(e, ye()), n;
    if (n === 6) throw Error(d(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, We, Pt), Qe(e, ye()), null;
  }
  function vo(e, t) {
    var n = J;
    J |= 1;
    try {
      return e(t);
    } finally {
      J = n, J === 0 && (jn = ye() + 500, Gr && Ut());
    }
  }
  function ln(e) {
    Ht !== null && Ht.tag === 0 && (J & 6) === 0 && Mn();
    var t = J;
    J |= 1;
    var n = ot.transition, r = te;
    try {
      if (ot.transition = null, te = 1, e) return e();
    } finally {
      te = r, ot.transition = n, J = t, (J & 6) === 0 && Ut();
    }
  }
  function yo() {
    be = Rn.current, oe(Rn);
  }
  function on(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bc(n)), ke !== null) for (n = ke.return; n !== null; ) {
      var r = n;
      switch (Ni(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Kr();
          break;
        case 3:
          Pn(), oe($e), oe(Me), Ai();
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          oe(fe);
          break;
        case 19:
          oe(fe);
          break;
        case 10:
          ji(r.type._context);
          break;
        case 22:
        case 23:
          yo();
      }
      n = n.return;
    }
    if (Ne = e, ke = e = Kt(e.current, null), Le = be = t, Se = 0, mr = null, co = ml = rn = 0, We = hr = null, en !== null) {
      for (t = 0; t < en.length; t++) if (n = en[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      en = null;
    }
    return e;
  }
  function ga(e, t) {
    do {
      var n = ke;
      try {
        if (Ri(), ll.current = sl, il) {
          for (var r = de.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          il = !1;
        }
        if (nn = 0, Ce = xe = de = null, ar = !1, cr = 0, ao.current = null, n === null || n.return === null) {
          Se = 1, mr = t, ke = null;
          break;
        }
        e: {
          var i = e, o = n.return, u = n, a = t;
          if (t = Le, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var h = a, w = u, k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var y = w.alternate;
              y ? (w.updateQueue = y.updateQueue, w.memoizedState = y.memoizedState, w.lanes = y.lanes) : (w.updateQueue = null, w.memoizedState = null);
            }
            var E = As(o);
            if (E !== null) {
              E.flags &= -257, Bs(E, o, u, i, t), E.mode & 1 && Us(i, h, t), t = E, a = h;
              var P = t.updateQueue;
              if (P === null) {
                var T = /* @__PURE__ */ new Set();
                T.add(a), t.updateQueue = T;
              } else P.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                Us(i, h, t), wo();
                break e;
              }
              a = Error(d(426));
            }
          } else if (ce && u.mode & 1) {
            var we = As(o);
            if (we !== null) {
              (we.flags & 65536) === 0 && (we.flags |= 256), Bs(we, o, u, i, t), Ti(Tn(a, u));
              break e;
            }
          }
          i = a = Tn(a, u), Se !== 4 && (Se = 2), hr === null ? hr = [i] : hr.push(i), i = o;
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
                if ((i.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vt === null || !Vt.has(m)))) {
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
      } catch (R) {
        t = R, ke === n && n !== null && (ke = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = gl.current;
    return gl.current = sl, e === null ? sl : e;
  }
  function wo() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4), Ne === null || (rn & 268435455) === 0 && (ml & 268435455) === 0 || Qt(Ne, Le);
  }
  function xl(e, t) {
    var n = J;
    J |= 2;
    var r = ma();
    (Ne !== e || Le !== t) && (Pt = null, on(e, t));
    do
      try {
        Cf();
        break;
      } catch (l) {
        ga(e, l);
      }
    while (!0);
    if (Ri(), J = n, gl.current = r, ke !== null) throw Error(d(261));
    return Ne = null, Le = 0, Se;
  }
  function Cf() {
    for (; ke !== null; ) ha(ke);
  }
  function Nf() {
    for (; ke !== null && !Za(); ) ha(ke);
  }
  function ha(e) {
    var t = ka(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, t === null ? va(e) : ke = t, ao.current = null;
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = yf(n, t, be), n !== null) {
          ke = n;
          return;
        }
      } else {
        if (n = wf(n, t), n !== null) {
          n.flags &= 32767, ke = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Se = 6, ke = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function un(e, t, n) {
    var r = te, l = ot.transition;
    try {
      ot.transition = null, te = 1, zf(e, t, n, r);
    } finally {
      ot.transition = l, te = r;
    }
    return null;
  }
  function zf(e, t, n, r) {
    do
      Mn();
    while (Ht !== null);
    if ((J & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(d(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (oc(e, i), e === Ne && (ke = Ne = null, Le = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vl || (vl = !0, xa(Cr, function() {
      return Mn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = ot.transition, ot.transition = null;
      var o = te;
      te = 1;
      var u = J;
      J |= 4, ao.current = null, xf(e, n), ua(n, e), Kc(yi), jr = !!vi, yi = vi = null, e.current = n, Sf(n), Ja(), J = u, te = o, ot.transition = i;
    } else e.current = n;
    if (vl && (vl = !1, Ht = e, yl = l), i = e.pendingLanes, i === 0 && (Vt = null), ec(n.stateNode), Qe(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = po, po = null, e;
    return (yl & 1) !== 0 && e.tag !== 0 && Mn(), i = e.pendingLanes, (i & 1) !== 0 ? e === go ? vr++ : (vr = 0, go = e) : vr = 0, Ut(), null;
  }
  function Mn() {
    if (Ht !== null) {
      var e = iu(yl), t = ot.transition, n = te;
      try {
        if (ot.transition = null, te = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, yl = 0, (J & 6) !== 0) throw Error(d(331));
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
                        gr(8, w, i);
                    }
                    var k = w.child;
                    if (k !== null) k.return = w, z = k;
                    else for (; z !== null; ) {
                      w = z;
                      var y = w.sibling, E = w.return;
                      if (na(w), w === h) {
                        z = null;
                        break;
                      }
                      if (y !== null) {
                        y.return = E, z = y;
                        break;
                      }
                      z = E;
                    }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var T = P.child;
                  if (T !== null) {
                    P.child = null;
                    do {
                      var we = T.sibling;
                      T.sibling = null, T = we;
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
                  gr(9, i, i.return);
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
                    pl(9, u);
                }
              } catch (R) {
                he(u, u.return, R);
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
          if (J = l, Ut(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
            mt.onPostCommitFiberRoot(Nr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        te = n, ot.transition = t;
      }
    }
    return !1;
  }
  function ya(e, t, n) {
    t = Tn(n, t), t = Is(e, t, 1), e = Bt(e, t, 1), t = Ae(), e !== null && ($n(e, 1, t), Qe(e, t));
  }
  function he(e, t, n) {
    if (e.tag === 3) ya(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = Tn(n, e), e = Fs(t, e, 1), t = Bt(t, e, 1), e = Ae(), t !== null && ($n(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Pf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Le & n) === n && (Se === 4 || Se === 3 && (Le & 130023424) === Le && 500 > ye() - fo ? on(e, 0) : co |= n), Qe(e, t);
  }
  function wa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pr, Pr <<= 1, (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Ae();
    e = Ct(e, t), e !== null && ($n(e, t, n), Qe(e, n));
  }
  function Tf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wa(e, n);
  }
  function Lf(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) He = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return He = !1, vf(e, t, n);
      He = (e.flags & 131072) !== 0;
    }
    else He = !1, ce && (t.flags & 1048576) !== 0 && bu(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = xn(t, Me.current);
        zn(t, n), l = Vi(null, t, r, e, l, n);
        var i = Hi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (i = !0, Yr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oi(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = bi(null, t, r, !0, i, n)) : (t.tag = 0, ce && i && Ci(t), Ue(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = jf(r), e = ft(r, e), l) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = $s(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, ft(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), qi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), Ks(e, t, r, l, n);
      case 3:
        e: {
          if (Ys(t), e === null) throw Error(d(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, ss(e, t), nl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Tn(Error(d(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Tn(Error(d(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (qe = Ot(t.stateNode.containerInfo.firstChild), Je = t, ce = !0, ct = null, n = os(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (En(), r === l) {
              t = zt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return fs(t), e === null && Pi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, wi(r, l) ? o = null : i !== null && wi(r, i) && (t.flags |= 32), Qs(e, t), Ue(e, t, o, n), t.child;
      case 6:
        return e === null && Pi(t), null;
      case 13:
        return Xs(e, t, n);
      case 4:
        return Ii(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cn(t, null, r, n) : Ue(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), $s(e, t, r, l, n);
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, re(br, r._currentValue), r._currentValue = o, i !== null) if (at(i.value, o)) {
            if (i.children === l.children && !$e.current) {
              t = zt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var u = i.dependencies;
            if (u !== null) {
              o = i.child;
              for (var a = u.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (i.tag === 1) {
                    a = Nt(-1, n & -n), a.tag = 2;
                    var h = i.updateQueue;
                    if (h !== null) {
                      h = h.shared;
                      var w = h.pending;
                      w === null ? a.next = a : (a.next = w.next, w.next = a), h.pending = a;
                    }
                  }
                  i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Mi(
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
              o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Mi(o, n, t), o = i.sibling;
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
          Ue(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, zn(t, n), l = lt(l), r = r(l), t.flags |= 1, Ue(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ft(r, t.pendingProps), l = ft(r.type, l), Vs(e, t, r, l, n);
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), fl(e, t), t.tag = 1, Ve(r) ? (e = !0, Yr(t)) : e = !1, zn(t, n), Ds(t, r, l), Xi(t, r, l, n), bi(null, t, r, !0, e, n);
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
  function Rf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new Rf(e, t, n, r);
  }
  function ko(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jf(e) {
    if (typeof e == "function") return ko(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === et) return 11;
      if (e === tt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Sl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") ko(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Re:
        return sn(n.children, l, i, t);
      case Pe:
        o = 8, l |= 8;
        break;
      case Ee:
        return e = ut(12, n, t, l | 2), e.elementType = Ee, e.lanes = i, e;
      case Fe:
        return e = ut(13, n, t, l), e.elementType = Fe, e.lanes = i, e;
      case Ge:
        return e = ut(19, n, t, l), e.elementType = Ge, e.lanes = i, e;
      case se:
        return _l(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ye:
            o = 10;
            break e;
          case kt:
            o = 9;
            break e;
          case et:
            o = 11;
            break e;
          case tt:
            o = 14;
            break e;
          case je:
            o = 16, r = null;
            break e;
        }
        throw Error(d(130, e == null ? e : typeof e, ""));
    }
    return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function sn(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function _l(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function xo(e, t, n) {
    return e = ut(6, e, null, t), e.lanes = n, e;
  }
  function So(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Mf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function _o(e, t, n, r, l, i, o, u, a) {
    return e = new Mf(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oi(i), e;
  }
  function Df(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: me, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Sa(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
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
      if (Ve(n)) return Zu(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, i, o, u, a) {
    return e = _o(n, r, !0, e, l, i, o, u, a), e.context = Sa(null), n = e.current, r = Ae(), l = Wt(n), i = Nt(r, l), i.callback = t ?? null, Bt(n, i, l), e.current.lanes = l, $n(e, l, r), Qe(e, r), e;
  }
  function El(e, t, n, r) {
    var l = t.current, i = Ae(), o = Wt(l);
    return n = Sa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, o), e !== null && (gt(e, l, o, i), tl(e, l, o)), o;
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
  function Eo(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t);
  }
  function Of() {
    return null;
  }
  var Ca = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Co(e) {
    this._internalRoot = e;
  }
  Nl.prototype.render = Co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    El(e, t, null, null);
  }, Nl.prototype.unmount = Co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ln(function() {
        El(null, e, null, null);
      }), t[xt] = null;
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
  function No(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function zl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Na() {
  }
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var h = Cl(o);
          i.call(h);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = o, e[xt] = o.current, tr(e.nodeType === 8 ? e.parentNode : e), ln(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var h = Cl(a);
        u.call(h);
      };
    }
    var a = _o(e, 0, !1, null, null, !1, !1, "", Na);
    return e._reactRootContainer = a, e[xt] = a.current, tr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
      El(t, a, n, r);
    }), a;
  }
  function Pl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var a = Cl(o);
          u.call(a);
        };
      }
      El(t, o, e, l);
    } else o = If(n, t, e, l, r);
    return Cl(o);
  }
  ou = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Qe(t, ye()), (J & 6) === 0 && (jn = ye() + 500, Ut()));
        }
        break;
      case 13:
        ln(function() {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Ae();
            gt(r, e, 1, l);
          }
        }), Eo(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
        var n = Ae();
        gt(t, e, 134217728, n);
      }
      Eo(e, 134217728);
    }
  }, uu = function(e) {
    if (e.tag === 13) {
      var t = Wt(e), n = Ct(e, t);
      if (n !== null) {
        var r = Ae();
        gt(n, e, t, r);
      }
      Eo(e, t);
    }
  }, su = function() {
    return te;
  }, au = function(e, t) {
    var n = te;
    try {
      return te = e, t();
    } finally {
      te = n;
    }
  }, Vl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Qr(r);
              if (!l) throw Error(d(90));
              Mo(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Uo(e, n);
        break;
      case "select":
        t = n.value, t != null && an(e, !!n.multiple, t, !1);
    }
  }, Yo = vo, Go = ln;
  var Ff = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Qo, Ko, vo] }, yr = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = qo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Of, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Nr = Tl.inject(Uf), mt = Tl;
    } catch {
    }
  }
  return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff, Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!No(t)) throw Error(d(200));
    return Df(e, t, null, n);
  }, Ke.createRoot = function(e, t) {
    if (!No(e)) throw Error(d(299));
    var n = !1, r = "", l = Ca;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = _o(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new Co(t);
  }, Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = qo(t), e = e === null ? null : e.stateNode, e;
  }, Ke.flushSync = function(e) {
    return ln(e);
  }, Ke.hydrate = function(e, t, n) {
    if (!zl(t)) throw Error(d(200));
    return Pl(null, e, t, !0, n);
  }, Ke.hydrateRoot = function(e, t, n) {
    if (!No(e)) throw Error(d(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Ca;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = _a(t, null, e, 1, n ?? null, l, !1, i, o), e[xt] = t.current, tr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Nl(t);
  }, Ke.render = function(e, t, n) {
    if (!zl(t)) throw Error(d(200));
    return Pl(null, e, t, !1, n);
  }, Ke.unmountComponentAtNode = function(e) {
    if (!zl(e)) throw Error(d(40));
    return e._reactRootContainer ? (ln(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[xt] = null;
      });
    }), !0) : !1;
  }, Ke.unstable_batchedUpdates = vo, Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!zl(n)) throw Error(d(200));
    if (e == null || e._reactInternals === void 0) throw Error(d(38));
    return Pl(e, t, n, !1, r);
  }, Ke.version = "18.3.1-next-f1338f8080-20240426", Ke;
}
var Da;
function Kf() {
  if (Da) return To.exports;
  Da = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), To.exports = Qf(), To.exports;
}
var Oa;
function Yf() {
  if (Oa) return Ll;
  Oa = 1;
  var f = Kf();
  return Ll.createRoot = f.createRoot, Ll.hydrateRoot = f.hydrateRoot, Ll;
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
  "alignSelf",
  // Button theme extras (mapped to CSS variables in the gallery)
  "primaryBackground",
  "primaryColor",
  "dangerBackground",
  "dangerColor"
]), Zf = {
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
function Jf(f) {
  const s = {};
  for (const [d, N] of Object.entries(f)) {
    const L = Zf[d];
    !L || N == null || (s[L] = String(N));
  }
  return s;
}
function qf(f) {
  return f.replace(/-([a-z])/g, (s, d) => d.toUpperCase());
}
function bf(f) {
  if (typeof f == "number" && Number.isFinite(f)) return f;
  if (typeof f != "string") return null;
  const s = f.trim();
  if (!s || s.length > 120) return null;
  const d = s.toLowerCase();
  return d.includes("url(") || d.includes("expression(") || d.includes("javascript:") || d.includes("@import") || d.includes("</") ? null : s;
}
function Gt(f) {
  if (!f || typeof f != "object" || Array.isArray(f)) return {};
  const s = {};
  for (const [d, N] of Object.entries(f)) {
    const L = qf(d);
    if (!Xf.has(L)) continue;
    const H = bf(N);
    H != null && (s[L] = H);
  }
  return s;
}
function Ba(f) {
  return f === "select" || f === "open" || f === "none" ? f : null;
}
function $a(f) {
  if (!f || typeof f != "object") return null;
  const s = f;
  if (typeof s.id != "string" || !s.id) return null;
  const d = s.variant === "primary" || s.variant === "danger" || s.variant === "ghost" ? s.variant : "default", N = s.size === "sm" || s.size === "lg" ? s.size : "md";
  return {
    id: s.id,
    label: typeof s.label == "string" ? s.label : s.id,
    variant: d,
    size: N,
    style: Gt(s.style),
    disabled: !!s.disabled
  };
}
function ed(f) {
  if (!f || typeof f != "object") return null;
  const s = f, d = typeof s.text == "string" ? s.text : typeof s.label == "string" ? s.label : null;
  if (d == null) return null;
  const N = typeof s.id == "string" && s.id ? s.id : `text-${d.slice(0, 24)}`, L = s.variant === "muted" || s.variant === "accent" || s.variant === "danger" || s.variant === "badge" ? s.variant : "default";
  return {
    id: N,
    text: d,
    style: Gt(s.style),
    variant: L,
    clickable: !!s.clickable
  };
}
function td(f) {
  if (!f || typeof f != "object") return null;
  const s = f;
  if (typeof s.id != "string" || typeof s.src != "string") return null;
  const d = Array.isArray(s.buttons) ? s.buttons.map($a).filter((A) => A != null) : [], N = Array.isArray(s.texts) ? s.texts.map(ed).filter((A) => A != null) : [], L = typeof s.label == "string" ? s.label : s.id, H = s.hover_text ?? s.hoverText, V = s.card_style ?? s.cardStyle ?? s.style ?? null, M = {
    ...Gt(
      typeof s.background == "string" || typeof s.color == "string" ? {
        ...typeof s.background == "string" ? { background: s.background } : {},
        ...typeof s.color == "string" ? { color: s.color } : {},
        ...typeof s.font_family == "string" || typeof s.fontFamily == "string" ? {
          fontFamily: s.font_family || s.fontFamily
        } : {}
      } : {}
    ),
    ...Gt(V)
  }, j = s.open_url ?? s.openUrl ?? s.href ?? s.link, B = s.size_bytes ?? s.sizeBytes ?? s.size ?? s.bytes ?? s.filesize;
  let Z = null;
  if (typeof B == "number" && Number.isFinite(B) && B >= 0)
    Z = Math.floor(B);
  else if (typeof B == "string" && B.trim()) {
    const A = Number(B);
    Number.isFinite(A) && A >= 0 && (Z = Math.floor(A));
  }
  return {
    id: s.id,
    src: s.src,
    label: L,
    label_style: Gt(s.label_style ?? s.labelStyle),
    caption: typeof s.caption == "string" ? s.caption : "",
    caption_style: Gt(s.caption_style ?? s.captionStyle),
    hover_text: typeof H == "string" && H.length > 0 ? H : L,
    card_style: M,
    image_click: Ba(s.image_click ?? s.imageClick),
    open_url: typeof j == "string" ? j : "",
    size_bytes: Z,
    disabled: !!s.disabled,
    buttons: d,
    texts: N
  };
}
function Ia(f) {
  const s = f ?? {}, d = Array.isArray(s.items) ? s.items.map(td).filter((B) => B != null) : [], N = Array.isArray(s.selected_ids) ? s.selected_ids.map(String) : [], L = Array.isArray(s.buttons) ? s.buttons.map($a).filter((B) => B != null) : [], H = Number(s.columns), V = Number.isFinite(H) ? Math.max(1, Math.min(H, 8)) : 4, M = typeof s.selection_color == "string" && s.selection_color.trim() ? s.selection_color.trim() : "#0f766e", j = Ba(s.image_click) ?? (s.selectable === !1 ? "open" : "select");
  return {
    items: d,
    columns: V,
    gap: Math.max(0, Number(s.gap) || 0),
    selectable: s.selectable !== !1,
    show_checkboxes: s.show_checkboxes !== !1,
    image_click: j,
    open_in_new_tab: s.open_in_new_tab !== !1,
    show_hover_text: s.show_hover_text !== !1,
    show_card_info: s.show_card_info !== !1,
    show_selection_stats: s.show_selection_stats !== !1,
    selection_color: M,
    card_style: Gt(s.card_style),
    button_style: Gt(s.button_style),
    selected_ids: N,
    multi_select: s.multi_select !== !1,
    show_select_all: !!s.show_select_all,
    buttons: L,
    max_height: Math.max(120, Number(s.max_height) || 640),
    page_size: (() => {
      const B = Number(s.page_size);
      return !Number.isFinite(B) || B <= 0 ? 0 : Math.max(1, Math.min(Math.floor(B), 200));
    })(),
    pager_position: s.pager_position === "bottom" ? "bottom" : "top",
    thumbnail_fit: s.thumbnail_fit === "contain" ? "contain" : "cover",
    empty_message: typeof s.empty_message == "string" ? s.empty_message : "No images"
  };
}
function Fa(f) {
  return [...f].sort().join("\0");
}
function Va({
  button: f,
  onClick: s,
  className: d = ""
}) {
  const N = f.size !== "md" ? `sig-btn-${f.size}` : "";
  return /* @__PURE__ */ $.jsx(
    "button",
    {
      type: "button",
      className: `sig-btn sig-btn-${f.variant} ${N} ${d}`.trim(),
      style: f.style,
      disabled: f.disabled,
      onClick: (L) => {
        L.stopPropagation(), s(f.id);
      },
      children: f.label
    }
  );
}
function nd({
  text: f,
  onClick: s
}) {
  const d = [
    "sig-text",
    f.variant !== "default" ? `sig-text-${f.variant}` : "",
    f.clickable ? "sig-text-clickable" : ""
  ].filter(Boolean).join(" ");
  return f.clickable ? /* @__PURE__ */ $.jsx(
    "span",
    {
      className: d,
      style: f.style,
      title: f.text,
      role: "button",
      tabIndex: 0,
      onClick: (N) => {
        N.stopPropagation(), s(f.id);
      },
      onKeyDown: (N) => {
        (N.key === "Enter" || N.key === " ") && (N.preventDefault(), N.stopPropagation(), s(f.id));
      },
      children: f.text
    }
  ) : /* @__PURE__ */ $.jsx("span", { className: d, style: f.style, title: f.text, children: f.text });
}
function rd(f, s) {
  return f.image_click ?? s;
}
function ld({
  item: f,
  selected: s,
  selectable: d,
  showCheckboxes: N,
  showHoverText: L,
  showCardInfo: H,
  thumbnailFit: V,
  cardStyle: M,
  imageClick: j,
  openInNewTab: B,
  onToggle: Z,
  onOpen: A,
  onButton: Y
}) {
  const le = rd(f, j), _e = f.open_url || f.src, X = () => {
    if (!f.disabled && le !== "none") {
      if (le === "select") {
        d && Z(f.id);
        return;
      }
      _e && B && typeof window < "u" && window.open(_e, "_blank", "noopener,noreferrer"), A(f.id, _e);
    }
  }, G = (b) => {
    f.disabled || b.target.closest("input, button") || (b.stopPropagation(), X());
  }, pe = (b) => {
    f.disabled || (b.key === "Enter" || b.key === " ") && (b.preventDefault(), X());
  }, Be = {
    ...M,
    ...f.card_style
  }, ve = !f.disabled && le !== "none", ge = le === "select" ? `${s ? "Deselect" : "Select"} ${f.label}` : le === "open" ? `Open ${f.label}` : f.label;
  return /* @__PURE__ */ $.jsxs(
    "article",
    {
      className: [
        "sig-card",
        s ? "sig-card-selected" : "",
        f.disabled ? "sig-card-disabled" : "",
        H ? "" : "sig-card-image-only"
      ].filter(Boolean).join(" "),
      style: Be,
      tabIndex: ve ? 0 : -1,
      "aria-selected": d ? s : void 0,
      "aria-disabled": f.disabled || void 0,
      onKeyDown: ve ? pe : void 0,
      children: [
        /* @__PURE__ */ $.jsxs(
          "div",
          {
            className: [
              "sig-thumb-wrap",
              s ? "sig-thumb-wrap-selected" : "",
              le === "none" ? "sig-thumb-wrap-static" : ""
            ].filter(Boolean).join(" "),
            role: ve ? "button" : void 0,
            "aria-label": ve ? ge : f.label,
            onClick: ve ? G : void 0,
            children: [
              d && N && /* @__PURE__ */ $.jsx(
                "input",
                {
                  className: "sig-check",
                  type: "checkbox",
                  checked: s,
                  disabled: f.disabled,
                  "aria-label": `Select ${f.label}`,
                  onChange: () => Z(f.id),
                  onClick: (b) => b.stopPropagation()
                }
              ),
              /* @__PURE__ */ $.jsx(
                "img",
                {
                  className: "sig-thumb",
                  src: f.src,
                  alt: f.label,
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  style: { objectFit: V }
                }
              ),
              L && f.hover_text ? /* @__PURE__ */ $.jsx("div", { className: "sig-hover-overlay", title: f.hover_text, children: f.hover_text }) : null
            ]
          }
        ),
        H ? /* @__PURE__ */ $.jsxs($.Fragment, { children: [
          /* @__PURE__ */ $.jsxs("div", { className: "sig-meta", children: [
            /* @__PURE__ */ $.jsx("div", { className: "sig-label", title: f.label, style: f.label_style, children: f.label }),
            f.caption ? /* @__PURE__ */ $.jsx(
              "div",
              {
                className: "sig-caption",
                title: f.caption,
                style: f.caption_style,
                children: f.caption
              }
            ) : null
          ] }),
          f.texts.length > 0 ? /* @__PURE__ */ $.jsx("div", { className: "sig-texts", children: f.texts.map((b) => /* @__PURE__ */ $.jsx(
            nd,
            {
              text: b,
              onClick: (me) => Y(me, f.id)
            },
            b.id
          )) }) : null,
          f.buttons.length > 0 ? /* @__PURE__ */ $.jsx("div", { className: "sig-card-actions", children: f.buttons.map((b) => /* @__PURE__ */ $.jsx(
            Va,
            {
              button: { ...b, disabled: b.disabled || f.disabled },
              onClick: (me) => Y(me, f.id)
            },
            b.id
          )) }) : null
        ] }) : null
      ]
    }
  );
}
function Ua(f, s) {
  const d = new Set(f.map(String)), N = s.filter((L) => d.has(L));
  for (const L of d)
    N.includes(L) || N.push(L);
  return N;
}
function id(f) {
  if (!Number.isFinite(f) || f < 0) return "";
  const s = ["B", "KB", "MB", "GB", "TB"];
  let d = f, N = 0;
  for (; d >= 1024 && N < s.length - 1; )
    d /= 1024, N += 1;
  return N === 0 ? `${Math.round(d)} B` : `${d.toFixed(1)} ${s[N]}`;
}
function od(f, s, d) {
  const N = new Map(s.map((j) => [j.id, j]));
  let L = 0, H = 0;
  for (const j of f) {
    const B = N.get(j);
    !B || B.size_bytes == null || (L += 1, H += B.size_bytes);
  }
  let M = `${f.length} selected`;
  return d && (M = `${M} / ${d}`), L > 0 && (M = `${M} · ${id(H)}`), M;
}
function ud({
  setStateValue: f,
  ...s
}) {
  const d = Fa(s.selected_ids), [N, L] = ue.useState(() => s.selected_ids), H = ue.useRef(0), V = ue.useRef(d), M = ue.useRef(!1), j = ue.useMemo(() => s.items.map((S) => S.id), [s.items]), B = ue.useMemo(() => j.join("\0"), [j]), Z = s.page_size > 0 ? s.page_size : 0, A = Z ? Math.max(1, Math.ceil(s.items.length / Z)) : 1, [Y, le] = ue.useState(0);
  ue.useEffect(() => {
    le((S) => Math.min(Math.max(0, S), A - 1));
  }, [A, B]);
  const _e = ue.useMemo(() => {
    if (!Z) return s.items;
    const S = Y * Z;
    return s.items.slice(S, S + Z);
  }, [s.items, Y, Z]);
  ue.useEffect(() => {
    if (d === V.current) {
      M.current = !1;
      return;
    }
    M.current || (V.current = d, L(Ua(s.selected_ids, j)));
  }, [d, s.selected_ids, j]);
  const X = ue.useCallback(
    (S) => {
      const F = Ua(S, j), Q = Fa(F);
      V.current = Q, M.current = !0, L(F), f("selected_ids", F), f("selected_csv", F.join(","));
    },
    [j, f]
  ), G = ue.useCallback(
    (S, F) => {
      H.current += 1, f("clicked_button", S), f("clicked_item", F), f("action_nonce", H.current);
    },
    [f]
  ), pe = ue.useMemo(
    () => s.items.filter((S) => !S.disabled).map((S) => S.id),
    [s.items]
  ), Be = ue.useCallback(
    (S) => {
      if (!s.selectable) return;
      const F = s.items.find((W) => W.id === S);
      if (!F || F.disabled) return;
      let Q;
      if (s.multi_select) {
        const W = new Set(N);
        W.has(S) ? W.delete(S) : W.add(S), Q = [...W];
      } else
        Q = N.includes(S) ? [] : [S];
      X(Q);
    },
    [s.items, s.multi_select, s.selectable, X, N]
  ), ve = ue.useCallback(() => {
    X([...pe]);
  }, [pe, X]), ge = ue.useCallback(() => {
    X([]);
  }, [X]), b = ue.useCallback(
    (S) => G(S, null),
    [G]
  ), me = ue.useCallback(
    (S, F) => G(S, F),
    [G]
  ), Re = ue.useCallback(
    (S, F) => G("open", S),
    [G]
  ), Pe = pe.filter(
    (S) => N.includes(S)
  ).length, Ee = pe.length > 0 && Pe === pe.length, Ye = Pe > 0 && !Ee, kt = Pe === 0, et = ue.useCallback(() => {
    Ee ? ge() : ve();
  }, [Ee, ge, ve]), Fe = ue.useCallback(() => le(0), []), Ge = ue.useCallback(() => {
    le((S) => Math.max(0, S - 1));
  }, []), tt = ue.useCallback(() => {
    le((S) => Math.min(A - 1, S + 1));
  }, [A]), je = ue.useCallback(() => {
    le(Math.max(0, A - 1));
  }, [A]), se = {
    "--sig-selection": s.selection_color,
    "--sig-accent": s.selection_color,
    ...Jf(s.button_style)
  }, _ = {
    display: "grid",
    gridTemplateColumns: `repeat(${s.columns}, minmax(0, 1fr))`,
    gap: s.gap,
    width: "100%"
  }, D = Z > 0 && s.items.length > 0, C = s.pager_position !== "bottom", p = s.items.length === 0 ? "Page 0 of 0" : `Page ${Y + 1} of ${A}`, v = D ? /* @__PURE__ */ $.jsxs("div", { className: "sig-pager", role: "navigation", "aria-label": "Board pages", children: [
    /* @__PURE__ */ $.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: Y <= 0,
        onClick: Fe,
        "aria-label": "First page",
        title: "First page",
        children: "First"
      }
    ),
    /* @__PURE__ */ $.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: Y <= 0,
        onClick: Ge,
        "aria-label": "Previous page",
        title: "Previous page",
        children: "Prev"
      }
    ),
    /* @__PURE__ */ $.jsxs("span", { className: "sig-pager-label", "aria-live": "polite", children: [
      p,
      /* @__PURE__ */ $.jsxs("span", { className: "sig-pager-range", children: [
        " ",
        "· ",
        Y * Z + 1,
        "–",
        Math.min(s.items.length, (Y + 1) * Z),
        " of",
        " ",
        s.items.length
      ] })
    ] }),
    /* @__PURE__ */ $.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: Y >= A - 1,
        onClick: tt,
        "aria-label": "Next page",
        title: "Next page",
        children: "Next"
      }
    ),
    /* @__PURE__ */ $.jsx(
      "button",
      {
        type: "button",
        className: "sig-btn",
        disabled: Y >= A - 1,
        onClick: je,
        "aria-label": "Last page",
        title: "Last page",
        children: "Last"
      }
    )
  ] }) : null;
  return /* @__PURE__ */ $.jsxs("div", { className: "sig-root", style: se, children: [
    (s.show_select_all || s.buttons.length > 0 || s.selectable) && /* @__PURE__ */ $.jsxs("div", { className: "sig-toolbar", children: [
      s.selectable ? /* @__PURE__ */ $.jsx(
        "span",
        {
          className: "sig-count",
          title: s.show_selection_stats ? "Selected file count and total size (all pages)" : void 0,
          children: s.show_selection_stats ? od(N, s.items, pe.length) : `${Pe} selected${pe.length ? ` / ${pe.length}` : ""}`
        }
      ) : /* @__PURE__ */ $.jsxs("span", { className: "sig-count", children: [
        s.items.length,
        " images"
      ] }),
      s.show_select_all ? /* @__PURE__ */ $.jsxs("div", { className: "sig-select-all", children: [
        /* @__PURE__ */ $.jsxs(
          "button",
          {
            type: "button",
            className: [
              "sig-select-all-master",
              Ee ? "sig-select-all-master-on" : "",
              Ye ? "sig-select-all-master-partial" : ""
            ].filter(Boolean).join(" "),
            disabled: pe.length === 0,
            "aria-pressed": Ee,
            "aria-label": Ee ? "Deselect all" : "Select all",
            title: Ee ? "Deselect all pages" : Ye ? "Select remaining (all pages)" : "Select all (all pages)",
            onClick: et,
            children: [
              /* @__PURE__ */ $.jsx(
                "span",
                {
                  className: "sig-select-all-box",
                  "aria-hidden": "true",
                  "data-state": Ee ? "all" : Ye ? "some" : "none"
                }
              ),
              /* @__PURE__ */ $.jsx("span", { children: "All" })
            ]
          }
        ),
        /* @__PURE__ */ $.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: Ee || pe.length === 0,
            onClick: ve,
            title: "Select every item across all pages",
            children: "Select all"
          }
        ),
        /* @__PURE__ */ $.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: kt,
            onClick: ge,
            title: "Clear selection on all pages",
            children: "Deselect all"
          }
        )
      ] }) : null,
      s.buttons.map((S) => /* @__PURE__ */ $.jsx(Va, { button: S, onClick: b }, S.id))
    ] }),
    C ? v : null,
    /* @__PURE__ */ $.jsx(
      "div",
      {
        className: D ? "sig-page" : "sig-scroll",
        style: D ? void 0 : { maxHeight: s.max_height },
        children: s.items.length === 0 ? /* @__PURE__ */ $.jsx("div", { className: "sig-empty", children: s.empty_message }) : /* @__PURE__ */ $.jsx("div", { className: "sig-grid", style: _, children: _e.map((S) => /* @__PURE__ */ $.jsx(
          ld,
          {
            item: S,
            selected: N.includes(S.id),
            selectable: s.selectable,
            showCheckboxes: s.show_checkboxes,
            showHoverText: s.show_hover_text,
            showCardInfo: s.show_card_info,
            thumbnailFit: s.thumbnail_fit,
            cardStyle: s.card_style,
            imageClick: s.image_click,
            openInNewTab: s.open_in_new_tab,
            onToggle: Be,
            onOpen: Re,
            onButton: me
          },
          S.id
        )) })
      }
    ),
    C ? null : v
  ] });
}
const sd = '.sig-root{--sig-bg: transparent;--sig-surface: rgba(15, 23, 42, .04);--sig-surface-hover: rgba(15, 23, 42, .08);--sig-border: rgba(15, 23, 42, .12);--sig-text: #0f172a;--sig-muted: #64748b;--sig-accent: #0f766e;--sig-accent-soft: rgba(15, 118, 110, .14);--sig-selection: var(--sig-accent);--sig-danger: #b91c1c;--sig-danger-soft: rgba(185, 28, 28, .12);--sig-radius: 10px;--sig-shadow: 0 1px 2px rgba(15, 23, 42, .06);box-sizing:border-box;color:var(--sig-text);font-family:Segoe UI,ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.35;width:100%;height:100%;display:flex;flex-direction:column;gap:10px;padding:2px;background:var(--sig-bg);-webkit-user-select:none;user-select:none}.sig-root *,.sig-root *:before,.sig-root *:after{box-sizing:border-box}.sig-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:32px;flex:0 0 auto}.sig-count{color:var(--sig-muted);font-variant-numeric:tabular-nums;margin-right:auto;font-weight:600;letter-spacing:.01em}.sig-select-all{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px}.sig-select-all-master{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--sig-border);border-radius:8px;background:#fff;box-shadow:var(--sig-shadow);cursor:pointer;font:inherit;font-weight:650;color:var(--sig-text)}.sig-select-all-master:disabled{opacity:.45;cursor:not-allowed}.sig-select-all-master-on{border-color:var(--sig-selection, var(--sig-accent));background:color-mix(in srgb,var(--sig-selection, var(--sig-accent)) 12%,#fff)}.sig-select-all-box{width:16px;height:16px;border:2px solid var(--sig-border);border-radius:4px;display:inline-block;position:relative;flex:0 0 auto;background:#fff}.sig-select-all-master-on .sig-select-all-box,.sig-select-all-box[data-state=all]{border-color:var(--sig-selection, var(--sig-accent));background:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=all]:after{content:"";position:absolute;left:3px;top:0;width:5px;height:9px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.sig-select-all-box[data-state=some]{border-color:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=some]:after{content:"";position:absolute;left:2px;right:2px;top:6px;height:2px;background:var(--sig-selection, var(--sig-accent));border-radius:1px}.sig-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--sig-btn-border-width, 1px) var(--sig-btn-border-style, solid) var(--sig-btn-border, var(--sig-border));background:var(--sig-btn-bg, #fff);color:var(--sig-btn-fg, var(--sig-text));border-radius:var(--sig-btn-radius, 8px);padding:var(--sig-btn-padding, 6px 10px);font:inherit;font-family:var(--sig-btn-font-family, inherit);font-size:var(--sig-btn-font-size, inherit);font-weight:var(--sig-btn-font-weight, 600);cursor:pointer;transition:background .12s ease,border-color .12s ease,transform 80ms ease,box-shadow .12s ease;box-shadow:var(--sig-btn-shadow, var(--sig-shadow))}.sig-btn-sm{padding:3px 8px;font-size:12px;border-radius:calc(var(--sig-btn-radius, 8px) * .75)}.sig-btn-lg{padding:9px 16px;font-size:15px}.sig-btn:hover:not(:disabled){filter:brightness(.97)}.sig-btn:active:not(:disabled){transform:translateY(1px)}.sig-btn:disabled{opacity:.45;cursor:not-allowed}.sig-btn-primary{background:var(--sig-btn-primary-bg, var(--sig-accent));border-color:transparent;color:var(--sig-btn-primary-fg, #fff)}.sig-btn-primary:hover:not(:disabled){filter:brightness(1.05)}.sig-btn-danger{background:var(--sig-btn-danger-bg, var(--sig-danger-soft));border-color:transparent;color:var(--sig-btn-danger-fg, var(--sig-danger))}.sig-btn-danger:hover:not(:disabled){filter:brightness(.96)}.sig-btn-ghost{background:transparent;box-shadow:none;border-color:transparent}.sig-scroll{flex:1 1 auto;min-height:0;overflow:auto;padding-right:2px;scrollbar-gutter:stable}.sig-page{flex:1 1 auto;overflow:visible;min-height:0}.sig-pager{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;flex:0 0 auto;padding-top:2px}.sig-pager-label{color:var(--sig-muted);font-variant-numeric:tabular-nums;font-weight:600;min-width:10ch;text-align:center}.sig-pager-range{font-weight:500;opacity:.9}.sig-grid{display:grid!important;width:100%;align-content:start;grid-auto-rows:auto}.sig-empty{color:var(--sig-muted);padding:24px 8px;text-align:center}.sig-card{--sig-card-fg: var(--sig-text);position:relative;display:flex;flex-direction:column;border:1px solid var(--sig-border);border-radius:var(--sig-radius);background:#fff;color:var(--sig-card-fg);overflow:hidden;box-shadow:var(--sig-shadow);transition:border-color .14s ease,box-shadow .14s ease,transform .14s ease;outline:none}.sig-card:hover{border-color:#0f766e59;box-shadow:0 6px 18px #0f172a14;transform:translateY(-1px)}.sig-card:focus-visible{border-color:var(--sig-accent);box-shadow:0 0 0 3px var(--sig-accent-soft)}.sig-card-selected{border-color:var(--sig-selection);box-shadow:0 0 0 2px color-mix(in srgb,var(--sig-selection) 22%,transparent)}.sig-card-image-only .sig-thumb-wrap{border-radius:inherit}.sig-card-disabled{opacity:.55;filter:grayscale(.15)}.sig-thumb-wrap{position:relative;aspect-ratio:1 / 1;background:var(--sig-surface);overflow:hidden;cursor:pointer;box-shadow:inset 0 0 0 0 transparent;transition:box-shadow .14s ease}.sig-thumb-wrap-static{cursor:default}.sig-thumb-wrap-selected{box-shadow:inset 0 0 0 4px var(--sig-selection)}.sig-thumb-wrap-selected:after{content:"";position:absolute;top:4px;right:4px;bottom:4px;left:4px;border:1px solid rgba(255,255,255,.55);pointer-events:none;z-index:1}.sig-thumb{width:100%;height:100%;display:block;object-fit:cover;transition:transform .18s ease}.sig-card:hover .sig-thumb{transform:scale(1.03)}.sig-hover-overlay{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:28px 10px 10px;color:#fff;font-weight:650;font-size:12px;line-height:1.3;background:linear-gradient(to top,rgba(15,23,42,.82) 0%,rgba(15,23,42,.35) 55%,transparent 100%);opacity:0;transform:translateY(4px);transition:opacity .14s ease,transform .14s ease;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-thumb-wrap:hover .sig-hover-overlay,.sig-thumb-wrap:focus-within .sig-hover-overlay{opacity:1;transform:translateY(0)}.sig-check{position:absolute;top:8px;left:8px;z-index:3;width:22px;height:22px;margin:0;accent-color:var(--sig-selection);cursor:pointer;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.sig-meta{display:flex;flex-direction:column;gap:2px;padding:8px 10px 10px;min-width:0}.sig-label{font-weight:650;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-caption{color:color-mix(in srgb,currentColor 62%,transparent);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-card-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 10px}.sig-card-actions .sig-btn{padding:4px 8px;font-size:12px;font-weight:600}.sig-texts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 8px}.sig-text{display:inline-block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.sig-text-muted{color:var(--sig-muted);font-size:12px}.sig-text-accent{color:var(--sig-accent);font-weight:650}.sig-text-danger{color:var(--sig-danger);font-weight:650}.sig-text-badge{color:#fff;background:var(--sig-accent);border-radius:999px;padding:2px 8px;font-size:11px;font-weight:700;letter-spacing:.02em}.sig-text-clickable{cursor:pointer}.sig-text-clickable:hover{text-decoration:underline}.sig-text-clickable:focus-visible{outline:2px solid var(--sig-accent);outline-offset:2px;border-radius:4px}', Aa = "streamlit-image-board-styles";
function ad(f) {
  var L;
  if (typeof document > "u") return;
  const s = f && "getRootNode" in f ? f.getRootNode() : f ?? document, d = s instanceof ShadowRoot ? s : s instanceof Document ? s.head : document.head;
  if ((L = d.querySelector) != null && L.call(d, `#${Aa}`))
    return;
  const N = document.createElement("style");
  N.id = Aa, N.textContent = sd, d.appendChild(N);
}
const Rl = /* @__PURE__ */ new WeakMap();
function cd(f, s, d) {
  let N = Ia(s), L = {
    selected_ids: [...N.selected_ids],
    selected_csv: N.selected_ids.join(","),
    clicked_button: null,
    clicked_item: null,
    action_nonce: 0
  };
  const H = (M, j) => {
    if (M === "selected_ids") {
      const B = Array.isArray(j) ? j.map(String) : [];
      L = {
        ...L,
        selected_ids: B,
        selected_csv: B.join(",")
      };
    } else M === "selected_csv" ? L = {
      ...L,
      selected_csv: typeof j == "string" ? j : ""
    } : M === "clicked_button" ? L = {
      ...L,
      clicked_button: typeof j == "string" ? j : null
    } : M === "clicked_item" ? L = {
      ...L,
      clicked_item: typeof j == "string" ? j : null
    } : M === "action_nonce" && (L = {
      ...L,
      action_nonce: typeof j == "number" ? j : 0
    });
    d == null || d(L);
  }, V = () => {
    ad(f);
    let M = Rl.get(f);
    M || (M = Gf.createRoot(f), Rl.set(f, M)), M.render(
      /* @__PURE__ */ $.jsx(ue.StrictMode, { children: /* @__PURE__ */ $.jsx(ud, { ...N, setStateValue: H }) })
    );
  };
  return V(), {
    update(M) {
      N = Ia({ ...N, ...M }), V();
    },
    destroy() {
      const M = Rl.get(f);
      M && (M.unmount(), Rl.delete(f)), f instanceof HTMLElement && f.replaceChildren();
    }
  };
}
const jl = /* @__PURE__ */ new WeakMap(), fd = (f) => {
  const { data: s, parentElement: d, setStateValue: N } = f, L = d.querySelector(".react-root");
  if (!L)
    throw new Error("Unexpected: React root element not found");
  let H = jl.get(d);
  if (H)
    H.setStateValue = N, H.controller.update(s);
  else {
    const V = {
      setStateValue: N,
      controller: null
    };
    V.controller = cd(L, s, (M) => {
      V.setStateValue("selected_ids", M.selected_ids), V.setStateValue("selected_csv", M.selected_csv), V.setStateValue("clicked_button", M.clicked_button), V.setStateValue("clicked_item", M.clicked_item), V.setStateValue("action_nonce", M.action_nonce);
    }), jl.set(d, V), H = V;
  }
  return () => {
    const V = jl.get(d);
    V && (V.controller.destroy(), jl.delete(d));
  };
};
export {
  fd as default
};
