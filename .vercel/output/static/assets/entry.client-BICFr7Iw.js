import {
  r as jd,
  a as ql,
  i as Cd,
  u as yh,
  F as hh,
  R as sh,
  b as mh,
  d as gh,
  c as Sh,
  m as oh,
  s as bh,
  e as zh,
  f as Eh,
  g as Th,
  h as Ah,
  j as Dh,
  k as Mh,
  l as Oh,
  n as Bd,
} from "./chunk-W3HZJLUQ-BHNC9aHS.js";
var wf = { exports: {} },
  be = {},
  Wf = { exports: {} },
  $f = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function Uh() {
  return (
    Yd ||
      ((Yd = 1),
      (function (A) {
        function Sl(E, q) {
          var H = E.length;
          E.push(q);
          l: for (; 0 < H; ) {
            var W = (H - 1) >>> 1,
              ul = E[W];
            if (0 < Ol(ul, q)) (E[W] = q), (E[H] = ul), (H = W);
            else break l;
          }
        }
        function G(E) {
          return E.length === 0 ? null : E[0];
        }
        function m(E) {
          if (E.length === 0) return null;
          var q = E[0],
            H = E.pop();
          if (H !== q) {
            E[0] = H;
            l: for (var W = 0, ul = E.length, Ga = ul >>> 1; W < Ga; ) {
              var da = 2 * (W + 1) - 1,
                St = E[da],
                Z = da + 1,
                Vl = E[Z];
              if (0 > Ol(St, H))
                Z < ul && 0 > Ol(Vl, St)
                  ? ((E[W] = Vl), (E[Z] = H), (W = Z))
                  : ((E[W] = St), (E[da] = H), (W = da));
              else if (Z < ul && 0 > Ol(Vl, H))
                (E[W] = Vl), (E[Z] = H), (W = Z);
              else break l;
            }
          }
          return q;
        }
        function Ol(E, q) {
          var H = E.sortIndex - q.sortIndex;
          return H !== 0 ? H : E.id - q.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var Pl = performance;
          A.unstable_now = function () {
            return Pl.now();
          };
        } else {
          var il = Date,
            ol = il.now();
          A.unstable_now = function () {
            return il.now() - ol;
          };
        }
        var D = [],
          b = [],
          x = 1,
          P = null,
          I = 3,
          bl = !1,
          Il = !1,
          mt = !1,
          Na = typeof setTimeout == "function" ? setTimeout : null,
          Ba = typeof clearTimeout == "function" ? clearTimeout : null,
          lt = typeof setImmediate < "u" ? setImmediate : null;
        function ea(E) {
          for (var q = G(b); q !== null; ) {
            if (q.callback === null) m(b);
            else if (q.startTime <= E)
              m(b), (q.sortIndex = q.expirationTime), Sl(D, q);
            else break;
            q = G(b);
          }
        }
        function zu(E) {
          if (((mt = !1), ea(E), !Il))
            if (G(D) !== null) (Il = !0), fa();
            else {
              var q = G(b);
              q !== null && ia(zu, q.startTime - E);
            }
        }
        var na = !1,
          tt = -1,
          Ee = 5,
          Ya = -1;
        function R() {
          return !(A.unstable_now() - Ya < Ee);
        }
        function C() {
          if (na) {
            var E = A.unstable_now();
            Ya = E;
            var q = !0;
            try {
              l: {
                (Il = !1), mt && ((mt = !1), Ba(tt), (tt = -1)), (bl = !0);
                var H = I;
                try {
                  t: {
                    for (
                      ea(E), P = G(D);
                      P !== null && !(P.expirationTime > E && R());

                    ) {
                      var W = P.callback;
                      if (typeof W == "function") {
                        (P.callback = null), (I = P.priorityLevel);
                        var ul = W(P.expirationTime <= E);
                        if (((E = A.unstable_now()), typeof ul == "function")) {
                          (P.callback = ul), ea(E), (q = !0);
                          break t;
                        }
                        P === G(D) && m(D), ea(E);
                      } else m(D);
                      P = G(D);
                    }
                    if (P !== null) q = !0;
                    else {
                      var Ga = G(b);
                      Ga !== null && ia(zu, Ga.startTime - E), (q = !1);
                    }
                  }
                  break l;
                } finally {
                  (P = null), (I = H), (bl = !1);
                }
                q = void 0;
              }
            } finally {
              q ? gt() : (na = !1);
            }
          }
        }
        var gt;
        if (typeof lt == "function")
          gt = function () {
            lt(C);
          };
        else if (typeof MessageChannel < "u") {
          var Eu = new MessageChannel(),
            ca = Eu.port2;
          (Eu.port1.onmessage = C),
            (gt = function () {
              ca.postMessage(null);
            });
        } else
          gt = function () {
            Na(C, 0);
          };
        function fa() {
          na || ((na = !0), gt());
        }
        function ia(E, q) {
          tt = Na(function () {
            E(A.unstable_now());
          }, q);
        }
        (A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (A.unstable_continueExecution = function () {
            Il || bl || ((Il = !0), fa());
          }),
          (A.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ee = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (A.unstable_getFirstCallbackNode = function () {
            return G(D);
          }),
          (A.unstable_next = function (E) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = I;
            }
            var H = I;
            I = q;
            try {
              return E();
            } finally {
              I = H;
            }
          }),
          (A.unstable_pauseExecution = function () {}),
          (A.unstable_requestPaint = function () {}),
          (A.unstable_runWithPriority = function (E, q) {
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
            var H = I;
            I = E;
            try {
              return q();
            } finally {
              I = H;
            }
          }),
          (A.unstable_scheduleCallback = function (E, q, H) {
            var W = A.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? W + H : W))
                : (H = W),
              E)
            ) {
              case 1:
                var ul = -1;
                break;
              case 2:
                ul = 250;
                break;
              case 5:
                ul = 1073741823;
                break;
              case 4:
                ul = 1e4;
                break;
              default:
                ul = 5e3;
            }
            return (
              (ul = H + ul),
              (E = {
                id: x++,
                callback: q,
                priorityLevel: E,
                startTime: H,
                expirationTime: ul,
                sortIndex: -1,
              }),
              H > W
                ? ((E.sortIndex = H),
                  Sl(b, E),
                  G(D) === null &&
                    E === G(b) &&
                    (mt ? (Ba(tt), (tt = -1)) : (mt = !0), ia(zu, H - W)))
                : ((E.sortIndex = ul), Sl(D, E), Il || bl || ((Il = !0), fa())),
              E
            );
          }),
          (A.unstable_shouldYield = R),
          (A.unstable_wrapCallback = function (E) {
            var q = I;
            return function () {
              var H = I;
              I = q;
              try {
                return E.apply(this, arguments);
              } finally {
                I = H;
              }
            };
          });
      })($f)),
    $f
  );
}
var Gd;
function _h() {
  return Gd || ((Gd = 1), (Wf.exports = Uh())), Wf.exports;
}
var kf = { exports: {} },
  Ml = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd;
function Rh() {
  if (Xd) return Ml;
  Xd = 1;
  var A = jd();
  function Sl(D) {
    var b = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        b += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G() {}
  var m = {
      d: {
        f: G,
        r: function () {
          throw Error(Sl(522));
        },
        D: G,
        C: G,
        L: G,
        m: G,
        X: G,
        S: G,
        M: G,
      },
      p: 0,
      findDOMNode: null,
    },
    Ol = Symbol.for("react.portal");
  function Pl(D, b, x) {
    var P =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ol,
      key: P == null ? null : "" + P,
      children: D,
      containerInfo: b,
      implementation: x,
    };
  }
  var il = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ol(D, b) {
    if (D === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Ml.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Ml.createPortal = function (D, b) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(Sl(299));
      return Pl(D, b, null, x);
    }),
    (Ml.flushSync = function (D) {
      var b = il.T,
        x = m.p;
      try {
        if (((il.T = null), (m.p = 2), D)) return D();
      } finally {
        (il.T = b), (m.p = x), m.d.f();
      }
    }),
    (Ml.preconnect = function (D, b) {
      typeof D == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        m.d.C(D, b));
    }),
    (Ml.prefetchDNS = function (D) {
      typeof D == "string" && m.d.D(D);
    }),
    (Ml.preinit = function (D, b) {
      if (typeof D == "string" && b && typeof b.as == "string") {
        var x = b.as,
          P = ol(x, b.crossOrigin),
          I = typeof b.integrity == "string" ? b.integrity : void 0,
          bl = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        x === "style"
          ? m.d.S(D, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: P,
              integrity: I,
              fetchPriority: bl,
            })
          : x === "script" &&
            m.d.X(D, {
              crossOrigin: P,
              integrity: I,
              fetchPriority: bl,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Ml.preinitModule = function (D, b) {
      if (typeof D == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var x = ol(b.as, b.crossOrigin);
            m.d.M(D, {
              crossOrigin: x,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && m.d.M(D);
    }),
    (Ml.preload = function (D, b) {
      if (
        typeof D == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var x = b.as,
          P = ol(x, b.crossOrigin);
        m.d.L(D, x, {
          crossOrigin: P,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Ml.preloadModule = function (D, b) {
      if (typeof D == "string")
        if (b) {
          var x = ol(b.as, b.crossOrigin);
          m.d.m(D, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: x,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else m.d.m(D);
    }),
    (Ml.requestFormReset = function (D) {
      m.d.r(D);
    }),
    (Ml.unstable_batchedUpdates = function (D, b) {
      return D(b);
    }),
    (Ml.useFormState = function (D, b, x) {
      return il.H.useFormState(D, b, x);
    }),
    (Ml.useFormStatus = function () {
      return il.H.useHostTransitionStatus();
    }),
    (Ml.version = "19.0.0"),
    Ml
  );
}
var Qd;
function xd() {
  if (Qd) return kf.exports;
  Qd = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (Sl) {
        console.error(Sl);
      }
  }
  return A(), (kf.exports = Rh()), kf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function Hh() {
  if (Zd) return be;
  Zd = 1;
  var A = _h(),
    Sl = jd(),
    G = xd();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Ol(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  var Pl = Symbol.for("react.element"),
    il = Symbol.for("react.transitional.element"),
    ol = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    P = Symbol.for("react.provider"),
    I = Symbol.for("react.consumer"),
    bl = Symbol.for("react.context"),
    Il = Symbol.for("react.forward_ref"),
    mt = Symbol.for("react.suspense"),
    Na = Symbol.for("react.suspense_list"),
    Ba = Symbol.for("react.memo"),
    lt = Symbol.for("react.lazy"),
    ea = Symbol.for("react.offscreen"),
    zu = Symbol.for("react.memo_cache_sentinel"),
    na = Symbol.iterator;
  function tt(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (na && l[na]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ee = Symbol.for("react.client.reference");
  function Ya(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ee ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case D:
        return "Fragment";
      case ol:
        return "Portal";
      case x:
        return "Profiler";
      case b:
        return "StrictMode";
      case mt:
        return "Suspense";
      case Na:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case bl:
          return (l.displayName || "Context") + ".Provider";
        case I:
          return (l._context.displayName || "Context") + ".Consumer";
        case Il:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Ba:
          return (
            (t = l.displayName || null), t !== null ? t : Ya(l.type) || "Memo"
          );
        case lt:
          (t = l._payload), (l = l._init);
          try {
            return Ya(l(t));
          } catch {}
      }
    return null;
  }
  var R = Sl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = Object.assign,
    gt,
    Eu;
  function ca(l) {
    if (gt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (gt = (t && t[1]) || ""),
          (Eu =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      gt +
      l +
      Eu
    );
  }
  var fa = !1;
  function ia(l, t) {
    if (!l || fa) return "";
    fa = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var s = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  s = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                s = g;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (g) {
            if (g && s && typeof g.stack == "string") return [g.stack, s.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          v = f.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === i.length || e === v.length)
          for (
            u = i.length - 1, e = v.length - 1;
            1 <= u && 0 <= e && i[u] !== v[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== v[e])) {
                  var S =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (fa = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? ca(a) : "";
  }
  function E(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ca(l.type);
      case 16:
        return ca("Lazy");
      case 13:
        return ca("Suspense");
      case 19:
        return ca("SuspenseList");
      case 0:
      case 15:
        return (l = ia(l.type, !1)), l;
      case 11:
        return (l = ia(l.type.render, !1)), l;
      case 1:
        return (l = ia(l.type, !0)), l;
      default:
        return "";
    }
  }
  function q(l) {
    try {
      var t = "";
      do (t += E(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function H(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), t.flags & 4098 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function W(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ul(l) {
    if (H(l) !== l) throw Error(m(188));
  }
  function Ga(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = H(l)), t === null)) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return ul(e), l;
          if (n === u) return ul(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === a) {
            (c = !0), (a = e), (u = n);
            break;
          }
          if (f === u) {
            (c = !0), (u = e), (a = n);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              (c = !0), (a = n), (u = e);
              break;
            }
            if (f === u) {
              (c = !0), (u = n), (a = e);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(m(189));
        }
      }
      if (a.alternate !== u) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function da(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = da(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var St = Array.isArray,
    Z = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Vl = { pending: !1, data: null, method: null, action: null },
    Xn = [],
    Xa = -1;
  function ct(l) {
    return { current: l };
  }
  function yl(l) {
    0 > Xa || ((l.current = Xn[Xa]), (Xn[Xa] = null), Xa--);
  }
  function $(l, t) {
    Xa++, (Xn[Xa] = l.current), (l.current = t);
  }
  var ft = ct(null),
    Tu = ct(null),
    Yt = ct(null),
    Te = ct(null);
  function Ae(l, t) {
    switch (($(Yt, t), $(Tu, l), $(ft, null), (l = t.nodeType), l)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? id(t) : 0;
        break;
      default:
        if (
          ((l = l === 8 ? t.parentNode : t),
          (t = l.tagName),
          (l = l.namespaceURI))
        )
          (l = id(l)), (t = dd(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    yl(ft), $(ft, t);
  }
  function Qa() {
    yl(ft), yl(Tu), yl(Yt);
  }
  function Qn(l) {
    l.memoizedState !== null && $(Te, l);
    var t = ft.current,
      a = dd(t, l.type);
    t !== a && ($(Tu, l), $(ft, a));
  }
  function De(l) {
    Tu.current === l && (yl(ft), yl(Tu)),
      Te.current === l && (yl(Te), (se._currentValue = Vl));
  }
  var Zn = Object.prototype.hasOwnProperty,
    Vn = A.unstable_scheduleCallback,
    jn = A.unstable_cancelCallback,
    Ld = A.unstable_shouldYield,
    Kd = A.unstable_requestPaint,
    it = A.unstable_now,
    pd = A.unstable_getCurrentPriorityLevel,
    Ff = A.unstable_ImmediatePriority,
    Pf = A.unstable_UserBlockingPriority,
    Me = A.unstable_NormalPriority,
    Jd = A.unstable_LowPriority,
    If = A.unstable_IdlePriority,
    wd = A.log,
    Wd = A.unstable_setDisableYieldValue,
    Au = null,
    Nl = null;
  function $d(l) {
    if (Nl && typeof Nl.onCommitFiberRoot == "function")
      try {
        Nl.onCommitFiberRoot(Au, l, void 0, (l.current.flags & 128) === 128);
      } catch {}
  }
  function Gt(l) {
    if (
      (typeof wd == "function" && Wd(l),
      Nl && typeof Nl.setStrictMode == "function")
    )
      try {
        Nl.setStrictMode(Au, l);
      } catch {}
  }
  var Bl = Math.clz32 ? Math.clz32 : Pd,
    kd = Math.log,
    Fd = Math.LN2;
  function Pd(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((kd(l) / Fd) | 0)) | 0;
  }
  var Oe = 128,
    Ue = 4194304;
  function va(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
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
        return l & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function _e(l, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      e = l.suspendedLanes,
      n = l.pingedLanes,
      c = l.warmLanes;
    l = l.finishedLanes !== 0;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~e),
          a !== 0
            ? (u = va(a))
            : ((n &= f),
              n !== 0
                ? (u = va(n))
                : l || ((c = f & ~c), c !== 0 && (u = va(c)))))
        : ((f = a & ~e),
          f !== 0
            ? (u = va(f))
            : n !== 0
              ? (u = va(n))
              : l || ((c = a & ~c), c !== 0 && (u = va(c)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            !(t & e) &&
            ((e = u & -u),
            (c = t & -t),
            e >= c || (e === 32 && (c & 4194176) !== 0))
          ? t
          : u
    );
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Id(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function li() {
    var l = Oe;
    return (Oe <<= 1), !(Oe & 4194176) && (Oe = 128), l;
  }
  function ti() {
    var l = Ue;
    return (Ue <<= 1), !(Ue & 62914560) && (Ue = 4194304), l;
  }
  function Cn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Mu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function lv(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      i = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var S = 31 - Bl(a),
        z = 1 << S;
      (f[S] = 0), (i[S] = -1);
      var s = v[S];
      if (s !== null)
        for (v[S] = null, S = 0; S < s.length; S++) {
          var g = s[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && ai(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function ai(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - Bl(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194218));
  }
  function ui(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Bl(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function ei(l) {
    return (
      (l &= -l), 2 < l ? (8 < l ? (l & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function ni() {
    var l = Z.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : _d(l.type));
  }
  function tv(l, t) {
    var a = Z.p;
    try {
      return (Z.p = l), t();
    } finally {
      Z.p = a;
    }
  }
  var Xt = Math.random().toString(36).slice(2),
    Al = "__reactFiber$" + Xt,
    Rl = "__reactProps$" + Xt,
    Za = "__reactContainer$" + Xt,
    xn = "__reactEvents$" + Xt,
    av = "__reactListeners$" + Xt,
    uv = "__reactHandles$" + Xt,
    ci = "__reactResources$" + Xt,
    Ou = "__reactMarker$" + Xt;
  function Ln(l) {
    delete l[Al], delete l[Rl], delete l[xn], delete l[av], delete l[uv];
  }
  function ya(l) {
    var t = l[Al];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Za] || a[Al])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = hd(l); l !== null; ) {
            if ((a = l[Al])) return a;
            l = hd(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Va(l) {
    if ((l = l[Al] || l[Za])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Uu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function ja(l) {
    var t = l[ci];
    return (
      t ||
        (t = l[ci] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function hl(l) {
    l[Ou] = !0;
  }
  var fi = new Set(),
    ii = {};
  function ha(l, t) {
    Ca(l, t), Ca(l + "Capture", t);
  }
  function Ca(l, t) {
    for (ii[l] = t, l = 0; l < t.length; l++) fi.add(t[l]);
  }
  var ot = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ev = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    di = {},
    vi = {};
  function nv(l) {
    return Zn.call(vi, l)
      ? !0
      : Zn.call(di, l)
        ? !1
        : ev.test(l)
          ? (vi[l] = !0)
          : ((di[l] = !0), !1);
  }
  function Re(l, t, a) {
    if (nv(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function He(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function bt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function jl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function yi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function cv(l) {
    var t = yi(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            (u = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (c) {
            u = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function re(l) {
    l._valueTracker || (l._valueTracker = cv(l));
  }
  function hi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = yi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function qe(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var fv = /[\n"\\]/g;
  function Cl(l) {
    return l.replace(fv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Kn(l, t, a, u, e, n, c, f) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + jl(t))
          : l.value !== "" + jl(t) && (l.value = "" + jl(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? pn(l, c, jl(t))
        : a != null
          ? pn(l, c, jl(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + jl(f))
        : l.removeAttribute("name");
  }
  function si(l, t, a, u, e, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + jl(a) : ""),
        (t = t != null ? "" + jl(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = f ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function pn(l, t, a) {
    (t === "number" && qe(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function xa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + jl(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mi(l, t, a) {
    if (
      t != null &&
      ((t = "" + jl(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + jl(a) : "";
  }
  function gi(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(m(92));
        if (St(u)) {
          if (1 < u.length) throw Error(m(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = jl(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function La(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var iv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Si(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || iv.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function oi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Si(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Si(l, n, t[n]);
  }
  function Jn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var dv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    vv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return vv.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var wn = null;
  function Wn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Ka = null,
    pa = null;
  function bi(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Rl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Kn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Cl("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Rl] || null;
                if (!e) throw Error(m(90));
                Kn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && hi(u);
          }
          break l;
        case "textarea":
          mi(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && xa(l, !!a.multiple, t, !1);
      }
    }
  }
  var $n = !1;
  function zi(l, t, a) {
    if ($n) return l(t, a);
    $n = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        (($n = !1),
        (Ka !== null || pa !== null) &&
          (Sn(), Ka && ((t = Ka), (l = pa), (pa = Ka = null), bi(t), l)))
      )
        for (t = 0; t < l.length; t++) bi(l[t]);
    }
  }
  function _u(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Rl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(m(231, t, typeof a));
    return a;
  }
  var kn = !1;
  if (ot)
    try {
      var Ru = {};
      Object.defineProperty(Ru, "passive", {
        get: function () {
          kn = !0;
        },
      }),
        window.addEventListener("test", Ru, Ru),
        window.removeEventListener("test", Ru, Ru);
    } catch {
      kn = !1;
    }
  var Qt = null,
    Fn = null,
    Be = null;
  function Ei() {
    if (Be) return Be;
    var l,
      t = Fn,
      a = t.length,
      u,
      e = "value" in Qt ? Qt.value : Qt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (Be = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Ye(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ge() {
    return !0;
  }
  function Ti() {
    return !1;
  }
  function Hl(l) {
    function t(a, u, e, n, c) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ge
          : Ti),
        (this.isPropagationStopped = Ti),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ge));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ge));
        },
        persist: function () {},
        isPersistent: Ge,
      }),
      t
    );
  }
  var sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xe = Hl(sa),
    Hu = C({}, sa, { view: 0, detail: 0 }),
    yv = Hl(Hu),
    Pn,
    In,
    ru,
    Qe = C({}, Hu, {
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
      getModifierState: tc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== ru &&
              (ru && l.type === "mousemove"
                ? ((Pn = l.screenX - ru.screenX), (In = l.screenY - ru.screenY))
                : (In = Pn = 0),
              (ru = l)),
            Pn);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : In;
      },
    }),
    Ai = Hl(Qe),
    hv = C({}, Qe, { dataTransfer: 0 }),
    sv = Hl(hv),
    mv = C({}, Hu, { relatedTarget: 0 }),
    lc = Hl(mv),
    gv = C({}, sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sv = Hl(gv),
    ov = C({}, sa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    bv = Hl(ov),
    zv = C({}, sa, { data: 0 }),
    Di = Hl(zv),
    Ev = {
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
      MozPrintableKey: "Unidentified",
    },
    Tv = {
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
      224: "Meta",
    },
    Av = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Dv(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Av[l])
        ? !!t[l]
        : !1;
  }
  function tc() {
    return Dv;
  }
  var Mv = C({}, Hu, {
      key: function (l) {
        if (l.key) {
          var t = Ev[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ye(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? Tv[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tc,
      charCode: function (l) {
        return l.type === "keypress" ? Ye(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ye(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    Ov = Hl(Mv),
    Uv = C({}, Qe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Mi = Hl(Uv),
    _v = C({}, Hu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tc,
    }),
    Rv = Hl(_v),
    Hv = C({}, sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rv = Hl(Hv),
    qv = C({}, Qe, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nv = Hl(qv),
    Bv = C({}, sa, { newState: 0, oldState: 0 }),
    Yv = Hl(Bv),
    Gv = [9, 13, 27, 32],
    ac = ot && "CompositionEvent" in window,
    qu = null;
  ot && "documentMode" in document && (qu = document.documentMode);
  var Xv = ot && "TextEvent" in window && !qu,
    Oi = ot && (!ac || (qu && 8 < qu && 11 >= qu)),
    Ui = " ",
    _i = !1;
  function Ri(l, t) {
    switch (l) {
      case "keyup":
        return Gv.indexOf(t.keyCode) !== -1;
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
  function Hi(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ja = !1;
  function Qv(l, t) {
    switch (l) {
      case "compositionend":
        return Hi(t);
      case "keypress":
        return t.which !== 32 ? null : ((_i = !0), Ui);
      case "textInput":
        return (l = t.data), l === Ui && _i ? null : l;
      default:
        return null;
    }
  }
  function Zv(l, t) {
    if (Ja)
      return l === "compositionend" || (!ac && Ri(l, t))
        ? ((l = Ei()), (Be = Fn = Qt = null), (Ja = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Oi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vv = {
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
    week: !0,
  };
  function ri(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Vv[l.type] : t === "textarea";
  }
  function qi(l, t, a, u) {
    Ka ? (pa ? pa.push(u) : (pa = [u])) : (Ka = u),
      (t = Tn(t, "onChange")),
      0 < t.length &&
        ((a = new Xe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var Nu = null,
    Bu = null;
  function jv(l) {
    ud(l, 0);
  }
  function Ze(l) {
    var t = Uu(l);
    if (hi(t)) return l;
  }
  function Ni(l, t) {
    if (l === "change") return t;
  }
  var Bi = !1;
  if (ot) {
    var uc;
    if (ot) {
      var ec = "oninput" in document;
      if (!ec) {
        var Yi = document.createElement("div");
        Yi.setAttribute("oninput", "return;"),
          (ec = typeof Yi.oninput == "function");
      }
      uc = ec;
    } else uc = !1;
    Bi = uc && (!document.documentMode || 9 < document.documentMode);
  }
  function Gi() {
    Nu && (Nu.detachEvent("onpropertychange", Xi), (Bu = Nu = null));
  }
  function Xi(l) {
    if (l.propertyName === "value" && Ze(Bu)) {
      var t = [];
      qi(t, Bu, l, Wn(l)), zi(jv, t);
    }
  }
  function Cv(l, t, a) {
    l === "focusin"
      ? (Gi(), (Nu = t), (Bu = a), Nu.attachEvent("onpropertychange", Xi))
      : l === "focusout" && Gi();
  }
  function xv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ze(Bu);
  }
  function Lv(l, t) {
    if (l === "click") return Ze(t);
  }
  function Kv(l, t) {
    if (l === "input" || l === "change") return Ze(t);
  }
  function pv(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Yl = typeof Object.is == "function" ? Object.is : pv;
  function Yu(l, t) {
    if (Yl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Zn.call(t, e) || !Yl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Qi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Zi(l, t) {
    var a = Qi(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Qi(a);
    }
  }
  function Vi(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Vi(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ji(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = qe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = qe(l.document);
    }
    return t;
  }
  function nc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  function Jv(l, t) {
    var a = ji(t);
    t = l.focusedElem;
    var u = l.selectionRange;
    if (
      a !== t &&
      t &&
      t.ownerDocument &&
      Vi(t.ownerDocument.documentElement, t)
    ) {
      if (u !== null && nc(t)) {
        if (
          ((l = u.start),
          (a = u.end),
          a === void 0 && (a = l),
          "selectionStart" in t)
        )
          (t.selectionStart = l),
            (t.selectionEnd = Math.min(a, t.value.length));
        else if (
          ((a = ((l = t.ownerDocument || document) && l.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var e = t.textContent.length,
            n = Math.min(u.start, e);
          (u = u.end === void 0 ? n : Math.min(u.end, e)),
            !a.extend && n > u && ((e = u), (u = n), (n = e)),
            (e = Zi(t, n));
          var c = Zi(t, u);
          e &&
            c &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== e.node ||
              a.anchorOffset !== e.offset ||
              a.focusNode !== c.node ||
              a.focusOffset !== c.offset) &&
            ((l = l.createRange()),
            l.setStart(e.node, e.offset),
            a.removeAllRanges(),
            n > u
              ? (a.addRange(l), a.extend(c.node, c.offset))
              : (l.setEnd(c.node, c.offset), a.addRange(l)));
        }
      }
      for (l = [], a = t; (a = a.parentNode); )
        a.nodeType === 1 &&
          l.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < l.length; t++)
        (a = l[t]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var wv = ot && "documentMode" in document && 11 >= document.documentMode,
    wa = null,
    cc = null,
    Gu = null,
    fc = !1;
  function Ci(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fc ||
      wa == null ||
      wa !== qe(u) ||
      ((u = wa),
      "selectionStart" in u && nc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Gu && Yu(Gu, u)) ||
        ((Gu = u),
        (u = Tn(cc, "onSelect")),
        0 < u.length &&
          ((t = new Xe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = wa))));
  }
  function ma(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Wa = {
      animationend: ma("Animation", "AnimationEnd"),
      animationiteration: ma("Animation", "AnimationIteration"),
      animationstart: ma("Animation", "AnimationStart"),
      transitionrun: ma("Transition", "TransitionRun"),
      transitionstart: ma("Transition", "TransitionStart"),
      transitioncancel: ma("Transition", "TransitionCancel"),
      transitionend: ma("Transition", "TransitionEnd"),
    },
    ic = {},
    xi = {};
  ot &&
    ((xi = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Wa.animationend.animation,
      delete Wa.animationiteration.animation,
      delete Wa.animationstart.animation),
    "TransitionEvent" in window || delete Wa.transitionend.transition);
  function ga(l) {
    if (ic[l]) return ic[l];
    if (!Wa[l]) return l;
    var t = Wa[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in xi) return (ic[l] = t[a]);
    return l;
  }
  var Li = ga("animationend"),
    Ki = ga("animationiteration"),
    pi = ga("animationstart"),
    Wv = ga("transitionrun"),
    $v = ga("transitionstart"),
    kv = ga("transitioncancel"),
    Ji = ga("transitionend"),
    wi = new Map(),
    Wi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function at(l, t) {
    wi.set(l, t), ha(t, [l]);
  }
  var xl = [],
    $a = 0,
    dc = 0;
  function Ve() {
    for (var l = $a, t = (dc = $a = 0); t < l; ) {
      var a = xl[t];
      xl[t++] = null;
      var u = xl[t];
      xl[t++] = null;
      var e = xl[t];
      xl[t++] = null;
      var n = xl[t];
      if (((xl[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e);
      }
      n !== 0 && $i(a, e, n);
    }
  }
  function je(l, t, a, u) {
    (xl[$a++] = l),
      (xl[$a++] = t),
      (xl[$a++] = a),
      (xl[$a++] = u),
      (dc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function vc(l, t, a, u) {
    return je(l, t, a, u), Ce(l);
  }
  function Zt(l, t) {
    return je(l, null, null, t), Ce(l);
  }
  function $i(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    e &&
      t !== null &&
      l.tag === 3 &&
      ((n = l.stateNode),
      (e = 31 - Bl(a)),
      (n = n.hiddenUpdates),
      (l = n[e]),
      l === null ? (n[e] = [t]) : l.push(t),
      (t.lane = a | 536870912));
  }
  function Ce(l) {
    if (50 < ce) throw ((ce = 0), (of = null), Error(m(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ka = {},
    ki = new WeakMap();
  function Ll(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ki.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: q(t) }), ki.set(l, t), t);
    }
    return { value: l, source: t, stack: q(t) };
  }
  var Fa = [],
    Pa = 0,
    xe = null,
    Le = 0,
    Kl = [],
    pl = 0,
    Sa = null,
    zt = 1,
    Et = "";
  function oa(l, t) {
    (Fa[Pa++] = Le), (Fa[Pa++] = xe), (xe = l), (Le = t);
  }
  function Fi(l, t, a) {
    (Kl[pl++] = zt), (Kl[pl++] = Et), (Kl[pl++] = Sa), (Sa = l);
    var u = zt;
    l = Et;
    var e = 32 - Bl(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - Bl(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (zt = (1 << (32 - Bl(t) + e)) | (a << e) | u),
        (Et = n + l);
    } else (zt = (1 << n) | (a << e) | u), (Et = l);
  }
  function yc(l) {
    l.return !== null && (oa(l, 1), Fi(l, 1, 0));
  }
  function hc(l) {
    for (; l === xe; )
      (xe = Fa[--Pa]), (Fa[Pa] = null), (Le = Fa[--Pa]), (Fa[Pa] = null);
    for (; l === Sa; )
      (Sa = Kl[--pl]),
        (Kl[pl] = null),
        (Et = Kl[--pl]),
        (Kl[pl] = null),
        (zt = Kl[--pl]),
        (Kl[pl] = null);
  }
  var Ul = null,
    zl = null,
    V = !1,
    ut = null,
    dt = !1,
    sc = Error(m(519));
  function ba(l) {
    var t = Error(m(418, ""));
    throw (Zu(Ll(t, l)), sc);
  }
  function Pi(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Al] = l), (t[Rl] = u), a)) {
      case "dialog":
        X("cancel", t), X("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        X("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ie.length; a++) X(ie[a], t);
        break;
      case "source":
        X("error", t);
        break;
      case "img":
      case "image":
      case "link":
        X("error", t), X("load", t);
        break;
      case "details":
        X("toggle", t);
        break;
      case "input":
        X("invalid", t),
          si(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          re(t);
        break;
      case "select":
        X("invalid", t);
        break;
      case "textarea":
        X("invalid", t), gi(t, u.value, u.defaultValue, u.children), re(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      fd(t.textContent, a)
        ? (u.popover != null && (X("beforetoggle", t), X("toggle", t)),
          u.onScroll != null && X("scroll", t),
          u.onScrollEnd != null && X("scrollend", t),
          u.onClick != null && (t.onclick = An),
          (t = !0))
        : (t = !1),
      t || ba(l);
  }
  function Ii(l) {
    for (Ul = l.return; Ul; )
      switch (Ul.tag) {
        case 3:
        case 27:
          dt = !0;
          return;
        case 5:
        case 13:
          dt = !1;
          return;
        default:
          Ul = Ul.return;
      }
  }
  function Xu(l) {
    if (l !== Ul) return !1;
    if (!V) return Ii(l), (V = !0), !1;
    var t = !1,
      a;
    if (
      ((a = l.tag !== 3 && l.tag !== 27) &&
        ((a = l.tag === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Yf(l.type, l.memoizedProps))),
        (a = !a)),
      a && (t = !0),
      t && zl && ba(l),
      Ii(l),
      l.tag === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                zl = nt(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        zl = null;
      }
    } else zl = Ul ? nt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qu() {
    (zl = Ul = null), (V = !1);
  }
  function Zu(l) {
    ut === null ? (ut = [l]) : ut.push(l);
  }
  var Vu = Error(m(460)),
    l0 = Error(m(474)),
    mc = { then: function () {} };
  function t0(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Ke() {}
  function a0(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ke, Ke), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), l === Vu ? Error(m(483)) : l);
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (((l = J), l !== null && 100 < l.shellSuspendCounter))
            throw Error(m(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), l === Vu ? Error(m(483)) : l);
        }
        throw ((ju = t), Vu);
    }
  }
  var ju = null;
  function u0() {
    if (ju === null) throw Error(m(459));
    var l = ju;
    return (ju = null), l;
  }
  var Ia = null,
    Cu = 0;
  function pe(l) {
    var t = Cu;
    return (Cu += 1), Ia === null && (Ia = []), a0(Ia, l, t);
  }
  function xu(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function Je(l, t) {
    throw t.$$typeof === Pl
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          m(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function e0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function n0(l) {
    function t(y, d) {
      if (l) {
        var h = y.deletions;
        h === null ? ((y.deletions = [d]), (y.flags |= 16)) : h.push(d);
      }
    }
    function a(y, d) {
      if (!l) return null;
      for (; d !== null; ) t(y, d), (d = d.sibling);
      return null;
    }
    function u(y) {
      for (var d = new Map(); y !== null; )
        y.key !== null ? d.set(y.key, y) : d.set(y.index, y), (y = y.sibling);
      return d;
    }
    function e(y, d) {
      return (y = kt(y, d)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, d, h) {
      return (
        (y.index = h),
        l
          ? ((h = y.alternate),
            h !== null
              ? ((h = h.index), h < d ? ((y.flags |= 33554434), d) : h)
              : ((y.flags |= 33554434), d))
          : ((y.flags |= 1048576), d)
      );
    }
    function c(y) {
      return l && y.alternate === null && (y.flags |= 33554434), y;
    }
    function f(y, d, h, o) {
      return d === null || d.tag !== 6
        ? ((d = df(h, y.mode, o)), (d.return = y), d)
        : ((d = e(d, h)), (d.return = y), d);
    }
    function i(y, d, h, o) {
      var T = h.type;
      return T === D
        ? S(y, d, h.props.children, o, h.key)
        : d !== null &&
            (d.elementType === T ||
              (typeof T == "object" &&
                T !== null &&
                T.$$typeof === lt &&
                e0(T) === d.type))
          ? ((d = e(d, h.props)), xu(d, h), (d.return = y), d)
          : ((d = yn(h.type, h.key, h.props, null, y.mode, o)),
            xu(d, h),
            (d.return = y),
            d);
    }
    function v(y, d, h, o) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== h.containerInfo ||
        d.stateNode.implementation !== h.implementation
        ? ((d = vf(h, y.mode, o)), (d.return = y), d)
        : ((d = e(d, h.children || [])), (d.return = y), d);
    }
    function S(y, d, h, o, T) {
      return d === null || d.tag !== 7
        ? ((d = Ra(h, y.mode, o, T)), (d.return = y), d)
        : ((d = e(d, h)), (d.return = y), d);
    }
    function z(y, d, h) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = df("" + d, y.mode, h)), (d.return = y), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case il:
            return (
              (h = yn(d.type, d.key, d.props, null, y.mode, h)),
              xu(h, d),
              (h.return = y),
              h
            );
          case ol:
            return (d = vf(d, y.mode, h)), (d.return = y), d;
          case lt:
            var o = d._init;
            return (d = o(d._payload)), z(y, d, h);
        }
        if (St(d) || tt(d))
          return (d = Ra(d, y.mode, h, null)), (d.return = y), d;
        if (typeof d.then == "function") return z(y, pe(d), h);
        if (d.$$typeof === bl) return z(y, fn(y, d), h);
        Je(y, d);
      }
      return null;
    }
    function s(y, d, h, o) {
      var T = d !== null ? d.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return T !== null ? null : f(y, d, "" + h, o);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case il:
            return h.key === T ? i(y, d, h, o) : null;
          case ol:
            return h.key === T ? v(y, d, h, o) : null;
          case lt:
            return (T = h._init), (h = T(h._payload)), s(y, d, h, o);
        }
        if (St(h) || tt(h)) return T !== null ? null : S(y, d, h, o, null);
        if (typeof h.then == "function") return s(y, d, pe(h), o);
        if (h.$$typeof === bl) return s(y, d, fn(y, h), o);
        Je(y, h);
      }
      return null;
    }
    function g(y, d, h, o, T) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (y = y.get(h) || null), f(d, y, "" + o, T);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case il:
            return (
              (y = y.get(o.key === null ? h : o.key) || null), i(d, y, o, T)
            );
          case ol:
            return (
              (y = y.get(o.key === null ? h : o.key) || null), v(d, y, o, T)
            );
          case lt:
            var B = o._init;
            return (o = B(o._payload)), g(y, d, h, o, T);
        }
        if (St(o) || tt(o)) return (y = y.get(h) || null), S(d, y, o, T, null);
        if (typeof o.then == "function") return g(y, d, h, pe(o), T);
        if (o.$$typeof === bl) return g(y, d, h, fn(d, o), T);
        Je(d, o);
      }
      return null;
    }
    function M(y, d, h, o) {
      for (
        var T = null, B = null, O = d, U = (d = 0), gl = null;
        O !== null && U < h.length;
        U++
      ) {
        O.index > U ? ((gl = O), (O = null)) : (gl = O.sibling);
        var j = s(y, O, h[U], o);
        if (j === null) {
          O === null && (O = gl);
          break;
        }
        l && O && j.alternate === null && t(y, O),
          (d = n(j, d, U)),
          B === null ? (T = j) : (B.sibling = j),
          (B = j),
          (O = gl);
      }
      if (U === h.length) return a(y, O), V && oa(y, U), T;
      if (O === null) {
        for (; U < h.length; U++)
          (O = z(y, h[U], o)),
            O !== null &&
              ((d = n(O, d, U)),
              B === null ? (T = O) : (B.sibling = O),
              (B = O));
        return V && oa(y, U), T;
      }
      for (O = u(O); U < h.length; U++)
        (gl = g(O, y, U, h[U], o)),
          gl !== null &&
            (l &&
              gl.alternate !== null &&
              O.delete(gl.key === null ? U : gl.key),
            (d = n(gl, d, U)),
            B === null ? (T = gl) : (B.sibling = gl),
            (B = gl));
      return (
        l &&
          O.forEach(function (ua) {
            return t(y, ua);
          }),
        V && oa(y, U),
        T
      );
    }
    function r(y, d, h, o) {
      if (h == null) throw Error(m(151));
      for (
        var T = null, B = null, O = d, U = (d = 0), gl = null, j = h.next();
        O !== null && !j.done;
        U++, j = h.next()
      ) {
        O.index > U ? ((gl = O), (O = null)) : (gl = O.sibling);
        var ua = s(y, O, j.value, o);
        if (ua === null) {
          O === null && (O = gl);
          break;
        }
        l && O && ua.alternate === null && t(y, O),
          (d = n(ua, d, U)),
          B === null ? (T = ua) : (B.sibling = ua),
          (B = ua),
          (O = gl);
      }
      if (j.done) return a(y, O), V && oa(y, U), T;
      if (O === null) {
        for (; !j.done; U++, j = h.next())
          (j = z(y, j.value, o)),
            j !== null &&
              ((d = n(j, d, U)),
              B === null ? (T = j) : (B.sibling = j),
              (B = j));
        return V && oa(y, U), T;
      }
      for (O = u(O); !j.done; U++, j = h.next())
        (j = g(O, y, U, j.value, o)),
          j !== null &&
            (l && j.alternate !== null && O.delete(j.key === null ? U : j.key),
            (d = n(j, d, U)),
            B === null ? (T = j) : (B.sibling = j),
            (B = j));
      return (
        l &&
          O.forEach(function (vh) {
            return t(y, vh);
          }),
        V && oa(y, U),
        T
      );
    }
    function al(y, d, h, o) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === D &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case il:
            l: {
              for (var T = h.key; d !== null; ) {
                if (d.key === T) {
                  if (((T = h.type), T === D)) {
                    if (d.tag === 7) {
                      a(y, d.sibling),
                        (o = e(d, h.props.children)),
                        (o.return = y),
                        (y = o);
                      break l;
                    }
                  } else if (
                    d.elementType === T ||
                    (typeof T == "object" &&
                      T !== null &&
                      T.$$typeof === lt &&
                      e0(T) === d.type)
                  ) {
                    a(y, d.sibling),
                      (o = e(d, h.props)),
                      xu(o, h),
                      (o.return = y),
                      (y = o);
                    break l;
                  }
                  a(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              h.type === D
                ? ((o = Ra(h.props.children, y.mode, o, h.key)),
                  (o.return = y),
                  (y = o))
                : ((o = yn(h.type, h.key, h.props, null, y.mode, o)),
                  xu(o, h),
                  (o.return = y),
                  (y = o));
            }
            return c(y);
          case ol:
            l: {
              for (T = h.key; d !== null; ) {
                if (d.key === T)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === h.containerInfo &&
                    d.stateNode.implementation === h.implementation
                  ) {
                    a(y, d.sibling),
                      (o = e(d, h.children || [])),
                      (o.return = y),
                      (y = o);
                    break l;
                  } else {
                    a(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              (o = vf(h, y.mode, o)), (o.return = y), (y = o);
            }
            return c(y);
          case lt:
            return (T = h._init), (h = T(h._payload)), al(y, d, h, o);
        }
        if (St(h)) return M(y, d, h, o);
        if (tt(h)) {
          if (((T = tt(h)), typeof T != "function")) throw Error(m(150));
          return (h = T.call(h)), r(y, d, h, o);
        }
        if (typeof h.then == "function") return al(y, d, pe(h), o);
        if (h.$$typeof === bl) return al(y, d, fn(y, h), o);
        Je(y, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          d !== null && d.tag === 6
            ? (a(y, d.sibling), (o = e(d, h)), (o.return = y), (y = o))
            : (a(y, d), (o = df(h, y.mode, o)), (o.return = y), (y = o)),
          c(y))
        : a(y, d);
    }
    return function (y, d, h, o) {
      try {
        Cu = 0;
        var T = al(y, d, h, o);
        return (Ia = null), T;
      } catch (O) {
        if (O === Vu) throw O;
        var B = $l(29, O, null, y.mode);
        return (B.lanes = o), (B.return = y), B;
      } finally {
      }
    };
  }
  var za = n0(!0),
    c0 = n0(!1),
    lu = ct(null),
    we = ct(0);
  function f0(l, t) {
    (l = qt), $(we, l), $(lu, t), (qt = l | t.baseLanes);
  }
  function gc() {
    $(we, qt), $(lu, lu.current);
  }
  function Sc() {
    (qt = we.current), yl(lu), yl(we);
  }
  var Jl = ct(null),
    vt = null;
  function Vt(l) {
    var t = l.alternate;
    $(dl, dl.current & 1),
      $(Jl, l),
      vt === null &&
        (t === null || lu.current !== null || t.memoizedState !== null) &&
        (vt = l);
  }
  function i0(l) {
    if (l.tag === 22) {
      if (($(dl, dl.current), $(Jl, l), vt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (vt = l);
      }
    } else jt();
  }
  function jt() {
    $(dl, dl.current), $(Jl, Jl.current);
  }
  function Tt(l) {
    yl(Jl), vt === l && (vt = null), yl(dl);
  }
  var dl = ct(0);
  function We(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Fv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    Pv = A.unstable_scheduleCallback,
    Iv = A.unstable_NormalPriority,
    vl = {
      $$typeof: bl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function oc() {
    return { controller: new Fv(), data: new Map(), refCount: 0 };
  }
  function Lu(l) {
    l.refCount--,
      l.refCount === 0 &&
        Pv(Iv, function () {
          l.controller.abort();
        });
  }
  var Ku = null,
    bc = 0,
    tu = 0,
    au = null;
  function ly(l, t) {
    if (Ku === null) {
      var a = (Ku = []);
      (bc = 0),
        (tu = Of()),
        (au = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return bc++, t.then(d0, d0), t;
  }
  function d0() {
    if (--bc === 0 && Ku !== null) {
      au !== null && (au.status = "fulfilled");
      var l = Ku;
      (Ku = null), (tu = 0), (au = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function ty(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var v0 = R.S;
  R.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      ly(l, t),
      v0 !== null && v0(l, t);
  };
  var Ea = ct(null);
  function zc() {
    var l = Ea.current;
    return l !== null ? l : J.pooledCache;
  }
  function $e(l, t) {
    t === null ? $(Ea, Ea.current) : $(Ea, t.pool);
  }
  function y0() {
    var l = zc();
    return l === null ? null : { parent: vl._currentValue, pool: l };
  }
  var Ct = 0,
    N = null,
    L = null,
    nl = null,
    ke = !1,
    uu = !1,
    Ta = !1,
    Fe = 0,
    pu = 0,
    eu = null,
    ay = 0;
  function el() {
    throw Error(m(321));
  }
  function Ec(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Yl(l[a], t[a])) return !1;
    return !0;
  }
  function Tc(l, t, a, u, e, n) {
    return (
      (Ct = n),
      (N = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = l === null || l.memoizedState === null ? Aa : xt),
      (Ta = !1),
      (n = a(u, e)),
      (Ta = !1),
      uu && (n = s0(t, a, u, e)),
      h0(l),
      n
    );
  }
  function h0(l) {
    R.H = yt;
    var t = L !== null && L.next !== null;
    if (((Ct = 0), (nl = L = N = null), (ke = !1), (pu = 0), (eu = null), t))
      throw Error(m(300));
    l === null ||
      sl ||
      ((l = l.dependencies), l !== null && cn(l) && (sl = !0));
  }
  function s0(l, t, a, u) {
    N = l;
    var e = 0;
    do {
      if ((uu && (eu = null), (pu = 0), (uu = !1), 25 <= e))
        throw Error(m(301));
      if (((e += 1), (nl = L = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (R.H = Da), (n = t(a, u));
    } while (uu);
    return n;
  }
  function uy() {
    var l = R.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ju(t) : t),
      (l = l.useState()[0]),
      (L !== null ? L.memoizedState : null) !== l && (N.flags |= 1024),
      t
    );
  }
  function Ac() {
    var l = Fe !== 0;
    return (Fe = 0), l;
  }
  function Dc(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Mc(l) {
    if (ke) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      ke = !1;
    }
    (Ct = 0), (nl = L = N = null), (uu = !1), (pu = Fe = 0), (eu = null);
  }
  function rl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return nl === null ? (N.memoizedState = nl = l) : (nl = nl.next = l), nl;
  }
  function cl() {
    if (L === null) {
      var l = N.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = L.next;
    var t = nl === null ? N.memoizedState : nl.next;
    if (t !== null) (nl = t), (L = l);
    else {
      if (l === null)
        throw N.alternate === null ? Error(m(467)) : Error(m(310));
      (L = l),
        (l = {
          memoizedState: L.memoizedState,
          baseState: L.baseState,
          baseQueue: L.baseQueue,
          queue: L.queue,
          next: null,
        }),
        nl === null ? (N.memoizedState = nl = l) : (nl = nl.next = l);
    }
    return nl;
  }
  var Pe;
  Pe = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ju(l) {
    var t = pu;
    return (
      (pu += 1),
      eu === null && (eu = []),
      (l = a0(eu, l, t)),
      (t = N),
      (nl === null ? t.memoizedState : nl.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? Aa : xt)),
      l
    );
  }
  function Ie(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ju(l);
      if (l.$$typeof === bl) return Dl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Oc(l) {
    var t = null,
      a = N.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = N.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Pe()), (N.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = zu;
    return t.index++, a;
  }
  function At(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ln(l) {
    var t = cl();
    return Uc(t, L, l);
  }
  function Uc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        (e.next = n.next), (n.next = c);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (c = null),
        i = null,
        v = t,
        S = !1;
      do {
        var z = v.lane & -536870913;
        if (z !== v.lane ? (Q & z) === z : (Ct & z) === z) {
          var s = v.revertLane;
          if (s === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              z === tu && (S = !0);
          else if ((Ct & s) === s) {
            (v = v.next), s === tu && (S = !0);
            continue;
          } else
            (z = {
              lane: 0,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              i === null ? ((f = i = z), (c = n)) : (i = i.next = z),
              (N.lanes |= s),
              (Ft |= s);
          (z = v.action),
            Ta && a(n, z),
            (n = v.hasEagerState ? v.eagerState : a(n, z));
        } else
          (s = {
            lane: z,
            revertLane: v.revertLane,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            i === null ? ((f = i = s), (c = n)) : (i = i.next = s),
            (N.lanes |= z),
            (Ft |= z);
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !Yl(n, l.memoizedState) && ((sl = !0), S && ((a = au), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function _c(l) {
    var t = cl(),
      a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== e);
      Yl(n, t.memoizedState) || (sl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function m0(l, t, a) {
    var u = N,
      e = cl(),
      n = V;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var c = !Yl((L || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (sl = !0)),
      (e = e.queue),
      rc(o0.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (nl !== null && nl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        nu(9, S0.bind(null, u, e, a, t), { destroy: void 0 }, null),
        J === null)
      )
        throw Error(m(349));
      n || Ct & 60 || g0(u, t, a);
    }
    return a;
  }
  function g0(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = N.updateQueue),
      t === null
        ? ((t = Pe()), (N.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function S0(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), b0(t) && z0(l);
  }
  function o0(l, t, a) {
    return a(function () {
      b0(t) && z0(l);
    });
  }
  function b0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Yl(l, a);
    } catch {
      return !0;
    }
  }
  function z0(l) {
    var t = Zt(l, 2);
    t !== null && _l(t, l, 2);
  }
  function Rc(l) {
    var t = rl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ta)) {
        Gt(!0);
        try {
          a();
        } finally {
          Gt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: At,
        lastRenderedState: l,
      }),
      t
    );
  }
  function E0(l, t, a, u) {
    return (l.baseState = a), Uc(l, L, typeof u == "function" ? u : At);
  }
  function ey(l, t, a, u, e) {
    if (un(l)) throw Error(m(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      R.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), T0(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function T0(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = R.T,
        c = {};
      R.T = c;
      try {
        var f = a(e, u),
          i = R.S;
        i !== null && i(c, f), A0(l, t, f);
      } catch (v) {
        Hc(l, t, v);
      } finally {
        R.T = n;
      }
    } else
      try {
        (n = a(e, u)), A0(l, t, n);
      } catch (v) {
        Hc(l, t, v);
      }
  }
  function A0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            D0(l, t, u);
          },
          function (u) {
            return Hc(l, t, u);
          },
        )
      : D0(l, t, a);
  }
  function D0(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      M0(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), T0(l, a)));
  }
  function Hc(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), M0(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function M0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function O0(l, t) {
    return t;
  }
  function U0(l, t) {
    if (V) {
      var a = J.formState;
      if (a !== null) {
        l: {
          var u = N;
          if (V) {
            if (zl) {
              t: {
                for (var e = zl, n = dt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = nt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (zl = nt(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            ba(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = rl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: O0,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = K0.bind(null, N, u)),
      (u.dispatch = a),
      (u = Rc(!1)),
      (n = Gc.bind(null, N, !1, u.queue)),
      (u = rl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = ey.bind(null, N, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function _0(l) {
    var t = cl();
    return R0(t, L, l);
  }
  function R0(l, t, a) {
    (t = Uc(l, t, O0)[0]),
      (l = ln(At)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? Ju(t)
          : t);
    var u = cl(),
      e = u.queue,
      n = e.dispatch;
    return (
      a !== u.memoizedState &&
        ((N.flags |= 2048),
        nu(9, ny.bind(null, e, a), { destroy: void 0 }, null)),
      [t, n, l]
    );
  }
  function ny(l, t) {
    l.action = t;
  }
  function H0(l) {
    var t = cl(),
      a = L;
    if (a !== null) return R0(t, a, l);
    cl(), (t = t.memoizedState), (a = cl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function nu(l, t, a, u) {
    return (
      (l = { tag: l, create: t, inst: a, deps: u, next: null }),
      (t = N.updateQueue),
      t === null && ((t = Pe()), (N.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function r0() {
    return cl().memoizedState;
  }
  function tn(l, t, a, u) {
    var e = rl();
    (N.flags |= l),
      (e.memoizedState = nu(
        1 | t,
        a,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function an(l, t, a, u) {
    var e = cl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    L !== null && u !== null && Ec(u, L.memoizedState.deps)
      ? (e.memoizedState = nu(t, a, n, u))
      : ((N.flags |= l), (e.memoizedState = nu(1 | t, a, n, u)));
  }
  function q0(l, t) {
    tn(8390656, 8, l, t);
  }
  function rc(l, t) {
    an(2048, 8, l, t);
  }
  function N0(l, t) {
    return an(4, 2, l, t);
  }
  function B0(l, t) {
    return an(4, 4, l, t);
  }
  function Y0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function G0(l, t, a) {
    (a = a != null ? a.concat([l]) : null), an(4, 4, Y0.bind(null, t, l), a);
  }
  function qc() {}
  function X0(l, t) {
    var a = cl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Ec(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function Q0(l, t) {
    var a = cl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Ec(t, u[1])) return u[0];
    if (((u = l()), Ta)) {
      Gt(!0);
      try {
        l();
      } finally {
        Gt(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function Nc(l, t, a) {
    return a === void 0 || Ct & 1073741824
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = V1()), (N.lanes |= l), (Ft |= l), a);
  }
  function Z0(l, t, a, u) {
    return Yl(a, t)
      ? a
      : lu.current !== null
        ? ((l = Nc(l, a, u)), Yl(l, t) || (sl = !0), l)
        : Ct & 42
          ? ((l = V1()), (N.lanes |= l), (Ft |= l), t)
          : ((sl = !0), (l.memoizedState = a));
  }
  function V0(l, t, a, u, e) {
    var n = Z.p;
    Z.p = n !== 0 && 8 > n ? n : 8;
    var c = R.T,
      f = {};
    (R.T = f), Gc(l, !1, t, a);
    try {
      var i = e(),
        v = R.S;
      if (
        (v !== null && v(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var S = ty(i, u);
        wu(l, t, S, Zl(l));
      } else wu(l, t, u, Zl(l));
    } catch (z) {
      wu(l, t, { then: function () {}, status: "rejected", reason: z }, Zl());
    } finally {
      (Z.p = n), (R.T = c);
    }
  }
  function cy() {}
  function Bc(l, t, a, u) {
    if (l.tag !== 5) throw Error(m(476));
    var e = j0(l).queue;
    V0(
      l,
      e,
      t,
      Vl,
      a === null
        ? cy
        : function () {
            return C0(l), a(u);
          },
    );
  }
  function j0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Vl,
      baseState: Vl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: At,
        lastRenderedState: Vl,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: At,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function C0(l) {
    var t = j0(l).next.queue;
    wu(l, t, {}, Zl());
  }
  function Yc() {
    return Dl(se);
  }
  function x0() {
    return cl().memoizedState;
  }
  function L0() {
    return cl().memoizedState;
  }
  function fy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Zl();
          l = pt(a);
          var u = Jt(t, l, a);
          u !== null && (_l(u, t, a), ku(u, t, a)),
            (t = { cache: oc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function iy(l, t, a) {
    var u = Zl();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      un(l)
        ? p0(t, a)
        : ((a = vc(l, t, a, u)), a !== null && (_l(a, l, u), J0(a, t, u)));
  }
  function K0(l, t, a) {
    var u = Zl();
    wu(l, t, a, u);
  }
  function wu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (un(l)) p0(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = f), Yl(f, c)))
            return je(l, t, e, 0), J === null && Ve(), !1;
        } catch {
        } finally {
        }
      if (((a = vc(l, t, e, u)), a !== null))
        return _l(a, l, u), J0(a, t, u), !0;
    }
    return !1;
  }
  function Gc(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Of(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      un(l))
    ) {
      if (t) throw Error(m(479));
    } else (t = vc(l, a, u, 2)), t !== null && _l(t, l, 2);
  }
  function un(l) {
    var t = l.alternate;
    return l === N || (t !== null && t === N);
  }
  function p0(l, t) {
    uu = ke = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function J0(l, t, a) {
    if (a & 4194176) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), ui(l, a);
    }
  }
  var yt = {
    readContext: Dl,
    use: Ie,
    useCallback: el,
    useContext: el,
    useEffect: el,
    useImperativeHandle: el,
    useLayoutEffect: el,
    useInsertionEffect: el,
    useMemo: el,
    useReducer: el,
    useRef: el,
    useState: el,
    useDebugValue: el,
    useDeferredValue: el,
    useTransition: el,
    useSyncExternalStore: el,
    useId: el,
  };
  (yt.useCacheRefresh = el),
    (yt.useMemoCache = el),
    (yt.useHostTransitionStatus = el),
    (yt.useFormState = el),
    (yt.useActionState = el),
    (yt.useOptimistic = el);
  var Aa = {
    readContext: Dl,
    use: Ie,
    useCallback: function (l, t) {
      return (rl().memoizedState = [l, t === void 0 ? null : t]), l;
    },
    useContext: Dl,
    useEffect: q0,
    useImperativeHandle: function (l, t, a) {
      (a = a != null ? a.concat([l]) : null),
        tn(4194308, 4, Y0.bind(null, t, l), a);
    },
    useLayoutEffect: function (l, t) {
      return tn(4194308, 4, l, t);
    },
    useInsertionEffect: function (l, t) {
      tn(4, 2, l, t);
    },
    useMemo: function (l, t) {
      var a = rl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ta) {
        Gt(!0);
        try {
          l();
        } finally {
          Gt(!1);
        }
      }
      return (a.memoizedState = [u, t]), u;
    },
    useReducer: function (l, t, a) {
      var u = rl();
      if (a !== void 0) {
        var e = a(t);
        if (Ta) {
          Gt(!0);
          try {
            a(t);
          } finally {
            Gt(!1);
          }
        }
      } else e = t;
      return (
        (u.memoizedState = u.baseState = e),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: e,
        }),
        (u.queue = l),
        (l = l.dispatch = iy.bind(null, N, l)),
        [u.memoizedState, l]
      );
    },
    useRef: function (l) {
      var t = rl();
      return (l = { current: l }), (t.memoizedState = l);
    },
    useState: function (l) {
      l = Rc(l);
      var t = l.queue,
        a = K0.bind(null, N, t);
      return (t.dispatch = a), [l.memoizedState, a];
    },
    useDebugValue: qc,
    useDeferredValue: function (l, t) {
      var a = rl();
      return Nc(a, l, t);
    },
    useTransition: function () {
      var l = Rc(!1);
      return (
        (l = V0.bind(null, N, l.queue, !0, !1)),
        (rl().memoizedState = l),
        [!1, l]
      );
    },
    useSyncExternalStore: function (l, t, a) {
      var u = N,
        e = rl();
      if (V) {
        if (a === void 0) throw Error(m(407));
        a = a();
      } else {
        if (((a = t()), J === null)) throw Error(m(349));
        Q & 60 || g0(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return (
        (e.queue = n),
        q0(o0.bind(null, u, n, l), [l]),
        (u.flags |= 2048),
        nu(9, S0.bind(null, u, n, a, t), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var l = rl(),
        t = J.identifierPrefix;
      if (V) {
        var a = Et,
          u = zt;
        (a = (u & ~(1 << (32 - Bl(u) - 1))).toString(32) + a),
          (t = ":" + t + "R" + a),
          (a = Fe++),
          0 < a && (t += "H" + a.toString(32)),
          (t += ":");
      } else (a = ay++), (t = ":" + t + "r" + a.toString(32) + ":");
      return (l.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (rl().memoizedState = fy.bind(null, N));
    },
  };
  (Aa.useMemoCache = Oc),
    (Aa.useHostTransitionStatus = Yc),
    (Aa.useFormState = U0),
    (Aa.useActionState = U0),
    (Aa.useOptimistic = function (l) {
      var t = rl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = a), (t = Gc.bind(null, N, !0, a)), (a.dispatch = t), [l, t]
      );
    });
  var xt = {
    readContext: Dl,
    use: Ie,
    useCallback: X0,
    useContext: Dl,
    useEffect: rc,
    useImperativeHandle: G0,
    useInsertionEffect: N0,
    useLayoutEffect: B0,
    useMemo: Q0,
    useReducer: ln,
    useRef: r0,
    useState: function () {
      return ln(At);
    },
    useDebugValue: qc,
    useDeferredValue: function (l, t) {
      var a = cl();
      return Z0(a, L.memoizedState, l, t);
    },
    useTransition: function () {
      var l = ln(At)[0],
        t = cl().memoizedState;
      return [typeof l == "boolean" ? l : Ju(l), t];
    },
    useSyncExternalStore: m0,
    useId: x0,
  };
  (xt.useCacheRefresh = L0),
    (xt.useMemoCache = Oc),
    (xt.useHostTransitionStatus = Yc),
    (xt.useFormState = _0),
    (xt.useActionState = _0),
    (xt.useOptimistic = function (l, t) {
      var a = cl();
      return E0(a, L, l, t);
    });
  var Da = {
    readContext: Dl,
    use: Ie,
    useCallback: X0,
    useContext: Dl,
    useEffect: rc,
    useImperativeHandle: G0,
    useInsertionEffect: N0,
    useLayoutEffect: B0,
    useMemo: Q0,
    useReducer: _c,
    useRef: r0,
    useState: function () {
      return _c(At);
    },
    useDebugValue: qc,
    useDeferredValue: function (l, t) {
      var a = cl();
      return L === null ? Nc(a, l, t) : Z0(a, L.memoizedState, l, t);
    },
    useTransition: function () {
      var l = _c(At)[0],
        t = cl().memoizedState;
      return [typeof l == "boolean" ? l : Ju(l), t];
    },
    useSyncExternalStore: m0,
    useId: x0,
  };
  (Da.useCacheRefresh = L0),
    (Da.useMemoCache = Oc),
    (Da.useHostTransitionStatus = Yc),
    (Da.useFormState = H0),
    (Da.useActionState = H0),
    (Da.useOptimistic = function (l, t) {
      var a = cl();
      return L !== null
        ? E0(a, L, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    });
  function Xc(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : C({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Qc = {
    isMounted: function (l) {
      return (l = l._reactInternals) ? H(l) === l : !1;
    },
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = Zl(),
        e = pt(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = Jt(l, e, u)),
        t !== null && (_l(t, l, u), ku(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = Zl(),
        e = pt(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = Jt(l, e, u)),
        t !== null && (_l(t, l, u), ku(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = Zl(),
        u = pt(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Jt(l, u, a)),
        t !== null && (_l(t, l, a), ku(t, l, a));
    },
  };
  function w0(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yu(a, u) || !Yu(e, n)
          : !0
    );
  }
  function W0(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && Qc.enqueueReplaceState(t, t.state, null);
  }
  function Ma(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = C({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var en =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function $0(l) {
    en(l);
  }
  function k0(l) {
    console.error(l);
  }
  function F0(l) {
    en(l);
  }
  function nn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function P0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Zc(l, t, a) {
    return (
      (a = pt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        nn(l, t);
      }),
      a
    );
  }
  function I0(l) {
    return (l = pt(l)), (l.tag = 3), l;
  }
  function l1(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          P0(t, a, u);
        });
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        P0(t, a, u),
          typeof e != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function dy(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && $u(t, a, e, !0),
        (a = Jl.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              vt === null ? Ef() : a.alternate === null && tl === 0 && (tl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === mc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Af(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === mc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Af(l, u, e)),
              !1
            );
        }
        throw Error(m(435, a.tag));
      }
      return Af(l, u, e), Ef(), !1;
    }
    if (V)
      return (
        (t = Jl.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== sc && ((l = Error(m(422), { cause: u })), Zu(Ll(l, a))))
          : (u !== sc && ((t = Error(m(423), { cause: u })), Zu(Ll(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = Ll(u, a)),
            (e = Zc(l.stateNode, u, e)),
            Ic(l, e),
            tl !== 4 && (tl = 2)),
        !1
      );
    var n = Error(m(520), { cause: u });
    if (
      ((n = Ll(n, a)),
      ee === null ? (ee = [n]) : ee.push(n),
      tl !== 4 && (tl = 2),
      t === null)
    )
      return !0;
    (u = Ll(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Zc(a.stateNode, u, l)),
            Ic(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (Pt === null || !Pt.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = I0(e)),
              l1(e, l, a, u),
              Ic(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var t1 = Error(m(461)),
    sl = !1;
  function El(l, t, a, u) {
    t.child = l === null ? c0(t, null, a, u) : za(t, l.child, a, u);
  }
  function a1(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u) f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return (
      Ua(t),
      (u = Tc(l, t, a, c, n, e)),
      (f = Ac()),
      l !== null && !sl
        ? (Dc(l, t, e), Dt(l, t, e))
        : (V && f && yc(t), (t.flags |= 1), El(l, t, u, e), t.child)
    );
  }
  function u1(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !ff(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), e1(l, t, n, u, e))
        : ((l = yn(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !wc(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Yu), a(c, u) && l.ref === t.ref)
      )
        return Dt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = kt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function e1(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Yu(n, u) && l.ref === t.ref)
        if (((sl = !1), (t.pendingProps = u = n), wc(l, e)))
          l.flags & 131072 && (sl = !0);
        else return (t.lanes = l.lanes), Dt(l, t, e);
    }
    return Vc(l, t, a, u, e);
  }
  function n1(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = (t.stateNode._pendingVisibility & 2) !== 0,
      c = l !== null ? l.memoizedState : null;
    if ((Wu(l, t), u.mode === "hidden" || n)) {
      if (t.flags & 128) {
        if (((u = c !== null ? c.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return c1(l, t, u, a);
      }
      if (a & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && $e(t, c !== null ? c.cachePool : null),
          c !== null ? f0(t, c) : gc(),
          i0(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          c1(l, t, c !== null ? c.baseLanes | a : a, a)
        );
    } else
      c !== null
        ? ($e(t, c.cachePool), f0(t, c), jt(), (t.memoizedState = null))
        : (l !== null && $e(t, null), gc(), jt());
    return El(l, t, e, a), t.child;
  }
  function c1(l, t, a, u) {
    var e = zc();
    return (
      (e = e === null ? null : { parent: vl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && $e(t, null),
      gc(),
      i0(t),
      l !== null && $u(l, t, u, !0),
      null
    );
  }
  function Wu(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(m(284));
      (l === null || l.ref !== a) && (t.flags |= 2097664);
    }
  }
  function Vc(l, t, a, u, e) {
    return (
      Ua(t),
      (a = Tc(l, t, a, u, void 0, e)),
      (u = Ac()),
      l !== null && !sl
        ? (Dc(l, t, e), Dt(l, t, e))
        : (V && u && yc(t), (t.flags |= 1), El(l, t, a, e), t.child)
    );
  }
  function f1(l, t, a, u, e, n) {
    return (
      Ua(t),
      (t.updateQueue = null),
      (a = s0(t, u, a, e)),
      h0(l),
      (u = Ac()),
      l !== null && !sl
        ? (Dc(l, t, n), Dt(l, t, n))
        : (V && u && yc(t), (t.flags |= 1), El(l, t, a, n), t.child)
    );
  }
  function i1(l, t, a, u, e) {
    if ((Ua(t), t.stateNode === null)) {
      var n = ka,
        c = a.contextType;
      typeof c == "object" && c !== null && (n = Dl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Qc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Fc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Dl(c) : ka),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (Xc(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && Qc.enqueueReplaceState(n, n.state, null),
          Pu(t, u, n, e),
          Fu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Ma(a, f);
      n.props = i;
      var v = n.context,
        S = a.contextType;
      (c = ka), typeof S == "object" && S !== null && (c = Dl(S));
      var z = a.getDerivedStateFromProps;
      (S =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || v !== c) && W0(t, n, u, c)),
        (Kt = !1);
      var s = t.memoizedState;
      (n.state = s),
        Pu(t, u, n, e),
        Fu(),
        (v = t.memoizedState),
        f || s !== v || Kt
          ? (typeof z == "function" && (Xc(t, a, z, u), (v = t.memoizedState)),
            (i = Kt || w0(t, a, i, u, s, v, c))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = v)),
            (n.props = u),
            (n.state = v),
            (n.context = c),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        Pc(l, t),
        (c = t.memoizedProps),
        (S = Ma(a, c)),
        (n.props = S),
        (z = t.pendingProps),
        (s = n.context),
        (v = a.contextType),
        (i = ka),
        typeof v == "object" && v !== null && (i = Dl(v)),
        (f = a.getDerivedStateFromProps),
        (v =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== z || s !== i) && W0(t, n, u, i)),
        (Kt = !1),
        (s = t.memoizedState),
        (n.state = s),
        Pu(t, u, n, e),
        Fu();
      var g = t.memoizedState;
      c !== z ||
      s !== g ||
      Kt ||
      (l !== null && l.dependencies !== null && cn(l.dependencies))
        ? (typeof f == "function" && (Xc(t, a, f, u), (g = t.memoizedState)),
          (S =
            Kt ||
            w0(t, a, S, u, s, g, i) ||
            (l !== null && l.dependencies !== null && cn(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, g, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, g, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && s === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && s === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = g)),
          (n.props = u),
          (n.state = g),
          (n.context = i),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && s === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && s === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      Wu(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = za(t, l.child, null, e)),
              (t.child = za(t, null, a, e)))
            : El(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Dt(l, t, e)),
      l
    );
  }
  function d1(l, t, a, u) {
    return Qu(), (t.flags |= 256), El(l, t, a, u), t.child;
  }
  var jc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cc(l) {
    return { baseLanes: l, cachePool: y0() };
  }
  function xc(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= kl), l;
  }
  function v1(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (dl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (V) {
        if ((e ? Vt(t) : jt(), V)) {
          var f = zl,
            i;
          if ((i = f)) {
            l: {
              for (i = f, f = dt; i.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (((i = nt(i.nextSibling)), i === null)) {
                  f = null;
                  break l;
                }
              }
              f = i;
            }
            f !== null
              ? ((t.memoizedState = {
                  dehydrated: f,
                  treeContext: Sa !== null ? { id: zt, overflow: Et } : null,
                  retryLane: 536870912,
                }),
                (i = $l(18, null, null, 0)),
                (i.stateNode = f),
                (i.return = t),
                (t.child = i),
                (Ul = t),
                (zl = null),
                (i = !0))
              : (i = !1);
          }
          i || ba(t);
        }
        if (
          ((f = t.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return f.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Tt(t);
      }
      return (
        (f = u.children),
        (u = u.fallback),
        e
          ? (jt(),
            (e = t.mode),
            (f = Kc({ mode: "hidden", children: f }, e)),
            (u = Ra(u, e, a, null)),
            (f.return = t),
            (u.return = t),
            (f.sibling = u),
            (t.child = f),
            (e = t.child),
            (e.memoizedState = Cc(a)),
            (e.childLanes = xc(l, c, a)),
            (t.memoizedState = jc),
            u)
          : (Vt(t), Lc(t, f))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((f = i.dehydrated), f !== null))
    ) {
      if (n)
        t.flags & 256
          ? (Vt(t), (t.flags &= -257), (t = pc(l, t, a)))
          : t.memoizedState !== null
            ? (jt(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (jt(),
              (e = u.fallback),
              (f = t.mode),
              (u = Kc({ mode: "visible", children: u.children }, f)),
              (e = Ra(e, f, a, null)),
              (e.flags |= 2),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              za(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = Cc(a)),
              (u.childLanes = xc(l, c, a)),
              (t.memoizedState = jc),
              (t = e));
      else if ((Vt(t), f.data === "$!")) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var v = c.dgst;
        (c = v),
          (u = Error(m(419))),
          (u.stack = ""),
          (u.digest = c),
          Zu({ value: u, source: null, stack: null }),
          (t = pc(l, t, a));
      } else if (
        (sl || $u(l, t, a, !1), (c = (a & l.childLanes) !== 0), sl || c)
      ) {
        if (((c = J), c !== null)) {
          if (((u = a & -a), u & 42)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
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
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = u & (c.suspendedLanes | a) ? 0 : u),
            u !== 0 && u !== i.retryLane)
          )
            throw ((i.retryLane = u), Zt(l, u), _l(c, l, u), t1);
        }
        f.data === "$?" || Ef(), (t = pc(l, t, a));
      } else
        f.data === "$?"
          ? ((t.flags |= 128),
            (t.child = l.child),
            (t = My.bind(null, l)),
            (f._reactRetry = t),
            (t = null))
          : ((l = i.treeContext),
            (zl = nt(f.nextSibling)),
            (Ul = t),
            (V = !0),
            (ut = null),
            (dt = !1),
            l !== null &&
              ((Kl[pl++] = zt),
              (Kl[pl++] = Et),
              (Kl[pl++] = Sa),
              (zt = l.id),
              (Et = l.overflow),
              (Sa = t)),
            (t = Lc(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (jt(),
        (e = u.fallback),
        (f = t.mode),
        (i = l.child),
        (v = i.sibling),
        (u = kt(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 31457280),
        v !== null ? (e = kt(v, e)) : ((e = Ra(e, f, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = Cc(a))
          : ((i = f.cachePool),
            i !== null
              ? ((v = vl._currentValue),
                (i = i.parent !== v ? { parent: v, pool: v } : i))
              : (i = y0()),
            (f = { baseLanes: f.baseLanes | a, cachePool: i })),
        (e.memoizedState = f),
        (e.childLanes = xc(l, c, a)),
        (t.memoizedState = jc),
        u)
      : (Vt(t),
        (a = l.child),
        (l = a.sibling),
        (a = kt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Lc(l, t) {
    return (
      (t = Kc({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Kc(l, t) {
    return X1(l, t, 0, null);
  }
  function pc(l, t, a) {
    return (
      za(t, l.child, null, a),
      (l = Lc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function y1(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), $c(l.return, t, a);
  }
  function Jc(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function h1(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((El(l, t, u.children, a), (u = dl.current), u & 2))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && l.flags & 128)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && y1(l, a, t);
          else if (l.tag === 19) y1(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch (($(dl, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && We(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          Jc(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && We(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        Jc(t, !0, a, null, n);
        break;
      case "together":
        Jc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Dt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (Ft |= t.lanes),
      !(a & t.childLanes))
    )
      if (l !== null) {
        if (($u(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        l = t.child, a = kt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = kt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function wc(l, t) {
    return l.lanes & t ? !0 : ((l = l.dependencies), !!(l !== null && cn(l)));
  }
  function vy(l, t, a) {
    switch (t.tag) {
      case 3:
        Ae(t, t.stateNode.containerInfo),
          Lt(t, vl, l.memoizedState.cache),
          Qu();
        break;
      case 27:
      case 5:
        Qn(t);
        break;
      case 4:
        Ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        Lt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (Vt(t), (t.flags |= 128), null)
            : a & t.child.childLanes
              ? v1(l, t, a)
              : (Vt(t), (l = Dt(l, t, a)), l !== null ? l.sibling : null);
        Vt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || ($u(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return h1(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          $(dl, dl.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), n1(l, t, a);
      case 24:
        Lt(t, vl, l.memoizedState.cache);
    }
    return Dt(l, t, a);
  }
  function s1(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) sl = !0;
      else {
        if (!wc(l, a) && !(t.flags & 128)) return (sl = !1), vy(l, t, a);
        sl = !!(l.flags & 131072);
      }
    else (sl = !1), V && t.flags & 1048576 && Fi(t, Le, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            ff(u)
              ? ((l = Ma(u, l)), (t.tag = 1), (t = i1(null, t, u, l, a)))
              : ((t.tag = 0), (t = Vc(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === Il)) {
                (t.tag = 11), (t = a1(null, t, u, l, a));
                break l;
              } else if (e === Ba) {
                (t.tag = 14), (t = u1(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = Ya(u) || u), Error(m(306, t, "")));
          }
        }
        return t;
      case 0:
        return Vc(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ma(u, t.pendingProps)), i1(l, t, u, e, a);
      case 3:
        l: {
          if ((Ae(t, t.stateNode.containerInfo), l === null))
            throw Error(m(387));
          var n = t.pendingProps;
          (e = t.memoizedState), (u = e.element), Pc(l, t), Pu(t, n, null, a);
          var c = t.memoizedState;
          if (
            ((n = c.cache),
            Lt(t, vl, n),
            n !== e.cache && kc(t, [vl], a, !0),
            Fu(),
            (n = c.element),
            e.isDehydrated)
          )
            if (
              ((e = { element: n, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = e),
              (t.memoizedState = e),
              t.flags & 256)
            ) {
              t = d1(l, t, n, a);
              break l;
            } else if (n !== u) {
              (u = Ll(Error(m(424)), t)), Zu(u), (t = d1(l, t, n, a));
              break l;
            } else
              for (
                zl = nt(t.stateNode.containerInfo.firstChild),
                  Ul = t,
                  V = !0,
                  ut = null,
                  dt = !0,
                  a = c0(t, null, n, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Qu(), n === u)) {
              t = Dt(l, t, a);
              break l;
            }
            El(l, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Wu(l, t),
          l === null
            ? (a = Sd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : V ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Dn(Yt.current).createElement(a)),
                (u[Al] = t),
                (u[Rl] = l),
                Tl(u, a, l),
                hl(u),
                (t.stateNode = u))
            : (t.memoizedState = Sd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Qn(t),
          l === null &&
            V &&
            ((u = t.stateNode = sd(t.type, t.pendingProps, Yt.current)),
            (Ul = t),
            (dt = !0),
            (zl = nt(u.firstChild))),
          (u = t.pendingProps.children),
          l !== null || V ? El(l, t, u, a) : (t.child = za(t, null, u, a)),
          Wu(l, t),
          t.child
        );
      case 5:
        return (
          l === null &&
            V &&
            ((e = u = zl) &&
              ((u = jy(u, t.type, t.pendingProps, dt)),
              u !== null
                ? ((t.stateNode = u),
                  (Ul = t),
                  (zl = nt(u.firstChild)),
                  (dt = !1),
                  (e = !0))
                : (e = !1)),
            e || ba(t)),
          Qn(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Yf(e, n) ? (u = null) : c !== null && Yf(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Tc(l, t, uy, null, null, a)), (se._currentValue = e)),
          Wu(l, t),
          El(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            V &&
            ((l = a = zl) &&
              ((a = Cy(a, t.pendingProps, dt)),
              a !== null
                ? ((t.stateNode = a), (Ul = t), (zl = null), (l = !0))
                : (l = !1)),
            l || ba(t)),
          null
        );
      case 13:
        return v1(l, t, a);
      case 4:
        return (
          Ae(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = za(t, null, u, a)) : El(l, t, u, a),
          t.child
        );
      case 11:
        return a1(l, t, t.type, t.pendingProps, a);
      case 7:
        return El(l, t, t.pendingProps, a), t.child;
      case 8:
        return El(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return El(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          Lt(t, t.type, u.value),
          El(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ua(t),
          (e = Dl(e)),
          (u = u(e)),
          (t.flags |= 1),
          El(l, t, u, a),
          t.child
        );
      case 14:
        return u1(l, t, t.type, t.pendingProps, a);
      case 15:
        return e1(l, t, t.type, t.pendingProps, a);
      case 19:
        return h1(l, t, a);
      case 22:
        return n1(l, t, a);
      case 24:
        return (
          Ua(t),
          (u = Dl(vl)),
          l === null
            ? ((e = zc()),
              e === null &&
                ((e = J),
                (n = oc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Fc(t),
              Lt(t, vl, e))
            : (l.lanes & a && (Pc(l, t), Pu(t, null, null, a), Fu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Lt(t, vl, u))
                : ((u = n.cache),
                  Lt(t, vl, u),
                  u !== e.cache && kc(t, [vl], a, !0))),
          El(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  var Wc = ct(null),
    Oa = null,
    Mt = null;
  function Lt(l, t, a) {
    $(Wc, t._currentValue), (t._currentValue = a);
  }
  function Ot(l) {
    (l._currentValue = Wc.current), yl(Wc);
  }
  function $c(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function kc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              (n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                $c(n.return, a, l),
                u || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(m(341));
        (c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          $c(c, a, l),
          (c = null);
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            (e.return = c.return), (c = e);
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function $u(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if (e.flags & 524288) n = !0;
        else if (e.flags & 262144) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(m(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = e.type;
          Yl(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === Te.current) {
        if (((c = e.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(se) : (l = [se]));
      }
      e = e.return;
    }
    l !== null && kc(t, l, a, u), (t.flags |= 262144);
  }
  function cn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Yl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ua(l) {
    (Oa = l),
      (Mt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Dl(l) {
    return m1(Oa, l);
  }
  function fn(l, t) {
    return Oa === null && Ua(l), m1(l, t);
  }
  function m1(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Mt === null)) {
      if (l === null) throw Error(m(308));
      (Mt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Mt = Mt.next = t;
    return a;
  }
  var Kt = !1;
  function Fc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function pt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Jt(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), F & 2)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ce(l)),
        $i(l, null, a),
        t
      );
    }
    return je(l, u, t, a), Ce(l);
  }
  function ku(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194176) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), ui(l, a);
    }
  }
  function Ic(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = c) : (n = n.next = c), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var lf = !1;
  function Fu() {
    if (lf) {
      var l = au;
      if (l !== null) throw l;
    }
  }
  function Pu(l, t, a, u) {
    lf = !1;
    var e = l.updateQueue;
    Kt = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f,
        v = i.next;
      (i.next = null), c === null ? (n = v) : (c.next = v), (c = i);
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (f = S.lastBaseUpdate),
        f !== c &&
          (f === null ? (S.firstBaseUpdate = v) : (f.next = v),
          (S.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var z = e.baseState;
      (c = 0), (S = v = i = null), (f = n);
      do {
        var s = f.lane & -536870913,
          g = s !== f.lane;
        if (g ? (Q & s) === s : (u & s) === s) {
          s !== 0 && s === tu && (lf = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var M = l,
              r = f;
            s = t;
            var al = a;
            switch (r.tag) {
              case 1:
                if (((M = r.payload), typeof M == "function")) {
                  z = M.call(al, z, s);
                  break l;
                }
                z = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = r.payload),
                  (s = typeof M == "function" ? M.call(al, z, s) : M),
                  s == null)
                )
                  break l;
                z = C({}, z, s);
                break l;
              case 2:
                Kt = !0;
            }
          }
          (s = f.callback),
            s !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = e.callbacks),
              g === null ? (e.callbacks = [s]) : g.push(s));
        } else
          (g = {
            lane: s,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            S === null ? ((v = S = g), (i = z)) : (S = S.next = g),
            (c |= s);
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          (g = f),
            (f = g.next),
            (g.next = null),
            (e.lastBaseUpdate = g),
            (e.shared.pending = null);
        }
      } while (!0);
      S === null && (i = z),
        (e.baseState = i),
        (e.firstBaseUpdate = v),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (Ft |= c),
        (l.lanes = c),
        (l.memoizedState = z);
    }
  }
  function g1(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function S1(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) g1(a[l], t);
  }
  function Iu(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            (u = n()), (c.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      p(t, t.return, f);
    }
  }
  function wt(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (e = t);
              var i = a;
              try {
                f();
              } catch (v) {
                p(e, i, v);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (v) {
      p(t, t.return, v);
    }
  }
  function o1(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        S1(t, a);
      } catch (u) {
        p(l, l.return, u);
      }
    }
  }
  function b1(l, t, a) {
    (a.props = Ma(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      p(l, t, u);
    }
  }
  function _a(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        var u = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = u;
            break;
          default:
            e = u;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (n) {
      p(l, t, n);
    }
  }
  function Gl(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          p(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          p(l, t, e);
        }
      else a.current = null;
  }
  function z1(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      p(l, l.return, e);
    }
  }
  function E1(l, t, a) {
    try {
      var u = l.stateNode;
      Gy(u, l.type, a, t), (u[Rl] = t);
    } catch (e) {
      p(l, l.return, e);
    }
  }
  function T1(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4
    );
  }
  function tf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || T1(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18;

      ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function af(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(l, t)
            : a.insertBefore(l, t)
          : (a.nodeType === 8
              ? ((t = a.parentNode), t.insertBefore(l, a))
              : ((t = a), t.appendChild(l)),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = An));
    else if (u !== 4 && u !== 27 && ((l = l.child), l !== null))
      for (af(l, t, a), l = l.sibling; l !== null; )
        af(l, t, a), (l = l.sibling);
  }
  function dn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && u !== 27 && ((l = l.child), l !== null))
      for (dn(l, t, a), l = l.sibling; l !== null; )
        dn(l, t, a), (l = l.sibling);
  }
  var Ut = !1,
    ll = !1,
    uf = !1,
    A1 = typeof WeakSet == "function" ? WeakSet : Set,
    ml = null,
    D1 = !1;
  function yy(l, t) {
    if (((l = l.containerInfo), (Nf = Hn), (l = ji(l)), nc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              v = 0,
              S = 0,
              z = l,
              s = null;
            t: for (;;) {
              for (
                var g;
                z !== a || (e !== 0 && z.nodeType !== 3) || (f = c + e),
                  z !== n || (u !== 0 && z.nodeType !== 3) || (i = c + u),
                  z.nodeType === 3 && (c += z.nodeValue.length),
                  (g = z.firstChild) !== null;

              )
                (s = z), (z = g);
              for (;;) {
                if (z === l) break t;
                if (
                  (s === a && ++v === e && (f = c),
                  s === n && ++S === u && (i = c),
                  (g = z.nextSibling) !== null)
                )
                  break;
                (z = s), (s = z.parentNode);
              }
              z = g;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Bf = { focusedElem: l, selectionRange: a }, Hn = !1, ml = t;
      ml !== null;

    )
      if (
        ((t = ml), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (ml = l);
      else
        for (; ml !== null; ) {
          switch (((t = ml), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var M = Ma(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(M, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (r) {
                  p(a, a.return, r);
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Qf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (l & 1024) throw Error(m(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (ml = l);
            break;
          }
          ml = t.return;
        }
    return (M = D1), (D1 = !1), M;
  }
  function M1(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Rt(l, a), u & 4 && Iu(5, a);
        break;
      case 1:
        if ((Rt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              p(a, a.return, f);
            }
          else {
            var e = Ma(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              p(a, a.return, f);
            }
          }
        u & 64 && o1(a), u & 512 && _a(a, a.return);
        break;
      case 3:
        if ((Rt(l, a), u & 64 && ((u = a.updateQueue), u !== null))) {
          if (((l = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                l = a.child.stateNode;
                break;
              case 1:
                l = a.child.stateNode;
            }
          try {
            S1(u, l);
          } catch (f) {
            p(a, a.return, f);
          }
        }
        break;
      case 26:
        Rt(l, a), u & 512 && _a(a, a.return);
        break;
      case 27:
      case 5:
        Rt(l, a), t === null && u & 4 && z1(a), u & 512 && _a(a, a.return);
        break;
      case 12:
        Rt(l, a);
        break;
      case 13:
        Rt(l, a), u & 4 && _1(l, a);
        break;
      case 22:
        if (((e = a.memoizedState !== null || Ut), !e)) {
          t = (t !== null && t.memoizedState !== null) || ll;
          var n = Ut,
            c = ll;
          (Ut = e),
            (ll = t) && !c ? Wt(l, a, (a.subtreeFlags & 8772) !== 0) : Rt(l, a),
            (Ut = n),
            (ll = c);
        }
        u & 512 &&
          (a.memoizedProps.mode === "manual"
            ? _a(a, a.return)
            : Gl(a, a.return));
        break;
      default:
        Rt(l, a);
    }
  }
  function O1(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), O1(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Ln(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var fl = null,
    Xl = !1;
  function _t(l, t, a) {
    for (a = a.child; a !== null; ) U1(l, t, a), (a = a.sibling);
  }
  function U1(l, t, a) {
    if (Nl && typeof Nl.onCommitFiberUnmount == "function")
      try {
        Nl.onCommitFiberUnmount(Au, a);
      } catch {}
    switch (a.tag) {
      case 26:
        ll || Gl(a, t),
          _t(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        ll || Gl(a, t);
        var u = fl,
          e = Xl;
        for (
          fl = a.stateNode, _t(l, t, a), a = a.stateNode, t = a.attributes;
          t.length;

        )
          a.removeAttributeNode(t[0]);
        Ln(a), (fl = u), (Xl = e);
        break;
      case 5:
        ll || Gl(a, t);
      case 6:
        e = fl;
        var n = Xl;
        if (((fl = null), _t(l, t, a), (fl = e), (Xl = n), fl !== null))
          if (Xl)
            try {
              (l = fl),
                (u = a.stateNode),
                l.nodeType === 8
                  ? l.parentNode.removeChild(u)
                  : l.removeChild(u);
            } catch (c) {
              p(a, t, c);
            }
          else
            try {
              fl.removeChild(a.stateNode);
            } catch (c) {
              p(a, t, c);
            }
        break;
      case 18:
        fl !== null &&
          (Xl
            ? ((t = fl),
              (a = a.stateNode),
              t.nodeType === 8
                ? Xf(t.parentNode, a)
                : t.nodeType === 1 && Xf(t, a),
              oe(t))
            : Xf(fl, a.stateNode));
        break;
      case 4:
        (u = fl),
          (e = Xl),
          (fl = a.stateNode.containerInfo),
          (Xl = !0),
          _t(l, t, a),
          (fl = u),
          (Xl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ll || wt(2, a, t), ll || wt(4, a, t), _t(l, t, a);
        break;
      case 1:
        ll ||
          (Gl(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && b1(a, t, u)),
          _t(l, t, a);
        break;
      case 21:
        _t(l, t, a);
        break;
      case 22:
        ll || Gl(a, t),
          (ll = (u = ll) || a.memoizedState !== null),
          _t(l, t, a),
          (ll = u);
        break;
      default:
        _t(l, t, a);
    }
  }
  function _1(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        oe(l);
      } catch (a) {
        p(t, t.return, a);
      }
  }
  function hy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new A1()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new A1()),
          t
        );
      default:
        throw Error(m(435, l.tag));
    }
  }
  function ef(l, t) {
    var a = hy(l);
    t.forEach(function (u) {
      var e = Oy.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function wl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
            case 5:
              (fl = f.stateNode), (Xl = !1);
              break l;
            case 3:
              (fl = f.stateNode.containerInfo), (Xl = !0);
              break l;
            case 4:
              (fl = f.stateNode.containerInfo), (Xl = !0);
              break l;
          }
          f = f.return;
        }
        if (fl === null) throw Error(m(160));
        U1(n, c, e),
          (fl = null),
          (Xl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) R1(t, l), (t = t.sibling);
  }
  var et = null;
  function R1(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wl(t, l),
          Wl(l),
          u & 4 && (wt(3, l, l.return), Iu(3, l), wt(5, l, l.return));
        break;
      case 1:
        wl(t, l),
          Wl(l),
          u & 512 && (ll || a === null || Gl(a, a.return)),
          u & 64 &&
            Ut &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = et;
        if (
          (wl(t, l),
          Wl(l),
          u & 512 && (ll || a === null || Gl(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ou] ||
                          n[Al] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        Tl(n, u, a),
                        (n[Al] = l),
                        hl(n),
                        (u = n);
                      break l;
                    case "link":
                      var c = zd("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Tl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = zd("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Tl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, u));
                  }
                  (n[Al] = l), hl(n), (u = n);
                }
                l.stateNode = u;
              } else Ed(e, l.type, l.stateNode);
            else l.stateNode = bd(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Ed(e, l.type, l.stateNode)
                  : bd(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                E1(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && l.alternate === null) {
          (e = l.stateNode), (n = l.memoizedProps);
          try {
            for (var i = e.firstChild; i; ) {
              var v = i.nextSibling,
                S = i.nodeName;
              i[Ou] ||
                S === "HEAD" ||
                S === "BODY" ||
                S === "SCRIPT" ||
                S === "STYLE" ||
                (S === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                e.removeChild(i),
                (i = v);
            }
            for (var z = l.type, s = e.attributes; s.length; )
              e.removeAttributeNode(s[0]);
            Tl(e, z, n), (e[Al] = l), (e[Rl] = n);
          } catch (M) {
            p(l, l.return, M);
          }
        }
      case 5:
        if (
          (wl(t, l),
          Wl(l),
          u & 512 && (ll || a === null || Gl(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            La(e, "");
          } catch (M) {
            p(l, l.return, M);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), E1(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (uf = !0);
        break;
      case 6:
        if ((wl(t, l), Wl(l), u & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (M) {
            p(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (e = et),
          (et = Mn(t.containerInfo)),
          wl(t, l),
          (et = e),
          Wl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            oe(t.containerInfo);
          } catch (M) {
            p(l, l.return, M);
          }
        uf && ((uf = !1), H1(l));
        break;
      case 4:
        (u = et),
          (et = Mn(l.stateNode.containerInfo)),
          wl(t, l),
          Wl(l),
          (et = u);
        break;
      case 12:
        wl(t, l), Wl(l);
        break;
      case 13:
        wl(t, l),
          Wl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (mf = it()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), ef(l, u)));
        break;
      case 22:
        if (
          (u & 512 && (ll || a === null || Gl(a, a.return)),
          (i = l.memoizedState !== null),
          (v = a !== null && a.memoizedState !== null),
          (S = Ut),
          (z = ll),
          (Ut = S || i),
          (ll = z || v),
          wl(t, l),
          (ll = z),
          (Ut = S),
          Wl(l),
          (t = l.stateNode),
          (t._current = l),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          u & 8192 &&
            ((t._visibility = i ? t._visibility & -2 : t._visibility | 1),
            i && ((t = Ut || ll), a === null || v || t || cu(l)),
            l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
        )
          l: for (a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (a === null) {
                v = a = t;
                try {
                  if (((e = v.stateNode), i))
                    (n = e.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (c = v.stateNode), (f = v.memoizedProps.style);
                    var g =
                      f != null && f.hasOwnProperty("display")
                        ? f.display
                        : null;
                    c.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (M) {
                  p(v, v.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = i ? "" : v.memoizedProps;
                } catch (M) {
                  p(v, v.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), ef(l, a))));
        break;
      case 19:
        wl(t, l),
          Wl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), ef(l, u)));
        break;
      case 21:
        break;
      default:
        wl(t, l), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var a = l.return; a !== null; ) {
              if (T1(a)) {
                var u = a;
                break l;
              }
              a = a.return;
            }
            throw Error(m(160));
          }
          switch (u.tag) {
            case 27:
              var e = u.stateNode,
                n = tf(l);
              dn(l, n, e);
              break;
            case 5:
              var c = u.stateNode;
              u.flags & 32 && (La(c, ""), (u.flags &= -33));
              var f = tf(l);
              dn(l, f, c);
              break;
            case 3:
            case 4:
              var i = u.stateNode.containerInfo,
                v = tf(l);
              af(l, v, i);
              break;
            default:
              throw Error(m(161));
          }
        }
      } catch (S) {
        p(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function H1(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        H1(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Rt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) M1(l, t.alternate, t), (t = t.sibling);
  }
  function cu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wt(4, t, t.return), cu(t);
          break;
        case 1:
          Gl(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && b1(t, t.return, a),
            cu(t);
          break;
        case 26:
        case 27:
        case 5:
          Gl(t, t.return), cu(t);
          break;
        case 22:
          Gl(t, t.return), t.memoizedState === null && cu(t);
          break;
        default:
          cu(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wt(e, n, a), Iu(4, n);
          break;
        case 1:
          if (
            (Wt(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (v) {
              p(u, u.return, v);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var f = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  g1(i[e], f);
            } catch (v) {
              p(u, u.return, v);
            }
          }
          a && c & 64 && o1(n), _a(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          Wt(e, n, a), a && u === null && c & 4 && z1(n), _a(n, n.return);
          break;
        case 12:
          Wt(e, n, a);
          break;
        case 13:
          Wt(e, n, a), a && c & 4 && _1(e, n);
          break;
        case 22:
          n.memoizedState === null && Wt(e, n, a), _a(n, n.return);
          break;
        default:
          Wt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function nf(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function cf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Lu(l));
  }
  function $t(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) r1(l, t, a, u), (t = t.sibling);
  }
  function r1(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $t(l, t, a, u), e & 2048 && Iu(9, t);
        break;
      case 3:
        $t(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (e & 2048) {
          $t(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (i) {
            p(t, t.return, i);
          }
        } else $t(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          t.memoizedState !== null
            ? n._visibility & 4
              ? $t(l, t, a, u)
              : le(l, t)
            : n._visibility & 4
              ? $t(l, t, a, u)
              : ((n._visibility |= 4),
                fu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && nf(t.alternate, t);
        break;
      case 24:
        $t(l, t, a, u), e & 2048 && cf(t.alternate, t);
        break;
      default:
        $t(l, t, a, u);
    }
  }
  function fu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        f = a,
        i = u,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          fu(n, c, f, i, e), Iu(8, c);
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          c.memoizedState !== null
            ? S._visibility & 4
              ? fu(n, c, f, i, e)
              : le(n, c)
            : ((S._visibility |= 4), fu(n, c, f, i, e)),
            e && v & 2048 && nf(c.alternate, c);
          break;
        case 24:
          fu(n, c, f, i, e), e && v & 2048 && cf(c.alternate, c);
          break;
        default:
          fu(n, c, f, i, e);
      }
      t = t.sibling;
    }
  }
  function le(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            le(a, u), e & 2048 && nf(u.alternate, u);
            break;
          case 24:
            le(a, u), e & 2048 && cf(u.alternate, u);
            break;
          default:
            le(a, u);
        }
        t = t.sibling;
      }
  }
  var te = 8192;
  function iu(l) {
    if (l.subtreeFlags & te)
      for (l = l.child; l !== null; ) q1(l), (l = l.sibling);
  }
  function q1(l) {
    switch (l.tag) {
      case 26:
        iu(l),
          l.flags & te &&
            l.memoizedState !== null &&
            lh(et, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        iu(l);
        break;
      case 3:
      case 4:
        var t = et;
        (et = Mn(l.stateNode.containerInfo)), iu(l), (et = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = te), (te = 16777216), iu(l), (te = t))
            : iu(l));
        break;
      default:
        iu(l);
    }
  }
  function N1(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ae(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (ml = u), Y1(u, l);
        }
      N1(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) B1(l), (l = l.sibling);
  }
  function B1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ae(l), l.flags & 2048 && wt(9, l, l.return);
        break;
      case 3:
        ae(l);
        break;
      case 12:
        ae(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 4 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -5), vn(l))
          : ae(l);
        break;
      default:
        ae(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (ml = u), Y1(u, l);
        }
      N1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          wt(8, t, t.return), vn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function Y1(l, t) {
    for (; ml !== null; ) {
      var a = ml;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          wt(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Lu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (ml = u);
      else
        l: for (a = l; ml !== null; ) {
          u = ml;
          var e = u.sibling,
            n = u.return;
          if ((O1(u), u === a)) {
            ml = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (ml = e);
            break l;
          }
          ml = n;
        }
    }
  }
  function sy(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function $l(l, t, a, u) {
    return new sy(l, t, a, u);
  }
  function ff(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function kt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = $l(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 31457280),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function G1(l, t) {
    l.flags &= 31457282;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function yn(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) ff(l) && (c = 1);
    else if (typeof l == "string")
      c = Py(l, a, ft.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case D:
          return Ra(a.children, e, n, t);
        case b:
          (c = 8), (e |= 24);
          break;
        case x:
          return (
            (l = $l(12, a, t, e | 2)), (l.elementType = x), (l.lanes = n), l
          );
        case mt:
          return (l = $l(13, a, t, e)), (l.elementType = mt), (l.lanes = n), l;
        case Na:
          return (l = $l(19, a, t, e)), (l.elementType = Na), (l.lanes = n), l;
        case ea:
          return X1(a, e, n, t);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case P:
              case bl:
                c = 10;
                break l;
              case I:
                c = 9;
                break l;
              case Il:
                c = 11;
                break l;
              case Ba:
                c = 14;
                break l;
              case lt:
                (c = 16), (u = null);
                break l;
            }
          (c = 29),
            (a = Error(m(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = $l(c, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function Ra(l, t, a, u) {
    return (l = $l(7, l, u, t)), (l.lanes = a), l;
  }
  function X1(l, t, a, u) {
    (l = $l(22, l, u, t)), (l.elementType = ea), (l.lanes = a);
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = e._current;
        if (n === null) throw Error(m(456));
        if (!(e._pendingVisibility & 2)) {
          var c = Zt(n, 2);
          c !== null && ((e._pendingVisibility |= 2), _l(c, n, 2));
        }
      },
      attach: function () {
        var n = e._current;
        if (n === null) throw Error(m(456));
        if (e._pendingVisibility & 2) {
          var c = Zt(n, 2);
          c !== null && ((e._pendingVisibility &= -3), _l(c, n, 2));
        }
      },
    };
    return (l.stateNode = e), l;
  }
  function df(l, t, a) {
    return (l = $l(6, l, null, t)), (l.lanes = a), l;
  }
  function vf(l, t, a) {
    return (
      (t = $l(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  function Ht(l) {
    l.flags |= 4;
  }
  function Q1(l, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Td(t))) {
      if (
        ((t = Jl.current),
        t !== null &&
          ((Q & 4194176) === Q
            ? vt !== null
            : ((Q & 62914560) !== Q && !(Q & 536870912)) || t !== vt))
      )
        throw ((ju = mc), l0);
      l.flags |= 8192;
    }
  }
  function hn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? ti() : 536870912), (l.lanes |= t), (vu |= t));
  }
  function ue(l, t) {
    if (!V)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function k(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 31457280),
          (u |= e.flags & 31457280),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function my(l, t, a) {
    var u = t.pendingProps;
    switch ((hc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return k(t), null;
      case 1:
        return k(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Ot(vl),
          Qa(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Xu(t)
              ? Ht(t)
              : l === null ||
                (l.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ut !== null && (bf(ut), (ut = null)))),
          k(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Ht(t),
              a !== null ? (k(t), Q1(t, a)) : (k(t), (t.flags &= -16777217)))
            : a
              ? a !== l.memoizedState
                ? (Ht(t), k(t), Q1(t, a))
                : (k(t), (t.flags &= -16777217))
              : (l.memoizedProps !== u && Ht(t), k(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        De(t), (a = Yt.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Ht(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(m(166));
            return k(t), null;
          }
          (l = ft.current),
            Xu(t) ? Pi(t) : ((l = sd(e, u, a)), (t.stateNode = l), Ht(t));
        }
        return k(t), null;
      case 5:
        if ((De(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Ht(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(m(166));
            return k(t), null;
          }
          if (((l = ft.current), Xu(t))) Pi(t);
          else {
            switch (((e = Dn(Yt.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script><\/script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[Al] = t), (l[Rl] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Tl(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Ht(t);
          }
        }
        return k(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Ht(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(m(166));
          if (((l = Yt.current), Xu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Ul),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Al] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                fd(l.nodeValue, a)
              )),
              l || ba(t);
          } else (l = Dn(l).createTextNode(u)), (l[Al] = t), (t.stateNode = l);
        }
        return k(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Xu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(m(317));
              e[Al] = t;
            } else
              Qu(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            k(t), (e = !1);
          } else ut !== null && (bf(ut), (ut = null)), (e = !0);
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        if ((Tt(t), t.flags & 128)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          hn(t, t.updateQueue),
          k(t),
          null
        );
      case 4:
        return Qa(), l === null && Hf(t.stateNode.containerInfo), k(t), null;
      case 10:
        return Ot(t.type), k(t), null;
      case 19:
        if ((yl(dl), (e = t.memoizedState), e === null)) return k(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) ue(e, !1);
          else {
            if (tl !== 0 || (l !== null && l.flags & 128))
              for (l = t.child; l !== null; ) {
                if (((n = We(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ue(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      hn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    G1(a, l), (a = a.sibling);
                  return $(dl, (dl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              it() > sn &&
              ((t.flags |= 128), (u = !0), ue(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = We(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                hn(t, l),
                ue(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !V)
              )
                return k(t), null;
            } else
              2 * it() - e.renderingStartTime > sn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), ue(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = it()),
            (t.sibling = null),
            (l = dl.current),
            $(dl, u ? (l & 1) | 2 : l & 1),
            t)
          : (k(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          Sc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? a & 536870912 &&
              !(t.flags & 128) &&
              (k(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : k(t),
          (a = t.updateQueue),
          a !== null && hn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && yl(Ea),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ot(vl),
          k(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function gy(l, t) {
    switch ((hc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ot(vl),
          Qa(),
          (l = t.flags),
          l & 65536 && !(l & 128) ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return De(t), null;
      case 13:
        if (
          (Tt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Qu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return yl(dl), null;
      case 4:
        return Qa(), null;
      case 10:
        return Ot(t.type), null;
      case 22:
      case 23:
        return (
          Tt(t),
          Sc(),
          l !== null && yl(Ea),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Ot(vl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Z1(l, t) {
    switch ((hc(t), t.tag)) {
      case 3:
        Ot(vl), Qa();
        break;
      case 26:
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        Qa();
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        yl(dl);
        break;
      case 10:
        Ot(t.type);
        break;
      case 22:
      case 23:
        Tt(t), Sc(), l !== null && yl(Ea);
        break;
      case 24:
        Ot(vl);
    }
  }
  var Sy = {
      getCacheForType: function (l) {
        var t = Dl(vl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    oy = typeof WeakMap == "function" ? WeakMap : Map,
    F = 0,
    J = null,
    Y = null,
    Q = 0,
    w = 0,
    Ql = null,
    rt = !1,
    du = !1,
    yf = !1,
    qt = 0,
    tl = 0,
    Ft = 0,
    Ha = 0,
    hf = 0,
    kl = 0,
    vu = 0,
    ee = null,
    ht = null,
    sf = !1,
    mf = 0,
    sn = 1 / 0,
    mn = null,
    Pt = null,
    gn = !1,
    ra = null,
    ne = 0,
    gf = 0,
    Sf = null,
    ce = 0,
    of = null;
  function Zl() {
    if (F & 2 && Q !== 0) return Q & -Q;
    if (R.T !== null) {
      var l = tu;
      return l !== 0 ? l : Of();
    }
    return ni();
  }
  function V1() {
    kl === 0 && (kl = !(Q & 536870912) || V ? li() : 536870912);
    var l = Jl.current;
    return l !== null && (l.flags |= 32), kl;
  }
  function _l(l, t, a) {
    ((l === J && w === 2) || l.cancelPendingCommit !== null) &&
      (yu(l, 0), Nt(l, Q, kl, !1)),
      Mu(l, a),
      (!(F & 2) || l !== J) &&
        (l === J && (!(F & 2) && (Ha |= a), tl === 4 && Nt(l, Q, kl, !1)),
        st(l));
  }
  function j1(l, t, a) {
    if (F & 6) throw Error(m(327));
    var u = (!a && (t & 60) === 0 && (t & l.expiredLanes) === 0) || Du(l, t),
      e = u ? Ey(l, t) : Tf(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        du && !u && Nt(l, t, 0, !1);
        break;
      } else if (e === 6) Nt(l, t, 0, !rt);
      else {
        if (((a = l.current.alternate), n && !by(a))) {
          (e = Tf(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = ee;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (yu(f, c).flags |= 256), (c = Tf(f, c, !1)), c !== 2)) {
                if (yf && !i) {
                  (f.errorRecoveryDisabledLanes |= n), (Ha |= n), (e = 4);
                  break l;
                }
                (n = ht), (ht = e), n !== null && bf(n);
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          yu(l, 0), Nt(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), e)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194176) === t) {
                Nt(u, t, kl, !rt);
                break l;
              }
              break;
            case 2:
              ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if (
            ((u.finishedWork = a),
            (u.finishedLanes = t),
            (t & 62914560) === t && ((n = mf + 300 - it()), 10 < n))
          ) {
            if ((Nt(u, t, kl, !rt), _e(u, 0) !== 0)) break l;
            u.timeoutHandle = vd(
              C1.bind(null, u, a, ht, mn, sf, t, kl, Ha, vu, rt, 2, -0, 0),
              n,
            );
            break l;
          }
          C1(u, a, ht, mn, sf, t, kl, Ha, vu, rt, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    st(l);
  }
  function bf(l) {
    ht === null ? (ht = l) : ht.push.apply(ht, l);
  }
  function C1(l, t, a, u, e, n, c, f, i, v, S, z, s) {
    var g = t.subtreeFlags;
    if (
      (g & 8192 || (g & 16785408) === 16785408) &&
      ((he = { stylesheets: null, count: 0, unsuspend: Iy }),
      q1(t),
      (t = th()),
      t !== null)
    ) {
      (l.cancelPendingCommit = t(W1.bind(null, l, a, u, e, c, f, i, 1, z, s))),
        Nt(l, n, c, !v);
      return;
    }
    W1(l, a, u, e, c, f, i, S, z, s);
  }
  function by(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Yl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Nt(l, t, a, u) {
    (t &= ~hf),
      (t &= ~Ha),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Bl(e),
        c = 1 << n;
      (u[n] = -1), (e &= ~c);
    }
    a !== 0 && ai(l, a, t);
  }
  function Sn() {
    return F & 6 ? !0 : (fe(0), !1);
  }
  function zf() {
    if (Y !== null) {
      if (w === 0) var l = Y.return;
      else (l = Y), (Mt = Oa = null), Mc(l), (Ia = null), (Cu = 0), (l = Y);
      for (; l !== null; ) Z1(l.alternate, l), (l = l.return);
      Y = null;
    }
  }
  function yu(l, t) {
    (l.finishedWork = null), (l.finishedLanes = 0);
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), Qy(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      zf(),
      (J = l),
      (Y = a = kt(l.current, null)),
      (Q = t),
      (w = 0),
      (Ql = null),
      (rt = !1),
      (du = Du(l, t)),
      (yf = !1),
      (vu = kl = hf = Ha = Ft = tl = 0),
      (ht = ee = null),
      (sf = !1),
      t & 8 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Bl(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (qt = t), Ve(), a;
  }
  function x1(l, t) {
    (N = null),
      (R.H = yt),
      t === Vu
        ? ((t = u0()), (w = 3))
        : t === l0
          ? ((t = u0()), (w = 4))
          : (w =
              t === t1
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ql = t),
      Y === null && ((tl = 1), nn(l, Ll(t, l.current)));
  }
  function L1() {
    var l = R.H;
    return (R.H = yt), l === null ? yt : l;
  }
  function K1() {
    var l = R.A;
    return (R.A = Sy), l;
  }
  function Ef() {
    (tl = 4),
      rt || ((Q & 4194176) !== Q && Jl.current !== null) || (du = !0),
      (!(Ft & 134217727) && !(Ha & 134217727)) ||
        J === null ||
        Nt(J, Q, kl, !1);
  }
  function Tf(l, t, a) {
    var u = F;
    F |= 2;
    var e = L1(),
      n = K1();
    (J !== l || Q !== t) && ((mn = null), yu(l, t)), (t = !1);
    var c = tl;
    l: do
      try {
        if (w !== 0 && Y !== null) {
          var f = Y,
            i = Ql;
          switch (w) {
            case 8:
              zf(), (c = 6);
              break l;
            case 3:
            case 2:
            case 6:
              Jl.current === null && (t = !0);
              var v = w;
              if (((w = 0), (Ql = null), hu(l, f, i, v), a && du)) {
                c = 0;
                break l;
              }
              break;
            default:
              (v = w), (w = 0), (Ql = null), hu(l, f, i, v);
          }
        }
        zy(), (c = tl);
        break;
      } catch (S) {
        x1(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Mt = Oa = null),
      (F = u),
      (R.H = e),
      (R.A = n),
      Y === null && ((J = null), (Q = 0), Ve()),
      c
    );
  }
  function zy() {
    for (; Y !== null; ) p1(Y);
  }
  function Ey(l, t) {
    var a = F;
    F |= 2;
    var u = L1(),
      e = K1();
    J !== l || Q !== t
      ? ((mn = null), (sn = it() + 500), yu(l, t))
      : (du = Du(l, t));
    l: do
      try {
        if (w !== 0 && Y !== null) {
          t = Y;
          var n = Ql;
          t: switch (w) {
            case 1:
              (w = 0), (Ql = null), hu(l, t, n, 1);
              break;
            case 2:
              if (t0(n)) {
                (w = 0), (Ql = null), J1(t);
                break;
              }
              (t = function () {
                w === 2 && J === l && (w = 7), st(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              w = 7;
              break l;
            case 4:
              w = 5;
              break l;
            case 7:
              t0(n)
                ? ((w = 0), (Ql = null), J1(t))
                : ((w = 0), (Ql = null), hu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (Y.tag) {
                case 26:
                  c = Y.memoizedState;
                case 5:
                case 27:
                  var f = Y;
                  if (!c || Td(c)) {
                    (w = 0), (Ql = null);
                    var i = f.sibling;
                    if (i !== null) Y = i;
                    else {
                      var v = f.return;
                      v !== null ? ((Y = v), on(v)) : (Y = null);
                    }
                    break t;
                  }
              }
              (w = 0), (Ql = null), hu(l, t, n, 5);
              break;
            case 6:
              (w = 0), (Ql = null), hu(l, t, n, 6);
              break;
            case 8:
              zf(), (tl = 6);
              break l;
            default:
              throw Error(m(462));
          }
        }
        Ty();
        break;
      } catch (S) {
        x1(l, S);
      }
    while (!0);
    return (
      (Mt = Oa = null),
      (R.H = u),
      (R.A = e),
      (F = a),
      Y !== null ? 0 : ((J = null), (Q = 0), Ve(), tl)
    );
  }
  function Ty() {
    for (; Y !== null && !Ld(); ) p1(Y);
  }
  function p1(l) {
    var t = s1(l.alternate, l, qt);
    (l.memoizedProps = l.pendingProps), t === null ? on(l) : (Y = t);
  }
  function J1(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = f1(a, t, t.pendingProps, t.type, void 0, Q);
        break;
      case 11:
        t = f1(a, t, t.pendingProps, t.type.render, t.ref, Q);
        break;
      case 5:
        Mc(t);
      default:
        Z1(a, t), (t = Y = G1(t, qt)), (t = s1(a, t, qt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? on(l) : (Y = t);
  }
  function hu(l, t, a, u) {
    (Mt = Oa = null), Mc(t), (Ia = null), (Cu = 0);
    var e = t.return;
    try {
      if (dy(l, e, t, a, Q)) {
        (tl = 1), nn(l, Ll(a, l.current)), (Y = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((Y = e), n);
      (tl = 1), nn(l, Ll(a, l.current)), (Y = null);
      return;
    }
    t.flags & 32768
      ? (V || u === 1
          ? (l = !0)
          : du || Q & 536870912
            ? (l = !1)
            : ((rt = l = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = Jl.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        w1(t, l))
      : on(t);
  }
  function on(l) {
    var t = l;
    do {
      if (t.flags & 32768) {
        w1(t, rt);
        return;
      }
      l = t.return;
      var a = my(t.alternate, t, qt);
      if (a !== null) {
        Y = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Y = t;
        return;
      }
      Y = t = l;
    } while (t !== null);
    tl === 0 && (tl = 5);
  }
  function w1(l, t) {
    do {
      var a = gy(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (Y = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        Y = l;
        return;
      }
      Y = l = a;
    } while (l !== null);
    (tl = 6), (Y = null);
  }
  function W1(l, t, a, u, e, n, c, f, i, v) {
    var S = R.T,
      z = Z.p;
    try {
      (Z.p = 2), (R.T = null), Ay(l, t, a, u, z, e, n, c, f, i, v);
    } finally {
      (R.T = S), (Z.p = z);
    }
  }
  function Ay(l, t, a, u, e, n, c, f) {
    do su();
    while (ra !== null);
    if (F & 6) throw Error(m(327));
    var i = l.finishedWork;
    if (((u = l.finishedLanes), i === null)) return null;
    if (((l.finishedWork = null), (l.finishedLanes = 0), i === l.current))
      throw Error(m(177));
    (l.callbackNode = null),
      (l.callbackPriority = 0),
      (l.cancelPendingCommit = null);
    var v = i.lanes | i.childLanes;
    if (
      ((v |= dc),
      lv(l, u, v, n, c, f),
      l === J && ((Y = J = null), (Q = 0)),
      (!(i.subtreeFlags & 10256) && !(i.flags & 10256)) ||
        gn ||
        ((gn = !0),
        (gf = v),
        (Sf = a),
        Uy(Me, function () {
          return su(), null;
        })),
      (a = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || a
        ? ((a = R.T),
          (R.T = null),
          (n = Z.p),
          (Z.p = 2),
          (c = F),
          (F |= 4),
          yy(l, i),
          R1(i, l),
          Jv(Bf, l.containerInfo),
          (Hn = !!Nf),
          (Bf = Nf = null),
          (l.current = i),
          M1(l, i.alternate, i),
          Kd(),
          (F = c),
          (Z.p = n),
          (R.T = a))
        : (l.current = i),
      gn ? ((gn = !1), (ra = l), (ne = u)) : $1(l, v),
      (v = l.pendingLanes),
      v === 0 && (Pt = null),
      $d(i.stateNode),
      st(l),
      t !== null)
    )
      for (e = l.onRecoverableError, i = 0; i < t.length; i++)
        (v = t[i]), e(v.value, { componentStack: v.stack });
    return (
      ne & 3 && su(),
      (v = l.pendingLanes),
      u & 4194218 && v & 42
        ? l === of
          ? ce++
          : ((ce = 0), (of = l))
        : (ce = 0),
      fe(0),
      null
    );
  }
  function $1(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Lu(t)));
  }
  function su() {
    if (ra !== null) {
      var l = ra,
        t = gf;
      gf = 0;
      var a = ei(ne),
        u = R.T,
        e = Z.p;
      try {
        if (((Z.p = 32 > a ? 32 : a), (R.T = null), ra === null)) var n = !1;
        else {
          (a = Sf), (Sf = null);
          var c = ra,
            f = ne;
          if (((ra = null), (ne = 0), F & 6)) throw Error(m(331));
          var i = F;
          if (
            ((F |= 4),
            B1(c.current),
            r1(c, c.current, f, a),
            (F = i),
            fe(0, !1),
            Nl && typeof Nl.onPostCommitFiberRoot == "function")
          )
            try {
              Nl.onPostCommitFiberRoot(Au, c);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (Z.p = e), (R.T = u), $1(l, t);
      }
    }
    return !1;
  }
  function k1(l, t, a) {
    (t = Ll(a, t)),
      (t = Zc(l.stateNode, t, 2)),
      (l = Jt(l, t, 2)),
      l !== null && (Mu(l, 2), st(l));
  }
  function p(l, t, a) {
    if (l.tag === 3) k1(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          k1(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Pt === null || !Pt.has(u)))
          ) {
            (l = Ll(a, l)),
              (a = I0(2)),
              (u = Jt(t, a, 2)),
              u !== null && (l1(a, u, t, l), Mu(u, 2), st(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Af(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new oy();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((yf = !0), e.add(a), (l = Dy.bind(null, l, t, a)), t.then(l, l));
  }
  function Dy(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      J === l &&
        (Q & a) === a &&
        (tl === 4 || (tl === 3 && (Q & 62914560) === Q && 300 > it() - mf)
          ? !(F & 2) && yu(l, 0)
          : (hf |= a),
        vu === Q && (vu = 0)),
      st(l);
  }
  function F1(l, t) {
    t === 0 && (t = ti()), (l = Zt(l, t)), l !== null && (Mu(l, t), st(l));
  }
  function My(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), F1(l, a);
  }
  function Oy(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(t), F1(l, a);
  }
  function Uy(l, t) {
    return Vn(l, t);
  }
  var bn = null,
    mu = null,
    Df = !1,
    zn = !1,
    Mf = !1,
    qa = 0;
  function st(l) {
    l !== mu &&
      l.next === null &&
      (mu === null ? (bn = mu = l) : (mu = mu.next = l)),
      (zn = !0),
      Df || ((Df = !0), Ry(_y));
  }
  function fe(l, t) {
    if (!Mf && zn) {
      Mf = !0;
      do
        for (var a = !1, u = bn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                f = u.pingedLanes;
              (n = (1 << (31 - Bl(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~f)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), ld(u, n));
          } else
            (n = Q),
              (n = _e(u, u === J ? n : 0)),
              !(n & 3) || Du(u, n) || ((a = !0), ld(u, n));
          u = u.next;
        }
      while (a);
      Mf = !1;
    }
  }
  function _y() {
    zn = Df = !1;
    var l = 0;
    qa !== 0 && (Xy() && (l = qa), (qa = 0));
    for (var t = it(), a = null, u = bn; u !== null; ) {
      var e = u.next,
        n = P1(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (bn = e) : (a.next = e),
          e === null && (mu = a))
        : ((a = u), (l !== 0 || n & 3) && (zn = !0)),
        (u = e);
    }
    fe(l);
  }
  function P1(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - Bl(n),
        f = 1 << c,
        i = e[c];
      i === -1
        ? (!(f & a) || f & u) && (e[c] = Id(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((t = J),
      (a = Q),
      (a = _e(l, l === t ? a : 0)),
      (u = l.callbackNode),
      a === 0 || (l === t && w === 2) || l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && jn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if (!(a & 3) || Du(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && jn(u), ei(a))) {
        case 2:
        case 8:
          a = Pf;
          break;
        case 32:
          a = Me;
          break;
        case 268435456:
          a = If;
          break;
        default:
          a = Me;
      }
      return (
        (u = I1.bind(null, l)),
        (a = Vn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && jn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function I1(l, t) {
    var a = l.callbackNode;
    if (su() && l.callbackNode !== a) return null;
    var u = Q;
    return (
      (u = _e(l, l === J ? u : 0)),
      u === 0
        ? null
        : (j1(l, u, t),
          P1(l, it()),
          l.callbackNode != null && l.callbackNode === a
            ? I1.bind(null, l)
            : null)
    );
  }
  function ld(l, t) {
    if (su()) return null;
    j1(l, t, !0);
  }
  function Ry(l) {
    Zy(function () {
      F & 6 ? Vn(Ff, l) : l();
    });
  }
  function Of() {
    return qa === 0 && (qa = li()), qa;
  }
  function td(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Ne("" + l);
  }
  function ad(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function Hy(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = td((e[Rl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Rl] || null)
          ? td(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new Xe("action", "action", null, u, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (qa !== 0) {
                  var i = c ? ad(e, c) : new FormData(e);
                  Bc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? ad(e, c) : new FormData(e)),
                  Bc(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Uf = 0; Uf < Wi.length; Uf++) {
    var _f = Wi[Uf],
      ry = _f.toLowerCase(),
      qy = _f[0].toUpperCase() + _f.slice(1);
    at(ry, "on" + qy);
  }
  at(Li, "onAnimationEnd"),
    at(Ki, "onAnimationIteration"),
    at(pi, "onAnimationStart"),
    at("dblclick", "onDoubleClick"),
    at("focusin", "onFocus"),
    at("focusout", "onBlur"),
    at(Wv, "onTransitionRun"),
    at($v, "onTransitionStart"),
    at(kv, "onTransitionCancel"),
    at(Ji, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    ha(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ha(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ha(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ha(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ha(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ie =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ny = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ie),
    );
  function ud(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var f = u[c],
              i = f.instance,
              v = f.currentTarget;
            if (((f = f.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = f), (e.currentTarget = v);
            try {
              n(e);
            } catch (S) {
              en(S);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((f = u[c]),
              (i = f.instance),
              (v = f.currentTarget),
              (f = f.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = f), (e.currentTarget = v);
            try {
              n(e);
            } catch (S) {
              en(S);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function X(l, t) {
    var a = t[xn];
    a === void 0 && (a = t[xn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (ed(t, l, 2, !1), a.add(u));
  }
  function Rf(l, t, a) {
    var u = 0;
    t && (u |= 4), ed(a, l, u, t);
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Hf(l) {
    if (!l[En]) {
      (l[En] = !0),
        fi.forEach(function (a) {
          a !== "selectionchange" && (Ny.has(a) || Rf(a, !1, l), Rf(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[En] || ((t[En] = !0), Rf("selectionchange", !1, t));
    }
  }
  function ed(l, t, a, u) {
    switch (_d(t)) {
      case 2:
        var e = eh;
        break;
      case 8:
        e = nh;
        break;
      default:
        e = xf;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !kn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1);
  }
  function rf(l, t, a, u, e) {
    var n = u;
    if (!(t & 1) && !(t & 2) && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e || (f.nodeType === 8 && f.parentNode === e)) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var i = c.tag;
              if (
                (i === 3 || i === 4) &&
                ((i = c.stateNode.containerInfo),
                i === e || (i.nodeType === 8 && i.parentNode === e))
              )
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = ya(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    zi(function () {
      var v = n,
        S = Wn(a),
        z = [];
      l: {
        var s = wi.get(l);
        if (s !== void 0) {
          var g = Xe,
            M = l;
          switch (l) {
            case "keypress":
              if (Ye(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = Ov;
              break;
            case "focusin":
              (M = "focus"), (g = lc);
              break;
            case "focusout":
              (M = "blur"), (g = lc);
              break;
            case "beforeblur":
            case "afterblur":
              g = lc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = sv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Rv;
              break;
            case Li:
            case Ki:
            case pi:
              g = Sv;
              break;
            case Ji:
              g = rv;
              break;
            case "scroll":
            case "scrollend":
              g = yv;
              break;
            case "wheel":
              g = Nv;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = bv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Mi;
              break;
            case "toggle":
            case "beforetoggle":
              g = Yv;
          }
          var r = (t & 4) !== 0,
            al = !r && (l === "scroll" || l === "scrollend"),
            y = r ? (s !== null ? s + "Capture" : null) : s;
          r = [];
          for (var d = v, h; d !== null; ) {
            var o = d;
            if (
              ((h = o.stateNode),
              (o = o.tag),
              (o !== 5 && o !== 26 && o !== 27) ||
                h === null ||
                y === null ||
                ((o = _u(d, y)), o != null && r.push(de(d, o, h))),
              al)
            )
              break;
            d = d.return;
          }
          0 < r.length &&
            ((s = new g(s, M, null, a, S)), z.push({ event: s, listeners: r }));
        }
      }
      if (!(t & 7)) {
        l: {
          if (
            ((s = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            s &&
              a !== wn &&
              (M = a.relatedTarget || a.fromElement) &&
              (ya(M) || M[Za]))
          )
            break l;
          if (
            (g || s) &&
            ((s =
              S.window === S
                ? S
                : (s = S.ownerDocument)
                  ? s.defaultView || s.parentWindow
                  : window),
            g
              ? ((M = a.relatedTarget || a.toElement),
                (g = v),
                (M = M ? ya(M) : null),
                M !== null &&
                  ((al = H(M)),
                  (r = M.tag),
                  M !== al || (r !== 5 && r !== 27 && r !== 6)) &&
                  (M = null))
              : ((g = null), (M = v)),
            g !== M)
          ) {
            if (
              ((r = Ai),
              (o = "onMouseLeave"),
              (y = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((r = Mi),
                (o = "onPointerLeave"),
                (y = "onPointerEnter"),
                (d = "pointer")),
              (al = g == null ? s : Uu(g)),
              (h = M == null ? s : Uu(M)),
              (s = new r(o, d + "leave", g, a, S)),
              (s.target = al),
              (s.relatedTarget = h),
              (o = null),
              ya(S) === v &&
                ((r = new r(y, d + "enter", M, a, S)),
                (r.target = h),
                (r.relatedTarget = al),
                (o = r)),
              (al = o),
              g && M)
            )
              t: {
                for (r = g, y = M, d = 0, h = r; h; h = gu(h)) d++;
                for (h = 0, o = y; o; o = gu(o)) h++;
                for (; 0 < d - h; ) (r = gu(r)), d--;
                for (; 0 < h - d; ) (y = gu(y)), h--;
                for (; d--; ) {
                  if (r === y || (y !== null && r === y.alternate)) break t;
                  (r = gu(r)), (y = gu(y));
                }
                r = null;
              }
            else r = null;
            g !== null && nd(z, s, g, r, !1),
              M !== null && al !== null && nd(z, al, M, r, !0);
          }
        }
        l: {
          if (
            ((s = v ? Uu(v) : window),
            (g = s.nodeName && s.nodeName.toLowerCase()),
            g === "select" || (g === "input" && s.type === "file"))
          )
            var T = Ni;
          else if (ri(s))
            if (Bi) T = Kv;
            else {
              T = xv;
              var B = Cv;
            }
          else
            (g = s.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (s.type !== "checkbox" && s.type !== "radio")
                ? v && Jn(v.elementType) && (T = Ni)
                : (T = Lv);
          if (T && (T = T(l, v))) {
            qi(z, T, a, S);
            break l;
          }
          B && B(l, s, v),
            l === "focusout" &&
              v &&
              s.type === "number" &&
              v.memoizedProps.value != null &&
              pn(s, "number", s.value);
        }
        switch (((B = v ? Uu(v) : window), l)) {
          case "focusin":
            (ri(B) || B.contentEditable === "true") &&
              ((wa = B), (cc = v), (Gu = null));
            break;
          case "focusout":
            Gu = cc = wa = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (fc = !1), Ci(z, a, S);
            break;
          case "selectionchange":
            if (wv) break;
          case "keydown":
          case "keyup":
            Ci(z, a, S);
        }
        var O;
        if (ac)
          l: {
            switch (l) {
              case "compositionstart":
                var U = "onCompositionStart";
                break l;
              case "compositionend":
                U = "onCompositionEnd";
                break l;
              case "compositionupdate":
                U = "onCompositionUpdate";
                break l;
            }
            U = void 0;
          }
        else
          Ja
            ? Ri(l, a) && (U = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (U = "onCompositionStart");
        U &&
          (Oi &&
            a.locale !== "ko" &&
            (Ja || U !== "onCompositionStart"
              ? U === "onCompositionEnd" && Ja && (O = Ei())
              : ((Qt = S),
                (Fn = "value" in Qt ? Qt.value : Qt.textContent),
                (Ja = !0))),
          (B = Tn(v, U)),
          0 < B.length &&
            ((U = new Di(U, l, null, a, S)),
            z.push({ event: U, listeners: B }),
            O ? (U.data = O) : ((O = Hi(a)), O !== null && (U.data = O)))),
          (O = Xv ? Qv(l, a) : Zv(l, a)) &&
            ((U = Tn(v, "onBeforeInput")),
            0 < U.length &&
              ((B = new Di("onBeforeInput", "beforeinput", null, a, S)),
              z.push({ event: B, listeners: U }),
              (B.data = O))),
          Hy(z, l, v, a, S);
      }
      ud(z, t);
    });
  }
  function de(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Tn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      (e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = _u(l, a)),
          e != null && u.unshift(de(l, e, n)),
          (e = _u(l, t)),
          e != null && u.push(de(l, e, n))),
        (l = l.return);
    }
    return u;
  }
  function gu(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function nd(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var f = a,
        i = f.alternate,
        v = f.stateNode;
      if (((f = f.tag), i !== null && i === u)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        v === null ||
        ((i = v),
        e
          ? ((v = _u(a, n)), v != null && c.unshift(de(a, v, i)))
          : e || ((v = _u(a, n)), v != null && c.push(de(a, v, i)))),
        (a = a.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var By = /\r\n?/g,
    Yy = /\u0000|\uFFFD/g;
  function cd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        By,
        `
`,
      )
      .replace(Yy, "");
  }
  function fd(l, t) {
    return (t = cd(t)), cd(l) === t;
  }
  function An() {}
  function K(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || La(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            La(l, "" + u);
        break;
      case "className":
        He(l, "class", u);
        break;
      case "tabIndex":
        He(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        He(l, a, u);
        break;
      case "style":
        oi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          He(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = Ne("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && K(l, t, "name", e.name, e, null),
                K(l, t, "formEncType", e.formEncType, e, null),
                K(l, t, "formMethod", e.formMethod, e, null),
                K(l, t, "formTarget", e.formTarget, e, null))
              : (K(l, t, "encType", e.encType, e, null),
                K(l, t, "method", e.method, e, null),
                K(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = Ne("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = An);
        break;
      case "onScroll":
        u != null && X("scroll", l);
        break;
      case "onScrollEnd":
        u != null && X("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(m(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = Ne("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        X("beforetoggle", l), X("toggle", l), Re(l, "popover", u);
        break;
      case "xlinkActuate":
        bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        bt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        bt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        bt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        bt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Re(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = dv.get(a) || a), Re(l, a, u));
    }
  }
  function qf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        oi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(m(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? La(l, u)
          : (typeof u == "number" || typeof u == "bigint") && La(l, "" + u);
        break;
      case "onScroll":
        u != null && X("scroll", l);
        break;
      case "onScrollEnd":
        u != null && X("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = An);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ii.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Rl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : Re(l, a, u);
          }
    }
  }
  function Tl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        X("error", l), X("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  K(l, t, n, c, a, null);
              }
          }
        e && K(l, t, "srcSet", a.srcSet, a, null),
          u && K(l, t, "src", a.src, a, null);
        return;
      case "input":
        X("invalid", l);
        var f = (n = c = e = null),
          i = null,
          v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  v = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  f = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(m(137, t));
                  break;
                default:
                  K(l, t, u, S, a, null);
              }
          }
        si(l, n, f, i, v, c, e, !1), re(l);
        return;
      case "select":
        X("invalid", l), (u = c = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((f = a[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                K(l, t, e, f, a, null);
            }
        (t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? xa(l, !!u, t, !1) : a != null && xa(l, !!u, a, !0);
        return;
      case "textarea":
        X("invalid", l), (n = e = u = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(m(91));
                break;
              default:
                K(l, t, c, f, a, null);
            }
        gi(l, u, e, n), re(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                K(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        X("cancel", l), X("close", l);
        break;
      case "iframe":
      case "object":
        X("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ie.length; u++) X(ie[u], l);
        break;
      case "image":
        X("error", l), X("load", l);
        break;
      case "details":
        X("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        X("error", l), X("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((u = a[v]), u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                K(l, t, v, u, a, null);
            }
        return;
      default:
        if (Jn(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && qf(l, t, S, u, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((u = a[f]), u != null && K(l, t, f, u, a, null));
  }
  function Gy(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          f = null,
          i = null,
          v = null,
          S = null;
        for (g in a) {
          var z = a[g];
          if (a.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                u.hasOwnProperty(g) || K(l, t, g, null, u, z);
            }
        }
        for (var s in u) {
          var g = u[s];
          if (((z = a[s]), u.hasOwnProperty(s) && (g != null || z != null)))
            switch (s) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                v = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(m(137, t));
                break;
              default:
                g !== z && K(l, t, s, g, u, z);
            }
        }
        Kn(l, c, f, i, v, S, n, e);
        return;
      case "select":
        g = c = f = s = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                u.hasOwnProperty(n) || K(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                s = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && K(l, t, e, n, u, i);
            }
        (t = f),
          (a = c),
          (u = g),
          s != null
            ? xa(l, !!a, s, !1)
            : !!u != !!a &&
              (t != null ? xa(l, !!a, t, !0) : xa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = s = null;
        for (f in a)
          if (
            ((e = a[f]),
            a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                K(l, t, f, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                s = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && K(l, t, c, e, u, n);
            }
        mi(l, s, g);
        return;
      case "option":
        for (var M in a)
          if (
            ((s = a[M]),
            a.hasOwnProperty(M) && s != null && !u.hasOwnProperty(M))
          )
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                K(l, t, M, null, u, s);
            }
        for (i in u)
          if (
            ((s = u[i]),
            (g = a[i]),
            u.hasOwnProperty(i) && s !== g && (s != null || g != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                K(l, t, i, s, u, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var r in a)
          (s = a[r]),
            a.hasOwnProperty(r) &&
              s != null &&
              !u.hasOwnProperty(r) &&
              K(l, t, r, null, u, s);
        for (v in u)
          if (
            ((s = u[v]),
            (g = a[v]),
            u.hasOwnProperty(v) && s !== g && (s != null || g != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(m(137, t));
                break;
              default:
                K(l, t, v, s, u, g);
            }
        return;
      default:
        if (Jn(t)) {
          for (var al in a)
            (s = a[al]),
              a.hasOwnProperty(al) &&
                s !== void 0 &&
                !u.hasOwnProperty(al) &&
                qf(l, t, al, void 0, u, s);
          for (S in u)
            (s = u[S]),
              (g = a[S]),
              !u.hasOwnProperty(S) ||
                s === g ||
                (s === void 0 && g === void 0) ||
                qf(l, t, S, s, u, g);
          return;
        }
    }
    for (var y in a)
      (s = a[y]),
        a.hasOwnProperty(y) &&
          s != null &&
          !u.hasOwnProperty(y) &&
          K(l, t, y, null, u, s);
    for (z in u)
      (s = u[z]),
        (g = a[z]),
        !u.hasOwnProperty(z) ||
          s === g ||
          (s == null && g == null) ||
          K(l, t, z, s, u, g);
  }
  var Nf = null,
    Bf = null;
  function Dn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function id(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Yf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gf = null;
  function Xy() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Gf
        ? !1
        : ((Gf = l), !0)
      : ((Gf = null), !1);
  }
  var vd = typeof setTimeout == "function" ? setTimeout : void 0,
    Qy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yd = typeof Promise == "function" ? Promise : void 0,
    Zy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof yd < "u"
          ? function (l) {
              return yd.resolve(null).then(l).catch(Vy);
            }
          : vd;
  function Vy(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Xf(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$")) {
          if (u === 0) {
            l.removeChild(e), oe(t);
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = e;
    } while (a);
    oe(t);
  }
  function Qf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qf(a), Ln(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function jy(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Ou])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !== (e.href == null ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = nt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Cy(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = nt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function nt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  function hd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function sd(l, t, a) {
    switch (((t = Dn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  var Fl = new Map(),
    md = new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.ownerDocument;
  }
  var Bt = Z.d;
  Z.d = { f: xy, r: Ly, D: Ky, C: py, L: Jy, m: wy, X: $y, S: Wy, M: ky };
  function xy() {
    var l = Bt.f(),
      t = Sn();
    return l || t;
  }
  function Ly(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? C0(t) : Bt.r(l);
  }
  var Su = typeof document > "u" ? null : document;
  function gd(l, t, a) {
    var u = Su;
    if (u && typeof t == "string" && t) {
      var e = Cl(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        md.has(e) ||
          (md.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Tl(t, "link", l),
            hl(t),
            u.head.appendChild(t)));
    }
  }
  function Ky(l) {
    Bt.D(l), gd("dns-prefetch", l, null);
  }
  function py(l, t) {
    Bt.C(l, t), gd("preconnect", l, t);
  }
  function Jy(l, t, a) {
    Bt.L(l, t, a);
    var u = Su;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + Cl(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + Cl(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + Cl(a.imageSizes) + '"]'))
        : (e += '[href="' + Cl(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = ou(l);
          break;
        case "script":
          n = bu(l);
      }
      Fl.has(n) ||
        ((l = C(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        Fl.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(ve(n))) ||
          (t === "script" && u.querySelector(ye(n))) ||
          ((t = u.createElement("link")),
          Tl(t, "link", l),
          hl(t),
          u.head.appendChild(t)));
    }
  }
  function wy(l, t) {
    Bt.m(l, t);
    var a = Su;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + Cl(u) + '"][href="' + Cl(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = bu(l);
      }
      if (
        !Fl.has(n) &&
        ((l = C({ rel: "modulepreload", href: l }, t)),
        Fl.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ye(n))) return;
        }
        (u = a.createElement("link")),
          Tl(u, "link", l),
          hl(u),
          a.head.appendChild(u);
      }
    }
  }
  function Wy(l, t, a) {
    Bt.S(l, t, a);
    var u = Su;
    if (u && l) {
      var e = ja(u).hoistableStyles,
        n = ou(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = u.querySelector(ve(n)))) f.loading = 5;
        else {
          (l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = Fl.get(n)) && Zf(l, a);
          var i = (c = u.createElement("link"));
          hl(i),
            Tl(i, "link", l),
            (i._p = new Promise(function (v, S) {
              (i.onload = v), (i.onerror = S);
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            On(c, t, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          e.set(n, c);
      }
    }
  }
  function $y(l, t) {
    Bt.X(l, t);
    var a = Su;
    if (a && l) {
      var u = ja(a).hoistableScripts,
        e = bu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ye(e))),
        n ||
          ((l = C({ src: l, async: !0 }, t)),
          (t = Fl.get(e)) && Vf(l, t),
          (n = a.createElement("script")),
          hl(n),
          Tl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function ky(l, t) {
    Bt.M(l, t);
    var a = Su;
    if (a && l) {
      var u = ja(a).hoistableScripts,
        e = bu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ye(e))),
        n ||
          ((l = C({ src: l, async: !0, type: "module" }, t)),
          (t = Fl.get(e)) && Vf(l, t),
          (n = a.createElement("script")),
          hl(n),
          Tl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Sd(l, t, a, u) {
    var e = (e = Yt.current) ? Mn(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = ou(a.href)),
            (a = ja(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = ou(a.href);
          var n = ja(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(ve(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Fl.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Fl.set(l, a),
                n || Fy(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(m(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = bu(a)),
              (a = ja(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function ou(l) {
    return 'href="' + Cl(l) + '"';
  }
  function ve(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function od(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Fy(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Tl(t, "link", a),
        hl(t),
        l.head.appendChild(t));
  }
  function bu(l) {
    return '[src="' + Cl(l) + '"]';
  }
  function ye(l) {
    return "script[async]" + l;
  }
  function bd(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + Cl(a.href) + '"]');
          if (u) return (t.instance = u), hl(u), u;
          var e = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            hl(u),
            Tl(u, "style", e),
            On(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = ou(a.href);
          var n = l.querySelector(ve(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), hl(n), n;
          (u = od(a)),
            (e = Fl.get(e)) && Zf(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            hl(n);
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              (c.onload = f), (c.onerror = i);
            })),
            Tl(n, "link", u),
            (t.state.loading |= 4),
            On(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = bu(a.src)),
            (e = l.querySelector(ye(n)))
              ? ((t.instance = e), hl(e), e)
              : ((u = a),
                (e = Fl.get(n)) && ((u = C({}, a)), Vf(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                hl(e),
                Tl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((u = t.instance), (t.state.loading |= 4), On(u, a.precedence, l));
    return t.instance;
  }
  function On(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var f = u[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Zf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Vf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function zd(l, t, a) {
    if (Un === null) {
      var u = new Map(),
        e = (Un = new Map());
      e.set(a, u);
    } else (e = Un), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Ou] ||
          n[Al] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Ed(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      );
  }
  function Py(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Td(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var he = null;
  function Iy() {}
  function lh(l, t, a) {
    if (he === null) throw Error(m(475));
    var u = he;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var e = ou(a.href),
          n = l.querySelector(ve(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = _n.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            hl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = od(a)),
          (e = Fl.get(e)) && Zf(a, e),
          (n = n.createElement("link")),
          hl(n);
        var c = n;
        (c._p = new Promise(function (f, i) {
          (c.onload = f), (c.onerror = i);
        })),
          Tl(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          !(t.state.loading & 3) &&
          (u.count++,
          (t = _n.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function th() {
    if (he === null) throw Error(m(475));
    var l = he;
    return (
      l.stylesheets && l.count === 0 && jf(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && jf(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function _n() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) jf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Rn = null;
  function jf(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Rn = new Map()),
        t.forEach(ah, l),
        (Rn = null),
        _n.call(l));
  }
  function ah(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Rn.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), Rn.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = _n.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var se = {
    $$typeof: bl,
    Provider: null,
    Consumer: null,
    _currentValue: Vl,
    _currentValue2: Vl,
    _threadCount: 0,
  };
  function uh(l, t, a, u, e, n, c, f) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Cn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Cn(0)),
      (this.hiddenUpdates = Cn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function Ad(l, t, a, u, e, n, c, f, i, v, S, z) {
    return (
      (l = new uh(l, t, a, c, f, i, v, z)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = $l(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = oc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Fc(n),
      l
    );
  }
  function Dd(l) {
    return l ? ((l = ka), l) : ka;
  }
  function Md(l, t, a, u, e, n) {
    (e = Dd(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = pt(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = Jt(l, u, t)),
      a !== null && (_l(a, l, t), ku(a, l, t));
  }
  function Od(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Cf(l, t) {
    Od(l, t), (l = l.alternate) && Od(l, t);
  }
  function Ud(l) {
    if (l.tag === 13) {
      var t = Zt(l, 67108864);
      t !== null && _l(t, l, 67108864), Cf(l, 67108864);
    }
  }
  var Hn = !0;
  function eh(l, t, a, u) {
    var e = R.T;
    R.T = null;
    var n = Z.p;
    try {
      (Z.p = 2), xf(l, t, a, u);
    } finally {
      (Z.p = n), (R.T = e);
    }
  }
  function nh(l, t, a, u) {
    var e = R.T;
    R.T = null;
    var n = Z.p;
    try {
      (Z.p = 8), xf(l, t, a, u);
    } finally {
      (Z.p = n), (R.T = e);
    }
  }
  function xf(l, t, a, u) {
    if (Hn) {
      var e = Lf(u);
      if (e === null) rf(l, t, u, rn, a), Rd(l, u);
      else if (fh(e, l, t, a, u)) u.stopPropagation();
      else if ((Rd(l, u), t & 4 && -1 < ch.indexOf(l))) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = va(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - Bl(c));
                      (f.entanglements[1] |= i), (c &= ~i);
                    }
                    st(n), !(F & 6) && ((sn = it() + 500), fe(0));
                  }
                }
                break;
              case 13:
                (f = Zt(n, 2)), f !== null && _l(f, n, 2), Sn(), Cf(n, 2);
            }
          if (((n = Lf(u)), n === null && rf(l, t, u, rn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else rf(l, t, u, null, a);
    }
  }
  function Lf(l) {
    return (l = Wn(l)), Kf(l);
  }
  var rn = null;
  function Kf(l) {
    if (((rn = null), (l = ya(l)), l !== null)) {
      var t = H(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = W(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (rn = l), null;
  }
  function _d(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (pd()) {
          case Ff:
            return 2;
          case Pf:
            return 8;
          case Me:
          case Jd:
            return 32;
          case If:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1,
    It = null,
    la = null,
    ta = null,
    me = new Map(),
    ge = new Map(),
    aa = [],
    ch =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Rd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        It = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        me.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function Se(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Va(t)), t !== null && Ud(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function fh(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (It = Se(It, l, t, a, u, e)), !0;
      case "dragenter":
        return (la = Se(la, l, t, a, u, e)), !0;
      case "mouseover":
        return (ta = Se(ta, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return me.set(n, Se(me.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ge.set(n, Se(ge.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function Hd(l) {
    var t = ya(l.target);
    if (t !== null) {
      var a = H(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = W(a)), t !== null)) {
            (l.blockedOn = t),
              tv(l.priority, function () {
                if (a.tag === 13) {
                  var u = Zl(),
                    e = Zt(a, u);
                  e !== null && _l(e, a, u), Cf(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Lf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        (wn = u), a.target.dispatchEvent(u), (wn = null);
      } else return (t = Va(a)), t !== null && Ud(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function rd(l, t, a) {
    qn(l) && a.delete(t);
  }
  function ih() {
    (pf = !1),
      It !== null && qn(It) && (It = null),
      la !== null && qn(la) && (la = null),
      ta !== null && qn(ta) && (ta = null),
      me.forEach(rd),
      ge.forEach(rd);
  }
  function Nn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      pf ||
        ((pf = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, ih)));
  }
  var Bn = null;
  function qd(l) {
    Bn !== l &&
      ((Bn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        Bn === l && (Bn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (Kf(u || a) === null) continue;
            break;
          }
          var n = Va(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Bc(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function oe(l) {
    function t(i) {
      return Nn(i, l);
    }
    It !== null && Nn(It, l),
      la !== null && Nn(la, l),
      ta !== null && Nn(ta, l),
      me.forEach(t),
      ge.forEach(t);
    for (var a = 0; a < aa.length; a++) {
      var u = aa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < aa.length && ((a = aa[0]), a.blockedOn === null); )
      Hd(a), a.blockedOn === null && aa.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Rl] || null;
        if (typeof n == "function") c || qd(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Rl] || null))) f = c.formAction;
            else if (Kf(e) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (a[u + 1] = f) : (a.splice(u, 3), (u -= 3)),
            qd(a);
        }
      }
  }
  function Jf(l) {
    this._internalRoot = l;
  }
  (Yn.prototype.render = Jf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      var a = t.current,
        u = Zl();
      Md(a, u, l, t, null, null);
    }),
    (Yn.prototype.unmount = Jf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          l.tag === 0 && su(),
            Md(l.current, 2, null, l, null, null),
            Sn(),
            (t[Za] = null);
        }
      });
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = ni();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < aa.length && t !== 0 && t < aa[a].priority; a++);
      aa.splice(a, 0, l), a === 0 && Hd(l);
    }
  };
  var Nd = Sl.version;
  if (Nd !== "19.0.0") throw Error(m(527, Nd, "19.0.0"));
  Z.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = Ga(t)),
      (l = l !== null ? da(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var dh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    findFiberByHostInstance: ya,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        (Au = Gn.inject(dh)), (Nl = Gn);
      } catch {}
  }
  return (
    (be.createRoot = function (l, t) {
      if (!Ol(l)) throw Error(m(299));
      var a = !1,
        u = "",
        e = $0,
        n = k0,
        c = F0,
        f = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks)),
        (t = Ad(l, 1, !1, null, null, a, u, e, n, c, f, null)),
        (l[Za] = t.current),
        Hf(l.nodeType === 8 ? l.parentNode : l),
        new Jf(t)
      );
    }),
    (be.hydrateRoot = function (l, t, a) {
      if (!Ol(l)) throw Error(m(299));
      var u = !1,
        e = "",
        n = $0,
        c = k0,
        f = F0,
        i = null,
        v = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (i = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (v = a.formState)),
        (t = Ad(l, 1, !0, t, a ?? null, u, e, n, c, f, i, v)),
        (t.context = Dd(null)),
        (a = t.current),
        (u = Zl()),
        (e = pt(u)),
        (e.callback = null),
        Jt(a, e, u),
        (t.current.lanes = u),
        Mu(t, u),
        st(t),
        (l[Za] = t.current),
        Hf(l),
        new Yn(t)
      );
    }),
    (be.version = "19.0.0"),
    be
  );
}
var Vd;
function rh() {
  if (Vd) return wf.exports;
  Vd = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (Sl) {
        console.error(Sl);
      }
  }
  return A(), (wf.exports = Hh()), wf.exports;
}
var qh = rh(),
  Nh = xd();
/**
 * react-router v7.1.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bh(A) {
  return ql.createElement(mh, { flushSync: Nh.flushSync, ...A });
}
var _ = null,
  ze = null;
function Yh() {
  !_ &&
    window.__reactRouterContext &&
    window.__reactRouterManifest &&
    window.__reactRouterRouteModules &&
    (_ = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: !1,
    });
}
function Gh() {
  var Ol;
  if ((Yh(), !_))
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`",
    );
  let A = _;
  if (!_.stateDecodingPromise) {
    let Pl = _.context.stream;
    Cd(Pl, "No stream found for single fetch decoding"),
      (_.context.stream = void 0),
      (_.stateDecodingPromise = gh(Pl, window)
        .then((il) => {
          (_.context.state = il.value), (A.stateDecodingPromise.value = !0);
        })
        .catch((il) => {
          A.stateDecodingPromise.error = il;
        }));
  }
  if (_.stateDecodingPromise.error) throw _.stateDecodingPromise.error;
  if (!_.stateDecodingPromise.value) throw _.stateDecodingPromise;
  let Sl = Sh(
      _.manifest.routes,
      _.routeModules,
      _.context.state,
      _.context.isSpaMode,
    ),
    G;
  if (!_.context.isSpaMode) {
    G = { ..._.context.state, loaderData: { ..._.context.state.loaderData } };
    let Pl = oh(
      Sl,
      window.location,
      (Ol = window.__reactRouterContext) == null ? void 0 : Ol.basename,
    );
    if (Pl)
      for (let il of Pl) {
        let ol = il.route.id,
          D = _.routeModules[ol],
          b = _.manifest.routes[ol];
        D &&
        b &&
        bh(b, D, _.context.isSpaMode) &&
        (D.HydrateFallback || !b.hasLoader)
          ? delete G.loaderData[ol]
          : b && !b.hasLoader && (G.loaderData[ol] = null);
      }
    G && G.errors && (G.errors = zh(G.errors));
  }
  let m = Eh({
    routes: Sl,
    history: Th(),
    basename: _.context.basename,
    hydrationData: G,
    mapRouteProperties: Ah,
    dataStrategy: Dh(_.manifest, _.routeModules, () => m),
    patchRoutesOnNavigation: Mh(
      _.manifest,
      _.routeModules,
      _.context.isSpaMode,
      _.context.basename,
    ),
  });
  return (
    (_.router = m),
    m.state.initialized && ((_.routerInitialized = !0), m.initialize()),
    (m.createRoutesForHMR = Oh),
    (window.__reactRouterDataRouter = m),
    m
  );
}
function Xh() {
  ze || (ze = Gh());
  let [A, Sl] = ql.useState(void 0),
    [G, m] = ql.useState(ze.state.location);
  return (
    ql.useLayoutEffect(() => {
      _ &&
        _.router &&
        !_.routerInitialized &&
        ((_.routerInitialized = !0), _.router.initialize());
    }, []),
    ql.useLayoutEffect(() => {
      if (_ && _.router)
        return _.router.subscribe((Ol) => {
          Ol.location !== G && m(Ol.location);
        });
    }, [G]),
    Cd(_, "ssrInfo unavailable for HydratedRouter"),
    yh(ze, _.manifest, _.routeModules, _.context.isSpaMode),
    ql.createElement(
      ql.Fragment,
      null,
      ql.createElement(
        hh.Provider,
        {
          value: {
            manifest: _.manifest,
            routeModules: _.routeModules,
            future: _.context.future,
            criticalCss: A,
            isSpaMode: _.context.isSpaMode,
          },
        },
        ql.createElement(
          sh,
          { location: G },
          ql.createElement(Bh, { router: ze }),
        ),
      ),
      ql.createElement(ql.Fragment, null),
    )
  );
}
ql.startTransition(() => {
  qh.hydrateRoot(document, Bd.jsx(ql.StrictMode, { children: Bd.jsx(Xh, {}) }));
});
