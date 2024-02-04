(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
    },
    t = {};
  function i(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var o = (t[s] = { exports: {} });
    return e[s](o, o.exports, i), o.exports;
  }
  (() => {
    "use strict";
    const e = {};
    window.onload = function () {
      const e = document.querySelector(".connect"),
        t = document.querySelector(".canvas__item"),
        i = document.getElementById("background");
      let s = window.pageYOffset + e.getBoundingClientRect().y,
        r = i.getBoundingClientRect().height;
      document.querySelector(".wrapper").getBoundingClientRect().height;
      for (var o = [], l = 3; l < 300; l++) {
        var n = "000";
        l < 10 ? (n += "00") : l < 100 && (n += "0"), (n += l + ".jpg");
        var a = new Image();
        (a.src = "./img/canvas/" + n), o.push(a);
      }
      let c = document.getElementById("background").getContext("2d"),
        h = function (e) {
          c.drawImage(o[e], 0, 0, 960, 960);
        };
      setTimeout(() => {
        h(3);
      }, 1e3),
        window.addEventListener("scroll", (e) => {
          let i = window.pageYOffset + r;
          i < s
            ? ((t.style.position = "fixed"), (t.style.top = "65px"))
            : i > s &&
              ((t.style.position = "absolute"),
              (t.style.top = s - r + 20 + "px"));
          let o =
              (window.pageYOffset + document.documentElement.clientHeight) /
              300,
            l = Math.round(window.pageYOffset / o);
          h(l);
        });
    };
    document.querySelector(".header").addEventListener("click", function (e) {
      e.target.classList.contains("menu__link") && r();
    });
    let t = !0,
      s = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function r() {
      s(), document.documentElement.classList.remove("menu-open");
    }
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    let l = {
      getErrors(e) {
        let t = 0,
          i = e.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.closest(".form__row").classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let i = t.querySelectorAll("input,textarea");
            for (let e = 0; e < i.length; e++) {
              const t = i[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                l.removeError(t);
            }
            let s = t.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (e.select) {
              let i = t.querySelectorAll(".select");
              if (i.length)
                for (let t = 0; t < i.length; t++) {
                  const s = i[t].querySelector("select");
                  e.select.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var n = i(807);
    const a = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const c =
      "object" == typeof global && global && global.Object === Object && global;
    var h = "object" == typeof self && self && self.Object === Object && self;
    const d = c || h || Function("return this")();
    const u = function () {
      return d.Date.now();
    };
    var p = /\s/;
    const f = function (e) {
      for (var t = e.length; t-- && p.test(e.charAt(t)); );
      return t;
    };
    var v = /^\s+/;
    const m = function (e) {
      return e ? e.slice(0, f(e) + 1).replace(v, "") : e;
    };
    const g = d.Symbol;
    var b = Object.prototype,
      E = b.hasOwnProperty,
      y = b.toString,
      x = g ? g.toStringTag : void 0;
    const w = function (e) {
      var t = E.call(e, x),
        i = e[x];
      try {
        e[x] = void 0;
        var s = !0;
      } catch (e) {}
      var r = y.call(e);
      return s && (t ? (e[x] = i) : delete e[x]), r;
    };
    var S = Object.prototype.toString;
    const A = function (e) {
      return S.call(e);
    };
    var O = g ? g.toStringTag : void 0;
    const k = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : O && O in Object(e)
          ? w(e)
          : A(e);
    };
    const L = function (e) {
      return null != e && "object" == typeof e;
    };
    const W = function (e) {
      return "symbol" == typeof e || (L(e) && "[object Symbol]" == k(e));
    };
    var M = /^[-+]0x[0-9a-f]+$/i,
      N = /^0b[01]+$/i,
      C = /^0o[0-7]+$/i,
      z = parseInt;
    const T = function (e) {
      if ("number" == typeof e) return e;
      if (W(e)) return NaN;
      if (a(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = a(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = m(e);
      var i = N.test(e);
      return i || C.test(e) ? z(e.slice(2), i ? 2 : 8) : M.test(e) ? NaN : +e;
    };
    var _ = Math.max,
      R = Math.min;
    const q = function (e, t, i) {
      var s,
        r,
        o,
        l,
        n,
        c,
        h = 0,
        d = !1,
        p = !1,
        f = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function v(t) {
        var i = s,
          o = r;
        return (s = r = void 0), (h = t), (l = e.apply(o, i));
      }
      function m(e) {
        var i = e - c;
        return void 0 === c || i >= t || i < 0 || (p && e - h >= o);
      }
      function g() {
        var e = u();
        if (m(e)) return b(e);
        n = setTimeout(
          g,
          (function (e) {
            var i = t - (e - c);
            return p ? R(i, o - (e - h)) : i;
          })(e),
        );
      }
      function b(e) {
        return (n = void 0), f && s ? v(e) : ((s = r = void 0), l);
      }
      function E() {
        var e = u(),
          i = m(e);
        if (((s = arguments), (r = this), (c = e), i)) {
          if (void 0 === n)
            return (function (e) {
              return (h = e), (n = setTimeout(g, t)), d ? v(e) : l;
            })(c);
          if (p) return clearTimeout(n), (n = setTimeout(g, t)), v(c);
        }
        return void 0 === n && (n = setTimeout(g, t)), l;
      }
      return (
        (t = T(t) || 0),
        a(i) &&
          ((d = !!i.leading),
          (o = (p = "maxWait" in i) ? _(T(i.maxWait) || 0, t) : o),
          (f = "trailing" in i ? !!i.trailing : f)),
        (E.cancel = function () {
          void 0 !== n && clearTimeout(n), (h = 0), (s = c = r = n = void 0);
        }),
        (E.flush = function () {
          return void 0 === n ? l : b(u());
        }),
        E
      );
    };
    const D = function (e, t, i) {
      var s = !0,
        r = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        a(i) &&
          ((s = "leading" in i ? !!i.leading : s),
          (r = "trailing" in i ? !!i.trailing : r)),
        q(e, t, { leading: s, maxWait: t, trailing: r })
      );
    };
    var V = function () {
        return (
          (V =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          V.apply(this, arguments)
        );
      },
      B = null,
      H = null;
    function j() {
      if (null === B) {
        if ("undefined" == typeof document) return (B = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var i = t.getBoundingClientRect().right;
        e.removeChild(t), (B = i);
      }
      return B;
    }
    function I(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function P(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    n &&
      window.addEventListener("resize", function () {
        H !== window.devicePixelRatio &&
          ((H = window.devicePixelRatio), (B = null));
      });
    var Y = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var i = t.name.match(/data-simplebar-(.+)/);
          if (i) {
            var s = i[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[s] = !0;
                break;
              case "false":
                e[s] = !1;
                break;
              case void 0:
                e[s] = !0;
                break;
              default:
                e[s] = t.value;
            }
          }
          return e;
        },
        {},
      );
    };
    function X(e, t) {
      var i;
      e && (i = e.classList).add.apply(i, t.split(" "));
    }
    function F(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function $(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var U = Object.freeze({
        __proto__: null,
        getElementWindow: I,
        getElementDocument: P,
        getOptions: Y,
        addClasses: X,
        removeClasses: F,
        classNamesToQuery: $,
      }),
      Q = I,
      G = P,
      Z = Y,
      J = X,
      K = F,
      ee = $,
      te = (function () {
        function e(t, i) {
          void 0 === i && (i = {});
          var s = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = Q(s.el);
              s.scrollXTicking ||
                (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                s.scrollYTicking ||
                  (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
                s.isScrolling ||
                  ((s.isScrolling = !0), J(s.el, s.classNames.scrolling)),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                s.onStopScrolling();
            }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing && s.positionScrollbar("x"),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing && s.positionScrollbar("y"),
                (s.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              K(s.el, s.classNames.scrolling),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              s.isMouseEntering ||
                (J(s.el, s.classNames.mouseEntered),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                (s.isMouseEntering = !0)),
                s.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              K(s.el, s.classNames.mouseEntered),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              s.axis.x.track.el &&
                s.axis.y.track.el &&
                s.axis.x.scrollbar.el &&
                s.axis.y.scrollbar.el &&
                ((s.axis.x.track.rect =
                  s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var i, r, o, l, n, a, c, h, d, u, p;
              if (s.draggedAxis && s.contentWrapperEl) {
                var f = s.axis[s.draggedAxis].track,
                  v =
                    null !==
                      (r =
                        null === (i = f.rect) || void 0 === i
                          ? void 0
                          : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r
                      ? r
                      : 0,
                  m = s.axis[s.draggedAxis].scrollbar,
                  g =
                    null !==
                      (l =
                        null === (o = s.contentWrapperEl) || void 0 === o
                          ? void 0
                          : o[s.axis[s.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== l
                      ? l
                      : 0,
                  b = parseInt(
                    null !==
                      (a =
                        null === (n = s.elStyles) || void 0 === n
                          ? void 0
                          : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a
                      ? a
                      : "0px",
                    10,
                  );
                t.preventDefault(), t.stopPropagation();
                var E =
                    ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (h =
                        null === (c = f.rect) || void 0 === c
                          ? void 0
                          : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h
                      ? h
                      : 0) -
                    s.axis[s.draggedAxis].dragOffset,
                  y =
                    ((E =
                      "x" === s.draggedAxis && s.isRtl
                        ? (null !==
                            (u =
                              null === (d = f.rect) || void 0 === d
                                ? void 0
                                : d[s.axis[s.draggedAxis].sizeAttr]) &&
                          void 0 !== u
                            ? u
                            : 0) -
                          m.size -
                          E
                        : E) /
                      (v - m.size)) *
                    (g - b);
                "x" === s.draggedAxis &&
                  s.isRtl &&
                  (y = (
                    null === (p = e.getRtlHelpers()) || void 0 === p
                      ? void 0
                      : p.isScrollingToNegative
                  )
                    ? -y
                    : y),
                  (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                    y);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = G(s.el),
                i = Q(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                K(s.el, s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = V(V({}, e.defaultOptions), i)),
            (this.classNames = V(
              V({}, e.defaultOptions.classNames),
              i.classNames,
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el,
              ),
            );
          (this.onMouseMove = D(this._onMouseMove, 64)),
            (this.onWindowResize = q(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = q(
              this._onStopScrolling,
              this.stopScrollDelay,
            )),
            (this.onMouseEntered = q(
              this._onMouseEntered,
              this.stopScrollDelay,
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var i = t.firstElementChild,
              s = null == i ? void 0 : i.firstElementChild;
            if (!s) return null;
            document.body.appendChild(i), (i.scrollLeft = 0);
            var r = e.getOffset(i),
              o = e.getOffset(s);
            i.scrollLeft = -999;
            var l = e.getOffset(s);
            return (
              document.body.removeChild(i),
              (e.rtlHelpers = {
                isScrollOriginAtZero: r.left !== o.left,
                isScrollingToNegative: o.left !== l.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : j();
            } catch (e) {
              return j();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = G(e),
              s = Q(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            n &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              ee(this.classNames.wrapper),
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(ee(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(ee(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                ee(this.classNames.offset),
              )),
              (this.maskEl = this.el.querySelector(ee(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                ee(this.classNames.placeholder),
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                ee(this.classNames.heightAutoObserverWrapperEl),
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                ee(this.classNames.heightAutoObserverEl),
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(ee(this.classNames.track))
                  .concat(ee(this.classNames.horizontal)),
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(ee(this.classNames.track))
                  .concat(ee(this.classNames.vertical)),
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(ee(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(ee(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (J(this.axis.x.scrollbar.el, this.classNames.visible),
                J(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              i = Q(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              i.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var s = !1,
                  r = i.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new r(function () {
                  s &&
                    i.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  i.requestAnimationFrame(function () {
                    s = !0;
                  });
              }
              (this.mutationObserver = new i.MutationObserver(function () {
                i.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = Q(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                i = this.heightAutoObserverEl.offsetHeight <= 1,
                s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                r = this.contentWrapperEl.offsetWidth,
                o = this.elStyles.overflowX,
                l = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var n = this.contentEl.scrollHeight,
                a = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
                (this.placeholderEl.style.width = s
                  ? "".concat(t || a, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(n, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && a > t),
                (this.axis.y.isOverflowing = n > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== o && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== l && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && a > r - d),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && n > c - h),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px",
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px",
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, i;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var s,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              o =
                null !==
                  (i =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== i
                  ? i
                  : 0,
              l = o / r;
            return (
              (s = Math.max(~~(l * o), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (s = Math.min(s, this.options.scrollbarMaxSize)),
              s
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var i, s, r;
            void 0 === t && (t = "y");
            var o = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              o.el &&
              this.elStyles
            ) {
              var l = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                n =
                  (null === (i = this.axis[t].track.el) || void 0 === i
                    ? void 0
                    : i[this.axis[t].offsetSizeAttr]) || 0,
                a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (s = e.getRtlHelpers()) || void 0 === s
                  ? void 0
                  : s.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (r = e.getRtlHelpers()) || void 0 === r
                      ? void 0
                      : r.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var h = c / (l - a),
                d = ~~((n - o.size) * h);
              (d = "x" === t && this.isRtl ? -d + (n - o.size) : d),
                (o.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(d, "px, 0, 0)")
                    : "translate3d(0, ".concat(d, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            t &&
              i &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  )),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (J(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (K(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  J(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? J(t.scrollbar.el, this.classNames.hover)
                    : K(t.scrollbar.el, this.classNames.hover))
                : (K(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              K(this.axis[e].track.el, this.classNames.hover),
              K(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var i;
            void 0 === t && (t = "y");
            var s = G(this.el),
              r = Q(this.el),
              o = this.axis[t].scrollbar,
              l = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              l -
              ((null === (i = o.rect) || void 0 === i
                ? void 0
                : i[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              J(this.el, this.classNames.dragging),
              s.addEventListener("mousemove", this.drag, !0),
              s.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (s.addEventListener("click", this.preventClick, !0),
                  s.addEventListener("dblclick", this.preventClick, !0))
                : (r.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var i,
              s,
              r,
              o,
              l = this;
            void 0 === t && (t = "y");
            var n = this.axis[t];
            if (
              this.options.clickOnTrack &&
              n.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var a = Q(this.el);
              this.axis[t].scrollbar.rect =
                n.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (s =
                      null === (i = this.axis[t].scrollbar.rect) || void 0 === i
                        ? void 0
                        : i[this.axis[t].offsetAttr]) && void 0 !== s
                    ? s
                    : 0,
                h = parseInt(
                  null !==
                    (o =
                      null === (r = this.elStyles) || void 0 === r
                        ? void 0
                        : r[this.axis[t].sizeAttr]) && void 0 !== o
                    ? o
                    : "0px",
                  10,
                ),
                d = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                u =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                p = -1 === u ? d - h : d + h,
                f = function () {
                  l.contentWrapperEl &&
                    (-1 === u
                      ? d > p &&
                        ((d -= 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = d),
                        a.requestAnimationFrame(f))
                      : d < p &&
                        ((d += 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = d),
                        a.requestAnimationFrame(f)));
                };
              f();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = Q(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0,
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll,
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = Z),
          (e.helpers = U),
          e
        );
      })(),
      ie = function (e, t) {
        return (
          (ie =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }),
          ie(e, t)
        );
      };
    var se = te.helpers,
      re = se.getOptions,
      oe = se.addClasses,
      le = (function (e) {
        function t() {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          var r = e.apply(this, i) || this;
          return t.instances.set(i[0], r), r;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = e;
            }
            ie(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements,
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, re(e.attributes));
                },
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              i,
              s = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(s.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  oe(this.wrapperEl, this.classNames.wrapper),
                  oe(this.contentWrapperEl, this.classNames.contentWrapper),
                  oe(this.offsetEl, this.classNames.offset),
                  oe(this.maskEl, this.classNames.mask),
                  oe(this.contentEl, this.classNames.contentEl),
                  oe(this.placeholderEl, this.classNames.placeholder),
                  oe(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl,
                  ),
                  oe(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl,
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl,
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (i = this.contentWrapperEl) ||
                  void 0 === i ||
                  i.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var r = document.createElement("div"),
                o = document.createElement("div");
              oe(r, this.classNames.track),
                oe(o, this.classNames.scrollbar),
                r.appendChild(o),
                (this.axis.x.track.el = r.cloneNode(!0)),
                oe(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = r.cloneNode(!0)),
                oe(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            te.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            te.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations,
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements,
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, re(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, re(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          },
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(te);
    n && le.initHtmlApi(),
      document.querySelectorAll("[data-simplebar]").length &&
        document.querySelectorAll("[data-simplebar]").forEach((e) => {
          new le(e, { autoHide: !1 });
        }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".burger");
        e &&
          e.addEventListener("click", function (e) {
            t && document.documentElement.classList.toggle("menu-open");
          });
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              l.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && l.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const i = document.forms;
        if (i.length)
          for (const e of i)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                l.formClean(t);
              });
        async function s(e, i) {
          if (0 === (t ? l.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              i.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                s = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                r = new FormData(e);
              e.classList.add("_sending");
              const o = await fetch(t, { method: s, body: r });
              if (o.ok) {
                await o.json();
                e.classList.remove("_sending"), n(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (i.preventDefault(), n(e));
          } else {
            i.preventDefault();
            const t = e.querySelector("._form-error");
            t &&
              e.hasAttribute("data-goto-error") &&
              ((e, t = !1, i = 500, s = 0) => {
                const l = "string" == typeof e ? document.querySelector(e) : e;
                if (l) {
                  let n = "",
                    a = 0;
                  t &&
                    ((n = "header.header"),
                    (a = document.querySelector(n).offsetHeight));
                  let c = {
                    speedAsDuration: !0,
                    speed: i,
                    header: n,
                    offset: s,
                    easing: "easeOutQuad",
                  };
                  if (
                    (document.documentElement.classList.contains("menu-open") &&
                      r(),
                    "undefined" != typeof SmoothScroll)
                  )
                    new SmoothScroll().animateScroll(l, "", c);
                  else {
                    let e = l.getBoundingClientRect().top + scrollY;
                    window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
                  }
                  o(`[gotoBlock]: Юхуу...едем к ${e}`);
                } else
                  o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
              })(t, !0, 1e3);
          }
        }
        function n(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } }),
          ),
            setTimeout(() => {
              if (e.popup) {
                const i = t.dataset.popupMessage;
                i && e.popup.open(i);
              }
            }, 0),
            l.formClean(t),
            o(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();
