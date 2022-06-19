!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = n(2),
      a = self;
    r.messageManager.onOutgoingMessage.bind(() => {
      let e = r.messageManager.getOutgoingMessages();
      for (let t of e) a.postMessage(t.msg, t.transferables);
    });
    let i = (e) => {
      if (e && e.data && "wasm" === e.data.t) {
        let t = location.href.startsWith("blob") ? e.data.url : n(13);
        t.default && (t = t.default),
          r.launchWorkerServer(t),
          a.removeEventListener("message", i);
      }
    };
    a.addEventListener("message", i),
      a.addEventListener("message", (e) => {
        r.messageManager.postIncomingMessage(e.data);
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__awaiter) ||
      function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, u);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.launchWorkerServer = t.messageManager = void 0);
    const a = n(3),
      i = n(7),
      o = n(8),
      u = n(11),
      c = n(14);
    (t.messageManager = new u.MsgManager()),
      (t.launchWorkerServer = function (e) {
        return r(this, void 0, void 0, function* () {
          let n = a.default({
            locateFile: (t, n) => (t.endsWith("zcv.wasm") ? e : n + t),
            onRuntimeInitialized: () => {
              let e = i.getRuntimeObject(n),
                r = new o.zappar_server(e, (e, n) => {
                  t.messageManager.postOutgoingMessage(
                    { p: e, t: "zappar", d: n },
                    [n]
                  );
                });
              t.messageManager.postOutgoingMessage("loaded", []),
                t.messageManager.onIncomingMessage.bind((n) => {
                  var a;
                  switch (n.t) {
                    case "zappar":
                      r.processBuffer(n.d),
                        t.messageManager.postOutgoingMessage(
                          { t: "buf", d: n.d },
                          [n.d]
                        );
                      break;
                    case "buf":
                      null === (a = r.serializersByPipelineId.get(n.p)) ||
                        void 0 === a ||
                        a.bufferReturn(n.d);
                      break;
                    case "cameraFrameC2S":
                      let i = n,
                        o = c.mat4.create();
                      i.userFacing && c.mat4.fromScaling(o, [-1, 1, -1]);
                      let u = r._pipeline_by_instance.get(i.p);
                      u &&
                        (e.pipeline_camera_frame_submit(
                          u,
                          i.d,
                          i.width,
                          i.height,
                          i.token,
                          o
                        ),
                        e.pipeline_frame_update(u),
                        r.exploreState());
                      let s = {
                        token: i.token,
                        d: i.d,
                        p: i.p,
                        t: "cameraFrameRecycleS2C",
                      };
                      t.messageManager.postOutgoingMessage(s, [i.d]);
                  }
                });
            },
          });
        });
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var n,
          r =
            ((n =
              "undefined" != typeof document && document.currentScript
                ? document.currentScript.src
                : void 0),
            function (t) {
              var r;
              (t = t || {}), r || (r = void 0 !== t ? t : {});
              var a,
                i = {};
              for (a in r) r.hasOwnProperty(a) && (i[a] = r[a]);
              (r.arguments = []),
                (r.thisProgram = "./this.program"),
                (r.quit = function (e, t) {
                  throw t;
                }),
                (r.preRun = []),
                (r.postRun = []);
              var o = "";
              function u(e) {
                return r.locateFile ? r.locateFile(e, o) : o + e;
              }
              (o = self.location.href),
                n && (o = n),
                (o =
                  0 !== o.indexOf("blob:")
                    ? o.substr(0, o.lastIndexOf("/") + 1)
                    : ""),
                (r.read = function (e) {
                  var t = new XMLHttpRequest();
                  return t.open("GET", e, !1), t.send(null), t.responseText;
                }),
                (r.readBinary = function (e) {
                  var t = new XMLHttpRequest();
                  return (
                    t.open("GET", e, !1),
                    (t.responseType = "arraybuffer"),
                    t.send(null),
                    new Uint8Array(t.response)
                  );
                }),
                (r.readAsync = function (e, t, n) {
                  var r = new XMLHttpRequest();
                  r.open("GET", e, !0),
                    (r.responseType = "arraybuffer"),
                    (r.onload = function () {
                      200 == r.status || (0 == r.status && r.response)
                        ? t(r.response)
                        : n();
                    }),
                    (r.onerror = n),
                    r.send(null);
                }),
                (r.setWindowTitle = function (e) {
                  document.title = e;
                });
              var c =
                  r.print ||
                  ("undefined" != typeof console
                    ? console.log.bind(console)
                    : "undefined" != typeof print
                    ? print
                    : null),
                s =
                  r.printErr ||
                  ("undefined" != typeof printErr
                    ? printErr
                    : ("undefined" != typeof console &&
                        console.warn.bind(console)) ||
                      c);
              for (a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
              function _(e) {
                var t = S;
                return (S = (S + e + 15) & -16), t;
              }
              function f(e) {
                var t = E[j >> 2];
                return (
                  (e = (t + e + 15) & -16),
                  (E[j >> 2] = e),
                  e >= Y && !H() ? ((E[j >> 2] = t), 0) : t
                );
              }
              function l(e) {
                var t;
                return t || (t = 16), Math.ceil(e / t) * t;
              }
              i = void 0;
              var p,
                d = {
                  "f64-rem": function (e, t) {
                    return e % t;
                  },
                  debugger: function () {},
                },
                h = {};
              function m(e, t, n) {
                return n && n.length
                  ? r["dynCall_" + e].apply(null, [t].concat(n))
                  : r["dynCall_" + e].call(null, t);
              }
              var b = !1;
              function y(e, t) {
                e || wr("Assertion failed: " + t);
              }
              function v(e) {
                var t = r["_" + e];
                return (
                  y(
                    t,
                    "Cannot call unknown function " +
                      e +
                      ", make sure it is exported"
                  ),
                  t
                );
              }
              var g = {
                  stackSave: function () {
                    vr();
                  },
                  stackRestore: function () {
                    yr();
                  },
                  arrayToC: function (e) {
                    var t = br(e.length);
                    return z.set(e, t), t;
                  },
                  stringToC: function (e) {
                    var t = 0;
                    if (null != e && 0 !== e) {
                      var n = 1 + (e.length << 2);
                      (t = br(n)), G(e, A, t, n);
                    }
                    return t;
                  },
                },
                w = { string: g.stringToC, array: g.arrayToC };
              function M(e) {
                var t;
                if (0 === t || !e) return "";
                for (
                  var n, r = 0, a = 0;
                  (r |= n = A[(e + a) >> 0]),
                    (0 != n || t) && (a++, !t || a != t);

                );
                if ((t || (t = a), (n = ""), 128 > r)) {
                  for (; 0 < t; )
                    (r = String.fromCharCode.apply(
                      String,
                      A.subarray(e, e + Math.min(t, 1024))
                    )),
                      (n = n ? n + r : r),
                      (e += 1024),
                      (t -= 1024);
                  return n;
                }
                return q(e);
              }
              var k,
                z,
                A,
                x,
                L,
                E,
                T,
                O,
                C,
                S,
                I,
                P,
                B,
                F,
                D,
                j,
                R =
                  "undefined" != typeof TextDecoder
                    ? new TextDecoder("utf8")
                    : void 0;
              function V(e, t) {
                for (var n = t; e[n]; ) ++n;
                if (16 < n - t && e.subarray && R)
                  return R.decode(e.subarray(t, n));
                for (n = ""; ; ) {
                  var r = e[t++];
                  if (!r) return n;
                  if (128 & r) {
                    var a = 63 & e[t++];
                    if (192 == (224 & r))
                      n += String.fromCharCode(((31 & r) << 6) | a);
                    else {
                      var i = 63 & e[t++];
                      if (224 == (240 & r)) r = ((15 & r) << 12) | (a << 6) | i;
                      else {
                        var o = 63 & e[t++];
                        if (240 == (248 & r))
                          r = ((7 & r) << 18) | (a << 12) | (i << 6) | o;
                        else {
                          var u = 63 & e[t++];
                          r =
                            248 == (252 & r)
                              ? ((3 & r) << 24) |
                                (a << 18) |
                                (i << 12) |
                                (o << 6) |
                                u
                              : ((1 & r) << 30) |
                                (a << 24) |
                                (i << 18) |
                                (o << 12) |
                                (u << 6) |
                                (63 & e[t++]);
                        }
                      }
                      65536 > r
                        ? (n += String.fromCharCode(r))
                        : ((r -= 65536),
                          (n += String.fromCharCode(
                            55296 | (r >> 10),
                            56320 | (1023 & r)
                          )));
                    }
                  } else n += String.fromCharCode(r);
                }
              }
              function q(e) {
                return V(A, e);
              }
              function G(e, t, n, r) {
                if (!(0 < r)) return 0;
                var a = n;
                r = n + r - 1;
                for (var i = 0; i < e.length; ++i) {
                  var o = e.charCodeAt(i);
                  if (
                    (55296 <= o &&
                      57343 >= o &&
                      (o =
                        (65536 + ((1023 & o) << 10)) |
                        (1023 & e.charCodeAt(++i))),
                    127 >= o)
                  ) {
                    if (n >= r) break;
                    t[n++] = o;
                  } else {
                    if (2047 >= o) {
                      if (n + 1 >= r) break;
                      t[n++] = 192 | (o >> 6);
                    } else {
                      if (65535 >= o) {
                        if (n + 2 >= r) break;
                        t[n++] = 224 | (o >> 12);
                      } else {
                        if (2097151 >= o) {
                          if (n + 3 >= r) break;
                          t[n++] = 240 | (o >> 18);
                        } else {
                          if (67108863 >= o) {
                            if (n + 4 >= r) break;
                            t[n++] = 248 | (o >> 24);
                          } else {
                            if (n + 5 >= r) break;
                            (t[n++] = 252 | (o >> 30)),
                              (t[n++] = 128 | ((o >> 24) & 63));
                          }
                          t[n++] = 128 | ((o >> 18) & 63);
                        }
                        t[n++] = 128 | ((o >> 12) & 63);
                      }
                      t[n++] = 128 | ((o >> 6) & 63);
                    }
                    t[n++] = 128 | (63 & o);
                  }
                }
                return (t[n] = 0), n - a;
              }
              function N(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                  var r = e.charCodeAt(n);
                  55296 <= r &&
                    57343 >= r &&
                    (r =
                      (65536 + ((1023 & r) << 10)) |
                      (1023 & e.charCodeAt(++n))),
                    127 >= r
                      ? ++t
                      : (t =
                          2047 >= r
                            ? t + 2
                            : 65535 >= r
                            ? t + 3
                            : 2097151 >= r
                            ? t + 4
                            : 67108863 >= r
                            ? t + 5
                            : t + 6);
                }
                return t;
              }
              function U(e, t) {
                return 0 < e % t && (e += t - (e % t)), e;
              }
              function W() {
                (r.HEAP8 = z = new Int8Array(k)),
                  (r.HEAP16 = x = new Int16Array(k)),
                  (r.HEAP32 = E = new Int32Array(k)),
                  (r.HEAPU8 = A = new Uint8Array(k)),
                  (r.HEAPU16 = L = new Uint16Array(k)),
                  (r.HEAPU32 = T = new Uint32Array(k)),
                  (r.HEAPF32 = O = new Float32Array(k)),
                  (r.HEAPF64 = C = new Float64Array(k));
              }
              function H() {
                var e = r.usingWasm ? 65536 : 16777216,
                  t = 2147483648 - e;
                if (E[j >> 2] > t) return !1;
                var n = Y;
                for (Y = Math.max(Y, 16777216); Y < E[j >> 2]; )
                  Y =
                    536870912 >= Y
                      ? U(2 * Y, e)
                      : Math.min(U((3 * Y + 2147483648) / 4, e), t);
                return (e = r.reallocBuffer(Y)) && e.byteLength == Y
                  ? ((r.buffer = k = e), W(), !0)
                  : ((Y = n), !1);
              }
              "undefined" != typeof TextDecoder && new TextDecoder("utf-16le"),
                (S = j = 0),
                (I = !1),
                r.reallocBuffer ||
                  (r.reallocBuffer = function (e) {
                    try {
                      var t = z,
                        n = new ArrayBuffer(e);
                      new Int8Array(n).set(t);
                    } catch (e) {
                      return !1;
                    }
                    return !!pr(n) && n;
                  });
              try {
                Function.prototype.call.bind(
                  Object.getOwnPropertyDescriptor(
                    ArrayBuffer.prototype,
                    "byteLength"
                  ).get
                )(new ArrayBuffer(4));
              } catch (Fn) {}
              var Z = r.TOTAL_STACK || 5242880,
                Y = r.TOTAL_MEMORY || 16777216;
              function X(e) {
                for (; 0 < e.length; ) {
                  var t = e.shift();
                  if ("function" == typeof t) t();
                  else {
                    var n = t.g;
                    "number" == typeof n
                      ? void 0 === t.P
                        ? r.dynCall_v(n)
                        : r.dynCall_vi(n, t.P)
                      : n(void 0 === t.P ? null : t.P);
                  }
                }
              }
              Y < Z &&
                s(
                  "TOTAL_MEMORY should be larger than TOTAL_STACK, was " +
                    Y +
                    "! (TOTAL_STACK=" +
                    Z +
                    ")"
                ),
                r.buffer
                  ? (k = r.buffer)
                  : ("object" == typeof WebAssembly &&
                    "function" == typeof WebAssembly.Memory
                      ? ((r.wasmMemory = new WebAssembly.Memory({
                          initial: Y / 65536,
                        })),
                        (k = r.wasmMemory.buffer))
                      : (k = new ArrayBuffer(Y)),
                    (r.buffer = k)),
                W();
              var K = [],
                J = [],
                Q = [],
                $ = [],
                ee = [],
                te = !1;
              function ne() {
                var e = r.preRun.shift();
                K.unshift(e);
              }
              var re = Math.abs,
                ae = Math.ceil,
                ie = Math.floor,
                oe = Math.min,
                ue = 0,
                ce = null,
                se = null;
              function _e() {
                ue++, r.monitorRunDependencies && r.monitorRunDependencies(ue);
              }
              function fe() {
                if (
                  (ue--,
                  r.monitorRunDependencies && r.monitorRunDependencies(ue),
                  0 == ue &&
                    (null !== ce && (clearInterval(ce), (ce = null)), se))
                ) {
                  var e = se;
                  (se = null), e();
                }
              }
              function le(e) {
                return String.prototype.startsWith
                  ? e.startsWith("data:application/octet-stream;base64,")
                  : 0 === e.indexOf("data:application/octet-stream;base64,");
              }
              (r.preloadedImages = {}),
                (r.preloadedAudios = {}),
                (function () {
                  function e() {
                    try {
                      if (r.wasmBinary) return new Uint8Array(r.wasmBinary);
                      if (r.readBinary) return r.readBinary(i);
                      throw "both async and sync fetching of the wasm failed";
                    } catch (e) {
                      wr(e);
                    }
                  }
                  function t() {
                    return r.wasmBinary || "function" != typeof fetch
                      ? new Promise(function (t) {
                          t(e());
                        })
                      : fetch(i, { credentials: "same-origin" })
                          .then(function (e) {
                            if (!e.ok)
                              throw (
                                "failed to load wasm binary file at '" + i + "'"
                              );
                            return e.arrayBuffer();
                          })
                          .catch(function () {
                            return e();
                          });
                  }
                  function n(e) {
                    function n(e) {
                      if ((_ = e.exports).memory) {
                        e = _.memory;
                        var t = r.buffer;
                        e.byteLength < t.byteLength &&
                          s(
                            "the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here"
                          ),
                          (t = new Int8Array(t)),
                          new Int8Array(e).set(t),
                          (r.buffer = k = e),
                          W();
                      }
                      (r.asm = _), (r.usingWasm = !0), fe();
                    }
                    function a(e) {
                      n(e.instance);
                    }
                    function o(e) {
                      t()
                        .then(function (e) {
                          return WebAssembly.instantiate(e, c);
                        })
                        .then(e, function (e) {
                          s("failed to asynchronously prepare wasm: " + e),
                            wr(e);
                        });
                    }
                    if ("object" != typeof WebAssembly)
                      return s("no native wasm support detected"), !1;
                    if (!(r.wasmMemory instanceof WebAssembly.Memory))
                      return s("no native wasm Memory in use"), !1;
                    if (
                      ((e.memory = r.wasmMemory),
                      (c.global = { NaN: NaN, Infinity: 1 / 0 }),
                      (c["global.Math"] = Math),
                      (c.env = e),
                      _e(),
                      r.instantiateWasm)
                    )
                      try {
                        return r.instantiateWasm(c, n);
                      } catch (e) {
                        return (
                          s(
                            "Module.instantiateWasm callback failed with error: " +
                              e
                          ),
                          !1
                        );
                      }
                    return (
                      r.wasmBinary ||
                      "function" != typeof WebAssembly.instantiateStreaming ||
                      le(i) ||
                      "function" != typeof fetch
                        ? o(a)
                        : WebAssembly.instantiateStreaming(
                            fetch(i, { credentials: "same-origin" }),
                            c
                          ).then(a, function (e) {
                            s("wasm streaming compile failed: " + e),
                              s("falling back to ArrayBuffer instantiation"),
                              o(a);
                          }),
                      {}
                    );
                  }
                  var a = "zcv.wast",
                    i = "zcv.wasm",
                    o = "zcv.temp.asm.js";
                  le(a) || (a = u(a)), le(i) || (i = u(i)), le(o) || (o = u(o));
                  var c = { global: null, env: null, asm2wasm: d, parent: r },
                    _ = null;
                  r.asmPreload = r.asm;
                  var f = r.reallocBuffer;
                  r.reallocBuffer = function (e) {
                    if ("asmjs" === l) var t = f(e);
                    else
                      e: {
                        e = U(e, r.usingWasm ? 65536 : 16777216);
                        var n = r.buffer.byteLength;
                        if (r.usingWasm)
                          try {
                            t =
                              -1 !== r.wasmMemory.grow((e - n) / 65536)
                                ? (r.buffer = r.wasmMemory.buffer)
                                : null;
                            break e;
                          } catch (e) {
                            t = null;
                            break e;
                          }
                        t = void 0;
                      }
                    return t;
                  };
                  var l = "";
                  r.asm = function (e, t) {
                    if (!t.table) {
                      void 0 === (e = r.wasmTableSize) && (e = 1024);
                      var a = r.wasmMaxTableSize;
                      (t.table =
                        "object" == typeof WebAssembly &&
                        "function" == typeof WebAssembly.Table
                          ? void 0 !== a
                            ? new WebAssembly.Table({
                                initial: e,
                                maximum: a,
                                element: "anyfunc",
                              })
                            : new WebAssembly.Table({
                                initial: e,
                                element: "anyfunc",
                              })
                          : Array(e)),
                        (r.wasmTable = t.table);
                    }
                    return (
                      t.__memory_base || (t.__memory_base = r.STATIC_BASE),
                      t.__table_base || (t.__table_base = 0),
                      y((t = n(t)), "no binaryen method succeeded."),
                      t
                    );
                  };
                })();
              var pe = [
                function () {
                  if (self.crypto && self.crypto.getRandomValues) {
                    var e = new Uint32Array(1);
                    return self.crypto.getRandomValues(e), e[0];
                  }
                  return 9007199254740991 * Math.random();
                },
              ];
              (S = 433680),
                J.push(
                  {
                    g: function () {
                      Wn();
                    },
                  },
                  {
                    g: function () {
                      er();
                    },
                  },
                  {
                    g: function () {
                      cr();
                    },
                  },
                  {
                    g: function () {
                      lr();
                    },
                  },
                  {
                    g: function () {
                      _r();
                    },
                  },
                  {
                    g: function () {
                      Jn();
                    },
                  },
                  {
                    g: function () {
                      $n();
                    },
                  },
                  {
                    g: function () {
                      Qn();
                    },
                  },
                  {
                    g: function () {
                      Yn();
                    },
                  },
                  {
                    g: function () {
                      Kn();
                    },
                  },
                  {
                    g: function () {
                      Xn();
                    },
                  },
                  {
                    g: function () {
                      sr();
                    },
                  },
                  {
                    g: function () {
                      Hn();
                    },
                  },
                  {
                    g: function () {
                      tr();
                    },
                  },
                  {
                    g: function () {
                      Zn();
                    },
                  },
                  {
                    g: function () {
                      ar();
                    },
                  },
                  {
                    g: function () {
                      nr();
                    },
                  },
                  {
                    g: function () {
                      rr();
                    },
                  },
                  {
                    g: function () {
                      ir();
                    },
                  },
                  {
                    g: function () {
                      or();
                    },
                  },
                  {
                    g: function () {
                      ur();
                    },
                  }
                ),
                (r.STATIC_BASE = 1024),
                (r.STATIC_BUMP = 432656);
              var de = S;
              S += 16;
              var he = {};
              function me() {
                wr();
              }
              function be() {
                return (
                  "undefined" != typeof dateNow ||
                  (self.performance && self.performance.now)
                );
              }
              var ye = {
                I: 1,
                u: 2,
                Fc: 3,
                Bb: 4,
                M: 5,
                ja: 6,
                Ua: 7,
                Zb: 8,
                B: 9,
                ib: 10,
                fa: 11,
                Pc: 11,
                ya: 12,
                W: 13,
                ub: 14,
                lc: 15,
                ga: 16,
                ha: 17,
                Qc: 18,
                Y: 19,
                Z: 20,
                N: 21,
                i: 22,
                Ub: 23,
                wa: 24,
                D: 25,
                Mc: 26,
                vb: 27,
                hc: 28,
                O: 29,
                Cc: 30,
                Nb: 31,
                vc: 32,
                rb: 33,
                zc: 34,
                cc: 42,
                yb: 43,
                jb: 44,
                Eb: 45,
                Fb: 46,
                Gb: 47,
                Mb: 48,
                Nc: 49,
                Xb: 50,
                Db: 51,
                ob: 35,
                $b: 37,
                $a: 52,
                cb: 53,
                Rc: 54,
                Vb: 55,
                eb: 56,
                fb: 57,
                pb: 35,
                gb: 59,
                jc: 60,
                Yb: 61,
                Jc: 62,
                ic: 63,
                dc: 64,
                ec: 65,
                Bc: 66,
                ac: 67,
                Xa: 68,
                Gc: 69,
                kb: 70,
                wc: 71,
                Pb: 72,
                sb: 73,
                bb: 74,
                qc: 76,
                ab: 77,
                Ac: 78,
                Hb: 79,
                Ib: 80,
                Lb: 81,
                Kb: 82,
                Jb: 83,
                kc: 38,
                ia: 39,
                Qb: 36,
                X: 40,
                rc: 95,
                uc: 96,
                nb: 104,
                Wb: 105,
                Ya: 97,
                yc: 91,
                oc: 88,
                fc: 92,
                Dc: 108,
                mb: 111,
                Va: 98,
                lb: 103,
                Tb: 101,
                Rb: 100,
                Kc: 110,
                wb: 112,
                xb: 113,
                Ab: 115,
                Za: 114,
                qb: 89,
                Ob: 90,
                xc: 93,
                Ec: 94,
                Wa: 99,
                Sb: 102,
                Cb: 106,
                mc: 107,
                Lc: 109,
                Oc: 87,
                tb: 122,
                Hc: 116,
                pc: 95,
                bc: 123,
                zb: 84,
                sc: 75,
                hb: 125,
                nc: 131,
                tc: 130,
                Ic: 86,
              };
              function ve(e) {
                return (
                  r.___errno_location && (E[r.___errno_location() >> 2] = e), e
                );
              }
              function ge(e, t) {
                if (0 === e) e = Date.now();
                else {
                  if (1 !== e || !be()) return ve(ye.i), -1;
                  e = me();
                }
                return (
                  (E[t >> 2] = (e / 1e3) | 0),
                  (E[(t + 4) >> 2] = ((e % 1e3) * 1e6) | 0),
                  0
                );
              }
              var we = 0,
                Me = [],
                ke = {};
              function ze(e) {
                if (!e || ke[e]) return e;
                for (var t in ke) {
                  var n = +t;
                  if (ke[n].ka === e) return n;
                }
                return e;
              }
              function Ae(e) {
                if (e) {
                  var t = ke[e];
                  y(0 < t.J),
                    t.J--,
                    0 !== t.J ||
                      t.L ||
                      (t.oa && r.dynCall_vi(t.oa, e), delete ke[e], xe(e));
                }
              }
              function xe(e) {
                try {
                  return dr(e);
                } catch (e) {}
              }
              function Le() {
                var e = Me.pop();
                throw (
                  ((e = ze(e)),
                  ke[e].L || (Me.push(e), (ke[e].L = !0)),
                  (we = e),
                  e +
                    " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
                );
              }
              var Ee = {
                0: "Success",
                1: "Not super-user",
                2: "No such file or directory",
                3: "No such process",
                4: "Interrupted system call",
                5: "I/O error",
                6: "No such device or address",
                7: "Arg list too long",
                8: "Exec format error",
                9: "Bad file number",
                10: "No children",
                11: "No more processes",
                12: "Not enough core",
                13: "Permission denied",
                14: "Bad address",
                15: "Block device required",
                16: "Mount device busy",
                17: "File exists",
                18: "Cross-device link",
                19: "No such device",
                20: "Not a directory",
                21: "Is a directory",
                22: "Invalid argument",
                23: "Too many open files in system",
                24: "Too many open files",
                25: "Not a typewriter",
                26: "Text file busy",
                27: "File too large",
                28: "No space left on device",
                29: "Illegal seek",
                30: "Read only file system",
                31: "Too many links",
                32: "Broken pipe",
                33: "Math arg out of domain of func",
                34: "Math result not representable",
                35: "File locking deadlock error",
                36: "File or path name too long",
                37: "No record locks available",
                38: "Function not implemented",
                39: "Directory not empty",
                40: "Too many symbolic links",
                42: "No message of desired type",
                43: "Identifier removed",
                44: "Channel number out of range",
                45: "Level 2 not synchronized",
                46: "Level 3 halted",
                47: "Level 3 reset",
                48: "Link number out of range",
                49: "Protocol driver not attached",
                50: "No CSI structure available",
                51: "Level 2 halted",
                52: "Invalid exchange",
                53: "Invalid request descriptor",
                54: "Exchange full",
                55: "No anode",
                56: "Invalid request code",
                57: "Invalid slot",
                59: "Bad font file fmt",
                60: "Device not a stream",
                61: "No data (for no delay io)",
                62: "Timer expired",
                63: "Out of streams resources",
                64: "Machine is not on the network",
                65: "Package not installed",
                66: "The object is remote",
                67: "The link has been severed",
                68: "Advertise error",
                69: "Srmount error",
                70: "Communication error on send",
                71: "Protocol error",
                72: "Multihop attempted",
                73: "Cross mount point (not really error)",
                74: "Trying to read unreadable message",
                75: "Value too large for defined data type",
                76: "Given log. name not unique",
                77: "f.d. invalid for this operation",
                78: "Remote address changed",
                79: "Can   access a needed shared lib",
                80: "Accessing a corrupted shared lib",
                81: ".lib section in a.out corrupted",
                82: "Attempting to link in too many libs",
                83: "Attempting to exec a shared library",
                84: "Illegal byte sequence",
                86: "Streams pipe error",
                87: "Too many users",
                88: "Socket operation on non-socket",
                89: "Destination address required",
                90: "Message too long",
                91: "Protocol wrong type for socket",
                92: "Protocol not available",
                93: "Unknown protocol",
                94: "Socket type not supported",
                95: "Not supported",
                96: "Protocol family not supported",
                97: "Address family not supported by protocol family",
                98: "Address already in use",
                99: "Address not available",
                100: "Network interface is not configured",
                101: "Network is unreachable",
                102: "Connection reset by network",
                103: "Connection aborted",
                104: "Connection reset by peer",
                105: "No buffer space available",
                106: "Socket is already connected",
                107: "Socket is not connected",
                108: "Can't send after socket shutdown",
                109: "Too many references",
                110: "Connection timed out",
                111: "Connection refused",
                112: "Host is down",
                113: "Host is unreachable",
                114: "Socket already connected",
                115: "Connection already in progress",
                116: "Stale file handle",
                122: "Quota exceeded",
                123: "No medium (in tape drive)",
                125: "Operation canceled",
                130: "Previous owner died",
                131: "State not recoverable",
              };
              function Te(e, t) {
                for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                  var a = e[r];
                  "." === a
                    ? e.splice(r, 1)
                    : ".." === a
                    ? (e.splice(r, 1), n++)
                    : n && (e.splice(r, 1), n--);
                }
                if (t) for (; n; n--) e.unshift("..");
                return e;
              }
              function Oe(e) {
                var t = "/" === e.charAt(0),
                  n = "/" === e.substr(-1);
                return (
                  (e = Te(
                    e.split("/").filter(function (e) {
                      return !!e;
                    }),
                    !t
                  ).join("/")) ||
                    t ||
                    (e = "."),
                  e && n && (e += "/"),
                  (t ? "/" : "") + e
                );
              }
              function Ce(e) {
                var t =
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                    .exec(e)
                    .slice(1);
                return (
                  (e = t[0]),
                  (t = t[1]),
                  e || t ? (t && (t = t.substr(0, t.length - 1)), e + t) : "."
                );
              }
              function Se(e) {
                if ("/" === e) return "/";
                var t = e.lastIndexOf("/");
                return -1 === t ? e : e.substr(t + 1);
              }
              function Ie() {
                for (
                  var e = "", t = !1, n = arguments.length - 1;
                  -1 <= n && !t;
                  n--
                ) {
                  if ("string" != typeof (t = 0 <= n ? arguments[n] : "/"))
                    throw new TypeError(
                      "Arguments to path.resolve must be strings"
                    );
                  if (!t) return "";
                  (e = t + "/" + e), (t = "/" === t.charAt(0));
                }
                return (
                  (t ? "/" : "") +
                    (e = Te(
                      e.split("/").filter(function (e) {
                        return !!e;
                      }),
                      !t
                    ).join("/")) || "."
                );
              }
              var Pe = [];
              function Be(e, t) {
                (Pe[e] = { input: [], output: [], G: t }), ut(e, Fe);
              }
              var Fe = {
                  open: function (e) {
                    var t = Pe[e.node.rdev];
                    if (!t) throw new Ze(ye.Y);
                    (e.tty = t), (e.seekable = !1);
                  },
                  close: function (e) {
                    e.tty.G.flush(e.tty);
                  },
                  flush: function (e) {
                    e.tty.G.flush(e.tty);
                  },
                  read: function (e, t, n, r) {
                    if (!e.tty || !e.tty.G.ra) throw new Ze(ye.ja);
                    for (var a = 0, i = 0; i < r; i++) {
                      try {
                        var o = e.tty.G.ra(e.tty);
                      } catch (e) {
                        throw new Ze(ye.M);
                      }
                      if (void 0 === o && 0 === a) throw new Ze(ye.fa);
                      if (null == o) break;
                      a++, (t[n + i] = o);
                    }
                    return a && (e.node.timestamp = Date.now()), a;
                  },
                  write: function (e, t, n, r) {
                    if (!e.tty || !e.tty.G.da) throw new Ze(ye.ja);
                    var a = 0;
                    try {
                      if (0 === n && 0 === r) e.tty.G.flush(e.tty);
                      else for (; a < r; ) e.tty.G.da(e.tty, t[n + a]), a++;
                    } catch (e) {
                      throw new Ze(ye.M);
                    }
                    return r && (e.node.timestamp = Date.now()), a;
                  },
                },
                De = {
                  ra: function (e) {
                    if (!e.input.length) {
                      var t = null;
                      if (
                        ("undefined" != typeof window &&
                        "function" == typeof window.prompt
                          ? null !== (t = window.prompt("Input: ")) &&
                            (t += "\n")
                          : "function" == typeof readline &&
                            null !== (t = readline()) &&
                            (t += "\n"),
                        !t)
                      )
                        return null;
                      e.input = Nn(t, !0);
                    }
                    return e.input.shift();
                  },
                  da: function (e, t) {
                    null === t || 10 === t
                      ? (c(V(e.output, 0)), (e.output = []))
                      : 0 != t && e.output.push(t);
                  },
                  flush: function (e) {
                    e.output &&
                      0 < e.output.length &&
                      (c(V(e.output, 0)), (e.output = []));
                  },
                },
                je = {
                  da: function (e, t) {
                    null === t || 10 === t
                      ? (s(V(e.output, 0)), (e.output = []))
                      : 0 != t && e.output.push(t);
                  },
                  flush: function (e) {
                    e.output &&
                      0 < e.output.length &&
                      (s(V(e.output, 0)), (e.output = []));
                  },
                },
                Re = {
                  o: null,
                  A: function () {
                    return Re.createNode(null, "/", 16895, 0);
                  },
                  createNode: function (e, t, n, r) {
                    if (24576 == (61440 & n) || 4096 == (61440 & n))
                      throw new Ze(ye.I);
                    return (
                      Re.o ||
                        (Re.o = {
                          dir: {
                            node: {
                              m: Re.c.m,
                              s: Re.c.s,
                              lookup: Re.c.lookup,
                              R: Re.c.R,
                              rename: Re.c.rename,
                              unlink: Re.c.unlink,
                              rmdir: Re.c.rmdir,
                              readdir: Re.c.readdir,
                              symlink: Re.c.symlink,
                            },
                            stream: { F: Re.f.F },
                          },
                          file: {
                            node: { m: Re.c.m, s: Re.c.s },
                            stream: {
                              F: Re.f.F,
                              read: Re.f.read,
                              write: Re.f.write,
                              la: Re.f.la,
                              sa: Re.f.sa,
                              T: Re.f.T,
                            },
                          },
                          link: {
                            node: {
                              m: Re.c.m,
                              s: Re.c.s,
                              readlink: Re.c.readlink,
                            },
                            stream: {},
                          },
                          na: { node: { m: Re.c.m, s: Re.c.s }, stream: ot },
                        }),
                      16384 == (61440 & (n = $e(e, t, n, r)).mode)
                        ? ((n.c = Re.o.dir.node),
                          (n.f = Re.o.dir.stream),
                          (n.b = {}))
                        : 32768 == (61440 & n.mode)
                        ? ((n.c = Re.o.file.node),
                          (n.f = Re.o.file.stream),
                          (n.h = 0),
                          (n.b = null))
                        : 40960 == (61440 & n.mode)
                        ? ((n.c = Re.o.link.node), (n.f = Re.o.link.stream))
                        : 8192 == (61440 & n.mode) &&
                          ((n.c = Re.o.na.node), (n.f = Re.o.na.stream)),
                      (n.timestamp = Date.now()),
                      e && (e.b[t] = n),
                      n
                    );
                  },
                  Ea: function (e) {
                    if (e.b && e.b.subarray) {
                      for (var t = [], n = 0; n < e.h; ++n) t.push(e.b[n]);
                      return t;
                    }
                    return e.b;
                  },
                  Wc: function (e) {
                    return e.b
                      ? e.b.subarray
                        ? e.b.subarray(0, e.h)
                        : new Uint8Array(e.b)
                      : new Uint8Array();
                  },
                  pa: function (e, t) {
                    if (
                      (e.b &&
                        e.b.subarray &&
                        t > e.b.length &&
                        ((e.b = Re.Ea(e)), (e.h = e.b.length)),
                      !e.b || e.b.subarray)
                    ) {
                      var n = e.b ? e.b.length : 0;
                      n >= t ||
                        ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) | 0)),
                        0 != n && (t = Math.max(t, 256)),
                        (n = e.b),
                        (e.b = new Uint8Array(t)),
                        0 < e.h && e.b.set(n.subarray(0, e.h), 0));
                    } else
                      for (!e.b && 0 < t && (e.b = []); e.b.length < t; )
                        e.b.push(0);
                  },
                  Ma: function (e, t) {
                    if (e.h != t)
                      if (0 == t) (e.b = null), (e.h = 0);
                      else {
                        if (!e.b || e.b.subarray) {
                          var n = e.b;
                          (e.b = new Uint8Array(new ArrayBuffer(t))),
                            n && e.b.set(n.subarray(0, Math.min(t, e.h)));
                        } else if ((e.b || (e.b = []), e.b.length > t))
                          e.b.length = t;
                        else for (; e.b.length < t; ) e.b.push(0);
                        e.h = t;
                      }
                  },
                  c: {
                    m: function (e) {
                      var t = {};
                      return (
                        (t.dev = 8192 == (61440 & e.mode) ? e.id : 1),
                        (t.ino = e.id),
                        (t.mode = e.mode),
                        (t.nlink = 1),
                        (t.uid = 0),
                        (t.gid = 0),
                        (t.rdev = e.rdev),
                        16384 == (61440 & e.mode)
                          ? (t.size = 4096)
                          : 32768 == (61440 & e.mode)
                          ? (t.size = e.h)
                          : 40960 == (61440 & e.mode)
                          ? (t.size = e.link.length)
                          : (t.size = 0),
                        (t.atime = new Date(e.timestamp)),
                        (t.mtime = new Date(e.timestamp)),
                        (t.ctime = new Date(e.timestamp)),
                        (t.Ca = 4096),
                        (t.blocks = Math.ceil(t.size / t.Ca)),
                        t
                      );
                    },
                    s: function (e, t) {
                      void 0 !== t.mode && (e.mode = t.mode),
                        void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                        void 0 !== t.size && Re.Ma(e, t.size);
                    },
                    lookup: function () {
                      throw Ye[ye.u];
                    },
                    R: function (e, t, n, r) {
                      return Re.createNode(e, t, n, r);
                    },
                    rename: function (e, t, n) {
                      if (16384 == (61440 & e.mode)) {
                        try {
                          var r = Qe(t, n);
                        } catch (e) {}
                        if (r) for (var a in r.b) throw new Ze(ye.ia);
                      }
                      delete e.parent.b[e.name],
                        (e.name = n),
                        (t.b[n] = e),
                        (e.parent = t);
                    },
                    unlink: function (e, t) {
                      delete e.b[t];
                    },
                    rmdir: function (e, t) {
                      var n,
                        r = Qe(e, t);
                      for (n in r.b) throw new Ze(ye.ia);
                      delete e.b[t];
                    },
                    readdir: function (e) {
                      var t,
                        n = [".", ".."];
                      for (t in e.b) e.b.hasOwnProperty(t) && n.push(t);
                      return n;
                    },
                    symlink: function (e, t, n) {
                      return ((e = Re.createNode(e, t, 41471, 0)).link = n), e;
                    },
                    readlink: function (e) {
                      if (40960 != (61440 & e.mode)) throw new Ze(ye.i);
                      return e.link;
                    },
                  },
                  f: {
                    read: function (e, t, n, r, a) {
                      var i = e.node.b;
                      if (a >= e.node.h) return 0;
                      if (
                        (y(0 <= (e = Math.min(e.node.h - a, r))),
                        8 < e && i.subarray)
                      )
                        t.set(i.subarray(a, a + e), n);
                      else for (r = 0; r < e; r++) t[n + r] = i[a + r];
                      return e;
                    },
                    write: function (e, t, n, r, a, i) {
                      if (((i = !1), !r)) return 0;
                      if (
                        (((e = e.node).timestamp = Date.now()),
                        t.subarray && (!e.b || e.b.subarray))
                      ) {
                        if (i) return (e.b = t.subarray(n, n + r)), (e.h = r);
                        if (0 === e.h && 0 === a)
                          return (
                            (e.b = new Uint8Array(t.subarray(n, n + r))),
                            (e.h = r)
                          );
                        if (a + r <= e.h)
                          return e.b.set(t.subarray(n, n + r), a), r;
                      }
                      if ((Re.pa(e, a + r), e.b.subarray && t.subarray))
                        e.b.set(t.subarray(n, n + r), a);
                      else for (i = 0; i < r; i++) e.b[a + i] = t[n + i];
                      return (e.h = Math.max(e.h, a + r)), r;
                    },
                    F: function (e, t, n) {
                      if (
                        (1 === n
                          ? (t += e.position)
                          : 2 === n &&
                            32768 == (61440 & e.node.mode) &&
                            (t += e.node.h),
                        0 > t)
                      )
                        throw new Ze(ye.i);
                      return t;
                    },
                    la: function (e, t, n) {
                      Re.pa(e.node, t + n),
                        (e.node.h = Math.max(e.node.h, t + n));
                    },
                    sa: function (e, t, n, r, a, i, o) {
                      if (32768 != (61440 & e.node.mode)) throw new Ze(ye.Y);
                      if (
                        ((n = e.node.b),
                        2 & o || (n.buffer !== t && n.buffer !== t.buffer))
                      ) {
                        if (
                          ((0 < a || a + r < e.node.h) &&
                            (n = n.subarray
                              ? n.subarray(a, a + r)
                              : Array.prototype.slice.call(n, a, a + r)),
                          (e = !0),
                          !(r = hr(r)))
                        )
                          throw new Ze(ye.ya);
                        t.set(n, r);
                      } else (e = !1), (r = n.byteOffset);
                      return { Ka: r, za: e };
                    },
                    T: function (e, t, n, r, a) {
                      if (32768 != (61440 & e.node.mode)) throw new Ze(ye.Y);
                      return 2 & a || Re.f.write(e, t, 0, r, n, !1), 0;
                    },
                  },
                };
              (S += 16), (S += 16), (S += 16);
              var Ve = null,
                qe = {},
                Ge = [],
                Ne = 1,
                Ue = null,
                We = !0,
                He = {},
                Ze = null,
                Ye = {};
              function Xe(e, t) {
                if (((t = t || {}), !(e = Ie("/", e))))
                  return { path: "", node: null };
                var n,
                  r = { qa: !0, ea: 0 };
                for (n in r) void 0 === t[n] && (t[n] = r[n]);
                if (8 < t.ea) throw new Ze(ye.X);
                e = Te(
                  e.split("/").filter(function (e) {
                    return !!e;
                  }),
                  !1
                );
                var a = Ve;
                for (r = "/", n = 0; n < e.length; n++) {
                  var i = n === e.length - 1;
                  if (i && t.parent) break;
                  if (
                    ((a = Qe(a, e[n])),
                    (r = Oe(r + "/" + e[n])),
                    a.S && (!i || (i && t.qa)) && (a = a.S.root),
                    !i || t.aa)
                  )
                    for (i = 0; 40960 == (61440 & a.mode); )
                      if (
                        ((a = pt(r)),
                        (a = Xe((r = Ie(Ce(r), a)), { ea: t.ea }).node),
                        40 < i++)
                      )
                        throw new Ze(ye.X);
                }
                return { path: r, node: a };
              }
              function Ke(e) {
                for (var t; ; ) {
                  if (e === e.parent)
                    return (
                      (e = e.A.ta),
                      t ? ("/" !== e[e.length - 1] ? e + "/" + t : e + t) : e
                    );
                  (t = t ? e.name + "/" + t : e.name), (e = e.parent);
                }
              }
              function Je(e, t) {
                for (var n = 0, r = 0; r < t.length; r++)
                  n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                return ((e + n) >>> 0) % Ue.length;
              }
              function Qe(e, t) {
                var n;
                if ((n = (n = nt(e, "x")) ? n : e.c.lookup ? 0 : ye.W))
                  throw new Ze(n, e);
                for (n = Ue[Je(e.id, t)]; n; n = n.Ja) {
                  var r = n.name;
                  if (n.parent.id === e.id && r === t) return n;
                }
                return e.c.lookup(e, t);
              }
              function $e(e, t, n, r) {
                return (
                  gt ||
                    (((gt = function (e, t, n, r) {
                      e || (e = this),
                        (this.parent = e),
                        (this.A = e.A),
                        (this.S = null),
                        (this.id = Ne++),
                        (this.name = t),
                        (this.mode = n),
                        (this.c = {}),
                        (this.f = {}),
                        (this.rdev = r);
                    }).prototype = {}),
                    Object.defineProperties(gt.prototype, {
                      read: {
                        get: function () {
                          return 365 == (365 & this.mode);
                        },
                        set: function (e) {
                          e ? (this.mode |= 365) : (this.mode &= -366);
                        },
                      },
                      write: {
                        get: function () {
                          return 146 == (146 & this.mode);
                        },
                        set: function (e) {
                          e ? (this.mode |= 146) : (this.mode &= -147);
                        },
                      },
                    })),
                  (function (e) {
                    var t = Je(e.parent.id, e.name);
                    (e.Ja = Ue[t]), (Ue[t] = e);
                  })((e = new gt(e, t, n, r))),
                  e
                );
              }
              var et = {
                r: 0,
                rs: 1052672,
                "r+": 2,
                w: 577,
                wx: 705,
                xw: 705,
                "w+": 578,
                "wx+": 706,
                "xw+": 706,
                a: 1089,
                ax: 1217,
                xa: 1217,
                "a+": 1090,
                "ax+": 1218,
                "xa+": 1218,
              };
              function tt(e) {
                var t = ["r", "w", "rw"][3 & e];
                return 512 & e && (t += "w"), t;
              }
              function nt(e, t) {
                return We ||
                  ((-1 === t.indexOf("r") || 292 & e.mode) &&
                    (-1 === t.indexOf("w") || 146 & e.mode) &&
                    (-1 === t.indexOf("x") || 73 & e.mode))
                  ? 0
                  : ye.W;
              }
              function rt(e, t) {
                try {
                  return Qe(e, t), ye.ha;
                } catch (e) {}
                return nt(e, "wx");
              }
              function at(e, t) {
                wt ||
                  (((wt = function () {}).prototype = {}),
                  Object.defineProperties(wt.prototype, {
                    object: {
                      get: function () {
                        return this.node;
                      },
                      set: function (e) {
                        this.node = e;
                      },
                    },
                  }));
                var n,
                  r = new wt();
                for (n in e) r[n] = e[n];
                return (
                  (e = r),
                  (t = (function (e) {
                    for (e = e || 0; e <= 4096; e++) if (!Ge[e]) return e;
                    throw new Ze(ye.wa);
                  })(t)),
                  (e.fd = t),
                  (Ge[t] = e)
                );
              }
              var it,
                ot = {
                  open: function (e) {
                    (e.f = qe[e.node.rdev].f), e.f.open && e.f.open(e);
                  },
                  F: function () {
                    throw new Ze(ye.O);
                  },
                };
              function ut(e, t) {
                qe[e] = { f: t };
              }
              function ct(e, t) {
                var n = "/" === t,
                  r = !t;
                if (n && Ve) throw new Ze(ye.ga);
                if (!n && !r) {
                  var a = Xe(t, { qa: !1 });
                  if (((t = a.path), (a = a.node).S)) throw new Ze(ye.ga);
                  if (16384 != (61440 & a.mode)) throw new Ze(ye.Z);
                }
                (t = { type: e, $c: {}, ta: t, Ia: [] }),
                  ((e = e.A(t)).A = t),
                  (t.root = e),
                  n ? (Ve = e) : a && ((a.S = t), a.A && a.A.Ia.push(t));
              }
              function st(e, t, n) {
                var r = Xe(e, { parent: !0 }).node;
                if (!(e = Se(e)) || "." === e || ".." === e) throw new Ze(ye.i);
                var a = rt(r, e);
                if (a) throw new Ze(a);
                if (!r.c.R) throw new Ze(ye.I);
                return r.c.R(r, e, t, n);
              }
              function _t(e) {
                st(e, 16895, 0);
              }
              function ft(e, t, n) {
                void 0 === n && ((n = t), (t = 438)), st(e, 8192 | t, n);
              }
              function lt(e, t) {
                if (!Ie(e)) throw new Ze(ye.u);
                var n = Xe(t, { parent: !0 }).node;
                if (!n) throw new Ze(ye.u);
                var r = rt(n, (t = Se(t)));
                if (r) throw new Ze(r);
                if (!n.c.symlink) throw new Ze(ye.I);
                n.c.symlink(n, t, e);
              }
              function pt(e) {
                if (!(e = Xe(e).node)) throw new Ze(ye.u);
                if (!e.c.readlink) throw new Ze(ye.i);
                return Ie(Ke(e.parent), e.c.readlink(e));
              }
              function dt(e, t, n, a) {
                if ("" === e) throw new Ze(ye.u);
                if ("string" == typeof t) {
                  var i = et[t];
                  if (void 0 === i) throw Error("Unknown file open mode: " + t);
                  t = i;
                }
                if (
                  ((n = 64 & t ? (4095 & (void 0 === n ? 438 : n)) | 32768 : 0),
                  "object" == typeof e)
                )
                  var o = e;
                else {
                  e = Oe(e);
                  try {
                    o = Xe(e, { aa: !(131072 & t) }).node;
                  } catch (e) {}
                }
                if (((i = !1), 64 & t))
                  if (o) {
                    if (128 & t) throw new Ze(ye.ha);
                  } else (o = st(e, n, 0)), (i = !0);
                if (!o) throw new Ze(ye.u);
                if (
                  (8192 == (61440 & o.mode) && (t &= -513),
                  65536 & t && 16384 != (61440 & o.mode))
                )
                  throw new Ze(ye.Z);
                if (
                  !i &&
                  (n = o
                    ? 40960 == (61440 & o.mode)
                      ? ye.X
                      : 16384 == (61440 & o.mode) && ("r" !== tt(t) || 512 & t)
                      ? ye.N
                      : nt(o, tt(t))
                    : ye.u)
                )
                  throw new Ze(n);
                if (512 & t) {
                  var u;
                  if (
                    !(u =
                      "string" == typeof (n = o) ? Xe(n, { aa: !0 }).node : n).c
                      .s
                  )
                    throw new Ze(ye.I);
                  if (16384 == (61440 & u.mode)) throw new Ze(ye.N);
                  if (32768 != (61440 & u.mode)) throw new Ze(ye.i);
                  if ((n = nt(u, "w"))) throw new Ze(n);
                  u.c.s(u, { size: 0, timestamp: Date.now() });
                }
                (t &= -641),
                  (a = at(
                    {
                      node: o,
                      path: Ke(o),
                      flags: t,
                      seekable: !0,
                      position: 0,
                      f: o.f,
                      Sa: [],
                      error: !1,
                    },
                    a
                  )).f.open && a.f.open(a),
                  !r.logReadFiles ||
                    1 & t ||
                    (Mt || (Mt = {}),
                    e in Mt ||
                      ((Mt[e] = 1),
                      console.log(
                        "FS.trackingDelegate error on read file: " + e
                      )));
                try {
                  He.onOpenFile &&
                    ((o = 0),
                    1 != (2097155 & t) && (o |= 1),
                    0 != (2097155 & t) && (o |= 2),
                    He.onOpenFile(e, o));
                } catch (t) {
                  console.log(
                    "FS.trackingDelegate['onOpenFile']('" +
                      e +
                      "', flags) threw an exception: " +
                      t.message
                  );
                }
                return a;
              }
              function ht(e) {
                if (null === e.fd) throw new Ze(ye.B);
                e.ba && (e.ba = null);
                try {
                  e.f.close && e.f.close(e);
                } catch (e) {
                  throw e;
                } finally {
                  Ge[e.fd] = null;
                }
                e.fd = null;
              }
              function mt(e, t, n) {
                if (null === e.fd) throw new Ze(ye.B);
                if (!e.seekable || !e.f.F) throw new Ze(ye.O);
                (e.position = e.f.F(e, t, n)), (e.Sa = []);
              }
              function bt() {
                Ze ||
                  (((Ze = function (e, t) {
                    (this.node = t),
                      (this.Na = function (e) {
                        for (var t in ((this.v = e), ye))
                          if (ye[t] === e) {
                            this.code = t;
                            break;
                          }
                      }),
                      this.Na(e),
                      (this.message = Ee[e]),
                      this.stack &&
                        Object.defineProperty(this, "stack", {
                          value: Error().stack,
                          writable: !0,
                        });
                  }).prototype = Error()),
                  (Ze.prototype.constructor = Ze),
                  [ye.u].forEach(function (e) {
                    (Ye[e] = new Ze(e)),
                      (Ye[e].stack = "<generic error, no stack>");
                  }));
              }
              function yt(e, t, n) {
                e = Oe("/dev/" + e);
                var r = (function (e, t) {
                  var n = 0;
                  return e && (n |= 365), t && (n |= 146), n;
                })(!!t, !!n);
                vt || (vt = 64);
                var a = (vt++ << 8) | 0;
                ut(a, {
                  open: function (e) {
                    e.seekable = !1;
                  },
                  close: function () {
                    n && n.buffer && n.buffer.length && n(10);
                  },
                  read: function (e, n, r, a) {
                    for (var i = 0, o = 0; o < a; o++) {
                      try {
                        var u = t();
                      } catch (e) {
                        throw new Ze(ye.M);
                      }
                      if (void 0 === u && 0 === i) throw new Ze(ye.fa);
                      if (null == u) break;
                      i++, (n[r + o] = u);
                    }
                    return i && (e.node.timestamp = Date.now()), i;
                  },
                  write: function (e, t, r, a) {
                    for (var i = 0; i < a; i++)
                      try {
                        n(t[r + i]);
                      } catch (e) {
                        throw new Ze(ye.M);
                      }
                    return a && (e.node.timestamp = Date.now()), i;
                  },
                }),
                  ft(e, r, a);
              }
              var vt,
                gt,
                wt,
                Mt,
                kt = {},
                zt = {},
                At = 0;
              function xt() {
                return E[((At += 4) - 4) >> 2];
              }
              function Lt() {
                var e = Ge[xt()];
                if (!e) throw new Ze(ye.B);
                return e;
              }
              function Et(t, n) {
                if (((jt = t), (Rt = n), !Ft)) return 1;
                if (0 == t)
                  (It = function () {
                    var e = 0 | Math.max(0, Ot + n - me());
                    setTimeout(Ct, e);
                  }),
                    (Pt = "timeout");
                else if (1 == t)
                  (It = function () {
                    tn(Ct);
                  }),
                    (Pt = "rAF");
                else if (2 == t) {
                  if (void 0 === e) {
                    var a = [];
                    addEventListener(
                      "message",
                      function (e) {
                        ("setimmediate" !== e.data &&
                          "setimmediate" !== e.data.target) ||
                          (e.stopPropagation(), a.shift()());
                      },
                      !0
                    ),
                      (e = function (e) {
                        a.push(e),
                          void 0 === r.setImmediates && (r.setImmediates = []),
                          r.setImmediates.push(e),
                          postMessage({ target: "setimmediate" });
                      });
                  }
                  (It = function () {
                    e(Ct);
                  }),
                    (Pt = "immediate");
                }
                return 0;
              }
              function Tt(e, t, n, a, i) {
                (r.noExitRuntime = !0),
                  y(
                    !Ft,
                    "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
                  ),
                  (Ft = e),
                  (Dt = a);
                var o =
                    void 0 !== a
                      ? function () {
                          r.dynCall_vi(e, a);
                        }
                      : function () {
                          r.dynCall_v(e);
                        },
                  u = Bt;
                if (
                  ((Ct = function () {
                    if (!b)
                      if (0 < qt.length) {
                        var e = Date.now(),
                          t = qt.shift();
                        if ((t.g(t.P), St)) {
                          var n = St,
                            a = 0 == n % 1 ? n - 1 : Math.floor(n);
                          St = t.Tc ? a : (8 * n + (a + 0.5)) / 9;
                        }
                        console.log(
                          'main loop blocker "' +
                            t.name +
                            '" took ' +
                            (Date.now() - e) +
                            " ms"
                        ),
                          r.setStatus &&
                            ((e = r.statusMessage || "Please wait..."),
                            (t = St),
                            (n = Gt.Vc),
                            t
                              ? t < n
                                ? r.setStatus(
                                    e + " (" + (n - t) + "/" + n + ")"
                                  )
                                : r.setStatus(e)
                              : r.setStatus("")),
                          u < Bt || setTimeout(Ct, 0);
                      } else if (!(u < Bt))
                        if (
                          ((Vt = (Vt + 1) | 0),
                          1 == jt && 1 < Rt && 0 != Vt % Rt)
                        )
                          It();
                        else {
                          if (
                            (0 == jt && (Ot = me()),
                            "timeout" === Pt &&
                              r.K &&
                              (s(
                                "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"
                              ),
                              (Pt = "")),
                            !(b || (r.preMainLoop && !1 === r.preMainLoop())))
                          ) {
                            try {
                              o();
                            } catch (e) {
                              throw (
                                (e &&
                                  "object" == typeof e &&
                                  e.stack &&
                                  s("exception thrown: " + [e, e.stack]),
                                e)
                              );
                            }
                            r.postMainLoop && r.postMainLoop();
                          }
                          u < Bt ||
                            ("object" == typeof SDL &&
                              SDL.audio &&
                              SDL.audio.La &&
                              SDL.audio.La(),
                            It());
                        }
                  }),
                  i || (t && 0 < t ? Et(0, 1e3 / t) : Et(1, 1), It()),
                  n)
                )
                  throw "SimulateInfiniteLoop";
              }
              var Ot,
                Ct,
                St,
                It = null,
                Pt = "",
                Bt = 0,
                Ft = null,
                Dt = 0,
                jt = 0,
                Rt = 0,
                Vt = 0,
                qt = [],
                Gt = {},
                Nt = !1,
                Ut = !1,
                Wt = [];
              function Ht() {
                function e() {
                  Ut =
                    document.pointerLockElement === r.canvas ||
                    document.mozPointerLockElement === r.canvas ||
                    document.webkitPointerLockElement === r.canvas ||
                    document.msPointerLockElement === r.canvas;
                }
                if ((r.preloadPlugins || (r.preloadPlugins = []), !cn)) {
                  cn = !0;
                  try {
                    sn = !0;
                  } catch (e) {
                    (sn = !1),
                      console.log(
                        "warning: no blob constructor, cannot create blobs with mimetypes"
                      );
                  }
                  (_n =
                    "undefined" != typeof MozBlobBuilder
                      ? MozBlobBuilder
                      : "undefined" != typeof WebKitBlobBuilder
                      ? WebKitBlobBuilder
                      : sn
                      ? null
                      : console.log("warning: no BlobBuilder")),
                    (fn =
                      "undefined" != typeof window
                        ? window.URL
                          ? window.URL
                          : window.webkitURL
                        : void 0),
                    r.ua ||
                      void 0 !== fn ||
                      (console.log(
                        "warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."
                      ),
                      (r.ua = !0)),
                    r.preloadPlugins.push({
                      canHandle: function (e) {
                        return !r.ua && /\.(jpg|jpeg|png|bmp)$/i.test(e);
                      },
                      handle: function (e, t, n, a) {
                        var i = null;
                        if (sn)
                          try {
                            (i = new Blob([e], { type: rn(t) })).size !==
                              e.length &&
                              (i = new Blob([new Uint8Array(e).buffer], {
                                type: rn(t),
                              }));
                          } catch (e) {
                            !(function (e) {
                              p || (p = {}), p[e] || ((p[e] = 1), s(e));
                            })(
                              "Blob constructor present but fails: " +
                                e +
                                "; falling back to blob builder"
                            );
                          }
                        i ||
                          ((i = new _n()).append(new Uint8Array(e).buffer),
                          (i = i.getBlob()));
                        var o = fn.createObjectURL(i),
                          u = new Image();
                        (u.onload = function () {
                          y(u.complete, "Image " + t + " could not be decoded");
                          var a = document.createElement("canvas");
                          (a.width = u.width),
                            (a.height = u.height),
                            a.getContext("2d").drawImage(u, 0, 0),
                            (r.preloadedImages[t] = a),
                            fn.revokeObjectURL(o),
                            n && n(e);
                        }),
                          (u.onerror = function () {
                            console.log("Image " + o + " could not be decoded"),
                              a && a();
                          }),
                          (u.src = o);
                      },
                    }),
                    r.preloadPlugins.push({
                      canHandle: function (e) {
                        return (
                          !r.Zc &&
                          e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                        );
                      },
                      handle: function (e, t, n, a) {
                        function i(a) {
                          u ||
                            ((u = !0), (r.preloadedAudios[t] = a), n && n(e));
                        }
                        function o() {
                          u ||
                            ((u = !0),
                            (r.preloadedAudios[t] = new Audio()),
                            a && a());
                        }
                        var u = !1;
                        if (!sn) return o();
                        try {
                          var c = new Blob([e], { type: rn(t) });
                        } catch (e) {
                          return o();
                        }
                        c = fn.createObjectURL(c);
                        var s = new Audio();
                        s.addEventListener(
                          "canplaythrough",
                          function () {
                            i(s);
                          },
                          !1
                        ),
                          (s.onerror = function () {
                            if (!u) {
                              console.log(
                                "warning: browser could not fully decode audio " +
                                  t +
                                  ", trying slower base64 approach"
                              );
                              for (
                                var n = "", r = 0, a = 0, o = 0;
                                o < e.length;
                                o++
                              )
                                for (r = (r << 8) | e[o], a += 8; 6 <= a; ) {
                                  var c = (r >> (a - 6)) & 63;
                                  (a -= 6),
                                    (n +=
                                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                        c
                                      ]);
                                }
                              2 == a
                                ? ((n +=
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                      (3 & r) << 4
                                    ]),
                                  (n += "=="))
                                : 4 == a &&
                                  ((n +=
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                                      (15 & r) << 2
                                    ]),
                                  (n += "=")),
                                (s.src =
                                  "data:audio/x-" +
                                  t.substr(-3) +
                                  ";base64," +
                                  n),
                                i(s);
                            }
                          }),
                          (s.src = c),
                          nn(function () {
                            i(s);
                          }, 1e4);
                      },
                    });
                  var t = r.canvas;
                  t &&
                    ((t.requestPointerLock =
                      t.requestPointerLock ||
                      t.mozRequestPointerLock ||
                      t.webkitRequestPointerLock ||
                      t.msRequestPointerLock ||
                      function () {}),
                    (t.exitPointerLock =
                      document.exitPointerLock ||
                      document.mozExitPointerLock ||
                      document.webkitExitPointerLock ||
                      document.msExitPointerLock ||
                      function () {}),
                    (t.exitPointerLock = t.exitPointerLock.bind(document)),
                    document.addEventListener("pointerlockchange", e, !1),
                    document.addEventListener("mozpointerlockchange", e, !1),
                    document.addEventListener("webkitpointerlockchange", e, !1),
                    document.addEventListener("mspointerlockchange", e, !1),
                    r.elementPointerLock &&
                      t.addEventListener(
                        "click",
                        function (e) {
                          !Ut &&
                            r.canvas.requestPointerLock &&
                            (r.canvas.requestPointerLock(), e.preventDefault());
                        },
                        !1
                      ));
                }
              }
              function Zt(e, t, n, a) {
                if (t && r.K && e == r.canvas) return r.K;
                if (t) {
                  var i = { antialias: !1, alpha: !1 };
                  if (a) for (var o in a) i[o] = a[o];
                  if (
                    (i = (function (e, t) {
                      function n() {}
                      void 0 === t.majorVersion &&
                        void 0 === t.minorVersion &&
                        ((t.majorVersion = 1), (t.minorVersion = 0));
                      try {
                        e.addEventListener("webglcontextcreationerror", n, !1);
                        try {
                          if (1 == t.majorVersion && 0 == t.minorVersion)
                            var r =
                              e.getContext("webgl", t) ||
                              e.getContext("experimental-webgl", t);
                          else {
                            if (2 != t.majorVersion || 0 != t.minorVersion)
                              throw (
                                "Unsupported WebGL context version " +
                                majorVersion +
                                "." +
                                minorVersion +
                                "!"
                              );
                            r = e.getContext("webgl2", t);
                          }
                        } finally {
                          e.removeEventListener(
                            "webglcontextcreationerror",
                            n,
                            !1
                          );
                        }
                        if (!r) throw ":(";
                      } catch (e) {
                        return 0;
                      }
                      return r
                        ? (function (e, t) {
                            var n = En(An),
                              r = {
                                handle: n,
                                attributes: t,
                                version: t.majorVersion,
                                GLctx: e,
                              };
                            return (
                              e.canvas && (e.canvas.Sc = r),
                              (An[n] = r),
                              (void 0 === t.enableExtensionsByDefault ||
                                t.enableExtensionsByDefault) &&
                                (function (e) {
                                  if ((e || (e = xn), !e.Ga)) {
                                    e.Ga = !0;
                                    var t = e.GLctx;
                                    if (2 > e.version) {
                                      var n = t.getExtension(
                                        "ANGLE_instanced_arrays"
                                      );
                                      n &&
                                        ((t.vertexAttribDivisor = function (
                                          e,
                                          t
                                        ) {
                                          n.vertexAttribDivisorANGLE(e, t);
                                        }),
                                        (t.drawArraysInstanced = function (
                                          e,
                                          t,
                                          r,
                                          a
                                        ) {
                                          n.drawArraysInstancedANGLE(
                                            e,
                                            t,
                                            r,
                                            a
                                          );
                                        }),
                                        (t.drawElementsInstanced = function (
                                          e,
                                          t,
                                          r,
                                          a,
                                          i
                                        ) {
                                          n.drawElementsInstancedANGLE(
                                            e,
                                            t,
                                            r,
                                            a,
                                            i
                                          );
                                        }));
                                      var r = t.getExtension(
                                        "OES_vertex_array_object"
                                      );
                                      r &&
                                        ((t.createVertexArray = function () {
                                          return r.createVertexArrayOES();
                                        }),
                                        (t.deleteVertexArray = function (e) {
                                          r.deleteVertexArrayOES(e);
                                        }),
                                        (t.bindVertexArray = function (e) {
                                          r.bindVertexArrayOES(e);
                                        }),
                                        (t.isVertexArray = function (e) {
                                          return r.isVertexArrayOES(e);
                                        }));
                                      var a =
                                        t.getExtension("WEBGL_draw_buffers");
                                      a &&
                                        (t.drawBuffers = function (e, t) {
                                          a.drawBuffersWEBGL(e, t);
                                        });
                                    }
                                    t.Uc = t.getExtension(
                                      "EXT_disjoint_timer_query"
                                    );
                                    var i =
                                      "OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(
                                        " "
                                      );
                                    (e = t.getSupportedExtensions()) &&
                                      0 < e.length &&
                                      t
                                        .getSupportedExtensions()
                                        .forEach(function (e) {
                                          -1 != i.indexOf(e) &&
                                            t.getExtension(e);
                                        });
                                  }
                                })(r),
                              n
                            );
                          })(r, t)
                        : 0;
                    })(e, i))
                  )
                    var u = An[i].GLctx;
                } else u = e.getContext("2d");
                return u
                  ? (n &&
                      (t ||
                        y(
                          void 0 === qn,
                          "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"
                        ),
                      (r.K = u),
                      t &&
                        (function (e) {
                          e
                            ? (e = An[e]) && ((qn = r.K = e.GLctx), (xn = e))
                            : (qn = r.K = xn = null);
                        })(i),
                      (r.bd = t),
                      Wt.forEach(function (e) {
                        e();
                      }),
                      Ht()),
                    u)
                  : null;
              }
              var Yt = !1,
                Xt = void 0,
                Kt = void 0;
              function Jt(e, t, n) {
                function a() {
                  Nt = !1;
                  var e = i.parentNode;
                  (document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.webkitCurrentFullScreenElement) === e
                    ? ((i.exitFullscreen =
                        document.exitFullscreen ||
                        document.cancelFullScreen ||
                        document.mozCancelFullScreen ||
                        document.msExitFullscreen ||
                        document.webkitCancelFullScreen ||
                        function () {}),
                      (i.exitFullscreen = i.exitFullscreen.bind(document)),
                      Xt && i.requestPointerLock(),
                      (Nt = !0),
                      Kt
                        ? ("undefined" != typeof SDL &&
                            (E[SDL.screen >> 2] = 8388608 | T[SDL.screen >> 2]),
                          un(r.canvas),
                          on())
                        : un(i))
                    : (e.parentNode.insertBefore(i, e),
                      e.parentNode.removeChild(e),
                      Kt
                        ? ("undefined" != typeof SDL &&
                            (E[SDL.screen >> 2] =
                              -8388609 & T[SDL.screen >> 2]),
                          un(r.canvas),
                          on())
                        : un(i)),
                    r.onFullScreen && r.onFullScreen(Nt),
                    r.onFullscreen && r.onFullscreen(Nt);
                }
                void 0 === (Xt = e) && (Xt = !0),
                  void 0 === (Kt = t) && (Kt = !1);
                var i = r.canvas;
                Yt ||
                  ((Yt = !0),
                  document.addEventListener("fullscreenchange", a, !1),
                  document.addEventListener("mozfullscreenchange", a, !1),
                  document.addEventListener("webkitfullscreenchange", a, !1),
                  document.addEventListener("MSFullscreenChange", a, !1));
                var o = document.createElement("div");
                i.parentNode.insertBefore(o, i),
                  o.appendChild(i),
                  (o.requestFullscreen =
                    o.requestFullscreen ||
                    o.mozRequestFullScreen ||
                    o.msRequestFullscreen ||
                    (o.webkitRequestFullscreen
                      ? function () {
                          o.webkitRequestFullscreen(
                            Element.ALLOW_KEYBOARD_INPUT
                          );
                        }
                      : null) ||
                    (o.webkitRequestFullScreen
                      ? function () {
                          o.webkitRequestFullScreen(
                            Element.ALLOW_KEYBOARD_INPUT
                          );
                        }
                      : null)),
                  n ? o.requestFullscreen({ cd: n }) : o.requestFullscreen();
              }
              function Qt(e, t, n) {
                return (
                  s(
                    "Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead."
                  ),
                  (Qt = function (e, t, n) {
                    return Jt(e, t, n);
                  }),
                  Jt(e, t, n)
                );
              }
              var $t = 0;
              function en(e) {
                var t = Date.now();
                if (0 === $t) $t = t + 1e3 / 60;
                else for (; t + 2 >= $t; ) $t += 1e3 / 60;
                setTimeout(e, Math.max($t - t, 0));
              }
              function tn(e) {
                "undefined" == typeof window
                  ? en(e)
                  : (window.requestAnimationFrame ||
                      (window.requestAnimationFrame =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        en),
                    window.requestAnimationFrame(e));
              }
              function nn(e, t) {
                (r.noExitRuntime = !0),
                  setTimeout(function () {
                    b || e();
                  }, t);
              }
              function rn(e) {
                return {
                  jpg: "image/jpeg",
                  jpeg: "image/jpeg",
                  png: "image/png",
                  bmp: "image/bmp",
                  ogg: "audio/ogg",
                  wav: "audio/wav",
                  mp3: "audio/mpeg",
                }[e.substr(e.lastIndexOf(".") + 1)];
              }
              var an = [];
              function on() {
                var e = r.canvas;
                an.forEach(function (t) {
                  t(e.width, e.height);
                });
              }
              function un(e, t, n) {
                t && n ? ((e.Ta = t), (e.Fa = n)) : ((t = e.Ta), (n = e.Fa));
                var a = t,
                  i = n;
                if (
                  (r.forcedAspectRatio &&
                    0 < r.forcedAspectRatio &&
                    (a / i < r.forcedAspectRatio
                      ? (a = Math.round(i * r.forcedAspectRatio))
                      : (i = Math.round(a / r.forcedAspectRatio))),
                  (document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.webkitCurrentFullScreenElement) === e.parentNode &&
                    "undefined" != typeof screen)
                ) {
                  var o = Math.min(screen.width / a, screen.height / i);
                  (a = Math.round(a * o)), (i = Math.round(i * o));
                }
                Kt
                  ? (e.width != a && (e.width = a),
                    e.height != i && (e.height = i),
                    void 0 !== e.style &&
                      (e.style.removeProperty("width"),
                      e.style.removeProperty("height")))
                  : (e.width != t && (e.width = t),
                    e.height != n && (e.height = n),
                    void 0 !== e.style &&
                      (a != t || i != n
                        ? (e.style.setProperty("width", a + "px", "important"),
                          e.style.setProperty("height", i + "px", "important"))
                        : (e.style.removeProperty("width"),
                          e.style.removeProperty("height"))));
              }
              var cn,
                sn,
                _n,
                fn,
                ln = [],
                pn = void 0;
              function dn(e, t) {
                (T[e >> 2] = t), (T[(e + 4) >> 2] = (t / 4294967296) | 0);
              }
              function hn(e, t, n, r) {
                var a = T[(e + 8) >> 2];
                if (a) {
                  var i = M(a),
                    o = e + 112,
                    u = M(o);
                  u || (u = "GET");
                  var c = T[(o + 48) >> 2],
                    s = T[(o + 52) >> 2],
                    _ = !!T[(o + 56) >> 2],
                    f = T[(o + 64) >> 2],
                    l = T[(o + 68) >> 2];
                  a = T[(o + 72) >> 2];
                  var p = T[(o + 76) >> 2],
                    d = T[(o + 80) >> 2];
                  o = T[(o + 84) >> 2];
                  var h = !!(1 & c),
                    m = !!(2 & c);
                  (c = !!(64 & c)),
                    (f = f ? M(f) : void 0),
                    (l = l ? M(l) : void 0);
                  var b = p ? M(p) : void 0,
                    y = new XMLHttpRequest();
                  if (
                    ((y.withCredentials = _),
                    y.open(u, i, !c, f, l),
                    c || (y.timeout = s),
                    (y.l = i),
                    (y.responseType = m
                      ? "moz-chunked-arraybuffer"
                      : "arraybuffer"),
                    p && y.overrideMimeType(b),
                    a)
                  )
                    for (; (u = T[a >> 2]) && (i = T[(a + 4) >> 2]); )
                      (a += 8),
                        (u = M(u)),
                        (i = M(i)),
                        y.setRequestHeader(u, i);
                  ln.push(y),
                    (T[(e + 0) >> 2] = ln.length),
                    (a = d && o ? A.slice(d, d + o) : null),
                    (y.onload = function (r) {
                      var a = y.response ? y.response.byteLength : 0,
                        i = 0,
                        o = 0;
                      h &&
                        !m &&
                        ((i = hr((o = a))),
                        A.set(new Uint8Array(y.response), i)),
                        (T[(e + 12) >> 2] = i),
                        dn(e + 16, o),
                        dn(e + 24, 0),
                        a && dn(e + 32, a),
                        (L[(e + 40) >> 1] = y.readyState),
                        4 === y.readyState &&
                          0 === y.status &&
                          (y.status = 0 < a ? 200 : 404),
                        (L[(e + 42) >> 1] = y.status),
                        y.statusText && G(y.statusText, A, e + 44, 64),
                        200 == y.status ? t && t(e, y, r) : n && n(e, y, r);
                    }),
                    (y.onerror = function (t) {
                      var r = y.status;
                      4 == y.readyState && 0 == r && (r = 404),
                        (T[(e + 12) >> 2] = 0),
                        dn(e + 16, 0),
                        dn(e + 24, 0),
                        dn(e + 32, 0),
                        (L[(e + 40) >> 1] = y.readyState),
                        (L[(e + 42) >> 1] = r),
                        n && n(e, y, t);
                    }),
                    (y.ontimeout = function (t) {
                      n && n(e, y, t);
                    }),
                    (y.onprogress = function (t) {
                      var n = h && m && y.response ? y.response.byteLength : 0,
                        a = 0;
                      h &&
                        m &&
                        ((a = hr(n)), A.set(new Uint8Array(y.response), a)),
                        (T[(e + 12) >> 2] = a),
                        dn(e + 16, n),
                        dn(e + 24, t.loaded - n),
                        dn(e + 32, t.total),
                        (L[(e + 40) >> 1] = y.readyState),
                        3 <= y.readyState &&
                          0 === y.status &&
                          0 < t.loaded &&
                          (y.status = 200),
                        (L[(e + 42) >> 1] = y.status),
                        y.statusText && G(y.statusText, A, e + 44, 64),
                        r && r(e, y, t);
                    });
                  try {
                    y.send(a);
                  } catch (t) {
                    n && n(e, y, t);
                  }
                } else n(e, 0, "no url specified!");
              }
              function mn(e, t, n, r, a) {
                if (e) {
                  var i = T[(t + 112 + 60) >> 2];
                  i || (i = T[(t + 8) >> 2]);
                  var o = M(i);
                  try {
                    var u = e
                      .transaction(["FILES"], "readwrite")
                      .objectStore("FILES")
                      .put(n, o);
                    (u.onsuccess = function () {
                      (L[(t + 40) >> 1] = 4),
                        (L[(t + 42) >> 1] = 200),
                        G("OK", A, t + 44, 64),
                        r(t, 0, o);
                    }),
                      (u.onerror = function (e) {
                        (L[(t + 40) >> 1] = 4),
                          (L[(t + 42) >> 1] = 413),
                          G("Payload Too Large", A, t + 44, 64),
                          a(t, 0, e);
                      });
                  } catch (e) {
                    a(t, 0, e);
                  }
                } else a(t, 0, "IndexedDB not available!");
              }
              function bn(e, t, n, r) {
                if (e) {
                  var a = T[(t + 112 + 60) >> 2];
                  a || (a = T[(t + 8) >> 2]), (a = M(a));
                  try {
                    var i = e
                      .transaction(["FILES"], "readonly")
                      .objectStore("FILES")
                      .get(a);
                    (i.onsuccess = function (e) {
                      if (e.target.result) {
                        var a = (e = e.target.result).byteLength || e.length,
                          i = hr(a);
                        A.set(new Uint8Array(e), i),
                          (T[(t + 12) >> 2] = i),
                          dn(t + 16, a),
                          dn(t + 24, 0),
                          dn(t + 32, a),
                          (L[(t + 40) >> 1] = 4),
                          (L[(t + 42) >> 1] = 200),
                          G("OK", A, t + 44, 64),
                          n(t, 0, e);
                      } else
                        (L[(t + 40) >> 1] = 4),
                          (L[(t + 42) >> 1] = 404),
                          G("Not Found", A, t + 44, 64),
                          r(t, 0, "no data");
                    }),
                      (i.onerror = function (e) {
                        (L[(t + 40) >> 1] = 4),
                          (L[(t + 42) >> 1] = 404),
                          G("Not Found", A, t + 44, 64),
                          r(t, 0, e);
                      });
                  } catch (e) {
                    r(t, 0, e);
                  }
                } else r(t, 0, "IndexedDB not available!");
              }
              function yn(e, t, n, r) {
                if (e) {
                  var a = T[(t + 112 + 60) >> 2];
                  a || (a = T[(t + 8) >> 2]), (a = M(a));
                  try {
                    var i = e
                      .transaction(["FILES"], "readwrite")
                      .objectStore("FILES")
                      .delete(a);
                    (i.onsuccess = function (e) {
                      (e = e.target.result),
                        (T[(t + 12) >> 2] = 0),
                        dn(t + 16, 0),
                        dn(t + 24, 0),
                        dn(t + 24, 0),
                        (L[(t + 40) >> 1] = 4),
                        (L[(t + 42) >> 1] = 200),
                        G("OK", A, t + 44, 64),
                        n(t, 0, e);
                    }),
                      (i.onerror = function (e) {
                        (L[(t + 40) >> 1] = 4),
                          (L[(t + 42) >> 1] = 404),
                          G("Not Found", A, t + 44, 64),
                          r(t, 0, e);
                      });
                  } catch (e) {
                    r(t, 0, e);
                  }
                } else r(t, 0, "IndexedDB not available!");
              }
              var vn,
                gn,
                wn = void 0;
              for (
                wn = vn = _(Math.max(12, 1)), y(0 == (3 & vn)), gn = vn + 12;
                wn < gn;
                wn += 4
              )
                E[wn >> 2] = 0;
              for (gn = vn + 12; wn < gn; ) z[wn++ >> 0] = 0;
              var Mn = 1,
                kn = 0,
                zn = [],
                An = [],
                xn = null,
                Ln = [];
              function En(e) {
                for (var t = Mn++, n = e.length; n < t; n++) e[n] = null;
                return t;
              }
              function Tn(e, t, n, r) {
                return (
                  (e *= n),
                  (r *= Math.floor((e + r - 1) / r)),
                  0 >= t ? 0 : (t - 1) * r + e
                );
              }
              function On(e, t, n, r, a) {
                switch (t) {
                  case 6406:
                  case 6409:
                  case 6402:
                    t = 1;
                    break;
                  case 6410:
                    t = 2;
                    break;
                  case 6407:
                  case 35904:
                    t = 3;
                    break;
                  case 6408:
                  case 35906:
                    t = 4;
                    break;
                  default:
                    return kn || (kn = 1280), null;
                }
                switch (e) {
                  case 5121:
                    t *= 1;
                    break;
                  case 5123:
                  case 36193:
                    t *= 2;
                    break;
                  case 5125:
                  case 5126:
                    t *= 4;
                    break;
                  case 34042:
                    t = 4;
                    break;
                  case 33635:
                  case 32819:
                  case 32820:
                    t = 2;
                    break;
                  default:
                    return kn || (kn = 1280), null;
                }
                switch (((n = Tn(n, r, t, 4)), e)) {
                  case 5121:
                    return A.subarray(a, a + n);
                  case 5126:
                    return O.subarray(a >> 2, (a + n) >> 2);
                  case 5125:
                  case 34042:
                    return T.subarray(a >> 2, (a + n) >> 2);
                  case 5123:
                  case 33635:
                  case 32819:
                  case 32820:
                  case 36193:
                    return L.subarray(a >> 1, (a + n) >> 1);
                  default:
                    return kn || (kn = 1280), null;
                }
              }
              function Cn() {
                return Cn.l || (Cn.l = []), Cn.l.push(vr()), Cn.l.length - 1;
              }
              var Sn = {},
                In = 1;
              function Pn(e) {
                return 0 == e % 4 && (0 != e % 100 || 0 == e % 400);
              }
              function Bn(e, t) {
                for (var n = 0, r = 0; r <= t; n += e[r++]);
                return n;
              }
              var Fn,
                Dn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                jn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
              function Rn(e, t) {
                for (e = new Date(e.getTime()); 0 < t; ) {
                  var n = e.getMonth(),
                    r = (Pn(e.getFullYear()) ? Dn : jn)[n];
                  if (!(t > r - e.getDate())) {
                    e.setDate(e.getDate() + t);
                    break;
                  }
                  (t -= r - e.getDate() + 1),
                    e.setDate(1),
                    11 > n
                      ? e.setMonth(n + 1)
                      : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                }
                return e;
              }
              function Vn(e, t, n, r) {
                function a(e, t, n) {
                  for (
                    e = "number" == typeof e ? e.toString() : e || "";
                    e.length < t;

                  )
                    e = n[0] + e;
                  return e;
                }
                function i(e, t) {
                  return a(e, t, "0");
                }
                function o(e, t) {
                  function n(e) {
                    return 0 > e ? -1 : 0 < e ? 1 : 0;
                  }
                  var r;
                  return (
                    0 === (r = n(e.getFullYear() - t.getFullYear())) &&
                      0 === (r = n(e.getMonth() - t.getMonth())) &&
                      (r = n(e.getDate() - t.getDate())),
                    r
                  );
                }
                function u(e) {
                  switch (e.getDay()) {
                    case 0:
                      return new Date(e.getFullYear() - 1, 11, 29);
                    case 1:
                      return e;
                    case 2:
                      return new Date(e.getFullYear(), 0, 3);
                    case 3:
                      return new Date(e.getFullYear(), 0, 2);
                    case 4:
                      return new Date(e.getFullYear(), 0, 1);
                    case 5:
                      return new Date(e.getFullYear() - 1, 11, 31);
                    case 6:
                      return new Date(e.getFullYear() - 1, 11, 30);
                  }
                }
                function c(e) {
                  e = Rn(new Date(e.j + 1900, 0, 1), e.V);
                  var t = u(new Date(e.getFullYear() + 1, 0, 4));
                  return 0 >= o(u(new Date(e.getFullYear(), 0, 4)), e)
                    ? 0 >= o(t, e)
                      ? e.getFullYear() + 1
                      : e.getFullYear()
                    : e.getFullYear() - 1;
                }
                var s = E[(r + 40) >> 2];
                for (var _ in ((r = {
                  Qa: E[r >> 2],
                  Pa: E[(r + 4) >> 2],
                  U: E[(r + 8) >> 2],
                  H: E[(r + 12) >> 2],
                  C: E[(r + 16) >> 2],
                  j: E[(r + 20) >> 2],
                  va: E[(r + 24) >> 2],
                  V: E[(r + 28) >> 2],
                  ad: E[(r + 32) >> 2],
                  Oa: E[(r + 36) >> 2],
                  Ra: s ? M(s) : "",
                }),
                (n = M(n)),
                (s = {
                  "%c": "%a %b %d %H:%M:%S %Y",
                  "%D": "%m/%d/%y",
                  "%F": "%Y-%m-%d",
                  "%h": "%b",
                  "%r": "%I:%M:%S %p",
                  "%R": "%H:%M",
                  "%T": "%H:%M:%S",
                  "%x": "%m/%d/%y",
                  "%X": "%H:%M:%S",
                })))
                  n = n.replace(new RegExp(_, "g"), s[_]);
                var f =
                    "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                      " "
                    ),
                  l =
                    "January February March April May June July August September October November December".split(
                      " "
                    );
                for (_ in (s = {
                  "%a": function (e) {
                    return f[e.va].substring(0, 3);
                  },
                  "%A": function (e) {
                    return f[e.va];
                  },
                  "%b": function (e) {
                    return l[e.C].substring(0, 3);
                  },
                  "%B": function (e) {
                    return l[e.C];
                  },
                  "%C": function (e) {
                    return i(((e.j + 1900) / 100) | 0, 2);
                  },
                  "%d": function (e) {
                    return i(e.H, 2);
                  },
                  "%e": function (e) {
                    return a(e.H, 2, " ");
                  },
                  "%g": function (e) {
                    return c(e).toString().substring(2);
                  },
                  "%G": function (e) {
                    return c(e);
                  },
                  "%H": function (e) {
                    return i(e.U, 2);
                  },
                  "%I": function (e) {
                    return (
                      0 == (e = e.U) ? (e = 12) : 12 < e && (e -= 12), i(e, 2)
                    );
                  },
                  "%j": function (e) {
                    return i(e.H + Bn(Pn(e.j + 1900) ? Dn : jn, e.C - 1), 3);
                  },
                  "%m": function (e) {
                    return i(e.C + 1, 2);
                  },
                  "%M": function (e) {
                    return i(e.Pa, 2);
                  },
                  "%n": function () {
                    return "\n";
                  },
                  "%p": function (e) {
                    return 0 <= e.U && 12 > e.U ? "AM" : "PM";
                  },
                  "%S": function (e) {
                    return i(e.Qa, 2);
                  },
                  "%t": function () {
                    return "\t";
                  },
                  "%u": function (e) {
                    return (
                      new Date(e.j + 1900, e.C + 1, e.H, 0, 0, 0, 0).getDay() ||
                      7
                    );
                  },
                  "%U": function (e) {
                    var t = new Date(e.j + 1900, 0, 1),
                      n = 0 === t.getDay() ? t : Rn(t, 7 - t.getDay());
                    return 0 > o(n, (e = new Date(e.j + 1900, e.C, e.H)))
                      ? i(
                          Math.ceil(
                            (31 -
                              n.getDate() +
                              (Bn(
                                Pn(e.getFullYear()) ? Dn : jn,
                                e.getMonth() - 1
                              ) -
                                31) +
                              e.getDate()) /
                              7
                          ),
                          2
                        )
                      : 0 === o(n, t)
                      ? "01"
                      : "00";
                  },
                  "%V": function (e) {
                    var t = u(new Date(e.j + 1900, 0, 4)),
                      n = u(new Date(e.j + 1901, 0, 4)),
                      r = Rn(new Date(e.j + 1900, 0, 1), e.V);
                    return 0 > o(r, t)
                      ? "53"
                      : 0 >= o(n, r)
                      ? "01"
                      : i(
                          Math.ceil(
                            (t.getFullYear() < e.j + 1900
                              ? e.V + 32 - t.getDate()
                              : e.V + 1 - t.getDate()) / 7
                          ),
                          2
                        );
                  },
                  "%w": function (e) {
                    return new Date(
                      e.j + 1900,
                      e.C + 1,
                      e.H,
                      0,
                      0,
                      0,
                      0
                    ).getDay();
                  },
                  "%W": function (e) {
                    var t = new Date(e.j, 0, 1),
                      n =
                        1 === t.getDay()
                          ? t
                          : Rn(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
                    return 0 > o(n, (e = new Date(e.j + 1900, e.C, e.H)))
                      ? i(
                          Math.ceil(
                            (31 -
                              n.getDate() +
                              (Bn(
                                Pn(e.getFullYear()) ? Dn : jn,
                                e.getMonth() - 1
                              ) -
                                31) +
                              e.getDate()) /
                              7
                          ),
                          2
                        )
                      : 0 === o(n, t)
                      ? "01"
                      : "00";
                  },
                  "%y": function (e) {
                    return (e.j + 1900).toString().substring(2);
                  },
                  "%Y": function (e) {
                    return e.j + 1900;
                  },
                  "%z": function (e) {
                    var t = 0 <= (e = e.Oa);
                    return (
                      (e = Math.abs(e) / 60),
                      (t ? "+" : "-") +
                        String("0000" + ((e / 60) * 100 + (e % 60))).slice(-4)
                    );
                  },
                  "%Z": function (e) {
                    return e.Ra;
                  },
                  "%%": function () {
                    return "%";
                  },
                }))
                  0 <= n.indexOf(_) &&
                    (n = n.replace(new RegExp(_, "g"), s[_](r)));
                return (_ = Nn(n, !1)).length > t
                  ? 0
                  : (z.set(_, e), _.length - 1);
              }
              (me =
                "undefined" != typeof dateNow
                  ? dateNow
                  : "object" == typeof self &&
                    self.performance &&
                    "function" == typeof self.performance.now
                  ? function () {
                      return self.performance.now();
                    }
                  : "object" == typeof performance &&
                    "function" == typeof performance.now
                  ? function () {
                      return performance.now();
                    }
                  : Date.now),
                bt(),
                (Ue = Array(4096)),
                ct(Re, "/"),
                _t("/tmp"),
                _t("/home"),
                _t("/home/web_user"),
                (function () {
                  if (
                    (_t("/dev"),
                    ut(259, {
                      read: function () {
                        return 0;
                      },
                      write: function (e, t, n, r) {
                        return r;
                      },
                    }),
                    ft("/dev/null", 259),
                    Be(1280, De),
                    Be(1536, je),
                    ft("/dev/tty", 1280),
                    ft("/dev/tty1", 1536),
                    "undefined" != typeof crypto)
                  )
                    var e = new Uint8Array(1),
                      t = function () {
                        return crypto.getRandomValues(e), e[0];
                      };
                  else
                    t = function () {
                      wr("random_device");
                    };
                  yt("random", t),
                    yt("urandom", t),
                    _t("/dev/shm"),
                    _t("/dev/shm/tmp");
                })(),
                _t("/proc"),
                _t("/proc/self"),
                _t("/proc/self/fd"),
                ct(
                  {
                    A: function () {
                      var e = $e("/proc/self", "fd", 16895, 73);
                      return (
                        (e.c = {
                          lookup: function (e, t) {
                            var n = Ge[+t];
                            if (!n) throw new Ze(ye.B);
                            return ((e = {
                              parent: null,
                              A: { ta: "fake" },
                              c: {
                                readlink: function () {
                                  return n.path;
                                },
                              },
                            }).parent = e);
                          },
                        }),
                        e
                      );
                    },
                  },
                  "/proc/self/fd"
                ),
                J.unshift(function () {
                  if (!r.noFSInit && !it) {
                    y(
                      !it,
                      "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
                    ),
                      (it = !0),
                      bt(),
                      (r.stdin = r.stdin),
                      (r.stdout = r.stdout),
                      (r.stderr = r.stderr),
                      r.stdin
                        ? yt("stdin", r.stdin)
                        : lt("/dev/tty", "/dev/stdin"),
                      r.stdout
                        ? yt("stdout", null, r.stdout)
                        : lt("/dev/tty", "/dev/stdout"),
                      r.stderr
                        ? yt("stderr", null, r.stderr)
                        : lt("/dev/tty1", "/dev/stderr");
                    var e = dt("/dev/stdin", "r");
                    y(0 === e.fd, "invalid handle for stdin (" + e.fd + ")"),
                      y(
                        1 === (e = dt("/dev/stdout", "w")).fd,
                        "invalid handle for stdout (" + e.fd + ")"
                      ),
                      y(
                        2 === (e = dt("/dev/stderr", "w")).fd,
                        "invalid handle for stderr (" + e.fd + ")"
                      );
                  }
                }),
                Q.push(function () {
                  We = !1;
                }),
                $.push(function () {
                  it = !1;
                  var e = r._fflush;
                  for (e && e(0), e = 0; e < Ge.length; e++) {
                    var t = Ge[e];
                    t && ht(t);
                  }
                }),
                J.unshift(function () {}),
                $.push(function () {}),
                (r.requestFullScreen = function (e, t, n) {
                  s(
                    "Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead."
                  ),
                    (r.requestFullScreen = r.requestFullscreen),
                    Qt(e, t, n);
                }),
                (r.requestFullscreen = function (e, t, n) {
                  Jt(e, t, n);
                }),
                (r.requestAnimationFrame = function (e) {
                  tn(e);
                }),
                (r.setCanvasSize = function (e, t, n) {
                  un(r.canvas, e, t), n || on();
                }),
                (r.pauseMainLoop = function () {
                  (It = null), Bt++;
                }),
                (r.resumeMainLoop = function () {
                  Bt++;
                  var e = jt,
                    t = Rt,
                    n = Ft;
                  (Ft = null), Tt(n, 0, !1, Dt, !0), Et(e, t), It();
                }),
                (r.getUserMedia = function () {
                  window.getUserMedia ||
                    (window.getUserMedia =
                      navigator.getUserMedia || navigator.mozGetUserMedia),
                    window.getUserMedia(void 0);
                }),
                (r.createContext = function (e, t, n, r) {
                  return Zt(e, t, n, r);
                }),
                (Fn = "undefined" == typeof ENVIRONMENT_IS_FETCH_WORKER),
                (function (e, t) {
                  try {
                    var n = indexedDB.open("emscripten_filesystem", 1);
                  } catch (e) {
                    return void t(e);
                  }
                  (n.onupgradeneeded = function (e) {
                    (e = e.target.result).objectStoreNames.contains("FILES") &&
                      e.deleteObjectStore("FILES"),
                      e.createObjectStore("FILES");
                  }),
                    (n.onsuccess = function (t) {
                      e(t.target.result);
                    }),
                    (n.onerror = function (e) {
                      t(e);
                    });
                })(
                  function (e) {
                    (pn = e), Fn && fe();
                  },
                  function () {
                    (pn = !1), Fn && fe();
                  }
                ),
                ("undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER &&
                  ENVIRONMENT_IS_FETCH_WORKER) ||
                  _e();
              for (var qn, Gn = 0; 256 > Gn; Gn++);
              for (Gn = 0; 32 > Gn; Gn++) Ln.push(Array(Gn));
              function Nn(e, t) {
                var n = Array(N(e) + 1);
                return (e = G(e, n, 0, n.length)), t && (n.length = e), n;
              }
              (j = _(4)),
                (P = B = l(S)),
                (D = l((F = P + Z))),
                (E[j >> 2] = D),
                (I = !0),
                (r.wasmTableSize = 2468),
                (r.wasmMaxTableSize = 2468),
                (r.Aa = {}),
                (r.Ba = {
                  abort: wr,
                  assert: y,
                  enlargeMemory: H,
                  getTotalMemory: function () {
                    return Y;
                  },
                  abortOnCannotGrowMemory: function () {
                    wr(
                      "Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " +
                        Y +
                        ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "
                    );
                  },
                  invoke_i: function (e) {
                    var t = vr();
                    try {
                      return r.dynCall_i(e);
                    } catch (e) {
                      if ((yr(t), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_ii: function (e, t) {
                    var n = vr();
                    try {
                      return r.dynCall_ii(e, t);
                    } catch (e) {
                      if ((yr(n), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iii: function (e, t, n) {
                    var a = vr();
                    try {
                      return r.dynCall_iii(e, t, n);
                    } catch (e) {
                      if ((yr(a), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiii: function (e, t, n, a) {
                    var i = vr();
                    try {
                      return r.dynCall_iiii(e, t, n, a);
                    } catch (e) {
                      if ((yr(i), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiii: function (e, t, n, a, i) {
                    var o = vr();
                    try {
                      return r.dynCall_iiiii(e, t, n, a, i);
                    } catch (e) {
                      if ((yr(o), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiid: function (e, t, n, a, i, o) {
                    var u = vr();
                    try {
                      return r.dynCall_iiiiid(e, t, n, a, i, o);
                    } catch (e) {
                      if ((yr(u), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiii: function (e, t, n, a, i, o) {
                    var u = vr();
                    try {
                      return r.dynCall_iiiiii(e, t, n, a, i, o);
                    } catch (e) {
                      if ((yr(u), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiiid: function (e, t, n, a, i, o, u) {
                    var c = vr();
                    try {
                      return r.dynCall_iiiiiid(e, t, n, a, i, o, u);
                    } catch (e) {
                      if ((yr(c), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiiii: function (e, t, n, a, i, o, u) {
                    var c = vr();
                    try {
                      return r.dynCall_iiiiiii(e, t, n, a, i, o, u);
                    } catch (e) {
                      if ((yr(c), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiiiii: function (e, t, n, a, i, o, u, c) {
                    var s = vr();
                    try {
                      return r.dynCall_iiiiiiii(e, t, n, a, i, o, u, c);
                    } catch (e) {
                      if ((yr(s), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiiiiii: function (e, t, n, a, i, o, u, c, s) {
                    var _ = vr();
                    try {
                      return r.dynCall_iiiiiiiii(e, t, n, a, i, o, u, c, s);
                    } catch (e) {
                      if ((yr(_), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiiiij: function (e, t, n, a, i, o, u) {
                    var c = vr();
                    try {
                      return r.dynCall_iiiiij(e, t, n, a, i, o, u);
                    } catch (e) {
                      if ((yr(c), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_iiji: function (e, t, n, a, i) {
                    var o = vr();
                    try {
                      return r.dynCall_iiji(e, t, n, a, i);
                    } catch (e) {
                      if ((yr(o), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_v: function (e) {
                    var t = vr();
                    try {
                      r.dynCall_v(e);
                    } catch (e) {
                      if ((yr(t), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_vi: function (e, t) {
                    var n = vr();
                    try {
                      r.dynCall_vi(e, t);
                    } catch (e) {
                      if ((yr(n), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_vii: function (e, t, n) {
                    var a = vr();
                    try {
                      r.dynCall_vii(e, t, n);
                    } catch (e) {
                      if ((yr(a), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiffii: function (e, t, n, a, i, o, u) {
                    var c = vr();
                    try {
                      r.dynCall_viiffii(e, t, n, a, i, o, u);
                    } catch (e) {
                      if ((yr(c), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viii: function (e, t, n, a) {
                    var i = vr();
                    try {
                      r.dynCall_viii(e, t, n, a);
                    } catch (e) {
                      if ((yr(i), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiifffii: function (e, t, n, a, i, o, u, c, s) {
                    var _ = vr();
                    try {
                      r.dynCall_viiifffii(e, t, n, a, i, o, u, c, s);
                    } catch (e) {
                      if ((yr(_), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiiffii: function (e, t, n, a, i, o, u, c) {
                    var s = vr();
                    try {
                      r.dynCall_viiiffii(e, t, n, a, i, o, u, c);
                    } catch (e) {
                      if ((yr(s), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiii: function (e, t, n, a, i) {
                    var o = vr();
                    try {
                      r.dynCall_viiii(e, t, n, a, i);
                    } catch (e) {
                      if ((yr(o), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiiii: function (e, t, n, a, i, o) {
                    var u = vr();
                    try {
                      r.dynCall_viiiii(e, t, n, a, i, o);
                    } catch (e) {
                      if ((yr(u), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiiiiffffffffffffffff: function (
                    e,
                    t,
                    n,
                    a,
                    i,
                    o,
                    u,
                    c,
                    s,
                    _,
                    f,
                    l,
                    p,
                    d,
                    h,
                    m,
                    b,
                    y,
                    v,
                    g,
                    w,
                    M
                  ) {
                    var k = vr();
                    try {
                      r.dynCall_viiiiiffffffffffffffff(
                        e,
                        t,
                        n,
                        a,
                        i,
                        o,
                        u,
                        c,
                        s,
                        _,
                        f,
                        l,
                        p,
                        d,
                        h,
                        m,
                        b,
                        y,
                        v,
                        g,
                        w,
                        M
                      );
                    } catch (e) {
                      if ((yr(k), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viiiiii: function (e, t, n, a, i, o, u) {
                    var c = vr();
                    try {
                      r.dynCall_viiiiii(e, t, n, a, i, o, u);
                    } catch (e) {
                      if ((yr(c), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viijii: function (e, t, n, a, i, o, u) {
                    var c = vr();
                    try {
                      r.dynCall_viijii(e, t, n, a, i, o, u);
                    } catch (e) {
                      if ((yr(c), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_vij: function (e, t, n, a) {
                    var i = vr();
                    try {
                      r.dynCall_vij(e, t, n, a);
                    } catch (e) {
                      if ((yr(i), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_viji: function (e, t, n, a, i) {
                    var o = vr();
                    try {
                      r.dynCall_viji(e, t, n, a, i);
                    } catch (e) {
                      if ((yr(o), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  invoke_vijii: function (e, t, n, a, i, o) {
                    var u = vr();
                    try {
                      r.dynCall_vijii(e, t, n, a, i, o);
                    } catch (e) {
                      if ((yr(u), "number" != typeof e && "longjmp" !== e))
                        throw e;
                      r.setThrew(1, 0);
                    }
                  },
                  ___buildEnvironment: function e(t) {
                    if (e.Da)
                      var n = E[t >> 2],
                        a = E[n >> 2];
                    else
                      (e.Da = !0),
                        (he.USER = he.LOGNAME = "web_user"),
                        (he.PATH = "/"),
                        (he.PWD = "/"),
                        (he.HOME = "/home/web_user"),
                        (he.LANG = "C.UTF-8"),
                        (he._ = r.thisProgram),
                        (a = I ? (te ? hr(1024) : f(1024)) : _(1024)),
                        (n = I ? (te ? hr(256) : f(256)) : _(256)),
                        (E[n >> 2] = a),
                        (E[t >> 2] = n);
                    t = [];
                    var i,
                      o = 0;
                    for (i in he)
                      if ("string" == typeof he[i]) {
                        var u = i + "=" + he[i];
                        t.push(u), (o += u.length);
                      }
                    if (1024 < o)
                      throw Error("Environment size exceeded TOTAL_ENV_SIZE!");
                    for (i = 0; i < t.length; i++) {
                      o = u = t[i];
                      for (var c = a, s = 0; s < o.length; ++s)
                        z[c++ >> 0] = o.charCodeAt(s);
                      (z[c >> 0] = 0),
                        (E[(n + 4 * i) >> 2] = a),
                        (a += u.length + 1);
                    }
                    E[(n + 4 * t.length) >> 2] = 0;
                  },
                  ___clock_gettime: function () {
                    return ge.apply(null, arguments);
                  },
                  ___cxa_allocate_exception: function (e) {
                    return hr(e);
                  },
                  ___cxa_begin_catch: function (e) {
                    var t = ke[e];
                    return (
                      t && !t.ma && ((t.ma = !0), fr.$--),
                      t && (t.L = !1),
                      Me.push(e),
                      (t = ze(e)) && ke[t].J++,
                      e
                    );
                  },
                  ___cxa_current_primary_exception: function () {
                    var e = Me[Me.length - 1] || 0;
                    if (e) {
                      var t = ze(e);
                      t && ke[t].J++;
                    }
                    return e;
                  },
                  ___cxa_decrement_exception_refcount: function (e) {
                    Ae(ze(e));
                  },
                  ___cxa_end_catch: function () {
                    r.setThrew(0);
                    var e = Me.pop();
                    e && (Ae(ze(e)), (we = 0));
                  },
                  ___cxa_find_matching_catch: function e() {
                    var t = we;
                    if (!t) return 0 | (mr(0), 0);
                    var n = ke[t],
                      a = n.type;
                    if (!a) return 0 | (mr(0), t);
                    var i = Array.prototype.slice.call(arguments);
                    r.___cxa_is_pointer_type(a),
                      e.buffer || (e.buffer = hr(4)),
                      (E[e.buffer >> 2] = t),
                      (t = e.buffer);
                    for (var o = 0; o < i.length; o++)
                      if (i[o] && r.___cxa_can_catch(i[o], a, t))
                        return (t = E[t >> 2]), (n.ka = t), 0 | (mr(i[o]), t);
                    return (t = E[t >> 2]), 0 | (mr(a), t);
                  },
                  ___cxa_free_exception: xe,
                  ___cxa_increment_exception_refcount: function (e) {
                    (e = ze(e)) && ke[e].J++;
                  },
                  ___cxa_pure_virtual: function () {
                    throw ((b = !0), "Pure virtual function called!");
                  },
                  ___cxa_rethrow: Le,
                  ___cxa_rethrow_primary_exception: function (e) {
                    e && (Me.push(e), (ke[e].L = !0), Le());
                  },
                  ___cxa_throw: function (e, t, n) {
                    throw (
                      ((ke[e] = {
                        Ka: e,
                        ka: e,
                        type: t,
                        oa: n,
                        J: 0,
                        ma: !1,
                        L: !1,
                      }),
                      (we = e),
                      "uncaught_exception" in fr ? fr.$++ : (fr.$ = 1),
                      e +
                        " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
                    );
                  },
                  ___cxa_uncaught_exception: function () {
                    return !!fr.$;
                  },
                  ___gxx_personality_v0: function () {},
                  ___lock: function () {},
                  ___map_file: function () {
                    return ve(ye.I), -1;
                  },
                  ___resumeException: function (e) {
                    throw (
                      (we || (we = e),
                      e +
                        " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
                    );
                  },
                  ___setErrNo: ve,
                  ___syscall140: function (e, t) {
                    At = t;
                    try {
                      var n = Lt();
                      xt();
                      var r = xt(),
                        a = xt(),
                        i = xt();
                      return (
                        mt(n, r, i),
                        (E[a >> 2] = n.position),
                        n.ba && 0 === r && 0 === i && (n.ba = null),
                        0
                      );
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall145: function (e, t) {
                    At = t;
                    try {
                      var n = Lt(),
                        r = xt();
                      e: {
                        var a = xt();
                        for (t = e = 0; t < a; t++) {
                          var i = E[(r + (8 * t + 4)) >> 2],
                            o = n,
                            u = E[(r + 8 * t) >> 2],
                            c = i,
                            s = void 0,
                            _ = z;
                          if (0 > c || 0 > s) throw new Ze(ye.i);
                          if (null === o.fd) throw new Ze(ye.B);
                          if (1 == (2097155 & o.flags)) throw new Ze(ye.B);
                          if (16384 == (61440 & o.node.mode))
                            throw new Ze(ye.N);
                          if (!o.f.read) throw new Ze(ye.i);
                          var f = void 0 !== s;
                          if (f) {
                            if (!o.seekable) throw new Ze(ye.O);
                          } else s = o.position;
                          var l = o.f.read(o, _, u, c, s);
                          f || (o.position += l);
                          var p = l;
                          if (0 > p) {
                            var d = -1;
                            break e;
                          }
                          if (((e += p), p < i)) break;
                        }
                        d = e;
                      }
                      return d;
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall146: function (e, t) {
                    At = t;
                    try {
                      var n = Lt(),
                        r = xt();
                      e: {
                        var a = xt();
                        for (t = e = 0; t < a; t++) {
                          var i = n,
                            o = E[(r + 8 * t) >> 2],
                            u = E[(r + (8 * t + 4)) >> 2],
                            c = z,
                            s = void 0;
                          if (0 > u || 0 > s) throw new Ze(ye.i);
                          if (null === i.fd) throw new Ze(ye.B);
                          if (0 == (2097155 & i.flags)) throw new Ze(ye.B);
                          if (16384 == (61440 & i.node.mode))
                            throw new Ze(ye.N);
                          if (!i.f.write) throw new Ze(ye.i);
                          1024 & i.flags && mt(i, 0, 2);
                          var _ = void 0 !== s;
                          if (_) {
                            if (!i.seekable) throw new Ze(ye.O);
                          } else s = i.position;
                          var f = i.f.write(i, c, o, u, s, void 0);
                          _ || (i.position += f);
                          try {
                            i.path &&
                              He.onWriteToFile &&
                              He.onWriteToFile(i.path);
                          } catch (e) {
                            console.log(
                              "FS.trackingDelegate['onWriteToFile']('" +
                                path +
                                "') threw an exception: " +
                                e.message
                            );
                          }
                          var l = f;
                          if (0 > l) {
                            var p = -1;
                            break e;
                          }
                          e += l;
                        }
                        p = e;
                      }
                      return p;
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall196: function (e, t) {
                    At = t;
                    try {
                      var n = M(xt());
                      e: {
                        var r = xt();
                        try {
                          var a = Xe(n, { aa: !1 }).node;
                          if (!a) throw new Ze(ye.u);
                          if (!a.c.m) throw new Ze(ye.I);
                          var i = a.c.m(a);
                        } catch (e) {
                          if (e && e.node && Oe(n) !== Oe(Ke(e.node))) {
                            var o = -ye.Z;
                            break e;
                          }
                          throw e;
                        }
                        (E[r >> 2] = i.dev),
                          (E[(r + 4) >> 2] = 0),
                          (E[(r + 8) >> 2] = i.ino),
                          (E[(r + 12) >> 2] = i.mode),
                          (E[(r + 16) >> 2] = i.nlink),
                          (E[(r + 20) >> 2] = i.uid),
                          (E[(r + 24) >> 2] = i.gid),
                          (E[(r + 28) >> 2] = i.rdev),
                          (E[(r + 32) >> 2] = 0),
                          (E[(r + 36) >> 2] = i.size),
                          (E[(r + 40) >> 2] = 4096),
                          (E[(r + 44) >> 2] = i.blocks),
                          (E[(r + 48) >> 2] = (i.atime.getTime() / 1e3) | 0),
                          (E[(r + 52) >> 2] = 0),
                          (E[(r + 56) >> 2] = (i.mtime.getTime() / 1e3) | 0),
                          (E[(r + 60) >> 2] = 0),
                          (E[(r + 64) >> 2] = (i.ctime.getTime() / 1e3) | 0),
                          (E[(r + 68) >> 2] = 0),
                          (E[(r + 72) >> 2] = i.ino),
                          (o = 0);
                      }
                      return o;
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall221: function (e, t) {
                    At = t;
                    try {
                      var n = Lt();
                      switch (xt()) {
                        case 0:
                          var r = xt();
                          return 0 > r ? -ye.i : dt(n.path, n.flags, 0, r).fd;
                        case 1:
                        case 2:
                          return 0;
                        case 3:
                          return n.flags;
                        case 4:
                          return (r = xt()), (n.flags |= r), 0;
                        case 12:
                        case 12:
                          return (r = xt()), (x[(r + 0) >> 1] = 2), 0;
                        case 13:
                        case 14:
                        case 13:
                        case 14:
                          return 0;
                        case 16:
                        case 8:
                          return -ye.i;
                        case 9:
                          return ve(ye.i), -1;
                        default:
                          return -ye.i;
                      }
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall5: function (e, t) {
                    At = t;
                    try {
                      return dt(M(xt()), xt(), xt()).fd;
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall54: function (e, t) {
                    At = t;
                    try {
                      var n = Lt(),
                        r = xt();
                      switch (r) {
                        case 21509:
                        case 21505:
                          return n.tty ? 0 : -ye.D;
                        case 21510:
                        case 21511:
                        case 21512:
                        case 21506:
                        case 21507:
                        case 21508:
                          return n.tty ? 0 : -ye.D;
                        case 21519:
                          if (!n.tty) return -ye.D;
                          var a = xt();
                          return (E[a >> 2] = 0);
                        case 21520:
                          return n.tty ? -ye.i : -ye.D;
                        case 21531:
                          if (((e = a = xt()), !n.f.Ha)) throw new Ze(ye.D);
                          return n.f.Ha(n, r, e);
                        case 21523:
                        case 21524:
                          return n.tty ? 0 : -ye.D;
                        default:
                          wr("bad ioctl syscall " + r);
                      }
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall6: function (e, t) {
                    At = t;
                    try {
                      return ht(Lt()), 0;
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___syscall91: function (e, t) {
                    At = t;
                    try {
                      var n = xt(),
                        r = xt(),
                        a = zt[n];
                      if (!a) return 0;
                      if (r === a.Xc) {
                        var i = Ge[a.fd],
                          o = a.flags,
                          u = new Uint8Array(A.subarray(n, n + r));
                        i && i.f.T && i.f.T(i, u, 0, r, o),
                          (zt[n] = null),
                          a.za && dr(a.Yc);
                      }
                      return 0;
                    } catch (e) {
                      return (void 0 !== kt && e instanceof Ze) || wr(e), -e.v;
                    }
                  },
                  ___unlock: function () {},
                  __addDays: Rn,
                  __arraySum: Bn,
                  __emscripten_fetch_cache_data: mn,
                  __emscripten_fetch_delete_cached_data: yn,
                  __emscripten_fetch_load_cached_data: bn,
                  __emscripten_fetch_xhr: hn,
                  __emscripten_get_fetch_work_queue: function () {
                    return vn;
                  },
                  __isLeapYear: Pn,
                  _abort: function () {
                    r.abort();
                  },
                  _clock_gettime: ge,
                  _emidentity: function () {
                    var e = new URL(location.origin).hostname;
                    if (
                      (0 === e.length &&
                        (e = new URL(location.href.replace("blob:", ""))
                          .hostname),
                      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                        e
                      ))
                    )
                      0 === e.indexOf("10.") && (e = "10.*"),
                        0 === e.indexOf( "37.140.") && (e =  "37.140.*"),
                        0 === e.indexOf("172.") && (e = "172.*"),
                        0 === e.indexOf("127.") && (e = "127.*");
                    else {
                      var t = new RegExp(
                        "(" +
                          String.fromCharCode(92) +
                          ".site)$",
                        "i"
                      );
                      t.test(e) && (e = "*.site"),
                        (t = new RegExp(
                          "(" +
                            String.fromCharCode(92) +
                            ".arweb" +
                            String.fromCharCode(92) +
                            ".app)$",
                          "i"
                        )).test(e) && (e = "*.arweb.app");
                    }
                    t = N(e) + 1;
                    var n = hr(t);
                    return G(e, A, n, t + 1), n;
                  },
                  _emlicerr: function () {
                    self.postMessage({ t: "licerr" });
                  },
                  _emscripten_asm_const_i: function (e) {
                    return pe[e]();
                  },
                  _emscripten_async_call: function (e, t, n) {
                    function a() {
                      !(function (e) {
                        if (e) {
                          y("vi"), h.vi || (h.vi = {});
                          var t = h.vi;
                          return (
                            t[e] ||
                              (t[e] = function (t) {
                                return m("vi", e, [t]);
                              }),
                            t[e]
                          );
                        }
                      })(e)(t);
                    }
                    (r.noExitRuntime = !0),
                      0 <= n
                        ? nn(a, n)
                        : (function (e) {
                            tn(function () {
                              b || e();
                            });
                          })(a);
                  },
                  _emscripten_get_now: me,
                  _emscripten_get_now_is_monotonic: be,
                  _emscripten_is_main_browser_thread: function () {
                    return !1;
                  },
                  _emscripten_is_main_runtime_thread: function () {
                    return 1;
                  },
                  _emscripten_memcpy_big: function (e, t, n) {
                    return A.set(A.subarray(t, t + n), e), e;
                  },
                  _emscripten_set_main_loop: Tt,
                  _emscripten_set_main_loop_timing: Et,
                  _emscripten_start_fetch: function (e, t, n, a) {
                    function i(e) {
                      l ? r.dynCall_vi(l, e) : n && n(e);
                    }
                    function o(e) {
                      p ? r.dynCall_vi(p, e) : a && a(e);
                    }
                    function u(e, n) {
                      mn(
                        pn,
                        e,
                        n.response,
                        function (e) {
                          f ? r.dynCall_vi(f, e) : t && t(e);
                        },
                        function (e) {
                          f ? r.dynCall_vi(f, e) : t && t(e);
                        }
                      );
                    }
                    function c(e) {
                      f ? r.dynCall_vi(f, e) : t && t(e);
                    }
                    void 0 !== r && (r.noExitRuntime = !0);
                    var s = e + 112,
                      _ = M(s),
                      f = T[(s + 36) >> 2],
                      l = T[(s + 40) >> 2],
                      p = T[(s + 44) >> 2],
                      d = T[(s + 48) >> 2],
                      h = !!(4 & d),
                      m = !!(32 & d);
                    if (
                      16 & d &&
                      "EM_IDB_STORE" !== _ &&
                      "EM_IDB_DELETE" !== _
                    ) {
                      if (m) return 0;
                      hn(e, h ? u : c, i, o);
                    } else {
                      if (!pn) return i(e), 0;
                      "EM_IDB_STORE" === _
                        ? ((_ = T[(s + 80) >> 2]),
                          (s = A.slice(_, _ + T[(s + 84) >> 2])),
                          mn(pn, e, s, c, i))
                        : "EM_IDB_DELETE" === _
                        ? yn(pn, e, c, i)
                        : bn(
                            pn,
                            e,
                            c,
                            m
                              ? i
                              : h
                              ? function (e) {
                                  hn(e, u, i, o);
                                }
                              : function (e) {
                                  hn(e, c, i, o);
                                }
                          );
                    }
                    return e;
                  },
                  _getenv: function e(t) {
                    if (0 === t) return 0;
                    if (((t = M(t)), !he.hasOwnProperty(t))) return 0;
                    e.l && dr(e.l);
                    var n = N((t = he[t])) + 1,
                      r = hr(n);
                    return r && G(t, z, r, n), (e.l = r);
                  },
                  _gettimeofday: function (e) {
                    var t = Date.now();
                    return (
                      (E[e >> 2] = (t / 1e3) | 0),
                      (E[(e + 4) >> 2] = ((t % 1e3) * 1e3) | 0),
                      0
                    );
                  },
                  _glBindTexture: function (e, t) {
                    qn.bindTexture(e, t ? zn[t] : null);
                  },
                  _glGenTextures: function (e, t) {
                    for (var n = 0; n < e; n++) {
                      var r = qn.createTexture();
                      if (!r) {
                        for (kn || (kn = 1282); n < e; )
                          E[(t + 4 * n++) >> 2] = 0;
                        break;
                      }
                      var a = En(zn);
                      (r.name = a), (zn[a] = r), (E[(t + 4 * n) >> 2] = a);
                    }
                  },
                  _glTexImage2D: function (e, t, n, r, a, i, o, u, c) {
                    var s = null;
                    c && (s = On(u, o, r, a, c)),
                      qn.texImage2D(e, t, n, r, a, i, o, u, s);
                  },
                  _glTexParameteri: function (e, t, n) {
                    qn.texParameteri(e, t, n);
                  },
                  _llvm_exp2_f32: function (e) {
                    return Math.pow(2, e);
                  },
                  _llvm_stackrestore: function (e) {
                    var t = Cn.l[e];
                    Cn.l.splice(e, 1), yr(t);
                  },
                  _llvm_stacksave: Cn,
                  _llvm_trap: function () {
                    wr("trap!");
                  },
                  _pthread_cond_destroy: function () {
                    return 0;
                  },
                  _pthread_cond_init: function () {
                    return 0;
                  },
                  _pthread_cond_signal: function () {
                    return 0;
                  },
                  _pthread_cond_wait: function () {
                    return 0;
                  },
                  _pthread_create: function () {
                    return 11;
                  },
                  _pthread_getspecific: function (e) {
                    return Sn[e] || 0;
                  },
                  _pthread_join: function () {},
                  _pthread_key_create: function (e) {
                    return 0 == e
                      ? ye.i
                      : ((E[e >> 2] = In), (Sn[In] = 0), In++, 0);
                  },
                  _pthread_mutex_destroy: function () {},
                  _pthread_mutex_init: function () {},
                  _pthread_once: function e(t, n) {
                    e.l || (e.l = {}),
                      t in e.l || (r.dynCall_v(n), (e.l[t] = 1));
                  },
                  _pthread_setspecific: function (e, t) {
                    return e in Sn ? ((Sn[e] = t), 0) : ye.i;
                  },
                  _strftime: Vn,
                  _strftime_l: function (e, t, n, r) {
                    return Vn(e, t, n, r);
                  },
                  _sysconf: function (e) {
                    switch (e) {
                      case 30:
                        return 16384;
                      case 85:
                        return 131068;
                      case 132:
                      case 133:
                      case 12:
                      case 137:
                      case 138:
                      case 15:
                      case 235:
                      case 16:
                      case 17:
                      case 18:
                      case 19:
                      case 20:
                      case 149:
                      case 13:
                      case 10:
                      case 236:
                      case 153:
                      case 9:
                      case 21:
                      case 22:
                      case 159:
                      case 154:
                      case 14:
                      case 77:
                      case 78:
                      case 139:
                      case 80:
                      case 81:
                      case 82:
                      case 68:
                      case 67:
                      case 164:
                      case 11:
                      case 29:
                      case 47:
                      case 48:
                      case 95:
                      case 52:
                      case 51:
                      case 46:
                        return 200809;
                      case 79:
                        return 0;
                      case 27:
                      case 246:
                      case 127:
                      case 128:
                      case 23:
                      case 24:
                      case 160:
                      case 161:
                      case 181:
                      case 182:
                      case 242:
                      case 183:
                      case 184:
                      case 243:
                      case 244:
                      case 245:
                      case 165:
                      case 178:
                      case 179:
                      case 49:
                      case 50:
                      case 168:
                      case 169:
                      case 175:
                      case 170:
                      case 171:
                      case 172:
                      case 97:
                      case 76:
                      case 32:
                      case 173:
                      case 35:
                        return -1;
                      case 176:
                      case 177:
                      case 7:
                      case 155:
                      case 8:
                      case 157:
                      case 125:
                      case 126:
                      case 92:
                      case 93:
                      case 129:
                      case 130:
                      case 131:
                      case 94:
                      case 91:
                        return 1;
                      case 74:
                      case 60:
                      case 69:
                      case 70:
                      case 4:
                        return 1024;
                      case 31:
                      case 42:
                      case 72:
                        return 32;
                      case 87:
                      case 26:
                      case 33:
                        return 2147483647;
                      case 34:
                      case 1:
                        return 47839;
                      case 38:
                      case 36:
                        return 99;
                      case 43:
                      case 37:
                        return 2048;
                      case 0:
                        return 2097152;
                      case 3:
                        return 65536;
                      case 28:
                        return 32768;
                      case 44:
                        return 32767;
                      case 75:
                        return 16384;
                      case 39:
                        return 1e3;
                      case 89:
                        return 700;
                      case 71:
                        return 256;
                      case 40:
                        return 255;
                      case 2:
                        return 100;
                      case 180:
                        return 64;
                      case 25:
                        return 20;
                      case 5:
                        return 16;
                      case 6:
                        return 6;
                      case 73:
                        return 4;
                      case 84:
                        return (
                          ("object" == typeof navigator &&
                            navigator.hardwareConcurrency) ||
                          1
                        );
                    }
                    return ve(ye.i), -1;
                  },
                  emscriptenWebGLComputeImageSize: Tn,
                  emscriptenWebGLGetTexPixelData: On,
                  DYNAMICTOP_PTR: j,
                  tempDoublePtr: de,
                  STACKTOP: B,
                  STACK_MAX: F,
                });
              var Un = r.asm(r.Aa, r.Ba, k);
              r.asm = Un;
              var Wn = (r.__GLOBAL__I_000101 = function () {
                  return r.asm.__GLOBAL__I_000101.apply(null, arguments);
                }),
                Hn = (r.__GLOBAL__sub_I_AZHighLevelEncoder_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_AZHighLevelEncoder_cpp.apply(
                    null,
                    arguments
                  );
                }),
                Zn = (r.__GLOBAL__sub_I_CameraSource_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_CameraSource_cpp.apply(
                    null,
                    arguments
                  );
                }),
                Yn = (r.__GLOBAL__sub_I_CharacterSetECI_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_CharacterSetECI_cpp.apply(
                    null,
                    arguments
                  );
                }),
                Xn = (r.__GLOBAL__sub_I_DMECEncoder_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_DMECEncoder_cpp.apply(
                    null,
                    arguments
                  );
                }),
                Kn = (r.__GLOBAL__sub_I_DMHighLevelEncoder_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_DMHighLevelEncoder_cpp.apply(
                    null,
                    arguments
                  );
                }),
                Jn = (r.__GLOBAL__sub_I_GridSampler_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_GridSampler_cpp.apply(
                    null,
                    arguments
                  );
                }),
                Qn = (r.__GLOBAL__sub_I_ODCode128Patterns_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_ODCode128Patterns_cpp.apply(
                    null,
                    arguments
                  );
                }),
                $n = (r.__GLOBAL__sub_I_ODRSSExpandedReader_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_ODRSSExpandedReader_cpp.apply(
                    null,
                    arguments
                  );
                }),
                er = (r.__GLOBAL__sub_I_PDFDetector_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_PDFDetector_cpp.apply(
                    null,
                    arguments
                  );
                }),
                tr = (r.__GLOBAL__sub_I_StandardStatsManager_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_StandardStatsManager_cpp.apply(
                    null,
                    arguments
                  );
                }),
                nr = (r.__GLOBAL__sub_I_barcode_finder_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_barcode_finder_cpp.apply(
                    null,
                    arguments
                  );
                }),
                rr = (r.__GLOBAL__sub_I_face_landmark_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_face_landmark_cpp.apply(
                    null,
                    arguments
                  );
                }),
                ar = (r.__GLOBAL__sub_I_face_mesh_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_face_mesh_cpp.apply(
                    null,
                    arguments
                  );
                }),
                ir = (r.__GLOBAL__sub_I_face_tracker_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_face_tracker_cpp.apply(
                    null,
                    arguments
                  );
                }),
                or = (r.__GLOBAL__sub_I_image_tracker_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_image_tracker_cpp.apply(
                    null,
                    arguments
                  );
                }),
                ur = (r.__GLOBAL__sub_I_instant_tracker_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_instant_tracker_cpp.apply(
                    null,
                    arguments
                  );
                }),
                cr = (r.__GLOBAL__sub_I_iostream_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_iostream_cpp.apply(
                    null,
                    arguments
                  );
                }),
                sr = (r.__GLOBAL__sub_I_pipeline_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_pipeline_cpp.apply(
                    null,
                    arguments
                  );
                }),
                _r = (r.__GLOBAL__sub_I_zappar_face_tracker_cpp = function () {
                  return r.asm.__GLOBAL__sub_I_zappar_face_tracker_cpp.apply(
                    null,
                    arguments
                  );
                });
              (r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti = function () {
                return r.asm.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti.apply(
                  null,
                  arguments
                );
              }),
                (r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i =
                  function () {
                    return r.asm.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i =
                  function () {
                    return r.asm.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti =
                  function () {
                    return r.asm.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii =
                  function () {
                    return r.asm.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc =
                  function () {
                    return r.asm.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  }),
                (r.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii =
                  function () {
                    return r.asm.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii.apply(
                      null,
                      arguments
                    );
                  });
              var fr = (r.__ZSt18uncaught_exceptionv = function () {
                return r.asm.__ZSt18uncaught_exceptionv.apply(null, arguments);
              });
              (r.___cxa_can_catch = function () {
                return r.asm.___cxa_can_catch.apply(null, arguments);
              }),
                (r.___cxa_is_pointer_type = function () {
                  return r.asm.___cxa_is_pointer_type.apply(null, arguments);
                }),
                (r.___em_js__emidentity = function () {
                  return r.asm.___em_js__emidentity.apply(null, arguments);
                }),
                (r.___em_js__emlicerr = function () {
                  return r.asm.___em_js__emlicerr.apply(null, arguments);
                });
              var lr = (r.___emscripten_environ_constructor = function () {
                return r.asm.___emscripten_environ_constructor.apply(
                  null,
                  arguments
                );
              });
              (r.___errno_location = function () {
                return r.asm.___errno_location.apply(null, arguments);
              }),
                (r.__get_environ = function () {
                  return r.asm.__get_environ.apply(null, arguments);
                });
              var pr = (r._emscripten_replace_memory = function () {
                  return r.asm._emscripten_replace_memory.apply(
                    null,
                    arguments
                  );
                }),
                dr = (r._free = function () {
                  return r.asm._free.apply(null, arguments);
                });
              (r._llvm_bswap_i32 = function () {
                return r.asm._llvm_bswap_i32.apply(null, arguments);
              }),
                (r._llvm_round_f32 = function () {
                  return r.asm._llvm_round_f32.apply(null, arguments);
                }),
                (r._llvm_round_f64 = function () {
                  return r.asm._llvm_round_f64.apply(null, arguments);
                });
              var hr = (r._malloc = function () {
                return r.asm._malloc.apply(null, arguments);
              });
              (r._memcpy = function () {
                return r.asm._memcpy.apply(null, arguments);
              }),
                (r._memmove = function () {
                  return r.asm._memmove.apply(null, arguments);
                }),
                (r._memset = function () {
                  return r.asm._memset.apply(null, arguments);
                }),
                (r._pthread_cond_broadcast = function () {
                  return r.asm._pthread_cond_broadcast.apply(null, arguments);
                }),
                (r._pthread_mutex_lock = function () {
                  return r.asm._pthread_mutex_lock.apply(null, arguments);
                }),
                (r._pthread_mutex_unlock = function () {
                  return r.asm._pthread_mutex_unlock.apply(null, arguments);
                }),
                (r._round = function () {
                  return r.asm._round.apply(null, arguments);
                }),
                (r._sbrk = function () {
                  return r.asm._sbrk.apply(null, arguments);
                }),
                (r._zappar_analytics_project_id_set = function () {
                  return r.asm._zappar_analytics_project_id_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_create = function () {
                  return r.asm._zappar_barcode_finder_create.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_destroy = function () {
                  return r.asm._zappar_barcode_finder_destroy.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_enabled = function () {
                  return r.asm._zappar_barcode_finder_enabled.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_enabled_set = function () {
                  return r.asm._zappar_barcode_finder_enabled_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_formats = function () {
                  return r.asm._zappar_barcode_finder_formats.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_formats_set = function () {
                  return r.asm._zappar_barcode_finder_formats_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_found_format = function () {
                  return r.asm._zappar_barcode_finder_found_format.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_found_number = function () {
                  return r.asm._zappar_barcode_finder_found_number.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_barcode_finder_found_text = function () {
                  return r.asm._zappar_barcode_finder_found_text.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_camera_default_device_id = function () {
                  return r.asm._zappar_camera_default_device_id.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_camera_source_create = function () {
                  return r.asm._zappar_camera_source_create.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_camera_source_destroy = function () {
                  return r.asm._zappar_camera_source_destroy.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_camera_source_pause = function () {
                  return r.asm._zappar_camera_source_pause.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_camera_source_start = function () {
                  return r.asm._zappar_camera_source_start.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_landmark_anchor_pose = function () {
                  return r.asm._zappar_face_landmark_anchor_pose.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_landmark_create = function () {
                  return r.asm._zappar_face_landmark_create.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_landmark_destroy = function () {
                  return r.asm._zappar_face_landmark_destroy.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_mesh_create = function () {
                  return r.asm._zappar_face_mesh_create.apply(null, arguments);
                }),
                (r._zappar_face_mesh_destroy = function () {
                  return r.asm._zappar_face_mesh_destroy.apply(null, arguments);
                }),
                (r._zappar_face_tracker_anchor_count = function () {
                  return r.asm._zappar_face_tracker_anchor_count.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_anchor_expression_coefficients =
                  function () {
                    return r.asm._zappar_face_tracker_anchor_expression_coefficients.apply(
                      null,
                      arguments
                    );
                  }),
                (r._zappar_face_tracker_anchor_id = function () {
                  return r.asm._zappar_face_tracker_anchor_id.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_anchor_identity_coefficients =
                  function () {
                    return r.asm._zappar_face_tracker_anchor_identity_coefficients.apply(
                      null,
                      arguments
                    );
                  }),
                (r._zappar_face_tracker_anchor_pose_raw = function () {
                  return r.asm._zappar_face_tracker_anchor_pose_raw.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_create = function () {
                  return r.asm._zappar_face_tracker_create.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_destroy = function () {
                  return r.asm._zappar_face_tracker_destroy.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_enabled = function () {
                  return r.asm._zappar_face_tracker_enabled.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_enabled_set = function () {
                  return r.asm._zappar_face_tracker_enabled_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_max_faces = function () {
                  return r.asm._zappar_face_tracker_max_faces.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_max_faces_set = function () {
                  return r.asm._zappar_face_tracker_max_faces_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_model_load_from_memory = function () {
                  return r.asm._zappar_face_tracker_model_load_from_memory.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_face_tracker_model_loaded_version = function () {
                  return r.asm._zappar_face_tracker_model_loaded_version.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_has_initialized = function () {
                  return r.asm._zappar_has_initialized.apply(null, arguments);
                }),
                (r._zappar_image_tracker_anchor_count = function () {
                  return r.asm._zappar_image_tracker_anchor_count.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_anchor_id = function () {
                  return r.asm._zappar_image_tracker_anchor_id.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_anchor_pose_raw = function () {
                  return r.asm._zappar_image_tracker_anchor_pose_raw.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_create = function () {
                  return r.asm._zappar_image_tracker_create.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_destroy = function () {
                  return r.asm._zappar_image_tracker_destroy.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_enabled = function () {
                  return r.asm._zappar_image_tracker_enabled.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_enabled_set = function () {
                  return r.asm._zappar_image_tracker_enabled_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_target_count = function () {
                  return r.asm._zappar_image_tracker_target_count.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_target_load_from_memory = function () {
                  return r.asm._zappar_image_tracker_target_load_from_memory.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_image_tracker_target_loaded_version = function () {
                  return r.asm._zappar_image_tracker_target_loaded_version.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_instant_world_tracker_anchor_pose_raw = function () {
                  return r.asm._zappar_instant_world_tracker_anchor_pose_raw.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset =
                  function () {
                    return r.asm._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset.apply(
                      null,
                      arguments
                    );
                  }),
                (r._zappar_instant_world_tracker_create = function () {
                  return r.asm._zappar_instant_world_tracker_create.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_instant_world_tracker_destroy = function () {
                  return r.asm._zappar_instant_world_tracker_destroy.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_instant_world_tracker_enabled = function () {
                  return r.asm._zappar_instant_world_tracker_enabled.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_instant_world_tracker_enabled_set = function () {
                  return r.asm._zappar_instant_world_tracker_enabled_set.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_invert = function () {
                  return r.asm._zappar_invert.apply(null, arguments);
                }),
                (r._zappar_loaded = function () {
                  return r.asm._zappar_loaded.apply(null, arguments);
                }),
                (r._zappar_log_level = function () {
                  return r.asm._zappar_log_level.apply(null, arguments);
                }),
                (r._zappar_log_level_set = function () {
                  return r.asm._zappar_log_level_set.apply(null, arguments);
                }),
                (r._zappar_pipeline_camera_frame_camera_attitude = function () {
                  return r.asm._zappar_pipeline_camera_frame_camera_attitude.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_frame_submit = function () {
                  return r.asm._zappar_pipeline_camera_frame_submit.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_frame_texture_gl = function () {
                  return r.asm._zappar_pipeline_camera_frame_texture_gl.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_frame_texture_matrix = function () {
                  return r.asm._zappar_pipeline_camera_frame_texture_matrix.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_frame_upload_gl = function () {
                  return r.asm._zappar_pipeline_camera_frame_upload_gl.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_frame_user_data = function () {
                  return r.asm._zappar_pipeline_camera_frame_user_data.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_frame_user_facing = function () {
                  return r.asm._zappar_pipeline_camera_frame_user_facing.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_model = function () {
                  return r.asm._zappar_pipeline_camera_model.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_pose_default = function () {
                  return r.asm._zappar_pipeline_camera_pose_default.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_pose_with_attitude = function () {
                  return r.asm._zappar_pipeline_camera_pose_with_attitude.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_camera_pose_with_origin = function () {
                  return r.asm._zappar_pipeline_camera_pose_with_origin.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_create = function () {
                  return r.asm._zappar_pipeline_create.apply(null, arguments);
                }),
                (r._zappar_pipeline_destroy = function () {
                  return r.asm._zappar_pipeline_destroy.apply(null, arguments);
                }),
                (r._zappar_pipeline_frame_number = function () {
                  return r.asm._zappar_pipeline_frame_number.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_frame_update = function () {
                  return r.asm._zappar_pipeline_frame_update.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_motion_accelerometer_submit = function () {
                  return r.asm._zappar_pipeline_motion_accelerometer_submit.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_motion_attitude_submit = function () {
                  return r.asm._zappar_pipeline_motion_attitude_submit.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_motion_rotation_rate_submit = function () {
                  return r.asm._zappar_pipeline_motion_rotation_rate_submit.apply(
                    null,
                    arguments
                  );
                }),
                (r._zappar_pipeline_process_gl = function () {
                  return r.asm._zappar_pipeline_process_gl.apply(
                    null,
                    arguments
                  );
                }),
                (r.establishStackSpace = function () {
                  return r.asm.establishStackSpace.apply(null, arguments);
                }),
                (r.getTempRet0 = function () {
                  return r.asm.getTempRet0.apply(null, arguments);
                }),
                (r.runPostSets = function () {
                  return r.asm.runPostSets.apply(null, arguments);
                });
              var mr = (r.setTempRet0 = function () {
                return r.asm.setTempRet0.apply(null, arguments);
              });
              r.setThrew = function () {
                return r.asm.setThrew.apply(null, arguments);
              };
              var br = (r.stackAlloc = function () {
                  return r.asm.stackAlloc.apply(null, arguments);
                }),
                yr = (r.stackRestore = function () {
                  return r.asm.stackRestore.apply(null, arguments);
                }),
                vr = (r.stackSave = function () {
                  return r.asm.stackSave.apply(null, arguments);
                });
              function gr() {
                function e() {
                  if (!r.calledRun && ((r.calledRun = !0), !b)) {
                    if (
                      (te || ((te = !0), X(J)),
                      X(Q),
                      r.onRuntimeInitialized && r.onRuntimeInitialized(),
                      r.postRun)
                    )
                      for (
                        "function" == typeof r.postRun &&
                        (r.postRun = [r.postRun]);
                        r.postRun.length;

                      ) {
                        var e = r.postRun.shift();
                        ee.unshift(e);
                      }
                    X(ee);
                  }
                }
                if (!(0 < ue)) {
                  if (r.preRun)
                    for (
                      "function" == typeof r.preRun && (r.preRun = [r.preRun]);
                      r.preRun.length;

                    )
                      ne();
                  X(K),
                    0 < ue ||
                      r.calledRun ||
                      (r.setStatus
                        ? (r.setStatus("Running..."),
                          setTimeout(function () {
                            setTimeout(function () {
                              r.setStatus("");
                            }, 1),
                              e();
                          }, 1))
                        : e());
                }
              }
              function wr(e) {
                throw (
                  (r.onAbort && r.onAbort(e),
                  void 0 !== e
                    ? (c(e), s(e), (e = JSON.stringify(e)))
                    : (e = ""),
                  (b = !0),
                  "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.")
                );
              }
              if (
                ((r.dynCall_i = function () {
                  return r.asm.dynCall_i.apply(null, arguments);
                }),
                (r.dynCall_ii = function () {
                  return r.asm.dynCall_ii.apply(null, arguments);
                }),
                (r.dynCall_iii = function () {
                  return r.asm.dynCall_iii.apply(null, arguments);
                }),
                (r.dynCall_iiii = function () {
                  return r.asm.dynCall_iiii.apply(null, arguments);
                }),
                (r.dynCall_iiiii = function () {
                  return r.asm.dynCall_iiiii.apply(null, arguments);
                }),
                (r.dynCall_iiiiid = function () {
                  return r.asm.dynCall_iiiiid.apply(null, arguments);
                }),
                (r.dynCall_iiiiii = function () {
                  return r.asm.dynCall_iiiiii.apply(null, arguments);
                }),
                (r.dynCall_iiiiiid = function () {
                  return r.asm.dynCall_iiiiiid.apply(null, arguments);
                }),
                (r.dynCall_iiiiiii = function () {
                  return r.asm.dynCall_iiiiiii.apply(null, arguments);
                }),
                (r.dynCall_iiiiiiii = function () {
                  return r.asm.dynCall_iiiiiiii.apply(null, arguments);
                }),
                (r.dynCall_iiiiiiiii = function () {
                  return r.asm.dynCall_iiiiiiiii.apply(null, arguments);
                }),
                (r.dynCall_iiiiij = function () {
                  return r.asm.dynCall_iiiiij.apply(null, arguments);
                }),
                (r.dynCall_iiji = function () {
                  return r.asm.dynCall_iiji.apply(null, arguments);
                }),
                (r.dynCall_v = function () {
                  return r.asm.dynCall_v.apply(null, arguments);
                }),
                (r.dynCall_vi = function () {
                  return r.asm.dynCall_vi.apply(null, arguments);
                }),
                (r.dynCall_vii = function () {
                  return r.asm.dynCall_vii.apply(null, arguments);
                }),
                (r.dynCall_viiffii = function () {
                  return r.asm.dynCall_viiffii.apply(null, arguments);
                }),
                (r.dynCall_viii = function () {
                  return r.asm.dynCall_viii.apply(null, arguments);
                }),
                (r.dynCall_viiifffii = function () {
                  return r.asm.dynCall_viiifffii.apply(null, arguments);
                }),
                (r.dynCall_viiiffii = function () {
                  return r.asm.dynCall_viiiffii.apply(null, arguments);
                }),
                (r.dynCall_viiii = function () {
                  return r.asm.dynCall_viiii.apply(null, arguments);
                }),
                (r.dynCall_viiiii = function () {
                  return r.asm.dynCall_viiiii.apply(null, arguments);
                }),
                (r.dynCall_viiiiiffffffffffffffff = function () {
                  return r.asm.dynCall_viiiiiffffffffffffffff.apply(
                    null,
                    arguments
                  );
                }),
                (r.dynCall_viiiiii = function () {
                  return r.asm.dynCall_viiiiii.apply(null, arguments);
                }),
                (r.dynCall_viijii = function () {
                  return r.asm.dynCall_viijii.apply(null, arguments);
                }),
                (r.dynCall_vij = function () {
                  return r.asm.dynCall_vij.apply(null, arguments);
                }),
                (r.dynCall_viji = function () {
                  return r.asm.dynCall_viji.apply(null, arguments);
                }),
                (r.dynCall_vijii = function () {
                  return r.asm.dynCall_vijii.apply(null, arguments);
                }),
                (r.asm = Un),
                (r.cwrap = function (e, t, n, r) {
                  var a = (n = n || []).every(function (e) {
                    return "number" === e;
                  });
                  return "string" !== t && a && !r
                    ? v(e)
                    : function () {
                        var r = n,
                          a = arguments,
                          i = v(e),
                          o = [],
                          u = 0;
                        if (a)
                          for (var c = 0; c < a.length; c++) {
                            var s = w[r[c]];
                            s
                              ? (0 === u && (u = vr()), (o[c] = s(a[c])))
                              : (o[c] = a[c]);
                          }
                        return (
                          (r = i.apply(null, o)),
                          (r =
                            "string" === t ? M(r) : "boolean" === t ? !!r : r),
                          0 !== u && yr(u),
                          r
                        );
                      };
                }),
                (r.setValue = function (e, t, n) {
                  switch (
                    ("*" === (n = n || "i8").charAt(n.length - 1) &&
                      (n = "i32"),
                    n)
                  ) {
                    case "i1":
                    case "i8":
                      z[e >> 0] = t;
                      break;
                    case "i16":
                      x[e >> 1] = t;
                      break;
                    case "i32":
                      E[e >> 2] = t;
                      break;
                    case "i64":
                      (tempI64 = [
                        t >>> 0,
                        ((tempDouble = t),
                        1 <= +re(tempDouble)
                          ? 0 < tempDouble
                            ? (0 |
                                oe(
                                  +ie(tempDouble / 4294967296),
                                  4294967295
                                )) >>>
                              0
                            : ~~+ae(
                                (tempDouble - +(~~tempDouble >>> 0)) /
                                  4294967296
                              ) >>> 0
                          : 0),
                      ]),
                        (E[e >> 2] = tempI64[0]),
                        (E[(e + 4) >> 2] = tempI64[1]);
                      break;
                    case "float":
                      O[e >> 2] = t;
                      break;
                    case "double":
                      C[e >> 3] = t;
                      break;
                    default:
                      wr("invalid type for setValue: " + n);
                  }
                }),
                (r.getValue = function (e, t) {
                  switch (
                    ("*" === (t = t || "i8").charAt(t.length - 1) &&
                      (t = "i32"),
                    t)
                  ) {
                    case "i1":
                    case "i8":
                      return z[e >> 0];
                    case "i16":
                      return x[e >> 1];
                    case "i32":
                    case "i64":
                      return E[e >> 2];
                    case "float":
                      return O[e >> 2];
                    case "double":
                      return C[e >> 3];
                    default:
                      wr("invalid type for getValue: " + t);
                  }
                  return null;
                }),
                (r.UTF8ToString = q),
                (r.then = function (e) {
                  if (r.calledRun) e(r);
                  else {
                    var t = r.onRuntimeInitialized;
                    r.onRuntimeInitialized = function () {
                      t && t(), e(r);
                    };
                  }
                  return r;
                }),
                (se = function e() {
                  r.calledRun || gr(), r.calledRun || (se = e);
                }),
                (r.run = gr),
                (r.abort = wr),
                r.preInit)
              )
                for (
                  "function" == typeof r.preInit && (r.preInit = [r.preInit]);
                  0 < r.preInit.length;

                )
                  r.preInit.pop()();
              return (r.noExitRuntime = !0), gr(), t;
            });
        t.default = r;
      }.call(this, n(4).setImmediate);
  },
  function (e, t, n) {
    (function (e) {
      var r =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        a = Function.prototype.apply;
      function i(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new i(a.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new i(a.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (i.prototype.unref = i.prototype.ref = function () {}),
        (i.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(5),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        if (!e.setImmediate) {
          var r,
            a,
            i,
            o,
            u,
            c = 1,
            s = {},
            _ = !1,
            f = e.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (l = l && l.setTimeout ? l : e),
            "[object process]" === {}.toString.call(e.process)
              ? (r = function (e) {
                  t.nextTick(function () {
                    d(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((i = new MessageChannel()).port1.onmessage = function (e) {
                    d(e.data);
                  }),
                  (r = function (e) {
                    i.port2.postMessage(e);
                  }))
                : f && "onreadystatechange" in f.createElement("script")
                ? ((a = f.documentElement),
                  (r = function (e) {
                    var t = f.createElement("script");
                    (t.onreadystatechange = function () {
                      d(e),
                        (t.onreadystatechange = null),
                        a.removeChild(t),
                        (t = null);
                    }),
                      a.appendChild(t);
                  }))
                : (r = function (e) {
                    setTimeout(d, 0, e);
                  })
              : ((o = "setImmediate$" + Math.random() + "$"),
                (u = function (t) {
                  t.source === e &&
                    "string" == typeof t.data &&
                    0 === t.data.indexOf(o) &&
                    d(+t.data.slice(o.length));
                }),
                e.addEventListener
                  ? e.addEventListener("message", u, !1)
                  : e.attachEvent("onmessage", u),
                (r = function (t) {
                  e.postMessage(o + t, "*");
                })),
            (l.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var a = { callback: e, args: t };
              return (s[c] = a), r(c), c++;
            }),
            (l.clearImmediate = p);
        }
        function p(e) {
          delete s[e];
        }
        function d(e) {
          if (_) setTimeout(d, 0, e);
          else {
            var t = s[e];
            if (t) {
              _ = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                p(e), (_ = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, n(0), n(6)));
  },
  function (e, t) {
    var n,
      r,
      a = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        r = o;
      }
    })();
    var c,
      s = [],
      _ = !1,
      f = -1;
    function l() {
      _ &&
        c &&
        ((_ = !1), c.length ? (s = c.concat(s)) : (f = -1), s.length && p());
    }
    function p() {
      if (!_) {
        var e = u(l);
        _ = !0;
        for (var t = s.length; t; ) {
          for (c = s, s = []; ++f < t; ) c && c[f].run();
          (f = -1), (t = s.length);
        }
        (c = null),
          (_ = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === o || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function d(e, t) {
      (this.fun = e), (this.array = t);
    }
    function h() {}
    (a.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      s.push(new d(e, t)), 1 !== s.length || _ || u(p);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (a.title = "browser"),
      (a.browser = !0),
      (a.env = {}),
      (a.argv = []),
      (a.version = ""),
      (a.versions = {}),
      (a.on = h),
      (a.addListener = h),
      (a.once = h),
      (a.off = h),
      (a.removeListener = h),
      (a.removeAllListeners = h),
      (a.emit = h),
      (a.prependListener = h),
      (a.prependOnceListener = h),
      (a.listeners = function (e) {
        return [];
      }),
      (a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (a.cwd = function () {
        return "/";
      }),
      (a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (a.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getRuntimeObject = void 0),
      (t.getRuntimeObject = function (e) {
        let t = e.cwrap("zappar_log_level", "number", []),
          n = e.cwrap("zappar_log_level_set", null, ["number"]),
          r = e.cwrap("zappar_analytics_project_id_set", null, ["string"]),
          a = e.cwrap("zappar_pipeline_create", "number", []),
          i = e.cwrap("zappar_pipeline_destroy", null, ["number"]),
          o = e.cwrap("zappar_pipeline_frame_update", null, ["number"]),
          u = e.cwrap("zappar_pipeline_frame_number", "number", ["number"]),
          c = e.cwrap("zappar_pipeline_camera_model", "number", ["number"]),
          s = e.cwrap("zappar_pipeline_camera_frame_user_data", "number", [
            "number",
          ]),
          _ = e.cwrap("zappar_pipeline_camera_frame_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          f = e.cwrap(
            "zappar_pipeline_camera_frame_camera_attitude",
            "number",
            ["number"]
          ),
          l = e.cwrap("zappar_pipeline_motion_accelerometer_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          p = e.cwrap("zappar_pipeline_motion_rotation_rate_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          d = e.cwrap("zappar_pipeline_motion_attitude_submit", null, [
            "number",
            "number",
            "number",
            "number",
            "number",
          ]),
          h = e.cwrap("zappar_camera_source_create", "number", [
            "number",
            "string",
          ]),
          m = e.cwrap("zappar_camera_source_destroy", null, ["number"]),
          b = e.cwrap("zappar_image_tracker_create", "number", ["number"]),
          y = e.cwrap("zappar_image_tracker_destroy", null, ["number"]),
          v = e.cwrap("zappar_image_tracker_target_load_from_memory", null, [
            "number",
            "number",
            "number",
          ]),
          g = e.cwrap("zappar_image_tracker_target_loaded_version", "number", [
            "number",
          ]),
          w = e.cwrap("zappar_image_tracker_target_count", "number", [
            "number",
          ]),
          M = e.cwrap("zappar_image_tracker_enabled", "number", ["number"]),
          k = e.cwrap("zappar_image_tracker_enabled_set", null, [
            "number",
            "number",
          ]),
          z = e.cwrap("zappar_image_tracker_anchor_count", "number", [
            "number",
          ]),
          A = e.cwrap("zappar_image_tracker_anchor_id", "string", [
            "number",
            "number",
          ]),
          x = e.cwrap("zappar_image_tracker_anchor_pose_raw", "number", [
            "number",
            "number",
          ]),
          L = e.cwrap("zappar_face_tracker_create", "number", ["number"]),
          E = e.cwrap("zappar_face_tracker_destroy", null, ["number"]),
          T = e.cwrap("zappar_face_tracker_model_load_from_memory", null, [
            "number",
            "number",
            "number",
          ]),
          O = e.cwrap("zappar_face_tracker_model_loaded_version", "number", [
            "number",
          ]),
          C = e.cwrap("zappar_face_tracker_enabled_set", null, [
            "number",
            "number",
          ]),
          S = e.cwrap("zappar_face_tracker_enabled", "number", ["number"]),
          I = e.cwrap("zappar_face_tracker_max_faces_set", null, [
            "number",
            "number",
          ]),
          P = e.cwrap("zappar_face_tracker_max_faces", "number", ["number"]),
          B = e.cwrap("zappar_face_tracker_anchor_count", "number", ["number"]),
          F = e.cwrap("zappar_face_tracker_anchor_id", "string", [
            "number",
            "number",
          ]),
          D = e.cwrap("zappar_face_tracker_anchor_pose_raw", "number", [
            "number",
            "number",
          ]),
          j = e.cwrap(
            "zappar_face_tracker_anchor_identity_coefficients",
            "number",
            ["number", "number"]
          ),
          R = e.cwrap(
            "zappar_face_tracker_anchor_expression_coefficients",
            "number",
            ["number", "number"]
          ),
          V = e.cwrap("zappar_face_mesh_create", "number", []),
          q = e.cwrap("zappar_face_mesh_destroy", null, ["number"]),
          G = e.cwrap("zappar_face_landmark_create", "number", ["number"]),
          N = e.cwrap("zappar_face_landmark_destroy", null, ["number"]),
          U = e.cwrap("zappar_barcode_finder_create", "number", ["number"]),
          W = e.cwrap("zappar_barcode_finder_destroy", null, ["number"]),
          H = e.cwrap("zappar_barcode_finder_enabled_set", null, [
            "number",
            "number",
          ]),
          Z = e.cwrap("zappar_barcode_finder_enabled", "number", ["number"]),
          Y = e.cwrap("zappar_barcode_finder_found_number", "number", [
            "number",
          ]),
          X = e.cwrap("zappar_barcode_finder_found_text", "string", [
            "number",
            "number",
          ]),
          K = e.cwrap("zappar_barcode_finder_found_format", "number", [
            "number",
            "number",
          ]),
          J = e.cwrap("zappar_barcode_finder_formats", "number", ["number"]),
          Q = e.cwrap("zappar_barcode_finder_formats_set", null, [
            "number",
            "number",
          ]),
          $ = e.cwrap("zappar_instant_world_tracker_create", "number", [
            "number",
          ]),
          ee = e.cwrap("zappar_instant_world_tracker_destroy", null, [
            "number",
          ]),
          te = e.cwrap("zappar_instant_world_tracker_enabled_set", null, [
            "number",
            "number",
          ]),
          ne = e.cwrap("zappar_instant_world_tracker_enabled", "number", [
            "number",
          ]),
          re = e.cwrap(
            "zappar_instant_world_tracker_anchor_pose_raw",
            "number",
            ["number"]
          ),
          ae = e.cwrap(
            "zappar_instant_world_tracker_anchor_pose_set_from_camera_offset",
            null,
            ["number", "number", "number", "number", "number"]
          ),
          ie = 32,
          oe = e._malloc(ie),
          ue = 64,
          ce = e._malloc(ue);
        return {
          log_level: () => t(),
          log_level_set: (e) => n(e),
          analytics_project_id_set: (e) => r(e),
          pipeline_create: () => a(),
          pipeline_destroy: () => {
            i();
          },
          pipeline_frame_update: (e) => o(e),
          pipeline_frame_number: (e) => u(e),
          pipeline_camera_model: (t) => {
            let n = c(t),
              r = new Float32Array(6);
            return r.set(e.HEAPF32.subarray(n / 4, 6 + n / 4)), (n = r), n;
          },
          pipeline_camera_frame_user_data: (e) => s(e),
          pipeline_camera_frame_submit: (t, n, r, a, i, o) => {
            ie < n.byteLength &&
              (e._free(oe), (ie = n.byteLength), (oe = e._malloc(ie)));
            let u = oe,
              c = n.byteLength;
            e.HEAPU8.set(new Uint8Array(n), oe);
            let s = r,
              f = a,
              l = i;
            ue < o.byteLength &&
              (e._free(ue), (ue = o.byteLength), (ce = e._malloc(ue)));
            let p = ce;
            return e.HEAPF32.set(o, ce / 4), _(t, u, c, s, f, l, p);
          },
          pipeline_camera_frame_camera_attitude: (t) => {
            let n = f(t),
              r = new Float32Array(16);
            return r.set(e.HEAPF32.subarray(n / 4, 16 + n / 4)), (n = r), n;
          },
          pipeline_motion_accelerometer_submit: (e, t, n, r, a) =>
            l(e, t, n, r, a),
          pipeline_motion_rotation_rate_submit: (e, t, n, r, a) =>
            p(e, t, n, r, a),
          pipeline_motion_attitude_submit: (e, t, n, r, a) => d(e, t, n, r, a),
          camera_source_create: (e, t) => h(e, t),
          camera_source_destroy: () => {
            m();
          },
          image_tracker_create: (e) => b(e),
          image_tracker_destroy: () => {
            y();
          },
          image_tracker_target_load_from_memory: (t, n) => {
            ie < n.byteLength &&
              (e._free(oe), (ie = n.byteLength), (oe = e._malloc(ie)));
            let r = oe,
              a = n.byteLength;
            return e.HEAPU8.set(new Uint8Array(n), oe), v(t, r, a);
          },
          image_tracker_target_loaded_version: (e) => g(e),
          image_tracker_target_count: (e) => w(e),
          image_tracker_enabled: (e) => {
            let t = M(e);
            return (t = 1 === t), t;
          },
          image_tracker_enabled_set: (e, t) => k(e, t ? 1 : 0),
          image_tracker_anchor_count: (e) => z(e),
          image_tracker_anchor_id: (e, t) => A(e, t),
          image_tracker_anchor_pose_raw: (t, n) => {
            let r = x(t, n),
              a = new Float32Array(16);
            return a.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), (r = a), r;
          },
          face_tracker_create: (e) => L(e),
          face_tracker_destroy: () => {
            E();
          },
          face_tracker_model_load_from_memory: (t, n) => {
            ie < n.byteLength &&
              (e._free(oe), (ie = n.byteLength), (oe = e._malloc(ie)));
            let r = oe,
              a = n.byteLength;
            return e.HEAPU8.set(new Uint8Array(n), oe), T(t, r, a);
          },
          face_tracker_model_loaded_version: (e) => O(e),
          face_tracker_enabled_set: (e, t) => C(e, t ? 1 : 0),
          face_tracker_enabled: (e) => {
            let t = S(e);
            return (t = 1 === t), t;
          },
          face_tracker_max_faces_set: (e, t) => I(e, t),
          face_tracker_max_faces: (e) => P(e),
          face_tracker_anchor_count: (e) => B(e),
          face_tracker_anchor_id: (e, t) => F(e, t),
          face_tracker_anchor_pose_raw: (t, n) => {
            let r = D(t, n),
              a = new Float32Array(16);
            return a.set(e.HEAPF32.subarray(r / 4, 16 + r / 4)), (r = a), r;
          },
          face_tracker_anchor_identity_coefficients: (t, n) => {
            let r = j(t, n),
              a = new Float32Array(50);
            return a.set(e.HEAPF32.subarray(r / 4, 50 + r / 4)), (r = a), r;
          },
          face_tracker_anchor_expression_coefficients: (t, n) => {
            let r = R(t, n),
              a = new Float32Array(29);
            return a.set(e.HEAPF32.subarray(r / 4, 29 + r / 4)), (r = a), r;
          },
          face_mesh_create: () => V(),
          face_mesh_destroy: () => {
            q();
          },
          face_landmark_create: (e) => G(e),
          face_landmark_destroy: () => {
            N();
          },
          barcode_finder_create: (e) => U(e),
          barcode_finder_destroy: () => {
            W();
          },
          barcode_finder_enabled_set: (e, t) => H(e, t ? 1 : 0),
          barcode_finder_enabled: (e) => {
            let t = Z(e);
            return (t = 1 === t), t;
          },
          barcode_finder_found_number: (e) => Y(e),
          barcode_finder_found_text: (e, t) => X(e, t),
          barcode_finder_found_format: (e, t) => K(e, t),
          barcode_finder_formats: (e) => J(e),
          barcode_finder_formats_set: (e, t) => Q(e, t),
          instant_world_tracker_create: (e) => $(e),
          instant_world_tracker_destroy: () => {
            ee();
          },
          instant_world_tracker_enabled_set: (e, t) => te(e, t ? 1 : 0),
          instant_world_tracker_enabled: (e) => {
            let t = ne(e);
            return (t = 1 === t), t;
          },
          instant_world_tracker_anchor_pose_raw: (t) => {
            let n = re(t),
              r = new Float32Array(16);
            return r.set(e.HEAPF32.subarray(n / 4, 16 + n / 4)), (n = r), n;
          },
          instant_world_tracker_anchor_pose_set_from_camera_offset: (
            e,
            t,
            n,
            r,
            a
          ) => ae(e, t, n, r, a),
        };
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.zappar_server = void 0);
    const r = n(9),
      a = n(10);
    t.zappar_server = class {
      constructor(e, t) {
        (this._impl = e),
          (this._sender = t),
          (this._deserializer = new a.MessageDeserializer()),
          (this.serializersByPipelineId = new Map()),
          (this._pipeline_id_by_pipeline_id = new Map()),
          (this._pipeline_by_instance = new Map()),
          (this._pipeline_id_by_camera_source_id = new Map()),
          (this._camera_source_by_instance = new Map()),
          (this._pipeline_id_by_image_tracker_id = new Map()),
          (this._image_tracker_by_instance = new Map()),
          (this._pipeline_id_by_face_tracker_id = new Map()),
          (this._face_tracker_by_instance = new Map()),
          (this._pipeline_id_by_face_mesh_id = new Map()),
          (this._face_mesh_by_instance = new Map()),
          (this._pipeline_id_by_face_landmark_id = new Map()),
          (this._face_landmark_by_instance = new Map()),
          (this._pipeline_id_by_barcode_finder_id = new Map()),
          (this._barcode_finder_by_instance = new Map()),
          (this._pipeline_id_by_instant_world_tracker_id = new Map()),
          (this._instant_world_tracker_by_instance = new Map());
      }
      processBuffer(e) {
        this._deserializer.setData(e),
          this._deserializer.forMessages((e, t) => {
            switch (e) {
              case 33:
                this._impl.log_level_set(t.logLevel());
                break;
              case 30:
                this._impl.analytics_project_id_set(t.string());
                break;
              case 26: {
                let e = t.type(),
                  n = this._impl.pipeline_create();
                this._pipeline_by_instance.set(e, n),
                  this._pipeline_id_by_pipeline_id.set(e, e),
                  this.serializersByPipelineId.set(
                    e,
                    new r.MessageSerializer((t) => {
                      this._sender(e, t);
                    })
                  );
                break;
              }
              case 27: {
                let e = t.type(),
                  n = this._pipeline_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.pipeline_destroy(n),
                  this._pipeline_by_instance.delete(e);
                break;
              }
              case 9: {
                let e = t.type(),
                  n = this._pipeline_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.pipeline_frame_update(n);
                break;
              }
              case 8: {
                let e = t.type(),
                  n = this._pipeline_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.pipeline_camera_frame_submit(
                  n,
                  t.dataWithLength(),
                  t.int(),
                  t.int(),
                  t.int(),
                  t.matrix4x4()
                );
                break;
              }
              case 10: {
                let e = t.type(),
                  n = this._pipeline_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.pipeline_motion_accelerometer_submit(
                  n,
                  t.timestamp(),
                  t.float(),
                  t.float(),
                  t.float()
                );
                break;
              }
              case 11: {
                let e = t.type(),
                  n = this._pipeline_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.pipeline_motion_rotation_rate_submit(
                  n,
                  t.timestamp(),
                  t.float(),
                  t.float(),
                  t.float()
                );
                break;
              }
              case 12: {
                let e = t.type(),
                  n = this._pipeline_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.pipeline_motion_attitude_submit(
                  n,
                  t.timestamp(),
                  t.float(),
                  t.float(),
                  t.float()
                );
                break;
              }
              case 28: {
                let e = t.type(),
                  n = t.type(),
                  r = this._pipeline_by_instance.get(n),
                  a = t.string(),
                  i = this._impl.camera_source_create(r, a);
                this._camera_source_by_instance.set(e, i),
                  this._pipeline_id_by_camera_source_id.set(e, n);
                break;
              }
              case 29: {
                let e = t.type(),
                  n = this._camera_source_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.camera_source_destroy(n),
                  this._camera_source_by_instance.delete(e);
                break;
              }
              case 2: {
                let e = t.type(),
                  n = t.type(),
                  r = this._pipeline_by_instance.get(n),
                  a = this._impl.image_tracker_create(r);
                this._image_tracker_by_instance.set(e, a),
                  this._pipeline_id_by_image_tracker_id.set(e, n);
                break;
              }
              case 13: {
                let e = t.type(),
                  n = this._image_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.image_tracker_destroy(n),
                  this._image_tracker_by_instance.delete(e);
                break;
              }
              case 4: {
                let e = t.type(),
                  n = this._image_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.image_tracker_target_load_from_memory(
                  n,
                  t.dataWithLength()
                );
                break;
              }
              case 3: {
                let e = t.type(),
                  n = this._image_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.image_tracker_enabled_set(n, t.bool());
                break;
              }
              case 19: {
                let e = t.type(),
                  n = t.type(),
                  r = this._pipeline_by_instance.get(n),
                  a = this._impl.face_tracker_create(r);
                this._face_tracker_by_instance.set(e, a),
                  this._pipeline_id_by_face_tracker_id.set(e, n);
                break;
              }
              case 20: {
                let e = t.type(),
                  n = this._face_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.face_tracker_destroy(n),
                  this._face_tracker_by_instance.delete(e);
                break;
              }
              case 21: {
                let e = t.type(),
                  n = this._face_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.face_tracker_model_load_from_memory(
                  n,
                  t.dataWithLength()
                );
                break;
              }
              case 22: {
                let e = t.type(),
                  n = this._face_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.face_tracker_enabled_set(n, t.bool());
                break;
              }
              case 23: {
                let e = t.type(),
                  n = this._face_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.face_tracker_max_faces_set(n, t.int());
                break;
              }
              case 24: {
                let e = t.type(),
                  n = this._impl.face_mesh_create();
                this._face_mesh_by_instance.set(e, n);
                break;
              }
              case 25: {
                let e = t.type(),
                  n = this._face_mesh_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.face_mesh_destroy(n),
                  this._face_mesh_by_instance.delete(e);
                break;
              }
              case 31: {
                let e = t.type(),
                  n = t.faceLandmarkName(),
                  r = this._impl.face_landmark_create(n);
                this._face_landmark_by_instance.set(e, r);
                break;
              }
              case 32: {
                let e = t.type(),
                  n = this._face_landmark_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.face_landmark_destroy(n),
                  this._face_landmark_by_instance.delete(e);
                break;
              }
              case 15: {
                let e = t.type(),
                  n = t.type(),
                  r = this._pipeline_by_instance.get(n),
                  a = this._impl.barcode_finder_create(r);
                this._barcode_finder_by_instance.set(e, a),
                  this._pipeline_id_by_barcode_finder_id.set(e, n);
                break;
              }
              case 16: {
                let e = t.type(),
                  n = this._barcode_finder_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.barcode_finder_destroy(n),
                  this._barcode_finder_by_instance.delete(e);
                break;
              }
              case 17: {
                let e = t.type(),
                  n = this._barcode_finder_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.barcode_finder_enabled_set(n, t.bool());
                break;
              }
              case 18: {
                let e = t.type(),
                  n = this._barcode_finder_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.barcode_finder_formats_set(n, t.barcodeFormat());
                break;
              }
              case 5: {
                let e = t.type(),
                  n = t.type(),
                  r = this._pipeline_by_instance.get(n),
                  a = this._impl.instant_world_tracker_create(r);
                this._instant_world_tracker_by_instance.set(e, a),
                  this._pipeline_id_by_instant_world_tracker_id.set(e, n);
                break;
              }
              case 14: {
                let e = t.type(),
                  n = this._instant_world_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.instant_world_tracker_destroy(n),
                  this._instant_world_tracker_by_instance.delete(e);
                break;
              }
              case 6: {
                let e = t.type(),
                  n = this._instant_world_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.instant_world_tracker_enabled_set(n, t.bool());
                break;
              }
              case 7: {
                let e = t.type(),
                  n = this._instant_world_tracker_by_instance.get(e);
                if (void 0 === n) return;
                this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset(
                  n,
                  t.float(),
                  t.float(),
                  t.float(),
                  t.instantTrackerTransformOrientation()
                );
                break;
              }
            }
          });
      }
      exploreState() {
        for (let [e, t] of this._pipeline_by_instance) {
          let n = this._pipeline_id_by_pipeline_id.get(e);
          if (!n) continue;
          let r = this.serializersByPipelineId.get(n);
          r &&
            (r.sendMessage(7, (n) => {
              n.type(e), n.int(this._impl.pipeline_frame_number(t));
            }),
            r.sendMessage(6, (n) => {
              n.type(e), n.cameraModel(this._impl.pipeline_camera_model(t));
            }),
            r.sendMessage(5, (n) => {
              n.type(e), n.int(this._impl.pipeline_camera_frame_user_data(t));
            }),
            r.sendMessage(11, (n) => {
              n.type(e),
                n.matrix4x4(
                  this._impl.pipeline_camera_frame_camera_attitude(t)
                );
            }));
        }
        for (let [e, t] of this._camera_source_by_instance) {
          let t = this._pipeline_id_by_camera_source_id.get(e);
          if (!t) continue;
          this.serializersByPipelineId.get(t);
        }
        for (let [e, t] of this._image_tracker_by_instance) {
          let n = this._pipeline_id_by_image_tracker_id.get(e);
          if (!n) continue;
          let r = this.serializersByPipelineId.get(n);
          if (r) {
            r.sendMessage(18, (n) => {
              n.type(e),
                n.int(this._impl.image_tracker_target_loaded_version(t));
            }),
              r.sendMessage(20, (n) => {
                n.type(e), n.int(this._impl.image_tracker_target_count(t));
              }),
              r.sendMessage(1, (n) => {
                n.type(e), n.int(this._impl.image_tracker_anchor_count(t));
              });
            for (let n = 0; n < this._impl.image_tracker_anchor_count(t); n++)
              r.sendMessage(2, (r) => {
                r.type(e),
                  r.int(n),
                  r.string(this._impl.image_tracker_anchor_id(t, n));
              });
            for (let n = 0; n < this._impl.image_tracker_anchor_count(t); n++)
              r.sendMessage(3, (r) => {
                r.type(e),
                  r.int(n),
                  r.matrix4x4(this._impl.image_tracker_anchor_pose_raw(t, n));
              });
          }
        }
        for (let [e, t] of this._face_tracker_by_instance) {
          let n = this._pipeline_id_by_face_tracker_id.get(e);
          if (!n) continue;
          let r = this.serializersByPipelineId.get(n);
          if (r) {
            r.sendMessage(17, (n) => {
              n.type(e), n.int(this._impl.face_tracker_model_loaded_version(t));
            }),
              r.sendMessage(12, (n) => {
                n.type(e), n.int(this._impl.face_tracker_anchor_count(t));
              });
            for (let n = 0; n < this._impl.face_tracker_anchor_count(t); n++)
              r.sendMessage(13, (r) => {
                r.type(e),
                  r.int(n),
                  r.string(this._impl.face_tracker_anchor_id(t, n));
              });
            for (let n = 0; n < this._impl.face_tracker_anchor_count(t); n++)
              r.sendMessage(14, (r) => {
                r.type(e),
                  r.int(n),
                  r.matrix4x4(this._impl.face_tracker_anchor_pose_raw(t, n));
              });
            for (let n = 0; n < this._impl.face_tracker_anchor_count(t); n++)
              r.sendMessage(15, (r) => {
                r.type(e),
                  r.int(n),
                  r.identityCoefficients(
                    this._impl.face_tracker_anchor_identity_coefficients(t, n)
                  );
              });
            for (let n = 0; n < this._impl.face_tracker_anchor_count(t); n++)
              r.sendMessage(16, (r) => {
                r.type(e),
                  r.int(n),
                  r.expressionCoefficients(
                    this._impl.face_tracker_anchor_expression_coefficients(t, n)
                  );
              });
          }
        }
        for (let [e, t] of this._face_mesh_by_instance) {
          let t = this._pipeline_id_by_face_mesh_id.get(e);
          if (!t) continue;
          this.serializersByPipelineId.get(t);
        }
        for (let [e, t] of this._face_landmark_by_instance) {
          let t = this._pipeline_id_by_face_landmark_id.get(e);
          if (!t) continue;
          this.serializersByPipelineId.get(t);
        }
        for (let [e, t] of this._barcode_finder_by_instance) {
          let n = this._pipeline_id_by_barcode_finder_id.get(e);
          if (!n) continue;
          let r = this.serializersByPipelineId.get(n);
          if (r) {
            r.sendMessage(8, (n) => {
              n.type(e), n.int(this._impl.barcode_finder_found_number(t));
            });
            for (let n = 0; n < this._impl.barcode_finder_found_number(t); n++)
              r.sendMessage(9, (r) => {
                r.type(e),
                  r.int(n),
                  r.string(this._impl.barcode_finder_found_text(t, n));
              });
            for (let n = 0; n < this._impl.barcode_finder_found_number(t); n++)
              r.sendMessage(10, (r) => {
                r.type(e),
                  r.int(n),
                  r.barcodeFormat(this._impl.barcode_finder_found_format(t, n));
              });
          }
        }
        for (let [e, t] of this._instant_world_tracker_by_instance) {
          let n = this._pipeline_id_by_instant_world_tracker_id.get(e);
          if (!n) continue;
          let r = this.serializersByPipelineId.get(n);
          r &&
            r.sendMessage(4, (n) => {
              n.type(e),
                n.matrix4x4(
                  this._impl.instant_world_tracker_anchor_pose_raw(t)
                );
            });
        }
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MessageSerializer = void 0);
    t.MessageSerializer = class {
      constructor(e) {
        (this._messageSender = e),
          (this._freeBufferPool = []),
          (this._buffer = new ArrayBuffer(16)),
          (this._i32View = new Int32Array(this._buffer)),
          (this._f32View = new Float32Array(this._buffer)),
          (this._f64View = new Float64Array(this._buffer)),
          (this._u8View = new Uint8Array(this._buffer)),
          (this._u8cView = new Uint8ClampedArray(this._buffer)),
          (this._u16View = new Uint16Array(this._buffer)),
          (this._u32View = new Uint32Array(this._buffer)),
          (this._offset = 1),
          (this._startOffset = -1),
          (this._timeoutSet = !1),
          (this._appender = {
            int: (e) => this.int(e),
            bool: (e) => this.int(e ? 1 : 0),
            float: (e) => this.float(e),
            string: (e) => this.string(e),
            dataWithLength: (e) => this.arrayBuffer(e),
            type: (e) => this.int(e),
            matrix4x4: (e) => this.float32ArrayBuffer(e),
            identityCoefficients: (e) => this.float32ArrayBuffer(e),
            expressionCoefficients: (e) => this.float32ArrayBuffer(e),
            cameraModel: (e) => this.float32ArrayBuffer(e),
            timestamp: (e) => this.double(e),
            barcodeFormat: (e) => this.int(e),
            faceLandmarkName: (e) => this.int(e),
            instantTrackerTransformOrientation: (e) => this.int(e),
            logLevel: (e) => this.int(e),
          }),
          this._freeBufferPool.push(new ArrayBuffer(16)),
          this._freeBufferPool.push(new ArrayBuffer(16));
      }
      bufferReturn(e) {
        this._freeBufferPool.push(e);
      }
      _ensureArrayBuffer(e) {
        let t = 4 * (this._offset + e + 8);
        if (this._buffer && this._buffer.byteLength >= t) return;
        let n = void 0;
        if (!n) {
          let e = t;
          e--,
            (e |= e >> 1),
            (e |= e >> 2),
            (e |= e >> 4),
            (e |= e >> 8),
            (e |= e >> 16),
            e++,
            (n = new ArrayBuffer(e));
        }
        let r = this._buffer ? this._i32View : void 0;
        (this._buffer = n),
          (this._i32View = new Int32Array(this._buffer)),
          (this._f32View = new Float32Array(this._buffer)),
          (this._f64View = new Float64Array(this._buffer)),
          (this._u8View = new Uint8Array(this._buffer)),
          (this._u8cView = new Uint8ClampedArray(this._buffer)),
          (this._u16View = new Uint16Array(this._buffer)),
          (this._u32View = new Uint32Array(this._buffer)),
          r && this._i32View.set(r.subarray(0, this._offset));
      }
      sendMessage(e, t) {
        this._ensureArrayBuffer(4),
          (this._startOffset = this._offset),
          (this._i32View[this._offset + 1] = e),
          (this._offset += 2),
          t(this._appender),
          (this._i32View[this._startOffset] = this._offset - this._startOffset),
          (this._startOffset = -1),
          this._sendOneTime();
      }
      _sendOneTime() {
        !1 === this._timeoutSet &&
          ((this._timeoutSet = !0),
          setTimeout(() => {
            (this._timeoutSet = !1), this._send();
          }, 0));
      }
      _send() {
        0 !== this._freeBufferPool.length
          ? ((this._i32View[0] = this._offset),
            this._messageSender(this._buffer),
            (this._buffer = void 0),
            (this._buffer = this._freeBufferPool.pop()),
            (this._i32View = new Int32Array(this._buffer)),
            (this._f32View = new Float32Array(this._buffer)),
            (this._f64View = new Float64Array(this._buffer)),
            (this._u8View = new Uint8Array(this._buffer)),
            (this._u8cView = new Uint8ClampedArray(this._buffer)),
            (this._u16View = new Uint16Array(this._buffer)),
            (this._u32View = new Uint32Array(this._buffer)),
            (this._offset = 1),
            (this._startOffset = -1))
          : this._sendOneTime();
      }
      int(e) {
        this._ensureArrayBuffer(1),
          (this._i32View[this._offset] = e),
          this._offset++;
      }
      double(e) {
        this._ensureArrayBuffer(2),
          this._offset % 2 == 1 && this._offset++,
          (this._f64View[this._offset / 2] = e),
          (this._offset += 2);
      }
      float(e) {
        this._ensureArrayBuffer(1),
          (this._f32View[this._offset] = e),
          this._offset++;
      }
      int32Array(e) {
        this._ensureArrayBuffer(e.length);
        for (let t = 0; t < e.length; ++t)
          this._i32View[this._offset + t] = e[t];
        this._offset += e.length;
      }
      float32Array(e) {
        this._ensureArrayBuffer(e.length);
        for (let t = 0; t < e.length; ++t)
          this._f32View[this._offset + t] = e[t];
        this._offset += e.length;
      }
      booleanArray(e) {
        this._ensureArrayBuffer(e.length);
        for (let t = 0; t < e.length; ++t)
          this._i32View[this._offset + t] = e[t] ? 1 : 0;
        this._offset += e.length;
      }
      uint8ArrayBuffer(e) {
        this._ensureArrayBuffer(e.byteLength / 4),
          (this._i32View[this._offset] = e.byteLength),
          this._offset++,
          this._u8View.set(e, 4 * this._offset),
          (this._offset += e.byteLength >> 2),
          0 != (3 & e.byteLength) && this._offset++;
      }
      arrayBuffer(e) {
        let t = new Uint8Array(e);
        this.uint8ArrayBuffer(t);
      }
      uint8ClampedArrayBuffer(e) {
        this._ensureArrayBuffer(e.byteLength / 4),
          (this._i32View[this._offset] = e.byteLength),
          this._offset++,
          this._u8cView.set(e, 4 * this._offset),
          (this._offset += e.byteLength >> 2),
          0 != (3 & e.byteLength) && this._offset++;
      }
      float32ArrayBuffer(e) {
        this._ensureArrayBuffer(e.byteLength / 4),
          (this._i32View[this._offset] = e.length),
          this._offset++,
          this._f32View.set(e, this._offset),
          (this._offset += e.length);
      }
      uint16ArrayBuffer(e) {
        this._ensureArrayBuffer(e.byteLength / 4),
          (this._i32View[this._offset] = e.length),
          this._offset++;
        let t = 2 * this._offset;
        this._u16View.set(e, t),
          (this._offset += e.length >> 1),
          0 != (1 & e.length) && this._offset++;
      }
      int32ArrayBuffer(e) {
        this._ensureArrayBuffer(e.byteLength / 4),
          (this._i32View[this._offset] = e.length),
          this._offset++,
          this._i32View.set(e, this._offset),
          (this._offset += e.length);
      }
      uint32ArrayBuffer(e) {
        this._ensureArrayBuffer(e.byteLength / 4),
          (this._i32View[this._offset] = e.length),
          this._offset++,
          this._u32View.set(e, this._offset),
          (this._offset += e.length);
      }
      string(e) {
        let t = new TextEncoder().encode(e);
        this._ensureArrayBuffer(t.byteLength / 4),
          (this._i32View[this._offset] = t.byteLength),
          this._offset++,
          this._u8View.set(t, 4 * this._offset),
          (this._offset += t.byteLength >> 2),
          0 != (3 & t.byteLength) && this._offset++;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MessageDeserializer = void 0);
    t.MessageDeserializer = class {
      constructor() {
        (this._buffer = new ArrayBuffer(0)),
          (this._i32View = new Int32Array(this._buffer)),
          (this._f32View = new Float32Array(this._buffer)),
          (this._f64View = new Float64Array(this._buffer)),
          (this._u8View = new Uint8Array(this._buffer)),
          (this._u16View = new Uint16Array(this._buffer)),
          (this._u32View = new Uint32Array(this._buffer)),
          (this._offset = 0),
          (this._length = 0),
          (this._startOffset = -1),
          (this._processor = {
            int: () => this._i32View[this._startOffset++],
            bool: () => 1 === this._i32View[this._startOffset++],
            type: () => this._i32View[this._startOffset++],
            float: () => this._f32View[this._startOffset++],
            timestamp: () => {
              this._startOffset % 2 == 1 && this._startOffset++;
              let e = this._f64View[this._startOffset / 2];
              return (this._startOffset += 2), e;
            },
            string: () => {
              let e = this._i32View[this._startOffset++],
                t = new TextDecoder().decode(
                  new Uint8Array(this._buffer, 4 * this._startOffset, e)
                );
              return (
                (this._startOffset += e >> 2),
                0 != (3 & e) && this._startOffset++,
                t
              );
            },
            dataWithLength: () => {
              let e = this._i32View[this._startOffset++],
                t = new Uint8Array(e);
              return (
                t.set(
                  this._u8View.subarray(
                    4 * this._startOffset,
                    4 * this._startOffset + e
                  )
                ),
                (this._startOffset += t.byteLength >> 2),
                0 != (3 & t.byteLength) && this._startOffset++,
                t.buffer
              );
            },
            matrix4x4: () => {
              let e = this._i32View[this._startOffset++],
                t = new Float32Array(e);
              return (
                t.set(
                  this._f32View.subarray(
                    this._startOffset,
                    this._startOffset + 16
                  )
                ),
                (this._startOffset += e),
                t
              );
            },
            identityCoefficients: () => {
              let e = this._i32View[this._startOffset++],
                t = new Float32Array(e);
              return (
                t.set(
                  this._f32View.subarray(
                    this._startOffset,
                    this._startOffset + 50
                  )
                ),
                (this._startOffset += e),
                t
              );
            },
            expressionCoefficients: () => {
              let e = this._i32View[this._startOffset++],
                t = new Float32Array(e);
              return (
                t.set(
                  this._f32View.subarray(
                    this._startOffset,
                    this._startOffset + 29
                  )
                ),
                (this._startOffset += e),
                t
              );
            },
            cameraModel: () => {
              let e = this._i32View[this._startOffset++],
                t = new Float32Array(e);
              return (
                t.set(
                  this._f32View.subarray(
                    this._startOffset,
                    this._startOffset + 6
                  )
                ),
                (this._startOffset += e),
                t
              );
            },
            barcodeFormat: () => this._i32View[this._startOffset++],
            faceLandmarkName: () => this._i32View[this._startOffset++],
            instantTrackerTransformOrientation: () =>
              this._i32View[this._startOffset++],
            logLevel: () => this._i32View[this._startOffset++],
          });
      }
      setData(e) {
        (this._buffer = e),
          (this._i32View = new Int32Array(this._buffer)),
          (this._f32View = new Float32Array(this._buffer)),
          (this._f64View = new Float64Array(this._buffer)),
          (this._u8View = new Uint8Array(this._buffer)),
          (this._u16View = new Uint16Array(this._buffer)),
          (this._u32View = new Uint32Array(this._buffer)),
          (this._offset = 0),
          (this._length = 0),
          e.byteLength >= 4 &&
            ((this._offset = 1), (this._length = this._i32View[0])),
          (this._startOffset = -1);
      }
      hasMessage() {
        return this._offset + 1 < this._length;
      }
      forMessages(e) {
        for (; this.hasMessage(); ) {
          let t = this._i32View[this._offset],
            n = this._i32View[this._offset + 1];
          (this._startOffset = this._offset + 2),
            (this._offset += t),
            e(n, this._processor);
        }
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MsgManager = void 0);
    const r = n(12);
    t.MsgManager = class {
      constructor() {
        (this.onOutgoingMessage = new r.Event()),
          (this.onIncomingMessage = new r.Event1()),
          (this._outgoingMessages = []);
      }
      postIncomingMessage(e) {
        this.onIncomingMessage.emit(e);
      }
      postOutgoingMessage(e, t) {
        this._outgoingMessages.push({ msg: e, transferables: t }),
          this.onOutgoingMessage.emit();
      }
      getOutgoingMessages() {
        let e = this._outgoingMessages;
        return (this._outgoingMessages = []), e;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Event5 = t.Event3 = t.Event2 = t.Event1 = t.Event = void 0);
    t.Event = class {
      constructor() {
        this._funcs = [];
      }
      bind(e) {
        this._funcs.push(e);
      }
      unbind(e) {
        let t = this._funcs.indexOf(e);
        t > -1 && this._funcs.splice(t, 1);
      }
      emit() {
        for (var e = 0, t = this._funcs.length; e < t; e++) this._funcs[e]();
      }
    };
    t.Event1 = class {
      constructor() {
        this._funcs = [];
      }
      bind(e) {
        this._funcs.push(e);
      }
      unbind(e) {
        let t = this._funcs.indexOf(e);
        t > -1 && this._funcs.splice(t, 1);
      }
      emit(e) {
        for (var t = 0, n = this._funcs.length; t < n; t++) this._funcs[t](e);
      }
    };
    t.Event2 = class {
      constructor() {
        this._funcs = [];
      }
      bind(e) {
        this._funcs.push(e);
      }
      unbind(e) {
        let t = this._funcs.indexOf(e);
        t > -1 && this._funcs.splice(t, 1);
      }
      emit(e, t) {
        for (var n = 0, r = this._funcs.length; n < r; n++)
          this._funcs[n](e, t);
      }
    };
    t.Event3 = class {
      constructor() {
        this._funcs = [];
      }
      bind(e) {
        this._funcs.push(e);
      }
      unbind(e) {
        let t = this._funcs.indexOf(e);
        t > -1 && this._funcs.splice(t, 1);
      }
      emit(e, t, n) {
        for (var r = 0, a = this._funcs.length; r < a; r++)
          this._funcs[r](e, t, n);
      }
    };
    t.Event5 = class {
      constructor() {
        this._funcs = [];
      }
      bind(e) {
        this._funcs.push(e);
      }
      unbind(e) {
        let t = this._funcs.indexOf(e);
        t > -1 && this._funcs.splice(t, 1);
      }
      emit(e, t, n, r, a) {
        for (var i = 0, o = this._funcs.length; i < o; i++)
          this._funcs[i](e, t, n, r, a);
      }
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t), (t.default = n.p + "0bdbfe863a384bcd2935e7437d8f1153.wasm");
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "glMatrix", function () {
        return r;
      }),
      n.d(t, "mat2", function () {
        return a;
      }),
      n.d(t, "mat2d", function () {
        return i;
      }),
      n.d(t, "mat3", function () {
        return o;
      }),
      n.d(t, "mat4", function () {
        return u;
      }),
      n.d(t, "quat", function () {
        return _;
      }),
      n.d(t, "quat2", function () {
        return f;
      }),
      n.d(t, "vec2", function () {
        return l;
      }),
      n.d(t, "vec3", function () {
        return c;
      }),
      n.d(t, "vec4", function () {
        return s;
      });
    var r = {};
    n.r(r),
      n.d(r, "EPSILON", function () {
        return p;
      }),
      n.d(r, "ARRAY_TYPE", function () {
        return d;
      }),
      n.d(r, "RANDOM", function () {
        return h;
      }),
      n.d(r, "setMatrixArrayType", function () {
        return m;
      }),
      n.d(r, "toRadian", function () {
        return y;
      }),
      n.d(r, "equals", function () {
        return v;
      });
    var a = {};
    n.r(a),
      n.d(a, "create", function () {
        return g;
      }),
      n.d(a, "clone", function () {
        return w;
      }),
      n.d(a, "copy", function () {
        return M;
      }),
      n.d(a, "identity", function () {
        return k;
      }),
      n.d(a, "fromValues", function () {
        return z;
      }),
      n.d(a, "set", function () {
        return A;
      }),
      n.d(a, "transpose", function () {
        return x;
      }),
      n.d(a, "invert", function () {
        return L;
      }),
      n.d(a, "adjoint", function () {
        return E;
      }),
      n.d(a, "determinant", function () {
        return T;
      }),
      n.d(a, "multiply", function () {
        return O;
      }),
      n.d(a, "rotate", function () {
        return C;
      }),
      n.d(a, "scale", function () {
        return S;
      }),
      n.d(a, "fromRotation", function () {
        return I;
      }),
      n.d(a, "fromScaling", function () {
        return P;
      }),
      n.d(a, "str", function () {
        return B;
      }),
      n.d(a, "frob", function () {
        return F;
      }),
      n.d(a, "LDU", function () {
        return D;
      }),
      n.d(a, "add", function () {
        return j;
      }),
      n.d(a, "subtract", function () {
        return R;
      }),
      n.d(a, "exactEquals", function () {
        return V;
      }),
      n.d(a, "equals", function () {
        return q;
      }),
      n.d(a, "multiplyScalar", function () {
        return G;
      }),
      n.d(a, "multiplyScalarAndAdd", function () {
        return N;
      }),
      n.d(a, "mul", function () {
        return U;
      }),
      n.d(a, "sub", function () {
        return W;
      });
    var i = {};
    n.r(i),
      n.d(i, "create", function () {
        return H;
      }),
      n.d(i, "clone", function () {
        return Z;
      }),
      n.d(i, "copy", function () {
        return Y;
      }),
      n.d(i, "identity", function () {
        return X;
      }),
      n.d(i, "fromValues", function () {
        return K;
      }),
      n.d(i, "set", function () {
        return J;
      }),
      n.d(i, "invert", function () {
        return Q;
      }),
      n.d(i, "determinant", function () {
        return $;
      }),
      n.d(i, "multiply", function () {
        return ee;
      }),
      n.d(i, "rotate", function () {
        return te;
      }),
      n.d(i, "scale", function () {
        return ne;
      }),
      n.d(i, "translate", function () {
        return re;
      }),
      n.d(i, "fromRotation", function () {
        return ae;
      }),
      n.d(i, "fromScaling", function () {
        return ie;
      }),
      n.d(i, "fromTranslation", function () {
        return oe;
      }),
      n.d(i, "str", function () {
        return ue;
      }),
      n.d(i, "frob", function () {
        return ce;
      }),
      n.d(i, "add", function () {
        return se;
      }),
      n.d(i, "subtract", function () {
        return _e;
      }),
      n.d(i, "multiplyScalar", function () {
        return fe;
      }),
      n.d(i, "multiplyScalarAndAdd", function () {
        return le;
      }),
      n.d(i, "exactEquals", function () {
        return pe;
      }),
      n.d(i, "equals", function () {
        return de;
      }),
      n.d(i, "mul", function () {
        return he;
      }),
      n.d(i, "sub", function () {
        return me;
      });
    var o = {};
    n.r(o),
      n.d(o, "create", function () {
        return be;
      }),
      n.d(o, "fromMat4", function () {
        return ye;
      }),
      n.d(o, "clone", function () {
        return ve;
      }),
      n.d(o, "copy", function () {
        return ge;
      }),
      n.d(o, "fromValues", function () {
        return we;
      }),
      n.d(o, "set", function () {
        return Me;
      }),
      n.d(o, "identity", function () {
        return ke;
      }),
      n.d(o, "transpose", function () {
        return ze;
      }),
      n.d(o, "invert", function () {
        return Ae;
      }),
      n.d(o, "adjoint", function () {
        return xe;
      }),
      n.d(o, "determinant", function () {
        return Le;
      }),
      n.d(o, "multiply", function () {
        return Ee;
      }),
      n.d(o, "translate", function () {
        return Te;
      }),
      n.d(o, "rotate", function () {
        return Oe;
      }),
      n.d(o, "scale", function () {
        return Ce;
      }),
      n.d(o, "fromTranslation", function () {
        return Se;
      }),
      n.d(o, "fromRotation", function () {
        return Ie;
      }),
      n.d(o, "fromScaling", function () {
        return Pe;
      }),
      n.d(o, "fromMat2d", function () {
        return Be;
      }),
      n.d(o, "fromQuat", function () {
        return Fe;
      }),
      n.d(o, "normalFromMat4", function () {
        return De;
      }),
      n.d(o, "projection", function () {
        return je;
      }),
      n.d(o, "str", function () {
        return Re;
      }),
      n.d(o, "frob", function () {
        return Ve;
      }),
      n.d(o, "add", function () {
        return qe;
      }),
      n.d(o, "subtract", function () {
        return Ge;
      }),
      n.d(o, "multiplyScalar", function () {
        return Ne;
      }),
      n.d(o, "multiplyScalarAndAdd", function () {
        return Ue;
      }),
      n.d(o, "exactEquals", function () {
        return We;
      }),
      n.d(o, "equals", function () {
        return He;
      }),
      n.d(o, "mul", function () {
        return Ze;
      }),
      n.d(o, "sub", function () {
        return Ye;
      });
    var u = {};
    n.r(u),
      n.d(u, "create", function () {
        return Xe;
      }),
      n.d(u, "clone", function () {
        return Ke;
      }),
      n.d(u, "copy", function () {
        return Je;
      }),
      n.d(u, "fromValues", function () {
        return Qe;
      }),
      n.d(u, "set", function () {
        return $e;
      }),
      n.d(u, "identity", function () {
        return et;
      }),
      n.d(u, "transpose", function () {
        return tt;
      }),
      n.d(u, "invert", function () {
        return nt;
      }),
      n.d(u, "adjoint", function () {
        return rt;
      }),
      n.d(u, "determinant", function () {
        return at;
      }),
      n.d(u, "multiply", function () {
        return it;
      }),
      n.d(u, "translate", function () {
        return ot;
      }),
      n.d(u, "scale", function () {
        return ut;
      }),
      n.d(u, "rotate", function () {
        return ct;
      }),
      n.d(u, "rotateX", function () {
        return st;
      }),
      n.d(u, "rotateY", function () {
        return _t;
      }),
      n.d(u, "rotateZ", function () {
        return ft;
      }),
      n.d(u, "fromTranslation", function () {
        return lt;
      }),
      n.d(u, "fromScaling", function () {
        return pt;
      }),
      n.d(u, "fromRotation", function () {
        return dt;
      }),
      n.d(u, "fromXRotation", function () {
        return ht;
      }),
      n.d(u, "fromYRotation", function () {
        return mt;
      }),
      n.d(u, "fromZRotation", function () {
        return bt;
      }),
      n.d(u, "fromRotationTranslation", function () {
        return yt;
      }),
      n.d(u, "fromQuat2", function () {
        return vt;
      }),
      n.d(u, "getTranslation", function () {
        return gt;
      }),
      n.d(u, "getScaling", function () {
        return wt;
      }),
      n.d(u, "getRotation", function () {
        return Mt;
      }),
      n.d(u, "fromRotationTranslationScale", function () {
        return kt;
      }),
      n.d(u, "fromRotationTranslationScaleOrigin", function () {
        return zt;
      }),
      n.d(u, "fromQuat", function () {
        return At;
      }),
      n.d(u, "frustum", function () {
        return xt;
      }),
      n.d(u, "perspective", function () {
        return Lt;
      }),
      n.d(u, "perspectiveFromFieldOfView", function () {
        return Et;
      }),
      n.d(u, "ortho", function () {
        return Tt;
      }),
      n.d(u, "lookAt", function () {
        return Ot;
      }),
      n.d(u, "targetTo", function () {
        return Ct;
      }),
      n.d(u, "str", function () {
        return St;
      }),
      n.d(u, "frob", function () {
        return It;
      }),
      n.d(u, "add", function () {
        return Pt;
      }),
      n.d(u, "subtract", function () {
        return Bt;
      }),
      n.d(u, "multiplyScalar", function () {
        return Ft;
      }),
      n.d(u, "multiplyScalarAndAdd", function () {
        return Dt;
      }),
      n.d(u, "exactEquals", function () {
        return jt;
      }),
      n.d(u, "equals", function () {
        return Rt;
      }),
      n.d(u, "mul", function () {
        return Vt;
      }),
      n.d(u, "sub", function () {
        return qt;
      });
    var c = {};
    n.r(c),
      n.d(c, "create", function () {
        return Gt;
      }),
      n.d(c, "clone", function () {
        return Nt;
      }),
      n.d(c, "length", function () {
        return Ut;
      }),
      n.d(c, "fromValues", function () {
        return Wt;
      }),
      n.d(c, "copy", function () {
        return Ht;
      }),
      n.d(c, "set", function () {
        return Zt;
      }),
      n.d(c, "add", function () {
        return Yt;
      }),
      n.d(c, "subtract", function () {
        return Xt;
      }),
      n.d(c, "multiply", function () {
        return Kt;
      }),
      n.d(c, "divide", function () {
        return Jt;
      }),
      n.d(c, "ceil", function () {
        return Qt;
      }),
      n.d(c, "floor", function () {
        return $t;
      }),
      n.d(c, "min", function () {
        return en;
      }),
      n.d(c, "max", function () {
        return tn;
      }),
      n.d(c, "round", function () {
        return nn;
      }),
      n.d(c, "scale", function () {
        return rn;
      }),
      n.d(c, "scaleAndAdd", function () {
        return an;
      }),
      n.d(c, "distance", function () {
        return on;
      }),
      n.d(c, "squaredDistance", function () {
        return un;
      }),
      n.d(c, "squaredLength", function () {
        return cn;
      }),
      n.d(c, "negate", function () {
        return sn;
      }),
      n.d(c, "inverse", function () {
        return _n;
      }),
      n.d(c, "normalize", function () {
        return fn;
      }),
      n.d(c, "dot", function () {
        return ln;
      }),
      n.d(c, "cross", function () {
        return pn;
      }),
      n.d(c, "lerp", function () {
        return dn;
      }),
      n.d(c, "hermite", function () {
        return hn;
      }),
      n.d(c, "bezier", function () {
        return mn;
      }),
      n.d(c, "random", function () {
        return bn;
      }),
      n.d(c, "transformMat4", function () {
        return yn;
      }),
      n.d(c, "transformMat3", function () {
        return vn;
      }),
      n.d(c, "transformQuat", function () {
        return gn;
      }),
      n.d(c, "rotateX", function () {
        return wn;
      }),
      n.d(c, "rotateY", function () {
        return Mn;
      }),
      n.d(c, "rotateZ", function () {
        return kn;
      }),
      n.d(c, "angle", function () {
        return zn;
      }),
      n.d(c, "zero", function () {
        return An;
      }),
      n.d(c, "str", function () {
        return xn;
      }),
      n.d(c, "exactEquals", function () {
        return Ln;
      }),
      n.d(c, "equals", function () {
        return En;
      }),
      n.d(c, "sub", function () {
        return On;
      }),
      n.d(c, "mul", function () {
        return Cn;
      }),
      n.d(c, "div", function () {
        return Sn;
      }),
      n.d(c, "dist", function () {
        return In;
      }),
      n.d(c, "sqrDist", function () {
        return Pn;
      }),
      n.d(c, "len", function () {
        return Bn;
      }),
      n.d(c, "sqrLen", function () {
        return Fn;
      }),
      n.d(c, "forEach", function () {
        return Dn;
      });
    var s = {};
    n.r(s),
      n.d(s, "create", function () {
        return jn;
      }),
      n.d(s, "clone", function () {
        return Rn;
      }),
      n.d(s, "fromValues", function () {
        return Vn;
      }),
      n.d(s, "copy", function () {
        return qn;
      }),
      n.d(s, "set", function () {
        return Gn;
      }),
      n.d(s, "add", function () {
        return Nn;
      }),
      n.d(s, "subtract", function () {
        return Un;
      }),
      n.d(s, "multiply", function () {
        return Wn;
      }),
      n.d(s, "divide", function () {
        return Hn;
      }),
      n.d(s, "ceil", function () {
        return Zn;
      }),
      n.d(s, "floor", function () {
        return Yn;
      }),
      n.d(s, "min", function () {
        return Xn;
      }),
      n.d(s, "max", function () {
        return Kn;
      }),
      n.d(s, "round", function () {
        return Jn;
      }),
      n.d(s, "scale", function () {
        return Qn;
      }),
      n.d(s, "scaleAndAdd", function () {
        return $n;
      }),
      n.d(s, "distance", function () {
        return er;
      }),
      n.d(s, "squaredDistance", function () {
        return tr;
      }),
      n.d(s, "length", function () {
        return nr;
      }),
      n.d(s, "squaredLength", function () {
        return rr;
      }),
      n.d(s, "negate", function () {
        return ar;
      }),
      n.d(s, "inverse", function () {
        return ir;
      }),
      n.d(s, "normalize", function () {
        return or;
      }),
      n.d(s, "dot", function () {
        return ur;
      }),
      n.d(s, "cross", function () {
        return cr;
      }),
      n.d(s, "lerp", function () {
        return sr;
      }),
      n.d(s, "random", function () {
        return _r;
      }),
      n.d(s, "transformMat4", function () {
        return fr;
      }),
      n.d(s, "transformQuat", function () {
        return lr;
      }),
      n.d(s, "zero", function () {
        return pr;
      }),
      n.d(s, "str", function () {
        return dr;
      }),
      n.d(s, "exactEquals", function () {
        return hr;
      }),
      n.d(s, "equals", function () {
        return mr;
      }),
      n.d(s, "sub", function () {
        return br;
      }),
      n.d(s, "mul", function () {
        return yr;
      }),
      n.d(s, "div", function () {
        return vr;
      }),
      n.d(s, "dist", function () {
        return gr;
      }),
      n.d(s, "sqrDist", function () {
        return wr;
      }),
      n.d(s, "len", function () {
        return Mr;
      }),
      n.d(s, "sqrLen", function () {
        return kr;
      }),
      n.d(s, "forEach", function () {
        return zr;
      });
    var _ = {};
    n.r(_),
      n.d(_, "create", function () {
        return Ar;
      }),
      n.d(_, "identity", function () {
        return xr;
      }),
      n.d(_, "setAxisAngle", function () {
        return Lr;
      }),
      n.d(_, "getAxisAngle", function () {
        return Er;
      }),
      n.d(_, "getAngle", function () {
        return Tr;
      }),
      n.d(_, "multiply", function () {
        return Or;
      }),
      n.d(_, "rotateX", function () {
        return Cr;
      }),
      n.d(_, "rotateY", function () {
        return Sr;
      }),
      n.d(_, "rotateZ", function () {
        return Ir;
      }),
      n.d(_, "calculateW", function () {
        return Pr;
      }),
      n.d(_, "exp", function () {
        return Br;
      }),
      n.d(_, "ln", function () {
        return Fr;
      }),
      n.d(_, "pow", function () {
        return Dr;
      }),
      n.d(_, "slerp", function () {
        return jr;
      }),
      n.d(_, "random", function () {
        return Rr;
      }),
      n.d(_, "invert", function () {
        return Vr;
      }),
      n.d(_, "conjugate", function () {
        return qr;
      }),
      n.d(_, "fromMat3", function () {
        return Gr;
      }),
      n.d(_, "fromEuler", function () {
        return Nr;
      }),
      n.d(_, "str", function () {
        return Ur;
      }),
      n.d(_, "clone", function () {
        return Jr;
      }),
      n.d(_, "fromValues", function () {
        return Qr;
      }),
      n.d(_, "copy", function () {
        return $r;
      }),
      n.d(_, "set", function () {
        return ea;
      }),
      n.d(_, "add", function () {
        return ta;
      }),
      n.d(_, "mul", function () {
        return na;
      }),
      n.d(_, "scale", function () {
        return ra;
      }),
      n.d(_, "dot", function () {
        return aa;
      }),
      n.d(_, "lerp", function () {
        return ia;
      }),
      n.d(_, "length", function () {
        return oa;
      }),
      n.d(_, "len", function () {
        return ua;
      }),
      n.d(_, "squaredLength", function () {
        return ca;
      }),
      n.d(_, "sqrLen", function () {
        return sa;
      }),
      n.d(_, "normalize", function () {
        return _a;
      }),
      n.d(_, "exactEquals", function () {
        return fa;
      }),
      n.d(_, "equals", function () {
        return la;
      }),
      n.d(_, "rotationTo", function () {
        return pa;
      }),
      n.d(_, "sqlerp", function () {
        return da;
      }),
      n.d(_, "setAxes", function () {
        return ha;
      });
    var f = {};
    n.r(f),
      n.d(f, "create", function () {
        return ma;
      }),
      n.d(f, "clone", function () {
        return ba;
      }),
      n.d(f, "fromValues", function () {
        return ya;
      }),
      n.d(f, "fromRotationTranslationValues", function () {
        return va;
      }),
      n.d(f, "fromRotationTranslation", function () {
        return ga;
      }),
      n.d(f, "fromTranslation", function () {
        return wa;
      }),
      n.d(f, "fromRotation", function () {
        return Ma;
      }),
      n.d(f, "fromMat4", function () {
        return ka;
      }),
      n.d(f, "copy", function () {
        return za;
      }),
      n.d(f, "identity", function () {
        return Aa;
      }),
      n.d(f, "set", function () {
        return xa;
      }),
      n.d(f, "getReal", function () {
        return La;
      }),
      n.d(f, "getDual", function () {
        return Ea;
      }),
      n.d(f, "setReal", function () {
        return Ta;
      }),
      n.d(f, "setDual", function () {
        return Oa;
      }),
      n.d(f, "getTranslation", function () {
        return Ca;
      }),
      n.d(f, "translate", function () {
        return Sa;
      }),
      n.d(f, "rotateX", function () {
        return Ia;
      }),
      n.d(f, "rotateY", function () {
        return Pa;
      }),
      n.d(f, "rotateZ", function () {
        return Ba;
      }),
      n.d(f, "rotateByQuatAppend", function () {
        return Fa;
      }),
      n.d(f, "rotateByQuatPrepend", function () {
        return Da;
      }),
      n.d(f, "rotateAroundAxis", function () {
        return ja;
      }),
      n.d(f, "add", function () {
        return Ra;
      }),
      n.d(f, "multiply", function () {
        return Va;
      }),
      n.d(f, "mul", function () {
        return qa;
      }),
      n.d(f, "scale", function () {
        return Ga;
      }),
      n.d(f, "dot", function () {
        return Na;
      }),
      n.d(f, "lerp", function () {
        return Ua;
      }),
      n.d(f, "invert", function () {
        return Wa;
      }),
      n.d(f, "conjugate", function () {
        return Ha;
      }),
      n.d(f, "length", function () {
        return Za;
      }),
      n.d(f, "len", function () {
        return Ya;
      }),
      n.d(f, "squaredLength", function () {
        return Xa;
      }),
      n.d(f, "sqrLen", function () {
        return Ka;
      }),
      n.d(f, "normalize", function () {
        return Ja;
      }),
      n.d(f, "str", function () {
        return Qa;
      }),
      n.d(f, "exactEquals", function () {
        return $a;
      }),
      n.d(f, "equals", function () {
        return ei;
      });
    var l = {};
    n.r(l),
      n.d(l, "create", function () {
        return ti;
      }),
      n.d(l, "clone", function () {
        return ni;
      }),
      n.d(l, "fromValues", function () {
        return ri;
      }),
      n.d(l, "copy", function () {
        return ai;
      }),
      n.d(l, "set", function () {
        return ii;
      }),
      n.d(l, "add", function () {
        return oi;
      }),
      n.d(l, "subtract", function () {
        return ui;
      }),
      n.d(l, "multiply", function () {
        return ci;
      }),
      n.d(l, "divide", function () {
        return si;
      }),
      n.d(l, "ceil", function () {
        return _i;
      }),
      n.d(l, "floor", function () {
        return fi;
      }),
      n.d(l, "min", function () {
        return li;
      }),
      n.d(l, "max", function () {
        return pi;
      }),
      n.d(l, "round", function () {
        return di;
      }),
      n.d(l, "scale", function () {
        return hi;
      }),
      n.d(l, "scaleAndAdd", function () {
        return mi;
      }),
      n.d(l, "distance", function () {
        return bi;
      }),
      n.d(l, "squaredDistance", function () {
        return yi;
      }),
      n.d(l, "length", function () {
        return vi;
      }),
      n.d(l, "squaredLength", function () {
        return gi;
      }),
      n.d(l, "negate", function () {
        return wi;
      }),
      n.d(l, "inverse", function () {
        return Mi;
      }),
      n.d(l, "normalize", function () {
        return ki;
      }),
      n.d(l, "dot", function () {
        return zi;
      }),
      n.d(l, "cross", function () {
        return Ai;
      }),
      n.d(l, "lerp", function () {
        return xi;
      }),
      n.d(l, "random", function () {
        return Li;
      }),
      n.d(l, "transformMat2", function () {
        return Ei;
      }),
      n.d(l, "transformMat2d", function () {
        return Ti;
      }),
      n.d(l, "transformMat3", function () {
        return Oi;
      }),
      n.d(l, "transformMat4", function () {
        return Ci;
      }),
      n.d(l, "rotate", function () {
        return Si;
      }),
      n.d(l, "angle", function () {
        return Ii;
      }),
      n.d(l, "zero", function () {
        return Pi;
      }),
      n.d(l, "str", function () {
        return Bi;
      }),
      n.d(l, "exactEquals", function () {
        return Fi;
      }),
      n.d(l, "equals", function () {
        return Di;
      }),
      n.d(l, "len", function () {
        return ji;
      }),
      n.d(l, "sub", function () {
        return Ri;
      }),
      n.d(l, "mul", function () {
        return Vi;
      }),
      n.d(l, "div", function () {
        return qi;
      }),
      n.d(l, "dist", function () {
        return Gi;
      }),
      n.d(l, "sqrDist", function () {
        return Ni;
      }),
      n.d(l, "sqrLen", function () {
        return Ui;
      }),
      n.d(l, "forEach", function () {
        return Wi;
      });
    var p = 1e-6,
      d = "undefined" != typeof Float32Array ? Float32Array : Array,
      h = Math.random;
    function m(e) {
      d = e;
    }
    var b = Math.PI / 180;
    function y(e) {
      return e * b;
    }
    function v(e, t) {
      return Math.abs(e - t) <= p * Math.max(1, Math.abs(e), Math.abs(t));
    }
    function g() {
      var e = new d(4);
      return (
        d != Float32Array && ((e[1] = 0), (e[2] = 0)), (e[0] = 1), (e[3] = 1), e
      );
    }
    function w(e) {
      var t = new d(4);
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
    }
    function M(e, t) {
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
    }
    function k(e) {
      return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
    }
    function z(e, t, n, r) {
      var a = new d(4);
      return (a[0] = e), (a[1] = t), (a[2] = n), (a[3] = r), a;
    }
    function A(e, t, n, r, a) {
      return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = a), e;
    }
    function x(e, t) {
      if (e === t) {
        var n = t[1];
        (e[1] = t[2]), (e[2] = n);
      } else (e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]);
      return e;
    }
    function L(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = n * i - a * r;
      return o
        ? ((o = 1 / o),
          (e[0] = i * o),
          (e[1] = -r * o),
          (e[2] = -a * o),
          (e[3] = n * o),
          e)
        : null;
    }
    function E(e, t) {
      var n = t[0];
      return (e[0] = t[3]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = n), e;
    }
    function T(e) {
      return e[0] * e[3] - e[2] * e[1];
    }
    function O(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = n[0],
        c = n[1],
        s = n[2],
        _ = n[3];
      return (
        (e[0] = r * u + i * c),
        (e[1] = a * u + o * c),
        (e[2] = r * s + i * _),
        (e[3] = a * s + o * _),
        e
      );
    }
    function C(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = Math.sin(n),
        c = Math.cos(n);
      return (
        (e[0] = r * c + i * u),
        (e[1] = a * c + o * u),
        (e[2] = r * -u + i * c),
        (e[3] = a * -u + o * c),
        e
      );
    }
    function S(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = n[0],
        c = n[1];
      return (e[0] = r * u), (e[1] = a * u), (e[2] = i * c), (e[3] = o * c), e;
    }
    function I(e, t) {
      var n = Math.sin(t),
        r = Math.cos(t);
      return (e[0] = r), (e[1] = n), (e[2] = -n), (e[3] = r), e;
    }
    function P(e, t) {
      return (e[0] = t[0]), (e[1] = 0), (e[2] = 0), (e[3] = t[1]), e;
    }
    function B(e) {
      return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
    }
    function F(e) {
      return Math.hypot(e[0], e[1], e[2], e[3]);
    }
    function D(e, t, n, r) {
      return (
        (e[2] = r[2] / r[0]),
        (n[0] = r[0]),
        (n[1] = r[1]),
        (n[3] = r[3] - e[2] * n[1]),
        [e, t, n]
      );
    }
    function j(e, t, n) {
      return (
        (e[0] = t[0] + n[0]),
        (e[1] = t[1] + n[1]),
        (e[2] = t[2] + n[2]),
        (e[3] = t[3] + n[3]),
        e
      );
    }
    function R(e, t, n) {
      return (
        (e[0] = t[0] - n[0]),
        (e[1] = t[1] - n[1]),
        (e[2] = t[2] - n[2]),
        (e[3] = t[3] - n[3]),
        e
      );
    }
    function V(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
    }
    function q(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = e[3],
        o = t[0],
        u = t[1],
        c = t[2],
        s = t[3];
      return (
        Math.abs(n - o) <= p * Math.max(1, Math.abs(n), Math.abs(o)) &&
        Math.abs(r - u) <= p * Math.max(1, Math.abs(r), Math.abs(u)) &&
        Math.abs(a - c) <= p * Math.max(1, Math.abs(a), Math.abs(c)) &&
        Math.abs(i - s) <= p * Math.max(1, Math.abs(i), Math.abs(s))
      );
    }
    function G(e, t, n) {
      return (
        (e[0] = t[0] * n),
        (e[1] = t[1] * n),
        (e[2] = t[2] * n),
        (e[3] = t[3] * n),
        e
      );
    }
    function N(e, t, n, r) {
      return (
        (e[0] = t[0] + n[0] * r),
        (e[1] = t[1] + n[1] * r),
        (e[2] = t[2] + n[2] * r),
        (e[3] = t[3] + n[3] * r),
        e
      );
    }
    Math.hypot ||
      (Math.hypot = function () {
        for (var e = 0, t = arguments.length; t--; )
          e += arguments[t] * arguments[t];
        return Math.sqrt(e);
      });
    var U = O,
      W = R;
    function H() {
      var e = new d(6);
      return (
        d != Float32Array && ((e[1] = 0), (e[2] = 0), (e[4] = 0), (e[5] = 0)),
        (e[0] = 1),
        (e[3] = 1),
        e
      );
    }
    function Z(e) {
      var t = new d(6);
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        t
      );
    }
    function Y(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        e
      );
    }
    function X(e) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = 0),
        (e[5] = 0),
        e
      );
    }
    function K(e, t, n, r, a, i) {
      var o = new d(6);
      return (
        (o[0] = e),
        (o[1] = t),
        (o[2] = n),
        (o[3] = r),
        (o[4] = a),
        (o[5] = i),
        o
      );
    }
    function J(e, t, n, r, a, i, o) {
      return (
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = a),
        (e[4] = i),
        (e[5] = o),
        e
      );
    }
    function Q(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = t[4],
        u = t[5],
        c = n * i - r * a;
      return c
        ? ((c = 1 / c),
          (e[0] = i * c),
          (e[1] = -r * c),
          (e[2] = -a * c),
          (e[3] = n * c),
          (e[4] = (a * u - i * o) * c),
          (e[5] = (r * o - n * u) * c),
          e)
        : null;
    }
    function $(e) {
      return e[0] * e[3] - e[1] * e[2];
    }
    function ee(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = n[0],
        _ = n[1],
        f = n[2],
        l = n[3],
        p = n[4],
        d = n[5];
      return (
        (e[0] = r * s + i * _),
        (e[1] = a * s + o * _),
        (e[2] = r * f + i * l),
        (e[3] = a * f + o * l),
        (e[4] = r * p + i * d + u),
        (e[5] = a * p + o * d + c),
        e
      );
    }
    function te(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = Math.sin(n),
        _ = Math.cos(n);
      return (
        (e[0] = r * _ + i * s),
        (e[1] = a * _ + o * s),
        (e[2] = r * -s + i * _),
        (e[3] = a * -s + o * _),
        (e[4] = u),
        (e[5] = c),
        e
      );
    }
    function ne(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = n[0],
        _ = n[1];
      return (
        (e[0] = r * s),
        (e[1] = a * s),
        (e[2] = i * _),
        (e[3] = o * _),
        (e[4] = u),
        (e[5] = c),
        e
      );
    }
    function re(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = n[0],
        _ = n[1];
      return (
        (e[0] = r),
        (e[1] = a),
        (e[2] = i),
        (e[3] = o),
        (e[4] = r * s + i * _ + u),
        (e[5] = a * s + o * _ + c),
        e
      );
    }
    function ae(e, t) {
      var n = Math.sin(t),
        r = Math.cos(t);
      return (
        (e[0] = r),
        (e[1] = n),
        (e[2] = -n),
        (e[3] = r),
        (e[4] = 0),
        (e[5] = 0),
        e
      );
    }
    function ie(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = t[1]),
        (e[4] = 0),
        (e[5] = 0),
        e
      );
    }
    function oe(e, t) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = t[0]),
        (e[5] = t[1]),
        e
      );
    }
    function ue(e) {
      return (
        "mat2d(" +
        e[0] +
        ", " +
        e[1] +
        ", " +
        e[2] +
        ", " +
        e[3] +
        ", " +
        e[4] +
        ", " +
        e[5] +
        ")"
      );
    }
    function ce(e) {
      return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], 1);
    }
    function se(e, t, n) {
      return (
        (e[0] = t[0] + n[0]),
        (e[1] = t[1] + n[1]),
        (e[2] = t[2] + n[2]),
        (e[3] = t[3] + n[3]),
        (e[4] = t[4] + n[4]),
        (e[5] = t[5] + n[5]),
        e
      );
    }
    function _e(e, t, n) {
      return (
        (e[0] = t[0] - n[0]),
        (e[1] = t[1] - n[1]),
        (e[2] = t[2] - n[2]),
        (e[3] = t[3] - n[3]),
        (e[4] = t[4] - n[4]),
        (e[5] = t[5] - n[5]),
        e
      );
    }
    function fe(e, t, n) {
      return (
        (e[0] = t[0] * n),
        (e[1] = t[1] * n),
        (e[2] = t[2] * n),
        (e[3] = t[3] * n),
        (e[4] = t[4] * n),
        (e[5] = t[5] * n),
        e
      );
    }
    function le(e, t, n, r) {
      return (
        (e[0] = t[0] + n[0] * r),
        (e[1] = t[1] + n[1] * r),
        (e[2] = t[2] + n[2] * r),
        (e[3] = t[3] + n[3] * r),
        (e[4] = t[4] + n[4] * r),
        (e[5] = t[5] + n[5] * r),
        e
      );
    }
    function pe(e, t) {
      return (
        e[0] === t[0] &&
        e[1] === t[1] &&
        e[2] === t[2] &&
        e[3] === t[3] &&
        e[4] === t[4] &&
        e[5] === t[5]
      );
    }
    function de(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = e[3],
        o = e[4],
        u = e[5],
        c = t[0],
        s = t[1],
        _ = t[2],
        f = t[3],
        l = t[4],
        d = t[5];
      return (
        Math.abs(n - c) <= p * Math.max(1, Math.abs(n), Math.abs(c)) &&
        Math.abs(r - s) <= p * Math.max(1, Math.abs(r), Math.abs(s)) &&
        Math.abs(a - _) <= p * Math.max(1, Math.abs(a), Math.abs(_)) &&
        Math.abs(i - f) <= p * Math.max(1, Math.abs(i), Math.abs(f)) &&
        Math.abs(o - l) <= p * Math.max(1, Math.abs(o), Math.abs(l)) &&
        Math.abs(u - d) <= p * Math.max(1, Math.abs(u), Math.abs(d))
      );
    }
    var he = ee,
      me = _e;
    function be() {
      var e = new d(9);
      return (
        d != Float32Array &&
          ((e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0)),
        (e[0] = 1),
        (e[4] = 1),
        (e[8] = 1),
        e
      );
    }
    function ye(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[4]),
        (e[4] = t[5]),
        (e[5] = t[6]),
        (e[6] = t[8]),
        (e[7] = t[9]),
        (e[8] = t[10]),
        e
      );
    }
    function ve(e) {
      var t = new d(9);
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        t
      );
    }
    function ge(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        e
      );
    }
    function we(e, t, n, r, a, i, o, u, c) {
      var s = new d(9);
      return (
        (s[0] = e),
        (s[1] = t),
        (s[2] = n),
        (s[3] = r),
        (s[4] = a),
        (s[5] = i),
        (s[6] = o),
        (s[7] = u),
        (s[8] = c),
        s
      );
    }
    function Me(e, t, n, r, a, i, o, u, c, s) {
      return (
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = a),
        (e[4] = i),
        (e[5] = o),
        (e[6] = u),
        (e[7] = c),
        (e[8] = s),
        e
      );
    }
    function ke(e) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 1),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 1),
        e
      );
    }
    function ze(e, t) {
      if (e === t) {
        var n = t[1],
          r = t[2],
          a = t[5];
        (e[1] = t[3]),
          (e[2] = t[6]),
          (e[3] = n),
          (e[5] = t[7]),
          (e[6] = r),
          (e[7] = a);
      } else
        (e[0] = t[0]),
          (e[1] = t[3]),
          (e[2] = t[6]),
          (e[3] = t[1]),
          (e[4] = t[4]),
          (e[5] = t[7]),
          (e[6] = t[2]),
          (e[7] = t[5]),
          (e[8] = t[8]);
      return e;
    }
    function Ae(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = t[4],
        u = t[5],
        c = t[6],
        s = t[7],
        _ = t[8],
        f = _ * o - u * s,
        l = -_ * i + u * c,
        p = s * i - o * c,
        d = n * f + r * l + a * p;
      return d
        ? ((d = 1 / d),
          (e[0] = f * d),
          (e[1] = (-_ * r + a * s) * d),
          (e[2] = (u * r - a * o) * d),
          (e[3] = l * d),
          (e[4] = (_ * n - a * c) * d),
          (e[5] = (-u * n + a * i) * d),
          (e[6] = p * d),
          (e[7] = (-s * n + r * c) * d),
          (e[8] = (o * n - r * i) * d),
          e)
        : null;
    }
    function xe(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = t[4],
        u = t[5],
        c = t[6],
        s = t[7],
        _ = t[8];
      return (
        (e[0] = o * _ - u * s),
        (e[1] = a * s - r * _),
        (e[2] = r * u - a * o),
        (e[3] = u * c - i * _),
        (e[4] = n * _ - a * c),
        (e[5] = a * i - n * u),
        (e[6] = i * s - o * c),
        (e[7] = r * c - n * s),
        (e[8] = n * o - r * i),
        e
      );
    }
    function Le(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        a = e[3],
        i = e[4],
        o = e[5],
        u = e[6],
        c = e[7],
        s = e[8];
      return t * (s * i - o * c) + n * (-s * a + o * u) + r * (c * a - i * u);
    }
    function Ee(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = t[8],
        l = n[0],
        p = n[1],
        d = n[2],
        h = n[3],
        m = n[4],
        b = n[5],
        y = n[6],
        v = n[7],
        g = n[8];
      return (
        (e[0] = l * r + p * o + d * s),
        (e[1] = l * a + p * u + d * _),
        (e[2] = l * i + p * c + d * f),
        (e[3] = h * r + m * o + b * s),
        (e[4] = h * a + m * u + b * _),
        (e[5] = h * i + m * c + b * f),
        (e[6] = y * r + v * o + g * s),
        (e[7] = y * a + v * u + g * _),
        (e[8] = y * i + v * c + g * f),
        e
      );
    }
    function Te(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = t[8],
        l = n[0],
        p = n[1];
      return (
        (e[0] = r),
        (e[1] = a),
        (e[2] = i),
        (e[3] = o),
        (e[4] = u),
        (e[5] = c),
        (e[6] = l * r + p * o + s),
        (e[7] = l * a + p * u + _),
        (e[8] = l * i + p * c + f),
        e
      );
    }
    function Oe(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = t[8],
        l = Math.sin(n),
        p = Math.cos(n);
      return (
        (e[0] = p * r + l * o),
        (e[1] = p * a + l * u),
        (e[2] = p * i + l * c),
        (e[3] = p * o - l * r),
        (e[4] = p * u - l * a),
        (e[5] = p * c - l * i),
        (e[6] = s),
        (e[7] = _),
        (e[8] = f),
        e
      );
    }
    function Ce(e, t, n) {
      var r = n[0],
        a = n[1];
      return (
        (e[0] = r * t[0]),
        (e[1] = r * t[1]),
        (e[2] = r * t[2]),
        (e[3] = a * t[3]),
        (e[4] = a * t[4]),
        (e[5] = a * t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        e
      );
    }
    function Se(e, t) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 1),
        (e[5] = 0),
        (e[6] = t[0]),
        (e[7] = t[1]),
        (e[8] = 1),
        e
      );
    }
    function Ie(e, t) {
      var n = Math.sin(t),
        r = Math.cos(t);
      return (
        (e[0] = r),
        (e[1] = n),
        (e[2] = 0),
        (e[3] = -n),
        (e[4] = r),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 1),
        e
      );
    }
    function Pe(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = t[1]),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 1),
        e
      );
    }
    function Be(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = 0),
        (e[3] = t[2]),
        (e[4] = t[3]),
        (e[5] = 0),
        (e[6] = t[4]),
        (e[7] = t[5]),
        (e[8] = 1),
        e
      );
    }
    function Fe(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = n + n,
        u = r + r,
        c = a + a,
        s = n * o,
        _ = r * o,
        f = r * u,
        l = a * o,
        p = a * u,
        d = a * c,
        h = i * o,
        m = i * u,
        b = i * c;
      return (
        (e[0] = 1 - f - d),
        (e[3] = _ - b),
        (e[6] = l + m),
        (e[1] = _ + b),
        (e[4] = 1 - s - d),
        (e[7] = p - h),
        (e[2] = l - m),
        (e[5] = p + h),
        (e[8] = 1 - s - f),
        e
      );
    }
    function De(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = t[4],
        u = t[5],
        c = t[6],
        s = t[7],
        _ = t[8],
        f = t[9],
        l = t[10],
        p = t[11],
        d = t[12],
        h = t[13],
        m = t[14],
        b = t[15],
        y = n * u - r * o,
        v = n * c - a * o,
        g = n * s - i * o,
        w = r * c - a * u,
        M = r * s - i * u,
        k = a * s - i * c,
        z = _ * h - f * d,
        A = _ * m - l * d,
        x = _ * b - p * d,
        L = f * m - l * h,
        E = f * b - p * h,
        T = l * b - p * m,
        O = y * T - v * E + g * L + w * x - M * A + k * z;
      return O
        ? ((O = 1 / O),
          (e[0] = (u * T - c * E + s * L) * O),
          (e[1] = (c * x - o * T - s * A) * O),
          (e[2] = (o * E - u * x + s * z) * O),
          (e[3] = (a * E - r * T - i * L) * O),
          (e[4] = (n * T - a * x + i * A) * O),
          (e[5] = (r * x - n * E - i * z) * O),
          (e[6] = (h * k - m * M + b * w) * O),
          (e[7] = (m * g - d * k - b * v) * O),
          (e[8] = (d * M - h * g + b * y) * O),
          e)
        : null;
    }
    function je(e, t, n) {
      return (
        (e[0] = 2 / t),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = -2 / n),
        (e[5] = 0),
        (e[6] = -1),
        (e[7] = 1),
        (e[8] = 1),
        e
      );
    }
    function Re(e) {
      return (
        "mat3(" +
        e[0] +
        ", " +
        e[1] +
        ", " +
        e[2] +
        ", " +
        e[3] +
        ", " +
        e[4] +
        ", " +
        e[5] +
        ", " +
        e[6] +
        ", " +
        e[7] +
        ", " +
        e[8] +
        ")"
      );
    }
    function Ve(e) {
      return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
    }
    function qe(e, t, n) {
      return (
        (e[0] = t[0] + n[0]),
        (e[1] = t[1] + n[1]),
        (e[2] = t[2] + n[2]),
        (e[3] = t[3] + n[3]),
        (e[4] = t[4] + n[4]),
        (e[5] = t[5] + n[5]),
        (e[6] = t[6] + n[6]),
        (e[7] = t[7] + n[7]),
        (e[8] = t[8] + n[8]),
        e
      );
    }
    function Ge(e, t, n) {
      return (
        (e[0] = t[0] - n[0]),
        (e[1] = t[1] - n[1]),
        (e[2] = t[2] - n[2]),
        (e[3] = t[3] - n[3]),
        (e[4] = t[4] - n[4]),
        (e[5] = t[5] - n[5]),
        (e[6] = t[6] - n[6]),
        (e[7] = t[7] - n[7]),
        (e[8] = t[8] - n[8]),
        e
      );
    }
    function Ne(e, t, n) {
      return (
        (e[0] = t[0] * n),
        (e[1] = t[1] * n),
        (e[2] = t[2] * n),
        (e[3] = t[3] * n),
        (e[4] = t[4] * n),
        (e[5] = t[5] * n),
        (e[6] = t[6] * n),
        (e[7] = t[7] * n),
        (e[8] = t[8] * n),
        e
      );
    }
    function Ue(e, t, n, r) {
      return (
        (e[0] = t[0] + n[0] * r),
        (e[1] = t[1] + n[1] * r),
        (e[2] = t[2] + n[2] * r),
        (e[3] = t[3] + n[3] * r),
        (e[4] = t[4] + n[4] * r),
        (e[5] = t[5] + n[5] * r),
        (e[6] = t[6] + n[6] * r),
        (e[7] = t[7] + n[7] * r),
        (e[8] = t[8] + n[8] * r),
        e
      );
    }
    function We(e, t) {
      return (
        e[0] === t[0] &&
        e[1] === t[1] &&
        e[2] === t[2] &&
        e[3] === t[3] &&
        e[4] === t[4] &&
        e[5] === t[5] &&
        e[6] === t[6] &&
        e[7] === t[7] &&
        e[8] === t[8]
      );
    }
    function He(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = e[3],
        o = e[4],
        u = e[5],
        c = e[6],
        s = e[7],
        _ = e[8],
        f = t[0],
        l = t[1],
        d = t[2],
        h = t[3],
        m = t[4],
        b = t[5],
        y = t[6],
        v = t[7],
        g = t[8];
      return (
        Math.abs(n - f) <= p * Math.max(1, Math.abs(n), Math.abs(f)) &&
        Math.abs(r - l) <= p * Math.max(1, Math.abs(r), Math.abs(l)) &&
        Math.abs(a - d) <= p * Math.max(1, Math.abs(a), Math.abs(d)) &&
        Math.abs(i - h) <= p * Math.max(1, Math.abs(i), Math.abs(h)) &&
        Math.abs(o - m) <= p * Math.max(1, Math.abs(o), Math.abs(m)) &&
        Math.abs(u - b) <= p * Math.max(1, Math.abs(u), Math.abs(b)) &&
        Math.abs(c - y) <= p * Math.max(1, Math.abs(c), Math.abs(y)) &&
        Math.abs(s - v) <= p * Math.max(1, Math.abs(s), Math.abs(v)) &&
        Math.abs(_ - g) <= p * Math.max(1, Math.abs(_), Math.abs(g))
      );
    }
    var Ze = Ee,
      Ye = Ge;
    function Xe() {
      var e = new d(16);
      return (
        d != Float32Array &&
          ((e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0)),
        (e[0] = 1),
        (e[5] = 1),
        (e[10] = 1),
        (e[15] = 1),
        e
      );
    }
    function Ke(e) {
      var t = new d(16);
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        t
      );
    }
    function Je(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        (e[9] = t[9]),
        (e[10] = t[10]),
        (e[11] = t[11]),
        (e[12] = t[12]),
        (e[13] = t[13]),
        (e[14] = t[14]),
        (e[15] = t[15]),
        e
      );
    }
    function Qe(e, t, n, r, a, i, o, u, c, s, _, f, l, p, h, m) {
      var b = new d(16);
      return (
        (b[0] = e),
        (b[1] = t),
        (b[2] = n),
        (b[3] = r),
        (b[4] = a),
        (b[5] = i),
        (b[6] = o),
        (b[7] = u),
        (b[8] = c),
        (b[9] = s),
        (b[10] = _),
        (b[11] = f),
        (b[12] = l),
        (b[13] = p),
        (b[14] = h),
        (b[15] = m),
        b
      );
    }
    function $e(e, t, n, r, a, i, o, u, c, s, _, f, l, p, d, h, m) {
      return (
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = a),
        (e[4] = i),
        (e[5] = o),
        (e[6] = u),
        (e[7] = c),
        (e[8] = s),
        (e[9] = _),
        (e[10] = f),
        (e[11] = l),
        (e[12] = p),
        (e[13] = d),
        (e[14] = h),
        (e[15] = m),
        e
      );
    }
    function et(e) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function tt(e, t) {
      if (e === t) {
        var n = t[1],
          r = t[2],
          a = t[3],
          i = t[6],
          o = t[7],
          u = t[11];
        (e[1] = t[4]),
          (e[2] = t[8]),
          (e[3] = t[12]),
          (e[4] = n),
          (e[6] = t[9]),
          (e[7] = t[13]),
          (e[8] = r),
          (e[9] = i),
          (e[11] = t[14]),
          (e[12] = a),
          (e[13] = o),
          (e[14] = u);
      } else
        (e[0] = t[0]),
          (e[1] = t[4]),
          (e[2] = t[8]),
          (e[3] = t[12]),
          (e[4] = t[1]),
          (e[5] = t[5]),
          (e[6] = t[9]),
          (e[7] = t[13]),
          (e[8] = t[2]),
          (e[9] = t[6]),
          (e[10] = t[10]),
          (e[11] = t[14]),
          (e[12] = t[3]),
          (e[13] = t[7]),
          (e[14] = t[11]),
          (e[15] = t[15]);
      return e;
    }
    function nt(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = t[4],
        u = t[5],
        c = t[6],
        s = t[7],
        _ = t[8],
        f = t[9],
        l = t[10],
        p = t[11],
        d = t[12],
        h = t[13],
        m = t[14],
        b = t[15],
        y = n * u - r * o,
        v = n * c - a * o,
        g = n * s - i * o,
        w = r * c - a * u,
        M = r * s - i * u,
        k = a * s - i * c,
        z = _ * h - f * d,
        A = _ * m - l * d,
        x = _ * b - p * d,
        L = f * m - l * h,
        E = f * b - p * h,
        T = l * b - p * m,
        O = y * T - v * E + g * L + w * x - M * A + k * z;
      return O
        ? ((O = 1 / O),
          (e[0] = (u * T - c * E + s * L) * O),
          (e[1] = (a * E - r * T - i * L) * O),
          (e[2] = (h * k - m * M + b * w) * O),
          (e[3] = (l * M - f * k - p * w) * O),
          (e[4] = (c * x - o * T - s * A) * O),
          (e[5] = (n * T - a * x + i * A) * O),
          (e[6] = (m * g - d * k - b * v) * O),
          (e[7] = (_ * k - l * g + p * v) * O),
          (e[8] = (o * E - u * x + s * z) * O),
          (e[9] = (r * x - n * E - i * z) * O),
          (e[10] = (d * M - h * g + b * y) * O),
          (e[11] = (f * g - _ * M - p * y) * O),
          (e[12] = (u * A - o * L - c * z) * O),
          (e[13] = (n * L - r * A + a * z) * O),
          (e[14] = (h * v - d * w - m * y) * O),
          (e[15] = (_ * w - f * v + l * y) * O),
          e)
        : null;
    }
    function rt(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = t[4],
        u = t[5],
        c = t[6],
        s = t[7],
        _ = t[8],
        f = t[9],
        l = t[10],
        p = t[11],
        d = t[12],
        h = t[13],
        m = t[14],
        b = t[15];
      return (
        (e[0] =
          u * (l * b - p * m) - f * (c * b - s * m) + h * (c * p - s * l)),
        (e[1] = -(
          r * (l * b - p * m) -
          f * (a * b - i * m) +
          h * (a * p - i * l)
        )),
        (e[2] =
          r * (c * b - s * m) - u * (a * b - i * m) + h * (a * s - i * c)),
        (e[3] = -(
          r * (c * p - s * l) -
          u * (a * p - i * l) +
          f * (a * s - i * c)
        )),
        (e[4] = -(
          o * (l * b - p * m) -
          _ * (c * b - s * m) +
          d * (c * p - s * l)
        )),
        (e[5] =
          n * (l * b - p * m) - _ * (a * b - i * m) + d * (a * p - i * l)),
        (e[6] = -(
          n * (c * b - s * m) -
          o * (a * b - i * m) +
          d * (a * s - i * c)
        )),
        (e[7] =
          n * (c * p - s * l) - o * (a * p - i * l) + _ * (a * s - i * c)),
        (e[8] =
          o * (f * b - p * h) - _ * (u * b - s * h) + d * (u * p - s * f)),
        (e[9] = -(
          n * (f * b - p * h) -
          _ * (r * b - i * h) +
          d * (r * p - i * f)
        )),
        (e[10] =
          n * (u * b - s * h) - o * (r * b - i * h) + d * (r * s - i * u)),
        (e[11] = -(
          n * (u * p - s * f) -
          o * (r * p - i * f) +
          _ * (r * s - i * u)
        )),
        (e[12] = -(
          o * (f * m - l * h) -
          _ * (u * m - c * h) +
          d * (u * l - c * f)
        )),
        (e[13] =
          n * (f * m - l * h) - _ * (r * m - a * h) + d * (r * l - a * f)),
        (e[14] = -(
          n * (u * m - c * h) -
          o * (r * m - a * h) +
          d * (r * c - a * u)
        )),
        (e[15] =
          n * (u * l - c * f) - o * (r * l - a * f) + _ * (r * c - a * u)),
        e
      );
    }
    function at(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        a = e[3],
        i = e[4],
        o = e[5],
        u = e[6],
        c = e[7],
        s = e[8],
        _ = e[9],
        f = e[10],
        l = e[11],
        p = e[12],
        d = e[13],
        h = e[14],
        m = e[15];
      return (
        (t * o - n * i) * (f * m - l * h) -
        (t * u - r * i) * (_ * m - l * d) +
        (t * c - a * i) * (_ * h - f * d) +
        (n * u - r * o) * (s * m - l * p) -
        (n * c - a * o) * (s * h - f * p) +
        (r * c - a * u) * (s * d - _ * p)
      );
    }
    function it(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = t[8],
        l = t[9],
        p = t[10],
        d = t[11],
        h = t[12],
        m = t[13],
        b = t[14],
        y = t[15],
        v = n[0],
        g = n[1],
        w = n[2],
        M = n[3];
      return (
        (e[0] = v * r + g * u + w * f + M * h),
        (e[1] = v * a + g * c + w * l + M * m),
        (e[2] = v * i + g * s + w * p + M * b),
        (e[3] = v * o + g * _ + w * d + M * y),
        (v = n[4]),
        (g = n[5]),
        (w = n[6]),
        (M = n[7]),
        (e[4] = v * r + g * u + w * f + M * h),
        (e[5] = v * a + g * c + w * l + M * m),
        (e[6] = v * i + g * s + w * p + M * b),
        (e[7] = v * o + g * _ + w * d + M * y),
        (v = n[8]),
        (g = n[9]),
        (w = n[10]),
        (M = n[11]),
        (e[8] = v * r + g * u + w * f + M * h),
        (e[9] = v * a + g * c + w * l + M * m),
        (e[10] = v * i + g * s + w * p + M * b),
        (e[11] = v * o + g * _ + w * d + M * y),
        (v = n[12]),
        (g = n[13]),
        (w = n[14]),
        (M = n[15]),
        (e[12] = v * r + g * u + w * f + M * h),
        (e[13] = v * a + g * c + w * l + M * m),
        (e[14] = v * i + g * s + w * p + M * b),
        (e[15] = v * o + g * _ + w * d + M * y),
        e
      );
    }
    function ot(e, t, n) {
      var r,
        a,
        i,
        o,
        u,
        c,
        s,
        _,
        f,
        l,
        p,
        d,
        h = n[0],
        m = n[1],
        b = n[2];
      return (
        t === e
          ? ((e[12] = t[0] * h + t[4] * m + t[8] * b + t[12]),
            (e[13] = t[1] * h + t[5] * m + t[9] * b + t[13]),
            (e[14] = t[2] * h + t[6] * m + t[10] * b + t[14]),
            (e[15] = t[3] * h + t[7] * m + t[11] * b + t[15]))
          : ((r = t[0]),
            (a = t[1]),
            (i = t[2]),
            (o = t[3]),
            (u = t[4]),
            (c = t[5]),
            (s = t[6]),
            (_ = t[7]),
            (f = t[8]),
            (l = t[9]),
            (p = t[10]),
            (d = t[11]),
            (e[0] = r),
            (e[1] = a),
            (e[2] = i),
            (e[3] = o),
            (e[4] = u),
            (e[5] = c),
            (e[6] = s),
            (e[7] = _),
            (e[8] = f),
            (e[9] = l),
            (e[10] = p),
            (e[11] = d),
            (e[12] = r * h + u * m + f * b + t[12]),
            (e[13] = a * h + c * m + l * b + t[13]),
            (e[14] = i * h + s * m + p * b + t[14]),
            (e[15] = o * h + _ * m + d * b + t[15])),
        e
      );
    }
    function ut(e, t, n) {
      var r = n[0],
        a = n[1],
        i = n[2];
      return (
        (e[0] = t[0] * r),
        (e[1] = t[1] * r),
        (e[2] = t[2] * r),
        (e[3] = t[3] * r),
        (e[4] = t[4] * a),
        (e[5] = t[5] * a),
        (e[6] = t[6] * a),
        (e[7] = t[7] * a),
        (e[8] = t[8] * i),
        (e[9] = t[9] * i),
        (e[10] = t[10] * i),
        (e[11] = t[11] * i),
        (e[12] = t[12]),
        (e[13] = t[13]),
        (e[14] = t[14]),
        (e[15] = t[15]),
        e
      );
    }
    function ct(e, t, n, r) {
      var a,
        i,
        o,
        u,
        c,
        s,
        _,
        f,
        l,
        d,
        h,
        m,
        b,
        y,
        v,
        g,
        w,
        M,
        k,
        z,
        A,
        x,
        L,
        E,
        T = r[0],
        O = r[1],
        C = r[2],
        S = Math.hypot(T, O, C);
      return S < p
        ? null
        : ((T *= S = 1 / S),
          (O *= S),
          (C *= S),
          (a = Math.sin(n)),
          (o = 1 - (i = Math.cos(n))),
          (u = t[0]),
          (c = t[1]),
          (s = t[2]),
          (_ = t[3]),
          (f = t[4]),
          (l = t[5]),
          (d = t[6]),
          (h = t[7]),
          (m = t[8]),
          (b = t[9]),
          (y = t[10]),
          (v = t[11]),
          (g = T * T * o + i),
          (w = O * T * o + C * a),
          (M = C * T * o - O * a),
          (k = T * O * o - C * a),
          (z = O * O * o + i),
          (A = C * O * o + T * a),
          (x = T * C * o + O * a),
          (L = O * C * o - T * a),
          (E = C * C * o + i),
          (e[0] = u * g + f * w + m * M),
          (e[1] = c * g + l * w + b * M),
          (e[2] = s * g + d * w + y * M),
          (e[3] = _ * g + h * w + v * M),
          (e[4] = u * k + f * z + m * A),
          (e[5] = c * k + l * z + b * A),
          (e[6] = s * k + d * z + y * A),
          (e[7] = _ * k + h * z + v * A),
          (e[8] = u * x + f * L + m * E),
          (e[9] = c * x + l * L + b * E),
          (e[10] = s * x + d * L + y * E),
          (e[11] = _ * x + h * L + v * E),
          t !== e &&
            ((e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          e);
    }
    function st(e, t, n) {
      var r = Math.sin(n),
        a = Math.cos(n),
        i = t[4],
        o = t[5],
        u = t[6],
        c = t[7],
        s = t[8],
        _ = t[9],
        f = t[10],
        l = t[11];
      return (
        t !== e &&
          ((e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15])),
        (e[4] = i * a + s * r),
        (e[5] = o * a + _ * r),
        (e[6] = u * a + f * r),
        (e[7] = c * a + l * r),
        (e[8] = s * a - i * r),
        (e[9] = _ * a - o * r),
        (e[10] = f * a - u * r),
        (e[11] = l * a - c * r),
        e
      );
    }
    function _t(e, t, n) {
      var r = Math.sin(n),
        a = Math.cos(n),
        i = t[0],
        o = t[1],
        u = t[2],
        c = t[3],
        s = t[8],
        _ = t[9],
        f = t[10],
        l = t[11];
      return (
        t !== e &&
          ((e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15])),
        (e[0] = i * a - s * r),
        (e[1] = o * a - _ * r),
        (e[2] = u * a - f * r),
        (e[3] = c * a - l * r),
        (e[8] = i * r + s * a),
        (e[9] = o * r + _ * a),
        (e[10] = u * r + f * a),
        (e[11] = c * r + l * a),
        e
      );
    }
    function ft(e, t, n) {
      var r = Math.sin(n),
        a = Math.cos(n),
        i = t[0],
        o = t[1],
        u = t[2],
        c = t[3],
        s = t[4],
        _ = t[5],
        f = t[6],
        l = t[7];
      return (
        t !== e &&
          ((e[8] = t[8]),
          (e[9] = t[9]),
          (e[10] = t[10]),
          (e[11] = t[11]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15])),
        (e[0] = i * a + s * r),
        (e[1] = o * a + _ * r),
        (e[2] = u * a + f * r),
        (e[3] = c * a + l * r),
        (e[4] = s * a - i * r),
        (e[5] = _ * a - o * r),
        (e[6] = f * a - u * r),
        (e[7] = l * a - c * r),
        e
      );
    }
    function lt(e, t) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = t[0]),
        (e[13] = t[1]),
        (e[14] = t[2]),
        (e[15] = 1),
        e
      );
    }
    function pt(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = t[1]),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = t[2]),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function dt(e, t, n) {
      var r,
        a,
        i,
        o = n[0],
        u = n[1],
        c = n[2],
        s = Math.hypot(o, u, c);
      return s < p
        ? null
        : ((o *= s = 1 / s),
          (u *= s),
          (c *= s),
          (r = Math.sin(t)),
          (i = 1 - (a = Math.cos(t))),
          (e[0] = o * o * i + a),
          (e[1] = u * o * i + c * r),
          (e[2] = c * o * i - u * r),
          (e[3] = 0),
          (e[4] = o * u * i - c * r),
          (e[5] = u * u * i + a),
          (e[6] = c * u * i + o * r),
          (e[7] = 0),
          (e[8] = o * c * i + u * r),
          (e[9] = u * c * i - o * r),
          (e[10] = c * c * i + a),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e);
    }
    function ht(e, t) {
      var n = Math.sin(t),
        r = Math.cos(t);
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = r),
        (e[6] = n),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = -n),
        (e[10] = r),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function mt(e, t) {
      var n = Math.sin(t),
        r = Math.cos(t);
      return (
        (e[0] = r),
        (e[1] = 0),
        (e[2] = -n),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = n),
        (e[9] = 0),
        (e[10] = r),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function bt(e, t) {
      var n = Math.sin(t),
        r = Math.cos(t);
      return (
        (e[0] = r),
        (e[1] = n),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = -n),
        (e[5] = r),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function yt(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = r + r,
        c = a + a,
        s = i + i,
        _ = r * u,
        f = r * c,
        l = r * s,
        p = a * c,
        d = a * s,
        h = i * s,
        m = o * u,
        b = o * c,
        y = o * s;
      return (
        (e[0] = 1 - (p + h)),
        (e[1] = f + y),
        (e[2] = l - b),
        (e[3] = 0),
        (e[4] = f - y),
        (e[5] = 1 - (_ + h)),
        (e[6] = d + m),
        (e[7] = 0),
        (e[8] = l + b),
        (e[9] = d - m),
        (e[10] = 1 - (_ + p)),
        (e[11] = 0),
        (e[12] = n[0]),
        (e[13] = n[1]),
        (e[14] = n[2]),
        (e[15] = 1),
        e
      );
    }
    function vt(e, t) {
      var n = new d(3),
        r = -t[0],
        a = -t[1],
        i = -t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = r * r + a * a + i * i + o * o;
      return (
        f > 0
          ? ((n[0] = (2 * (u * o + _ * r + c * i - s * a)) / f),
            (n[1] = (2 * (c * o + _ * a + s * r - u * i)) / f),
            (n[2] = (2 * (s * o + _ * i + u * a - c * r)) / f))
          : ((n[0] = 2 * (u * o + _ * r + c * i - s * a)),
            (n[1] = 2 * (c * o + _ * a + s * r - u * i)),
            (n[2] = 2 * (s * o + _ * i + u * a - c * r))),
        yt(e, t, n),
        e
      );
    }
    function gt(e, t) {
      return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
    }
    function wt(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[4],
        o = t[5],
        u = t[6],
        c = t[8],
        s = t[9],
        _ = t[10];
      return (
        (e[0] = Math.hypot(n, r, a)),
        (e[1] = Math.hypot(i, o, u)),
        (e[2] = Math.hypot(c, s, _)),
        e
      );
    }
    function Mt(e, t) {
      var n = new d(3);
      wt(n, t);
      var r = 1 / n[0],
        a = 1 / n[1],
        i = 1 / n[2],
        o = t[0] * r,
        u = t[1] * a,
        c = t[2] * i,
        s = t[4] * r,
        _ = t[5] * a,
        f = t[6] * i,
        l = t[8] * r,
        p = t[9] * a,
        h = t[10] * i,
        m = o + _ + h,
        b = 0;
      return (
        m > 0
          ? ((b = 2 * Math.sqrt(m + 1)),
            (e[3] = 0.25 * b),
            (e[0] = (f - p) / b),
            (e[1] = (l - c) / b),
            (e[2] = (u - s) / b))
          : o > _ && o > h
          ? ((b = 2 * Math.sqrt(1 + o - _ - h)),
            (e[3] = (f - p) / b),
            (e[0] = 0.25 * b),
            (e[1] = (u + s) / b),
            (e[2] = (l + c) / b))
          : _ > h
          ? ((b = 2 * Math.sqrt(1 + _ - o - h)),
            (e[3] = (l - c) / b),
            (e[0] = (u + s) / b),
            (e[1] = 0.25 * b),
            (e[2] = (f + p) / b))
          : ((b = 2 * Math.sqrt(1 + h - o - _)),
            (e[3] = (u - s) / b),
            (e[0] = (l + c) / b),
            (e[1] = (f + p) / b),
            (e[2] = 0.25 * b)),
        e
      );
    }
    function kt(e, t, n, r) {
      var a = t[0],
        i = t[1],
        o = t[2],
        u = t[3],
        c = a + a,
        s = i + i,
        _ = o + o,
        f = a * c,
        l = a * s,
        p = a * _,
        d = i * s,
        h = i * _,
        m = o * _,
        b = u * c,
        y = u * s,
        v = u * _,
        g = r[0],
        w = r[1],
        M = r[2];
      return (
        (e[0] = (1 - (d + m)) * g),
        (e[1] = (l + v) * g),
        (e[2] = (p - y) * g),
        (e[3] = 0),
        (e[4] = (l - v) * w),
        (e[5] = (1 - (f + m)) * w),
        (e[6] = (h + b) * w),
        (e[7] = 0),
        (e[8] = (p + y) * M),
        (e[9] = (h - b) * M),
        (e[10] = (1 - (f + d)) * M),
        (e[11] = 0),
        (e[12] = n[0]),
        (e[13] = n[1]),
        (e[14] = n[2]),
        (e[15] = 1),
        e
      );
    }
    function zt(e, t, n, r, a) {
      var i = t[0],
        o = t[1],
        u = t[2],
        c = t[3],
        s = i + i,
        _ = o + o,
        f = u + u,
        l = i * s,
        p = i * _,
        d = i * f,
        h = o * _,
        m = o * f,
        b = u * f,
        y = c * s,
        v = c * _,
        g = c * f,
        w = r[0],
        M = r[1],
        k = r[2],
        z = a[0],
        A = a[1],
        x = a[2],
        L = (1 - (h + b)) * w,
        E = (p + g) * w,
        T = (d - v) * w,
        O = (p - g) * M,
        C = (1 - (l + b)) * M,
        S = (m + y) * M,
        I = (d + v) * k,
        P = (m - y) * k,
        B = (1 - (l + h)) * k;
      return (
        (e[0] = L),
        (e[1] = E),
        (e[2] = T),
        (e[3] = 0),
        (e[4] = O),
        (e[5] = C),
        (e[6] = S),
        (e[7] = 0),
        (e[8] = I),
        (e[9] = P),
        (e[10] = B),
        (e[11] = 0),
        (e[12] = n[0] + z - (L * z + O * A + I * x)),
        (e[13] = n[1] + A - (E * z + C * A + P * x)),
        (e[14] = n[2] + x - (T * z + S * A + B * x)),
        (e[15] = 1),
        e
      );
    }
    function At(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = n + n,
        u = r + r,
        c = a + a,
        s = n * o,
        _ = r * o,
        f = r * u,
        l = a * o,
        p = a * u,
        d = a * c,
        h = i * o,
        m = i * u,
        b = i * c;
      return (
        (e[0] = 1 - f - d),
        (e[1] = _ + b),
        (e[2] = l - m),
        (e[3] = 0),
        (e[4] = _ - b),
        (e[5] = 1 - s - d),
        (e[6] = p + h),
        (e[7] = 0),
        (e[8] = l + m),
        (e[9] = p - h),
        (e[10] = 1 - s - f),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      );
    }
    function xt(e, t, n, r, a, i, o) {
      var u = 1 / (n - t),
        c = 1 / (a - r),
        s = 1 / (i - o);
      return (
        (e[0] = 2 * i * u),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 2 * i * c),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = (n + t) * u),
        (e[9] = (a + r) * c),
        (e[10] = (o + i) * s),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = o * i * 2 * s),
        (e[15] = 0),
        e
      );
    }
    function Lt(e, t, n, r, a) {
      var i,
        o = 1 / Math.tan(t / 2);
      return (
        (e[0] = o / n),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = o),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[15] = 0),
        null != a && a !== 1 / 0
          ? ((i = 1 / (r - a)), (e[10] = (a + r) * i), (e[14] = 2 * a * r * i))
          : ((e[10] = -1), (e[14] = -2 * r)),
        e
      );
    }
    function Et(e, t, n, r) {
      var a = Math.tan((t.upDegrees * Math.PI) / 180),
        i = Math.tan((t.downDegrees * Math.PI) / 180),
        o = Math.tan((t.leftDegrees * Math.PI) / 180),
        u = Math.tan((t.rightDegrees * Math.PI) / 180),
        c = 2 / (o + u),
        s = 2 / (a + i);
      return (
        (e[0] = c),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = s),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = -(o - u) * c * 0.5),
        (e[9] = (a - i) * s * 0.5),
        (e[10] = r / (n - r)),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = (r * n) / (n - r)),
        (e[15] = 0),
        e
      );
    }
    function Tt(e, t, n, r, a, i, o) {
      var u = 1 / (t - n),
        c = 1 / (r - a),
        s = 1 / (i - o);
      return (
        (e[0] = -2 * u),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = -2 * c),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 2 * s),
        (e[11] = 0),
        (e[12] = (t + n) * u),
        (e[13] = (a + r) * c),
        (e[14] = (o + i) * s),
        (e[15] = 1),
        e
      );
    }
    function Ot(e, t, n, r) {
      var a,
        i,
        o,
        u,
        c,
        s,
        _,
        f,
        l,
        d,
        h = t[0],
        m = t[1],
        b = t[2],
        y = r[0],
        v = r[1],
        g = r[2],
        w = n[0],
        M = n[1],
        k = n[2];
      return Math.abs(h - w) < p && Math.abs(m - M) < p && Math.abs(b - k) < p
        ? et(e)
        : ((_ = h - w),
          (f = m - M),
          (l = b - k),
          (a = v * (l *= d = 1 / Math.hypot(_, f, l)) - g * (f *= d)),
          (i = g * (_ *= d) - y * l),
          (o = y * f - v * _),
          (d = Math.hypot(a, i, o))
            ? ((a *= d = 1 / d), (i *= d), (o *= d))
            : ((a = 0), (i = 0), (o = 0)),
          (u = f * o - l * i),
          (c = l * a - _ * o),
          (s = _ * i - f * a),
          (d = Math.hypot(u, c, s))
            ? ((u *= d = 1 / d), (c *= d), (s *= d))
            : ((u = 0), (c = 0), (s = 0)),
          (e[0] = a),
          (e[1] = u),
          (e[2] = _),
          (e[3] = 0),
          (e[4] = i),
          (e[5] = c),
          (e[6] = f),
          (e[7] = 0),
          (e[8] = o),
          (e[9] = s),
          (e[10] = l),
          (e[11] = 0),
          (e[12] = -(a * h + i * m + o * b)),
          (e[13] = -(u * h + c * m + s * b)),
          (e[14] = -(_ * h + f * m + l * b)),
          (e[15] = 1),
          e);
    }
    function Ct(e, t, n, r) {
      var a = t[0],
        i = t[1],
        o = t[2],
        u = r[0],
        c = r[1],
        s = r[2],
        _ = a - n[0],
        f = i - n[1],
        l = o - n[2],
        p = _ * _ + f * f + l * l;
      p > 0 && ((_ *= p = 1 / Math.sqrt(p)), (f *= p), (l *= p));
      var d = c * l - s * f,
        h = s * _ - u * l,
        m = u * f - c * _;
      return (
        (p = d * d + h * h + m * m) > 0 &&
          ((d *= p = 1 / Math.sqrt(p)), (h *= p), (m *= p)),
        (e[0] = d),
        (e[1] = h),
        (e[2] = m),
        (e[3] = 0),
        (e[4] = f * m - l * h),
        (e[5] = l * d - _ * m),
        (e[6] = _ * h - f * d),
        (e[7] = 0),
        (e[8] = _),
        (e[9] = f),
        (e[10] = l),
        (e[11] = 0),
        (e[12] = a),
        (e[13] = i),
        (e[14] = o),
        (e[15] = 1),
        e
      );
    }
    function St(e) {
      return (
        "mat4(" +
        e[0] +
        ", " +
        e[1] +
        ", " +
        e[2] +
        ", " +
        e[3] +
        ", " +
        e[4] +
        ", " +
        e[5] +
        ", " +
        e[6] +
        ", " +
        e[7] +
        ", " +
        e[8] +
        ", " +
        e[9] +
        ", " +
        e[10] +
        ", " +
        e[11] +
        ", " +
        e[12] +
        ", " +
        e[13] +
        ", " +
        e[14] +
        ", " +
        e[15] +
        ")"
      );
    }
    function It(e) {
      return Math.hypot(
        e[0],
        e[1],
        e[3],
        e[4],
        e[5],
        e[6],
        e[7],
        e[8],
        e[9],
        e[10],
        e[11],
        e[12],
        e[13],
        e[14],
        e[15]
      );
    }
    function Pt(e, t, n) {
      return (
        (e[0] = t[0] + n[0]),
        (e[1] = t[1] + n[1]),
        (e[2] = t[2] + n[2]),
        (e[3] = t[3] + n[3]),
        (e[4] = t[4] + n[4]),
        (e[5] = t[5] + n[5]),
        (e[6] = t[6] + n[6]),
        (e[7] = t[7] + n[7]),
        (e[8] = t[8] + n[8]),
        (e[9] = t[9] + n[9]),
        (e[10] = t[10] + n[10]),
        (e[11] = t[11] + n[11]),
        (e[12] = t[12] + n[12]),
        (e[13] = t[13] + n[13]),
        (e[14] = t[14] + n[14]),
        (e[15] = t[15] + n[15]),
        e
      );
    }
    function Bt(e, t, n) {
      return (
        (e[0] = t[0] - n[0]),
        (e[1] = t[1] - n[1]),
        (e[2] = t[2] - n[2]),
        (e[3] = t[3] - n[3]),
        (e[4] = t[4] - n[4]),
        (e[5] = t[5] - n[5]),
        (e[6] = t[6] - n[6]),
        (e[7] = t[7] - n[7]),
        (e[8] = t[8] - n[8]),
        (e[9] = t[9] - n[9]),
        (e[10] = t[10] - n[10]),
        (e[11] = t[11] - n[11]),
        (e[12] = t[12] - n[12]),
        (e[13] = t[13] - n[13]),
        (e[14] = t[14] - n[14]),
        (e[15] = t[15] - n[15]),
        e
      );
    }
    function Ft(e, t, n) {
      return (
        (e[0] = t[0] * n),
        (e[1] = t[1] * n),
        (e[2] = t[2] * n),
        (e[3] = t[3] * n),
        (e[4] = t[4] * n),
        (e[5] = t[5] * n),
        (e[6] = t[6] * n),
        (e[7] = t[7] * n),
        (e[8] = t[8] * n),
        (e[9] = t[9] * n),
        (e[10] = t[10] * n),
        (e[11] = t[11] * n),
        (e[12] = t[12] * n),
        (e[13] = t[13] * n),
        (e[14] = t[14] * n),
        (e[15] = t[15] * n),
        e
      );
    }
    function Dt(e, t, n, r) {
      return (
        (e[0] = t[0] + n[0] * r),
        (e[1] = t[1] + n[1] * r),
        (e[2] = t[2] + n[2] * r),
        (e[3] = t[3] + n[3] * r),
        (e[4] = t[4] + n[4] * r),
        (e[5] = t[5] + n[5] * r),
        (e[6] = t[6] + n[6] * r),
        (e[7] = t[7] + n[7] * r),
        (e[8] = t[8] + n[8] * r),
        (e[9] = t[9] + n[9] * r),
        (e[10] = t[10] + n[10] * r),
        (e[11] = t[11] + n[11] * r),
        (e[12] = t[12] + n[12] * r),
        (e[13] = t[13] + n[13] * r),
        (e[14] = t[14] + n[14] * r),
        (e[15] = t[15] + n[15] * r),
        e
      );
    }
    function jt(e, t) {
      return (
        e[0] === t[0] &&
        e[1] === t[1] &&
        e[2] === t[2] &&
        e[3] === t[3] &&
        e[4] === t[4] &&
        e[5] === t[5] &&
        e[6] === t[6] &&
        e[7] === t[7] &&
        e[8] === t[8] &&
        e[9] === t[9] &&
        e[10] === t[10] &&
        e[11] === t[11] &&
        e[12] === t[12] &&
        e[13] === t[13] &&
        e[14] === t[14] &&
        e[15] === t[15]
      );
    }
    function Rt(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = e[3],
        o = e[4],
        u = e[5],
        c = e[6],
        s = e[7],
        _ = e[8],
        f = e[9],
        l = e[10],
        d = e[11],
        h = e[12],
        m = e[13],
        b = e[14],
        y = e[15],
        v = t[0],
        g = t[1],
        w = t[2],
        M = t[3],
        k = t[4],
        z = t[5],
        A = t[6],
        x = t[7],
        L = t[8],
        E = t[9],
        T = t[10],
        O = t[11],
        C = t[12],
        S = t[13],
        I = t[14],
        P = t[15];
      return (
        Math.abs(n - v) <= p * Math.max(1, Math.abs(n), Math.abs(v)) &&
        Math.abs(r - g) <= p * Math.max(1, Math.abs(r), Math.abs(g)) &&
        Math.abs(a - w) <= p * Math.max(1, Math.abs(a), Math.abs(w)) &&
        Math.abs(i - M) <= p * Math.max(1, Math.abs(i), Math.abs(M)) &&
        Math.abs(o - k) <= p * Math.max(1, Math.abs(o), Math.abs(k)) &&
        Math.abs(u - z) <= p * Math.max(1, Math.abs(u), Math.abs(z)) &&
        Math.abs(c - A) <= p * Math.max(1, Math.abs(c), Math.abs(A)) &&
        Math.abs(s - x) <= p * Math.max(1, Math.abs(s), Math.abs(x)) &&
        Math.abs(_ - L) <= p * Math.max(1, Math.abs(_), Math.abs(L)) &&
        Math.abs(f - E) <= p * Math.max(1, Math.abs(f), Math.abs(E)) &&
        Math.abs(l - T) <= p * Math.max(1, Math.abs(l), Math.abs(T)) &&
        Math.abs(d - O) <= p * Math.max(1, Math.abs(d), Math.abs(O)) &&
        Math.abs(h - C) <= p * Math.max(1, Math.abs(h), Math.abs(C)) &&
        Math.abs(m - S) <= p * Math.max(1, Math.abs(m), Math.abs(S)) &&
        Math.abs(b - I) <= p * Math.max(1, Math.abs(b), Math.abs(I)) &&
        Math.abs(y - P) <= p * Math.max(1, Math.abs(y), Math.abs(P))
      );
    }
    var Vt = it,
      qt = Bt;
    function Gt() {
      var e = new d(3);
      return d != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
    }
    function Nt(e) {
      var t = new d(3);
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
    }
    function Ut(e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return Math.hypot(t, n, r);
    }
    function Wt(e, t, n) {
      var r = new d(3);
      return (r[0] = e), (r[1] = t), (r[2] = n), r;
    }
    function Ht(e, t) {
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
    }
    function Zt(e, t, n, r) {
      return (e[0] = t), (e[1] = n), (e[2] = r), e;
    }
    function Yt(e, t, n) {
      return (
        (e[0] = t[0] + n[0]), (e[1] = t[1] + n[1]), (e[2] = t[2] + n[2]), e
      );
    }
    function Xt(e, t, n) {
      return (
        (e[0] = t[0] - n[0]), (e[1] = t[1] - n[1]), (e[2] = t[2] - n[2]), e
      );
    }
    function Kt(e, t, n) {
      return (
        (e[0] = t[0] * n[0]), (e[1] = t[1] * n[1]), (e[2] = t[2] * n[2]), e
      );
    }
    function Jt(e, t, n) {
      return (
        (e[0] = t[0] / n[0]), (e[1] = t[1] / n[1]), (e[2] = t[2] / n[2]), e
      );
    }
    function Qt(e, t) {
      return (
        (e[0] = Math.ceil(t[0])),
        (e[1] = Math.ceil(t[1])),
        (e[2] = Math.ceil(t[2])),
        e
      );
    }
    function $t(e, t) {
      return (
        (e[0] = Math.floor(t[0])),
        (e[1] = Math.floor(t[1])),
        (e[2] = Math.floor(t[2])),
        e
      );
    }
    function en(e, t, n) {
      return (
        (e[0] = Math.min(t[0], n[0])),
        (e[1] = Math.min(t[1], n[1])),
        (e[2] = Math.min(t[2], n[2])),
        e
      );
    }
    function tn(e, t, n) {
      return (
        (e[0] = Math.max(t[0], n[0])),
        (e[1] = Math.max(t[1], n[1])),
        (e[2] = Math.max(t[2], n[2])),
        e
      );
    }
    function nn(e, t) {
      return (
        (e[0] = Math.round(t[0])),
        (e[1] = Math.round(t[1])),
        (e[2] = Math.round(t[2])),
        e
      );
    }
    function rn(e, t, n) {
      return (e[0] = t[0] * n), (e[1] = t[1] * n), (e[2] = t[2] * n), e;
    }
    function an(e, t, n, r) {
      return (
        (e[0] = t[0] + n[0] * r),
        (e[1] = t[1] + n[1] * r),
        (e[2] = t[2] + n[2] * r),
        e
      );
    }
    function on(e, t) {
      var n = t[0] - e[0],
        r = t[1] - e[1],
        a = t[2] - e[2];
      return Math.hypot(n, r, a);
    }
    function un(e, t) {
      var n = t[0] - e[0],
        r = t[1] - e[1],
        a = t[2] - e[2];
      return n * n + r * r + a * a;
    }
    function cn(e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      return t * t + n * n + r * r;
    }
    function sn(e, t) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), e;
    }
    function _n(e, t) {
      return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), (e[2] = 1 / t[2]), e;
    }
    function fn(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = n * n + r * r + a * a;
      return (
        i > 0 && (i = 1 / Math.sqrt(i)),
        (e[0] = t[0] * i),
        (e[1] = t[1] * i),
        (e[2] = t[2] * i),
        e
      );
    }
    function ln(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }
    function pn(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = n[0],
        u = n[1],
        c = n[2];
      return (
        (e[0] = a * c - i * u),
        (e[1] = i * o - r * c),
        (e[2] = r * u - a * o),
        e
      );
    }
    function dn(e, t, n, r) {
      var a = t[0],
        i = t[1],
        o = t[2];
      return (
        (e[0] = a + r * (n[0] - a)),
        (e[1] = i + r * (n[1] - i)),
        (e[2] = o + r * (n[2] - o)),
        e
      );
    }
    function hn(e, t, n, r, a, i) {
      var o = i * i,
        u = o * (2 * i - 3) + 1,
        c = o * (i - 2) + i,
        s = o * (i - 1),
        _ = o * (3 - 2 * i);
      return (
        (e[0] = t[0] * u + n[0] * c + r[0] * s + a[0] * _),
        (e[1] = t[1] * u + n[1] * c + r[1] * s + a[1] * _),
        (e[2] = t[2] * u + n[2] * c + r[2] * s + a[2] * _),
        e
      );
    }
    function mn(e, t, n, r, a, i) {
      var o = 1 - i,
        u = o * o,
        c = i * i,
        s = u * o,
        _ = 3 * i * u,
        f = 3 * c * o,
        l = c * i;
      return (
        (e[0] = t[0] * s + n[0] * _ + r[0] * f + a[0] * l),
        (e[1] = t[1] * s + n[1] * _ + r[1] * f + a[1] * l),
        (e[2] = t[2] * s + n[2] * _ + r[2] * f + a[2] * l),
        e
      );
    }
    function bn(e, t) {
      t = t || 1;
      var n = 2 * h() * Math.PI,
        r = 2 * h() - 1,
        a = Math.sqrt(1 - r * r) * t;
      return (
        (e[0] = Math.cos(n) * a), (e[1] = Math.sin(n) * a), (e[2] = r * t), e
      );
    }
    function yn(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = n[3] * r + n[7] * a + n[11] * i + n[15];
      return (
        (o = o || 1),
        (e[0] = (n[0] * r + n[4] * a + n[8] * i + n[12]) / o),
        (e[1] = (n[1] * r + n[5] * a + n[9] * i + n[13]) / o),
        (e[2] = (n[2] * r + n[6] * a + n[10] * i + n[14]) / o),
        e
      );
    }
    function vn(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2];
      return (
        (e[0] = r * n[0] + a * n[3] + i * n[6]),
        (e[1] = r * n[1] + a * n[4] + i * n[7]),
        (e[2] = r * n[2] + a * n[5] + i * n[8]),
        e
      );
    }
    function gn(e, t, n) {
      var r = n[0],
        a = n[1],
        i = n[2],
        o = n[3],
        u = t[0],
        c = t[1],
        s = t[2],
        _ = a * s - i * c,
        f = i * u - r * s,
        l = r * c - a * u,
        p = a * l - i * f,
        d = i * _ - r * l,
        h = r * f - a * _,
        m = 2 * o;
      return (
        (_ *= m),
        (f *= m),
        (l *= m),
        (p *= 2),
        (d *= 2),
        (h *= 2),
        (e[0] = u + _ + p),
        (e[1] = c + f + d),
        (e[2] = s + l + h),
        e
      );
    }
    function wn(e, t, n, r) {
      var a = [],
        i = [];
      return (
        (a[0] = t[0] - n[0]),
        (a[1] = t[1] - n[1]),
        (a[2] = t[2] - n[2]),
        (i[0] = a[0]),
        (i[1] = a[1] * Math.cos(r) - a[2] * Math.sin(r)),
        (i[2] = a[1] * Math.sin(r) + a[2] * Math.cos(r)),
        (e[0] = i[0] + n[0]),
        (e[1] = i[1] + n[1]),
        (e[2] = i[2] + n[2]),
        e
      );
    }
    function Mn(e, t, n, r) {
      var a = [],
        i = [];
      return (
        (a[0] = t[0] - n[0]),
        (a[1] = t[1] - n[1]),
        (a[2] = t[2] - n[2]),
        (i[0] = a[2] * Math.sin(r) + a[0] * Math.cos(r)),
        (i[1] = a[1]),
        (i[2] = a[2] * Math.cos(r) - a[0] * Math.sin(r)),
        (e[0] = i[0] + n[0]),
        (e[1] = i[1] + n[1]),
        (e[2] = i[2] + n[2]),
        e
      );
    }
    function kn(e, t, n, r) {
      var a = [],
        i = [];
      return (
        (a[0] = t[0] - n[0]),
        (a[1] = t[1] - n[1]),
        (a[2] = t[2] - n[2]),
        (i[0] = a[0] * Math.cos(r) - a[1] * Math.sin(r)),
        (i[1] = a[0] * Math.sin(r) + a[1] * Math.cos(r)),
        (i[2] = a[2]),
        (e[0] = i[0] + n[0]),
        (e[1] = i[1] + n[1]),
        (e[2] = i[2] + n[2]),
        e
      );
    }
    function zn(e, t) {
      var n = Wt(e[0], e[1], e[2]),
        r = Wt(t[0], t[1], t[2]);
      fn(n, n), fn(r, r);
      var a = ln(n, r);
      return a > 1 ? 0 : a < -1 ? Math.PI : Math.acos(a);
    }
    function An(e) {
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), e;
    }
    function xn(e) {
      return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
    }
    function Ln(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
    }
    function En(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = t[0],
        o = t[1],
        u = t[2];
      return (
        Math.abs(n - i) <= p * Math.max(1, Math.abs(n), Math.abs(i)) &&
        Math.abs(r - o) <= p * Math.max(1, Math.abs(r), Math.abs(o)) &&
        Math.abs(a - u) <= p * Math.max(1, Math.abs(a), Math.abs(u))
      );
    }
    var Tn,
      On = Xt,
      Cn = Kt,
      Sn = Jt,
      In = on,
      Pn = un,
      Bn = Ut,
      Fn = cn,
      Dn =
        ((Tn = Gt()),
        function (e, t, n, r, a, i) {
          var o, u;
          for (
            t || (t = 3),
              n || (n = 0),
              u = r ? Math.min(r * t + n, e.length) : e.length,
              o = n;
            o < u;
            o += t
          )
            (Tn[0] = e[o]),
              (Tn[1] = e[o + 1]),
              (Tn[2] = e[o + 2]),
              a(Tn, Tn, i),
              (e[o] = Tn[0]),
              (e[o + 1] = Tn[1]),
              (e[o + 2] = Tn[2]);
          return e;
        });
    function jn() {
      var e = new d(4);
      return (
        d != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0)), e
      );
    }
    function Rn(e) {
      var t = new d(4);
      return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
    }
    function Vn(e, t, n, r) {
      var a = new d(4);
      return (a[0] = e), (a[1] = t), (a[2] = n), (a[3] = r), a;
    }
    function qn(e, t) {
      return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
    }
    function Gn(e, t, n, r, a) {
      return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = a), e;
    }
    function Nn(e, t, n) {
      return (
        (e[0] = t[0] + n[0]),
        (e[1] = t[1] + n[1]),
        (e[2] = t[2] + n[2]),
        (e[3] = t[3] + n[3]),
        e
      );
    }
    function Un(e, t, n) {
      return (
        (e[0] = t[0] - n[0]),
        (e[1] = t[1] - n[1]),
        (e[2] = t[2] - n[2]),
        (e[3] = t[3] - n[3]),
        e
      );
    }
    function Wn(e, t, n) {
      return (
        (e[0] = t[0] * n[0]),
        (e[1] = t[1] * n[1]),
        (e[2] = t[2] * n[2]),
        (e[3] = t[3] * n[3]),
        e
      );
    }
    function Hn(e, t, n) {
      return (
        (e[0] = t[0] / n[0]),
        (e[1] = t[1] / n[1]),
        (e[2] = t[2] / n[2]),
        (e[3] = t[3] / n[3]),
        e
      );
    }
    function Zn(e, t) {
      return (
        (e[0] = Math.ceil(t[0])),
        (e[1] = Math.ceil(t[1])),
        (e[2] = Math.ceil(t[2])),
        (e[3] = Math.ceil(t[3])),
        e
      );
    }
    function Yn(e, t) {
      return (
        (e[0] = Math.floor(t[0])),
        (e[1] = Math.floor(t[1])),
        (e[2] = Math.floor(t[2])),
        (e[3] = Math.floor(t[3])),
        e
      );
    }
    function Xn(e, t, n) {
      return (
        (e[0] = Math.min(t[0], n[0])),
        (e[1] = Math.min(t[1], n[1])),
        (e[2] = Math.min(t[2], n[2])),
        (e[3] = Math.min(t[3], n[3])),
        e
      );
    }
    function Kn(e, t, n) {
      return (
        (e[0] = Math.max(t[0], n[0])),
        (e[1] = Math.max(t[1], n[1])),
        (e[2] = Math.max(t[2], n[2])),
        (e[3] = Math.max(t[3], n[3])),
        e
      );
    }
    function Jn(e, t) {
      return (
        (e[0] = Math.round(t[0])),
        (e[1] = Math.round(t[1])),
        (e[2] = Math.round(t[2])),
        (e[3] = Math.round(t[3])),
        e
      );
    }
    function Qn(e, t, n) {
      return (
        (e[0] = t[0] * n),
        (e[1] = t[1] * n),
        (e[2] = t[2] * n),
        (e[3] = t[3] * n),
        e
      );
    }
    function $n(e, t, n, r) {
      return (
        (e[0] = t[0] + n[0] * r),
        (e[1] = t[1] + n[1] * r),
        (e[2] = t[2] + n[2] * r),
        (e[3] = t[3] + n[3] * r),
        e
      );
    }
    function er(e, t) {
      var n = t[0] - e[0],
        r = t[1] - e[1],
        a = t[2] - e[2],
        i = t[3] - e[3];
      return Math.hypot(n, r, a, i);
    }
    function tr(e, t) {
      var n = t[0] - e[0],
        r = t[1] - e[1],
        a = t[2] - e[2],
        i = t[3] - e[3];
      return n * n + r * r + a * a + i * i;
    }
    function nr(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        a = e[3];
      return Math.hypot(t, n, r, a);
    }
    function rr(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        a = e[3];
      return t * t + n * n + r * r + a * a;
    }
    function ar(e, t) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e;
    }
    function ir(e, t) {
      return (
        (e[0] = 1 / t[0]),
        (e[1] = 1 / t[1]),
        (e[2] = 1 / t[2]),
        (e[3] = 1 / t[3]),
        e
      );
    }
    function or(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = n * n + r * r + a * a + i * i;
      return (
        o > 0 && (o = 1 / Math.sqrt(o)),
        (e[0] = n * o),
        (e[1] = r * o),
        (e[2] = a * o),
        (e[3] = i * o),
        e
      );
    }
    function ur(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
    }
    function cr(e, t, n, r) {
      var a = n[0] * r[1] - n[1] * r[0],
        i = n[0] * r[2] - n[2] * r[0],
        o = n[0] * r[3] - n[3] * r[0],
        u = n[1] * r[2] - n[2] * r[1],
        c = n[1] * r[3] - n[3] * r[1],
        s = n[2] * r[3] - n[3] * r[2],
        _ = t[0],
        f = t[1],
        l = t[2],
        p = t[3];
      return (
        (e[0] = f * s - l * c + p * u),
        (e[1] = -_ * s + l * o - p * i),
        (e[2] = _ * c - f * o + p * a),
        (e[3] = -_ * u + f * i - l * a),
        e
      );
    }
    function sr(e, t, n, r) {
      var a = t[0],
        i = t[1],
        o = t[2],
        u = t[3];
      return (
        (e[0] = a + r * (n[0] - a)),
        (e[1] = i + r * (n[1] - i)),
        (e[2] = o + r * (n[2] - o)),
        (e[3] = u + r * (n[3] - u)),
        e
      );
    }
    function _r(e, t) {
      var n, r, a, i, o, u;
      t = t || 1;
      do {
        o = (n = 2 * h() - 1) * n + (r = 2 * h() - 1) * r;
      } while (o >= 1);
      do {
        u = (a = 2 * h() - 1) * a + (i = 2 * h() - 1) * i;
      } while (u >= 1);
      var c = Math.sqrt((1 - o) / u);
      return (
        (e[0] = t * n),
        (e[1] = t * r),
        (e[2] = t * a * c),
        (e[3] = t * i * c),
        e
      );
    }
    function fr(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3];
      return (
        (e[0] = n[0] * r + n[4] * a + n[8] * i + n[12] * o),
        (e[1] = n[1] * r + n[5] * a + n[9] * i + n[13] * o),
        (e[2] = n[2] * r + n[6] * a + n[10] * i + n[14] * o),
        (e[3] = n[3] * r + n[7] * a + n[11] * i + n[15] * o),
        e
      );
    }
    function lr(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = n[0],
        u = n[1],
        c = n[2],
        s = n[3],
        _ = s * r + u * i - c * a,
        f = s * a + c * r - o * i,
        l = s * i + o * a - u * r,
        p = -o * r - u * a - c * i;
      return (
        (e[0] = _ * s + p * -o + f * -c - l * -u),
        (e[1] = f * s + p * -u + l * -o - _ * -c),
        (e[2] = l * s + p * -c + _ * -u - f * -o),
        (e[3] = t[3]),
        e
      );
    }
    function pr(e) {
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0), e;
    }
    function dr(e) {
      return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
    }
    function hr(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
    }
    function mr(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = e[3],
        o = t[0],
        u = t[1],
        c = t[2],
        s = t[3];
      return (
        Math.abs(n - o) <= p * Math.max(1, Math.abs(n), Math.abs(o)) &&
        Math.abs(r - u) <= p * Math.max(1, Math.abs(r), Math.abs(u)) &&
        Math.abs(a - c) <= p * Math.max(1, Math.abs(a), Math.abs(c)) &&
        Math.abs(i - s) <= p * Math.max(1, Math.abs(i), Math.abs(s))
      );
    }
    var br = Un,
      yr = Wn,
      vr = Hn,
      gr = er,
      wr = tr,
      Mr = nr,
      kr = rr,
      zr = (function () {
        var e = jn();
        return function (t, n, r, a, i, o) {
          var u, c;
          for (
            n || (n = 4),
              r || (r = 0),
              c = a ? Math.min(a * n + r, t.length) : t.length,
              u = r;
            u < c;
            u += n
          )
            (e[0] = t[u]),
              (e[1] = t[u + 1]),
              (e[2] = t[u + 2]),
              (e[3] = t[u + 3]),
              i(e, e, o),
              (t[u] = e[0]),
              (t[u + 1] = e[1]),
              (t[u + 2] = e[2]),
              (t[u + 3] = e[3]);
          return t;
        };
      })();
    function Ar() {
      var e = new d(4);
      return (
        d != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), (e[3] = 1), e
      );
    }
    function xr(e) {
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
    }
    function Lr(e, t, n) {
      n *= 0.5;
      var r = Math.sin(n);
      return (
        (e[0] = r * t[0]),
        (e[1] = r * t[1]),
        (e[2] = r * t[2]),
        (e[3] = Math.cos(n)),
        e
      );
    }
    function Er(e, t) {
      var n = 2 * Math.acos(t[3]),
        r = Math.sin(n / 2);
      return (
        r > p
          ? ((e[0] = t[0] / r), (e[1] = t[1] / r), (e[2] = t[2] / r))
          : ((e[0] = 1), (e[1] = 0), (e[2] = 0)),
        n
      );
    }
    function Tr(e, t) {
      var n = aa(e, t);
      return Math.acos(2 * n * n - 1);
    }
    function Or(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = n[0],
        c = n[1],
        s = n[2],
        _ = n[3];
      return (
        (e[0] = r * _ + o * u + a * s - i * c),
        (e[1] = a * _ + o * c + i * u - r * s),
        (e[2] = i * _ + o * s + r * c - a * u),
        (e[3] = o * _ - r * u - a * c - i * s),
        e
      );
    }
    function Cr(e, t, n) {
      n *= 0.5;
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = Math.sin(n),
        c = Math.cos(n);
      return (
        (e[0] = r * c + o * u),
        (e[1] = a * c + i * u),
        (e[2] = i * c - a * u),
        (e[3] = o * c - r * u),
        e
      );
    }
    function Sr(e, t, n) {
      n *= 0.5;
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = Math.sin(n),
        c = Math.cos(n);
      return (
        (e[0] = r * c - i * u),
        (e[1] = a * c + o * u),
        (e[2] = i * c + r * u),
        (e[3] = o * c - a * u),
        e
      );
    }
    function Ir(e, t, n) {
      n *= 0.5;
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = Math.sin(n),
        c = Math.cos(n);
      return (
        (e[0] = r * c + a * u),
        (e[1] = a * c - r * u),
        (e[2] = i * c + o * u),
        (e[3] = o * c - i * u),
        e
      );
    }
    function Pr(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2];
      return (
        (e[0] = n),
        (e[1] = r),
        (e[2] = a),
        (e[3] = Math.sqrt(Math.abs(1 - n * n - r * r - a * a))),
        e
      );
    }
    function Br(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = Math.sqrt(n * n + r * r + a * a),
        u = Math.exp(i),
        c = o > 0 ? (u * Math.sin(o)) / o : 0;
      return (
        (e[0] = n * c),
        (e[1] = r * c),
        (e[2] = a * c),
        (e[3] = u * Math.cos(o)),
        e
      );
    }
    function Fr(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = Math.sqrt(n * n + r * r + a * a),
        u = o > 0 ? Math.atan2(o, i) / o : 0;
      return (
        (e[0] = n * u),
        (e[1] = r * u),
        (e[2] = a * u),
        (e[3] = 0.5 * Math.log(n * n + r * r + a * a + i * i)),
        e
      );
    }
    function Dr(e, t, n) {
      return Fr(e, t), ra(e, e, n), Br(e, e), e;
    }
    function jr(e, t, n, r) {
      var a,
        i,
        o,
        u,
        c,
        s = t[0],
        _ = t[1],
        f = t[2],
        l = t[3],
        d = n[0],
        h = n[1],
        m = n[2],
        b = n[3];
      return (
        (i = s * d + _ * h + f * m + l * b) < 0 &&
          ((i = -i), (d = -d), (h = -h), (m = -m), (b = -b)),
        1 - i > p
          ? ((a = Math.acos(i)),
            (o = Math.sin(a)),
            (u = Math.sin((1 - r) * a) / o),
            (c = Math.sin(r * a) / o))
          : ((u = 1 - r), (c = r)),
        (e[0] = u * s + c * d),
        (e[1] = u * _ + c * h),
        (e[2] = u * f + c * m),
        (e[3] = u * l + c * b),
        e
      );
    }
    function Rr(e) {
      var t = h(),
        n = h(),
        r = h(),
        a = Math.sqrt(1 - t),
        i = Math.sqrt(t);
      return (
        (e[0] = a * Math.sin(2 * Math.PI * n)),
        (e[1] = a * Math.cos(2 * Math.PI * n)),
        (e[2] = i * Math.sin(2 * Math.PI * r)),
        (e[3] = i * Math.cos(2 * Math.PI * r)),
        e
      );
    }
    function Vr(e, t) {
      var n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        o = n * n + r * r + a * a + i * i,
        u = o ? 1 / o : 0;
      return (
        (e[0] = -n * u), (e[1] = -r * u), (e[2] = -a * u), (e[3] = i * u), e
      );
    }
    function qr(e, t) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
    }
    function Gr(e, t) {
      var n,
        r = t[0] + t[4] + t[8];
      if (r > 0)
        (n = Math.sqrt(r + 1)),
          (e[3] = 0.5 * n),
          (n = 0.5 / n),
          (e[0] = (t[5] - t[7]) * n),
          (e[1] = (t[6] - t[2]) * n),
          (e[2] = (t[1] - t[3]) * n);
      else {
        var a = 0;
        t[4] > t[0] && (a = 1), t[8] > t[3 * a + a] && (a = 2);
        var i = (a + 1) % 3,
          o = (a + 2) % 3;
        (n = Math.sqrt(t[3 * a + a] - t[3 * i + i] - t[3 * o + o] + 1)),
          (e[a] = 0.5 * n),
          (n = 0.5 / n),
          (e[3] = (t[3 * i + o] - t[3 * o + i]) * n),
          (e[i] = (t[3 * i + a] + t[3 * a + i]) * n),
          (e[o] = (t[3 * o + a] + t[3 * a + o]) * n);
      }
      return e;
    }
    function Nr(e, t, n, r) {
      var a = (0.5 * Math.PI) / 180;
      (t *= a), (n *= a), (r *= a);
      var i = Math.sin(t),
        o = Math.cos(t),
        u = Math.sin(n),
        c = Math.cos(n),
        s = Math.sin(r),
        _ = Math.cos(r);
      return (
        (e[0] = i * c * _ - o * u * s),
        (e[1] = o * u * _ + i * c * s),
        (e[2] = o * c * s - i * u * _),
        (e[3] = o * c * _ + i * u * s),
        e
      );
    }
    function Ur(e) {
      return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
    }
    var Wr,
      Hr,
      Zr,
      Yr,
      Xr,
      Kr,
      Jr = Rn,
      Qr = Vn,
      $r = qn,
      ea = Gn,
      ta = Nn,
      na = Or,
      ra = Qn,
      aa = ur,
      ia = sr,
      oa = nr,
      ua = oa,
      ca = rr,
      sa = ca,
      _a = or,
      fa = hr,
      la = mr,
      pa =
        ((Wr = Gt()),
        (Hr = Wt(1, 0, 0)),
        (Zr = Wt(0, 1, 0)),
        function (e, t, n) {
          var r = ln(t, n);
          return r < -0.999999
            ? (pn(Wr, Hr, t),
              Bn(Wr) < 1e-6 && pn(Wr, Zr, t),
              fn(Wr, Wr),
              Lr(e, Wr, Math.PI),
              e)
            : r > 0.999999
            ? ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e)
            : (pn(Wr, t, n),
              (e[0] = Wr[0]),
              (e[1] = Wr[1]),
              (e[2] = Wr[2]),
              (e[3] = 1 + r),
              _a(e, e));
        }),
      da =
        ((Yr = Ar()),
        (Xr = Ar()),
        function (e, t, n, r, a, i) {
          return (
            jr(Yr, t, a, i), jr(Xr, n, r, i), jr(e, Yr, Xr, 2 * i * (1 - i)), e
          );
        }),
      ha =
        ((Kr = be()),
        function (e, t, n, r) {
          return (
            (Kr[0] = n[0]),
            (Kr[3] = n[1]),
            (Kr[6] = n[2]),
            (Kr[1] = r[0]),
            (Kr[4] = r[1]),
            (Kr[7] = r[2]),
            (Kr[2] = -t[0]),
            (Kr[5] = -t[1]),
            (Kr[8] = -t[2]),
            _a(e, Gr(e, Kr))
          );
        });
    function ma() {
      var e = new d(8);
      return (
        d != Float32Array &&
          ((e[0] = 0),
          (e[1] = 0),
          (e[2] = 0),
          (e[4] = 0),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0)),
        (e[3] = 1),
        e
      );
    }
    function ba(e) {
      var t = new d(8);
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        t
      );
    }
    function ya(e, t, n, r, a, i, o, u) {
      var c = new d(8);
      return (
        (c[0] = e),
        (c[1] = t),
        (c[2] = n),
        (c[3] = r),
        (c[4] = a),
        (c[5] = i),
        (c[6] = o),
        (c[7] = u),
        c
      );
    }
    function va(e, t, n, r, a, i, o) {
      var u = new d(8);
      (u[0] = e), (u[1] = t), (u[2] = n), (u[3] = r);
      var c = 0.5 * a,
        s = 0.5 * i,
        _ = 0.5 * o;
      return (
        (u[4] = c * r + s * n - _ * t),
        (u[5] = s * r + _ * e - c * n),
        (u[6] = _ * r + c * t - s * e),
        (u[7] = -c * e - s * t - _ * n),
        u
      );
    }
    function ga(e, t, n) {
      var r = 0.5 * n[0],
        a = 0.5 * n[1],
        i = 0.5 * n[2],
        o = t[0],
        u = t[1],
        c = t[2],
        s = t[3];
      return (
        (e[0] = o),
        (e[1] = u),
        (e[2] = c),
        (e[3] = s),
        (e[4] = r * s + a * c - i * u),
        (e[5] = a * s + i * o - r * c),
        (e[6] = i * s + r * u - a * o),
        (e[7] = -r * o - a * u - i * c),
        e
      );
    }
    function wa(e, t) {
      return (
        (e[0] = 0),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = 0.5 * t[0]),
        (e[5] = 0.5 * t[1]),
        (e[6] = 0.5 * t[2]),
        (e[7] = 0),
        e
      );
    }
    function Ma(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = 0),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        e
      );
    }
    function ka(e, t) {
      var n = Ar();
      Mt(n, t);
      var r = new d(3);
      return gt(r, t), ga(e, n, r), e;
    }
    function za(e, t) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        e
      );
    }
    function Aa(e) {
      return (
        (e[0] = 0),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = 0),
        (e[5] = 0),
        (e[6] = 0),
        (e[7] = 0),
        e
      );
    }
    function xa(e, t, n, r, a, i, o, u, c) {
      return (
        (e[0] = t),
        (e[1] = n),
        (e[2] = r),
        (e[3] = a),
        (e[4] = i),
        (e[5] = o),
        (e[6] = u),
        (e[7] = c),
        e
      );
    }
    var La = $r;
    function Ea(e, t) {
      return (e[0] = t[4]), (e[1] = t[5]), (e[2] = t[6]), (e[3] = t[7]), e;
    }
    var Ta = $r;
    function Oa(e, t) {
      return (e[4] = t[0]), (e[5] = t[1]), (e[6] = t[2]), (e[7] = t[3]), e;
    }
    function Ca(e, t) {
      var n = t[4],
        r = t[5],
        a = t[6],
        i = t[7],
        o = -t[0],
        u = -t[1],
        c = -t[2],
        s = t[3];
      return (
        (e[0] = 2 * (n * s + i * o + r * c - a * u)),
        (e[1] = 2 * (r * s + i * u + a * o - n * c)),
        (e[2] = 2 * (a * s + i * c + n * u - r * o)),
        e
      );
    }
    function Sa(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = 0.5 * n[0],
        c = 0.5 * n[1],
        s = 0.5 * n[2],
        _ = t[4],
        f = t[5],
        l = t[6],
        p = t[7];
      return (
        (e[0] = r),
        (e[1] = a),
        (e[2] = i),
        (e[3] = o),
        (e[4] = o * u + a * s - i * c + _),
        (e[5] = o * c + i * u - r * s + f),
        (e[6] = o * s + r * c - a * u + l),
        (e[7] = -r * u - a * c - i * s + p),
        e
      );
    }
    function Ia(e, t, n) {
      var r = -t[0],
        a = -t[1],
        i = -t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = u * o + _ * r + c * i - s * a,
        l = c * o + _ * a + s * r - u * i,
        p = s * o + _ * i + u * a - c * r,
        d = _ * o - u * r - c * a - s * i;
      return (
        Cr(e, t, n),
        (r = e[0]),
        (a = e[1]),
        (i = e[2]),
        (o = e[3]),
        (e[4] = f * o + d * r + l * i - p * a),
        (e[5] = l * o + d * a + p * r - f * i),
        (e[6] = p * o + d * i + f * a - l * r),
        (e[7] = d * o - f * r - l * a - p * i),
        e
      );
    }
    function Pa(e, t, n) {
      var r = -t[0],
        a = -t[1],
        i = -t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = u * o + _ * r + c * i - s * a,
        l = c * o + _ * a + s * r - u * i,
        p = s * o + _ * i + u * a - c * r,
        d = _ * o - u * r - c * a - s * i;
      return (
        Sr(e, t, n),
        (r = e[0]),
        (a = e[1]),
        (i = e[2]),
        (o = e[3]),
        (e[4] = f * o + d * r + l * i - p * a),
        (e[5] = l * o + d * a + p * r - f * i),
        (e[6] = p * o + d * i + f * a - l * r),
        (e[7] = d * o - f * r - l * a - p * i),
        e
      );
    }
    function Ba(e, t, n) {
      var r = -t[0],
        a = -t[1],
        i = -t[2],
        o = t[3],
        u = t[4],
        c = t[5],
        s = t[6],
        _ = t[7],
        f = u * o + _ * r + c * i - s * a,
        l = c * o + _ * a + s * r - u * i,
        p = s * o + _ * i + u * a - c * r,
        d = _ * o - u * r - c * a - s * i;
      return (
        Ir(e, t, n),
        (r = e[0]),
        (a = e[1]),
        (i = e[2]),
        (o = e[3]),
        (e[4] = f * o + d * r + l * i - p * a),
        (e[5] = l * o + d * a + p * r - f * i),
        (e[6] = p * o + d * i + f * a - l * r),
        (e[7] = d * o - f * r - l * a - p * i),
        e
      );
    }
    function Fa(e, t, n) {
      var r = n[0],
        a = n[1],
        i = n[2],
        o = n[3],
        u = t[0],
        c = t[1],
        s = t[2],
        _ = t[3];
      return (
        (e[0] = u * o + _ * r + c * i - s * a),
        (e[1] = c * o + _ * a + s * r - u * i),
        (e[2] = s * o + _ * i + u * a - c * r),
        (e[3] = _ * o - u * r - c * a - s * i),
        (u = t[4]),
        (c = t[5]),
        (s = t[6]),
        (_ = t[7]),
        (e[4] = u * o + _ * r + c * i - s * a),
        (e[5] = c * o + _ * a + s * r - u * i),
        (e[6] = s * o + _ * i + u * a - c * r),
        (e[7] = _ * o - u * r - c * a - s * i),
        e
      );
    }
    function Da(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = n[0],
        c = n[1],
        s = n[2],
        _ = n[3];
      return (
        (e[0] = r * _ + o * u + a * s - i * c),
        (e[1] = a * _ + o * c + i * u - r * s),
        (e[2] = i * _ + o * s + r * c - a * u),
        (e[3] = o * _ - r * u - a * c - i * s),
        (u = n[4]),
        (c = n[5]),
        (s = n[6]),
        (_ = n[7]),
        (e[4] = r * _ + o * u + a * s - i * c),
        (e[5] = a * _ + o * c + i * u - r * s),
        (e[6] = i * _ + o * s + r * c - a * u),
        (e[7] = o * _ - r * u - a * c - i * s),
        e
      );
    }
    function ja(e, t, n, r) {
      if (Math.abs(r) < p) return za(e, t);
      var a = Math.hypot(n[0], n[1], n[2]);
      r *= 0.5;
      var i = Math.sin(r),
        o = (i * n[0]) / a,
        u = (i * n[1]) / a,
        c = (i * n[2]) / a,
        s = Math.cos(r),
        _ = t[0],
        f = t[1],
        l = t[2],
        d = t[3];
      (e[0] = _ * s + d * o + f * c - l * u),
        (e[1] = f * s + d * u + l * o - _ * c),
        (e[2] = l * s + d * c + _ * u - f * o),
        (e[3] = d * s - _ * o - f * u - l * c);
      var h = t[4],
        m = t[5],
        b = t[6],
        y = t[7];
      return (
        (e[4] = h * s + y * o + m * c - b * u),
        (e[5] = m * s + y * u + b * o - h * c),
        (e[6] = b * s + y * c + h * u - m * o),
        (e[7] = y * s - h * o - m * u - b * c),
        e
      );
    }
    function Ra(e, t, n) {
      return (
        (e[0] = t[0] + n[0]),
        (e[1] = t[1] + n[1]),
        (e[2] = t[2] + n[2]),
        (e[3] = t[3] + n[3]),
        (e[4] = t[4] + n[4]),
        (e[5] = t[5] + n[5]),
        (e[6] = t[6] + n[6]),
        (e[7] = t[7] + n[7]),
        e
      );
    }
    function Va(e, t, n) {
      var r = t[0],
        a = t[1],
        i = t[2],
        o = t[3],
        u = n[4],
        c = n[5],
        s = n[6],
        _ = n[7],
        f = t[4],
        l = t[5],
        p = t[6],
        d = t[7],
        h = n[0],
        m = n[1],
        b = n[2],
        y = n[3];
      return (
        (e[0] = r * y + o * h + a * b - i * m),
        (e[1] = a * y + o * m + i * h - r * b),
        (e[2] = i * y + o * b + r * m - a * h),
        (e[3] = o * y - r * h - a * m - i * b),
        (e[4] = r * _ + o * u + a * s - i * c + f * y + d * h + l * b - p * m),
        (e[5] = a * _ + o * c + i * u - r * s + l * y + d * m + p * h - f * b),
        (e[6] = i * _ + o * s + r * c - a * u + p * y + d * b + f * m - l * h),
        (e[7] = o * _ - r * u - a * c - i * s + d * y - f * h - l * m - p * b),
        e
      );
    }
    var qa = Va;
    function Ga(e, t, n) {
      return (
        (e[0] = t[0] * n),
        (e[1] = t[1] * n),
        (e[2] = t[2] * n),
        (e[3] = t[3] * n),
        (e[4] = t[4] * n),
        (e[5] = t[5] * n),
        (e[6] = t[6] * n),
        (e[7] = t[7] * n),
        e
      );
    }
    var Na = aa;
    function Ua(e, t, n, r) {
      var a = 1 - r;
      return (
        Na(t, n) < 0 && (r = -r),
        (e[0] = t[0] * a + n[0] * r),
        (e[1] = t[1] * a + n[1] * r),
        (e[2] = t[2] * a + n[2] * r),
        (e[3] = t[3] * a + n[3] * r),
        (e[4] = t[4] * a + n[4] * r),
        (e[5] = t[5] * a + n[5] * r),
        (e[6] = t[6] * a + n[6] * r),
        (e[7] = t[7] * a + n[7] * r),
        e
      );
    }
    function Wa(e, t) {
      var n = Xa(t);
      return (
        (e[0] = -t[0] / n),
        (e[1] = -t[1] / n),
        (e[2] = -t[2] / n),
        (e[3] = t[3] / n),
        (e[4] = -t[4] / n),
        (e[5] = -t[5] / n),
        (e[6] = -t[6] / n),
        (e[7] = t[7] / n),
        e
      );
    }
    function Ha(e, t) {
      return (
        (e[0] = -t[0]),
        (e[1] = -t[1]),
        (e[2] = -t[2]),
        (e[3] = t[3]),
        (e[4] = -t[4]),
        (e[5] = -t[5]),
        (e[6] = -t[6]),
        (e[7] = t[7]),
        e
      );
    }
    var Za = oa,
      Ya = Za,
      Xa = ca,
      Ka = Xa;
    function Ja(e, t) {
      var n = Xa(t);
      if (n > 0) {
        n = Math.sqrt(n);
        var r = t[0] / n,
          a = t[1] / n,
          i = t[2] / n,
          o = t[3] / n,
          u = t[4],
          c = t[5],
          s = t[6],
          _ = t[7],
          f = r * u + a * c + i * s + o * _;
        (e[0] = r),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = (u - r * f) / n),
          (e[5] = (c - a * f) / n),
          (e[6] = (s - i * f) / n),
          (e[7] = (_ - o * f) / n);
      }
      return e;
    }
    function Qa(e) {
      return (
        "quat2(" +
        e[0] +
        ", " +
        e[1] +
        ", " +
        e[2] +
        ", " +
        e[3] +
        ", " +
        e[4] +
        ", " +
        e[5] +
        ", " +
        e[6] +
        ", " +
        e[7] +
        ")"
      );
    }
    function $a(e, t) {
      return (
        e[0] === t[0] &&
        e[1] === t[1] &&
        e[2] === t[2] &&
        e[3] === t[3] &&
        e[4] === t[4] &&
        e[5] === t[5] &&
        e[6] === t[6] &&
        e[7] === t[7]
      );
    }
    function ei(e, t) {
      var n = e[0],
        r = e[1],
        a = e[2],
        i = e[3],
        o = e[4],
        u = e[5],
        c = e[6],
        s = e[7],
        _ = t[0],
        f = t[1],
        l = t[2],
        d = t[3],
        h = t[4],
        m = t[5],
        b = t[6],
        y = t[7];
      return (
        Math.abs(n - _) <= p * Math.max(1, Math.abs(n), Math.abs(_)) &&
        Math.abs(r - f) <= p * Math.max(1, Math.abs(r), Math.abs(f)) &&
        Math.abs(a - l) <= p * Math.max(1, Math.abs(a), Math.abs(l)) &&
        Math.abs(i - d) <= p * Math.max(1, Math.abs(i), Math.abs(d)) &&
        Math.abs(o - h) <= p * Math.max(1, Math.abs(o), Math.abs(h)) &&
        Math.abs(u - m) <= p * Math.max(1, Math.abs(u), Math.abs(m)) &&
        Math.abs(c - b) <= p * Math.max(1, Math.abs(c), Math.abs(b)) &&
        Math.abs(s - y) <= p * Math.max(1, Math.abs(s), Math.abs(y))
      );
    }
    function ti() {
      var e = new d(2);
      return d != Float32Array && ((e[0] = 0), (e[1] = 0)), e;
    }
    function ni(e) {
      var t = new d(2);
      return (t[0] = e[0]), (t[1] = e[1]), t;
    }
    function ri(e, t) {
      var n = new d(2);
      return (n[0] = e), (n[1] = t), n;
    }
    function ai(e, t) {
      return (e[0] = t[0]), (e[1] = t[1]), e;
    }
    function ii(e, t, n) {
      return (e[0] = t), (e[1] = n), e;
    }
    function oi(e, t, n) {
      return (e[0] = t[0] + n[0]), (e[1] = t[1] + n[1]), e;
    }
    function ui(e, t, n) {
      return (e[0] = t[0] - n[0]), (e[1] = t[1] - n[1]), e;
    }
    function ci(e, t, n) {
      return (e[0] = t[0] * n[0]), (e[1] = t[1] * n[1]), e;
    }
    function si(e, t, n) {
      return (e[0] = t[0] / n[0]), (e[1] = t[1] / n[1]), e;
    }
    function _i(e, t) {
      return (e[0] = Math.ceil(t[0])), (e[1] = Math.ceil(t[1])), e;
    }
    function fi(e, t) {
      return (e[0] = Math.floor(t[0])), (e[1] = Math.floor(t[1])), e;
    }
    function li(e, t, n) {
      return (e[0] = Math.min(t[0], n[0])), (e[1] = Math.min(t[1], n[1])), e;
    }
    function pi(e, t, n) {
      return (e[0] = Math.max(t[0], n[0])), (e[1] = Math.max(t[1], n[1])), e;
    }
    function di(e, t) {
      return (e[0] = Math.round(t[0])), (e[1] = Math.round(t[1])), e;
    }
    function hi(e, t, n) {
      return (e[0] = t[0] * n), (e[1] = t[1] * n), e;
    }
    function mi(e, t, n, r) {
      return (e[0] = t[0] + n[0] * r), (e[1] = t[1] + n[1] * r), e;
    }
    function bi(e, t) {
      var n = t[0] - e[0],
        r = t[1] - e[1];
      return Math.hypot(n, r);
    }
    function yi(e, t) {
      var n = t[0] - e[0],
        r = t[1] - e[1];
      return n * n + r * r;
    }
    function vi(e) {
      var t = e[0],
        n = e[1];
      return Math.hypot(t, n);
    }
    function gi(e) {
      var t = e[0],
        n = e[1];
      return t * t + n * n;
    }
    function wi(e, t) {
      return (e[0] = -t[0]), (e[1] = -t[1]), e;
    }
    function Mi(e, t) {
      return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), e;
    }
    function ki(e, t) {
      var n = t[0],
        r = t[1],
        a = n * n + r * r;
      return (
        a > 0 && (a = 1 / Math.sqrt(a)), (e[0] = t[0] * a), (e[1] = t[1] * a), e
      );
    }
    function zi(e, t) {
      return e[0] * t[0] + e[1] * t[1];
    }
    function Ai(e, t, n) {
      var r = t[0] * n[1] - t[1] * n[0];
      return (e[0] = e[1] = 0), (e[2] = r), e;
    }
    function xi(e, t, n, r) {
      var a = t[0],
        i = t[1];
      return (e[0] = a + r * (n[0] - a)), (e[1] = i + r * (n[1] - i)), e;
    }
    function Li(e, t) {
      t = t || 1;
      var n = 2 * h() * Math.PI;
      return (e[0] = Math.cos(n) * t), (e[1] = Math.sin(n) * t), e;
    }
    function Ei(e, t, n) {
      var r = t[0],
        a = t[1];
      return (e[0] = n[0] * r + n[2] * a), (e[1] = n[1] * r + n[3] * a), e;
    }
    function Ti(e, t, n) {
      var r = t[0],
        a = t[1];
      return (
        (e[0] = n[0] * r + n[2] * a + n[4]),
        (e[1] = n[1] * r + n[3] * a + n[5]),
        e
      );
    }
    function Oi(e, t, n) {
      var r = t[0],
        a = t[1];
      return (
        (e[0] = n[0] * r + n[3] * a + n[6]),
        (e[1] = n[1] * r + n[4] * a + n[7]),
        e
      );
    }
    function Ci(e, t, n) {
      var r = t[0],
        a = t[1];
      return (
        (e[0] = n[0] * r + n[4] * a + n[12]),
        (e[1] = n[1] * r + n[5] * a + n[13]),
        e
      );
    }
    function Si(e, t, n, r) {
      var a = t[0] - n[0],
        i = t[1] - n[1],
        o = Math.sin(r),
        u = Math.cos(r);
      return (e[0] = a * u - i * o + n[0]), (e[1] = a * o + i * u + n[1]), e;
    }
    function Ii(e, t) {
      var n = e[0],
        r = e[1],
        a = t[0],
        i = t[1],
        o = n * n + r * r;
      o > 0 && (o = 1 / Math.sqrt(o));
      var u = a * a + i * i;
      u > 0 && (u = 1 / Math.sqrt(u));
      var c = (n * a + r * i) * o * u;
      return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c);
    }
    function Pi(e) {
      return (e[0] = 0), (e[1] = 0), e;
    }
    function Bi(e) {
      return "vec2(" + e[0] + ", " + e[1] + ")";
    }
    function Fi(e, t) {
      return e[0] === t[0] && e[1] === t[1];
    }
    function Di(e, t) {
      var n = e[0],
        r = e[1],
        a = t[0],
        i = t[1];
      return (
        Math.abs(n - a) <= p * Math.max(1, Math.abs(n), Math.abs(a)) &&
        Math.abs(r - i) <= p * Math.max(1, Math.abs(r), Math.abs(i))
      );
    }
    var ji = vi,
      Ri = ui,
      Vi = ci,
      qi = si,
      Gi = bi,
      Ni = yi,
      Ui = gi,
      Wi = (function () {
        var e = ti();
        return function (t, n, r, a, i, o) {
          var u, c;
          for (
            n || (n = 2),
              r || (r = 0),
              c = a ? Math.min(a * n + r, t.length) : t.length,
              u = r;
            u < c;
            u += n
          )
            (e[0] = t[u]),
              (e[1] = t[u + 1]),
              i(e, e, o),
              (t[u] = e[0]),
              (t[u + 1] = e[1]);
          return t;
        };
      })();
  },
]);
