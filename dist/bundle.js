(() => {
  'use strict';
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var c = {}, a = [], i = 0; i < n.length; i++) {
            var l = n[i],
              s = r.base ? l[0] + r.base : l[0],
              u = c[s] || 0,
              d = ''.concat(s, ' ').concat(u);
            c[s] = u + 1;
            var p = t(d),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var g = o(f, r);
              (r.byIndex = i),
                e.splice(i, 0, { identifier: d, updater: g, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var c = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < c.length; a++) {
              var i = t(c[a]);
              e[i].references--;
            }
            for (var l = r(n, o), s = 0; s < c.length; s++) {
              var u = t(c[s]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            c = l;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (t += n(e)),
                  r && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, r, o, c) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (a[l] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var u = [].concat(n[s]);
                (r && a[u[0]]) ||
                  (void 0 !== c &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = c)),
                  t &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = t))
                      : (u[2] = t)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      748: (n, e, t) => {
        t.d(e, { A: () => i });
        var r = t(601),
          o = t.n(r),
          c = t(314),
          a = t.n(c)()(o());
        a.push([
          n.id,
          'body{\n    background-color: white;\n}\n.cacl_container{\n    width: 250px;\n    height: 300px;\n    border: 1.5px solid black;\n}\n.cacl_container.light {\n    background-color: rgb(233, 233, 233);\n    color: black;\n}\ninput{\n    width: 100%;\n    height: 65px;\n    border: none;\n    font-size: 20px;\n    padding-right: 10px;\n    box-sizing: border-box;\n}\n.cacl_container .calc_input {\n    text-align: right;\n    color: white;\n    background-color: rgb(82, 80, 80);\n}\n.cacl_container.light .calc_input {\n    color: black;\n    background-color: rgb(233, 233, 233);\n}\n.cacl_container .themeToggler i {\n    color: white;\n}\n.cacl_container.light .themeToggler i {\n    color: black;\n}\n.clear, .sign, .percent{\n    background-color: rgb(112, 112, 112);\n    color: white;\n}\n.clear.light, .sign.light, .percent.light{\n    background-color: rgb(173, 173, 173);\n    color: black;\n}\n.divide, .operator, .equals{\n    background-color: rgb(255, 128, 37);\n}\n.buttons{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n}\n.clr_toggle{\n    background-color: rgb(157, 157, 157);\n    color: white;\n}\n.clr_toggle.light{\n    background-color: rgb(238, 238, 238);\n    color: black;\n}\nbutton{\n    border: 0.5px solid black;\n    height: 47px;\n    cursor: pointer;\n    background-color: rgb(157, 157, 157);\n    color: white;\n    font-size: 20px;\n}\nbutton:hover, .clr_toggle:hover{\n    background-color: rgb(197, 197, 197);\n}\n#zero{\n    grid-column: span 2;\n}\ni{\n   font-size: 15px;\n   cursor: pointer;\n   color: white;\n}\n.themeToggler{\n    position: absolute;\n    top: 25px;\n    left: 25px;\n}\n',
          '',
        ]);
        const i = a;
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var c = t.sourceMap;
                c &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      ' */',
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var c = (e[r] = { id: r, exports: {} });
    return n[r](c, c.exports, t), c.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    c = t(825),
    a = t.n(c),
    i = t(659),
    l = t.n(i),
    s = t(56),
    u = t.n(s),
    d = t(540),
    p = t.n(d),
    f = t(113),
    g = t.n(f),
    h = t(748),
    b = {};
  (b.styleTagTransform = g()),
    (b.setAttributes = u()),
    (b.insert = l().bind(null, 'head')),
    (b.domAPI = a()),
    (b.insertStyleElement = p()),
    o()(h.A, b),
    h.A && h.A.locals && h.A.locals;
  let v = '0',
    m = '',
    y = null,
    w = !1,
    x = document.querySelector('.calc_input');
  function k() {
    x.value = null !== y ? `${m} ${y} ${w ? '' : v}` : v;
  }
  function S() {
    if (null === y || w) return;
    let n,
      e = parseFloat(m),
      t = parseFloat(v);
    switch (y) {
      case '+':
        n = e + t;
        break;
      case '-':
        n = e - t;
        break;
      case '*':
        n = (function (n, e) {
          return n * e;
        })(e, t);
        break;
      case '/':
        n = (function (n, e) {
          return 0 === e
            ? (alert('ERROR: division by zero is not allowed!'), '0')
            : n / e;
        })(e, t);
        break;
      default:
        return;
    }
    (v = n.toString()), (y = null), k();
  }
  k();
  let _ = document.querySelector('.themeToggler'),
    T = document.querySelector('.cacl_container');
  _.addEventListener('click', () => {
    T.classList.toggle('light'),
      document
        .querySelectorAll(
          '.clear, .sign, .percent, .clr_toggle, .operator, .divide, .equals',
        )
        .forEach((n) => {
          n.classList.toggle('light');
        });
    const n = _.querySelector('i');
    T.classList.contains('light')
      ? n.classList.replace('fa-sun', 'fa-moon')
      : n.classList.replace('fa-moon', 'fa-sun');
  }),
    (window.addNum = function (n) {
      '0' === v || w ? ((v = n), (w = !1)) : (v += n), k();
    }),
    (window.separator = function () {
      if (w) return (v = '0.'), (w = !1), void k();
      v.includes('.') || ((v += '.'), k());
    }),
    (window.appendOp = function (n) {
      null !== y && S(), (m = v), (y = n), (w = !0);
    }),
    (window.calculate = S),
    (window.changeSign = function () {
      (v = (-1 * parseFloat(v)).toString()), k();
    }),
    (window.getPercent = function () {
      (v = (parseFloat(v) / 100).toString()), k();
    }),
    (window.clearDisplay = function () {
      (v = '0'), (m = ''), (y = null), k();
    }),
    (window.Calculator = {});
})();
