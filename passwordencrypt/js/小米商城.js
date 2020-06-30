 var CryptoJS = CryptoJS || function(o, p) {
         var r = {}, i = r.lib = {}, b = function() {}, t = i.Base = {
             extend: function(e) {
                 b.prototype = this;
                 var k = new b;
                 e && k.mixIn(e);
                 k.hasOwnProperty("init") || (k.init = function() {
                     k.$super.init.apply(this, arguments)
                 });
                 k.init.prototype = k;
                 k.$super = this;
                 return k
             },
             create: function() {
                 var d = this.extend();
                 d.init.apply(d, arguments);
                 return d
             },
             init: function() {},
             mixIn: function(k) {
                 for (var e in k) {
                     k.hasOwnProperty(e) && (this[e] = k[e])
                 }
                 k.hasOwnProperty("toString") && (this.toString = k.toString)
             },
             clone: function() {
                 return this.init.prototype.extend(this)
             }
         }, h = i.WordArray = t.extend({
             init: function(c, e) {
                 c = this.words = c || [];
                 this.sigBytes = e != p ? e : 4 * c.length
             },
             toString: function(d) {
                 return (d || s).stringify(this)
             },
             concat: function(x) {
                 var v = this.words,
                     w = x.words,
                     u = this.sigBytes;
                 x = x.sigBytes;
                 this.clamp();
                 if (u % 4) {
                     for (var m = 0; m < x; m++) {
                         v[u + m >>> 2] |= (w[m >>> 2] >>> 24 - m % 4 * 8 & 255) << 24 - (u + m) % 4 * 8
                     }
                 } else {
                     if (65535 < w.length) {
                         for (m = 0; m < x; m += 4) {
                             v[u + m >>> 2] = w[m >>> 2]
                         }
                     } else {
                         v.push.apply(v, w)
                     }
                 }
                 this.sigBytes += x;
                 return this
             },
             clamp: function() {
                 var e = this.words,
                     d = this.sigBytes;
                 e[d >>> 2] &= 4294967295 << 32 - d % 4 * 8;
                 e.length = o.ceil(d / 4)
             },
             clone: function() {
                 var d = t.clone.call(this);
                 d.words = this.words.slice(0);
                 return d
             },
             random: function(m) {
                 for (var k = [], d = 0; d < m; d += 4) {
                     k.push(4294967296 * o.random() | 0)
                 }
                 return new h.init(k, m)
             }
         }),
             f = r.enc = {}, s = f.Hex = {
                 stringify: function(x) {
                     var v = x.words;
                     x = x.sigBytes;
                     for (var w = [], u = 0; u < x; u++) {
                         var m = v[u >>> 2] >>> 24 - u % 4 * 8 & 255;
                         w.push((m >>> 4).toString(16));
                         w.push((m & 15).toString(16))
                     }
                     return w.join("")
                 },
                 parse: function(v) {
                     for (var m = v.length, u = [], k = 0; k < m; k += 2) {
                         u[k >>> 3] |= parseInt(v.substr(k, 2), 16) << 24 - k % 8 * 4
                     }
                     return new h.init(u, m / 2)
                 }
             }, j = f.Latin1 = {
                 stringify: function(v) {
                     var m = v.words;
                     v = v.sigBytes;
                     for (var u = [], k = 0; k < v; k++) {
                         u.push(String.fromCharCode(m[k >>> 2] >>> 24 - k % 4 * 8 & 255))
                     }
                     return u.join("")
                 },
                 parse: function(v) {
                     for (var m = v.length, u = [], k = 0; k < m; k++) {
                         u[k >>> 2] |= (v.charCodeAt(k) & 255) << 24 - k % 4 * 8
                     }
                     return new h.init(u, m)
                 }
             }, q = f.Utf8 = {
                 stringify: function(k) {
                     try {
                         return decodeURIComponent(escape(j.stringify(k)))
                     } catch (e) {
                         throw Error("Malformed UTF-8 data")
                     }
                 },
                 parse: function(d) {
                     return j.parse(unescape(encodeURIComponent(d)))
                 }
             }, g = i.BufferedBlockAlgorithm = t.extend({
                 reset: function() {
                     this._data = new h.init;
                     this._nDataBytes = 0
                 },
                 _append: function(d) {
                     "string" == typeof d && (d = q.parse(d));
                     this._data.concat(d);
                     this._nDataBytes += d.sigBytes
                 },
                 _process: function(z) {
                     var y = this._data,
                         w = y.words,
                         m = y.sigBytes,
                         d = this.blockSize,
                         u = m / (4 * d),
                         u = z ? o.ceil(u) : o.max((u | 0) - this._minBufferSize, 0);
                     z = u * d;
                     m = o.min(4 * z, m);
                     if (z) {
                         for (var x = 0; x < z; x += d) {
                             this._doProcessBlock(w, x)
                         }
                         x = w.splice(0, z);
                         y.sigBytes -= m
                     }
                     return new h.init(x, m)
                 },
                 clone: function() {
                     var d = t.clone.call(this);
                     d._data = this._data.clone();
                     return d
                 },
                 _minBufferSize: 0
             });
         i.Hasher = g.extend({
             cfg: t.extend(),
             init: function(d) {
                 this.cfg = this.cfg.extend(d);
                 this.reset()
             },
             reset: function() {
                 g.reset.call(this);
                 this._doReset()
             },
             update: function(d) {
                 this._append(d);
                 this._process();
                 return this
             },
             finalize: function(d) {
                 d && this._append(d);
                 return this._doFinalize()
             },
             blockSize: 16,
             _createHelper: function(d) {
                 return function(c, e) {
                     return (new d.init(e)).finalize(c)
                 }
             },
             _createHmacHelper: function(d) {
                 return function(c, e) {
                     return (new l.HMAC.init(d, e)).finalize(c)
                 }
             }
         });
         var l = r.algo = {};
         return r
     }(Math);
 (function(j) {
     function l(z, y, x, t, r, s, w) {
         z = z + (y & x | ~y & t) + r + w;
         return (z << s | z >>> 32 - s) + y
     }

     function o(z, y, x, t, r, s, w) {
         z = z + (y & t | x & ~t) + r + w;
         return (z << s | z >>> 32 - s) + y
     }

     function h(z, y, x, t, r, s, w) {
         z = z + (y ^ x ^ t) + r + w;
         return (z << s | z >>> 32 - s) + y
     }

     function b(z, y, x, t, s, r, w) {
         z = z + (x ^ (y | ~t)) + s + w;
         return (z << r | z >>> 32 - r) + y
     }
     for (var q = CryptoJS, g = q.lib, f = g.WordArray, p = g.Hasher, g = q.algo, i = [], n = 0; 64 > n; n++) {
         i[n] = 4294967296 * j.abs(j.sin(n + 1)) | 0
     }
     g = g.MD5 = p.extend({
         _doReset: function() {
             this._hash = new f.init([1732584193, 4023233417, 2562383102, 271733878])
         },
         _doProcessBlock: function(X, V) {
             for (var M = 0; 16 > M; M++) {
                 var C = V + M,
                     U = X[C];
                 X[C] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360
             }
             var M = this._hash.words,
                 C = X[V + 0],
                 U = X[V + 1],
                 L = X[V + 2],
                 v = X[V + 3],
                 W = X[V + 4],
                 e = X[V + 5],
                 Y = X[V + 6],
                 R = X[V + 7],
                 w = X[V + 8],
                 E = X[V + 9],
                 H = X[V + 10],
                 O = X[V + 11],
                 k = X[V + 12],
                 t = X[V + 13],
                 F = X[V + 14],
                 c = X[V + 15],
                 N = M[0],
                 S = M[1],
                 Q = M[2],
                 P = M[3],
                 N = l(N, S, Q, P, C, 7, i[0]),
                 P = l(P, N, S, Q, U, 12, i[1]),
                 Q = l(Q, P, N, S, L, 17, i[2]),
                 S = l(S, Q, P, N, v, 22, i[3]),
                 N = l(N, S, Q, P, W, 7, i[4]),
                 P = l(P, N, S, Q, e, 12, i[5]),
                 Q = l(Q, P, N, S, Y, 17, i[6]),
                 S = l(S, Q, P, N, R, 22, i[7]),
                 N = l(N, S, Q, P, w, 7, i[8]),
                 P = l(P, N, S, Q, E, 12, i[9]),
                 Q = l(Q, P, N, S, H, 17, i[10]),
                 S = l(S, Q, P, N, O, 22, i[11]),
                 N = l(N, S, Q, P, k, 7, i[12]),
                 P = l(P, N, S, Q, t, 12, i[13]),
                 Q = l(Q, P, N, S, F, 17, i[14]),
                 S = l(S, Q, P, N, c, 22, i[15]),
                 N = o(N, S, Q, P, U, 5, i[16]),
                 P = o(P, N, S, Q, Y, 9, i[17]),
                 Q = o(Q, P, N, S, O, 14, i[18]),
                 S = o(S, Q, P, N, C, 20, i[19]),
                 N = o(N, S, Q, P, e, 5, i[20]),
                 P = o(P, N, S, Q, H, 9, i[21]),
                 Q = o(Q, P, N, S, c, 14, i[22]),
                 S = o(S, Q, P, N, W, 20, i[23]),
                 N = o(N, S, Q, P, E, 5, i[24]),
                 P = o(P, N, S, Q, F, 9, i[25]),
                 Q = o(Q, P, N, S, v, 14, i[26]),
                 S = o(S, Q, P, N, w, 20, i[27]),
                 N = o(N, S, Q, P, t, 5, i[28]),
                 P = o(P, N, S, Q, L, 9, i[29]),
                 Q = o(Q, P, N, S, R, 14, i[30]),
                 S = o(S, Q, P, N, k, 20, i[31]),
                 N = h(N, S, Q, P, e, 4, i[32]),
                 P = h(P, N, S, Q, w, 11, i[33]),
                 Q = h(Q, P, N, S, O, 16, i[34]),
                 S = h(S, Q, P, N, F, 23, i[35]),
                 N = h(N, S, Q, P, U, 4, i[36]),
                 P = h(P, N, S, Q, W, 11, i[37]),
                 Q = h(Q, P, N, S, R, 16, i[38]),
                 S = h(S, Q, P, N, H, 23, i[39]),
                 N = h(N, S, Q, P, t, 4, i[40]),
                 P = h(P, N, S, Q, C, 11, i[41]),
                 Q = h(Q, P, N, S, v, 16, i[42]),
                 S = h(S, Q, P, N, Y, 23, i[43]),
                 N = h(N, S, Q, P, E, 4, i[44]),
                 P = h(P, N, S, Q, k, 11, i[45]),
                 Q = h(Q, P, N, S, c, 16, i[46]),
                 S = h(S, Q, P, N, L, 23, i[47]),
                 N = b(N, S, Q, P, C, 6, i[48]),
                 P = b(P, N, S, Q, R, 10, i[49]),
                 Q = b(Q, P, N, S, F, 15, i[50]),
                 S = b(S, Q, P, N, e, 21, i[51]),
                 N = b(N, S, Q, P, k, 6, i[52]),
                 P = b(P, N, S, Q, v, 10, i[53]),
                 Q = b(Q, P, N, S, H, 15, i[54]),
                 S = b(S, Q, P, N, U, 21, i[55]),
                 N = b(N, S, Q, P, w, 6, i[56]),
                 P = b(P, N, S, Q, c, 10, i[57]),
                 Q = b(Q, P, N, S, Y, 15, i[58]),
                 S = b(S, Q, P, N, t, 21, i[59]),
                 N = b(N, S, Q, P, W, 6, i[60]),
                 P = b(P, N, S, Q, O, 10, i[61]),
                 Q = b(Q, P, N, S, L, 15, i[62]),
                 S = b(S, Q, P, N, E, 21, i[63]);
             M[0] = M[0] + N | 0;
             M[1] = M[1] + S | 0;
             M[2] = M[2] + Q | 0;
             M[3] = M[3] + P | 0
         },
         _doFinalize: function() {
             var v = this._data,
                 t = v.words,
                 r = 8 * this._nDataBytes,
                 d = 8 * v.sigBytes;
             t[d >>> 5] |= 128 << 24 - d % 32;
             var s = j.floor(r / 4294967296);
             t[(d + 64 >>> 9 << 4) + 15] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360;
             t[(d + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360;
             v.sigBytes = 4 * (t.length + 1);
             this._process();
             v = this._hash;
             t = v.words;
             for (r = 0; 4 > r; r++) {
                 d = t[r],
                 t[r] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360
             }
             return v
         },
         clone: function() {
             var d = p.clone.call(this);
             d._hash = this._hash.clone();
             return d
         }
     });
     q.MD5 = p._createHelper(g);
     q.HmacMD5 = p._createHmacHelper(g)
 })(Math);

 function getPwd(password) {
     return (CryptoJS.MD5(password).toString() + "").toUpperCase();
 }