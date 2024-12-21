import { w as p, c as d, a as h } from "./compiler-runtime-fCN3WmfH.js";
import {
  n as s,
  M as x,
  L as f,
  S as j,
  o as y,
  O as E,
  p as S,
} from "./chunk-W3HZJLUQ-BHNC9aHS.js";
const w = "/assets/app-QBGiuRxH.css",
  b = () => [{ rel: "stylesheet", href: w }];
function B(m) {
  const t = d.c(5),
    { children: e } = m;
  let r;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((r = s.jsxs("head", {
        children: [
          s.jsx("meta", { charSet: "utf-8" }),
          s.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }),
          s.jsx(x, {}),
          s.jsx(f, {}),
        ],
      })),
      (t[0] = r))
    : (r = t[0]);
  let o, n;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((o = s.jsx(j, {})), (n = s.jsx(y, {})), (t[1] = o), (t[2] = n))
    : ((o = t[1]), (n = t[2]));
  let c;
  return (
    t[3] !== e
      ? ((c = s.jsxs("html", {
          lang: "en",
          children: [r, s.jsxs("body", { children: [e, o, n] })],
        })),
        (t[3] = e),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
const g = p(function () {
    const t = d.c(1);
    let e;
    return (
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = s.jsx(E, {})), (t[0] = e))
        : (e = t[0]),
      e
    );
  }),
  k = h(function (t) {
    const e = d.c(10),
      { error: r } = t;
    let o = "Oops!",
      n = "An unexpected error occurred.",
      c;
    S(r) &&
      ((o = r.status === 404 ? "404" : "Error"),
      (n =
        r.status === 404
          ? "The requested page could not be found."
          : r.statusText || "An unexpected error occurred."));
    let l;
    e[0] !== o
      ? ((l = s.jsx("h1", { children: o })), (e[0] = o), (e[1] = l))
      : (l = e[1]);
    let a;
    e[2] !== n
      ? ((a = s.jsx("p", { children: n })), (e[2] = n), (e[3] = a))
      : (a = e[3]);
    let i;
    e[4] !== c ? ((i = c), (e[4] = c), (e[5] = i)) : (i = e[5]);
    let u;
    return (
      e[6] !== l || e[7] !== a || e[8] !== i
        ? ((u = s.jsxs("main", {
            className: "pt-16 p-4 container mx-auto",
            children: [l, a, i],
          })),
          (e[6] = l),
          (e[7] = a),
          (e[8] = i),
          (e[9] = u))
        : (u = e[9]),
      u
    );
  });
export { k as ErrorBoundary, B as Layout, g as default, b as links };
