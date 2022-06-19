clock = sinon.useFakeTimers(new Date(2021,9,1).getTime());
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ZCV = t())
    : (e.ZCV = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var a = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
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
      n((n.s = 14))
    );
  })([
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
          return s;
        }),
        n.d(t, "quat", function () {
          return f;
        }),
        n.d(t, "quat2", function () {
          return _;
        }),
        n.d(t, "vec2", function () {
          return l;
        }),
        n.d(t, "vec3", function () {
          return u;
        }),
        n.d(t, "vec4", function () {
          return c;
        });
      var r = {};
      n.r(r),
        n.d(r, "EPSILON", function () {
          return d;
        }),
        n.d(r, "ARRAY_TYPE", function () {
          return h;
        }),
        n.d(r, "RANDOM", function () {
          return p;
        }),
        n.d(r, "setMatrixArrayType", function () {
          return m;
        }),
        n.d(r, "toRadian", function () {
          return g;
        }),
        n.d(r, "equals", function () {
          return y;
        });
      var a = {};
      n.r(a),
        n.d(a, "create", function () {
          return v;
        }),
        n.d(a, "clone", function () {
          return w;
        }),
        n.d(a, "copy", function () {
          return M;
        }),
        n.d(a, "identity", function () {
          return x;
        }),
        n.d(a, "fromValues", function () {
          return E;
        }),
        n.d(a, "set", function () {
          return A;
        }),
        n.d(a, "transpose", function () {
          return k;
        }),
        n.d(a, "invert", function () {
          return T;
        }),
        n.d(a, "adjoint", function () {
          return z;
        }),
        n.d(a, "determinant", function () {
          return R;
        }),
        n.d(a, "multiply", function () {
          return L;
        }),
        n.d(a, "rotate", function () {
          return S;
        }),
        n.d(a, "scale", function () {
          return F;
        }),
        n.d(a, "fromRotation", function () {
          return O;
        }),
        n.d(a, "fromScaling", function () {
          return C;
        }),
        n.d(a, "str", function () {
          return P;
        }),
        n.d(a, "frob", function () {
          return I;
        }),
        n.d(a, "LDU", function () {
          return B;
        }),
        n.d(a, "add", function () {
          return D;
        }),
        n.d(a, "subtract", function () {
          return U;
        }),
        n.d(a, "exactEquals", function () {
          return V;
        }),
        n.d(a, "equals", function () {
          return j;
        }),
        n.d(a, "multiplyScalar", function () {
          return q;
        }),
        n.d(a, "multiplyScalarAndAdd", function () {
          return N;
        }),
        n.d(a, "mul", function () {
          return G;
        }),
        n.d(a, "sub", function () {
          return W;
        });
      var i = {};
      n.r(i),
        n.d(i, "create", function () {
          return Z;
        }),
        n.d(i, "clone", function () {
          return H;
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
          return Q;
        }),
        n.d(i, "invert", function () {
          return $;
        }),
        n.d(i, "determinant", function () {
          return J;
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
          return se;
        }),
        n.d(i, "frob", function () {
          return ue;
        }),
        n.d(i, "add", function () {
          return ce;
        }),
        n.d(i, "subtract", function () {
          return fe;
        }),
        n.d(i, "multiplyScalar", function () {
          return _e;
        }),
        n.d(i, "multiplyScalarAndAdd", function () {
          return le;
        }),
        n.d(i, "exactEquals", function () {
          return de;
        }),
        n.d(i, "equals", function () {
          return he;
        }),
        n.d(i, "mul", function () {
          return pe;
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
          return ge;
        }),
        n.d(o, "clone", function () {
          return ye;
        }),
        n.d(o, "copy", function () {
          return ve;
        }),
        n.d(o, "fromValues", function () {
          return we;
        }),
        n.d(o, "set", function () {
          return Me;
        }),
        n.d(o, "identity", function () {
          return xe;
        }),
        n.d(o, "transpose", function () {
          return Ee;
        }),
        n.d(o, "invert", function () {
          return Ae;
        }),
        n.d(o, "adjoint", function () {
          return ke;
        }),
        n.d(o, "determinant", function () {
          return Te;
        }),
        n.d(o, "multiply", function () {
          return ze;
        }),
        n.d(o, "translate", function () {
          return Re;
        }),
        n.d(o, "rotate", function () {
          return Le;
        }),
        n.d(o, "scale", function () {
          return Se;
        }),
        n.d(o, "fromTranslation", function () {
          return Fe;
        }),
        n.d(o, "fromRotation", function () {
          return Oe;
        }),
        n.d(o, "fromScaling", function () {
          return Ce;
        }),
        n.d(o, "fromMat2d", function () {
          return Pe;
        }),
        n.d(o, "fromQuat", function () {
          return Ie;
        }),
        n.d(o, "normalFromMat4", function () {
          return Be;
        }),
        n.d(o, "projection", function () {
          return De;
        }),
        n.d(o, "str", function () {
          return Ue;
        }),
        n.d(o, "frob", function () {
          return Ve;
        }),
        n.d(o, "add", function () {
          return je;
        }),
        n.d(o, "subtract", function () {
          return qe;
        }),
        n.d(o, "multiplyScalar", function () {
          return Ne;
        }),
        n.d(o, "multiplyScalarAndAdd", function () {
          return Ge;
        }),
        n.d(o, "exactEquals", function () {
          return We;
        }),
        n.d(o, "equals", function () {
          return Ze;
        }),
        n.d(o, "mul", function () {
          return He;
        }),
        n.d(o, "sub", function () {
          return Ye;
        });
      var s = {};
      n.r(s),
        n.d(s, "create", function () {
          return Xe;
        }),
        n.d(s, "clone", function () {
          return Ke;
        }),
        n.d(s, "copy", function () {
          return Qe;
        }),
        n.d(s, "fromValues", function () {
          return $e;
        }),
        n.d(s, "set", function () {
          return Je;
        }),
        n.d(s, "identity", function () {
          return et;
        }),
        n.d(s, "transpose", function () {
          return tt;
        }),
        n.d(s, "invert", function () {
          return nt;
        }),
        n.d(s, "adjoint", function () {
          return rt;
        }),
        n.d(s, "determinant", function () {
          return at;
        }),
        n.d(s, "multiply", function () {
          return it;
        }),
        n.d(s, "translate", function () {
          return ot;
        }),
        n.d(s, "scale", function () {
          return st;
        }),
        n.d(s, "rotate", function () {
          return ut;
        }),
        n.d(s, "rotateX", function () {
          return ct;
        }),
        n.d(s, "rotateY", function () {
          return ft;
        }),
        n.d(s, "rotateZ", function () {
          return _t;
        }),
        n.d(s, "fromTranslation", function () {
          return lt;
        }),
        n.d(s, "fromScaling", function () {
          return dt;
        }),
        n.d(s, "fromRotation", function () {
          return ht;
        }),
        n.d(s, "fromXRotation", function () {
          return pt;
        }),
        n.d(s, "fromYRotation", function () {
          return mt;
        }),
        n.d(s, "fromZRotation", function () {
          return bt;
        }),
        n.d(s, "fromRotationTranslation", function () {
          return gt;
        }),
        n.d(s, "fromQuat2", function () {
          return yt;
        }),
        n.d(s, "getTranslation", function () {
          return vt;
        }),
        n.d(s, "getScaling", function () {
          return wt;
        }),
        n.d(s, "getRotation", function () {
          return Mt;
        }),
        n.d(s, "fromRotationTranslationScale", function () {
          return xt;
        }),
        n.d(s, "fromRotationTranslationScaleOrigin", function () {
          return Et;
        }),
        n.d(s, "fromQuat", function () {
          return At;
        }),
        n.d(s, "frustum", function () {
          return kt;
        }),
        n.d(s, "perspective", function () {
          return Tt;
        }),
        n.d(s, "perspectiveFromFieldOfView", function () {
          return zt;
        }),
        n.d(s, "ortho", function () {
          return Rt;
        }),
        n.d(s, "lookAt", function () {
          return Lt;
        }),
        n.d(s, "targetTo", function () {
          return St;
        }),
        n.d(s, "str", function () {
          return Ft;
        }),
        n.d(s, "frob", function () {
          return Ot;
        }),
        n.d(s, "add", function () {
          return Ct;
        }),
        n.d(s, "subtract", function () {
          return Pt;
        }),
        n.d(s, "multiplyScalar", function () {
          return It;
        }),
        n.d(s, "multiplyScalarAndAdd", function () {
          return Bt;
        }),
        n.d(s, "exactEquals", function () {
          return Dt;
        }),
        n.d(s, "equals", function () {
          return Ut;
        }),
        n.d(s, "mul", function () {
          return Vt;
        }),
        n.d(s, "sub", function () {
          return jt;
        });
      var u = {};
      n.r(u),
        n.d(u, "create", function () {
          return qt;
        }),
        n.d(u, "clone", function () {
          return Nt;
        }),
        n.d(u, "length", function () {
          return Gt;
        }),
        n.d(u, "fromValues", function () {
          return Wt;
        }),
        n.d(u, "copy", function () {
          return Zt;
        }),
        n.d(u, "set", function () {
          return Ht;
        }),
        n.d(u, "add", function () {
          return Yt;
        }),
        n.d(u, "subtract", function () {
          return Xt;
        }),
        n.d(u, "multiply", function () {
          return Kt;
        }),
        n.d(u, "divide", function () {
          return Qt;
        }),
        n.d(u, "ceil", function () {
          return $t;
        }),
        n.d(u, "floor", function () {
          return Jt;
        }),
        n.d(u, "min", function () {
          return en;
        }),
        n.d(u, "max", function () {
          return tn;
        }),
        n.d(u, "round", function () {
          return nn;
        }),
        n.d(u, "scale", function () {
          return rn;
        }),
        n.d(u, "scaleAndAdd", function () {
          return an;
        }),
        n.d(u, "distance", function () {
          return on;
        }),
        n.d(u, "squaredDistance", function () {
          return sn;
        }),
        n.d(u, "squaredLength", function () {
          return un;
        }),
        n.d(u, "negate", function () {
          return cn;
        }),
        n.d(u, "inverse", function () {
          return fn;
        }),
        n.d(u, "normalize", function () {
          return _n;
        }),
        n.d(u, "dot", function () {
          return ln;
        }),
        n.d(u, "cross", function () {
          return dn;
        }),
        n.d(u, "lerp", function () {
          return hn;
        }),
        n.d(u, "hermite", function () {
          return pn;
        }),
        n.d(u, "bezier", function () {
          return mn;
        }),
        n.d(u, "random", function () {
          return bn;
        }),
        n.d(u, "transformMat4", function () {
          return gn;
        }),
        n.d(u, "transformMat3", function () {
          return yn;
        }),
        n.d(u, "transformQuat", function () {
          return vn;
        }),
        n.d(u, "rotateX", function () {
          return wn;
        }),
        n.d(u, "rotateY", function () {
          return Mn;
        }),
        n.d(u, "rotateZ", function () {
          return xn;
        }),
        n.d(u, "angle", function () {
          return En;
        }),
        n.d(u, "zero", function () {
          return An;
        }),
        n.d(u, "str", function () {
          return kn;
        }),
        n.d(u, "exactEquals", function () {
          return Tn;
        }),
        n.d(u, "equals", function () {
          return zn;
        }),
        n.d(u, "sub", function () {
          return Ln;
        }),
        n.d(u, "mul", function () {
          return Sn;
        }),
        n.d(u, "div", function () {
          return Fn;
        }),
        n.d(u, "dist", function () {
          return On;
        }),
        n.d(u, "sqrDist", function () {
          return Cn;
        }),
        n.d(u, "len", function () {
          return Pn;
        }),
        n.d(u, "sqrLen", function () {
          return In;
        }),
        n.d(u, "forEach", function () {
          return Bn;
        });
      var c = {};
      n.r(c),
        n.d(c, "create", function () {
          return Dn;
        }),
        n.d(c, "clone", function () {
          return Un;
        }),
        n.d(c, "fromValues", function () {
          return Vn;
        }),
        n.d(c, "copy", function () {
          return jn;
        }),
        n.d(c, "set", function () {
          return qn;
        }),
        n.d(c, "add", function () {
          return Nn;
        }),
        n.d(c, "subtract", function () {
          return Gn;
        }),
        n.d(c, "multiply", function () {
          return Wn;
        }),
        n.d(c, "divide", function () {
          return Zn;
        }),
        n.d(c, "ceil", function () {
          return Hn;
        }),
        n.d(c, "floor", function () {
          return Yn;
        }),
        n.d(c, "min", function () {
          return Xn;
        }),
        n.d(c, "max", function () {
          return Kn;
        }),
        n.d(c, "round", function () {
          return Qn;
        }),
        n.d(c, "scale", function () {
          return $n;
        }),
        n.d(c, "scaleAndAdd", function () {
          return Jn;
        }),
        n.d(c, "distance", function () {
          return er;
        }),
        n.d(c, "squaredDistance", function () {
          return tr;
        }),
        n.d(c, "length", function () {
          return nr;
        }),
        n.d(c, "squaredLength", function () {
          return rr;
        }),
        n.d(c, "negate", function () {
          return ar;
        }),
        n.d(c, "inverse", function () {
          return ir;
        }),
        n.d(c, "normalize", function () {
          return or;
        }),
        n.d(c, "dot", function () {
          return sr;
        }),
        n.d(c, "cross", function () {
          return ur;
        }),
        n.d(c, "lerp", function () {
          return cr;
        }),
        n.d(c, "random", function () {
          return fr;
        }),
        n.d(c, "transformMat4", function () {
          return _r;
        }),
        n.d(c, "transformQuat", function () {
          return lr;
        }),
        n.d(c, "zero", function () {
          return dr;
        }),
        n.d(c, "str", function () {
          return hr;
        }),
        n.d(c, "exactEquals", function () {
          return pr;
        }),
        n.d(c, "equals", function () {
          return mr;
        }),
        n.d(c, "sub", function () {
          return br;
        }),
        n.d(c, "mul", function () {
          return gr;
        }),
        n.d(c, "div", function () {
          return yr;
        }),
        n.d(c, "dist", function () {
          return vr;
        }),
        n.d(c, "sqrDist", function () {
          return wr;
        }),
        n.d(c, "len", function () {
          return Mr;
        }),
        n.d(c, "sqrLen", function () {
          return xr;
        }),
        n.d(c, "forEach", function () {
          return Er;
        });
      var f = {};
      n.r(f),
        n.d(f, "create", function () {
          return Ar;
        }),
        n.d(f, "identity", function () {
          return kr;
        }),
        n.d(f, "setAxisAngle", function () {
          return Tr;
        }),
        n.d(f, "getAxisAngle", function () {
          return zr;
        }),
        n.d(f, "getAngle", function () {
          return Rr;
        }),
        n.d(f, "multiply", function () {
          return Lr;
        }),
        n.d(f, "rotateX", function () {
          return Sr;
        }),
        n.d(f, "rotateY", function () {
          return Fr;
        }),
        n.d(f, "rotateZ", function () {
          return Or;
        }),
        n.d(f, "calculateW", function () {
          return Cr;
        }),
        n.d(f, "exp", function () {
          return Pr;
        }),
        n.d(f, "ln", function () {
          return Ir;
        }),
        n.d(f, "pow", function () {
          return Br;
        }),
        n.d(f, "slerp", function () {
          return Dr;
        }),
        n.d(f, "random", function () {
          return Ur;
        }),
        n.d(f, "invert", function () {
          return Vr;
        }),
        n.d(f, "conjugate", function () {
          return jr;
        }),
        n.d(f, "fromMat3", function () {
          return qr;
        }),
        n.d(f, "fromEuler", function () {
          return Nr;
        }),
        n.d(f, "str", function () {
          return Gr;
        }),
        n.d(f, "clone", function () {
          return Qr;
        }),
        n.d(f, "fromValues", function () {
          return $r;
        }),
        n.d(f, "copy", function () {
          return Jr;
        }),
        n.d(f, "set", function () {
          return ea;
        }),
        n.d(f, "add", function () {
          return ta;
        }),
        n.d(f, "mul", function () {
          return na;
        }),
        n.d(f, "scale", function () {
          return ra;
        }),
        n.d(f, "dot", function () {
          return aa;
        }),
        n.d(f, "lerp", function () {
          return ia;
        }),
        n.d(f, "length", function () {
          return oa;
        }),
        n.d(f, "len", function () {
          return sa;
        }),
        n.d(f, "squaredLength", function () {
          return ua;
        }),
        n.d(f, "sqrLen", function () {
          return ca;
        }),
        n.d(f, "normalize", function () {
          return fa;
        }),
        n.d(f, "exactEquals", function () {
          return _a;
        }),
        n.d(f, "equals", function () {
          return la;
        }),
        n.d(f, "rotationTo", function () {
          return da;
        }),
        n.d(f, "sqlerp", function () {
          return ha;
        }),
        n.d(f, "setAxes", function () {
          return pa;
        });
      var _ = {};
      n.r(_),
        n.d(_, "create", function () {
          return ma;
        }),
        n.d(_, "clone", function () {
          return ba;
        }),
        n.d(_, "fromValues", function () {
          return ga;
        }),
        n.d(_, "fromRotationTranslationValues", function () {
          return ya;
        }),
        n.d(_, "fromRotationTranslation", function () {
          return va;
        }),
        n.d(_, "fromTranslation", function () {
          return wa;
        }),
        n.d(_, "fromRotation", function () {
          return Ma;
        }),
        n.d(_, "fromMat4", function () {
          return xa;
        }),
        n.d(_, "copy", function () {
          return Ea;
        }),
        n.d(_, "identity", function () {
          return Aa;
        }),
        n.d(_, "set", function () {
          return ka;
        }),
        n.d(_, "getReal", function () {
          return Ta;
        }),
        n.d(_, "getDual", function () {
          return za;
        }),
        n.d(_, "setReal", function () {
          return Ra;
        }),
        n.d(_, "setDual", function () {
          return La;
        }),
        n.d(_, "getTranslation", function () {
          return Sa;
        }),
        n.d(_, "translate", function () {
          return Fa;
        }),
        n.d(_, "rotateX", function () {
          return Oa;
        }),
        n.d(_, "rotateY", function () {
          return Ca;
        }),
        n.d(_, "rotateZ", function () {
          return Pa;
        }),
        n.d(_, "rotateByQuatAppend", function () {
          return Ia;
        }),
        n.d(_, "rotateByQuatPrepend", function () {
          return Ba;
        }),
        n.d(_, "rotateAroundAxis", function () {
          return Da;
        }),
        n.d(_, "add", function () {
          return Ua;
        }),
        n.d(_, "multiply", function () {
          return Va;
        }),
        n.d(_, "mul", function () {
          return ja;
        }),
        n.d(_, "scale", function () {
          return qa;
        }),
        n.d(_, "dot", function () {
          return Na;
        }),
        n.d(_, "lerp", function () {
          return Ga;
        }),
        n.d(_, "invert", function () {
          return Wa;
        }),
        n.d(_, "conjugate", function () {
          return Za;
        }),
        n.d(_, "length", function () {
          return Ha;
        }),
        n.d(_, "len", function () {
          return Ya;
        }),
        n.d(_, "squaredLength", function () {
          return Xa;
        }),
        n.d(_, "sqrLen", function () {
          return Ka;
        }),
        n.d(_, "normalize", function () {
          return Qa;
        }),
        n.d(_, "str", function () {
          return $a;
        }),
        n.d(_, "exactEquals", function () {
          return Ja;
        }),
        n.d(_, "equals", function () {
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
          return si;
        }),
        n.d(l, "multiply", function () {
          return ui;
        }),
        n.d(l, "divide", function () {
          return ci;
        }),
        n.d(l, "ceil", function () {
          return fi;
        }),
        n.d(l, "floor", function () {
          return _i;
        }),
        n.d(l, "min", function () {
          return li;
        }),
        n.d(l, "max", function () {
          return di;
        }),
        n.d(l, "round", function () {
          return hi;
        }),
        n.d(l, "scale", function () {
          return pi;
        }),
        n.d(l, "scaleAndAdd", function () {
          return mi;
        }),
        n.d(l, "distance", function () {
          return bi;
        }),
        n.d(l, "squaredDistance", function () {
          return gi;
        }),
        n.d(l, "length", function () {
          return yi;
        }),
        n.d(l, "squaredLength", function () {
          return vi;
        }),
        n.d(l, "negate", function () {
          return wi;
        }),
        n.d(l, "inverse", function () {
          return Mi;
        }),
        n.d(l, "normalize", function () {
          return xi;
        }),
        n.d(l, "dot", function () {
          return Ei;
        }),
        n.d(l, "cross", function () {
          return Ai;
        }),
        n.d(l, "lerp", function () {
          return ki;
        }),
        n.d(l, "random", function () {
          return Ti;
        }),
        n.d(l, "transformMat2", function () {
          return zi;
        }),
        n.d(l, "transformMat2d", function () {
          return Ri;
        }),
        n.d(l, "transformMat3", function () {
          return Li;
        }),
        n.d(l, "transformMat4", function () {
          return Si;
        }),
        n.d(l, "rotate", function () {
          return Fi;
        }),
        n.d(l, "angle", function () {
          return Oi;
        }),
        n.d(l, "zero", function () {
          return Ci;
        }),
        n.d(l, "str", function () {
          return Pi;
        }),
        n.d(l, "exactEquals", function () {
          return Ii;
        }),
        n.d(l, "equals", function () {
          return Bi;
        }),
        n.d(l, "len", function () {
          return Di;
        }),
        n.d(l, "sub", function () {
          return Ui;
        }),
        n.d(l, "mul", function () {
          return Vi;
        }),
        n.d(l, "div", function () {
          return ji;
        }),
        n.d(l, "dist", function () {
          return qi;
        }),
        n.d(l, "sqrDist", function () {
          return Ni;
        }),
        n.d(l, "sqrLen", function () {
          return Gi;
        }),
        n.d(l, "forEach", function () {
          return Wi;
        });
      var d = 1e-6,
        h = "undefined" != typeof Float32Array ? Float32Array : Array,
        p = Math.random;
      function m(e) {
        h = e;
      }
      var b = Math.PI / 180;
      function g(e) {
        return e * b;
      }
      function y(e, t) {
        return Math.abs(e - t) <= d * Math.max(1, Math.abs(e), Math.abs(t));
      }
      function v() {
        var e = new h(4);
        return (
          h != Float32Array && ((e[1] = 0), (e[2] = 0)),
          (e[0] = 1),
          (e[3] = 1),
          e
        );
      }
      function w(e) {
        var t = new h(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      function M(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      }
      function x(e) {
        return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      }
      function E(e, t, n, r) {
        var a = new h(4);
        return (a[0] = e), (a[1] = t), (a[2] = n), (a[3] = r), a;
      }
      function A(e, t, n, r, a) {
        return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = a), e;
      }
      function k(e, t) {
        if (e === t) {
          var n = t[1];
          (e[1] = t[2]), (e[2] = n);
        } else (e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]);
        return e;
      }
      function T(e, t) {
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
      function z(e, t) {
        var n = t[0];
        return (e[0] = t[3]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = n), e;
      }
      function R(e) {
        return e[0] * e[3] - e[2] * e[1];
      }
      function L(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = n[0],
          u = n[1],
          c = n[2],
          f = n[3];
        return (
          (e[0] = r * s + i * u),
          (e[1] = a * s + o * u),
          (e[2] = r * c + i * f),
          (e[3] = a * c + o * f),
          e
        );
      }
      function S(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(n),
          u = Math.cos(n);
        return (
          (e[0] = r * u + i * s),
          (e[1] = a * u + o * s),
          (e[2] = r * -s + i * u),
          (e[3] = a * -s + o * u),
          e
        );
      }
      function F(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = n[0],
          u = n[1];
        return (
          (e[0] = r * s), (e[1] = a * s), (e[2] = i * u), (e[3] = o * u), e
        );
      }
      function O(e, t) {
        var n = Math.sin(t),
          r = Math.cos(t);
        return (e[0] = r), (e[1] = n), (e[2] = -n), (e[3] = r), e;
      }
      function C(e, t) {
        return (e[0] = t[0]), (e[1] = 0), (e[2] = 0), (e[3] = t[1]), e;
      }
      function P(e) {
        return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      function I(e) {
        return Math.hypot(e[0], e[1], e[2], e[3]);
      }
      function B(e, t, n, r) {
        return (
          (e[2] = r[2] / r[0]),
          (n[0] = r[0]),
          (n[1] = r[1]),
          (n[3] = r[3] - e[2] * n[1]),
          [e, t, n]
        );
      }
      function D(e, t, n) {
        return (
          (e[0] = t[0] + n[0]),
          (e[1] = t[1] + n[1]),
          (e[2] = t[2] + n[2]),
          (e[3] = t[3] + n[3]),
          e
        );
      }
      function U(e, t, n) {
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
      function j(e, t) {
        var n = e[0],
          r = e[1],
          a = e[2],
          i = e[3],
          o = t[0],
          s = t[1],
          u = t[2],
          c = t[3];
        return (
          Math.abs(n - o) <= d * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(r - s) <= d * Math.max(1, Math.abs(r), Math.abs(s)) &&
          Math.abs(a - u) <= d * Math.max(1, Math.abs(a), Math.abs(u)) &&
          Math.abs(i - c) <= d * Math.max(1, Math.abs(i), Math.abs(c))
        );
      }
      function q(e, t, n) {
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
      var G = L,
        W = U;
      function Z() {
        var e = new h(6);
        return (
          h != Float32Array && ((e[1] = 0), (e[2] = 0), (e[4] = 0), (e[5] = 0)),
          (e[0] = 1),
          (e[3] = 1),
          e
        );
      }
      function H(e) {
        var t = new h(6);
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
        var o = new h(6);
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
      function Q(e, t, n, r, a, i, o) {
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
      function $(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = n * i - r * a;
        return u
          ? ((u = 1 / u),
            (e[0] = i * u),
            (e[1] = -r * u),
            (e[2] = -a * u),
            (e[3] = n * u),
            (e[4] = (a * s - i * o) * u),
            (e[5] = (r * o - n * s) * u),
            e)
          : null;
      }
      function J(e) {
        return e[0] * e[3] - e[1] * e[2];
      }
      function ee(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = n[0],
          f = n[1],
          _ = n[2],
          l = n[3],
          d = n[4],
          h = n[5];
        return (
          (e[0] = r * c + i * f),
          (e[1] = a * c + o * f),
          (e[2] = r * _ + i * l),
          (e[3] = a * _ + o * l),
          (e[4] = r * d + i * h + s),
          (e[5] = a * d + o * h + u),
          e
        );
      }
      function te(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = Math.sin(n),
          f = Math.cos(n);
        return (
          (e[0] = r * f + i * c),
          (e[1] = a * f + o * c),
          (e[2] = r * -c + i * f),
          (e[3] = a * -c + o * f),
          (e[4] = s),
          (e[5] = u),
          e
        );
      }
      function ne(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = n[0],
          f = n[1];
        return (
          (e[0] = r * c),
          (e[1] = a * c),
          (e[2] = i * f),
          (e[3] = o * f),
          (e[4] = s),
          (e[5] = u),
          e
        );
      }
      function re(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = n[0],
          f = n[1];
        return (
          (e[0] = r),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = r * c + i * f + s),
          (e[5] = a * c + o * f + u),
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
      function se(e) {
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
      function ue(e) {
        return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], 1);
      }
      function ce(e, t, n) {
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
      function fe(e, t, n) {
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
      function _e(e, t, n) {
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
      function de(e, t) {
        return (
          e[0] === t[0] &&
          e[1] === t[1] &&
          e[2] === t[2] &&
          e[3] === t[3] &&
          e[4] === t[4] &&
          e[5] === t[5]
        );
      }
      function he(e, t) {
        var n = e[0],
          r = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = t[0],
          c = t[1],
          f = t[2],
          _ = t[3],
          l = t[4],
          h = t[5];
        return (
          Math.abs(n - u) <= d * Math.max(1, Math.abs(n), Math.abs(u)) &&
          Math.abs(r - c) <= d * Math.max(1, Math.abs(r), Math.abs(c)) &&
          Math.abs(a - f) <= d * Math.max(1, Math.abs(a), Math.abs(f)) &&
          Math.abs(i - _) <= d * Math.max(1, Math.abs(i), Math.abs(_)) &&
          Math.abs(o - l) <= d * Math.max(1, Math.abs(o), Math.abs(l)) &&
          Math.abs(s - h) <= d * Math.max(1, Math.abs(s), Math.abs(h))
        );
      }
      var pe = ee,
        me = fe;
      function be() {
        var e = new h(9);
        return (
          h != Float32Array &&
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
      function ge(e, t) {
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
      function ye(e) {
        var t = new h(9);
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
      function ve(e, t) {
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
      function we(e, t, n, r, a, i, o, s, u) {
        var c = new h(9);
        return (
          (c[0] = e),
          (c[1] = t),
          (c[2] = n),
          (c[3] = r),
          (c[4] = a),
          (c[5] = i),
          (c[6] = o),
          (c[7] = s),
          (c[8] = u),
          c
        );
      }
      function Me(e, t, n, r, a, i, o, s, u, c) {
        return (
          (e[0] = t),
          (e[1] = n),
          (e[2] = r),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          (e[6] = s),
          (e[7] = u),
          (e[8] = c),
          e
        );
      }
      function xe(e) {
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
      function Ee(e, t) {
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
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          _ = f * o - s * c,
          l = -f * i + s * u,
          d = c * i - o * u,
          h = n * _ + r * l + a * d;
        return h
          ? ((h = 1 / h),
            (e[0] = _ * h),
            (e[1] = (-f * r + a * c) * h),
            (e[2] = (s * r - a * o) * h),
            (e[3] = l * h),
            (e[4] = (f * n - a * u) * h),
            (e[5] = (-s * n + a * i) * h),
            (e[6] = d * h),
            (e[7] = (-c * n + r * u) * h),
            (e[8] = (o * n - r * i) * h),
            e)
          : null;
      }
      function ke(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8];
        return (
          (e[0] = o * f - s * c),
          (e[1] = a * c - r * f),
          (e[2] = r * s - a * o),
          (e[3] = s * u - i * f),
          (e[4] = n * f - a * u),
          (e[5] = a * i - n * s),
          (e[6] = i * c - o * u),
          (e[7] = r * u - n * c),
          (e[8] = n * o - r * i),
          e
        );
      }
      function Te(e) {
        var t = e[0],
          n = e[1],
          r = e[2],
          a = e[3],
          i = e[4],
          o = e[5],
          s = e[6],
          u = e[7],
          c = e[8];
        return t * (c * i - o * u) + n * (-c * a + o * s) + r * (u * a - i * s);
      }
      function ze(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = t[8],
          l = n[0],
          d = n[1],
          h = n[2],
          p = n[3],
          m = n[4],
          b = n[5],
          g = n[6],
          y = n[7],
          v = n[8];
        return (
          (e[0] = l * r + d * o + h * c),
          (e[1] = l * a + d * s + h * f),
          (e[2] = l * i + d * u + h * _),
          (e[3] = p * r + m * o + b * c),
          (e[4] = p * a + m * s + b * f),
          (e[5] = p * i + m * u + b * _),
          (e[6] = g * r + y * o + v * c),
          (e[7] = g * a + y * s + v * f),
          (e[8] = g * i + y * u + v * _),
          e
        );
      }
      function Re(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = t[8],
          l = n[0],
          d = n[1];
        return (
          (e[0] = r),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = s),
          (e[5] = u),
          (e[6] = l * r + d * o + c),
          (e[7] = l * a + d * s + f),
          (e[8] = l * i + d * u + _),
          e
        );
      }
      function Le(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = t[8],
          l = Math.sin(n),
          d = Math.cos(n);
        return (
          (e[0] = d * r + l * o),
          (e[1] = d * a + l * s),
          (e[2] = d * i + l * u),
          (e[3] = d * o - l * r),
          (e[4] = d * s - l * a),
          (e[5] = d * u - l * i),
          (e[6] = c),
          (e[7] = f),
          (e[8] = _),
          e
        );
      }
      function Se(e, t, n) {
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
      function Fe(e, t) {
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
      function Oe(e, t) {
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
      function Ce(e, t) {
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
      function Pe(e, t) {
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
      function Ie(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = n + n,
          s = r + r,
          u = a + a,
          c = n * o,
          f = r * o,
          _ = r * s,
          l = a * o,
          d = a * s,
          h = a * u,
          p = i * o,
          m = i * s,
          b = i * u;
        return (
          (e[0] = 1 - _ - h),
          (e[3] = f - b),
          (e[6] = l + m),
          (e[1] = f + b),
          (e[4] = 1 - c - h),
          (e[7] = d - p),
          (e[2] = l - m),
          (e[5] = d + p),
          (e[8] = 1 - c - _),
          e
        );
      }
      function Be(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          _ = t[9],
          l = t[10],
          d = t[11],
          h = t[12],
          p = t[13],
          m = t[14],
          b = t[15],
          g = n * s - r * o,
          y = n * u - a * o,
          v = n * c - i * o,
          w = r * u - a * s,
          M = r * c - i * s,
          x = a * c - i * u,
          E = f * p - _ * h,
          A = f * m - l * h,
          k = f * b - d * h,
          T = _ * m - l * p,
          z = _ * b - d * p,
          R = l * b - d * m,
          L = g * R - y * z + v * T + w * k - M * A + x * E;
        return L
          ? ((L = 1 / L),
            (e[0] = (s * R - u * z + c * T) * L),
            (e[1] = (u * k - o * R - c * A) * L),
            (e[2] = (o * z - s * k + c * E) * L),
            (e[3] = (a * z - r * R - i * T) * L),
            (e[4] = (n * R - a * k + i * A) * L),
            (e[5] = (r * k - n * z - i * E) * L),
            (e[6] = (p * x - m * M + b * w) * L),
            (e[7] = (m * v - h * x - b * y) * L),
            (e[8] = (h * M - p * v + b * g) * L),
            e)
          : null;
      }
      function De(e, t, n) {
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
      function Ue(e) {
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
      function je(e, t, n) {
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
      function qe(e, t, n) {
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
      function Ge(e, t, n, r) {
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
      function Ze(e, t) {
        var n = e[0],
          r = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          f = e[8],
          _ = t[0],
          l = t[1],
          h = t[2],
          p = t[3],
          m = t[4],
          b = t[5],
          g = t[6],
          y = t[7],
          v = t[8];
        return (
          Math.abs(n - _) <= d * Math.max(1, Math.abs(n), Math.abs(_)) &&
          Math.abs(r - l) <= d * Math.max(1, Math.abs(r), Math.abs(l)) &&
          Math.abs(a - h) <= d * Math.max(1, Math.abs(a), Math.abs(h)) &&
          Math.abs(i - p) <= d * Math.max(1, Math.abs(i), Math.abs(p)) &&
          Math.abs(o - m) <= d * Math.max(1, Math.abs(o), Math.abs(m)) &&
          Math.abs(s - b) <= d * Math.max(1, Math.abs(s), Math.abs(b)) &&
          Math.abs(u - g) <= d * Math.max(1, Math.abs(u), Math.abs(g)) &&
          Math.abs(c - y) <= d * Math.max(1, Math.abs(c), Math.abs(y)) &&
          Math.abs(f - v) <= d * Math.max(1, Math.abs(f), Math.abs(v))
        );
      }
      var He = ze,
        Ye = qe;
      function Xe() {
        var e = new h(16);
        return (
          h != Float32Array &&
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
        var t = new h(16);
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
      function Qe(e, t) {
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
      function $e(e, t, n, r, a, i, o, s, u, c, f, _, l, d, p, m) {
        var b = new h(16);
        return (
          (b[0] = e),
          (b[1] = t),
          (b[2] = n),
          (b[3] = r),
          (b[4] = a),
          (b[5] = i),
          (b[6] = o),
          (b[7] = s),
          (b[8] = u),
          (b[9] = c),
          (b[10] = f),
          (b[11] = _),
          (b[12] = l),
          (b[13] = d),
          (b[14] = p),
          (b[15] = m),
          b
        );
      }
      function Je(e, t, n, r, a, i, o, s, u, c, f, _, l, d, h, p, m) {
        return (
          (e[0] = t),
          (e[1] = n),
          (e[2] = r),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          (e[6] = s),
          (e[7] = u),
          (e[8] = c),
          (e[9] = f),
          (e[10] = _),
          (e[11] = l),
          (e[12] = d),
          (e[13] = h),
          (e[14] = p),
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
            s = t[11];
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
            (e[14] = s);
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
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          _ = t[9],
          l = t[10],
          d = t[11],
          h = t[12],
          p = t[13],
          m = t[14],
          b = t[15],
          g = n * s - r * o,
          y = n * u - a * o,
          v = n * c - i * o,
          w = r * u - a * s,
          M = r * c - i * s,
          x = a * c - i * u,
          E = f * p - _ * h,
          A = f * m - l * h,
          k = f * b - d * h,
          T = _ * m - l * p,
          z = _ * b - d * p,
          R = l * b - d * m,
          L = g * R - y * z + v * T + w * k - M * A + x * E;
        return L
          ? ((L = 1 / L),
            (e[0] = (s * R - u * z + c * T) * L),
            (e[1] = (a * z - r * R - i * T) * L),
            (e[2] = (p * x - m * M + b * w) * L),
            (e[3] = (l * M - _ * x - d * w) * L),
            (e[4] = (u * k - o * R - c * A) * L),
            (e[5] = (n * R - a * k + i * A) * L),
            (e[6] = (m * v - h * x - b * y) * L),
            (e[7] = (f * x - l * v + d * y) * L),
            (e[8] = (o * z - s * k + c * E) * L),
            (e[9] = (r * k - n * z - i * E) * L),
            (e[10] = (h * M - p * v + b * g) * L),
            (e[11] = (_ * v - f * M - d * g) * L),
            (e[12] = (s * A - o * T - u * E) * L),
            (e[13] = (n * T - r * A + a * E) * L),
            (e[14] = (p * y - h * w - m * g) * L),
            (e[15] = (f * w - _ * y + l * g) * L),
            e)
          : null;
      }
      function rt(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          _ = t[9],
          l = t[10],
          d = t[11],
          h = t[12],
          p = t[13],
          m = t[14],
          b = t[15];
        return (
          (e[0] =
            s * (l * b - d * m) - _ * (u * b - c * m) + p * (u * d - c * l)),
          (e[1] = -(
            r * (l * b - d * m) -
            _ * (a * b - i * m) +
            p * (a * d - i * l)
          )),
          (e[2] =
            r * (u * b - c * m) - s * (a * b - i * m) + p * (a * c - i * u)),
          (e[3] = -(
            r * (u * d - c * l) -
            s * (a * d - i * l) +
            _ * (a * c - i * u)
          )),
          (e[4] = -(
            o * (l * b - d * m) -
            f * (u * b - c * m) +
            h * (u * d - c * l)
          )),
          (e[5] =
            n * (l * b - d * m) - f * (a * b - i * m) + h * (a * d - i * l)),
          (e[6] = -(
            n * (u * b - c * m) -
            o * (a * b - i * m) +
            h * (a * c - i * u)
          )),
          (e[7] =
            n * (u * d - c * l) - o * (a * d - i * l) + f * (a * c - i * u)),
          (e[8] =
            o * (_ * b - d * p) - f * (s * b - c * p) + h * (s * d - c * _)),
          (e[9] = -(
            n * (_ * b - d * p) -
            f * (r * b - i * p) +
            h * (r * d - i * _)
          )),
          (e[10] =
            n * (s * b - c * p) - o * (r * b - i * p) + h * (r * c - i * s)),
          (e[11] = -(
            n * (s * d - c * _) -
            o * (r * d - i * _) +
            f * (r * c - i * s)
          )),
          (e[12] = -(
            o * (_ * m - l * p) -
            f * (s * m - u * p) +
            h * (s * l - u * _)
          )),
          (e[13] =
            n * (_ * m - l * p) - f * (r * m - a * p) + h * (r * l - a * _)),
          (e[14] = -(
            n * (s * m - u * p) -
            o * (r * m - a * p) +
            h * (r * u - a * s)
          )),
          (e[15] =
            n * (s * l - u * _) - o * (r * l - a * _) + f * (r * u - a * s)),
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
          s = e[6],
          u = e[7],
          c = e[8],
          f = e[9],
          _ = e[10],
          l = e[11],
          d = e[12],
          h = e[13],
          p = e[14],
          m = e[15];
        return (
          (t * o - n * i) * (_ * m - l * p) -
          (t * s - r * i) * (f * m - l * h) +
          (t * u - a * i) * (f * p - _ * h) +
          (n * s - r * o) * (c * m - l * d) -
          (n * u - a * o) * (c * p - _ * d) +
          (r * u - a * s) * (c * h - f * d)
        );
      }
      function it(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = t[8],
          l = t[9],
          d = t[10],
          h = t[11],
          p = t[12],
          m = t[13],
          b = t[14],
          g = t[15],
          y = n[0],
          v = n[1],
          w = n[2],
          M = n[3];
        return (
          (e[0] = y * r + v * s + w * _ + M * p),
          (e[1] = y * a + v * u + w * l + M * m),
          (e[2] = y * i + v * c + w * d + M * b),
          (e[3] = y * o + v * f + w * h + M * g),
          (y = n[4]),
          (v = n[5]),
          (w = n[6]),
          (M = n[7]),
          (e[4] = y * r + v * s + w * _ + M * p),
          (e[5] = y * a + v * u + w * l + M * m),
          (e[6] = y * i + v * c + w * d + M * b),
          (e[7] = y * o + v * f + w * h + M * g),
          (y = n[8]),
          (v = n[9]),
          (w = n[10]),
          (M = n[11]),
          (e[8] = y * r + v * s + w * _ + M * p),
          (e[9] = y * a + v * u + w * l + M * m),
          (e[10] = y * i + v * c + w * d + M * b),
          (e[11] = y * o + v * f + w * h + M * g),
          (y = n[12]),
          (v = n[13]),
          (w = n[14]),
          (M = n[15]),
          (e[12] = y * r + v * s + w * _ + M * p),
          (e[13] = y * a + v * u + w * l + M * m),
          (e[14] = y * i + v * c + w * d + M * b),
          (e[15] = y * o + v * f + w * h + M * g),
          e
        );
      }
      function ot(e, t, n) {
        var r,
          a,
          i,
          o,
          s,
          u,
          c,
          f,
          _,
          l,
          d,
          h,
          p = n[0],
          m = n[1],
          b = n[2];
        return (
          t === e
            ? ((e[12] = t[0] * p + t[4] * m + t[8] * b + t[12]),
              (e[13] = t[1] * p + t[5] * m + t[9] * b + t[13]),
              (e[14] = t[2] * p + t[6] * m + t[10] * b + t[14]),
              (e[15] = t[3] * p + t[7] * m + t[11] * b + t[15]))
            : ((r = t[0]),
              (a = t[1]),
              (i = t[2]),
              (o = t[3]),
              (s = t[4]),
              (u = t[5]),
              (c = t[6]),
              (f = t[7]),
              (_ = t[8]),
              (l = t[9]),
              (d = t[10]),
              (h = t[11]),
              (e[0] = r),
              (e[1] = a),
              (e[2] = i),
              (e[3] = o),
              (e[4] = s),
              (e[5] = u),
              (e[6] = c),
              (e[7] = f),
              (e[8] = _),
              (e[9] = l),
              (e[10] = d),
              (e[11] = h),
              (e[12] = r * p + s * m + _ * b + t[12]),
              (e[13] = a * p + u * m + l * b + t[13]),
              (e[14] = i * p + c * m + d * b + t[14]),
              (e[15] = o * p + f * m + h * b + t[15])),
          e
        );
      }
      function st(e, t, n) {
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
      function ut(e, t, n, r) {
        var a,
          i,
          o,
          s,
          u,
          c,
          f,
          _,
          l,
          h,
          p,
          m,
          b,
          g,
          y,
          v,
          w,
          M,
          x,
          E,
          A,
          k,
          T,
          z,
          R = r[0],
          L = r[1],
          S = r[2],
          F = Math.hypot(R, L, S);
        return F < d
          ? null
          : ((R *= F = 1 / F),
            (L *= F),
            (S *= F),
            (a = Math.sin(n)),
            (o = 1 - (i = Math.cos(n))),
            (s = t[0]),
            (u = t[1]),
            (c = t[2]),
            (f = t[3]),
            (_ = t[4]),
            (l = t[5]),
            (h = t[6]),
            (p = t[7]),
            (m = t[8]),
            (b = t[9]),
            (g = t[10]),
            (y = t[11]),
            (v = R * R * o + i),
            (w = L * R * o + S * a),
            (M = S * R * o - L * a),
            (x = R * L * o - S * a),
            (E = L * L * o + i),
            (A = S * L * o + R * a),
            (k = R * S * o + L * a),
            (T = L * S * o - R * a),
            (z = S * S * o + i),
            (e[0] = s * v + _ * w + m * M),
            (e[1] = u * v + l * w + b * M),
            (e[2] = c * v + h * w + g * M),
            (e[3] = f * v + p * w + y * M),
            (e[4] = s * x + _ * E + m * A),
            (e[5] = u * x + l * E + b * A),
            (e[6] = c * x + h * E + g * A),
            (e[7] = f * x + p * E + y * A),
            (e[8] = s * k + _ * T + m * z),
            (e[9] = u * k + l * T + b * z),
            (e[10] = c * k + h * T + g * z),
            (e[11] = f * k + p * T + y * z),
            t !== e &&
              ((e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            e);
      }
      function ct(e, t, n) {
        var r = Math.sin(n),
          a = Math.cos(n),
          i = t[4],
          o = t[5],
          s = t[6],
          u = t[7],
          c = t[8],
          f = t[9],
          _ = t[10],
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
          (e[4] = i * a + c * r),
          (e[5] = o * a + f * r),
          (e[6] = s * a + _ * r),
          (e[7] = u * a + l * r),
          (e[8] = c * a - i * r),
          (e[9] = f * a - o * r),
          (e[10] = _ * a - s * r),
          (e[11] = l * a - u * r),
          e
        );
      }
      function ft(e, t, n) {
        var r = Math.sin(n),
          a = Math.cos(n),
          i = t[0],
          o = t[1],
          s = t[2],
          u = t[3],
          c = t[8],
          f = t[9],
          _ = t[10],
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
          (e[0] = i * a - c * r),
          (e[1] = o * a - f * r),
          (e[2] = s * a - _ * r),
          (e[3] = u * a - l * r),
          (e[8] = i * r + c * a),
          (e[9] = o * r + f * a),
          (e[10] = s * r + _ * a),
          (e[11] = u * r + l * a),
          e
        );
      }
      function _t(e, t, n) {
        var r = Math.sin(n),
          a = Math.cos(n),
          i = t[0],
          o = t[1],
          s = t[2],
          u = t[3],
          c = t[4],
          f = t[5],
          _ = t[6],
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
          (e[0] = i * a + c * r),
          (e[1] = o * a + f * r),
          (e[2] = s * a + _ * r),
          (e[3] = u * a + l * r),
          (e[4] = c * a - i * r),
          (e[5] = f * a - o * r),
          (e[6] = _ * a - s * r),
          (e[7] = l * a - u * r),
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
      function dt(e, t) {
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
      function ht(e, t, n) {
        var r,
          a,
          i,
          o = n[0],
          s = n[1],
          u = n[2],
          c = Math.hypot(o, s, u);
        return c < d
          ? null
          : ((o *= c = 1 / c),
            (s *= c),
            (u *= c),
            (r = Math.sin(t)),
            (i = 1 - (a = Math.cos(t))),
            (e[0] = o * o * i + a),
            (e[1] = s * o * i + u * r),
            (e[2] = u * o * i - s * r),
            (e[3] = 0),
            (e[4] = o * s * i - u * r),
            (e[5] = s * s * i + a),
            (e[6] = u * s * i + o * r),
            (e[7] = 0),
            (e[8] = o * u * i + s * r),
            (e[9] = s * u * i - o * r),
            (e[10] = u * u * i + a),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e);
      }
      function pt(e, t) {
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
      function gt(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = r + r,
          u = a + a,
          c = i + i,
          f = r * s,
          _ = r * u,
          l = r * c,
          d = a * u,
          h = a * c,
          p = i * c,
          m = o * s,
          b = o * u,
          g = o * c;
        return (
          (e[0] = 1 - (d + p)),
          (e[1] = _ + g),
          (e[2] = l - b),
          (e[3] = 0),
          (e[4] = _ - g),
          (e[5] = 1 - (f + p)),
          (e[6] = h + m),
          (e[7] = 0),
          (e[8] = l + b),
          (e[9] = h - m),
          (e[10] = 1 - (f + d)),
          (e[11] = 0),
          (e[12] = n[0]),
          (e[13] = n[1]),
          (e[14] = n[2]),
          (e[15] = 1),
          e
        );
      }
      function yt(e, t) {
        var n = new h(3),
          r = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = r * r + a * a + i * i + o * o;
        return (
          _ > 0
            ? ((n[0] = (2 * (s * o + f * r + u * i - c * a)) / _),
              (n[1] = (2 * (u * o + f * a + c * r - s * i)) / _),
              (n[2] = (2 * (c * o + f * i + s * a - u * r)) / _))
            : ((n[0] = 2 * (s * o + f * r + u * i - c * a)),
              (n[1] = 2 * (u * o + f * a + c * r - s * i)),
              (n[2] = 2 * (c * o + f * i + s * a - u * r))),
          gt(e, t, n),
          e
        );
      }
      function vt(e, t) {
        return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
      }
      function wt(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[4],
          o = t[5],
          s = t[6],
          u = t[8],
          c = t[9],
          f = t[10];
        return (
          (e[0] = Math.hypot(n, r, a)),
          (e[1] = Math.hypot(i, o, s)),
          (e[2] = Math.hypot(u, c, f)),
          e
        );
      }
      function Mt(e, t) {
        var n = new h(3);
        wt(n, t);
        var r = 1 / n[0],
          a = 1 / n[1],
          i = 1 / n[2],
          o = t[0] * r,
          s = t[1] * a,
          u = t[2] * i,
          c = t[4] * r,
          f = t[5] * a,
          _ = t[6] * i,
          l = t[8] * r,
          d = t[9] * a,
          p = t[10] * i,
          m = o + f + p,
          b = 0;
        return (
          m > 0
            ? ((b = 2 * Math.sqrt(m + 1)),
              (e[3] = 0.25 * b),
              (e[0] = (_ - d) / b),
              (e[1] = (l - u) / b),
              (e[2] = (s - c) / b))
            : o > f && o > p
            ? ((b = 2 * Math.sqrt(1 + o - f - p)),
              (e[3] = (_ - d) / b),
              (e[0] = 0.25 * b),
              (e[1] = (s + c) / b),
              (e[2] = (l + u) / b))
            : f > p
            ? ((b = 2 * Math.sqrt(1 + f - o - p)),
              (e[3] = (l - u) / b),
              (e[0] = (s + c) / b),
              (e[1] = 0.25 * b),
              (e[2] = (_ + d) / b))
            : ((b = 2 * Math.sqrt(1 + p - o - f)),
              (e[3] = (s - c) / b),
              (e[0] = (l + u) / b),
              (e[1] = (_ + d) / b),
              (e[2] = 0.25 * b)),
          e
        );
      }
      function xt(e, t, n, r) {
        var a = t[0],
          i = t[1],
          o = t[2],
          s = t[3],
          u = a + a,
          c = i + i,
          f = o + o,
          _ = a * u,
          l = a * c,
          d = a * f,
          h = i * c,
          p = i * f,
          m = o * f,
          b = s * u,
          g = s * c,
          y = s * f,
          v = r[0],
          w = r[1],
          M = r[2];
        return (
          (e[0] = (1 - (h + m)) * v),
          (e[1] = (l + y) * v),
          (e[2] = (d - g) * v),
          (e[3] = 0),
          (e[4] = (l - y) * w),
          (e[5] = (1 - (_ + m)) * w),
          (e[6] = (p + b) * w),
          (e[7] = 0),
          (e[8] = (d + g) * M),
          (e[9] = (p - b) * M),
          (e[10] = (1 - (_ + h)) * M),
          (e[11] = 0),
          (e[12] = n[0]),
          (e[13] = n[1]),
          (e[14] = n[2]),
          (e[15] = 1),
          e
        );
      }
      function Et(e, t, n, r, a) {
        var i = t[0],
          o = t[1],
          s = t[2],
          u = t[3],
          c = i + i,
          f = o + o,
          _ = s + s,
          l = i * c,
          d = i * f,
          h = i * _,
          p = o * f,
          m = o * _,
          b = s * _,
          g = u * c,
          y = u * f,
          v = u * _,
          w = r[0],
          M = r[1],
          x = r[2],
          E = a[0],
          A = a[1],
          k = a[2],
          T = (1 - (p + b)) * w,
          z = (d + v) * w,
          R = (h - y) * w,
          L = (d - v) * M,
          S = (1 - (l + b)) * M,
          F = (m + g) * M,
          O = (h + y) * x,
          C = (m - g) * x,
          P = (1 - (l + p)) * x;
        return (
          (e[0] = T),
          (e[1] = z),
          (e[2] = R),
          (e[3] = 0),
          (e[4] = L),
          (e[5] = S),
          (e[6] = F),
          (e[7] = 0),
          (e[8] = O),
          (e[9] = C),
          (e[10] = P),
          (e[11] = 0),
          (e[12] = n[0] + E - (T * E + L * A + O * k)),
          (e[13] = n[1] + A - (z * E + S * A + C * k)),
          (e[14] = n[2] + k - (R * E + F * A + P * k)),
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
          s = r + r,
          u = a + a,
          c = n * o,
          f = r * o,
          _ = r * s,
          l = a * o,
          d = a * s,
          h = a * u,
          p = i * o,
          m = i * s,
          b = i * u;
        return (
          (e[0] = 1 - _ - h),
          (e[1] = f + b),
          (e[2] = l - m),
          (e[3] = 0),
          (e[4] = f - b),
          (e[5] = 1 - c - h),
          (e[6] = d + p),
          (e[7] = 0),
          (e[8] = l + m),
          (e[9] = d - p),
          (e[10] = 1 - c - _),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function kt(e, t, n, r, a, i, o) {
        var s = 1 / (n - t),
          u = 1 / (a - r),
          c = 1 / (i - o);
        return (
          (e[0] = 2 * i * s),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 2 * i * u),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = (n + t) * s),
          (e[9] = (a + r) * u),
          (e[10] = (o + i) * c),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = o * i * 2 * c),
          (e[15] = 0),
          e
        );
      }
      function Tt(e, t, n, r, a) {
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
            ? ((i = 1 / (r - a)),
              (e[10] = (a + r) * i),
              (e[14] = 2 * a * r * i))
            : ((e[10] = -1), (e[14] = -2 * r)),
          e
        );
      }
      function zt(e, t, n, r) {
        var a = Math.tan((t.upDegrees * Math.PI) / 180),
          i = Math.tan((t.downDegrees * Math.PI) / 180),
          o = Math.tan((t.leftDegrees * Math.PI) / 180),
          s = Math.tan((t.rightDegrees * Math.PI) / 180),
          u = 2 / (o + s),
          c = 2 / (a + i);
        return (
          (e[0] = u),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = c),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = -(o - s) * u * 0.5),
          (e[9] = (a - i) * c * 0.5),
          (e[10] = r / (n - r)),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = (r * n) / (n - r)),
          (e[15] = 0),
          e
        );
      }
      function Rt(e, t, n, r, a, i, o) {
        var s = 1 / (t - n),
          u = 1 / (r - a),
          c = 1 / (i - o);
        return (
          (e[0] = -2 * s),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = -2 * u),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 2 * c),
          (e[11] = 0),
          (e[12] = (t + n) * s),
          (e[13] = (a + r) * u),
          (e[14] = (o + i) * c),
          (e[15] = 1),
          e
        );
      }
      function Lt(e, t, n, r) {
        var a,
          i,
          o,
          s,
          u,
          c,
          f,
          _,
          l,
          h,
          p = t[0],
          m = t[1],
          b = t[2],
          g = r[0],
          y = r[1],
          v = r[2],
          w = n[0],
          M = n[1],
          x = n[2];
        return Math.abs(p - w) < d && Math.abs(m - M) < d && Math.abs(b - x) < d
          ? et(e)
          : ((f = p - w),
            (_ = m - M),
            (l = b - x),
            (a = y * (l *= h = 1 / Math.hypot(f, _, l)) - v * (_ *= h)),
            (i = v * (f *= h) - g * l),
            (o = g * _ - y * f),
            (h = Math.hypot(a, i, o))
              ? ((a *= h = 1 / h), (i *= h), (o *= h))
              : ((a = 0), (i = 0), (o = 0)),
            (s = _ * o - l * i),
            (u = l * a - f * o),
            (c = f * i - _ * a),
            (h = Math.hypot(s, u, c))
              ? ((s *= h = 1 / h), (u *= h), (c *= h))
              : ((s = 0), (u = 0), (c = 0)),
            (e[0] = a),
            (e[1] = s),
            (e[2] = f),
            (e[3] = 0),
            (e[4] = i),
            (e[5] = u),
            (e[6] = _),
            (e[7] = 0),
            (e[8] = o),
            (e[9] = c),
            (e[10] = l),
            (e[11] = 0),
            (e[12] = -(a * p + i * m + o * b)),
            (e[13] = -(s * p + u * m + c * b)),
            (e[14] = -(f * p + _ * m + l * b)),
            (e[15] = 1),
            e);
      }
      function St(e, t, n, r) {
        var a = t[0],
          i = t[1],
          o = t[2],
          s = r[0],
          u = r[1],
          c = r[2],
          f = a - n[0],
          _ = i - n[1],
          l = o - n[2],
          d = f * f + _ * _ + l * l;
        d > 0 && ((f *= d = 1 / Math.sqrt(d)), (_ *= d), (l *= d));
        var h = u * l - c * _,
          p = c * f - s * l,
          m = s * _ - u * f;
        return (
          (d = h * h + p * p + m * m) > 0 &&
            ((h *= d = 1 / Math.sqrt(d)), (p *= d), (m *= d)),
          (e[0] = h),
          (e[1] = p),
          (e[2] = m),
          (e[3] = 0),
          (e[4] = _ * m - l * p),
          (e[5] = l * h - f * m),
          (e[6] = f * p - _ * h),
          (e[7] = 0),
          (e[8] = f),
          (e[9] = _),
          (e[10] = l),
          (e[11] = 0),
          (e[12] = a),
          (e[13] = i),
          (e[14] = o),
          (e[15] = 1),
          e
        );
      }
      function Ft(e) {
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
      function Ot(e) {
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
      function Ct(e, t, n) {
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
      function Pt(e, t, n) {
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
      function It(e, t, n) {
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
      function Bt(e, t, n, r) {
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
      function Dt(e, t) {
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
      function Ut(e, t) {
        var n = e[0],
          r = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          f = e[8],
          _ = e[9],
          l = e[10],
          h = e[11],
          p = e[12],
          m = e[13],
          b = e[14],
          g = e[15],
          y = t[0],
          v = t[1],
          w = t[2],
          M = t[3],
          x = t[4],
          E = t[5],
          A = t[6],
          k = t[7],
          T = t[8],
          z = t[9],
          R = t[10],
          L = t[11],
          S = t[12],
          F = t[13],
          O = t[14],
          C = t[15];
        return (
          Math.abs(n - y) <= d * Math.max(1, Math.abs(n), Math.abs(y)) &&
          Math.abs(r - v) <= d * Math.max(1, Math.abs(r), Math.abs(v)) &&
          Math.abs(a - w) <= d * Math.max(1, Math.abs(a), Math.abs(w)) &&
          Math.abs(i - M) <= d * Math.max(1, Math.abs(i), Math.abs(M)) &&
          Math.abs(o - x) <= d * Math.max(1, Math.abs(o), Math.abs(x)) &&
          Math.abs(s - E) <= d * Math.max(1, Math.abs(s), Math.abs(E)) &&
          Math.abs(u - A) <= d * Math.max(1, Math.abs(u), Math.abs(A)) &&
          Math.abs(c - k) <= d * Math.max(1, Math.abs(c), Math.abs(k)) &&
          Math.abs(f - T) <= d * Math.max(1, Math.abs(f), Math.abs(T)) &&
          Math.abs(_ - z) <= d * Math.max(1, Math.abs(_), Math.abs(z)) &&
          Math.abs(l - R) <= d * Math.max(1, Math.abs(l), Math.abs(R)) &&
          Math.abs(h - L) <= d * Math.max(1, Math.abs(h), Math.abs(L)) &&
          Math.abs(p - S) <= d * Math.max(1, Math.abs(p), Math.abs(S)) &&
          Math.abs(m - F) <= d * Math.max(1, Math.abs(m), Math.abs(F)) &&
          Math.abs(b - O) <= d * Math.max(1, Math.abs(b), Math.abs(O)) &&
          Math.abs(g - C) <= d * Math.max(1, Math.abs(g), Math.abs(C))
        );
      }
      var Vt = it,
        jt = Pt;
      function qt() {
        var e = new h(3);
        return h != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
      }
      function Nt(e) {
        var t = new h(3);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function Gt(e) {
        var t = e[0],
          n = e[1],
          r = e[2];
        return Math.hypot(t, n, r);
      }
      function Wt(e, t, n) {
        var r = new h(3);
        return (r[0] = e), (r[1] = t), (r[2] = n), r;
      }
      function Zt(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function Ht(e, t, n, r) {
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
      function Qt(e, t, n) {
        return (
          (e[0] = t[0] / n[0]), (e[1] = t[1] / n[1]), (e[2] = t[2] / n[2]), e
        );
      }
      function $t(e, t) {
        return (
          (e[0] = Math.ceil(t[0])),
          (e[1] = Math.ceil(t[1])),
          (e[2] = Math.ceil(t[2])),
          e
        );
      }
      function Jt(e, t) {
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
      function sn(e, t) {
        var n = t[0] - e[0],
          r = t[1] - e[1],
          a = t[2] - e[2];
        return n * n + r * r + a * a;
      }
      function un(e) {
        var t = e[0],
          n = e[1],
          r = e[2];
        return t * t + n * n + r * r;
      }
      function cn(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), e;
      }
      function fn(e, t) {
        return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), (e[2] = 1 / t[2]), e;
      }
      function _n(e, t) {
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
      function dn(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = n[0],
          s = n[1],
          u = n[2];
        return (
          (e[0] = a * u - i * s),
          (e[1] = i * o - r * u),
          (e[2] = r * s - a * o),
          e
        );
      }
      function hn(e, t, n, r) {
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
      function pn(e, t, n, r, a, i) {
        var o = i * i,
          s = o * (2 * i - 3) + 1,
          u = o * (i - 2) + i,
          c = o * (i - 1),
          f = o * (3 - 2 * i);
        return (
          (e[0] = t[0] * s + n[0] * u + r[0] * c + a[0] * f),
          (e[1] = t[1] * s + n[1] * u + r[1] * c + a[1] * f),
          (e[2] = t[2] * s + n[2] * u + r[2] * c + a[2] * f),
          e
        );
      }
      function mn(e, t, n, r, a, i) {
        var o = 1 - i,
          s = o * o,
          u = i * i,
          c = s * o,
          f = 3 * i * s,
          _ = 3 * u * o,
          l = u * i;
        return (
          (e[0] = t[0] * c + n[0] * f + r[0] * _ + a[0] * l),
          (e[1] = t[1] * c + n[1] * f + r[1] * _ + a[1] * l),
          (e[2] = t[2] * c + n[2] * f + r[2] * _ + a[2] * l),
          e
        );
      }
      function bn(e, t) {
        t = t || 1;
        var n = 2 * p() * Math.PI,
          r = 2 * p() - 1,
          a = Math.sqrt(1 - r * r) * t;
        return (
          (e[0] = Math.cos(n) * a), (e[1] = Math.sin(n) * a), (e[2] = r * t), e
        );
      }
      function gn(e, t, n) {
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
      function yn(e, t, n) {
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
      function vn(e, t, n) {
        var r = n[0],
          a = n[1],
          i = n[2],
          o = n[3],
          s = t[0],
          u = t[1],
          c = t[2],
          f = a * c - i * u,
          _ = i * s - r * c,
          l = r * u - a * s,
          d = a * l - i * _,
          h = i * f - r * l,
          p = r * _ - a * f,
          m = 2 * o;
        return (
          (f *= m),
          (_ *= m),
          (l *= m),
          (d *= 2),
          (h *= 2),
          (p *= 2),
          (e[0] = s + f + d),
          (e[1] = u + _ + h),
          (e[2] = c + l + p),
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
      function xn(e, t, n, r) {
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
      function En(e, t) {
        var n = Wt(e[0], e[1], e[2]),
          r = Wt(t[0], t[1], t[2]);
        _n(n, n), _n(r, r);
        var a = ln(n, r);
        return a > 1 ? 0 : a < -1 ? Math.PI : Math.acos(a);
      }
      function An(e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), e;
      }
      function kn(e) {
        return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
      }
      function Tn(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
      }
      function zn(e, t) {
        var n = e[0],
          r = e[1],
          a = e[2],
          i = t[0],
          o = t[1],
          s = t[2];
        return (
          Math.abs(n - i) <= d * Math.max(1, Math.abs(n), Math.abs(i)) &&
          Math.abs(r - o) <= d * Math.max(1, Math.abs(r), Math.abs(o)) &&
          Math.abs(a - s) <= d * Math.max(1, Math.abs(a), Math.abs(s))
        );
      }
      var Rn,
        Ln = Xt,
        Sn = Kt,
        Fn = Qt,
        On = on,
        Cn = sn,
        Pn = Gt,
        In = un,
        Bn =
          ((Rn = qt()),
          function (e, t, n, r, a, i) {
            var o, s;
            for (
              t || (t = 3),
                n || (n = 0),
                s = r ? Math.min(r * t + n, e.length) : e.length,
                o = n;
              o < s;
              o += t
            )
              (Rn[0] = e[o]),
                (Rn[1] = e[o + 1]),
                (Rn[2] = e[o + 2]),
                a(Rn, Rn, i),
                (e[o] = Rn[0]),
                (e[o + 1] = Rn[1]),
                (e[o + 2] = Rn[2]);
            return e;
          });
      function Dn() {
        var e = new h(4);
        return (
          h != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0)),
          e
        );
      }
      function Un(e) {
        var t = new h(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      function Vn(e, t, n, r) {
        var a = new h(4);
        return (a[0] = e), (a[1] = t), (a[2] = n), (a[3] = r), a;
      }
      function jn(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      }
      function qn(e, t, n, r, a) {
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
      function Gn(e, t, n) {
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
      function Zn(e, t, n) {
        return (
          (e[0] = t[0] / n[0]),
          (e[1] = t[1] / n[1]),
          (e[2] = t[2] / n[2]),
          (e[3] = t[3] / n[3]),
          e
        );
      }
      function Hn(e, t) {
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
      function Qn(e, t) {
        return (
          (e[0] = Math.round(t[0])),
          (e[1] = Math.round(t[1])),
          (e[2] = Math.round(t[2])),
          (e[3] = Math.round(t[3])),
          e
        );
      }
      function $n(e, t, n) {
        return (
          (e[0] = t[0] * n),
          (e[1] = t[1] * n),
          (e[2] = t[2] * n),
          (e[3] = t[3] * n),
          e
        );
      }
      function Jn(e, t, n, r) {
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
        return (
          (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e
        );
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
      function sr(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
      }
      function ur(e, t, n, r) {
        var a = n[0] * r[1] - n[1] * r[0],
          i = n[0] * r[2] - n[2] * r[0],
          o = n[0] * r[3] - n[3] * r[0],
          s = n[1] * r[2] - n[2] * r[1],
          u = n[1] * r[3] - n[3] * r[1],
          c = n[2] * r[3] - n[3] * r[2],
          f = t[0],
          _ = t[1],
          l = t[2],
          d = t[3];
        return (
          (e[0] = _ * c - l * u + d * s),
          (e[1] = -f * c + l * o - d * i),
          (e[2] = f * u - _ * o + d * a),
          (e[3] = -f * s + _ * i - l * a),
          e
        );
      }
      function cr(e, t, n, r) {
        var a = t[0],
          i = t[1],
          o = t[2],
          s = t[3];
        return (
          (e[0] = a + r * (n[0] - a)),
          (e[1] = i + r * (n[1] - i)),
          (e[2] = o + r * (n[2] - o)),
          (e[3] = s + r * (n[3] - s)),
          e
        );
      }
      function fr(e, t) {
        var n, r, a, i, o, s;
        t = t || 1;
        do {
          o = (n = 2 * p() - 1) * n + (r = 2 * p() - 1) * r;
        } while (o >= 1);
        do {
          s = (a = 2 * p() - 1) * a + (i = 2 * p() - 1) * i;
        } while (s >= 1);
        var u = Math.sqrt((1 - o) / s);
        return (
          (e[0] = t * n),
          (e[1] = t * r),
          (e[2] = t * a * u),
          (e[3] = t * i * u),
          e
        );
      }
      function _r(e, t, n) {
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
          s = n[1],
          u = n[2],
          c = n[3],
          f = c * r + s * i - u * a,
          _ = c * a + u * r - o * i,
          l = c * i + o * a - s * r,
          d = -o * r - s * a - u * i;
        return (
          (e[0] = f * c + d * -o + _ * -u - l * -s),
          (e[1] = _ * c + d * -s + l * -o - f * -u),
          (e[2] = l * c + d * -u + f * -s - _ * -o),
          (e[3] = t[3]),
          e
        );
      }
      function dr(e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0), e;
      }
      function hr(e) {
        return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      function pr(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      }
      function mr(e, t) {
        var n = e[0],
          r = e[1],
          a = e[2],
          i = e[3],
          o = t[0],
          s = t[1],
          u = t[2],
          c = t[3];
        return (
          Math.abs(n - o) <= d * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(r - s) <= d * Math.max(1, Math.abs(r), Math.abs(s)) &&
          Math.abs(a - u) <= d * Math.max(1, Math.abs(a), Math.abs(u)) &&
          Math.abs(i - c) <= d * Math.max(1, Math.abs(i), Math.abs(c))
        );
      }
      var br = Gn,
        gr = Wn,
        yr = Zn,
        vr = er,
        wr = tr,
        Mr = nr,
        xr = rr,
        Er = (function () {
          var e = Dn();
          return function (t, n, r, a, i, o) {
            var s, u;
            for (
              n || (n = 4),
                r || (r = 0),
                u = a ? Math.min(a * n + r, t.length) : t.length,
                s = r;
              s < u;
              s += n
            )
              (e[0] = t[s]),
                (e[1] = t[s + 1]),
                (e[2] = t[s + 2]),
                (e[3] = t[s + 3]),
                i(e, e, o),
                (t[s] = e[0]),
                (t[s + 1] = e[1]),
                (t[s + 2] = e[2]),
                (t[s + 3] = e[3]);
            return t;
          };
        })();
      function Ar() {
        var e = new h(4);
        return (
          h != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)),
          (e[3] = 1),
          e
        );
      }
      function kr(e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      }
      function Tr(e, t, n) {
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
      function zr(e, t) {
        var n = 2 * Math.acos(t[3]),
          r = Math.sin(n / 2);
        return (
          r > d
            ? ((e[0] = t[0] / r), (e[1] = t[1] / r), (e[2] = t[2] / r))
            : ((e[0] = 1), (e[1] = 0), (e[2] = 0)),
          n
        );
      }
      function Rr(e, t) {
        var n = aa(e, t);
        return Math.acos(2 * n * n - 1);
      }
      function Lr(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = n[0],
          u = n[1],
          c = n[2],
          f = n[3];
        return (
          (e[0] = r * f + o * s + a * c - i * u),
          (e[1] = a * f + o * u + i * s - r * c),
          (e[2] = i * f + o * c + r * u - a * s),
          (e[3] = o * f - r * s - a * u - i * c),
          e
        );
      }
      function Sr(e, t, n) {
        n *= 0.5;
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(n),
          u = Math.cos(n);
        return (
          (e[0] = r * u + o * s),
          (e[1] = a * u + i * s),
          (e[2] = i * u - a * s),
          (e[3] = o * u - r * s),
          e
        );
      }
      function Fr(e, t, n) {
        n *= 0.5;
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(n),
          u = Math.cos(n);
        return (
          (e[0] = r * u - i * s),
          (e[1] = a * u + o * s),
          (e[2] = i * u + r * s),
          (e[3] = o * u - a * s),
          e
        );
      }
      function Or(e, t, n) {
        n *= 0.5;
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(n),
          u = Math.cos(n);
        return (
          (e[0] = r * u + a * s),
          (e[1] = a * u - r * s),
          (e[2] = i * u + o * s),
          (e[3] = o * u - i * s),
          e
        );
      }
      function Cr(e, t) {
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
      function Pr(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = Math.sqrt(n * n + r * r + a * a),
          s = Math.exp(i),
          u = o > 0 ? (s * Math.sin(o)) / o : 0;
        return (
          (e[0] = n * u),
          (e[1] = r * u),
          (e[2] = a * u),
          (e[3] = s * Math.cos(o)),
          e
        );
      }
      function Ir(e, t) {
        var n = t[0],
          r = t[1],
          a = t[2],
          i = t[3],
          o = Math.sqrt(n * n + r * r + a * a),
          s = o > 0 ? Math.atan2(o, i) / o : 0;
        return (
          (e[0] = n * s),
          (e[1] = r * s),
          (e[2] = a * s),
          (e[3] = 0.5 * Math.log(n * n + r * r + a * a + i * i)),
          e
        );
      }
      function Br(e, t, n) {
        return Ir(e, t), ra(e, e, n), Pr(e, e), e;
      }
      function Dr(e, t, n, r) {
        var a,
          i,
          o,
          s,
          u,
          c = t[0],
          f = t[1],
          _ = t[2],
          l = t[3],
          h = n[0],
          p = n[1],
          m = n[2],
          b = n[3];
        return (
          (i = c * h + f * p + _ * m + l * b) < 0 &&
            ((i = -i), (h = -h), (p = -p), (m = -m), (b = -b)),
          1 - i > d
            ? ((a = Math.acos(i)),
              (o = Math.sin(a)),
              (s = Math.sin((1 - r) * a) / o),
              (u = Math.sin(r * a) / o))
            : ((s = 1 - r), (u = r)),
          (e[0] = s * c + u * h),
          (e[1] = s * f + u * p),
          (e[2] = s * _ + u * m),
          (e[3] = s * l + u * b),
          e
        );
      }
      function Ur(e) {
        var t = p(),
          n = p(),
          r = p(),
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
          s = o ? 1 / o : 0;
        return (
          (e[0] = -n * s), (e[1] = -r * s), (e[2] = -a * s), (e[3] = i * s), e
        );
      }
      function jr(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
      }
      function qr(e, t) {
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
          s = Math.sin(n),
          u = Math.cos(n),
          c = Math.sin(r),
          f = Math.cos(r);
        return (
          (e[0] = i * u * f - o * s * c),
          (e[1] = o * s * f + i * u * c),
          (e[2] = o * u * c - i * s * f),
          (e[3] = o * u * f + i * s * c),
          e
        );
      }
      function Gr(e) {
        return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      var Wr,
        Zr,
        Hr,
        Yr,
        Xr,
        Kr,
        Qr = Un,
        $r = Vn,
        Jr = jn,
        ea = qn,
        ta = Nn,
        na = Lr,
        ra = $n,
        aa = sr,
        ia = cr,
        oa = nr,
        sa = oa,
        ua = rr,
        ca = ua,
        fa = or,
        _a = pr,
        la = mr,
        da =
          ((Wr = qt()),
          (Zr = Wt(1, 0, 0)),
          (Hr = Wt(0, 1, 0)),
          function (e, t, n) {
            var r = ln(t, n);
            return r < -0.999999
              ? (dn(Wr, Zr, t),
                Pn(Wr) < 1e-6 && dn(Wr, Hr, t),
                _n(Wr, Wr),
                Tr(e, Wr, Math.PI),
                e)
              : r > 0.999999
              ? ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e)
              : (dn(Wr, t, n),
                (e[0] = Wr[0]),
                (e[1] = Wr[1]),
                (e[2] = Wr[2]),
                (e[3] = 1 + r),
                fa(e, e));
          }),
        ha =
          ((Yr = Ar()),
          (Xr = Ar()),
          function (e, t, n, r, a, i) {
            return (
              Dr(Yr, t, a, i),
              Dr(Xr, n, r, i),
              Dr(e, Yr, Xr, 2 * i * (1 - i)),
              e
            );
          }),
        pa =
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
              fa(e, qr(e, Kr))
            );
          });
      function ma() {
        var e = new h(8);
        return (
          h != Float32Array &&
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
        var t = new h(8);
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
      function ga(e, t, n, r, a, i, o, s) {
        var u = new h(8);
        return (
          (u[0] = e),
          (u[1] = t),
          (u[2] = n),
          (u[3] = r),
          (u[4] = a),
          (u[5] = i),
          (u[6] = o),
          (u[7] = s),
          u
        );
      }
      function ya(e, t, n, r, a, i, o) {
        var s = new h(8);
        (s[0] = e), (s[1] = t), (s[2] = n), (s[3] = r);
        var u = 0.5 * a,
          c = 0.5 * i,
          f = 0.5 * o;
        return (
          (s[4] = u * r + c * n - f * t),
          (s[5] = c * r + f * e - u * n),
          (s[6] = f * r + u * t - c * e),
          (s[7] = -u * e - c * t - f * n),
          s
        );
      }
      function va(e, t, n) {
        var r = 0.5 * n[0],
          a = 0.5 * n[1],
          i = 0.5 * n[2],
          o = t[0],
          s = t[1],
          u = t[2],
          c = t[3];
        return (
          (e[0] = o),
          (e[1] = s),
          (e[2] = u),
          (e[3] = c),
          (e[4] = r * c + a * u - i * s),
          (e[5] = a * c + i * o - r * u),
          (e[6] = i * c + r * s - a * o),
          (e[7] = -r * o - a * s - i * u),
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
      function xa(e, t) {
        var n = Ar();
        Mt(n, t);
        var r = new h(3);
        return vt(r, t), va(e, n, r), e;
      }
      function Ea(e, t) {
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
      function ka(e, t, n, r, a, i, o, s, u) {
        return (
          (e[0] = t),
          (e[1] = n),
          (e[2] = r),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          (e[6] = s),
          (e[7] = u),
          e
        );
      }
      var Ta = Jr;
      function za(e, t) {
        return (e[0] = t[4]), (e[1] = t[5]), (e[2] = t[6]), (e[3] = t[7]), e;
      }
      var Ra = Jr;
      function La(e, t) {
        return (e[4] = t[0]), (e[5] = t[1]), (e[6] = t[2]), (e[7] = t[3]), e;
      }
      function Sa(e, t) {
        var n = t[4],
          r = t[5],
          a = t[6],
          i = t[7],
          o = -t[0],
          s = -t[1],
          u = -t[2],
          c = t[3];
        return (
          (e[0] = 2 * (n * c + i * o + r * u - a * s)),
          (e[1] = 2 * (r * c + i * s + a * o - n * u)),
          (e[2] = 2 * (a * c + i * u + n * s - r * o)),
          e
        );
      }
      function Fa(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = 0.5 * n[0],
          u = 0.5 * n[1],
          c = 0.5 * n[2],
          f = t[4],
          _ = t[5],
          l = t[6],
          d = t[7];
        return (
          (e[0] = r),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = o * s + a * c - i * u + f),
          (e[5] = o * u + i * s - r * c + _),
          (e[6] = o * c + r * u - a * s + l),
          (e[7] = -r * s - a * u - i * c + d),
          e
        );
      }
      function Oa(e, t, n) {
        var r = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = s * o + f * r + u * i - c * a,
          l = u * o + f * a + c * r - s * i,
          d = c * o + f * i + s * a - u * r,
          h = f * o - s * r - u * a - c * i;
        return (
          Sr(e, t, n),
          (r = e[0]),
          (a = e[1]),
          (i = e[2]),
          (o = e[3]),
          (e[4] = _ * o + h * r + l * i - d * a),
          (e[5] = l * o + h * a + d * r - _ * i),
          (e[6] = d * o + h * i + _ * a - l * r),
          (e[7] = h * o - _ * r - l * a - d * i),
          e
        );
      }
      function Ca(e, t, n) {
        var r = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = s * o + f * r + u * i - c * a,
          l = u * o + f * a + c * r - s * i,
          d = c * o + f * i + s * a - u * r,
          h = f * o - s * r - u * a - c * i;
        return (
          Fr(e, t, n),
          (r = e[0]),
          (a = e[1]),
          (i = e[2]),
          (o = e[3]),
          (e[4] = _ * o + h * r + l * i - d * a),
          (e[5] = l * o + h * a + d * r - _ * i),
          (e[6] = d * o + h * i + _ * a - l * r),
          (e[7] = h * o - _ * r - l * a - d * i),
          e
        );
      }
      function Pa(e, t, n) {
        var r = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          _ = s * o + f * r + u * i - c * a,
          l = u * o + f * a + c * r - s * i,
          d = c * o + f * i + s * a - u * r,
          h = f * o - s * r - u * a - c * i;
        return (
          Or(e, t, n),
          (r = e[0]),
          (a = e[1]),
          (i = e[2]),
          (o = e[3]),
          (e[4] = _ * o + h * r + l * i - d * a),
          (e[5] = l * o + h * a + d * r - _ * i),
          (e[6] = d * o + h * i + _ * a - l * r),
          (e[7] = h * o - _ * r - l * a - d * i),
          e
        );
      }
      function Ia(e, t, n) {
        var r = n[0],
          a = n[1],
          i = n[2],
          o = n[3],
          s = t[0],
          u = t[1],
          c = t[2],
          f = t[3];
        return (
          (e[0] = s * o + f * r + u * i - c * a),
          (e[1] = u * o + f * a + c * r - s * i),
          (e[2] = c * o + f * i + s * a - u * r),
          (e[3] = f * o - s * r - u * a - c * i),
          (s = t[4]),
          (u = t[5]),
          (c = t[6]),
          (f = t[7]),
          (e[4] = s * o + f * r + u * i - c * a),
          (e[5] = u * o + f * a + c * r - s * i),
          (e[6] = c * o + f * i + s * a - u * r),
          (e[7] = f * o - s * r - u * a - c * i),
          e
        );
      }
      function Ba(e, t, n) {
        var r = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = n[0],
          u = n[1],
          c = n[2],
          f = n[3];
        return (
          (e[0] = r * f + o * s + a * c - i * u),
          (e[1] = a * f + o * u + i * s - r * c),
          (e[2] = i * f + o * c + r * u - a * s),
          (e[3] = o * f - r * s - a * u - i * c),
          (s = n[4]),
          (u = n[5]),
          (c = n[6]),
          (f = n[7]),
          (e[4] = r * f + o * s + a * c - i * u),
          (e[5] = a * f + o * u + i * s - r * c),
          (e[6] = i * f + o * c + r * u - a * s),
          (e[7] = o * f - r * s - a * u - i * c),
          e
        );
      }
      function Da(e, t, n, r) {
        if (Math.abs(r) < d) return Ea(e, t);
        var a = Math.hypot(n[0], n[1], n[2]);
        r *= 0.5;
        var i = Math.sin(r),
          o = (i * n[0]) / a,
          s = (i * n[1]) / a,
          u = (i * n[2]) / a,
          c = Math.cos(r),
          f = t[0],
          _ = t[1],
          l = t[2],
          h = t[3];
        (e[0] = f * c + h * o + _ * u - l * s),
          (e[1] = _ * c + h * s + l * o - f * u),
          (e[2] = l * c + h * u + f * s - _ * o),
          (e[3] = h * c - f * o - _ * s - l * u);
        var p = t[4],
          m = t[5],
          b = t[6],
          g = t[7];
        return (
          (e[4] = p * c + g * o + m * u - b * s),
          (e[5] = m * c + g * s + b * o - p * u),
          (e[6] = b * c + g * u + p * s - m * o),
          (e[7] = g * c - p * o - m * s - b * u),
          e
        );
      }
      function Ua(e, t, n) {
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
          s = n[4],
          u = n[5],
          c = n[6],
          f = n[7],
          _ = t[4],
          l = t[5],
          d = t[6],
          h = t[7],
          p = n[0],
          m = n[1],
          b = n[2],
          g = n[3];
        return (
          (e[0] = r * g + o * p + a * b - i * m),
          (e[1] = a * g + o * m + i * p - r * b),
          (e[2] = i * g + o * b + r * m - a * p),
          (e[3] = o * g - r * p - a * m - i * b),
          (e[4] =
            r * f + o * s + a * c - i * u + _ * g + h * p + l * b - d * m),
          (e[5] =
            a * f + o * u + i * s - r * c + l * g + h * m + d * p - _ * b),
          (e[6] =
            i * f + o * c + r * u - a * s + d * g + h * b + _ * m - l * p),
          (e[7] =
            o * f - r * s - a * u - i * c + h * g - _ * p - l * m - d * b),
          e
        );
      }
      var ja = Va;
      function qa(e, t, n) {
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
      function Ga(e, t, n, r) {
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
      function Za(e, t) {
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
      var Ha = oa,
        Ya = Ha,
        Xa = ua,
        Ka = Xa;
      function Qa(e, t) {
        var n = Xa(t);
        if (n > 0) {
          n = Math.sqrt(n);
          var r = t[0] / n,
            a = t[1] / n,
            i = t[2] / n,
            o = t[3] / n,
            s = t[4],
            u = t[5],
            c = t[6],
            f = t[7],
            _ = r * s + a * u + i * c + o * f;
          (e[0] = r),
            (e[1] = a),
            (e[2] = i),
            (e[3] = o),
            (e[4] = (s - r * _) / n),
            (e[5] = (u - a * _) / n),
            (e[6] = (c - i * _) / n),
            (e[7] = (f - o * _) / n);
        }
        return e;
      }
      function $a(e) {
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
      function Ja(e, t) {
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
          s = e[5],
          u = e[6],
          c = e[7],
          f = t[0],
          _ = t[1],
          l = t[2],
          h = t[3],
          p = t[4],
          m = t[5],
          b = t[6],
          g = t[7];
        return (
          Math.abs(n - f) <= d * Math.max(1, Math.abs(n), Math.abs(f)) &&
          Math.abs(r - _) <= d * Math.max(1, Math.abs(r), Math.abs(_)) &&
          Math.abs(a - l) <= d * Math.max(1, Math.abs(a), Math.abs(l)) &&
          Math.abs(i - h) <= d * Math.max(1, Math.abs(i), Math.abs(h)) &&
          Math.abs(o - p) <= d * Math.max(1, Math.abs(o), Math.abs(p)) &&
          Math.abs(s - m) <= d * Math.max(1, Math.abs(s), Math.abs(m)) &&
          Math.abs(u - b) <= d * Math.max(1, Math.abs(u), Math.abs(b)) &&
          Math.abs(c - g) <= d * Math.max(1, Math.abs(c), Math.abs(g))
        );
      }
      function ti() {
        var e = new h(2);
        return h != Float32Array && ((e[0] = 0), (e[1] = 0)), e;
      }
      function ni(e) {
        var t = new h(2);
        return (t[0] = e[0]), (t[1] = e[1]), t;
      }
      function ri(e, t) {
        var n = new h(2);
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
      function si(e, t, n) {
        return (e[0] = t[0] - n[0]), (e[1] = t[1] - n[1]), e;
      }
      function ui(e, t, n) {
        return (e[0] = t[0] * n[0]), (e[1] = t[1] * n[1]), e;
      }
      function ci(e, t, n) {
        return (e[0] = t[0] / n[0]), (e[1] = t[1] / n[1]), e;
      }
      function fi(e, t) {
        return (e[0] = Math.ceil(t[0])), (e[1] = Math.ceil(t[1])), e;
      }
      function _i(e, t) {
        return (e[0] = Math.floor(t[0])), (e[1] = Math.floor(t[1])), e;
      }
      function li(e, t, n) {
        return (e[0] = Math.min(t[0], n[0])), (e[1] = Math.min(t[1], n[1])), e;
      }
      function di(e, t, n) {
        return (e[0] = Math.max(t[0], n[0])), (e[1] = Math.max(t[1], n[1])), e;
      }
      function hi(e, t) {
        return (e[0] = Math.round(t[0])), (e[1] = Math.round(t[1])), e;
      }
      function pi(e, t, n) {
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
      function gi(e, t) {
        var n = t[0] - e[0],
          r = t[1] - e[1];
        return n * n + r * r;
      }
      function yi(e) {
        var t = e[0],
          n = e[1];
        return Math.hypot(t, n);
      }
      function vi(e) {
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
      function xi(e, t) {
        var n = t[0],
          r = t[1],
          a = n * n + r * r;
        return (
          a > 0 && (a = 1 / Math.sqrt(a)),
          (e[0] = t[0] * a),
          (e[1] = t[1] * a),
          e
        );
      }
      function Ei(e, t) {
        return e[0] * t[0] + e[1] * t[1];
      }
      function Ai(e, t, n) {
        var r = t[0] * n[1] - t[1] * n[0];
        return (e[0] = e[1] = 0), (e[2] = r), e;
      }
      function ki(e, t, n, r) {
        var a = t[0],
          i = t[1];
        return (e[0] = a + r * (n[0] - a)), (e[1] = i + r * (n[1] - i)), e;
      }
      function Ti(e, t) {
        t = t || 1;
        var n = 2 * p() * Math.PI;
        return (e[0] = Math.cos(n) * t), (e[1] = Math.sin(n) * t), e;
      }
      function zi(e, t, n) {
        var r = t[0],
          a = t[1];
        return (e[0] = n[0] * r + n[2] * a), (e[1] = n[1] * r + n[3] * a), e;
      }
      function Ri(e, t, n) {
        var r = t[0],
          a = t[1];
        return (
          (e[0] = n[0] * r + n[2] * a + n[4]),
          (e[1] = n[1] * r + n[3] * a + n[5]),
          e
        );
      }
      function Li(e, t, n) {
        var r = t[0],
          a = t[1];
        return (
          (e[0] = n[0] * r + n[3] * a + n[6]),
          (e[1] = n[1] * r + n[4] * a + n[7]),
          e
        );
      }
      function Si(e, t, n) {
        var r = t[0],
          a = t[1];
        return (
          (e[0] = n[0] * r + n[4] * a + n[12]),
          (e[1] = n[1] * r + n[5] * a + n[13]),
          e
        );
      }
      function Fi(e, t, n, r) {
        var a = t[0] - n[0],
          i = t[1] - n[1],
          o = Math.sin(r),
          s = Math.cos(r);
        return (e[0] = a * s - i * o + n[0]), (e[1] = a * o + i * s + n[1]), e;
      }
      function Oi(e, t) {
        var n = e[0],
          r = e[1],
          a = t[0],
          i = t[1],
          o = n * n + r * r;
        o > 0 && (o = 1 / Math.sqrt(o));
        var s = a * a + i * i;
        s > 0 && (s = 1 / Math.sqrt(s));
        var u = (n * a + r * i) * o * s;
        return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
      }
      function Ci(e) {
        return (e[0] = 0), (e[1] = 0), e;
      }
      function Pi(e) {
        return "vec2(" + e[0] + ", " + e[1] + ")";
      }
      function Ii(e, t) {
        return e[0] === t[0] && e[1] === t[1];
      }
      function Bi(e, t) {
        var n = e[0],
          r = e[1],
          a = t[0],
          i = t[1];
        return (
          Math.abs(n - a) <= d * Math.max(1, Math.abs(n), Math.abs(a)) &&
          Math.abs(r - i) <= d * Math.max(1, Math.abs(r), Math.abs(i))
        );
      }
      var Di = yi,
        Ui = si,
        Vi = ui,
        ji = ci,
        qi = bi,
        Ni = gi,
        Gi = vi,
        Wi = (function () {
          var e = ti();
          return function (t, n, r, a, i, o) {
            var s, u;
            for (
              n || (n = 2),
                r || (r = 0),
                u = a ? Math.min(a * n + r, t.length) : t.length,
                s = r;
              s < u;
              s += n
            )
              (e[0] = t[s]),
                (e[1] = t[s + 1]),
                i(e, e, o),
                (t[s] = e[0]),
                (t[s + 1] = e[1]);
            return t;
          };
        })();
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.zcwarn = t.zcerr = t.zcout = t.setLogLevel = void 0);
      const r = n(9);
      let a = r.log_level_t.LOG_LEVEL_ERROR;
      (t.setLogLevel = function (e) {
        a = e;
      }),
        (t.zcout = function (...e) {
          a >= r.log_level_t.LOG_LEVEL_VERBOSE &&
            console.log("[Zappar] INFO", ...e);
        }),
        (t.zcerr = function (...e) {
          a >= r.log_level_t.LOG_LEVEL_ERROR &&
            console.error("[Zappar] ERROR", ...e);
        }),
        (t.zcwarn = function (...e) {
          a >= r.log_level_t.LOG_LEVEL_VERBOSE &&
            console.log("[Zappar] WARN", ...e);
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.linkProgram = t.compileShader = void 0),
        (t.compileShader = function (e, t, n) {
          let r = e.createShader(t);
          if (!r) throw new Error("Unable to create shader");
          e.shaderSource(r, n), e.compileShader(r);
          let a = e.getShaderInfoLog(r);
          if (a && a.trim().length > 0)
            throw new Error("Shader compile error: " + a);
          return r;
        }),
        (t.linkProgram = function (e, t) {
          e.linkProgram(t);
          let n = e.getProgramInfoLog(t);
          if (n && n.trim().length > 0) throw new Error("Unable to link: " + n);
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.log_level_t =
          t.instant_world_tracker_transform_orientation_t =
          t.face_landmark_name_t =
          t.barcode_format_t =
            void 0),
        (function (e) {
          (e[(e.UNKNOWN = 131072)] = "UNKNOWN"),
            (e[(e.AZTEC = 1)] = "AZTEC"),
            (e[(e.CODABAR = 2)] = "CODABAR"),
            (e[(e.CODE_39 = 4)] = "CODE_39"),
            (e[(e.CODE_93 = 8)] = "CODE_93"),
            (e[(e.CODE_128 = 16)] = "CODE_128"),
            (e[(e.DATA_MATRIX = 32)] = "DATA_MATRIX"),
            (e[(e.EAN_8 = 64)] = "EAN_8"),
            (e[(e.EAN_13 = 128)] = "EAN_13"),
            (e[(e.ITF = 256)] = "ITF"),
            (e[(e.MAXICODE = 512)] = "MAXICODE"),
            (e[(e.PDF_417 = 1024)] = "PDF_417"),
            (e[(e.QR_CODE = 2048)] = "QR_CODE"),
            (e[(e.RSS_14 = 4096)] = "RSS_14"),
            (e[(e.RSS_EXPANDED = 8192)] = "RSS_EXPANDED"),
            (e[(e.UPC_A = 16384)] = "UPC_A"),
            (e[(e.UPC_E = 32768)] = "UPC_E"),
            (e[(e.UPC_EAN_EXTENSION = 65536)] = "UPC_EAN_EXTENSION"),
            (e[(e.ALL = 131071)] = "ALL");
        })(t.barcode_format_t || (t.barcode_format_t = {})),
        (function (e) {
          (e[(e.EYE_LEFT = 0)] = "EYE_LEFT"),
            (e[(e.EYE_RIGHT = 1)] = "EYE_RIGHT"),
            (e[(e.EAR_LEFT = 2)] = "EAR_LEFT"),
            (e[(e.EAR_RIGHT = 3)] = "EAR_RIGHT"),
            (e[(e.NOSE_BRIDGE = 4)] = "NOSE_BRIDGE"),
            (e[(e.NOSE_TIP = 5)] = "NOSE_TIP"),
            (e[(e.NOSE_BASE = 6)] = "NOSE_BASE"),
            (e[(e.LIP_TOP = 7)] = "LIP_TOP"),
            (e[(e.LIP_BOTTOM = 8)] = "LIP_BOTTOM"),
            (e[(e.MOUTH_CENTER = 9)] = "MOUTH_CENTER"),
            (e[(e.CHIN = 10)] = "CHIN"),
            (e[(e.EYEBROW_LEFT = 11)] = "EYEBROW_LEFT"),
            (e[(e.EYEBROW_RIGHT = 12)] = "EYEBROW_RIGHT");
        })(t.face_landmark_name_t || (t.face_landmark_name_t = {})),
        (function (e) {
          (e[(e.WORLD = 3)] = "WORLD"),
            (e[(e.MINUS_Z_AWAY_FROM_USER = 4)] = "MINUS_Z_AWAY_FROM_USER"),
            (e[(e.MINUS_Z_HEADING = 5)] = "MINUS_Z_HEADING"),
            (e[(e.UNCHANGED = 6)] = "UNCHANGED");
        })(
          t.instant_world_tracker_transform_orientation_t ||
            (t.instant_world_tracker_transform_orientation_t = {})
        ),
        (function (e) {
          (e[(e.LOG_LEVEL_NONE = 0)] = "LOG_LEVEL_NONE"),
            (e[(e.LOG_LEVEL_ERROR = 1)] = "LOG_LEVEL_ERROR"),
            (e[(e.LOG_LEVEL_WARNING = 2)] = "LOG_LEVEL_WARNING"),
            (e[(e.LOG_LEVEL_VERBOSE = 3)] = "LOG_LEVEL_VERBOSE");
        })(t.log_level_t || (t.log_level_t = {}));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cameraRotationForScreenOrientation = t.projectionMatrix = void 0);
      const r = n(0);
      function a(e) {
        if (window.screen.orientation)
          switch (window.screen.orientation.type) {
            case "portrait-primary":
              return e ? 90 : 270;
            case "landscape-secondary":
              return 180;
            case "portrait-secondary":
              return e ? 270 : 90;
            default:
              return 0;
          }
        else if (void 0 !== window.orientation)
          switch (window.orientation) {
            case 0:
              return e ? 90 : 270;
            case 90:
              return 0;
            case 180:
              return e ? 270 : 90;
            case -90:
              return 180;
          }
        return 0;
      }
      (t.projectionMatrix = function (e, t, n, i = 0.01, o = 100) {
        let s = 2 * e[2],
          u = 2 * e[3],
          c = r.mat4.create();
        r.mat4.frustum(
          c,
          (i * (-0.5 - e[2])) / e[0],
          (i * (s - 0.5 - e[2])) / e[0],
          (i * (u - 0.5 - e[3])) / e[1],
          (i * (-0.5 - e[3])) / e[1],
          i,
          o
        ),
          (c[4] *= -1),
          (c[5] *= -1),
          (c[6] *= -1),
          (c[7] *= -1);
        let f = r.mat4.create();
        r.mat4.fromScaling(f, [0.5 * s, 0.5 * u, 1]),
          r.mat4.multiply(c, f, c),
          r.mat4.fromRotation(f, (a(!1) * Math.PI) / 180, [0, 0, 1]),
          r.mat4.multiply(c, f, c);
        let _ = r.vec3.create();
        (_[0] = s), (_[1] = u), (_[2] = 0), r.vec3.transformMat4(_, _, f);
        let l = Math.abs(_[0]),
          d = Math.abs(_[1]),
          h = 1;
        return (
          (h = l / t > d / n ? n / d : t / l),
          r.mat4.fromScaling(f, [h, h, 1]),
          r.mat4.multiply(c, f, c),
          r.mat4.fromScaling(f, [2 / t, 2 / n, 1]),
          r.mat4.multiply(c, f, c),
          r.mat4.fromRotation(f, (a(!1) * Math.PI) / -180, [0, 0, 1]),
          r.mat4.multiply(c, c, f),
          c
        );
      }),
        (t.cameraRotationForScreenOrientation = a);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.applyScreenCounterRotation = t.Pipeline = void 0);
      const r = n(26),
        a = n(0),
        i = n(4),
        o = n(27),
        s = n(28),
        u = n(6),
        c = n(7),
        f = n(1);
      let _ = new Map();
      class l {
        constructor(e, t, n) {
          (this._client = e),
            (this._impl = t),
            (this._mgr = n),
            (this.pendingMessages = []),
            (this.cameraTokens = new Map()),
            (this.nextCameraToken = 1),
            (this.tokensInFlight = 0),
            (this.videoTextures = []),
            (this.cameraPixelArrays = []),
            (this.onGLContextReset = new c.Event());
        }
        static create(e, t) {
          let n = e.pipeline_create();
          return _.set(n, new l(e, n, t)), n;
        }
        static get(e) {
          return _.get(e);
        }
        frameUpdate(e) {
          for (let t of this.pendingMessages)
            e.processMessages(t),
              this._mgr.postOutgoingMessage({ t: "buf", p: this._impl, d: t }, [
                t,
              ]);
          this.pendingMessages = [];
          let t = this._client.pipeline_camera_frame_user_data(this._impl);
          if (t)
            for (let e of this.cameraTokens)
              e[0] < t &&
                (e[1].texture && this.videoTextures.push(e[1].texture),
                this.cameraTokens.delete(e[0]));
        }
        cameraTokenReturn(e, t) {
          this.cameraPixelArrays.push(t), this.tokensInFlight--;
        }
        getVideoTexture() {
          return this.videoTextures.pop();
        }
        destroy() {
          this._client.pipeline_destroy(this._impl), _.delete(this._impl);
        }
        getCurrentCameraInfo() {
          let e = this._client.pipeline_camera_frame_user_data(this._impl);
          if (e) return this.cameraTokens.get(e);
        }
        cameraFrameDrawGL(e, t, n) {
          if (!this.glContext) return;
          let a = this.getCurrentCameraInfo();
          a &&
            (this._cameraDraw ||
              (this._cameraDraw = new r.CameraDraw(this.glContext)),
            this._cameraDraw.drawCameraFrame(e, t, a, !0 === n));
        }
        glContextLost() {
          this._cameraDraw && this._cameraDraw.dispose(),
            this._faceDraw && this._faceDraw.dispose(),
            this._faceProjectDraw && this._faceProjectDraw.dispose(),
            delete this._cameraDraw,
            delete this._faceDraw,
            delete this._faceProjectDraw,
            u.disposeDrawPlane(),
            this.onGLContextReset.emit();
          for (let e of this.videoTextures)
            this.glContext && this.glContext.deleteTexture(e);
          this.videoTextures = [];
          for (let e of this.cameraTokens)
            this.glContext &&
              e[1].texture &&
              this.glContext.deleteTexture(e[1].texture),
              (e[1].texture = void 0);
          this.glContext = void 0;
        }
        glContextSet(e, t) {
          this.glContextLost(), (this.glContext = e), (t = t || []);
          for (let n = 0; n < 4; n++) {
            let r = t[n] || e.createTexture();
            r &&
              (e.bindTexture(e.TEXTURE_2D, r),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
              this.videoTextures.push(r));
          }
          e.bindTexture(e.TEXTURE_2D, null);
        }
        drawFace(e, t, n, r) {
          if (!this.glContext) return;
          this._faceDraw || (this._faceDraw = new o.FaceDraw(this.glContext));
          let i = a.mat4.create();
          a.mat4.multiply(i, e, t),
            a.mat4.multiply(i, i, n),
            this._faceDraw.drawFace(i, r);
        }
        drawFaceProject(e, t, n, r, a, i) {
          this.glContext &&
            (this._faceProjectDraw ||
              (this._faceProjectDraw = new s.FaceDrawProject(this.glContext)),
            this._faceProjectDraw.drawFace(e, t, n, r, a, i));
        }
        cameraFrameTexture() {
          var e;
          return null === (e = this.getCurrentCameraInfo()) || void 0 === e
            ? void 0
            : e.texture;
        }
        cameraFrameTextureMatrix(e, t, n) {
          let i = this.getCurrentCameraInfo();
          return i
            ? r.cameraFrameTextureMatrix(
                i.dataWidth,
                i.dataHeight,
                e,
                t,
                i.uvTransform,
                n
              )
            : a.mat4.create();
        }
        cameraFrameUserFacing() {
          var e;
          return (
            (null === (e = this.getCurrentCameraInfo()) || void 0 === e
              ? void 0
              : e.userFacing) || !1
          );
        }
        cameraPoseWithAttitude(e) {
          let t = d(
            this.getCurrentCameraInfo(),
            this._client.pipeline_camera_frame_camera_attitude(this._impl)
          );
          if (e) {
            let e = a.mat4.create();
            a.mat4.fromScaling(e, [-1, 1, 1]),
              a.mat4.multiply(t, e, t),
              a.mat4.multiply(t, t, e);
          }
          return a.mat4.invert(t, t), t;
        }
        processGL() {
          if (!this.glContext)
            return void f.zcerr(
              "no GL context for camera frames - please call pipeline_gl_context_set"
            );
          if (!this.currentCameraSource) return;
          if (this.tokensInFlight > 0)
            return void this.currentCameraSource.getFrame(!0);
          let e = this.currentCameraSource.getFrame(!1);
          if (!e) return;
          let t = this.nextCameraToken++;
          this.cameraTokens.set(t, e);
          let n = {
            d: e.data,
            p: this._impl,
            width: e.dataWidth,
            height: e.dataHeight,
            token: t,
            userFacing: e.userFacing,
            t: "cameraFrameC2S",
          };
          this.tokensInFlight++, this._mgr.postOutgoingMessage(n, [e.data]);
        }
        motionAccelerometerSubmit(e, t, n, r) {
          this._client.pipeline_motion_accelerometer_submit(
            this._impl,
            e,
            t,
            n,
            r
          );
        }
        motionRotationRateSubmit(e, t, n, r) {
          this._client.pipeline_motion_rotation_rate_submit(
            this._impl,
            e,
            t,
            n,
            r
          );
        }
        motionAttitudeSubmit(e, t, n, r) {
          this._client.pipeline_motion_attitude_submit(this._impl, e, t, n, r);
        }
      }
      function d(e, t) {
        let n = !1;
        n = !!e && e.userFacing;
        let r = a.mat4.create();
        return (
          a.mat4.fromRotation(
            r,
            (i.cameraRotationForScreenOrientation(n) * Math.PI) / 180,
            [0, 0, 1]
          ),
          a.mat4.multiply(r, r, t),
          r
        );
      }
      (t.Pipeline = l), (t.applyScreenCounterRotation = d);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.drawPlane = t.disposeDrawPlane = void 0);
      const r = n(2);
      let a,
        i,
        o,
        s = {};
      function u(e) {
        if (o) return o;
        if (((o = e.createBuffer()), !o))
          throw new Error("Unable to create buffer object");
        return (
          e.bindBuffer(e.ARRAY_BUFFER, o),
          e.bufferData(
            e.ARRAY_BUFFER,
            new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]),
            e.STATIC_DRAW
          ),
          e.bindBuffer(e.ARRAY_BUFFER, null),
          o
        );
      }
      (t.disposeDrawPlane = function () {
        (a = void 0), (i = void 0), (o = void 0), (s = {});
      }),
        (t.drawPlane = function (e, t, n, r, a) {
          let o = c(e),
            f = (function (e) {
              if (i) return i;
              if (((i = e.createBuffer()), !i))
                throw new Error("Unable to create buffer object");
              return (
                e.bindBuffer(e.ARRAY_BUFFER, i),
                e.bufferData(
                  e.ARRAY_BUFFER,
                  new Float32Array([
                    -0.5, 0.125, 0, -0.5, -0.125, 0, 0.5, 0.125, 0, 0.5, -0.125,
                    0,
                  ]),
                  e.STATIC_DRAW
                ),
                e.bindBuffer(e.ARRAY_BUFFER, null),
                i
              );
            })(e),
            _ = u(e);
          e.disable(e.DEPTH_TEST),
            e.useProgram(o.prog),
            e.uniformMatrix4fv(o.unif_proj, !1, t),
            e.uniformMatrix4fv(o.unif_camera, !1, n),
            e.uniformMatrix4fv(o.unif_matrix, !1, r),
            e.bindBuffer(e.ARRAY_BUFFER, f),
            e.activeTexture(e.TEXTURE0),
            e.bindTexture(
              e.TEXTURE_2D,
              (function (e, t) {
                if (s[t]) return s[t];
                let n = e.createTexture();
                if (!n) throw new Error("Unable to create texture");
                (s[t] = n), e.bindTexture(e.TEXTURE_2D, n);
                const r = e.RGBA,
                  a = e.RGBA,
                  i = e.UNSIGNED_BYTE,
                  o = new Uint8Array([0, 0, 255, 255]);
                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                  e.texImage2D(e.TEXTURE_2D, 0, r, 1, 1, 0, a, i, o);
                const u = new Image();
                return (
                  (u.onload = function () {
                    e.bindTexture(e.TEXTURE_2D, n),
                      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                      e.texImage2D(e.TEXTURE_2D, 0, r, a, i, u),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_WRAP_S,
                        e.CLAMP_TO_EDGE
                      ),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_WRAP_T,
                        e.CLAMP_TO_EDGE
                      ),
                      e.texParameteri(
                        e.TEXTURE_2D,
                        e.TEXTURE_MIN_FILTER,
                        e.LINEAR
                      );
                  }),
                  (u.src = t),
                  n
                );
              })(e, a)
            ),
            e.uniform1i(o.unif_skinSampler, 0),
            e.vertexAttribPointer(o.attr_position, 3, e.FLOAT, !1, 12, 0),
            e.enableVertexAttribArray(o.attr_position),
            e.bindBuffer(e.ARRAY_BUFFER, _),
            e.vertexAttribPointer(o.attr_textureCoord, 2, e.FLOAT, !1, 8, 0),
            e.enableVertexAttribArray(o.attr_textureCoord),
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
            e.disableVertexAttribArray(o.attr_position),
            e.bindBuffer(e.ARRAY_BUFFER, null);
        });
      function c(e) {
        if (a) return a;
        let t = e.createProgram();
        if (!t) throw new Error("Unable to create program");
        let n = r.compileShader(
            e,
            e.VERTEX_SHADER,
            "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 projMatrix;\nuniform mat4 cameraMatrix;\nuniform mat4 modelViewMatrix;\nattribute vec4 position;\nattribute vec2 textureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main()\n{\n    gl_Position = projMatrix * cameraMatrix * modelViewMatrix * position;\n    vTextureCoord = textureCoord;\n}"
          ),
          i = r.compileShader(
            e,
            e.FRAGMENT_SHADER,
            "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nuniform sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2D(skinSampler, vTextureCoord);\n}"
          );
        e.attachShader(t, n), e.attachShader(t, i), r.linkProgram(e, t);
        let o = e.getUniformLocation(t, "projMatrix");
        if (!o) throw new Error("Unable to get uniform location projMatrix");
        let s = e.getUniformLocation(t, "modelViewMatrix");
        if (!s)
          throw new Error("Unable to get uniform location modelViewMatrix");
        let u = e.getUniformLocation(t, "cameraMatrix");
        if (!u) throw new Error("Unable to get uniform location cameraMatrix");
        let c = e.getUniformLocation(t, "skinSampler");
        if (!c) throw new Error("Unable to get uniform location skinSampler");
        return (
          (a = {
            prog: t,
            unif_matrix: s,
            unif_proj: o,
            unif_camera: u,
            unif_skinSampler: c,
            attr_position: e.getAttribLocation(t, "position"),
            attr_textureCoord: e.getAttribLocation(t, "textureCoord"),
          }),
          a
        );
      }
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
      var r;
      !(function (a, i) {
        "use strict";
        var o = "model",
          s = "name",
          u = "type",
          c = "vendor",
          f = "version",
          _ = "mobile",
          l = "tablet",
          d = "smarttv",
          h = function (e) {
            var t = {};
            for (var n in e) t[e[n].toUpperCase()] = e[n];
            return t;
          },
          p = function (e, t) {
            return "string" == typeof e && -1 !== m(t).indexOf(m(e));
          },
          m = function (e) {
            return e.toLowerCase();
          },
          b = function (e, t) {
            if ("string" == typeof e)
              return (
                (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
                void 0 === t ? e : e.substring(0, 255)
              );
          },
          g = function (e, t) {
            for (var n, r, a, i, o, s, u = 0; u < t.length && !o; ) {
              var c = t[u],
                f = t[u + 1];
              for (n = r = 0; n < c.length && !o; )
                if ((o = c[n++].exec(e)))
                  for (a = 0; a < f.length; a++)
                    (s = o[++r]),
                      "object" == typeof (i = f[a]) && i.length > 0
                        ? 2 == i.length
                          ? "function" == typeof i[1]
                            ? (this[i[0]] = i[1].call(this, s))
                            : (this[i[0]] = i[1])
                          : 3 == i.length
                          ? "function" != typeof i[1] ||
                            (i[1].exec && i[1].test)
                            ? (this[i[0]] = s ? s.replace(i[1], i[2]) : void 0)
                            : (this[i[0]] = s
                                ? i[1].call(this, s, i[2])
                                : void 0)
                          : 4 == i.length &&
                            (this[i[0]] = s
                              ? i[3].call(this, s.replace(i[1], i[2]))
                              : void 0)
                        : (this[i] = s || void 0);
              u += 2;
            }
          },
          y = function (e, t) {
            for (var n in t)
              if ("object" == typeof t[n] && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (p(t[n][r], e)) return "?" === n ? void 0 : n;
              } else if (p(t[n], e)) return "?" === n ? void 0 : n;
            return e;
          },
          v = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          w = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [f, [s, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [s, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [s, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [s, "Opera Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [f, [s, "Opera"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [s, f],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [s, "UCBrowser"]],
              [/\bqbcore\/([\w\.]+)/i],
              [f, [s, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [f, [s, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [f, [s, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [s, "IE"]],
              [/yabrowser\/([\w\.]+)/i],
              [f, [s, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[s, /(.+)/, "$1 Secure Browser"], f],
              [/\bfocus\/([\w\.]+)/i],
              [f, [s, "Firefox Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [f, [s, "Opera Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [s, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [f, [s, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [f, [s, "Opera Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [s, "MIUI Browser"]],
              [/fxios\/([-\w\.]+)/i],
              [f, [s, "Firefox"]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[s, "360 Browser"]],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [[s, /(.+)/, "$1 Browser"], f],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[s, /_/g, " "], f],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [s, f],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
              [s],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[s, "Facebook"], f],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [s, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [s, "GSA"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [s, "Chrome Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[s, "Chrome WebView"], f],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [s, "Android Browser"]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [s, f],
              [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
              [f, [s, "Mobile Safari"]],
              [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
              [f, s],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                s,
                [
                  f,
                  y,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [s, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[s, "Netscape"], f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [s, "Firefox Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [s, f],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [["architecture", "amd64"]],
              [/(ia32(?=;))/i],
              [["architecture", m]],
              [/((?:i[346]|x)86)[;\)]/i],
              [["architecture", "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [["architecture", "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [["architecture", "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [["architecture", "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [["architecture", /ower/, "", m]],
              [/(sun4\w)[;\)]/i],
              [["architecture", "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [["architecture", m]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [o, [c, "Samsung"], [u, l]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [o, [c, "Samsung"], [u, _]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [o, [c, "Apple"], [u, _]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [o, [c, "Apple"], [u, l]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [o, [c, "Huawei"], [u, l]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
              ],
              [o, [c, "Huawei"], [u, _]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [o, /_/g, " "],
                [c, "Xiaomi"],
                [u, _],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [o, /_/g, " "],
                [c, "Xiaomi"],
                [u, l],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
              ],
              [o, [c, "OPPO"], [u, _]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [o, [c, "Vivo"], [u, _]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [o, [c, "Realme"], [u, _]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [o, [c, "Motorola"], [u, _]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [o, [c, "Motorola"], [u, l]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [o, [c, "LG"], [u, l]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [o, [c, "LG"], [u, _]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [o, [c, "Lenovo"], [u, l]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [o, /_/g, " "],
                [c, "Nokia"],
                [u, _],
              ],
              [/(pixel c)\b/i],
              [o, [c, "Google"], [u, l]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [o, [c, "Google"], [u, _]],
              [
                /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [o, [c, "Sony"], [u, _]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [o, "Xperia Tablet"],
                [c, "Sony"],
                [u, l],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [o, [c, "OnePlus"], [u, _]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [o, [c, "Amazon"], [u, l]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [o, /(.+)/g, "Fire Phone $1"],
                [c, "Amazon"],
                [u, _],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [o, c, [u, l]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [o, [c, "BlackBerry"], [u, _]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [o, [c, "ASUS"], [u, l]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [o, [c, "ASUS"], [u, _]],
              [/(nexus 9)/i],
              [o, [c, "HTC"], [u, l]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
              ],
              [c, [o, /_/g, " "], [u, _]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [o, [c, "Acer"], [u, l]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [o, [c, "Meizu"], [u, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [o, [c, "Sharp"], [u, _]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [c, o, [u, _]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [c, o, [u, l]],
              [/(surface duo)/i],
              [o, [c, "Microsoft"], [u, l]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [o, [c, "Fairphone"], [u, _]],
              [/(u304aa)/i],
              [o, [c, "AT&T"], [u, _]],
              [/\bsie-(\w*)/i],
              [o, [c, "Siemens"], [u, _]],
              [/\b(rct\w+) b/i],
              [o, [c, "RCA"], [u, l]],
              [/\b(venue[\d ]{2,7}) b/i],
              [o, [c, "Dell"], [u, l]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [o, [c, "Verizon"], [u, l]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [o, [c, "Barnes & Noble"], [u, l]],
              [/\b(tm\d{3}\w+) b/i],
              [o, [c, "NuVision"], [u, l]],
              [/\b(k88) b/i],
              [o, [c, "ZTE"], [u, l]],
              [/\b(nx\d{3}j) b/i],
              [o, [c, "ZTE"], [u, _]],
              [/\b(gen\d{3}) b.+49h/i],
              [o, [c, "Swiss"], [u, _]],
              [/\b(zur\d{3}) b/i],
              [o, [c, "Swiss"], [u, l]],
              [/\b((zeki)?tb.*\b) b/i],
              [o, [c, "Zeki"], [u, l]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[c, "Dragon Touch"], o, [u, l]],
              [/\b(ns-?\w{0,9}) b/i],
              [o, [c, "Insignia"], [u, l]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [o, [c, "NextBook"], [u, l]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[c, "Voice"], o, [u, _]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[c, "LvTel"], o, [u, _]],
              [/\b(ph-1) /i],
              [o, [c, "Essential"], [u, _]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [o, [c, "Envizen"], [u, l]],
              [/\b(trio[-\w\. ]+) b/i],
              [o, [c, "MachSpeed"], [u, l]],
              [/\btu_(1491) b/i],
              [o, [c, "Rotor"], [u, l]],
              [/(shield[\w ]+) b/i],
              [o, [c, "Nvidia"], [u, l]],
              [/(sprint) (\w+)/i],
              [c, o, [u, _]],
              [/(kin\.[onetw]{3})/i],
              [
                [o, /\./g, " "],
                [c, "Microsoft"],
                [u, _],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [o, [c, "Zebra"], [u, l]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [o, [c, "Zebra"], [u, _]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [c, o, [u, "console"]],
              [/droid.+; (shield) bui/i],
              [o, [c, "Nvidia"], [u, "console"]],
              [/(playstation [345portablevi]+)/i],
              [o, [c, "Sony"], [u, "console"]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [o, [c, "Microsoft"], [u, "console"]],
              [/smart-tv.+(samsung)/i],
              [c, [u, d]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [o, /^/, "SmartTV"],
                [c, "Samsung"],
                [u, d],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [c, "LG"],
                [u, d],
              ],
              [/(apple) ?tv/i],
              [c, [o, "Apple TV"], [u, d]],
              [/crkey/i],
              [
                [o, "Chromecast"],
                [c, "Google"],
                [u, d],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [o, [c, "Amazon"], [u, d]],
              [/\(dtv[\);].+(aquos)/i],
              [o, [c, "Sharp"], [u, d]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                [c, b],
                [o, b],
                [u, d],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[u, d]],
              [/((pebble))app/i],
              [c, o, [u, "wearable"]],
              [/droid.+; (glass) \d/i],
              [o, [c, "Google"], [u, "wearable"]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [o, [c, "Zebra"], [u, "wearable"]],
              [/(quest( 2)?)/i],
              [o, [c, "Facebook"], [u, "wearable"]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [c, [u, "embedded"]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [o, [u, _]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [o, [u, l]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[u, l]],
              [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
              [[u, _]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [o, [c, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [s, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [s, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [s, f],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, s],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [s, f],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [s, [f, y, v]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [s, "Windows"],
                [f, y, v],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [f, /_/g, "."],
                [s, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [s, "Mac OS"],
                [f, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
              [f, s],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [s, f],
              [/\(bb(10);/i],
              [f, [s, "BlackBerry"]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [f, [s, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [f, [s, "Firefox OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [s, "webOS"]],
              [/crkey\/([\d\.]+)/i],
              [f, [s, "Chromecast"]],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[s, "Chromium OS"], f],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [s, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [[s, "Solaris"], f],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [s, f],
            ],
          },
          M = function (e, t) {
            if (
              ("object" == typeof e && ((t = e), (e = void 0)),
              !(this instanceof M))
            )
              return new M(e, t).getResult();
            var n =
                e ||
                (void 0 !== a && a.navigator && a.navigator.userAgent
                  ? a.navigator.userAgent
                  : ""),
              r = t
                ? (function (e, t) {
                    var n = {};
                    for (var r in e)
                      t[r] && t[r].length % 2 == 0
                        ? (n[r] = t[r].concat(e[r]))
                        : (n[r] = e[r]);
                    return n;
                  })(w, t)
                : w;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[s] = void 0),
                  (t[f] = void 0),
                  g.call(t, n, r.browser),
                  (t.major =
                    "string" == typeof (e = t.version)
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : void 0),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = { architecture: void 0 };
                return g.call(e, n, r.cpu), e;
              }),
              (this.getDevice = function () {
                var e = { vendor: void 0, model: void 0, type: void 0 };
                return g.call(e, n, r.device), e;
              }),
              (this.getEngine = function () {
                var e = { name: void 0, version: void 0 };
                return g.call(e, n, r.engine), e;
              }),
              (this.getOS = function () {
                var e = { name: void 0, version: void 0 };
                return g.call(e, n, r.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (
                  (n = "string" == typeof e && e.length > 255 ? b(e, 255) : e),
                  this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (M.VERSION = "0.7.30"),
          (M.BROWSER = h([s, f, "major"])),
          (M.CPU = h(["architecture"])),
          (M.DEVICE = h([o, c, u, "console", _, d, l, "wearable", "embedded"])),
          (M.ENGINE = M.OS = h([s, f])),
          void 0 !== t
            ? (void 0 !== e && e.exports && (t = e.exports = M),
              (t.UAParser = M))
            : n(24)
            ? void 0 ===
                (r = function () {
                  return M;
                }.call(t, n, t, e)) || (e.exports = r)
            : void 0 !== a && (a.UAParser = M);
        var x = void 0 !== a && (a.jQuery || a.Zepto);
        if (x && !x.ua) {
          var E = new M();
          (x.ua = E.getResult()),
            (x.ua.get = function () {
              return E.getUA();
            }),
            (x.ua.set = function (e) {
              E.setUA(e);
              var t = E.getResult();
              for (var n in t) x.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.log_level_t =
          t.instant_world_tracker_transform_orientation_t =
          t.face_landmark_name_t =
          t.barcode_format_t =
            void 0);
      var r = n(3);
      Object.defineProperty(t, "barcode_format_t", {
        enumerable: !0,
        get: function () {
          return r.barcode_format_t;
        },
      });
      var a = n(3);
      Object.defineProperty(t, "face_landmark_name_t", {
        enumerable: !0,
        get: function () {
          return a.face_landmark_name_t;
        },
      });
      var i = n(3);
      Object.defineProperty(
        t,
        "instant_world_tracker_transform_orientation_t",
        {
          enumerable: !0,
          get: function () {
            return i.instant_world_tracker_transform_orientation_t;
          },
        }
      );
      var o = n(3);
      Object.defineProperty(t, "log_level_t", {
        enumerable: !0,
        get: function () {
          return o.log_level_t;
        },
      });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HTMLElementSource = void 0);
      const r = n(5),
        a = n(30),
        i = n(11),
        o = n(2),
        s = n(0),
        u = n(1);
      let c = 1,
        f = new Map();
      class _ extends a.Source {
        constructor(e, t) {
          super(),
            (this._video = e),
            (this._pipeline = t),
            (this._isPaused = !0),
            (this._hadFrames = !1),
            (this._isUserFacing = !1),
            (this._cameraToScreenRotation = 0),
            (this._isUploadFrame = !0),
            (this._computedTransformRotation = -1),
            (this._computedFrontCameraRotation = !1),
            (this._cameraUvTransform = s.mat4.create()),
            (this._cameraVertexTransform = [
              1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            ]),
            (this._framebufferWidth = 0),
            (this._framebufferHeight = 0),
            (this._framebufferId = null),
            (this._renderTexture = null);
          let n = this._video;
          this._video instanceof HTMLVideoElement
            ? n.addEventListener("loadedmetadata", () => {
                this._hadFrames = !0;
              })
            : (this._hadFrames = !0),
            (this._resetGLContext = this._resetGLContext.bind(this));
          let a = r.Pipeline.get(this._pipeline);
          a && a.onGLContextReset.bind(this._resetGLContext);
        }
        static createVideoElementSource(e, t) {
          let n = c++;
          return (
            f.set(n, new _(t, e)),
            u.zcout("html_element_source_t initialized"),
            n
          );
        }
        static getVideoElementSource(e) {
          return f.get(e);
        }
        _resetGLContext() {
          (this._currentVideoTexture = void 0),
            (this._framebufferId = null),
            (this._renderTexture = null),
            (this._vertexBuffer = void 0),
            (this._indexBuffer = void 0),
            (this._greyscaleShader = void 0);
        }
        destroy() {
          let e = r.Pipeline.get(this._pipeline);
          e && e.onGLContextReset.unbind(this._resetGLContext),
            this.pause(),
            this._resetGLContext();
        }
        pause() {
          this._isPaused = !0;
          let e = r.Pipeline.get(this._pipeline);
          e &&
            e.currentCameraSource === this &&
            (e.currentCameraSource = void 0);
        }
        start() {
          var e;
          this._isPaused &&
            ((this._isUploadFrame = !0),
            this._video instanceof HTMLVideoElement && (this._hadFrames = !1)),
            (this._isPaused = !1);
          let t = r.Pipeline.get(this._pipeline);
          t &&
            t.currentCameraSource !== this &&
            (null === (e = t.currentCameraSource) || void 0 === e || e.pause(),
            (t.currentCameraSource = this));
        }
        getFrame(e) {
          let t = r.Pipeline.get(this._pipeline);
          if (!t) return;
          let n = t.glContext;
          if (n && !this._isPaused && this._hadFrames)
            try {
              return this._processFrame(n, this._cameraToScreenRotation, e);
            } catch (e) {
              console.log("Unable to process frame");
            }
        }
        _processFrame(e, t, n) {
          let a = r.Pipeline.get(this._pipeline);
          if (a) {
            if (this._isUploadFrame)
              return (
                this._currentVideoTexture ||
                  (this._currentVideoTexture = a.getVideoTexture()),
                this._uploadFrame(t, this._isUserFacing),
                void (this._isUploadFrame = !this._isUploadFrame)
              );
            if (!n)
              return (
                (this._isUploadFrame = !this._isUploadFrame),
                this._readFrame(a, e)
              );
          }
        }
        _uploadFrame(e, t) {
          if (!this._currentVideoTexture) return;
          let n = r.Pipeline.get(this._pipeline);
          if (!n) return;
          let a = n.glContext;
          if (!a) return;
          a.disable(a.SCISSOR_TEST),
            a.disable(a.DEPTH_TEST),
            a.disable(a.BLEND),
            a.disable(a.CULL_FACE),
            a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1),
            a.activeTexture(a.TEXTURE0),
            a.bindTexture(a.TEXTURE_2D, this._currentVideoTexture);
          const o = a.RGBA,
            s = a.RGBA,
            u = a.UNSIGNED_BYTE;
          a.texImage2D(a.TEXTURE_2D, 0, o, s, u, this._video);
          let c = 0,
            f = 0;
          this._video instanceof HTMLVideoElement
            ? ((c = this._video.videoWidth), (f = this._video.videoHeight))
            : ((c = this._video.width), (f = this._video.height)),
            f > c && (f = [c, (c = f)][0]),
            this._updateTransforms(e, t);
          let _ = this._getFramebuffer(
              a,
              i.profile.dataWidth / 4,
              i.profile.dataHeight
            ),
            l = this._getVertexBuffer(a),
            d = this._getIndexBuffer(a),
            h = this._getGreyscaleShader(a);
          a.bindFramebuffer(a.FRAMEBUFFER, _),
            a.viewport(0, 0, this._framebufferWidth, this._framebufferHeight),
            a.clearColor(0, 0, 0, 1),
            a.clear(a.COLOR_BUFFER_BIT),
            a.bindBuffer(a.ARRAY_BUFFER, l),
            a.vertexAttribPointer(h.aVertexPositionLoc, 2, a.FLOAT, !1, 16, 0),
            a.enableVertexAttribArray(h.aVertexPositionLoc),
            a.vertexAttribPointer(h.aTextureCoordLoc, 2, a.FLOAT, !1, 16, 8),
            a.enableVertexAttribArray(h.aTextureCoordLoc),
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, d),
            a.useProgram(h.program),
            a.uniform1f(h.uTexWidthLoc, i.profile.dataWidth),
            a.uniformMatrix4fv(h.uUvTransformLoc, !1, this._cameraUvTransform),
            a.activeTexture(a.TEXTURE0),
            a.bindTexture(a.TEXTURE_2D, this._currentVideoTexture),
            a.uniform1i(h.uSamplerLoc, 0),
            a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0),
            a.disableVertexAttribArray(h.aVertexPositionLoc),
            a.disableVertexAttribArray(h.aTextureCoordLoc),
            a.bindFramebuffer(a.FRAMEBUFFER, null),
            a.bindBuffer(a.ARRAY_BUFFER, null),
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null),
            a.useProgram(null),
            a.bindTexture(a.TEXTURE_2D, null);
        }
        _readFrame(e, t) {
          if (!this._currentVideoTexture) throw new Error("No video texture");
          let n = this._currentVideoTexture;
          this._currentVideoTexture = void 0;
          let r = i.profile.dataWidth * i.profile.dataHeight,
            a = e.cameraPixelArrays.pop();
          for (; a && a.byteLength !== r; ) a = e.cameraPixelArrays.pop();
          a || (a = new ArrayBuffer(r));
          let o = new Uint8Array(a),
            s = this._getFramebuffer(
              t,
              i.profile.dataWidth / 4,
              i.profile.dataHeight
            );
          return (
            t.bindFramebuffer(t.FRAMEBUFFER, s),
            t.readPixels(
              0,
              0,
              this._framebufferWidth,
              this._framebufferHeight,
              t.RGBA,
              t.UNSIGNED_BYTE,
              o
            ),
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            {
              uvTransform: this._cameraUvTransform,
              data: a,
              texture: n,
              dataWidth: i.profile.dataWidth,
              dataHeight: i.profile.dataHeight,
              userFacing: this._computedFrontCameraRotation,
            }
          );
        }
        _updateTransforms(e, t) {
          (e == this._computedTransformRotation &&
            t == this._computedFrontCameraRotation) ||
            ((this._computedTransformRotation = e),
            (this._computedFrontCameraRotation = t),
            (this._cameraUvTransform = this._getCameraUvTransform()),
            (this._cameraVertexTransform = this._getCameraVertexTransform()));
        }
        _getCameraUvTransform() {
          switch (this._computedTransformRotation) {
            case 270:
              return new Float32Array([
                0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
              ]);
            case 180:
              return new Float32Array([
                -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
              ]);
            case 90:
              return new Float32Array([
                0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
              ]);
          }
          return new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
          ]);
        }
        _getCameraVertexTransform() {
          let e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          if (!this._computedFrontCameraRotation) return e;
          switch (this._computedTransformRotation) {
            case 0:
            case 90:
            case 180:
              e[0] = -1;
              break;
            case 270:
              e[5] = -1;
          }
          return e;
        }
        _getFramebuffer(e, t, n) {
          if (
            this._framebufferWidth === t &&
            this._framebufferHeight === n &&
            this._framebufferId
          )
            return this._framebufferId;
          if (
            (this._framebufferId &&
              (e.deleteFramebuffer(this._framebufferId),
              (this._framebufferId = null)),
            this._renderTexture &&
              (e.deleteTexture(this._renderTexture),
              (this._renderTexture = null)),
            (this._framebufferId = e.createFramebuffer()),
            !this._framebufferId)
          )
            throw new Error("Unable to create framebuffer");
          if (
            (e.bindFramebuffer(e.FRAMEBUFFER, this._framebufferId),
            (this._renderTexture = e.createTexture()),
            !this._renderTexture)
          )
            throw new Error("Unable to create render texture");
          e.activeTexture(e.TEXTURE0),
            e.bindTexture(e.TEXTURE_2D, this._renderTexture),
            e.texImage2D(
              e.TEXTURE_2D,
              0,
              e.RGBA,
              t,
              n,
              0,
              e.RGBA,
              e.UNSIGNED_BYTE,
              null
            ),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
            e.framebufferTexture2D(
              e.FRAMEBUFFER,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_2D,
              this._renderTexture,
              0
            );
          let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
          if (r !== e.FRAMEBUFFER_COMPLETE)
            throw new Error("Framebuffer not complete: " + r.toString());
          return (
            (this._framebufferWidth = t),
            (this._framebufferHeight = n),
            e.bindTexture(e.TEXTURE_2D, null),
            e.bindFramebuffer(e.FRAMEBUFFER, null),
            this._framebufferId
          );
        }
        _getVertexBuffer(e) {
          if (this._vertexBuffer) return this._vertexBuffer;
          if (((this._vertexBuffer = e.createBuffer()), !this._vertexBuffer))
            throw new Error("Unable to create vertex buffer");
          e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
          let t = new Float32Array([
            -1, -1, 0, 0, -1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 0,
          ]);
          return (
            e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), this._vertexBuffer
          );
        }
        _getIndexBuffer(e) {
          if (this._indexBuffer) return this._indexBuffer;
          if (((this._indexBuffer = e.createBuffer()), !this._indexBuffer))
            throw new Error("Unable to create index buffer");
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
          let t = new Uint16Array([0, 1, 2, 0, 2, 3]);
          return (
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW),
            this._indexBuffer
          );
        }
        _getGreyscaleShader(e) {
          if (this._greyscaleShader) return this._greyscaleShader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let n = o.compileShader(e, e.VERTEX_SHADER, l),
            r = o.compileShader(e, e.FRAGMENT_SHADER, d);
          e.attachShader(t, n), e.attachShader(t, r), o.linkProgram(e, t);
          let a = e.getUniformLocation(t, "uTexWidth");
          if (!a) throw new Error("Unable to get uniform location uTexWidth");
          let i = e.getUniformLocation(t, "uUvTransform");
          if (!i)
            throw new Error("Unable to get uniform location uUvTransform");
          let s = e.getUniformLocation(t, "uSampler");
          if (!s) throw new Error("Unable to get uniform location uSampler");
          return (
            (this._greyscaleShader = {
              program: t,
              aVertexPositionLoc: e.getAttribLocation(t, "aVertexPosition"),
              aTextureCoordLoc: e.getAttribLocation(t, "aTextureCoord"),
              uTexWidthLoc: a,
              uUvTransformLoc: i,
              uSamplerLoc: s,
            }),
            this._greyscaleShader
          );
        }
      }
      t.HTMLElementSource = _;
      let l =
          "\n    attribute vec4 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    varying highp vec2 vTextureCoord1;\n    varying highp vec2 vTextureCoord2;\n    varying highp vec2 vTextureCoord3;\n    varying highp vec2 vTextureCoord4;\n\n    uniform float uTexWidth;\n\tuniform mat4 uUvTransform;\n\n    void main(void) {\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\n\n      gl_Position = aVertexPosition;\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\n    }\n",
        d =
          "\n  varying highp vec2 vTextureCoord1;\n  varying highp vec2 vTextureCoord2;\n  varying highp vec2 vTextureCoord3;\n  varying highp vec2 vTextureCoord4;\n\n  uniform sampler2D uSampler;\n\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\n\n  void main(void) {\n    lowp vec4 outpx;\n\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\n\n    gl_FragColor = outpx;\n  }\n";
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.profile = t.EmbeddedVideoImplementation = void 0);
      const r = n(8);
      !(function (e) {
        (e[(e.OBJECT_URL = 0)] = "OBJECT_URL"),
          (e[(e.SRC_OBJECT = 1)] = "SRC_OBJECT");
      })(t.EmbeddedVideoImplementation || (t.EmbeddedVideoImplementation = {})),
        (t.profile = {
          deviceMotionMutliplier: -1,
          blacklisted: !1,
          showGyroPermissionsWarningIfNecessary: !1,
          showSafariPermissionsResetIfNecessary: !1,
          requestHighFrameRate: !1,
          videoWidth: 640,
          videoHeight: 480,
          dataWidth: 320,
          dataHeight: 240,
          videoElementInDOM: !1,
        }),
        (window.zeeProfile = t.profile);
      let a = new r.UAParser(),
        i = (a.getOS().name || "unknown").toLowerCase(),
        o = (a.getEngine().name || "unknown").toLowerCase();
      function s() {
        let e = a.getOS().version;
        if (e) {
          let n = e.split(".");
          if (n.length >= 2) {
            const e = parseInt(n[0]),
              r = parseInt(n[1]);
            (e < 11 || (11 === e && r < 3)) && (t.profile.blacklisted = !0),
              (e < 12 || (12 === e && r < 2)) &&
                (t.profile.videoElementInDOM = !0),
              ((12 === e && r >= 2) || e >= 13) &&
                (t.profile.showGyroPermissionsWarningIfNecessary = !0),
              e >= 13 && (t.profile.showSafariPermissionsResetIfNecessary = !0),
              ((e >= 12 && r > 1) || e >= 13) &&
                navigator.mediaDevices &&
                navigator.mediaDevices.getSupportedConstraints &&
                navigator.mediaDevices.getSupportedConstraints().frameRate &&
                ((t.profile.requestHighFrameRate = !0),
                (t.profile.videoHeight = 360),
                (t.profile.dataHeight = 180));
          }
        }
      }
      "webkit" === o &&
        "ios" !== i &&
        ((t.profile.deviceMotionMutliplier = 1),
        void 0 !== window.orientation && s()),
        "webkit" === o &&
          "ios" === i &&
          ((t.profile.deviceMotionMutliplier = 1), s());
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "b4f46e148a3b3b5aef90717d8d60e3fc.zbin");
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n, r) {
        try {
          try {
            var a;
            try {
              a = new window.Blob([e]);
            } catch (t) {
              (a = new (window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder)()).append(e),
                (a = a.getBlob());
            }
            var i = window.URL || window.webkitURL,
              o = i.createObjectURL(a),
              s = new window[t](o, n);
            return i.revokeObjectURL(o), s;
          } catch (r) {
            return new window[t](
              "data:application/javascript,".concat(encodeURIComponent(e)),
              n
            );
          }
        } catch (e) {
          if (!r) throw Error("Inline worker is not supported");
          return new window[t](r, n);
        }
      };
    },
    function (e, t, n) {
      "use strict";
      if (
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.log_level_t =
          t.instant_world_tracker_transform_orientation_t =
          t.face_landmark_name_t =
          t.barcode_format_t =
          t.initialize =
            void 0),
        document.currentScript)
      ) {
        const e = new URL(document.currentScript.src);
        let t = e.toString();
        if (e.pathname) {
          let e = t.split("/");
          e.pop(), (t = e.join("/") + "/");
        }
        n.p = t;
      }
      const r = n(15),
        a = n(36);
      t.initialize = function () {
        return console.log("Zappar CV v" + a.VERSION), r.initialize();
      };
      var i = n(9);
      Object.defineProperty(t, "barcode_format_t", {
        enumerable: !0,
        get: function () {
          return i.barcode_format_t;
        },
      }),
        Object.defineProperty(t, "face_landmark_name_t", {
          enumerable: !0,
          get: function () {
            return i.face_landmark_name_t;
          },
        }),
        Object.defineProperty(
          t,
          "instant_world_tracker_transform_orientation_t",
          {
            enumerable: !0,
            get: function () {
              return i.instant_world_tracker_transform_orientation_t;
            },
          }
        ),
        Object.defineProperty(t, "log_level_t", {
          enumerable: !0,
          get: function () {
            return i.log_level_t;
          },
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
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initialize = void 0);
      const a = n(16),
        i = n(6),
        o = n(4),
        s = n(0),
        u = n(19),
        c = n(23),
        f = n(25),
        _ = n(5),
        l = n(29),
        d = n(10),
        h = n(31),
        p = n(33),
        m = n(1);
      let b;
      t.initialize = function () {
        if (b) return b;
        let e = !1;
        u.launchWorker().then(() => {
          m.zcout("Fully loaded"), (e = !0);
        });
        let t = new a.zappar_client((e) => {
          u.messageManager.postOutgoingMessage({ t: "zappar", d: e }, [e]);
        });
        if (window.location.hostname.toLowerCase().indexOf(".zappar.io") > 0) {
          let e = window.location.pathname.split("/");
          e.length > 1 &&
            e[1].length > 0 &&
            t.impl.analytics_project_id_set(".wiz" + e[1]);
        }
        return (
          u.messageManager.onIncomingMessage.bind((e) => {
            var n, r;
            switch (e.t) {
              case "zappar":
                null === (n = _.Pipeline.get(e.p)) ||
                  void 0 === n ||
                  n.pendingMessages.push(e.d);
                break;
              case "buf":
                t.serializer.bufferReturn(e.d);
                break;
              case "cameraFrameRecycleS2C":
                let a = e;
                null === (r = _.Pipeline.get(a.p)) ||
                  void 0 === r ||
                  r.cameraTokenReturn(a.token, a.d);
                break;
              case "licerr": {
                let e = document.createElement("div");
                (e.innerHTML =
                  "Visit 69 <a href='https://docs.zap.works/universal-ar/licensing/' style='color: white;'>our licensing page</a> to find out about hosting on your own domain."),
                  (e.style.position = "absolute"),
                  (e.style.bottom = "20px"),
                  (e.style.width = "80%"),
                  (e.style.backgroundColor = "black"),
                  (e.style.color = "white"),
                  (e.style.borderRadius = "10px"),
                  (e.style.padding = "10px"),
                  (e.style.fontFamily = "sans-serif"),
                  (e.style.textAlign = "center"),
                  (e.style.left = "10%"),
                  (e.style.zIndex = Number.MAX_SAFE_INTEGER.toString());
                let t = document.createElement("span");
                (t.innerText = " (30)"), e.append(t);
                let n = 30;
                setInterval(function () {
                  n--, n >= 0 && (t.innerText = " (" + n.toString() + ")");
                }, 1e3),
                  document.body.append(e);
              }
            }
          }),
          (b = Object.assign(Object.assign({}, t.impl), {
            loaded: () => e,
            camera_default_device_id: (e) =>
              e
                ? l.CameraSource.USER_DEFAULT_DEVICE_ID
                : l.CameraSource.DEFAULT_DEVICE_ID,
            camera_source_create: (e, t) => l.CameraSource.create(e, t),
            camera_source_destroy: (e) => {
              var t;
              return null === (t = l.CameraSource.get(e)) || void 0 === t
                ? void 0
                : t.destroy();
            },
            camera_source_pause: (e) => {
              var t;
              return null === (t = l.CameraSource.get(e)) || void 0 === t
                ? void 0
                : t.pause();
            },
            camera_source_start: (e) => {
              var t;
              return null === (t = l.CameraSource.get(e)) || void 0 === t
                ? void 0
                : t.start();
            },
            pipeline_create: () => _.Pipeline.create(t.impl, u.messageManager),
            pipeline_frame_update: (e) => {
              var n;
              return null === (n = _.Pipeline.get(e)) || void 0 === n
                ? void 0
                : n.frameUpdate(t);
            },
            pipeline_camera_frame_draw_gl: (e, t, n, r) => {
              var a;
              null === (a = _.Pipeline.get(e)) ||
                void 0 === a ||
                a.cameraFrameDrawGL(t, n, r);
            },
            draw_plane: (e, t, n, r, a) => {
              i.drawPlane(e, t, n, r, a);
            },
            pipeline_draw_face: (e, t, n, r, a) => {
              var i;
              let o = f.getFaceMesh(a);
              if (!o)
                return (
                  m.zcwarn(
                    "attempting to call draw_face on a destroyed zappar_face_mesh_t"
                  ),
                  new Uint16Array()
                );
              null === (i = _.Pipeline.get(e)) ||
                void 0 === i ||
                i.drawFace(t, n, r, o);
            },
            pipeline_draw_face_project: (e, t, n, r, a, i, o) => {
              var s;
              null === (s = _.Pipeline.get(e)) ||
                void 0 === s ||
                s.drawFaceProject(t, n, r, a, i, o);
            },
            projection_matrix_from_camera_model: o.projectionMatrix,
            projection_matrix_from_camera_model_ext: o.projectionMatrix,
            pipeline_process_gl: (e) => {
              var t;
              return null === (t = _.Pipeline.get(e)) || void 0 === t
                ? void 0
                : t.processGL();
            },
            pipeline_gl_context_set: (e, t, n) => {
              var r;
              return null === (r = _.Pipeline.get(e)) || void 0 === r
                ? void 0
                : r.glContextSet(t, n);
            },
            pipeline_gl_context_lost: (e) => {
              var t;
              return null === (t = _.Pipeline.get(e)) || void 0 === t
                ? void 0
                : t.glContextLost();
            },
            pipeline_camera_frame_upload_gl: () => {},
            pipeline_camera_frame_texture_gl: (e) => {
              var t;
              return null === (t = _.Pipeline.get(e)) || void 0 === t
                ? void 0
                : t.cameraFrameTexture();
            },
            pipeline_camera_frame_texture_matrix: (e, t, n, r) => {
              var a;
              return (
                (null === (a = _.Pipeline.get(e)) || void 0 === a
                  ? void 0
                  : a.cameraFrameTextureMatrix(t, n, r)) || s.mat4.create()
              );
            },
            pipeline_camera_frame_user_facing: (e) => {
              var t;
              return (
                (null === (t = _.Pipeline.get(e)) || void 0 === t
                  ? void 0
                  : t.cameraFrameUserFacing()) || !1
              );
            },
            pipeline_camera_pose_default: () => s.mat4.create(),
            pipeline_camera_pose_with_attitude: (e, t) => {
              var n;
              return (
                (null === (n = _.Pipeline.get(e)) || void 0 === n
                  ? void 0
                  : n.cameraPoseWithAttitude(t)) || s.mat4.create()
              );
            },
            pipeline_camera_pose_with_origin: (e, t) => {
              let n = s.mat4.create();
              return s.mat4.invert(n, t), n;
            },
            instant_world_tracker_anchor_pose_camera_relative: (e, n) => {
              let r = _.applyScreenCounterRotation(
                void 0,
                t.impl.instant_world_tracker_anchor_pose_raw(e)
              );
              if (n) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(r, e, r),
                  s.mat4.multiply(r, r, e);
              }
              return r;
            },
            instant_world_tracker_anchor_pose: (e, n, r) => {
              let a = _.applyScreenCounterRotation(
                void 0,
                t.impl.instant_world_tracker_anchor_pose_raw(e)
              );
              if (r) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(a, e, a),
                  s.mat4.multiply(a, a, e);
              }
              return s.mat4.multiply(a, n, a), a;
            },
            image_tracker_anchor_pose_camera_relative: (e, n, r) => {
              let a = _.applyScreenCounterRotation(
                void 0,
                t.impl.image_tracker_anchor_pose_raw(e, n)
              );
              if (r) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(a, e, a),
                  s.mat4.multiply(a, a, e);
              }
              return a;
            },
            image_tracker_anchor_pose: (e, n, r, a) => {
              let i = _.applyScreenCounterRotation(
                void 0,
                t.impl.image_tracker_anchor_pose_raw(e, n)
              );
              if (a) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(i, e, i),
                  s.mat4.multiply(i, i, e);
              }
              return s.mat4.multiply(i, r, i), i;
            },
            face_tracker_anchor_pose_camera_relative: (e, n, r) => {
              let a = _.applyScreenCounterRotation(
                void 0,
                t.impl.face_tracker_anchor_pose_raw(e, n)
              );
              if (r) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(a, e, a),
                  s.mat4.multiply(a, a, e);
              }
              return a;
            },
            face_tracker_anchor_pose: (e, n, r, a) => {
              let i = _.applyScreenCounterRotation(
                void 0,
                t.impl.face_tracker_anchor_pose_raw(e, n)
              );
              if (a) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(i, e, i),
                  s.mat4.multiply(i, i, e);
              }
              return s.mat4.multiply(i, r, i), i;
            },
            face_tracker_model_load_default: (e) =>
              r(this, void 0, void 0, function* () {
                yield (function (e) {
                  return r(this, void 0, void 0, function* () {
                    let t = n(35);
                    void 0 !== t.default && (t = t.default);
                    let r = yield fetch(t),
                      a = yield r.arrayBuffer();
                    null == b || b.face_tracker_model_load_from_memory(e, a);
                  });
                })(e);
              }),
            face_mesh_create: () => f.createFaceMesh(),
            face_mesh_destroy: (e) => {
              f.destroyFaceMesh(e);
            },
            face_mesh_indices: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getIndices()
                : (m.zcwarn(
                    "attempting to call face_mesh_indices on a destroyed zappar_face_mesh_t"
                  ),
                  new Uint16Array());
            },
            face_mesh_indices_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getIndices().length
                : (m.zcwarn(
                    "attempting to call face_mesh_indices_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_uvs: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getUVs()
                : (m.zcwarn(
                    "attempting to call face_mesh_uvs on a destroyed zappar_face_mesh_t"
                  ),
                  new Float32Array());
            },
            face_mesh_uvs_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getUVs().length
                : (m.zcwarn(
                    "attempting to call face_mesh_uvs_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_vertices: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getVertices()
                : (m.zcwarn(
                    "attempting to call face_mesh_vertices on a destroyed zappar_face_mesh_t"
                  ),
                  new Float32Array());
            },
            face_mesh_vertices_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getVertices().length
                : (m.zcwarn(
                    "attempting to call face_mesh_vertices_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_normals: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getNormals()
                : (m.zcwarn(
                    "attempting to call face_mesh_normals on a destroyed zappar_face_mesh_t"
                  ),
                  new Float32Array());
            },
            face_mesh_normals_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getNormals().length
                : (m.zcwarn(
                    "attempting to call face_mesh_normals_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_load_from_memory: (e, t, n, r, a, i) => {
              let o = f.getFaceMesh(e);
              o
                ? o.loadFromMemory(t, n, r, a, i)
                : m.zcwarn(
                    "attempting to call face_mesh_load_from_memory on a destroyed zappar_face_mesh_t"
                  );
            },
            face_mesh_update: (e, t, n, r) => {
              let a = f.getFaceMesh(e);
              a
                ? a.update(t, n, r)
                : m.zcwarn(
                    "attempting to call face_mesh_update on a destroyed zappar_face_mesh_t"
                  );
            },
            face_mesh_load_default: (e) =>
              r(this, void 0, void 0, function* () {
                let t = f.getFaceMesh(e);
                if (!t)
                  return void m.zcwarn(
                    "attempting to call face_mesh_load_default on a destroyed zappar_face_mesh_t"
                  );
                let r = n(12);
                void 0 !== r.default && (r = r.default);
                let a = yield fetch(r);
                t.loadFromMemory(yield a.arrayBuffer(), !1, !1, !1, !1);
              }),
            face_mesh_load_default_face: (e, t, a, i) =>
              r(this, void 0, void 0, function* () {
                let r = f.getFaceMesh(e);
                if (!r)
                  return void m.zcwarn(
                    "attempting to call face_mesh_load_default_face on a destroyed zappar_face_mesh_t"
                  );
                let o = n(12);
                void 0 !== o.default && (o = o.default);
                let s = yield fetch(o);
                r.loadFromMemory(yield s.arrayBuffer(), t, a, i, !1);
              }),
            face_mesh_load_default_full_head_simplified: (e, t, a, i, o) =>
              r(this, void 0, void 0, function* () {
                let r = f.getFaceMesh(e);
                if (!r)
                  return void m.zcwarn(
                    "attempting to call face_mesh_load_default_full_head_simplified on a destroyed zappar_face_mesh_t"
                  );
                let s = n(34);
                void 0 !== s.default && (s = s.default);
                let u = yield fetch(s);
                r.loadFromMemory(yield u.arrayBuffer(), t, a, i, o);
              }),
            face_mesh_loaded_version: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getModelVersion()
                : (m.zcwarn(
                    "attempting to call face_mesh_load_default on a destroyed zappar_face_mesh_t"
                  ),
                  -1);
            },
            face_landmark_create: (e) => h.createFaceLandmark(e),
            face_landmark_destroy: (e) => {
              h.destroyFaceLandmark(e);
            },
            face_landmark_update: (e, t, n, r) => {
              let a = h.getFaceLandmark(e);
              a
                ? a.update(t, n, r)
                : m.zcwarn(
                    "attempting to call face_landmark_update on a destroyed zappar_face_landmark_t"
                  );
            },
            face_landmark_anchor_pose: (e) => {
              let t = h.getFaceLandmark(e);
              return t
                ? t.anchor_pose
                : (m.zcwarn(
                    "attempting to call face_landmark_anchor_pose on a destroyed zappar_face_landmark_t"
                  ),
                  s.mat4.create());
            },
            html_element_source_create: (e, t) =>
              d.HTMLElementSource.createVideoElementSource(e, t),
            html_element_source_start: (e) => {
              var t;
              return null ===
                (t = d.HTMLElementSource.getVideoElementSource(e)) ||
                void 0 === t
                ? void 0
                : t.start();
            },
            html_element_source_pause: (e) => {
              var t;
              return null ===
                (t = d.HTMLElementSource.getVideoElementSource(e)) ||
                void 0 === t
                ? void 0
                : t.pause();
            },
            html_element_source_destroy: (e) => {
              var t;
              return null ===
                (t = d.HTMLElementSource.getVideoElementSource(e)) ||
                void 0 === t
                ? void 0
                : t.destroy();
            },
            permission_granted_all: c.permissionGrantedAll,
            permission_granted_camera: c.permissionGrantedCamera,
            permission_granted_motion: c.permissionGrantedMotion,
            permission_denied_any: c.permissionDeniedAny,
            permission_denied_camera: c.permissionDeniedCamera,
            permission_denied_motion: c.permissionDeniedMotion,
            permission_request_motion: c.permissionRequestMotion,
            permission_request_camera: c.permissionRequestCamera,
            permission_request_all: c.permissionRequestAll,
            permission_request_ui: c.permissionRequestUI,
            permission_request_ui_promise: c.permissionRequestUI,
            permission_denied_ui: c.permissionDeniedUI,
            browser_incompatible: p.default.incompatible,
            browser_incompatible_ui: p.default.incompatible_ui,
            log_level_set: (e) => {
              m.setLogLevel(e), t.impl.log_level_set(e);
            },
          })),
          b
        );
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.zappar_client = void 0);
      const r = n(17),
        a = n(18);
      t.zappar_client = class {
        constructor(e) {
          (this._messageSender = e),
            (this._globalState = { log_level: 1 }),
            (this.serializer = new r.MessageSerializer((e) => {
              this._messageSender(e);
            })),
            (this.deserializer = new a.MessageDeserializer()),
            (this._latestId = 1),
            (this._pipeline_state_by_instance = new Map()),
            (this._camera_source_state_by_instance = new Map()),
            (this._image_tracker_state_by_instance = new Map()),
            (this._face_tracker_state_by_instance = new Map()),
            (this._face_mesh_state_by_instance = new Map()),
            (this._face_landmark_state_by_instance = new Map()),
            (this._barcode_finder_state_by_instance = new Map()),
            (this._instant_world_tracker_state_by_instance = new Map()),
            (this.impl = {
              log_level: () => this._globalState.log_level,
              log_level_set: (e) => {
                this.serializer.sendMessage(33, (t) => {
                  t.logLevel(e);
                });
              },
              analytics_project_id_set: (e) => {
                this.serializer.sendMessage(30, (t) => {
                  t.string(e);
                });
              },
              pipeline_create: () => {
                let e = this._latestId++,
                  t = {
                    current_frame_user_data: 0,
                    camera_model: new Float32Array([300, 300, 160, 120, 0, 0]),
                    camera_pose: new Float32Array([
                      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ]),
                    camera_frame_camera_attitude: new Float32Array([
                      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ]),
                    frame_number: 0,
                  };
                return (
                  this._pipeline_state_by_instance.set(e, t),
                  this.serializer.sendMessage(26, (t) => {
                    t.type(e);
                  }),
                  e
                );
              },
              pipeline_destroy: (e) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._pipeline_state_by_instance.delete(e),
                  this.serializer.sendMessage(27, (t) => {
                    t.type(e);
                  });
              },
              pipeline_frame_update: (e) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(9, (t) => {
                  t.type(e);
                });
              },
              pipeline_frame_number: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.frame_number;
              },
              pipeline_camera_model: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.camera_model;
              },
              pipeline_camera_frame_user_data: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.current_frame_user_data;
              },
              pipeline_camera_frame_submit: (e, t, n, r, a, i) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(8, (o) => {
                  o.type(e),
                    o.dataWithLength(t),
                    o.int(n),
                    o.int(r),
                    o.int(a),
                    o.matrix4x4(i);
                });
              },
              pipeline_camera_frame_camera_attitude: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.camera_frame_camera_attitude;
              },
              pipeline_motion_accelerometer_submit: (e, t, n, r, a) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(10, (i) => {
                  i.type(e), i.timestamp(t), i.float(n), i.float(r), i.float(a);
                });
              },
              pipeline_motion_rotation_rate_submit: (e, t, n, r, a) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(11, (i) => {
                  i.type(e), i.timestamp(t), i.float(n), i.float(r), i.float(a);
                });
              },
              pipeline_motion_attitude_submit: (e, t, n, r, a) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(12, (i) => {
                  i.type(e), i.timestamp(t), i.float(n), i.float(r), i.float(a);
                });
              },
              camera_source_create: (e, t) => {
                let n = this._latestId++;
                return (
                  this._camera_source_state_by_instance.set(n, {}),
                  this.serializer.sendMessage(28, (r) => {
                    r.type(n), r.type(e), r.string(t);
                  }),
                  n
                );
              },
              camera_source_destroy: (e) => {
                if (!this._camera_source_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._camera_source_state_by_instance.delete(e),
                  this.serializer.sendMessage(29, (t) => {
                    t.type(e);
                  });
              },
              image_tracker_create: (e) => {
                let t = this._latestId++;
                return (
                  this._image_tracker_state_by_instance.set(t, {
                    enabled: !0,
                    target_loaded_version: -1,
                    target_count: 0,
                    anchor_count: 0,
                    anchor_id: [],
                    anchor_pose: [],
                  }),
                  this.serializer.sendMessage(2, (n) => {
                    n.type(t), n.type(e);
                  }),
                  t
                );
              },
              image_tracker_destroy: (e) => {
                if (!this._image_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._image_tracker_state_by_instance.delete(e),
                  this.serializer.sendMessage(13, (t) => {
                    t.type(e);
                  });
              },
              image_tracker_target_load_from_memory: (e, t) => {
                if (!this._image_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(4, (n) => {
                  n.type(e), n.dataWithLength(t);
                });
              },
              image_tracker_target_loaded_version: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.target_loaded_version;
              },
              image_tracker_target_count: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.target_count;
              },
              image_tracker_enabled: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              image_tracker_enabled_set: (e, t) => {
                if (!this._image_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(3, (n) => {
                  n.type(e), n.bool(t);
                });
              },
              image_tracker_anchor_count: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.anchor_count;
              },
              image_tracker_anchor_id: (e, t) => {
                let n = this._image_tracker_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.anchor_id[t];
              },
              image_tracker_anchor_pose_raw: (e, t) => {
                let n = this._image_tracker_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.anchor_pose[t];
              },
              face_tracker_create: (e) => {
                let t = this._latestId++;
                return (
                  this._face_tracker_state_by_instance.set(t, {
                    enabled: !0,
                    model_loaded: -1,
                    max_faces: 1,
                    anchor_count: 0,
                    anchor_id: [],
                    anchor_pose: [],
                    anchor_identity_coefficients: [],
                    anchor_expression_coefficients: [],
                  }),
                  this.serializer.sendMessage(19, (n) => {
                    n.type(t), n.type(e);
                  }),
                  t
                );
              },
              face_tracker_destroy: (e) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._face_tracker_state_by_instance.delete(e),
                  this.serializer.sendMessage(20, (t) => {
                    t.type(e);
                  });
              },
              face_tracker_model_load_from_memory: (e, t) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(21, (n) => {
                  n.type(e), n.dataWithLength(t);
                });
              },
              face_tracker_model_loaded_version: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.model_loaded;
              },
              face_tracker_enabled_set: (e, t) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(22, (n) => {
                  n.type(e), n.bool(t);
                });
              },
              face_tracker_enabled: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              face_tracker_max_faces_set: (e, t) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(23, (n) => {
                  n.type(e), n.int(t);
                });
              },
              face_tracker_max_faces: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.max_faces;
              },
              face_tracker_anchor_count: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.anchor_count;
              },
              face_tracker_anchor_id: (e, t) => {
                let n = this._face_tracker_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.anchor_id[t];
              },
              face_tracker_anchor_pose_raw: (e, t) => {
                let n = this._face_tracker_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.anchor_pose[t];
              },
              face_tracker_anchor_identity_coefficients: (e, t) => {
                let n = this._face_tracker_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.anchor_identity_coefficients[t];
              },
              face_tracker_anchor_expression_coefficients: (e, t) => {
                let n = this._face_tracker_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.anchor_expression_coefficients[t];
              },
              face_mesh_create: () => {
                let e = this._latestId++;
                return (
                  this._face_mesh_state_by_instance.set(e, {}),
                  this.serializer.sendMessage(24, (t) => {
                    t.type(e);
                  }),
                  e
                );
              },
              face_mesh_destroy: (e) => {
                if (!this._face_mesh_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._face_mesh_state_by_instance.delete(e),
                  this.serializer.sendMessage(25, (t) => {
                    t.type(e);
                  });
              },
              face_landmark_create: (e) => {
                let t = this._latestId++;
                return (
                  this._face_landmark_state_by_instance.set(t, {}),
                  this.serializer.sendMessage(31, (n) => {
                    n.type(t), n.faceLandmarkName(e);
                  }),
                  t
                );
              },
              face_landmark_destroy: (e) => {
                if (!this._face_landmark_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._face_landmark_state_by_instance.delete(e),
                  this.serializer.sendMessage(32, (t) => {
                    t.type(e);
                  });
              },
              barcode_finder_create: (e) => {
                let t = this._latestId++;
                return (
                  this._barcode_finder_state_by_instance.set(t, {
                    enabled: !0,
                    number_found: 0,
                    found_text: [],
                    found_format: [],
                    formats: 131071,
                  }),
                  this.serializer.sendMessage(15, (n) => {
                    n.type(t), n.type(e);
                  }),
                  t
                );
              },
              barcode_finder_destroy: (e) => {
                if (!this._barcode_finder_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._barcode_finder_state_by_instance.delete(e),
                  this.serializer.sendMessage(16, (t) => {
                    t.type(e);
                  });
              },
              barcode_finder_enabled_set: (e, t) => {
                if (!this._barcode_finder_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(17, (n) => {
                  n.type(e), n.bool(t);
                });
              },
              barcode_finder_enabled: (e) => {
                let t = this._barcode_finder_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              barcode_finder_found_number: (e) => {
                let t = this._barcode_finder_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.number_found;
              },
              barcode_finder_found_text: (e, t) => {
                let n = this._barcode_finder_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.found_text[t];
              },
              barcode_finder_found_format: (e, t) => {
                let n = this._barcode_finder_state_by_instance.get(e);
                if (!n) throw new Error("This object has been destroyed");
                return n.found_format[t];
              },
              barcode_finder_formats: (e) => {
                let t = this._barcode_finder_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.formats;
              },
              barcode_finder_formats_set: (e, t) => {
                if (!this._barcode_finder_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(18, (n) => {
                  n.type(e), n.barcodeFormat(t);
                });
              },
              instant_world_tracker_create: (e) => {
                let t = this._latestId++,
                  n = {
                    enabled: !0,
                    pose: new Float32Array([
                      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                    ]),
                  };
                return (
                  this._instant_world_tracker_state_by_instance.set(t, n),
                  this.serializer.sendMessage(5, (n) => {
                    n.type(t), n.type(e);
                  }),
                  t
                );
              },
              instant_world_tracker_destroy: (e) => {
                if (!this._instant_world_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._instant_world_tracker_state_by_instance.delete(e),
                  this.serializer.sendMessage(14, (t) => {
                    t.type(e);
                  });
              },
              instant_world_tracker_enabled_set: (e, t) => {
                if (!this._instant_world_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(6, (n) => {
                  n.type(e), n.bool(t);
                });
              },
              instant_world_tracker_enabled: (e) => {
                let t = this._instant_world_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              instant_world_tracker_anchor_pose_raw: (e) => {
                let t = this._instant_world_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.pose;
              },
              instant_world_tracker_anchor_pose_set_from_camera_offset: (
                e,
                t,
                n,
                r,
                a
              ) => {
                if (!this._instant_world_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(7, (i) => {
                  i.type(e),
                    i.float(t),
                    i.float(n),
                    i.float(r),
                    i.instantTrackerTransformOrientation(a);
                });
              },
            });
        }
        processMessages(e) {
          this.deserializer.setData(e),
            this.deserializer.forMessages((e, t) => {
              switch (e) {
                case 7: {
                  let e = t.type(),
                    n = this._pipeline_state_by_instance.get(e);
                  if (!n) return;
                  n.frame_number = t.int();
                  break;
                }
                case 6: {
                  let e = t.type(),
                    n = this._pipeline_state_by_instance.get(e);
                  if (!n) return;
                  n.camera_model = t.cameraModel();
                  break;
                }
                case 5: {
                  let e = t.type(),
                    n = this._pipeline_state_by_instance.get(e);
                  if (!n) return;
                  n.current_frame_user_data = t.int();
                  break;
                }
                case 11: {
                  let e = t.type(),
                    n = this._pipeline_state_by_instance.get(e);
                  if (!n) return;
                  n.camera_frame_camera_attitude = t.matrix4x4();
                  break;
                }
                case 18: {
                  let e = t.type(),
                    n = this._image_tracker_state_by_instance.get(e);
                  if (!n) return;
                  n.target_loaded_version = t.int();
                  break;
                }
                case 20: {
                  let e = t.type(),
                    n = this._image_tracker_state_by_instance.get(e);
                  if (!n) return;
                  n.target_count = t.int();
                  break;
                }
                case 1: {
                  let e = t.type(),
                    n = this._image_tracker_state_by_instance.get(e);
                  if (!n) return;
                  n.anchor_count = t.int();
                  break;
                }
                case 2: {
                  let e = t.type(),
                    n = this._image_tracker_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.anchor_id[r] = t.string();
                  break;
                }
                case 3: {
                  let e = t.type(),
                    n = this._image_tracker_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.anchor_pose[r] = t.matrix4x4();
                  break;
                }
                case 17: {
                  let e = t.type(),
                    n = this._face_tracker_state_by_instance.get(e);
                  if (!n) return;
                  n.model_loaded = t.int();
                  break;
                }
                case 12: {
                  let e = t.type(),
                    n = this._face_tracker_state_by_instance.get(e);
                  if (!n) return;
                  n.anchor_count = t.int();
                  break;
                }
                case 13: {
                  let e = t.type(),
                    n = this._face_tracker_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.anchor_id[r] = t.string();
                  break;
                }
                case 14: {
                  let e = t.type(),
                    n = this._face_tracker_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.anchor_pose[r] = t.matrix4x4();
                  break;
                }
                case 15: {
                  let e = t.type(),
                    n = this._face_tracker_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.anchor_identity_coefficients[r] = t.identityCoefficients();
                  break;
                }
                case 16: {
                  let e = t.type(),
                    n = this._face_tracker_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.anchor_expression_coefficients[r] =
                    t.expressionCoefficients();
                  break;
                }
                case 8: {
                  let e = t.type(),
                    n = this._barcode_finder_state_by_instance.get(e);
                  if (!n) return;
                  n.number_found = t.int();
                  break;
                }
                case 9: {
                  let e = t.type(),
                    n = this._barcode_finder_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.found_text[r] = t.string();
                  break;
                }
                case 10: {
                  let e = t.type(),
                    n = this._barcode_finder_state_by_instance.get(e);
                  if (!n) return;
                  let r = t.int();
                  n.found_format[r] = t.barcodeFormat();
                  break;
                }
                case 4: {
                  let e = t.type(),
                    n = this._instant_world_tracker_state_by_instance.get(e);
                  if (!n) return;
                  n.pose = t.matrix4x4();
                  break;
                }
              }
            });
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
            (this._i32View[this._startOffset] =
              this._offset - this._startOffset),
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
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (a, i) {
            function o(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.launchWorker = t.messageManager = void 0);
      const a = n(20);
      let i;
      (t.messageManager = new a.MsgManager()),
        (i = n(21)),
        i.default && (i = i.default),
        (t.launchWorker = function () {
          return r(this, void 0, void 0, function* () {
            let e = new i();
            var r;
            function a() {
              let n = t.messageManager.getOutgoingMessages();
              for (let t of n) e.postMessage(t.msg, t.transferables);
            }
            e.postMessage({ t: "wasm", url: n(22).default }),
              yield ((r = e),
              new Promise((e) => {
                let t = (n) => {
                  "loaded" === n.data &&
                    (r.removeEventListener("message", t), e());
                };
                r.addEventListener("message", t);
              })),
              t.messageManager.onOutgoingMessage.bind(a),
              a(),
              e.addEventListener("message", (e) => {
                t.messageManager.postIncomingMessage(e.data);
              });
          });
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgManager = void 0);
      const r = n(7);
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
      n.r(t);
      var r = n(13),
        a = n.n(r);
      t.default = function () {
        return a()(
          '!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),a=self;r.messageManager.onOutgoingMessage.bind(()=>{let e=r.messageManager.getOutgoingMessages();for(let t of e)a.postMessage(t.msg,t.transferables)});let i=e=>{if(e&&e.data&&"wasm"===e.data.t){let t=location.href.startsWith("blob")?e.data.url:n(13);t.default&&(t=t.default),r.launchWorkerServer(t),a.removeEventListener("message",i)}};a.addEventListener("message",i),a.addEventListener("message",e=>{r.messageManager.postIncomingMessage(e.data)})},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.launchWorkerServer=t.messageManager=void 0;const a=n(3),i=n(7),o=n(8),u=n(11),c=n(14);t.messageManager=new u.MsgManager,t.launchWorkerServer=function(e){return r(this,void 0,void 0,(function*(){let n=a.default({locateFile:(t,n)=>t.endsWith("zcv.wasm")?e:n+t,onRuntimeInitialized:()=>{let e=i.getRuntimeObject(n),r=new o.zappar_server(e,(e,n)=>{t.messageManager.postOutgoingMessage({p:e,t:"zappar",d:n},[n])});t.messageManager.postOutgoingMessage("loaded",[]),t.messageManager.onIncomingMessage.bind(n=>{var a;switch(n.t){case"zappar":r.processBuffer(n.d),t.messageManager.postOutgoingMessage({t:"buf",d:n.d},[n.d]);break;case"buf":null===(a=r.serializersByPipelineId.get(n.p))||void 0===a||a.bufferReturn(n.d);break;case"cameraFrameC2S":let i=n,o=c.mat4.create();i.userFacing&&c.mat4.fromScaling(o,[-1,1,-1]);let u=r._pipeline_by_instance.get(i.p);u&&(e.pipeline_camera_frame_submit(u,i.d,i.width,i.height,i.token,o),e.pipeline_frame_update(u),r.exploreState());let s={token:i.token,d:i.d,p:i.p,t:"cameraFrameRecycleS2C"};t.messageManager.postOutgoingMessage(s,[i.d])}})}})}))}},function(e,t,n){"use strict";n.r(t),function(e){var n,r=(n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var r;t=t||{},r||(r=void 0!==t?t:{});var a,i={};for(a in r)r.hasOwnProperty(a)&&(i[a]=r[a]);r.arguments=[],r.thisProgram="./this.program",r.quit=function(e,t){throw t},r.preRun=[],r.postRun=[];var o="";function u(e){return r.locateFile?r.locateFile(e,o):o+e}o=self.location.href,n&&(o=n),o=0!==o.indexOf("blob:")?o.substr(0,o.lastIndexOf("/")+1):"",r.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},r.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)},r.readAsync=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},r.setWindowTitle=function(e){document.title=e};var c=r.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),s=r.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||c);for(a in i)i.hasOwnProperty(a)&&(r[a]=i[a]);function _(e){var t=S;return S=S+e+15&-16,t}function f(e){var t=E[j>>2];return e=t+e+15&-16,E[j>>2]=e,e>=Y&&!H()?(E[j>>2]=t,0):t}function l(e){var t;return t||(t=16),Math.ceil(e/t)*t}i=void 0;var p,d={"f64-rem":function(e,t){return e%t},debugger:function(){}},h={};function m(e,t,n){return n&&n.length?r["dynCall_"+e].apply(null,[t].concat(n)):r["dynCall_"+e].call(null,t)}var b=!1;function y(e,t){e||wr("Assertion failed: "+t)}function v(e){var t=r["_"+e];return y(t,"Cannot call unknown function "+e+", make sure it is exported"),t}var g={stackSave:function(){vr()},stackRestore:function(){yr()},arrayToC:function(e){var t=br(e.length);return z.set(e,t),t},stringToC:function(e){var t=0;if(null!=e&&0!==e){var n=1+(e.length<<2);t=br(n),G(e,A,t,n)}return t}},w={string:g.stringToC,array:g.arrayToC};function M(e){var t;if(0===t||!e)return"";for(var n,r=0,a=0;r|=n=A[e+a>>0],(0!=n||t)&&(a++,!t||a!=t););if(t||(t=a),n="",128>r){for(;0<t;)r=String.fromCharCode.apply(String,A.subarray(e,e+Math.min(t,1024))),n=n?n+r:r,e+=1024,t-=1024;return n}return q(e)}var k,z,A,x,L,E,T,O,C,S,I,P,B,F,D,j,R="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function V(e,t){for(var n=t;e[n];)++n;if(16<n-t&&e.subarray&&R)return R.decode(e.subarray(t,n));for(n="";;){var r=e[t++];if(!r)return n;if(128&r){var a=63&e[t++];if(192==(224&r))n+=String.fromCharCode((31&r)<<6|a);else{var i=63&e[t++];if(224==(240&r))r=(15&r)<<12|a<<6|i;else{var o=63&e[t++];if(240==(248&r))r=(7&r)<<18|a<<12|i<<6|o;else{var u=63&e[t++];r=248==(252&r)?(3&r)<<24|a<<18|i<<12|o<<6|u:(1&r)<<30|a<<24|i<<18|o<<12|u<<6|63&e[t++]}}65536>r?n+=String.fromCharCode(r):(r-=65536,n+=String.fromCharCode(55296|r>>10,56320|1023&r))}}else n+=String.fromCharCode(r)}}function q(e){return V(A,e)}function G(e,t,n,r){if(!(0<r))return 0;var a=n;r=n+r-1;for(var i=0;i<e.length;++i){var o=e.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),127>=o){if(n>=r)break;t[n++]=o}else{if(2047>=o){if(n+1>=r)break;t[n++]=192|o>>6}else{if(65535>=o){if(n+2>=r)break;t[n++]=224|o>>12}else{if(2097151>=o){if(n+3>=r)break;t[n++]=240|o>>18}else{if(67108863>=o){if(n+4>=r)break;t[n++]=248|o>>24}else{if(n+5>=r)break;t[n++]=252|o>>30,t[n++]=128|o>>24&63}t[n++]=128|o>>18&63}t[n++]=128|o>>12&63}t[n++]=128|o>>6&63}t[n++]=128|63&o}}return t[n]=0,n-a}function N(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++n)),127>=r?++t:t=2047>=r?t+2:65535>=r?t+3:2097151>=r?t+4:67108863>=r?t+5:t+6}return t}function U(e,t){return 0<e%t&&(e+=t-e%t),e}function W(){r.HEAP8=z=new Int8Array(k),r.HEAP16=x=new Int16Array(k),r.HEAP32=E=new Int32Array(k),r.HEAPU8=A=new Uint8Array(k),r.HEAPU16=L=new Uint16Array(k),r.HEAPU32=T=new Uint32Array(k),r.HEAPF32=O=new Float32Array(k),r.HEAPF64=C=new Float64Array(k)}function H(){var e=r.usingWasm?65536:16777216,t=2147483648-e;if(E[j>>2]>t)return!1;var n=Y;for(Y=Math.max(Y,16777216);Y<E[j>>2];)Y=536870912>=Y?U(2*Y,e):Math.min(U((3*Y+2147483648)/4,e),t);return(e=r.reallocBuffer(Y))&&e.byteLength==Y?(r.buffer=k=e,W(),!0):(Y=n,!1)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le"),S=j=0,I=!1,r.reallocBuffer||(r.reallocBuffer=function(e){try{var t=z,n=new ArrayBuffer(e);new Int8Array(n).set(t)}catch(e){return!1}return!!pr(n)&&n});try{Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get)(new ArrayBuffer(4))}catch(Fn){}var Z=r.TOTAL_STACK||5242880,Y=r.TOTAL_MEMORY||16777216;function X(e){for(;0<e.length;){var t=e.shift();if("function"==typeof t)t();else{var n=t.g;"number"==typeof n?void 0===t.P?r.dynCall_v(n):r.dynCall_vi(n,t.P):n(void 0===t.P?null:t.P)}}}Y<Z&&s("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+Y+"! (TOTAL_STACK="+Z+")"),r.buffer?k=r.buffer:("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(r.wasmMemory=new WebAssembly.Memory({initial:Y/65536}),k=r.wasmMemory.buffer):k=new ArrayBuffer(Y),r.buffer=k),W();var K=[],J=[],Q=[],$=[],ee=[],te=!1;function ne(){var e=r.preRun.shift();K.unshift(e)}var re=Math.abs,ae=Math.ceil,ie=Math.floor,oe=Math.min,ue=0,ce=null,se=null;function _e(){ue++,r.monitorRunDependencies&&r.monitorRunDependencies(ue)}function fe(){if(ue--,r.monitorRunDependencies&&r.monitorRunDependencies(ue),0==ue&&(null!==ce&&(clearInterval(ce),ce=null),se)){var e=se;se=null,e()}}function le(e){return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}r.preloadedImages={},r.preloadedAudios={},function(){function e(){try{if(r.wasmBinary)return new Uint8Array(r.wasmBinary);if(r.readBinary)return r.readBinary(i);throw"both async and sync fetching of the wasm failed"}catch(e){wr(e)}}function t(){return r.wasmBinary||"function"!=typeof fetch?new Promise((function(t){t(e())})):fetch(i,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at \'"+i+"\'";return e.arrayBuffer()})).catch((function(){return e()}))}function n(e){function n(e){if((_=e.exports).memory){e=_.memory;var t=r.buffer;e.byteLength<t.byteLength&&s("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here"),t=new Int8Array(t),new Int8Array(e).set(t),r.buffer=k=e,W()}r.asm=_,r.usingWasm=!0,fe()}function a(e){n(e.instance)}function o(e){t().then((function(e){return WebAssembly.instantiate(e,c)})).then(e,(function(e){s("failed to asynchronously prepare wasm: "+e),wr(e)}))}if("object"!=typeof WebAssembly)return s("no native wasm support detected"),!1;if(!(r.wasmMemory instanceof WebAssembly.Memory))return s("no native wasm Memory in use"),!1;if(e.memory=r.wasmMemory,c.global={NaN:NaN,Infinity:1/0},c["global.Math"]=Math,c.env=e,_e(),r.instantiateWasm)try{return r.instantiateWasm(c,n)}catch(e){return s("Module.instantiateWasm callback failed with error: "+e),!1}return r.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||le(i)||"function"!=typeof fetch?o(a):WebAssembly.instantiateStreaming(fetch(i,{credentials:"same-origin"}),c).then(a,(function(e){s("wasm streaming compile failed: "+e),s("falling back to ArrayBuffer instantiation"),o(a)})),{}}var a="zcv.wast",i="zcv.wasm",o="zcv.temp.asm.js";le(a)||(a=u(a)),le(i)||(i=u(i)),le(o)||(o=u(o));var c={global:null,env:null,asm2wasm:d,parent:r},_=null;r.asmPreload=r.asm;var f=r.reallocBuffer;r.reallocBuffer=function(e){if("asmjs"===l)var t=f(e);else e:{e=U(e,r.usingWasm?65536:16777216);var n=r.buffer.byteLength;if(r.usingWasm)try{t=-1!==r.wasmMemory.grow((e-n)/65536)?r.buffer=r.wasmMemory.buffer:null;break e}catch(e){t=null;break e}t=void 0}return t};var l="";r.asm=function(e,t){if(!t.table){void 0===(e=r.wasmTableSize)&&(e=1024);var a=r.wasmMaxTableSize;t.table="object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?void 0!==a?new WebAssembly.Table({initial:e,maximum:a,element:"anyfunc"}):new WebAssembly.Table({initial:e,element:"anyfunc"}):Array(e),r.wasmTable=t.table}return t.__memory_base||(t.__memory_base=r.STATIC_BASE),t.__table_base||(t.__table_base=0),y(t=n(t),"no binaryen method succeeded."),t}}();var pe=[function(){if(self.crypto&&self.crypto.getRandomValues){var e=new Uint32Array(1);return self.crypto.getRandomValues(e),e[0]}return 9007199254740991*Math.random()}];S=433680,J.push({g:function(){Wn()}},{g:function(){er()}},{g:function(){cr()}},{g:function(){lr()}},{g:function(){_r()}},{g:function(){Jn()}},{g:function(){$n()}},{g:function(){Qn()}},{g:function(){Yn()}},{g:function(){Kn()}},{g:function(){Xn()}},{g:function(){sr()}},{g:function(){Hn()}},{g:function(){tr()}},{g:function(){Zn()}},{g:function(){ar()}},{g:function(){nr()}},{g:function(){rr()}},{g:function(){ir()}},{g:function(){or()}},{g:function(){ur()}}),r.STATIC_BASE=1024,r.STATIC_BUMP=432656;var de=S;S+=16;var he={};function me(){wr()}function be(){return"undefined"!=typeof dateNow||self.performance&&self.performance.now}var ye={I:1,u:2,Fc:3,Bb:4,M:5,ja:6,Ua:7,Zb:8,B:9,ib:10,fa:11,Pc:11,ya:12,W:13,ub:14,lc:15,ga:16,ha:17,Qc:18,Y:19,Z:20,N:21,i:22,Ub:23,wa:24,D:25,Mc:26,vb:27,hc:28,O:29,Cc:30,Nb:31,vc:32,rb:33,zc:34,cc:42,yb:43,jb:44,Eb:45,Fb:46,Gb:47,Mb:48,Nc:49,Xb:50,Db:51,ob:35,$b:37,$a:52,cb:53,Rc:54,Vb:55,eb:56,fb:57,pb:35,gb:59,jc:60,Yb:61,Jc:62,ic:63,dc:64,ec:65,Bc:66,ac:67,Xa:68,Gc:69,kb:70,wc:71,Pb:72,sb:73,bb:74,qc:76,ab:77,Ac:78,Hb:79,Ib:80,Lb:81,Kb:82,Jb:83,kc:38,ia:39,Qb:36,X:40,rc:95,uc:96,nb:104,Wb:105,Ya:97,yc:91,oc:88,fc:92,Dc:108,mb:111,Va:98,lb:103,Tb:101,Rb:100,Kc:110,wb:112,xb:113,Ab:115,Za:114,qb:89,Ob:90,xc:93,Ec:94,Wa:99,Sb:102,Cb:106,mc:107,Lc:109,Oc:87,tb:122,Hc:116,pc:95,bc:123,zb:84,sc:75,hb:125,nc:131,tc:130,Ic:86};function ve(e){return r.___errno_location&&(E[r.___errno_location()>>2]=e),e}function ge(e,t){if(0===e)e=Date.now();else{if(1!==e||!be())return ve(ye.i),-1;e=me()}return E[t>>2]=e/1e3|0,E[t+4>>2]=e%1e3*1e6|0,0}var we=0,Me=[],ke={};function ze(e){if(!e||ke[e])return e;for(var t in ke){var n=+t;if(ke[n].ka===e)return n}return e}function Ae(e){if(e){var t=ke[e];y(0<t.J),t.J--,0!==t.J||t.L||(t.oa&&r.dynCall_vi(t.oa,e),delete ke[e],xe(e))}}function xe(e){try{return dr(e)}catch(e){}}function Le(){var e=Me.pop();throw e=ze(e),ke[e].L||(Me.push(e),ke[e].L=!0),we=e,e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}var Ee={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can\'t send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function Te(e,t){for(var n=0,r=e.length-1;0<=r;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift("..");return e}function Oe(e){var t="/"===e.charAt(0),n="/"===e.substr(-1);return(e=Te(e.split("/").filter((function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function Ce(e){var t=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],e||t?(t&&(t=t.substr(0,t.length-1)),e+t):"."}function Se(e){if("/"===e)return"/";var t=e.lastIndexOf("/");return-1===t?e:e.substr(t+1)}function Ie(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){if("string"!=typeof(t=0<=n?arguments[n]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t="/"===t.charAt(0)}return(t?"/":"")+(e=Te(e.split("/").filter((function(e){return!!e})),!t).join("/"))||"."}var Pe=[];function Be(e,t){Pe[e]={input:[],output:[],G:t},ut(e,Fe)}var Fe={open:function(e){var t=Pe[e.node.rdev];if(!t)throw new Ze(ye.Y);e.tty=t,e.seekable=!1},close:function(e){e.tty.G.flush(e.tty)},flush:function(e){e.tty.G.flush(e.tty)},read:function(e,t,n,r){if(!e.tty||!e.tty.G.ra)throw new Ze(ye.ja);for(var a=0,i=0;i<r;i++){try{var o=e.tty.G.ra(e.tty)}catch(e){throw new Ze(ye.M)}if(void 0===o&&0===a)throw new Ze(ye.fa);if(null==o)break;a++,t[n+i]=o}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,n,r){if(!e.tty||!e.tty.G.da)throw new Ze(ye.ja);var a=0;try{if(0===n&&0===r)e.tty.G.flush(e.tty);else for(;a<r;)e.tty.G.da(e.tty,t[n+a]),a++}catch(e){throw new Ze(ye.M)}return r&&(e.node.timestamp=Date.now()),a}},De={ra:function(e){if(!e.input.length){var t=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(t=window.prompt("Input: "))&&(t+="\\n"):"function"==typeof readline&&null!==(t=readline())&&(t+="\\n"),!t)return null;e.input=Nn(t,!0)}return e.input.shift()},da:function(e,t){null===t||10===t?(c(V(e.output,0)),e.output=[]):0!=t&&e.output.push(t)},flush:function(e){e.output&&0<e.output.length&&(c(V(e.output,0)),e.output=[])}},je={da:function(e,t){null===t||10===t?(s(V(e.output,0)),e.output=[]):0!=t&&e.output.push(t)},flush:function(e){e.output&&0<e.output.length&&(s(V(e.output,0)),e.output=[])}},Re={o:null,A:function(){return Re.createNode(null,"/",16895,0)},createNode:function(e,t,n,r){if(24576==(61440&n)||4096==(61440&n))throw new Ze(ye.I);return Re.o||(Re.o={dir:{node:{m:Re.c.m,s:Re.c.s,lookup:Re.c.lookup,R:Re.c.R,rename:Re.c.rename,unlink:Re.c.unlink,rmdir:Re.c.rmdir,readdir:Re.c.readdir,symlink:Re.c.symlink},stream:{F:Re.f.F}},file:{node:{m:Re.c.m,s:Re.c.s},stream:{F:Re.f.F,read:Re.f.read,write:Re.f.write,la:Re.f.la,sa:Re.f.sa,T:Re.f.T}},link:{node:{m:Re.c.m,s:Re.c.s,readlink:Re.c.readlink},stream:{}},na:{node:{m:Re.c.m,s:Re.c.s},stream:ot}}),16384==(61440&(n=$e(e,t,n,r)).mode)?(n.c=Re.o.dir.node,n.f=Re.o.dir.stream,n.b={}):32768==(61440&n.mode)?(n.c=Re.o.file.node,n.f=Re.o.file.stream,n.h=0,n.b=null):40960==(61440&n.mode)?(n.c=Re.o.link.node,n.f=Re.o.link.stream):8192==(61440&n.mode)&&(n.c=Re.o.na.node,n.f=Re.o.na.stream),n.timestamp=Date.now(),e&&(e.b[t]=n),n},Ea:function(e){if(e.b&&e.b.subarray){for(var t=[],n=0;n<e.h;++n)t.push(e.b[n]);return t}return e.b},Wc:function(e){return e.b?e.b.subarray?e.b.subarray(0,e.h):new Uint8Array(e.b):new Uint8Array},pa:function(e,t){if(e.b&&e.b.subarray&&t>e.b.length&&(e.b=Re.Ea(e),e.h=e.b.length),!e.b||e.b.subarray){var n=e.b?e.b.length:0;n>=t||(t=Math.max(t,n*(1048576>n?2:1.125)|0),0!=n&&(t=Math.max(t,256)),n=e.b,e.b=new Uint8Array(t),0<e.h&&e.b.set(n.subarray(0,e.h),0))}else for(!e.b&&0<t&&(e.b=[]);e.b.length<t;)e.b.push(0)},Ma:function(e,t){if(e.h!=t)if(0==t)e.b=null,e.h=0;else{if(!e.b||e.b.subarray){var n=e.b;e.b=new Uint8Array(new ArrayBuffer(t)),n&&e.b.set(n.subarray(0,Math.min(t,e.h)))}else if(e.b||(e.b=[]),e.b.length>t)e.b.length=t;else for(;e.b.length<t;)e.b.push(0);e.h=t}},c:{m:function(e){var t={};return t.dev=8192==(61440&e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,16384==(61440&e.mode)?t.size=4096:32768==(61440&e.mode)?t.size=e.h:40960==(61440&e.mode)?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.Ca=4096,t.blocks=Math.ceil(t.size/t.Ca),t},s:function(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&Re.Ma(e,t.size)},lookup:function(){throw Ye[ye.u]},R:function(e,t,n,r){return Re.createNode(e,t,n,r)},rename:function(e,t,n){if(16384==(61440&e.mode)){try{var r=Qe(t,n)}catch(e){}if(r)for(var a in r.b)throw new Ze(ye.ia)}delete e.parent.b[e.name],e.name=n,t.b[n]=e,e.parent=t},unlink:function(e,t){delete e.b[t]},rmdir:function(e,t){var n,r=Qe(e,t);for(n in r.b)throw new Ze(ye.ia);delete e.b[t]},readdir:function(e){var t,n=[".",".."];for(t in e.b)e.b.hasOwnProperty(t)&&n.push(t);return n},symlink:function(e,t,n){return(e=Re.createNode(e,t,41471,0)).link=n,e},readlink:function(e){if(40960!=(61440&e.mode))throw new Ze(ye.i);return e.link}},f:{read:function(e,t,n,r,a){var i=e.node.b;if(a>=e.node.h)return 0;if(y(0<=(e=Math.min(e.node.h-a,r))),8<e&&i.subarray)t.set(i.subarray(a,a+e),n);else for(r=0;r<e;r++)t[n+r]=i[a+r];return e},write:function(e,t,n,r,a,i){if(i=!1,!r)return 0;if((e=e.node).timestamp=Date.now(),t.subarray&&(!e.b||e.b.subarray)){if(i)return e.b=t.subarray(n,n+r),e.h=r;if(0===e.h&&0===a)return e.b=new Uint8Array(t.subarray(n,n+r)),e.h=r;if(a+r<=e.h)return e.b.set(t.subarray(n,n+r),a),r}if(Re.pa(e,a+r),e.b.subarray&&t.subarray)e.b.set(t.subarray(n,n+r),a);else for(i=0;i<r;i++)e.b[a+i]=t[n+i];return e.h=Math.max(e.h,a+r),r},F:function(e,t,n){if(1===n?t+=e.position:2===n&&32768==(61440&e.node.mode)&&(t+=e.node.h),0>t)throw new Ze(ye.i);return t},la:function(e,t,n){Re.pa(e.node,t+n),e.node.h=Math.max(e.node.h,t+n)},sa:function(e,t,n,r,a,i,o){if(32768!=(61440&e.node.mode))throw new Ze(ye.Y);if(n=e.node.b,2&o||n.buffer!==t&&n.buffer!==t.buffer){if((0<a||a+r<e.node.h)&&(n=n.subarray?n.subarray(a,a+r):Array.prototype.slice.call(n,a,a+r)),e=!0,!(r=hr(r)))throw new Ze(ye.ya);t.set(n,r)}else e=!1,r=n.byteOffset;return{Ka:r,za:e}},T:function(e,t,n,r,a){if(32768!=(61440&e.node.mode))throw new Ze(ye.Y);return 2&a||Re.f.write(e,t,0,r,n,!1),0}}};S+=16,S+=16,S+=16;var Ve=null,qe={},Ge=[],Ne=1,Ue=null,We=!0,He={},Ze=null,Ye={};function Xe(e,t){if(t=t||{},!(e=Ie("/",e)))return{path:"",node:null};var n,r={qa:!0,ea:0};for(n in r)void 0===t[n]&&(t[n]=r[n]);if(8<t.ea)throw new Ze(ye.X);e=Te(e.split("/").filter((function(e){return!!e})),!1);var a=Ve;for(r="/",n=0;n<e.length;n++){var i=n===e.length-1;if(i&&t.parent)break;if(a=Qe(a,e[n]),r=Oe(r+"/"+e[n]),a.S&&(!i||i&&t.qa)&&(a=a.S.root),!i||t.aa)for(i=0;40960==(61440&a.mode);)if(a=pt(r),a=Xe(r=Ie(Ce(r),a),{ea:t.ea}).node,40<i++)throw new Ze(ye.X)}return{path:r,node:a}}function Ke(e){for(var t;;){if(e===e.parent)return e=e.A.ta,t?"/"!==e[e.length-1]?e+"/"+t:e+t:e;t=t?e.name+"/"+t:e.name,e=e.parent}}function Je(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%Ue.length}function Qe(e,t){var n;if(n=(n=nt(e,"x"))?n:e.c.lookup?0:ye.W)throw new Ze(n,e);for(n=Ue[Je(e.id,t)];n;n=n.Ja){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.c.lookup(e,t)}function $e(e,t,n,r){return gt||((gt=function(e,t,n,r){e||(e=this),this.parent=e,this.A=e.A,this.S=null,this.id=Ne++,this.name=t,this.mode=n,this.c={},this.f={},this.rdev=r}).prototype={},Object.defineProperties(gt.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}}})),function(e){var t=Je(e.parent.id,e.name);e.Ja=Ue[t],Ue[t]=e}(e=new gt(e,t,n,r)),e}var et={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function tt(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t}function nt(e,t){return We||(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:ye.W}function rt(e,t){try{return Qe(e,t),ye.ha}catch(e){}return nt(e,"wx")}function at(e,t){wt||((wt=function(){}).prototype={},Object.defineProperties(wt.prototype,{object:{get:function(){return this.node},set:function(e){this.node=e}}}));var n,r=new wt;for(n in e)r[n]=e[n];return e=r,t=function(e){for(e=e||0;e<=4096;e++)if(!Ge[e])return e;throw new Ze(ye.wa)}(t),e.fd=t,Ge[t]=e}var it,ot={open:function(e){e.f=qe[e.node.rdev].f,e.f.open&&e.f.open(e)},F:function(){throw new Ze(ye.O)}};function ut(e,t){qe[e]={f:t}}function ct(e,t){var n="/"===t,r=!t;if(n&&Ve)throw new Ze(ye.ga);if(!n&&!r){var a=Xe(t,{qa:!1});if(t=a.path,(a=a.node).S)throw new Ze(ye.ga);if(16384!=(61440&a.mode))throw new Ze(ye.Z)}t={type:e,$c:{},ta:t,Ia:[]},(e=e.A(t)).A=t,t.root=e,n?Ve=e:a&&(a.S=t,a.A&&a.A.Ia.push(t))}function st(e,t,n){var r=Xe(e,{parent:!0}).node;if(!(e=Se(e))||"."===e||".."===e)throw new Ze(ye.i);var a=rt(r,e);if(a)throw new Ze(a);if(!r.c.R)throw new Ze(ye.I);return r.c.R(r,e,t,n)}function _t(e){st(e,16895,0)}function ft(e,t,n){void 0===n&&(n=t,t=438),st(e,8192|t,n)}function lt(e,t){if(!Ie(e))throw new Ze(ye.u);var n=Xe(t,{parent:!0}).node;if(!n)throw new Ze(ye.u);var r=rt(n,t=Se(t));if(r)throw new Ze(r);if(!n.c.symlink)throw new Ze(ye.I);n.c.symlink(n,t,e)}function pt(e){if(!(e=Xe(e).node))throw new Ze(ye.u);if(!e.c.readlink)throw new Ze(ye.i);return Ie(Ke(e.parent),e.c.readlink(e))}function dt(e,t,n,a){if(""===e)throw new Ze(ye.u);if("string"==typeof t){var i=et[t];if(void 0===i)throw Error("Unknown file open mode: "+t);t=i}if(n=64&t?4095&(void 0===n?438:n)|32768:0,"object"==typeof e)var o=e;else{e=Oe(e);try{o=Xe(e,{aa:!(131072&t)}).node}catch(e){}}if(i=!1,64&t)if(o){if(128&t)throw new Ze(ye.ha)}else o=st(e,n,0),i=!0;if(!o)throw new Ze(ye.u);if(8192==(61440&o.mode)&&(t&=-513),65536&t&&16384!=(61440&o.mode))throw new Ze(ye.Z);if(!i&&(n=o?40960==(61440&o.mode)?ye.X:16384==(61440&o.mode)&&("r"!==tt(t)||512&t)?ye.N:nt(o,tt(t)):ye.u))throw new Ze(n);if(512&t){var u;if(!(u="string"==typeof(n=o)?Xe(n,{aa:!0}).node:n).c.s)throw new Ze(ye.I);if(16384==(61440&u.mode))throw new Ze(ye.N);if(32768!=(61440&u.mode))throw new Ze(ye.i);if(n=nt(u,"w"))throw new Ze(n);u.c.s(u,{size:0,timestamp:Date.now()})}t&=-641,(a=at({node:o,path:Ke(o),flags:t,seekable:!0,position:0,f:o.f,Sa:[],error:!1},a)).f.open&&a.f.open(a),!r.logReadFiles||1&t||(Mt||(Mt={}),e in Mt||(Mt[e]=1,console.log("FS.trackingDelegate error on read file: "+e)));try{He.onOpenFile&&(o=0,1!=(2097155&t)&&(o|=1),0!=(2097155&t)&&(o|=2),He.onOpenFile(e,o))}catch(t){console.log("FS.trackingDelegate[\'onOpenFile\'](\'"+e+"\', flags) threw an exception: "+t.message)}return a}function ht(e){if(null===e.fd)throw new Ze(ye.B);e.ba&&(e.ba=null);try{e.f.close&&e.f.close(e)}catch(e){throw e}finally{Ge[e.fd]=null}e.fd=null}function mt(e,t,n){if(null===e.fd)throw new Ze(ye.B);if(!e.seekable||!e.f.F)throw new Ze(ye.O);e.position=e.f.F(e,t,n),e.Sa=[]}function bt(){Ze||((Ze=function(e,t){this.node=t,this.Na=function(e){for(var t in this.v=e,ye)if(ye[t]===e){this.code=t;break}},this.Na(e),this.message=Ee[e],this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})}).prototype=Error(),Ze.prototype.constructor=Ze,[ye.u].forEach((function(e){Ye[e]=new Ze(e),Ye[e].stack="<generic error, no stack>"})))}function yt(e,t,n){e=Oe("/dev/"+e);var r=function(e,t){var n=0;return e&&(n|=365),t&&(n|=146),n}(!!t,!!n);vt||(vt=64);var a=vt++<<8|0;ut(a,{open:function(e){e.seekable=!1},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},read:function(e,n,r,a){for(var i=0,o=0;o<a;o++){try{var u=t()}catch(e){throw new Ze(ye.M)}if(void 0===u&&0===i)throw new Ze(ye.fa);if(null==u)break;i++,n[r+o]=u}return i&&(e.node.timestamp=Date.now()),i},write:function(e,t,r,a){for(var i=0;i<a;i++)try{n(t[r+i])}catch(e){throw new Ze(ye.M)}return a&&(e.node.timestamp=Date.now()),i}}),ft(e,r,a)}var vt,gt,wt,Mt,kt={},zt={},At=0;function xt(){return E[(At+=4)-4>>2]}function Lt(){var e=Ge[xt()];if(!e)throw new Ze(ye.B);return e}function Et(t,n){if(jt=t,Rt=n,!Ft)return 1;if(0==t)It=function(){var e=0|Math.max(0,Ot+n-me());setTimeout(Ct,e)},Pt="timeout";else if(1==t)It=function(){tn(Ct)},Pt="rAF";else if(2==t){if(void 0===e){var a=[];addEventListener("message",(function(e){"setimmediate"!==e.data&&"setimmediate"!==e.data.target||(e.stopPropagation(),a.shift()())}),!0),e=function(e){a.push(e),void 0===r.setImmediates&&(r.setImmediates=[]),r.setImmediates.push(e),postMessage({target:"setimmediate"})}}It=function(){e(Ct)},Pt="immediate"}return 0}function Tt(e,t,n,a,i){r.noExitRuntime=!0,y(!Ft,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),Ft=e,Dt=a;var o=void 0!==a?function(){r.dynCall_vi(e,a)}:function(){r.dynCall_v(e)},u=Bt;if(Ct=function(){if(!b)if(0<qt.length){var e=Date.now(),t=qt.shift();if(t.g(t.P),St){var n=St,a=0==n%1?n-1:Math.floor(n);St=t.Tc?a:(8*n+(a+.5))/9}console.log(\'main loop blocker "\'+t.name+\'" took \'+(Date.now()-e)+" ms"),r.setStatus&&(e=r.statusMessage||"Please wait...",t=St,n=Gt.Vc,t?t<n?r.setStatus(e+" ("+(n-t)+"/"+n+")"):r.setStatus(e):r.setStatus("")),u<Bt||setTimeout(Ct,0)}else if(!(u<Bt))if(Vt=Vt+1|0,1==jt&&1<Rt&&0!=Vt%Rt)It();else{if(0==jt&&(Ot=me()),"timeout"===Pt&&r.K&&(s("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),Pt=""),!(b||r.preMainLoop&&!1===r.preMainLoop())){try{o()}catch(e){throw e&&"object"==typeof e&&e.stack&&s("exception thrown: "+[e,e.stack]),e}r.postMainLoop&&r.postMainLoop()}u<Bt||("object"==typeof SDL&&SDL.audio&&SDL.audio.La&&SDL.audio.La(),It())}},i||(t&&0<t?Et(0,1e3/t):Et(1,1),It()),n)throw"SimulateInfiniteLoop"}var Ot,Ct,St,It=null,Pt="",Bt=0,Ft=null,Dt=0,jt=0,Rt=0,Vt=0,qt=[],Gt={},Nt=!1,Ut=!1,Wt=[];function Ht(){function e(){Ut=document.pointerLockElement===r.canvas||document.mozPointerLockElement===r.canvas||document.webkitPointerLockElement===r.canvas||document.msPointerLockElement===r.canvas}if(r.preloadPlugins||(r.preloadPlugins=[]),!cn){cn=!0;try{sn=!0}catch(e){sn=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}_n="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:sn?null:console.log("warning: no BlobBuilder"),fn="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0,r.ua||void 0!==fn||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),r.ua=!0),r.preloadPlugins.push({canHandle:function(e){return!r.ua&&/\\.(jpg|jpeg|png|bmp)$/i.test(e)},handle:function(e,t,n,a){var i=null;if(sn)try{(i=new Blob([e],{type:rn(t)})).size!==e.length&&(i=new Blob([new Uint8Array(e).buffer],{type:rn(t)}))}catch(e){!function(e){p||(p={}),p[e]||(p[e]=1,s(e))}("Blob constructor present but fails: "+e+"; falling back to blob builder")}i||((i=new _n).append(new Uint8Array(e).buffer),i=i.getBlob());var o=fn.createObjectURL(i),u=new Image;u.onload=function(){y(u.complete,"Image "+t+" could not be decoded");var a=document.createElement("canvas");a.width=u.width,a.height=u.height,a.getContext("2d").drawImage(u,0,0),r.preloadedImages[t]=a,fn.revokeObjectURL(o),n&&n(e)},u.onerror=function(){console.log("Image "+o+" could not be decoded"),a&&a()},u.src=o}}),r.preloadPlugins.push({canHandle:function(e){return!r.Zc&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(e,t,n,a){function i(a){u||(u=!0,r.preloadedAudios[t]=a,n&&n(e))}function o(){u||(u=!0,r.preloadedAudios[t]=new Audio,a&&a())}var u=!1;if(!sn)return o();try{var c=new Blob([e],{type:rn(t)})}catch(e){return o()}c=fn.createObjectURL(c);var s=new Audio;s.addEventListener("canplaythrough",(function(){i(s)}),!1),s.onerror=function(){if(!u){console.log("warning: browser could not fully decode audio "+t+", trying slower base64 approach");for(var n="",r=0,a=0,o=0;o<e.length;o++)for(r=r<<8|e[o],a+=8;6<=a;){var c=r>>a-6&63;a-=6,n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c]}2==a?(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3&r)<<4],n+="=="):4==a&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15&r)<<2],n+="="),s.src="data:audio/x-"+t.substr(-3)+";base64,"+n,i(s)}},s.src=c,nn((function(){i(s)}),1e4)}});var t=r.canvas;t&&(t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock||t.msRequestPointerLock||function(){},t.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},t.exitPointerLock=t.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",e,!1),document.addEventListener("mozpointerlockchange",e,!1),document.addEventListener("webkitpointerlockchange",e,!1),document.addEventListener("mspointerlockchange",e,!1),r.elementPointerLock&&t.addEventListener("click",(function(e){!Ut&&r.canvas.requestPointerLock&&(r.canvas.requestPointerLock(),e.preventDefault())}),!1))}}function Zt(e,t,n,a){if(t&&r.K&&e==r.canvas)return r.K;if(t){var i={antialias:!1,alpha:!1};if(a)for(var o in a)i[o]=a[o];if(i=function(e,t){function n(){}void 0===t.majorVersion&&void 0===t.minorVersion&&(t.majorVersion=1,t.minorVersion=0);try{e.addEventListener("webglcontextcreationerror",n,!1);try{if(1==t.majorVersion&&0==t.minorVersion)var r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t);else{if(2!=t.majorVersion||0!=t.minorVersion)throw"Unsupported WebGL context version "+majorVersion+"."+minorVersion+"!";r=e.getContext("webgl2",t)}}finally{e.removeEventListener("webglcontextcreationerror",n,!1)}if(!r)throw":("}catch(e){return 0}return r?function(e,t){var n=En(An),r={handle:n,attributes:t,version:t.majorVersion,GLctx:e};return e.canvas&&(e.canvas.Sc=r),An[n]=r,(void 0===t.enableExtensionsByDefault||t.enableExtensionsByDefault)&&function(e){if(e||(e=xn),!e.Ga){e.Ga=!0;var t=e.GLctx;if(2>e.version){var n=t.getExtension("ANGLE_instanced_arrays");n&&(t.vertexAttribDivisor=function(e,t){n.vertexAttribDivisorANGLE(e,t)},t.drawArraysInstanced=function(e,t,r,a){n.drawArraysInstancedANGLE(e,t,r,a)},t.drawElementsInstanced=function(e,t,r,a,i){n.drawElementsInstancedANGLE(e,t,r,a,i)});var r=t.getExtension("OES_vertex_array_object");r&&(t.createVertexArray=function(){return r.createVertexArrayOES()},t.deleteVertexArray=function(e){r.deleteVertexArrayOES(e)},t.bindVertexArray=function(e){r.bindVertexArrayOES(e)},t.isVertexArray=function(e){return r.isVertexArrayOES(e)});var a=t.getExtension("WEBGL_draw_buffers");a&&(t.drawBuffers=function(e,t){a.drawBuffersWEBGL(e,t)})}t.Uc=t.getExtension("EXT_disjoint_timer_query");var i="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");(e=t.getSupportedExtensions())&&0<e.length&&t.getSupportedExtensions().forEach((function(e){-1!=i.indexOf(e)&&t.getExtension(e)}))}}(r),n}(r,t):0}(e,i))var u=An[i].GLctx}else u=e.getContext("2d");return u?(n&&(t||y(void 0===qn,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),r.K=u,t&&function(e){e?(e=An[e])&&(qn=r.K=e.GLctx,xn=e):qn=r.K=xn=null}(i),r.bd=t,Wt.forEach((function(e){e()})),Ht()),u):null}var Yt=!1,Xt=void 0,Kt=void 0;function Jt(e,t,n){function a(){Nt=!1;var e=i.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e?(i.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},i.exitFullscreen=i.exitFullscreen.bind(document),Xt&&i.requestPointerLock(),Nt=!0,Kt?("undefined"!=typeof SDL&&(E[SDL.screen>>2]=8388608|T[SDL.screen>>2]),un(r.canvas),on()):un(i)):(e.parentNode.insertBefore(i,e),e.parentNode.removeChild(e),Kt?("undefined"!=typeof SDL&&(E[SDL.screen>>2]=-8388609&T[SDL.screen>>2]),un(r.canvas),on()):un(i)),r.onFullScreen&&r.onFullScreen(Nt),r.onFullscreen&&r.onFullscreen(Nt)}void 0===(Xt=e)&&(Xt=!0),void 0===(Kt=t)&&(Kt=!1);var i=r.canvas;Yt||(Yt=!0,document.addEventListener("fullscreenchange",a,!1),document.addEventListener("mozfullscreenchange",a,!1),document.addEventListener("webkitfullscreenchange",a,!1),document.addEventListener("MSFullscreenChange",a,!1));var o=document.createElement("div");i.parentNode.insertBefore(o,i),o.appendChild(i),o.requestFullscreen=o.requestFullscreen||o.mozRequestFullScreen||o.msRequestFullscreen||(o.webkitRequestFullscreen?function(){o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(o.webkitRequestFullScreen?function(){o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null),n?o.requestFullscreen({cd:n}):o.requestFullscreen()}function Qt(e,t,n){return s("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead."),Qt=function(e,t,n){return Jt(e,t,n)},Jt(e,t,n)}var $t=0;function en(e){var t=Date.now();if(0===$t)$t=t+1e3/60;else for(;t+2>=$t;)$t+=1e3/60;setTimeout(e,Math.max($t-t,0))}function tn(e){"undefined"==typeof window?en(e):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||en),window.requestAnimationFrame(e))}function nn(e,t){r.noExitRuntime=!0,setTimeout((function(){b||e()}),t)}function rn(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]}var an=[];function on(){var e=r.canvas;an.forEach((function(t){t(e.width,e.height)}))}function un(e,t,n){t&&n?(e.Ta=t,e.Fa=n):(t=e.Ta,n=e.Fa);var a=t,i=n;if(r.forcedAspectRatio&&0<r.forcedAspectRatio&&(a/i<r.forcedAspectRatio?a=Math.round(i*r.forcedAspectRatio):i=Math.round(a/r.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e.parentNode&&"undefined"!=typeof screen){var o=Math.min(screen.width/a,screen.height/i);a=Math.round(a*o),i=Math.round(i*o)}Kt?(e.width!=a&&(e.width=a),e.height!=i&&(e.height=i),void 0!==e.style&&(e.style.removeProperty("width"),e.style.removeProperty("height"))):(e.width!=t&&(e.width=t),e.height!=n&&(e.height=n),void 0!==e.style&&(a!=t||i!=n?(e.style.setProperty("width",a+"px","important"),e.style.setProperty("height",i+"px","important")):(e.style.removeProperty("width"),e.style.removeProperty("height"))))}var cn,sn,_n,fn,ln=[],pn=void 0;function dn(e,t){T[e>>2]=t,T[e+4>>2]=t/4294967296|0}function hn(e,t,n,r){var a=T[e+8>>2];if(a){var i=M(a),o=e+112,u=M(o);u||(u="GET");var c=T[o+48>>2],s=T[o+52>>2],_=!!T[o+56>>2],f=T[o+64>>2],l=T[o+68>>2];a=T[o+72>>2];var p=T[o+76>>2],d=T[o+80>>2];o=T[o+84>>2];var h=!!(1&c),m=!!(2&c);c=!!(64&c),f=f?M(f):void 0,l=l?M(l):void 0;var b=p?M(p):void 0,y=new XMLHttpRequest;if(y.withCredentials=_,y.open(u,i,!c,f,l),c||(y.timeout=s),y.l=i,y.responseType=m?"moz-chunked-arraybuffer":"arraybuffer",p&&y.overrideMimeType(b),a)for(;(u=T[a>>2])&&(i=T[a+4>>2]);)a+=8,u=M(u),i=M(i),y.setRequestHeader(u,i);ln.push(y),T[e+0>>2]=ln.length,a=d&&o?A.slice(d,d+o):null,y.onload=function(r){var a=y.response?y.response.byteLength:0,i=0,o=0;h&&!m&&(i=hr(o=a),A.set(new Uint8Array(y.response),i)),T[e+12>>2]=i,dn(e+16,o),dn(e+24,0),a&&dn(e+32,a),L[e+40>>1]=y.readyState,4===y.readyState&&0===y.status&&(y.status=0<a?200:404),L[e+42>>1]=y.status,y.statusText&&G(y.statusText,A,e+44,64),200==y.status?t&&t(e,y,r):n&&n(e,y,r)},y.onerror=function(t){var r=y.status;4==y.readyState&&0==r&&(r=404),T[e+12>>2]=0,dn(e+16,0),dn(e+24,0),dn(e+32,0),L[e+40>>1]=y.readyState,L[e+42>>1]=r,n&&n(e,y,t)},y.ontimeout=function(t){n&&n(e,y,t)},y.onprogress=function(t){var n=h&&m&&y.response?y.response.byteLength:0,a=0;h&&m&&(a=hr(n),A.set(new Uint8Array(y.response),a)),T[e+12>>2]=a,dn(e+16,n),dn(e+24,t.loaded-n),dn(e+32,t.total),L[e+40>>1]=y.readyState,3<=y.readyState&&0===y.status&&0<t.loaded&&(y.status=200),L[e+42>>1]=y.status,y.statusText&&G(y.statusText,A,e+44,64),r&&r(e,y,t)};try{y.send(a)}catch(t){n&&n(e,y,t)}}else n(e,0,"no url specified!")}function mn(e,t,n,r,a){if(e){var i=T[t+112+60>>2];i||(i=T[t+8>>2]);var o=M(i);try{var u=e.transaction(["FILES"],"readwrite").objectStore("FILES").put(n,o);u.onsuccess=function(){L[t+40>>1]=4,L[t+42>>1]=200,G("OK",A,t+44,64),r(t,0,o)},u.onerror=function(e){L[t+40>>1]=4,L[t+42>>1]=413,G("Payload Too Large",A,t+44,64),a(t,0,e)}}catch(e){a(t,0,e)}}else a(t,0,"IndexedDB not available!")}function bn(e,t,n,r){if(e){var a=T[t+112+60>>2];a||(a=T[t+8>>2]),a=M(a);try{var i=e.transaction(["FILES"],"readonly").objectStore("FILES").get(a);i.onsuccess=function(e){if(e.target.result){var a=(e=e.target.result).byteLength||e.length,i=hr(a);A.set(new Uint8Array(e),i),T[t+12>>2]=i,dn(t+16,a),dn(t+24,0),dn(t+32,a),L[t+40>>1]=4,L[t+42>>1]=200,G("OK",A,t+44,64),n(t,0,e)}else L[t+40>>1]=4,L[t+42>>1]=404,G("Not Found",A,t+44,64),r(t,0,"no data")},i.onerror=function(e){L[t+40>>1]=4,L[t+42>>1]=404,G("Not Found",A,t+44,64),r(t,0,e)}}catch(e){r(t,0,e)}}else r(t,0,"IndexedDB not available!")}function yn(e,t,n,r){if(e){var a=T[t+112+60>>2];a||(a=T[t+8>>2]),a=M(a);try{var i=e.transaction(["FILES"],"readwrite").objectStore("FILES").delete(a);i.onsuccess=function(e){e=e.target.result,T[t+12>>2]=0,dn(t+16,0),dn(t+24,0),dn(t+24,0),L[t+40>>1]=4,L[t+42>>1]=200,G("OK",A,t+44,64),n(t,0,e)},i.onerror=function(e){L[t+40>>1]=4,L[t+42>>1]=404,G("Not Found",A,t+44,64),r(t,0,e)}}catch(e){r(t,0,e)}}else r(t,0,"IndexedDB not available!")}var vn,gn,wn=void 0;for(wn=vn=_(Math.max(12,1)),y(0==(3&vn)),gn=vn+12;wn<gn;wn+=4)E[wn>>2]=0;for(gn=vn+12;wn<gn;)z[wn++>>0]=0;var Mn=1,kn=0,zn=[],An=[],xn=null,Ln=[];function En(e){for(var t=Mn++,n=e.length;n<t;n++)e[n]=null;return t}function Tn(e,t,n,r){return e*=n,r*=Math.floor((e+r-1)/r),0>=t?0:(t-1)*r+e}function On(e,t,n,r,a){switch(t){case 6406:case 6409:case 6402:t=1;break;case 6410:t=2;break;case 6407:case 35904:t=3;break;case 6408:case 35906:t=4;break;default:return kn||(kn=1280),null}switch(e){case 5121:t*=1;break;case 5123:case 36193:t*=2;break;case 5125:case 5126:t*=4;break;case 34042:t=4;break;case 33635:case 32819:case 32820:t=2;break;default:return kn||(kn=1280),null}switch(n=Tn(n,r,t,4),e){case 5121:return A.subarray(a,a+n);case 5126:return O.subarray(a>>2,a+n>>2);case 5125:case 34042:return T.subarray(a>>2,a+n>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return L.subarray(a>>1,a+n>>1);default:return kn||(kn=1280),null}}function Cn(){return Cn.l||(Cn.l=[]),Cn.l.push(vr()),Cn.l.length-1}var Sn={},In=1;function Pn(e){return 0==e%4&&(0!=e%100||0==e%400)}function Bn(e,t){for(var n=0,r=0;r<=t;n+=e[r++]);return n}var Fn,Dn=[31,29,31,30,31,30,31,31,30,31,30,31],jn=[31,28,31,30,31,30,31,31,30,31,30,31];function Rn(e,t){for(e=new Date(e.getTime());0<t;){var n=e.getMonth(),r=(Pn(e.getFullYear())?Dn:jn)[n];if(!(t>r-e.getDate())){e.setDate(e.getDate()+t);break}t-=r-e.getDate()+1,e.setDate(1),11>n?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e}function Vn(e,t,n,r){function a(e,t,n){for(e="number"==typeof e?e.toString():e||"";e.length<t;)e=n[0]+e;return e}function i(e,t){return a(e,t,"0")}function o(e,t){function n(e){return 0>e?-1:0<e?1:0}var r;return 0===(r=n(e.getFullYear()-t.getFullYear()))&&0===(r=n(e.getMonth()-t.getMonth()))&&(r=n(e.getDate()-t.getDate())),r}function u(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function c(e){e=Rn(new Date(e.j+1900,0,1),e.V);var t=u(new Date(e.getFullYear()+1,0,4));return 0>=o(u(new Date(e.getFullYear(),0,4)),e)?0>=o(t,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var s=E[r+40>>2];for(var _ in r={Qa:E[r>>2],Pa:E[r+4>>2],U:E[r+8>>2],H:E[r+12>>2],C:E[r+16>>2],j:E[r+20>>2],va:E[r+24>>2],V:E[r+28>>2],ad:E[r+32>>2],Oa:E[r+36>>2],Ra:s?M(s):""},n=M(n),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"})n=n.replace(new RegExp(_,"g"),s[_]);var f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),l="January February March April May June July August September October November December".split(" ");for(_ in s={"%a":function(e){return f[e.va].substring(0,3)},"%A":function(e){return f[e.va]},"%b":function(e){return l[e.C].substring(0,3)},"%B":function(e){return l[e.C]},"%C":function(e){return i((e.j+1900)/100|0,2)},"%d":function(e){return i(e.H,2)},"%e":function(e){return a(e.H,2," ")},"%g":function(e){return c(e).toString().substring(2)},"%G":function(e){return c(e)},"%H":function(e){return i(e.U,2)},"%I":function(e){return 0==(e=e.U)?e=12:12<e&&(e-=12),i(e,2)},"%j":function(e){return i(e.H+Bn(Pn(e.j+1900)?Dn:jn,e.C-1),3)},"%m":function(e){return i(e.C+1,2)},"%M":function(e){return i(e.Pa,2)},"%n":function(){return"\\n"},"%p":function(e){return 0<=e.U&&12>e.U?"AM":"PM"},"%S":function(e){return i(e.Qa,2)},"%t":function(){return"\\t"},"%u":function(e){return new Date(e.j+1900,e.C+1,e.H,0,0,0,0).getDay()||7},"%U":function(e){var t=new Date(e.j+1900,0,1),n=0===t.getDay()?t:Rn(t,7-t.getDay());return 0>o(n,e=new Date(e.j+1900,e.C,e.H))?i(Math.ceil((31-n.getDate()+(Bn(Pn(e.getFullYear())?Dn:jn,e.getMonth()-1)-31)+e.getDate())/7),2):0===o(n,t)?"01":"00"},"%V":function(e){var t=u(new Date(e.j+1900,0,4)),n=u(new Date(e.j+1901,0,4)),r=Rn(new Date(e.j+1900,0,1),e.V);return 0>o(r,t)?"53":0>=o(n,r)?"01":i(Math.ceil((t.getFullYear()<e.j+1900?e.V+32-t.getDate():e.V+1-t.getDate())/7),2)},"%w":function(e){return new Date(e.j+1900,e.C+1,e.H,0,0,0,0).getDay()},"%W":function(e){var t=new Date(e.j,0,1),n=1===t.getDay()?t:Rn(t,0===t.getDay()?1:7-t.getDay()+1);return 0>o(n,e=new Date(e.j+1900,e.C,e.H))?i(Math.ceil((31-n.getDate()+(Bn(Pn(e.getFullYear())?Dn:jn,e.getMonth()-1)-31)+e.getDate())/7),2):0===o(n,t)?"01":"00"},"%y":function(e){return(e.j+1900).toString().substring(2)},"%Y":function(e){return e.j+1900},"%z":function(e){var t=0<=(e=e.Oa);return e=Math.abs(e)/60,(t?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.Ra},"%%":function(){return"%"}})0<=n.indexOf(_)&&(n=n.replace(new RegExp(_,"g"),s[_](r)));return(_=Nn(n,!1)).length>t?0:(z.set(_,e),_.length-1)}me="undefined"!=typeof dateNow?dateNow:"object"==typeof self&&self.performance&&"function"==typeof self.performance.now?function(){return self.performance.now()}:"object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:Date.now,bt(),Ue=Array(4096),ct(Re,"/"),_t("/tmp"),_t("/home"),_t("/home/web_user"),function(){if(_t("/dev"),ut(259,{read:function(){return 0},write:function(e,t,n,r){return r}}),ft("/dev/null",259),Be(1280,De),Be(1536,je),ft("/dev/tty",1280),ft("/dev/tty1",1536),"undefined"!=typeof crypto)var e=new Uint8Array(1),t=function(){return crypto.getRandomValues(e),e[0]};else t=function(){wr("random_device")};yt("random",t),yt("urandom",t),_t("/dev/shm"),_t("/dev/shm/tmp")}(),_t("/proc"),_t("/proc/self"),_t("/proc/self/fd"),ct({A:function(){var e=$e("/proc/self","fd",16895,73);return e.c={lookup:function(e,t){var n=Ge[+t];if(!n)throw new Ze(ye.B);return(e={parent:null,A:{ta:"fake"},c:{readlink:function(){return n.path}}}).parent=e}},e}},"/proc/self/fd"),J.unshift((function(){if(!r.noFSInit&&!it){y(!it,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),it=!0,bt(),r.stdin=r.stdin,r.stdout=r.stdout,r.stderr=r.stderr,r.stdin?yt("stdin",r.stdin):lt("/dev/tty","/dev/stdin"),r.stdout?yt("stdout",null,r.stdout):lt("/dev/tty","/dev/stdout"),r.stderr?yt("stderr",null,r.stderr):lt("/dev/tty1","/dev/stderr");var e=dt("/dev/stdin","r");y(0===e.fd,"invalid handle for stdin ("+e.fd+")"),y(1===(e=dt("/dev/stdout","w")).fd,"invalid handle for stdout ("+e.fd+")"),y(2===(e=dt("/dev/stderr","w")).fd,"invalid handle for stderr ("+e.fd+")")}})),Q.push((function(){We=!1})),$.push((function(){it=!1;var e=r._fflush;for(e&&e(0),e=0;e<Ge.length;e++){var t=Ge[e];t&&ht(t)}})),J.unshift((function(){})),$.push((function(){})),r.requestFullScreen=function(e,t,n){s("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead."),r.requestFullScreen=r.requestFullscreen,Qt(e,t,n)},r.requestFullscreen=function(e,t,n){Jt(e,t,n)},r.requestAnimationFrame=function(e){tn(e)},r.setCanvasSize=function(e,t,n){un(r.canvas,e,t),n||on()},r.pauseMainLoop=function(){It=null,Bt++},r.resumeMainLoop=function(){Bt++;var e=jt,t=Rt,n=Ft;Ft=null,Tt(n,0,!1,Dt,!0),Et(e,t),It()},r.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(void 0)},r.createContext=function(e,t,n,r){return Zt(e,t,n,r)},Fn="undefined"==typeof ENVIRONMENT_IS_FETCH_WORKER,function(e,t){try{var n=indexedDB.open("emscripten_filesystem",1)}catch(e){return void t(e)}n.onupgradeneeded=function(e){(e=e.target.result).objectStoreNames.contains("FILES")&&e.deleteObjectStore("FILES"),e.createObjectStore("FILES")},n.onsuccess=function(t){e(t.target.result)},n.onerror=function(e){t(e)}}((function(e){pn=e,Fn&&fe()}),(function(){pn=!1,Fn&&fe()})),"undefined"!=typeof ENVIRONMENT_IS_FETCH_WORKER&&ENVIRONMENT_IS_FETCH_WORKER||_e();for(var qn,Gn=0;256>Gn;Gn++);for(Gn=0;32>Gn;Gn++)Ln.push(Array(Gn));function Nn(e,t){var n=Array(N(e)+1);return e=G(e,n,0,n.length),t&&(n.length=e),n}j=_(4),P=B=l(S),D=l(F=P+Z),E[j>>2]=D,I=!0,r.wasmTableSize=2468,r.wasmMaxTableSize=2468,r.Aa={},r.Ba={abort:wr,assert:y,enlargeMemory:H,getTotalMemory:function(){return Y},abortOnCannotGrowMemory:function(){wr("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+Y+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},invoke_i:function(e){var t=vr();try{return r.dynCall_i(e)}catch(e){if(yr(t),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_ii:function(e,t){var n=vr();try{return r.dynCall_ii(e,t)}catch(e){if(yr(n),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iii:function(e,t,n){var a=vr();try{return r.dynCall_iii(e,t,n)}catch(e){if(yr(a),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiii:function(e,t,n,a){var i=vr();try{return r.dynCall_iiii(e,t,n,a)}catch(e){if(yr(i),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiii:function(e,t,n,a,i){var o=vr();try{return r.dynCall_iiiii(e,t,n,a,i)}catch(e){if(yr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiid:function(e,t,n,a,i,o){var u=vr();try{return r.dynCall_iiiiid(e,t,n,a,i,o)}catch(e){if(yr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiii:function(e,t,n,a,i,o){var u=vr();try{return r.dynCall_iiiiii(e,t,n,a,i,o)}catch(e){if(yr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiid:function(e,t,n,a,i,o,u){var c=vr();try{return r.dynCall_iiiiiid(e,t,n,a,i,o,u)}catch(e){if(yr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiii:function(e,t,n,a,i,o,u){var c=vr();try{return r.dynCall_iiiiiii(e,t,n,a,i,o,u)}catch(e){if(yr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiiii:function(e,t,n,a,i,o,u,c){var s=vr();try{return r.dynCall_iiiiiiii(e,t,n,a,i,o,u,c)}catch(e){if(yr(s),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiiiii:function(e,t,n,a,i,o,u,c,s){var _=vr();try{return r.dynCall_iiiiiiiii(e,t,n,a,i,o,u,c,s)}catch(e){if(yr(_),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiij:function(e,t,n,a,i,o,u){var c=vr();try{return r.dynCall_iiiiij(e,t,n,a,i,o,u)}catch(e){if(yr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiji:function(e,t,n,a,i){var o=vr();try{return r.dynCall_iiji(e,t,n,a,i)}catch(e){if(yr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_v:function(e){var t=vr();try{r.dynCall_v(e)}catch(e){if(yr(t),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vi:function(e,t){var n=vr();try{r.dynCall_vi(e,t)}catch(e){if(yr(n),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vii:function(e,t,n){var a=vr();try{r.dynCall_vii(e,t,n)}catch(e){if(yr(a),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiffii:function(e,t,n,a,i,o,u){var c=vr();try{r.dynCall_viiffii(e,t,n,a,i,o,u)}catch(e){if(yr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viii:function(e,t,n,a){var i=vr();try{r.dynCall_viii(e,t,n,a)}catch(e){if(yr(i),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiifffii:function(e,t,n,a,i,o,u,c,s){var _=vr();try{r.dynCall_viiifffii(e,t,n,a,i,o,u,c,s)}catch(e){if(yr(_),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiffii:function(e,t,n,a,i,o,u,c){var s=vr();try{r.dynCall_viiiffii(e,t,n,a,i,o,u,c)}catch(e){if(yr(s),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiii:function(e,t,n,a,i){var o=vr();try{r.dynCall_viiii(e,t,n,a,i)}catch(e){if(yr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiii:function(e,t,n,a,i,o){var u=vr();try{r.dynCall_viiiii(e,t,n,a,i,o)}catch(e){if(yr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiiiffffffffffffffff:function(e,t,n,a,i,o,u,c,s,_,f,l,p,d,h,m,b,y,v,g,w,M){var k=vr();try{r.dynCall_viiiiiffffffffffffffff(e,t,n,a,i,o,u,c,s,_,f,l,p,d,h,m,b,y,v,g,w,M)}catch(e){if(yr(k),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiiii:function(e,t,n,a,i,o,u){var c=vr();try{r.dynCall_viiiiii(e,t,n,a,i,o,u)}catch(e){if(yr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viijii:function(e,t,n,a,i,o,u){var c=vr();try{r.dynCall_viijii(e,t,n,a,i,o,u)}catch(e){if(yr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vij:function(e,t,n,a){var i=vr();try{r.dynCall_vij(e,t,n,a)}catch(e){if(yr(i),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viji:function(e,t,n,a,i){var o=vr();try{r.dynCall_viji(e,t,n,a,i)}catch(e){if(yr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vijii:function(e,t,n,a,i,o){var u=vr();try{r.dynCall_vijii(e,t,n,a,i,o)}catch(e){if(yr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},___buildEnvironment:function e(t){if(e.Da)var n=E[t>>2],a=E[n>>2];else e.Da=!0,he.USER=he.LOGNAME="web_user",he.PATH="/",he.PWD="/",he.HOME="/home/web_user",he.LANG="C.UTF-8",he._=r.thisProgram,a=I?te?hr(1024):f(1024):_(1024),n=I?te?hr(256):f(256):_(256),E[n>>2]=a,E[t>>2]=n;t=[];var i,o=0;for(i in he)if("string"==typeof he[i]){var u=i+"="+he[i];t.push(u),o+=u.length}if(1024<o)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(i=0;i<t.length;i++){o=u=t[i];for(var c=a,s=0;s<o.length;++s)z[c++>>0]=o.charCodeAt(s);z[c>>0]=0,E[n+4*i>>2]=a,a+=u.length+1}E[n+4*t.length>>2]=0},___clock_gettime:function(){return ge.apply(null,arguments)},___cxa_allocate_exception:function(e){return hr(e)},___cxa_begin_catch:function(e){var t=ke[e];return t&&!t.ma&&(t.ma=!0,fr.$--),t&&(t.L=!1),Me.push(e),(t=ze(e))&&ke[t].J++,e},___cxa_current_primary_exception:function(){var e=Me[Me.length-1]||0;if(e){var t=ze(e);t&&ke[t].J++}return e},___cxa_decrement_exception_refcount:function(e){Ae(ze(e))},___cxa_end_catch:function(){r.setThrew(0);var e=Me.pop();e&&(Ae(ze(e)),we=0)},___cxa_find_matching_catch:function e(){var t=we;if(!t)return 0|(mr(0),0);var n=ke[t],a=n.type;if(!a)return 0|(mr(0),t);var i=Array.prototype.slice.call(arguments);r.___cxa_is_pointer_type(a),e.buffer||(e.buffer=hr(4)),E[e.buffer>>2]=t,t=e.buffer;for(var o=0;o<i.length;o++)if(i[o]&&r.___cxa_can_catch(i[o],a,t))return t=E[t>>2],n.ka=t,0|(mr(i[o]),t);return t=E[t>>2],0|(mr(a),t)},___cxa_free_exception:xe,___cxa_increment_exception_refcount:function(e){(e=ze(e))&&ke[e].J++},___cxa_pure_virtual:function(){throw b=!0,"Pure virtual function called!"},___cxa_rethrow:Le,___cxa_rethrow_primary_exception:function(e){e&&(Me.push(e),ke[e].L=!0,Le())},___cxa_throw:function(e,t,n){throw ke[e]={Ka:e,ka:e,type:t,oa:n,J:0,ma:!1,L:!1},we=e,"uncaught_exception"in fr?fr.$++:fr.$=1,e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},___cxa_uncaught_exception:function(){return!!fr.$},___gxx_personality_v0:function(){},___lock:function(){},___map_file:function(){return ve(ye.I),-1},___resumeException:function(e){throw we||(we=e),e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},___setErrNo:ve,___syscall140:function(e,t){At=t;try{var n=Lt();xt();var r=xt(),a=xt(),i=xt();return mt(n,r,i),E[a>>2]=n.position,n.ba&&0===r&&0===i&&(n.ba=null),0}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall145:function(e,t){At=t;try{var n=Lt(),r=xt();e:{var a=xt();for(t=e=0;t<a;t++){var i=E[r+(8*t+4)>>2],o=n,u=E[r+8*t>>2],c=i,s=void 0,_=z;if(0>c||0>s)throw new Ze(ye.i);if(null===o.fd)throw new Ze(ye.B);if(1==(2097155&o.flags))throw new Ze(ye.B);if(16384==(61440&o.node.mode))throw new Ze(ye.N);if(!o.f.read)throw new Ze(ye.i);var f=void 0!==s;if(f){if(!o.seekable)throw new Ze(ye.O)}else s=o.position;var l=o.f.read(o,_,u,c,s);f||(o.position+=l);var p=l;if(0>p){var d=-1;break e}if(e+=p,p<i)break}d=e}return d}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall146:function(e,t){At=t;try{var n=Lt(),r=xt();e:{var a=xt();for(t=e=0;t<a;t++){var i=n,o=E[r+8*t>>2],u=E[r+(8*t+4)>>2],c=z,s=void 0;if(0>u||0>s)throw new Ze(ye.i);if(null===i.fd)throw new Ze(ye.B);if(0==(2097155&i.flags))throw new Ze(ye.B);if(16384==(61440&i.node.mode))throw new Ze(ye.N);if(!i.f.write)throw new Ze(ye.i);1024&i.flags&&mt(i,0,2);var _=void 0!==s;if(_){if(!i.seekable)throw new Ze(ye.O)}else s=i.position;var f=i.f.write(i,c,o,u,s,void 0);_||(i.position+=f);try{i.path&&He.onWriteToFile&&He.onWriteToFile(i.path)}catch(e){console.log("FS.trackingDelegate[\'onWriteToFile\'](\'"+path+"\') threw an exception: "+e.message)}var l=f;if(0>l){var p=-1;break e}e+=l}p=e}return p}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall196:function(e,t){At=t;try{var n=M(xt());e:{var r=xt();try{var a=Xe(n,{aa:!1}).node;if(!a)throw new Ze(ye.u);if(!a.c.m)throw new Ze(ye.I);var i=a.c.m(a)}catch(e){if(e&&e.node&&Oe(n)!==Oe(Ke(e.node))){var o=-ye.Z;break e}throw e}E[r>>2]=i.dev,E[r+4>>2]=0,E[r+8>>2]=i.ino,E[r+12>>2]=i.mode,E[r+16>>2]=i.nlink,E[r+20>>2]=i.uid,E[r+24>>2]=i.gid,E[r+28>>2]=i.rdev,E[r+32>>2]=0,E[r+36>>2]=i.size,E[r+40>>2]=4096,E[r+44>>2]=i.blocks,E[r+48>>2]=i.atime.getTime()/1e3|0,E[r+52>>2]=0,E[r+56>>2]=i.mtime.getTime()/1e3|0,E[r+60>>2]=0,E[r+64>>2]=i.ctime.getTime()/1e3|0,E[r+68>>2]=0,E[r+72>>2]=i.ino,o=0}return o}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall221:function(e,t){At=t;try{var n=Lt();switch(xt()){case 0:var r=xt();return 0>r?-ye.i:dt(n.path,n.flags,0,r).fd;case 1:case 2:return 0;case 3:return n.flags;case 4:return r=xt(),n.flags|=r,0;case 12:case 12:return r=xt(),x[r+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-ye.i;case 9:return ve(ye.i),-1;default:return-ye.i}}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall5:function(e,t){At=t;try{return dt(M(xt()),xt(),xt()).fd}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall54:function(e,t){At=t;try{var n=Lt(),r=xt();switch(r){case 21509:case 21505:return n.tty?0:-ye.D;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return n.tty?0:-ye.D;case 21519:if(!n.tty)return-ye.D;var a=xt();return E[a>>2]=0;case 21520:return n.tty?-ye.i:-ye.D;case 21531:if(e=a=xt(),!n.f.Ha)throw new Ze(ye.D);return n.f.Ha(n,r,e);case 21523:case 21524:return n.tty?0:-ye.D;default:wr("bad ioctl syscall "+r)}}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall6:function(e,t){At=t;try{return ht(Lt()),0}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___syscall91:function(e,t){At=t;try{var n=xt(),r=xt(),a=zt[n];if(!a)return 0;if(r===a.Xc){var i=Ge[a.fd],o=a.flags,u=new Uint8Array(A.subarray(n,n+r));i&&i.f.T&&i.f.T(i,u,0,r,o),zt[n]=null,a.za&&dr(a.Yc)}return 0}catch(e){return void 0!==kt&&e instanceof Ze||wr(e),-e.v}},___unlock:function(){},__addDays:Rn,__arraySum:Bn,__emscripten_fetch_cache_data:mn,__emscripten_fetch_delete_cached_data:yn,__emscripten_fetch_load_cached_data:bn,__emscripten_fetch_xhr:hn,__emscripten_get_fetch_work_queue:function(){return vn},__isLeapYear:Pn,_abort:function(){r.abort()},_clock_gettime:ge,_emidentity:function(){var e=new URL(location.origin).hostname;if(0===e.length&&(e=new URL(location.href.replace("blob:","")).hostname),/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e))0===e.indexOf("10.")&&(e="10.*"),0===e.indexOf("37.140.")&&(e="37.140.*"),0===e.indexOf("172.")&&(e="172.*"),0===e.indexOf("127.")&&(e="127.*");else{var t=new RegExp("("+String.fromCharCode(92)+".site)$","i");t.test(e)&&(e="*.site"),(t=new RegExp("("+String.fromCharCode(92)+".arweb"+String.fromCharCode(92)+".app)$","i")).test(e)&&(e="*.arweb.app")}t=N(e)+1;var n=hr(t);return G(e,A,n,t+1),n},_emlicerr:function(){self.postMessage({t:"licerr"})},_emscripten_asm_const_i:function(e){return pe[e]()},_emscripten_async_call:function(e,t,n){function a(){!function(e){if(e){y("vi"),h.vi||(h.vi={});var t=h.vi;return t[e]||(t[e]=function(t){return m("vi",e,[t])}),t[e]}}(e)(t)}r.noExitRuntime=!0,0<=n?nn(a,n):function(e){tn((function(){b||e()}))}(a)},_emscripten_get_now:me,_emscripten_get_now_is_monotonic:be,_emscripten_is_main_browser_thread:function(){return!1},_emscripten_is_main_runtime_thread:function(){return 1},_emscripten_memcpy_big:function(e,t,n){return A.set(A.subarray(t,t+n),e),e},_emscripten_set_main_loop:Tt,_emscripten_set_main_loop_timing:Et,_emscripten_start_fetch:function(e,t,n,a){function i(e){l?r.dynCall_vi(l,e):n&&n(e)}function o(e){p?r.dynCall_vi(p,e):a&&a(e)}function u(e,n){mn(pn,e,n.response,(function(e){f?r.dynCall_vi(f,e):t&&t(e)}),(function(e){f?r.dynCall_vi(f,e):t&&t(e)}))}function c(e){f?r.dynCall_vi(f,e):t&&t(e)}void 0!==r&&(r.noExitRuntime=!0);var s=e+112,_=M(s),f=T[s+36>>2],l=T[s+40>>2],p=T[s+44>>2],d=T[s+48>>2],h=!!(4&d),m=!!(32&d);if(16&d&&"EM_IDB_STORE"!==_&&"EM_IDB_DELETE"!==_){if(m)return 0;hn(e,h?u:c,i,o)}else{if(!pn)return i(e),0;"EM_IDB_STORE"===_?(_=T[s+80>>2],s=A.slice(_,_+T[s+84>>2]),mn(pn,e,s,c,i)):"EM_IDB_DELETE"===_?yn(pn,e,c,i):bn(pn,e,c,m?i:h?function(e){hn(e,u,i,o)}:function(e){hn(e,c,i,o)})}return e},_getenv:function e(t){if(0===t)return 0;if(t=M(t),!he.hasOwnProperty(t))return 0;e.l&&dr(e.l);var n=N(t=he[t])+1,r=hr(n);return r&&G(t,z,r,n),e.l=r},_gettimeofday:function(e){var t=Date.now();return E[e>>2]=t/1e3|0,E[e+4>>2]=t%1e3*1e3|0,0},_glBindTexture:function(e,t){qn.bindTexture(e,t?zn[t]:null)},_glGenTextures:function(e,t){for(var n=0;n<e;n++){var r=qn.createTexture();if(!r){for(kn||(kn=1282);n<e;)E[t+4*n++>>2]=0;break}var a=En(zn);r.name=a,zn[a]=r,E[t+4*n>>2]=a}},_glTexImage2D:function(e,t,n,r,a,i,o,u,c){var s=null;c&&(s=On(u,o,r,a,c)),qn.texImage2D(e,t,n,r,a,i,o,u,s)},_glTexParameteri:function(e,t,n){qn.texParameteri(e,t,n)},_llvm_exp2_f32:function(e){return Math.pow(2,e)},_llvm_stackrestore:function(e){var t=Cn.l[e];Cn.l.splice(e,1),yr(t)},_llvm_stacksave:Cn,_llvm_trap:function(){wr("trap!")},_pthread_cond_destroy:function(){return 0},_pthread_cond_init:function(){return 0},_pthread_cond_signal:function(){return 0},_pthread_cond_wait:function(){return 0},_pthread_create:function(){return 11},_pthread_getspecific:function(e){return Sn[e]||0},_pthread_join:function(){},_pthread_key_create:function(e){return 0==e?ye.i:(E[e>>2]=In,Sn[In]=0,In++,0)},_pthread_mutex_destroy:function(){},_pthread_mutex_init:function(){},_pthread_once:function e(t,n){e.l||(e.l={}),t in e.l||(r.dynCall_v(n),e.l[t]=1)},_pthread_setspecific:function(e,t){return e in Sn?(Sn[e]=t,0):ye.i},_strftime:Vn,_strftime_l:function(e,t,n,r){return Vn(e,t,n,r)},_sysconf:function(e){switch(e){case 30:return 16384;case 85:return 131068;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;case 79:return 0;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:return"object"==typeof navigator&&navigator.hardwareConcurrency||1}return ve(ye.i),-1},emscriptenWebGLComputeImageSize:Tn,emscriptenWebGLGetTexPixelData:On,DYNAMICTOP_PTR:j,tempDoublePtr:de,STACKTOP:B,STACK_MAX:F};var Un=r.asm(r.Aa,r.Ba,k);r.asm=Un;var Wn=r.__GLOBAL__I_000101=function(){return r.asm.__GLOBAL__I_000101.apply(null,arguments)},Hn=r.__GLOBAL__sub_I_AZHighLevelEncoder_cpp=function(){return r.asm.__GLOBAL__sub_I_AZHighLevelEncoder_cpp.apply(null,arguments)},Zn=r.__GLOBAL__sub_I_CameraSource_cpp=function(){return r.asm.__GLOBAL__sub_I_CameraSource_cpp.apply(null,arguments)},Yn=r.__GLOBAL__sub_I_CharacterSetECI_cpp=function(){return r.asm.__GLOBAL__sub_I_CharacterSetECI_cpp.apply(null,arguments)},Xn=r.__GLOBAL__sub_I_DMECEncoder_cpp=function(){return r.asm.__GLOBAL__sub_I_DMECEncoder_cpp.apply(null,arguments)},Kn=r.__GLOBAL__sub_I_DMHighLevelEncoder_cpp=function(){return r.asm.__GLOBAL__sub_I_DMHighLevelEncoder_cpp.apply(null,arguments)},Jn=r.__GLOBAL__sub_I_GridSampler_cpp=function(){return r.asm.__GLOBAL__sub_I_GridSampler_cpp.apply(null,arguments)},Qn=r.__GLOBAL__sub_I_ODCode128Patterns_cpp=function(){return r.asm.__GLOBAL__sub_I_ODCode128Patterns_cpp.apply(null,arguments)},$n=r.__GLOBAL__sub_I_ODRSSExpandedReader_cpp=function(){return r.asm.__GLOBAL__sub_I_ODRSSExpandedReader_cpp.apply(null,arguments)},er=r.__GLOBAL__sub_I_PDFDetector_cpp=function(){return r.asm.__GLOBAL__sub_I_PDFDetector_cpp.apply(null,arguments)},tr=r.__GLOBAL__sub_I_StandardStatsManager_cpp=function(){return r.asm.__GLOBAL__sub_I_StandardStatsManager_cpp.apply(null,arguments)},nr=r.__GLOBAL__sub_I_barcode_finder_cpp=function(){return r.asm.__GLOBAL__sub_I_barcode_finder_cpp.apply(null,arguments)},rr=r.__GLOBAL__sub_I_face_landmark_cpp=function(){return r.asm.__GLOBAL__sub_I_face_landmark_cpp.apply(null,arguments)},ar=r.__GLOBAL__sub_I_face_mesh_cpp=function(){return r.asm.__GLOBAL__sub_I_face_mesh_cpp.apply(null,arguments)},ir=r.__GLOBAL__sub_I_face_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_face_tracker_cpp.apply(null,arguments)},or=r.__GLOBAL__sub_I_image_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_image_tracker_cpp.apply(null,arguments)},ur=r.__GLOBAL__sub_I_instant_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_instant_tracker_cpp.apply(null,arguments)},cr=r.__GLOBAL__sub_I_iostream_cpp=function(){return r.asm.__GLOBAL__sub_I_iostream_cpp.apply(null,arguments)},sr=r.__GLOBAL__sub_I_pipeline_cpp=function(){return r.asm.__GLOBAL__sub_I_pipeline_cpp.apply(null,arguments)},_r=r.__GLOBAL__sub_I_zappar_face_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_zappar_face_tracker_cpp.apply(null,arguments)};r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti=function(){return r.asm.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i=function(){return r.asm.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i.apply(null,arguments)},r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti=function(){return r.asm.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti=function(){return r.asm.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti=function(){return r.asm.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i=function(){return r.asm.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i.apply(null,arguments)},r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti=function(){return r.asm.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii=function(){return r.asm.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii.apply(null,arguments)},r.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii=function(){return r.asm.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii.apply(null,arguments)},r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc=function(){return r.asm.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc.apply(null,arguments)},r.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii=function(){return r.asm.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii.apply(null,arguments)},r.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii=function(){return r.asm.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii.apply(null,arguments)},r.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii=function(){return r.asm.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii.apply(null,arguments)},r.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii=function(){return r.asm.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii.apply(null,arguments)},r.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii=function(){return r.asm.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii.apply(null,arguments)},r.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii=function(){return r.asm.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii.apply(null,arguments)};var fr=r.__ZSt18uncaught_exceptionv=function(){return r.asm.__ZSt18uncaught_exceptionv.apply(null,arguments)};r.___cxa_can_catch=function(){return r.asm.___cxa_can_catch.apply(null,arguments)},r.___cxa_is_pointer_type=function(){return r.asm.___cxa_is_pointer_type.apply(null,arguments)},r.___em_js__emidentity=function(){return r.asm.___em_js__emidentity.apply(null,arguments)},r.___em_js__emlicerr=function(){return r.asm.___em_js__emlicerr.apply(null,arguments)};var lr=r.___emscripten_environ_constructor=function(){return r.asm.___emscripten_environ_constructor.apply(null,arguments)};r.___errno_location=function(){return r.asm.___errno_location.apply(null,arguments)},r.__get_environ=function(){return r.asm.__get_environ.apply(null,arguments)};var pr=r._emscripten_replace_memory=function(){return r.asm._emscripten_replace_memory.apply(null,arguments)},dr=r._free=function(){return r.asm._free.apply(null,arguments)};r._llvm_bswap_i32=function(){return r.asm._llvm_bswap_i32.apply(null,arguments)},r._llvm_round_f32=function(){return r.asm._llvm_round_f32.apply(null,arguments)},r._llvm_round_f64=function(){return r.asm._llvm_round_f64.apply(null,arguments)};var hr=r._malloc=function(){return r.asm._malloc.apply(null,arguments)};r._memcpy=function(){return r.asm._memcpy.apply(null,arguments)},r._memmove=function(){return r.asm._memmove.apply(null,arguments)},r._memset=function(){return r.asm._memset.apply(null,arguments)},r._pthread_cond_broadcast=function(){return r.asm._pthread_cond_broadcast.apply(null,arguments)},r._pthread_mutex_lock=function(){return r.asm._pthread_mutex_lock.apply(null,arguments)},r._pthread_mutex_unlock=function(){return r.asm._pthread_mutex_unlock.apply(null,arguments)},r._round=function(){return r.asm._round.apply(null,arguments)},r._sbrk=function(){return r.asm._sbrk.apply(null,arguments)},r._zappar_analytics_project_id_set=function(){return r.asm._zappar_analytics_project_id_set.apply(null,arguments)},r._zappar_barcode_finder_create=function(){return r.asm._zappar_barcode_finder_create.apply(null,arguments)},r._zappar_barcode_finder_destroy=function(){return r.asm._zappar_barcode_finder_destroy.apply(null,arguments)},r._zappar_barcode_finder_enabled=function(){return r.asm._zappar_barcode_finder_enabled.apply(null,arguments)},r._zappar_barcode_finder_enabled_set=function(){return r.asm._zappar_barcode_finder_enabled_set.apply(null,arguments)},r._zappar_barcode_finder_formats=function(){return r.asm._zappar_barcode_finder_formats.apply(null,arguments)},r._zappar_barcode_finder_formats_set=function(){return r.asm._zappar_barcode_finder_formats_set.apply(null,arguments)},r._zappar_barcode_finder_found_format=function(){return r.asm._zappar_barcode_finder_found_format.apply(null,arguments)},r._zappar_barcode_finder_found_number=function(){return r.asm._zappar_barcode_finder_found_number.apply(null,arguments)},r._zappar_barcode_finder_found_text=function(){return r.asm._zappar_barcode_finder_found_text.apply(null,arguments)},r._zappar_camera_default_device_id=function(){return r.asm._zappar_camera_default_device_id.apply(null,arguments)},r._zappar_camera_source_create=function(){return r.asm._zappar_camera_source_create.apply(null,arguments)},r._zappar_camera_source_destroy=function(){return r.asm._zappar_camera_source_destroy.apply(null,arguments)},r._zappar_camera_source_pause=function(){return r.asm._zappar_camera_source_pause.apply(null,arguments)},r._zappar_camera_source_start=function(){return r.asm._zappar_camera_source_start.apply(null,arguments)},r._zappar_face_landmark_anchor_pose=function(){return r.asm._zappar_face_landmark_anchor_pose.apply(null,arguments)},r._zappar_face_landmark_create=function(){return r.asm._zappar_face_landmark_create.apply(null,arguments)},r._zappar_face_landmark_destroy=function(){return r.asm._zappar_face_landmark_destroy.apply(null,arguments)},r._zappar_face_mesh_create=function(){return r.asm._zappar_face_mesh_create.apply(null,arguments)},r._zappar_face_mesh_destroy=function(){return r.asm._zappar_face_mesh_destroy.apply(null,arguments)},r._zappar_face_tracker_anchor_count=function(){return r.asm._zappar_face_tracker_anchor_count.apply(null,arguments)},r._zappar_face_tracker_anchor_expression_coefficients=function(){return r.asm._zappar_face_tracker_anchor_expression_coefficients.apply(null,arguments)},r._zappar_face_tracker_anchor_id=function(){return r.asm._zappar_face_tracker_anchor_id.apply(null,arguments)},r._zappar_face_tracker_anchor_identity_coefficients=function(){return r.asm._zappar_face_tracker_anchor_identity_coefficients.apply(null,arguments)},r._zappar_face_tracker_anchor_pose_raw=function(){return r.asm._zappar_face_tracker_anchor_pose_raw.apply(null,arguments)},r._zappar_face_tracker_create=function(){return r.asm._zappar_face_tracker_create.apply(null,arguments)},r._zappar_face_tracker_destroy=function(){return r.asm._zappar_face_tracker_destroy.apply(null,arguments)},r._zappar_face_tracker_enabled=function(){return r.asm._zappar_face_tracker_enabled.apply(null,arguments)},r._zappar_face_tracker_enabled_set=function(){return r.asm._zappar_face_tracker_enabled_set.apply(null,arguments)},r._zappar_face_tracker_max_faces=function(){return r.asm._zappar_face_tracker_max_faces.apply(null,arguments)},r._zappar_face_tracker_max_faces_set=function(){return r.asm._zappar_face_tracker_max_faces_set.apply(null,arguments)},r._zappar_face_tracker_model_load_from_memory=function(){return r.asm._zappar_face_tracker_model_load_from_memory.apply(null,arguments)},r._zappar_face_tracker_model_loaded_version=function(){return r.asm._zappar_face_tracker_model_loaded_version.apply(null,arguments)},r._zappar_has_initialized=function(){return r.asm._zappar_has_initialized.apply(null,arguments)},r._zappar_image_tracker_anchor_count=function(){return r.asm._zappar_image_tracker_anchor_count.apply(null,arguments)},r._zappar_image_tracker_anchor_id=function(){return r.asm._zappar_image_tracker_anchor_id.apply(null,arguments)},r._zappar_image_tracker_anchor_pose_raw=function(){return r.asm._zappar_image_tracker_anchor_pose_raw.apply(null,arguments)},r._zappar_image_tracker_create=function(){return r.asm._zappar_image_tracker_create.apply(null,arguments)},r._zappar_image_tracker_destroy=function(){return r.asm._zappar_image_tracker_destroy.apply(null,arguments)},r._zappar_image_tracker_enabled=function(){return r.asm._zappar_image_tracker_enabled.apply(null,arguments)},r._zappar_image_tracker_enabled_set=function(){return r.asm._zappar_image_tracker_enabled_set.apply(null,arguments)},r._zappar_image_tracker_target_count=function(){return r.asm._zappar_image_tracker_target_count.apply(null,arguments)},r._zappar_image_tracker_target_load_from_memory=function(){return r.asm._zappar_image_tracker_target_load_from_memory.apply(null,arguments)},r._zappar_image_tracker_target_loaded_version=function(){return r.asm._zappar_image_tracker_target_loaded_version.apply(null,arguments)},r._zappar_instant_world_tracker_anchor_pose_raw=function(){return r.asm._zappar_instant_world_tracker_anchor_pose_raw.apply(null,arguments)},r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset=function(){return r.asm._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset.apply(null,arguments)},r._zappar_instant_world_tracker_create=function(){return r.asm._zappar_instant_world_tracker_create.apply(null,arguments)},r._zappar_instant_world_tracker_destroy=function(){return r.asm._zappar_instant_world_tracker_destroy.apply(null,arguments)},r._zappar_instant_world_tracker_enabled=function(){return r.asm._zappar_instant_world_tracker_enabled.apply(null,arguments)},r._zappar_instant_world_tracker_enabled_set=function(){return r.asm._zappar_instant_world_tracker_enabled_set.apply(null,arguments)},r._zappar_invert=function(){return r.asm._zappar_invert.apply(null,arguments)},r._zappar_loaded=function(){return r.asm._zappar_loaded.apply(null,arguments)},r._zappar_log_level=function(){return r.asm._zappar_log_level.apply(null,arguments)},r._zappar_log_level_set=function(){return r.asm._zappar_log_level_set.apply(null,arguments)},r._zappar_pipeline_camera_frame_camera_attitude=function(){return r.asm._zappar_pipeline_camera_frame_camera_attitude.apply(null,arguments)},r._zappar_pipeline_camera_frame_submit=function(){return r.asm._zappar_pipeline_camera_frame_submit.apply(null,arguments)},r._zappar_pipeline_camera_frame_texture_gl=function(){return r.asm._zappar_pipeline_camera_frame_texture_gl.apply(null,arguments)},r._zappar_pipeline_camera_frame_texture_matrix=function(){return r.asm._zappar_pipeline_camera_frame_texture_matrix.apply(null,arguments)},r._zappar_pipeline_camera_frame_upload_gl=function(){return r.asm._zappar_pipeline_camera_frame_upload_gl.apply(null,arguments)},r._zappar_pipeline_camera_frame_user_data=function(){return r.asm._zappar_pipeline_camera_frame_user_data.apply(null,arguments)},r._zappar_pipeline_camera_frame_user_facing=function(){return r.asm._zappar_pipeline_camera_frame_user_facing.apply(null,arguments)},r._zappar_pipeline_camera_model=function(){return r.asm._zappar_pipeline_camera_model.apply(null,arguments)},r._zappar_pipeline_camera_pose_default=function(){return r.asm._zappar_pipeline_camera_pose_default.apply(null,arguments)},r._zappar_pipeline_camera_pose_with_attitude=function(){return r.asm._zappar_pipeline_camera_pose_with_attitude.apply(null,arguments)},r._zappar_pipeline_camera_pose_with_origin=function(){return r.asm._zappar_pipeline_camera_pose_with_origin.apply(null,arguments)},r._zappar_pipeline_create=function(){return r.asm._zappar_pipeline_create.apply(null,arguments)},r._zappar_pipeline_destroy=function(){return r.asm._zappar_pipeline_destroy.apply(null,arguments)},r._zappar_pipeline_frame_number=function(){return r.asm._zappar_pipeline_frame_number.apply(null,arguments)},r._zappar_pipeline_frame_update=function(){return r.asm._zappar_pipeline_frame_update.apply(null,arguments)},r._zappar_pipeline_motion_accelerometer_submit=function(){return r.asm._zappar_pipeline_motion_accelerometer_submit.apply(null,arguments)},r._zappar_pipeline_motion_attitude_submit=function(){return r.asm._zappar_pipeline_motion_attitude_submit.apply(null,arguments)},r._zappar_pipeline_motion_rotation_rate_submit=function(){return r.asm._zappar_pipeline_motion_rotation_rate_submit.apply(null,arguments)},r._zappar_pipeline_process_gl=function(){return r.asm._zappar_pipeline_process_gl.apply(null,arguments)},r.establishStackSpace=function(){return r.asm.establishStackSpace.apply(null,arguments)},r.getTempRet0=function(){return r.asm.getTempRet0.apply(null,arguments)},r.runPostSets=function(){return r.asm.runPostSets.apply(null,arguments)};var mr=r.setTempRet0=function(){return r.asm.setTempRet0.apply(null,arguments)};r.setThrew=function(){return r.asm.setThrew.apply(null,arguments)};var br=r.stackAlloc=function(){return r.asm.stackAlloc.apply(null,arguments)},yr=r.stackRestore=function(){return r.asm.stackRestore.apply(null,arguments)},vr=r.stackSave=function(){return r.asm.stackSave.apply(null,arguments)};function gr(){function e(){if(!r.calledRun&&(r.calledRun=!0,!b)){if(te||(te=!0,X(J)),X(Q),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var e=r.postRun.shift();ee.unshift(e)}X(ee)}}if(!(0<ue)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)ne();X(K),0<ue||r.calledRun||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),e()}),1)):e())}}function wr(e){throw r.onAbort&&r.onAbort(e),void 0!==e?(c(e),s(e),e=JSON.stringify(e)):e="",b=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(r.dynCall_i=function(){return r.asm.dynCall_i.apply(null,arguments)},r.dynCall_ii=function(){return r.asm.dynCall_ii.apply(null,arguments)},r.dynCall_iii=function(){return r.asm.dynCall_iii.apply(null,arguments)},r.dynCall_iiii=function(){return r.asm.dynCall_iiii.apply(null,arguments)},r.dynCall_iiiii=function(){return r.asm.dynCall_iiiii.apply(null,arguments)},r.dynCall_iiiiid=function(){return r.asm.dynCall_iiiiid.apply(null,arguments)},r.dynCall_iiiiii=function(){return r.asm.dynCall_iiiiii.apply(null,arguments)},r.dynCall_iiiiiid=function(){return r.asm.dynCall_iiiiiid.apply(null,arguments)},r.dynCall_iiiiiii=function(){return r.asm.dynCall_iiiiiii.apply(null,arguments)},r.dynCall_iiiiiiii=function(){return r.asm.dynCall_iiiiiiii.apply(null,arguments)},r.dynCall_iiiiiiiii=function(){return r.asm.dynCall_iiiiiiiii.apply(null,arguments)},r.dynCall_iiiiij=function(){return r.asm.dynCall_iiiiij.apply(null,arguments)},r.dynCall_iiji=function(){return r.asm.dynCall_iiji.apply(null,arguments)},r.dynCall_v=function(){return r.asm.dynCall_v.apply(null,arguments)},r.dynCall_vi=function(){return r.asm.dynCall_vi.apply(null,arguments)},r.dynCall_vii=function(){return r.asm.dynCall_vii.apply(null,arguments)},r.dynCall_viiffii=function(){return r.asm.dynCall_viiffii.apply(null,arguments)},r.dynCall_viii=function(){return r.asm.dynCall_viii.apply(null,arguments)},r.dynCall_viiifffii=function(){return r.asm.dynCall_viiifffii.apply(null,arguments)},r.dynCall_viiiffii=function(){return r.asm.dynCall_viiiffii.apply(null,arguments)},r.dynCall_viiii=function(){return r.asm.dynCall_viiii.apply(null,arguments)},r.dynCall_viiiii=function(){return r.asm.dynCall_viiiii.apply(null,arguments)},r.dynCall_viiiiiffffffffffffffff=function(){return r.asm.dynCall_viiiiiffffffffffffffff.apply(null,arguments)},r.dynCall_viiiiii=function(){return r.asm.dynCall_viiiiii.apply(null,arguments)},r.dynCall_viijii=function(){return r.asm.dynCall_viijii.apply(null,arguments)},r.dynCall_vij=function(){return r.asm.dynCall_vij.apply(null,arguments)},r.dynCall_viji=function(){return r.asm.dynCall_viji.apply(null,arguments)},r.dynCall_vijii=function(){return r.asm.dynCall_vijii.apply(null,arguments)},r.asm=Un,r.cwrap=function(e,t,n,r){var a=(n=n||[]).every((function(e){return"number"===e}));return"string"!==t&&a&&!r?v(e):function(){var r=n,a=arguments,i=v(e),o=[],u=0;if(a)for(var c=0;c<a.length;c++){var s=w[r[c]];s?(0===u&&(u=vr()),o[c]=s(a[c])):o[c]=a[c]}return r=i.apply(null,o),r="string"===t?M(r):"boolean"===t?!!r:r,0!==u&&yr(u),r}},r.setValue=function(e,t,n){switch("*"===(n=n||"i8").charAt(n.length-1)&&(n="i32"),n){case"i1":case"i8":z[e>>0]=t;break;case"i16":x[e>>1]=t;break;case"i32":E[e>>2]=t;break;case"i64":tempI64=[t>>>0,(tempDouble=t,1<=+re(tempDouble)?0<tempDouble?(0|oe(+ie(tempDouble/4294967296),4294967295))>>>0:~~+ae((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],E[e>>2]=tempI64[0],E[e+4>>2]=tempI64[1];break;case"float":O[e>>2]=t;break;case"double":C[e>>3]=t;break;default:wr("invalid type for setValue: "+n)}},r.getValue=function(e,t){switch("*"===(t=t||"i8").charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":return z[e>>0];case"i16":return x[e>>1];case"i32":case"i64":return E[e>>2];case"float":return O[e>>2];case"double":return C[e>>3];default:wr("invalid type for getValue: "+t)}return null},r.UTF8ToString=q,r.then=function(e){if(r.calledRun)e(r);else{var t=r.onRuntimeInitialized;r.onRuntimeInitialized=function(){t&&t(),e(r)}}return r},se=function e(){r.calledRun||gr(),r.calledRun||(se=e)},r.run=gr,r.abort=wr,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return r.noExitRuntime=!0,gr(),t});t.default=r}.call(this,n(4).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(5),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,a,i,o,u,c=1,s={},_=!1,f=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){d(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){d(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(a=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):r=function(e){setTimeout(d,0,e)}:(o="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&d(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(o+t,"*")}),l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return s[c]=a,r(c),c++},l.clearImmediate=p}function p(e){delete s[e]}function d(e){if(_)setTimeout(d,0,e);else{var t=s[e];if(t){_=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),_=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(6))},function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,s=[],_=!1,f=-1;function l(){_&&c&&(_=!1,c.length?s=c.concat(s):f=-1,s.length&&p())}function p(){if(!_){var e=u(l);_=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,_=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||_||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRuntimeObject=void 0,t.getRuntimeObject=function(e){let t=e.cwrap("zappar_log_level","number",[]),n=e.cwrap("zappar_log_level_set",null,["number"]),r=e.cwrap("zappar_analytics_project_id_set",null,["string"]),a=e.cwrap("zappar_pipeline_create","number",[]),i=e.cwrap("zappar_pipeline_destroy",null,["number"]),o=e.cwrap("zappar_pipeline_frame_update",null,["number"]),u=e.cwrap("zappar_pipeline_frame_number","number",["number"]),c=e.cwrap("zappar_pipeline_camera_model","number",["number"]),s=e.cwrap("zappar_pipeline_camera_frame_user_data","number",["number"]),_=e.cwrap("zappar_pipeline_camera_frame_submit",null,["number","number","number","number","number","number","number"]),f=e.cwrap("zappar_pipeline_camera_frame_camera_attitude","number",["number"]),l=e.cwrap("zappar_pipeline_motion_accelerometer_submit",null,["number","number","number","number","number"]),p=e.cwrap("zappar_pipeline_motion_rotation_rate_submit",null,["number","number","number","number","number"]),d=e.cwrap("zappar_pipeline_motion_attitude_submit",null,["number","number","number","number","number"]),h=e.cwrap("zappar_camera_source_create","number",["number","string"]),m=e.cwrap("zappar_camera_source_destroy",null,["number"]),b=e.cwrap("zappar_image_tracker_create","number",["number"]),y=e.cwrap("zappar_image_tracker_destroy",null,["number"]),v=e.cwrap("zappar_image_tracker_target_load_from_memory",null,["number","number","number"]),g=e.cwrap("zappar_image_tracker_target_loaded_version","number",["number"]),w=e.cwrap("zappar_image_tracker_target_count","number",["number"]),M=e.cwrap("zappar_image_tracker_enabled","number",["number"]),k=e.cwrap("zappar_image_tracker_enabled_set",null,["number","number"]),z=e.cwrap("zappar_image_tracker_anchor_count","number",["number"]),A=e.cwrap("zappar_image_tracker_anchor_id","string",["number","number"]),x=e.cwrap("zappar_image_tracker_anchor_pose_raw","number",["number","number"]),L=e.cwrap("zappar_face_tracker_create","number",["number"]),E=e.cwrap("zappar_face_tracker_destroy",null,["number"]),T=e.cwrap("zappar_face_tracker_model_load_from_memory",null,["number","number","number"]),O=e.cwrap("zappar_face_tracker_model_loaded_version","number",["number"]),C=e.cwrap("zappar_face_tracker_enabled_set",null,["number","number"]),S=e.cwrap("zappar_face_tracker_enabled","number",["number"]),I=e.cwrap("zappar_face_tracker_max_faces_set",null,["number","number"]),P=e.cwrap("zappar_face_tracker_max_faces","number",["number"]),B=e.cwrap("zappar_face_tracker_anchor_count","number",["number"]),F=e.cwrap("zappar_face_tracker_anchor_id","string",["number","number"]),D=e.cwrap("zappar_face_tracker_anchor_pose_raw","number",["number","number"]),j=e.cwrap("zappar_face_tracker_anchor_identity_coefficients","number",["number","number"]),R=e.cwrap("zappar_face_tracker_anchor_expression_coefficients","number",["number","number"]),V=e.cwrap("zappar_face_mesh_create","number",[]),q=e.cwrap("zappar_face_mesh_destroy",null,["number"]),G=e.cwrap("zappar_face_landmark_create","number",["number"]),N=e.cwrap("zappar_face_landmark_destroy",null,["number"]),U=e.cwrap("zappar_barcode_finder_create","number",["number"]),W=e.cwrap("zappar_barcode_finder_destroy",null,["number"]),H=e.cwrap("zappar_barcode_finder_enabled_set",null,["number","number"]),Z=e.cwrap("zappar_barcode_finder_enabled","number",["number"]),Y=e.cwrap("zappar_barcode_finder_found_number","number",["number"]),X=e.cwrap("zappar_barcode_finder_found_text","string",["number","number"]),K=e.cwrap("zappar_barcode_finder_found_format","number",["number","number"]),J=e.cwrap("zappar_barcode_finder_formats","number",["number"]),Q=e.cwrap("zappar_barcode_finder_formats_set",null,["number","number"]),$=e.cwrap("zappar_instant_world_tracker_create","number",["number"]),ee=e.cwrap("zappar_instant_world_tracker_destroy",null,["number"]),te=e.cwrap("zappar_instant_world_tracker_enabled_set",null,["number","number"]),ne=e.cwrap("zappar_instant_world_tracker_enabled","number",["number"]),re=e.cwrap("zappar_instant_world_tracker_anchor_pose_raw","number",["number"]),ae=e.cwrap("zappar_instant_world_tracker_anchor_pose_set_from_camera_offset",null,["number","number","number","number","number"]),ie=32,oe=e._malloc(ie),ue=64,ce=e._malloc(ue);return{log_level:()=>t(),log_level_set:e=>n(e),analytics_project_id_set:e=>r(e),pipeline_create:()=>a(),pipeline_destroy:()=>{i()},pipeline_frame_update:e=>o(e),pipeline_frame_number:e=>u(e),pipeline_camera_model:t=>{let n=c(t),r=new Float32Array(6);return r.set(e.HEAPF32.subarray(n/4,6+n/4)),n=r,n},pipeline_camera_frame_user_data:e=>s(e),pipeline_camera_frame_submit:(t,n,r,a,i,o)=>{ie<n.byteLength&&(e._free(oe),ie=n.byteLength,oe=e._malloc(ie));let u=oe,c=n.byteLength;e.HEAPU8.set(new Uint8Array(n),oe);let s=r,f=a,l=i;ue<o.byteLength&&(e._free(ue),ue=o.byteLength,ce=e._malloc(ue));let p=ce;return e.HEAPF32.set(o,ce/4),_(t,u,c,s,f,l,p)},pipeline_camera_frame_camera_attitude:t=>{let n=f(t),r=new Float32Array(16);return r.set(e.HEAPF32.subarray(n/4,16+n/4)),n=r,n},pipeline_motion_accelerometer_submit:(e,t,n,r,a)=>l(e,t,n,r,a),pipeline_motion_rotation_rate_submit:(e,t,n,r,a)=>p(e,t,n,r,a),pipeline_motion_attitude_submit:(e,t,n,r,a)=>d(e,t,n,r,a),camera_source_create:(e,t)=>h(e,t),camera_source_destroy:()=>{m()},image_tracker_create:e=>b(e),image_tracker_destroy:()=>{y()},image_tracker_target_load_from_memory:(t,n)=>{ie<n.byteLength&&(e._free(oe),ie=n.byteLength,oe=e._malloc(ie));let r=oe,a=n.byteLength;return e.HEAPU8.set(new Uint8Array(n),oe),v(t,r,a)},image_tracker_target_loaded_version:e=>g(e),image_tracker_target_count:e=>w(e),image_tracker_enabled:e=>{let t=M(e);return t=1===t,t},image_tracker_enabled_set:(e,t)=>k(e,t?1:0),image_tracker_anchor_count:e=>z(e),image_tracker_anchor_id:(e,t)=>A(e,t),image_tracker_anchor_pose_raw:(t,n)=>{let r=x(t,n),a=new Float32Array(16);return a.set(e.HEAPF32.subarray(r/4,16+r/4)),r=a,r},face_tracker_create:e=>L(e),face_tracker_destroy:()=>{E()},face_tracker_model_load_from_memory:(t,n)=>{ie<n.byteLength&&(e._free(oe),ie=n.byteLength,oe=e._malloc(ie));let r=oe,a=n.byteLength;return e.HEAPU8.set(new Uint8Array(n),oe),T(t,r,a)},face_tracker_model_loaded_version:e=>O(e),face_tracker_enabled_set:(e,t)=>C(e,t?1:0),face_tracker_enabled:e=>{let t=S(e);return t=1===t,t},face_tracker_max_faces_set:(e,t)=>I(e,t),face_tracker_max_faces:e=>P(e),face_tracker_anchor_count:e=>B(e),face_tracker_anchor_id:(e,t)=>F(e,t),face_tracker_anchor_pose_raw:(t,n)=>{let r=D(t,n),a=new Float32Array(16);return a.set(e.HEAPF32.subarray(r/4,16+r/4)),r=a,r},face_tracker_anchor_identity_coefficients:(t,n)=>{let r=j(t,n),a=new Float32Array(50);return a.set(e.HEAPF32.subarray(r/4,50+r/4)),r=a,r},face_tracker_anchor_expression_coefficients:(t,n)=>{let r=R(t,n),a=new Float32Array(29);return a.set(e.HEAPF32.subarray(r/4,29+r/4)),r=a,r},face_mesh_create:()=>V(),face_mesh_destroy:()=>{q()},face_landmark_create:e=>G(e),face_landmark_destroy:()=>{N()},barcode_finder_create:e=>U(e),barcode_finder_destroy:()=>{W()},barcode_finder_enabled_set:(e,t)=>H(e,t?1:0),barcode_finder_enabled:e=>{let t=Z(e);return t=1===t,t},barcode_finder_found_number:e=>Y(e),barcode_finder_found_text:(e,t)=>X(e,t),barcode_finder_found_format:(e,t)=>K(e,t),barcode_finder_formats:e=>J(e),barcode_finder_formats_set:(e,t)=>Q(e,t),instant_world_tracker_create:e=>$(e),instant_world_tracker_destroy:()=>{ee()},instant_world_tracker_enabled_set:(e,t)=>te(e,t?1:0),instant_world_tracker_enabled:e=>{let t=ne(e);return t=1===t,t},instant_world_tracker_anchor_pose_raw:t=>{let n=re(t),r=new Float32Array(16);return r.set(e.HEAPF32.subarray(n/4,16+n/4)),n=r,n},instant_world_tracker_anchor_pose_set_from_camera_offset:(e,t,n,r,a)=>ae(e,t,n,r,a)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.zappar_server=void 0;const r=n(9),a=n(10);t.zappar_server=class{constructor(e,t){this._impl=e,this._sender=t,this._deserializer=new a.MessageDeserializer,this.serializersByPipelineId=new Map,this._pipeline_id_by_pipeline_id=new Map,this._pipeline_by_instance=new Map,this._pipeline_id_by_camera_source_id=new Map,this._camera_source_by_instance=new Map,this._pipeline_id_by_image_tracker_id=new Map,this._image_tracker_by_instance=new Map,this._pipeline_id_by_face_tracker_id=new Map,this._face_tracker_by_instance=new Map,this._pipeline_id_by_face_mesh_id=new Map,this._face_mesh_by_instance=new Map,this._pipeline_id_by_face_landmark_id=new Map,this._face_landmark_by_instance=new Map,this._pipeline_id_by_barcode_finder_id=new Map,this._barcode_finder_by_instance=new Map,this._pipeline_id_by_instant_world_tracker_id=new Map,this._instant_world_tracker_by_instance=new Map}processBuffer(e){this._deserializer.setData(e),this._deserializer.forMessages((e,t)=>{switch(e){case 33:this._impl.log_level_set(t.logLevel());break;case 30:this._impl.analytics_project_id_set(t.string());break;case 26:{let e=t.type(),n=this._impl.pipeline_create();this._pipeline_by_instance.set(e,n),this._pipeline_id_by_pipeline_id.set(e,e),this.serializersByPipelineId.set(e,new r.MessageSerializer(t=>{this._sender(e,t)}));break}case 27:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_destroy(n),this._pipeline_by_instance.delete(e);break}case 9:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_frame_update(n);break}case 8:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_camera_frame_submit(n,t.dataWithLength(),t.int(),t.int(),t.int(),t.matrix4x4());break}case 10:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_motion_accelerometer_submit(n,t.timestamp(),t.float(),t.float(),t.float());break}case 11:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_motion_rotation_rate_submit(n,t.timestamp(),t.float(),t.float(),t.float());break}case 12:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_motion_attitude_submit(n,t.timestamp(),t.float(),t.float(),t.float());break}case 28:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=t.string(),i=this._impl.camera_source_create(r,a);this._camera_source_by_instance.set(e,i),this._pipeline_id_by_camera_source_id.set(e,n);break}case 29:{let e=t.type(),n=this._camera_source_by_instance.get(e);if(void 0===n)return;this._impl.camera_source_destroy(n),this._camera_source_by_instance.delete(e);break}case 2:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.image_tracker_create(r);this._image_tracker_by_instance.set(e,a),this._pipeline_id_by_image_tracker_id.set(e,n);break}case 13:{let e=t.type(),n=this._image_tracker_by_instance.get(e);if(void 0===n)return;this._impl.image_tracker_destroy(n),this._image_tracker_by_instance.delete(e);break}case 4:{let e=t.type(),n=this._image_tracker_by_instance.get(e);if(void 0===n)return;this._impl.image_tracker_target_load_from_memory(n,t.dataWithLength());break}case 3:{let e=t.type(),n=this._image_tracker_by_instance.get(e);if(void 0===n)return;this._impl.image_tracker_enabled_set(n,t.bool());break}case 19:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.face_tracker_create(r);this._face_tracker_by_instance.set(e,a),this._pipeline_id_by_face_tracker_id.set(e,n);break}case 20:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_destroy(n),this._face_tracker_by_instance.delete(e);break}case 21:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_model_load_from_memory(n,t.dataWithLength());break}case 22:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_enabled_set(n,t.bool());break}case 23:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_max_faces_set(n,t.int());break}case 24:{let e=t.type(),n=this._impl.face_mesh_create();this._face_mesh_by_instance.set(e,n);break}case 25:{let e=t.type(),n=this._face_mesh_by_instance.get(e);if(void 0===n)return;this._impl.face_mesh_destroy(n),this._face_mesh_by_instance.delete(e);break}case 31:{let e=t.type(),n=t.faceLandmarkName(),r=this._impl.face_landmark_create(n);this._face_landmark_by_instance.set(e,r);break}case 32:{let e=t.type(),n=this._face_landmark_by_instance.get(e);if(void 0===n)return;this._impl.face_landmark_destroy(n),this._face_landmark_by_instance.delete(e);break}case 15:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.barcode_finder_create(r);this._barcode_finder_by_instance.set(e,a),this._pipeline_id_by_barcode_finder_id.set(e,n);break}case 16:{let e=t.type(),n=this._barcode_finder_by_instance.get(e);if(void 0===n)return;this._impl.barcode_finder_destroy(n),this._barcode_finder_by_instance.delete(e);break}case 17:{let e=t.type(),n=this._barcode_finder_by_instance.get(e);if(void 0===n)return;this._impl.barcode_finder_enabled_set(n,t.bool());break}case 18:{let e=t.type(),n=this._barcode_finder_by_instance.get(e);if(void 0===n)return;this._impl.barcode_finder_formats_set(n,t.barcodeFormat());break}case 5:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.instant_world_tracker_create(r);this._instant_world_tracker_by_instance.set(e,a),this._pipeline_id_by_instant_world_tracker_id.set(e,n);break}case 14:{let e=t.type(),n=this._instant_world_tracker_by_instance.get(e);if(void 0===n)return;this._impl.instant_world_tracker_destroy(n),this._instant_world_tracker_by_instance.delete(e);break}case 6:{let e=t.type(),n=this._instant_world_tracker_by_instance.get(e);if(void 0===n)return;this._impl.instant_world_tracker_enabled_set(n,t.bool());break}case 7:{let e=t.type(),n=this._instant_world_tracker_by_instance.get(e);if(void 0===n)return;this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset(n,t.float(),t.float(),t.float(),t.instantTrackerTransformOrientation());break}}})}exploreState(){for(let[e,t]of this._pipeline_by_instance){let n=this._pipeline_id_by_pipeline_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);r&&(r.sendMessage(7,n=>{n.type(e),n.int(this._impl.pipeline_frame_number(t))}),r.sendMessage(6,n=>{n.type(e),n.cameraModel(this._impl.pipeline_camera_model(t))}),r.sendMessage(5,n=>{n.type(e),n.int(this._impl.pipeline_camera_frame_user_data(t))}),r.sendMessage(11,n=>{n.type(e),n.matrix4x4(this._impl.pipeline_camera_frame_camera_attitude(t))}))}for(let[e,t]of this._camera_source_by_instance){let t=this._pipeline_id_by_camera_source_id.get(e);if(!t)continue;this.serializersByPipelineId.get(t)}for(let[e,t]of this._image_tracker_by_instance){let n=this._pipeline_id_by_image_tracker_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);if(r){r.sendMessage(18,n=>{n.type(e),n.int(this._impl.image_tracker_target_loaded_version(t))}),r.sendMessage(20,n=>{n.type(e),n.int(this._impl.image_tracker_target_count(t))}),r.sendMessage(1,n=>{n.type(e),n.int(this._impl.image_tracker_anchor_count(t))});for(let n=0;n<this._impl.image_tracker_anchor_count(t);n++)r.sendMessage(2,r=>{r.type(e),r.int(n),r.string(this._impl.image_tracker_anchor_id(t,n))});for(let n=0;n<this._impl.image_tracker_anchor_count(t);n++)r.sendMessage(3,r=>{r.type(e),r.int(n),r.matrix4x4(this._impl.image_tracker_anchor_pose_raw(t,n))})}}for(let[e,t]of this._face_tracker_by_instance){let n=this._pipeline_id_by_face_tracker_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);if(r){r.sendMessage(17,n=>{n.type(e),n.int(this._impl.face_tracker_model_loaded_version(t))}),r.sendMessage(12,n=>{n.type(e),n.int(this._impl.face_tracker_anchor_count(t))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(13,r=>{r.type(e),r.int(n),r.string(this._impl.face_tracker_anchor_id(t,n))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(14,r=>{r.type(e),r.int(n),r.matrix4x4(this._impl.face_tracker_anchor_pose_raw(t,n))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(15,r=>{r.type(e),r.int(n),r.identityCoefficients(this._impl.face_tracker_anchor_identity_coefficients(t,n))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(16,r=>{r.type(e),r.int(n),r.expressionCoefficients(this._impl.face_tracker_anchor_expression_coefficients(t,n))})}}for(let[e,t]of this._face_mesh_by_instance){let t=this._pipeline_id_by_face_mesh_id.get(e);if(!t)continue;this.serializersByPipelineId.get(t)}for(let[e,t]of this._face_landmark_by_instance){let t=this._pipeline_id_by_face_landmark_id.get(e);if(!t)continue;this.serializersByPipelineId.get(t)}for(let[e,t]of this._barcode_finder_by_instance){let n=this._pipeline_id_by_barcode_finder_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);if(r){r.sendMessage(8,n=>{n.type(e),n.int(this._impl.barcode_finder_found_number(t))});for(let n=0;n<this._impl.barcode_finder_found_number(t);n++)r.sendMessage(9,r=>{r.type(e),r.int(n),r.string(this._impl.barcode_finder_found_text(t,n))});for(let n=0;n<this._impl.barcode_finder_found_number(t);n++)r.sendMessage(10,r=>{r.type(e),r.int(n),r.barcodeFormat(this._impl.barcode_finder_found_format(t,n))})}}for(let[e,t]of this._instant_world_tracker_by_instance){let n=this._pipeline_id_by_instant_world_tracker_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);r&&r.sendMessage(4,n=>{n.type(e),n.matrix4x4(this._impl.instant_world_tracker_anchor_pose_raw(t))})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageSerializer=void 0;t.MessageSerializer=class{constructor(e){this._messageSender=e,this._freeBufferPool=[],this._buffer=new ArrayBuffer(16),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=1,this._startOffset=-1,this._timeoutSet=!1,this._appender={int:e=>this.int(e),bool:e=>this.int(e?1:0),float:e=>this.float(e),string:e=>this.string(e),dataWithLength:e=>this.arrayBuffer(e),type:e=>this.int(e),matrix4x4:e=>this.float32ArrayBuffer(e),identityCoefficients:e=>this.float32ArrayBuffer(e),expressionCoefficients:e=>this.float32ArrayBuffer(e),cameraModel:e=>this.float32ArrayBuffer(e),timestamp:e=>this.double(e),barcodeFormat:e=>this.int(e),faceLandmarkName:e=>this.int(e),instantTrackerTransformOrientation:e=>this.int(e),logLevel:e=>this.int(e)},this._freeBufferPool.push(new ArrayBuffer(16)),this._freeBufferPool.push(new ArrayBuffer(16))}bufferReturn(e){this._freeBufferPool.push(e)}_ensureArrayBuffer(e){let t=4*(this._offset+e+8);if(this._buffer&&this._buffer.byteLength>=t)return;let n=void 0;if(!n){let e=t;e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,n=new ArrayBuffer(e)}let r=this._buffer?this._i32View:void 0;this._buffer=n,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),r&&this._i32View.set(r.subarray(0,this._offset))}sendMessage(e,t){this._ensureArrayBuffer(4),this._startOffset=this._offset,this._i32View[this._offset+1]=e,this._offset+=2,t(this._appender),this._i32View[this._startOffset]=this._offset-this._startOffset,this._startOffset=-1,this._sendOneTime()}_sendOneTime(){!1===this._timeoutSet&&(this._timeoutSet=!0,setTimeout(()=>{this._timeoutSet=!1,this._send()},0))}_send(){0!==this._freeBufferPool.length?(this._i32View[0]=this._offset,this._messageSender(this._buffer),this._buffer=void 0,this._buffer=this._freeBufferPool.pop(),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=1,this._startOffset=-1):this._sendOneTime()}int(e){this._ensureArrayBuffer(1),this._i32View[this._offset]=e,this._offset++}double(e){this._ensureArrayBuffer(2),this._offset%2==1&&this._offset++,this._f64View[this._offset/2]=e,this._offset+=2}float(e){this._ensureArrayBuffer(1),this._f32View[this._offset]=e,this._offset++}int32Array(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._i32View[this._offset+t]=e[t];this._offset+=e.length}float32Array(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._f32View[this._offset+t]=e[t];this._offset+=e.length}booleanArray(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._i32View[this._offset+t]=e[t]?1:0;this._offset+=e.length}uint8ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.byteLength,this._offset++,this._u8View.set(e,4*this._offset),this._offset+=e.byteLength>>2,0!=(3&e.byteLength)&&this._offset++}arrayBuffer(e){let t=new Uint8Array(e);this.uint8ArrayBuffer(t)}uint8ClampedArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.byteLength,this._offset++,this._u8cView.set(e,4*this._offset),this._offset+=e.byteLength>>2,0!=(3&e.byteLength)&&this._offset++}float32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._f32View.set(e,this._offset),this._offset+=e.length}uint16ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++;let t=2*this._offset;this._u16View.set(e,t),this._offset+=e.length>>1,0!=(1&e.length)&&this._offset++}int32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._i32View.set(e,this._offset),this._offset+=e.length}uint32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._u32View.set(e,this._offset),this._offset+=e.length}string(e){let t=(new TextEncoder).encode(e);this._ensureArrayBuffer(t.byteLength/4),this._i32View[this._offset]=t.byteLength,this._offset++,this._u8View.set(t,4*this._offset),this._offset+=t.byteLength>>2,0!=(3&t.byteLength)&&this._offset++}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageDeserializer=void 0;t.MessageDeserializer=class{constructor(){this._buffer=new ArrayBuffer(0),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=0,this._length=0,this._startOffset=-1,this._processor={int:()=>this._i32View[this._startOffset++],bool:()=>1===this._i32View[this._startOffset++],type:()=>this._i32View[this._startOffset++],float:()=>this._f32View[this._startOffset++],timestamp:()=>{this._startOffset%2==1&&this._startOffset++;let e=this._f64View[this._startOffset/2];return this._startOffset+=2,e},string:()=>{let e=this._i32View[this._startOffset++],t=(new TextDecoder).decode(new Uint8Array(this._buffer,4*this._startOffset,e));return this._startOffset+=e>>2,0!=(3&e)&&this._startOffset++,t},dataWithLength:()=>{let e=this._i32View[this._startOffset++],t=new Uint8Array(e);return t.set(this._u8View.subarray(4*this._startOffset,4*this._startOffset+e)),this._startOffset+=t.byteLength>>2,0!=(3&t.byteLength)&&this._startOffset++,t.buffer},matrix4x4:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+16)),this._startOffset+=e,t},identityCoefficients:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+50)),this._startOffset+=e,t},expressionCoefficients:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+29)),this._startOffset+=e,t},cameraModel:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+6)),this._startOffset+=e,t},barcodeFormat:()=>this._i32View[this._startOffset++],faceLandmarkName:()=>this._i32View[this._startOffset++],instantTrackerTransformOrientation:()=>this._i32View[this._startOffset++],logLevel:()=>this._i32View[this._startOffset++]}}setData(e){this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=0,this._length=0,e.byteLength>=4&&(this._offset=1,this._length=this._i32View[0]),this._startOffset=-1}hasMessage(){return this._offset+1<this._length}forMessages(e){for(;this.hasMessage();){let t=this._i32View[this._offset],n=this._i32View[this._offset+1];this._startOffset=this._offset+2,this._offset+=t,e(n,this._processor)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MsgManager=void 0;const r=n(12);t.MsgManager=class{constructor(){this.onOutgoingMessage=new r.Event,this.onIncomingMessage=new r.Event1,this._outgoingMessages=[]}postIncomingMessage(e){this.onIncomingMessage.emit(e)}postOutgoingMessage(e,t){this._outgoingMessages.push({msg:e,transferables:t}),this.onOutgoingMessage.emit()}getOutgoingMessages(){let e=this._outgoingMessages;return this._outgoingMessages=[],e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Event5=t.Event3=t.Event2=t.Event1=t.Event=void 0;t.Event=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(){for(var e=0,t=this._funcs.length;e<t;e++)this._funcs[e]()}};t.Event1=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e){for(var t=0,n=this._funcs.length;t<n;t++)this._funcs[t](e)}};t.Event2=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e,t){for(var n=0,r=this._funcs.length;n<r;n++)this._funcs[n](e,t)}};t.Event3=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e,t,n){for(var r=0,a=this._funcs.length;r<a;r++)this._funcs[r](e,t,n)}};t.Event5=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e,t,n,r,a){for(var i=0,o=this._funcs.length;i<o;i++)this._funcs[i](e,t,n,r,a)}}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"0bdbfe863a384bcd2935e7437d8f1153.wasm"},function(e,t,n){"use strict";n.r(t),n.d(t,"glMatrix",(function(){return r})),n.d(t,"mat2",(function(){return a})),n.d(t,"mat2d",(function(){return i})),n.d(t,"mat3",(function(){return o})),n.d(t,"mat4",(function(){return u})),n.d(t,"quat",(function(){return _})),n.d(t,"quat2",(function(){return f})),n.d(t,"vec2",(function(){return l})),n.d(t,"vec3",(function(){return c})),n.d(t,"vec4",(function(){return s}));var r={};n.r(r),n.d(r,"EPSILON",(function(){return p})),n.d(r,"ARRAY_TYPE",(function(){return d})),n.d(r,"RANDOM",(function(){return h})),n.d(r,"setMatrixArrayType",(function(){return m})),n.d(r,"toRadian",(function(){return y})),n.d(r,"equals",(function(){return v}));var a={};n.r(a),n.d(a,"create",(function(){return g})),n.d(a,"clone",(function(){return w})),n.d(a,"copy",(function(){return M})),n.d(a,"identity",(function(){return k})),n.d(a,"fromValues",(function(){return z})),n.d(a,"set",(function(){return A})),n.d(a,"transpose",(function(){return x})),n.d(a,"invert",(function(){return L})),n.d(a,"adjoint",(function(){return E})),n.d(a,"determinant",(function(){return T})),n.d(a,"multiply",(function(){return O})),n.d(a,"rotate",(function(){return C})),n.d(a,"scale",(function(){return S})),n.d(a,"fromRotation",(function(){return I})),n.d(a,"fromScaling",(function(){return P})),n.d(a,"str",(function(){return B})),n.d(a,"frob",(function(){return F})),n.d(a,"LDU",(function(){return D})),n.d(a,"add",(function(){return j})),n.d(a,"subtract",(function(){return R})),n.d(a,"exactEquals",(function(){return V})),n.d(a,"equals",(function(){return q})),n.d(a,"multiplyScalar",(function(){return G})),n.d(a,"multiplyScalarAndAdd",(function(){return N})),n.d(a,"mul",(function(){return U})),n.d(a,"sub",(function(){return W}));var i={};n.r(i),n.d(i,"create",(function(){return H})),n.d(i,"clone",(function(){return Z})),n.d(i,"copy",(function(){return Y})),n.d(i,"identity",(function(){return X})),n.d(i,"fromValues",(function(){return K})),n.d(i,"set",(function(){return J})),n.d(i,"invert",(function(){return Q})),n.d(i,"determinant",(function(){return $})),n.d(i,"multiply",(function(){return ee})),n.d(i,"rotate",(function(){return te})),n.d(i,"scale",(function(){return ne})),n.d(i,"translate",(function(){return re})),n.d(i,"fromRotation",(function(){return ae})),n.d(i,"fromScaling",(function(){return ie})),n.d(i,"fromTranslation",(function(){return oe})),n.d(i,"str",(function(){return ue})),n.d(i,"frob",(function(){return ce})),n.d(i,"add",(function(){return se})),n.d(i,"subtract",(function(){return _e})),n.d(i,"multiplyScalar",(function(){return fe})),n.d(i,"multiplyScalarAndAdd",(function(){return le})),n.d(i,"exactEquals",(function(){return pe})),n.d(i,"equals",(function(){return de})),n.d(i,"mul",(function(){return he})),n.d(i,"sub",(function(){return me}));var o={};n.r(o),n.d(o,"create",(function(){return be})),n.d(o,"fromMat4",(function(){return ye})),n.d(o,"clone",(function(){return ve})),n.d(o,"copy",(function(){return ge})),n.d(o,"fromValues",(function(){return we})),n.d(o,"set",(function(){return Me})),n.d(o,"identity",(function(){return ke})),n.d(o,"transpose",(function(){return ze})),n.d(o,"invert",(function(){return Ae})),n.d(o,"adjoint",(function(){return xe})),n.d(o,"determinant",(function(){return Le})),n.d(o,"multiply",(function(){return Ee})),n.d(o,"translate",(function(){return Te})),n.d(o,"rotate",(function(){return Oe})),n.d(o,"scale",(function(){return Ce})),n.d(o,"fromTranslation",(function(){return Se})),n.d(o,"fromRotation",(function(){return Ie})),n.d(o,"fromScaling",(function(){return Pe})),n.d(o,"fromMat2d",(function(){return Be})),n.d(o,"fromQuat",(function(){return Fe})),n.d(o,"normalFromMat4",(function(){return De})),n.d(o,"projection",(function(){return je})),n.d(o,"str",(function(){return Re})),n.d(o,"frob",(function(){return Ve})),n.d(o,"add",(function(){return qe})),n.d(o,"subtract",(function(){return Ge})),n.d(o,"multiplyScalar",(function(){return Ne})),n.d(o,"multiplyScalarAndAdd",(function(){return Ue})),n.d(o,"exactEquals",(function(){return We})),n.d(o,"equals",(function(){return He})),n.d(o,"mul",(function(){return Ze})),n.d(o,"sub",(function(){return Ye}));var u={};n.r(u),n.d(u,"create",(function(){return Xe})),n.d(u,"clone",(function(){return Ke})),n.d(u,"copy",(function(){return Je})),n.d(u,"fromValues",(function(){return Qe})),n.d(u,"set",(function(){return $e})),n.d(u,"identity",(function(){return et})),n.d(u,"transpose",(function(){return tt})),n.d(u,"invert",(function(){return nt})),n.d(u,"adjoint",(function(){return rt})),n.d(u,"determinant",(function(){return at})),n.d(u,"multiply",(function(){return it})),n.d(u,"translate",(function(){return ot})),n.d(u,"scale",(function(){return ut})),n.d(u,"rotate",(function(){return ct})),n.d(u,"rotateX",(function(){return st})),n.d(u,"rotateY",(function(){return _t})),n.d(u,"rotateZ",(function(){return ft})),n.d(u,"fromTranslation",(function(){return lt})),n.d(u,"fromScaling",(function(){return pt})),n.d(u,"fromRotation",(function(){return dt})),n.d(u,"fromXRotation",(function(){return ht})),n.d(u,"fromYRotation",(function(){return mt})),n.d(u,"fromZRotation",(function(){return bt})),n.d(u,"fromRotationTranslation",(function(){return yt})),n.d(u,"fromQuat2",(function(){return vt})),n.d(u,"getTranslation",(function(){return gt})),n.d(u,"getScaling",(function(){return wt})),n.d(u,"getRotation",(function(){return Mt})),n.d(u,"fromRotationTranslationScale",(function(){return kt})),n.d(u,"fromRotationTranslationScaleOrigin",(function(){return zt})),n.d(u,"fromQuat",(function(){return At})),n.d(u,"frustum",(function(){return xt})),n.d(u,"perspective",(function(){return Lt})),n.d(u,"perspectiveFromFieldOfView",(function(){return Et})),n.d(u,"ortho",(function(){return Tt})),n.d(u,"lookAt",(function(){return Ot})),n.d(u,"targetTo",(function(){return Ct})),n.d(u,"str",(function(){return St})),n.d(u,"frob",(function(){return It})),n.d(u,"add",(function(){return Pt})),n.d(u,"subtract",(function(){return Bt})),n.d(u,"multiplyScalar",(function(){return Ft})),n.d(u,"multiplyScalarAndAdd",(function(){return Dt})),n.d(u,"exactEquals",(function(){return jt})),n.d(u,"equals",(function(){return Rt})),n.d(u,"mul",(function(){return Vt})),n.d(u,"sub",(function(){return qt}));var c={};n.r(c),n.d(c,"create",(function(){return Gt})),n.d(c,"clone",(function(){return Nt})),n.d(c,"length",(function(){return Ut})),n.d(c,"fromValues",(function(){return Wt})),n.d(c,"copy",(function(){return Ht})),n.d(c,"set",(function(){return Zt})),n.d(c,"add",(function(){return Yt})),n.d(c,"subtract",(function(){return Xt})),n.d(c,"multiply",(function(){return Kt})),n.d(c,"divide",(function(){return Jt})),n.d(c,"ceil",(function(){return Qt})),n.d(c,"floor",(function(){return $t})),n.d(c,"min",(function(){return en})),n.d(c,"max",(function(){return tn})),n.d(c,"round",(function(){return nn})),n.d(c,"scale",(function(){return rn})),n.d(c,"scaleAndAdd",(function(){return an})),n.d(c,"distance",(function(){return on})),n.d(c,"squaredDistance",(function(){return un})),n.d(c,"squaredLength",(function(){return cn})),n.d(c,"negate",(function(){return sn})),n.d(c,"inverse",(function(){return _n})),n.d(c,"normalize",(function(){return fn})),n.d(c,"dot",(function(){return ln})),n.d(c,"cross",(function(){return pn})),n.d(c,"lerp",(function(){return dn})),n.d(c,"hermite",(function(){return hn})),n.d(c,"bezier",(function(){return mn})),n.d(c,"random",(function(){return bn})),n.d(c,"transformMat4",(function(){return yn})),n.d(c,"transformMat3",(function(){return vn})),n.d(c,"transformQuat",(function(){return gn})),n.d(c,"rotateX",(function(){return wn})),n.d(c,"rotateY",(function(){return Mn})),n.d(c,"rotateZ",(function(){return kn})),n.d(c,"angle",(function(){return zn})),n.d(c,"zero",(function(){return An})),n.d(c,"str",(function(){return xn})),n.d(c,"exactEquals",(function(){return Ln})),n.d(c,"equals",(function(){return En})),n.d(c,"sub",(function(){return On})),n.d(c,"mul",(function(){return Cn})),n.d(c,"div",(function(){return Sn})),n.d(c,"dist",(function(){return In})),n.d(c,"sqrDist",(function(){return Pn})),n.d(c,"len",(function(){return Bn})),n.d(c,"sqrLen",(function(){return Fn})),n.d(c,"forEach",(function(){return Dn}));var s={};n.r(s),n.d(s,"create",(function(){return jn})),n.d(s,"clone",(function(){return Rn})),n.d(s,"fromValues",(function(){return Vn})),n.d(s,"copy",(function(){return qn})),n.d(s,"set",(function(){return Gn})),n.d(s,"add",(function(){return Nn})),n.d(s,"subtract",(function(){return Un})),n.d(s,"multiply",(function(){return Wn})),n.d(s,"divide",(function(){return Hn})),n.d(s,"ceil",(function(){return Zn})),n.d(s,"floor",(function(){return Yn})),n.d(s,"min",(function(){return Xn})),n.d(s,"max",(function(){return Kn})),n.d(s,"round",(function(){return Jn})),n.d(s,"scale",(function(){return Qn})),n.d(s,"scaleAndAdd",(function(){return $n})),n.d(s,"distance",(function(){return er})),n.d(s,"squaredDistance",(function(){return tr})),n.d(s,"length",(function(){return nr})),n.d(s,"squaredLength",(function(){return rr})),n.d(s,"negate",(function(){return ar})),n.d(s,"inverse",(function(){return ir})),n.d(s,"normalize",(function(){return or})),n.d(s,"dot",(function(){return ur})),n.d(s,"cross",(function(){return cr})),n.d(s,"lerp",(function(){return sr})),n.d(s,"random",(function(){return _r})),n.d(s,"transformMat4",(function(){return fr})),n.d(s,"transformQuat",(function(){return lr})),n.d(s,"zero",(function(){return pr})),n.d(s,"str",(function(){return dr})),n.d(s,"exactEquals",(function(){return hr})),n.d(s,"equals",(function(){return mr})),n.d(s,"sub",(function(){return br})),n.d(s,"mul",(function(){return yr})),n.d(s,"div",(function(){return vr})),n.d(s,"dist",(function(){return gr})),n.d(s,"sqrDist",(function(){return wr})),n.d(s,"len",(function(){return Mr})),n.d(s,"sqrLen",(function(){return kr})),n.d(s,"forEach",(function(){return zr}));var _={};n.r(_),n.d(_,"create",(function(){return Ar})),n.d(_,"identity",(function(){return xr})),n.d(_,"setAxisAngle",(function(){return Lr})),n.d(_,"getAxisAngle",(function(){return Er})),n.d(_,"getAngle",(function(){return Tr})),n.d(_,"multiply",(function(){return Or})),n.d(_,"rotateX",(function(){return Cr})),n.d(_,"rotateY",(function(){return Sr})),n.d(_,"rotateZ",(function(){return Ir})),n.d(_,"calculateW",(function(){return Pr})),n.d(_,"exp",(function(){return Br})),n.d(_,"ln",(function(){return Fr})),n.d(_,"pow",(function(){return Dr})),n.d(_,"slerp",(function(){return jr})),n.d(_,"random",(function(){return Rr})),n.d(_,"invert",(function(){return Vr})),n.d(_,"conjugate",(function(){return qr})),n.d(_,"fromMat3",(function(){return Gr})),n.d(_,"fromEuler",(function(){return Nr})),n.d(_,"str",(function(){return Ur})),n.d(_,"clone",(function(){return Jr})),n.d(_,"fromValues",(function(){return Qr})),n.d(_,"copy",(function(){return $r})),n.d(_,"set",(function(){return ea})),n.d(_,"add",(function(){return ta})),n.d(_,"mul",(function(){return na})),n.d(_,"scale",(function(){return ra})),n.d(_,"dot",(function(){return aa})),n.d(_,"lerp",(function(){return ia})),n.d(_,"length",(function(){return oa})),n.d(_,"len",(function(){return ua})),n.d(_,"squaredLength",(function(){return ca})),n.d(_,"sqrLen",(function(){return sa})),n.d(_,"normalize",(function(){return _a})),n.d(_,"exactEquals",(function(){return fa})),n.d(_,"equals",(function(){return la})),n.d(_,"rotationTo",(function(){return pa})),n.d(_,"sqlerp",(function(){return da})),n.d(_,"setAxes",(function(){return ha}));var f={};n.r(f),n.d(f,"create",(function(){return ma})),n.d(f,"clone",(function(){return ba})),n.d(f,"fromValues",(function(){return ya})),n.d(f,"fromRotationTranslationValues",(function(){return va})),n.d(f,"fromRotationTranslation",(function(){return ga})),n.d(f,"fromTranslation",(function(){return wa})),n.d(f,"fromRotation",(function(){return Ma})),n.d(f,"fromMat4",(function(){return ka})),n.d(f,"copy",(function(){return za})),n.d(f,"identity",(function(){return Aa})),n.d(f,"set",(function(){return xa})),n.d(f,"getReal",(function(){return La})),n.d(f,"getDual",(function(){return Ea})),n.d(f,"setReal",(function(){return Ta})),n.d(f,"setDual",(function(){return Oa})),n.d(f,"getTranslation",(function(){return Ca})),n.d(f,"translate",(function(){return Sa})),n.d(f,"rotateX",(function(){return Ia})),n.d(f,"rotateY",(function(){return Pa})),n.d(f,"rotateZ",(function(){return Ba})),n.d(f,"rotateByQuatAppend",(function(){return Fa})),n.d(f,"rotateByQuatPrepend",(function(){return Da})),n.d(f,"rotateAroundAxis",(function(){return ja})),n.d(f,"add",(function(){return Ra})),n.d(f,"multiply",(function(){return Va})),n.d(f,"mul",(function(){return qa})),n.d(f,"scale",(function(){return Ga})),n.d(f,"dot",(function(){return Na})),n.d(f,"lerp",(function(){return Ua})),n.d(f,"invert",(function(){return Wa})),n.d(f,"conjugate",(function(){return Ha})),n.d(f,"length",(function(){return Za})),n.d(f,"len",(function(){return Ya})),n.d(f,"squaredLength",(function(){return Xa})),n.d(f,"sqrLen",(function(){return Ka})),n.d(f,"normalize",(function(){return Ja})),n.d(f,"str",(function(){return Qa})),n.d(f,"exactEquals",(function(){return $a})),n.d(f,"equals",(function(){return ei}));var l={};n.r(l),n.d(l,"create",(function(){return ti})),n.d(l,"clone",(function(){return ni})),n.d(l,"fromValues",(function(){return ri})),n.d(l,"copy",(function(){return ai})),n.d(l,"set",(function(){return ii})),n.d(l,"add",(function(){return oi})),n.d(l,"subtract",(function(){return ui})),n.d(l,"multiply",(function(){return ci})),n.d(l,"divide",(function(){return si})),n.d(l,"ceil",(function(){return _i})),n.d(l,"floor",(function(){return fi})),n.d(l,"min",(function(){return li})),n.d(l,"max",(function(){return pi})),n.d(l,"round",(function(){return di})),n.d(l,"scale",(function(){return hi})),n.d(l,"scaleAndAdd",(function(){return mi})),n.d(l,"distance",(function(){return bi})),n.d(l,"squaredDistance",(function(){return yi})),n.d(l,"length",(function(){return vi})),n.d(l,"squaredLength",(function(){return gi})),n.d(l,"negate",(function(){return wi})),n.d(l,"inverse",(function(){return Mi})),n.d(l,"normalize",(function(){return ki})),n.d(l,"dot",(function(){return zi})),n.d(l,"cross",(function(){return Ai})),n.d(l,"lerp",(function(){return xi})),n.d(l,"random",(function(){return Li})),n.d(l,"transformMat2",(function(){return Ei})),n.d(l,"transformMat2d",(function(){return Ti})),n.d(l,"transformMat3",(function(){return Oi})),n.d(l,"transformMat4",(function(){return Ci})),n.d(l,"rotate",(function(){return Si})),n.d(l,"angle",(function(){return Ii})),n.d(l,"zero",(function(){return Pi})),n.d(l,"str",(function(){return Bi})),n.d(l,"exactEquals",(function(){return Fi})),n.d(l,"equals",(function(){return Di})),n.d(l,"len",(function(){return ji})),n.d(l,"sub",(function(){return Ri})),n.d(l,"mul",(function(){return Vi})),n.d(l,"div",(function(){return qi})),n.d(l,"dist",(function(){return Gi})),n.d(l,"sqrDist",(function(){return Ni})),n.d(l,"sqrLen",(function(){return Ui})),n.d(l,"forEach",(function(){return Wi}));var p=1e-6,d="undefined"!=typeof Float32Array?Float32Array:Array,h=Math.random;function m(e){d=e}var b=Math.PI/180;function y(e){return e*b}function v(e,t){return Math.abs(e-t)<=p*Math.max(1,Math.abs(e),Math.abs(t))}function g(){var e=new d(4);return d!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function w(e){var t=new d(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function M(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function k(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e}function z(e,t,n,r){var a=new d(4);return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a}function A(e,t,n,r,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function x(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function L(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n*i-a*r;return o?(o=1/o,e[0]=i*o,e[1]=-r*o,e[2]=-a*o,e[3]=n*o,e):null}function E(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e}function T(e){return e[0]*e[3]-e[2]*e[1]}function O(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1],s=n[2],_=n[3];return e[0]=r*u+i*c,e[1]=a*u+o*c,e[2]=r*s+i*_,e[3]=a*s+o*_,e}function C(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+i*u,e[1]=a*c+o*u,e[2]=r*-u+i*c,e[3]=a*-u+o*c,e}function S(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1];return e[0]=r*u,e[1]=a*u,e[2]=i*c,e[3]=o*c,e}function I(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e}function P(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e}function B(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function F(e){return Math.hypot(e[0],e[1],e[2],e[3])}function D(e,t,n,r){return e[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-e[2]*n[1],[e,t,n]}function j(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function R(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function V(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function q(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=t[0],u=t[1],c=t[2],s=t[3];return Math.abs(n-o)<=p*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-u)<=p*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-c)<=p*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(i-s)<=p*Math.max(1,Math.abs(i),Math.abs(s))}function G(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function N(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});var U=O,W=R;function H(){var e=new d(6);return d!=Float32Array&&(e[1]=0,e[2]=0,e[4]=0,e[5]=0),e[0]=1,e[3]=1,e}function Z(e){var t=new d(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Y(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function X(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function K(e,t,n,r,a,i){var o=new d(6);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=a,o[5]=i,o}function J(e,t,n,r,a,i,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e}function Q(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=n*i-r*a;return c?(c=1/c,e[0]=i*c,e[1]=-r*c,e[2]=-a*c,e[3]=n*c,e[4]=(a*u-i*o)*c,e[5]=(r*o-n*u)*c,e):null}function $(e){return e[0]*e[3]-e[1]*e[2]}function ee(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=n[0],_=n[1],f=n[2],l=n[3],p=n[4],d=n[5];return e[0]=r*s+i*_,e[1]=a*s+o*_,e[2]=r*f+i*l,e[3]=a*f+o*l,e[4]=r*p+i*d+u,e[5]=a*p+o*d+c,e}function te(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=Math.sin(n),_=Math.cos(n);return e[0]=r*_+i*s,e[1]=a*_+o*s,e[2]=r*-s+i*_,e[3]=a*-s+o*_,e[4]=u,e[5]=c,e}function ne(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=n[0],_=n[1];return e[0]=r*s,e[1]=a*s,e[2]=i*_,e[3]=o*_,e[4]=u,e[5]=c,e}function re(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=n[0],_=n[1];return e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=r*s+i*_+u,e[5]=a*s+o*_+c,e}function ae(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function ie(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function oe(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function ue(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"}function ce(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],1)}function se(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e}function _e(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}function fe(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e}function le(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e}function pe(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]}function de(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=t[0],s=t[1],_=t[2],f=t[3],l=t[4],d=t[5];return Math.abs(n-c)<=p*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(r-s)<=p*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(a-_)<=p*Math.max(1,Math.abs(a),Math.abs(_))&&Math.abs(i-f)<=p*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(o-l)<=p*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(u-d)<=p*Math.max(1,Math.abs(u),Math.abs(d))}var he=ee,me=_e;function be(){var e=new d(9);return d!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function ye(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function ve(e){var t=new d(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function ge(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function we(e,t,n,r,a,i,o,u,c){var s=new d(9);return s[0]=e,s[1]=t,s[2]=n,s[3]=r,s[4]=a,s[5]=i,s[6]=o,s[7]=u,s[8]=c,s}function Me(e,t,n,r,a,i,o,u,c,s){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e[6]=u,e[7]=c,e[8]=s,e}function ke(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function ze(e,t){if(e===t){var n=t[1],r=t[2],a=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=a}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function Ae(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],_=t[8],f=_*o-u*s,l=-_*i+u*c,p=s*i-o*c,d=n*f+r*l+a*p;return d?(d=1/d,e[0]=f*d,e[1]=(-_*r+a*s)*d,e[2]=(u*r-a*o)*d,e[3]=l*d,e[4]=(_*n-a*c)*d,e[5]=(-u*n+a*i)*d,e[6]=p*d,e[7]=(-s*n+r*c)*d,e[8]=(o*n-r*i)*d,e):null}function xe(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],_=t[8];return e[0]=o*_-u*s,e[1]=a*s-r*_,e[2]=r*u-a*o,e[3]=u*c-i*_,e[4]=n*_-a*c,e[5]=a*i-n*u,e[6]=i*s-o*c,e[7]=r*c-n*s,e[8]=n*o-r*i,e}function Le(e){var t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],o=e[5],u=e[6],c=e[7],s=e[8];return t*(s*i-o*c)+n*(-s*a+o*u)+r*(c*a-i*u)}function Ee(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=t[8],l=n[0],p=n[1],d=n[2],h=n[3],m=n[4],b=n[5],y=n[6],v=n[7],g=n[8];return e[0]=l*r+p*o+d*s,e[1]=l*a+p*u+d*_,e[2]=l*i+p*c+d*f,e[3]=h*r+m*o+b*s,e[4]=h*a+m*u+b*_,e[5]=h*i+m*c+b*f,e[6]=y*r+v*o+g*s,e[7]=y*a+v*u+g*_,e[8]=y*i+v*c+g*f,e}function Te(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=t[8],l=n[0],p=n[1];return e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=u,e[5]=c,e[6]=l*r+p*o+s,e[7]=l*a+p*u+_,e[8]=l*i+p*c+f,e}function Oe(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=t[8],l=Math.sin(n),p=Math.cos(n);return e[0]=p*r+l*o,e[1]=p*a+l*u,e[2]=p*i+l*c,e[3]=p*o-l*r,e[4]=p*u-l*a,e[5]=p*c-l*i,e[6]=s,e[7]=_,e[8]=f,e}function Ce(e,t,n){var r=n[0],a=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=a*t[3],e[4]=a*t[4],e[5]=a*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Se(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e}function Ie(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=-n,e[4]=r,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Pe(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Be(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e}function Fe(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n+n,u=r+r,c=a+a,s=n*o,_=r*o,f=r*u,l=a*o,p=a*u,d=a*c,h=i*o,m=i*u,b=i*c;return e[0]=1-f-d,e[3]=_-b,e[6]=l+m,e[1]=_+b,e[4]=1-s-d,e[7]=p-h,e[2]=l-m,e[5]=p+h,e[8]=1-s-f,e}function De(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],_=t[8],f=t[9],l=t[10],p=t[11],d=t[12],h=t[13],m=t[14],b=t[15],y=n*u-r*o,v=n*c-a*o,g=n*s-i*o,w=r*c-a*u,M=r*s-i*u,k=a*s-i*c,z=_*h-f*d,A=_*m-l*d,x=_*b-p*d,L=f*m-l*h,E=f*b-p*h,T=l*b-p*m,O=y*T-v*E+g*L+w*x-M*A+k*z;return O?(O=1/O,e[0]=(u*T-c*E+s*L)*O,e[1]=(c*x-o*T-s*A)*O,e[2]=(o*E-u*x+s*z)*O,e[3]=(a*E-r*T-i*L)*O,e[4]=(n*T-a*x+i*A)*O,e[5]=(r*x-n*E-i*z)*O,e[6]=(h*k-m*M+b*w)*O,e[7]=(m*g-d*k-b*v)*O,e[8]=(d*M-h*g+b*y)*O,e):null}function je(e,t,n){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/n,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function Re(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function Ve(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function qe(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function Ge(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e}function Ne(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function Ue(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e}function We(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]}function He(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=e[6],s=e[7],_=e[8],f=t[0],l=t[1],d=t[2],h=t[3],m=t[4],b=t[5],y=t[6],v=t[7],g=t[8];return Math.abs(n-f)<=p*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(r-l)<=p*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(a-d)<=p*Math.max(1,Math.abs(a),Math.abs(d))&&Math.abs(i-h)<=p*Math.max(1,Math.abs(i),Math.abs(h))&&Math.abs(o-m)<=p*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(u-b)<=p*Math.max(1,Math.abs(u),Math.abs(b))&&Math.abs(c-y)<=p*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-v)<=p*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(_-g)<=p*Math.max(1,Math.abs(_),Math.abs(g))}var Ze=Ee,Ye=Ge;function Xe(){var e=new d(16);return d!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Ke(e){var t=new d(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Je(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Qe(e,t,n,r,a,i,o,u,c,s,_,f,l,p,h,m){var b=new d(16);return b[0]=e,b[1]=t,b[2]=n,b[3]=r,b[4]=a,b[5]=i,b[6]=o,b[7]=u,b[8]=c,b[9]=s,b[10]=_,b[11]=f,b[12]=l,b[13]=p,b[14]=h,b[15]=m,b}function $e(e,t,n,r,a,i,o,u,c,s,_,f,l,p,d,h,m){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e[6]=u,e[7]=c,e[8]=s,e[9]=_,e[10]=f,e[11]=l,e[12]=p,e[13]=d,e[14]=h,e[15]=m,e}function et(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tt(e,t){if(e===t){var n=t[1],r=t[2],a=t[3],i=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=i,e[11]=t[14],e[12]=a,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function nt(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],_=t[8],f=t[9],l=t[10],p=t[11],d=t[12],h=t[13],m=t[14],b=t[15],y=n*u-r*o,v=n*c-a*o,g=n*s-i*o,w=r*c-a*u,M=r*s-i*u,k=a*s-i*c,z=_*h-f*d,A=_*m-l*d,x=_*b-p*d,L=f*m-l*h,E=f*b-p*h,T=l*b-p*m,O=y*T-v*E+g*L+w*x-M*A+k*z;return O?(O=1/O,e[0]=(u*T-c*E+s*L)*O,e[1]=(a*E-r*T-i*L)*O,e[2]=(h*k-m*M+b*w)*O,e[3]=(l*M-f*k-p*w)*O,e[4]=(c*x-o*T-s*A)*O,e[5]=(n*T-a*x+i*A)*O,e[6]=(m*g-d*k-b*v)*O,e[7]=(_*k-l*g+p*v)*O,e[8]=(o*E-u*x+s*z)*O,e[9]=(r*x-n*E-i*z)*O,e[10]=(d*M-h*g+b*y)*O,e[11]=(f*g-_*M-p*y)*O,e[12]=(u*A-o*L-c*z)*O,e[13]=(n*L-r*A+a*z)*O,e[14]=(h*v-d*w-m*y)*O,e[15]=(_*w-f*v+l*y)*O,e):null}function rt(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],_=t[8],f=t[9],l=t[10],p=t[11],d=t[12],h=t[13],m=t[14],b=t[15];return e[0]=u*(l*b-p*m)-f*(c*b-s*m)+h*(c*p-s*l),e[1]=-(r*(l*b-p*m)-f*(a*b-i*m)+h*(a*p-i*l)),e[2]=r*(c*b-s*m)-u*(a*b-i*m)+h*(a*s-i*c),e[3]=-(r*(c*p-s*l)-u*(a*p-i*l)+f*(a*s-i*c)),e[4]=-(o*(l*b-p*m)-_*(c*b-s*m)+d*(c*p-s*l)),e[5]=n*(l*b-p*m)-_*(a*b-i*m)+d*(a*p-i*l),e[6]=-(n*(c*b-s*m)-o*(a*b-i*m)+d*(a*s-i*c)),e[7]=n*(c*p-s*l)-o*(a*p-i*l)+_*(a*s-i*c),e[8]=o*(f*b-p*h)-_*(u*b-s*h)+d*(u*p-s*f),e[9]=-(n*(f*b-p*h)-_*(r*b-i*h)+d*(r*p-i*f)),e[10]=n*(u*b-s*h)-o*(r*b-i*h)+d*(r*s-i*u),e[11]=-(n*(u*p-s*f)-o*(r*p-i*f)+_*(r*s-i*u)),e[12]=-(o*(f*m-l*h)-_*(u*m-c*h)+d*(u*l-c*f)),e[13]=n*(f*m-l*h)-_*(r*m-a*h)+d*(r*l-a*f),e[14]=-(n*(u*m-c*h)-o*(r*m-a*h)+d*(r*c-a*u)),e[15]=n*(u*l-c*f)-o*(r*l-a*f)+_*(r*c-a*u),e}function at(e){var t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],o=e[5],u=e[6],c=e[7],s=e[8],_=e[9],f=e[10],l=e[11],p=e[12],d=e[13],h=e[14],m=e[15];return(t*o-n*i)*(f*m-l*h)-(t*u-r*i)*(_*m-l*d)+(t*c-a*i)*(_*h-f*d)+(n*u-r*o)*(s*m-l*p)-(n*c-a*o)*(s*h-f*p)+(r*c-a*u)*(s*d-_*p)}function it(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=t[8],l=t[9],p=t[10],d=t[11],h=t[12],m=t[13],b=t[14],y=t[15],v=n[0],g=n[1],w=n[2],M=n[3];return e[0]=v*r+g*u+w*f+M*h,e[1]=v*a+g*c+w*l+M*m,e[2]=v*i+g*s+w*p+M*b,e[3]=v*o+g*_+w*d+M*y,v=n[4],g=n[5],w=n[6],M=n[7],e[4]=v*r+g*u+w*f+M*h,e[5]=v*a+g*c+w*l+M*m,e[6]=v*i+g*s+w*p+M*b,e[7]=v*o+g*_+w*d+M*y,v=n[8],g=n[9],w=n[10],M=n[11],e[8]=v*r+g*u+w*f+M*h,e[9]=v*a+g*c+w*l+M*m,e[10]=v*i+g*s+w*p+M*b,e[11]=v*o+g*_+w*d+M*y,v=n[12],g=n[13],w=n[14],M=n[15],e[12]=v*r+g*u+w*f+M*h,e[13]=v*a+g*c+w*l+M*m,e[14]=v*i+g*s+w*p+M*b,e[15]=v*o+g*_+w*d+M*y,e}function ot(e,t,n){var r,a,i,o,u,c,s,_,f,l,p,d,h=n[0],m=n[1],b=n[2];return t===e?(e[12]=t[0]*h+t[4]*m+t[8]*b+t[12],e[13]=t[1]*h+t[5]*m+t[9]*b+t[13],e[14]=t[2]*h+t[6]*m+t[10]*b+t[14],e[15]=t[3]*h+t[7]*m+t[11]*b+t[15]):(r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=t[8],l=t[9],p=t[10],d=t[11],e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=u,e[5]=c,e[6]=s,e[7]=_,e[8]=f,e[9]=l,e[10]=p,e[11]=d,e[12]=r*h+u*m+f*b+t[12],e[13]=a*h+c*m+l*b+t[13],e[14]=i*h+s*m+p*b+t[14],e[15]=o*h+_*m+d*b+t[15]),e}function ut(e,t,n){var r=n[0],a=n[1],i=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*a,e[5]=t[5]*a,e[6]=t[6]*a,e[7]=t[7]*a,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function ct(e,t,n,r){var a,i,o,u,c,s,_,f,l,d,h,m,b,y,v,g,w,M,k,z,A,x,L,E,T=r[0],O=r[1],C=r[2],S=Math.hypot(T,O,C);return S<p?null:(T*=S=1/S,O*=S,C*=S,a=Math.sin(n),o=1-(i=Math.cos(n)),u=t[0],c=t[1],s=t[2],_=t[3],f=t[4],l=t[5],d=t[6],h=t[7],m=t[8],b=t[9],y=t[10],v=t[11],g=T*T*o+i,w=O*T*o+C*a,M=C*T*o-O*a,k=T*O*o-C*a,z=O*O*o+i,A=C*O*o+T*a,x=T*C*o+O*a,L=O*C*o-T*a,E=C*C*o+i,e[0]=u*g+f*w+m*M,e[1]=c*g+l*w+b*M,e[2]=s*g+d*w+y*M,e[3]=_*g+h*w+v*M,e[4]=u*k+f*z+m*A,e[5]=c*k+l*z+b*A,e[6]=s*k+d*z+y*A,e[7]=_*k+h*z+v*A,e[8]=u*x+f*L+m*E,e[9]=c*x+l*L+b*E,e[10]=s*x+d*L+y*E,e[11]=_*x+h*L+v*E,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function st(e,t,n){var r=Math.sin(n),a=Math.cos(n),i=t[4],o=t[5],u=t[6],c=t[7],s=t[8],_=t[9],f=t[10],l=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=i*a+s*r,e[5]=o*a+_*r,e[6]=u*a+f*r,e[7]=c*a+l*r,e[8]=s*a-i*r,e[9]=_*a-o*r,e[10]=f*a-u*r,e[11]=l*a-c*r,e}function _t(e,t,n){var r=Math.sin(n),a=Math.cos(n),i=t[0],o=t[1],u=t[2],c=t[3],s=t[8],_=t[9],f=t[10],l=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*a-s*r,e[1]=o*a-_*r,e[2]=u*a-f*r,e[3]=c*a-l*r,e[8]=i*r+s*a,e[9]=o*r+_*a,e[10]=u*r+f*a,e[11]=c*r+l*a,e}function ft(e,t,n){var r=Math.sin(n),a=Math.cos(n),i=t[0],o=t[1],u=t[2],c=t[3],s=t[4],_=t[5],f=t[6],l=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*a+s*r,e[1]=o*a+_*r,e[2]=u*a+f*r,e[3]=c*a+l*r,e[4]=s*a-i*r,e[5]=_*a-o*r,e[6]=f*a-u*r,e[7]=l*a-c*r,e}function lt(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function pt(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function dt(e,t,n){var r,a,i,o=n[0],u=n[1],c=n[2],s=Math.hypot(o,u,c);return s<p?null:(o*=s=1/s,u*=s,c*=s,r=Math.sin(t),i=1-(a=Math.cos(t)),e[0]=o*o*i+a,e[1]=u*o*i+c*r,e[2]=c*o*i-u*r,e[3]=0,e[4]=o*u*i-c*r,e[5]=u*u*i+a,e[6]=c*u*i+o*r,e[7]=0,e[8]=o*c*i+u*r,e[9]=u*c*i-o*r,e[10]=c*c*i+a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function ht(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function mt(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function bt(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function yt(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=r+r,c=a+a,s=i+i,_=r*u,f=r*c,l=r*s,p=a*c,d=a*s,h=i*s,m=o*u,b=o*c,y=o*s;return e[0]=1-(p+h),e[1]=f+y,e[2]=l-b,e[3]=0,e[4]=f-y,e[5]=1-(_+h),e[6]=d+m,e[7]=0,e[8]=l+b,e[9]=d-m,e[10]=1-(_+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function vt(e,t){var n=new d(3),r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=r*r+a*a+i*i+o*o;return f>0?(n[0]=2*(u*o+_*r+c*i-s*a)/f,n[1]=2*(c*o+_*a+s*r-u*i)/f,n[2]=2*(s*o+_*i+u*a-c*r)/f):(n[0]=2*(u*o+_*r+c*i-s*a),n[1]=2*(c*o+_*a+s*r-u*i),n[2]=2*(s*o+_*i+u*a-c*r)),yt(e,t,n),e}function gt(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function wt(e,t){var n=t[0],r=t[1],a=t[2],i=t[4],o=t[5],u=t[6],c=t[8],s=t[9],_=t[10];return e[0]=Math.hypot(n,r,a),e[1]=Math.hypot(i,o,u),e[2]=Math.hypot(c,s,_),e}function Mt(e,t){var n=new d(3);wt(n,t);var r=1/n[0],a=1/n[1],i=1/n[2],o=t[0]*r,u=t[1]*a,c=t[2]*i,s=t[4]*r,_=t[5]*a,f=t[6]*i,l=t[8]*r,p=t[9]*a,h=t[10]*i,m=o+_+h,b=0;return m>0?(b=2*Math.sqrt(m+1),e[3]=.25*b,e[0]=(f-p)/b,e[1]=(l-c)/b,e[2]=(u-s)/b):o>_&&o>h?(b=2*Math.sqrt(1+o-_-h),e[3]=(f-p)/b,e[0]=.25*b,e[1]=(u+s)/b,e[2]=(l+c)/b):_>h?(b=2*Math.sqrt(1+_-o-h),e[3]=(l-c)/b,e[0]=(u+s)/b,e[1]=.25*b,e[2]=(f+p)/b):(b=2*Math.sqrt(1+h-o-_),e[3]=(u-s)/b,e[0]=(l+c)/b,e[1]=(f+p)/b,e[2]=.25*b),e}function kt(e,t,n,r){var a=t[0],i=t[1],o=t[2],u=t[3],c=a+a,s=i+i,_=o+o,f=a*c,l=a*s,p=a*_,d=i*s,h=i*_,m=o*_,b=u*c,y=u*s,v=u*_,g=r[0],w=r[1],M=r[2];return e[0]=(1-(d+m))*g,e[1]=(l+v)*g,e[2]=(p-y)*g,e[3]=0,e[4]=(l-v)*w,e[5]=(1-(f+m))*w,e[6]=(h+b)*w,e[7]=0,e[8]=(p+y)*M,e[9]=(h-b)*M,e[10]=(1-(f+d))*M,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function zt(e,t,n,r,a){var i=t[0],o=t[1],u=t[2],c=t[3],s=i+i,_=o+o,f=u+u,l=i*s,p=i*_,d=i*f,h=o*_,m=o*f,b=u*f,y=c*s,v=c*_,g=c*f,w=r[0],M=r[1],k=r[2],z=a[0],A=a[1],x=a[2],L=(1-(h+b))*w,E=(p+g)*w,T=(d-v)*w,O=(p-g)*M,C=(1-(l+b))*M,S=(m+y)*M,I=(d+v)*k,P=(m-y)*k,B=(1-(l+h))*k;return e[0]=L,e[1]=E,e[2]=T,e[3]=0,e[4]=O,e[5]=C,e[6]=S,e[7]=0,e[8]=I,e[9]=P,e[10]=B,e[11]=0,e[12]=n[0]+z-(L*z+O*A+I*x),e[13]=n[1]+A-(E*z+C*A+P*x),e[14]=n[2]+x-(T*z+S*A+B*x),e[15]=1,e}function At(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n+n,u=r+r,c=a+a,s=n*o,_=r*o,f=r*u,l=a*o,p=a*u,d=a*c,h=i*o,m=i*u,b=i*c;return e[0]=1-f-d,e[1]=_+b,e[2]=l-m,e[3]=0,e[4]=_-b,e[5]=1-s-d,e[6]=p+h,e[7]=0,e[8]=l+m,e[9]=p-h,e[10]=1-s-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function xt(e,t,n,r,a,i,o){var u=1/(n-t),c=1/(a-r),s=1/(i-o);return e[0]=2*i*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*i*c,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(a+r)*c,e[10]=(o+i)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*i*2*s,e[15]=0,e}function Lt(e,t,n,r,a){var i,o=1/Math.tan(t/2);return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=a&&a!==1/0?(i=1/(r-a),e[10]=(a+r)*i,e[14]=2*a*r*i):(e[10]=-1,e[14]=-2*r),e}function Et(e,t,n,r){var a=Math.tan(t.upDegrees*Math.PI/180),i=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),u=Math.tan(t.rightDegrees*Math.PI/180),c=2/(o+u),s=2/(a+i);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=-(o-u)*c*.5,e[9]=(a-i)*s*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e}function Tt(e,t,n,r,a,i,o){var u=1/(t-n),c=1/(r-a),s=1/(i-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*s,e[11]=0,e[12]=(t+n)*u,e[13]=(a+r)*c,e[14]=(o+i)*s,e[15]=1,e}function Ot(e,t,n,r){var a,i,o,u,c,s,_,f,l,d,h=t[0],m=t[1],b=t[2],y=r[0],v=r[1],g=r[2],w=n[0],M=n[1],k=n[2];return Math.abs(h-w)<p&&Math.abs(m-M)<p&&Math.abs(b-k)<p?et(e):(_=h-w,f=m-M,l=b-k,a=v*(l*=d=1/Math.hypot(_,f,l))-g*(f*=d),i=g*(_*=d)-y*l,o=y*f-v*_,(d=Math.hypot(a,i,o))?(a*=d=1/d,i*=d,o*=d):(a=0,i=0,o=0),u=f*o-l*i,c=l*a-_*o,s=_*i-f*a,(d=Math.hypot(u,c,s))?(u*=d=1/d,c*=d,s*=d):(u=0,c=0,s=0),e[0]=a,e[1]=u,e[2]=_,e[3]=0,e[4]=i,e[5]=c,e[6]=f,e[7]=0,e[8]=o,e[9]=s,e[10]=l,e[11]=0,e[12]=-(a*h+i*m+o*b),e[13]=-(u*h+c*m+s*b),e[14]=-(_*h+f*m+l*b),e[15]=1,e)}function Ct(e,t,n,r){var a=t[0],i=t[1],o=t[2],u=r[0],c=r[1],s=r[2],_=a-n[0],f=i-n[1],l=o-n[2],p=_*_+f*f+l*l;p>0&&(_*=p=1/Math.sqrt(p),f*=p,l*=p);var d=c*l-s*f,h=s*_-u*l,m=u*f-c*_;return(p=d*d+h*h+m*m)>0&&(d*=p=1/Math.sqrt(p),h*=p,m*=p),e[0]=d,e[1]=h,e[2]=m,e[3]=0,e[4]=f*m-l*h,e[5]=l*d-_*m,e[6]=_*h-f*d,e[7]=0,e[8]=_,e[9]=f,e[10]=l,e[11]=0,e[12]=a,e[13]=i,e[14]=o,e[15]=1,e}function St(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function It(e){return Math.hypot(e[0],e[1],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function Pt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function Bt(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function Ft(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}function Dt(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e}function jt(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Rt(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=e[6],s=e[7],_=e[8],f=e[9],l=e[10],d=e[11],h=e[12],m=e[13],b=e[14],y=e[15],v=t[0],g=t[1],w=t[2],M=t[3],k=t[4],z=t[5],A=t[6],x=t[7],L=t[8],E=t[9],T=t[10],O=t[11],C=t[12],S=t[13],I=t[14],P=t[15];return Math.abs(n-v)<=p*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(r-g)<=p*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(a-w)<=p*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(i-M)<=p*Math.max(1,Math.abs(i),Math.abs(M))&&Math.abs(o-k)<=p*Math.max(1,Math.abs(o),Math.abs(k))&&Math.abs(u-z)<=p*Math.max(1,Math.abs(u),Math.abs(z))&&Math.abs(c-A)<=p*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(s-x)<=p*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(_-L)<=p*Math.max(1,Math.abs(_),Math.abs(L))&&Math.abs(f-E)<=p*Math.max(1,Math.abs(f),Math.abs(E))&&Math.abs(l-T)<=p*Math.max(1,Math.abs(l),Math.abs(T))&&Math.abs(d-O)<=p*Math.max(1,Math.abs(d),Math.abs(O))&&Math.abs(h-C)<=p*Math.max(1,Math.abs(h),Math.abs(C))&&Math.abs(m-S)<=p*Math.max(1,Math.abs(m),Math.abs(S))&&Math.abs(b-I)<=p*Math.max(1,Math.abs(b),Math.abs(I))&&Math.abs(y-P)<=p*Math.max(1,Math.abs(y),Math.abs(P))}var Vt=it,qt=Bt;function Gt(){var e=new d(3);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Nt(e){var t=new d(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Ut(e){var t=e[0],n=e[1],r=e[2];return Math.hypot(t,n,r)}function Wt(e,t,n){var r=new d(3);return r[0]=e,r[1]=t,r[2]=n,r}function Ht(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Zt(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function Yt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function Xt(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function Kt(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function Jt(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function Qt(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function $t(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function en(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function tn(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}function nn(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}function rn(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function an(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function on(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2];return Math.hypot(n,r,a)}function un(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2];return n*n+r*r+a*a}function cn(e){var t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function sn(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function _n(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function fn(e,t){var n=t[0],r=t[1],a=t[2],i=n*n+r*r+a*a;return i>0&&(i=1/Math.sqrt(i)),e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e}function ln(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function pn(e,t,n){var r=t[0],a=t[1],i=t[2],o=n[0],u=n[1],c=n[2];return e[0]=a*c-i*u,e[1]=i*o-r*c,e[2]=r*u-a*o,e}function dn(e,t,n,r){var a=t[0],i=t[1],o=t[2];return e[0]=a+r*(n[0]-a),e[1]=i+r*(n[1]-i),e[2]=o+r*(n[2]-o),e}function hn(e,t,n,r,a,i){var o=i*i,u=o*(2*i-3)+1,c=o*(i-2)+i,s=o*(i-1),_=o*(3-2*i);return e[0]=t[0]*u+n[0]*c+r[0]*s+a[0]*_,e[1]=t[1]*u+n[1]*c+r[1]*s+a[1]*_,e[2]=t[2]*u+n[2]*c+r[2]*s+a[2]*_,e}function mn(e,t,n,r,a,i){var o=1-i,u=o*o,c=i*i,s=u*o,_=3*i*u,f=3*c*o,l=c*i;return e[0]=t[0]*s+n[0]*_+r[0]*f+a[0]*l,e[1]=t[1]*s+n[1]*_+r[1]*f+a[1]*l,e[2]=t[2]*s+n[2]*_+r[2]*f+a[2]*l,e}function bn(e,t){t=t||1;var n=2*h()*Math.PI,r=2*h()-1,a=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(n)*a,e[1]=Math.sin(n)*a,e[2]=r*t,e}function yn(e,t,n){var r=t[0],a=t[1],i=t[2],o=n[3]*r+n[7]*a+n[11]*i+n[15];return o=o||1,e[0]=(n[0]*r+n[4]*a+n[8]*i+n[12])/o,e[1]=(n[1]*r+n[5]*a+n[9]*i+n[13])/o,e[2]=(n[2]*r+n[6]*a+n[10]*i+n[14])/o,e}function vn(e,t,n){var r=t[0],a=t[1],i=t[2];return e[0]=r*n[0]+a*n[3]+i*n[6],e[1]=r*n[1]+a*n[4]+i*n[7],e[2]=r*n[2]+a*n[5]+i*n[8],e}function gn(e,t,n){var r=n[0],a=n[1],i=n[2],o=n[3],u=t[0],c=t[1],s=t[2],_=a*s-i*c,f=i*u-r*s,l=r*c-a*u,p=a*l-i*f,d=i*_-r*l,h=r*f-a*_,m=2*o;return _*=m,f*=m,l*=m,p*=2,d*=2,h*=2,e[0]=u+_+p,e[1]=c+f+d,e[2]=s+l+h,e}function wn(e,t,n,r){var a=[],i=[];return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],i[0]=a[0],i[1]=a[1]*Math.cos(r)-a[2]*Math.sin(r),i[2]=a[1]*Math.sin(r)+a[2]*Math.cos(r),e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e}function Mn(e,t,n,r){var a=[],i=[];return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],i[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),i[1]=a[1],i[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e}function kn(e,t,n,r){var a=[],i=[];return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],i[0]=a[0]*Math.cos(r)-a[1]*Math.sin(r),i[1]=a[0]*Math.sin(r)+a[1]*Math.cos(r),i[2]=a[2],e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e}function zn(e,t){var n=Wt(e[0],e[1],e[2]),r=Wt(t[0],t[1],t[2]);fn(n,n),fn(r,r);var a=ln(n,r);return a>1?0:a<-1?Math.PI:Math.acos(a)}function An(e){return e[0]=0,e[1]=0,e[2]=0,e}function xn(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function Ln(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function En(e,t){var n=e[0],r=e[1],a=e[2],i=t[0],o=t[1],u=t[2];return Math.abs(n-i)<=p*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-o)<=p*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-u)<=p*Math.max(1,Math.abs(a),Math.abs(u))}var Tn,On=Xt,Cn=Kt,Sn=Jt,In=on,Pn=un,Bn=Ut,Fn=cn,Dn=(Tn=Gt(),function(e,t,n,r,a,i){var o,u;for(t||(t=3),n||(n=0),u=r?Math.min(r*t+n,e.length):e.length,o=n;o<u;o+=t)Tn[0]=e[o],Tn[1]=e[o+1],Tn[2]=e[o+2],a(Tn,Tn,i),e[o]=Tn[0],e[o+1]=Tn[1],e[o+2]=Tn[2];return e});function jn(){var e=new d(4);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Rn(e){var t=new d(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Vn(e,t,n,r){var a=new d(4);return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a}function qn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Gn(e,t,n,r,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function Nn(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function Un(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function Wn(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function Hn(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function Zn(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function Yn(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function Xn(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e}function Kn(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e}function Jn(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function Qn(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function $n(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}function er(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],i=t[3]-e[3];return Math.hypot(n,r,a,i)}function tr(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],i=t[3]-e[3];return n*n+r*r+a*a+i*i}function nr(e){var t=e[0],n=e[1],r=e[2],a=e[3];return Math.hypot(t,n,r,a)}function rr(e){var t=e[0],n=e[1],r=e[2],a=e[3];return t*t+n*n+r*r+a*a}function ar(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function ir(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function or(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n*n+r*r+a*a+i*i;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=a*o,e[3]=i*o,e}function ur(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function cr(e,t,n,r){var a=n[0]*r[1]-n[1]*r[0],i=n[0]*r[2]-n[2]*r[0],o=n[0]*r[3]-n[3]*r[0],u=n[1]*r[2]-n[2]*r[1],c=n[1]*r[3]-n[3]*r[1],s=n[2]*r[3]-n[3]*r[2],_=t[0],f=t[1],l=t[2],p=t[3];return e[0]=f*s-l*c+p*u,e[1]=-_*s+l*o-p*i,e[2]=_*c-f*o+p*a,e[3]=-_*u+f*i-l*a,e}function sr(e,t,n,r){var a=t[0],i=t[1],o=t[2],u=t[3];return e[0]=a+r*(n[0]-a),e[1]=i+r*(n[1]-i),e[2]=o+r*(n[2]-o),e[3]=u+r*(n[3]-u),e}function _r(e,t){var n,r,a,i,o,u;t=t||1;do{o=(n=2*h()-1)*n+(r=2*h()-1)*r}while(o>=1);do{u=(a=2*h()-1)*a+(i=2*h()-1)*i}while(u>=1);var c=Math.sqrt((1-o)/u);return e[0]=t*n,e[1]=t*r,e[2]=t*a*c,e[3]=t*i*c,e}function fr(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3];return e[0]=n[0]*r+n[4]*a+n[8]*i+n[12]*o,e[1]=n[1]*r+n[5]*a+n[9]*i+n[13]*o,e[2]=n[2]*r+n[6]*a+n[10]*i+n[14]*o,e[3]=n[3]*r+n[7]*a+n[11]*i+n[15]*o,e}function lr(e,t,n){var r=t[0],a=t[1],i=t[2],o=n[0],u=n[1],c=n[2],s=n[3],_=s*r+u*i-c*a,f=s*a+c*r-o*i,l=s*i+o*a-u*r,p=-o*r-u*a-c*i;return e[0]=_*s+p*-o+f*-c-l*-u,e[1]=f*s+p*-u+l*-o-_*-c,e[2]=l*s+p*-c+_*-u-f*-o,e[3]=t[3],e}function pr(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function dr(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function hr(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function mr(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=t[0],u=t[1],c=t[2],s=t[3];return Math.abs(n-o)<=p*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-u)<=p*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-c)<=p*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(i-s)<=p*Math.max(1,Math.abs(i),Math.abs(s))}var br=Un,yr=Wn,vr=Hn,gr=er,wr=tr,Mr=nr,kr=rr,zr=function(){var e=jn();return function(t,n,r,a,i,o){var u,c;for(n||(n=4),r||(r=0),c=a?Math.min(a*n+r,t.length):t.length,u=r;u<c;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],i(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}}();function Ar(){var e=new d(4);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function xr(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Lr(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function Er(e,t){var n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>p?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function Tr(e,t){var n=aa(e,t);return Math.acos(2*n*n-1)}function Or(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1],s=n[2],_=n[3];return e[0]=r*_+o*u+a*s-i*c,e[1]=a*_+o*c+i*u-r*s,e[2]=i*_+o*s+r*c-a*u,e[3]=o*_-r*u-a*c-i*s,e}function Cr(e,t,n){n*=.5;var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*u,e[1]=a*c+i*u,e[2]=i*c-a*u,e[3]=o*c-r*u,e}function Sr(e,t,n){n*=.5;var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c-i*u,e[1]=a*c+o*u,e[2]=i*c+r*u,e[3]=o*c-a*u,e}function Ir(e,t,n){n*=.5;var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+a*u,e[1]=a*c-r*u,e[2]=i*c+o*u,e[3]=o*c-i*u,e}function Pr(e,t){var n=t[0],r=t[1],a=t[2];return e[0]=n,e[1]=r,e[2]=a,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-a*a)),e}function Br(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=Math.sqrt(n*n+r*r+a*a),u=Math.exp(i),c=o>0?u*Math.sin(o)/o:0;return e[0]=n*c,e[1]=r*c,e[2]=a*c,e[3]=u*Math.cos(o),e}function Fr(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=Math.sqrt(n*n+r*r+a*a),u=o>0?Math.atan2(o,i)/o:0;return e[0]=n*u,e[1]=r*u,e[2]=a*u,e[3]=.5*Math.log(n*n+r*r+a*a+i*i),e}function Dr(e,t,n){return Fr(e,t),ra(e,e,n),Br(e,e),e}function jr(e,t,n,r){var a,i,o,u,c,s=t[0],_=t[1],f=t[2],l=t[3],d=n[0],h=n[1],m=n[2],b=n[3];return(i=s*d+_*h+f*m+l*b)<0&&(i=-i,d=-d,h=-h,m=-m,b=-b),1-i>p?(a=Math.acos(i),o=Math.sin(a),u=Math.sin((1-r)*a)/o,c=Math.sin(r*a)/o):(u=1-r,c=r),e[0]=u*s+c*d,e[1]=u*_+c*h,e[2]=u*f+c*m,e[3]=u*l+c*b,e}function Rr(e){var t=h(),n=h(),r=h(),a=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=a*Math.sin(2*Math.PI*n),e[1]=a*Math.cos(2*Math.PI*n),e[2]=i*Math.sin(2*Math.PI*r),e[3]=i*Math.cos(2*Math.PI*r),e}function Vr(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n*n+r*r+a*a+i*i,u=o?1/o:0;return e[0]=-n*u,e[1]=-r*u,e[2]=-a*u,e[3]=i*u,e}function qr(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Gr(e,t){var n,r=t[0]+t[4]+t[8];if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[3*a+a]&&(a=2);var i=(a+1)%3,o=(a+2)%3;n=Math.sqrt(t[3*a+a]-t[3*i+i]-t[3*o+o]+1),e[a]=.5*n,n=.5/n,e[3]=(t[3*i+o]-t[3*o+i])*n,e[i]=(t[3*i+a]+t[3*a+i])*n,e[o]=(t[3*o+a]+t[3*a+o])*n}return e}function Nr(e,t,n,r){var a=.5*Math.PI/180;t*=a,n*=a,r*=a;var i=Math.sin(t),o=Math.cos(t),u=Math.sin(n),c=Math.cos(n),s=Math.sin(r),_=Math.cos(r);return e[0]=i*c*_-o*u*s,e[1]=o*u*_+i*c*s,e[2]=o*c*s-i*u*_,e[3]=o*c*_+i*u*s,e}function Ur(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var Wr,Hr,Zr,Yr,Xr,Kr,Jr=Rn,Qr=Vn,$r=qn,ea=Gn,ta=Nn,na=Or,ra=Qn,aa=ur,ia=sr,oa=nr,ua=oa,ca=rr,sa=ca,_a=or,fa=hr,la=mr,pa=(Wr=Gt(),Hr=Wt(1,0,0),Zr=Wt(0,1,0),function(e,t,n){var r=ln(t,n);return r<-.999999?(pn(Wr,Hr,t),Bn(Wr)<1e-6&&pn(Wr,Zr,t),fn(Wr,Wr),Lr(e,Wr,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(pn(Wr,t,n),e[0]=Wr[0],e[1]=Wr[1],e[2]=Wr[2],e[3]=1+r,_a(e,e))}),da=(Yr=Ar(),Xr=Ar(),function(e,t,n,r,a,i){return jr(Yr,t,a,i),jr(Xr,n,r,i),jr(e,Yr,Xr,2*i*(1-i)),e}),ha=(Kr=be(),function(e,t,n,r){return Kr[0]=n[0],Kr[3]=n[1],Kr[6]=n[2],Kr[1]=r[0],Kr[4]=r[1],Kr[7]=r[2],Kr[2]=-t[0],Kr[5]=-t[1],Kr[8]=-t[2],_a(e,Gr(e,Kr))});function ma(){var e=new d(8);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0),e[3]=1,e}function ba(e){var t=new d(8);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function ya(e,t,n,r,a,i,o,u){var c=new d(8);return c[0]=e,c[1]=t,c[2]=n,c[3]=r,c[4]=a,c[5]=i,c[6]=o,c[7]=u,c}function va(e,t,n,r,a,i,o){var u=new d(8);u[0]=e,u[1]=t,u[2]=n,u[3]=r;var c=.5*a,s=.5*i,_=.5*o;return u[4]=c*r+s*n-_*t,u[5]=s*r+_*e-c*n,u[6]=_*r+c*t-s*e,u[7]=-c*e-s*t-_*n,u}function ga(e,t,n){var r=.5*n[0],a=.5*n[1],i=.5*n[2],o=t[0],u=t[1],c=t[2],s=t[3];return e[0]=o,e[1]=u,e[2]=c,e[3]=s,e[4]=r*s+a*c-i*u,e[5]=a*s+i*o-r*c,e[6]=i*s+r*u-a*o,e[7]=-r*o-a*u-i*c,e}function wa(e,t){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=.5*t[0],e[5]=.5*t[1],e[6]=.5*t[2],e[7]=0,e}function Ma(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function ka(e,t){var n=Ar();Mt(n,t);var r=new d(3);return gt(r,t),ga(e,n,r),e}function za(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function Aa(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function xa(e,t,n,r,a,i,o,u,c){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e[6]=u,e[7]=c,e}var La=$r;function Ea(e,t){return e[0]=t[4],e[1]=t[5],e[2]=t[6],e[3]=t[7],e}var Ta=$r;function Oa(e,t){return e[4]=t[0],e[5]=t[1],e[6]=t[2],e[7]=t[3],e}function Ca(e,t){var n=t[4],r=t[5],a=t[6],i=t[7],o=-t[0],u=-t[1],c=-t[2],s=t[3];return e[0]=2*(n*s+i*o+r*c-a*u),e[1]=2*(r*s+i*u+a*o-n*c),e[2]=2*(a*s+i*c+n*u-r*o),e}function Sa(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=.5*n[0],c=.5*n[1],s=.5*n[2],_=t[4],f=t[5],l=t[6],p=t[7];return e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=o*u+a*s-i*c+_,e[5]=o*c+i*u-r*s+f,e[6]=o*s+r*c-a*u+l,e[7]=-r*u-a*c-i*s+p,e}function Ia(e,t,n){var r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=u*o+_*r+c*i-s*a,l=c*o+_*a+s*r-u*i,p=s*o+_*i+u*a-c*r,d=_*o-u*r-c*a-s*i;return Cr(e,t,n),r=e[0],a=e[1],i=e[2],o=e[3],e[4]=f*o+d*r+l*i-p*a,e[5]=l*o+d*a+p*r-f*i,e[6]=p*o+d*i+f*a-l*r,e[7]=d*o-f*r-l*a-p*i,e}function Pa(e,t,n){var r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=u*o+_*r+c*i-s*a,l=c*o+_*a+s*r-u*i,p=s*o+_*i+u*a-c*r,d=_*o-u*r-c*a-s*i;return Sr(e,t,n),r=e[0],a=e[1],i=e[2],o=e[3],e[4]=f*o+d*r+l*i-p*a,e[5]=l*o+d*a+p*r-f*i,e[6]=p*o+d*i+f*a-l*r,e[7]=d*o-f*r-l*a-p*i,e}function Ba(e,t,n){var r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],_=t[7],f=u*o+_*r+c*i-s*a,l=c*o+_*a+s*r-u*i,p=s*o+_*i+u*a-c*r,d=_*o-u*r-c*a-s*i;return Ir(e,t,n),r=e[0],a=e[1],i=e[2],o=e[3],e[4]=f*o+d*r+l*i-p*a,e[5]=l*o+d*a+p*r-f*i,e[6]=p*o+d*i+f*a-l*r,e[7]=d*o-f*r-l*a-p*i,e}function Fa(e,t,n){var r=n[0],a=n[1],i=n[2],o=n[3],u=t[0],c=t[1],s=t[2],_=t[3];return e[0]=u*o+_*r+c*i-s*a,e[1]=c*o+_*a+s*r-u*i,e[2]=s*o+_*i+u*a-c*r,e[3]=_*o-u*r-c*a-s*i,u=t[4],c=t[5],s=t[6],_=t[7],e[4]=u*o+_*r+c*i-s*a,e[5]=c*o+_*a+s*r-u*i,e[6]=s*o+_*i+u*a-c*r,e[7]=_*o-u*r-c*a-s*i,e}function Da(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1],s=n[2],_=n[3];return e[0]=r*_+o*u+a*s-i*c,e[1]=a*_+o*c+i*u-r*s,e[2]=i*_+o*s+r*c-a*u,e[3]=o*_-r*u-a*c-i*s,u=n[4],c=n[5],s=n[6],_=n[7],e[4]=r*_+o*u+a*s-i*c,e[5]=a*_+o*c+i*u-r*s,e[6]=i*_+o*s+r*c-a*u,e[7]=o*_-r*u-a*c-i*s,e}function ja(e,t,n,r){if(Math.abs(r)<p)return za(e,t);var a=Math.hypot(n[0],n[1],n[2]);r*=.5;var i=Math.sin(r),o=i*n[0]/a,u=i*n[1]/a,c=i*n[2]/a,s=Math.cos(r),_=t[0],f=t[1],l=t[2],d=t[3];e[0]=_*s+d*o+f*c-l*u,e[1]=f*s+d*u+l*o-_*c,e[2]=l*s+d*c+_*u-f*o,e[3]=d*s-_*o-f*u-l*c;var h=t[4],m=t[5],b=t[6],y=t[7];return e[4]=h*s+y*o+m*c-b*u,e[5]=m*s+y*u+b*o-h*c,e[6]=b*s+y*c+h*u-m*o,e[7]=y*s-h*o-m*u-b*c,e}function Ra(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e}function Va(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[4],c=n[5],s=n[6],_=n[7],f=t[4],l=t[5],p=t[6],d=t[7],h=n[0],m=n[1],b=n[2],y=n[3];return e[0]=r*y+o*h+a*b-i*m,e[1]=a*y+o*m+i*h-r*b,e[2]=i*y+o*b+r*m-a*h,e[3]=o*y-r*h-a*m-i*b,e[4]=r*_+o*u+a*s-i*c+f*y+d*h+l*b-p*m,e[5]=a*_+o*c+i*u-r*s+l*y+d*m+p*h-f*b,e[6]=i*_+o*s+r*c-a*u+p*y+d*b+f*m-l*h,e[7]=o*_-r*u-a*c-i*s+d*y-f*h-l*m-p*b,e}var qa=Va;function Ga(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e}var Na=aa;function Ua(e,t,n,r){var a=1-r;return Na(t,n)<0&&(r=-r),e[0]=t[0]*a+n[0]*r,e[1]=t[1]*a+n[1]*r,e[2]=t[2]*a+n[2]*r,e[3]=t[3]*a+n[3]*r,e[4]=t[4]*a+n[4]*r,e[5]=t[5]*a+n[5]*r,e[6]=t[6]*a+n[6]*r,e[7]=t[7]*a+n[7]*r,e}function Wa(e,t){var n=Xa(t);return e[0]=-t[0]/n,e[1]=-t[1]/n,e[2]=-t[2]/n,e[3]=t[3]/n,e[4]=-t[4]/n,e[5]=-t[5]/n,e[6]=-t[6]/n,e[7]=t[7]/n,e}function Ha(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=t[7],e}var Za=oa,Ya=Za,Xa=ca,Ka=Xa;function Ja(e,t){var n=Xa(t);if(n>0){n=Math.sqrt(n);var r=t[0]/n,a=t[1]/n,i=t[2]/n,o=t[3]/n,u=t[4],c=t[5],s=t[6],_=t[7],f=r*u+a*c+i*s+o*_;e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=(u-r*f)/n,e[5]=(c-a*f)/n,e[6]=(s-i*f)/n,e[7]=(_-o*f)/n}return e}function Qa(e){return"quat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+")"}function $a(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]}function ei(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=e[6],s=e[7],_=t[0],f=t[1],l=t[2],d=t[3],h=t[4],m=t[5],b=t[6],y=t[7];return Math.abs(n-_)<=p*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(r-f)<=p*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(a-l)<=p*Math.max(1,Math.abs(a),Math.abs(l))&&Math.abs(i-d)<=p*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(o-h)<=p*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(u-m)<=p*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-b)<=p*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(s-y)<=p*Math.max(1,Math.abs(s),Math.abs(y))}function ti(){var e=new d(2);return d!=Float32Array&&(e[0]=0,e[1]=0),e}function ni(e){var t=new d(2);return t[0]=e[0],t[1]=e[1],t}function ri(e,t){var n=new d(2);return n[0]=e,n[1]=t,n}function ai(e,t){return e[0]=t[0],e[1]=t[1],e}function ii(e,t,n){return e[0]=t,e[1]=n,e}function oi(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function ui(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function ci(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e}function si(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e}function _i(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}function fi(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function li(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e}function pi(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e}function di(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e}function hi(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function mi(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e}function bi(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.hypot(n,r)}function yi(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function vi(e){var t=e[0],n=e[1];return Math.hypot(t,n)}function gi(e){var t=e[0],n=e[1];return t*t+n*n}function wi(e,t){return e[0]=-t[0],e[1]=-t[1],e}function Mi(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}function ki(e,t){var n=t[0],r=t[1],a=n*n+r*r;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e}function zi(e,t){return e[0]*t[0]+e[1]*t[1]}function Ai(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e}function xi(e,t,n,r){var a=t[0],i=t[1];return e[0]=a+r*(n[0]-a),e[1]=i+r*(n[1]-i),e}function Li(e,t){t=t||1;var n=2*h()*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e}function Ei(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[2]*a,e[1]=n[1]*r+n[3]*a,e}function Ti(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[2]*a+n[4],e[1]=n[1]*r+n[3]*a+n[5],e}function Oi(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[3]*a+n[6],e[1]=n[1]*r+n[4]*a+n[7],e}function Ci(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[4]*a+n[12],e[1]=n[1]*r+n[5]*a+n[13],e}function Si(e,t,n,r){var a=t[0]-n[0],i=t[1]-n[1],o=Math.sin(r),u=Math.cos(r);return e[0]=a*u-i*o+n[0],e[1]=a*o+i*u+n[1],e}function Ii(e,t){var n=e[0],r=e[1],a=t[0],i=t[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var u=a*a+i*i;u>0&&(u=1/Math.sqrt(u));var c=(n*a+r*i)*o*u;return c>1?0:c<-1?Math.PI:Math.acos(c)}function Pi(e){return e[0]=0,e[1]=0,e}function Bi(e){return"vec2("+e[0]+", "+e[1]+")"}function Fi(e,t){return e[0]===t[0]&&e[1]===t[1]}function Di(e,t){var n=e[0],r=e[1],a=t[0],i=t[1];return Math.abs(n-a)<=p*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-i)<=p*Math.max(1,Math.abs(r),Math.abs(i))}var ji=vi,Ri=ui,Vi=ci,qi=si,Gi=bi,Ni=yi,Ui=gi,Wi=function(){var e=ti();return function(t,n,r,a,i,o){var u,c;for(n||(n=2),r||(r=0),c=a?Math.min(a*n+r,t.length):t.length,u=r;u<c;u+=n)e[0]=t[u],e[1]=t[u+1],i(e,e,o),t[u]=e[0],t[u+1]=e[1];return t}}()}]);',
          "Worker",
          void 0,
          n.p + "zappar-cv.worker.js"
        );
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "0bdbfe863a384bcd2935e7437d8f1153.wasm");
    },
    function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (a, i) {
            function o(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.permissionDeniedUI =
          t.permissionRequestUI =
          t.permissionRequestMotion =
          t.permissionRequestCamera =
          t.permissionRequestAll =
          t.permissionGrantedAll =
          t.permissionDeniedAny =
          t.permissionDeniedMotion =
          t.permissionDeniedCamera =
          t.permissionGrantedMotion =
          t.permissionGrantedCamera =
            void 0);
      let a = new (n(8).UAParser)(),
        i = !1,
        o = !1,
        s = !1,
        u = !1;
      function c() {
        return r(this, void 0, void 0, function* () {
          if (navigator.permissions && navigator.permissions.query)
            try {
              let e = yield navigator.permissions.query({ name: "camera" });
              (s = "denied" === e.state), (i = "granted" === e.state);
            } catch (e) {}
        });
      }
      function f() {
        return s || u;
      }
      function _() {
        return i && o;
      }
      function l() {
        return r(this, void 0, void 0, function* () {
          yield h(), yield d();
        });
      }
      function d() {
        return r(this, void 0, void 0, function* () {
          try {
            (yield navigator.mediaDevices.getUserMedia({ video: !0 }))
              .getTracks()
              .forEach((e) => e.stop()),
              (i = !0),
              (s = !1);
          } catch (e) {
            (i = !1), (s = !0);
          }
        });
      }
      function h() {
        return r(this, void 0, void 0, function* () {
          if (
            window.DeviceOrientationEvent &&
            window.DeviceOrientationEvent.requestPermission
          ) {
            if (
              "granted" !==
              (yield window.DeviceOrientationEvent.requestPermission())
            )
              return (o = !1), (u = !0), !1;
          }
          (o = !0), (u = !1);
        });
      }
      (window.DeviceOrientationEvent &&
        window.DeviceOrientationEvent.requestPermission) ||
        (o = !0),
        c(),
        (t.permissionGrantedCamera = function () {
          return i;
        }),
        (t.permissionGrantedMotion = function () {
          return o;
        }),
        (t.permissionDeniedCamera = function () {
          return s;
        }),
        (t.permissionDeniedMotion = function () {
          return u;
        }),
        (t.permissionDeniedAny = f),
        (t.permissionGrantedAll = _),
        (t.permissionRequestAll = l),
        (t.permissionRequestCamera = d),
        (t.permissionRequestMotion = h),
        (t.permissionRequestUI = function () {
          return r(this, void 0, void 0, function* () {
            if ((yield c(), _())) return !0;
            let e = document.createElement("div");
            e.classList.add("zappar-permission-request"),
              (e.innerHTML =
                '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            max-width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Almost there...</div>\n        <div class="zappar-text">In order to provide this augmented reality experience, we need access to your device\'s camera and motion sensors.</div>\n        <button id="zappar-permission-request-button">Grant Access</button>\n    </div>\n'),
              document.body.append(e);
            let t = e.querySelector("#zappar-permission-request-button");
            return yield new Promise((n) => {
              null == t ||
                t.addEventListener("click", () =>
                  r(this, void 0, void 0, function* () {
                    for (yield l(), e.remove(); ; ) {
                      if (
                        (yield new Promise((e) =>
                          requestAnimationFrame(() => e())
                        ),
                        f())
                      )
                        return void n(!1);
                      if (_()) return void n(!0);
                    }
                  })
                );
            });
          });
        }),
        (t.permissionDeniedUI = function () {
          switch (a.getBrowser().name) {
            case "Chrome":
              !(function () {
                let e = document.createElement("div");
                e.classList.add("zappar-permission-request"),
                  (e.innerHTML =
                    '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Permission is Needed</div>\n        <div class="zappar-text">Permission to access your device\'s camera and motion sensors is necessary for this experience.<br/><br/>To grant access, please tap the ! button in the address bar of your browser, then "Site settings", and finally "Clear and reset". You can then reload the page to try again.</div>\n        <button id="zappar-permission-reload-button">Reload</button>\n    </div>\n'),
                  document.body.append(e);
                let t = e.querySelector("#zappar-permission-reload-button");
                null == t ||
                  t.addEventListener("click", () => window.location.reload());
              })();
              break;
            default:
              !(function () {
                let e = document.createElement("div");
                e.classList.add("zappar-permission-request"),
                  (e.innerHTML =
                    '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            max-width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Permission is Needed</div>\n        <div class="zappar-text">Permission to access your device\'s camera and motion sensors is necessary for this experience. Please reload the page to try again.</div>\n        <button id="zappar-permission-reload-button">Reload</button>\n    </div>\n'),
                  document.body.append(e);
                let t = e.querySelector("#zappar-permission-reload-button");
                null == t ||
                  t.addEventListener("click", () => window.location.reload());
              })();
          }
        });
    },
    function (e, t) {
      (function (t) {
        e.exports = t;
      }.call(this, {}));
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FaceMesh =
          t.getFaceMesh =
          t.destroyFaceMesh =
          t.createFaceMesh =
            void 0);
      const r = n(0),
        a = n(1);
      let i = 1,
        o = new Map();
      (t.createFaceMesh = function () {
        let e = i++;
        return o.set(e, new s()), a.zcout("face_mesh_t initialized"), e;
      }),
        (t.destroyFaceMesh = function (e) {
          o.delete(e);
        }),
        (t.getFaceMesh = function (e) {
          return o.get(e);
        });
      class s {
        constructor() {
          (this.render_mean_ = new Float32Array()),
            (this.render_identity_ = new Float32Array(50)),
            (this.render_expression_ = new Float32Array(29)),
            (this.render_uvs_ = new Float32Array()),
            (this.render_indices_ = new Uint16Array()),
            (this.vertices_ = new Float32Array()),
            (this.normals_ = new Float32Array()),
            (this.normalsCalculated_ = !1),
            (this.modelVersion_ = -1),
            (this.mirrored_ = !1);
        }
        loadFromMemory(e, t, n, r, a) {
          let i = 0,
            o = new Uint16Array(e),
            s = new Int32Array(e),
            u = new Float32Array(e),
            c = () => {
              let e = s[i++] * s[i++],
                t = u.subarray(i, i + e);
              return (i += e), t;
            },
            f = () => {
              let e = s[i++],
                t = o.subarray(2 * i, 2 * i + e);
              return (i += e / 2), t;
            };
          (this.render_mean_ = c()),
            (this.render_identity_ = c()),
            (this.render_expression_ = c()),
            (this.render_uvs_ = c());
          let _ = f(),
            l = i < s.length ? f() : new Uint16Array(),
            d = i < s.length ? f() : new Uint16Array(),
            h = i < s.length ? f() : new Uint16Array(),
            p = i < s.length ? f() : new Uint16Array();
          if (t || n || r || a) {
            let e = _.length;
            t && (e += l.length),
              n && (e += d.length),
              r && (e += h.length),
              a && (e += p.length),
              (this.render_indices_ = new Uint16Array(e)),
              this.render_indices_.set(_, 0);
            let i = _.length;
            t && (this.render_indices_.set(l, i), (i += l.length)),
              n && (this.render_indices_.set(d, i), (i += d.length)),
              r && (this.render_indices_.set(h, i), (i += h.length)),
              a && (this.render_indices_.set(p, i), (i += p.length));
          } else this.render_indices_ = _;
          (this.vertices_ = new Float32Array(this.render_mean_)),
            (this.normals_ = new Float32Array(this.vertices_.length)),
            this.modelVersion_++;
        }
        getVertices() {
          return this.vertices_;
        }
        getUVs() {
          return this.render_uvs_;
        }
        getIndices() {
          if (this.mirrored_) {
            if (!this.render_indices_reversed) {
              this.render_indices_reversed = new Uint16Array(
                this.render_indices_.length
              );
              for (let e = 0; e < this.render_indices_.length; e += 3)
                (this.render_indices_reversed[e] = this.render_indices_[e + 2]),
                  (this.render_indices_reversed[e + 1] =
                    this.render_indices_[e + 1]),
                  (this.render_indices_reversed[e + 2] =
                    this.render_indices_[e]);
            }
            return this.render_indices_reversed;
          }
          return this.render_indices_;
        }
        getNormals() {
          return (
            this.normalsCalculated_ || this.calculateNormals(), this.normals_
          );
        }
        getModelVersion() {
          return this.modelVersion_;
        }
        getLandmarkDataForVertex(e) {
          let t = [
              this.render_mean_[3 * e],
              this.render_mean_[3 * e + 1],
              this.render_mean_[3 * e + 2],
            ],
            n = [];
          for (let t = 0; t < 50; t++)
            n.push(this.render_identity_[3 * e * 50 + t]),
              n.push(this.render_identity_[50 * (3 * e + 1) + t]),
              n.push(this.render_identity_[50 * (3 * e + 2) + t]);
          let r = [];
          for (let t = 0; t < 29; t++)
            r.push(this.render_expression_[3 * e * 29 + t]),
              r.push(this.render_expression_[29 * (3 * e + 1) + t]),
              r.push(this.render_expression_[29 * (3 * e + 2) + t]);
          return { mean: t, identity: n, expression: r };
        }
        update(e, t, n) {
          if (
            0 !== this.render_mean_.length &&
            0 !== this.render_identity_.length &&
            0 !== this.render_expression_.length
          ) {
            (this.mirrored_ = n), this.vertices_.set(this.render_mean_);
            for (let t = 0; t < e.length; t++)
              for (let n = 0; n < this.vertices_.length; n++)
                this.vertices_[n] +=
                  e[t] * this.render_identity_[n * e.length + t];
            for (let e = 0; e < t.length; e++)
              for (let n = 0; n < this.vertices_.length; n++)
                this.vertices_[n] +=
                  t[e] * this.render_expression_[n * t.length + e];
            if (n)
              for (let e = 0; e < this.vertices_.length; e += 3)
                this.vertices_[e] *= -1;
            this.normalsCalculated_ = !1;
          }
        }
        calculateNormals() {
          let e = this.getIndices(),
            t = this.vertices_,
            n = new Float32Array(e.length);
          if (!t) return;
          let a = e.length,
            i = this.normals_,
            o = new Float32Array([0, 0, 0]),
            s = new Float32Array([0, 0, 0]),
            u = new Float32Array([0, 0, 0]);
          for (let i = 0; i < a; i += 3) {
            let a = 3 * e[i],
              c = 3 * e[i + 1],
              f = 3 * e[i + 2];
            (o[0] = t[c] - t[a]),
              (o[1] = t[c + 1] - t[a + 1]),
              (o[2] = t[c + 2] - t[a + 2]),
              (s[0] = t[f] - t[a]),
              (s[1] = t[f + 1] - t[a + 1]),
              (s[2] = t[f + 2] - t[a + 2]),
              r.vec3.cross(u, o, s);
            let _ = r.vec3.length(u);
            (n[i] = u[0] / _), (n[i + 1] = u[1] / _), (n[i + 2] = u[2] / _);
          }
          i.fill(0);
          for (let t = 0; t < a; t += 3) {
            let r = 3 * e[t],
              a = 3 * e[t + 1],
              o = 3 * e[t + 2];
            (i[r] += n[t]),
              (i[r + 1] += n[t + 1]),
              (i[r + 2] += n[t + 2]),
              (i[a] += n[t]),
              (i[a + 1] += n[t + 1]),
              (i[a + 2] += n[t + 2]),
              (i[o] += n[t]),
              (i[o + 1] += n[t + 1]),
              (i[o + 2] += n[t + 2]);
          }
          let c = i.length / 3;
          for (let e = 0; e < c; e++) {
            let t = 3 * e;
            (o[0] = i[t]),
              (o[1] = i[t + 1]),
              (o[2] = i[t + 2]),
              r.vec3.normalize(s, o),
              (i[t] = s[0]),
              (i[t + 1] = s[1]),
              (i[t + 2] = s[2]);
          }
          this.normalsCalculated_ = !0;
        }
      }
      t.FaceMesh = s;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cameraFrameTextureMatrix = t.CameraDraw = void 0);
      const r = n(2),
        a = n(0);
      t.CameraDraw = class {
        constructor(e) {
          this._gl = e;
        }
        dispose() {
          this._vbo && this._gl.deleteBuffer(this._vbo),
            (this._vbo = void 0),
            this._shader && this._gl.deleteProgram(this._shader.prog),
            (this._shader = void 0);
        }
        _generate(e, t) {
          if (this._vbo) return this._vbo;
          if ((this._vbo || (this._vbo = e.createBuffer()), !this._vbo))
            throw new Error("Unable to create buffer object");
          let n = new Float32Array([
            -1, -1, 0, 0, 0, -1, 1, 0, 0, 1, 1, -1, 0, 1, 0, 1, -1, 0, 1, 0, -1,
            1, 0, 0, 1, 1, 1, 0, 1, 1,
          ]);
          return (
            e.bindBuffer(e.ARRAY_BUFFER, this._vbo),
            e.bufferData(e.ARRAY_BUFFER, new Float32Array(n), e.STATIC_DRAW),
            e.bindBuffer(e.ARRAY_BUFFER, null),
            this._vbo
          );
        }
        drawCameraFrame(e, t, n, r) {
          if (!n.texture) return;
          let a = this._gl;
          a.disable(a.DEPTH_TEST),
            a.disable(a.SCISSOR_TEST),
            a.disable(a.CULL_FACE),
            a.disable(a.BLEND);
          let i = this._getCameraShader(a),
            o = this._generate(a, n);
          a.activeTexture(a.TEXTURE0),
            a.useProgram(i.prog),
            a.uniformMatrix4fv(
              i.unif_skinTexTransform,
              !1,
              s(n.dataWidth, n.dataHeight, e, t, n.uvTransform, r)
            ),
            a.uniform1i(i.unif_skinSampler, 0),
            a.bindTexture(a.TEXTURE_2D, n.texture),
            a.bindBuffer(a.ARRAY_BUFFER, o),
            a.vertexAttribPointer(i.attr_position, 3, a.FLOAT, !1, 20, 0),
            a.enableVertexAttribArray(i.attr_position),
            a.vertexAttribPointer(i.attr_texCoord, 2, a.FLOAT, !1, 20, 12),
            a.enableVertexAttribArray(i.attr_texCoord),
            a.drawArrays(a.TRIANGLES, 0, 6),
            a.disableVertexAttribArray(i.attr_position),
            a.disableVertexAttribArray(i.attr_texCoord),
            a.bindTexture(a.TEXTURE_2D, null),
            a.bindBuffer(a.ARRAY_BUFFER, null),
            a.useProgram(null);
        }
        _getCameraShader(e) {
          if (this._shader) return this._shader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let n = r.compileShader(e, e.VERTEX_SHADER, i),
            a = r.compileShader(e, e.FRAGMENT_SHADER, o);
          e.attachShader(t, n), e.attachShader(t, a), r.linkProgram(e, t);
          let s = e.getUniformLocation(t, "skinTexTransform");
          if (!s)
            throw new Error("Unable to get uniform location skinTexTransform");
          let u = e.getUniformLocation(t, "skinSampler");
          if (!u) throw new Error("Unable to get uniform location skinSampler");
          return (
            (this._shader = {
              prog: t,
              unif_skinTexTransform: s,
              unif_skinSampler: u,
              attr_position: e.getAttribLocation(t, "position"),
              attr_texCoord: e.getAttribLocation(t, "texCoord"),
            }),
            this._shader
          );
        }
      };
      let i =
          "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nattribute vec4 position;\nattribute vec4 texCoord;\nvarying vec4 skinTexVarying;\nuniform mat4 skinTexTransform;\n\nvoid main()\n{\n    gl_Position = position;\n    skinTexVarying = skinTexTransform * texCoord;\n}",
        o =
          "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying vec4 skinTexVarying;\nuniform lowp sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2DProj(skinSampler, skinTexVarying);\n}";
      function s(e, t, n, r, i, o) {
        let s = a.mat4.create(),
          u = a.mat4.create();
        a.mat4.fromTranslation(u, [-0.5, -0.5, 0]),
          a.mat4.multiply(s, u, s),
          o && (a.mat4.fromScaling(u, [-1, 1, 1]), a.mat4.multiply(s, u, s)),
          a.mat4.fromRotation(
            u,
            (-1 *
              (function () {
                if (window.screen.orientation)
                  switch (window.screen.orientation.type) {
                    case "portrait-primary":
                      return 270;
                    case "landscape-secondary":
                      return 180;
                    case "portrait-secondary":
                      return 90;
                    default:
                      return 0;
                  }
                else if (void 0 !== window.orientation)
                  switch (window.orientation) {
                    case 0:
                      return 270;
                    case 90:
                      return 0;
                    case 180:
                      return 90;
                    case -90:
                      return 180;
                  }
                return 0;
              })() *
              Math.PI) /
              180,
            [0, 0, 1]
          ),
          a.mat4.multiply(s, u, s);
        let c = a.vec3.create();
        (c[0] = n), (c[1] = r), (c[2] = 0), a.vec3.transformMat4(c, c, u);
        let f = Math.abs(c[0]),
          _ = Math.abs(c[1]);
        a.mat4.fromScaling(u, [1, -1, 1]), a.mat4.multiply(s, u, s);
        let l = f / _,
          d = e / t;
        return (
          l > d
            ? a.mat4.fromScaling(u, [1, d / l, 1])
            : a.mat4.fromScaling(u, [l / d, 1, 1]),
          a.mat4.multiply(s, u, s),
          a.mat4.fromTranslation(u, [0.5, 0.5, 0]),
          a.mat4.multiply(s, u, s),
          a.mat4.multiply(s, i, s),
          s
        );
      }
      t.cameraFrameTextureMatrix = s;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FaceDraw = void 0);
      const r = n(2);
      t.FaceDraw = class {
        constructor(e) {
          this._gl = e;
        }
        dispose() {
          this._vbo && this._gl.deleteBuffer(this._vbo),
            this._normalbo && this._gl.deleteBuffer(this._normalbo),
            this._ibo && this._gl.deleteBuffer(this._ibo),
            this._shader && this._gl.deleteProgram(this._shader.prog),
            (this._vbo = void 0),
            (this._normalbo = void 0),
            (this._ibo = void 0),
            (this._shader = void 0);
        }
        _generateIBO(e, t) {
          if (this._ibo && this._lastIndices === e) return this._ibo;
          if (
            ((this._lastIndices = e),
            this._ibo || (this._ibo = t.createBuffer()),
            !this._ibo)
          )
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
            this._ibo
          );
        }
        _generateVBO(e, t) {
          if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._vbo
          );
        }
        _generateNormalBO(e, t) {
          if (
            (this._normalbo || (this._normalbo = t.createBuffer()),
            !this._normalbo)
          )
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._normalbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._normalbo
          );
        }
        drawFace(e, t) {
          let n = this._gl,
            r = this._getShader(n),
            a = this._generateVBO(t.getVertices(), n),
            i = this._generateNormalBO(t.getNormals(), n),
            o = this._generateIBO(t.getIndices(), n);
          n.enable(n.DEPTH_TEST),
            n.enable(n.CULL_FACE),
            n.useProgram(r.prog),
            n.uniformMatrix4fv(r.unif_matrix, !1, e),
            n.bindBuffer(n.ARRAY_BUFFER, a),
            n.vertexAttribPointer(r.attr_position, 3, n.FLOAT, !1, 12, 0),
            n.enableVertexAttribArray(r.attr_position),
            n.bindBuffer(n.ARRAY_BUFFER, i),
            n.vertexAttribPointer(r.attr_normal, 3, n.FLOAT, !1, 12, 0),
            n.enableVertexAttribArray(r.attr_normal),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, o),
            n.drawElements(
              n.TRIANGLES,
              t.getIndices().length,
              n.UNSIGNED_SHORT,
              0
            ),
            n.disableVertexAttribArray(r.attr_position),
            n.disableVertexAttribArray(r.attr_normal),
            n.bindBuffer(n.ARRAY_BUFFER, null),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null);
        }
        _getShader(e) {
          if (this._shader) return this._shader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let n = r.compileShader(e, e.VERTEX_SHADER, a),
            o = r.compileShader(e, e.FRAGMENT_SHADER, i);
          e.attachShader(t, n), e.attachShader(t, o), r.linkProgram(e, t);
          let s = e.getUniformLocation(t, "matrix");
          if (!s) throw new Error("Unable to get uniform location mattrix");
          return (
            (this._shader = {
              prog: t,
              unif_matrix: s,
              attr_position: e.getAttribLocation(t, "position"),
              attr_normal: e.getAttribLocation(t, "normal"),
            }),
            this._shader
          );
        }
      };
      let a =
          "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nattribute vec4 position;\nattribute vec3 normal;\nvarying highp vec3 vnormal;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vnormal = normal;\n}",
        i =
          "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying vec4 skinTexVarying;\nvarying highp vec3 vnormal;\nuniform lowp sampler2D skinSampler;\n\nvoid main()\n{\n    vec3 normal2 = 0.5 * vnormal + 0.5;\n    gl_FragColor = vec4(normal2.x , normal2.y, normal2.z, 1.0);\n}";
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FaceDrawProject = void 0);
      const r = n(2);
      t.FaceDrawProject = class {
        constructor(e) {
          this._gl = e;
        }
        dispose() {
          this._vbo && this._gl.deleteBuffer(this._vbo),
            this._uvbo && this._gl.deleteBuffer(this._uvbo),
            this._ibo && this._gl.deleteBuffer(this._ibo),
            this._shader && this._gl.deleteProgram(this._shader.prog),
            (this._vbo = void 0),
            (this._uvbo = void 0),
            (this._ibo = void 0),
            (this._shader = void 0);
        }
        _generateIBO(e, t) {
          if (this._ibo && this._lastIndices === e) return this._ibo;
          if (
            ((this._lastIndices = e),
            this._ibo || (this._ibo = t.createBuffer()),
            !this._ibo)
          )
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
            this._ibo
          );
        }
        _generateVBO(e, t) {
          if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._vbo
          );
        }
        _generateUVBO(e, t) {
          if ((this._uvbo || (this._uvbo = t.createBuffer()), !this._uvbo))
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._uvbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._uvbo
          );
        }
        drawFace(e, t, n, r, a, i) {
          let o = this._gl,
            s = this._getShader(o),
            u = this._generateVBO(t, o),
            c = this._generateUVBO(r, o),
            f = this._generateIBO(a, o);
          o.enable(o.DEPTH_TEST),
            o.enable(o.CULL_FACE),
            o.useProgram(s.prog),
            o.uniformMatrix4fv(s.unif_matrix, !1, e),
            o.uniformMatrix4fv(s.unif_uvmatrix, !1, n),
            o.activeTexture(o.TEXTURE0),
            o.bindTexture(o.TEXTURE_2D, i),
            o.uniform1i(s.unif_sampler, 0),
            o.bindBuffer(o.ARRAY_BUFFER, u),
            o.vertexAttribPointer(s.attr_position, 3, o.FLOAT, !1, 12, 0),
            o.enableVertexAttribArray(s.attr_position),
            o.bindBuffer(o.ARRAY_BUFFER, c),
            o.vertexAttribPointer(s.attr_uv, 3, o.FLOAT, !1, 12, 0),
            o.enableVertexAttribArray(s.attr_uv),
            o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, f),
            o.drawElements(o.TRIANGLES, 6912, o.UNSIGNED_SHORT, 0),
            o.disableVertexAttribArray(s.attr_position),
            o.disableVertexAttribArray(s.attr_uv),
            o.bindBuffer(o.ARRAY_BUFFER, null),
            o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, null);
        }
        _getShader(e) {
          if (this._shader) return this._shader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let n = r.compileShader(e, e.VERTEX_SHADER, a),
            o = r.compileShader(e, e.FRAGMENT_SHADER, i);
          e.attachShader(t, n), e.attachShader(t, o), r.linkProgram(e, t);
          let s = e.getUniformLocation(t, "matrix");
          if (!s) throw new Error("Unable to get uniform location matrix");
          let u = e.getUniformLocation(t, "uvmatrix");
          if (!u) throw new Error("Unable to get uniform location matrix");
          let c = e.getUniformLocation(t, "uSampler");
          if (!c) throw new Error("Unable to get uniform location sampler");
          return (
            (this._shader = {
              prog: t,
              unif_matrix: s,
              unif_sampler: c,
              unif_uvmatrix: u,
              attr_position: e.getAttribLocation(t, "position"),
              attr_uv: e.getAttribLocation(t, "uv"),
              attr_texturecoord: e.getAttribLocation(t, "aTextureCoord"),
            }),
            this._shader
          );
        }
      };
      let a =
          "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nuniform mat4 uvmatrix;\nattribute vec4 position;\nattribute vec3 normal;\nattribute vec3 uv;\n\n// varying highp vec3 vnormal;\n\nvarying highp vec2 vTextureCoord;\nvarying highp float vAlpha;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vec4 ret = uvmatrix * vec4(uv.x, uv.y, uv.z, 1.0);\n    ret.x /= ret.w * 2.0;\n    ret.y /= ret.w * 2.0;\n    ret.x += 0.5;\n    ret.y += 0.0;\n    vAlpha = 1.0;\n    vTextureCoord = ret.xy;\n}",
        i =
          "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nvarying highp vec3 vnormal;\nvarying highp float vAlpha;\nuniform lowp sampler2D uSampler;\n\nvoid main()\n{\n    // vec3 normal2 = 0.5 * vnormal + 0.5;\n    vec4 p = texture2D(uSampler, vTextureCoord);\n    p.a = vAlpha;\n    gl_FragColor = p; // vec4(normal2.x , normal2.y, normal2.z, 1.0);\n}";
    },
    function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (a, i) {
            function o(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CameraSource = void 0);
      const a = n(10),
        i = n(11),
        o = n(5),
        s = n(4),
        u = n(1);
      let c = 1,
        f = new Map(),
        _ = document.createElement("video");
      _.setAttribute("playsinline", ""),
        _.setAttribute("webkit-playsinline", ""),
        i.profile.videoElementInDOM &&
          ((_.style.width = "0px"),
          (_.style.height = "0px"),
          document.body.appendChild(_));
      class l extends a.HTMLElementSource {
        constructor(e, t, n) {
          super(_, t),
            (this._impl = e),
            (this._deviceId = n),
            (this._currentStream = null),
            (this._activeDeviceId = null),
            (this._hasStartedOrientation = !1),
            (this._deviceMotionListener = (e) => {
              let t = o.Pipeline.get(this._pipeline);
              if (!t) return;
              let n =
                void 0 !== e.timeStamp && null !== e.timeStamp
                  ? e.timeStamp
                  : performance.now();
              null !== e.accelerationIncludingGravity &&
                null !== e.accelerationIncludingGravity.x &&
                null !== e.accelerationIncludingGravity.y &&
                null !== e.accelerationIncludingGravity.z &&
                t.motionAccelerometerSubmit(
                  n,
                  e.accelerationIncludingGravity.x *
                    i.profile.deviceMotionMutliplier,
                  e.accelerationIncludingGravity.y *
                    i.profile.deviceMotionMutliplier,
                  e.accelerationIncludingGravity.z *
                    i.profile.deviceMotionMutliplier
                ),
                null === e.rotationRate ||
                null === e.rotationRate.alpha ||
                null === e.rotationRate.beta ||
                null === e.rotationRate.gamma ||
                this._hasStartedOrientation
                  ? this._hasStartedOrientation ||
                    this._startDeviceOrientation()
                  : (e.timeStamp,
                    t.motionRotationRateSubmit(
                      n,
                      (e.rotationRate.alpha * Math.PI) / -180,
                      (e.rotationRate.beta * Math.PI) / -180,
                      (e.rotationRate.gamma * Math.PI) / -180
                    ));
            });
        }
        static create(e, t) {
          let n = c++;
          return (
            f.set(n, new l(n, e, t)), u.zcout("camera_source_t initialized"), n
          );
        }
        static get(e) {
          return f.get(e);
        }
        destroy() {
          f.delete(this._impl), super.destroy();
        }
        _stop() {
          if (!this._currentStream) return;
          this._currentStream.getTracks().forEach((e) => e.stop()),
            (this._currentStream = null);
        }
        pause() {
          super.pause(), this._stopDeviceMotion(), this._syncCamera();
        }
        start() {
          super.start(), this._startDeviceMotion(), this._syncCamera();
        }
        _getConstraints() {
          return r(this, void 0, void 0, function* () {
            let e, t;
            this._deviceId !== l.DEFAULT_DEVICE_ID &&
            this._deviceId !== l.USER_DEFAULT_DEVICE_ID
              ? (e = this._deviceId)
              : (t =
                  this._deviceId === l.DEFAULT_DEVICE_ID
                    ? "environment"
                    : "user");
            let n = {
              audio: !1,
              video: {
                facingMode: t,
                width: i.profile.videoWidth,
                height: i.profile.videoHeight,
                frameRate: i.profile.requestHighFrameRate ? 60 : void 0,
                deviceId: e,
              },
            };
            if (e) return n;
            if (
              !navigator.mediaDevices ||
              !navigator.mediaDevices.enumerateDevices
            )
              return n;
            let r = yield navigator.mediaDevices.enumerateDevices(),
              a = !1;
            return (
              (r = r.filter((e) => {
                if ("videoinput" !== e.kind) return !1;
                if (e.getCapabilities) {
                  a = !0;
                  let n = e.getCapabilities();
                  if (
                    n &&
                    n.facingMode &&
                    n.facingMode.indexOf(
                      "user" === t ? "user" : "environment"
                    ) < 0
                  )
                    return !1;
                }
                return !0;
              })),
              a && 0 !== r.length
                ? ("object" == typeof n.video &&
                    (u.zcout("choosing device ID", r[r.length - 1].deviceId),
                    (n.video.deviceId = r[r.length - 1].deviceId)),
                  n)
                : n
            );
          });
        }
        getFrame(e) {
          return (
            (this._cameraToScreenRotation =
              s.cameraRotationForScreenOrientation(!1)),
            super.getFrame(e)
          );
        }
        _getUserMedia() {
          return r(this, void 0, void 0, function* () {
            let e = yield this._getConstraints();
            return navigator.mediaDevices && navigator.mediaDevices.getUserMedia
              ? yield navigator.mediaDevices.getUserMedia(e)
              : yield new Promise((t, n) => {
                  navigator.getUserMedia(e, t, n);
                });
          });
        }
        _syncCamera() {
          return r(this, void 0, void 0, function* () {
            if (this._currentStream && this._isPaused) this._stop();
            else if (
              (this._currentStream &&
                this._activeDeviceId !== this._deviceId &&
                this._stop(),
              !this._isPaused)
            ) {
              if (
                ((this._activeDeviceId = this._deviceId),
                (this._currentStream = yield this._getUserMedia()),
                this._isPaused)
              )
                return void (yield this._syncCamera());
              if (((this._isUserFacing = !1), this._currentStream)) {
                let e = this._currentStream.getVideoTracks();
                e.length > 0 &&
                  (this._isUserFacing =
                    "user" === e[0].getSettings().facingMode);
              }
              if (!(this._video instanceof HTMLVideoElement)) return;
              (this._video.src = ""),
                (this._video.loop = !1),
                (this._video.muted = !0),
                (this._video.srcObject = this._currentStream),
                this._video.play();
            }
          });
        }
        _startDeviceOrientation() {
          this._hasStartedOrientation ||
            ((this._hasStartedOrientation = !0),
            window.addEventListener("deviceorientation", (e) => {
              let t = o.Pipeline.get(this._pipeline);
              if (!t) return;
              let n =
                void 0 !== e.timeStamp && null !== e.timeStamp
                  ? e.timeStamp
                  : performance.now();
              null !== e.alpha &&
                null !== e.beta &&
                null !== e.gamma &&
                t.motionAttitudeSubmit(n, e.alpha, e.beta, e.gamma);
            }));
        }
        _startDeviceMotion() {
          window.addEventListener(
            "devicemotion",
            this._deviceMotionListener,
            !1
          );
        }
        _stopDeviceMotion() {
          window.removeEventListener(
            "devicemotion",
            this._deviceMotionListener
          );
        }
      }
      (t.CameraSource = l),
        (l.USER_DEFAULT_DEVICE_ID =
          "Simulated User Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b"),
        (l.DEFAULT_DEVICE_ID =
          "Simulated Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b");
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Source = void 0);
      t.Source = class {};
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FaceLandmark =
          t.getFaceLandmark =
          t.destroyFaceLandmark =
          t.createFaceLandmark =
            void 0);
      const r = n(0),
        a = n(32),
        i = n(1);
      let o = 1,
        s = new Map();
      (t.createFaceLandmark = function (e) {
        let t = o++;
        return s.set(t, new u(e)), i.zcout("face_landmark_t initialized"), t;
      }),
        (t.destroyFaceLandmark = function (e) {
          s.delete(e);
        }),
        (t.getFaceLandmark = function (e) {
          return s.get(e);
        });
      class u {
        constructor(e) {
          (this._name = e), (this.anchor_pose = r.mat4.create());
        }
        _getVertex(e, t, n) {
          let r = n.mean.slice();
          for (let t = 0; t < 50; t++)
            (r[0] += e[t] * n.identity[3 * t + 0]),
              (r[1] += e[t] * n.identity[3 * t + 1]),
              (r[2] += e[t] * n.identity[3 * t + 2]);
          for (let e = 0; e < 29; e++)
            (r[0] += t[e] * n.expression[3 * e + 0]),
              (r[1] += t[e] * n.expression[3 * e + 1]),
              (r[2] += t[e] * n.expression[3 * e + 2]);
          return r;
        }
        update(e, t, n) {
          let i,
            o = a.landmarkData[this._name.toString()];
          if (o) {
            if (Array.isArray(o)) {
              i = this._getVertex(e, t, o[0]);
              let n = this._getVertex(e, t, o[1]);
              (i[0] = 0.5 * (i[0] + n[0])),
                (i[1] = 0.5 * (i[1] + n[1])),
                (i[2] = 0.5 * (i[2] + n[2]));
            } else i = this._getVertex(e, t, o);
            n && (i[0] *= -1), r.mat4.fromTranslation(this.anchor_pose, i);
          }
        }
      }
      t.FaceLandmark = u;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.landmarkData = void 0),
        (t.landmarkData = {
          0: [
            {
              mean: [0.235, 0.2344, 0.7305],
              identity: [
                0.008, 0.0087, 0.0024, -0.0026, 6e-4, -0.0022, 5e-4, 0.0033,
                0.0026, 0.0017, -0.0055, -8e-4, 0.0011, 0.0059, 0, 2e-4, 0.001,
                -0.001, -0.0044, -0.0011, -1e-4, 0.0024, 0.0019, -9e-4, 4e-4,
                -0.0015, 0, 0.0038, 0.0013, 3e-4, 0.002, -0.0021, 0.0018,
                0.0023, 0.0011, 0.0012, -0.0011, -0.0017, 9e-4, -0.0012, -8e-4,
                7e-4, -0.0017, 0.0029, -0.0029, 8e-4, -0.0027, 8e-4, -0.0017,
                4e-4, 9e-4, -0.001, -3e-4, 8e-4, -0.0016, -3e-4, -7e-4, 0.0016,
                -9e-4, 0.0021, -5e-4, 0.0011, -0.0024, -1e-4, 6e-4, 1e-4,
                -0.0026, -4e-4, -3e-4, -9e-4, 5e-4, 3e-4, -8e-4, -0.001, -4e-4,
                -8e-4, 0.0022, -0.0014, -1e-4, -0.0023, 0, -0.0018, 7e-4,
                -0.0036, 0.0017, 0.0017, -0.0018, -2e-4, -4e-4, -9e-4, -8e-4,
                3e-4, 0.0012, 9e-4, -4e-4, -0.0016, 5e-4, -0.0013, 0.0011,
                0.0023, 0.0029, 0.0024, 0.0017, -0.0027, -4e-4, -0.001, -0.0018,
                -0.0015, -0.001, 0.001, -0.0013, -1e-4, -2e-4, 7e-4, 3e-4, 3e-4,
                -0.0016, 9e-4, -0.0021, 4e-4, 0.0014, 0.002, -7e-4, -4e-4, 2e-4,
                -4e-4, -6e-4, -9e-4, 0.0015, 4e-4, -4e-4, 5e-4, -0.0015, 9e-4,
                3e-4, 3e-4, -2e-4, -8e-4, -9e-4, 0.0023, 4e-4, 1e-4, -4e-4,
                -1e-4, 7e-4, 2e-4, 0.001, 1e-4, -0.0029, -5e-4,
              ],
              expression: [
                0, 3e-4, 0.0052, -7e-4, -0.0051, -0.0103, 0, 0.0019, 0.0027,
                -0.0054, 0.0135, 0.035, -5e-4, -6e-4, 0.0025, -0.0045, -0.0557,
                -0.003, -0.0191, -0.1199, 0.0548, -0.0036, -0.0682, -0.0167,
                2e-4, -0.0085, -0.0085, 0.0044, 0.0041, -0.0568, 0.0044, 0.179,
                0.0065, -0.0017, -0.1006, 0.0036, -0.0267, -0.3279, 0.0301,
                -0.0011, -0.0173, -0.001, 0.0046, 0.2808, 0.0207, 0.0162, 0.238,
                -0.0225, 0.0017, 0.1041, 0.0203, 5e-4, 0.0161, 0.0031, -0.0436,
                0.6504, 0.0873, -0.0099, 0.1039, 0.0048, -0.0254, 0.2534,
                -0.0042, 0.003, -0.0106, -0.0153, -0.0118, 0.0252, 9e-4,
                -0.0071, 0.0099, 0.007, -0.0724, 0.0461, -0.0235, 0.0833, 0.004,
                0.0141, -0.0219, 0.0132, -0.0042, -0.0179, 0.0045, -0.0215,
                0.3638, 0.0054, -0.0445,
              ],
            },
            {
              mean: [0.2358, 0.1466, 0.7183],
              identity: [
                0.0077, 0.0093, 1e-4, -0.0022, 0, -0.0041, 5e-4, 0.0022, 0.0028,
                0.0018, -0.0038, -0.0013, 0.001, 0.0044, -2e-4, 0, 0.0017,
                -0.0016, -0.0043, -2e-4, -1e-4, 0.0023, 9e-4, 5e-4, -7e-4,
                -4e-4, -0.0017, 0.003, 7e-4, 6e-4, 0.0011, -0.0018, 5e-4,
                0.0018, -8e-4, 4e-4, -0.0023, -6e-4, -3e-4, -0.0015, -0.0014,
                -1e-4, -0.0018, 0.0027, -0.0026, 3e-4, -0.0031, 0.0011, -0.0026,
                -0.0011, 0.0012, -0.0013, -2e-4, 7e-4, -0.0021, 0.0021, 4e-4,
                0.0012, -0.001, 0.002, -3e-4, 2e-4, -0.0026, -3e-4, 0.001, 1e-4,
                -0.0018, -0.001, 9e-4, -0.0011, 0.001, 4e-4, -8e-4, -7e-4,
                -0.001, -3e-4, 7e-4, -5e-4, -6e-4, -0.0019, -5e-4, -0.002, 7e-4,
                -0.0027, 0.0014, 0.0013, 6e-4, -5e-4, -3e-4, -3e-4, -0.001, 0,
                0.0019, 1e-4, 6e-4, -0.0012, 4e-4, -9e-4, 4e-4, 0.0025, 3e-4,
                0.0024, 0.0017, -9e-4, -0.0015, -0.0015, -0.001, -0.0023,
                -0.001, -5e-4, -4e-4, 8e-4, 9e-4, 7e-4, 2e-4, 7e-4, -9e-4, 9e-4,
                -0.0013, 1e-4, 9e-4, 2e-4, 6e-4, -6e-4, -8e-4, -4e-4, -7e-4,
                8e-4, 0.0019, 3e-4, 0.0015, 2e-4, -0.0015, -3e-4, 0, 6e-4, 3e-4,
                6e-4, -6e-4, 2e-4, 5e-4, -4e-4, 0.0012, -4e-4, 2e-4, -8e-4,
                6e-4, -4e-4, 2e-4, -0.0021,
              ],
              expression: [
                -0.0034, 0.0054, 0.0069, 0.004, 6e-4, -0.0104, -3e-4, 0.0036,
                0.0025, 0.0065, 0.0296, 0.0208, -9e-4, 0.0154, 0.0029, -0.0167,
                0.0124, 0.004, -0.0102, 0.0351, 0.028, -0.019, 0.0146, -0.0035,
                -0.0023, -0.0069, -0.0051, -0.01, 0.0262, -0.028, 0.0112, 0.082,
                0.023, -0.0019, -0.066, -0.0104, -0.0408, 0.0164, 0.0075,
                -0.0074, 0.0367, 0.0041, 0.0517, -0.0207, 0.0045, 0.0291,
                -0.0672, -0.0129, 0.0345, -0.1558, -0.0106, 0.0037, -0.0437,
                -0.0021, 0.0854, -0.1121, 0.0187, 0.0041, 0.0072, 0.0011,
                0.0193, -0.0143, -0.0119, 0.005, -0.02, -0.0122, -0.008, 0.0527,
                0.0036, -0.006, 0.0222, 0.007, -0.0429, 0.046, -0.0046, 0.0226,
                -0.0059, 0.0202, -0.0173, 0.0087, 0, -0.0067, -0.0095, -0.0153,
                0.1506, -0.0017, 0.0021,
              ],
            },
          ],
          1: [
            {
              mean: [-0.2271, 0.2323, 0.7319],
              identity: [
                -0.0084, 0.0097, 0.0018, 0.0041, 2e-4, -0.002, -0.0012, 0.0036,
                0.0019, -9e-4, -0.0063, -0.001, -3e-4, 0.0053, 6e-4, 1e-4, 5e-4,
                -0.0015, 0.0044, -0.0025, -0.0015, -0.002, 0.0016, -6e-4, 2e-4,
                -0.0013, 0, -0.0022, 2e-4, 2e-4, -0.0025, -0.0014, 0.0015, 8e-4,
                2e-4, 0.0012, 6e-4, -6e-4, 0.0017, 0, 3e-4, -1e-4, 0.0024,
                0.0025, -0.0029, -0.0015, -0.0015, 1e-4, 0.0031, -0.0016, 7e-4,
                0.0019, 6e-4, 0.002, 9e-4, 0.001, -0.0014, -0.002, -0.0015,
                0.0029, 1e-4, 5e-4, -0.0023, 8e-4, -0.0011, 0.0019, 0.0017,
                -3e-4, -0.0011, -3e-4, 0.0011, -8e-4, 0.0019, -0.0022, 1e-4,
                0.0015, 0.0017, -8e-4, -0.0011, -0.0022, 3e-4, 0.0022, 6e-4,
                -0.003, -2e-4, 0, -0.0017, -2e-4, 0, 1e-4, 4e-4, 0.0012, 0.0019,
                -0.0014, 4e-4, -0.0017, -0.0012, -0.0011, 0.0021, -0.0029,
                0.0026, 0.0018, -0.0023, -0.0029, 1e-4, 0.0014, -0.0019, -4e-4,
                -4e-4, 0.0023, -0.0016, 0, -9e-4, 0.0014, -0.0015, 0.0015,
                -0.0016, -0.0011, -0.0022, 1e-4, -0.0018, 0.0027, -0.0013, 4e-4,
                -1e-4, -5e-4, 0.0011, -2e-4, 0.0015, 5e-4, -9e-4, -1e-4, 0.0029,
                6e-4, 0, -3e-4, 7e-4, -8e-4, -5e-4, 0.0025, 3e-4, 2e-4, -8e-4,
                -1e-4, 3e-4, 0, 0.0014, 2e-4, -0.0024, 1e-4,
              ],
              expression: [
                -0.0025, -9e-4, 0.006, 0.004, -0.0027, -0.0113, -8e-4, 0.001,
                0.0031, -0.0016, 0.0144, 0.0382, -3e-4, -5e-4, 0.0035, -0.0044,
                -0.0511, -0.0014, -7e-4, -0.1007, 0.0582, -6e-4, -0.0606,
                -0.0165, 5e-4, -0.0087, -0.0093, 0.0036, 0.0057, -0.0576,
                -0.0039, 0.1488, 0.0127, 0.0016, -0.0666, -9e-4, -0.0153,
                0.3162, -0.0445, -0.0021, 0.0023, 0.0043, -0.0033, 0.2382,
                0.0063, -0.0217, 0.167, -0.039, 0.0097, -0.1144, -0.0189,
                -0.0145, 0.6831, 0.0632, -0.0012, -0.1959, -0.0133, 4e-4,
                0.1108, -3e-4, 0.0062, 0.2593, -0.0161, -0.0018, -0.0051,
                -0.012, 0.0162, 0.016, -0.0022, -0.0052, -0.0201, 0.0101,
                0.0115, 0.0365, -0.024, -0.0059, 0.0188, -0.0336, 0.0352,
                0.0224, -0.0229, 0.0146, 0.0086, -0.0273, -0.0032, 0.0103,
                -0.0112,
              ],
            },
            {
              mean: [-0.2288, 0.1541, 0.7202],
              identity: [
                -0.0082, 0.0101, 2e-4, 0.0036, -7e-4, -0.0037, -8e-4, 0.0024,
                0.0022, -0.0013, -0.0045, -0.0013, -6e-4, 0.0045, -4e-4, 4e-4,
                0.0012, -0.0014, 0.0042, -0.001, -7e-4, -0.0019, 3e-4, -2e-4,
                0.0012, -4e-4, -0.0012, -0.0018, -4e-4, -1e-4, -0.0014, -0.0012,
                1e-4, 1e-4, -0.0017, 0.001, 0.0015, -1e-4, 6e-4, 1e-4, 0, -6e-4,
                0.0028, 0.0021, -0.0025, -0.002, -0.0015, 7e-4, 0.0028, -0.0023,
                9e-4, 0.0013, 1e-4, 0.0016, 0.0012, 0.0032, -6e-4, -0.0013,
                -0.0011, 0.0021, 3e-4, -5e-4, -0.0024, 4e-4, -4e-4, 0.0014,
                0.0015, -8e-4, -3e-4, 3e-4, 0.0017, -6e-4, 0.002, -0.0018,
                -3e-4, 9e-4, 1e-4, 2e-4, -6e-4, -0.0015, -4e-4, 0.0022, 7e-4,
                -0.0023, 0, -2e-4, -2e-4, -3e-4, -1e-4, 6e-4, -2e-4, 6e-4,
                0.0022, -3e-4, 0.0013, -0.0014, -5e-4, -3e-4, 0.0013, -0.0027,
                6e-4, 0.0025, -0.0023, -8e-4, -0.0013, 0.0017, -9e-4, -0.0019,
                1e-4, 8e-4, -7e-4, -4e-4, 0, 0.001, -0.001, 0.0019, -8e-4,
                -0.0015, -6e-4, -2e-4, -0.0011, 8e-4, 1e-4, 9e-4, -8e-4, -4e-4,
                6e-4, 7e-4, 0.0021, -4e-4, 7e-4, -5e-4, 0.0021, -7e-4, -4e-4,
                -9e-4, 8e-4, 3e-4, 1e-4, 3e-4, 1e-4, 9e-4, 0.001, -5e-4, 5e-4,
                -0.001, 0.001, 4e-4, -5e-4, -0.0012,
              ],
              expression: [
                8e-4, 0.0037, 0.0078, -4e-4, 5e-4, -0.012, -2e-4, -0.0046,
                0.0033, -0.0089, 0.0295, 0.0221, -0.0024, -0.0084, 0.0013,
                0.0057, 0.0125, 0.0049, -0.0036, 0.0373, 0.0285, 0.0115, 0.0135,
                -0.0035, 0.0048, 0.0108, -0.0033, 0.0106, 0.0281, -0.0301,
                -0.0082, 0.0803, 0.0244, -7e-4, -0.0725, -0.0105, -0.0247,
                -0.0036, -0.0143, -0.0045, -0.029, 2e-4, -0.0303, 0.0093,
                -0.0021, -0.0196, -0.0754, -0.0211, 0.0326, 0.1246, 0.006,
                -0.0804, -0.1499, 0.0109, 0.0182, -0.0029, -0.0014, -0.0035,
                0.0072, -8e-4, -0.0152, -0.0108, -0.0166, -0.0073, -0.0144,
                -0.0095, 0.0101, 0.047, -0.0018, -0.004, -0.0189, 0.0027,
                0.0104, 0.0298, -0.0042, -0.0096, 0.0191, -0.0217, 0.0228,
                0.0226, -0.0105, 0.0047, -0.0048, -0.0172, 0.0061, -0.0043,
                -0.0016,
              ],
            },
          ],
          2: {
            mean: [0.5396, 0.2028, 0.2496],
            identity: [
              0.0204, 0.0146, -0.0182, -0.0052, 0.0158, -0.0038, -0.0025,
              -0.0108, -0.006, 0.0085, -0.0044, 0.0029, 0.0042, 0.001, 0.0095,
              0.0015, -0.0034, -0.0064, -0.0057, 7e-4, 0.0026, 7e-4, 0.0037,
              -6e-4, 0.0037, 0.0026, 0.0024, 5e-4, -0.0019, -0.0013, 0.003,
              -0.0028, 0.0018, -9e-4, 0.002, -0.0047, 0.004, -0.003, 0.0031,
              -0.0027, -0.0026, -0.0017, 0.0016, 0.0014, -4e-4, 0.0021, -0.002,
              0, 0.0017, 7e-4, -4e-4, -7e-4, -0.0018, -9e-4, 2e-4, -0.0012,
              1e-4, -5e-4, -0.0011, 4e-4, 2e-4, 0.0011, 1e-4, 8e-4, 0.0017,
              -0.0013, 0.0025, 0.0017, 0.001, 2e-4, 3e-4, 5e-4, -4e-4, -1e-4,
              -5e-4, 7e-4, -0.0022, -0.0029, 6e-4, -8e-4, -6e-4, 6e-4, -5e-4,
              5e-4, 0.0013, 3e-4, -5e-4, -0.003, 7e-4, 2e-4, 0.0016, -4e-4, 0,
              0, 4e-4, 1e-4, 0.0014, 0.0012, 1e-4, 4e-4, -1e-4, 8e-4, 9e-4,
              4e-4, -4e-4, 9e-4, -2e-4, 0.001, 9e-4, 4e-4, 1e-4, 7e-4, 7e-4,
              0.001, -0.0017, -8e-4, 2e-4, 0.0017, -3e-4, -1e-4, 4e-4, 5e-4,
              7e-4, 5e-4, -1e-4, -6e-4, -1e-4, 1e-4, -3e-4, -7e-4, -2e-4, -5e-4,
              0, -3e-4, 3e-4, 8e-4, -2e-4, -3e-4, 5e-4, 1e-4, -7e-4, -0.001,
              -2e-4, 3e-4, 4e-4, -1e-4, 7e-4, 0, 4e-4, 4e-4,
            ],
            expression: [
              1e-4, -4e-4, 1e-4, 0, 5e-4, 2e-4, 0, 0, 3e-4, -2e-4, 3e-4, 5e-4,
              -1e-4, 2e-4, 8e-4, 1e-4, -2e-4, -5e-4, -3e-4, 6e-4, 5e-4, 0, 1e-4,
              2e-4, 1e-4, -1e-4, -6e-4, -2e-4, 5e-4, 0, -4e-4, 4e-4, 0.0016,
              4e-4, -4e-4, -0.0015, 0, 1e-4, 1e-4, -3e-4, 3e-4, 0.0019, -2e-4,
              7e-4, 4e-4, 4e-4, -8e-4, -0.0015, 0.0013, -0.0016, -0.0069, 4e-4,
              -6e-4, -0.0019, 0, -1e-4, 5e-4, -3e-4, 2e-4, 0.0014, -3e-4, 6e-4,
              0.0011, 4e-4, -3e-4, -0.0032, -6e-4, 8e-4, 0.0025, -3e-4, 3e-4,
              0.0015, -1e-4, 1e-4, 3e-4, -1e-4, 0, 0, -3e-4, 4e-4, 0.0019, 1e-4,
              0, -8e-4, -1e-4, 1e-4, 5e-4,
            ],
          },
          3: {
            mean: [-0.5464, 0.2141, 0.26],
            identity: [
              -0.0207, 0.0172, -0.0176, 0.0068, 0.0148, -0.0051, 0.0042,
              -0.0101, -0.0058, -0.0087, -0.0059, 0.0045, -0.0056, 0.0017,
              0.0097, -0.0048, -0.004, -0.0044, 0.0019, 2e-4, 0.0041, -0.0052,
              0.0041, 2e-4, -0.0027, 6e-4, 0.002, -0.0027, -0.0033, -6e-4,
              -0.004, 9e-4, -0.0012, -1e-4, -0.0026, 0.0021, -0.003, -0.0025,
              0.0052, 0.0025, 0.0022, -1e-4, -8e-4, 0.0013, 0.001, 4e-4, 0.0018,
              0.0014, 6e-4, -5e-4, -0.0015, -0.0039, 0.0014, -1e-4, 8e-4, -2e-4,
              6e-4, -5e-4, -0.0038, -0.0012, -0.0018, -3e-4, 0.001, 9e-4,
              0.0012, 0.0024, -0.0024, -7e-4, -0.0016, -0.0016, 3e-4, -0.001,
              -0.0014, -0.0014, 0.001, -3e-4, -7e-4, -0.0012, 3e-4, 6e-4, 3e-4,
              -5e-4, 3e-4, 0.0012, 6e-4, -8e-4, 4e-4, 4e-4, 8e-4, -2e-4,
              -0.0014, 3e-4, 0, 0.0023, -3e-4, -0.0012, -0.0013, 0.0011, -2e-4,
              -0.0014, -1e-4, 0.0014, 0, 3e-4, 3e-4, -8e-4, -5e-4, -7e-4, -7e-4,
              -2e-4, 3e-4, 5e-4, 2e-4, -1e-4, 0.0011, -0.0014, 1e-4, -0.0015,
              -1e-4, -3e-4, 0, -0.001, -1e-4, -8e-4, 8e-4, -8e-4, -2e-4,
              -0.0011, -3e-4, -4e-4, 1e-4, -2e-4, 3e-4, -7e-4, 0, 3e-4, 1e-4,
              -8e-4, 5e-4, 1e-4, 4e-4, 0.0014, -6e-4, -0.001, -3e-4, -2e-4,
              1e-4, -1e-4, -1e-4, 7e-4,
            ],
            expression: [
              -3e-4, -1e-4, 6e-4, 4e-4, 0, -7e-4, 0, -3e-4, -2e-4, -4e-4,
              0.0012, 8e-4, 1e-4, -5e-4, -7e-4, -4e-4, 0, 1e-4, -4e-4, 0.0017,
              7e-4, 0, 1e-4, 3e-4, 0, 4e-4, 4e-4, 5e-4, 1e-4, -0.001, -7e-4,
              0.0022, 0.0026, 5e-4, -0.0024, -0.0023, 0, 1e-4, 3e-4, 0, -0.0013,
              -0.0015, 6e-4, 0.0014, 8e-4, -2e-4, -0.0025, -0.0023, -3e-4,
              0.0049, 0.006, -2e-4, -7e-4, -2e-4, 0, -0.0019, -0.0018, -2e-4,
              0.0017, 0.0017, 3e-4, 0.0015, 7e-4, 1e-4, -0.0023, -0.0036, 2e-4,
              0.0023, 0.0017, 0, -5e-4, -3e-4, -3e-4, 4e-4, 2e-4, -1e-4, -3e-4,
              -5e-4, 1e-4, 0.0018, 0.0025, 1e-4, -6e-4, -0.0011, 0, 1e-4, 1e-4,
            ],
          },
          4: {
            mean: [0.0018, 0.1864, 0.853],
            identity: [
              -0.0011, 0.0134, 0.0085, 9e-4, -0.0025, -7e-4, -3e-4, 0.0033,
              4e-4, -5e-4, -0.0047, -0.002, 7e-4, 0.0026, -0.0069, -1e-4,
              0.0036, 0.0072, 5e-4, -8e-4, -0.0047, 4e-4, -8e-4, -0.001, 0,
              2e-4, -0.0036, -2e-4, -0.001, -0.0048, -1e-4, 0.0018, 0.0044,
              -7e-4, -2e-4, 0.0043, 3e-4, 0.002, -0.0031, 0, -7e-4, 0.0013, 0,
              0.0037, 0.0033, -0.0016, -0.0012, 0.002, -1e-4, -0.0027, 0.0051,
              5e-4, 8e-4, 7e-4, -0.0017, 0.0054, 0.0023, -3e-4, 0.0032, 1e-4, 0,
              7e-4, -5e-4, -0.0011, 2e-4, 8e-4, 0, -0.0033, -8e-4, -7e-4, 7e-4,
              0.0033, 5e-4, -3e-4, 0.0029, -1e-4, -0.0024, -0.0011, -0.002,
              -0.0015, -0.0019, 2e-4, 7e-4, 0.0031, 6e-4, 0.0012, 0, 0, -0.0021,
              0, -9e-4, -0.0011, -0.0011, -2e-4, 0.0015, 0.001, 0.0013, 8e-4,
              0.001, -3e-4, 9e-4, 0.0027, -2e-4, -0.0011, -0.0011, 6e-4, 7e-4,
              2e-4, 1e-4, -5e-4, -0.0022, 0.0011, -0.0014, 9e-4, 3e-4, 2e-4, 0,
              -6e-4, -4e-4, -0.0011, -7e-4, 0.001, -0.0012, 6e-4, -0.0012,
              -0.0015, 3e-4, -9e-4, -0.0013, -0.0013, 7e-4, 0.001, -0.0011,
              -0.0013, 0.0015, 4e-4, 1e-4, 4e-4, -1e-4, -0.0016, -0.0016, 9e-4,
              -7e-4, -0.0024, 5e-4, -1e-4, -0.0017, -2e-4, 3e-4, -9e-4,
            ],
            expression: [
              -0.0017, 0.0019, 0.0097, 0.003, -0.0103, -0.0093, 9e-4, 6e-4,
              0.0023, -0.0017, -0.0204, 0.0376, 0.0033, -0.0034, 0.0033,
              -0.0026, -0.0322, 0.0396, -0.0032, -0.0947, 0.0942, -7e-4,
              -0.0175, 0.0266, -0.001, -6e-4, 0.0016, 0.0025, 0.0157, -0.0142,
              -0.0022, 0.037, 0.015, 0.0021, -0.0102, -0.0107, 0.0036, 0.0055,
              -0.0051, 0.0021, 3e-4, -3e-4, 4e-4, -0.0177, 0.0074, -6e-4,
              -0.0357, 0.0149, -0.0066, 9e-4, 0.0013, -0.0031, 0.0016, 0.0095,
              0.002, 0.0052, 0.0035, -3e-4, 0.0053, -0.0082, 0.002, 0.0022,
              -0.0071, -0.0011, 5e-4, 0.0055, 0.0011, 3e-4, -0.0126, -4e-4,
              3e-4, -0.0023, -0.0015, 0.0059, 0.0063, -0.0042, -0.0023, 0.0055,
              0.0019, 0.0017, -0.0075, 6e-4, -8e-4, 0.0018, 0.0012, 0.0012,
              -5e-4,
            ],
          },
          5: {
            mean: [-0.002, -0.0469, 1.0039],
            identity: [
              -0.0017, 0.0018, 0.0156, 6e-4, -0.0038, 5e-4, 4e-4, 0.0013, 0.002,
              -4e-4, -0.0015, -0.0051, 5e-4, -7e-4, -0.0055, -1e-4, -9e-4,
              0.008, -2e-4, 0.0036, -0.0053, 4e-4, -0.0026, -0.0016, 7e-4, 9e-4,
              -0.009, -3e-4, 7e-4, -0.0084, 0.0015, 0.0021, 0.0032, -0.0015,
              0.0018, 0.0046, -3e-4, -4e-4, -1e-4, 8e-4, -0.0044, -7e-4, -8e-4,
              7e-4, 0.0048, -0.0024, -3e-4, 0.0024, 2e-4, -0.0051, 0.0058,
              -6e-4, 0.0028, 0.0018, -0.0021, 0.0035, 0.0057, 0.0011, 0.0065, 0,
              -2e-4, 0.0011, 0.003, -0.0027, 8e-4, 7e-4, 3e-4, -0.0039, -0.002,
              -2e-4, -0.0015, 0.0034, 0.0012, -0.0025, 0.0024, -2e-4, 4e-4,
              -0.0042, -0.0024, -0.001, -0.0023, 0.0016, -7e-4, 0.0039, 1e-4,
              -5e-4, 0.0018, 3e-4, -2e-4, -9e-4, -0.0015, 3e-4, -7e-4, -1e-4,
              -2e-4, 0.0023, 0.0032, 0.002, -0.0013, 0.0013, -0.0038, 0.0045,
              1e-4, -0.0031, 1e-4, 0.0019, -1e-4, 0.0016, 0.0013, 0, -0.002,
              0.0023, 2e-4, 0.0011, 0.0018, -0.0024, 6e-4, -0.0017, 0.002,
              -8e-4, -0.0021, 7e-4, 0.0011, 8e-4, 4e-4, -0.001, 0.0012, 2e-4,
              -6e-4, -0.0027, -5e-4, 0.001, -9e-4, 1e-4, -1e-4, 8e-4, -0.0011,
              0.0022, -0.001, -5e-4, -0.0011, 0.0016, -0.0015, 8e-4, -3e-4,
              9e-4, 0.0013, -7e-4, -7e-4, -2e-4,
            ],
            expression: [
              -0.0018, -0.0168, 0.0088, 0.0389, 0.1026, 0.0414, 0.2201, -0.0262,
              -0.0016, -0.0017, 0.0612, -0.0298, -0.0323, 0.0093, 0.0013,
              -0.005, 0.2207, 0.1315, -4e-4, 0.0858, -0.0303, -0.0133, 0.015,
              -0.008, 0.1454, 0.0114, 0.0177, -0.0077, 0.1022, 0.0356, -0.0023,
              0.1088, 0.0232, 0.003, -0.0706, 0.0347, -1e-4, 0.004, -0.0011,
              0.0397, -0.0096, -0.0033, 0.0029, -0.01, -0.0083, -6e-4, -0.0135,
              0.0016, -0.0087, -0.0019, 0.0022, -0.004, -0.0087, 0.0105, 8e-4,
              -0.005, 0.0069, 0.0028, 0.0409, -0.0391, 0.003, 0.0103, 0.0051,
              0.0026, 0.0776, -0.0083, -0.0062, -0.0567, 0.0268, 0.0175, 0.0017,
              0.0156, -0.0043, 0.0299, -0.0395, -0.0015, 0.0051, -0.0148,
              0.0125, 0.0035, 0.0603, 0.0109, -0.0645, -0.0257, 0.002, 6e-4,
              -8e-4,
            ],
          },
          6: {
            mean: [-6e-4, -0.1542, 0.8789],
            identity: [
              -7e-4, -0.0032, 0.01, 0, -0.0027, 0.0031, 6e-4, 5e-4, -6e-4,
              -3e-4, 0.0013, -0.0049, -2e-4, -0.002, -0.0046, 8e-4, -0.0011,
              0.0054, 2e-4, 0.0043, -0.0027, 3e-4, -0.0022, -0.0019, 8e-4,
              0.0032, -0.0069, 0, 4e-4, -0.0071, 0.0016, 0.0027, 0.0039,
              -0.0017, 9e-4, 0.0031, -1e-4, -5e-4, -4e-4, 7e-4, -0.0026,
              -0.0012, -5e-4, 6e-4, 2e-4, -0.0014, -0.0013, 0.0019, -2e-4,
              -0.0053, 0.0031, -6e-4, 0.0016, 0.0023, -0.0013, 0.0021, 0.0029,
              8e-4, 0.0052, 0, 4e-4, 0, 0.0037, -0.0026, 3e-4, 0.002, -2e-4,
              -0.0024, 4e-4, -4e-4, -0.0012, 8e-4, 7e-4, -0.0023, 5e-4, 0,
              0.0014, -0.0022, -0.0016, 0, -0.0012, 8e-4, -7e-4, 0.0014, -6e-4,
              -0.0012, -3e-4, 2e-4, 0.0012, -3e-4, -0.002, -1e-4, 1e-4, -2e-4,
              -0.0016, 9e-4, 0.002, 0.0019, 0, 6e-4, -0.0022, 0.0016, 1e-4,
              -0.0017, -0.0013, 0.001, 9e-4, -1e-4, 0.0011, 3e-4, -7e-4, 0.0014,
              8e-4, 0.0013, 0.0011, -0.002, 0, -0.0015, 0.0014, 0.001, -0.0015,
              7e-4, 3e-4, 0.001, -1e-4, 0.0012, 7e-4, 6e-4, -4e-4, -0.0013,
              -0.0012, -9e-4, -0.0011, 2e-4, -5e-4, 5e-4, 4e-4, 2e-4, 1e-4, 0,
              5e-4, 5e-4, -0.0014, 0.0015, -9e-4, 5e-4, 0.0014, -8e-4, -8e-4,
              0.0012,
            ],
            expression: [
              8e-4, 0.0481, 0.1653, 0.0784, 0.1008, -0.3992, 0.5088, -0.02,
              0.0542, 0.001, 0.3723, -0.0151, -0.0986, 0.0283, -0.0033, -0.0121,
              0.2634, 0.1202, 0.0036, -0.0529, -0.0245, -0.0297, -0.1085,
              0.0495, 0.3264, 0.0083, 4e-4, -0.0314, 0.1459, -0.1142, -0.003,
              1e-4, 0.1154, -0.0035, -0.0285, -0.0184, -1e-4, 0.0012, 0.0035,
              0.079, -0.0103, 0.0043, 0.011, -0.004, -0.0774, -0.0047, -0.023,
              0.0284, -0.0048, -0.001, 0.0149, -0.0039, 0.0046, 0.0528, -6e-4,
              0.0063, 0.0376, 0.0096, 0.0558, -0.0295, 0, -0.0311, -0.0634,
              0.0062, 0.0176, -0.0154, -0.0109, -0.1149, 0.0192, 0.0326, 0.0121,
              0.0237, 0.0034, 0.0262, -0.0778, 0.0014, -0.0045, -0.0203, 0.0077,
              0.0588, 0.0575, 0.008, -0.0557, -0.0095, 0.0032, 0.0054, -0.0042,
            ],
          },
          7: {
            mean: [0.0038, -0.2927, 0.833],
            identity: [
              6e-4, -0.0109, 0.0073, -6e-4, -0.0044, 0.0017, -1e-4, -0.0022,
              -6e-4, -3e-4, 0.0065, -0.0014, -6e-4, -0.0051, -0.0046, 3e-4,
              -0.0029, 0.003, 2e-4, 0.0038, -6e-4, 0, -0.0012, 6e-4, -4e-4,
              0.0053, -0.0075, -2e-4, -7e-4, -0.0063, 0.0014, 0.0026, 0.0019,
              -0.0022, 0.0018, 0.0028, -1e-4, -0.0012, 0.0011, 9e-4, 0.0019,
              -0.0019, -1e-4, 0.0012, -0.0022, -3e-4, -0.0012, 4e-4, -8e-4,
              3e-4, -3e-4, 0, 0.0017, 0.0021, -4e-4, 0.0012, 0.0022, -3e-4,
              0.0026, -3e-4, 4e-4, -0.0026, 0.0032, -0.0019, 3e-4, 0.0015, 1e-4,
              -0.0015, 0.0013, -1e-4, 1e-4, -0.0029, 0, -2e-4, -0.0028, -7e-4,
              0.0019, -3e-4, -2e-4, 0.0012, 9e-4, 4e-4, -0.001, -0.002, -0.0016,
              0.0011, -1e-4, 3e-4, 0.0021, 2e-4, -0.0014, -9e-4, -1e-4, 0,
              -2e-4, -0.001, 0.0015, 0.0018, 1e-4, 7e-4, 8e-4, 0.0017, 0.001,
              -9e-4, 1e-4, 4e-4, 0.0023, -1e-4, 0.0012, 1e-4, -8e-4, 2e-4,
              0.0018, 6e-4, 3e-4, 1e-4, 0.0012, -3e-4, 0.002, -6e-4, 0, -1e-4,
              -0.0022, 4e-4, 5e-4, 0.0011, 2e-4, -0.0013, -0.0023, 6e-4, 6e-4,
              -5e-4, -5e-4, 9e-4, 2e-4, 2e-4, 0.0011, -3e-4, 0.0011, 0.0015,
              0.0011, 3e-4, 2e-4, 8e-4, -4e-4, -8e-4, 3e-4, 0, 0.0012, -1e-4,
            ],
            expression: [
              0.026, 0.1107, 0.3257, 0.1917, 0.3206, -1.1348, 1.0791, -0.035,
              0.1549, -0.0103, 0.6953, 1e-4, -0.3262, 0.068, 0.0219, -0.0044,
              0.3643, 0.2178, 0.0168, -0.2478, -0.1321, -0.0414, -0.3782,
              -0.0617, 0.5088, -0.0031, -0.0311, -0.0497, 0.0948, -0.385,
              0.0148, -0.2224, -0.1415, -0.0074, 0.0863, -0.203, 3e-4, -0.0081,
              0.0057, 0.1164, -0.0039, 0.0015, -0.0024, 0.0505, 0.1532, 0.0039,
              -0.0148, -0.0753, 0.0163, 0.0058, -0.0339, 0.0036, 0.0252,
              -0.0569, -0.0041, 0.0163, -0.0361, 0.0035, -0.018, 0.1266, 0,
              -0.0163, -0.0046, 0.0133, -0.1656, 0.2134, 0.0191, 0.0057, 0.0734,
              0.0681, 0.0039, -0.0144, 0.029, -0.074, -0.046, 0.0122, 0.0072,
              -0.0162, -0.0349, -0.1234, 0.0212, -0.0355, 0.0535, 0.1218,
              0.0043, -0.024, 0.0016,
            ],
          },
          8: {
            mean: [-0.0018, -0.3037, 0.8491],
            identity: [
              2e-4, -0.0112, 0.0077, -4e-4, -0.0044, 0.0024, 1e-4, -0.0021,
              -4e-4, -4e-4, 0.0066, -0.002, -4e-4, -0.0052, -0.0044, 3e-4,
              -0.0032, 0.0039, 4e-4, 0.0042, -3e-4, 2e-4, -0.0012, -2e-4, -2e-4,
              0.0052, -0.0083, -1e-4, -8e-4, -0.0056, 0.0017, 0.0024, 0.0019,
              -0.0023, 0.002, 0.0027, -2e-4, -0.0013, 0.002, 9e-4, 0.0017,
              -0.0028, -2e-4, 0.0012, -0.0026, 0, -0.0016, 2e-4, -5e-4, 3e-4,
              -0.001, -1e-4, 0.0016, 0.0016, -3e-4, 0.0012, 0.0012, -3e-4,
              0.0027, -3e-4, 3e-4, -0.0026, 0.0037, -0.0017, 1e-4, 0.0016, 1e-4,
              -0.0015, 0.0024, 1e-4, 2e-4, -0.0039, 0, -3e-4, -0.0033, -6e-4,
              0.0017, -4e-4, -4e-4, 0.0012, 0.0018, 2e-4, -0.0012, -0.002,
              -0.0017, 0.0013, -0.001, 3e-4, 0.0021, 4e-4, -0.0012, -6e-4,
              -2e-4, 0, -4e-4, -9e-4, 0.0016, 0.0017, 4e-4, 7e-4, 7e-4, 0.001,
              9e-4, -8e-4, 5e-4, 5e-4, 0.0023, 0.001, 0.0013, 2e-4, -4e-4, 2e-4,
              0.0017, 8e-4, 3e-4, -1e-4, 9e-4, -4e-4, 0.0019, -5e-4, 3e-4, 0,
              -0.0025, 3e-4, 3e-4, 0.0011, 1e-4, -0.0015, -0.001, 7e-4, 7e-4,
              -7e-4, -7e-4, 8e-4, 0, 1e-4, 0.0013, -4e-4, 0.0012, 0.0014,
              0.0017, 4e-4, 2e-4, 3e-4, -3e-4, -9e-4, 1e-4, 0, 0.001, -4e-4,
            ],
            expression: [
              -0.0092, 2.8809, 1.416, 0.2018, 1.1982, -0.9351, 1.4492, -0.1902,
              0.1749, 0.0305, -0.167, -0.1572, -0.7354, -0.0492, 0.0115, 0.0608,
              0.2971, 0.1179, 0.0046, -0.0997, -0.0041, -0.0104, 0.3379,
              -0.1854, 0.009, 0.0366, -0.0583, 0.0269, -0.0029, -0.4175, -8e-4,
              0.1794, 0.0752, -0.0135, 0.1158, 0.1234, 5e-4, 0.003, -0.0032,
              0.1034, -0.0504, -0.0055, -0.0076, -0.0772, 0.224, 0.0047, 0.0229,
              -0.1044, 0.0162, -0.0161, -0.0241, -0.0083, -0.1388, -0.0434,
              -0.0125, -0.0997, -0.0327, -0.0111, 0.1576, -0.3911, 0.0199,
              0.2522, 0.142, 0.0059, -0.0721, -0.0045, 0.031, -0.1136, -0.1685,
              0.0641, 0.0142, 0.0312, 0.0426, -0.1366, 0.1011, 0.0101, -0.0157,
              0.0018, -0.0103, -0.0344, 0.0907, 0.0016, 0.1168, -0.0806, 0.0104,
              -0.0057, 0.0111,
            ],
          },
          9: [
            {
              mean: [0.0038, -0.2927, 0.833],
              identity: [
                6e-4, -0.0109, 0.0073, -6e-4, -0.0044, 0.0017, -1e-4, -0.0022,
                -6e-4, -3e-4, 0.0065, -0.0014, -6e-4, -0.0051, -0.0046, 3e-4,
                -0.0029, 0.003, 2e-4, 0.0038, -6e-4, 0, -0.0012, 6e-4, -4e-4,
                0.0053, -0.0075, -2e-4, -7e-4, -0.0063, 0.0014, 0.0026, 0.0019,
                -0.0022, 0.0018, 0.0028, -1e-4, -0.0012, 0.0011, 9e-4, 0.0019,
                -0.0019, -1e-4, 0.0012, -0.0022, -3e-4, -0.0012, 4e-4, -8e-4,
                3e-4, -3e-4, 0, 0.0017, 0.0021, -4e-4, 0.0012, 0.0022, -3e-4,
                0.0026, -3e-4, 4e-4, -0.0026, 0.0032, -0.0019, 3e-4, 0.0015,
                1e-4, -0.0015, 0.0013, -1e-4, 1e-4, -0.0029, 0, -2e-4, -0.0028,
                -7e-4, 0.0019, -3e-4, -2e-4, 0.0012, 9e-4, 4e-4, -0.001, -0.002,
                -0.0016, 0.0011, -1e-4, 3e-4, 0.0021, 2e-4, -0.0014, -9e-4,
                -1e-4, 0, -2e-4, -0.001, 0.0015, 0.0018, 1e-4, 7e-4, 8e-4,
                0.0017, 0.001, -9e-4, 1e-4, 4e-4, 0.0023, -1e-4, 0.0012, 1e-4,
                -8e-4, 2e-4, 0.0018, 6e-4, 3e-4, 1e-4, 0.0012, -3e-4, 0.002,
                -6e-4, 0, -1e-4, -0.0022, 4e-4, 5e-4, 0.0011, 2e-4, -0.0013,
                -0.0023, 6e-4, 6e-4, -5e-4, -5e-4, 9e-4, 2e-4, 2e-4, 0.0011,
                -3e-4, 0.0011, 0.0015, 0.0011, 3e-4, 2e-4, 8e-4, -4e-4, -8e-4,
                3e-4, 0, 0.0012, -1e-4,
              ],
              expression: [
                0.026, 0.1107, 0.3257, 0.1917, 0.3206, -1.1348, 1.0791, -0.035,
                0.1549, -0.0103, 0.6953, 1e-4, -0.3262, 0.068, 0.0219, -0.0044,
                0.3643, 0.2178, 0.0168, -0.2478, -0.1321, -0.0414, -0.3782,
                -0.0617, 0.5088, -0.0031, -0.0311, -0.0497, 0.0948, -0.385,
                0.0148, -0.2224, -0.1415, -0.0074, 0.0863, -0.203, 3e-4,
                -0.0081, 0.0057, 0.1164, -0.0039, 0.0015, -0.0024, 0.0505,
                0.1532, 0.0039, -0.0148, -0.0753, 0.0163, 0.0058, -0.0339,
                0.0036, 0.0252, -0.0569, -0.0041, 0.0163, -0.0361, 0.0035,
                -0.018, 0.1266, 0, -0.0163, -0.0046, 0.0133, -0.1656, 0.2134,
                0.0191, 0.0057, 0.0734, 0.0681, 0.0039, -0.0144, 0.029, -0.074,
                -0.046, 0.0122, 0.0072, -0.0162, -0.0349, -0.1234, 0.0212,
                -0.0355, 0.0535, 0.1218, 0.0043, -0.024, 0.0016,
              ],
            },
            {
              mean: [-0.0018, -0.3037, 0.8491],
              identity: [
                2e-4, -0.0112, 0.0077, -4e-4, -0.0044, 0.0024, 1e-4, -0.0021,
                -4e-4, -4e-4, 0.0066, -0.002, -4e-4, -0.0052, -0.0044, 3e-4,
                -0.0032, 0.0039, 4e-4, 0.0042, -3e-4, 2e-4, -0.0012, -2e-4,
                -2e-4, 0.0052, -0.0083, -1e-4, -8e-4, -0.0056, 0.0017, 0.0024,
                0.0019, -0.0023, 0.002, 0.0027, -2e-4, -0.0013, 0.002, 9e-4,
                0.0017, -0.0028, -2e-4, 0.0012, -0.0026, 0, -0.0016, 2e-4,
                -5e-4, 3e-4, -0.001, -1e-4, 0.0016, 0.0016, -3e-4, 0.0012,
                0.0012, -3e-4, 0.0027, -3e-4, 3e-4, -0.0026, 0.0037, -0.0017,
                1e-4, 0.0016, 1e-4, -0.0015, 0.0024, 1e-4, 2e-4, -0.0039, 0,
                -3e-4, -0.0033, -6e-4, 0.0017, -4e-4, -4e-4, 0.0012, 0.0018,
                2e-4, -0.0012, -0.002, -0.0017, 0.0013, -0.001, 3e-4, 0.0021,
                4e-4, -0.0012, -6e-4, -2e-4, 0, -4e-4, -9e-4, 0.0016, 0.0017,
                4e-4, 7e-4, 7e-4, 0.001, 9e-4, -8e-4, 5e-4, 5e-4, 0.0023, 0.001,
                0.0013, 2e-4, -4e-4, 2e-4, 0.0017, 8e-4, 3e-4, -1e-4, 9e-4,
                -4e-4, 0.0019, -5e-4, 3e-4, 0, -0.0025, 3e-4, 3e-4, 0.0011,
                1e-4, -0.0015, -0.001, 7e-4, 7e-4, -7e-4, -7e-4, 8e-4, 0, 1e-4,
                0.0013, -4e-4, 0.0012, 0.0014, 0.0017, 4e-4, 2e-4, 3e-4, -3e-4,
                -9e-4, 1e-4, 0, 0.001, -4e-4,
              ],
              expression: [
                -0.0092, 2.8809, 1.416, 0.2018, 1.1982, -0.9351, 1.4492,
                -0.1902, 0.1749, 0.0305, -0.167, -0.1572, -0.7354, -0.0492,
                0.0115, 0.0608, 0.2971, 0.1179, 0.0046, -0.0997, -0.0041,
                -0.0104, 0.3379, -0.1854, 0.009, 0.0366, -0.0583, 0.0269,
                -0.0029, -0.4175, -8e-4, 0.1794, 0.0752, -0.0135, 0.1158,
                0.1234, 5e-4, 0.003, -0.0032, 0.1034, -0.0504, -0.0055, -0.0076,
                -0.0772, 0.224, 0.0047, 0.0229, -0.1044, 0.0162, -0.0161,
                -0.0241, -0.0083, -0.1388, -0.0434, -0.0125, -0.0997, -0.0327,
                -0.0111, 0.1576, -0.3911, 0.0199, 0.2522, 0.142, 0.0059,
                -0.0721, -0.0045, 0.031, -0.1136, -0.1685, 0.0641, 0.0142,
                0.0312, 0.0426, -0.1366, 0.1011, 0.0101, -0.0157, 0.0018,
                -0.0103, -0.0344, 0.0907, 0.0016, 0.1168, -0.0806, 0.0104,
                -0.0057, 0.0111,
              ],
            },
          ],
          10: {
            mean: [-0.007, -0.6338, 0.7695],
            identity: [
              1e-4, -0.0296, 0.0089, -6e-4, -0.0073, -0.0065, -1e-4, -0.0029,
              -0.0031, -2e-4, 0.0128, 0.0065, 0, -0.0116, -0.014, -1e-4,
              -0.0037, -0.0052, -5e-4, 0.0028, 0.003, -4e-4, 0.0041, 0.0015,
              6e-4, 0.0088, -0.0076, -0.0011, -0.0015, -0.0073, 7e-4, -0.0011,
              0.0019, -0.0011, -5e-4, 0.0031, -1e-4, -0.0018, 9e-4, 0.0018,
              0.0038, 0.0068, -4e-4, -1e-4, 0.0061, 0.0024, 0.0024, -0.0066,
              -6e-4, 0.0051, 0.0014, 0.002, 0.005, -0.0035, 1e-4, -0.0034,
              -0.004, -7e-4, 0.001, -8e-4, 1e-4, -5e-4, -0.0021, 2e-4, 0.0045,
              -0.0043, -0.0012, -0.0024, -0.0014, 6e-4, 0.0034, 0.0027, -8e-4,
              -0.0053, 0.0014, 1e-4, 0.0013, -0.0018, 6e-4, -0.0015, 0.0029,
              -2e-4, -0.0035, 1e-4, -0.002, 0.0012, 0.0048, 0.0011, 1e-4, -2e-4,
              -3e-4, -0.0012, 0.0033, 6e-4, 0.002, -0.0033, 4e-4, 0.0028, 2e-4,
              8e-4, -1e-4, -0.0018, 8e-4, 0.0017, 1e-4, 9e-4, 8e-4, 3e-4,
              0.0019, -0.001, 0.001, -7e-4, -0.0013, 0, 1e-4, 0.0032, -1e-4,
              1e-4, 0.0011, -4e-4, 5e-4, -7e-4, 0.0018, -3e-4, 2e-4, 7e-4, 8e-4,
              -0.0014, 7e-4, 0.0015, -6e-4, -1e-4, -4e-4, 0.0019, -9e-4, -6e-4,
              -6e-4, -0.0012, 2e-4, -0.0012, -8e-4, 4e-4, 6e-4, -0.0011, 3e-4,
              9e-4, -4e-4, 6e-4, -7e-4, -4e-4,
            ],
            expression: [
              -0.0603, 2.0527, 1.9014, 0.1025, 0.6143, 0.3804, 0.7881, -0.1023,
              -0.0764, 0.0454, -0.2487, -0.5073, -0.6704, -0.031, -0.0181,
              0.0466, 0.0651, -0.0726, -0.0033, -0.0022, 0.2944, 0.0101, 0.1669,
              -0.5225, -0.4685, 0.0236, 0.0079, 0.011, 0.2173, 0.4529, 0.0121,
              -0.2104, -0.0673, 0.0225, -0.4023, 0.0317, -9e-4, 0.0076, -0.0032,
              0.0333, 0.0523, 0.0129, -0.001, -0.0319, -0.0139, 0.0015, -0.0044,
              0.0247, -5e-4, 0.0161, 0.0061, 0.0074, 0.0776, -0.0176, 0.007,
              0.055, -0.017, 0.0052, -0.1819, 0.0294, -0.0161, -0.0337, 0.0226,
              -0.008, -0.0297, 0.1967, -0.0095, 0.0383, 0.2039, 0.0434, 0.0271,
              -0.0064, -0.0037, -0.0294, -0.024, 0.0024, -0.0137, -0.0209,
              -0.0031, 0.0628, 0.1003, -0.0126, -0.056, -0.0097, -0.0012,
              -0.0041, 0.0162,
            ],
          },
          11: {
            mean: [0.2505, 0.3833, 0.7793],
            identity: [
              0.0098, 0.012, 0.0077, -6e-4, -3e-4, 0, 1e-4, 0.0082, -7e-4,
              0.0019, -0.0036, -0.0012, 2e-4, 0.0119, -0.0039, 0.001, 1e-4,
              0.0031, -0.0036, -0.0059, -7e-4, 0.0026, 0.0028, -0.0011, 9e-4,
              -0.0032, 8e-4, 0.0029, 0.0043, 3e-4, 0.0025, -9e-4, 0.0047,
              0.0016, 0.0022, 0.0018, -0.001, 0.0025, -0.003, -0.001, 0.0033,
              0.0034, 4e-4, -0.0052, 0.0024, -2e-4, 0.001, -0.0014, -6e-4,
              0.0038, -0.0015, -6e-4, -0.001, -0.0011, -4e-4, -0.001, 4e-4,
              -7e-4, 0.0036, -8e-4, -2e-4, -0.0019, 5e-4, 3e-4, -6e-4, -0.0024,
              -0.0017, -0.0014, 6e-4, -4e-4, -0.0031, -0.0013, -6e-4, 0.0042,
              2e-4, -2e-4, -0.002, -3e-4, 8e-4, 0.0018, -5e-4, -6e-4, -2e-4,
              -6e-4, 0.0025, 0.0019, 0.001, 8e-4, -0.0015, -0.0012, -1e-4,
              -6e-4, -4e-4, 0.0023, -0.001, 6e-4, -2e-4, -0.001, 0, -9e-4,
              -0.002, -0.0011, 1e-4, 0, -1e-4, 5e-4, 6e-4, 9e-4, -6e-4, 5e-4,
              8e-4, -1e-4, -2e-4, -0.0017, -6e-4, -4e-4, 4e-4, -6e-4, 0.0012,
              4e-4, 3e-4, -7e-4, 3e-4, -2e-4, 6e-4, 1e-4, 5e-4, -0.0019, -6e-4,
              4e-4, 7e-4, -1e-4, 1e-4, 5e-4, 0.001, -6e-4, -0.002, -7e-4, -5e-4,
              5e-4, 3e-4, 7e-4, 0.0014, 0, 5e-4, -5e-4, -2e-4, 3e-4, -6e-4,
              -1e-4,
            ],
            expression: [
              -9e-4, -3e-4, 0.0032, -0.003, -0.0034, -0.0031, 0.0014, 0, 4e-4,
              -0.0139, -0.0764, 0.0275, -0.002, -0.0089, 0.0031, -0.0503,
              -0.0771, 0.038, -0.1323, -0.3523, 0.1368, -0.0474, -0.0564,
              0.0296, -0.0045, 0.007, -0.0013, 0.0153, 0.1259, -0.0464, 0.0866,
              0.2175, -0.0786, -0.0413, -0.1248, 0.0448, -0.1777, -0.4607,
              0.1782, -5e-4, -0.005, 0.0016, 0.0629, 0.1506, -0.0624, 0.0545,
              0.2576, -0.0864, -0.0231, -0.0552, 0.0244, -0.0136, -0.0359,
              0.0169, -0.1158, -0.2996, 0.1214, -0.0235, -0.0354, 0.0165,
              -0.0745, -0.1079, 0.0475, -0.0116, -0.0039, 0.0012, 0.0013,
              -0.0108, -8e-4, 0.0044, -0.0027, -1e-4, -0.0694, 0.0363, 0.0071,
              0.1462, -0.136, 0.0047, 0.009, -0.0177, 0.0038, -0.0271, 0.0118,
              0.0011, -0.0399, -0.0111, 0.0123,
            ],
          },
          12: {
            mean: [-0.2981, 0.3828, 0.7563],
            identity: [
              -0.0116, 0.014, 0.0054, 0.0018, 5e-4, 0, -4e-4, 0.0068, -0.0013,
              -0.0019, -0.0048, -5e-4, 5e-4, 0.0108, -0.0036, -0.0029, -0.0018,
              0.0029, 0.0043, -0.0077, 6e-4, -0.0017, 0.002, -0.0011, -0.0014,
              -0.0035, 0.0015, -0.0024, 0.0011, 4e-4, -0.0048, 2e-4, 0.0029,
              -1e-4, -1e-4, 0.003, 0.0019, 0.0035, -0.0016, -4e-4, 0.0039,
              0.0019, 1e-4, -0.0064, 0.004, 3e-4, 0.002, -0.0021, 0.0017,
              0.0011, -0.001, 0.0026, 0.0025, -5e-4, 2e-4, -3e-4, -5e-4, -7e-4,
              9e-4, -4e-4, -0.001, -0.0022, 0.001, 9e-4, -0.0014, 7e-4, 0.0011,
              -0.001, -5e-4, -8e-4, -0.0017, -0.0021, 9e-4, 0.0036, 5e-4, 4e-4,
              -0.0031, 6e-4, -0.0015, 0.0027, 2e-4, 1e-4, -0.0011, 2e-4,
              -0.0011, -0.0018, 4e-4, -0.0013, -2e-4, 7e-4, 9e-4, -3e-4, 0.001,
              -0.0021, 8e-4, 6e-4, -9e-4, 4e-4, -7e-4, 8e-4, -0.002, -0.0013, 0,
              7e-4, -0.0012, -1e-4, 0.0014, 0.0014, -1e-4, 0.0013, 6e-4, 6e-4,
              -0.0014, -0.0015, -9e-4, 1e-4, 1e-4, 9e-4, 7e-4, 0, 1e-4, -0.001,
              -4e-4, 0, -5e-4, 1e-4, -3e-4, 4e-4, -5e-4, -1e-4, -0.0011, 2e-4,
              0, 1e-4, 8e-4, 8e-4, 0, -7e-4, -8e-4, 0, 2e-4, -1e-4, 0.001, 3e-4,
              4e-4, -2e-4, 0, 5e-4, 0.0018, -1e-4,
            ],
            expression: [
              0, -4e-4, 0.0028, 0.0036, -8e-4, -0.0026, -0.0015, -8e-4, 3e-4,
              0.0075, -0.0608, 0.025, 0.0019, -0.0076, 0.0033, 0.0379, -0.0437,
              0.0335, 0.0964, -0.2452, 0.1233, 0.0368, -0.0251, 0.0253, 0.0033,
              0.0097, -0.0021, -0.0095, 0.1171, -0.0475, -0.064, 0.1548,
              -0.0718, 0.0228, -0.0831, 0.0343, -0.1924, 0.6206, -0.2771,
              0.0021, -0.0143, 0.0056, -0.0705, 0.2522, -0.1116, -0.0692,
              0.4229, -0.1592, -0.0093, 0.05, -0.0185, 0.0948, -0.3196, 0.1437,
              -0.0184, 0.0194, -0.0131, 0.0205, -0.0353, 0.0201, 0.0676, -0.135,
              0.0672, 0.0137, -0.0311, 0.0118, 3e-4, -0.0077, -2e-4, -0.0151,
              4e-4, -0.0058, 0.029, -0.0139, 0.0163, 0.1324, 0.1819, -0.0039,
              0.0406, 0.0501, 0.0017, 0.0331, 0.0161, 0.0062, -0.0235, -0.0446,
              0.0047,
            ],
          },
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = {
        incompatible: () =>
          !(
            "function" == typeof Promise &&
            "object" == typeof WebAssembly &&
            !!(
              navigator.mediaDevices &&
              navigator.mediaDevices.enumerateDevices &&
              navigator.mediaDevices.getUserMedia
            )
          ),
        incompatible_ui: () => {
          const e = document.createElement("div");
          e.append(
            (function () {
              let e = document.createElement("div"),
                t = "a recent web browser";
              navigator.userAgent.match(/Android/i)
                ? ((t = "Chrome for Android"),
                  (window.location.href =
                    "googlechrome://navigate?url=" +
                    encodeURI(window.location.href)),
                  setTimeout(() => {
                    window.location.href =
                      "samsunginternet://open?url=" +
                      encodeURI(window.location.href);
                  }, 2e3))
                : navigator.userAgent.match(/iPhone|iPod|iPad/i) &&
                  ((t = "Safari"),
                  e.classList.add("zee-launcher-browser-safari")),
                e.classList.add("zee-launcher-unsupported"),
                (e.innerHTML = `\n            <style>.zee-launcher-unsupported {\n               display: flex;\n               flex-direction: column;\n               height: 100%;\n               justify-content: center;\n               position: absolute;\n               width: 100%;\n               height: 100%;\n               top: 0;\n               left: 0;\n               align-items: center;\n               }\n               .zee-launcher-browser-logo {\n               background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 210 211' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-82 -146)' fill-rule='nonzero' stroke='%23ffffff' stroke-width='2'%3E%3Cg transform='translate(83 146.5)'%3E%3Cpath d='m55.146 88.785l-32.039-49.472c19.962-24.947 49.904-38.684 80.517-38.81 17.739-0.12642 35.855 4.4246 52.336 13.99 18.2 10.619 32.039 25.874 40.846 43.404l-86.095-4.5511c-24.365-1.4327-47.556 12.347-55.565 35.439zm13.797 16.224c0 19.468 15.684 35.229 35.059 35.229 19.374 0 35.059-15.76 35.059-35.229 0-19.468-15.684-35.229-35.059-35.229-19.374 0-35.059 15.718-35.059 35.229zm132.06-37.588l-58.585 3.034c15.894 18.668 16.145 45.595 2.7678 66.243l-47.01 72.648c19.5 1.0535 39.588-3.2447 57.788-13.864 45.039-26.126 63.282-80.908 45.039-128.06zm-144.93 57.647l-39.126-77.326c-10.694 16.434-16.942 36.156-16.942 57.267 0 52.253 38.078 95.53 87.856 103.2l26.713-52.59c-24.155 4.5511-47.472-8.765-58.501-30.551z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");\n               width: 211px;\n               height: 211px;\n               margin-bottom: 25%;\n               margin-top: -60px;\n               background-repeat: no-repeat;\n               }\n               .zee-launcher-browser-safari .zee-launcher-browser-logo {\n               background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 211 211' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-82 -146)' fill-rule='nonzero' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='m180 251.86c0-4.0385 2.9377-7.855 7.2552-7.855 3.9614 0 7.7448 2.8402 7.7448 7.145 0 4.0385-2.8487 7.855-7.1662 7.855-4.0059 0-7.8338-2.9734-7.8338-7.145zm112-0.35503c0 57.728-46.772 104.5-104.5 104.5s-104.5-46.772-104.5-104.5 46.772-104.5 104.5-104.5 104.5 46.772 104.5 104.5zm-12-1c0-51.649-41.851-93.5-93.5-93.5s-93.5 41.851-93.5 93.5 41.851 93.5 93.5 93.5 93.5-41.851 93.5-93.5zm-30.624 40.983c0 1.5095 5.4495 4.2768 6.8328 5.1154-11.486 17.401-29.26 29.938-49.423 34.928l-1.8444-7.757c-0.12576-1.0482-0.79646-1.174-1.7606-1.174-0.79646 0-1.2576 1.174-1.1737 1.7611l1.8444 7.8828c-5.5753 1.174-11.234 1.7611-16.935 1.7611-15.217 0-30.182-4.2768-43.177-12.202 0.71263-1.174 5.1141-7.5474 5.1141-8.4698 0-0.79666-0.71263-1.5095-1.5091-1.5095-1.6348 0-5.1141 6.9603-6.1621 8.344-17.522-11.615-30.182-29.602-35.044-50.148l8.0066-1.761c0.92222-0.25158 1.1737-0.92246 1.1737-1.7611 0-0.79667-1.1737-1.2579-1.8444-1.174l-7.8389 1.803c-1.048-5.3251-1.6348-10.692-1.6348-16.143 0-15.556 4.4015-30.86 12.66-43.984 1.1737 0.71281 6.749 4.5284 7.6712 4.5284 0.79646 0 1.5091-0.58702 1.5091-1.3837 0-1.6353-6.1621-4.7381-7.5455-5.7024 11.821-17.275 29.805-29.728 50.219-34.34l1.7606 7.757c0.25152 0.92246 0.92222 1.174 1.7606 1.174 0.83838 0 1.2576-1.174 1.1737-1.8449l-1.7606-7.6732c5.1141-0.92246 10.312-1.5095 15.552-1.5095 15.552 0 30.727 4.4026 43.973 12.663-0.79646 1.174-4.5273 6.6249-4.5273 7.5474 0 0.79667 0.58687 1.5095 1.3833 1.5095 1.6348 0 4.7369-6.0379 5.5753-7.4216 17.187 11.615 29.469 29.351 34.248 49.561l-6.4975 1.3837c-1.048 0.25158-1.1737 0.92246-1.1737 1.8449 0 0.79667 1.1737 1.2579 1.7606 1.174l6.6232-1.5095c1.048 5.3251 1.6348 10.776 1.6348 16.227 0 15.221-4.1919 30.189-12.073 43.062-1.1737-0.58702-6.0364-4.0672-6.9586-4.0672-0.8803 0-1.5929 0.71281-1.5929 1.5095zm-14.876-98.483c-5.2178 4.88-53.863 49.48-55.228 51.8l-38.772 64.2c5.0974-4.76 53.863-49.6 55.108-51.72l38.892-64.28z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\n               }\n               .zee-launcher-unsupported-message {\n               text-align: center;\n               width: 250px;\n               font-family: sans-serif;\n               color: #ffffff;\n               }\n               .zee-launcher-unsupported-message-copy {\n               border: 1px solid #ffffff;\n               border-radius: 5px;\n               margin-top: 10px;\n               }\n               #zee-launcher-unsupported-message-input {\n               border: none;\n               padding: 10px;\n               border-radius: 0px;\n               border-right: 1px solid #344B60;\n               height: 40px;\n               color: #ffffff;\n               background-color: black;\n               box-sizing: border-box;\n               width: calc(100% - 65px);\n               margin-left: 5px;\n               }\n               #zee-launcher-unsupported-message-button {\n               background: none;\n               border: none;\n               outline: none;\n               text-transform: uppercase;\n               color: #ffffff;\n               height: 40px;\n               display: inline-block;\n               width: 59px;\n               }\n               .zee-launcher-unsupported-message-before-copy {\n               height: 100px;\n               display: flex;\n               flex-direction: column;\n               justify-content: center;\n               margin-top: 20px;\n               }\n               .zee-launcher-unsupported-message-copied .zee-launcher-unsupported-message-before-copy {\n               display: none;\n               }\n               .zee-launcher-unsupported-message-after-copy {\n               display: none;\n               }\n               .zee-launcher-unsupported-message-copied .zee-launcher-unsupported-message-after-copy {\n               height: 100px;\n               display: flex;\n               flex-direction: column;\n               justify-content: center;\n               margin-top: 20px;\n               }\n            </style>\n            <div class="zee-launcher-browser-logo"></div>\n            <div class="zee-launcher-unsupported-message">Open with ${t} to access this content.</div>\n            <div class="zee-launcher-unsupported-message-before-copy">\n               <div class="zee-launcher-unsupported-message ">Tap below to copy the address for easy pasting into ${t}.</div>\n               <div class="zee-launcher-unsupported-message-copy"><input id="zee-launcher-unsupported-message-input" type="text/"><button id="zee-launcher-unsupported-message-button">Copy</button></div>\n            </div>\n            <div class="zee-launcher-unsupported-message zee-launcher-unsupported-message-after-copy">COPIED! Now paste into ${t}'s address bar to experience the content.</div>\n    `);
              let n =
                e.querySelector("#zee-launcher-unsupported-message-input") ||
                document.createElement("input");
              n.value = window.location.href;
              let r = () => {
                if (navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
                  let e = document.createRange();
                  e.selectNodeContents(n);
                  let t = window.getSelection();
                  if (!t) return;
                  t.removeAllRanges(),
                    t.addRange(e),
                    n.setSelectionRange(0, 999999999);
                } else n.select();
                document.execCommand("copy"),
                  n.blur(),
                  e.classList.toggle(
                    "zee-launcher-unsupported-message-copied",
                    !0
                  );
              };
              return (
                (
                  e.querySelector("#zee-launcher-unsupported-message-button") ||
                  document.createElement("button")
                ).addEventListener("click", r),
                n.addEventListener("click", r),
                e
              );
            })()
          ),
            Object.assign(e.style, {
              position: "fixed",
              width: "100%",
              height: "100%",
              top: "0px",
              left: "0px",
              zIndex: 1001,
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              fontFamily: "sans-serif",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }),
            e.classList.add("zee_launcher_compatibility"),
            document.body.append(e);
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "f7b62a3a53b5c9b3222ba8dc53cb8b11.zbin");
    },
    function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "482727c0e7dd40d73f5aae47f238ad61.zbin");
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VERSION = void 0),
        (t.VERSION = "0.3.14");
    },
  ]);
});
