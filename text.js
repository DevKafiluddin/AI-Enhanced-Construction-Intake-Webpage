var Mp = e => {
    throw TypeError(e)
}
;
var Lu = (e, t, n) => t.has(e) || Mp("Cannot " + n);
var A = (e, t, n) => (Lu(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , oe = (e, t, n) => t.has(e) ? Mp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , q = (e, t, n, r) => (Lu(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , He = (e, t, n) => (Lu(e, t, "access private method"),
n);
var Zi = (e, t, n, r) => ({
    set _(o) {
        q(e, t, o, n)
    },
    get _() {
        return A(e, t, r)
    }
});
function DC(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function uy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var cy = {
    exports: {}
}
  , Ul = {}
  , dy = {
    exports: {}
}
  , J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i = Symbol.for("react.element")
  , IC = Symbol.for("react.portal")
  , LC = Symbol.for("react.fragment")
  , OC = Symbol.for("react.strict_mode")
  , _C = Symbol.for("react.profiler")
  , FC = Symbol.for("react.provider")
  , VC = Symbol.for("react.context")
  , BC = Symbol.for("react.forward_ref")
  , $C = Symbol.for("react.suspense")
  , zC = Symbol.for("react.memo")
  , UC = Symbol.for("react.lazy")
  , jp = Symbol.iterator;
function WC(e) {
    return e === null || typeof e != "object" ? null : (e = jp && e[jp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fy = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , hy = Object.assign
  , py = {};
function fs(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = py,
    this.updater = n || fy
}
fs.prototype.isReactComponent = {};
fs.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
fs.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function my() {}
my.prototype = fs.prototype;
function Rf(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = py,
    this.updater = n || fy
}
var Nf = Rf.prototype = new my;
Nf.constructor = Rf;
hy(Nf, fs.prototype);
Nf.isPureReactComponent = !0;
var Dp = Array.isArray
  , gy = Object.prototype.hasOwnProperty
  , Af = {
    current: null
}
  , vy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function yy(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            gy.call(t, r) && !vy.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: _i,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Af.current
    }
}
function HC(e, t) {
    return {
        $$typeof: _i,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Mf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _i
}
function KC(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ip = /\/+/g;
function Ou(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? KC("" + e.key) : t.toString(36)
}
function Ma(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case _i:
            case IC:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Ou(i, 0) : r,
        Dp(o) ? (n = "",
        e != null && (n = e.replace(Ip, "$&/") + "/"),
        Ma(o, t, n, "", function(u) {
            return u
        })) : o != null && (Mf(o) && (o = HC(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ip, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Dp(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Ou(s, a);
            i += Ma(s, t, n, l, o)
        }
    else if (l = WC(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + Ou(s, a++),
            i += Ma(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Ji(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ma(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function GC(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ot = {
    current: null
}
  , ja = {
    transition: null
}
  , YC = {
    ReactCurrentDispatcher: ot,
    ReactCurrentBatchConfig: ja,
    ReactCurrentOwner: Af
};
function xy() {
    throw Error("act(...) is not supported in production builds of React.")
}
J.Children = {
    map: Ji,
    forEach: function(e, t, n) {
        Ji(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ji(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ji(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Mf(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
J.Component = fs;
J.Fragment = LC;
J.Profiler = _C;
J.PureComponent = Rf;
J.StrictMode = OC;
J.Suspense = $C;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = YC;
J.act = xy;
J.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hy({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = Af.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            gy.call(t, l) && !vy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: _i,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
J.createContext = function(e) {
    return e = {
        $$typeof: VC,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: FC,
        _context: e
    },
    e.Consumer = e
}
;
J.createElement = yy;
J.createFactory = function(e) {
    var t = yy.bind(null, e);
    return t.type = e,
    t
}
;
J.createRef = function() {
    return {
        current: null
    }
}
;
J.forwardRef = function(e) {
    return {
        $$typeof: BC,
        render: e
    }
}
;
J.isValidElement = Mf;
J.lazy = function(e) {
    return {
        $$typeof: UC,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: GC
    }
}
;
J.memo = function(e, t) {
    return {
        $$typeof: zC,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
J.startTransition = function(e) {
    var t = ja.transition;
    ja.transition = {};
    try {
        e()
    } finally {
        ja.transition = t
    }
}
;
J.unstable_act = xy;
J.useCallback = function(e, t) {
    return ot.current.useCallback(e, t)
}
;
J.useContext = function(e) {
    return ot.current.useContext(e)
}
;
J.useDebugValue = function() {}
;
J.useDeferredValue = function(e) {
    return ot.current.useDeferredValue(e)
}
;
J.useEffect = function(e, t) {
    return ot.current.useEffect(e, t)
}
;
J.useId = function() {
    return ot.current.useId()
}
;
J.useImperativeHandle = function(e, t, n) {
    return ot.current.useImperativeHandle(e, t, n)
}
;
J.useInsertionEffect = function(e, t) {
    return ot.current.useInsertionEffect(e, t)
}
;
J.useLayoutEffect = function(e, t) {
    return ot.current.useLayoutEffect(e, t)
}
;
J.useMemo = function(e, t) {
    return ot.current.useMemo(e, t)
}
;
J.useReducer = function(e, t, n) {
    return ot.current.useReducer(e, t, n)
}
;
J.useRef = function(e) {
    return ot.current.useRef(e)
}
;
J.useState = function(e) {
    return ot.current.useState(e)
}
;
J.useSyncExternalStore = function(e, t, n) {
    return ot.current.useSyncExternalStore(e, t, n)
}
;
J.useTransition = function() {
    return ot.current.useTransition()
}
;
J.version = "18.3.1";
dy.exports = J;
var g = dy.exports;
const I = uy(g)
  , jf = DC({
    __proto__: null,
    default: I
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QC = g
  , qC = Symbol.for("react.element")
  , XC = Symbol.for("react.fragment")
  , ZC = Object.prototype.hasOwnProperty
  , JC = QC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , eE = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function wy(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        ZC.call(t, r) && !eE.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: qC,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: JC.current
    }
}
Ul.Fragment = XC;
Ul.jsx = wy;
Ul.jsxs = wy;
cy.exports = Ul;
var m = cy.exports
  , Sy = {
    exports: {}
}
  , yt = {}
  , by = {
    exports: {}
}
  , Cy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, N) {
        var O = k.length;
        k.push(N);
        e: for (; 0 < O; ) {
            var K = O - 1 >>> 1
              , U = k[K];
            if (0 < o(U, N))
                k[K] = N,
                k[O] = U,
                O = K;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var N = k[0]
          , O = k.pop();
        if (O !== N) {
            k[0] = O;
            e: for (var K = 0, U = k.length, X = U >>> 1; K < X; ) {
                var Y = 2 * (K + 1) - 1
                  , de = k[Y]
                  , Te = Y + 1
                  , _ = k[Te];
                if (0 > o(de, O))
                    Te < U && 0 > o(_, de) ? (k[K] = _,
                    k[Te] = O,
                    K = Te) : (k[K] = de,
                    k[Y] = O,
                    K = Y);
                else if (Te < U && 0 > o(_, O))
                    k[K] = _,
                    k[Te] = O,
                    K = Te;
                else
                    break e
            }
        }
        return N
    }
    function o(k, N) {
        var O = k.sortIndex - N.sortIndex;
        return O !== 0 ? O : k.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , S = !1
      , p = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(k) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= k)
                r(u),
                N.sortIndex = N.expirationTime,
                t(l, N);
            else
                break;
            N = n(u)
        }
    }
    function b(k) {
        if (p = !1,
        x(k),
        !S)
            if (n(l) !== null)
                S = !0,
                B(C);
            else {
                var N = n(u);
                N !== null && V(b, N.startTime - k)
            }
    }
    function C(k, N) {
        S = !1,
        p && (p = !1,
        y(T),
        T = -1),
        h = !0;
        var O = f;
        try {
            for (x(N),
            d = n(l); d !== null && (!(d.expirationTime > N) || k && !F()); ) {
                var K = d.callback;
                if (typeof K == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var U = K(d.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof U == "function" ? d.callback = U : d === n(l) && r(l),
                    x(N)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var X = !0;
            else {
                var Y = n(u);
                Y !== null && V(b, Y.startTime - N),
                X = !1
            }
            return X
        } finally {
            d = null,
            f = O,
            h = !1
        }
    }
    var E = !1
      , P = null
      , T = -1
      , R = 5
      , M = -1;
    function F() {
        return !(e.unstable_now() - M < R)
    }
    function L() {
        if (P !== null) {
            var k = e.unstable_now();
            M = k;
            var N = !0;
            try {
                N = P(!0, k)
            } finally {
                N ? W() : (E = !1,
                P = null)
            }
        } else
            E = !1
    }
    var W;
    if (typeof v == "function")
        W = function() {
            v(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , H = D.port2;
        D.port1.onmessage = L,
        W = function() {
            H.postMessage(null)
        }
    } else
        W = function() {
            w(L, 0)
        }
        ;
    function B(k) {
        P = k,
        E || (E = !0,
        W())
    }
    function V(k, N) {
        T = w(function() {
            k(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || h || (S = !0,
        B(C))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = f
        }
        var O = f;
        f = N;
        try {
            return k()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, N) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var O = f;
        f = k;
        try {
            return N()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, N, O) {
        var K = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? K + O : K) : O = K,
        k) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = O + U,
        k = {
            id: c++,
            callback: N,
            priorityLevel: k,
            startTime: O,
            expirationTime: U,
            sortIndex: -1
        },
        O > K ? (k.sortIndex = O,
        t(u, k),
        n(l) === null && k === n(u) && (p ? (y(T),
        T = -1) : p = !0,
        V(b, O - K))) : (k.sortIndex = U,
        t(l, k),
        S || h || (S = !0,
        B(C))),
        k
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(k) {
        var N = f;
        return function() {
            var O = f;
            f = N;
            try {
                return k.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
}
)(Cy);
by.exports = Cy;
var tE = by.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nE = g
  , vt = tE;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ey = new Set
  , si = {};
function oo(e, t) {
    ts(e, t),
    ts(e + "Capture", t)
}
function ts(e, t) {
    for (si[e] = t,
    e = 0; e < t.length; e++)
        Ey.add(t[e])
}
var Pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , $c = Object.prototype.hasOwnProperty
  , rE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Lp = {}
  , Op = {};
function oE(e) {
    return $c.call(Op, e) ? !0 : $c.call(Lp, e) ? !1 : rE.test(e) ? Op[e] = !0 : (Lp[e] = !0,
    !1)
}
function sE(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function iE(e, t, n, r) {
    if (t === null || typeof t > "u" || sE(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function st(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ze[e] = new st(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ze[t] = new st(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ze[e] = new st(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ze[e] = new st(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ze[e] = new st(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ze[e] = new st(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ze[e] = new st(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ze[e] = new st(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ze[e] = new st(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Df = /[\-:]([a-z])/g;
function If(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Df, If);
    ze[t] = new st(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Df, If);
    ze[t] = new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Df, If);
    ze[t] = new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ze[e] = new st(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ze.xlinkHref = new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ze[e] = new st(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Lf(e, t, n, r) {
    var o = ze.hasOwnProperty(t) ? ze[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (iE(t, n, o, r) && (n = null),
    r || o === null ? oE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dn = nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ea = Symbol.for("react.element")
  , wo = Symbol.for("react.portal")
  , So = Symbol.for("react.fragment")
  , Of = Symbol.for("react.strict_mode")
  , zc = Symbol.for("react.profiler")
  , Ty = Symbol.for("react.provider")
  , Py = Symbol.for("react.context")
  , _f = Symbol.for("react.forward_ref")
  , Uc = Symbol.for("react.suspense")
  , Wc = Symbol.for("react.suspense_list")
  , Ff = Symbol.for("react.memo")
  , Hn = Symbol.for("react.lazy")
  , ky = Symbol.for("react.offscreen")
  , _p = Symbol.iterator;
function Ps(e) {
    return e === null || typeof e != "object" ? null : (e = _p && e[_p] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ce = Object.assign, _u;
function _s(e) {
    if (_u === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            _u = t && t[1] || ""
        }
    return `
` + _u + e
}
var Fu = !1;
function Vu(e, t) {
    if (!e || Fu)
        return "";
    Fu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Fu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? _s(e) : ""
}
function aE(e) {
    switch (e.tag) {
    case 5:
        return _s(e.type);
    case 16:
        return _s("Lazy");
    case 13:
        return _s("Suspense");
    case 19:
        return _s("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Vu(e.type, !1),
        e;
    case 11:
        return e = Vu(e.type.render, !1),
        e;
    case 1:
        return e = Vu(e.type, !0),
        e;
    default:
        return ""
    }
}
function Hc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case So:
        return "Fragment";
    case wo:
        return "Portal";
    case zc:
        return "Profiler";
    case Of:
        return "StrictMode";
    case Uc:
        return "Suspense";
    case Wc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Py:
            return (e.displayName || "Context") + ".Consumer";
        case Ty:
            return (e._context.displayName || "Context") + ".Provider";
        case _f:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ff:
            return t = e.displayName || null,
            t !== null ? t : Hc(e.type) || "Memo";
        case Hn:
            t = e._payload,
            e = e._init;
            try {
                return Hc(e(t))
            } catch {}
        }
    return null
}
function lE(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Hc(t);
    case 8:
        return t === Of ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function pr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ry(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function uE(e) {
    var t = Ry(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ta(e) {
    e._valueTracker || (e._valueTracker = uE(e))
}
function Ny(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ry(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function nl(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Kc(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Fp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = pr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ay(e, t) {
    t = t.checked,
    t != null && Lf(e, "checked", t, !1)
}
function Gc(e, t) {
    Ay(e, t);
    var n = pr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Yc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yc(e, t.type, pr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Vp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Yc(e, t, n) {
    (t !== "number" || nl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Fs = Array.isArray;
function _o(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + pr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Qc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Bp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (Fs(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: pr(n)
    }
}
function My(e, t) {
    var n = pr(t.value)
      , r = pr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function $p(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function jy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function qc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? jy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var na, Dy = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (na = na || document.createElement("div"),
        na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = na.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ii(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Hs = {
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
}
  , cE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hs).forEach(function(e) {
    cE.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Hs[t] = Hs[e]
    })
});
function Iy(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hs.hasOwnProperty(e) && Hs[e] ? ("" + t).trim() : t + "px"
}
function Ly(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Iy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var dE = Ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Xc(e, t) {
    if (t) {
        if (dE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Zc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var Jc = null;
function Vf(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ed = null
  , Fo = null
  , Vo = null;
function zp(e) {
    if (e = Bi(e)) {
        if (typeof ed != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Yl(t),
        ed(e.stateNode, e.type, t))
    }
}
function Oy(e) {
    Fo ? Vo ? Vo.push(e) : Vo = [e] : Fo = e
}
function _y() {
    if (Fo) {
        var e = Fo
          , t = Vo;
        if (Vo = Fo = null,
        zp(e),
        t)
            for (e = 0; e < t.length; e++)
                zp(t[e])
    }
}
function Fy(e, t) {
    return e(t)
}
function Vy() {}
var Bu = !1;
function By(e, t, n) {
    if (Bu)
        return e(t, n);
    Bu = !0;
    try {
        return Fy(e, t, n)
    } finally {
        Bu = !1,
        (Fo !== null || Vo !== null) && (Vy(),
        _y())
    }
}
function ai(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Yl(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var td = !1;
if (Pn)
    try {
        var ks = {};
        Object.defineProperty(ks, "passive", {
            get: function() {
                td = !0
            }
        }),
        window.addEventListener("test", ks, ks),
        window.removeEventListener("test", ks, ks)
    } catch {
        td = !1
    }
function fE(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Ks = !1
  , rl = null
  , ol = !1
  , nd = null
  , hE = {
    onError: function(e) {
        Ks = !0,
        rl = e
    }
};
function pE(e, t, n, r, o, s, i, a, l) {
    Ks = !1,
    rl = null,
    fE.apply(hE, arguments)
}
function mE(e, t, n, r, o, s, i, a, l) {
    if (pE.apply(this, arguments),
    Ks) {
        if (Ks) {
            var u = rl;
            Ks = !1,
            rl = null
        } else
            throw Error(j(198));
        ol || (ol = !0,
        nd = u)
    }
}
function so(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function $y(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Up(e) {
    if (so(e) !== e)
        throw Error(j(188))
}
function gE(e) {
    var t = e.alternate;
    if (!t) {
        if (t = so(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Up(o),
                    e;
                if (s === r)
                    return Up(o),
                    t;
                s = s.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function zy(e) {
    return e = gE(e),
    e !== null ? Uy(e) : null
}
function Uy(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Uy(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Wy = vt.unstable_scheduleCallback
  , Wp = vt.unstable_cancelCallback
  , vE = vt.unstable_shouldYield
  , yE = vt.unstable_requestPaint
  , Ne = vt.unstable_now
  , xE = vt.unstable_getCurrentPriorityLevel
  , Bf = vt.unstable_ImmediatePriority
  , Hy = vt.unstable_UserBlockingPriority
  , sl = vt.unstable_NormalPriority
  , wE = vt.unstable_LowPriority
  , Ky = vt.unstable_IdlePriority
  , Wl = null
  , dn = null;
function SE(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
        try {
            dn.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : EE
  , bE = Math.log
  , CE = Math.LN2;
function EE(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (bE(e) / CE | 0) | 0
}
var ra = 64
  , oa = 4194304;
function Vs(e) {
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
        return e
    }
}
function il(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = Vs(a) : (s &= i,
        s !== 0 && (r = Vs(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = Vs(i) : s !== 0 && (r = Vs(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Yt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function TE(e, t) {
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
        return -1
    }
}
function PE(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - Yt(s)
          , a = 1 << i
          , l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = TE(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function rd(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Gy() {
    var e = ra;
    return ra <<= 1,
    !(ra & 4194240) && (ra = 64),
    e
}
function $u(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Fi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Yt(t),
    e[t] = n
}
function kE(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Yt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function $f(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Yt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ae = 0;
function Yy(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Qy, zf, qy, Xy, Zy, od = !1, sa = [], sr = null, ir = null, ar = null, li = new Map, ui = new Map, Yn = [], RE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hp(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        sr = null;
        break;
    case "dragenter":
    case "dragleave":
        ir = null;
        break;
    case "mouseover":
    case "mouseout":
        ar = null;
        break;
    case "pointerover":
    case "pointerout":
        li.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ui.delete(t.pointerId)
    }
}
function Rs(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Bi(t),
    t !== null && zf(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function NE(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return sr = Rs(sr, e, t, n, r, o),
        !0;
    case "dragenter":
        return ir = Rs(ir, e, t, n, r, o),
        !0;
    case "mouseover":
        return ar = Rs(ar, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return li.set(s, Rs(li.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        ui.set(s, Rs(ui.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Jy(e) {
    var t = Or(e.target);
    if (t !== null) {
        var n = so(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = $y(n),
                t !== null) {
                    e.blockedOn = t,
                    Zy(e.priority, function() {
                        qy(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Da(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Jc = r,
            n.target.dispatchEvent(r),
            Jc = null
        } else
            return t = Bi(n),
            t !== null && zf(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Kp(e, t, n) {
    Da(e) && n.delete(t)
}
function AE() {
    od = !1,
    sr !== null && Da(sr) && (sr = null),
    ir !== null && Da(ir) && (ir = null),
    ar !== null && Da(ar) && (ar = null),
    li.forEach(Kp),
    ui.forEach(Kp)
}
function Ns(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    od || (od = !0,
    vt.unstable_scheduleCallback(vt.unstable_NormalPriority, AE)))
}
function ci(e) {
    function t(o) {
        return Ns(o, e)
    }
    if (0 < sa.length) {
        Ns(sa[0], e);
        for (var n = 1; n < sa.length; n++) {
            var r = sa[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (sr !== null && Ns(sr, e),
    ir !== null && Ns(ir, e),
    ar !== null && Ns(ar, e),
    li.forEach(t),
    ui.forEach(t),
    n = 0; n < Yn.length; n++)
        r = Yn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yn.length && (n = Yn[0],
    n.blockedOn === null); )
        Jy(n),
        n.blockedOn === null && Yn.shift()
}
var Bo = Dn.ReactCurrentBatchConfig
  , al = !0;
function ME(e, t, n, r) {
    var o = ae
      , s = Bo.transition;
    Bo.transition = null;
    try {
        ae = 1,
        Uf(e, t, n, r)
    } finally {
        ae = o,
        Bo.transition = s
    }
}
function jE(e, t, n, r) {
    var o = ae
      , s = Bo.transition;
    Bo.transition = null;
    try {
        ae = 4,
        Uf(e, t, n, r)
    } finally {
        ae = o,
        Bo.transition = s
    }
}
function Uf(e, t, n, r) {
    if (al) {
        var o = sd(e, t, n, r);
        if (o === null)
            Xu(e, t, r, ll, n),
            Hp(e, r);
        else if (NE(o, e, t, n, r))
            r.stopPropagation();
        else if (Hp(e, r),
        t & 4 && -1 < RE.indexOf(e)) {
            for (; o !== null; ) {
                var s = Bi(o);
                if (s !== null && Qy(s),
                s = sd(e, t, n, r),
                s === null && Xu(e, t, r, ll, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Xu(e, t, r, null, n)
    }
}
var ll = null;
function sd(e, t, n, r) {
    if (ll = null,
    e = Vf(r),
    e = Or(e),
    e !== null)
        if (t = so(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = $y(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ll = e,
    null
}
function e0(e) {
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
        switch (xE()) {
        case Bf:
            return 1;
        case Hy:
            return 4;
        case sl:
        case wE:
            return 16;
        case Ky:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var tr = null
  , Wf = null
  , Ia = null;
function t0() {
    if (Ia)
        return Ia;
    var e, t = Wf, n = t.length, r, o = "value"in tr ? tr.value : tr.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return Ia = o.slice(e, 1 < r ? 1 - r : void 0)
}
function La(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ia() {
    return !0
}
function Gp() {
    return !1
}
function xt(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ia : Gp,
        this.isPropagationStopped = Gp,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ia)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ia)
        },
        persist: function() {},
        isPersistent: ia
    }),
    t
}
var hs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Hf = xt(hs), Vi = Ce({}, hs, {
    view: 0,
    detail: 0
}), DE = xt(Vi), zu, Uu, As, Hl = Ce({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Kf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== As && (As && e.type === "mousemove" ? (zu = e.screenX - As.screenX,
        Uu = e.screenY - As.screenY) : Uu = zu = 0,
        As = e),
        zu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Uu
    }
}), Yp = xt(Hl), IE = Ce({}, Hl, {
    dataTransfer: 0
}), LE = xt(IE), OE = Ce({}, Vi, {
    relatedTarget: 0
}), Wu = xt(OE), _E = Ce({}, hs, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), FE = xt(_E), VE = Ce({}, hs, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), BE = xt(VE), $E = Ce({}, hs, {
    data: 0
}), Qp = xt($E), zE = {
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
}, UE = {
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
}, WE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function HE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = WE[e]) ? !!t[e] : !1
}
function Kf() {
    return HE
}
var KE = Ce({}, Vi, {
    key: function(e) {
        if (e.key) {
            var t = zE[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = La(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? UE[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Kf,
    charCode: function(e) {
        return e.type === "keypress" ? La(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? La(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , GE = xt(KE)
  , YE = Ce({}, Hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , qp = xt(YE)
  , QE = Ce({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kf
})
  , qE = xt(QE)
  , XE = Ce({}, hs, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ZE = xt(XE)
  , JE = Ce({}, Hl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , eT = xt(JE)
  , tT = [9, 13, 27, 32]
  , Gf = Pn && "CompositionEvent"in window
  , Gs = null;
Pn && "documentMode"in document && (Gs = document.documentMode);
var nT = Pn && "TextEvent"in window && !Gs
  , n0 = Pn && (!Gf || Gs && 8 < Gs && 11 >= Gs)
  , Xp = " "
  , Zp = !1;
function r0(e, t) {
    switch (e) {
    case "keyup":
        return tT.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function o0(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var bo = !1;
function rT(e, t) {
    switch (e) {
    case "compositionend":
        return o0(t);
    case "keypress":
        return t.which !== 32 ? null : (Zp = !0,
        Xp);
    case "textInput":
        return e = t.data,
        e === Xp && Zp ? null : e;
    default:
        return null
    }
}
function oT(e, t) {
    if (bo)
        return e === "compositionend" || !Gf && r0(e, t) ? (e = t0(),
        Ia = Wf = tr = null,
        bo = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return n0 && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var sT = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Jp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sT[e.type] : t === "textarea"
}
function s0(e, t, n, r) {
    Oy(r),
    t = ul(t, "onChange"),
    0 < t.length && (n = new Hf("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ys = null
  , di = null;
function iT(e) {
    g0(e, 0)
}
function Kl(e) {
    var t = To(e);
    if (Ny(t))
        return e
}
function aT(e, t) {
    if (e === "change")
        return t
}
var i0 = !1;
if (Pn) {
    var Hu;
    if (Pn) {
        var Ku = "oninput"in document;
        if (!Ku) {
            var em = document.createElement("div");
            em.setAttribute("oninput", "return;"),
            Ku = typeof em.oninput == "function"
        }
        Hu = Ku
    } else
        Hu = !1;
    i0 = Hu && (!document.documentMode || 9 < document.documentMode)
}
function tm() {
    Ys && (Ys.detachEvent("onpropertychange", a0),
    di = Ys = null)
}
function a0(e) {
    if (e.propertyName === "value" && Kl(di)) {
        var t = [];
        s0(t, di, e, Vf(e)),
        By(iT, t)
    }
}
function lT(e, t, n) {
    e === "focusin" ? (tm(),
    Ys = t,
    di = n,
    Ys.attachEvent("onpropertychange", a0)) : e === "focusout" && tm()
}
function uT(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(di)
}
function cT(e, t) {
    if (e === "click")
        return Kl(t)
}
function dT(e, t) {
    if (e === "input" || e === "change")
        return Kl(t)
}
function fT(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Zt = typeof Object.is == "function" ? Object.is : fT;
function fi(e, t) {
    if (Zt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!$c.call(t, o) || !Zt(e[o], t[o]))
            return !1
    }
    return !0
}
function nm(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function rm(e, t) {
    var n = nm(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = nm(n)
    }
}
function l0(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? l0(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function u0() {
    for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = nl(e.document)
    }
    return t
}
function Yf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function hT(e) {
    var t = u0()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && l0(n.ownerDocument.documentElement, n)) {
        if (r !== null && Yf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = rm(n, s);
                var i = rm(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var pT = Pn && "documentMode"in document && 11 >= document.documentMode
  , Co = null
  , id = null
  , Qs = null
  , ad = !1;
function om(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ad || Co == null || Co !== nl(r) || (r = Co,
    "selectionStart"in r && Yf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Qs && fi(Qs, r) || (Qs = r,
    r = ul(id, "onSelect"),
    0 < r.length && (t = new Hf("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Co)))
}
function aa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Eo = {
    animationend: aa("Animation", "AnimationEnd"),
    animationiteration: aa("Animation", "AnimationIteration"),
    animationstart: aa("Animation", "AnimationStart"),
    transitionend: aa("Transition", "TransitionEnd")
}
  , Gu = {}
  , c0 = {};
Pn && (c0 = document.createElement("div").style,
"AnimationEvent"in window || (delete Eo.animationend.animation,
delete Eo.animationiteration.animation,
delete Eo.animationstart.animation),
"TransitionEvent"in window || delete Eo.transitionend.transition);
function Gl(e) {
    if (Gu[e])
        return Gu[e];
    if (!Eo[e])
        return e;
    var t = Eo[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in c0)
            return Gu[e] = t[n];
    return e
}
var d0 = Gl("animationend")
  , f0 = Gl("animationiteration")
  , h0 = Gl("animationstart")
  , p0 = Gl("transitionend")
  , m0 = new Map
  , sm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Sr(e, t) {
    m0.set(e, t),
    oo(t, [e])
}
for (var Yu = 0; Yu < sm.length; Yu++) {
    var Qu = sm[Yu]
      , mT = Qu.toLowerCase()
      , gT = Qu[0].toUpperCase() + Qu.slice(1);
    Sr(mT, "on" + gT)
}
Sr(d0, "onAnimationEnd");
Sr(f0, "onAnimationIteration");
Sr(h0, "onAnimationStart");
Sr("dblclick", "onDoubleClick");
Sr("focusin", "onFocus");
Sr("focusout", "onBlur");
Sr(p0, "onTransitionEnd");
ts("onMouseEnter", ["mouseout", "mouseover"]);
ts("onMouseLeave", ["mouseout", "mouseover"]);
ts("onPointerEnter", ["pointerout", "pointerover"]);
ts("onPointerLeave", ["pointerout", "pointerover"]);
oo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
oo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
oo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
oo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
oo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
oo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , vT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));
function im(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    mE(r, t, void 0, e),
    e.currentTarget = null
}
function g0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    im(o, a, u),
                    s = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    im(o, a, u),
                    s = l
                }
        }
    }
    if (ol)
        throw e = nd,
        ol = !1,
        nd = null,
        e
}
function he(e, t) {
    var n = t[fd];
    n === void 0 && (n = t[fd] = new Set);
    var r = e + "__bubble";
    n.has(r) || (v0(t, e, 2, !1),
    n.add(r))
}
function qu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    v0(n, e, r, t)
}
var la = "_reactListening" + Math.random().toString(36).slice(2);
function hi(e) {
    if (!e[la]) {
        e[la] = !0,
        Ey.forEach(function(n) {
            n !== "selectionchange" && (vT.has(n) || qu(n, !1, e),
            qu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[la] || (t[la] = !0,
        qu("selectionchange", !1, t))
    }
}
function v0(e, t, n, r) {
    switch (e0(t)) {
    case 1:
        var o = ME;
        break;
    case 4:
        o = jE;
        break;
    default:
        o = Uf
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !td || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Xu(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = Or(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    By(function() {
        var u = s
          , c = Vf(n)
          , d = [];
        e: {
            var f = m0.get(e);
            if (f !== void 0) {
                var h = Hf
                  , S = e;
                switch (e) {
                case "keypress":
                    if (La(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = GE;
                    break;
                case "focusin":
                    S = "focus",
                    h = Wu;
                    break;
                case "focusout":
                    S = "blur",
                    h = Wu;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Wu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Yp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = LE;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = qE;
                    break;
                case d0:
                case f0:
                case h0:
                    h = FE;
                    break;
                case p0:
                    h = ZE;
                    break;
                case "scroll":
                    h = DE;
                    break;
                case "wheel":
                    h = eT;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = BE;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = qp
                }
                var p = (t & 4) !== 0
                  , w = !p && e === "scroll"
                  , y = p ? f !== null ? f + "Capture" : null : f;
                p = [];
                for (var v = u, x; v !== null; ) {
                    x = v;
                    var b = x.stateNode;
                    if (x.tag === 5 && b !== null && (x = b,
                    y !== null && (b = ai(v, y),
                    b != null && p.push(pi(v, b, x)))),
                    w)
                        break;
                    v = v.return
                }
                0 < p.length && (f = new h(f,S,null,n,c),
                d.push({
                    event: f,
                    listeners: p
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== Jc && (S = n.relatedTarget || n.fromElement) && (Or(S) || S[kn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (S = n.relatedTarget || n.toElement,
                h = u,
                S = S ? Or(S) : null,
                S !== null && (w = so(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (h = null,
                S = u),
                h !== S)) {
                    if (p = Yp,
                    b = "onMouseLeave",
                    y = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (p = qp,
                    b = "onPointerLeave",
                    y = "onPointerEnter",
                    v = "pointer"),
                    w = h == null ? f : To(h),
                    x = S == null ? f : To(S),
                    f = new p(b,v + "leave",h,n,c),
                    f.target = w,
                    f.relatedTarget = x,
                    b = null,
                    Or(c) === u && (p = new p(y,v + "enter",S,n,c),
                    p.target = x,
                    p.relatedTarget = w,
                    b = p),
                    w = b,
                    h && S)
                        t: {
                            for (p = h,
                            y = S,
                            v = 0,
                            x = p; x; x = po(x))
                                v++;
                            for (x = 0,
                            b = y; b; b = po(b))
                                x++;
                            for (; 0 < v - x; )
                                p = po(p),
                                v--;
                            for (; 0 < x - v; )
                                y = po(y),
                                x--;
                            for (; v--; ) {
                                if (p === y || y !== null && p === y.alternate)
                                    break t;
                                p = po(p),
                                y = po(y)
                            }
                            p = null
                        }
                    else
                        p = null;
                    h !== null && am(d, f, h, p, !1),
                    S !== null && w !== null && am(d, w, S, p, !0)
                }
            }
            e: {
                if (f = u ? To(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var C = aT;
                else if (Jp(f))
                    if (i0)
                        C = dT;
                    else {
                        C = uT;
                        var E = lT
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = cT);
                if (C && (C = C(e, u))) {
                    s0(d, C, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Yc(f, "number", f.value)
            }
            switch (E = u ? To(u) : window,
            e) {
            case "focusin":
                (Jp(E) || E.contentEditable === "true") && (Co = E,
                id = u,
                Qs = null);
                break;
            case "focusout":
                Qs = id = Co = null;
                break;
            case "mousedown":
                ad = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ad = !1,
                om(d, n, c);
                break;
            case "selectionchange":
                if (pT)
                    break;
            case "keydown":
            case "keyup":
                om(d, n, c)
            }
            var P;
            if (Gf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                bo ? r0(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (n0 && n.locale !== "ko" && (bo || T !== "onCompositionStart" ? T === "onCompositionEnd" && bo && (P = t0()) : (tr = c,
            Wf = "value"in tr ? tr.value : tr.textContent,
            bo = !0)),
            E = ul(u, T),
            0 < E.length && (T = new Qp(T,e,null,n,c),
            d.push({
                event: T,
                listeners: E
            }),
            P ? T.data = P : (P = o0(n),
            P !== null && (T.data = P)))),
            (P = nT ? rT(e, n) : oT(e, n)) && (u = ul(u, "onBeforeInput"),
            0 < u.length && (c = new Qp("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = P))
        }
        g0(d, t)
    })
}
function pi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ul(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = ai(e, n),
        s != null && r.unshift(pi(e, s, o)),
        s = ai(e, t),
        s != null && r.push(pi(e, s, o))),
        e = e.return
    }
    return r
}
function po(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function am(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = ai(n, s),
        l != null && i.unshift(pi(n, l, a))) : o || (l = ai(n, s),
        l != null && i.push(pi(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var yT = /\r\n?/g
  , xT = /\u0000|\uFFFD/g;
function lm(e) {
    return (typeof e == "string" ? e : "" + e).replace(yT, `
`).replace(xT, "")
}
function ua(e, t, n) {
    if (t = lm(t),
    lm(e) !== t && n)
        throw Error(j(425))
}
function cl() {}
var ld = null
  , ud = null;
function cd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var dd = typeof setTimeout == "function" ? setTimeout : void 0
  , wT = typeof clearTimeout == "function" ? clearTimeout : void 0
  , um = typeof Promise == "function" ? Promise : void 0
  , ST = typeof queueMicrotask == "function" ? queueMicrotask : typeof um < "u" ? function(e) {
    return um.resolve(null).then(e).catch(bT)
}
: dd;
function bT(e) {
    setTimeout(function() {
        throw e
    })
}
function Zu(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    ci(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    ci(t)
}
function lr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function cm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ps = Math.random().toString(36).slice(2)
  , un = "__reactFiber$" + ps
  , mi = "__reactProps$" + ps
  , kn = "__reactContainer$" + ps
  , fd = "__reactEvents$" + ps
  , CT = "__reactListeners$" + ps
  , ET = "__reactHandles$" + ps;
function Or(e) {
    var t = e[un];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[kn] || n[un]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = cm(e); e !== null; ) {
                    if (n = e[un])
                        return n;
                    e = cm(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Bi(e) {
    return e = e[un] || e[kn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function To(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Yl(e) {
    return e[mi] || null
}
var hd = []
  , Po = -1;
function br(e) {
    return {
        current: e
    }
}
function pe(e) {
    0 > Po || (e.current = hd[Po],
    hd[Po] = null,
    Po--)
}
function ue(e, t) {
    Po++,
    hd[Po] = e.current,
    e.current = t
}
var mr = {}
  , Xe = br(mr)
  , ut = br(!1)
  , qr = mr;
function ns(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return mr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function ct(e) {
    return e = e.childContextTypes,
    e != null
}
function dl() {
    pe(ut),
    pe(Xe)
}
function dm(e, t, n) {
    if (Xe.current !== mr)
        throw Error(j(168));
    ue(Xe, t),
    ue(ut, n)
}
function y0(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, lE(e) || "Unknown", o));
    return Ce({}, n, r)
}
function fl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mr,
    qr = Xe.current,
    ue(Xe, e),
    ue(ut, ut.current),
    !0
}
function fm(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = y0(e, t, qr),
    r.__reactInternalMemoizedMergedChildContext = e,
    pe(ut),
    pe(Xe),
    ue(Xe, e)) : pe(ut),
    ue(ut, n)
}
var wn = null
  , Ql = !1
  , Ju = !1;
function x0(e) {
    wn === null ? wn = [e] : wn.push(e)
}
function TT(e) {
    Ql = !0,
    x0(e)
}
function Cr() {
    if (!Ju && wn !== null) {
        Ju = !0;
        var e = 0
          , t = ae;
        try {
            var n = wn;
            for (ae = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            wn = null,
            Ql = !1
        } catch (o) {
            throw wn !== null && (wn = wn.slice(e + 1)),
            Wy(Bf, Cr),
            o
        } finally {
            ae = t,
            Ju = !1
        }
    }
    return null
}
var ko = []
  , Ro = 0
  , hl = null
  , pl = 0
  , Et = []
  , Tt = 0
  , Xr = null
  , Cn = 1
  , En = "";
function Dr(e, t) {
    ko[Ro++] = pl,
    ko[Ro++] = hl,
    hl = e,
    pl = t
}
function w0(e, t, n) {
    Et[Tt++] = Cn,
    Et[Tt++] = En,
    Et[Tt++] = Xr,
    Xr = e;
    var r = Cn;
    e = En;
    var o = 32 - Yt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Yt(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        Cn = 1 << 32 - Yt(t) + o | n << o | r,
        En = s + e
    } else
        Cn = 1 << s | n << o | r,
        En = e
}
function Qf(e) {
    e.return !== null && (Dr(e, 1),
    w0(e, 1, 0))
}
function qf(e) {
    for (; e === hl; )
        hl = ko[--Ro],
        ko[Ro] = null,
        pl = ko[--Ro],
        ko[Ro] = null;
    for (; e === Xr; )
        Xr = Et[--Tt],
        Et[Tt] = null,
        En = Et[--Tt],
        Et[Tt] = null,
        Cn = Et[--Tt],
        Et[Tt] = null
}
var mt = null
  , pt = null
  , ve = !1
  , Gt = null;
function S0(e, t) {
    var n = Pt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function hm(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        mt = e,
        pt = lr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        mt = e,
        pt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Xr !== null ? {
            id: Cn,
            overflow: En
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Pt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        mt = e,
        pt = null,
        !0) : !1;
    default:
        return !1
    }
}
function pd(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function md(e) {
    if (ve) {
        var t = pt;
        if (t) {
            var n = t;
            if (!hm(e, t)) {
                if (pd(e))
                    throw Error(j(418));
                t = lr(n.nextSibling);
                var r = mt;
                t && hm(e, t) ? S0(r, n) : (e.flags = e.flags & -4097 | 2,
                ve = !1,
                mt = e)
            }
        } else {
            if (pd(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            ve = !1,
            mt = e
        }
    }
}
function pm(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    mt = e
}
function ca(e) {
    if (e !== mt)
        return !1;
    if (!ve)
        return pm(e),
        ve = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !cd(e.type, e.memoizedProps)),
    t && (t = pt)) {
        if (pd(e))
            throw b0(),
            Error(j(418));
        for (; t; )
            S0(e, t),
            t = lr(t.nextSibling)
    }
    if (pm(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            pt = lr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            pt = null
        }
    } else
        pt = mt ? lr(e.stateNode.nextSibling) : null;
    return !0
}
function b0() {
    for (var e = pt; e; )
        e = lr(e.nextSibling)
}
function rs() {
    pt = mt = null,
    ve = !1
}
function Xf(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}
var PT = Dn.ReactCurrentBatchConfig;
function Ms(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function da(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function mm(e) {
    var t = e._init;
    return t(e._payload)
}
function C0(e) {
    function t(y, v) {
        if (e) {
            var x = y.deletions;
            x === null ? (y.deletions = [v],
            y.flags |= 16) : x.push(v)
        }
    }
    function n(y, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(y, v),
            v = v.sibling;
        return null
    }
    function r(y, v) {
        for (y = new Map; v !== null; )
            v.key !== null ? y.set(v.key, v) : y.set(v.index, v),
            v = v.sibling;
        return y
    }
    function o(y, v) {
        return y = fr(y, v),
        y.index = 0,
        y.sibling = null,
        y
    }
    function s(y, v, x) {
        return y.index = x,
        e ? (x = y.alternate,
        x !== null ? (x = x.index,
        x < v ? (y.flags |= 2,
        v) : x) : (y.flags |= 2,
        v)) : (y.flags |= 1048576,
        v)
    }
    function i(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function a(y, v, x, b) {
        return v === null || v.tag !== 6 ? (v = ic(x, y.mode, b),
        v.return = y,
        v) : (v = o(v, x),
        v.return = y,
        v)
    }
    function l(y, v, x, b) {
        var C = x.type;
        return C === So ? c(y, v, x.props.children, b, x.key) : v !== null && (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Hn && mm(C) === v.type) ? (b = o(v, x.props),
        b.ref = Ms(y, v, x),
        b.return = y,
        b) : (b = za(x.type, x.key, x.props, null, y.mode, b),
        b.ref = Ms(y, v, x),
        b.return = y,
        b)
    }
    function u(y, v, x, b) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== x.containerInfo || v.stateNode.implementation !== x.implementation ? (v = ac(x, y.mode, b),
        v.return = y,
        v) : (v = o(v, x.children || []),
        v.return = y,
        v)
    }
    function c(y, v, x, b, C) {
        return v === null || v.tag !== 7 ? (v = Yr(x, y.mode, b, C),
        v.return = y,
        v) : (v = o(v, x),
        v.return = y,
        v)
    }
    function d(y, v, x) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = ic("" + v, y.mode, x),
            v.return = y,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case ea:
                return x = za(v.type, v.key, v.props, null, y.mode, x),
                x.ref = Ms(y, null, v),
                x.return = y,
                x;
            case wo:
                return v = ac(v, y.mode, x),
                v.return = y,
                v;
            case Hn:
                var b = v._init;
                return d(y, b(v._payload), x)
            }
            if (Fs(v) || Ps(v))
                return v = Yr(v, y.mode, x, null),
                v.return = y,
                v;
            da(y, v)
        }
        return null
    }
    function f(y, v, x, b) {
        var C = v !== null ? v.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return C !== null ? null : a(y, v, "" + x, b);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ea:
                return x.key === C ? l(y, v, x, b) : null;
            case wo:
                return x.key === C ? u(y, v, x, b) : null;
            case Hn:
                return C = x._init,
                f(y, v, C(x._payload), b)
            }
            if (Fs(x) || Ps(x))
                return C !== null ? null : c(y, v, x, b, null);
            da(y, x)
        }
        return null
    }
    function h(y, v, x, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return y = y.get(x) || null,
            a(v, y, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case ea:
                return y = y.get(b.key === null ? x : b.key) || null,
                l(v, y, b, C);
            case wo:
                return y = y.get(b.key === null ? x : b.key) || null,
                u(v, y, b, C);
            case Hn:
                var E = b._init;
                return h(y, v, x, E(b._payload), C)
            }
            if (Fs(b) || Ps(b))
                return y = y.get(x) || null,
                c(v, y, b, C, null);
            da(v, b)
        }
        return null
    }
    function S(y, v, x, b) {
        for (var C = null, E = null, P = v, T = v = 0, R = null; P !== null && T < x.length; T++) {
            P.index > T ? (R = P,
            P = null) : R = P.sibling;
            var M = f(y, P, x[T], b);
            if (M === null) {
                P === null && (P = R);
                break
            }
            e && P && M.alternate === null && t(y, P),
            v = s(M, v, T),
            E === null ? C = M : E.sibling = M,
            E = M,
            P = R
        }
        if (T === x.length)
            return n(y, P),
            ve && Dr(y, T),
            C;
        if (P === null) {
            for (; T < x.length; T++)
                P = d(y, x[T], b),
                P !== null && (v = s(P, v, T),
                E === null ? C = P : E.sibling = P,
                E = P);
            return ve && Dr(y, T),
            C
        }
        for (P = r(y, P); T < x.length; T++)
            R = h(P, y, T, x[T], b),
            R !== null && (e && R.alternate !== null && P.delete(R.key === null ? T : R.key),
            v = s(R, v, T),
            E === null ? C = R : E.sibling = R,
            E = R);
        return e && P.forEach(function(F) {
            return t(y, F)
        }),
        ve && Dr(y, T),
        C
    }
    function p(y, v, x, b) {
        var C = Ps(x);
        if (typeof C != "function")
            throw Error(j(150));
        if (x = C.call(x),
        x == null)
            throw Error(j(151));
        for (var E = C = null, P = v, T = v = 0, R = null, M = x.next(); P !== null && !M.done; T++,
        M = x.next()) {
            P.index > T ? (R = P,
            P = null) : R = P.sibling;
            var F = f(y, P, M.value, b);
            if (F === null) {
                P === null && (P = R);
                break
            }
            e && P && F.alternate === null && t(y, P),
            v = s(F, v, T),
            E === null ? C = F : E.sibling = F,
            E = F,
            P = R
        }
        if (M.done)
            return n(y, P),
            ve && Dr(y, T),
            C;
        if (P === null) {
            for (; !M.done; T++,
            M = x.next())
                M = d(y, M.value, b),
                M !== null && (v = s(M, v, T),
                E === null ? C = M : E.sibling = M,
                E = M);
            return ve && Dr(y, T),
            C
        }
        for (P = r(y, P); !M.done; T++,
        M = x.next())
            M = h(P, y, T, M.value, b),
            M !== null && (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
            v = s(M, v, T),
            E === null ? C = M : E.sibling = M,
            E = M);
        return e && P.forEach(function(L) {
            return t(y, L)
        }),
        ve && Dr(y, T),
        C
    }
    function w(y, v, x, b) {
        if (typeof x == "object" && x !== null && x.type === So && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ea:
                e: {
                    for (var C = x.key, E = v; E !== null; ) {
                        if (E.key === C) {
                            if (C = x.type,
                            C === So) {
                                if (E.tag === 7) {
                                    n(y, E.sibling),
                                    v = o(E, x.props.children),
                                    v.return = y,
                                    y = v;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Hn && mm(C) === E.type) {
                                n(y, E.sibling),
                                v = o(E, x.props),
                                v.ref = Ms(y, E, x),
                                v.return = y,
                                y = v;
                                break e
                            }
                            n(y, E);
                            break
                        } else
                            t(y, E);
                        E = E.sibling
                    }
                    x.type === So ? (v = Yr(x.props.children, y.mode, b, x.key),
                    v.return = y,
                    y = v) : (b = za(x.type, x.key, x.props, null, y.mode, b),
                    b.ref = Ms(y, v, x),
                    b.return = y,
                    y = b)
                }
                return i(y);
            case wo:
                e: {
                    for (E = x.key; v !== null; ) {
                        if (v.key === E)
                            if (v.tag === 4 && v.stateNode.containerInfo === x.containerInfo && v.stateNode.implementation === x.implementation) {
                                n(y, v.sibling),
                                v = o(v, x.children || []),
                                v.return = y,
                                y = v;
                                break e
                            } else {
                                n(y, v);
                                break
                            }
                        else
                            t(y, v);
                        v = v.sibling
                    }
                    v = ac(x, y.mode, b),
                    v.return = y,
                    y = v
                }
                return i(y);
            case Hn:
                return E = x._init,
                w(y, v, E(x._payload), b)
            }
            if (Fs(x))
                return S(y, v, x, b);
            if (Ps(x))
                return p(y, v, x, b);
            da(y, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        v !== null && v.tag === 6 ? (n(y, v.sibling),
        v = o(v, x),
        v.return = y,
        y = v) : (n(y, v),
        v = ic(x, y.mode, b),
        v.return = y,
        y = v),
        i(y)) : n(y, v)
    }
    return w
}
var os = C0(!0)
  , E0 = C0(!1)
  , ml = br(null)
  , gl = null
  , No = null
  , Zf = null;
function Jf() {
    Zf = No = gl = null
}
function eh(e) {
    var t = ml.current;
    pe(ml),
    e._currentValue = t
}
function gd(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function $o(e, t) {
    gl = e,
    Zf = No = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (lt = !0),
    e.firstContext = null)
}
function Mt(e) {
    var t = e._currentValue;
    if (Zf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        No === null) {
            if (gl === null)
                throw Error(j(308));
            No = e,
            gl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            No = No.next = e;
    return t
}
var _r = null;
function th(e) {
    _r === null ? _r = [e] : _r.push(e)
}
function T0(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    th(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Rn(e, r)
}
function Rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Kn = !1;
function nh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function P0(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Tn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ur(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ne & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Rn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    th(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Rn(e, n)
}
function Oa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        $f(e, n)
    }
}
function gm(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function vl(e, t, n, r) {
    var o = e.updateQueue;
    Kn = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        i === null ? s = u : i.next = u,
        i = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = o.baseState;
        i = 0,
        c = u = l = null,
        a = s;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , p = a;
                    switch (f = t,
                    h = n,
                    p.tag) {
                    case 1:
                        if (S = p.payload,
                        typeof S == "function") {
                            d = S.call(h, d, f);
                            break e
                        }
                        d = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = p.payload,
                        f = typeof S == "function" ? S.call(h, d, f) : S,
                        f == null)
                            break e;
                        d = Ce({}, d, f);
                        break e;
                    case 2:
                        Kn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                i |= f;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        Jr |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function vm(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var $i = {}
  , fn = br($i)
  , gi = br($i)
  , vi = br($i);
function Fr(e) {
    if (e === $i)
        throw Error(j(174));
    return e
}
function rh(e, t) {
    switch (ue(vi, t),
    ue(gi, e),
    ue(fn, $i),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = qc(t, e)
    }
    pe(fn),
    ue(fn, t)
}
function ss() {
    pe(fn),
    pe(gi),
    pe(vi)
}
function k0(e) {
    Fr(vi.current);
    var t = Fr(fn.current)
      , n = qc(t, e.type);
    t !== n && (ue(gi, e),
    ue(fn, n))
}
function oh(e) {
    gi.current === e && (pe(fn),
    pe(gi))
}
var we = br(0);
function yl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ec = [];
function sh() {
    for (var e = 0; e < ec.length; e++)
        ec[e]._workInProgressVersionPrimary = null;
    ec.length = 0
}
var _a = Dn.ReactCurrentDispatcher
  , tc = Dn.ReactCurrentBatchConfig
  , Zr = 0
  , be = null
  , Ie = null
  , Oe = null
  , xl = !1
  , qs = !1
  , yi = 0
  , kT = 0;
function Ke() {
    throw Error(j(321))
}
function ih(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Zt(e[n], t[n]))
            return !1;
    return !0
}
function ah(e, t, n, r, o, s) {
    if (Zr = s,
    be = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    _a.current = e === null || e.memoizedState === null ? MT : jT,
    e = n(r, o),
    qs) {
        s = 0;
        do {
            if (qs = !1,
            yi = 0,
            25 <= s)
                throw Error(j(301));
            s += 1,
            Oe = Ie = null,
            t.updateQueue = null,
            _a.current = DT,
            e = n(r, o)
        } while (qs)
    }
    if (_a.current = wl,
    t = Ie !== null && Ie.next !== null,
    Zr = 0,
    Oe = Ie = be = null,
    xl = !1,
    t)
        throw Error(j(300));
    return e
}
function lh() {
    var e = yi !== 0;
    return yi = 0,
    e
}
function rn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Oe === null ? be.memoizedState = Oe = e : Oe = Oe.next = e,
    Oe
}
function jt() {
    if (Ie === null) {
        var e = be.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ie.next;
    var t = Oe === null ? be.memoizedState : Oe.next;
    if (t !== null)
        Oe = t,
        Ie = e;
    else {
        if (e === null)
            throw Error(j(310));
        Ie = e,
        e = {
            memoizedState: Ie.memoizedState,
            baseState: Ie.baseState,
            baseQueue: Ie.baseQueue,
            queue: Ie.queue,
            next: null
        },
        Oe === null ? be.memoizedState = Oe = e : Oe = Oe.next = e
    }
    return Oe
}
function xi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function nc(e) {
    var t = jt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Ie
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((Zr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                i = r) : l = l.next = d,
                be.lanes |= c,
                Jr |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a,
        Zt(r, t.memoizedState) || (lt = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            be.lanes |= s,
            Jr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function rc(e) {
    var t = jt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        Zt(s, t.memoizedState) || (lt = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function R0() {}
function N0(e, t) {
    var n = be
      , r = jt()
      , o = t()
      , s = !Zt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    lt = !0),
    r = r.queue,
    uh(j0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Oe !== null && Oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        wi(9, M0.bind(null, n, r, o, t), void 0, null),
        _e === null)
            throw Error(j(349));
        Zr & 30 || A0(n, t, o)
    }
    return o
}
function A0(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = be.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    be.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function M0(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    D0(t) && I0(e)
}
function j0(e, t, n) {
    return n(function() {
        D0(t) && I0(e)
    })
}
function D0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Zt(e, n)
    } catch {
        return !0
    }
}
function I0(e) {
    var t = Rn(e, 1);
    t !== null && Qt(t, e, 1, -1)
}
function ym(e) {
    var t = rn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = AT.bind(null, be, e),
    [t.memoizedState, e]
}
function wi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = be.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    be.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function L0() {
    return jt().memoizedState
}
function Fa(e, t, n, r) {
    var o = rn();
    be.flags |= e,
    o.memoizedState = wi(1 | t, n, void 0, r === void 0 ? null : r)
}
function ql(e, t, n, r) {
    var o = jt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ie !== null) {
        var i = Ie.memoizedState;
        if (s = i.destroy,
        r !== null && ih(r, i.deps)) {
            o.memoizedState = wi(t, n, s, r);
            return
        }
    }
    be.flags |= e,
    o.memoizedState = wi(1 | t, n, s, r)
}
function xm(e, t) {
    return Fa(8390656, 8, e, t)
}
function uh(e, t) {
    return ql(2048, 8, e, t)
}
function O0(e, t) {
    return ql(4, 2, e, t)
}
function _0(e, t) {
    return ql(4, 4, e, t)
}
function F0(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function V0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ql(4, 4, F0.bind(null, t, e), n)
}
function ch() {}
function B0(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ih(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function $0(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ih(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function z0(e, t, n) {
    return Zr & 21 ? (Zt(n, t) || (n = Gy(),
    be.lanes |= n,
    Jr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    lt = !0),
    e.memoizedState = n)
}
function RT(e, t) {
    var n = ae;
    ae = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = tc.transition;
    tc.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ae = n,
        tc.transition = r
    }
}
function U0() {
    return jt().memoizedState
}
function NT(e, t, n) {
    var r = dr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    W0(e))
        H0(t, n);
    else if (n = T0(e, t, n, r),
    n !== null) {
        var o = rt();
        Qt(n, e, r, o),
        K0(n, t, r)
    }
}
function AT(e, t, n) {
    var r = dr(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (W0(e))
        H0(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , a = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                Zt(a, i)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    th(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = T0(e, t, o, r),
        n !== null && (o = rt(),
        Qt(n, e, r, o),
        K0(n, t, r))
    }
}
function W0(e) {
    var t = e.alternate;
    return e === be || t !== null && t === be
}
function H0(e, t) {
    qs = xl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function K0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        $f(e, n)
    }
}
var wl = {
    readContext: Mt,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1
}
  , MT = {
    readContext: Mt,
    useCallback: function(e, t) {
        return rn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Mt,
    useEffect: xm,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Fa(4194308, 4, F0.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Fa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Fa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = rn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = rn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = NT.bind(null, be, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = rn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ym,
    useDebugValue: ch,
    useDeferredValue: function(e) {
        return rn().memoizedState = e
    },
    useTransition: function() {
        var e = ym(!1)
          , t = e[0];
        return e = RT.bind(null, e[1]),
        rn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = be
          , o = rn();
        if (ve) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            _e === null)
                throw Error(j(349));
            Zr & 30 || A0(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        xm(j0.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        wi(9, M0.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = rn()
          , t = _e.identifierPrefix;
        if (ve) {
            var n = En
              , r = Cn;
            n = (r & ~(1 << 32 - Yt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = yi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = kT++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , jT = {
    readContext: Mt,
    useCallback: B0,
    useContext: Mt,
    useEffect: uh,
    useImperativeHandle: V0,
    useInsertionEffect: O0,
    useLayoutEffect: _0,
    useMemo: $0,
    useReducer: nc,
    useRef: L0,
    useState: function() {
        return nc(xi)
    },
    useDebugValue: ch,
    useDeferredValue: function(e) {
        var t = jt();
        return z0(t, Ie.memoizedState, e)
    },
    useTransition: function() {
        var e = nc(xi)[0]
          , t = jt().memoizedState;
        return [e, t]
    },
    useMutableSource: R0,
    useSyncExternalStore: N0,
    useId: U0,
    unstable_isNewReconciler: !1
}
  , DT = {
    readContext: Mt,
    useCallback: B0,
    useContext: Mt,
    useEffect: uh,
    useImperativeHandle: V0,
    useInsertionEffect: O0,
    useLayoutEffect: _0,
    useMemo: $0,
    useReducer: rc,
    useRef: L0,
    useState: function() {
        return rc(xi)
    },
    useDebugValue: ch,
    useDeferredValue: function(e) {
        var t = jt();
        return Ie === null ? t.memoizedState = e : z0(t, Ie.memoizedState, e)
    },
    useTransition: function() {
        var e = rc(xi)[0]
          , t = jt().memoizedState;
        return [e, t]
    },
    useMutableSource: R0,
    useSyncExternalStore: N0,
    useId: U0,
    unstable_isNewReconciler: !1
};
function zt(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function vd(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Xl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? so(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = rt()
          , o = dr(e)
          , s = Tn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = ur(e, s, o),
        t !== null && (Qt(t, e, o, r),
        Oa(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = rt()
          , o = dr(e)
          , s = Tn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = ur(e, s, o),
        t !== null && (Qt(t, e, o, r),
        Oa(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = rt()
          , r = dr(e)
          , o = Tn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = ur(e, o, r),
        t !== null && (Qt(t, e, r, n),
        Oa(t, e, r))
    }
};
function wm(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !fi(n, r) || !fi(o, s) : !0
}
function G0(e, t, n) {
    var r = !1
      , o = mr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Mt(s) : (o = ct(t) ? qr : Xe.current,
    r = t.contextTypes,
    s = (r = r != null) ? ns(e, o) : mr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Xl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Sm(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xl.enqueueReplaceState(t, t.state, null)
}
function yd(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    nh(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = Mt(s) : (s = ct(t) ? qr : Xe.current,
    o.context = ns(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (vd(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Xl.enqueueReplaceState(o, o.state, null),
    vl(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function is(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += aE(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function oc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function xd(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var IT = typeof WeakMap == "function" ? WeakMap : Map;
function Y0(e, t, n) {
    n = Tn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        bl || (bl = !0,
        Nd = r),
        xd(e, t)
    }
    ,
    n
}
function Q0(e, t, n) {
    n = Tn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            xd(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        xd(e, t),
        typeof r != "function" && (cr === null ? cr = new Set([this]) : cr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function bm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new IT;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = YT.bind(null, e, t, n),
    t.then(e, e))
}
function Cm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Em(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tn(-1, 1),
    t.tag = 2,
    ur(n, t, 1))),
    n.lanes |= 1),
    e)
}
var LT = Dn.ReactCurrentOwner
  , lt = !1;
function Je(e, t, n, r) {
    t.child = e === null ? E0(t, null, n, r) : os(t, e.child, n, r)
}
function Tm(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return $o(t, o),
    r = ah(e, t, n, r, s, o),
    n = lh(),
    e !== null && !lt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Nn(e, t, o)) : (ve && n && Qf(t),
    t.flags |= 1,
    Je(e, t, r, o),
    t.child)
}
function Pm(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !yh(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        q0(e, t, s, r, o)) : (e = za(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : fi,
        n(i, r) && e.ref === t.ref)
            return Nn(e, t, o)
    }
    return t.flags |= 1,
    e = fr(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function q0(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (fi(s, r) && e.ref === t.ref)
            if (lt = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (lt = !0);
            else
                return t.lanes = e.lanes,
                Nn(e, t, o)
    }
    return wd(e, t, n, r, o)
}
function X0(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ue(Mo, ft),
            ft |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ue(Mo, ft),
                ft |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ue(Mo, ft),
            ft |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ue(Mo, ft),
        ft |= r;
    return Je(e, t, o, n),
    t.child
}
function Z0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function wd(e, t, n, r, o) {
    var s = ct(n) ? qr : Xe.current;
    return s = ns(t, s),
    $o(t, o),
    n = ah(e, t, n, r, s, o),
    r = lh(),
    e !== null && !lt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Nn(e, t, o)) : (ve && r && Qf(t),
    t.flags |= 1,
    Je(e, t, n, o),
    t.child)
}
function km(e, t, n, r, o) {
    if (ct(n)) {
        var s = !0;
        fl(t)
    } else
        s = !1;
    if ($o(t, o),
    t.stateNode === null)
        Va(e, t),
        G0(t, n, r),
        yd(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Mt(u) : (u = ct(n) ? qr : Xe.current,
        u = ns(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && Sm(t, i, r, u),
        Kn = !1;
        var f = t.memoizedState;
        i.state = f,
        vl(t, r, i, o),
        l = t.memoizedState,
        a !== r || f !== l || ut.current || Kn ? (typeof c == "function" && (vd(t, n, c, r),
        l = t.memoizedState),
        (a = Kn || wm(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        P0(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : zt(t.type, a),
        i.props = u,
        d = t.pendingProps,
        f = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Mt(l) : (l = ct(n) ? qr : Xe.current,
        l = ns(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && Sm(t, i, r, l),
        Kn = !1,
        f = t.memoizedState,
        i.state = f,
        vl(t, r, i, o);
        var S = t.memoizedState;
        a !== d || f !== S || ut.current || Kn ? (typeof h == "function" && (vd(t, n, h, r),
        S = t.memoizedState),
        (u = Kn || wm(t, n, u, r, f, S, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        i.props = r,
        i.state = S,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Sd(e, t, n, r, s, o)
}
function Sd(e, t, n, r, o, s) {
    Z0(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && fm(t, n, !1),
        Nn(e, t, s);
    r = t.stateNode,
    LT.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = os(t, e.child, null, s),
    t.child = os(t, null, a, s)) : Je(e, t, a, s),
    t.memoizedState = r.state,
    o && fm(t, n, !0),
    t.child
}
function J0(e) {
    var t = e.stateNode;
    t.pendingContext ? dm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dm(e, t.context, !1),
    rh(e, t.containerInfo)
}
function Rm(e, t, n, r, o) {
    return rs(),
    Xf(o),
    t.flags |= 256,
    Je(e, t, n, r),
    t.child
}
var bd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Cd(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function ex(e, t, n) {
    var r = t.pendingProps, o = we.current, s = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(we, o & 1),
    e === null)
        return md(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = eu(i, r, 0, null),
        e = Yr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Cd(n),
        t.memoizedState = bd,
        e) : dh(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return OT(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = fr(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? s = fr(a, s) : (s = Yr(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? Cd(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = bd,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = fr(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function dh(e, t) {
    return t = eu({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function fa(e, t, n, r) {
    return r !== null && Xf(r),
    os(t, e.child, null, n),
    e = dh(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function OT(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = oc(Error(j(422))),
        fa(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = eu({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = Yr(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && os(t, e.child, null, i),
        t.child.memoizedState = Cd(i),
        t.memoizedState = bd,
        s);
    if (!(t.mode & 1))
        return fa(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(j(419)),
        r = oc(s, r, void 0),
        fa(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    lt || a) {
        if (r = _e,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            Rn(e, o),
            Qt(r, e, o, -1))
        }
        return vh(),
        r = oc(Error(j(421))),
        fa(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = QT.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    pt = lr(o.nextSibling),
    mt = t,
    ve = !0,
    Gt = null,
    e !== null && (Et[Tt++] = Cn,
    Et[Tt++] = En,
    Et[Tt++] = Xr,
    Cn = e.id,
    En = e.overflow,
    Xr = t),
    t = dh(t, r.children),
    t.flags |= 4096,
    t)
}
function Nm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    gd(e.return, t, n)
}
function sc(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function tx(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Je(e, t, r.children, n),
    r = we.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Nm(e, n, t);
                else if (e.tag === 19)
                    Nm(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ue(we, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && yl(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            sc(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && yl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            sc(t, !0, n, null, s);
            break;
        case "together":
            sc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Va(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Jr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = fr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = fr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function _T(e, t, n) {
    switch (t.tag) {
    case 3:
        J0(t),
        rs();
        break;
    case 5:
        k0(t);
        break;
    case 1:
        ct(t.type) && fl(t);
        break;
    case 4:
        rh(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ue(ml, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ue(we, we.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? ex(e, t, n) : (ue(we, we.current & 1),
            e = Nn(e, t, n),
            e !== null ? e.sibling : null);
        ue(we, we.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return tx(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ue(we, we.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        X0(e, t, n)
    }
    return Nn(e, t, n)
}
var nx, Ed, rx, ox;
nx = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ed = function() {}
;
rx = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Fr(fn.current);
        var s = null;
        switch (n) {
        case "input":
            o = Kc(e, o),
            r = Kc(e, r),
            s = [];
            break;
        case "select":
            o = Ce({}, o, {
                value: void 0
            }),
            r = Ce({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Qc(e, o),
            r = Qc(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cl)
        }
        Xc(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (si.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (si.hasOwnProperty(u) ? (l != null && u === "onScroll" && he("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ox = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function js(e, t) {
    if (!ve)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function FT(e, t, n) {
    var r = t.pendingProps;
    switch (qf(t),
    t.tag) {
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
        return Ge(t),
        null;
    case 1:
        return ct(t.type) && dl(),
        Ge(t),
        null;
    case 3:
        return r = t.stateNode,
        ss(),
        pe(ut),
        pe(Xe),
        sh(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ca(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Gt !== null && (jd(Gt),
        Gt = null))),
        Ed(e, t),
        Ge(t),
        null;
    case 5:
        oh(t);
        var o = Fr(vi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            rx(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Ge(t),
                null
            }
            if (e = Fr(fn.current),
            ca(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[un] = t,
                r[mi] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    he("cancel", r),
                    he("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    he("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Bs.length; o++)
                        he(Bs[o], r);
                    break;
                case "source":
                    he("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    he("error", r),
                    he("load", r);
                    break;
                case "details":
                    he("toggle", r);
                    break;
                case "input":
                    Fp(r, s),
                    he("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    he("invalid", r);
                    break;
                case "textarea":
                    Bp(r, s),
                    he("invalid", r)
                }
                Xc(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var a = s[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ua(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ua(r.textContent, a, e),
                        o = ["children", "" + a]) : si.hasOwnProperty(i) && a != null && i === "onScroll" && he("scroll", r)
                    }
                switch (n) {
                case "input":
                    ta(r),
                    Vp(r, s, !0);
                    break;
                case "textarea":
                    ta(r),
                    $p(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = cl)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = jy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[un] = t,
                e[mi] = r,
                nx(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Zc(n, r),
                    n) {
                    case "dialog":
                        he("cancel", e),
                        he("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        he("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Bs.length; o++)
                            he(Bs[o], e);
                        o = r;
                        break;
                    case "source":
                        he("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        he("error", e),
                        he("load", e),
                        o = r;
                        break;
                    case "details":
                        he("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Fp(e, r),
                        o = Kc(e, r),
                        he("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ce({}, r, {
                            value: void 0
                        }),
                        he("invalid", e);
                        break;
                    case "textarea":
                        Bp(e, r),
                        o = Qc(e, r),
                        he("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Xc(n, o),
                    a = o;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Ly(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Dy(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ii(e, l) : typeof l == "number" && ii(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (si.hasOwnProperty(s) ? l != null && s === "onScroll" && he("scroll", e) : l != null && Lf(e, s, l, i))
                        }
                    switch (n) {
                    case "input":
                        ta(e),
                        Vp(e, r, !1);
                        break;
                    case "textarea":
                        ta(e),
                        $p(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + pr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? _o(e, !!r.multiple, s, !1) : r.defaultValue != null && _o(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = cl)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ge(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ox(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Fr(vi.current),
            Fr(fn.current),
            ca(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[un] = t,
                (s = r.nodeValue !== n) && (e = mt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ua(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ua(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[un] = t,
                t.stateNode = r
        }
        return Ge(t),
        null;
    case 13:
        if (pe(we),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ve && pt !== null && t.mode & 1 && !(t.flags & 128))
                b0(),
                rs(),
                t.flags |= 98560,
                s = !1;
            else if (s = ca(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(j(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(j(317));
                    s[un] = t
                } else
                    rs(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ge(t),
                s = !1
            } else
                Gt !== null && (jd(Gt),
                Gt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || we.current & 1 ? Le === 0 && (Le = 3) : vh())),
        t.updateQueue !== null && (t.flags |= 4),
        Ge(t),
        null);
    case 4:
        return ss(),
        Ed(e, t),
        e === null && hi(t.stateNode.containerInfo),
        Ge(t),
        null;
    case 10:
        return eh(t.type._context),
        Ge(t),
        null;
    case 17:
        return ct(t.type) && dl(),
        Ge(t),
        null;
    case 19:
        if (pe(we),
        s = t.memoizedState,
        s === null)
            return Ge(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                js(s, !1);
            else {
                if (Le !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = yl(e),
                        i !== null) {
                            for (t.flags |= 128,
                            js(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ue(we, we.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Ne() > as && (t.flags |= 128,
                r = !0,
                js(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = yl(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    js(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !ve)
                        return Ge(t),
                        null
                } else
                    2 * Ne() - s.renderingStartTime > as && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    js(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Ne(),
        t.sibling = null,
        n = we.current,
        ue(we, r ? n & 1 | 2 : n & 1),
        t) : (Ge(t),
        null);
    case 22:
    case 23:
        return gh(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ft & 1073741824 && (Ge(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function VT(e, t) {
    switch (qf(t),
    t.tag) {
    case 1:
        return ct(t.type) && dl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ss(),
        pe(ut),
        pe(Xe),
        sh(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return oh(t),
        null;
    case 13:
        if (pe(we),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            rs()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return pe(we),
        null;
    case 4:
        return ss(),
        null;
    case 10:
        return eh(t.type._context),
        null;
    case 22:
    case 23:
        return gh(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ha = !1
  , Qe = !1
  , BT = typeof WeakSet == "function" ? WeakSet : Set
  , $ = null;
function Ao(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Re(e, t, r)
            }
        else
            n.current = null
}
function Td(e, t, n) {
    try {
        n()
    } catch (r) {
        Re(e, t, r)
    }
}
var Am = !1;
function $T(e, t) {
    if (ld = al,
    e = u0(),
    Yf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (a = i),
                            f === s && ++c === r && (l = i),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ud = {
        focusedElem: e,
        selectionRange: n
    },
    al = !1,
    $ = t; $ !== null; )
        if (t = $,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            $ = e;
        else
            for (; $ !== null; ) {
                t = $;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var p = S.memoizedProps
                                  , w = S.memoizedState
                                  , y = t.stateNode
                                  , v = y.getSnapshotBeforeUpdate(t.elementType === t.type ? p : zt(t.type, p), w);
                                y.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (b) {
                    Re(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    $ = e;
                    break
                }
                $ = t.return
            }
    return S = Am,
    Am = !1,
    S
}
function Xs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && Td(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Zl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Pd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function sx(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    sx(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[un],
    delete t[mi],
    delete t[fd],
    delete t[CT],
    delete t[ET])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function ix(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Mm(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || ix(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function kd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = cl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (kd(e, t, n),
        e = e.sibling; e !== null; )
            kd(e, t, n),
            e = e.sibling
}
function Rd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Rd(e, t, n),
        e = e.sibling; e !== null; )
            Rd(e, t, n),
            e = e.sibling
}
var Ve = null
  , Kt = !1;
function Fn(e, t, n) {
    for (n = n.child; n !== null; )
        ax(e, t, n),
        n = n.sibling
}
function ax(e, t, n) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
        try {
            dn.onCommitFiberUnmount(Wl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Qe || Ao(n, t);
    case 6:
        var r = Ve
          , o = Kt;
        Ve = null,
        Fn(e, t, n),
        Ve = r,
        Kt = o,
        Ve !== null && (Kt ? (e = Ve,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
    case 18:
        Ve !== null && (Kt ? (e = Ve,
        n = n.stateNode,
        e.nodeType === 8 ? Zu(e.parentNode, n) : e.nodeType === 1 && Zu(e, n),
        ci(e)) : Zu(Ve, n.stateNode));
        break;
    case 4:
        r = Ve,
        o = Kt,
        Ve = n.stateNode.containerInfo,
        Kt = !0,
        Fn(e, t, n),
        Ve = r,
        Kt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Qe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && Td(n, t, i),
                o = o.next
            } while (o !== r)
        }
        Fn(e, t, n);
        break;
    case 1:
        if (!Qe && (Ao(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Re(n, t, a)
            }
        Fn(e, t, n);
        break;
    case 21:
        Fn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null,
        Fn(e, t, n),
        Qe = r) : Fn(e, t, n);
        break;
    default:
        Fn(e, t, n)
    }
}
function jm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new BT),
        t.forEach(function(r) {
            var o = qT.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function _t(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ve = a.stateNode,
                        Kt = !1;
                        break e;
                    case 3:
                        Ve = a.stateNode.containerInfo,
                        Kt = !0;
                        break e;
                    case 4:
                        Ve = a.stateNode.containerInfo,
                        Kt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ve === null)
                    throw Error(j(160));
                ax(s, i, o),
                Ve = null,
                Kt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                Re(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            lx(t, e),
            t = t.sibling
}
function lx(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (_t(t, e),
        nn(e),
        r & 4) {
            try {
                Xs(3, e, e.return),
                Zl(3, e)
            } catch (p) {
                Re(e, e.return, p)
            }
            try {
                Xs(5, e, e.return)
            } catch (p) {
                Re(e, e.return, p)
            }
        }
        break;
    case 1:
        _t(t, e),
        nn(e),
        r & 512 && n !== null && Ao(n, n.return);
        break;
    case 5:
        if (_t(t, e),
        nn(e),
        r & 512 && n !== null && Ao(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ii(o, "")
            } catch (p) {
                Re(e, e.return, p)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Ay(o, s),
                    Zc(a, i);
                    var u = Zc(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var c = l[i]
                          , d = l[i + 1];
                        c === "style" ? Ly(o, d) : c === "dangerouslySetInnerHTML" ? Dy(o, d) : c === "children" ? ii(o, d) : Lf(o, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Gc(o, s);
                        break;
                    case "textarea":
                        My(o, s);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? _o(o, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? _o(o, !!s.multiple, s.defaultValue, !0) : _o(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[mi] = s
                } catch (p) {
                    Re(e, e.return, p)
                }
        }
        break;
    case 6:
        if (_t(t, e),
        nn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (p) {
                Re(e, e.return, p)
            }
        }
        break;
    case 3:
        if (_t(t, e),
        nn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ci(t.containerInfo)
            } catch (p) {
                Re(e, e.return, p)
            }
        break;
    case 4:
        _t(t, e),
        nn(e);
        break;
    case 13:
        _t(t, e),
        nn(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (ph = Ne())),
        r & 4 && jm(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Qe = (u = Qe) || c,
        _t(t, e),
        Qe = u) : _t(t, e),
        nn(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for ($ = e,
                c = e.child; c !== null; ) {
                    for (d = $ = c; $ !== null; ) {
                        switch (f = $,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Xs(4, f, f.return);
                            break;
                        case 1:
                            Ao(f, f.return);
                            var S = f.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (p) {
                                    Re(r, n, p)
                                }
                            }
                            break;
                        case 5:
                            Ao(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Im(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        $ = h) : Im(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Iy("display", i))
                        } catch (p) {
                            Re(e, e.return, p)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (p) {
                            Re(e, e.return, p)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        _t(t, e),
        nn(e),
        r & 4 && jm(e);
        break;
    case 21:
        break;
    default:
        _t(t, e),
        nn(e)
    }
}
function nn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ix(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ii(o, ""),
                r.flags &= -33);
                var s = Mm(e);
                Rd(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = Mm(e);
                kd(e, a, i);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            Re(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function zT(e, t, n) {
    $ = e,
    ux(e)
}
function ux(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
        var o = $
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || ha;
            if (!i) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Qe;
                a = ha;
                var u = Qe;
                if (ha = i,
                (Qe = l) && !u)
                    for ($ = o; $ !== null; )
                        i = $,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Lm(o) : l !== null ? (l.return = i,
                        $ = l) : Lm(o);
                for (; s !== null; )
                    $ = s,
                    ux(s),
                    s = s.sibling;
                $ = o,
                ha = a,
                Qe = u
            }
            Dm(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            $ = s) : Dm(e)
    }
}
function Dm(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Qe || Zl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Qe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : zt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && vm(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            vm(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && ci(d)
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
                        throw Error(j(163))
                    }
                Qe || t.flags & 512 && Pd(t)
            } catch (f) {
                Re(t, t.return, f)
            }
        }
        if (t === e) {
            $ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function Im(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t === e) {
            $ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function Lm(e) {
    for (; $ !== null; ) {
        var t = $;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Zl(4, t)
                } catch (l) {
                    Re(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Re(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    Pd(t)
                } catch (l) {
                    Re(t, s, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Pd(t)
                } catch (l) {
                    Re(t, i, l)
                }
            }
        } catch (l) {
            Re(t, t.return, l)
        }
        if (t === e) {
            $ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            $ = a;
            break
        }
        $ = t.return
    }
}
var UT = Math.ceil
  , Sl = Dn.ReactCurrentDispatcher
  , fh = Dn.ReactCurrentOwner
  , Rt = Dn.ReactCurrentBatchConfig
  , ne = 0
  , _e = null
  , Me = null
  , $e = 0
  , ft = 0
  , Mo = br(0)
  , Le = 0
  , Si = null
  , Jr = 0
  , Jl = 0
  , hh = 0
  , Zs = null
  , at = null
  , ph = 0
  , as = 1 / 0
  , xn = null
  , bl = !1
  , Nd = null
  , cr = null
  , pa = !1
  , nr = null
  , Cl = 0
  , Js = 0
  , Ad = null
  , Ba = -1
  , $a = 0;
function rt() {
    return ne & 6 ? Ne() : Ba !== -1 ? Ba : Ba = Ne()
}
function dr(e) {
    return e.mode & 1 ? ne & 2 && $e !== 0 ? $e & -$e : PT.transition !== null ? ($a === 0 && ($a = Gy()),
    $a) : (e = ae,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : e0(e.type)),
    e) : 1
}
function Qt(e, t, n, r) {
    if (50 < Js)
        throw Js = 0,
        Ad = null,
        Error(j(185));
    Fi(e, n, r),
    (!(ne & 2) || e !== _e) && (e === _e && (!(ne & 2) && (Jl |= n),
    Le === 4 && Qn(e, $e)),
    dt(e, r),
    n === 1 && ne === 0 && !(t.mode & 1) && (as = Ne() + 500,
    Ql && Cr()))
}
function dt(e, t) {
    var n = e.callbackNode;
    PE(e, t);
    var r = il(e, e === _e ? $e : 0);
    if (r === 0)
        n !== null && Wp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Wp(n),
        t === 1)
            e.tag === 0 ? TT(Om.bind(null, e)) : x0(Om.bind(null, e)),
            ST(function() {
                !(ne & 6) && Cr()
            }),
            n = null;
        else {
            switch (Yy(r)) {
            case 1:
                n = Bf;
                break;
            case 4:
                n = Hy;
                break;
            case 16:
                n = sl;
                break;
            case 536870912:
                n = Ky;
                break;
            default:
                n = sl
            }
            n = vx(n, cx.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function cx(e, t) {
    if (Ba = -1,
    $a = 0,
    ne & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (zo() && e.callbackNode !== n)
        return null;
    var r = il(e, e === _e ? $e : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = El(e, r);
    else {
        t = r;
        var o = ne;
        ne |= 2;
        var s = fx();
        (_e !== e || $e !== t) && (xn = null,
        as = Ne() + 500,
        Gr(e, t));
        do
            try {
                KT();
                break
            } catch (a) {
                dx(e, a)
            }
        while (!0);
        Jf(),
        Sl.current = s,
        ne = o,
        Me !== null ? t = 0 : (_e = null,
        $e = 0,
        t = Le)
    }
    if (t !== 0) {
        if (t === 2 && (o = rd(e),
        o !== 0 && (r = o,
        t = Md(e, o))),
        t === 1)
            throw n = Si,
            Gr(e, 0),
            Qn(e, r),
            dt(e, Ne()),
            n;
        if (t === 6)
            Qn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !WT(o) && (t = El(e, r),
            t === 2 && (s = rd(e),
            s !== 0 && (r = s,
            t = Md(e, s))),
            t === 1))
                throw n = Si,
                Gr(e, 0),
                Qn(e, r),
                dt(e, Ne()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Ir(e, at, xn);
                break;
            case 3:
                if (Qn(e, r),
                (r & 130023424) === r && (t = ph + 500 - Ne(),
                10 < t)) {
                    if (il(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        rt(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = dd(Ir.bind(null, e, at, xn), t);
                    break
                }
                Ir(e, at, xn);
                break;
            case 4:
                if (Qn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - Yt(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = Ne() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * UT(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = dd(Ir.bind(null, e, at, xn), r);
                    break
                }
                Ir(e, at, xn);
                break;
            case 5:
                Ir(e, at, xn);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return dt(e, Ne()),
    e.callbackNode === n ? cx.bind(null, e) : null
}
function Md(e, t) {
    var n = Zs;
    return e.current.memoizedState.isDehydrated && (Gr(e, t).flags |= 256),
    e = El(e, t),
    e !== 2 && (t = at,
    at = n,
    t !== null && jd(t)),
    e
}
function jd(e) {
    at === null ? at = e : at.push.apply(at, e)
}
function WT(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Zt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Qn(e, t) {
    for (t &= ~hh,
    t &= ~Jl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Yt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Om(e) {
    if (ne & 6)
        throw Error(j(327));
    zo();
    var t = il(e, 0);
    if (!(t & 1))
        return dt(e, Ne()),
        null;
    var n = El(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = rd(e);
        r !== 0 && (t = r,
        n = Md(e, r))
    }
    if (n === 1)
        throw n = Si,
        Gr(e, 0),
        Qn(e, t),
        dt(e, Ne()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ir(e, at, xn),
    dt(e, Ne()),
    null
}
function mh(e, t) {
    var n = ne;
    ne |= 1;
    try {
        return e(t)
    } finally {
        ne = n,
        ne === 0 && (as = Ne() + 500,
        Ql && Cr())
    }
}
function eo(e) {
    nr !== null && nr.tag === 0 && !(ne & 6) && zo();
    var t = ne;
    ne |= 1;
    var n = Rt.transition
      , r = ae;
    try {
        if (Rt.transition = null,
        ae = 1,
        e)
            return e()
    } finally {
        ae = r,
        Rt.transition = n,
        ne = t,
        !(ne & 6) && Cr()
    }
}
function gh() {
    ft = Mo.current,
    pe(Mo)
}
function Gr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    wT(n)),
    Me !== null)
        for (n = Me.return; n !== null; ) {
            var r = n;
            switch (qf(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && dl();
                break;
            case 3:
                ss(),
                pe(ut),
                pe(Xe),
                sh();
                break;
            case 5:
                oh(r);
                break;
            case 4:
                ss();
                break;
            case 13:
                pe(we);
                break;
            case 19:
                pe(we);
                break;
            case 10:
                eh(r.type._context);
                break;
            case 22:
            case 23:
                gh()
            }
            n = n.return
        }
    if (_e = e,
    Me = e = fr(e.current, null),
    $e = ft = t,
    Le = 0,
    Si = null,
    hh = Jl = Jr = 0,
    at = Zs = null,
    _r !== null) {
        for (t = 0; t < _r.length; t++)
            if (n = _r[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        _r = null
    }
    return e
}
function dx(e, t) {
    do {
        var n = Me;
        try {
            if (Jf(),
            _a.current = wl,
            xl) {
                for (var r = be.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                xl = !1
            }
            if (Zr = 0,
            Oe = Ie = be = null,
            qs = !1,
            yi = 0,
            fh.current = null,
            n === null || n.return === null) {
                Le = 1,
                Si = t,
                Me = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = $e,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = Cm(i);
                    if (h !== null) {
                        h.flags &= -257,
                        Em(h, i, a, s, t),
                        h.mode & 1 && bm(s, u, t),
                        t = h,
                        l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var p = new Set;
                            p.add(l),
                            t.updateQueue = p
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            bm(s, u, t),
                            vh();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (ve && a.mode & 1) {
                    var w = Cm(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Em(w, i, a, s, t),
                        Xf(is(l, a));
                        break e
                    }
                }
                s = l = is(l, a),
                Le !== 4 && (Le = 2),
                Zs === null ? Zs = [s] : Zs.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var y = Y0(s, l, t);
                        gm(s, y);
                        break e;
                    case 1:
                        a = l;
                        var v = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof v.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (cr === null || !cr.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var b = Q0(s, a, t);
                            gm(s, b);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            px(n)
        } catch (C) {
            t = C,
            Me === n && n !== null && (Me = n = n.return);
            continue
        }
        break
    } while (!0)
}
function fx() {
    var e = Sl.current;
    return Sl.current = wl,
    e === null ? wl : e
}
function vh() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    _e === null || !(Jr & 268435455) && !(Jl & 268435455) || Qn(_e, $e)
}
function El(e, t) {
    var n = ne;
    ne |= 2;
    var r = fx();
    (_e !== e || $e !== t) && (xn = null,
    Gr(e, t));
    do
        try {
            HT();
            break
        } catch (o) {
            dx(e, o)
        }
    while (!0);
    if (Jf(),
    ne = n,
    Sl.current = r,
    Me !== null)
        throw Error(j(261));
    return _e = null,
    $e = 0,
    Le
}
function HT() {
    for (; Me !== null; )
        hx(Me)
}
function KT() {
    for (; Me !== null && !vE(); )
        hx(Me)
}
function hx(e) {
    var t = gx(e.alternate, e, ft);
    e.memoizedProps = e.pendingProps,
    t === null ? px(e) : Me = t,
    fh.current = null
}
function px(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = VT(n, t),
            n !== null) {
                n.flags &= 32767,
                Me = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Le = 6,
                Me = null;
                return
            }
        } else if (n = FT(n, t, ft),
        n !== null) {
            Me = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Me = t;
            return
        }
        Me = t = e
    } while (t !== null);
    Le === 0 && (Le = 5)
}
function Ir(e, t, n) {
    var r = ae
      , o = Rt.transition;
    try {
        Rt.transition = null,
        ae = 1,
        GT(e, t, n, r)
    } finally {
        Rt.transition = o,
        ae = r
    }
    return null
}
function GT(e, t, n, r) {
    do
        zo();
    while (nr !== null);
    if (ne & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (kE(e, s),
    e === _e && (Me = _e = null,
    $e = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || pa || (pa = !0,
    vx(sl, function() {
        return zo(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Rt.transition,
        Rt.transition = null;
        var i = ae;
        ae = 1;
        var a = ne;
        ne |= 4,
        fh.current = null,
        $T(e, n),
        lx(n, e),
        hT(ud),
        al = !!ld,
        ud = ld = null,
        e.current = n,
        zT(n),
        yE(),
        ne = a,
        ae = i,
        Rt.transition = s
    } else
        e.current = n;
    if (pa && (pa = !1,
    nr = e,
    Cl = o),
    s = e.pendingLanes,
    s === 0 && (cr = null),
    SE(n.stateNode),
    dt(e, Ne()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (bl)
        throw bl = !1,
        e = Nd,
        Nd = null,
        e;
    return Cl & 1 && e.tag !== 0 && zo(),
    s = e.pendingLanes,
    s & 1 ? e === Ad ? Js++ : (Js = 0,
    Ad = e) : Js = 0,
    Cr(),
    null
}
function zo() {
    if (nr !== null) {
        var e = Yy(Cl)
          , t = Rt.transition
          , n = ae;
        try {
            if (Rt.transition = null,
            ae = 16 > e ? 16 : e,
            nr === null)
                var r = !1;
            else {
                if (e = nr,
                nr = null,
                Cl = 0,
                ne & 6)
                    throw Error(j(331));
                var o = ne;
                for (ne |= 4,
                $ = e.current; $ !== null; ) {
                    var s = $
                      , i = s.child;
                    if ($.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for ($ = u; $ !== null; ) {
                                    var c = $;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xs(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        $ = d;
                                    else
                                        for (; $ !== null; ) {
                                            c = $;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (sx(c),
                                            c === u) {
                                                $ = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                $ = f;
                                                break
                                            }
                                            $ = h
                                        }
                                }
                            }
                            var S = s.alternate;
                            if (S !== null) {
                                var p = S.child;
                                if (p !== null) {
                                    S.child = null;
                                    do {
                                        var w = p.sibling;
                                        p.sibling = null,
                                        p = w
                                    } while (p !== null)
                                }
                            }
                            $ = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        $ = i;
                    else
                        e: for (; $ !== null; ) {
                            if (s = $,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xs(9, s, s.return)
                                }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                $ = y;
                                break e
                            }
                            $ = s.return
                        }
                }
                var v = e.current;
                for ($ = v; $ !== null; ) {
                    i = $;
                    var x = i.child;
                    if (i.subtreeFlags & 2064 && x !== null)
                        x.return = i,
                        $ = x;
                    else
                        e: for (i = v; $ !== null; ) {
                            if (a = $,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zl(9, a)
                                    }
                                } catch (C) {
                                    Re(a, a.return, C)
                                }
                            if (a === i) {
                                $ = null;
                                break e
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                b.return = a.return,
                                $ = b;
                                break e
                            }
                            $ = a.return
                        }
                }
                if (ne = o,
                Cr(),
                dn && typeof dn.onPostCommitFiberRoot == "function")
                    try {
                        dn.onPostCommitFiberRoot(Wl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ae = n,
            Rt.transition = t
        }
    }
    return !1
}
function _m(e, t, n) {
    t = is(n, t),
    t = Y0(e, t, 1),
    e = ur(e, t, 1),
    t = rt(),
    e !== null && (Fi(e, 1, t),
    dt(e, t))
}
function Re(e, t, n) {
    if (e.tag === 3)
        _m(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                _m(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cr === null || !cr.has(r))) {
                    e = is(n, e),
                    e = Q0(t, e, 1),
                    t = ur(t, e, 1),
                    e = rt(),
                    t !== null && (Fi(t, 1, e),
                    dt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function YT(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = rt(),
    e.pingedLanes |= e.suspendedLanes & n,
    _e === e && ($e & n) === n && (Le === 4 || Le === 3 && ($e & 130023424) === $e && 500 > Ne() - ph ? Gr(e, 0) : hh |= n),
    dt(e, t)
}
function mx(e, t) {
    t === 0 && (e.mode & 1 ? (t = oa,
    oa <<= 1,
    !(oa & 130023424) && (oa = 4194304)) : t = 1);
    var n = rt();
    e = Rn(e, t),
    e !== null && (Fi(e, t, n),
    dt(e, n))
}
function QT(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    mx(e, n)
}
function qT(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    mx(e, n)
}
var gx;
gx = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ut.current)
            lt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return lt = !1,
                _T(e, t, n);
            lt = !!(e.flags & 131072)
        }
    else
        lt = !1,
        ve && t.flags & 1048576 && w0(t, pl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Va(e, t),
        e = t.pendingProps;
        var o = ns(t, Xe.current);
        $o(t, n),
        o = ah(null, t, r, e, o, n);
        var s = lh();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ct(r) ? (s = !0,
        fl(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        nh(t),
        o.updater = Xl,
        t.stateNode = o,
        o._reactInternals = t,
        yd(t, r, e, n),
        t = Sd(null, t, r, !0, s, n)) : (t.tag = 0,
        ve && s && Qf(t),
        Je(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Va(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = ZT(r),
            e = zt(r, e),
            o) {
            case 0:
                t = wd(null, t, r, e, n);
                break e;
            case 1:
                t = km(null, t, r, e, n);
                break e;
            case 11:
                t = Tm(null, t, r, e, n);
                break e;
            case 14:
                t = Pm(null, t, r, zt(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        wd(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        km(e, t, r, o, n);
    case 3:
        e: {
            if (J0(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            P0(e, t),
            vl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = is(Error(j(423)), t),
                    t = Rm(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = is(Error(j(424)), t),
                    t = Rm(e, t, r, n, o);
                    break e
                } else
                    for (pt = lr(t.stateNode.containerInfo.firstChild),
                    mt = t,
                    ve = !0,
                    Gt = null,
                    n = E0(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (rs(),
                r === o) {
                    t = Nn(e, t, n);
                    break e
                }
                Je(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return k0(t),
        e === null && md(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        cd(r, o) ? i = null : s !== null && cd(r, s) && (t.flags |= 32),
        Z0(e, t),
        Je(e, t, i, n),
        t.child;
    case 6:
        return e === null && md(t),
        null;
    case 13:
        return ex(e, t, n);
    case 4:
        return rh(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = os(t, null, r, n) : Je(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        Tm(e, t, r, o, n);
    case 7:
        return Je(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Je(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Je(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            ue(ml, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (Zt(s.value, i)) {
                    if (s.children === o.children && !ut.current) {
                        t = Nn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            i = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = Tn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    gd(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(j(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            gd(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            Je(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        $o(t, n),
        o = Mt(o),
        r = r(o),
        t.flags |= 1,
        Je(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = zt(r, t.pendingProps),
        o = zt(r.type, o),
        Pm(e, t, r, o, n);
    case 15:
        return q0(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : zt(r, o),
        Va(e, t),
        t.tag = 1,
        ct(r) ? (e = !0,
        fl(t)) : e = !1,
        $o(t, n),
        G0(t, r, o),
        yd(t, r, o, n),
        Sd(null, t, r, !0, e, n);
    case 19:
        return tx(e, t, n);
    case 22:
        return X0(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function vx(e, t) {
    return Wy(e, t)
}
function XT(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Pt(e, t, n, r) {
    return new XT(e,t,n,r)
}
function yh(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function ZT(e) {
    if (typeof e == "function")
        return yh(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === _f)
            return 11;
        if (e === Ff)
            return 14
    }
    return 2
}
function fr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function za(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        yh(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case So:
            return Yr(n.children, o, s, t);
        case Of:
            i = 8,
            o |= 8;
            break;
        case zc:
            return e = Pt(12, n, t, o | 2),
            e.elementType = zc,
            e.lanes = s,
            e;
        case Uc:
            return e = Pt(13, n, t, o),
            e.elementType = Uc,
            e.lanes = s,
            e;
        case Wc:
            return e = Pt(19, n, t, o),
            e.elementType = Wc,
            e.lanes = s,
            e;
        case ky:
            return eu(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ty:
                    i = 10;
                    break e;
                case Py:
                    i = 9;
                    break e;
                case _f:
                    i = 11;
                    break e;
                case Ff:
                    i = 14;
                    break e;
                case Hn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = Pt(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Yr(e, t, n, r) {
    return e = Pt(7, e, r, t),
    e.lanes = n,
    e
}
function eu(e, t, n, r) {
    return e = Pt(22, e, r, t),
    e.elementType = ky,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ic(e, t, n) {
    return e = Pt(6, e, null, t),
    e.lanes = n,
    e
}
function ac(e, t, n) {
    return t = Pt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function JT(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = $u(0),
    this.expirationTimes = $u(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = $u(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function xh(e, t, n, r, o, s, i, a, l) {
    return e = new JT(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Pt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    nh(s),
    e
}
function eP(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function yx(e) {
    if (!e)
        return mr;
    e = e._reactInternals;
    e: {
        if (so(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ct(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ct(n))
            return y0(e, n, t)
    }
    return t
}
function xx(e, t, n, r, o, s, i, a, l) {
    return e = xh(n, r, !0, e, o, s, i, a, l),
    e.context = yx(null),
    n = e.current,
    r = rt(),
    o = dr(n),
    s = Tn(r, o),
    s.callback = t ?? null,
    ur(n, s, o),
    e.current.lanes = o,
    Fi(e, o, r),
    dt(e, r),
    e
}
function tu(e, t, n, r) {
    var o = t.current
      , s = rt()
      , i = dr(o);
    return n = yx(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Tn(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = ur(o, t, i),
    e !== null && (Qt(e, o, i, s),
    Oa(e, o, i)),
    i
}
function Tl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Fm(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function wh(e, t) {
    Fm(e, t),
    (e = e.alternate) && Fm(e, t)
}
function tP() {
    return null
}
var wx = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Sh(e) {
    this._internalRoot = e
}
nu.prototype.render = Sh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    tu(e, t, null, null)
}
;
nu.prototype.unmount = Sh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eo(function() {
            tu(null, e, null, null)
        }),
        t[kn] = null
    }
}
;
function nu(e) {
    this._internalRoot = e
}
nu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Xy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++)
            ;
        Yn.splice(n, 0, e),
        n === 0 && Jy(e)
    }
}
;
function bh(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ru(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Vm() {}
function nP(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Tl(i);
                s.call(u)
            }
        }
        var i = xx(t, r, e, 0, null, !1, !1, "", Vm);
        return e._reactRootContainer = i,
        e[kn] = i.current,
        hi(e.nodeType === 8 ? e.parentNode : e),
        eo(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Tl(l);
            a.call(u)
        }
    }
    var l = xh(e, 0, !1, null, null, !1, !1, "", Vm);
    return e._reactRootContainer = l,
    e[kn] = l.current,
    hi(e.nodeType === 8 ? e.parentNode : e),
    eo(function() {
        tu(t, l, n, r)
    }),
    l
}
function ou(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Tl(i);
                a.call(l)
            }
        }
        tu(t, i, e, o)
    } else
        i = nP(n, t, e, o, r);
    return Tl(i)
}
Qy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Vs(t.pendingLanes);
            n !== 0 && ($f(t, n | 1),
            dt(t, Ne()),
            !(ne & 6) && (as = Ne() + 500,
            Cr()))
        }
        break;
    case 13:
        eo(function() {
            var r = Rn(e, 1);
            if (r !== null) {
                var o = rt();
                Qt(r, e, 1, o)
            }
        }),
        wh(e, 1)
    }
}
;
zf = function(e) {
    if (e.tag === 13) {
        var t = Rn(e, 134217728);
        if (t !== null) {
            var n = rt();
            Qt(t, e, 134217728, n)
        }
        wh(e, 134217728)
    }
}
;
qy = function(e) {
    if (e.tag === 13) {
        var t = dr(e)
          , n = Rn(e, t);
        if (n !== null) {
            var r = rt();
            Qt(n, e, t, r)
        }
        wh(e, t)
    }
}
;
Xy = function() {
    return ae
}
;
Zy = function(e, t) {
    var n = ae;
    try {
        return ae = e,
        t()
    } finally {
        ae = n
    }
}
;
ed = function(e, t, n) {
    switch (t) {
    case "input":
        if (Gc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Yl(r);
                    if (!o)
                        throw Error(j(90));
                    Ny(r),
                    Gc(r, o)
                }
            }
        }
        break;
    case "textarea":
        My(e, n);
        break;
    case "select":
        t = n.value,
        t != null && _o(e, !!n.multiple, t, !1)
    }
}
;
Fy = mh;
Vy = eo;
var rP = {
    usingClientEntryPoint: !1,
    Events: [Bi, To, Yl, Oy, _y, mh]
}
  , Ds = {
    findFiberByHostInstance: Or,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , oP = {
    bundleType: Ds.bundleType,
    version: Ds.version,
    rendererPackageName: Ds.rendererPackageName,
    rendererConfig: Ds.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zy(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ds.findFiberByHostInstance || tP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ma.isDisabled && ma.supportsFiber)
        try {
            Wl = ma.inject(oP),
            dn = ma
        } catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rP;
yt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bh(t))
        throw Error(j(200));
    return eP(e, t, null, n)
}
;
yt.createRoot = function(e, t) {
    if (!bh(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = wx;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = xh(e, 1, !1, null, null, n, !1, r, o),
    e[kn] = t.current,
    hi(e.nodeType === 8 ? e.parentNode : e),
    new Sh(t)
}
;
yt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = zy(t),
    e = e === null ? null : e.stateNode,
    e
}
;
yt.flushSync = function(e) {
    return eo(e)
}
;
yt.hydrate = function(e, t, n) {
    if (!ru(t))
        throw Error(j(200));
    return ou(null, e, t, !0, n)
}
;
yt.hydrateRoot = function(e, t, n) {
    if (!bh(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = wx;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = xx(t, null, e, 1, n ?? null, o, !1, s, i),
    e[kn] = t.current,
    hi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new nu(t)
}
;
yt.render = function(e, t, n) {
    if (!ru(t))
        throw Error(j(200));
    return ou(null, e, t, !1, n)
}
;
yt.unmountComponentAtNode = function(e) {
    if (!ru(e))
        throw Error(j(40));
    return e._reactRootContainer ? (eo(function() {
        ou(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[kn] = null
        })
    }),
    !0) : !1
}
;
yt.unstable_batchedUpdates = mh;
yt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ru(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return ou(e, t, n, !1, r)
}
;
yt.version = "18.3.1-next-f1338f8080-20240426";
function Sx() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)
        } catch (e) {
            console.error(e)
        }
}
Sx(),
Sy.exports = yt;
var io = Sy.exports;
const bx = uy(io);
var Cx, Bm = io;
Cx = Bm.createRoot,
Bm.hydrateRoot;
const sP = 1
  , iP = 1e6;
let lc = 0;
function aP() {
    return lc = (lc + 1) % Number.MAX_SAFE_INTEGER,
    lc.toString()
}
const uc = new Map
  , $m = e => {
    if (uc.has(e))
        return;
    const t = setTimeout( () => {
        uc.delete(e),
        ei({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , iP);
    uc.set(e, t)
}
  , lP = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, sP)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? $m(n) : e.toasts.forEach(r => {
                $m(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ua = [];
let Wa = {
    toasts: []
};
function ei(e) {
    Wa = lP(Wa, e),
    Ua.forEach(t => {
        t(Wa)
    }
    )
}
function uP({...e}) {
    const t = aP()
      , n = o => ei({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => ei({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ei({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function cP() {
    const [e,t] = g.useState(Wa);
    return g.useEffect( () => (Ua.push(t),
    () => {
        const n = Ua.indexOf(t);
        n > -1 && Ua.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: uP,
        dismiss: n => ei({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function G(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function zm(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Ex(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = zm(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : zm(e[o], null)
                }
            }
    }
}
function Ee(...e) {
    return g.useCallback(Ex(...e), e)
}
function Er(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = g.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = d => {
            var y;
            const {scope: f, children: h, ...S} = d
              , p = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
              , w = g.useMemo( () => S, Object.values(S));
            return m.jsx(p.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, f) {
            var p;
            const h = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a
              , S = g.useContext(h);
            if (S)
                return S;
            if (i !== void 0)
                return i;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const o = () => {
        const s = n.map(i => g.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return g.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, dP(o, ...t)]
}
function dP(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function bi(e) {
    const t = hP(e)
      , n = g.forwardRef( (r, o) => {
        const {children: s, ...i} = r
          , a = g.Children.toArray(s)
          , l = a.find(mP);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? g.Children.count(u) > 1 ? g.Children.only(null) : g.isValidElement(u) ? u.props.children : null : d);
            return m.jsx(t, {
                ...i,
                ref: o,
                children: g.isValidElement(u) ? g.cloneElement(u, void 0, c) : null
            })
        }
        return m.jsx(t, {
            ...i,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var fP = bi("Slot");
function hP(e) {
    const t = g.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (g.isValidElement(o)) {
            const i = vP(o)
              , a = gP(s, o.props);
            return o.type !== g.Fragment && (a.ref = r ? Ex(r, i) : i),
            g.cloneElement(o, a)
        }
        return g.Children.count(o) > 1 ? g.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Tx = Symbol("radix.slottable");
function pP(e) {
    const t = ({children: n}) => m.jsx(m.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Tx,
    t
}
function mP(e) {
    return g.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Tx
}
function gP(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const l = s(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function vP(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Ch(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Er(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = p => {
        const {scope: w, children: y} = p
          , v = I.useRef(null)
          , x = I.useRef(new Map).current;
        return m.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: v,
            children: y
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = bi(a)
      , u = I.forwardRef( (p, w) => {
        const {scope: y, children: v} = p
          , x = s(a, y)
          , b = Ee(w, x.collectionRef);
        return m.jsx(l, {
            ref: b,
            children: v
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = bi(c)
      , h = I.forwardRef( (p, w) => {
        const {scope: y, children: v, ...x} = p
          , b = I.useRef(null)
          , C = Ee(w, b)
          , E = s(c, y);
        return I.useEffect( () => (E.itemMap.set(b, {
            ref: b,
            ...x
        }),
        () => void E.itemMap.delete(b))),
        m.jsx(f, {
            [d]: "",
            ref: C,
            children: v
        })
    }
    );
    h.displayName = c;
    function S(p) {
        const w = s(e + "CollectionConsumer", p);
        return I.useCallback( () => {
            const v = w.collectionRef.current;
            if (!v)
                return [];
            const x = Array.from(v.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (E, P) => x.indexOf(E.ref.current) - x.indexOf(P.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: h
    }, S, r]
}
var yP = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ee = yP.reduce( (e, t) => {
    const n = bi(`Primitive.${t}`)
      , r = g.forwardRef( (o, s) => {
        const {asChild: i, ...a} = o
          , l = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        m.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Px(e, t) {
    e && io.flushSync( () => e.dispatchEvent(t))
}
function Dt(e) {
    const t = g.useRef(e);
    return g.useEffect( () => {
        t.current = e
    }
    ),
    g.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function xP(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Dt(e);
    g.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var wP = "DismissableLayer", Dd = "dismissableLayer.update", SP = "dismissableLayer.pointerDownOutside", bP = "dismissableLayer.focusOutside", Um, kx = g.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), su = g.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: a, ...l} = e
      , u = g.useContext(kx)
      , [c,d] = g.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = g.useState({})
      , S = Ee(t, P => d(P))
      , p = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = p.indexOf(w)
      , v = c ? p.indexOf(c) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = v >= y
      , C = EP(P => {
        const T = P.target
          , R = [...u.branches].some(M => M.contains(T));
        !b || R || (o == null || o(P),
        i == null || i(P),
        P.defaultPrevented || a == null || a())
    }
    , f)
      , E = TP(P => {
        const T = P.target;
        [...u.branches].some(M => M.contains(T)) || (s == null || s(P),
        i == null || i(P),
        P.defaultPrevented || a == null || a())
    }
    , f);
    return xP(P => {
        v === u.layers.size - 1 && (r == null || r(P),
        !P.defaultPrevented && a && (P.preventDefault(),
        a()))
    }
    , f),
    g.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Um = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Wm(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Um)
            }
    }
    , [c, f, n, u]),
    g.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Wm())
    }
    , [c, u]),
    g.useEffect( () => {
        const P = () => h({});
        return document.addEventListener(Dd, P),
        () => document.removeEventListener(Dd, P)
    }
    , []),
    m.jsx(ee.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: x ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: G(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
su.displayName = wP;
var CP = "DismissableLayerBranch"
  , Rx = g.forwardRef( (e, t) => {
    const n = g.useContext(kx)
      , r = g.useRef(null)
      , o = Ee(t, r);
    return g.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    m.jsx(ee.div, {
        ...e,
        ref: o
    })
}
);
Rx.displayName = CP;
function EP(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Dt(e)
      , r = g.useRef(!1)
      , o = g.useRef( () => {}
    );
    return g.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Nx(SP, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function TP(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Dt(e)
      , r = g.useRef(!1);
    return g.useEffect( () => {
        const o = s => {
            s.target && !r.current && Nx(bP, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Wm() {
    const e = new CustomEvent(Dd);
    document.dispatchEvent(e)
}
function Nx(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Px(o, s) : o.dispatchEvent(s)
}
var PP = su
  , kP = Rx
  , Ue = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {}
  , RP = "Portal"
  , Eh = g.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,s] = g.useState(!1);
    Ue( () => s(!0), []);
    const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? bx.createPortal(m.jsx(ee.div, {
        ...r,
        ref: t
    }), i) : null
}
);
Eh.displayName = RP;
function NP(e, t) {
    return g.useReducer( (n, r) => t[n][r] ?? n, e)
}
var iu = e => {
    const {present: t, children: n} = e
      , r = AP(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n)
      , s = Ee(r.ref, MP(o));
    return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
        ref: s
    }) : null
}
;
iu.displayName = "Presence";
function AP(e) {
    const [t,n] = g.useState()
      , r = g.useRef(null)
      , o = g.useRef(e)
      , s = g.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = NP(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect( () => {
        const u = ga(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Ue( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const f = s.current
              , h = ga(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Ue( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const p = ga(r.current).includes(h.animationName);
                if (h.target === t && p && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (s.current = ga(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: g.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ga(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function MP(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var jP = jf[" useInsertionEffect ".trim().toString()] || Ue;
function Ci({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,i] = DP({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const c = g.useRef(e !== void 0);
        g.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = g.useCallback(c => {
        var d;
        if (a) {
            const f = IP(c) ? c(e) : c;
            f !== e && ((d = i.current) == null || d.call(i, f))
        } else
            s(c)
    }
    , [a, e, s, i]);
    return [l, u]
}
function DP({defaultProp: e, onChange: t}) {
    const [n,r] = g.useState(e)
      , o = g.useRef(n)
      , s = g.useRef(t);
    return jP( () => {
        s.current = t
    }
    , [t]),
    g.useEffect( () => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function IP(e) {
    return typeof e == "function"
}
var Ax = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , LP = "VisuallyHidden"
  , au = g.forwardRef( (e, t) => m.jsx(ee.span, {
    ...e,
    ref: t,
    style: {
        ...Ax,
        ...e.style
    }
}));
au.displayName = LP;
var OP = au
  , Th = "ToastProvider"
  , [Ph,_P,FP] = Ch("Toast")
  , [Mx,V_] = Er("Toast", [FP])
  , [VP,lu] = Mx(Th)
  , jx = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [a,l] = g.useState(null)
      , [u,c] = g.useState(0)
      , d = g.useRef(!1)
      , f = g.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Th}\`. Expected non-empty \`string\`.`),
    m.jsx(Ph.Provider, {
        scope: t,
        children: m.jsx(VP, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: g.useCallback( () => c(h => h + 1), []),
            onToastRemove: g.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: i
        })
    })
}
;
jx.displayName = Th;
var Dx = "ToastViewport"
  , BP = ["F8"]
  , Id = "toast.viewportPause"
  , Ld = "toast.viewportResume"
  , Ix = g.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=BP, label: o="Notifications ({hotkey})", ...s} = e
      , i = lu(Dx, n)
      , a = _P(n)
      , l = g.useRef(null)
      , u = g.useRef(null)
      , c = g.useRef(null)
      , d = g.useRef(null)
      , f = Ee(t, d, i.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = i.toastCount > 0;
    g.useEffect( () => {
        const w = y => {
            var x;
            r.length !== 0 && r.every(b => y[b] || y.code === b) && ((x = d.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    g.useEffect( () => {
        const w = l.current
          , y = d.current;
        if (S && w && y) {
            const v = () => {
                if (!i.isClosePausedRef.current) {
                    const E = new CustomEvent(Id);
                    y.dispatchEvent(E),
                    i.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (i.isClosePausedRef.current) {
                    const E = new CustomEvent(Ld);
                    y.dispatchEvent(E),
                    i.isClosePausedRef.current = !1
                }
            }
              , b = E => {
                !w.contains(E.relatedTarget) && x()
            }
              , C = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", v),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", v),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", v),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", v),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", v),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [S, i.isClosePausedRef]);
    const p = g.useCallback( ({tabbingDirection: w}) => {
        const v = a().map(x => {
            const b = x.ref.current
              , C = [b, ...JP(b)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? v.reverse() : v).flat()
    }
    , [a]);
    return g.useEffect( () => {
        const w = d.current;
        if (w) {
            const y = v => {
                var C, E, P;
                const x = v.altKey || v.ctrlKey || v.metaKey;
                if (v.key === "Tab" && !x) {
                    const T = document.activeElement
                      , R = v.shiftKey;
                    if (v.target === w && R) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const L = p({
                        tabbingDirection: R ? "backwards" : "forwards"
                    })
                      , W = L.findIndex(D => D === T);
                    cc(L.slice(W + 1)) ? v.preventDefault() : R ? (E = u.current) == null || E.focus() : (P = c.current) == null || P.focus()
                }
            }
            ;
            return w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
        }
    }
    , [a, p]),
    m.jsxs(kP, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && m.jsx(Od, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = p({
                    tabbingDirection: "forwards"
                });
                cc(w)
            }
        }), m.jsx(Ph.Slot, {
            scope: n,
            children: m.jsx(ee.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), S && m.jsx(Od, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = p({
                    tabbingDirection: "backwards"
                });
                cc(w)
            }
        })]
    })
}
);
Ix.displayName = Dx;
var Lx = "ToastFocusProxy"
  , Od = g.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = lu(Lx, n);
    return m.jsx(au, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const a = i.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Od.displayName = Lx;
var zi = "Toast"
  , $P = "toast.swipeStart"
  , zP = "toast.swipeMove"
  , UP = "toast.swipeCancel"
  , WP = "toast.swipeEnd"
  , Ox = g.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [a,l] = Ci({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: zi
    });
    return m.jsx(iu, {
        present: n || a,
        children: m.jsx(GP, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: Dt(e.onPause),
            onResume: Dt(e.onResume),
            onSwipeStart: G(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: G(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: G(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: G(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
Ox.displayName = zi;
var [HP,KP] = Mx(zi, {
    onClose() {}
})
  , GP = g.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...S} = e
      , p = lu(zi, n)
      , [w,y] = g.useState(null)
      , v = Ee(t, D => y(D))
      , x = g.useRef(null)
      , b = g.useRef(null)
      , C = o || p.duration
      , E = g.useRef(0)
      , P = g.useRef(C)
      , T = g.useRef(0)
      , {onToastAdd: R, onToastRemove: M} = p
      , F = Dt( () => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((H = p.viewport) == null || H.focus()),
        i()
    }
    )
      , L = g.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(T.current),
        E.current = new Date().getTime(),
        T.current = window.setTimeout(F, D))
    }
    , [F]);
    g.useEffect( () => {
        const D = p.viewport;
        if (D) {
            const H = () => {
                L(P.current),
                u == null || u()
            }
              , B = () => {
                const V = new Date().getTime() - E.current;
                P.current = P.current - V,
                window.clearTimeout(T.current),
                l == null || l()
            }
            ;
            return D.addEventListener(Id, B),
            D.addEventListener(Ld, H),
            () => {
                D.removeEventListener(Id, B),
                D.removeEventListener(Ld, H)
            }
        }
    }
    , [p.viewport, C, l, u, L]),
    g.useEffect( () => {
        s && !p.isClosePausedRef.current && L(C)
    }
    , [s, C, p.isClosePausedRef, L]),
    g.useEffect( () => (R(),
    () => M()), [R, M]);
    const W = g.useMemo( () => w ? Ux(w) : null, [w]);
    return p.viewport ? m.jsxs(m.Fragment, {
        children: [W && m.jsx(YP, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), m.jsx(HP, {
            scope: n,
            onClose: F,
            children: io.createPortal(m.jsx(Ph.ItemSlot, {
                scope: n,
                children: m.jsx(PP, {
                    asChild: !0,
                    onEscapeKeyDown: G(a, () => {
                        p.isFocusedToastEscapeKeyDownRef.current || F(),
                        p.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: m.jsx(ee.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": p.swipeDirection,
                        ...S,
                        ref: v,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: G(e.onKeyDown, D => {
                            D.key === "Escape" && (a == null || a(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (p.isFocusedToastEscapeKeyDownRef.current = !0,
                            F()))
                        }
                        ),
                        onPointerDown: G(e.onPointerDown, D => {
                            D.button === 0 && (x.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: G(e.onPointerMove, D => {
                            if (!x.current)
                                return;
                            const H = D.clientX - x.current.x
                              , B = D.clientY - x.current.y
                              , V = !!b.current
                              , k = ["left", "right"].includes(p.swipeDirection)
                              , N = ["left", "up"].includes(p.swipeDirection) ? Math.min : Math.max
                              , O = k ? N(0, H) : 0
                              , K = k ? 0 : N(0, B)
                              , U = D.pointerType === "touch" ? 10 : 2
                              , X = {
                                x: O,
                                y: K
                            }
                              , Y = {
                                originalEvent: D,
                                delta: X
                            };
                            V ? (b.current = X,
                            va(zP, d, Y, {
                                discrete: !1
                            })) : Hm(X, p.swipeDirection, U) ? (b.current = X,
                            va($P, c, Y, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(H) > U || Math.abs(B) > U) && (x.current = null)
                        }
                        ),
                        onPointerUp: G(e.onPointerUp, D => {
                            const H = b.current
                              , B = D.target;
                            if (B.hasPointerCapture(D.pointerId) && B.releasePointerCapture(D.pointerId),
                            b.current = null,
                            x.current = null,
                            H) {
                                const V = D.currentTarget
                                  , k = {
                                    originalEvent: D,
                                    delta: H
                                };
                                Hm(H, p.swipeDirection, p.swipeThreshold) ? va(WP, h, k, {
                                    discrete: !0
                                }) : va(UP, f, k, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", N => N.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), p.viewport)
        })]
    }) : null
}
)
  , YP = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = lu(zi, t)
      , [s,i] = g.useState(!1)
      , [a,l] = g.useState(!1);
    return XP( () => i(!0)),
    g.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : m.jsx(Eh, {
        asChild: !0,
        children: m.jsx(au, {
            ...r,
            children: s && m.jsxs(m.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , QP = "ToastTitle"
  , _x = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return m.jsx(ee.div, {
        ...r,
        ref: t
    })
}
);
_x.displayName = QP;
var qP = "ToastDescription"
  , Fx = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return m.jsx(ee.div, {
        ...r,
        ref: t
    })
}
);
Fx.displayName = qP;
var Vx = "ToastAction"
  , Bx = g.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? m.jsx(zx, {
        altText: n,
        asChild: !0,
        children: m.jsx(kh, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Vx}\`. Expected non-empty \`string\`.`),
    null)
}
);
Bx.displayName = Vx;
var $x = "ToastClose"
  , kh = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = KP($x, n);
    return m.jsx(zx, {
        asChild: !0,
        children: m.jsx(ee.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: G(e.onClick, o.onClose)
        })
    })
}
);
kh.displayName = $x;
var zx = g.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return m.jsx(ee.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Ux(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        ZP(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...Ux(r))
        }
    }
    ),
    t
}
function va(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Px(o, s) : o.dispatchEvent(s)
}
var Hm = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function XP(e= () => {}
) {
    const t = Dt(e);
    Ue( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function ZP(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function JP(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function cc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var ek = jx
  , Wx = Ix
  , Hx = Ox
  , Kx = _x
  , Gx = Fx
  , Yx = Bx
  , Qx = kh;
function qx(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = qx(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Xx() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = qx(e)) && (r && (r += " "),
        r += t);
    return r
}
const Km = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Gm = Xx
  , uu = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Gm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const f = Km(c) || Km(d);
        return o[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(S => {
            let[p,w] = S;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...a
            }[p]) : {
                ...s,
                ...a
            }[p] === w
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Gm(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tk = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Zx = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nk = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = g.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...a}, l) => g.createElement("svg", {
    ref: l,
    ...nk,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Zx("lucide", o),
    ...a
}, [...i.map( ([u,c]) => g.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (e, t) => {
    const n = g.forwardRef( ({className: r, ...o}, s) => g.createElement(rk, {
        ref: s,
        iconNode: t,
        className: Zx(`lucide-${tk(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = me("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = me("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = me("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = me("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ew = me("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = me("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = me("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = me("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tw = me("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = me("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nw = me("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rw = me("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = me("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = me("FolderOpen", [["path", {
    d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
    key: "usdka0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sw = me("HardHat", [["path", {
    d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
    key: "1p9q5i"
}], ["path", {
    d: "M14 6a6 6 0 0 1 6 6v3",
    key: "1hnv84"
}], ["path", {
    d: "M4 15v-3a6 6 0 0 1 6-6",
    key: "9ciidu"
}], ["rect", {
    x: "2",
    y: "15",
    width: "20",
    height: "4",
    rx: "1",
    key: "g3x8cw"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = me("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = me("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = me("MessagesSquare", [["path", {
    d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
    key: "p1xzt8"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
    key: "1cx29u"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iw = me("Palette", [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = me("Ruler", [["path", {
    d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
    key: "icamh8"
}], ["path", {
    d: "m14.5 12.5 2-2",
    key: "inckbg"
}], ["path", {
    d: "m11.5 9.5 2-2",
    key: "fmmyf7"
}], ["path", {
    d: "m8.5 6.5 2-2",
    key: "vc6u1g"
}], ["path", {
    d: "m17.5 15.5 2-2",
    key: "wo5hmg"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = me("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = me("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = me("Upload", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "17 8 12 3 7 8",
    key: "t8dd8p"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "3",
    y2: "15",
    key: "widbto"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aw = me("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lw = me("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Nh = "-"
  , mk = e => {
    const t = vk(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(Nh);
            return a[0] === "" && a.length !== 1 && a.shift(),
            uw(a, t) || gk(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , uw = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? uw(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Nh);
    return (i = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : i.classGroupId
}
  , Ym = /^\[(.+)\]$/
  , gk = e => {
    if (Ym.test(e)) {
        const t = Ym.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , vk = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return xk(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        Fd(i, r, s, t)
    }
    ),
    r
}
  , Fd = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : Qm(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (yk(o)) {
                Fd(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            Fd(i, Qm(t, s), n, r)
        }
        )
    }
    )
}
  , Qm = (e, t) => {
    let n = e;
    return t.split(Nh).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , yk = e => e.isThemeGetter
  , xk = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,a]) => [t + i, a])) : s);
    return [n, o]
}
) : e
  , wk = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , cw = "!"
  , Sk = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < a.length; w++) {
            let y = a[w];
            if (u === 0) {
                if (y === o && (r || a.slice(w, w + s) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + s;
                    continue
                }
                if (y === "/") {
                    d = w;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(cw)
          , S = h ? f.substring(1) : f
          , p = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: S,
            maybePostfixModifierPosition: p
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , bk = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Ck = e => ({
    cache: wk(e.cacheSize),
    parseClassName: Sk(e),
    ...mk(e)
})
  , Ek = /\s+/
  , Tk = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(Ek);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let S = !!h
          , p = r(S ? f.substring(0, h) : f);
        if (!p) {
            if (!S) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (p = r(f),
            !p) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            S = !1
        }
        const w = bk(c).join(":")
          , y = d ? w + cw : w
          , v = y + p;
        if (s.includes(v))
            continue;
        s.push(v);
        const x = o(p, S);
        for (let b = 0; b < x.length; ++b) {
            const C = x[b];
            s.push(y + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Pk() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = dw(t)) && (r && (r += " "),
        r += n);
    return r
}
const dw = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = dw(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function kk(e, ...t) {
    let n, r, o, s = i;
    function i(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = Ck(u),
        r = n.cache.get,
        o = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = Tk(l, n);
        return o(l, c),
        c
    }
    return function() {
        return s(Pk.apply(null, arguments))
    }
}
const fe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , fw = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Rk = /^\d+\/\d+$/
  , Nk = new Set(["px", "full", "screen"])
  , Ak = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Mk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , jk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Dk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Ik = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , vn = e => Uo(e) || Nk.has(e) || Rk.test(e)
  , Vn = e => ms(e, "length", zk)
  , Uo = e => !!e && !Number.isNaN(Number(e))
  , dc = e => ms(e, "number", Uo)
  , Is = e => !!e && Number.isInteger(Number(e))
  , Lk = e => e.endsWith("%") && Uo(e.slice(0, -1))
  , Z = e => fw.test(e)
  , Bn = e => Ak.test(e)
  , Ok = new Set(["length", "size", "percentage"])
  , _k = e => ms(e, Ok, hw)
  , Fk = e => ms(e, "position", hw)
  , Vk = new Set(["image", "url"])
  , Bk = e => ms(e, Vk, Wk)
  , $k = e => ms(e, "", Uk)
  , Ls = () => !0
  , ms = (e, t, n) => {
    const r = fw.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , zk = e => Mk.test(e) && !jk.test(e)
  , hw = () => !1
  , Uk = e => Dk.test(e)
  , Wk = e => Ik.test(e)
  , Hk = () => {
    const e = fe("colors")
      , t = fe("spacing")
      , n = fe("blur")
      , r = fe("brightness")
      , o = fe("borderColor")
      , s = fe("borderRadius")
      , i = fe("borderSpacing")
      , a = fe("borderWidth")
      , l = fe("contrast")
      , u = fe("grayscale")
      , c = fe("hueRotate")
      , d = fe("invert")
      , f = fe("gap")
      , h = fe("gradientColorStops")
      , S = fe("gradientColorStopPositions")
      , p = fe("inset")
      , w = fe("margin")
      , y = fe("opacity")
      , v = fe("padding")
      , x = fe("saturate")
      , b = fe("scale")
      , C = fe("sepia")
      , E = fe("skew")
      , P = fe("space")
      , T = fe("translate")
      , R = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , F = () => ["auto", Z, t]
      , L = () => [Z, t]
      , W = () => ["", vn, Vn]
      , D = () => ["auto", Uo, Z]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , B = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , N = () => ["", "0", Z]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => [Uo, Z];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ls],
            spacing: [vn, Vn],
            blur: ["none", "", Bn, Z],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Bn, Z],
            borderSpacing: L(),
            borderWidth: W(),
            contrast: K(),
            grayscale: N(),
            hueRotate: K(),
            invert: N(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Lk, Vn],
            inset: F(),
            margin: F(),
            opacity: K(),
            padding: L(),
            saturate: K(),
            scale: K(),
            sepia: N(),
            skew: K(),
            space: L(),
            translate: L()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Z]
            }],
            container: ["container"],
            columns: [{
                columns: [Bn]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), Z]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: R()
            }],
            "overscroll-x": [{
                "overscroll-x": R()
            }],
            "overscroll-y": [{
                "overscroll-y": R()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [p]
            }],
            "inset-x": [{
                "inset-x": [p]
            }],
            "inset-y": [{
                "inset-y": [p]
            }],
            start: [{
                start: [p]
            }],
            end: [{
                end: [p]
            }],
            top: [{
                top: [p]
            }],
            right: [{
                right: [p]
            }],
            bottom: [{
                bottom: [p]
            }],
            left: [{
                left: [p]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Is, Z]
            }],
            basis: [{
                basis: F()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Z]
            }],
            grow: [{
                grow: N()
            }],
            shrink: [{
                shrink: N()
            }],
            order: [{
                order: ["first", "last", "none", Is, Z]
            }],
            "grid-cols": [{
                "grid-cols": [Ls]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Is, Z]
                }, Z]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [Ls]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Is, Z]
                }, Z]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Z]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [v]
            }],
            px: [{
                px: [v]
            }],
            py: [{
                py: [v]
            }],
            ps: [{
                ps: [v]
            }],
            pe: [{
                pe: [v]
            }],
            pt: [{
                pt: [v]
            }],
            pr: [{
                pr: [v]
            }],
            pb: [{
                pb: [v]
            }],
            pl: [{
                pl: [v]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [P]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [P]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t]
            }],
            "min-w": [{
                "min-w": [Z, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Z, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Bn]
                }, Bn]
            }],
            h: [{
                h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Z, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Bn, Vn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", dc]
            }],
            "font-family": [{
                font: [Ls]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Uo, dc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vn, Z]
            }],
            "list-image": [{
                "list-image": ["none", Z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...B(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", vn, Vn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", vn, Z]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), Fk]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", _k]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Bk]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...B(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...B()]
            }],
            "outline-offset": [{
                "outline-offset": [vn, Z]
            }],
            "outline-w": [{
                outline: [vn, Vn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [vn, Vn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Bn, $k]
            }],
            "shadow-color": [{
                shadow: [Ls]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Bn, Z]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
            }],
            duration: [{
                duration: K()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Z]
            }],
            delay: [{
                delay: K()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [Is, Z]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [vn, Vn, dc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Kk = kk(Hk);
function ye(...e) {
    return Kk(Xx(e))
}
const Gk = ek
  , pw = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Wx, {
    ref: n,
    className: ye("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
pw.displayName = Wx.displayName;
const Yk = uu("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , mw = g.forwardRef( ({className: e, variant: t, ...n}, r) => m.jsx(Hx, {
    ref: r,
    className: ye(Yk({
        variant: t
    }), e),
    ...n
}));
mw.displayName = Hx.displayName;
const Qk = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Yx, {
    ref: n,
    className: ye("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Qk.displayName = Yx.displayName;
const gw = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Qx, {
    ref: n,
    className: ye("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: m.jsx(lw, {
        className: "h-4 w-4"
    })
}));
gw.displayName = Qx.displayName;
const vw = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Kx, {
    ref: n,
    className: ye("text-sm font-semibold", e),
    ...t
}));
vw.displayName = Kx.displayName;
const yw = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Gx, {
    ref: n,
    className: ye("text-sm opacity-90", e),
    ...t
}));
yw.displayName = Gx.displayName;
function qk() {
    const {toasts: e} = cP();
    return m.jsxs(Gk, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return m.jsxs(mw, {
                ...s,
                children: [m.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && m.jsx(vw, {
                        children: n
                    }), r && m.jsx(yw, {
                        children: r
                    })]
                }), o, m.jsx(gw, {})]
            }, t)
        }), m.jsx(pw, {})]
    })
}
var qm = ["light", "dark"]
  , Xk = "(prefers-color-scheme: dark)"
  , Zk = g.createContext(void 0)
  , Jk = {
    setTheme: e => {}
    ,
    themes: []
}
  , e2 = () => {
    var e;
    return (e = g.useContext(Zk)) != null ? e : Jk
}
;
g.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? qm.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (S, p=!1, w=!0) => {
        let y = i ? i[S] : S
          , v = p ? S + "|| ''" : `'${y}'`
          , x = "";
        return o && w && !p && qm.includes(S) && (x += `d.style.colorScheme = '${S}';`),
        n === "class" ? p || y ? x += `c.add(${v})` : x += "null" : y && (x += `d[s](n,${v})`),
        x
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Xk}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
    return g.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var t2 = e => {
    switch (e) {
    case "success":
        return o2;
    case "info":
        return i2;
    case "warning":
        return s2;
    case "error":
        return a2;
    default:
        return null
    }
}
  , n2 = Array(12).fill(0)
  , r2 = ({visible: e, className: t}) => I.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, I.createElement("div", {
    className: "sonner-spinner"
}, n2.map( (n, r) => I.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , o2 = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , s2 = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , i2 = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , a2 = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, I.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , l2 = I.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, I.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), I.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , u2 = () => {
    let[e,t] = I.useState(document.hidden);
    return I.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Vd = 1
  , c2 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Vd++
              , s = this.toasts.find(a => a.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: i,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, i = r.then(async l => {
                if (s = ["resolve", l],
                I.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (f2(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => i.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Vd++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , it = new c2
  , d2 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Vd++;
    return it.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , f2 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , h2 = d2
  , p2 = () => it.toasts
  , m2 = () => it.getActiveToasts()
  , g2 = Object.assign(h2, {
    success: it.success,
    info: it.info,
    warning: it.warning,
    error: it.error,
    custom: it.custom,
    message: it.message,
    promise: it.promise,
    dismiss: it.dismiss,
    loading: it.loading
}, {
    getHistory: p2,
    getToasts: m2
});
function v2(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
v2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ya(e) {
    return e.label !== void 0
}
var y2 = 3
  , x2 = "32px"
  , w2 = "16px"
  , Xm = 4e3
  , S2 = 356
  , b2 = 14
  , C2 = 20
  , E2 = 200;
function Ft(...e) {
    return e.filter(Boolean).join(" ")
}
function T2(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var P2 = e => {
    var t, n, r, o, s, i, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: S, interacting: p, setHeights: w, visibleToasts: y, heights: v, index: x, toasts: b, expanded: C, removeToast: E, defaultRichColors: P, closeButton: T, style: R, cancelButtonStyle: M, actionButtonStyle: F, className: L="", descriptionClassName: W="", duration: D, position: H, gap: B, loadingIcon: V, expandByDefault: k, classNames: N, icons: O, closeButtonAriaLabel: K="Close toast", pauseWhenPageIsHidden: U} = e
      , [X,Y] = I.useState(null)
      , [de,Te] = I.useState(null)
      , [_,ie] = I.useState(!1)
      , [Pe,se] = I.useState(!1)
      , [te,re] = I.useState(!1)
      , [We,wt] = I.useState(!1)
      , [Rr,In] = I.useState(!1)
      , [Nr,Es] = I.useState(0)
      , [uo,Tp] = I.useState(0)
      , Ts = I.useRef(h.duration || D || Xm)
      , Pp = I.useRef(null)
      , Ar = I.useRef(null)
      , EC = x === 0
      , TC = x + 1 <= y
      , St = h.type
      , co = h.dismissible !== !1
      , PC = h.className || ""
      , kC = h.descriptionClassName || ""
      , Xi = I.useMemo( () => v.findIndex(Q => Q.toastId === h.id) || 0, [v, h.id])
      , RC = I.useMemo( () => {
        var Q;
        return (Q = h.closeButton) != null ? Q : T
    }
    , [h.closeButton, T])
      , kp = I.useMemo( () => h.duration || D || Xm, [h.duration, D])
      , Du = I.useRef(0)
      , fo = I.useRef(0)
      , Rp = I.useRef(0)
      , ho = I.useRef(null)
      , [NC,AC] = H.split("-")
      , Np = I.useMemo( () => v.reduce( (Q, le, ge) => ge >= Xi ? Q : Q + le.height, 0), [v, Xi])
      , Ap = u2()
      , MC = h.invert || f
      , Iu = St === "loading";
    fo.current = I.useMemo( () => Xi * B + Np, [Xi, Np]),
    I.useEffect( () => {
        Ts.current = kp
    }
    , [kp]),
    I.useEffect( () => {
        ie(!0)
    }
    , []),
    I.useEffect( () => {
        let Q = Ar.current;
        if (Q) {
            let le = Q.getBoundingClientRect().height;
            return Tp(le),
            w(ge => [{
                toastId: h.id,
                height: le,
                position: h.position
            }, ...ge]),
            () => w(ge => ge.filter(It => It.toastId !== h.id))
        }
    }
    , [w, h.id]),
    I.useLayoutEffect( () => {
        if (!_)
            return;
        let Q = Ar.current
          , le = Q.style.height;
        Q.style.height = "auto";
        let ge = Q.getBoundingClientRect().height;
        Q.style.height = le,
        Tp(ge),
        w(It => It.find(Lt => Lt.toastId === h.id) ? It.map(Lt => Lt.toastId === h.id ? {
            ...Lt,
            height: ge
        } : Lt) : [{
            toastId: h.id,
            height: ge,
            position: h.position
        }, ...It])
    }
    , [_, h.title, h.description, w, h.id]);
    let Ln = I.useCallback( () => {
        se(!0),
        Es(fo.current),
        w(Q => Q.filter(le => le.toastId !== h.id)),
        setTimeout( () => {
            E(h)
        }
        , E2)
    }
    , [h, E, w, fo]);
    I.useEffect( () => {
        if (h.promise && St === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let Q;
        return C || p || U && Ap ? ( () => {
            if (Rp.current < Du.current) {
                let le = new Date().getTime() - Du.current;
                Ts.current = Ts.current - le
            }
            Rp.current = new Date().getTime()
        }
        )() : Ts.current !== 1 / 0 && (Du.current = new Date().getTime(),
        Q = setTimeout( () => {
            var le;
            (le = h.onAutoClose) == null || le.call(h, h),
            Ln()
        }
        , Ts.current)),
        () => clearTimeout(Q)
    }
    , [C, p, h, St, U, Ap, Ln]),
    I.useEffect( () => {
        h.delete && Ln()
    }
    , [Ln, h.delete]);
    function jC() {
        var Q, le, ge;
        return O != null && O.loading ? I.createElement("div", {
            className: Ft(N == null ? void 0 : N.loader, (Q = h == null ? void 0 : h.classNames) == null ? void 0 : Q.loader, "sonner-loader"),
            "data-visible": St === "loading"
        }, O.loading) : V ? I.createElement("div", {
            className: Ft(N == null ? void 0 : N.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader, "sonner-loader"),
            "data-visible": St === "loading"
        }, V) : I.createElement(r2, {
            className: Ft(N == null ? void 0 : N.loader, (ge = h == null ? void 0 : h.classNames) == null ? void 0 : ge.loader),
            visible: St === "loading"
        })
    }
    return I.createElement("li", {
        tabIndex: 0,
        ref: Ar,
        className: Ft(L, PC, N == null ? void 0 : N.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[St], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[St]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : P,
        "data-styled": !(h.jsx || h.unstyled || S),
        "data-mounted": _,
        "data-promise": !!h.promise,
        "data-swiped": Rr,
        "data-removed": Pe,
        "data-visible": TC,
        "data-y-position": NC,
        "data-x-position": AC,
        "data-index": x,
        "data-front": EC,
        "data-swiping": te,
        "data-dismissible": co,
        "data-type": St,
        "data-invert": MC,
        "data-swipe-out": We,
        "data-swipe-direction": de,
        "data-expanded": !!(C || k && _),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": b.length - x,
            "--offset": `${Pe ? Nr : fo.current}px`,
            "--initial-height": k ? "auto" : `${uo}px`,
            ...R,
            ...h.style
        },
        onDragEnd: () => {
            re(!1),
            Y(null),
            ho.current = null
        }
        ,
        onPointerDown: Q => {
            Iu || !co || (Pp.current = new Date,
            Es(fo.current),
            Q.target.setPointerCapture(Q.pointerId),
            Q.target.tagName !== "BUTTON" && (re(!0),
            ho.current = {
                x: Q.clientX,
                y: Q.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Q, le, ge, It;
            if (We || !co)
                return;
            ho.current = null;
            let Lt = Number(((Q = Ar.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , On = Number(((le = Ar.current) == null ? void 0 : le.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Mr = new Date().getTime() - ((ge = Pp.current) == null ? void 0 : ge.getTime())
              , Ot = X === "x" ? Lt : On
              , _n = Math.abs(Ot) / Mr;
            if (Math.abs(Ot) >= C2 || _n > .11) {
                Es(fo.current),
                (It = h.onDismiss) == null || It.call(h, h),
                Te(X === "x" ? Lt > 0 ? "right" : "left" : On > 0 ? "down" : "up"),
                Ln(),
                wt(!0),
                In(!1);
                return
            }
            re(!1),
            Y(null)
        }
        ,
        onPointerMove: Q => {
            var le, ge, It, Lt;
            if (!ho.current || !co || ((le = window.getSelection()) == null ? void 0 : le.toString().length) > 0)
                return;
            let On = Q.clientY - ho.current.y
              , Mr = Q.clientX - ho.current.x
              , Ot = (ge = e.swipeDirections) != null ? ge : T2(H);
            !X && (Math.abs(Mr) > 1 || Math.abs(On) > 1) && Y(Math.abs(Mr) > Math.abs(On) ? "x" : "y");
            let _n = {
                x: 0,
                y: 0
            };
            X === "y" ? (Ot.includes("top") || Ot.includes("bottom")) && (Ot.includes("top") && On < 0 || Ot.includes("bottom") && On > 0) && (_n.y = On) : X === "x" && (Ot.includes("left") || Ot.includes("right")) && (Ot.includes("left") && Mr < 0 || Ot.includes("right") && Mr > 0) && (_n.x = Mr),
            (Math.abs(_n.x) > 0 || Math.abs(_n.y) > 0) && In(!0),
            (It = Ar.current) == null || It.style.setProperty("--swipe-amount-x", `${_n.x}px`),
            (Lt = Ar.current) == null || Lt.style.setProperty("--swipe-amount-y", `${_n.y}px`)
        }
    }, RC && !h.jsx ? I.createElement("button", {
        "aria-label": K,
        "data-disabled": Iu,
        "data-close-button": !0,
        onClick: Iu || !co ? () => {}
        : () => {
            var Q;
            Ln(),
            (Q = h.onDismiss) == null || Q.call(h, h)
        }
        ,
        className: Ft(N == null ? void 0 : N.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton)
    }, (s = O == null ? void 0 : O.close) != null ? s : l2) : null, h.jsx || g.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : I.createElement(I.Fragment, null, St || h.icon || h.promise ? I.createElement("div", {
        "data-icon": "",
        className: Ft(N == null ? void 0 : N.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || jC() : null, h.type !== "loading" ? h.icon || (O == null ? void 0 : O[St]) || t2(St) : null) : null, I.createElement("div", {
        "data-content": "",
        className: Ft(N == null ? void 0 : N.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, I.createElement("div", {
        "data-title": "",
        className: Ft(N == null ? void 0 : N.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? I.createElement("div", {
        "data-description": "",
        className: Ft(W, kC, N == null ? void 0 : N.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), g.isValidElement(h.cancel) ? h.cancel : h.cancel && ya(h.cancel) ? I.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || M,
        onClick: Q => {
            var le, ge;
            ya(h.cancel) && co && ((ge = (le = h.cancel).onClick) == null || ge.call(le, Q),
            Ln())
        }
        ,
        className: Ft(N == null ? void 0 : N.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, g.isValidElement(h.action) ? h.action : h.action && ya(h.action) ? I.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || F,
        onClick: Q => {
            var le, ge;
            ya(h.action) && ((ge = (le = h.action).onClick) == null || ge.call(le, Q),
            !Q.defaultPrevented && Ln())
        }
        ,
        className: Ft(N == null ? void 0 : N.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function Zm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function k2(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , i = s ? "--mobile-offset" : "--offset"
          , a = s ? w2 : x2;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = a : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var R2 = g.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: i, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: S=y2, toastOptions: p, dir: w=Zm(), gap: y=b2, loadingIcon: v, icons: x, containerAriaLabel: b="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,P] = I.useState([])
      , T = I.useMemo( () => Array.from(new Set([r].concat(E.filter(U => U.position).map(U => U.position)))), [E, r])
      , [R,M] = I.useState([])
      , [F,L] = I.useState(!1)
      , [W,D] = I.useState(!1)
      , [H,B] = I.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = I.useRef(null)
      , k = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , N = I.useRef(null)
      , O = I.useRef(!1)
      , K = I.useCallback(U => {
        P(X => {
            var Y;
            return (Y = X.find(de => de.id === U.id)) != null && Y.delete || it.dismiss(U.id),
            X.filter( ({id: de}) => de !== U.id)
        }
        )
    }
    , []);
    return I.useEffect( () => it.subscribe(U => {
        if (U.dismiss) {
            P(X => X.map(Y => Y.id === U.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            bx.flushSync( () => {
                P(X => {
                    let Y = X.findIndex(de => de.id === U.id);
                    return Y !== -1 ? [...X.slice(0, Y), {
                        ...X[Y],
                        ...U
                    }, ...X.slice(Y + 1)] : [U, ...X]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    I.useEffect( () => {
        if (c !== "system") {
            B(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? B("dark") : B("light")),
        typeof window > "u")
            return;
        let U = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            U.addEventListener("change", ({matches: X}) => {
                B(X ? "dark" : "light")
            }
            )
        } catch {
            U.addListener( ({matches: Y}) => {
                try {
                    B(Y ? "dark" : "light")
                } catch (de) {
                    console.error(de)
                }
            }
            )
        }
    }
    , [c]),
    I.useEffect( () => {
        E.length <= 1 && L(!1)
    }
    , [E]),
    I.useEffect( () => {
        let U = X => {
            var Y, de;
            o.every(Te => X[Te] || X.code === Te) && (L(!0),
            (Y = V.current) == null || Y.focus()),
            X.code === "Escape" && (document.activeElement === V.current || (de = V.current) != null && de.contains(document.activeElement)) && L(!1)
        }
        ;
        return document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
    }
    , [o]),
    I.useEffect( () => {
        if (V.current)
            return () => {
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null,
                O.current = !1)
            }
    }
    , [V.current]),
    I.createElement("section", {
        ref: t,
        "aria-label": `${b} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, T.map( (U, X) => {
        var Y;
        let[de,Te] = U.split("-");
        return E.length ? I.createElement("ol", {
            key: U,
            dir: w === "auto" ? Zm() : w,
            tabIndex: -1,
            ref: V,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": de,
            "data-lifted": F && E.length > 1 && !s,
            "data-x-position": Te,
            style: {
                "--front-toast-height": `${((Y = R[0]) == null ? void 0 : Y.height) || 0}px`,
                "--width": `${S2}px`,
                "--gap": `${y}px`,
                ...h,
                ...k2(l, u)
            },
            onBlur: _ => {
                O.current && !_.currentTarget.contains(_.relatedTarget) && (O.current = !1,
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null))
            }
            ,
            onFocus: _ => {
                _.target instanceof HTMLElement && _.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                N.current = _.relatedTarget)
            }
            ,
            onMouseEnter: () => L(!0),
            onMouseMove: () => L(!0),
            onMouseLeave: () => {
                W || L(!1)
            }
            ,
            onDragEnd: () => L(!1),
            onPointerDown: _ => {
                _.target instanceof HTMLElement && _.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, E.filter(_ => !_.position && X === 0 || _.position === U).map( (_, ie) => {
            var Pe, se;
            return I.createElement(P2, {
                key: _.id,
                icons: x,
                index: ie,
                toast: _,
                defaultRichColors: d,
                duration: (Pe = p == null ? void 0 : p.duration) != null ? Pe : f,
                className: p == null ? void 0 : p.className,
                descriptionClassName: p == null ? void 0 : p.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (se = p == null ? void 0 : p.closeButton) != null ? se : i,
                interacting: W,
                position: U,
                style: p == null ? void 0 : p.style,
                unstyled: p == null ? void 0 : p.unstyled,
                classNames: p == null ? void 0 : p.classNames,
                cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                removeToast: K,
                toasts: E.filter(te => te.position == _.position),
                heights: R.filter(te => te.position == _.position),
                setHeights: M,
                expandByDefault: s,
                gap: y,
                loadingIcon: v,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const N2 = ({...e}) => {
    const {theme: t="system"} = e2();
    return m.jsx(R2, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var A2 = jf[" useId ".trim().toString()] || ( () => {}
)
  , M2 = 0;
function Ui(e) {
    const [t,n] = g.useState(A2());
    return Ue( () => {
        n(r => r ?? String(M2++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const j2 = ["top", "right", "bottom", "left"]
  , gr = Math.min
  , ht = Math.max
  , Pl = Math.round
  , xa = Math.floor
  , vr = e => ({
    x: e,
    y: e
})
  , D2 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , I2 = {
    start: "end",
    end: "start"
};
function Bd(e, t, n) {
    return ht(e, gr(t, n))
}
function An(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Mn(e) {
    return e.split("-")[0]
}
function gs(e) {
    return e.split("-")[1]
}
function Ah(e) {
    return e === "x" ? "y" : "x"
}
function Mh(e) {
    return e === "y" ? "height" : "width"
}
function yr(e) {
    return ["top", "bottom"].includes(Mn(e)) ? "y" : "x"
}
function jh(e) {
    return Ah(yr(e))
}
function L2(e, t, n) {
    n === void 0 && (n = !1);
    const r = gs(e)
      , o = jh(e)
      , s = Mh(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = kl(i)),
    [i, kl(i)]
}
function O2(e) {
    const t = kl(e);
    return [$d(e), t, $d(t)]
}
function $d(e) {
    return e.replace(/start|end/g, t => I2[t])
}
function _2(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , s = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? s : i;
    default:
        return []
    }
}
function F2(e, t, n, r) {
    const o = gs(e);
    let s = _2(Mn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map($d)))),
    s
}
function kl(e) {
    return e.replace(/left|right|bottom|top/g, t => D2[t])
}
function V2(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function xw(e) {
    return typeof e != "number" ? V2(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Rl(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Jm(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = yr(t)
      , i = jh(t)
      , a = Mh(i)
      , l = Mn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , f = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (gs(t)) {
    case "start":
        h[i] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[i] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const B2 = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , a = s.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Jm(u, r, l)
      , f = r
      , h = {}
      , S = 0;
    for (let p = 0; p < a.length; p++) {
        const {name: w, fn: y} = a[p]
          , {x: v, y: x, data: b, reset: C} = await y({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = v ?? c,
        d = x ?? d,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...b
            }
        },
        C && S <= 50 && (S++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (u = C.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: c, y: d} = Jm(u, f, l)),
        p = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: o,
        middlewareData: h
    }
}
;
async function Ei(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = An(t, e)
      , S = xw(h)
      , w = a[f ? d === "floating" ? "reference" : "floating" : d]
      , y = Rl(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , v = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , b = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = Rl(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: v,
        offsetParent: x,
        strategy: l
    }) : v);
    return {
        top: (y.top - C.top + S.top) / b.y,
        bottom: (C.bottom - y.bottom + S.bottom) / b.y,
        left: (y.left - C.left + S.left) / b.x,
        right: (C.right - y.right + S.right) / b.x
    }
}
const $2 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = An(e, t) || {};
        if (u == null)
            return {};
        const d = xw(c)
          , f = {
            x: n,
            y: r
        }
          , h = jh(o)
          , S = Mh(h)
          , p = await i.getDimensions(u)
          , w = h === "y"
          , y = w ? "top" : "left"
          , v = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , b = s.reference[S] + s.reference[h] - f[h] - s.floating[S]
          , C = f[h] - s.reference[h]
          , E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let P = E ? E[x] : 0;
        (!P || !await (i.isElement == null ? void 0 : i.isElement(E))) && (P = a.floating[x] || s.floating[S]);
        const T = b / 2 - C / 2
          , R = P / 2 - p[S] / 2 - 1
          , M = gr(d[y], R)
          , F = gr(d[v], R)
          , L = M
          , W = P - p[S] - F
          , D = P / 2 - p[S] / 2 + T
          , H = Bd(L, D, W)
          , B = !l.arrow && gs(o) != null && D !== H && s.reference[S] / 2 - (D < L ? M : F) - p[S] / 2 < 0
          , V = B ? D < L ? D - L : D - W : 0;
        return {
            [h]: f[h] + V,
            data: {
                [h]: H,
                centerOffset: D - H - V,
                ...B && {
                    alignmentOffset: V
                }
            },
            reset: B
        }
    }
})
  , z2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: p=!0, ...w} = An(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const y = Mn(o)
              , v = yr(a)
              , x = Mn(a) === a
              , b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = f || (x || !p ? [kl(a)] : O2(a))
              , E = S !== "none";
            !f && E && C.push(...F2(a, p, S, b));
            const P = [a, ...C]
              , T = await Ei(t, w)
              , R = [];
            let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && R.push(T[y]),
            d) {
                const D = L2(o, i, b);
                R.push(T[D[0]], T[D[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: R
            }],
            !R.every(D => D <= 0)) {
                var F, L;
                const D = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1
                  , H = P[D];
                if (H)
                    return {
                        data: {
                            index: D,
                            overflows: M
                        },
                        reset: {
                            placement: H
                        }
                    };
                let B = (L = M.filter(V => V.overflows[0] <= 0).sort( (V, k) => V.overflows[1] - k.overflows[1])[0]) == null ? void 0 : L.placement;
                if (!B)
                    switch (h) {
                    case "bestFit":
                        {
                            var W;
                            const V = (W = M.filter(k => {
                                if (E) {
                                    const N = yr(k.placement);
                                    return N === v || N === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(N => N > 0).reduce( (N, O) => N + O, 0)]).sort( (k, N) => k[1] - N[1])[0]) == null ? void 0 : W[0];
                            V && (B = V);
                            break
                        }
                    case "initialPlacement":
                        B = a;
                        break
                    }
                if (o !== B)
                    return {
                        reset: {
                            placement: B
                        }
                    }
            }
            return {}
        }
    }
};
function eg(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function tg(e) {
    return j2.some(t => e[t] >= 0)
}
const U2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = An(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Ei(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = eg(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: tg(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Ei(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = eg(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: tg(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function W2(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = Mn(n)
      , a = gs(n)
      , l = yr(n) === "y"
      , u = ["left", "top"].includes(i) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = An(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: S} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof S == "number" && (h = a === "end" ? S * -1 : S),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const H2 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: a} = t
              , l = await W2(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , K2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: a={
                fn: w => {
                    let {x: y, y: v} = w;
                    return {
                        x: y,
                        y: v
                    }
                }
            }, ...l} = An(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Ei(t, l)
              , d = yr(Mn(o))
              , f = Ah(d);
            let h = u[f]
              , S = u[d];
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , v = h + c[w]
                  , x = h - c[y];
                h = Bd(v, h, x)
            }
            if (i) {
                const w = d === "y" ? "top" : "left"
                  , y = d === "y" ? "bottom" : "right"
                  , v = S + c[w]
                  , x = S - c[y];
                S = Bd(v, S, x)
            }
            const p = a.fn({
                ...t,
                [f]: h,
                [d]: S
            });
            return {
                ...p,
                data: {
                    x: p.x - n,
                    y: p.y - r,
                    enabled: {
                        [f]: s,
                        [d]: i
                    }
                }
            }
        }
    }
}
  , G2 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = An(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = yr(o)
              , f = Ah(d);
            let h = c[f]
              , S = c[d];
            const p = An(a, t)
              , w = typeof p == "number" ? {
                mainAxis: p,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...p
            };
            if (l) {
                const x = f === "y" ? "height" : "width"
                  , b = s.reference[f] - s.floating[x] + w.mainAxis
                  , C = s.reference[f] + s.reference[x] - w.mainAxis;
                h < b ? h = b : h > C && (h = C)
            }
            if (u) {
                var y, v;
                const x = f === "y" ? "width" : "height"
                  , b = ["top", "left"].includes(Mn(o))
                  , C = s.reference[d] - s.floating[x] + (b && ((y = i.offset) == null ? void 0 : y[d]) || 0) + (b ? 0 : w.crossAxis)
                  , E = s.reference[d] + s.reference[x] + (b ? 0 : ((v = i.offset) == null ? void 0 : v[d]) || 0) - (b ? w.crossAxis : 0);
                S < C ? S = C : S > E && (S = E)
            }
            return {
                [f]: h,
                [d]: S
            }
        }
    }
}
  , Y2 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...u} = An(e, t)
              , c = await Ei(t, u)
              , d = Mn(o)
              , f = gs(o)
              , h = yr(o) === "y"
              , {width: S, height: p} = s.floating;
            let w, y;
            d === "top" || d === "bottom" ? (w = d,
            y = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d,
            w = f === "end" ? "top" : "bottom");
            const v = p - c.top - c.bottom
              , x = S - c.left - c.right
              , b = gr(p - c[w], v)
              , C = gr(S - c[y], x)
              , E = !t.middlewareData.shift;
            let P = b
              , T = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = v),
            E && !f) {
                const M = ht(c.left, 0)
                  , F = ht(c.right, 0)
                  , L = ht(c.top, 0)
                  , W = ht(c.bottom, 0);
                h ? T = S - 2 * (M !== 0 || F !== 0 ? M + F : ht(c.left, c.right)) : P = p - 2 * (L !== 0 || W !== 0 ? L + W : ht(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: T,
                availableHeight: P
            });
            const R = await i.getDimensions(a.floating);
            return S !== R.width || p !== R.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function fu() {
    return typeof window < "u"
}
function vs(e) {
    return ww(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function gt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function gn(e) {
    var t;
    return (t = (ww(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function ww(e) {
    return fu() ? e instanceof Node || e instanceof gt(e).Node : !1
}
function Jt(e) {
    return fu() ? e instanceof Element || e instanceof gt(e).Element : !1
}
function pn(e) {
    return fu() ? e instanceof HTMLElement || e instanceof gt(e).HTMLElement : !1
}
function ng(e) {
    return !fu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof gt(e).ShadowRoot
}
function Wi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = en(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function Q2(e) {
    return ["table", "td", "th"].includes(vs(e))
}
function hu(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Dh(e) {
    const t = Ih()
      , n = Jt(e) ? en(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function q2(e) {
    let t = xr(e);
    for (; pn(t) && !ls(t); ) {
        if (Dh(t))
            return t;
        if (hu(t))
            return null;
        t = xr(t)
    }
    return null
}
function Ih() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function ls(e) {
    return ["html", "body", "#document"].includes(vs(e))
}
function en(e) {
    return gt(e).getComputedStyle(e)
}
function pu(e) {
    return Jt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function xr(e) {
    if (vs(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || ng(e) && e.host || gn(e);
    return ng(t) ? t.host : t
}
function Sw(e) {
    const t = xr(e);
    return ls(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && Wi(t) ? t : Sw(t)
}
function Ti(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Sw(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = gt(o);
    if (s) {
        const a = zd(i);
        return t.concat(i, i.visualViewport || [], Wi(o) ? o : [], a && n ? Ti(a) : [])
    }
    return t.concat(o, Ti(o, [], n))
}
function zd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function bw(e) {
    const t = en(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = pn(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , a = Pl(n) !== s || Pl(r) !== i;
    return a && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function Lh(e) {
    return Jt(e) ? e : e.contextElement
}
function Wo(e) {
    const t = Lh(e);
    if (!pn(t))
        return vr(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = bw(t);
    let i = (s ? Pl(n.width) : n.width) / r
      , a = (s ? Pl(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const X2 = vr(0);
function Cw(e) {
    const t = gt(e);
    return !Ih() || !t.visualViewport ? X2 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Z2(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== gt(e) ? !1 : t
}
function to(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = Lh(e);
    let i = vr(1);
    t && (r ? Jt(r) && (i = Wo(r)) : i = Wo(e));
    const a = Z2(s, n, r) ? Cw(s) : vr(0);
    let l = (o.left + a.x) / i.x
      , u = (o.top + a.y) / i.y
      , c = o.width / i.x
      , d = o.height / i.y;
    if (s) {
        const f = gt(s)
          , h = r && Jt(r) ? gt(r) : r;
        let S = f
          , p = zd(S);
        for (; p && r && h !== S; ) {
            const w = Wo(p)
              , y = p.getBoundingClientRect()
              , v = en(p)
              , x = y.left + (p.clientLeft + parseFloat(v.paddingLeft)) * w.x
              , b = y.top + (p.clientTop + parseFloat(v.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            l += x,
            u += b,
            S = gt(p),
            p = zd(S)
        }
    }
    return Rl({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function J2(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = gn(r)
      , a = t ? hu(t.floating) : !1;
    if (r === i || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = vr(1);
    const c = vr(0)
      , d = pn(r);
    if ((d || !d && !s) && ((vs(r) !== "body" || Wi(i)) && (l = pu(r)),
    pn(r))) {
        const f = to(r);
        u = Wo(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y
    }
}
function eR(e) {
    return Array.from(e.getClientRects())
}
function Ud(e, t) {
    const n = pu(e).scrollLeft;
    return t ? t.left + n : to(gn(e)).left + n
}
function tR(e) {
    const t = gn(e)
      , n = pu(e)
      , r = e.ownerDocument.body
      , o = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Ud(e);
    const a = -n.scrollTop;
    return en(r).direction === "rtl" && (i += ht(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: a
    }
}
function nR(e, t) {
    const n = gt(e)
      , r = gn(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const u = Ih();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
function rR(e, t) {
    const n = to(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = pn(e) ? Wo(e) : vr(1)
      , i = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}
function rg(e, t, n) {
    let r;
    if (t === "viewport")
        r = nR(e, n);
    else if (t === "document")
        r = tR(gn(e));
    else if (Jt(t))
        r = rR(t, n);
    else {
        const o = Cw(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Rl(r)
}
function Ew(e, t) {
    const n = xr(e);
    return n === t || !Jt(n) || ls(n) ? !1 : en(n).position === "fixed" || Ew(n, t)
}
function oR(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Ti(e, [], !1).filter(a => Jt(a) && vs(a) !== "body")
      , o = null;
    const s = en(e).position === "fixed";
    let i = s ? xr(e) : e;
    for (; Jt(i) && !ls(i); ) {
        const a = en(i)
          , l = Dh(i);
        !l && a.position === "fixed" && (o = null),
        (s ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Wi(i) && !l && Ew(e, i)) ? r = r.filter(c => c !== i) : o = a,
        i = xr(i)
    }
    return t.set(e, r),
    r
}
function sR(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? hu(t) ? [] : oR(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (u, c) => {
        const d = rg(t, c, o);
        return u.top = ht(d.top, u.top),
        u.right = gr(d.right, u.right),
        u.bottom = gr(d.bottom, u.bottom),
        u.left = ht(d.left, u.left),
        u
    }
    , rg(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function iR(e) {
    const {width: t, height: n} = bw(e);
    return {
        width: t,
        height: n
    }
}
function aR(e, t, n) {
    const r = pn(t)
      , o = gn(t)
      , s = n === "fixed"
      , i = to(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = vr(0);
    if (r || !r && !s)
        if ((vs(t) !== "body" || Wi(o)) && (a = pu(t)),
        r) {
            const h = to(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            o && (l.x = Ud(o));
    let u = 0
      , c = 0;
    if (o && !r && !s) {
        const h = o.getBoundingClientRect();
        c = h.top + a.scrollTop,
        u = h.left + a.scrollLeft - Ud(o, h)
    }
    const d = i.left + a.scrollLeft - l.x - u
      , f = i.top + a.scrollTop - l.y - c;
    return {
        x: d,
        y: f,
        width: i.width,
        height: i.height
    }
}
function fc(e) {
    return en(e).position === "static"
}
function og(e, t) {
    if (!pn(e) || en(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return gn(e) === n && (n = n.ownerDocument.body),
    n
}
function Tw(e, t) {
    const n = gt(e);
    if (hu(e))
        return n;
    if (!pn(e)) {
        let o = xr(e);
        for (; o && !ls(o); ) {
            if (Jt(o) && !fc(o))
                return o;
            o = xr(o)
        }
        return n
    }
    let r = og(e, t);
    for (; r && Q2(r) && fc(r); )
        r = og(r, t);
    return r && ls(r) && fc(r) && !Dh(r) ? n : r || q2(e) || n
}
const lR = async function(e) {
    const t = this.getOffsetParent || Tw
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: aR(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function uR(e) {
    return en(e).direction === "rtl"
}
const cR = {
    convertOffsetParentRelativeRectToViewportRelativeRect: J2,
    getDocumentElement: gn,
    getClippingRect: sR,
    getOffsetParent: Tw,
    getElementRects: lR,
    getClientRects: eR,
    getDimensions: iR,
    getScale: Wo,
    isElement: Jt,
    isRTL: uR
};
function dR(e, t) {
    let n = null, r;
    const o = gn(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const {left: u, top: c, width: d, height: f} = e.getBoundingClientRect();
        if (a || t(),
        !d || !f)
            return;
        const h = xa(c)
          , S = xa(o.clientWidth - (u + d))
          , p = xa(o.clientHeight - (c + f))
          , w = xa(u)
          , v = {
            rootMargin: -h + "px " + -S + "px " + -p + "px " + -w + "px",
            threshold: ht(0, gr(1, l)) || 1
        };
        let x = !0;
        function b(C) {
            const E = C[0].intersectionRatio;
            if (E !== l) {
                if (!x)
                    return i();
                E ? i(!1, E) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            x = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,v)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function fR(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Lh(e)
      , c = o || s ? [...u ? Ti(u) : [], ...Ti(t)] : [];
    c.forEach(y => {
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        s && y.addEventListener("resize", n)
    }
    );
    const d = u && a ? dR(u, n) : null;
    let f = -1
      , h = null;
    i && (h = new ResizeObserver(y => {
        let[v] = y;
        v && v.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var x;
            (x = h) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let S, p = l ? to(e) : null;
    l && w();
    function w() {
        const y = to(e);
        p && (y.x !== p.x || y.y !== p.y || y.width !== p.width || y.height !== p.height) && n(),
        p = y,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var y;
        c.forEach(v => {
            o && v.removeEventListener("scroll", n),
            s && v.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (y = h) == null || y.disconnect(),
        h = null,
        l && cancelAnimationFrame(S)
    }
}
const hR = H2
  , pR = K2
  , mR = z2
  , gR = Y2
  , vR = U2
  , sg = $2
  , yR = G2
  , xR = (e, t, n) => {
    const r = new Map
      , o = {
        platform: cR,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return B2(e, t, {
        ...o,
        platform: s
    })
}
;
var Ha = typeof document < "u" ? g.useLayoutEffect : g.useEffect;
function Nl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Nl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Nl(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Pw(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function ig(e, t) {
    const n = Pw(e);
    return Math.round(t * n) / n
}
function hc(e) {
    const t = g.useRef(e);
    return Ha( () => {
        t.current = e
    }
    ),
    t
}
function wR(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = g.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = g.useState(r);
    Nl(f, r) || h(r);
    const [S,p] = g.useState(null)
      , [w,y] = g.useState(null)
      , v = g.useCallback(k => {
        k !== E.current && (E.current = k,
        p(k))
    }
    , [])
      , x = g.useCallback(k => {
        k !== P.current && (P.current = k,
        y(k))
    }
    , [])
      , b = s || S
      , C = i || w
      , E = g.useRef(null)
      , P = g.useRef(null)
      , T = g.useRef(c)
      , R = l != null
      , M = hc(l)
      , F = hc(o)
      , L = hc(u)
      , W = g.useCallback( () => {
        if (!E.current || !P.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        F.current && (k.platform = F.current),
        xR(E.current, P.current, k).then(N => {
            const O = {
                ...N,
                isPositioned: L.current !== !1
            };
            D.current && !Nl(T.current, O) && (T.current = O,
            io.flushSync( () => {
                d(O)
            }
            ))
        }
        )
    }
    , [f, t, n, F, L]);
    Ha( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = g.useRef(!1);
    Ha( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    Ha( () => {
        if (b && (E.current = b),
        C && (P.current = C),
        b && C) {
            if (M.current)
                return M.current(b, C, W);
            W()
        }
    }
    , [b, C, W, M, R]);
    const H = g.useMemo( () => ({
        reference: E,
        floating: P,
        setReference: v,
        setFloating: x
    }), [v, x])
      , B = g.useMemo( () => ({
        reference: b,
        floating: C
    }), [b, C])
      , V = g.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!B.floating)
            return k;
        const N = ig(B.floating, c.x)
          , O = ig(B.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + N + "px, " + O + "px)",
            ...Pw(B.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: N,
            top: O
        }
    }
    , [n, a, B.floating, c.x, c.y]);
    return g.useMemo( () => ({
        ...c,
        update: W,
        refs: H,
        elements: B,
        floatingStyles: V
    }), [c, W, H, B, V])
}
const SR = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? sg({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? sg({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , bR = (e, t) => ({
    ...hR(e),
    options: [e, t]
})
  , CR = (e, t) => ({
    ...pR(e),
    options: [e, t]
})
  , ER = (e, t) => ({
    ...yR(e),
    options: [e, t]
})
  , TR = (e, t) => ({
    ...mR(e),
    options: [e, t]
})
  , PR = (e, t) => ({
    ...gR(e),
    options: [e, t]
})
  , kR = (e, t) => ({
    ...vR(e),
    options: [e, t]
})
  , RR = (e, t) => ({
    ...SR(e),
    options: [e, t]
});
var NR = "Arrow"
  , kw = g.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return m.jsx(ee.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : m.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
kw.displayName = NR;
var AR = kw;
function MR(e) {
    const [t,n] = g.useState(void 0);
    return Ue( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    a = u.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Oh = "Popper"
  , [Rw,mu] = Er(Oh)
  , [jR,Nw] = Rw(Oh)
  , Aw = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = g.useState(null);
    return m.jsx(jR, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
Aw.displayName = Oh;
var Mw = "PopperAnchor"
  , jw = g.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Nw(Mw, n)
      , i = g.useRef(null)
      , a = Ee(t, i);
    return g.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : m.jsx(ee.div, {
        ...o,
        ref: a
    })
}
);
jw.displayName = Mw;
var _h = "PopperContent"
  , [DR,IR] = Rw(_h)
  , Dw = g.forwardRef( (e, t) => {
    var _, ie, Pe, se, te, re;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: S, ...p} = e
      , w = Nw(_h, n)
      , [y,v] = g.useState(null)
      , x = Ee(t, We => v(We))
      , [b,C] = g.useState(null)
      , E = MR(b)
      , P = (E == null ? void 0 : E.width) ?? 0
      , T = (E == null ? void 0 : E.height) ?? 0
      , R = r + (s !== "center" ? "-" + s : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , F = Array.isArray(u) ? u : [u]
      , L = F.length > 0
      , W = {
        padding: M,
        boundary: F.filter(OR),
        altBoundary: L
    }
      , {refs: D, floatingStyles: H, placement: B, isPositioned: V, middlewareData: k} = wR({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...We) => fR(...We, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [bR({
            mainAxis: o + T,
            alignmentAxis: i
        }), l && CR({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? ER() : void 0,
            ...W
        }), l && TR({
            ...W
        }), PR({
            ...W,
            apply: ({elements: We, rects: wt, availableWidth: Rr, availableHeight: In}) => {
                const {width: Nr, height: Es} = wt.reference
                  , uo = We.floating.style;
                uo.setProperty("--radix-popper-available-width", `${Rr}px`),
                uo.setProperty("--radix-popper-available-height", `${In}px`),
                uo.setProperty("--radix-popper-anchor-width", `${Nr}px`),
                uo.setProperty("--radix-popper-anchor-height", `${Es}px`)
            }
        }), b && RR({
            element: b,
            padding: a
        }), _R({
            arrowWidth: P,
            arrowHeight: T
        }), f && kR({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [N,O] = Ow(B)
      , K = Dt(S);
    Ue( () => {
        V && (K == null || K())
    }
    , [V, K]);
    const U = (_ = k.arrow) == null ? void 0 : _.x
      , X = (ie = k.arrow) == null ? void 0 : ie.y
      , Y = ((Pe = k.arrow) == null ? void 0 : Pe.centerOffset) !== 0
      , [de,Te] = g.useState();
    return Ue( () => {
        y && Te(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    m.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: V ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: de,
            "--radix-popper-transform-origin": [(se = k.transformOrigin) == null ? void 0 : se.x, (te = k.transformOrigin) == null ? void 0 : te.y].join(" "),
            ...((re = k.hide) == null ? void 0 : re.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: m.jsx(DR, {
            scope: n,
            placedSide: N,
            onArrowChange: C,
            arrowX: U,
            arrowY: X,
            shouldHideArrow: Y,
            children: m.jsx(ee.div, {
                "data-side": N,
                "data-align": O,
                ...p,
                ref: x,
                style: {
                    ...p.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
Dw.displayName = _h;
var Iw = "PopperArrow"
  , LR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Lw = g.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = IR(Iw, r)
      , i = LR[s.placedSide];
    return m.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: m.jsx(AR, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Lw.displayName = Iw;
function OR(e) {
    return e !== null
}
var _R = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, y, v;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,c] = Ow(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + a / 2
          , h = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
        let S = ""
          , p = "";
        return u === "bottom" ? (S = i ? d : `${f}px`,
        p = `${-l}px`) : u === "top" ? (S = i ? d : `${f}px`,
        p = `${r.floating.height + l}px`) : u === "right" ? (S = `${-l}px`,
        p = i ? d : `${h}px`) : u === "left" && (S = `${r.floating.width + l}px`,
        p = i ? d : `${h}px`),
        {
            data: {
                x: S,
                y: p
            }
        }
    }
});
function Ow(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var FR = Aw
  , _w = jw
  , Fw = Dw
  , Vw = Lw
  , [gu,B_] = Er("Tooltip", [mu])
  , Fh = mu()
  , Bw = "TooltipProvider"
  , VR = 700
  , ag = "tooltip.open"
  , [BR,$w] = gu(Bw)
  , zw = e => {
    const {__scopeTooltip: t, delayDuration: n=VR, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , i = g.useRef(!0)
      , a = g.useRef(!1)
      , l = g.useRef(0);
    return g.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    m.jsx(BR, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: g.useCallback( () => {
            window.clearTimeout(l.current),
            i.current = !1
        }
        , []),
        onClose: g.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: g.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
zw.displayName = Bw;
var Uw = "Tooltip"
  , [$_,vu] = gu(Uw)
  , Wd = "TooltipTrigger"
  , $R = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = vu(Wd, n)
      , s = $w(Wd, n)
      , i = Fh(n)
      , a = g.useRef(null)
      , l = Ee(t, a, o.onTriggerChange)
      , u = g.useRef(!1)
      , c = g.useRef(!1)
      , d = g.useCallback( () => u.current = !1, []);
    return g.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    m.jsx(_w, {
        asChild: !0,
        ...i,
        children: m.jsx(ee.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: G(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: G(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: G(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: G(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: G(e.onBlur, o.onClose),
            onClick: G(e.onClick, o.onClose)
        })
    })
}
);
$R.displayName = Wd;
var zR = "TooltipPortal"
  , [z_,UR] = gu(zR, {
    forceMount: void 0
})
  , us = "TooltipContent"
  , Ww = g.forwardRef( (e, t) => {
    const n = UR(us, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , i = vu(us, e.__scopeTooltip);
    return m.jsx(iu, {
        present: r || i.open,
        children: i.disableHoverableContent ? m.jsx(Hw, {
            side: o,
            ...s,
            ref: t
        }) : m.jsx(WR, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , WR = g.forwardRef( (e, t) => {
    const n = vu(us, e.__scopeTooltip)
      , r = $w(us, e.__scopeTooltip)
      , o = g.useRef(null)
      , s = Ee(t, o)
      , [i,a] = g.useState(null)
      , {trigger: l, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , f = g.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = g.useCallback( (S, p) => {
        const w = S.currentTarget
          , y = {
            x: S.clientX,
            y: S.clientY
        }
          , v = QR(y, w.getBoundingClientRect())
          , x = qR(y, v)
          , b = XR(p.getBoundingClientRect())
          , C = JR([...x, ...b]);
        a(C),
        d(!0)
    }
    , [d]);
    return g.useEffect( () => () => f(), [f]),
    g.useEffect( () => {
        if (l && c) {
            const S = w => h(w, c)
              , p = w => h(w, l);
            return l.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", p),
            () => {
                l.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", p)
            }
        }
    }
    , [l, c, h, f]),
    g.useEffect( () => {
        if (i) {
            const S = p => {
                const w = p.target
                  , y = {
                    x: p.clientX,
                    y: p.clientY
                }
                  , v = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , x = !ZR(y, i);
                v ? f() : x && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, c, i, u, f]),
    m.jsx(Hw, {
        ...e,
        ref: s
    })
}
)
  , [HR,KR] = gu(Uw, {
    isInside: !1
})
  , GR = pP("TooltipContent")
  , Hw = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...a} = e
      , l = vu(us, n)
      , u = Fh(n)
      , {onClose: c} = l;
    return g.useEffect( () => (document.addEventListener(ag, c),
    () => document.removeEventListener(ag, c)), [c]),
    g.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    m.jsx(su, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: m.jsxs(Fw, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [m.jsx(GR, {
                children: r
            }), m.jsx(HR, {
                scope: n,
                isInside: !0,
                children: m.jsx(OP, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Ww.displayName = us;
var Kw = "TooltipArrow"
  , YR = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Fh(n);
    return KR(Kw, n).isInside ? null : m.jsx(Vw, {
        ...o,
        ...r,
        ref: t
    })
}
);
YR.displayName = Kw;
function QR(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function qR(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function XR(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function ZR(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s]
          , l = t[i]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (o = !o)
    }
    return o
}
function JR(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    eN(t)
}
function eN(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var tN = zw
  , Gw = Ww;
const nN = tN
  , rN = g.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => m.jsx(Gw, {
    ref: r,
    sideOffset: t,
    className: ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
rN.displayName = Gw.displayName;
var yu = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , xu = typeof window > "u" || "Deno"in globalThis;
function Ut() {}
function oN(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sN(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function iN(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Hd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function aN(e, t) {
    return typeof e == "function" ? e(t) : e
}
function lg(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== Vh(i, t.options))
                return !1
        } else if (!ki(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}
function ug(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Pi(t.options.mutationKey) !== Pi(s))
                return !1
        } else if (!ki(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Vh(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Pi)(e)
}
function Pi(e) {
    return JSON.stringify(e, (t, n) => Kd(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ki(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ki(e[n], t[n])) : !1
}
function Yw(e, t) {
    if (e === t)
        return e;
    const n = cg(e) && cg(t);
    if (n || Kd(e) && Kd(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < i; c++) {
            const d = n ? c : s[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = Yw(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === i && u === o ? e : a
    }
    return t
}
function cg(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Kd(e) {
    if (!dg(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!dg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function dg(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function lN(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function uN(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Yw(e, t) : t
}
function cN(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function dN(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Bh = Symbol();
function Qw(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Bh ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var $r, qn, Go, ty, fN = (ty = class extends yu {
    constructor() {
        super();
        oe(this, $r);
        oe(this, qn);
        oe(this, Go);
        q(this, Go, t => {
            if (!xu && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, qn) || this.setEventListener(A(this, Go))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, qn)) == null || t.call(this),
        q(this, qn, void 0))
    }
    setEventListener(t) {
        var n;
        q(this, Go, t),
        (n = A(this, qn)) == null || n.call(this),
        q(this, qn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        A(this, $r) !== t && (q(this, $r, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof A(this, $r) == "boolean" ? A(this, $r) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
$r = new WeakMap,
qn = new WeakMap,
Go = new WeakMap,
ty), qw = new fN, Yo, Xn, Qo, ny, hN = (ny = class extends yu {
    constructor() {
        super();
        oe(this, Yo, !0);
        oe(this, Xn);
        oe(this, Qo);
        q(this, Qo, t => {
            if (!xu && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, Xn) || this.setEventListener(A(this, Qo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, Xn)) == null || t.call(this),
        q(this, Xn, void 0))
    }
    setEventListener(t) {
        var n;
        q(this, Qo, t),
        (n = A(this, Xn)) == null || n.call(this),
        q(this, Xn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        A(this, Yo) !== t && (q(this, Yo, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return A(this, Yo)
    }
}
,
Yo = new WeakMap,
Xn = new WeakMap,
Qo = new WeakMap,
ny), Al = new hN;
function pN() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function mN(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Xw(e) {
    return (e ?? "online") === "online" ? Al.isOnline() : !0
}
var Zw = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function pc(e) {
    return e instanceof Zw
}
function Jw(e) {
    let t = !1, n = 0, r = !1, o;
    const s = pN()
      , i = p => {
        var w;
        r || (f(new Zw(p)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => qw.isFocused() && (e.networkMode === "always" || Al.isOnline()) && e.canRun()
      , c = () => Xw(e.networkMode) && e.canRun()
      , d = p => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, p),
        o == null || o(),
        s.resolve(p))
    }
      , f = p => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, p),
        o == null || o(),
        s.reject(p))
    }
      , h = () => new Promise(p => {
        var w;
        o = y => {
            (r || u()) && p(y)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var p;
        o = void 0,
        r || (p = e.onContinue) == null || p.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let p;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            p = w ?? e.fn()
        } catch (y) {
            p = Promise.reject(y)
        }
        Promise.resolve(p).then(d).catch(y => {
            var E;
            if (r)
                return;
            const v = e.retry ?? (xu ? 0 : 3)
              , x = e.retryDelay ?? mN
              , b = typeof x == "function" ? x(n, y) : x
              , C = v === !0 || typeof v == "number" && n < v || typeof v == "function" && v(n, y);
            if (t || !C) {
                f(y);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, y),
            lN(b).then( () => u() ? void 0 : h()).then( () => {
                t ? f(y) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? S() : h().then(S),
        s)
    }
}
var gN = e => setTimeout(e, 0);
function vN() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = gN;
    const s = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var et = vN(), zr, ry, e1 = (ry = class {
    constructor() {
        oe(this, zr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        sN(this.gcTime) && q(this, zr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (xu ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        A(this, zr) && (clearTimeout(A(this, zr)),
        q(this, zr, void 0))
    }
}
,
zr = new WeakMap,
ry), qo, Ur, Ct, Wr, Ye, Li, Hr, Wt, yn, oy, yN = (oy = class extends e1 {
    constructor(t) {
        super();
        oe(this, Wt);
        oe(this, qo);
        oe(this, Ur);
        oe(this, Ct);
        oe(this, Wr);
        oe(this, Ye);
        oe(this, Li);
        oe(this, Hr);
        q(this, Hr, !1),
        q(this, Li, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        q(this, Wr, t.client),
        q(this, Ct, A(this, Wr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        q(this, qo, wN(this.options)),
        this.state = t.state ?? A(this, qo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = A(this, Ye)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...A(this, Li),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && A(this, Ct).remove(this)
    }
    setData(t, n) {
        const r = uN(this.state.data, t, this.options);
        return He(this, Wt, yn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        He(this, Wt, yn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = A(this, Ye)) == null ? void 0 : r.promise;
        return (o = A(this, Ye)) == null || o.cancel(t),
        n ? n.then(Ut).catch(Ut) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(A(this, qo))
    }
    isActive() {
        return this.observers.some(t => aN(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Bh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Hd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !iN(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, Ye)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, Ye)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        A(this, Ct).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (A(this, Ye) && (A(this, Hr) ? A(this, Ye).cancel({
            revert: !0
        }) : A(this, Ye).cancelRetry()),
        this.scheduleGc()),
        A(this, Ct).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || He(this, Wt, yn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (A(this, Ye))
                return A(this, Ye).continueRetry(),
                A(this, Ye).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (q(this, Hr, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = Qw(this.options, n)
              , S = ( () => {
                const p = {
                    client: A(this, Wr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(p),
                p
            }
            )();
            return q(this, Hr, !1),
            this.options.persister ? this.options.persister(f, S, this) : f(S)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: A(this, Wr),
                state: this.state,
                fetchFn: s
            };
            return o(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        q(this, Ur, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && He(this, Wt, yn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, S, p, w;
            pc(f) && f.silent || He(this, Wt, yn).call(this, {
                type: "error",
                error: f
            }),
            pc(f) || ((S = (h = A(this, Ct).config).onError) == null || S.call(h, f, this),
            (w = (p = A(this, Ct).config).onSettled) == null || w.call(p, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return q(this, Ye, Jw({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, S, p, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (y) {
                    l(y);
                    return
                }
                (S = (h = A(this, Ct).config).onSuccess) == null || S.call(h, f, this),
                (w = (p = A(this, Ct).config).onSettled) == null || w.call(p, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                He(this, Wt, yn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                He(this, Wt, yn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                He(this, Wt, yn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        A(this, Ye).start()
    }
}
,
qo = new WeakMap,
Ur = new WeakMap,
Ct = new WeakMap,
Wr = new WeakMap,
Ye = new WeakMap,
Li = new WeakMap,
Hr = new WeakMap,
Wt = new WeakSet,
yn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...xN(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return q(this, Ur, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return pc(o) && o.revert && A(this, Ur) ? {
                ...A(this, Ur),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    et.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        A(this, Ct).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
oy);
function xN(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Xw(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function wN(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var sn, sy, SN = (sy = class extends yu {
    constructor(t={}) {
        super();
        oe(this, sn);
        this.config = t,
        q(this, sn, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? Vh(o, n);
        let i = this.get(s);
        return i || (i = new yN({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        A(this, sn).has(t.queryHash) || (A(this, sn).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = A(this, sn).get(t.queryHash);
        n && (t.destroy(),
        n === t && A(this, sn).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        et.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return A(this, sn).get(t)
    }
    getAll() {
        return [...A(this, sn).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => lg(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => lg(t, r)) : n
    }
    notify(t) {
        et.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        et.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        et.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
sn = new WeakMap,
sy), an, Ze, Kr, ln, $n, iy, bN = (iy = class extends e1 {
    constructor(t) {
        super();
        oe(this, ln);
        oe(this, an);
        oe(this, Ze);
        oe(this, Kr);
        this.mutationId = t.mutationId,
        q(this, Ze, t.mutationCache),
        q(this, an, []),
        this.state = t.state || CN(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        A(this, an).includes(t) || (A(this, an).push(t),
        this.clearGcTimeout(),
        A(this, Ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        q(this, an, A(this, an).filter(n => n !== t)),
        this.scheduleGc(),
        A(this, Ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        A(this, an).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, Ze).remove(this))
    }
    continue() {
        var t;
        return ((t = A(this, Kr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, i, a, l, u, c, d, f, h, S, p, w, y, v, x, b, C, E, P, T;
        const n = () => {
            He(this, ln, $n).call(this, {
                type: "continue"
            })
        }
        ;
        q(this, Kr, Jw({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, M) => {
                He(this, ln, $n).call(this, {
                    type: "failed",
                    failureCount: R,
                    error: M
                })
            }
            ,
            onPause: () => {
                He(this, ln, $n).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, Ze).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !A(this, Kr).canStart();
        try {
            if (r)
                n();
            else {
                He(this, ln, $n).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((i = (s = A(this, Ze).config).onMutate) == null ? void 0 : i.call(s, t, this));
                const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                M !== this.state.context && He(this, ln, $n).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const R = await A(this, Kr).start();
            return await ((c = (u = A(this, Ze).config).onSuccess) == null ? void 0 : c.call(u, R, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, R, t, this.state.context)),
            await ((S = (h = A(this, Ze).config).onSettled) == null ? void 0 : S.call(h, R, null, this.state.variables, this.state.context, this)),
            await ((w = (p = this.options).onSettled) == null ? void 0 : w.call(p, R, null, t, this.state.context)),
            He(this, ln, $n).call(this, {
                type: "success",
                data: R
            }),
            R
        } catch (R) {
            try {
                throw await ((v = (y = A(this, Ze).config).onError) == null ? void 0 : v.call(y, R, t, this.state.context, this)),
                await ((b = (x = this.options).onError) == null ? void 0 : b.call(x, R, t, this.state.context)),
                await ((E = (C = A(this, Ze).config).onSettled) == null ? void 0 : E.call(C, void 0, R, this.state.variables, this.state.context, this)),
                await ((T = (P = this.options).onSettled) == null ? void 0 : T.call(P, void 0, R, t, this.state.context)),
                R
            } finally {
                He(this, ln, $n).call(this, {
                    type: "error",
                    error: R
                })
            }
        } finally {
            A(this, Ze).runNext(this)
        }
    }
}
,
an = new WeakMap,
Ze = new WeakMap,
Kr = new WeakMap,
ln = new WeakSet,
$n = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    et.batch( () => {
        A(this, an).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        A(this, Ze).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
iy);
function CN() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Sn, Ht, Oi, ay, EN = (ay = class extends yu {
    constructor(t={}) {
        super();
        oe(this, Sn);
        oe(this, Ht);
        oe(this, Oi);
        this.config = t,
        q(this, Sn, new Set),
        q(this, Ht, new Map),
        q(this, Oi, 0)
    }
    build(t, n, r) {
        const o = new bN({
            mutationCache: this,
            mutationId: ++Zi(this, Oi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        A(this, Sn).add(t);
        const n = wa(t);
        if (typeof n == "string") {
            const r = A(this, Ht).get(n);
            r ? r.push(t) : A(this, Ht).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (A(this, Sn).delete(t)) {
            const n = wa(t);
            if (typeof n == "string") {
                const r = A(this, Ht).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && A(this, Ht).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = wa(t);
        if (typeof n == "string") {
            const r = A(this, Ht).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = wa(t);
        if (typeof n == "string") {
            const o = (r = A(this, Ht).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        et.batch( () => {
            A(this, Sn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            A(this, Sn).clear(),
            A(this, Ht).clear()
        }
        )
    }
    getAll() {
        return Array.from(A(this, Sn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => ug(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => ug(t, n))
    }
    notify(t) {
        et.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return et.batch( () => Promise.all(t.map(n => n.continue().catch(Ut))))
    }
}
,
Sn = new WeakMap,
Ht = new WeakMap,
Oi = new WeakMap,
ay);
function wa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function fg(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, S;
            const r = t.options
              , o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let p = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? p = !0 : t.signal.addEventListener("abort", () => {
                            p = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = Qw(t.options, t.fetchOptions)
                  , v = async (x, b, C) => {
                    if (p)
                        return Promise.reject();
                    if (b == null && x.pages.length)
                        return Promise.resolve(x);
                    const P = ( () => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: b,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(F),
                        F
                    }
                    )()
                      , T = await y(P)
                      , {maxPages: R} = t.options
                      , M = C ? dN : cN;
                    return {
                        pages: M(x.pages, T, R),
                        pageParams: M(x.pageParams, b, R)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , b = x ? TN : hg
                      , C = {
                        pages: s,
                        pageParams: i
                    }
                      , E = b(r, C);
                    a = await v(C, E, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const b = l === 0 ? i[0] ?? r.initialPageParam : hg(r, a);
                        if (l > 0 && b == null)
                            break;
                        a = await v(a, b),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var p, w;
                return (w = (p = t.options).persister) == null ? void 0 : w.call(p, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function hg(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function TN(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ke, Zn, Jn, Xo, Zo, er, Jo, es, ly, PN = (ly = class {
    constructor(e={}) {
        oe(this, ke);
        oe(this, Zn);
        oe(this, Jn);
        oe(this, Xo);
        oe(this, Zo);
        oe(this, er);
        oe(this, Jo);
        oe(this, es);
        q(this, ke, e.queryCache || new SN),
        q(this, Zn, e.mutationCache || new EN),
        q(this, Jn, e.defaultOptions || {}),
        q(this, Xo, new Map),
        q(this, Zo, new Map),
        q(this, er, 0)
    }
    mount() {
        Zi(this, er)._++,
        A(this, er) === 1 && (q(this, Jo, qw.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, ke).onFocus())
        }
        )),
        q(this, es, Al.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, ke).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Zi(this, er)._--,
        A(this, er) === 0 && ((e = A(this, Jo)) == null || e.call(this),
        q(this, Jo, void 0),
        (t = A(this, es)) == null || t.call(this),
        q(this, es, void 0))
    }
    isFetching(e) {
        return A(this, ke).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return A(this, Zn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, ke).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = A(this, ke).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Hd(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return A(this, ke).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = A(this, ke).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = oN(t, s);
        if (i !== void 0)
            return A(this, ke).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return et.batch( () => A(this, ke).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, ke).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = A(this, ke);
        et.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = A(this, ke);
        return et.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = et.batch( () => A(this, ke).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Ut).catch(Ut)
    }
    invalidateQueries(e, t={}) {
        return et.batch( () => (A(this, ke).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = et.batch( () => A(this, ke).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Ut)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Ut)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, ke).build(this, t);
        return n.isStaleByTime(Hd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Ut).catch(Ut)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = fg(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ut).catch(Ut)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = fg(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Al.isOnline() ? A(this, Zn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return A(this, ke)
    }
    getMutationCache() {
        return A(this, Zn)
    }
    getDefaultOptions() {
        return A(this, Jn)
    }
    setDefaultOptions(e) {
        q(this, Jn, e)
    }
    setQueryDefaults(e, t) {
        A(this, Xo).set(Pi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...A(this, Xo).values()]
          , n = {};
        return t.forEach(r => {
            ki(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        A(this, Zo).set(Pi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...A(this, Zo).values()]
          , n = {};
        return t.forEach(r => {
            ki(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...A(this, Jn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Vh(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Bh && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...A(this, Jn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        A(this, ke).clear(),
        A(this, Zn).clear()
    }
}
,
ke = new WeakMap,
Zn = new WeakMap,
Jn = new WeakMap,
Xo = new WeakMap,
Zo = new WeakMap,
er = new WeakMap,
Jo = new WeakMap,
es = new WeakMap,
ly), kN = g.createContext(void 0), RN = ({client: e, children: t}) => (g.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
m.jsx(kN.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ri() {
    return Ri = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ri.apply(this, arguments)
}
var rr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(rr || (rr = {}));
const pg = "popstate";
function NN(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: i, hash: a} = r.location;
        return Gd("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Ml(o)
    }
    return MN(t, n, null, e)
}
function je(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function t1(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function AN() {
    return Math.random().toString(36).substr(2, 8)
}
function mg(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Gd(e, t, n, r) {
    return n === void 0 && (n = null),
    Ri({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? ys(t) : t, {
        state: n,
        key: t && t.key || r || AN()
    })
}
function Ml(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function ys(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function MN(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , i = o.history
      , a = rr.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    i.replaceState(Ri({}, i.state, {
        idx: u
    }), ""));
    function c() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        a = rr.Pop;
        let w = c()
          , y = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: p.location,
            delta: y
        })
    }
    function f(w, y) {
        a = rr.Push;
        let v = Gd(p.location, w, y);
        u = c() + 1;
        let x = mg(v, u)
          , b = p.createHref(v);
        try {
            i.pushState(x, "", b)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(b)
        }
        s && l && l({
            action: a,
            location: p.location,
            delta: 1
        })
    }
    function h(w, y) {
        a = rr.Replace;
        let v = Gd(p.location, w, y);
        u = c();
        let x = mg(v, u)
          , b = p.createHref(v);
        i.replaceState(x, "", b),
        s && l && l({
            action: a,
            location: p.location,
            delta: 0
        })
    }
    function S(w) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , v = typeof w == "string" ? w : Ml(w);
        return v = v.replace(/ $/, "%20"),
        je(y, "No window.location.(origin|href) available to create URL for href: " + v),
        new URL(v,y)
    }
    let p = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(pg, d),
            l = w,
            () => {
                o.removeEventListener(pg, d),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let y = S(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return i.go(w)
        }
    };
    return p
}
var gg;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(gg || (gg = {}));
function jN(e, t, n) {
    return n === void 0 && (n = "/"),
    DN(e, t, n, !1)
}
function DN(e, t, n, r) {
    let o = typeof t == "string" ? ys(t) : t
      , s = $h(o.pathname || "/", n);
    if (s == null)
        return null;
    let i = n1(e);
    IN(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = HN(s);
        a = UN(i[l], u, r)
    }
    return a
}
function n1(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        l.relativePath.startsWith("/") && (je(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = hr([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (je(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        n1(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: $N(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            o(s, i);
        else
            for (let l of r1(s.path))
                o(s, i, l)
    }
    ),
    t
}
function r1(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let i = r1(r.join("/"))
      , a = [];
    return a.push(...i.map(l => l === "" ? s : [s, l].join("/"))),
    o && a.push(...i),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function IN(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : zN(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const LN = /^:[\w-]+$/
  , ON = 3
  , _N = 2
  , FN = 1
  , VN = 10
  , BN = -2
  , vg = e => e === "*";
function $N(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(vg) && (r += BN),
    t && (r += _N),
    n.filter(o => !vg(o)).reduce( (o, s) => o + (LN.test(s) ? ON : s === "" ? FN : VN), r)
}
function zN(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function UN(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , d = yg({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = yg({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        i.push({
            params: o,
            pathname: hr([s, d.pathname]),
            pathnameBase: QN(hr([s, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (s = hr([s, d.pathnameBase]))
    }
    return i
}
function yg(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = WN(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , i = s.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let p = a[d] || "";
                i = s.slice(0, s.length - p.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[d];
            return h && !S ? u[f] = void 0 : u[f] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function WN(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    t1(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function HN(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return t1(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function $h(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function KN(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? ys(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : GN(n, t) : t,
        search: qN(r),
        hash: XN(o)
    }
}
function GN(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function mc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function YN(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function o1(e, t) {
    let n = YN(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function s1(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = ys(e) : (o = Ri({}, e),
    je(!o.pathname || !o.pathname.includes("?"), mc("?", "pathname", "search", o)),
    je(!o.pathname || !o.pathname.includes("#"), mc("#", "pathname", "hash", o)),
    je(!o.search || !o.search.includes("#"), mc("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", i = s ? "/" : o.pathname, a;
    if (i == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let f = i.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                d -= 1;
            o.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = KN(o, a)
      , u = i && i !== "/" && i.endsWith("/")
      , c = (s || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const hr = e => e.join("/").replace(/\/\/+/g, "/")
  , QN = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , qN = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , XN = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ZN(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const i1 = ["post", "put", "patch", "delete"];
new Set(i1);
const JN = ["get", ...i1];
new Set(JN);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ni() {
    return Ni = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ni.apply(this, arguments)
}
const zh = g.createContext(null)
  , eA = g.createContext(null)
  , ao = g.createContext(null)
  , wu = g.createContext(null)
  , lo = g.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , a1 = g.createContext(null);
function tA(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Hi() || je(!1);
    let {basename: r, navigator: o} = g.useContext(ao)
      , {hash: s, pathname: i, search: a} = c1(e, {
        relative: n
    })
      , l = i;
    return r !== "/" && (l = i === "/" ? r : hr([r, i])),
    o.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function Hi() {
    return g.useContext(wu) != null
}
function xs() {
    return Hi() || je(!1),
    g.useContext(wu).location
}
function l1(e) {
    g.useContext(ao).static || g.useLayoutEffect(e)
}
function u1() {
    let {isDataRoute: e} = g.useContext(lo);
    return e ? pA() : nA()
}
function nA() {
    Hi() || je(!1);
    let e = g.useContext(zh)
      , {basename: t, future: n, navigator: r} = g.useContext(ao)
      , {matches: o} = g.useContext(lo)
      , {pathname: s} = xs()
      , i = JSON.stringify(o1(o, n.v7_relativeSplatPath))
      , a = g.useRef(!1);
    return l1( () => {
        a.current = !0
    }
    ),
    g.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = s1(u, JSON.parse(i), s, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : hr([t, d.pathname])),
        (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, i, s, e])
}
function c1(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = g.useContext(ao)
      , {matches: o} = g.useContext(lo)
      , {pathname: s} = xs()
      , i = JSON.stringify(o1(o, r.v7_relativeSplatPath));
    return g.useMemo( () => s1(e, JSON.parse(i), s, n === "path"), [e, i, s, n])
}
function rA(e, t) {
    return oA(e, t)
}
function oA(e, t, n, r) {
    Hi() || je(!1);
    let {navigator: o} = g.useContext(ao)
      , {matches: s} = g.useContext(lo)
      , i = s[s.length - 1]
      , a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = xs(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? ys(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || je(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = jN(e, {
        pathname: h
    })
      , p = uA(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: hr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : hr([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && p ? g.createElement(wu.Provider, {
        value: {
            location: Ni({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: rr.Pop
        }
    }, p) : p
}
function sA() {
    let e = hA()
      , t = ZN(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? g.createElement("pre", {
        style: o
    }, n) : null, null)
}
const iA = g.createElement(sA, null);
class aA extends g.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? g.createElement(lo.Provider, {
            value: this.props.routeContext
        }, g.createElement(a1.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function lA(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = g.useContext(zh);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(lo.Provider, {
        value: t
    }, r)
}
function uA(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = i.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || je(!1),
        i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , S = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || S) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (c, d, f) => {
        let h, S = !1, p = null, w = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        p = d.route.errorElement || iA,
        l && (u < 0 && f === 0 ? (S = !0,
        w = null) : u === f && (S = !0,
        w = d.route.hydrateFallbackElement || null)));
        let y = t.concat(i.slice(0, f + 1))
          , v = () => {
            let x;
            return h ? x = p : S ? x = w : d.route.Component ? x = g.createElement(d.route.Component, null) : d.route.element ? x = d.route.element : x = c,
            g.createElement(lA, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: y,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? g.createElement(aA, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: h,
            children: v(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : v()
    }
    , null)
}
var d1 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(d1 || {})
  , jl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(jl || {});
function cA(e) {
    let t = g.useContext(zh);
    return t || je(!1),
    t
}
function dA(e) {
    let t = g.useContext(eA);
    return t || je(!1),
    t
}
function fA(e) {
    let t = g.useContext(lo);
    return t || je(!1),
    t
}
function f1(e) {
    let t = fA()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || je(!1),
    n.route.id
}
function hA() {
    var e;
    let t = g.useContext(a1)
      , n = dA(jl.UseRouteError)
      , r = f1(jl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function pA() {
    let {router: e} = cA(d1.UseNavigateStable)
      , t = f1(jl.UseNavigateStable)
      , n = g.useRef(!1);
    return l1( () => {
        n.current = !0
    }
    ),
    g.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Ni({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function mA(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function yo(e) {
    je(!1)
}
function gA(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=rr.Pop, navigator: s, static: i=!1, future: a} = e;
    Hi() && je(!1);
    let l = t.replace(/^\/*/, "/")
      , u = g.useMemo( () => ({
        basename: l,
        navigator: s,
        static: i,
        future: Ni({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, i]);
    typeof r == "string" && (r = ys(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: S="default"} = r
      , p = g.useMemo( () => {
        let w = $h(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: S
            },
            navigationType: o
        }
    }
    , [l, c, d, f, h, S, o]);
    return p == null ? null : g.createElement(ao.Provider, {
        value: u
    }, g.createElement(wu.Provider, {
        children: n,
        value: p
    }))
}
function vA(e) {
    let {children: t, location: n} = e;
    return rA(Yd(t), n)
}
new Promise( () => {}
);
function Yd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return g.Children.forEach(e, (r, o) => {
        if (!g.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === g.Fragment) {
            n.push.apply(n, Yd(r.props.children, s));
            return
        }
        r.type !== yo && je(!1),
        !r.props.index || !r.props.children || je(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Yd(r.props.children, s)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qd() {
    return Qd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Qd.apply(this, arguments)
}
function yA(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, s;
    for (s = 0; s < r.length; s++)
        o = r[s],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function xA(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function wA(e, t) {
    return e.button === 0 && (!t || t === "_self") && !xA(e)
}
const SA = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , bA = "6";
try {
    window.__reactRouterVersion = bA
} catch {}
const CA = "startTransition"
  , xg = jf[CA];
function EA(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = g.useRef();
    s.current == null && (s.current = NN({
        window: o,
        v5Compat: !0
    }));
    let i = s.current
      , [a,l] = g.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , c = g.useCallback(d => {
        u && xg ? xg( () => l(d)) : l(d)
    }
    , [l, u]);
    return g.useLayoutEffect( () => i.listen(c), [i, c]),
    g.useEffect( () => mA(r), [r]),
    g.createElement(gA, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
const TA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , PA = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , bn = g.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: s, replace: i, state: a, target: l, to: u, preventScrollReset: c, viewTransition: d} = t, f = yA(t, SA), {basename: h} = g.useContext(ao), S, p = !1;
    if (typeof u == "string" && PA.test(u) && (S = u,
    TA))
        try {
            let x = new URL(window.location.href)
              , b = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u)
              , C = $h(b.pathname, h);
            b.origin === x.origin && C != null ? u = C + b.search + b.hash : p = !0
        } catch {}
    let w = tA(u, {
        relative: o
    })
      , y = kA(u, {
        replace: i,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        viewTransition: d
    });
    function v(x) {
        r && r(x),
        x.defaultPrevented || y(x)
    }
    return g.createElement("a", Qd({}, f, {
        href: S || w,
        onClick: p || s ? r : v,
        ref: n,
        target: l
    }))
});
var wg;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(wg || (wg = {}));
var Sg;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Sg || (Sg = {}));
function kA(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: s, relative: i, viewTransition: a} = t === void 0 ? {} : t
      , l = u1()
      , u = xs()
      , c = c1(e, {
        relative: i
    });
    return g.useCallback(d => {
        if (wA(d, n)) {
            d.preventDefault();
            let f = r !== void 0 ? r : Ml(u) === Ml(c);
            l(e, {
                replace: f,
                state: o,
                preventScrollReset: s,
                relative: i,
                viewTransition: a
            })
        }
    }
    , [u, l, c, r, o, n, e, s, i, a])
}
const RA = uu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , qt = g.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? fP : "button";
    return m.jsx(i, {
        className: ye(RA({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
qt.displayName = "Button";
const Uh = g.createContext({});
function Wh(e) {
    const t = g.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const h1 = typeof window < "u"
  , p1 = h1 ? g.useLayoutEffect : g.useEffect
  , Su = g.createContext(null);
function Hh(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Dl(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const mn = (e, t, n) => n > t ? t : n < e ? e : n;
let bu = () => {}
  , cs = () => {}
;
const jn = {}
  , m1 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function g1(e) {
    return typeof e == "object" && e !== null
}
const v1 = e => /^0[^.\s]+$/u.test(e);
function y1(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Nt = e => e
  , NA = (e, t) => n => t(e(n))
  , Ki = (...e) => e.reduce(NA)
  , Ai = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class Kh {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Hh(this.subscriptions, t),
        () => Dl(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < o; s++) {
                    const i = this.subscriptions[s];
                    i && i(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const At = e => e * 1e3
  , kt = e => e / 1e3;
function x1(e, t) {
    return t ? e * (1e3 / t) : 0
}
const w1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , AA = 1e-7
  , MA = 12;
function jA(e, t, n, r, o) {
    let s, i, a = 0;
    do
        i = t + (n - t) / 2,
        s = w1(i, r, o) - e,
        s > 0 ? n = i : t = i;
    while (Math.abs(s) > AA && ++a < MA);
    return i
}
function Gi(e, t, n, r) {
    if (e === t && n === r)
        return Nt;
    const o = s => jA(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : w1(o(s), t, r)
}
const S1 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , b1 = e => t => 1 - e(1 - t)
  , C1 = Gi(.33, 1.53, .69, .99)
  , Gh = b1(C1)
  , E1 = S1(Gh)
  , T1 = e => (e *= 2) < 1 ? .5 * Gh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Yh = e => 1 - Math.sin(Math.acos(e))
  , P1 = b1(Yh)
  , k1 = S1(Yh)
  , DA = Gi(.42, 0, 1, 1)
  , IA = Gi(0, 0, .58, 1)
  , R1 = Gi(.42, 0, .58, 1)
  , LA = e => Array.isArray(e) && typeof e[0] != "number"
  , N1 = e => Array.isArray(e) && typeof e[0] == "number"
  , bg = {
    linear: Nt,
    easeIn: DA,
    easeInOut: R1,
    easeOut: IA,
    circIn: Yh,
    circInOut: k1,
    circOut: P1,
    backIn: Gh,
    backInOut: E1,
    backOut: C1,
    anticipate: T1
}
  , OA = e => typeof e == "string"
  , Cg = e => {
    if (N1(e)) {
        cs(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,o] = e;
        return Gi(t, n, r, o)
    } else if (OA(e))
        return cs(bg[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        bg[e];
    return e
}
  , Sa = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Eg = {
    value: null,
    addProjectionMetrics: null
};
function _A(e, t) {
    let n = new Set
      , r = new Set
      , o = !1
      , s = !1;
    const i = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        i.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const p = h && o ? n : r;
            return f && i.add(d),
            p.has(d) || p.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            i.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            o) {
                s = !0;
                return
            }
            o = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && Eg.value && Eg.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            o = !1,
            s && (s = !1,
            c.process(d))
        }
    };
    return c
}
const FA = 40;
function A1(e, t) {
    let n = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , i = Sa.reduce( (x, b) => (x[b] = _A(s, t ? b : void 0),
    x), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: S} = i
      , p = () => {
        const x = jn.useManualTiming ? o.timestamp : performance.now();
        n = !1,
        jn.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(x - o.timestamp, FA), 1)),
        o.timestamp = x,
        o.isProcessing = !0,
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        h.process(o),
        S.process(o),
        o.isProcessing = !1,
        n && t && (r = !1,
        e(p))
    }
      , w = () => {
        n = !0,
        r = !0,
        o.isProcessing || e(p)
    }
    ;
    return {
        schedule: Sa.reduce( (x, b) => {
            const C = i[b];
            return x[b] = (E, P=!1, T=!1) => (n || w(),
            C.schedule(E, P, T)),
            x
        }
        , {}),
        cancel: x => {
            for (let b = 0; b < Sa.length; b++)
                i[Sa[b]].cancel(x)
        }
        ,
        state: o,
        steps: i
    }
}
const {schedule: ce, cancel: wr, state: Be, steps: gc} = A1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Nt, !0);
let Ka;
function VA() {
    Ka = void 0
}
const tt = {
    now: () => (Ka === void 0 && tt.set(Be.isProcessing || jn.useManualTiming ? Be.timestamp : performance.now()),
    Ka),
    set: e => {
        Ka = e,
        queueMicrotask(VA)
    }
}
  , M1 = e => t => typeof t == "string" && t.startsWith(e)
  , j1 = M1("--")
  , BA = M1("var(--")
  , Qh = e => BA(e) ? $A.test(e.split("/*")[0].trim()) : !1
  , $A = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Tg(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const ws = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Mi = {
    ...ws,
    transform: e => mn(0, 1, e)
}
  , ba = {
    ...ws,
    default: 1
}
  , ti = e => Math.round(e * 1e5) / 1e5
  , qh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function zA(e) {
    return e == null
}
const UA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Xh = (e, t) => n => !!(typeof n == "string" && UA.test(n) && n.startsWith(e) || t && !zA(n) && Object.prototype.hasOwnProperty.call(n, t))
  , D1 = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [o,s,i,a] = r.match(qh);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(s),
        [n]: parseFloat(i),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , WA = e => mn(0, 255, e)
  , vc = {
    ...ws,
    transform: e => Math.round(WA(e))
}
  , Vr = {
    test: Xh("rgb", "red"),
    parse: D1("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + vc.transform(e) + ", " + vc.transform(t) + ", " + vc.transform(n) + ", " + ti(Mi.transform(r)) + ")"
};
function HA(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const qd = {
    test: Xh("#"),
    parse: HA,
    transform: Vr.transform
}
  , Yi = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , zn = Yi("deg")
  , hn = Yi("%")
  , z = Yi("px")
  , KA = Yi("vh")
  , GA = Yi("vw")
  , Pg = {
    ...hn,
    parse: e => hn.parse(e) / 100,
    transform: e => hn.transform(e * 100)
}
  , jo = {
    test: Xh("hsl", "hue"),
    parse: D1("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + hn.transform(ti(t)) + ", " + hn.transform(ti(n)) + ", " + ti(Mi.transform(r)) + ")"
}
  , Ae = {
    test: e => Vr.test(e) || qd.test(e) || jo.test(e),
    parse: e => Vr.test(e) ? Vr.parse(e) : jo.test(e) ? jo.parse(e) : qd.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Vr.transform(e) : jo.transform(e),
    getAnimatableNone: e => {
        const t = Ae.parse(e);
        return t.alpha = 0,
        Ae.transform(t)
    }
}
  , YA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function QA(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(qh)) == null ? void 0 : t.length) || 0) + (((n = e.match(YA)) == null ? void 0 : n.length) || 0) > 0
}
const I1 = "number"
  , L1 = "color"
  , qA = "var"
  , XA = "var("
  , kg = "${}"
  , ZA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ji(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let s = 0;
    const a = t.replace(ZA, l => (Ae.test(l) ? (r.color.push(s),
    o.push(L1),
    n.push(Ae.parse(l))) : l.startsWith(XA) ? (r.var.push(s),
    o.push(qA),
    n.push(l)) : (r.number.push(s),
    o.push(I1),
    n.push(parseFloat(l))),
    ++s,
    kg)).split(kg);
    return {
        values: n,
        split: a,
        indexes: r,
        types: o
    }
}
function O1(e) {
    return ji(e).values
}
function _1(e) {
    const {split: t, types: n} = ji(e)
      , r = t.length;
    return o => {
        let s = "";
        for (let i = 0; i < r; i++)
            if (s += t[i],
            o[i] !== void 0) {
                const a = n[i];
                a === I1 ? s += ti(o[i]) : a === L1 ? s += Ae.transform(o[i]) : s += o[i]
            }
        return s
    }
}
const JA = e => typeof e == "number" ? 0 : Ae.test(e) ? Ae.getAnimatableNone(e) : e;
function eM(e) {
    const t = O1(e);
    return _1(e)(t.map(JA))
}
const Xt = {
    test: QA,
    parse: O1,
    createTransformer: _1,
    getAnimatableNone: eM
};
function yc(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function tM({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , s = 0
      , i = 0;
    if (!t)
        o = s = i = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        o = yc(l, a, e + 1 / 3),
        s = yc(l, a, e),
        i = yc(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(s * 255),
        blue: Math.round(i * 255),
        alpha: r
    }
}
function Il(e, t) {
    return n => n > 0 ? t : e
}
const Se = (e, t, n) => e + (t - e) * n
  , xc = (e, t, n) => {
    const r = e * e
      , o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , nM = [qd, Vr, jo]
  , rM = e => nM.find(t => t.test(e));
function Rg(e) {
    const t = rM(e);
    if (bu(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === jo && (n = tM(n)),
    n
}
const Ng = (e, t) => {
    const n = Rg(e)
      , r = Rg(t);
    if (!n || !r)
        return Il(e, t);
    const o = {
        ...n
    };
    return s => (o.red = xc(n.red, r.red, s),
    o.green = xc(n.green, r.green, s),
    o.blue = xc(n.blue, r.blue, s),
    o.alpha = Se(n.alpha, r.alpha, s),
    Vr.transform(o))
}
  , Xd = new Set(["none", "hidden"]);
function oM(e, t) {
    return Xd.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function sM(e, t) {
    return n => Se(e, t, n)
}
function Zh(e) {
    return typeof e == "number" ? sM : typeof e == "string" ? Qh(e) ? Il : Ae.test(e) ? Ng : lM : Array.isArray(e) ? F1 : typeof e == "object" ? Ae.test(e) ? Ng : iM : Il
}
function F1(e, t) {
    const n = [...e]
      , r = n.length
      , o = e.map( (s, i) => Zh(s)(s, t[i]));
    return s => {
        for (let i = 0; i < r; i++)
            n[i] = o[i](s);
        return n
    }
}
function iM(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = Zh(e[o])(e[o], t[o]));
    return o => {
        for (const s in r)
            n[s] = r[s](o);
        return n
    }
}
function aM(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , i = e.indexes[s][r[s]]
          , a = e.values[i] ?? 0;
        n[o] = a,
        r[s]++
    }
    return n
}
const lM = (e, t) => {
    const n = Xt.createTransformer(t)
      , r = ji(e)
      , o = ji(t);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Xd.has(e) && !o.values.length || Xd.has(t) && !r.values.length ? oM(e, t) : Ki(F1(aM(r, o), o.values), n) : (bu(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    Il(e, t))
}
;
function V1(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Se(e, t, n) : Zh(e)(e, t)
}
const uM = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => ce.update(t, n),
        stop: () => wr(t),
        now: () => Be.isProcessing ? Be.timestamp : tt.now()
    }
}
  , B1 = (e, t, n=10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < o; s++)
        r += Math.round(e(s / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Ll = 2e4;
function Jh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Ll; )
        t += n,
        r = e.next(t);
    return t >= Ll ? 1 / 0 : t
}
function cM(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , o = Math.min(Jh(r), Ll);
    return {
        type: "keyframes",
        ease: s => r.next(o * s).value / t,
        duration: kt(o)
    }
}
const dM = 5;
function $1(e, t, n) {
    const r = Math.max(t - dM, 0);
    return x1(n - e(r), t - r)
}
const xe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , wc = .001;
function fM({duration: e=xe.duration, bounce: t=xe.bounce, velocity: n=xe.velocity, mass: r=xe.mass}) {
    let o, s;
    bu(e <= At(xe.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let i = 1 - t;
    i = mn(xe.minDamping, xe.maxDamping, i),
    e = mn(xe.minDuration, xe.maxDuration, kt(e)),
    i < 1 ? (o = u => {
        const c = u * i
          , d = c * e
          , f = c - n
          , h = Zd(u, i)
          , S = Math.exp(-d);
        return wc - f / h * S
    }
    ,
    s = u => {
        const d = u * i * e
          , f = d * n + n
          , h = Math.pow(i, 2) * Math.pow(u, 2) * e
          , S = Math.exp(-d)
          , p = Zd(Math.pow(u, 2), i);
        return (-o(u) + wc > 0 ? -1 : 1) * ((f - h) * S) / p
    }
    ) : (o = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -wc + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = pM(o, s, a);
    if (e = At(e),
    isNaN(l))
        return {
            stiffness: xe.stiffness,
            damping: xe.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: i * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const hM = 12;
function pM(e, t, n) {
    let r = n;
    for (let o = 1; o < hM; o++)
        r = r - e(r) / t(r);
    return r
}
function Zd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const mM = ["duration", "bounce"]
  , gM = ["stiffness", "damping", "mass"];
function Ag(e, t) {
    return t.some(n => e[n] !== void 0)
}
function vM(e) {
    let t = {
        velocity: xe.velocity,
        stiffness: xe.stiffness,
        damping: xe.damping,
        mass: xe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Ag(e, gM) && Ag(e, mM))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , o = r * r
              , s = 2 * mn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            t = {
                ...t,
                mass: xe.mass,
                stiffness: o,
                damping: s
            }
        } else {
            const n = fM({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: xe.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Ol(e=xe.visualDuration, t=xe.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: o} = n;
    const s = n.keyframes[0]
      , i = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = vM({
        ...n,
        velocity: -kt(n.velocity || 0)
    })
      , S = f || 0
      , p = u / (2 * Math.sqrt(l * c))
      , w = i - s
      , y = kt(Math.sqrt(l / c))
      , v = Math.abs(w) < 5;
    r || (r = v ? xe.restSpeed.granular : xe.restSpeed.default),
    o || (o = v ? xe.restDelta.granular : xe.restDelta.default);
    let x;
    if (p < 1) {
        const C = Zd(y, p);
        x = E => {
            const P = Math.exp(-p * y * E);
            return i - P * ((S + p * y * w) / C * Math.sin(C * E) + w * Math.cos(C * E))
        }
    } else if (p === 1)
        x = C => i - Math.exp(-y * C) * (w + (S + y * w) * C);
    else {
        const C = y * Math.sqrt(p * p - 1);
        x = E => {
            const P = Math.exp(-p * y * E)
              , T = Math.min(C * E, 300);
            return i - P * ((S + p * y * w) * Math.sinh(T) + C * w * Math.cosh(T)) / C
        }
    }
    const b = {
        calculatedDuration: h && d || null,
        next: C => {
            const E = x(C);
            if (h)
                a.done = C >= d;
            else {
                let P = C === 0 ? S : 0;
                p < 1 && (P = C === 0 ? At(S) : $1(x, C, E));
                const T = Math.abs(P) <= r
                  , R = Math.abs(i - E) <= o;
                a.done = T && R
            }
            return a.value = a.done ? i : E,
            a
        }
        ,
        toString: () => {
            const C = Math.min(Jh(b), Ll)
              , E = B1(P => b.next(C * P).value, C, 30);
            return C + "ms " + E
        }
        ,
        toTransition: () => {}
    };
    return b
}
Ol.applyToOptions = e => {
    const t = cM(e, 100, Ol);
    return e.ease = t.ease,
    e.duration = At(t.duration),
    e.type = "keyframes",
    e
}
;
function Jd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: s=500, modifyTarget: i, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = T => a !== void 0 && T < a || l !== void 0 && T > l
      , S = T => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
    let p = n * t;
    const w = d + p
      , y = i === void 0 ? w : i(w);
    y !== w && (p = y - d);
    const v = T => -p * Math.exp(-T / r)
      , x = T => y + v(T)
      , b = T => {
        const R = v(T)
          , M = x(T);
        f.done = Math.abs(R) <= u,
        f.value = f.done ? y : M
    }
    ;
    let C, E;
    const P = T => {
        h(f.value) && (C = T,
        E = Ol({
            keyframes: [f.value, S(f.value)],
            velocity: $1(x, T, f.value),
            damping: o,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return P(0),
    {
        calculatedDuration: null,
        next: T => {
            let R = !1;
            return !E && C === void 0 && (R = !0,
            b(T),
            P(T)),
            C !== void 0 && T >= C ? E.next(T - C) : (!R && b(T),
            f)
        }
    }
}
function yM(e, t, n) {
    const r = []
      , o = n || jn.mix || V1
      , s = e.length - 1;
    for (let i = 0; i < s; i++) {
        let a = o(e[i], e[i + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[i] || Nt : t;
            a = Ki(l, a)
        }
        r.push(a)
    }
    return r
}
function xM(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const s = e.length;
    if (cs(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const i = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = yM(t, r, o)
      , l = a.length
      , u = c => {
        if (i && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = Ai(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(mn(e[0], e[s - 1], c)) : u
}
function wM(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Ai(0, t, r);
        e.push(Se(n, 1, o))
    }
}
function SM(e) {
    const t = [0];
    return wM(t, e.length - 1),
    t
}
function bM(e, t) {
    return e.map(n => n * t)
}
function CM(e, t) {
    return e.map( () => t || R1).splice(0, e.length - 1)
}
function ni({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const o = LA(r) ? r.map(Cg) : Cg(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , i = bM(n && n.length === t.length ? n : SM(t), e)
      , a = xM(i, t, {
        ease: Array.isArray(o) ? o : CM(t, o)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const EM = e => e !== null;
function ep(e, {repeat: t, repeatType: n="loop"}, r, o=1) {
    const s = e.filter(EM)
      , a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const TM = {
    decay: Jd,
    inertia: Jd,
    tween: ni,
    keyframes: ni,
    spring: Ol
};
function z1(e) {
    typeof e.type == "string" && (e.type = TM[e.type])
}
class tp {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const PM = e => e / 100;
class np extends tp {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, o;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== tt.now() && this.tick(tt.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (o = (r = this.options).onStop) == null || o.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        z1(t);
        const {type: n=ni, repeat: r=0, repeatDelay: o=0, repeatType: s, velocity: i=0} = t;
        let {keyframes: a} = t;
        const l = n || ni;
        l !== ni && typeof a[0] != "number" && (this.mixKeyframes = Ki(PM, V1(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -i
        })),
        u.calculatedDuration === null && (u.calculatedDuration = Jh(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + o,
        this.totalDuration = this.resolvedDuration * (r + 1) - o,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: o, mixKeyframes: s, mirroredGenerator: i, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: S, onUpdate: p, finalKeyframe: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , v = this.playbackSpeed >= 0 ? y < 0 : y > o;
        this.currentTime = Math.max(y, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let x = this.currentTime
          , b = r;
        if (d) {
            const T = Math.min(this.currentTime, o) / a;
            let R = Math.floor(T)
              , M = T % 1;
            !M && T >= 1 && (M = 1),
            M === 1 && R--,
            R = Math.min(R, d + 1),
            !!(R % 2) && (f === "reverse" ? (M = 1 - M,
            h && (M -= h / a)) : f === "mirror" && (b = i)),
            x = mn(0, 1, M) * a
        }
        const C = v ? {
            done: !1,
            value: c[0]
        } : b.next(x);
        s && (C.value = s(C.value));
        let {done: E} = C;
        !v && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return P && S !== Jd && (C.value = ep(c, this.options, w, this.speed)),
        p && p(C.value),
        P && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return kt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + kt(t)
    }
    get time() {
        return kt(this.currentTime)
    }
    set time(t) {
        var n;
        t = At(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(tt.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = kt(this.currentTime))
    }
    play() {
        var o, s;
        if (this.isStopped)
            return;
        const {driver: t=uM, startTime: n} = this.options;
        this.driver || (this.driver = t(i => this.tick(i))),
        (s = (o = this.options).onPlay) == null || s.call(o);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(tt.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function kM(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Br = e => e * 180 / Math.PI
  , ef = e => {
    const t = Br(Math.atan2(e[1], e[0]));
    return tf(t)
}
  , RM = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ef,
    rotateZ: ef,
    skewX: e => Br(Math.atan(e[1])),
    skewY: e => Br(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , tf = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , Mg = ef
  , jg = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Dg = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , NM = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: jg,
    scaleY: Dg,
    scale: e => (jg(e) + Dg(e)) / 2,
    rotateX: e => tf(Br(Math.atan2(e[6], e[5]))),
    rotateY: e => tf(Br(Math.atan2(-e[2], e[0]))),
    rotateZ: Mg,
    rotate: Mg,
    skewX: e => Br(Math.atan(e[4])),
    skewY: e => Br(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function nf(e) {
    return e.includes("scale") ? 1 : 0
}
function rf(e, t) {
    if (!e || e === "none")
        return nf(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (n)
        r = NM,
        o = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = RM,
        o = a
    }
    if (!o)
        return nf(t);
    const s = r[t]
      , i = o[1].split(",").map(MM);
    return typeof s == "function" ? s(i) : i[s]
}
const AM = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return rf(n, t)
}
;
function MM(e) {
    return parseFloat(e.trim())
}
const Ss = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , bs = new Set(Ss)
  , Ig = e => e === ws || e === z
  , jM = new Set(["x", "y", "z"])
  , DM = Ss.filter(e => !jM.has(e));
function IM(e) {
    const t = [];
    return DM.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const or = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => rf(t, "x"),
    y: (e, {transform: t}) => rf(t, "y")
};
or.translateX = or.x;
or.translateY = or.y;
const Qr = new Set;
let of = !1
  , sf = !1
  , af = !1;
function U1() {
    if (sf) {
        const e = Array.from(Qr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const o = IM(r);
            o.length && (n.set(r, o),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const o = n.get(r);
            o && o.forEach( ([s,i]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(i)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    sf = !1,
    of = !1,
    Qr.forEach(e => e.complete(af)),
    Qr.clear()
}
function W1() {
    Qr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (sf = !0)
    }
    )
}
function LM() {
    af = !0,
    W1(),
    U1(),
    af = !1
}
class rp {
    constructor(t, n, r, o, s, i=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = o,
        this.element = s,
        this.isAsync = i
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Qr.add(this),
        of || (of = !0,
        ce.read(W1),
        ce.resolveKeyframes(U1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: o} = this;
        if (t[0] === null) {
            const s = o == null ? void 0 : o.get()
              , i = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, i);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = i),
            o && s === void 0 && o.set(t[0])
        }
        kM(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Qr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Qr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const OM = e => e.startsWith("--");
function _M(e, t, n) {
    OM(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const FM = {};
function H1(e, t) {
    const n = y1(e);
    return () => FM[t] ?? n()
}
const VM = H1( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , K1 = H1( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , $s = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Lg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: $s([0, .65, .55, 1]),
    circOut: $s([.55, 0, 1, .45]),
    backIn: $s([.31, .01, .66, -.59]),
    backOut: $s([.33, 1.53, .69, .99])
};
function G1(e, t) {
    if (e)
        return typeof e == "function" ? K1() ? B1(e, t) : "ease-out" : N1(e) ? $s(e) : Array.isArray(e) ? e.map(n => G1(n, t) || Lg.easeOut) : Lg[e]
}
function BM(e, t, n, {delay: r=0, duration: o=300, repeat: s=0, repeatType: i="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = G1(a, o);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: o,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: i === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function Y1(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function $M({type: e, ...t}) {
    return Y1(e) && K1() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class Q1 extends tp {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: o, pseudoElement: s, allowFlatten: i=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = i,
        this.options = t,
        cs(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = $M(t);
        this.animation = BM(n, r, o, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = ep(o, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : _M(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, o;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((o = (r = this.animation).commitStyles) == null || o.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return kt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + kt(t)
    }
    get time() {
        return kt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = At(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && VM() ? (this.animation.timeline = t,
        Nt) : n(this)
    }
}
const q1 = {
    anticipate: T1,
    backInOut: E1,
    circInOut: k1
};
function zM(e) {
    return e in q1
}
function UM(e) {
    typeof e.ease == "string" && zM(e.ease) && (e.ease = q1[e.ease])
}
const Sc = 10;
class WM extends Q1 {
    constructor(t) {
        UM(t),
        z1(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: o, element: s, ...i} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new np({
            ...i,
            autoplay: !1
        })
          , l = Math.max(Sc, tt.now() - this.startTime)
          , u = mn(0, Sc, l - Sc);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const Og = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Xt.test(e) || e === "0") && !e.startsWith("url("));
function HM(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function KM(e, t, n, r) {
    const o = e[0];
    if (o === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , i = Og(o, t)
      , a = Og(s, t);
    return bu(i === a, `You are trying to animate ${t} from "${o}" to "${s}". "${i ? s : o}" is not an animatable value.`, "value-not-animatable"),
    !i || !a ? !1 : HM(e) || (n === "spring" || Y1(n)) && r
}
function lf(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const GM = new Set(["opacity", "clipPath", "filter", "transform"])
  , YM = y1( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function QM(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: s, type: i} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return YM() && n && GM.has(n) && (n !== "transform" || !u) && !l && !r && o !== "mirror" && s !== 0 && i !== "inertia"
}
const qM = 40;
class XM extends tp {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: o=0, repeatDelay: s=0, repeatType: i="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var S;
        super(),
        this.stop = () => {
            var p, w;
            this._animation && (this._animation.stop(),
            (p = this.stopTimeline) == null || p.call(this)),
            (w = this.keyframeResolver) == null || w.cancel()
        }
        ,
        this.createdAt = tt.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: o,
            repeatDelay: s,
            repeatType: i,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || rp;
        this.keyframeResolver = new h(a, (p, w, y) => this.onKeyframesResolved(p, w, f, !y),l,u,c),
        (S = this.keyframeResolver) == null || S.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, o) {
        var w, y;
        this.keyframeResolver = void 0;
        const {name: s, type: i, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = tt.now(),
        KM(t, s, i, a) || ((jn.instantAnimations || !l) && (c == null || c(ep(t, r, n))),
        t[0] = t[t.length - 1],
        lf(r),
        r.repeat = 0);
        const f = {
            startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > qM ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && QM(f)
          , S = (y = (w = f.motionValue) == null ? void 0 : w.owner) == null ? void 0 : y.current
          , p = h ? new WM({
            ...f,
            element: S
        }) : new np(f);
        p.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Nt),
        this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = p
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        LM()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function X1(e, t, n, r=0, o=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , i = e.size
      , a = (i - 1) * r;
    return typeof n == "function" ? n(s, i) : o === 1 ? s * r : a - s * r
}
const ZM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function JM(e) {
    const t = ZM.exec(e);
    if (!t)
        return [, ];
    const [,n,r,o] = t;
    return [`--${n ?? r}`, o]
}
const ej = 4;
function Z1(e, t, n=1) {
    cs(n <= ej, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,o] = JM(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const i = s.trim();
        return m1(i) ? parseFloat(i) : i
    }
    return Qh(o) ? Z1(o, t, n + 1) : o
}
const tj = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , nj = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , rj = {
    type: "keyframes",
    duration: .8
}
  , oj = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , sj = (e, {keyframes: t}) => t.length > 2 ? rj : bs.has(e) ? e.startsWith("scale") ? nj(t[1]) : tj : oj
  , ij = e => e !== null;
function aj(e, {repeat: t, repeatType: n="loop"}, r) {
    const o = e.filter(ij)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !s || r === void 0 ? o[s] : r
}
function J1(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function op(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? J1(n, e) : n
}
function lj({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const sp = (e, t, n, r={}, o, s) => i => {
    const a = op(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - At(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            i(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : o
    };
    lj(a) || Object.assign(c, sj(e, c)),
    c.duration && (c.duration = At(c.duration)),
    c.repeatDelay && (c.repeatDelay = At(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (lf(c),
    c.delay === 0 && (d = !0)),
    (jn.instantAnimations || jn.skipAnimations || o != null && o.shouldSkipAnimations) && (d = !0,
    lf(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !s && t.get() !== void 0) {
        const f = aj(c.keyframes, a);
        if (f !== void 0) {
            ce.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new np(c) : new XM(c)
}
;
function _g(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function ip(e, t, n, r) {
    if (typeof t == "function") {
        const [o,s] = _g(r);
        t = t(n !== void 0 ? n : e.custom, o, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [o,s] = _g(r);
        t = t(n !== void 0 ? n : e.custom, o, s)
    }
    return t
}
function Ho(e, t, n) {
    const r = e.getProps();
    return ip(r, t, n !== void 0 ? n : r.custom, e)
}
const eS = new Set(["width", "height", "top", "left", "right", "bottom", ...Ss])
  , Fg = 30
  , uj = e => !isNaN(parseFloat(e));
class cj {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const o = tt.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const i of this.dependents)
                    i.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = tt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = uj(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Kh);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ce.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = tt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Fg)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fg);
        return x1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ds(e, t) {
    return new cj(e,t)
}
const uf = e => Array.isArray(e);
function dj(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ds(n))
}
function fj(e) {
    return uf(e) ? e[e.length - 1] || 0 : e
}
function hj(e, t) {
    const n = Ho(e, t);
    let {transitionEnd: r={}, transition: o={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const i in s) {
        const a = fj(s[i]);
        dj(e, i, a)
    }
}
const qe = e => !!(e && e.getVelocity);
function pj(e) {
    return !!(qe(e) && e.add)
}
function cf(e, t) {
    const n = e.getValue("willChange");
    if (pj(n))
        return n.add(t);
    if (!n && jn.WillChange) {
        const r = new jn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function ap(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const mj = "framerAppearId"
  , tS = "data-" + ap(mj);
function nS(e) {
    return e.props[tS]
}
function gj({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function rS(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    let {transition: s, transitionEnd: i, ...a} = t;
    const l = e.getDefaultTransition();
    s = s ? J1(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const c = []
      , d = o && e.animationState && e.animationState.getState()[o];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , S = a[f];
        if (S === void 0 || d && gj(d, f))
            continue;
        const p = {
            delay: n,
            ...op(s || {}, f)
        }
          , w = h.get();
        if (w !== void 0 && !h.isAnimating && !Array.isArray(S) && S === w && !p.velocity)
            continue;
        let y = !1;
        if (window.MotionHandoffAnimation) {
            const b = nS(e);
            if (b) {
                const C = window.MotionHandoffAnimation(b, f, ce);
                C !== null && (p.startTime = C,
                y = !0)
            }
        }
        cf(e, f);
        const v = u ?? e.shouldReduceMotion;
        h.start(sp(f, h, S, v && eS.has(f) ? {
            type: !1
        } : p, e, y));
        const x = h.animation;
        x && c.push(x)
    }
    if (i) {
        const f = () => ce.update( () => {
            i && hj(e, i)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function df(e, t, n={}) {
    var l;
    const r = Ho(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = r ? () => Promise.all(rS(e, r, n)) : () => Promise.resolve()
      , i = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = o;
        return vj(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, i] : [i, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), i(n.delay)])
}
function vj(e, t, n=0, r=0, o=0, s=1, i) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(df(l, t, {
            ...i,
            delay: n + (typeof r == "function" ? 0 : r) + X1(e.variantChildren, l, r, o, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function yj(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(s => df(e, s, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = df(e, t, n);
    else {
        const o = typeof t == "function" ? Ho(e, t, n.custom) : t;
        r = Promise.all(rS(e, o, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const xj = {
    test: e => e === "auto",
    parse: e => e
}
  , oS = e => t => t.test(e)
  , sS = [ws, z, hn, zn, GA, KA, xj]
  , Vg = e => sS.find(oS(e));
function wj(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || v1(e) : !0
}
const Sj = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bj(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(qh) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let s = Sj.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + o + ")"
}
const Cj = /\b([a-z-]*)\(.*?\)/gu
  , ff = {
    ...Xt,
    getAnimatableNone: e => {
        const t = e.match(Cj);
        return t ? t.map(bj).join(" ") : e
    }
}
  , hf = {
    ...Xt,
    getAnimatableNone: e => {
        const t = Xt.parse(e);
        return Xt.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , Bg = {
    ...ws,
    transform: Math.round
}
  , Ej = {
    rotate: zn,
    rotateX: zn,
    rotateY: zn,
    rotateZ: zn,
    scale: ba,
    scaleX: ba,
    scaleY: ba,
    scaleZ: ba,
    skew: zn,
    skewX: zn,
    skewY: zn,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: Mi,
    originX: Pg,
    originY: Pg,
    originZ: z
}
  , lp = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    inset: z,
    insetBlock: z,
    insetBlockStart: z,
    insetBlockEnd: z,
    insetInline: z,
    insetInlineStart: z,
    insetInlineEnd: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    paddingBlock: z,
    paddingBlockStart: z,
    paddingBlockEnd: z,
    paddingInline: z,
    paddingInlineStart: z,
    paddingInlineEnd: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    marginBlock: z,
    marginBlockStart: z,
    marginBlockEnd: z,
    marginInline: z,
    marginInlineStart: z,
    marginInlineEnd: z,
    fontSize: z,
    backgroundPositionX: z,
    backgroundPositionY: z,
    ...Ej,
    zIndex: Bg,
    fillOpacity: Mi,
    strokeOpacity: Mi,
    numOctaves: Bg
}
  , Tj = {
    ...lp,
    color: Ae,
    backgroundColor: Ae,
    outlineColor: Ae,
    fill: Ae,
    stroke: Ae,
    borderColor: Ae,
    borderTopColor: Ae,
    borderRightColor: Ae,
    borderBottomColor: Ae,
    borderLeftColor: Ae,
    filter: ff,
    WebkitFilter: ff,
    mask: hf,
    WebkitMask: hf
}
  , iS = e => Tj[e]
  , Pj = new Set([ff, hf]);
function aS(e, t) {
    let n = iS(e);
    return Pj.has(n) || (n = Xt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const kj = new Set(["auto", "none", "0"]);
function Rj(e, t, n) {
    let r = 0, o;
    for (; r < e.length && !o; ) {
        const s = e[r];
        typeof s == "string" && !kj.has(s) && ji(s).values.length && (o = e[r]),
        r++
    }
    if (o && n)
        for (const s of t)
            e[s] = aS(n, o)
}
class Nj extends rp {
    constructor(t, n, r, o, s) {
        super(t, n, r, o, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            Qh(d))) {
                const f = Z1(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !eS.has(r) || t.length !== 2)
            return;
        const [o,s] = t
          , i = Vg(o)
          , a = Vg(s)
          , l = Tg(o)
          , u = Tg(s);
        if (l !== u && or[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (i !== a)
            if (Ig(i) && Ig(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                or[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let o = 0; o < t.length; o++)
            (t[o] === null || wj(t[o])) && r.push(o);
        r.length && Rj(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = or[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const o = t.getValue(n);
        o && o.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , i = r[s];
        r[s] = or[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Aj = new Set(["opacity", "clipPath", "filter", "transform"]);
function lS(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const o = document.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e).filter(r => r != null)
}
const uS = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function pf(e) {
    return g1(e) && "offsetHeight"in e
}
const {schedule: up, cancel: U_} = A1(queueMicrotask, !1)
  , Bt = {
    x: !1,
    y: !1
};
function cS() {
    return Bt.x || Bt.y
}
function Mj(e) {
    return e === "x" || e === "y" ? Bt[e] ? null : (Bt[e] = !0,
    () => {
        Bt[e] = !1
    }
    ) : Bt.x || Bt.y ? null : (Bt.x = Bt.y = !0,
    () => {
        Bt.x = Bt.y = !1
    }
    )
}
function dS(e, t) {
    const n = lS(e)
      , r = new AbortController
      , o = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, o, () => r.abort()]
}
function jj(e) {
    return !(e.pointerType === "touch" || cS())
}
function Dj(e, t, n={}) {
    const [r,o,s] = dS(e, n);
    return r.forEach(i => {
        let a = !1, l = !1, u;
        const c = () => {
            i.removeEventListener("pointerleave", S)
        }
          , d = w => {
            u && (u(w),
            u = void 0),
            c()
        }
          , f = w => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(w))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, o),
            window.addEventListener("pointercancel", f, o)
        }
          , S = w => {
            if (w.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(w)
            }
        }
          , p = w => {
            if (!jj(w))
                return;
            l = !1;
            const y = t(i, w);
            typeof y == "function" && (u = y,
            i.addEventListener("pointerleave", S, o))
        }
        ;
        i.addEventListener("pointerenter", p, o),
        i.addEventListener("pointerdown", h, o)
    }
    ),
    s
}
const fS = (e, t) => t ? e === t ? !0 : fS(e, t.parentElement) : !1
  , cp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , Ij = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Lj(e) {
    return Ij.has(e.tagName) || e.isContentEditable === !0
}
const Oj = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function _j(e) {
    return Oj.has(e.tagName) || e.isContentEditable === !0
}
const Ga = new WeakSet;
function $g(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function bc(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Fj = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = $g( () => {
        if (Ga.has(n))
            return;
        bc(n, "down");
        const o = $g( () => {
            bc(n, "up")
        }
        )
          , s = () => bc(n, "cancel");
        n.addEventListener("keyup", o, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function zg(e) {
    return cp(e) && !cS()
}
const Ug = new WeakSet;
function Vj(e, t, n={}) {
    const [r,o,s] = dS(e, n)
      , i = a => {
        const l = a.currentTarget;
        if (!zg(a) || Ug.has(a))
            return;
        Ga.add(l),
        n.stopPropagation && Ug.add(a);
        const u = t(l, a)
          , c = (h, S) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            Ga.has(l) && Ga.delete(l),
            zg(h) && typeof u == "function" && u(h, {
                success: S
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || fS(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o),
        pf(a) && (a.addEventListener("focus", u => Fj(u, o)),
        !Lj(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function dp(e) {
    return g1(e) && "ownerSVGElement"in e
}
const Ya = new WeakMap;
let Un;
const hS = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : dp(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , Bj = hS("inline", "width", "offsetWidth")
  , $j = hS("block", "height", "offsetHeight");
function zj({target: e, borderBoxSize: t}) {
    var n;
    (n = Ya.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return Bj(e, t)
            },
            get height() {
                return $j(e, t)
            }
        })
    }
    )
}
function Uj(e) {
    e.forEach(zj)
}
function Wj() {
    typeof ResizeObserver > "u" || (Un = new ResizeObserver(Uj))
}
function Hj(e, t) {
    Un || Wj();
    const n = lS(e);
    return n.forEach(r => {
        let o = Ya.get(r);
        o || (o = new Set,
        Ya.set(r, o)),
        o.add(t),
        Un == null || Un.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const o = Ya.get(r);
            o == null || o.delete(t),
            o != null && o.size || Un == null || Un.unobserve(r)
        }
        )
    }
}
const Qa = new Set;
let Do;
function Kj() {
    Do = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Qa.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", Do)
}
function Gj(e) {
    return Qa.add(e),
    Do || Kj(),
    () => {
        Qa.delete(e),
        !Qa.size && typeof Do == "function" && (window.removeEventListener("resize", Do),
        Do = void 0)
    }
}
function Wg(e, t) {
    return typeof e == "function" ? Gj(e) : Hj(e, t)
}
function Yj(e) {
    return dp(e) && e.tagName === "svg"
}
const Qj = [...sS, Ae, Xt]
  , qj = e => Qj.find(oS(e))
  , Hg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Io = () => ({
    x: Hg(),
    y: Hg()
})
  , Kg = () => ({
    min: 0,
    max: 0
})
  , De = () => ({
    x: Kg(),
    y: Kg()
})
  , Xj = new WeakMap;
function Cu(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Di(e) {
    return typeof e == "string" || Array.isArray(e)
}
const fp = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , hp = ["initial", ...fp];
function Eu(e) {
    return Cu(e.animate) || hp.some(t => Di(e[t]))
}
function pS(e) {
    return !!(Eu(e) || e.variants)
}
function Zj(e, t, n) {
    for (const r in t) {
        const o = t[r]
          , s = n[r];
        if (qe(o))
            e.addValue(r, o);
        else if (qe(s))
            e.addValue(r, ds(o, {
                owner: e
            }));
        else if (s !== o)
            if (e.hasValue(r)) {
                const i = e.getValue(r);
                i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o)
            } else {
                const i = e.getStaticValue(r);
                e.addValue(r, ds(i !== void 0 ? i : o, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const mf = {
    current: null
}
  , mS = {
    current: !1
}
  , Jj = typeof window < "u";
function eD() {
    if (mS.current = !0,
    !!Jj)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => mf.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            mf.current = !1
}
const Gg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let _l = {};
function gS(e) {
    _l = e
}
function tD() {
    return _l
}
class nD {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: o, skipAnimations: s, blockInitialAnimation: i, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = rp,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = tt.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            ce.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.skipAnimationsConfig = s,
        this.options = l,
        this.blockInitialAnimation = !!i,
        this.isControllingVariants = Eu(n),
        this.isVariantNode = pS(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const S = f[h];
            u[h] !== void 0 && qe(S) && S.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const o in this.initialValues)
                (n = this.values.get(o)) == null || n.jump(this.initialValues[o]),
                this.latestValues[o] = this.initialValues[o];
        this.current = t,
        Xj.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (o, s) => this.bindToMotionValue(s, o)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (mS.current || eD(),
        this.shouldReduceMotion = mf.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        wr(this.notifyUpdate),
        wr(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && Aj.has(t) && this.current instanceof HTMLElement) {
            const {factory: i, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new Q1({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: At(c)
            })
              , f = i(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = bs.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const o = n.on("change", i => {
            this.latestValues[t] = i,
            this.props.onUpdate && ce.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            o(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in _l) {
            const n = _l[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: o} = n;
            if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : De()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Gg.length; r++) {
            const o = Gg[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const s = "on" + o
              , i = t[s];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = Zj(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = ds(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (m1(r) || v1(r)) ? r = parseFloat(r) : !qj(r) && Xt.test(n) && (r = aS(t, n)),
        this.setBaseTarget(t, qe(r) ? r.get() : r)),
        qe(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const i = ip(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            i && (r = i[t])
        }
        if (n && r !== void 0)
            return r;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !qe(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Kh),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        up.render(this.render)
    }
}
class vS extends nD {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Nj
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        qe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class Tr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function yS({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function rD({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function oD(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Cc(e) {
    return e === void 0 || e === 1
}
function gf({scale: e, scaleX: t, scaleY: n}) {
    return !Cc(e) || !Cc(t) || !Cc(n)
}
function Lr(e) {
    return gf(e) || xS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function xS(e) {
    return Yg(e.x) || Yg(e.y)
}
function Yg(e) {
    return e && e !== "0%"
}
function Fl(e, t, n) {
    const r = e - n
      , o = t * r;
    return n + o
}
function Qg(e, t, n, r, o) {
    return o !== void 0 && (e = Fl(e, o, r)),
    Fl(e, n, r) + t
}
function vf(e, t=0, n=1, r, o) {
    e.min = Qg(e.min, t, n, r, o),
    e.max = Qg(e.max, t, n, r, o)
}
function wS(e, {x: t, y: n}) {
    vf(e.x, t.translate, t.scale, t.originPoint),
    vf(e.y, n.translate, n.scale, n.originPoint)
}
const qg = .999999999999
  , Xg = 1.0000000000001;
function sD(e, t, n, r=!1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let s, i;
    for (let a = 0; a < o; a++) {
        s = n[a],
        i = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Oo(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        i && (t.x *= i.x.scale,
        t.y *= i.y.scale,
        wS(e, i)),
        r && Lr(s.latestValues) && Oo(e, s.latestValues))
    }
    t.x < Xg && t.x > qg && (t.x = 1),
    t.y < Xg && t.y > qg && (t.y = 1)
}
function Lo(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Zg(e, t, n, r, o=.5) {
    const s = Se(e.min, e.max, o);
    vf(e, t, n, s, r)
}
function Oo(e, t) {
    Zg(e.x, t.x, t.scaleX, t.scale, t.originX),
    Zg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function SS(e, t) {
    return yS(oD(e.getBoundingClientRect(), t))
}
function iD(e, t, n) {
    const r = SS(e, n)
      , {scroll: o} = t;
    return o && (Lo(r.x, o.offset.x),
    Lo(r.y, o.offset.y)),
    r
}
const aD = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , lD = Ss.length;
function uD(e, t, n) {
    let r = ""
      , o = !0;
    for (let s = 0; s < lD; s++) {
        const i = Ss[s]
          , a = e[i];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (i.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = i.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = uS(a, lp[i]);
            if (!l) {
                o = !1;
                const c = aD[i] || i;
                r += `${c}(${u}) `
            }
            n && (t[i] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, o ? "" : r) : o && (r = "none"),
    r
}
function pp(e, t, n) {
    const {style: r, vars: o, transformOrigin: s} = e;
    let i = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (bs.has(l)) {
            i = !0;
            continue
        } else if (j1(l)) {
            o[l] = u;
            continue
        } else {
            const c = uS(u, lp[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (i || n ? r.transform = uD(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function bS(e, {style: t, vars: n}, r, o) {
    const s = e.style;
    let i;
    for (i in t)
        s[i] = t[i];
    o == null || o.applyProjectionStyles(s, r);
    for (i in n)
        s.setProperty(i, n[i])
}
function Jg(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Os = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (z.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Jg(e, t.target.x)
          , r = Jg(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , cD = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , o = Xt.parse(e);
        if (o.length > 5)
            return r;
        const s = Xt.createTransformer(e)
          , i = typeof o[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        o[0 + i] /= a,
        o[1 + i] /= l;
        const u = Se(a, l, .5);
        return typeof o[2 + i] == "number" && (o[2 + i] /= u),
        typeof o[3 + i] == "number" && (o[3 + i] /= u),
        s(o)
    }
}
  , yf = {
    borderRadius: {
        ...Os,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Os,
    borderTopRightRadius: Os,
    borderBottomLeftRadius: Os,
    borderBottomRightRadius: Os,
    boxShadow: cD
};
function CS(e, {layout: t, layoutId: n}) {
    return bs.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!yf[e] || e === "opacity")
}
function mp(e, t, n) {
    var i;
    const r = e.style
      , o = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (qe(r[a]) || o && qe(o[a]) || CS(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function dD(e) {
    return window.getComputedStyle(e)
}
class fD extends vS {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = bS
    }
    readValueFromInstance(t, n) {
        var r;
        if (bs.has(n))
            return (r = this.projection) != null && r.isProjecting ? nf(n) : AM(t, n);
        {
            const o = dD(t)
              , s = (j1(n) ? o.getPropertyValue(n) : o[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return SS(t, n)
    }
    build(t, n, r) {
        pp(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return mp(t, n, r)
    }
}
const hD = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , pD = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function mD(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const s = o ? hD : pD;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const gD = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function ES(e, {attrX: t, attrY: n, attrScale: r, pathLength: o, pathSpacing: s=1, pathOffset: i=0, ...a}, l, u, c) {
    if (pp(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of gD)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && mD(d, o, s, i, !1)
}
const TS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , PS = e => typeof e == "string" && e.toLowerCase() === "svg";
function vD(e, t, n, r) {
    bS(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(TS.has(o) ? o : ap(o), t.attrs[o])
}
function kS(e, t, n) {
    const r = mp(e, t, n);
    for (const o in e)
        if (qe(e[o]) || qe(t[o])) {
            const s = Ss.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[s] = e[o]
        }
    return r
}
class yD extends vS {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = De
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (bs.has(n)) {
            const r = iS(n);
            return r && r.default || 0
        }
        return n = TS.has(n) ? n : ap(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return kS(t, n, r)
    }
    build(t, n, r) {
        ES(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, o) {
        vD(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = PS(t.tagName),
        super.mount(t)
    }
}
const xD = hp.length;
function RS(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? RS(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < xD; n++) {
        const r = hp[n]
          , o = e.props[r];
        (Di(o) || o === !1) && (t[r] = o)
    }
    return t
}
function NS(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const wD = [...fp].reverse()
  , SD = fp.length;
function bD(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => yj(e, n, r)))
}
function CD(e) {
    let t = bD(e)
      , n = ev()
      , r = !0;
    const o = l => (u, c) => {
        var f;
        const d = Ho(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: S, ...p} = d;
            u = {
                ...u,
                ...p,
                ...S
            }
        }
        return u
    }
    ;
    function s(l) {
        t = l(e)
    }
    function i(l) {
        const {props: u} = e
          , c = RS(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , S = 1 / 0;
        for (let w = 0; w < SD; w++) {
            const y = wD[w]
              , v = n[y]
              , x = u[y] !== void 0 ? u[y] : c[y]
              , b = Di(x)
              , C = y === l ? v.isActive : null;
            C === !1 && (S = w);
            let E = x === c[y] && x !== u[y] && b;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            v.protectedKeys = {
                ...h
            },
            !v.isActive && C === null || !x && !v.prevProp || Cu(x) || typeof x == "boolean")
                continue;
            if (y === "exit" && v.isActive && C !== !0) {
                v.prevResolvedValues && (h = {
                    ...h,
                    ...v.prevResolvedValues
                });
                continue
            }
            const P = ED(v.prevProp, x);
            let T = P || y === l && v.isActive && !E && b || w > S && b
              , R = !1;
            const M = Array.isArray(x) ? x : [x];
            let F = M.reduce(o(y), {});
            C === !1 && (F = {});
            const {prevResolvedValues: L={}} = v
              , W = {
                ...L,
                ...F
            }
              , D = V => {
                T = !0,
                f.has(V) && (R = !0,
                f.delete(V)),
                v.needsAnimating[V] = !0;
                const k = e.getValue(V);
                k && (k.liveStyle = !1)
            }
            ;
            for (const V in W) {
                const k = F[V]
                  , N = L[V];
                if (h.hasOwnProperty(V))
                    continue;
                let O = !1;
                uf(k) && uf(N) ? O = !NS(k, N) : O = k !== N,
                O ? k != null ? D(V) : f.add(V) : k !== void 0 && f.has(V) ? D(V) : v.protectedKeys[V] = !0
            }
            v.prevProp = x,
            v.prevResolvedValues = F,
            v.isActive && (h = {
                ...h,
                ...F
            }),
            r && e.blockInitialAnimation && (T = !1);
            const H = E && P;
            T && (!H || R) && d.push(...M.map(V => {
                const k = {
                    type: y
                };
                if (typeof V == "string" && r && !H && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: N} = e
                      , O = Ho(N, V);
                    if (N.enteringChildren && O) {
                        const {delayChildren: K} = O.transition || {};
                        k.delay = X1(N.enteringChildren, e, K)
                    }
                }
                return {
                    animation: V,
                    options: k
                }
            }
            ))
        }
        if (f.size) {
            const w = {};
            if (typeof u.initial != "boolean") {
                const y = Ho(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                y && y.transition && (w.transition = y.transition)
            }
            f.forEach(y => {
                const v = e.getBaseTarget(y)
                  , x = e.getValue(y);
                x && (x.liveStyle = !0),
                w[y] = v ?? null
            }
            ),
            d.push({
                animation: w
            })
        }
        let p = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (p = !1),
        r = !1,
        p ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = i(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: i,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = ev()
        }
    }
}
function ED(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !NS(t, e) : !1
}
function jr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function ev() {
    return {
        animate: jr(!0),
        whileInView: jr(),
        whileHover: jr(),
        whileTap: jr(),
        whileDrag: jr(),
        whileFocus: jr(),
        exit: jr()
    }
}
function tv(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Vt(e, t) {
    tv(e.x, t.x),
    tv(e.y, t.y)
}
function nv(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const AS = 1e-4
  , TD = 1 - AS
  , PD = 1 + AS
  , MS = .01
  , kD = 0 - MS
  , RD = 0 + MS;
function nt(e) {
    return e.max - e.min
}
function ND(e, t, n) {
    return Math.abs(e - t) <= n
}
function rv(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = Se(t.min, t.max, e.origin),
    e.scale = nt(n) / nt(t),
    e.translate = Se(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= TD && e.scale <= PD || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= kD && e.translate <= RD || isNaN(e.translate)) && (e.translate = 0)
}
function ri(e, t, n, r) {
    rv(e.x, t.x, n.x, r ? r.originX : void 0),
    rv(e.y, t.y, n.y, r ? r.originY : void 0)
}
function ov(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + nt(t)
}
function AD(e, t, n) {
    ov(e.x, t.x, n.x),
    ov(e.y, t.y, n.y)
}
function sv(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + nt(t)
}
function Vl(e, t, n) {
    sv(e.x, t.x, n.x),
    sv(e.y, t.y, n.y)
}
function iv(e, t, n, r, o) {
    return e -= t,
    e = Fl(e, 1 / n, r),
    o !== void 0 && (e = Fl(e, 1 / o, r)),
    e
}
function MD(e, t=0, n=1, r=.5, o, s=e, i=e) {
    if (hn.test(t) && (t = parseFloat(t),
    t = Se(i.min, i.max, t / 100) - i.min),
    typeof t != "number")
        return;
    let a = Se(s.min, s.max, r);
    e === s && (a -= t),
    e.min = iv(e.min, t, n, a, o),
    e.max = iv(e.max, t, n, a, o)
}
function av(e, t, [n,r,o], s, i) {
    MD(e, t[n], t[r], t[o], t.scale, s, i)
}
const jD = ["x", "scaleX", "originX"]
  , DD = ["y", "scaleY", "originY"];
function lv(e, t, n, r) {
    av(e.x, t, jD, n ? n.x : void 0, r ? r.x : void 0),
    av(e.y, t, DD, n ? n.y : void 0, r ? r.y : void 0)
}
function uv(e) {
    return e.translate === 0 && e.scale === 1
}
function jS(e) {
    return uv(e.x) && uv(e.y)
}
function cv(e, t) {
    return e.min === t.min && e.max === t.max
}
function ID(e, t) {
    return cv(e.x, t.x) && cv(e.y, t.y)
}
function dv(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function DS(e, t) {
    return dv(e.x, t.x) && dv(e.y, t.y)
}
function fv(e) {
    return nt(e.x) / nt(e.y)
}
function hv(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function on(e) {
    return [e("x"), e("y")]
}
function LD(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
      , s = e.y.translate / t.y
      , i = (n == null ? void 0 : n.z) || 0;
    if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: S} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        S && (r += `skewY(${S}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const IS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , OD = IS.length
  , pv = e => typeof e == "string" ? parseFloat(e) : e
  , mv = e => typeof e == "number" || z.test(e);
function _D(e, t, n, r, o, s) {
    o ? (e.opacity = Se(0, n.opacity ?? 1, FD(r)),
    e.opacityExit = Se(t.opacity ?? 1, 0, VD(r))) : s && (e.opacity = Se(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let i = 0; i < OD; i++) {
        const a = `border${IS[i]}Radius`;
        let l = gv(t, a)
          , u = gv(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || mv(l) === mv(u) ? (e[a] = Math.max(Se(pv(l), pv(u), r), 0),
        (hn.test(u) || hn.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r))
}
function gv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const FD = LS(0, .5, P1)
  , VD = LS(.5, .95, Nt);
function LS(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Ai(e, t, r))
}
function BD(e, t, n) {
    const r = qe(e) ? e : ds(e);
    return r.start(sp("", r, t, n)),
    r.animation
}
function Ii(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const $D = (e, t) => e.depth - t.depth;
class zD {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Hh(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Dl(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort($D),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function UD(e, t) {
    const n = tt.now()
      , r = ({timestamp: o}) => {
        const s = o - n;
        s >= t && (wr(r),
        e(s - t))
    }
    ;
    return ce.setup(r, !0),
    () => wr(r)
}
function qa(e) {
    return qe(e) ? e.get() : e
}
class WD {
    constructor() {
        this.members = []
    }
    add(t) {
        Hh(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const o = r.instance;
            o && o.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && Dl(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Dl(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const s = this.members[o]
              , i = s.instance;
            if (s.isPresent !== !1 && (!i || i.isConnected !== !1)) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const o = r.options.layoutDependency
              , s = t.options.layoutDependency;
            if (!(o !== void 0 && s !== void 0 && o === s)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const Xa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Ec = ["", "X", "Y", "Z"]
  , HD = 1e3;
let KD = 0;
function Tc(e, t, n, r) {
    const {latestValues: o} = t;
    o[e] && (n[e] = o[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function OS(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = nS(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ce, !(o || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && OS(r)
}
function _S({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(i={}, a=t == null ? void 0 : t()) {
            this.id = KD++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(QD),
                this.nodes.forEach(JD),
                this.nodes.forEach(eI),
                this.nodes.forEach(qD)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = i,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new zD)
        }
        addEventListener(i, a) {
            return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Kh),
            this.eventHandlers.get(i).add(a)
        }
        notifyListeners(i, ...a) {
            const l = this.eventHandlers.get(i);
            l && l.notify(...a)
        }
        hasListeners(i) {
            return this.eventHandlers.has(i)
        }
        mount(i) {
            if (this.instance)
                return;
            this.isSVG = dp(i) && !Yj(i),
            this.instance = i;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(i),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                ce.read( () => {
                    d = window.innerWidth
                }
                ),
                e(i, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = UD(f, 250),
                    Xa.hasAnimatedSinceResize && (Xa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(xv)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const S = this.options.transition || u.getDefaultTransition() || sI
                  , {onLayoutAnimationStart: p, onLayoutAnimationComplete: w} = u.getProps()
                  , y = !this.targetLayout || !DS(this.targetLayout, h)
                  , v = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || v || d && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const x = {
                        ...op(S, "layout"),
                        onPlay: p,
                        onComplete: w
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x),
                    this.setAnimationOrigin(c, v)
                } else
                    d || xv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const i = this.getStack();
            i && i.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            wr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(tI),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: i} = this.options;
            return i && i.getProps().transformTemplate
        }
        willUpdate(i=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && OS(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            i && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(vv);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(yv);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(ZD),
            this.nodes.forEach(GD),
            this.nodes.forEach(YD)) : this.nodes.forEach(yv),
            this.clearAllSnapshots();
            const a = tt.now();
            Be.delta = mn(0, 1e3 / 60, a - Be.timestamp),
            Be.timestamp = a,
            Be.isProcessing = !0,
            gc.update.process(Be),
            gc.preRender.process(Be),
            gc.render.process(Be),
            Be.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            up.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(XD),
            this.sharedNodes.forEach(nI)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ce.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ce.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !nt(this.snapshot.measuredBox.x) && !nt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const i = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = De(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
        }
        updateScroll(i="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: i,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !jS(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            i && this.instance && (a || Lr(this.latestValues) || c) && (o(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(i=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return i && (l = this.removeTransform(l)),
            iI(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: i} = this.options;
            if (!i)
                return De();
            const a = i.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(aI))) {
                const {scroll: c} = this.root;
                c && (Lo(a.x, c.offset.x),
                Lo(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(i) {
            var l;
            const a = De();
            if (Vt(a, i),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Vt(a, i),
                Lo(a.x, d.offset.x),
                Lo(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(i, a=!1) {
            const l = De();
            Vt(l, i);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Oo(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Lr(c.latestValues) && Oo(l, c.latestValues)
            }
            return Lr(this.latestValues) && Oo(l, this.latestValues),
            l
        }
        removeTransform(i) {
            const a = De();
            Vt(a, i);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Lr(u.latestValues))
                    continue;
                gf(u.latestValues) && u.updateSnapshot();
                const c = De()
                  , d = u.measurePageBox();
                Vt(c, d),
                lv(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Lr(this.latestValues) && lv(a, this.latestValues),
            a
        }
        setTargetDelta(i) {
            this.targetDelta = i,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(i) {
            this.options = {
                ...this.options,
                ...i,
                crossfade: i.crossfade !== void 0 ? i.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(i=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(i || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Be.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = De(),
            this.targetWithTransforms = De()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            AD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Vt(this.target, this.layout.layoutBox),
            wS(this.target, this.targetDelta)) : Vt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || gf(this.parent.latestValues) || xS(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(i, a, l) {
            this.relativeParent = i,
            this.linkedParentVersion = i.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = De(),
            this.relativeTargetOrigin = De(),
            Vl(this.relativeTargetOrigin, a, l),
            Vt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var S;
            const i = this.getLead()
              , a = !!this.resumingFrom || this !== i;
            let l = !0;
            if ((this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Be.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            Vt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            sD(this.layoutCorrected, this.treeScale, this.path, a),
            i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox,
            i.targetWithTransforms = De());
            const {target: h} = i;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (nv(this.prevProjectionDelta.x, this.projectionDelta.x),
            nv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ri(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !hv(this.projectionDelta.x, this.prevProjectionDelta.x) || !hv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(i=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            i) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Io(),
            this.projectionDelta = Io(),
            this.projectionDeltaWithTransform = Io()
        }
        setAnimationOrigin(i, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = Io();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = De()
              , h = l ? l.source : void 0
              , S = this.layout ? this.layout.source : void 0
              , p = h !== S
              , w = this.getStack()
              , y = !w || w.members.length <= 1
              , v = !!(p && !y && this.options.crossfade === !0 && !this.path.some(oI));
            this.animationProgress = 0;
            let x;
            this.mixTargetDelta = b => {
                const C = b / 1e3;
                wv(d.x, i.x, C),
                wv(d.y, i.y, C),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                rI(this.relativeTarget, this.relativeTargetOrigin, f, C),
                x && ID(this.relativeTarget, x) && (this.isProjectionDirty = !1),
                x || (x = De()),
                Vt(x, this.relativeTarget)),
                p && (this.animationValues = c,
                _D(c, u, this.latestValues, C, v, y)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(i) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (wr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ce.update( () => {
                Xa.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = ds(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = BD(this.motionValue, [0, 1e3], {
                    ...i,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        i.onUpdate && i.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        i.onComplete && i.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const i = this.getStack();
            i && i.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(HD),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const i = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = i;
            if (!(!a || !l || !u)) {
                if (this !== i && this.layout && u && FS(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || De();
                    const d = nt(this.layout.layoutBox.x);
                    l.x.min = i.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = nt(this.layout.layoutBox.y);
                    l.y.min = i.target.y.min,
                    l.y.max = l.y.min + f
                }
                Vt(a, l),
                Oo(a, c),
                ri(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(i, a) {
            this.sharedNodes.has(i) || this.sharedNodes.set(i, new WD),
            this.sharedNodes.get(i).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const i = this.getStack();
            return i ? i.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: i} = this.options;
            return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: i} = this.options;
            return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: i} = this.options;
            if (i)
                return this.root.sharedNodes.get(i)
        }
        promote({needsReset: i, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            i && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const i = this.getStack();
            return i ? i.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: i} = this.options;
            if (!i)
                return;
            let a = !1;
            const {latestValues: l} = i;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && Tc("z", i, u, this.animationValues);
            for (let c = 0; c < Ec.length; c++)
                Tc(`rotate${Ec[c]}`, i, u, this.animationValues),
                Tc(`skew${Ec[c]}`, i, u, this.animationValues);
            i.render();
            for (const c in u)
                i.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            i.scheduleRender()
        }
        applyProjectionStyles(i, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                i.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                i.visibility = "",
                i.opacity = "",
                i.pointerEvents = qa(a == null ? void 0 : a.pointerEvents) || "",
                i.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                i.pointerEvents = qa(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Lr(this.latestValues) && (i.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            i.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = LD(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            i.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            i.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? i.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : i.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const S in yf) {
                if (c[S] === void 0)
                    continue;
                const {correct: p, applyTo: w, isCSSVariable: y} = yf[S]
                  , v = d === "none" ? c[S] : p(c[S], u);
                if (w) {
                    const x = w.length;
                    for (let b = 0; b < x; b++)
                        i[w[b]] = v
                } else
                    y ? this.options.visualElement.renderState.vars[S] = v : i[S] = v
            }
            this.options.layoutId && (i.pointerEvents = u === this ? qa(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(i => {
                var a;
                return (a = i.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(vv),
            this.root.sharedNodes.clear()
        }
    }
}
function GD(e) {
    e.updateLayout()
}
function YD(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: o} = e.layout
          , {animationType: s} = e.options
          , i = t.source !== e.layout.source;
        s === "size" ? on(d => {
            const f = i ? t.measuredBox[d] : t.layoutBox[d]
              , h = nt(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : FS(s, t.layoutBox, r) && on(d => {
            const f = i ? t.measuredBox[d] : t.layoutBox[d]
              , h = nt(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = Io();
        ri(a, r, t.layoutBox);
        const l = Io();
        i ? ri(l, e.applyTransform(o, !0), t.measuredBox) : ri(l, r, t.layoutBox);
        const u = !jS(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const S = De();
                    Vl(S, t.layoutBox, f.layoutBox);
                    const p = De();
                    Vl(p, r, h.layoutBox),
                    DS(S, p) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = p,
                    e.relativeTargetOrigin = S,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function QD(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function qD(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function XD(e) {
    e.clearSnapshot()
}
function vv(e) {
    e.clearMeasurements()
}
function yv(e) {
    e.isLayoutDirty = !1
}
function ZD(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function xv(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function JD(e) {
    e.resolveTargetDelta()
}
function eI(e) {
    e.calcProjection()
}
function tI(e) {
    e.resetSkewAndRotation()
}
function nI(e) {
    e.removeLeadSnapshot()
}
function wv(e, t, n) {
    e.translate = Se(t.translate, 0, n),
    e.scale = Se(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Sv(e, t, n, r) {
    e.min = Se(t.min, n.min, r),
    e.max = Se(t.max, n.max, r)
}
function rI(e, t, n, r) {
    Sv(e.x, t.x, n.x, r),
    Sv(e.y, t.y, n.y, r)
}
function oI(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const sI = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , bv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Cv = bv("applewebkit/") && !bv("chrome/") ? Math.round : Nt;
function Ev(e) {
    e.min = Cv(e.min),
    e.max = Cv(e.max)
}
function iI(e) {
    Ev(e.x),
    Ev(e.y)
}
function FS(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ND(fv(t), fv(n), .2)
}
function aI(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const lI = _S({
    attachResizeListener: (e, t) => Ii(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , Pc = {
    current: void 0
}
  , VS = _S({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Pc.current) {
            const e = new lI({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Pc.current = e
        }
        return Pc.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , gp = g.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function Tv(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function uI(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Tv(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Tv(e[o], null)
                }
            }
    }
}
function cI(...e) {
    return g.useCallback(uI(...e), e)
}
class dI extends g.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , o = pf(r) && r.offsetWidth || 0
              , s = pf(r) && r.offsetHeight || 0
              , i = this.props.sizeRef.current;
            i.height = n.offsetHeight || 0,
            i.width = n.offsetWidth || 0,
            i.top = n.offsetTop,
            i.left = n.offsetLeft,
            i.right = o - i.width - i.left,
            i.bottom = s - i.height - i.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function fI({children: e, isPresent: t, anchorX: n, anchorY: r, root: o, pop: s}) {
    var f;
    const i = g.useId()
      , a = g.useRef(null)
      , l = g.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: u} = g.useContext(gp)
      , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
      , d = cI(a, c);
    return g.useInsertionEffect( () => {
        const {width: h, height: S, top: p, left: w, right: y, bottom: v} = l.current;
        if (t || s === !1 || !a.current || !h || !S)
            return;
        const x = n === "left" ? `left: ${w}` : `right: ${y}`
          , b = r === "bottom" ? `bottom: ${v}` : `top: ${p}`;
        a.current.dataset.motionPopId = i;
        const C = document.createElement("style");
        u && (C.nonce = u);
        const E = o ?? document.head;
        return E.appendChild(C),
        C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${S}px !important;
            ${x}px !important;
            ${b}px !important;
          }
        `),
        () => {
            E.contains(C) && E.removeChild(C)
        }
    }
    , [t]),
    m.jsx(dI, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: s,
        children: s === !1 ? e : g.cloneElement(e, {
            ref: d
        })
    })
}
const hI = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i, anchorX: a, anchorY: l, root: u}) => {
    const c = Wh(pI)
      , d = g.useId();
    let f = !0
      , h = g.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: S => {
            c.set(S, !0);
            for (const p of c.values())
                if (!p)
                    return;
            r && r()
        }
        ,
        register: S => (c.set(S, !1),
        () => c.delete(S))
    }), [n, c, r]);
    return s && f && (h = {
        ...h
    }),
    g.useMemo( () => {
        c.forEach( (S, p) => c.set(p, !1))
    }
    , [n]),
    g.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    e = m.jsx(fI, {
        pop: i === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    }),
    m.jsx(Su.Provider, {
        value: h,
        children: e
    })
}
;
function pI() {
    return new Map
}
function BS(e=!0) {
    const t = g.useContext(Su);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: o} = t
      , s = g.useId();
    g.useEffect( () => {
        if (e)
            return o(s)
    }
    , [e]);
    const i = g.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, i] : [!0]
}
const Ca = e => e.key || "";
function Pv(e) {
    const t = [];
    return g.Children.forEach(e, n => {
        g.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const $S = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: o=!0, mode: s="sync", propagate: i=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = BS(i)
      , f = g.useMemo( () => Pv(e), [e])
      , h = i && !c ? [] : f.map(Ca)
      , S = g.useRef(!0)
      , p = g.useRef(f)
      , w = Wh( () => new Map)
      , y = g.useRef(new Set)
      , [v,x] = g.useState(f)
      , [b,C] = g.useState(f);
    p1( () => {
        S.current = !1,
        p.current = f;
        for (let T = 0; T < b.length; T++) {
            const R = Ca(b[T]);
            h.includes(R) ? (w.delete(R),
            y.current.delete(R)) : w.get(R) !== !0 && w.set(R, !1)
        }
    }
    , [b, h.length, h.join("-")]);
    const E = [];
    if (f !== v) {
        let T = [...f];
        for (let R = 0; R < b.length; R++) {
            const M = b[R]
              , F = Ca(M);
            h.includes(F) || (T.splice(R, 0, M),
            E.push(M))
        }
        return s === "wait" && E.length && (T = E),
        C(Pv(T)),
        x(f),
        null
    }
    const {forceRender: P} = g.useContext(Uh);
    return m.jsx(m.Fragment, {
        children: b.map(T => {
            const R = Ca(T)
              , M = i && !c ? !1 : f === b || h.includes(R)
              , F = () => {
                if (y.current.has(R))
                    return;
                if (y.current.add(R),
                w.has(R))
                    w.set(R, !0);
                else
                    return;
                let L = !0;
                w.forEach(W => {
                    W || (L = !1)
                }
                ),
                L && (P == null || P(),
                C(p.current),
                i && (d == null || d()),
                r && r())
            }
            ;
            return m.jsx(hI, {
                isPresent: M,
                initial: !S.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: o,
                mode: s,
                root: u,
                onExitComplete: M ? void 0 : F,
                anchorX: a,
                anchorY: l,
                children: T
            }, R)
        }
        )
    })
}
  , zS = g.createContext({
    strict: !1
})
  , kv = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Rv = !1;
function mI() {
    if (Rv)
        return;
    const e = {};
    for (const t in kv)
        e[t] = {
            isEnabled: n => kv[t].some(r => !!n[r])
        };
    gS(e),
    Rv = !0
}
function US() {
    return mI(),
    tD()
}
function gI(e) {
    const t = US();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    gS(t)
}
const vI = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Bl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || vI.has(e)
}
let WS = e => !Bl(e);
function yI(e) {
    typeof e == "function" && (WS = t => t.startsWith("on") ? !Bl(t) : e(t))
}
try {
    yI(require("@emotion/is-prop-valid").default)
} catch {}
function xI(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (WS(o) || n === !0 && Bl(o) || !t && !Bl(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
const Tu = g.createContext({});
function wI(e, t) {
    if (Eu(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Di(n) ? n : void 0,
            animate: Di(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function SI(e) {
    const {initial: t, animate: n} = wI(e, g.useContext(Tu));
    return g.useMemo( () => ({
        initial: t,
        animate: n
    }), [Nv(t), Nv(n)])
}
function Nv(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const vp = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function HS(e, t, n) {
    for (const r in t)
        !qe(t[r]) && !CS(r, n) && (e[r] = t[r])
}
function bI({transformTemplate: e}, t) {
    return g.useMemo( () => {
        const n = vp();
        return pp(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function CI(e, t) {
    const n = e.style || {}
      , r = {};
    return HS(r, n, e),
    Object.assign(r, bI(e, t)),
    r
}
function EI(e, t) {
    const n = {}
      , r = CI(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const KS = () => ({
    ...vp(),
    attrs: {}
});
function TI(e, t, n, r) {
    const o = g.useMemo( () => {
        const s = KS();
        return ES(s, t, PS(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        HS(s, e.style, e),
        o.style = {
            ...s,
            ...o.style
        }
    }
    return o
}
const PI = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function yp(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(PI.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function kI(e, t, n, {latestValues: r}, o, s=!1, i) {
    const l = (i ?? yp(e) ? TI : EI)(t, r, o, e)
      , u = xI(t, typeof e == "string", s)
      , c = e !== g.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = g.useMemo( () => qe(d) ? d.get() : d, [d]);
    return g.createElement(e, {
        ...c,
        children: f
    })
}
function RI({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, o) {
    return {
        latestValues: NI(n, r, o, e),
        renderState: t()
    }
}
function NI(e, t, n, r) {
    const o = {}
      , s = r(e, {});
    for (const f in s)
        o[f] = qa(s[f]);
    let {initial: i, animate: a} = e;
    const l = Eu(e)
      , u = pS(e);
    t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || i === !1;
    const d = c ? a : i;
    if (d && typeof d != "boolean" && !Cu(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const S = ip(e, f[h]);
            if (S) {
                const {transitionEnd: p, transition: w, ...y} = S;
                for (const v in y) {
                    let x = y[v];
                    if (Array.isArray(x)) {
                        const b = c ? x.length - 1 : 0;
                        x = x[b]
                    }
                    x !== null && (o[v] = x)
                }
                for (const v in p)
                    o[v] = p[v]
            }
        }
    }
    return o
}
const GS = e => (t, n) => {
    const r = g.useContext(Tu)
      , o = g.useContext(Su)
      , s = () => RI(e, t, r, o);
    return n ? s() : Wh(s)
}
  , AI = GS({
    scrapeMotionValuesFromProps: mp,
    createRenderState: vp
})
  , MI = GS({
    scrapeMotionValuesFromProps: kS,
    createRenderState: KS
})
  , jI = Symbol.for("motionComponentSymbol");
function DI(e, t, n) {
    const r = g.useRef(n);
    g.useInsertionEffect( () => {
        r.current = n
    }
    );
    const o = g.useRef(null);
    return g.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount());
        const i = r.current;
        if (typeof i == "function")
            if (s) {
                const l = i(s);
                typeof l == "function" && (o.current = l)
            } else
                o.current ? (o.current(),
                o.current = null) : i(s);
        else
            i && (i.current = s)
    }
    , [t])
}
const YS = g.createContext({});
function xo(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function II(e, t, n, r, o, s) {
    var x, b;
    const {visualElement: i} = g.useContext(Tu)
      , a = g.useContext(zS)
      , l = g.useContext(Su)
      , u = g.useContext(gp)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = g.useRef(null)
      , h = g.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: s
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const S = f.current
      , p = g.useContext(YS);
    S && !S.projection && o && (S.type === "html" || S.type === "svg") && LI(f.current, n, o, p);
    const w = g.useRef(!1);
    g.useInsertionEffect( () => {
        S && w.current && S.update(n, l)
    }
    );
    const y = n[tS]
      , v = g.useRef(!!y && !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) && ((b = window.MotionHasOptimisedAnimation) == null ? void 0 : b.call(window, y)));
    return p1( () => {
        h.current = !0,
        S && (w.current = !0,
        window.MotionIsMounted = !0,
        S.updateFeatures(),
        S.scheduleRenderMicrotask(),
        v.current && S.animationState && S.animationState.animateChanges())
    }
    ),
    g.useEffect( () => {
        S && (!v.current && S.animationState && S.animationState.animateChanges(),
        v.current && (queueMicrotask( () => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, y)
        }
        ),
        v.current = !1),
        S.enteringChildren = void 0)
    }
    ),
    S
}
function LI(e, t, n, r) {
    const {layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : QS(e.parent)),
    e.projection.setOptions({
        layoutId: o,
        layout: s,
        alwaysMeasureLayout: !!i || a && xo(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function QS(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : QS(e.parent)
}
function kc(e, {forwardMotionProps: t=!1, type: n}={}, r, o) {
    r && gI(r);
    const s = n ? n === "svg" : yp(e)
      , i = s ? MI : AI;
    function a(u, c) {
        let d;
        const f = {
            ...g.useContext(gp),
            ...u,
            layoutId: OI(u)
        }
          , {isStatic: h} = f
          , S = SI(u)
          , p = i(u, h);
        if (!h && h1) {
            _I();
            const w = FI(f);
            d = w.MeasureLayout,
            S.visualElement = II(e, p, f, o, w.ProjectionNode, s)
        }
        return m.jsxs(Tu.Provider, {
            value: S,
            children: [d && S.visualElement ? m.jsx(d, {
                visualElement: S.visualElement,
                ...f
            }) : null, kI(e, u, DI(p, S.visualElement, c), p, h, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = g.forwardRef(a);
    return l[jI] = e,
    l
}
function OI({layoutId: e}) {
    const t = g.useContext(Uh).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function _I(e, t) {
    g.useContext(zS).strict
}
function FI(e) {
    const t = US()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const o = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function VI(e, t) {
    if (typeof Proxy > "u")
        return kc;
    const n = new Map
      , r = (s, i) => kc(s, i, e, t)
      , o = (s, i) => r(s, i);
    return new Proxy(o,{
        get: (s, i) => i === "create" ? r : (n.has(i) || n.set(i, kc(i, void 0, e, t)),
        n.get(i))
    })
}
const BI = (e, t) => t.isSVG ?? yp(e) ? new yD(t) : new fD(t,{
    allowProjection: e !== g.Fragment
});
class $I extends Tr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = CD(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Cu(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let zI = 0;
class UI extends Tr {
    constructor() {
        super(...arguments),
        this.id = zI++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const WI = {
    animation: {
        Feature: $I
    },
    exit: {
        Feature: UI
    }
};
function Qi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const HI = e => t => cp(t) && e(t, Qi(t));
function oi(e, t, n, r) {
    return Ii(e, t, HI(n), r)
}
const qS = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Av = (e, t) => Math.abs(e - t);
function KI(e, t) {
    const n = Av(e.x, t.x)
      , r = Av(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const Mv = new Set(["auto", "scroll"]);
class XS {
    constructor(t, n, {transformPagePoint: r, contextWindow: o=window, dragSnapToOrigin: s=!1, distanceThreshold: i=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = Nc(this.lastMoveEventInfo, this.history)
              , S = this.startEvent !== null
              , p = KI(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!S && !p)
                return;
            const {point: w} = h
              , {timestamp: y} = Be;
            this.history.push({
                ...w,
                timestamp: y
            });
            const {onStart: v, onMove: x} = this.handlers;
            S || (v && v(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            x && x(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, S) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = Rc(S, this.transformPagePoint),
            ce.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, S) => {
            this.end();
            const {onEnd: p, onSessionEnd: w, resumeAnimation: y} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const v = Nc(h.type === "pointercancel" ? this.lastMoveEventInfo : Rc(S, this.transformPagePoint), this.history);
            this.startEvent && p && p(h, v),
            w && w(h, v)
        }
        ,
        !cp(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = i,
        this.contextWindow = o || window;
        const l = Qi(t)
          , u = Rc(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = Be;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, Nc(u, this.history)),
        this.removeListeners = Ki(oi(this.contextWindow, "pointermove", this.handlePointerMove), oi(this.contextWindow, "pointerup", this.handlePointerUp), oi(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (Mv.has(r.overflowX) || Mv.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , o = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: o.x - n.x,
            y: o.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, o),
        ce.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        wr(this.updatePoint)
    }
}
function Rc(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function jv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Nc({point: e}, t) {
    return {
        point: e,
        delta: jv(e, ZS(t)),
        offset: jv(e, GI(t)),
        velocity: YI(t, .1)
    }
}
function GI(e) {
    return e[0]
}
function ZS(e) {
    return e[e.length - 1]
}
function YI(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const o = ZS(e);
    for (; n >= 0 && (r = e[n],
    !(o.timestamp - r.timestamp > At(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && o.timestamp - r.timestamp > At(t) * 2 && (r = e[1]);
    const s = kt(o.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const i = {
        x: (o.x - r.x) / s,
        y: (o.y - r.y) / s
    };
    return i.x === 1 / 0 && (i.x = 0),
    i.y === 1 / 0 && (i.y = 0),
    i
}
function QI(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
}
function Dv(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function qI(e, {top: t, left: n, bottom: r, right: o}) {
    return {
        x: Dv(e.x, n, o),
        y: Dv(e.y, t, r)
    }
}
function Iv(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function XI(e, t) {
    return {
        x: Iv(e.x, t.x),
        y: Iv(e.y, t.y)
    }
}
function ZI(e, t) {
    let n = .5;
    const r = nt(e)
      , o = nt(t);
    return o > r ? n = Ai(t.min, t.max - r, e.min) : r > o && (n = Ai(e.min, e.max - o, t.min)),
    mn(0, 1, n)
}
function JI(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const xf = .35;
function eL(e=xf) {
    return e === !1 ? e = 0 : e === !0 && (e = xf),
    {
        x: Lv(e, "left", "right"),
        y: Lv(e, "top", "bottom")
    }
}
function Lv(e, t, n) {
    return {
        min: Ov(e, t),
        max: Ov(e, n)
    }
}
function Ov(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const tL = new WeakMap;
class nL {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = De(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const s = d => {
            n && this.snapToCursor(Qi(d).point),
            this.stopAnimation()
        }
          , i = (d, f) => {
            const {drag: h, dragPropagation: S, onDragStart: p} = this.getProps();
            if (h && !S && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Mj(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            on(y => {
                let v = this.getAxisMotionValue(y).get() || 0;
                if (hn.test(v)) {
                    const {projection: x} = this.visualElement;
                    if (x && x.layout) {
                        const b = x.layout.layoutBox[y];
                        b && (v = nt(b) * (parseFloat(v) / 100))
                    }
                }
                this.originPoint[y] = v
            }
            ),
            p && ce.update( () => p(d, f), !1, !0),
            cf(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: S, onDirectionLock: p, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: y} = f;
            if (S && this.currentDirection === null) {
                this.currentDirection = oL(y),
                this.currentDirection !== null && p && p(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, y),
            this.updateAxis("y", f.point, y),
            this.visualElement.render(),
            w && ce.update( () => w(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new XS(t,{
            onSessionStart: s,
            onStart: i,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: qS(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , o = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !o || !r)
            return;
        const {velocity: i} = o;
        this.startAnimation(i);
        const {onDragEnd: a} = this.getProps();
        a && ce.postRender( () => a(r, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: o} = this.getProps();
        if (!r || !Ea(t, o, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let i = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (i = QI(i, this.constraints[t], this.elastic[t])),
        s.set(i)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , o = this.constraints;
        t && xo(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = qI(r.layoutBox, t) : this.constraints = !1,
        this.elastic = eL(n),
        o !== this.constraints && !xo(t) && r && this.constraints && !this.hasMutatedConstraints && on(i => {
            this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = JI(r.layoutBox[i], this.constraints[i]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !xo(t))
            return !1;
        const r = t.current;
        cs(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const s = iD(r, o.root, this.visualElement.getTransformPagePoint());
        let i = XI(o.layout.layoutBox, s);
        if (n) {
            const a = n(rD(i));
            this.hasMutatedConstraints = !!a,
            a && (i = yS(a))
        }
        return i
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = on(c => {
            if (!Ea(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            i && (d = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6
              , h = o ? 40 : 1e7
              , S = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, S)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return cf(this.visualElement, t),
        r.start(sp(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        on(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        on(n => {
            const {drag: r} = this.getProps();
            if (!Ea(n, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: i, max: a} = o.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - Se(i, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!xo(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        on(i => {
            const a = this.getAxisMotionValue(i);
            if (a && this.constraints !== !1) {
                const l = a.get();
                o[i] = ZI({
                    min: l,
                    max: l
                }, this.constraints[i])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        on(i => {
            if (!Ea(i, t, null))
                return;
            const a = this.getAxisMotionValue(i)
              , {min: l, max: u} = this.constraints[i];
            a.set(Se(l, u, o[i]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        tL.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = oi(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && _j(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const o = () => {
            const {dragConstraints: u} = this.getProps();
            xo(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = rL(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: s} = this.visualElement
          , i = s.addEventListener("measure", o);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        ce.read(o);
        const a = Ii(window, "resize", () => this.scalePositionWithinConstraints())
          , l = s.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (on(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            i(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: s=!1, dragElastic: i=xf, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: s,
            dragElastic: i,
            dragMomentum: a
        }
    }
}
function _v(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function rL(e, t, n) {
    const r = Wg(e, _v(n))
      , o = Wg(t, _v(n));
    return () => {
        r(),
        o()
    }
}
function Ea(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function oL(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class sL extends Tr {
    constructor(t) {
        super(t),
        this.removeGroupControls = Nt,
        this.removeListeners = Nt,
        this.controls = new nL(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Nt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Ac = e => (t, n) => {
    e && ce.update( () => e(t, n), !1, !0)
}
;
class iL extends Tr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Nt
    }
    onPointerDown(t) {
        this.session = new XS(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: qS(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: Ac(t),
            onStart: Ac(n),
            onMove: Ac(r),
            onEnd: (s, i) => {
                delete this.session,
                o && ce.postRender( () => o(s, i))
            }
        }
    }
    mount() {
        this.removePointerDownListener = oi(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Mc = !1;
class aL extends g.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && o && r.register(s),
        Mc && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        Xa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: o, isPresent: s} = this.props
          , {projection: i} = r;
        return i && (i.isPresent = s,
        t.layoutDependency !== n && i.setOptions({
            ...i.options,
            layoutDependency: n
        }),
        Mc = !0,
        o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? i.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? i.promote() : i.relegate() || ce.postRender( () => {
            const a = i.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        up.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: o} = t;
        Mc = !0,
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function JS(e) {
    const [t,n] = BS()
      , r = g.useContext(Uh);
    return m.jsx(aL, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: g.useContext(YS),
        isPresent: t,
        safeToRemove: n
    })
}
const lL = {
    pan: {
        Feature: iL
    },
    drag: {
        Feature: sL,
        ProjectionNode: VS,
        MeasureLayout: JS
    }
};
function Fv(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , s = r[o];
    s && ce.postRender( () => s(t, Qi(t)))
}
class uL extends Tr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Dj(t, (n, r) => (Fv(this.node, r, "Start"),
        o => Fv(this.node, o, "End"))))
    }
    unmount() {}
}
class cL extends Tr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ki(Ii(this.node.current, "focus", () => this.onFocus()), Ii(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Vv(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , s = r[o];
    s && ce.postRender( () => s(t, Qi(t)))
}
class dL extends Tr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = Vj(t, (o, s) => (Vv(this.node, s, "Start"),
        (i, {success: a}) => Vv(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const wf = new WeakMap
  , jc = new WeakMap
  , fL = e => {
    const t = wf.get(e.target);
    t && t(e)
}
  , hL = e => {
    e.forEach(fL)
}
;
function pL({root: e, ...t}) {
    const n = e || document;
    jc.has(n) || jc.set(n, {});
    const r = jc.get(n)
      , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(hL,{
        root: e,
        ...t
    })),
    r[o]
}
function mL(e, t, n) {
    const r = pL(t);
    return wf.set(e, n),
    r.observe(e),
    () => {
        wf.delete(e),
        r.unobserve(e)
    }
}
const gL = {
    some: 0,
    all: 1
};
class vL extends Tr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: o="some", once: s} = t
          , i = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : gL[o]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return mL(this.node.current, i, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(yL(t, n)) && this.startObserver()
    }
    unmount() {}
}
function yL({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const xL = {
    inView: {
        Feature: vL
    },
    tap: {
        Feature: dL
    },
    focus: {
        Feature: cL
    },
    hover: {
        Feature: uL
    }
}
  , wL = {
    layout: {
        ProjectionNode: VS,
        MeasureLayout: JS
    }
}
  , SL = {
    ...WI,
    ...xL,
    ...lL,
    ...wL
}
  , tn = VI(SL, BI)
  , Bv = [{
    label: "Home",
    path: "/"
}, {
    label: "Services",
    path: "/services"
}, {
    label: "Dashboard",
    path: "/dashboard"
}, {
    label: "Start Project",
    path: "/intake"
}]
  , Pu = () => {
    const [e,t] = g.useState(!1)
      , n = xs();
    return m.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl",
        children: [m.jsxs("div", {
            className: "container mx-auto flex h-16 items-center justify-between px-4",
            children: [m.jsxs(bn, {
                to: "/",
                className: "flex items-center gap-2",
                children: [m.jsx(sw, {
                    className: "h-7 w-7 text-primary"
                }), m.jsxs("span", {
                    className: "font-display text-xl font-bold text-foreground",
                    children: ["Apex", m.jsx("span", {
                        className: "text-primary",
                        children: "Build"
                    })]
                })]
            }), m.jsxs("div", {
                className: "hidden items-center gap-1 md:flex",
                children: [Bv.map(r => m.jsx(bn, {
                    to: r.path,
                    className: `rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${n.pathname === r.path ? "text-primary" : "text-muted-foreground"}`,
                    children: r.label
                }, r.path)), m.jsx(bn, {
                    to: "/intake",
                    children: m.jsx(qt, {
                        size: "sm",
                        className: "ml-2",
                        children: "Get a Quote"
                    })
                })]
            }), m.jsx("button", {
                className: "text-foreground md:hidden",
                onClick: () => t(!e),
                children: e ? m.jsx(lw, {
                    className: "h-6 w-6"
                }) : m.jsx(uk, {
                    className: "h-6 w-6"
                })
            })]
        }), m.jsx($S, {
            children: e && m.jsx(tn.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "border-b border-border bg-background md:hidden",
                children: m.jsxs("div", {
                    className: "container mx-auto flex flex-col gap-2 px-4 py-4",
                    children: [Bv.map(r => m.jsx(bn, {
                        to: r.path,
                        onClick: () => t(!1),
                        className: "rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                        children: r.label
                    }, r.path)), m.jsx(bn, {
                        to: "/intake",
                        onClick: () => t(!1),
                        children: m.jsx(qt, {
                            className: "w-full",
                            children: "Get a Quote"
                        })
                    })]
                })
            })
        })]
    })
}
  , bL = "/assets/hero-bg-Cgw7J8Vb.jpg"
  , CL = () => m.jsxs("section", {
    className: "relative flex min-h-screen items-center overflow-hidden",
    children: [m.jsx("div", {
        className: "absolute inset-0 bg-cover bg-center",
        style: {
            backgroundImage: `url(${bL})`
        }
    }), m.jsx("div", {
        className: "absolute inset-0 bg-gradient-hero"
    }), m.jsx("div", {
        className: "absolute inset-0 bg-background/60"
    }), m.jsx("div", {
        className: "container relative z-10 mx-auto px-4 pt-16",
        children: m.jsxs(tn.div, {
            initial: {
                opacity: 0,
                y: 40
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8
            },
            className: "max-w-3xl",
            children: [m.jsxs("div", {
                className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary",
                children: [m.jsx(hk, {
                    className: "h-4 w-4"
                }), "AI-Powered Construction"]
            }), m.jsxs("h1", {
                className: "mb-6 font-display text-5xl font-bold leading-tight text-foreground md:text-7xl",
                children: ["Building Your Vision,", " ", m.jsx("span", {
                    className: "text-gradient",
                    children: "Powered by AI"
                })]
            }), m.jsx("p", {
                className: "mb-10 max-w-xl text-lg text-muted-foreground",
                children: "From concept to completion, our AI-enhanced platform delivers realistic renderings, precise cost estimates, and seamless project management for your custom construction project."
            }), m.jsxs("div", {
                className: "flex flex-wrap gap-4",
                children: [m.jsx(bn, {
                    to: "/intake",
                    children: m.jsxs(qt, {
                        size: "lg",
                        className: "gap-2 text-base",
                        children: ["Start Your Project ", m.jsx(cu, {
                            className: "h-5 w-5"
                        })]
                    })
                }), m.jsx(bn, {
                    to: "/dashboard",
                    children: m.jsx(qt, {
                        size: "lg",
                        variant: "outline",
                        className: "text-base",
                        children: "View Dashboard"
                    })
                })]
            })]
        })
    })]
})
  , EL = [{
    icon: sk,
    title: "AI Cost Estimation",
    description: "Get precise cost breakdowns powered by AI analysis of materials, labor, and project complexity."
}, {
    icon: ik,
    title: "3D Renderings",
    description: "Generate photorealistic renderings of your project before a single brick is laid."
}, {
    icon: dk,
    title: "AI Project Assistant",
    description: "Chat with our AI assistant for instant answers about your project, materials, and timelines."
}, {
    icon: _d,
    title: "Auto Proposals",
    description: "Receive professionally generated proposals with detailed cost breakdowns and timelines."
}, {
    icon: Rh,
    title: "Project Management",
    description: "Track every phase of your project with real-time updates and milestone tracking."
}, {
    icon: ak,
    title: "Analytics Dashboard",
    description: "Monitor budgets, timelines, and progress with interactive charts and reports."
}]
  , eb = () => m.jsx("section", {
    id: "services",
    className: "py-24",
    children: m.jsxs("div", {
        className: "container mx-auto px-4",
        children: [m.jsxs(tn.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "mb-16 text-center",
            children: [m.jsxs("h2", {
                className: "mb-4 font-display text-4xl font-bold text-foreground",
                children: ["What We ", m.jsx("span", {
                    className: "text-gradient",
                    children: "Deliver"
                })]
            }), m.jsx("p", {
                className: "mx-auto max-w-2xl text-muted-foreground",
                children: "Cutting-edge AI tools combined with decades of construction expertise."
            })]
        }), m.jsx("div", {
            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
            children: EL.map( (e, t) => m.jsxs(tn.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "group rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:border-primary/30 hover:shadow-glow",
                children: [m.jsx("div", {
                    className: "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10",
                    children: m.jsx(e.icon, {
                        className: "h-6 w-6 text-primary"
                    })
                }), m.jsx("h3", {
                    className: "mb-2 font-display text-xl font-semibold text-foreground",
                    children: e.title
                }), m.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: e.description
                })]
            }, e.title))
        })]
    })
})
  , TL = uu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function tb({className: e, variant: t, ...n}) {
    return m.jsx("div", {
        className: ye(TL({
            variant: t
        }), e),
        ...n
    })
}
var xp = "Progress"
  , wp = 100
  , [PL,H_] = Er(xp)
  , [kL,RL] = PL(xp)
  , nb = g.forwardRef( (e, t) => {
    const {__scopeProgress: n, value: r=null, max: o, getValueLabel: s=NL, ...i} = e;
    (o || o === 0) && !$v(o) && console.error(AL(`${o}`, "Progress"));
    const a = $v(o) ? o : wp;
    r !== null && !zv(r, a) && console.error(ML(`${r}`, "Progress"));
    const l = zv(r, a) ? r : null
      , u = $l(l) ? s(l, a) : void 0;
    return m.jsx(kL, {
        scope: n,
        value: l,
        max: a,
        children: m.jsx(ee.div, {
            "aria-valuemax": a,
            "aria-valuemin": 0,
            "aria-valuenow": $l(l) ? l : void 0,
            "aria-valuetext": u,
            role: "progressbar",
            "data-state": sb(l, a),
            "data-value": l ?? void 0,
            "data-max": a,
            ...i,
            ref: t
        })
    })
}
);
nb.displayName = xp;
var rb = "ProgressIndicator"
  , ob = g.forwardRef( (e, t) => {
    const {__scopeProgress: n, ...r} = e
      , o = RL(rb, n);
    return m.jsx(ee.div, {
        "data-state": sb(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
    })
}
);
ob.displayName = rb;
function NL(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function sb(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function $l(e) {
    return typeof e == "number"
}
function $v(e) {
    return $l(e) && !isNaN(e) && e > 0
}
function zv(e, t) {
    return $l(e) && !isNaN(e) && e <= t && e >= 0
}
function AL(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${wp}\`.`
}
function ML(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${wp} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var ib = nb
  , jL = ob;
const Sp = g.forwardRef( ({className: e, value: t, ...n}, r) => m.jsx(ib, {
    ref: r,
    className: ye("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: m.jsx(jL, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
Sp.displayName = ib.displayName;
const DL = [{
    id: 1,
    name: "Modern Family Residence",
    type: "Residential",
    status: "In Progress",
    progress: 65,
    budget: "$320,000",
    sqft: "3,200",
    timeline: "8 months",
    startDate: "Nov 2025"
}, {
    id: 2,
    name: "Downtown Office Renovation",
    type: "Commercial",
    status: "Proposal Sent",
    progress: 15,
    budget: "$185,000",
    sqft: "5,400",
    timeline: "6 months",
    startDate: "Mar 2026"
}, {
    id: 3,
    name: "Lakeside Cabin Retreat",
    type: "Residential",
    status: "Completed",
    progress: 100,
    budget: "$95,000",
    sqft: "1,200",
    timeline: "4 months",
    startDate: "Jun 2025"
}]
  , IL = {
    "In Progress": "bg-primary/20 text-primary border-primary/30",
    "Proposal Sent": "bg-accent/20 text-accent-foreground border-accent/30",
    Completed: "bg-green-500/20 text-green-400 border-green-500/30"
}
  , LL = () => m.jsx("section", {
    className: "py-24",
    children: m.jsxs("div", {
        className: "container mx-auto px-4",
        children: [m.jsxs(tn.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "mb-16 text-center",
            children: [m.jsx("div", {
                className: "mb-4 inline-flex items-center gap-2 text-primary",
                children: m.jsx(ow, {
                    className: "h-5 w-5"
                })
            }), m.jsxs("h2", {
                className: "mb-4 font-display text-4xl font-bold text-foreground",
                children: ["Your ", m.jsx("span", {
                    className: "text-gradient",
                    children: "Dashboard"
                })]
            }), m.jsx("p", {
                className: "mx-auto max-w-2xl text-muted-foreground",
                children: "Track every phase of your project with real-time updates, AI-generated proposals, and milestone tracking."
            })]
        }), m.jsx("div", {
            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
            children: DL.map( (e, t) => m.jsxs(tn.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "rounded-xl border border-border bg-card p-6 shadow-card",
                children: [m.jsxs("div", {
                    className: "mb-4 flex items-start justify-between",
                    children: [m.jsx("h3", {
                        className: "font-display text-lg font-semibold text-foreground",
                        children: e.name
                    }), m.jsx(tb, {
                        variant: "outline",
                        className: IL[e.status],
                        children: e.status
                    })]
                }), m.jsxs("div", {
                    className: "mb-4 space-y-2",
                    children: [m.jsxs("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [m.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Progress"
                        }), m.jsxs("span", {
                            className: "font-medium text-foreground",
                            children: [e.progress, "%"]
                        })]
                    }), m.jsx(Sp, {
                        value: e.progress,
                        className: "h-2"
                    })]
                }), m.jsxs("div", {
                    className: "grid grid-cols-2 gap-3 text-sm",
                    children: [m.jsxs("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [m.jsx(rw, {
                            className: "h-3.5 w-3.5 text-primary"
                        }), e.budget]
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [m.jsx(Rh, {
                            className: "h-3.5 w-3.5 text-primary"
                        }), e.sqft, " sqft"]
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [m.jsx(nw, {
                            className: "h-3.5 w-3.5 text-primary"
                        }), e.timeline]
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [m.jsx(ew, {
                            className: "h-3.5 w-3.5 text-primary"
                        }), e.startDate]
                    })]
                })]
            }, e.id))
        }), m.jsx("div", {
            className: "mt-10 text-center",
            children: m.jsx(bn, {
                to: "/dashboard",
                children: m.jsxs(qt, {
                    size: "lg",
                    className: "gap-2",
                    children: ["Go to Full Dashboard ", m.jsx(cu, {
                        className: "h-5 w-5"
                    })]
                })
            })
        })]
    })
})
  , OL = [{
    label: "Personal Info",
    icon: aw,
    description: "Name, email, phone, and property address"
}, {
    label: "Project Details",
    icon: Jx,
    description: "Type, square footage, budget, and timeline"
}, {
    label: "Specifications",
    icon: iw,
    description: "Materials, design style, and custom requests"
}, {
    label: "Review & Submit",
    icon: du,
    description: "Review everything and submit your project"
}]
  , _L = () => m.jsx("section", {
    className: "py-24 bg-secondary/30",
    children: m.jsxs("div", {
        className: "container mx-auto px-4",
        children: [m.jsxs(tn.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "mb-16 text-center",
            children: [m.jsxs("h2", {
                className: "mb-4 font-display text-4xl font-bold text-foreground",
                children: ["Start Your ", m.jsx("span", {
                    className: "text-gradient",
                    children: "Project"
                })]
            }), m.jsx("p", {
                className: "mx-auto max-w-2xl text-muted-foreground",
                children: "Our simple 4-step intake process gets your construction project started in minutes."
            })]
        }), m.jsxs("div", {
            className: "mx-auto max-w-3xl",
            children: [m.jsx("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: OL.map( (e, t) => m.jsxs(tn.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    className: "flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card",
                    children: [m.jsx("div", {
                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground",
                        children: m.jsx(e.icon, {
                            className: "h-4 w-4"
                        })
                    }), m.jsxs("div", {
                        children: [m.jsxs("h3", {
                            className: "font-display text-base font-semibold text-foreground",
                            children: ["Step ", t + 1, ": ", e.label]
                        }), m.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: e.description
                        })]
                    })]
                }, e.label))
            }), m.jsx("div", {
                className: "mt-10 text-center",
                children: m.jsx(bn, {
                    to: "/intake",
                    children: m.jsxs(qt, {
                        size: "lg",
                        className: "gap-2",
                        children: ["Start Your Project ", m.jsx(cu, {
                            className: "h-5 w-5"
                        })]
                    })
                })
            })]
        })]
    })
})
  , ku = () => m.jsx("footer", {
    className: "border-t border-border bg-card py-12",
    children: m.jsxs("div", {
        className: "container mx-auto flex flex-col items-center gap-4 px-4 text-center",
        children: [m.jsxs("div", {
            className: "flex items-center gap-2",
            children: [m.jsx(sw, {
                className: "h-5 w-5 text-primary"
            }), m.jsxs("span", {
                className: "font-display text-lg font-bold text-foreground",
                children: ["Apex", m.jsx("span", {
                    className: "text-primary",
                    children: "Build"
                })]
            })]
        }), m.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "© 2026 ApexBuild. AI-Powered Custom Construction."
        })]
    })
})
  , FL = () => m.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [m.jsx(Pu, {}), m.jsx(CL, {}), m.jsx(eb, {}), m.jsx(LL, {}), m.jsx(_L, {}), m.jsx(ku, {})]
})
  , Gn = g.forwardRef( ({className: e, type: t, ...n}, r) => m.jsx("input", {
    type: t,
    className: ye("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Gn.displayName = "Input";
var VL = "Label"
  , ab = g.forwardRef( (e, t) => m.jsx(ee.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
ab.displayName = VL;
var lb = ab;
const BL = uu("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , bt = g.forwardRef( ({className: e, ...t}, n) => m.jsx(lb, {
    ref: n,
    className: ye(BL(), e),
    ...t
}));
bt.displayName = lb.displayName;
const ub = g.forwardRef( ({className: e, ...t}, n) => m.jsx("textarea", {
    className: ye("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
ub.displayName = "Textarea";
function Uv(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var $L = g.createContext(void 0);
function bp(e) {
    const t = g.useContext($L);
    return e || t || "ltr"
}
var Dc = 0;
function zL() {
    g.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Wv()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Wv()),
        Dc++,
        () => {
            Dc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Dc--
        }
    }
    , [])
}
function Wv() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Ic = "focusScope.autoFocusOnMount"
  , Lc = "focusScope.autoFocusOnUnmount"
  , Hv = {
    bubbles: !1,
    cancelable: !0
}
  , UL = "FocusScope"
  , cb = g.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i} = e
      , [a,l] = g.useState(null)
      , u = Dt(o)
      , c = Dt(s)
      , d = g.useRef(null)
      , f = Ee(t, p => l(p))
      , h = g.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    g.useEffect( () => {
        if (r) {
            let p = function(x) {
                if (h.paused || !a)
                    return;
                const b = x.target;
                a.contains(b) ? d.current = b : Wn(d.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (h.paused || !a)
                    return;
                const b = x.relatedTarget;
                b !== null && (a.contains(b) || Wn(d.current, {
                    select: !0
                }))
            }
              , y = function(x) {
                if (document.activeElement === document.body)
                    for (const C of x)
                        C.removedNodes.length > 0 && Wn(a)
            };
            document.addEventListener("focusin", p),
            document.addEventListener("focusout", w);
            const v = new MutationObserver(y);
            return a && v.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", p),
                document.removeEventListener("focusout", w),
                v.disconnect()
            }
        }
    }
    , [r, a, h.paused]),
    g.useEffect( () => {
        if (a) {
            Gv.add(h);
            const p = document.activeElement;
            if (!a.contains(p)) {
                const y = new CustomEvent(Ic,Hv);
                a.addEventListener(Ic, u),
                a.dispatchEvent(y),
                y.defaultPrevented || (WL(QL(db(a)), {
                    select: !0
                }),
                document.activeElement === p && Wn(a))
            }
            return () => {
                a.removeEventListener(Ic, u),
                setTimeout( () => {
                    const y = new CustomEvent(Lc,Hv);
                    a.addEventListener(Lc, c),
                    a.dispatchEvent(y),
                    y.defaultPrevented || Wn(p ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(Lc, c),
                    Gv.remove(h)
                }
                , 0)
            }
        }
    }
    , [a, u, c, h]);
    const S = g.useCallback(p => {
        if (!n && !r || h.paused)
            return;
        const w = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey
          , y = document.activeElement;
        if (w && y) {
            const v = p.currentTarget
              , [x,b] = HL(v);
            x && b ? !p.shiftKey && y === b ? (p.preventDefault(),
            n && Wn(x, {
                select: !0
            })) : p.shiftKey && y === x && (p.preventDefault(),
            n && Wn(b, {
                select: !0
            })) : y === v && p.preventDefault()
        }
    }
    , [n, r, h.paused]);
    return m.jsx(ee.div, {
        tabIndex: -1,
        ...i,
        ref: f,
        onKeyDown: S
    })
}
);
cb.displayName = UL;
function WL(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Wn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function HL(e) {
    const t = db(e)
      , n = Kv(t, e)
      , r = Kv(t.reverse(), e);
    return [n, r]
}
function db(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Kv(e, t) {
    for (const n of e)
        if (!KL(n, {
            upTo: t
        }))
            return n
}
function KL(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function GL(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Wn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && GL(e) && t && e.select()
    }
}
var Gv = YL();
function YL() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Yv(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Yv(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Yv(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function QL(e) {
    return e.filter(t => t.tagName !== "A")
}
function qL(e) {
    const t = g.useRef({
        value: e,
        previous: e
    });
    return g.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var XL = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , mo = new WeakMap
  , Ta = new WeakMap
  , Pa = {}
  , Oc = 0
  , fb = function(e) {
    return e && (e.host || fb(e.parentNode))
}
  , ZL = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = fb(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , JL = function(e, t, n, r) {
    var o = ZL(t, Array.isArray(e) ? e : [e]);
    Pa[n] || (Pa[n] = new WeakMap);
    var s = Pa[n]
      , i = []
      , a = new Set
      , l = new Set(o)
      , u = function(d) {
        !d || a.has(d) || (a.add(d),
        u(d.parentNode))
    };
    o.forEach(u);
    var c = function(d) {
        !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
            if (a.has(f))
                c(f);
            else
                try {
                    var h = f.getAttribute(r)
                      , S = h !== null && h !== "false"
                      , p = (mo.get(f) || 0) + 1
                      , w = (s.get(f) || 0) + 1;
                    mo.set(f, p),
                    s.set(f, w),
                    i.push(f),
                    p === 1 && S && Ta.set(f, !0),
                    w === 1 && f.setAttribute(n, "true"),
                    S || f.setAttribute(r, "true")
                } catch (y) {
                    console.error("aria-hidden: cannot operate on ", f, y)
                }
        })
    };
    return c(t),
    a.clear(),
    Oc++,
    function() {
        i.forEach(function(d) {
            var f = mo.get(d) - 1
              , h = s.get(d) - 1;
            mo.set(d, f),
            s.set(d, h),
            f || (Ta.has(d) || d.removeAttribute(r),
            Ta.delete(d)),
            h || d.removeAttribute(n)
        }),
        Oc--,
        Oc || (mo = new WeakMap,
        mo = new WeakMap,
        Ta = new WeakMap,
        Pa = {})
    }
}
  , eO = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = XL(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    JL(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , cn = function() {
    return cn = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    cn.apply(this, arguments)
};
function hb(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function tO(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Za = "right-scroll-bar-position"
  , Ja = "width-before-scroll-bar"
  , nO = "with-scroll-bars-hidden"
  , rO = "--removed-body-scroll-bar-size";
function _c(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function oO(e, t) {
    var n = g.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var sO = typeof window < "u" ? g.useLayoutEffect : g.useEffect
  , Qv = new WeakMap;
function iO(e, t) {
    var n = oO(null, function(r) {
        return e.forEach(function(o) {
            return _c(o, r)
        })
    });
    return sO(function() {
        var r = Qv.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , i = n.current;
            o.forEach(function(a) {
                s.has(a) || _c(a, null)
            }),
            s.forEach(function(a) {
                o.has(a) || _c(a, i)
            })
        }
        Qv.set(n, e)
    }, [e]),
    n
}
function aO(e) {
    return e
}
function lO(e, t) {
    t === void 0 && (t = aO);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var i = t(s, r);
            return n.push(i),
            function() {
                n = n.filter(function(a) {
                    return a !== i
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(s)
            }
            n = {
                push: function(a) {
                    return s(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var i = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(s),
                i = n
            }
            var l = function() {
                var c = i;
                i = [],
                c.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(c) {
                    i.push(c),
                    u()
                },
                filter: function(c) {
                    return i = i.filter(c),
                    n
                }
            }
        }
    };
    return o
}
function uO(e) {
    e === void 0 && (e = {});
    var t = lO(null);
    return t.options = cn({
        async: !0,
        ssr: !1
    }, e),
    t
}
var pb = function(e) {
    var t = e.sideCar
      , n = hb(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return g.createElement(r, cn({}, n))
};
pb.isSideCarExport = !0;
function cO(e, t) {
    return e.useMedium(t),
    pb
}
var mb = uO()
  , Fc = function() {}
  , Ru = g.forwardRef(function(e, t) {
    var n = g.useRef(null)
      , r = g.useState({
        onScrollCapture: Fc,
        onWheelCapture: Fc,
        onTouchMoveCapture: Fc
    })
      , o = r[0]
      , s = r[1]
      , i = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , c = e.enabled
      , d = e.shards
      , f = e.sideCar
      , h = e.noRelative
      , S = e.noIsolation
      , p = e.inert
      , w = e.allowPinchZoom
      , y = e.as
      , v = y === void 0 ? "div" : y
      , x = e.gapMode
      , b = hb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = f
      , E = iO([n, t])
      , P = cn(cn({}, b), o);
    return g.createElement(g.Fragment, null, c && g.createElement(C, {
        sideCar: mb,
        removeScrollBar: u,
        shards: d,
        noRelative: h,
        noIsolation: S,
        inert: p,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), i ? g.cloneElement(g.Children.only(a), cn(cn({}, P), {
        ref: E
    })) : g.createElement(v, cn({}, P, {
        className: l,
        ref: E
    }), a))
});
Ru.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ru.classNames = {
    fullWidth: Ja,
    zeroRight: Za
};
var dO = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function fO() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = dO();
    return t && e.setAttribute("nonce", t),
    e
}
function hO(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function pO(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var mO = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = fO()) && (hO(t, n),
            pO(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , gO = function() {
    var e = mO();
    return function(t, n) {
        g.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , gb = function() {
    var e = gO()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , vO = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Vc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , yO = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Vc(n), Vc(r), Vc(o)]
}
  , xO = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return vO;
    var t = yO(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , wO = gb()
  , Ko = "data-scroll-locked"
  , SO = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , i = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(nO, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ko, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Za, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ja, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Za, " .").concat(Za, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ja, " .").concat(Ja, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ko, `] {
    `).concat(rO, ": ").concat(a, `px;
  }
`)
}
  , qv = function() {
    var e = parseInt(document.body.getAttribute(Ko) || "0", 10);
    return isFinite(e) ? e : 0
}
  , bO = function() {
    g.useEffect(function() {
        return document.body.setAttribute(Ko, (qv() + 1).toString()),
        function() {
            var e = qv() - 1;
            e <= 0 ? document.body.removeAttribute(Ko) : document.body.setAttribute(Ko, e.toString())
        }
    }, [])
}
  , CO = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    bO();
    var s = g.useMemo(function() {
        return xO(o)
    }, [o]);
    return g.createElement(wO, {
        styles: SO(s, !t, o, n ? "" : "!important")
    })
}
  , Sf = !1;
if (typeof window < "u")
    try {
        var ka = Object.defineProperty({}, "passive", {
            get: function() {
                return Sf = !0,
                !0
            }
        });
        window.addEventListener("test", ka, ka),
        window.removeEventListener("test", ka, ka)
    } catch {
        Sf = !1
    }
var go = Sf ? {
    passive: !1
} : !1
  , EO = function(e) {
    return e.tagName === "TEXTAREA"
}
  , vb = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !EO(e) && n[t] === "visible")
}
  , TO = function(e) {
    return vb(e, "overflowY")
}
  , PO = function(e) {
    return vb(e, "overflowX")
}
  , Xv = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = yb(e, r);
        if (o) {
            var s = xb(e, r)
              , i = s[1]
              , a = s[2];
            if (i > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , kO = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , RO = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , yb = function(e, t) {
    return e === "v" ? TO(t) : PO(t)
}
  , xb = function(e, t) {
    return e === "v" ? kO(t) : RO(t)
}
  , NO = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , AO = function(e, t, n, r, o) {
    var s = NO(e, window.getComputedStyle(t).direction)
      , i = s * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , c = i > 0
      , d = 0
      , f = 0;
    do {
        if (!a)
            break;
        var h = xb(e, a)
          , S = h[0]
          , p = h[1]
          , w = h[2]
          , y = p - w - s * S;
        (S || y) && yb(e, a) && (d += y,
        f += S);
        var v = a.parentNode;
        a = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (c && (Math.abs(d) < 1 || !o) || !c && (Math.abs(f) < 1 || !o)) && (u = !0),
    u
}
  , Ra = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Zv = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Jv = function(e) {
    return e && "current"in e ? e.current : e
}
  , MO = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , jO = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , DO = 0
  , vo = [];
function IO(e) {
    var t = g.useRef([])
      , n = g.useRef([0, 0])
      , r = g.useRef()
      , o = g.useState(DO++)[0]
      , s = g.useState(gb)[0]
      , i = g.useRef(e);
    g.useEffect(function() {
        i.current = e
    }, [e]),
    g.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var p = tO([e.lockRef.current], (e.shards || []).map(Jv), !0).filter(Boolean);
            return p.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = g.useCallback(function(p, w) {
        if ("touches"in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
            return !i.current.allowPinchZoom;
        var y = Ra(p), v = n.current, x = "deltaX"in p ? p.deltaX : v[0] - y[0], b = "deltaY"in p ? p.deltaY : v[1] - y[1], C, E = p.target, P = Math.abs(x) > Math.abs(b) ? "h" : "v";
        if ("touches"in p && P === "h" && E.type === "range")
            return !1;
        var T = Xv(P, E);
        if (!T)
            return !0;
        if (T ? C = P : (C = P === "v" ? "h" : "v",
        T = Xv(P, E)),
        !T)
            return !1;
        if (!r.current && "changedTouches"in p && (x || b) && (r.current = C),
        !C)
            return !0;
        var R = r.current || C;
        return AO(R, w, p, R === "h" ? x : b, !0)
    }, [])
      , l = g.useCallback(function(p) {
        var w = p;
        if (!(!vo.length || vo[vo.length - 1] !== s)) {
            var y = "deltaY"in w ? Zv(w) : Ra(w)
              , v = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && MO(C.delta, y)
            })[0];
            if (v && v.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!v) {
                var x = (i.current.shards || []).map(Jv).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , b = x.length > 0 ? a(w, x[0]) : !i.current.noIsolation;
                b && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = g.useCallback(function(p, w, y, v) {
        var x = {
            name: p,
            delta: w,
            target: y,
            should: v,
            shadowParent: LO(y)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(b) {
                return b !== x
            })
        }, 1)
    }, [])
      , c = g.useCallback(function(p) {
        n.current = Ra(p),
        r.current = void 0
    }, [])
      , d = g.useCallback(function(p) {
        u(p.type, Zv(p), p.target, a(p, e.lockRef.current))
    }, [])
      , f = g.useCallback(function(p) {
        u(p.type, Ra(p), p.target, a(p, e.lockRef.current))
    }, []);
    g.useEffect(function() {
        return vo.push(s),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: f
        }),
        document.addEventListener("wheel", l, go),
        document.addEventListener("touchmove", l, go),
        document.addEventListener("touchstart", c, go),
        function() {
            vo = vo.filter(function(p) {
                return p !== s
            }),
            document.removeEventListener("wheel", l, go),
            document.removeEventListener("touchmove", l, go),
            document.removeEventListener("touchstart", c, go)
        }
    }, []);
    var h = e.removeScrollBar
      , S = e.inert;
    return g.createElement(g.Fragment, null, S ? g.createElement(s, {
        styles: jO(o)
    }) : null, h ? g.createElement(CO, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function LO(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const OO = cO(mb, IO);
var wb = g.forwardRef(function(e, t) {
    return g.createElement(Ru, cn({}, e, {
        ref: t,
        sideCar: OO
    }))
});
wb.classNames = Ru.classNames;
var _O = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , FO = [" ", "Enter"]
  , no = "Select"
  , [Nu,Au,VO] = Ch(no)
  , [Cs,K_] = Er(no, [VO, mu])
  , Mu = mu()
  , [BO,Pr] = Cs(no)
  , [$O,zO] = Cs(no)
  , Sb = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: i, defaultValue: a, onValueChange: l, dir: u, name: c, autoComplete: d, disabled: f, required: h, form: S} = e
      , p = Mu(t)
      , [w,y] = g.useState(null)
      , [v,x] = g.useState(null)
      , [b,C] = g.useState(!1)
      , E = bp(u)
      , [P,T] = Ci({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: no
    })
      , [R,M] = Ci({
        prop: i,
        defaultProp: a,
        onChange: l,
        caller: no
    })
      , F = g.useRef(null)
      , L = w ? S || !!w.closest("form") : !0
      , [W,D] = g.useState(new Set)
      , H = Array.from(W).map(B => B.props.value).join(";");
    return m.jsx(FR, {
        ...p,
        children: m.jsxs(BO, {
            required: h,
            scope: t,
            trigger: w,
            onTriggerChange: y,
            valueNode: v,
            onValueNodeChange: x,
            valueNodeHasChildren: b,
            onValueNodeHasChildrenChange: C,
            contentId: Ui(),
            value: R,
            onValueChange: M,
            open: P,
            onOpenChange: T,
            dir: E,
            triggerPointerDownPosRef: F,
            disabled: f,
            children: [m.jsx(Nu.Provider, {
                scope: t,
                children: m.jsx($O, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: g.useCallback(B => {
                        D(V => new Set(V).add(B))
                    }
                    , []),
                    onNativeOptionRemove: g.useCallback(B => {
                        D(V => {
                            const k = new Set(V);
                            return k.delete(B),
                            k
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), L ? m.jsxs(Hb, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: R,
                onChange: B => M(B.target.value),
                disabled: f,
                form: S,
                children: [R === void 0 ? m.jsx("option", {
                    value: ""
                }) : null, Array.from(W)]
            }, H) : null]
        })
    })
}
;
Sb.displayName = no;
var bb = "SelectTrigger"
  , Cb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...o} = e
      , s = Mu(n)
      , i = Pr(bb, n)
      , a = i.disabled || r
      , l = Ee(t, i.onTriggerChange)
      , u = Au(n)
      , c = g.useRef("touch")
      , [d,f,h] = Gb(p => {
        const w = u().filter(x => !x.disabled)
          , y = w.find(x => x.value === i.value)
          , v = Yb(w, p, y);
        v !== void 0 && i.onValueChange(v.value)
    }
    )
      , S = p => {
        a || (i.onOpenChange(!0),
        h()),
        p && (i.triggerPointerDownPosRef.current = {
            x: Math.round(p.pageX),
            y: Math.round(p.pageY)
        })
    }
    ;
    return m.jsx(_w, {
        asChild: !0,
        ...s,
        children: m.jsx(ee.button, {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": Kb(i.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: G(o.onClick, p => {
                p.currentTarget.focus(),
                c.current !== "mouse" && S(p)
            }
            ),
            onPointerDown: G(o.onPointerDown, p => {
                c.current = p.pointerType;
                const w = p.target;
                w.hasPointerCapture(p.pointerId) && w.releasePointerCapture(p.pointerId),
                p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (S(p),
                p.preventDefault())
            }
            ),
            onKeyDown: G(o.onKeyDown, p => {
                const w = d.current !== "";
                !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && f(p.key),
                !(w && p.key === " ") && _O.includes(p.key) && (S(),
                p.preventDefault())
            }
            )
        })
    })
}
);
Cb.displayName = bb;
var Eb = "SelectValue"
  , Tb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, children: s, placeholder: i="", ...a} = e
      , l = Pr(Eb, n)
      , {onValueNodeHasChildrenChange: u} = l
      , c = s !== void 0
      , d = Ee(t, l.onValueNodeChange);
    return Ue( () => {
        u(c)
    }
    , [u, c]),
    m.jsx(ee.span, {
        ...a,
        ref: d,
        style: {
            pointerEvents: "none"
        },
        children: Kb(l.value) ? m.jsx(m.Fragment, {
            children: i
        }) : s
    })
}
);
Tb.displayName = Eb;
var UO = "SelectIcon"
  , Pb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...o} = e;
    return m.jsx(ee.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: r || "▼"
    })
}
);
Pb.displayName = UO;
var WO = "SelectPortal"
  , kb = e => m.jsx(Eh, {
    asChild: !0,
    ...e
});
kb.displayName = WO;
var ro = "SelectContent"
  , Rb = g.forwardRef( (e, t) => {
    const n = Pr(ro, e.__scopeSelect)
      , [r,o] = g.useState();
    if (Ue( () => {
        o(new DocumentFragment)
    }
    , []),
    !n.open) {
        const s = r;
        return s ? io.createPortal(m.jsx(Nb, {
            scope: e.__scopeSelect,
            children: m.jsx(Nu.Slot, {
                scope: e.__scopeSelect,
                children: m.jsx("div", {
                    children: e.children
                })
            })
        }), s) : null
    }
    return m.jsx(Ab, {
        ...e,
        ref: t
    })
}
);
Rb.displayName = ro;
var $t = 10
  , [Nb,kr] = Cs(ro)
  , HO = "SelectContentImpl"
  , KO = bi("SelectContent.RemoveScroll")
  , Ab = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: i, side: a, sideOffset: l, align: u, alignOffset: c, arrowPadding: d, collisionBoundary: f, collisionPadding: h, sticky: S, hideWhenDetached: p, avoidCollisions: w, ...y} = e
      , v = Pr(ro, n)
      , [x,b] = g.useState(null)
      , [C,E] = g.useState(null)
      , P = Ee(t, _ => b(_))
      , [T,R] = g.useState(null)
      , [M,F] = g.useState(null)
      , L = Au(n)
      , [W,D] = g.useState(!1)
      , H = g.useRef(!1);
    g.useEffect( () => {
        if (x)
            return eO(x)
    }
    , [x]),
    zL();
    const B = g.useCallback(_ => {
        const [ie,...Pe] = L().map(re => re.ref.current)
          , [se] = Pe.slice(-1)
          , te = document.activeElement;
        for (const re of _)
            if (re === te || (re == null || re.scrollIntoView({
                block: "nearest"
            }),
            re === ie && C && (C.scrollTop = 0),
            re === se && C && (C.scrollTop = C.scrollHeight),
            re == null || re.focus(),
            document.activeElement !== te))
                return
    }
    , [L, C])
      , V = g.useCallback( () => B([T, x]), [B, T, x]);
    g.useEffect( () => {
        W && V()
    }
    , [W, V]);
    const {onOpenChange: k, triggerPointerDownPosRef: N} = v;
    g.useEffect( () => {
        if (x) {
            let _ = {
                x: 0,
                y: 0
            };
            const ie = se => {
                var te, re;
                _ = {
                    x: Math.abs(Math.round(se.pageX) - (((te = N.current) == null ? void 0 : te.x) ?? 0)),
                    y: Math.abs(Math.round(se.pageY) - (((re = N.current) == null ? void 0 : re.y) ?? 0))
                }
            }
              , Pe = se => {
                _.x <= 10 && _.y <= 10 ? se.preventDefault() : x.contains(se.target) || k(!1),
                document.removeEventListener("pointermove", ie),
                N.current = null
            }
            ;
            return N.current !== null && (document.addEventListener("pointermove", ie),
            document.addEventListener("pointerup", Pe, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", ie),
                document.removeEventListener("pointerup", Pe, {
                    capture: !0
                })
            }
        }
    }
    , [x, k, N]),
    g.useEffect( () => {
        const _ = () => k(!1);
        return window.addEventListener("blur", _),
        window.addEventListener("resize", _),
        () => {
            window.removeEventListener("blur", _),
            window.removeEventListener("resize", _)
        }
    }
    , [k]);
    const [O,K] = Gb(_ => {
        const ie = L().filter(te => !te.disabled)
          , Pe = ie.find(te => te.ref.current === document.activeElement)
          , se = Yb(ie, _, Pe);
        se && setTimeout( () => se.ref.current.focus())
    }
    )
      , U = g.useCallback( (_, ie, Pe) => {
        const se = !H.current && !Pe;
        (v.value !== void 0 && v.value === ie || se) && (R(_),
        se && (H.current = !0))
    }
    , [v.value])
      , X = g.useCallback( () => x == null ? void 0 : x.focus(), [x])
      , Y = g.useCallback( (_, ie, Pe) => {
        const se = !H.current && !Pe;
        (v.value !== void 0 && v.value === ie || se) && F(_)
    }
    , [v.value])
      , de = r === "popper" ? bf : Mb
      , Te = de === bf ? {
        side: a,
        sideOffset: l,
        align: u,
        alignOffset: c,
        arrowPadding: d,
        collisionBoundary: f,
        collisionPadding: h,
        sticky: S,
        hideWhenDetached: p,
        avoidCollisions: w
    } : {};
    return m.jsx(Nb, {
        scope: n,
        content: x,
        viewport: C,
        onViewportChange: E,
        itemRefCallback: U,
        selectedItem: T,
        onItemLeave: X,
        itemTextRefCallback: Y,
        focusSelectedItem: V,
        selectedItemText: M,
        position: r,
        isPositioned: W,
        searchRef: O,
        children: m.jsx(wb, {
            as: KO,
            allowPinchZoom: !0,
            children: m.jsx(cb, {
                asChild: !0,
                trapped: v.open,
                onMountAutoFocus: _ => {
                    _.preventDefault()
                }
                ,
                onUnmountAutoFocus: G(o, _ => {
                    var ie;
                    (ie = v.trigger) == null || ie.focus({
                        preventScroll: !0
                    }),
                    _.preventDefault()
                }
                ),
                children: m.jsx(su, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: i,
                    onFocusOutside: _ => _.preventDefault(),
                    onDismiss: () => v.onOpenChange(!1),
                    children: m.jsx(de, {
                        role: "listbox",
                        id: v.contentId,
                        "data-state": v.open ? "open" : "closed",
                        dir: v.dir,
                        onContextMenu: _ => _.preventDefault(),
                        ...y,
                        ...Te,
                        onPlaced: () => D(!0),
                        ref: P,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...y.style
                        },
                        onKeyDown: G(y.onKeyDown, _ => {
                            const ie = _.ctrlKey || _.altKey || _.metaKey;
                            if (_.key === "Tab" && _.preventDefault(),
                            !ie && _.key.length === 1 && K(_.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                                let se = L().filter(te => !te.disabled).map(te => te.ref.current);
                                if (["ArrowUp", "End"].includes(_.key) && (se = se.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(_.key)) {
                                    const te = _.target
                                      , re = se.indexOf(te);
                                    se = se.slice(re + 1)
                                }
                                setTimeout( () => B(se)),
                                _.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
Ab.displayName = HO;
var GO = "SelectItemAlignedPosition"
  , Mb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...o} = e
      , s = Pr(ro, n)
      , i = kr(ro, n)
      , [a,l] = g.useState(null)
      , [u,c] = g.useState(null)
      , d = Ee(t, P => c(P))
      , f = Au(n)
      , h = g.useRef(!1)
      , S = g.useRef(!0)
      , {viewport: p, selectedItem: w, selectedItemText: y, focusSelectedItem: v} = i
      , x = g.useCallback( () => {
        if (s.trigger && s.valueNode && a && u && p && w && y) {
            const P = s.trigger.getBoundingClientRect()
              , T = u.getBoundingClientRect()
              , R = s.valueNode.getBoundingClientRect()
              , M = y.getBoundingClientRect();
            if (s.dir !== "rtl") {
                const te = M.left - T.left
                  , re = R.left - te
                  , We = P.left - re
                  , wt = P.width + We
                  , Rr = Math.max(wt, T.width)
                  , In = window.innerWidth - $t
                  , Nr = Uv(re, [$t, Math.max($t, In - Rr)]);
                a.style.minWidth = wt + "px",
                a.style.left = Nr + "px"
            } else {
                const te = T.right - M.right
                  , re = window.innerWidth - R.right - te
                  , We = window.innerWidth - P.right - re
                  , wt = P.width + We
                  , Rr = Math.max(wt, T.width)
                  , In = window.innerWidth - $t
                  , Nr = Uv(re, [$t, Math.max($t, In - Rr)]);
                a.style.minWidth = wt + "px",
                a.style.right = Nr + "px"
            }
            const F = f()
              , L = window.innerHeight - $t * 2
              , W = p.scrollHeight
              , D = window.getComputedStyle(u)
              , H = parseInt(D.borderTopWidth, 10)
              , B = parseInt(D.paddingTop, 10)
              , V = parseInt(D.borderBottomWidth, 10)
              , k = parseInt(D.paddingBottom, 10)
              , N = H + B + W + k + V
              , O = Math.min(w.offsetHeight * 5, N)
              , K = window.getComputedStyle(p)
              , U = parseInt(K.paddingTop, 10)
              , X = parseInt(K.paddingBottom, 10)
              , Y = P.top + P.height / 2 - $t
              , de = L - Y
              , Te = w.offsetHeight / 2
              , _ = w.offsetTop + Te
              , ie = H + B + _
              , Pe = N - ie;
            if (ie <= Y) {
                const te = F.length > 0 && w === F[F.length - 1].ref.current;
                a.style.bottom = "0px";
                const re = u.clientHeight - p.offsetTop - p.offsetHeight
                  , We = Math.max(de, Te + (te ? X : 0) + re + V)
                  , wt = ie + We;
                a.style.height = wt + "px"
            } else {
                const te = F.length > 0 && w === F[0].ref.current;
                a.style.top = "0px";
                const We = Math.max(Y, H + p.offsetTop + (te ? U : 0) + Te) + Pe;
                a.style.height = We + "px",
                p.scrollTop = ie - Y + p.offsetTop
            }
            a.style.margin = `${$t}px 0`,
            a.style.minHeight = O + "px",
            a.style.maxHeight = L + "px",
            r == null || r(),
            requestAnimationFrame( () => h.current = !0)
        }
    }
    , [f, s.trigger, s.valueNode, a, u, p, w, y, s.dir, r]);
    Ue( () => x(), [x]);
    const [b,C] = g.useState();
    Ue( () => {
        u && C(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const E = g.useCallback(P => {
        P && S.current === !0 && (x(),
        v == null || v(),
        S.current = !1)
    }
    , [x, v]);
    return m.jsx(QO, {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: E,
        children: m.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: b
            },
            children: m.jsx(ee.div, {
                ...o,
                ref: d,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
Mb.displayName = GO;
var YO = "SelectPopperPosition"
  , bf = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: o=$t, ...s} = e
      , i = Mu(n);
    return m.jsx(Fw, {
        ...i,
        ...s,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
bf.displayName = YO;
var [QO,Cp] = Cs(ro, {})
  , Cf = "SelectViewport"
  , jb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...o} = e
      , s = kr(Cf, n)
      , i = Cp(Cf, n)
      , a = Ee(t, s.onViewportChange)
      , l = g.useRef(0);
    return m.jsxs(m.Fragment, {
        children: [m.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), m.jsx(Nu.Slot, {
            scope: n,
            children: m.jsx(ee.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: a,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: G(o.onScroll, u => {
                    const c = u.currentTarget
                      , {contentWrapper: d, shouldExpandOnScrollRef: f} = i;
                    if (f != null && f.current && d) {
                        const h = Math.abs(l.current - c.scrollTop);
                        if (h > 0) {
                            const S = window.innerHeight - $t * 2
                              , p = parseFloat(d.style.minHeight)
                              , w = parseFloat(d.style.height)
                              , y = Math.max(p, w);
                            if (y < S) {
                                const v = y + h
                                  , x = Math.min(S, v)
                                  , b = v - x;
                                d.style.height = x + "px",
                                d.style.bottom === "0px" && (c.scrollTop = b > 0 ? b : 0,
                                d.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = c.scrollTop
                }
                )
            })
        })]
    })
}
);
jb.displayName = Cf;
var Db = "SelectGroup"
  , [qO,XO] = Cs(Db)
  , ZO = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Ui();
    return m.jsx(qO, {
        scope: n,
        id: o,
        children: m.jsx(ee.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
        })
    })
}
);
ZO.displayName = Db;
var Ib = "SelectLabel"
  , Lb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = XO(Ib, n);
    return m.jsx(ee.div, {
        id: o.id,
        ...r,
        ref: t
    })
}
);
Lb.displayName = Ib;
var zl = "SelectItem"
  , [JO,Ob] = Cs(zl)
  , _b = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: o=!1, textValue: s, ...i} = e
      , a = Pr(zl, n)
      , l = kr(zl, n)
      , u = a.value === r
      , [c,d] = g.useState(s ?? "")
      , [f,h] = g.useState(!1)
      , S = Ee(t, v => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, v, r, o)
    }
    )
      , p = Ui()
      , w = g.useRef("touch")
      , y = () => {
        o || (a.onValueChange(r),
        a.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return m.jsx(JO, {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: g.useCallback(v => {
            d(x => x || ((v == null ? void 0 : v.textContent) ?? "").trim())
        }
        , []),
        children: m.jsx(Nu.ItemSlot, {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: m.jsx(ee.div, {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: S,
                onFocus: G(i.onFocus, () => h(!0)),
                onBlur: G(i.onBlur, () => h(!1)),
                onClick: G(i.onClick, () => {
                    w.current !== "mouse" && y()
                }
                ),
                onPointerUp: G(i.onPointerUp, () => {
                    w.current === "mouse" && y()
                }
                ),
                onPointerDown: G(i.onPointerDown, v => {
                    w.current = v.pointerType
                }
                ),
                onPointerMove: G(i.onPointerMove, v => {
                    var x;
                    w.current = v.pointerType,
                    o ? (x = l.onItemLeave) == null || x.call(l) : w.current === "mouse" && v.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: G(i.onPointerLeave, v => {
                    var x;
                    v.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l))
                }
                ),
                onKeyDown: G(i.onKeyDown, v => {
                    var b;
                    ((b = l.searchRef) == null ? void 0 : b.current) !== "" && v.key === " " || (FO.includes(v.key) && y(),
                    v.key === " " && v.preventDefault())
                }
                )
            })
        })
    })
}
);
_b.displayName = zl;
var zs = "SelectItemText"
  , Fb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, ...s} = e
      , i = Pr(zs, n)
      , a = kr(zs, n)
      , l = Ob(zs, n)
      , u = zO(zs, n)
      , [c,d] = g.useState(null)
      , f = Ee(t, y => d(y), l.onItemTextChange, y => {
        var v;
        return (v = a.itemTextRefCallback) == null ? void 0 : v.call(a, y, l.value, l.disabled)
    }
    )
      , h = c == null ? void 0 : c.textContent
      , S = g.useMemo( () => m.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: h
    }, l.value), [l.disabled, l.value, h])
      , {onNativeOptionAdd: p, onNativeOptionRemove: w} = u;
    return Ue( () => (p(S),
    () => w(S)), [p, w, S]),
    m.jsxs(m.Fragment, {
        children: [m.jsx(ee.span, {
            id: l.textId,
            ...s,
            ref: f
        }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? io.createPortal(s.children, i.valueNode) : null]
    })
}
);
Fb.displayName = zs;
var Vb = "SelectItemIndicator"
  , Bb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return Ob(Vb, n).isSelected ? m.jsx(ee.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
Bb.displayName = Vb;
var Ef = "SelectScrollUpButton"
  , $b = g.forwardRef( (e, t) => {
    const n = kr(Ef, e.__scopeSelect)
      , r = Cp(Ef, e.__scopeSelect)
      , [o,s] = g.useState(!1)
      , i = Ee(t, r.onScrollButtonChange);
    return Ue( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollTop > 0;
                s(u)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? m.jsx(Ub, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
$b.displayName = Ef;
var Tf = "SelectScrollDownButton"
  , zb = g.forwardRef( (e, t) => {
    const n = kr(Tf, e.__scopeSelect)
      , r = Cp(Tf, e.__scopeSelect)
      , [o,s] = g.useState(!1)
      , i = Ee(t, r.onScrollButtonChange);
    return Ue( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollHeight - l.clientHeight
                  , c = Math.ceil(l.scrollTop) < u;
                s(c)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? m.jsx(Ub, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
zb.displayName = Tf;
var Ub = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...o} = e
      , s = kr("SelectScrollButton", n)
      , i = g.useRef(null)
      , a = Au(n)
      , l = g.useCallback( () => {
        i.current !== null && (window.clearInterval(i.current),
        i.current = null)
    }
    , []);
    return g.useEffect( () => () => l(), [l]),
    Ue( () => {
        var c;
        const u = a().find(d => d.ref.current === document.activeElement);
        (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({
            block: "nearest"
        })
    }
    , [a]),
    m.jsx(ee.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: G(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: G(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: G(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , e_ = "SelectSeparator"
  , Wb = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return m.jsx(ee.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
Wb.displayName = e_;
var Pf = "SelectArrow"
  , t_ = g.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Mu(n)
      , s = Pr(Pf, n)
      , i = kr(Pf, n);
    return s.open && i.position === "popper" ? m.jsx(Vw, {
        ...o,
        ...r,
        ref: t
    }) : null
}
);
t_.displayName = Pf;
var n_ = "SelectBubbleInput"
  , Hb = g.forwardRef( ({__scopeSelect: e, value: t, ...n}, r) => {
    const o = g.useRef(null)
      , s = Ee(r, o)
      , i = qL(t);
    return g.useEffect( () => {
        const a = o.current;
        if (!a)
            return;
        const l = window.HTMLSelectElement.prototype
          , c = Object.getOwnPropertyDescriptor(l, "value").set;
        if (i !== t && c) {
            const d = new Event("change",{
                bubbles: !0
            });
            c.call(a, t),
            a.dispatchEvent(d)
        }
    }
    , [i, t]),
    m.jsx(ee.select, {
        ...n,
        style: {
            ...Ax,
            ...n.style
        },
        ref: s,
        defaultValue: t
    })
}
);
Hb.displayName = n_;
function Kb(e) {
    return e === "" || e === void 0
}
function Gb(e) {
    const t = Dt(e)
      , n = g.useRef("")
      , r = g.useRef(0)
      , o = g.useCallback(i => {
        const a = n.current + i;
        t(a),
        function l(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
        }(a)
    }
    , [t])
      , s = g.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return g.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, o, s]
}
function Yb(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , s = n ? e.indexOf(n) : -1;
    let i = r_(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function r_(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var o_ = Sb
  , Qb = Cb
  , s_ = Tb
  , i_ = Pb
  , a_ = kb
  , qb = Rb
  , l_ = jb
  , Xb = Lb
  , Zb = _b
  , u_ = Fb
  , c_ = Bb
  , Jb = $b
  , eC = zb
  , tC = Wb;
const Na = o_
  , Aa = s_
  , Us = g.forwardRef( ({className: e, children: t, ...n}, r) => m.jsxs(Qb, {
    ref: r,
    className: ye("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, m.jsx(i_, {
        asChild: !0,
        children: m.jsx(tw, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
Us.displayName = Qb.displayName;
const nC = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Jb, {
    ref: n,
    className: ye("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: m.jsx(lk, {
        className: "h-4 w-4"
    })
}));
nC.displayName = Jb.displayName;
const rC = g.forwardRef( ({className: e, ...t}, n) => m.jsx(eC, {
    ref: n,
    className: ye("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: m.jsx(tw, {
        className: "h-4 w-4"
    })
}));
rC.displayName = eC.displayName;
const Ws = g.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => m.jsx(a_, {
    children: m.jsxs(qb, {
        ref: o,
        className: ye("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [m.jsx(nC, {}), m.jsx(l_, {
            className: ye("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), m.jsx(rC, {})]
    })
}));
Ws.displayName = qb.displayName;
const d_ = g.forwardRef( ({className: e, ...t}, n) => m.jsx(Xb, {
    ref: n,
    className: ye("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
d_.displayName = Xb.displayName;
const Fe = g.forwardRef( ({className: e, children: t, ...n}, r) => m.jsxs(Zb, {
    ref: r,
    className: ye("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", e),
    ...n,
    children: [m.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: m.jsx(c_, {
            children: m.jsx(du, {
                className: "h-4 w-4"
            })
        })
    }), m.jsx(u_, {
        children: t
    })]
}));
Fe.displayName = Zb.displayName;
const f_ = g.forwardRef( ({className: e, ...t}, n) => m.jsx(tC, {
    ref: n,
    className: ye("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
f_.displayName = tC.displayName;
const ey = [{
    label: "Personal Info",
    icon: aw
}, {
    label: "Project Details",
    icon: Jx
}, {
    label: "Specifications",
    icon: iw
}, {
    label: "Review",
    icon: du
}]
  , h_ = () => {
    const e = u1()
      , [t,n] = g.useState(0)
      , [r,o] = g.useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        projectType: "",
        sqft: "",
        budget: "",
        timeline: "",
        materials: "",
        designStyle: "",
        customRequests: ""
    })
      , s = (u, c) => o(d => ({
        ...d,
        [u]: c
    }))
      , i = () => n(u => Math.min(u + 1, 3))
      , a = () => n(u => Math.max(u - 1, 0))
      , l = () => {
        g2.success("Project submitted! Redirecting to your dashboard..."),
        setTimeout( () => e("/dashboard"), 1500)
    }
    ;
    return m.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [m.jsx(Pu, {}), m.jsxs("div", {
            className: "container mx-auto max-w-3xl px-4 pb-24 pt-28",
            children: [m.jsx("div", {
                className: "mb-12 flex items-center justify-between",
                children: ey.map( (u, c) => m.jsxs("div", {
                    className: "flex flex-1 items-center",
                    children: [m.jsxs("div", {
                        className: "flex flex-col items-center gap-1",
                        children: [m.jsx("div", {
                            className: `flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${c <= t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"}`,
                            children: m.jsx(u.icon, {
                                className: "h-4 w-4"
                            })
                        }), m.jsx("span", {
                            className: "hidden text-xs text-muted-foreground sm:block",
                            children: u.label
                        })]
                    }), c < ey.length - 1 && m.jsx("div", {
                        className: `mx-2 h-0.5 flex-1 transition-colors ${c < t ? "bg-primary" : "bg-border"}`
                    })]
                }, u.label))
            }), m.jsx($S, {
                mode: "wait",
                children: m.jsxs(tn.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -30
                    },
                    transition: {
                        duration: .3
                    },
                    className: "rounded-xl border border-border bg-card p-8 shadow-card",
                    children: [t === 0 && m.jsxs("div", {
                        className: "space-y-6",
                        children: [m.jsx("h2", {
                            className: "font-display text-2xl font-bold text-foreground",
                            children: "Personal Information"
                        }), m.jsxs("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Full Name"
                                }), m.jsx(Gn, {
                                    placeholder: "John Doe",
                                    value: r.name,
                                    onChange: u => s("name", u.target.value)
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Email"
                                }), m.jsx(Gn, {
                                    type: "email",
                                    placeholder: "john@email.com",
                                    value: r.email,
                                    onChange: u => s("email", u.target.value)
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Phone"
                                }), m.jsx(Gn, {
                                    placeholder: "(555) 123-4567",
                                    value: r.phone,
                                    onChange: u => s("phone", u.target.value)
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Property Address"
                                }), m.jsx(Gn, {
                                    placeholder: "123 Main St",
                                    value: r.address,
                                    onChange: u => s("address", u.target.value)
                                })]
                            })]
                        })]
                    }), t === 1 && m.jsxs("div", {
                        className: "space-y-6",
                        children: [m.jsx("h2", {
                            className: "font-display text-2xl font-bold text-foreground",
                            children: "Project Details"
                        }), m.jsxs("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Project Type"
                                }), m.jsxs(Na, {
                                    value: r.projectType,
                                    onValueChange: u => s("projectType", u),
                                    children: [m.jsx(Us, {
                                        children: m.jsx(Aa, {
                                            placeholder: "Select type"
                                        })
                                    }), m.jsxs(Ws, {
                                        children: [m.jsx(Fe, {
                                            value: "residential",
                                            children: "Residential"
                                        }), m.jsx(Fe, {
                                            value: "commercial",
                                            children: "Commercial"
                                        }), m.jsx(Fe, {
                                            value: "renovation",
                                            children: "Renovation"
                                        })]
                                    })]
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Square Footage"
                                }), m.jsx(Gn, {
                                    type: "number",
                                    placeholder: "2500",
                                    value: r.sqft,
                                    onChange: u => s("sqft", u.target.value)
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Budget Range"
                                }), m.jsxs(Na, {
                                    value: r.budget,
                                    onValueChange: u => s("budget", u),
                                    children: [m.jsx(Us, {
                                        children: m.jsx(Aa, {
                                            placeholder: "Select budget"
                                        })
                                    }), m.jsxs(Ws, {
                                        children: [m.jsx(Fe, {
                                            value: "50k-100k",
                                            children: "$50K - $100K"
                                        }), m.jsx(Fe, {
                                            value: "100k-250k",
                                            children: "$100K - $250K"
                                        }), m.jsx(Fe, {
                                            value: "250k-500k",
                                            children: "$250K - $500K"
                                        }), m.jsx(Fe, {
                                            value: "500k+",
                                            children: "$500K+"
                                        })]
                                    })]
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Timeline"
                                }), m.jsxs(Na, {
                                    value: r.timeline,
                                    onValueChange: u => s("timeline", u),
                                    children: [m.jsx(Us, {
                                        children: m.jsx(Aa, {
                                            placeholder: "Select timeline"
                                        })
                                    }), m.jsxs(Ws, {
                                        children: [m.jsx(Fe, {
                                            value: "3-6",
                                            children: "3-6 months"
                                        }), m.jsx(Fe, {
                                            value: "6-12",
                                            children: "6-12 months"
                                        }), m.jsx(Fe, {
                                            value: "12-18",
                                            children: "12-18 months"
                                        }), m.jsx(Fe, {
                                            value: "18+",
                                            children: "18+ months"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), t === 2 && m.jsxs("div", {
                        className: "space-y-6",
                        children: [m.jsx("h2", {
                            className: "font-display text-2xl font-bold text-foreground",
                            children: "Specifications"
                        }), m.jsxs("div", {
                            className: "space-y-4",
                            children: [m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Preferred Materials"
                                }), m.jsx(Gn, {
                                    placeholder: "e.g., Steel frame, marble countertops",
                                    value: r.materials,
                                    onChange: u => s("materials", u.target.value)
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Design Style"
                                }), m.jsxs(Na, {
                                    value: r.designStyle,
                                    onValueChange: u => s("designStyle", u),
                                    children: [m.jsx(Us, {
                                        children: m.jsx(Aa, {
                                            placeholder: "Select style"
                                        })
                                    }), m.jsxs(Ws, {
                                        children: [m.jsx(Fe, {
                                            value: "modern",
                                            children: "Modern / Contemporary"
                                        }), m.jsx(Fe, {
                                            value: "traditional",
                                            children: "Traditional"
                                        }), m.jsx(Fe, {
                                            value: "industrial",
                                            children: "Industrial"
                                        }), m.jsx(Fe, {
                                            value: "minimalist",
                                            children: "Minimalist"
                                        }), m.jsx(Fe, {
                                            value: "rustic",
                                            children: "Rustic / Farmhouse"
                                        })]
                                    })]
                                })]
                            }), m.jsxs("div", {
                                className: "space-y-2",
                                children: [m.jsx(bt, {
                                    children: "Custom Requests"
                                }), m.jsx(ub, {
                                    placeholder: "Describe any special requirements...",
                                    value: r.customRequests,
                                    onChange: u => s("customRequests", u.target.value),
                                    rows: 4
                                })]
                            }), m.jsxs("div", {
                                className: "rounded-lg border-2 border-dashed border-border p-8 text-center",
                                children: [m.jsx(pk, {
                                    className: "mx-auto mb-2 h-8 w-8 text-muted-foreground"
                                }), m.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Drag & drop files here or click to upload"
                                }), m.jsx("p", {
                                    className: "mt-1 text-xs text-muted-foreground",
                                    children: "Photos, sketches, inspiration images (coming soon)"
                                })]
                            })]
                        })]
                    }), t === 3 && m.jsxs("div", {
                        className: "space-y-6",
                        children: [m.jsx("h2", {
                            className: "font-display text-2xl font-bold text-foreground",
                            children: "Review & Submit"
                        }), m.jsxs("div", {
                            className: "space-y-4 rounded-lg bg-secondary p-6",
                            children: [m.jsx("div", {
                                className: "grid gap-3 text-sm",
                                children: [["Name", r.name], ["Email", r.email], ["Phone", r.phone], ["Address", r.address], ["Project Type", r.projectType], ["Square Footage", r.sqft ? `${r.sqft} sq ft` : ""], ["Budget", r.budget], ["Timeline", r.timeline], ["Materials", r.materials], ["Design Style", r.designStyle]].filter( ([,u]) => u).map( ([u,c]) => m.jsxs("div", {
                                    className: "flex justify-between border-b border-border pb-2",
                                    children: [m.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: u
                                    }), m.jsx("span", {
                                        className: "font-medium text-foreground capitalize",
                                        children: c
                                    })]
                                }, u))
                            }), r.customRequests && m.jsxs("div", {
                                children: [m.jsx("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Custom Requests:"
                                }), m.jsx("p", {
                                    className: "mt-1 text-sm text-foreground",
                                    children: r.customRequests
                                })]
                            })]
                        })]
                    }), m.jsxs("div", {
                        className: "mt-8 flex justify-between",
                        children: [m.jsxs(qt, {
                            variant: "outline",
                            onClick: a,
                            disabled: t === 0,
                            className: "gap-2",
                            children: [m.jsx(ok, {
                                className: "h-4 w-4"
                            }), " Back"]
                        }), t < 3 ? m.jsxs(qt, {
                            onClick: i,
                            className: "gap-2",
                            children: ["Next ", m.jsx(cu, {
                                className: "h-4 w-4"
                            })]
                        }) : m.jsxs(qt, {
                            onClick: l,
                            className: "gap-2",
                            children: ["Submit Project ", m.jsx(du, {
                                className: "h-4 w-4"
                            })]
                        })]
                    })]
                }, t)
            })]
        }), m.jsx(ku, {})]
    })
}
;
var Bc = "rovingFocusGroup.onEntryFocus"
  , p_ = {
    bubbles: !1,
    cancelable: !0
}
  , qi = "RovingFocusGroup"
  , [kf,oC,m_] = Ch(qi)
  , [g_,sC] = Er(qi, [m_])
  , [v_,y_] = g_(qi)
  , iC = g.forwardRef( (e, t) => m.jsx(kf.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: m.jsx(kf.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: m.jsx(x_, {
            ...e,
            ref: t
        })
    })
}));
iC.displayName = qi;
var x_ = g.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: s, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: c=!1, ...d} = e
      , f = g.useRef(null)
      , h = Ee(t, f)
      , S = bp(s)
      , [p,w] = Ci({
        prop: i,
        defaultProp: a ?? null,
        onChange: l,
        caller: qi
    })
      , [y,v] = g.useState(!1)
      , x = Dt(u)
      , b = oC(n)
      , C = g.useRef(!1)
      , [E,P] = g.useState(0);
    return g.useEffect( () => {
        const T = f.current;
        if (T)
            return T.addEventListener(Bc, x),
            () => T.removeEventListener(Bc, x)
    }
    , [x]),
    m.jsx(v_, {
        scope: n,
        orientation: r,
        dir: S,
        loop: o,
        currentTabStopId: p,
        onItemFocus: g.useCallback(T => w(T), [w]),
        onItemShiftTab: g.useCallback( () => v(!0), []),
        onFocusableItemAdd: g.useCallback( () => P(T => T + 1), []),
        onFocusableItemRemove: g.useCallback( () => P(T => T - 1), []),
        children: m.jsx(ee.div, {
            tabIndex: y || E === 0 ? -1 : 0,
            "data-orientation": r,
            ...d,
            ref: h,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: G(e.onMouseDown, () => {
                C.current = !0
            }
            ),
            onFocus: G(e.onFocus, T => {
                const R = !C.current;
                if (T.target === T.currentTarget && R && !y) {
                    const M = new CustomEvent(Bc,p_);
                    if (T.currentTarget.dispatchEvent(M),
                    !M.defaultPrevented) {
                        const F = b().filter(B => B.focusable)
                          , L = F.find(B => B.active)
                          , W = F.find(B => B.id === p)
                          , H = [L, W, ...F].filter(Boolean).map(B => B.ref.current);
                        uC(H, c)
                    }
                }
                C.current = !1
            }
            ),
            onBlur: G(e.onBlur, () => v(!1))
        })
    })
}
)
  , aC = "RovingFocusGroupItem"
  , lC = g.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: s, children: i, ...a} = e
      , l = Ui()
      , u = s || l
      , c = y_(aC, n)
      , d = c.currentTabStopId === u
      , f = oC(n)
      , {onFocusableItemAdd: h, onFocusableItemRemove: S, currentTabStopId: p} = c;
    return g.useEffect( () => {
        if (r)
            return h(),
            () => S()
    }
    , [r, h, S]),
    m.jsx(kf.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: m.jsx(ee.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: G(e.onMouseDown, w => {
                r ? c.onItemFocus(u) : w.preventDefault()
            }
            ),
            onFocus: G(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: G(e.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    c.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const y = b_(w, c.orientation, c.dir);
                if (y !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let x = f().filter(b => b.focusable).map(b => b.ref.current);
                    if (y === "last")
                        x.reverse();
                    else if (y === "prev" || y === "next") {
                        y === "prev" && x.reverse();
                        const b = x.indexOf(w.currentTarget);
                        x = c.loop ? C_(x, b + 1) : x.slice(b + 1)
                    }
                    setTimeout( () => uC(x))
                }
            }
            ),
            children: typeof i == "function" ? i({
                isCurrentTabStop: d,
                hasTabStop: p != null
            }) : i
        })
    })
}
);
lC.displayName = aC;
var w_ = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function S_(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function b_(e, t, n) {
    const r = S_(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return w_[r]
}
function uC(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function C_(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var E_ = iC
  , T_ = lC
  , ju = "Tabs"
  , [P_,G_] = Er(ju, [sC])
  , cC = sC()
  , [k_,Ep] = P_(ju)
  , dC = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, onValueChange: o, defaultValue: s, orientation: i="horizontal", dir: a, activationMode: l="automatic", ...u} = e
      , c = bp(a)
      , [d,f] = Ci({
        prop: r,
        onChange: o,
        defaultProp: s ?? "",
        caller: ju
    });
    return m.jsx(k_, {
        scope: n,
        baseId: Ui(),
        value: d,
        onValueChange: f,
        orientation: i,
        dir: c,
        activationMode: l,
        children: m.jsx(ee.div, {
            dir: c,
            "data-orientation": i,
            ...u,
            ref: t
        })
    })
}
);
dC.displayName = ju;
var fC = "TabsList"
  , hC = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, loop: r=!0, ...o} = e
      , s = Ep(fC, n)
      , i = cC(n);
    return m.jsx(E_, {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: m.jsx(ee.div, {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
        })
    })
}
);
hC.displayName = fC;
var pC = "TabsTrigger"
  , mC = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, disabled: o=!1, ...s} = e
      , i = Ep(pC, n)
      , a = cC(n)
      , l = yC(i.baseId, r)
      , u = xC(i.baseId, r)
      , c = r === i.value;
    return m.jsx(T_, {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: m.jsx(ee.button, {
            type: "button",
            role: "tab",
            "aria-selected": c,
            "aria-controls": u,
            "data-state": c ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: G(e.onMouseDown, d => {
                !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault()
            }
            ),
            onKeyDown: G(e.onKeyDown, d => {
                [" ", "Enter"].includes(d.key) && i.onValueChange(r)
            }
            ),
            onFocus: G(e.onFocus, () => {
                const d = i.activationMode !== "manual";
                !c && !o && d && i.onValueChange(r)
            }
            )
        })
    })
}
);
mC.displayName = pC;
var gC = "TabsContent"
  , vC = g.forwardRef( (e, t) => {
    const {__scopeTabs: n, value: r, forceMount: o, children: s, ...i} = e
      , a = Ep(gC, n)
      , l = yC(a.baseId, r)
      , u = xC(a.baseId, r)
      , c = r === a.value
      , d = g.useRef(c);
    return g.useEffect( () => {
        const f = requestAnimationFrame( () => d.current = !1);
        return () => cancelAnimationFrame(f)
    }
    , []),
    m.jsx(iu, {
        present: o || c,
        children: ({present: f}) => m.jsx(ee.div, {
            "data-state": c ? "active" : "inactive",
            "data-orientation": a.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !f,
            id: u,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                ...e.style,
                animationDuration: d.current ? "0s" : void 0
            },
            children: f && s
        })
    })
}
);
vC.displayName = gC;
function yC(e, t) {
    return `${e}-trigger-${t}`
}
function xC(e, t) {
    return `${e}-content-${t}`
}
var R_ = dC
  , wC = hC
  , SC = mC
  , bC = vC;
const N_ = R_
  , CC = g.forwardRef( ({className: e, ...t}, n) => m.jsx(wC, {
    ref: n,
    className: ye("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
    ...t
}));
CC.displayName = wC.displayName;
const el = g.forwardRef( ({className: e, ...t}, n) => m.jsx(SC, {
    ref: n,
    className: ye("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
el.displayName = SC.displayName;
const tl = g.forwardRef( ({className: e, ...t}, n) => m.jsx(bC, {
    ref: n,
    className: ye("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
tl.displayName = bC.displayName;
const A_ = [{
    id: 1,
    name: "Modern Family Residence",
    type: "Residential",
    status: "In Progress",
    progress: 65,
    budget: "$320,000",
    sqft: "3,200",
    timeline: "8 months",
    startDate: "Nov 2025"
}, {
    id: 2,
    name: "Downtown Office Renovation",
    type: "Commercial",
    status: "Proposal Sent",
    progress: 15,
    budget: "$185,000",
    sqft: "5,400",
    timeline: "6 months",
    startDate: "Mar 2026"
}, {
    id: 3,
    name: "Lakeside Cabin Retreat",
    type: "Residential",
    status: "Completed",
    progress: 100,
    budget: "$95,000",
    sqft: "1,200",
    timeline: "4 months",
    startDate: "Jun 2025"
}]
  , M_ = {
    "In Progress": "bg-primary/20 text-primary border-primary/30",
    "Proposal Sent": "bg-accent/20 text-accent-foreground border-accent/30",
    Completed: "bg-green-500/20 text-green-400 border-green-500/30"
}
  , j_ = [{
    role: "assistant",
    content: "Hello! I'm your AI project assistant. How can I help with your construction project today?"
}]
  , D_ = () => {
    const [e,t] = g.useState(j_)
      , [n,r] = g.useState("")
      , o = () => {
        if (!n.trim())
            return;
        const s = {
            role: "user",
            content: n
        };
        t(i => [...i, s, {
            role: "assistant",
            content: "Thanks for your message! AI chat integration is coming soon. For now, our team will respond within 24 hours."
        }]),
        r("")
    }
    ;
    return m.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [m.jsx(Pu, {}), m.jsxs("div", {
            className: "container mx-auto px-4 pb-24 pt-24",
            children: [m.jsxs(tn.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mb-8",
                children: [m.jsx("h1", {
                    className: "font-display text-3xl font-bold text-foreground",
                    children: "Client Dashboard"
                }), m.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Manage your projects, proposals, and communications."
                })]
            }), m.jsxs(N_, {
                defaultValue: "projects",
                className: "space-y-6",
                children: [m.jsxs(CC, {
                    className: "bg-secondary",
                    children: [m.jsxs(el, {
                        value: "projects",
                        className: "gap-2",
                        children: [m.jsx(ow, {
                            className: "h-4 w-4"
                        }), " Projects"]
                    }), m.jsxs(el, {
                        value: "proposals",
                        className: "gap-2",
                        children: [m.jsx(_d, {
                            className: "h-4 w-4"
                        }), " Proposals"]
                    }), m.jsxs(el, {
                        value: "chat",
                        className: "gap-2",
                        children: [m.jsx(ck, {
                            className: "h-4 w-4"
                        }), " AI Chat"]
                    })]
                }), m.jsx(tl, {
                    value: "projects",
                    children: m.jsx("div", {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: A_.map( (s, i) => m.jsxs(tn.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * .1
                            },
                            className: "rounded-xl border border-border bg-card p-6 shadow-card",
                            children: [m.jsxs("div", {
                                className: "mb-4 flex items-start justify-between",
                                children: [m.jsx("h3", {
                                    className: "font-display text-lg font-semibold text-foreground",
                                    children: s.name
                                }), m.jsx(tb, {
                                    variant: "outline",
                                    className: M_[s.status],
                                    children: s.status
                                })]
                            }), m.jsxs("div", {
                                className: "mb-4 space-y-2",
                                children: [m.jsxs("div", {
                                    className: "flex items-center justify-between text-sm",
                                    children: [m.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: "Progress"
                                    }), m.jsxs("span", {
                                        className: "font-medium text-foreground",
                                        children: [s.progress, "%"]
                                    })]
                                }), m.jsx(Sp, {
                                    value: s.progress,
                                    className: "h-2"
                                })]
                            }), m.jsxs("div", {
                                className: "grid grid-cols-2 gap-3 text-sm",
                                children: [m.jsxs("div", {
                                    className: "flex items-center gap-2 text-muted-foreground",
                                    children: [m.jsx(rw, {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }), s.budget]
                                }), m.jsxs("div", {
                                    className: "flex items-center gap-2 text-muted-foreground",
                                    children: [m.jsx(Rh, {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }), s.sqft, " sqft"]
                                }), m.jsxs("div", {
                                    className: "flex items-center gap-2 text-muted-foreground",
                                    children: [m.jsx(nw, {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }), s.timeline]
                                }), m.jsxs("div", {
                                    className: "flex items-center gap-2 text-muted-foreground",
                                    children: [m.jsx(ew, {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }), s.startDate]
                                })]
                            })]
                        }, s.id))
                    })
                }), m.jsx(tl, {
                    value: "proposals",
                    children: m.jsx("div", {
                        className: "rounded-xl border border-border bg-card p-8 shadow-card",
                        children: m.jsxs("div", {
                            className: "text-center",
                            children: [m.jsx(_d, {
                                className: "mx-auto mb-4 h-12 w-12 text-muted-foreground"
                            }), m.jsx("h3", {
                                className: "font-display text-xl font-semibold text-foreground",
                                children: "Proposals"
                            }), m.jsx("p", {
                                className: "mt-2 text-muted-foreground",
                                children: "Your project proposals with AI-generated cost estimates and renderings will appear here."
                            })]
                        })
                    })
                }), m.jsx(tl, {
                    value: "chat",
                    children: m.jsxs("div", {
                        className: "flex h-[500px] flex-col rounded-xl border border-border bg-card shadow-card",
                        children: [m.jsxs("div", {
                            className: "border-b border-border px-6 py-4",
                            children: [m.jsx("h3", {
                                className: "font-display text-lg font-semibold text-foreground",
                                children: "AI Project Assistant"
                            }), m.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Ask about materials, costs, timelines, or project status"
                            })]
                        }), m.jsx("div", {
                            className: "flex-1 space-y-4 overflow-y-auto p-6",
                            children: e.map( (s, i) => m.jsx("div", {
                                className: `flex ${s.role === "user" ? "justify-end" : "justify-start"}`,
                                children: m.jsx("div", {
                                    className: `max-w-[80%] rounded-xl px-4 py-3 text-sm ${s.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
                                    children: s.content
                                })
                            }, i))
                        }), m.jsx("div", {
                            className: "border-t border-border p-4",
                            children: m.jsxs("div", {
                                className: "flex gap-2",
                                children: [m.jsx(Gn, {
                                    placeholder: "Ask about your project...",
                                    value: n,
                                    onChange: s => r(s.target.value),
                                    onKeyDown: s => s.key === "Enter" && o()
                                }), m.jsx(qt, {
                                    onClick: o,
                                    size: "icon",
                                    children: m.jsx(fk, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            })
                        })]
                    })
                })]
            })]
        }), m.jsx(ku, {})]
    })
}
  , I_ = () => m.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [m.jsx(Pu, {}), m.jsx("div", {
        className: "pt-16",
        children: m.jsx(eb, {})
    }), m.jsx(ku, {})]
})
  , L_ = () => {
    const e = xs();
    return g.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    m.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: m.jsxs("div", {
            className: "text-center",
            children: [m.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), m.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), m.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , O_ = new PN
  , __ = () => m.jsx(RN, {
    client: O_,
    children: m.jsxs(nN, {
        children: [m.jsx(qk, {}), m.jsx(N2, {}), m.jsx(EA, {
            children: m.jsxs(vA, {
                children: [m.jsx(yo, {
                    path: "/",
                    element: m.jsx(FL, {})
                }), m.jsx(yo, {
                    path: "/intake",
                    element: m.jsx(h_, {})
                }), m.jsx(yo, {
                    path: "/services",
                    element: m.jsx(I_, {})
                }), m.jsx(yo, {
                    path: "/dashboard",
                    element: m.jsx(D_, {})
                }), m.jsx(yo, {
                    path: "*",
                    element: m.jsx(L_, {})
                })]
            })
        })]
    })
});
Cx(document.getElementById("root")).render(m.jsx(__, {}));
