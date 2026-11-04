var zo = { exports: {} }, wr = {}, Po = { exports: {} }, H = {};
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
  if (za) return H;
  za = 1;
  var p = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), U = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), A = Symbol.iterator;
  function K(f) {
    return f === null || typeof f != "object" ? null : (f = A && f[A] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _e = Object.assign, Y = {};
  function Q(f, v, $) {
    this.props = f, this.context = v, this.refs = Y, this.updater = $ || ae;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(f, v) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, v, "setState");
  }, Q.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = Q.prototype;
  function Be(f, v, $) {
    this.props = f, this.context = v, this.refs = Y, this.updater = $ || ae;
  }
  var ve = Be.prototype = new pe();
  ve.constructor = Be, _e(ve, Q.prototype), ve.isPureReactComponent = !0;
  var me = Array.isArray, b = Object.prototype.hasOwnProperty, ge = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(f, v, $) {
    var W, Z = {}, J = null, re = null;
    if (v != null) for (W in v.ref !== void 0 && (re = v.ref), v.key !== void 0 && (J = "" + v.key), v) b.call(v, W) && !Le.hasOwnProperty(W) && (Z[W] = v[W]);
    var ee = arguments.length - 2;
    if (ee === 1) Z.children = $;
    else if (1 < ee) {
      for (var ue = Array(ee), Xe = 0; Xe < ee; Xe++) ue[Xe] = arguments[Xe + 2];
      Z.children = ue;
    }
    if (f && f.defaultProps) for (W in ee = f.defaultProps, ee) Z[W] === void 0 && (Z[W] = ee[W]);
    return { $$typeof: p, type: f, key: J, ref: re, props: Z, _owner: ge.current };
  }
  function Ee(f, v) {
    return { $$typeof: p, type: f.type, key: v, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ye(f) {
    return typeof f == "object" && f !== null && f.$$typeof === p;
  }
  function kt(f) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function($) {
      return v[$];
    });
  }
  var et = /\/+/g;
  function Fe(f, v) {
    return typeof f == "object" && f !== null && f.key != null ? kt("" + f.key) : v.toString(36);
  }
  function Ge(f, v, $, W, Z) {
    var J = typeof f;
    (J === "undefined" || J === "boolean") && (f = null);
    var re = !1;
    if (f === null) re = !0;
    else switch (J) {
      case "string":
      case "number":
        re = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case p:
          case s:
            re = !0;
        }
    }
    if (re) return re = f, Z = Z(re), f = W === "" ? "." + Fe(re, 0) : W, me(Z) ? ($ = "", f != null && ($ = f.replace(et, "$&/") + "/"), Ge(Z, v, $, "", function(Xe) {
      return Xe;
    })) : Z != null && (Ye(Z) && (Z = Ee(Z, $ + (!Z.key || re && re.key === Z.key ? "" : ("" + Z.key).replace(et, "$&/") + "/") + f)), v.push(Z)), 1;
    if (re = 0, W = W === "" ? "." : W + ":", me(f)) for (var ee = 0; ee < f.length; ee++) {
      J = f[ee];
      var ue = W + Fe(J, ee);
      re += Ge(J, v, $, ue, Z);
    }
    else if (ue = K(f), typeof ue == "function") for (f = ue.call(f), ee = 0; !(J = f.next()).done; ) J = J.value, ue = W + Fe(J, ee++), re += Ge(J, v, $, ue, Z);
    else if (J === "object") throw v = String(f), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return re;
  }
  function tt(f, v, $) {
    if (f == null) return f;
    var W = [], Z = 0;
    return Ge(f, W, "", "", function(J) {
      return v.call($, J, Z++);
    }), W;
  }
  function je(f) {
    if (f._status === -1) {
      var v = f._result;
      v = v(), v.then(function($) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = $);
      }, function($) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = $);
      }), f._status === -1 && (f._status = 0, f._result = v);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ne = { current: null }, E = { transition: null }, x = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: E, ReactCurrentOwner: ge };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return H.Children = { map: tt, forEach: function(f, v, $) {
    tt(f, function() {
      v.apply(this, arguments);
    }, $);
  }, count: function(f) {
    var v = 0;
    return tt(f, function() {
      v++;
    }), v;
  }, toArray: function(f) {
    return tt(f, function(v) {
      return v;
    }) || [];
  }, only: function(f) {
    if (!Ye(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, H.Component = Q, H.Fragment = d, H.Profiler = M, H.PureComponent = Be, H.StrictMode = T, H.Suspense = L, H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x, H.act = _, H.cloneElement = function(f, v, $) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var W = _e({}, f.props), Z = f.key, J = f.ref, re = f._owner;
    if (v != null) {
      if (v.ref !== void 0 && (J = v.ref, re = ge.current), v.key !== void 0 && (Z = "" + v.key), f.type && f.type.defaultProps) var ee = f.type.defaultProps;
      for (ue in v) b.call(v, ue) && !Le.hasOwnProperty(ue) && (W[ue] = v[ue] === void 0 && ee !== void 0 ? ee[ue] : v[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1) W.children = $;
    else if (1 < ue) {
      ee = Array(ue);
      for (var Xe = 0; Xe < ue; Xe++) ee[Xe] = arguments[Xe + 2];
      W.children = ee;
    }
    return { $$typeof: p, type: f.type, key: Z, ref: J, props: W, _owner: re };
  }, H.createContext = function(f) {
    return f = { $$typeof: U, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: B, _context: f }, f.Consumer = f;
  }, H.createElement = Pe, H.createFactory = function(f) {
    var v = Pe.bind(null, f);
    return v.type = f, v;
  }, H.createRef = function() {
    return { current: null };
  }, H.forwardRef = function(f) {
    return { $$typeof: j, render: f };
  }, H.isValidElement = Ye, H.lazy = function(f) {
    return { $$typeof: G, _payload: { _status: -1, _result: f }, _init: je };
  }, H.memo = function(f, v) {
    return { $$typeof: F, type: f, compare: v === void 0 ? null : v };
  }, H.startTransition = function(f) {
    var v = E.transition;
    E.transition = {};
    try {
      f();
    } finally {
      E.transition = v;
    }
  }, H.unstable_act = _, H.useCallback = function(f, v) {
    return ne.current.useCallback(f, v);
  }, H.useContext = function(f) {
    return ne.current.useContext(f);
  }, H.useDebugValue = function() {
  }, H.useDeferredValue = function(f) {
    return ne.current.useDeferredValue(f);
  }, H.useEffect = function(f, v) {
    return ne.current.useEffect(f, v);
  }, H.useId = function() {
    return ne.current.useId();
  }, H.useImperativeHandle = function(f, v, $) {
    return ne.current.useImperativeHandle(f, v, $);
  }, H.useInsertionEffect = function(f, v) {
    return ne.current.useInsertionEffect(f, v);
  }, H.useLayoutEffect = function(f, v) {
    return ne.current.useLayoutEffect(f, v);
  }, H.useMemo = function(f, v) {
    return ne.current.useMemo(f, v);
  }, H.useReducer = function(f, v, $) {
    return ne.current.useReducer(f, v, $);
  }, H.useRef = function(f) {
    return ne.current.useRef(f);
  }, H.useState = function(f) {
    return ne.current.useState(f);
  }, H.useSyncExternalStore = function(f, v, $) {
    return ne.current.useSyncExternalStore(f, v, $);
  }, H.useTransition = function() {
    return ne.current.useTransition();
  }, H.version = "18.3.1", H;
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
  var p = jo(), s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, M = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(j, L, F) {
    var G, A = {}, K = null, ae = null;
    F !== void 0 && (K = "" + F), L.key !== void 0 && (K = "" + L.key), L.ref !== void 0 && (ae = L.ref);
    for (G in L) T.call(L, G) && !B.hasOwnProperty(G) && (A[G] = L[G]);
    if (j && j.defaultProps) for (G in L = j.defaultProps, L) A[G] === void 0 && (A[G] = L[G]);
    return { $$typeof: s, type: j, key: K, ref: ae, props: A, _owner: M.current };
  }
  return wr.Fragment = d, wr.jsx = U, wr.jsxs = U, wr;
}
var Ra;
function Vf() {
  return Ra || (Ra = 1, zo.exports = $f()), zo.exports;
}
var V = Vf(), de = jo(), Rl = {}, To = { exports: {} }, Ke = {}, Ro = { exports: {} }, Lo = {};
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
  return La || (La = 1, (function(p) {
    function s(E, x) {
      var _ = E.length;
      E.push(x);
      e: for (; 0 < _; ) {
        var f = _ - 1 >>> 1, v = E[f];
        if (0 < M(v, x)) E[f] = x, E[_] = v, _ = f;
        else break e;
      }
    }
    function d(E) {
      return E.length === 0 ? null : E[0];
    }
    function T(E) {
      if (E.length === 0) return null;
      var x = E[0], _ = E.pop();
      if (_ !== x) {
        E[0] = _;
        e: for (var f = 0, v = E.length, $ = v >>> 1; f < $; ) {
          var W = 2 * (f + 1) - 1, Z = E[W], J = W + 1, re = E[J];
          if (0 > M(Z, _)) J < v && 0 > M(re, Z) ? (E[f] = re, E[J] = _, f = J) : (E[f] = Z, E[W] = _, f = W);
          else if (J < v && 0 > M(re, _)) E[f] = re, E[J] = _, f = J;
          else break e;
        }
      }
      return x;
    }
    function M(E, x) {
      var _ = E.sortIndex - x.sortIndex;
      return _ !== 0 ? _ : E.id - x.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      p.unstable_now = function() {
        return B.now();
      };
    } else {
      var U = Date, j = U.now();
      p.unstable_now = function() {
        return U.now() - j;
      };
    }
    var L = [], F = [], G = 1, A = null, K = 3, ae = !1, _e = !1, Y = !1, Q = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ve(E) {
      for (var x = d(F); x !== null; ) {
        if (x.callback === null) T(F);
        else if (x.startTime <= E) T(F), x.sortIndex = x.expirationTime, s(L, x);
        else break;
        x = d(F);
      }
    }
    function me(E) {
      if (Y = !1, ve(E), !_e) if (d(L) !== null) _e = !0, je(b);
      else {
        var x = d(F);
        x !== null && ne(me, x.startTime - E);
      }
    }
    function b(E, x) {
      _e = !1, Y && (Y = !1, pe(Pe), Pe = -1), ae = !0;
      var _ = K;
      try {
        for (ve(x), A = d(L); A !== null && (!(A.expirationTime > x) || E && !kt()); ) {
          var f = A.callback;
          if (typeof f == "function") {
            A.callback = null, K = A.priorityLevel;
            var v = f(A.expirationTime <= x);
            x = p.unstable_now(), typeof v == "function" ? A.callback = v : A === d(L) && T(L), ve(x);
          } else T(L);
          A = d(L);
        }
        if (A !== null) var $ = !0;
        else {
          var W = d(F);
          W !== null && ne(me, W.startTime - x), $ = !1;
        }
        return $;
      } finally {
        A = null, K = _, ae = !1;
      }
    }
    var ge = !1, Le = null, Pe = -1, Ee = 5, Ye = -1;
    function kt() {
      return !(p.unstable_now() - Ye < Ee);
    }
    function et() {
      if (Le !== null) {
        var E = p.unstable_now();
        Ye = E;
        var x = !0;
        try {
          x = Le(!0, E);
        } finally {
          x ? Fe() : (ge = !1, Le = null);
        }
      } else ge = !1;
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
      Q(et, 0);
    };
    function je(E) {
      Le = E, ge || (ge = !0, Fe());
    }
    function ne(E, x) {
      Pe = Q(function() {
        E(p.unstable_now());
      }, x);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, p.unstable_continueExecution = function() {
      _e || ae || (_e = !0, je(b));
    }, p.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ee = 0 < E ? Math.floor(1e3 / E) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, p.unstable_getFirstCallbackNode = function() {
      return d(L);
    }, p.unstable_next = function(E) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = K;
      }
      var _ = K;
      K = x;
      try {
        return E();
      } finally {
        K = _;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(E, x) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var _ = K;
      K = E;
      try {
        return x();
      } finally {
        K = _;
      }
    }, p.unstable_scheduleCallback = function(E, x, _) {
      var f = p.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? f + _ : f) : _ = f, E) {
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
      return v = _ + v, E = { id: G++, callback: x, priorityLevel: E, startTime: _, expirationTime: v, sortIndex: -1 }, _ > f ? (E.sortIndex = _, s(F, E), d(L) === null && E === d(F) && (Y ? (pe(Pe), Pe = -1) : Y = !0, ne(me, _ - f))) : (E.sortIndex = v, s(L, E), _e || ae || (_e = !0, je(b))), E;
    }, p.unstable_shouldYield = kt, p.unstable_wrapCallback = function(E) {
      var x = K;
      return function() {
        var _ = K;
        K = x;
        try {
          return E.apply(this, arguments);
        } finally {
          K = _;
        }
      };
    };
  })(Lo)), Lo;
}
var ja;
function Wf() {
  return ja || (ja = 1, Ro.exports = Hf()), Ro.exports;
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
  var p = jo(), s = Wf();
  function d(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var T = /* @__PURE__ */ new Set(), M = {};
  function B(e, t) {
    U(e, t), U(e + "Capture", t);
  }
  function U(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) T.add(t[e]);
  }
  var j = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, G = {}, A = {};
  function K(e) {
    return L.call(A, e) ? !0 : L.call(G, e) ? !1 : F.test(e) ? A[e] = !0 : (G[e] = !0, !1);
  }
  function ae(e, t, n, r) {
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
    if (t === null || typeof t > "u" || ae(e, t, n, r)) return !0;
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
  function Y(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Q[e] = new Y(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Q[t] = new Y(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Q[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Q[e] = new Y(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Q[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Q[e] = new Y(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Q[e] = new Y(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Q[e] = new Y(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Q[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    Q[t] = new Y(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(pe, Be);
    Q[t] = new Y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(pe, Be);
    Q[t] = new Y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Q[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Q.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Q[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ve(e, t, n, r) {
    var l = Q.hasOwnProperty(t) ? Q[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_e(t, n, l, r) && (n = null), r || l === null ? K(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var me = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), ge = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), Ye = Symbol.for("react.provider"), kt = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), E = Symbol.iterator;
  function x(e) {
    return e === null || typeof e != "object" ? null : (e = E && e[E] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, f;
  function v(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
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
  function Z(e) {
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
  function J(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case ge:
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
        return t = e.displayName || null, t !== null ? t : J(e.type) || "Memo";
      case je:
        t = e._payload, e = e._init;
        try {
          return J(e(t));
        } catch {
        }
    }
    return null;
  }
  function re(e) {
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
        return J(t);
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
  function ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xe(e) {
    var t = ue(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    return e && (r = ue(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Do(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Io(e, t) {
    t = t.checked, t != null && ve(e, "checked", t, !1);
  }
  function Dl(e, t) {
    Io(e, t);
    var n = ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Oo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Dn = Array.isArray;
  function sn(e, t, n, r) {
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
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
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
  Object.keys(On).forEach(function(e) {
    Ha.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Wa = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Vl = null, an = null, cn = null;
  function Wo(e) {
    if (e = lr(e)) {
      if (typeof Vl != "function") throw Error(d(280));
      var t = e.stateNode;
      t && (t = Qr(t), Vl(e.stateNode, e.type, t));
    }
  }
  function Qo(e) {
    an ? cn ? cn.push(e) : cn = [e] : an = e;
  }
  function Ko() {
    if (an) {
      var e = an, t = cn;
      if (cn = an = null, Wo(e), t) for (e = 0; e < t.length; e++) Wo(t[e]);
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
      Hl = !1, (an !== null || cn !== null) && (Go(), Ko());
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
  if (j) try {
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
  function Zo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Jo(e) {
    if (Gt(e) !== e) throw Error(d(188));
  }
  function Xa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Gt(e), t === null) throw Error(d(188));
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
  var eu = s.unstable_scheduleCallback, tu = s.unstable_cancelCallback, Za = s.unstable_shouldYield, Ja = s.unstable_requestPaint, ye = s.unstable_now, qa = s.unstable_getCurrentPriorityLevel, Kl = s.unstable_ImmediatePriority, nu = s.unstable_UserBlockingPriority, Cr = s.unstable_NormalPriority, ba = s.unstable_LowPriority, ru = s.unstable_IdlePriority, Nr = null, gt = null;
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
  var ou, Zl, uu, su, au, Jl = !1, Rr = [], Tt = null, Rt = null, Lt = null, Vn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), jt = [], uc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        return Rt = Wn(Rt, e, t, n, r, l), !0;
      case "mouseover":
        return Lt = Wn(Lt, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Vn.set(i, Wn(Vn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Hn.set(i, Wn(Hn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function fu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Gt(t);
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
    Jl = !1, Tt !== null && Lr(Tt) && (Tt = null), Rt !== null && Lr(Rt) && (Rt = null), Lt !== null && Lr(Lt) && (Lt = null), Vn.forEach(du), Hn.forEach(du);
  }
  function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, ac)));
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
    for (Tt !== null && Qn(Tt, e), Rt !== null && Qn(Rt, e), Lt !== null && Qn(Lt, e), Vn.forEach(t), Hn.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null); ) fu(n), n.blockedOn === null && jt.shift();
  }
  var fn = me.ReactCurrentBatchConfig, jr = !0;
  function cc(e, t, n, r) {
    var l = te, i = fn.transition;
    fn.transition = null;
    try {
      te = 1, ql(e, t, n, r);
    } finally {
      te = l, fn.transition = i;
    }
  }
  function fc(e, t, n, r) {
    var l = te, i = fn.transition;
    fn.transition = null;
    try {
      te = 4, ql(e, t, n, r);
    } finally {
      te = l, fn.transition = i;
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
    if (Mr = null, e = $l(r), e = Xt(e), e !== null) if (t = Gt(e), t === null) e = null;
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
  function mu() {
    if (Dr) return Dr;
    var e, t = ei, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Dr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ir(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Or() {
    return !0;
  }
  function gu() {
    return !1;
  }
  function Ze(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Or : gu, this.isPropagationStopped = gu, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Or);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Or);
    }, persist: function() {
    }, isPersistent: Or }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ti = Ze(dn), Yn = _({}, dn, { view: 0, detail: 0 }), dc = Ze(Yn), ni, ri, Gn, Fr = _({}, Yn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ii, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (ni = e.screenX - Gn.screenX, ri = e.screenY - Gn.screenY) : ri = ni = 0, Gn = e), ni);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ri;
  } }), hu = Ze(Fr), pc = _({}, Fr, { dataTransfer: 0 }), mc = Ze(pc), gc = _({}, Yn, { relatedTarget: 0 }), li = Ze(gc), hc = _({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vc = Ze(hc), yc = _({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wc = Ze(yc), kc = _({}, dn, { data: 0 }), vu = Ze(kc), xc = {
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
  var Cc = _({}, Yn, { key: function(e) {
    if (e.key) {
      var t = xc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ii, charCode: function(e) {
    return e.type === "keypress" ? Ir(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nc = Ze(Cc), zc = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = Ze(zc), Pc = _({}, Yn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ii }), Tc = Ze(Pc), Rc = _({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lc = Ze(Rc), jc = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mc = Ze(jc), Dc = [9, 13, 27, 32], oi = j && "CompositionEvent" in window, Xn = null;
  j && "documentMode" in document && (Xn = document.documentMode);
  var Ic = j && "TextEvent" in window && !Xn, wu = j && (!oi || Xn && 8 < Xn && 11 >= Xn), ku = " ", xu = !1;
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
  var pn = !1;
  function Oc(e, t) {
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
    if (pn) return e === "compositionend" || !oi && Su(e, t) ? (e = mu(), Dr = ei = Mt = null, pn = !1, e) : null;
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
    var t = yn(e);
    if (Mo(t)) return e;
  }
  function Bc(e, t) {
    if (e === "change") return t;
  }
  var Nu = !1;
  if (j) {
    var ui;
    if (j) {
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
      if (!L.call(t, l) || !at(e[l], t[l])) return !1;
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
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Lu(n, i);
          var o = Lu(
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
  var Yc = j && "documentMode" in document && 11 >= document.documentMode, mn = null, ci = null, bn = null, fi = !1;
  function Du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi || mn == null || mn !== xr(r) || (r = mn, "selectionStart" in r && ai(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bn && qn(bn, r) || (bn = r, r = Vr(ci, "onSelect"), 0 < r.length && (t = new ti("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var gn = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, di = {}, Iu = {};
  j && (Iu = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
  function Br(e) {
    if (di[e]) return di[e];
    if (!gn[e]) return e;
    var t = gn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Iu) return di[e] = t[n];
    return e;
  }
  var Ou = Br("animationend"), Fu = Br("animationiteration"), Uu = Br("animationstart"), Au = Br("transitionend"), Bu = /* @__PURE__ */ new Map(), $u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dt(e, t) {
    Bu.set(e, t), B(t, [e]);
  }
  for (var pi = 0; pi < $u.length; pi++) {
    var mi = $u[pi], Gc = mi.toLowerCase(), Xc = mi[0].toUpperCase() + mi.slice(1);
    Dt(Gc, "on" + Xc);
  }
  Dt(Ou, "onAnimationEnd"), Dt(Fu, "onAnimationIteration"), Dt(Uu, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Au, "onTransitionEnd"), U("onMouseEnter", ["mouseout", "mouseover"]), U("onMouseLeave", ["mouseout", "mouseover"]), U("onPointerEnter", ["pointerout", "pointerover"]), U("onPointerLeave", ["pointerout", "pointerover"]), B("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), B("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), B("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), B("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), B("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), B("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
  function gi(e, t, n) {
    var r = 0;
    t && (r |= 4), Wu(n, e, r, t);
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[$r]) {
      e[$r] = !0, T.forEach(function(n) {
        n !== "selectionchange" && (Zc.has(n) || gi(n, !1, e), gi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || (t[$r] = !0, gi("selectionchange", !1, t));
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
          if (o = Xt(u), o === null) return;
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
          var C = ti, z = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Nc;
              break;
            case "focusin":
              z = "focus", C = li;
              break;
            case "focusout":
              z = "blur", C = li;
              break;
            case "beforeblur":
            case "afterblur":
              C = li;
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
              C = Tc;
              break;
            case Ou:
            case Fu:
            case Uu:
              C = vc;
              break;
            case Au:
              C = Lc;
              break;
            case "scroll":
              C = dc;
              break;
            case "wheel":
              C = Mc;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = wc;
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
          var P = (t & 4) !== 0, we = !P && e === "scroll", m = P ? y !== null ? y + "Capture" : null : y;
          P = [];
          for (var c = h, g; c !== null; ) {
            g = c;
            var S = g.stateNode;
            if (g.tag === 5 && S !== null && (g = S, m !== null && (S = Fn(c, m), S != null && P.push(nr(c, S, g)))), we) break;
            c = c.return;
          }
          0 < P.length && (y = new C(y, z, null, n, w), k.push({ event: y, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Bl && (z = n.relatedTarget || n.fromElement) && (Xt(z) || z[xt])) break e;
          if ((C || y) && (y = w.window === w ? w : (y = w.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (z = n.relatedTarget || n.toElement, C = h, z = z ? Xt(z) : null, z !== null && (we = Gt(z), z !== we || z.tag !== 5 && z.tag !== 6) && (z = null)) : (C = null, z = h), C !== z)) {
            if (P = hu, S = "onMouseLeave", m = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (P = yu, S = "onPointerLeave", m = "onPointerEnter", c = "pointer"), we = C == null ? y : yn(C), g = z == null ? y : yn(z), y = new P(S, c + "leave", C, n, w), y.target = we, y.relatedTarget = g, S = null, Xt(w) === h && (P = new P(m, c + "enter", z, n, w), P.target = g, P.relatedTarget = we, S = P), we = S, C && z) t: {
              for (P = C, m = z, c = 0, g = P; g; g = hn(g)) c++;
              for (g = 0, S = m; S; S = hn(S)) g++;
              for (; 0 < c - g; ) P = hn(P), c--;
              for (; 0 < g - c; ) m = hn(m), g--;
              for (; c--; ) {
                if (P === m || m !== null && P === m.alternate) break t;
                P = hn(P), m = hn(m);
              }
              P = null;
            }
            else P = null;
            C !== null && Qu(k, y, C, P, !1), z !== null && we !== null && Qu(k, we, z, P, !0);
          }
        }
        e: {
          if (y = h ? yn(h) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var R = Bc;
          else if (Eu(y)) if (Nu) R = Wc;
          else {
            R = Vc;
            var D = $c;
          }
          else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (R = Hc);
          if (R && (R = R(e, h))) {
            Cu(k, R, n, w);
            break e;
          }
          D && D(e, y, h), e === "focusout" && (D = y._wrapperState) && D.controlled && y.type === "number" && Il(y, "number", y.value);
        }
        switch (D = h ? yn(h) : window, e) {
          case "focusin":
            (Eu(D) || D.contentEditable === "true") && (mn = D, ci = h, bn = null);
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
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
        else pn ? Su(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        O && (wu && n.locale !== "ko" && (pn || O !== "onCompositionStart" ? O === "onCompositionEnd" && pn && (I = mu()) : (Mt = w, ei = "value" in Mt ? Mt.value : Mt.textContent, pn = !0)), D = Vr(h, O), 0 < D.length && (O = new vu(O, e, null, n, w), k.push({ event: O, listeners: D }), I ? O.data = I : (I = _u(n), I !== null && (O.data = I)))), (I = Ic ? Oc(e, n) : Fc(e, n)) && (h = Vr(h, "onBeforeInput"), 0 < h.length && (w = new vu("onBeforeInput", "beforeinput", null, n, w), k.push({ event: w, listeners: h }), w.data = I));
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
  function hn(e) {
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
  function It(e) {
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
  var vn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + vn, rr = "__reactProps$" + vn, xt = "__reactContainer$" + vn, Si = "__reactEvents$" + vn, nf = "__reactListeners$" + vn, rf = "__reactHandles$" + vn;
  function Xt(e) {
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
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var _i = [], wn = -1;
  function Ot(e) {
    return { current: e };
  }
  function oe(e) {
    0 > wn || (e.current = _i[wn], _i[wn] = null, wn--);
  }
  function le(e, t) {
    wn++, _i[wn] = e.current, e.current = t;
  }
  var Ft = {}, Me = Ot(Ft), $e = Ot(!1), Zt = Ft;
  function kn(e, t) {
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
    le(Me, t), le($e, n);
  }
  function Zu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, re(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Zt = Me.current, le(Me, e), le($e, $e.current), !0;
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n ? (e = Zu(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, oe($e), oe(Me), le(Me, e)) : oe($e), le($e, n);
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
  var xn = [], Sn = 0, Xr = null, Zr = 0, nt = [], rt = 0, Jt = null, _t = 1, Et = "";
  function qt(e, t) {
    xn[Sn++] = Zr, xn[Sn++] = Xr, Xr = e, Zr = t;
  }
  function bu(e, t, n) {
    nt[rt++] = _t, nt[rt++] = Et, nt[rt++] = Jt, Jt = e;
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
    e.return !== null && (qt(e, 1), bu(e, 1, 0));
  }
  function Ni(e) {
    for (; e === Xr; ) Xr = xn[--Sn], xn[Sn] = null, Zr = xn[--Sn], xn[Sn] = null;
    for (; e === Jt; ) Jt = nt[--rt], nt[rt] = null, Et = nt[--rt], nt[rt] = null, _t = nt[--rt], nt[rt] = null;
  }
  var Je = null, qe = null, se = !1, ct = null;
  function es(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = It(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: _t, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, qe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pi(e) {
    if (se) {
      var t = qe;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (zi(e)) throw Error(d(418));
          t = It(n.nextSibling);
          var r = Je;
          t && ts(e, t) ? es(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, Je = e);
        }
      } else {
        if (zi(e)) throw Error(d(418));
        e.flags = e.flags & -4097 | 2, se = !1, Je = e;
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Je = e;
  }
  function Jr(e) {
    if (e !== Je) return !1;
    if (!se) return ns(e), se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t && (t = qe)) {
      if (zi(e)) throw rs(), Error(d(418));
      for (; t; ) es(e, t), t = It(t.nextSibling);
    }
    if (ns(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = It(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Je ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = qe; e; ) e = It(e.nextSibling);
  }
  function _n() {
    qe = Je = null, se = !1;
  }
  function Ti(e) {
    ct === null ? ct = [e] : ct.push(e);
  }
  var of = me.ReactCurrentBatchConfig;
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
    function t(m, c) {
      if (e) {
        var g = m.deletions;
        g === null ? (m.deletions = [c], m.flags |= 16) : g.push(c);
      }
    }
    function n(m, c) {
      if (!e) return null;
      for (; c !== null; ) t(m, c), c = c.sibling;
      return null;
    }
    function r(m, c) {
      for (m = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? m.set(c.key, c) : m.set(c.index, c), c = c.sibling;
      return m;
    }
    function l(m, c) {
      return m = Kt(m, c), m.index = 0, m.sibling = null, m;
    }
    function i(m, c, g) {
      return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < c ? (m.flags |= 2, c) : g) : (m.flags |= 2, c)) : (m.flags |= 1048576, c);
    }
    function o(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function u(m, c, g, S) {
      return c === null || c.tag !== 6 ? (c = xo(g, m.mode, S), c.return = m, c) : (c = l(c, g), c.return = m, c);
    }
    function a(m, c, g, S) {
      var R = g.type;
      return R === Le ? w(m, c, g.props.children, S, g.key) : c !== null && (c.elementType === R || typeof R == "object" && R !== null && R.$$typeof === je && ls(R) === c.type) ? (S = l(c, g.props), S.ref = ir(m, c, g), S.return = m, S) : (S = Sl(g.type, g.key, g.props, null, m.mode, S), S.ref = ir(m, c, g), S.return = m, S);
    }
    function h(m, c, g, S) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== g.containerInfo || c.stateNode.implementation !== g.implementation ? (c = So(g, m.mode, S), c.return = m, c) : (c = l(c, g.children || []), c.return = m, c);
    }
    function w(m, c, g, S, R) {
      return c === null || c.tag !== 7 ? (c = un(g, m.mode, S, R), c.return = m, c) : (c = l(c, g), c.return = m, c);
    }
    function k(m, c, g) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = xo("" + c, m.mode, g), c.return = m, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case b:
            return g = Sl(c.type, c.key, c.props, null, m.mode, g), g.ref = ir(m, null, c), g.return = m, g;
          case ge:
            return c = So(c, m.mode, g), c.return = m, c;
          case je:
            var S = c._init;
            return k(m, S(c._payload), g);
        }
        if (Dn(c) || x(c)) return c = un(c, m.mode, g, null), c.return = m, c;
        qr(m, c);
      }
      return null;
    }
    function y(m, c, g, S) {
      var R = c !== null ? c.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number") return R !== null ? null : u(m, c, "" + g, S);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case b:
            return g.key === R ? a(m, c, g, S) : null;
          case ge:
            return g.key === R ? h(m, c, g, S) : null;
          case je:
            return R = g._init, y(
              m,
              c,
              R(g._payload),
              S
            );
        }
        if (Dn(g) || x(g)) return R !== null ? null : w(m, c, g, S, null);
        qr(m, g);
      }
      return null;
    }
    function C(m, c, g, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(g) || null, u(c, m, "" + S, R);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case b:
            return m = m.get(S.key === null ? g : S.key) || null, a(c, m, S, R);
          case ge:
            return m = m.get(S.key === null ? g : S.key) || null, h(c, m, S, R);
          case je:
            var D = S._init;
            return C(m, c, g, D(S._payload), R);
        }
        if (Dn(S) || x(S)) return m = m.get(g) || null, w(c, m, S, R, null);
        qr(c, S);
      }
      return null;
    }
    function z(m, c, g, S) {
      for (var R = null, D = null, I = c, O = c = 0, ze = null; I !== null && O < g.length; O++) {
        I.index > O ? (ze = I, I = null) : ze = I.sibling;
        var q = y(m, I, g[O], S);
        if (q === null) {
          I === null && (I = ze);
          break;
        }
        e && I && q.alternate === null && t(m, I), c = i(q, c, O), D === null ? R = q : D.sibling = q, D = q, I = ze;
      }
      if (O === g.length) return n(m, I), se && qt(m, O), R;
      if (I === null) {
        for (; O < g.length; O++) I = k(m, g[O], S), I !== null && (c = i(I, c, O), D === null ? R = I : D.sibling = I, D = I);
        return se && qt(m, O), R;
      }
      for (I = r(m, I); O < g.length; O++) ze = C(I, m, O, g[O], S), ze !== null && (e && ze.alternate !== null && I.delete(ze.key === null ? O : ze.key), c = i(ze, c, O), D === null ? R = ze : D.sibling = ze, D = ze);
      return e && I.forEach(function(Yt) {
        return t(m, Yt);
      }), se && qt(m, O), R;
    }
    function P(m, c, g, S) {
      var R = x(g);
      if (typeof R != "function") throw Error(d(150));
      if (g = R.call(g), g == null) throw Error(d(151));
      for (var D = R = null, I = c, O = c = 0, ze = null, q = g.next(); I !== null && !q.done; O++, q = g.next()) {
        I.index > O ? (ze = I, I = null) : ze = I.sibling;
        var Yt = y(m, I, q.value, S);
        if (Yt === null) {
          I === null && (I = ze);
          break;
        }
        e && I && Yt.alternate === null && t(m, I), c = i(Yt, c, O), D === null ? R = Yt : D.sibling = Yt, D = Yt, I = ze;
      }
      if (q.done) return n(
        m,
        I
      ), se && qt(m, O), R;
      if (I === null) {
        for (; !q.done; O++, q = g.next()) q = k(m, q.value, S), q !== null && (c = i(q, c, O), D === null ? R = q : D.sibling = q, D = q);
        return se && qt(m, O), R;
      }
      for (I = r(m, I); !q.done; O++, q = g.next()) q = C(I, m, O, q.value, S), q !== null && (e && q.alternate !== null && I.delete(q.key === null ? O : q.key), c = i(q, c, O), D === null ? R = q : D.sibling = q, D = q);
      return e && I.forEach(function(Af) {
        return t(m, Af);
      }), se && qt(m, O), R;
    }
    function we(m, c, g, S) {
      if (typeof g == "object" && g !== null && g.type === Le && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case b:
            e: {
              for (var R = g.key, D = c; D !== null; ) {
                if (D.key === R) {
                  if (R = g.type, R === Le) {
                    if (D.tag === 7) {
                      n(m, D.sibling), c = l(D, g.props.children), c.return = m, m = c;
                      break e;
                    }
                  } else if (D.elementType === R || typeof R == "object" && R !== null && R.$$typeof === je && ls(R) === D.type) {
                    n(m, D.sibling), c = l(D, g.props), c.ref = ir(m, D, g), c.return = m, m = c;
                    break e;
                  }
                  n(m, D);
                  break;
                } else t(m, D);
                D = D.sibling;
              }
              g.type === Le ? (c = un(g.props.children, m.mode, S, g.key), c.return = m, m = c) : (S = Sl(g.type, g.key, g.props, null, m.mode, S), S.ref = ir(m, c, g), S.return = m, m = S);
            }
            return o(m);
          case ge:
            e: {
              for (D = g.key; c !== null; ) {
                if (c.key === D) if (c.tag === 4 && c.stateNode.containerInfo === g.containerInfo && c.stateNode.implementation === g.implementation) {
                  n(m, c.sibling), c = l(c, g.children || []), c.return = m, m = c;
                  break e;
                } else {
                  n(m, c);
                  break;
                }
                else t(m, c);
                c = c.sibling;
              }
              c = So(g, m.mode, S), c.return = m, m = c;
            }
            return o(m);
          case je:
            return D = g._init, we(m, c, D(g._payload), S);
        }
        if (Dn(g)) return z(m, c, g, S);
        if (x(g)) return P(m, c, g, S);
        qr(m, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, c !== null && c.tag === 6 ? (n(m, c.sibling), c = l(c, g), c.return = m, m = c) : (n(m, c), c = xo(g, m.mode, S), c.return = m, m = c), o(m)) : n(m, c);
    }
    return we;
  }
  var En = is(!0), os = is(!1), br = Ot(null), el = null, Cn = null, Ri = null;
  function Li() {
    Ri = Cn = el = null;
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
  function Nn(e, t) {
    el = e, Ri = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (He = !0), e.firstContext = null);
  }
  function lt(e) {
    var t = e._currentValue;
    if (Ri !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
      if (el === null) throw Error(d(308));
      Cn = e, el.dependencies = { lanes: 0, firstContext: e };
    } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Di(e) {
    bt === null ? bt = [e] : bt.push(e);
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
  function Ii(e) {
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
    if (r = r.shared, (X & 2) !== 0) {
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
            var z = e, P = u;
            switch (y = t, C = n, P.tag) {
              case 1:
                if (z = P.payload, typeof z == "function") {
                  k = z.call(C, k, y);
                  break e;
                }
                k = z;
                break e;
              case 3:
                z.flags = z.flags & -65537 | 128;
              case 0:
                if (z = P.payload, y = typeof z == "function" ? z.call(C, k, y) : z, y == null) break e;
                k = _({}, k, y);
                break e;
              case 2:
                At = !0;
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
      nn |= o, e.lanes = o, e.memoizedState = k;
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
  var or = {}, vt = Ot(or), ur = Ot(or), sr = Ot(or);
  function en(e) {
    if (e === or) throw Error(d(174));
    return e;
  }
  function Oi(e, t) {
    switch (le(sr, t), le(ur, e), le(vt, or), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fl(t, e);
    }
    oe(vt), le(vt, t);
  }
  function zn() {
    oe(vt), oe(ur), oe(sr);
  }
  function fs(e) {
    en(sr.current);
    var t = en(vt.current), n = Fl(t, e.type);
    t !== n && (le(ur, e), le(vt, n));
  }
  function Fi(e) {
    ur.current === e && (oe(vt), oe(ur));
  }
  var ce = Ot(0);
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
  var ll = me.ReactCurrentDispatcher, Bi = me.ReactCurrentBatchConfig, tn = 0, fe = null, xe = null, Ce = null, il = !1, ar = !1, cr = 0, uf = 0;
  function De() {
    throw Error(d(321));
  }
  function $i(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function Vi(e, t, n, r, l, i) {
    if (tn = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? ff : df, e = n(r, l), ar) {
      i = 0;
      do {
        if (ar = !1, cr = 0, 25 <= i) throw Error(d(301));
        i += 1, Ce = xe = null, t.updateQueue = null, ll.current = pf, e = n(r, l);
      } while (ar);
    }
    if (ll.current = sl, t = xe !== null && xe.next !== null, tn = 0, Ce = xe = fe = null, il = !1, t) throw Error(d(300));
    return e;
  }
  function Hi() {
    var e = cr !== 0;
    return cr = 0, e;
  }
  function yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ce === null ? fe.memoizedState = Ce = e : Ce = Ce.next = e, Ce;
  }
  function it() {
    if (xe === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ce === null ? fe.memoizedState : Ce.next;
    if (t !== null) Ce = t, xe = e;
    else {
      if (e === null) throw Error(d(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Ce === null ? fe.memoizedState = Ce = e : Ce = Ce.next = e;
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
        if ((tn & w) === w) a !== null && (a = a.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var k = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          a === null ? (u = a = k, o = r) : a = a.next = k, fe.lanes |= w, nn |= w;
        }
        h = h.next;
      } while (h !== null && h !== i);
      a === null ? o = r : a.next = u, at(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, fe.lanes |= i, nn |= i, l = l.next;
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
    var n = fe, r = it(), l = t(), i = !at(r.memoizedState, l);
    if (i && (r.memoizedState = l, He = !0), r = r.queue, Ki(hs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ce !== null && Ce.memoizedState.tag & 1) {
      if (n.flags |= 2048, dr(9, gs.bind(null, n, r, l, t), void 0, null), Ne === null) throw Error(d(349));
      (tn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function gs(e, t, n, r) {
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
    t !== null && mt(t, e, 1, -1);
  }
  function ws(e) {
    var t = yt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = cf.bind(null, fe, e), [t.memoizedState, e];
  }
  function dr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return it().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = yt();
    fe.flags |= e, l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
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
    fe.flags |= e, l.memoizedState = dr(1 | t, n, i, r);
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
    return (tn & 21) === 0 ? (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n) : (at(n, t) || (n = lu(), fe.lanes |= n, nn |= n, e.baseState = !0), t);
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
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Ls(t, n);
    else if (n = us(e, t, n, r), n !== null) {
      var l = Ae();
      mt(n, e, r, l), js(n, t, r);
    }
  }
  function cf(e, t, n) {
    var r = Wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Ls(t, l);
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
      n = us(e, t, l, r), n !== null && (l = Ae(), mt(n, e, r, l), js(n, t, r));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Ls(e, t) {
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = af.bind(null, fe, e), [r.memoizedState, e];
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
    var r = fe, l = yt();
    if (se) {
      if (n === void 0) throw Error(d(407));
      n = n();
    } else {
      if (n = t(), Ne === null) throw Error(d(349));
      (tn & 30) !== 0 || ms(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, xs(hs.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, dr(9, gs.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = yt(), t = Ne.identifierPrefix;
    if (se) {
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
      t = _({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = { isMounted: function(e) {
    return (e = e._reactInternals) ? Gt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = Wt(e), i = Nt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Bt(e, i, l), t !== null && (mt(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = Wt(e), i = Nt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Bt(e, i, l), t !== null && (mt(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ae(), r = Wt(e), l = Nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (mt(t, e, r, n), tl(t, e, r));
  } };
  function Ms(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, i) : !0;
  }
  function Ds(e, t, n) {
    var r = !1, l = Ft, i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (l = Ve(t) ? Zt : Me.current, r = t.contextTypes, i = (r = r != null) ? kn(e, l) : Ft), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Is(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ii(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = lt(i) : (i = Ve(t) ? Zt : Me.current, l.context = kn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Gi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Z(r), r = r.return;
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
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Os(e, t, n) {
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
      r = e.pingCache = new mf();
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
  var gf = me.ReactCurrentOwner, He = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : En(t, e.child, n, r);
  }
  function $s(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Nn(t, l), r = Vi(e, t, n, r, i, l), n = Hi(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, zt(e, t, l)) : (se && n && Ci(t), t.flags |= 1, Ue(e, t, r, l), t.child);
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
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(Rn, be), be |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(Rn, be), be |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, le(Rn, be), be |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, le(Rn, be), be |= r;
    return Ue(e, t, l, n), t.child;
  }
  function Qs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function qi(e, t, n, r, l) {
    var i = Ve(n) ? Zt : Me.current;
    return i = kn(t, i), Nn(t, l), n = Vi(e, t, n, r, i, l), r = Hi(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, zt(e, t, l)) : (se && r && Ci(t), t.flags |= 1, Ue(e, t, n, l), t.child);
  }
  function Ks(e, t, n, r, l) {
    if (Ve(n)) {
      var i = !0;
      Yr(t);
    } else i = !1;
    if (Nn(t, l), t.stateNode === null) fl(e, t), Ds(t, n, r), Xi(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, u = t.memoizedProps;
      o.props = u;
      var a = o.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = lt(h) : (h = Ve(n) ? Zt : Me.current, h = kn(t, h));
      var w = n.getDerivedStateFromProps, k = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      k || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== h) && Is(t, o, r, h), At = !1;
      var y = t.memoizedState;
      o.state = y, nl(t, r, o, l), a = t.memoizedState, u !== r || y !== a || $e.current || At ? (typeof w == "function" && (Gi(t, n, w, r), a = t.memoizedState), (u = At || Ms(t, n, u, r, y, a, h)) ? (k || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = h, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, ss(e, t), u = t.memoizedProps, h = t.type === t.elementType ? u : ft(t.type, u), o.props = h, k = t.pendingProps, y = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = lt(a) : (a = Ve(n) ? Zt : Me.current, a = kn(t, a));
      var C = n.getDerivedStateFromProps;
      (w = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== k || y !== a) && Is(t, o, r, a), At = !1, y = t.memoizedState, o.state = y, nl(t, r, o, l);
      var z = t.memoizedState;
      u !== k || y !== z || $e.current || At ? (typeof C == "function" && (Gi(t, n, C, r), z = t.memoizedState), (h = At || Ms(t, n, h, r, y, z, a) || !1) ? (w || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, z, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, z, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = z), o.props = r, o.state = z, o.context = a, r = h) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Qs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Ju(t, n, !1), zt(e, t, i);
    r = t.stateNode, gf.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = En(t, e.child, null, i), t.child = En(t, null, u, i)) : Ue(e, t, u, i), t.memoizedState = r.state, l && Ju(t, n, !0), t.child;
  }
  function Ys(e) {
    var t = e.stateNode;
    t.pendingContext ? Xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xu(e, t.context, !1), Oi(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return _n(), Ti(l), t.flags |= 256, Ue(e, t, n, r), t.child;
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps, l = ce.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), le(ce, l & 1), e === null)
      return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = _l(o, r, 0, null), e = un(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = to(n), t.memoizedState = eo, e) : no(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return hf(e, t, o, r, u, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
      var a = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Kt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Kt(u, i) : (i = un(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? to(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = eo, r;
    }
    return i = e.child, e = i.sibling, r = Kt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function no(e, t) {
    return t = _l({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cl(e, t, n, r) {
    return r !== null && Ti(r), En(t, e.child, null, n), e = no(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function hf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Zi(Error(d(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = _l({ mode: "visible", children: r.children }, l, 0, null), i = un(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && En(t, e.child, null, o), t.child.memoizedState = to(o), t.memoizedState = eo, i);
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ct(e, l), mt(r, e, l, -1));
      }
      return wo(), r = Zi(Error(d(421))), cl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, qe = It(l.nextSibling), Je = t, se = !0, ct = null, e !== null && (nt[rt++] = _t, nt[rt++] = Et, nt[rt++] = Jt, _t = e.id, Et = e.overflow, Jt = t), t = no(t, r.children), t.flags |= 4096, t);
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
    if (Ue(e, t, r.children, n), r = ce.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (le(ce, r), (t.mode & 1) === 0) t.memoizedState = null;
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
    if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, (n & t.childLanes) === 0) return null;
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
        Ys(t), _n();
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Ve(t.type) && Yr(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        le(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (le(ce, ce.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Xs(e, t, n) : (le(ce, ce.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
        le(ce, ce.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), le(ce, ce.current), r) break;
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
      e = t.stateNode, en(vt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Ml(e, l), r = Ml(e, r), i = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), i = [];
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
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (M.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
      for (h in r) {
        var a = r[h];
        if (u = l != null ? l[h] : void 0, r.hasOwnProperty(h) && a !== u && (a != null || u != null)) if (h === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
        } else n || (i || (i = []), i.push(
          h,
          n
        )), n = a;
        else h === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(h, a)) : h === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(h, "" + a) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (M.hasOwnProperty(h) ? (a != null && h === "onScroll" && ie("scroll", e), i || u === a || (i = [])) : (i = i || []).push(h, a));
      }
      n && (i = i || []).push("style", n);
      var h = i;
      (t.updateQueue = h) && (t.flags |= 4);
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
  function Ie(e) {
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
        return Ie(t), null;
      case 1:
        return Ve(t.type) && Kr(), Ie(t), null;
      case 3:
        return r = t.stateNode, zn(), oe($e), oe(Me), Ai(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ct !== null && (ho(ct), ct = null))), lo(e, t), Ie(t), null;
      case 5:
        Fi(t);
        var l = en(sr.current);
        if (n = t.type, e !== null && t.stateNode != null) bs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Ie(t), null;
          }
          if (e = en(vt.current), Jr(t)) {
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
              ), l = ["children", "" + u]) : M.hasOwnProperty(o) && u != null && o === "onScroll" && ie("scroll", r);
            }
            switch (n) {
              case "input":
                kr(r), Oo(r, i, !0);
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
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), ie("invalid", e);
                  break;
                case "textarea":
                  Fo(e, r), l = Ol(e, r), ie("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), u = l;
              for (i in u) if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style" ? Ho(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && $o(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && In(e, a) : typeof a == "number" && In(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (M.hasOwnProperty(i) ? a != null && i === "onScroll" && ie("scroll", e) : a != null && ve(e, i, a, o));
              }
              switch (n) {
                case "input":
                  kr(e), Oo(e, r, !1);
                  break;
                case "textarea":
                  kr(e), Ao(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? sn(e, !!r.multiple, i, !1) : r.defaultValue != null && sn(
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
        return Ie(t), null;
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (n = en(sr.current), en(vt.current), Jr(t)) {
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
        return Ie(t), null;
      case 13:
        if (oe(ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (se && qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) rs(), _n(), t.flags |= 98560, i = !1;
          else if (i = Jr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(d(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(d(317));
              i[ht] = t;
            } else _n(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ie(t), i = !1;
          } else ct !== null && (ho(ct), ct = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ce.current & 1) !== 0 ? Se === 0 && (Se = 3) : wo())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
      case 4:
        return zn(), lo(e, t), e === null && tr(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return ji(t.type._context), Ie(t), null;
      case 17:
        return Ve(t.type) && Kr(), Ie(t), null;
      case 19:
        if (oe(ce), i = t.memoizedState, i === null) return Ie(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) pr(i, !1);
        else {
          if (Se !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = rl(e), o !== null) {
              for (t.flags |= 128, pr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return le(ce, ce.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ye() > Ln && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = rl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !se) return Ie(t), null;
          } else 2 * ye() - i.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ye(), t.sibling = null, n = ce.current, le(ce, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
      case 22:
      case 23:
        return yo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (be & 1073741824) !== 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
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
        return zn(), oe($e), oe(Me), Ai(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Fi(t), null;
      case 13:
        if (oe(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(d(340));
          _n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return oe(ce), null;
      case 4:
        return zn(), null;
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
  var dl = !1, Oe = !1, kf = typeof WeakSet == "function" ? WeakSet : Set, N = null;
  function Tn(e, t) {
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
    for (yi = { focusedElem: e, selectionRange: n }, jr = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
    else for (; N !== null; ) {
      t = N;
      try {
        var z = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (z !== null) {
              var P = z.memoizedProps, we = z.memoizedState, m = t.stateNode, c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? P : ft(t.type, P), we);
              m.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var g = t.stateNode.containerInfo;
            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (S) {
        he(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, N = e;
        break;
      }
      N = t.return;
    }
    return z = ta, ta = !1, z;
  }
  function mr(e, t, n) {
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
    if (gt && typeof gt.onCommitFiberUnmount == "function") try {
      gt.onCommitFiberUnmount(Nr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Oe || Tn(n, t);
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
        if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o), l = l.next;
          } while (l !== r);
        }
        $t(e, t, n);
        break;
      case 1:
        if (!Oe && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
        n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, $t(e, t, n), Oe = r) : $t(e, t, n);
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
            mr(3, e, e.return), pl(3, e);
          } catch (P) {
            he(e, e.return, P);
          }
          try {
            mr(5, e, e.return);
          } catch (P) {
            he(e, e.return, P);
          }
        }
        break;
      case 1:
        pt(t, e), wt(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (pt(t, e), wt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (P) {
            he(e, e.return, P);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            u === "input" && i.type === "radio" && i.name != null && Io(l, i), Al(u, o);
            var h = Al(u, i);
            for (o = 0; o < a.length; o += 2) {
              var w = a[o], k = a[o + 1];
              w === "style" ? Ho(l, k) : w === "dangerouslySetInnerHTML" ? $o(l, k) : w === "children" ? In(l, k) : ve(l, w, k, h);
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
                var C = i.value;
                C != null ? sn(l, !!i.multiple, C, !1) : y !== !!i.multiple && (i.defaultValue != null ? sn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[rr] = i;
          } catch (P) {
            he(e, e.return, P);
          }
        }
        break;
      case 6:
        if (pt(t, e), wt(e), r & 4) {
          if (e.stateNode === null) throw Error(d(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (P) {
            he(e, e.return, P);
          }
        }
        break;
      case 3:
        if (pt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (P) {
          he(e, e.return, P);
        }
        break;
      case 4:
        pt(t, e), wt(e);
        break;
      case 13:
        pt(t, e), wt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (fo = ye())), r & 4 && oa(e);
        break;
      case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (h = Oe) || w, pt(t, e), Oe = h) : pt(t, e), wt(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0) for (N = e, w = e.child; w !== null; ) {
            for (k = N = w; N !== null; ) {
              switch (y = N, C = y.child, y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mr(4, y, y.return);
                  break;
                case 1:
                  Tn(y, y.return);
                  var z = y.stateNode;
                  if (typeof z.componentWillUnmount == "function") {
                    r = y, n = y.return;
                    try {
                      t = r, z.props = t.memoizedProps, z.state = t.memoizedState, z.componentWillUnmount();
                    } catch (P) {
                      he(r, n, P);
                    }
                  }
                  break;
                case 5:
                  Tn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    ca(k);
                    continue;
                  }
              }
              C !== null ? (C.return = y, N = C) : ca(k);
            }
            w = w.sibling;
          }
          e: for (w = null, k = e; ; ) {
            if (k.tag === 5) {
              if (w === null) {
                w = k;
                try {
                  l = k.stateNode, h ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = k.stateNode, a = k.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Vo("display", o));
                } catch (P) {
                  he(e, e.return, P);
                }
              }
            } else if (k.tag === 6) {
              if (w === null) try {
                k.stateNode.nodeValue = h ? "" : k.memoizedProps;
              } catch (P) {
                he(e, e.return, P);
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
            r.flags & 32 && (In(l, ""), r.flags &= -33);
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
    N = e, sa(e);
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var l = N, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var u = l.alternate, a = u !== null && u.memoizedState !== null || Oe;
          u = dl;
          var h = Oe;
          if (dl = o, (Oe = a) && !h) for (N = l; N !== null; ) o = N, a = o.child, o.tag === 22 && o.memoizedState !== null ? fa(l) : a !== null ? (a.return = o, N = a) : fa(l);
          for (; i !== null; ) N = i, sa(i), i = i.sibling;
          N = l, dl = u, Oe = h;
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, N = i) : aa(e);
    }
  }
  function aa(e) {
    for (; N !== null; ) {
      var t = N;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe) if (n === null) r.componentDidMount();
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
          Oe || t.flags & 512 && oo(t);
        } catch (y) {
          he(t, t.return, y);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function ca(e) {
    for (; N !== null; ) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function fa(e) {
    for (; N !== null; ) {
      var t = N;
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
        N = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, N = u;
        break;
      }
      N = t.return;
    }
  }
  var _f = Math.ceil, ml = me.ReactCurrentDispatcher, ao = me.ReactCurrentOwner, ot = me.ReactCurrentBatchConfig, X = 0, Ne = null, ke = null, Re = 0, be = 0, Rn = Ot(0), Se = 0, gr = null, nn = 0, gl = 0, co = 0, hr = null, We = null, fo = 0, Ln = 1 / 0, Pt = null, hl = !1, po = null, Vt = null, vl = !1, Ht = null, yl = 0, vr = 0, mo = null, wl = -1, kl = 0;
  function Ae() {
    return (X & 6) !== 0 ? ye() : wl !== -1 ? wl : wl = ye();
  }
  function Wt(e) {
    return (e.mode & 1) === 0 ? 1 : (X & 2) !== 0 && Re !== 0 ? Re & -Re : of.transition !== null ? (kl === 0 && (kl = lu()), kl) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pu(e.type)), e);
  }
  function mt(e, t, n, r) {
    if (50 < vr) throw vr = 0, mo = null, Error(d(185));
    $n(e, n, r), ((X & 2) === 0 || e !== Ne) && (e === Ne && ((X & 2) === 0 && (gl |= n), Se === 4 && Qt(e, Re)), Qe(e, r), n === 1 && X === 0 && (t.mode & 1) === 0 && (Ln = ye() + 500, Gr && Ut()));
  }
  function Qe(e, t) {
    var n = e.callbackNode;
    ic(e, t);
    var r = Tr(e, e === Ne ? Re : 0);
    if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && tu(n), t === 1) e.tag === 0 ? lf(pa.bind(null, e)) : qu(pa.bind(null, e)), ef(function() {
        (X & 6) === 0 && Ut();
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
    if (wl = -1, kl = 0, (X & 6) !== 0) throw Error(d(327));
    var n = e.callbackNode;
    if (jn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === Ne ? Re : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = X;
      X |= 2;
      var i = ga();
      (Ne !== e || Re !== t) && (Pt = null, Ln = ye() + 500, ln(e, t));
      do
        try {
          Nf();
          break;
        } catch (u) {
          ma(e, u);
        }
      while (!0);
      Li(), ml.current = i, X = l, ke !== null ? t = 0 : (Ne = null, Re = 0, t = Se);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = go(e, l))), t === 1) throw n = gr, ln(e, 0), Qt(e, r), Qe(e, ye()), n;
      if (t === 6) Qt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Ef(l) && (t = xl(e, r), t === 2 && (i = Yl(e), i !== 0 && (r = i, t = go(e, i))), t === 1)) throw n = gr, ln(e, 0), Qt(e, r), Qe(e, ye()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            on(e, We, Pt);
            break;
          case 3:
            if (Qt(e, r), (r & 130023424) === r && (t = fo + 500 - ye(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ae(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ki(on.bind(null, e, We, Pt), t);
              break;
            }
            on(e, We, Pt);
            break;
          case 4:
            if (Qt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - st(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ki(on.bind(null, e, We, Pt), r);
              break;
            }
            on(e, We, Pt);
            break;
          case 5:
            on(e, We, Pt);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Qe(e, ye()), e.callbackNode === n ? da.bind(null, e) : null;
  }
  function go(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256), e = xl(e, t), e !== 2 && (t = We, We = n, t !== null && ho(t)), e;
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
    for (t &= ~co, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - st(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function pa(e) {
    if ((X & 6) !== 0) throw Error(d(327));
    jn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return Qe(e, ye()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && (t = r, n = go(e, r));
    }
    if (n === 1) throw n = gr, ln(e, 0), Qt(e, t), Qe(e, ye()), n;
    if (n === 6) throw Error(d(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, We, Pt), Qe(e, ye()), null;
  }
  function vo(e, t) {
    var n = X;
    X |= 1;
    try {
      return e(t);
    } finally {
      X = n, X === 0 && (Ln = ye() + 500, Gr && Ut());
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && (X & 6) === 0 && jn();
    var t = X;
    X |= 1;
    var n = ot.transition, r = te;
    try {
      if (ot.transition = null, te = 1, e) return e();
    } finally {
      te = r, ot.transition = n, X = t, (X & 6) === 0 && Ut();
    }
  }
  function yo() {
    be = Rn.current, oe(Rn);
  }
  function ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, bc(n)), ke !== null) for (n = ke.return; n !== null; ) {
      var r = n;
      switch (Ni(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Kr();
          break;
        case 3:
          zn(), oe($e), oe(Me), Ai();
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          oe(ce);
          break;
        case 19:
          oe(ce);
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
    if (Ne = e, ke = e = Kt(e.current, null), Re = be = t, Se = 0, gr = null, co = gl = nn = 0, We = hr = null, bt !== null) {
      for (t = 0; t < bt.length; t++) if (n = bt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      bt = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = ke;
      try {
        if (Li(), ll.current = sl, il) {
          for (var r = fe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          il = !1;
        }
        if (tn = 0, Ce = xe = fe = null, ar = !1, cr = 0, ao.current = null, n === null || n.return === null) {
          Se = 1, gr = t, ke = null;
          break;
        }
        e: {
          var i = e, o = n.return, u = n, a = t;
          if (t = Re, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var h = a, w = u, k = w.tag;
            if ((w.mode & 1) === 0 && (k === 0 || k === 11 || k === 15)) {
              var y = w.alternate;
              y ? (w.updateQueue = y.updateQueue, w.memoizedState = y.memoizedState, w.lanes = y.lanes) : (w.updateQueue = null, w.memoizedState = null);
            }
            var C = As(o);
            if (C !== null) {
              C.flags &= -257, Bs(C, o, u, i, t), C.mode & 1 && Us(i, h, t), t = C, a = h;
              var z = t.updateQueue;
              if (z === null) {
                var P = /* @__PURE__ */ new Set();
                P.add(a), t.updateQueue = P;
              } else z.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                Us(i, h, t), wo();
                break e;
              }
              a = Error(d(426));
            }
          } else if (se && u.mode & 1) {
            var we = As(o);
            if (we !== null) {
              (we.flags & 65536) === 0 && (we.flags |= 256), Bs(we, o, u, i, t), Ti(Pn(a, u));
              break e;
            }
          }
          i = a = Pn(a, u), Se !== 4 && (Se = 2), hr === null ? hr = [i] : hr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var m = Os(i, a, t);
                as(i, m);
                break e;
              case 1:
                u = a;
                var c = i.type, g = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Vt === null || !Vt.has(g)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var S = Fs(i, u, t);
                  as(i, S);
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
  function ga() {
    var e = ml.current;
    return ml.current = sl, e === null ? sl : e;
  }
  function wo() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4), Ne === null || (nn & 268435455) === 0 && (gl & 268435455) === 0 || Qt(Ne, Re);
  }
  function xl(e, t) {
    var n = X;
    X |= 2;
    var r = ga();
    (Ne !== e || Re !== t) && (Pt = null, ln(e, t));
    do
      try {
        Cf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if (Li(), X = n, ml.current = r, ke !== null) throw Error(d(261));
    return Ne = null, Re = 0, Se;
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
  function on(e, t, n) {
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
      jn();
    while (Ht !== null);
    if ((X & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(d(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (oc(e, i), e === Ne && (ke = Ne = null, Re = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vl || (vl = !0, xa(Cr, function() {
      return jn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = ot.transition, ot.transition = null;
      var o = te;
      te = 1;
      var u = X;
      X |= 4, ao.current = null, xf(e, n), ua(n, e), Kc(yi), jr = !!vi, yi = vi = null, e.current = n, Sf(n), Ja(), X = u, te = o, ot.transition = i;
    } else e.current = n;
    if (vl && (vl = !1, Ht = e, yl = l), i = e.pendingLanes, i === 0 && (Vt = null), ec(n.stateNode), Qe(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = po, po = null, e;
    return (yl & 1) !== 0 && e.tag !== 0 && jn(), i = e.pendingLanes, (i & 1) !== 0 ? e === mo ? vr++ : (vr = 0, mo = e) : vr = 0, Ut(), null;
  }
  function jn() {
    if (Ht !== null) {
      var e = iu(yl), t = ot.transition, n = te;
      try {
        if (ot.transition = null, te = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, yl = 0, (X & 6) !== 0) throw Error(d(331));
          var l = X;
          for (X |= 4, N = e.current; N !== null; ) {
            var i = N, o = i.child;
            if ((N.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var h = u[a];
                  for (N = h; N !== null; ) {
                    var w = N;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, w, i);
                    }
                    var k = w.child;
                    if (k !== null) k.return = w, N = k;
                    else for (; N !== null; ) {
                      w = N;
                      var y = w.sibling, C = w.return;
                      if (na(w), w === h) {
                        N = null;
                        break;
                      }
                      if (y !== null) {
                        y.return = C, N = y;
                        break;
                      }
                      N = C;
                    }
                  }
                }
                var z = i.alternate;
                if (z !== null) {
                  var P = z.child;
                  if (P !== null) {
                    z.child = null;
                    do {
                      var we = P.sibling;
                      P.sibling = null, P = we;
                    } while (P !== null);
                  }
                }
                N = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, N = o;
            else e: for (; N !== null; ) {
              if (i = N, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  mr(9, i, i.return);
              }
              var m = i.sibling;
              if (m !== null) {
                m.return = i.return, N = m;
                break e;
              }
              N = i.return;
            }
          }
          var c = e.current;
          for (N = c; N !== null; ) {
            o = N;
            var g = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && g !== null) g.return = o, N = g;
            else e: for (o = c; N !== null; ) {
              if (u = N, (u.flags & 2048) !== 0) try {
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
                N = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, N = S;
                break e;
              }
              N = u.return;
            }
          }
          if (X = l, Ut(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
            gt.onPostCommitFiberRoot(Nr, e);
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
    t = Pn(n, t), t = Os(e, t, 1), e = Bt(e, t, 1), t = Ae(), e !== null && ($n(e, 1, t), Qe(e, t));
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
          e = Pn(n, e), e = Fs(t, e, 1), t = Bt(t, e, 1), e = Ae(), t !== null && ($n(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Pf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Re & n) === n && (Se === 4 || Se === 3 && (Re & 130023424) === Re && 500 > ye() - fo ? ln(e, 0) : co |= n), Qe(e, t);
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) He = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return He = !1, vf(e, t, n);
      He = (e.flags & 131072) !== 0;
    }
    else He = !1, se && (t.flags & 1048576) !== 0 && bu(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = kn(t, Me.current);
        Nn(t, n), l = Vi(null, t, r, e, l, n);
        var i = Hi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (i = !0, Yr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ii(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = bi(null, t, r, !0, i, n)) : (t.tag = 0, se && i && Ci(t), Ue(null, t, l, n), t = t.child), t;
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
            l = Pn(Error(d(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Pn(Error(d(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (qe = It(t.stateNode.containerInfo.firstChild), Je = t, se = !0, ct = null, n = os(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_n(), r === l) {
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
        return Oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = En(t, null, r, n) : Ue(e, t, r, n), t.child;
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
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, le(br, r._currentValue), r._currentValue = o, i !== null) if (at(i.value, o)) {
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
        return l = t.type, r = t.pendingProps.children, Nn(t, n), l = lt(l), r = r(l), t.flags |= 1, Ue(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ft(r, t.pendingProps), l = ft(r.type, l), Vs(e, t, r, l, n);
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), fl(e, t), t.tag = 1, Ve(r) ? (e = !0, Yr(t)) : e = !1, Nn(t, n), Ds(t, r, l), Xi(t, r, l, n), bi(null, t, r, !0, e, n);
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
  function Lf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new Lf(e, t, n, r);
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
      case Le:
        return un(n.children, l, i, t);
      case Pe:
        o = 8, l |= 8;
        break;
      case Ee:
        return e = ut(12, n, t, l | 2), e.elementType = Ee, e.lanes = i, e;
      case Fe:
        return e = ut(13, n, t, l), e.elementType = Fe, e.lanes = i, e;
      case Ge:
        return e = ut(19, n, t, l), e.elementType = Ge, e.lanes = i, e;
      case ne:
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
  function un(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function _l(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = ne, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
    return e = new Mf(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ut(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ii(i), e;
  }
  function Df(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ge, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Sa(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Gt(e) !== e || e.tag !== 1) throw Error(d(170));
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
    return n = Sa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, o), e !== null && (mt(e, l, o, i), tl(e, l, o)), o;
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
  function If() {
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
      rn(function() {
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
  function Of(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var h = Cl(o);
          i.call(h);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = o, e[xt] = o.current, tr(e.nodeType === 8 ? e.parentNode : e), rn(), o;
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
    return e._reactRootContainer = a, e[xt] = a.current, tr(e.nodeType === 8 ? e.parentNode : e), rn(function() {
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
    } else o = Of(n, t, e, l, r);
    return Cl(o);
  }
  ou = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Qe(t, ye()), (X & 6) === 0 && (Ln = ye() + 500, Ut()));
        }
        break;
      case 13:
        rn(function() {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Ae();
            mt(r, e, 1, l);
          }
        }), Eo(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
        var n = Ae();
        mt(t, e, 134217728, n);
      }
      Eo(e, 134217728);
    }
  }, uu = function(e) {
    if (e.tag === 13) {
      var t = Wt(e), n = Ct(e, t);
      if (n !== null) {
        var r = Ae();
        mt(n, e, t, r);
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
        t = n.value, t != null && sn(e, !!n.multiple, t, !1);
    }
  }, Yo = vo, Go = rn;
  var Ff = { usingClientEntryPoint: !1, Events: [lr, yn, Qr, Qo, Ko, vo] }, yr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = qo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || If, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Nr = Tl.inject(Uf), gt = Tl;
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
    return rn(e);
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
    return e._reactRootContainer ? (rn(function() {
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
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (s) {
        console.error(s);
      }
  }
  return p(), To.exports = Qf(), To.exports;
}
var Ia;
function Yf() {
  if (Ia) return Rl;
  Ia = 1;
  var p = Kf();
  return Rl.createRoot = p.createRoot, Rl.hydrateRoot = p.hydrateRoot, Rl;
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
function Zf(p) {
  return p.replace(/-([a-z])/g, (s, d) => d.toUpperCase());
}
function Jf(p) {
  if (typeof p == "number" && Number.isFinite(p)) return p;
  if (typeof p != "string") return null;
  const s = p.trim();
  if (!s || s.length > 120) return null;
  const d = s.toLowerCase();
  return d.includes("url(") || d.includes("expression(") || d.includes("javascript:") || d.includes("@import") || d.includes("</") ? null : s;
}
function Mn(p) {
  if (!p || typeof p != "object" || Array.isArray(p)) return {};
  const s = {};
  for (const [d, T] of Object.entries(p)) {
    const M = Zf(d);
    if (!Xf.has(M)) continue;
    const B = Jf(T);
    B != null && (s[M] = B);
  }
  return s;
}
function Ba(p) {
  return p === "select" || p === "open" || p === "none" ? p : null;
}
function $a(p) {
  if (!p || typeof p != "object") return null;
  const s = p;
  if (typeof s.id != "string" || !s.id) return null;
  const d = s.variant === "primary" || s.variant === "danger" ? s.variant : "default";
  return {
    id: s.id,
    label: typeof s.label == "string" ? s.label : s.id,
    variant: d,
    disabled: !!s.disabled
  };
}
function qf(p) {
  if (!p || typeof p != "object") return null;
  const s = p, d = typeof s.text == "string" ? s.text : typeof s.label == "string" ? s.label : null;
  if (d == null) return null;
  const T = typeof s.id == "string" && s.id ? s.id : `text-${d.slice(0, 24)}`, M = s.variant === "muted" || s.variant === "accent" || s.variant === "danger" || s.variant === "badge" ? s.variant : "default";
  return {
    id: T,
    text: d,
    style: Mn(s.style),
    variant: M,
    clickable: !!s.clickable
  };
}
function bf(p) {
  if (!p || typeof p != "object") return null;
  const s = p;
  if (typeof s.id != "string" || typeof s.src != "string") return null;
  const d = Array.isArray(s.buttons) ? s.buttons.map($a).filter((A) => A != null) : [], T = Array.isArray(s.texts) ? s.texts.map(qf).filter((A) => A != null) : [], M = typeof s.label == "string" ? s.label : s.id, B = s.hover_text ?? s.hoverText, U = s.card_style ?? s.cardStyle ?? s.style ?? null, j = {
    ...Mn(
      typeof s.background == "string" || typeof s.color == "string" ? {
        ...typeof s.background == "string" ? { background: s.background } : {},
        ...typeof s.color == "string" ? { color: s.color } : {},
        ...typeof s.font_family == "string" || typeof s.fontFamily == "string" ? {
          fontFamily: s.font_family || s.fontFamily
        } : {}
      } : {}
    ),
    ...Mn(U)
  }, L = s.open_url ?? s.openUrl ?? s.href ?? s.link, F = s.size_bytes ?? s.sizeBytes ?? s.size ?? s.bytes ?? s.filesize;
  let G = null;
  if (typeof F == "number" && Number.isFinite(F) && F >= 0)
    G = Math.floor(F);
  else if (typeof F == "string" && F.trim()) {
    const A = Number(F);
    Number.isFinite(A) && A >= 0 && (G = Math.floor(A));
  }
  return {
    id: s.id,
    src: s.src,
    label: M,
    label_style: Mn(s.label_style ?? s.labelStyle),
    caption: typeof s.caption == "string" ? s.caption : "",
    caption_style: Mn(s.caption_style ?? s.captionStyle),
    hover_text: typeof B == "string" && B.length > 0 ? B : M,
    card_style: j,
    image_click: Ba(s.image_click ?? s.imageClick),
    open_url: typeof L == "string" ? L : "",
    size_bytes: G,
    disabled: !!s.disabled,
    buttons: d,
    texts: T
  };
}
function Oa(p) {
  const s = p ?? {}, d = Array.isArray(s.items) ? s.items.map(bf).filter((F) => F != null) : [], T = Array.isArray(s.selected_ids) ? s.selected_ids.map(String) : [], M = Array.isArray(s.buttons) ? s.buttons.map($a).filter((F) => F != null) : [], B = Number(s.columns), U = Number.isFinite(B) ? Math.max(1, Math.min(B, 8)) : 4, j = typeof s.selection_color == "string" && s.selection_color.trim() ? s.selection_color.trim() : "#0f766e", L = Ba(s.image_click) ?? (s.selectable === !1 ? "open" : "select");
  return {
    items: d,
    columns: U,
    gap: Math.max(0, Number(s.gap) || 0),
    selectable: s.selectable !== !1,
    show_checkboxes: s.show_checkboxes !== !1,
    image_click: L,
    open_in_new_tab: s.open_in_new_tab !== !1,
    show_hover_text: s.show_hover_text !== !1,
    show_card_info: s.show_card_info !== !1,
    show_selection_stats: s.show_selection_stats !== !1,
    selection_color: j,
    card_style: Mn(s.card_style),
    selected_ids: T,
    multi_select: s.multi_select !== !1,
    show_select_all: !!s.show_select_all,
    buttons: M,
    max_height: Math.max(120, Number(s.max_height) || 640),
    page_size: (() => {
      const F = Number(s.page_size);
      return !Number.isFinite(F) || F <= 0 ? 0 : Math.max(1, Math.min(Math.floor(F), 200));
    })(),
    thumbnail_fit: s.thumbnail_fit === "contain" ? "contain" : "cover",
    empty_message: typeof s.empty_message == "string" ? s.empty_message : "No images"
  };
}
function Fa(p) {
  return [...p].sort().join("\0");
}
function Va({
  button: p,
  onClick: s,
  className: d = ""
}) {
  return /* @__PURE__ */ V.jsx(
    "button",
    {
      type: "button",
      className: `sig-btn sig-btn-${p.variant} ${d}`.trim(),
      disabled: p.disabled,
      onClick: (T) => {
        T.stopPropagation(), s(p.id);
      },
      children: p.label
    }
  );
}
function ed({
  text: p,
  onClick: s
}) {
  const d = [
    "sig-text",
    p.variant !== "default" ? `sig-text-${p.variant}` : "",
    p.clickable ? "sig-text-clickable" : ""
  ].filter(Boolean).join(" ");
  return p.clickable ? /* @__PURE__ */ V.jsx(
    "span",
    {
      className: d,
      style: p.style,
      title: p.text,
      role: "button",
      tabIndex: 0,
      onClick: (T) => {
        T.stopPropagation(), s(p.id);
      },
      onKeyDown: (T) => {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), T.stopPropagation(), s(p.id));
      },
      children: p.text
    }
  ) : /* @__PURE__ */ V.jsx("span", { className: d, style: p.style, title: p.text, children: p.text });
}
function td(p, s) {
  return p.image_click ?? s;
}
function nd({
  item: p,
  selected: s,
  selectable: d,
  showCheckboxes: T,
  showHoverText: M,
  showCardInfo: B,
  thumbnailFit: U,
  cardStyle: j,
  imageClick: L,
  openInNewTab: F,
  onToggle: G,
  onOpen: A,
  onButton: K
}) {
  const ae = td(p, L), _e = p.open_url || p.src, Y = () => {
    if (!p.disabled && ae !== "none") {
      if (ae === "select") {
        d && G(p.id);
        return;
      }
      _e && F && typeof window < "u" && window.open(_e, "_blank", "noopener,noreferrer"), A(p.id, _e);
    }
  }, Q = (b) => {
    p.disabled || b.target.closest("input, button") || (b.stopPropagation(), Y());
  }, pe = (b) => {
    p.disabled || (b.key === "Enter" || b.key === " ") && (b.preventDefault(), Y());
  }, Be = {
    ...j,
    ...p.card_style
  }, ve = !p.disabled && ae !== "none", me = ae === "select" ? `${s ? "Deselect" : "Select"} ${p.label}` : ae === "open" ? `Open ${p.label}` : p.label;
  return /* @__PURE__ */ V.jsxs(
    "article",
    {
      className: [
        "sig-card",
        s ? "sig-card-selected" : "",
        p.disabled ? "sig-card-disabled" : "",
        B ? "" : "sig-card-image-only"
      ].filter(Boolean).join(" "),
      style: Be,
      tabIndex: ve ? 0 : -1,
      "aria-selected": d ? s : void 0,
      "aria-disabled": p.disabled || void 0,
      onKeyDown: ve ? pe : void 0,
      children: [
        /* @__PURE__ */ V.jsxs(
          "div",
          {
            className: [
              "sig-thumb-wrap",
              s ? "sig-thumb-wrap-selected" : "",
              ae === "none" ? "sig-thumb-wrap-static" : ""
            ].filter(Boolean).join(" "),
            role: ve ? "button" : void 0,
            "aria-label": ve ? me : p.label,
            onClick: ve ? Q : void 0,
            children: [
              d && T && /* @__PURE__ */ V.jsx(
                "input",
                {
                  className: "sig-check",
                  type: "checkbox",
                  checked: s,
                  disabled: p.disabled,
                  "aria-label": `Select ${p.label}`,
                  onChange: () => G(p.id),
                  onClick: (b) => b.stopPropagation()
                }
              ),
              /* @__PURE__ */ V.jsx(
                "img",
                {
                  className: "sig-thumb",
                  src: p.src,
                  alt: p.label,
                  loading: "lazy",
                  decoding: "async",
                  draggable: !1,
                  style: { objectFit: U }
                }
              ),
              M && p.hover_text ? /* @__PURE__ */ V.jsx("div", { className: "sig-hover-overlay", title: p.hover_text, children: p.hover_text }) : null
            ]
          }
        ),
        B ? /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
          /* @__PURE__ */ V.jsxs("div", { className: "sig-meta", children: [
            /* @__PURE__ */ V.jsx("div", { className: "sig-label", title: p.label, style: p.label_style, children: p.label }),
            p.caption ? /* @__PURE__ */ V.jsx(
              "div",
              {
                className: "sig-caption",
                title: p.caption,
                style: p.caption_style,
                children: p.caption
              }
            ) : null
          ] }),
          p.texts.length > 0 ? /* @__PURE__ */ V.jsx("div", { className: "sig-texts", children: p.texts.map((b) => /* @__PURE__ */ V.jsx(
            ed,
            {
              text: b,
              onClick: (ge) => K(ge, p.id)
            },
            b.id
          )) }) : null,
          p.buttons.length > 0 ? /* @__PURE__ */ V.jsx("div", { className: "sig-card-actions", children: p.buttons.map((b) => /* @__PURE__ */ V.jsx(
            Va,
            {
              button: { ...b, disabled: b.disabled || p.disabled },
              onClick: (ge) => K(ge, p.id)
            },
            b.id
          )) }) : null
        ] }) : null
      ]
    }
  );
}
function Ua(p, s) {
  const d = new Set(p.map(String)), T = s.filter((M) => d.has(M));
  for (const M of d)
    T.includes(M) || T.push(M);
  return T;
}
function rd(p) {
  if (!Number.isFinite(p) || p < 0) return "";
  const s = ["B", "KB", "MB", "GB", "TB"];
  let d = p, T = 0;
  for (; d >= 1024 && T < s.length - 1; )
    d /= 1024, T += 1;
  return T === 0 ? `${Math.round(d)} B` : `${d.toFixed(1)} ${s[T]}`;
}
function ld(p, s, d) {
  const T = new Map(s.map((L) => [L.id, L]));
  let M = 0, B = 0;
  for (const L of p) {
    const F = T.get(L);
    !F || F.size_bytes == null || (M += 1, B += F.size_bytes);
  }
  let j = `${p.length} selected`;
  return d && (j = `${j} / ${d}`), M > 0 && (j = `${j} · ${rd(B)}`), j;
}
function id({
  setStateValue: p,
  ...s
}) {
  const d = Fa(s.selected_ids), [T, M] = de.useState(() => s.selected_ids), B = de.useRef(0), U = de.useRef(d), j = de.useRef(!1), L = de.useMemo(() => s.items.map((x) => x.id), [s.items]), F = de.useMemo(() => L.join("\0"), [L]), G = s.page_size > 0 ? s.page_size : 0, A = G ? Math.max(1, Math.ceil(s.items.length / G)) : 1, [K, ae] = de.useState(0);
  de.useEffect(() => {
    ae((x) => Math.min(Math.max(0, x), A - 1));
  }, [A, F]);
  const _e = de.useMemo(() => {
    if (!G) return s.items;
    const x = K * G;
    return s.items.slice(x, x + G);
  }, [s.items, K, G]);
  de.useEffect(() => {
    if (d === U.current) {
      j.current = !1;
      return;
    }
    j.current || (U.current = d, M(Ua(s.selected_ids, L)));
  }, [d, s.selected_ids, L]);
  const Y = de.useCallback(
    (x) => {
      const _ = Ua(x, L), f = Fa(_);
      U.current = f, j.current = !0, M(_), p("selected_ids", _), p("selected_csv", _.join(","));
    },
    [L, p]
  ), Q = de.useCallback(
    (x, _) => {
      B.current += 1, p("clicked_button", x), p("clicked_item", _), p("action_nonce", B.current);
    },
    [p]
  ), pe = de.useMemo(
    () => s.items.filter((x) => !x.disabled).map((x) => x.id),
    [s.items]
  ), Be = de.useCallback(
    (x) => {
      if (!s.selectable) return;
      const _ = s.items.find((v) => v.id === x);
      if (!_ || _.disabled) return;
      let f;
      if (s.multi_select) {
        const v = new Set(T);
        v.has(x) ? v.delete(x) : v.add(x), f = [...v];
      } else
        f = T.includes(x) ? [] : [x];
      Y(f);
    },
    [s.items, s.multi_select, s.selectable, Y, T]
  ), ve = de.useCallback(() => {
    Y([...pe]);
  }, [pe, Y]), me = de.useCallback(() => {
    Y([]);
  }, [Y]), b = de.useCallback(
    (x) => Q(x, null),
    [Q]
  ), ge = de.useCallback(
    (x, _) => Q(x, _),
    [Q]
  ), Le = de.useCallback(
    (x, _) => Q("open", x),
    [Q]
  ), Pe = pe.filter(
    (x) => T.includes(x)
  ).length, Ee = pe.length > 0 && Pe === pe.length, Ye = Pe > 0 && !Ee, kt = Pe === 0, et = de.useCallback(() => {
    Ee ? me() : ve();
  }, [Ee, me, ve]), Fe = de.useCallback(() => {
    ae((x) => Math.max(0, x - 1));
  }, []), Ge = de.useCallback(() => {
    ae((x) => Math.min(A - 1, x + 1));
  }, [A]), tt = {
    "--sig-selection": s.selection_color,
    "--sig-accent": s.selection_color
  }, je = {
    display: "grid",
    gridTemplateColumns: `repeat(${s.columns}, minmax(0, 1fr))`,
    gap: s.gap,
    width: "100%"
  }, ne = G > 0 && s.items.length > 0, E = s.items.length === 0 ? "Page 0 of 0" : `Page ${K + 1} of ${A}`;
  return /* @__PURE__ */ V.jsxs("div", { className: "sig-root", style: tt, children: [
    (s.show_select_all || s.buttons.length > 0 || s.selectable) && /* @__PURE__ */ V.jsxs("div", { className: "sig-toolbar", children: [
      s.selectable ? /* @__PURE__ */ V.jsx(
        "span",
        {
          className: "sig-count",
          title: s.show_selection_stats ? "Selected file count and total size (all pages)" : void 0,
          children: s.show_selection_stats ? ld(T, s.items, pe.length) : `${Pe} selected${pe.length ? ` / ${pe.length}` : ""}`
        }
      ) : /* @__PURE__ */ V.jsxs("span", { className: "sig-count", children: [
        s.items.length,
        " images"
      ] }),
      s.show_select_all ? /* @__PURE__ */ V.jsxs("div", { className: "sig-select-all", children: [
        /* @__PURE__ */ V.jsxs(
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
              /* @__PURE__ */ V.jsx(
                "span",
                {
                  className: "sig-select-all-box",
                  "aria-hidden": "true",
                  "data-state": Ee ? "all" : Ye ? "some" : "none"
                }
              ),
              /* @__PURE__ */ V.jsx("span", { children: "All" })
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(
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
        /* @__PURE__ */ V.jsx(
          "button",
          {
            type: "button",
            className: "sig-btn",
            disabled: kt,
            onClick: me,
            title: "Clear selection on all pages",
            children: "Deselect all"
          }
        )
      ] }) : null,
      s.buttons.map((x) => /* @__PURE__ */ V.jsx(Va, { button: x, onClick: b }, x.id))
    ] }),
    /* @__PURE__ */ V.jsx(
      "div",
      {
        className: ne ? "sig-page" : "sig-scroll",
        style: ne ? void 0 : { maxHeight: s.max_height },
        children: s.items.length === 0 ? /* @__PURE__ */ V.jsx("div", { className: "sig-empty", children: s.empty_message }) : /* @__PURE__ */ V.jsx("div", { className: "sig-grid", style: je, children: _e.map((x) => /* @__PURE__ */ V.jsx(
          nd,
          {
            item: x,
            selected: T.includes(x.id),
            selectable: s.selectable,
            showCheckboxes: s.show_checkboxes,
            showHoverText: s.show_hover_text,
            showCardInfo: s.show_card_info,
            thumbnailFit: s.thumbnail_fit,
            cardStyle: s.card_style,
            imageClick: s.image_click,
            openInNewTab: s.open_in_new_tab,
            onToggle: Be,
            onOpen: Le,
            onButton: ge
          },
          x.id
        )) })
      }
    ),
    ne ? /* @__PURE__ */ V.jsxs("div", { className: "sig-pager", role: "navigation", "aria-label": "Board pages", children: [
      /* @__PURE__ */ V.jsx(
        "button",
        {
          type: "button",
          className: "sig-btn",
          disabled: K <= 0,
          onClick: Fe,
          "aria-label": "Previous page",
          children: "Prev"
        }
      ),
      /* @__PURE__ */ V.jsxs("span", { className: "sig-pager-label", "aria-live": "polite", children: [
        E,
        /* @__PURE__ */ V.jsxs("span", { className: "sig-pager-range", children: [
          " ",
          "· ",
          K * G + 1,
          "–",
          Math.min(s.items.length, (K + 1) * G),
          " of",
          " ",
          s.items.length
        ] })
      ] }),
      /* @__PURE__ */ V.jsx(
        "button",
        {
          type: "button",
          className: "sig-btn",
          disabled: K >= A - 1,
          onClick: Ge,
          "aria-label": "Next page",
          children: "Next"
        }
      )
    ] }) : null
  ] });
}
const od = '.sig-root{--sig-bg: transparent;--sig-surface: rgba(15, 23, 42, .04);--sig-surface-hover: rgba(15, 23, 42, .08);--sig-border: rgba(15, 23, 42, .12);--sig-text: #0f172a;--sig-muted: #64748b;--sig-accent: #0f766e;--sig-accent-soft: rgba(15, 118, 110, .14);--sig-selection: var(--sig-accent);--sig-danger: #b91c1c;--sig-danger-soft: rgba(185, 28, 28, .12);--sig-radius: 10px;--sig-shadow: 0 1px 2px rgba(15, 23, 42, .06);box-sizing:border-box;color:var(--sig-text);font-family:Segoe UI,ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.35;width:100%;height:100%;display:flex;flex-direction:column;gap:10px;padding:2px;background:var(--sig-bg);-webkit-user-select:none;user-select:none}.sig-root *,.sig-root *:before,.sig-root *:after{box-sizing:border-box}.sig-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:32px;flex:0 0 auto}.sig-count{color:var(--sig-muted);font-variant-numeric:tabular-nums;margin-right:auto;font-weight:600;letter-spacing:.01em}.sig-select-all{display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px}.sig-select-all-master{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--sig-border);border-radius:8px;background:#fff;box-shadow:var(--sig-shadow);cursor:pointer;font:inherit;font-weight:650;color:var(--sig-text)}.sig-select-all-master:disabled{opacity:.45;cursor:not-allowed}.sig-select-all-master-on{border-color:var(--sig-selection, var(--sig-accent));background:color-mix(in srgb,var(--sig-selection, var(--sig-accent)) 12%,#fff)}.sig-select-all-box{width:16px;height:16px;border:2px solid var(--sig-border);border-radius:4px;display:inline-block;position:relative;flex:0 0 auto;background:#fff}.sig-select-all-master-on .sig-select-all-box,.sig-select-all-box[data-state=all]{border-color:var(--sig-selection, var(--sig-accent));background:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=all]:after{content:"";position:absolute;left:3px;top:0;width:5px;height:9px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.sig-select-all-box[data-state=some]{border-color:var(--sig-selection, var(--sig-accent))}.sig-select-all-box[data-state=some]:after{content:"";position:absolute;left:2px;right:2px;top:6px;height:2px;background:var(--sig-selection, var(--sig-accent));border-radius:1px}.sig-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--sig-border);background:#fff;color:var(--sig-text);border-radius:8px;padding:6px 10px;font:inherit;font-weight:600;cursor:pointer;transition:background .12s ease,border-color .12s ease,transform 80ms ease,box-shadow .12s ease;box-shadow:var(--sig-shadow)}.sig-btn:hover:not(:disabled){background:var(--sig-surface-hover)}.sig-btn:active:not(:disabled){transform:translateY(1px)}.sig-btn:disabled{opacity:.45;cursor:not-allowed}.sig-btn-primary{background:var(--sig-accent);border-color:transparent;color:#fff}.sig-btn-primary:hover:not(:disabled){background:#0d9488}.sig-btn-danger{background:var(--sig-danger-soft);border-color:transparent;color:var(--sig-danger)}.sig-btn-danger:hover:not(:disabled){background:#b91c1c33}.sig-btn-ghost{background:transparent;box-shadow:none}.sig-scroll{flex:1 1 auto;min-height:0;overflow:auto;padding-right:2px;scrollbar-gutter:stable}.sig-page{flex:1 1 auto;overflow:visible;min-height:0}.sig-pager{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;flex:0 0 auto;padding-top:2px}.sig-pager-label{color:var(--sig-muted);font-variant-numeric:tabular-nums;font-weight:600;min-width:10ch;text-align:center}.sig-pager-range{font-weight:500;opacity:.9}.sig-grid{display:grid!important;width:100%;align-content:start;grid-auto-rows:auto}.sig-empty{color:var(--sig-muted);padding:24px 8px;text-align:center}.sig-card{--sig-card-fg: var(--sig-text);position:relative;display:flex;flex-direction:column;border:1px solid var(--sig-border);border-radius:var(--sig-radius);background:#fff;color:var(--sig-card-fg);overflow:hidden;box-shadow:var(--sig-shadow);transition:border-color .14s ease,box-shadow .14s ease,transform .14s ease;outline:none}.sig-card:hover{border-color:#0f766e59;box-shadow:0 6px 18px #0f172a14;transform:translateY(-1px)}.sig-card:focus-visible{border-color:var(--sig-accent);box-shadow:0 0 0 3px var(--sig-accent-soft)}.sig-card-selected{border-color:var(--sig-selection);box-shadow:0 0 0 2px color-mix(in srgb,var(--sig-selection) 22%,transparent)}.sig-card-image-only .sig-thumb-wrap{border-radius:inherit}.sig-card-disabled{opacity:.55;filter:grayscale(.15)}.sig-thumb-wrap{position:relative;aspect-ratio:1 / 1;background:var(--sig-surface);overflow:hidden;cursor:pointer;box-shadow:inset 0 0 0 0 transparent;transition:box-shadow .14s ease}.sig-thumb-wrap-static{cursor:default}.sig-thumb-wrap-selected{box-shadow:inset 0 0 0 4px var(--sig-selection)}.sig-thumb-wrap-selected:after{content:"";position:absolute;top:4px;right:4px;bottom:4px;left:4px;border:1px solid rgba(255,255,255,.55);pointer-events:none;z-index:1}.sig-thumb{width:100%;height:100%;display:block;object-fit:cover;transition:transform .18s ease}.sig-card:hover .sig-thumb{transform:scale(1.03)}.sig-hover-overlay{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:28px 10px 10px;color:#fff;font-weight:650;font-size:12px;line-height:1.3;background:linear-gradient(to top,rgba(15,23,42,.82) 0%,rgba(15,23,42,.35) 55%,transparent 100%);opacity:0;transform:translateY(4px);transition:opacity .14s ease,transform .14s ease;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-thumb-wrap:hover .sig-hover-overlay,.sig-thumb-wrap:focus-within .sig-hover-overlay{opacity:1;transform:translateY(0)}.sig-check{position:absolute;top:8px;left:8px;z-index:3;width:22px;height:22px;margin:0;accent-color:var(--sig-selection);cursor:pointer;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.sig-meta{display:flex;flex-direction:column;gap:2px;padding:8px 10px 10px;min-width:0}.sig-label{font-weight:650;color:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-caption{color:color-mix(in srgb,currentColor 62%,transparent);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sig-card-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 10px}.sig-card-actions .sig-btn{padding:4px 8px;font-size:12px;font-weight:600}.sig-texts{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:0 10px 8px}.sig-text{display:inline-block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.sig-text-muted{color:var(--sig-muted);font-size:12px}.sig-text-accent{color:var(--sig-accent);font-weight:650}.sig-text-danger{color:var(--sig-danger);font-weight:650}.sig-text-badge{color:#fff;background:var(--sig-accent);border-radius:999px;padding:2px 8px;font-size:11px;font-weight:700;letter-spacing:.02em}.sig-text-clickable{cursor:pointer}.sig-text-clickable:hover{text-decoration:underline}.sig-text-clickable:focus-visible{outline:2px solid var(--sig-accent);outline-offset:2px;border-radius:4px}', Aa = "streamlit-image-board-styles";
function ud(p) {
  var M;
  if (typeof document > "u") return;
  const s = p && "getRootNode" in p ? p.getRootNode() : p ?? document, d = s instanceof ShadowRoot ? s : s instanceof Document ? s.head : document.head;
  if ((M = d.querySelector) != null && M.call(d, `#${Aa}`))
    return;
  const T = document.createElement("style");
  T.id = Aa, T.textContent = od, d.appendChild(T);
}
const Ll = /* @__PURE__ */ new WeakMap();
function sd(p, s, d) {
  let T = Oa(s), M = {
    selected_ids: [...T.selected_ids],
    selected_csv: T.selected_ids.join(","),
    clicked_button: null,
    clicked_item: null,
    action_nonce: 0
  };
  const B = (j, L) => {
    if (j === "selected_ids") {
      const F = Array.isArray(L) ? L.map(String) : [];
      M = {
        ...M,
        selected_ids: F,
        selected_csv: F.join(",")
      };
    } else j === "selected_csv" ? M = {
      ...M,
      selected_csv: typeof L == "string" ? L : ""
    } : j === "clicked_button" ? M = {
      ...M,
      clicked_button: typeof L == "string" ? L : null
    } : j === "clicked_item" ? M = {
      ...M,
      clicked_item: typeof L == "string" ? L : null
    } : j === "action_nonce" && (M = {
      ...M,
      action_nonce: typeof L == "number" ? L : 0
    });
    d == null || d(M);
  }, U = () => {
    ud(p);
    let j = Ll.get(p);
    j || (j = Gf.createRoot(p), Ll.set(p, j)), j.render(
      /* @__PURE__ */ V.jsx(de.StrictMode, { children: /* @__PURE__ */ V.jsx(id, { ...T, setStateValue: B }) })
    );
  };
  return U(), {
    update(j) {
      T = Oa({ ...T, ...j }), U();
    },
    destroy() {
      const j = Ll.get(p);
      j && (j.unmount(), Ll.delete(p)), p instanceof HTMLElement && p.replaceChildren();
    }
  };
}
const jl = /* @__PURE__ */ new WeakMap(), ad = (p) => {
  const { data: s, parentElement: d, setStateValue: T } = p, M = d.querySelector(".react-root");
  if (!M)
    throw new Error("Unexpected: React root element not found");
  let B = jl.get(d);
  if (B)
    B.setStateValue = T, B.controller.update(s);
  else {
    const U = {
      setStateValue: T,
      controller: null
    };
    U.controller = sd(M, s, (j) => {
      U.setStateValue("selected_ids", j.selected_ids), U.setStateValue("selected_csv", j.selected_csv), U.setStateValue("clicked_button", j.clicked_button), U.setStateValue("clicked_item", j.clicked_item), U.setStateValue("action_nonce", j.action_nonce);
    }), jl.set(d, U), B = U;
  }
  return () => {
    const U = jl.get(d);
    U && (U.controller.destroy(), jl.delete(d));
  };
};
export {
  ad as default
};
