define("wedding/effect/js/units/objectUtil", ["zepto"], function (e) {
    var t = function () {
    };
    return t.prototype.createEmptyObject = function (e) {
        var t = {}, n = function () {
        };
        if ("function" == typeof e)for (var r in e.prototype)"function" == typeof e.prototype[r] && (t[r] = n);
        return t
    }, new t
}), define("wedding/effect/js/units/zepto/touch", ["zepto"], function (e) {
    (function (e) {
        function t(e, t, n, r) {
            return Math.abs(e - t) >= Math.abs(n - r) ? e - t > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
        }

        function n() {
            l = null, h.last && (h.el.trigger("longTap"), h = {})
        }

        function r() {
            l && clearTimeout(l), l = null
        }

        function i() {
            u && clearTimeout(u), a && clearTimeout(a), f && clearTimeout(f), l && clearTimeout(l), u = a = f = l = null, h = {}
        }

        function s(e) {
            return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
        }

        function o(e, t) {
            return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
        }

        var u, a, f, l, c, h = {}, p = 750;
        e(document).ready(function () {
            var d, v, m, g, y = 0, b = 0;
            "MSGesture" in window && (c = new MSGesture, c.target = document.body), e(document).bind("MSGestureEnd", function (e) {
                var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                t && (h.el.trigger("swipe"), h.el.trigger("swipe" + t))
            }).on("touchstart MSPointerDown pointerdown", function (t) {
                (!(g = o(t, "down")) || s(t)) && (m = g ? t : t.touches[0], t.touches && 1 === t.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), d = Date.now(), v = d - (h.last || d), h.el = e("tagName" in m.target ? m.target : m.target.parentNode), u && clearTimeout(u), h.x1 = m.pageX, h.y1 = m.pageY, v > 0 && 250 >= v && (h.isDoubleTap = !0), h.last = d, l = setTimeout(n, p), c && g && c.addPointer(t.pointerId))
            }).on("touchmove MSPointerMove pointermove", function (e) {
                (!(g = o(e, "move")) || s(e)) && (m = g ? e : e.touches[0], r(), h.x2 = m.pageX, h.y2 = m.pageY, y += Math.abs(h.x1 - h.x2), b += Math.abs(h.y1 - h.y2))
            }).on("touchend MSPointerUp pointerup", function (n) {
                (!(g = o(n, "up")) || s(n)) && (r(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? f = setTimeout(function () {
                    h.el.trigger("swipe"), h.el.trigger("swipe" + t(h.x1, h.x2, h.y1, h.y2)), h = {}
                }, 0) : "last" in h && (30 > y && 30 > b ? a = setTimeout(function () {
                    var t = e.Event("tap");
                    t.cancelTouch = i, h.el.trigger(t), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : u = setTimeout(function () {
                        u = null, h.el && h.el.trigger("singleTap"), h = {}
                    }, 250)
                }, 0) : h = {}), y = b = 0)
            }).on("touchcancel MSPointerCancel pointercancel", i), e(window).on("scroll", i)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
            e.fn[t] = function (e) {
                return this.on(t, e)
            }
        })
    })(e)
}), define("wedding/effect/js/units/zepto/coffee", ["zepto"], function (e) {
    (function (e, t) {
        function n(e) {
            return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }

        function r(e) {
            return i ? i + e : e.toLowerCase()
        }

        var i, s, o, u, a, f, l, c, h, p, d = "", v = {
            Webkit: "webkit",
            Moz: "",
            O: "o"
        }, m = window.document, g = m.createElement("div"), y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, b = {};
        e.each(v, function (e, n) {
            return g.style[e + "TransitionProperty"] !== t ? (d = "-" + e.toLowerCase() + "-", i = n, !1) : void 0
        }), s = d + "transform", b[o = d + "transition-property"] = b[u = d + "transition-duration"] = b[f = d + "transition-delay"] = b[a = d + "transition-timing-function"] = b[l = d + "animation-name"] = b[c = d + "animation-duration"] = b[p = d + "animation-delay"] = b[h = d + "animation-timing-function"] = "", e.fx = {
            off: i === t && g.style.transitionProperty === t,
            speeds: {_default: 400, fast: 200, slow: 600},
            cssPrefix: d,
            transitionEnd: r("TransitionEnd"),
            animationEnd: r("AnimationEnd")
        }, e.fn.animate = function (n, r, i, s, o) {
            return e.isFunction(r) && (s = r, i = t, r = t), e.isFunction(i) && (s = i, i = t), e.isPlainObject(r) && (i = r.easing, s = r.complete, o = r.delay, r = r.duration), r && (r = ("number" == typeof r ? r : e.fx.speeds[r] || e.fx.speeds._default) / 1e3), o && (o = parseFloat(o) / 1e3), this.anim(n, r, i, s, o)
        }, e.fn.anim = function (r, i, d, v, m) {
            var g, w, E, S = {}, x = "", T = this, N = e.fx.transitionEnd, C = !1;
            if (i === t && (i = e.fx.speeds._default / 1e3), m === t && (m = 0), e.fx.off && (i = 0), "string" == typeof r)S[l] = r, S[c] = i + "s", S[p] = m + "s", S[h] = d || "linear", N = e.fx.animationEnd; else {
                w = [];
                for (g in r)y.test(g) ? x += g + "(" + r[g] + ") " : (S[g] = r[g], w.push(n(g)));
                x && (S[s] = x, w.push(s)), i > 0 && "object" == typeof r && (S[o] = w.join(", "), S[u] = i + "s", S[f] = m + "s", S[a] = d || "linear")
            }
            return E = function (t) {
                if ("undefined" != typeof t) {
                    if (t.target !== t.currentTarget)return;
                    e(t.target).unbind(N, E)
                } else e(this).unbind(N, E);
                C = !0, e(this).css(b), v && v.call(this)
            }, i > 0 && (this.bind(N, E), setTimeout(function () {
                C || E.call(T)
            }, 1e3 * i + 25)), this.size() && this.get(0).clientLeft, this.css(S), 0 >= i && setTimeout(function () {
                T.each(function () {
                    E.call(this)
                })
            }, 0), this
        }, g = null
    })(e), function (e) {
        e.fn.coffee = function (t) {
            function n() {
                var t = o(8, h.steamMaxSize), n = s(1, h.steamsFontFamily), r = "#" + s(6, "0123456789ABCDEF"), i = o(0, 22), a = o(-90, 89), f = u(.2, .5), c = e.fx.cssPrefix + "transform";
                c = c + ":rotate(" + a + "deg) scale(" + f + ");";
                var v = e('<span class="coffee-steam">' + s(1, h.steams) + "</span>"), m = o(0, p - h.steamWidth - t);
                m > i && (m = o(0, i)), v.css({
                    position: "absolute",
                    left: i,
                    top: h.steamHeight,
                    "font-size:": t + "px",
                    color: r,
                    "font-family": n,
                    display: "block",
                    opacity: 1
                }).attr("style", v.attr("style") + c).appendTo(d).animate({
                    top: o(h.steamHeight / 2, 0),
                    left: m,
                    opacity: 0
                }, o(h.steamFlyTime / 2, 1.2 * h.steamFlyTime), l, function () {
                    v.remove(), v = null
                })
            }

            function r() {
                var e = o(-10, 10);
                e += parseInt(d.css("left")), e >= 54 ? e = 54 : 34 >= e && (e = 34), d.animate({left: e}, o(1e3, 3e3), l)
            }

            function s(e, t) {
                e = e || 1;
                var n = "", r = t.length - 1, s = 0;
                for (i = 0; e > i; i++)s = o(0, r - 1), n += t.slice(s, s + 1);
                return n
            }

            function o(e, t) {
                var n = t - e, r = e + Math.round(Math.random() * n);
                return parseInt(r)
            }

            function u(e, t) {
                var n = t - e, r = e + Math.random() * n;
                return parseFloat(r)
            }

            var a = null, f = null, l = "cubic-bezier(.09,.64,.16,.94)", c = e(this), h = e.extend({}, e.fn.coffee.defaults, t), p = h.steamWidth, d = e('<div class="coffee-steam-box"></div>').css({
                height: h.steamHeight,
                width: h.steamWidth,
                left: 60,
                top: -50,
                position: "absolute",
                overflow: "hidden",
                "z-index": 0
            }).appendTo(c);
            return e.fn.coffee.stop = function () {
                clearInterval(a), clearInterval(f)
            }, e.fn.coffee.start = function () {
                a = setInterval(function () {
                    n()
                }, o(h.steamInterval / 2, 2 * h.steamInterval)), f = setInterval(function () {
                    r()
                }, o(100, 1e3) + o(1e3, 3e3))
            }, c
        }, e.fn.coffee.defaults = {
            steams: ["jQuery", "HTML5", "HTML6", "CSS2", "CSS3", "JS", "$.fn()", "char", "short", "if", "float", "else", "type", "case", "function", "travel", "return", "array()", "empty()", "eval", "C++", "JAVA", "PHP", "JSP", ".NET", "while", "this", "$.find();", "float", "$.ajax()", "addClass", "width", "height", "Click", "each", "animate", "cookie", "bug", "Design", "Julying", "$(this)", "i++", "Chrome", "Firefox", "Firebug", "IE6", "Guitar", "Music", "攻城师", "旅行", "王子墨", "啤酒"],
            steamsFontFamily: ["Verdana", "Geneva", "Comic Sans MS", "MS Serif", "Lucida Sans Unicode", "Times New Roman", "Trebuchet MS", "Arial", "Courier New", "Georgia"],
            steamFlyTime: 5e3,
            steamInterval: 500,
            steamMaxSize: 15,
            steamHeight: 100,
            steamWidth: 150
        }, e.fn.coffee.version = "2.0.0"
    }(e)
}), define("wedding/effect/js/units/globalAudio", ["zepto", "./objectUtil", "./zepto/touch", "./zepto/coffee"], function (e, t) {
    var n = function (t) {
        this._$globalAudio = t, this._$tip = e("<span></span>"), this.audio = this._$globalAudio.find("audio")[0], this.isAllowManually = !1, this.playState = "ready";
        var n = this;
        this._$globalAudio.append(this._$tip), this._$globalAudio.coffee({
            steams: ['<img src="app/wedding/gxeffect/skin/img/musicalNotes.png"/>', '<img src="app/wedding/gxeffect/skin/img/musicalNotes.png"/>', '<img src="app/wedding/gxeffect/skin/img/musicalNotes.png"/>', '<img src="app/wedding/gxeffect/skin/img/musicalNotes.png"/>', '<img src="app/wedding/gxeffect/skin/img/musicalNotes.png"/>', '<img src="app/wedding/gxeffect/skin/img/musicalNotes.png"/>'],
            steamHeight: 100,
            steamWidth: 50
        }), this.audio.autoplay && (this.audio.pause(), function () {
            n.play()
        }()), function () {
            n.isAllowManually = !0
        }(), this._$globalAudio.on("click", function (e) {
            e.preventDefault(), n.isAllowManually && (n._$globalAudio.is(".z-play") ? n.pause() : n.play())
        }), e(document).one("touchstart", function () {
            n.audio.play()
        })
    };
    n.prototype.play = function () {
        this._$globalAudio.is(".z-play") || (this.audio.play(), this._$globalAudio.removeClass("z-pause").addClass("z-play"), this._showTip("开启"), this.playState = "playing", e.fn.coffee.start())
    }, n.prototype.pause = function () {
        this._$globalAudio.is(".z-pause") || (this.audio.pause(), this._$globalAudio.removeClass("z-play").addClass("z-pause"), this._showTip("关闭"), this.playState = "pause", e.fn.coffee.stop())
    }, n.prototype._showTip = function (e) {
        var t = this;
        this._$tip.text(e), this._$tip.addClass("z-show"), setTimeout(function () {
            t._$tip.removeClass("z-show")
        }, 1e3)
    };
    var r, i = e(".u-globalAudio");
    return r = i.length ? new n(e(".u-globalAudio")) : t.createEmptyObject(n), r
}), define("wedding/effect/js/units/zepto/selector", ["zepto"], function (e) {
    (function (e) {
        function t(t) {
            return t = e(t), (!!t.width() || !!t.height()) && "none" !== t.css("display")
        }

        function n(e, t) {
            e = e.replace(/=#\]/g, '="#"]');
            var n, r, i = u.exec(e);
            if (i && i[2] in o && (n = o[i[2]], r = i[3], e = i[1], r)) {
                var s = Number(r);
                r = isNaN(s) ? r.replace(/^["']|["']$/g, "") : s
            }
            return t(e, n, r)
        }

        var r = e.zepto, i = r.qsa, s = r.matches, o = e.expr[":"] = {
            visible: function () {
                return t(this) ? this : void 0
            }, hidden: function () {
                return t(this) ? void 0 : this
            }, selected: function () {
                return this.selected ? this : void 0
            }, checked: function () {
                return this.checked ? this : void 0
            }, parent: function () {
                return this.parentNode
            }, first: function (e) {
                return 0 === e ? this : void 0
            }, last: function (e, t) {
                return e === t.length - 1 ? this : void 0
            }, eq: function (e, t, n) {
                return e === n ? this : void 0
            }, contains: function (t, n, r) {
                return e(this).text().indexOf(r) > -1 ? this : void 0
            }, has: function (e, t, n) {
                return r.qsa(this, n).length ? this : void 0
            }
        }, u = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), a = /^\s*>/, f = "Zepto" + +(new Date);
        r.qsa = function (t, s) {
            return n(s, function (n, o, u) {
                try {
                    var l;
                    !n && o ? n = "*" : a.test(n) && (l = e(t).addClass(f), n = "." + f + " " + n);
                    var c = i(t, n)
                } catch (h) {
                    throw console.error("error performing selector: %o", s), h
                } finally {
                    l && l.removeClass(f)
                }
                return o ? r.uniq(e.map(c, function (e, t) {
                    return o.call(e, t, c, u)
                })) : c
            })
        }, r.matches = function (e, t) {
            return n(t, function (t, n, r) {
                return !(t && !s(e, t) || n && n.call(e, null, r) !== e)
            })
        }
    })(e)
}), define("wedding/effect/js/units/zepto/data", ["zepto"], function (e) {
    (function (e) {
        function t(t, r) {
            var a = t[u], f = a && i[a];
            if (void 0 === r)return f || n(t);
            if (f) {
                if (r in f)return f[r];
                var l = o(r);
                if (l in f)return f[l]
            }
            return s.call(e(t), r)
        }

        function n(t, n, s) {
            var a = t[u] || (t[u] = ++e.uuid), f = i[a] || (i[a] = r(t));
            return void 0 !== n && (f[o(n)] = s), f
        }

        function r(t) {
            var n = {};
            return e.each(t.attributes || a, function (t, r) {
                0 == r.name.indexOf("data-") && (n[o(r.name.replace("data-", ""))] = e.zepto.deserializeValue(r.value))
            }), n
        }

        var i = {}, s = e.fn.data, o = e.camelCase, u = e.expando = "Zepto" + +(new Date), a = [];
        e.fn.data = function (r, i) {
            return void 0 === i ? e.isPlainObject(r) ? this.each(function (t, i) {
                e.each(r, function (e, t) {
                    n(i, e, t)
                })
            }) : 0 == this.length ? void 0 : t(this[0], r) : this.each(function () {
                n(this, r, i)
            })
        }, e.fn.removeData = function (t) {
            return "string" == typeof t && (t = t.split(/\s+/)), this.each(function () {
                var n = this[u], r = n && i[n];
                r && e.each(t || r, function (e) {
                    delete r[t ? o(this) : e]
                })
            })
        }, ["remove", "empty"].forEach(function (t) {
            var n = e.fn[t];
            e.fn[t] = function () {
                var e = this.find("*");
                return "remove" === t && (e = e.add(this)), e.removeData(), n.call(this)
            }
        })
    })(e)
}), define("wedding/effect/js/modules/app", ["zepto", "../units/globalAudio", "../units/zepto/selector", "../units/zepto/data"], function (e) {
    var t;
    return function (e) {
        function n(t) {
            function n() {
                var t = e("input[data-weixin-callback]");
                t.length > 0 && (window.location = t.val())
            }

            console.log("app init"), this._$app = t, this._$pages = this._$app.find(".page"), this.$currentPage = this._$pages.eq(0), this._isFirstShowPage = !0, this._isInitComplete = !1, this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !1;
            var r = this, i = e(window)
        }

        n.prototype.elasticity = function () {
            var t = e(window);
            return t.on("scroll.elasticity", function (e) {
                e.preventDefault()
            }).on("touchmove.elasticity", function (e) {
                e.preventDefault()
            }), t.delegate("img", "mousemove", function (e) {
                e.preventDefault()
            }), this
        }, n.prototype.removeLoad = function () {
            var t = this, n = e("#app-loading");
            return n.addClass("z-hide"), n.on("webkitTransitionEnd", function () {
                n.remove()
            }), t._isInitComplete = !0, t.showPage(), t
        }, n.prototype.guideTop = function () {
            var t = this, n = e('<a href="javascript:void(0);" class="u-guideTop z-move"></a>');
            return t._isDisableFlipPage && n.hide(), t._$pages.not(t._$pages.last()).append(n), t
        }, n.prototype.addEvent = function () {
            var t = this, n = null, r = null, i = !1, s = 0, o = 0, u = 0, a = 0, f = !1, l = !1, c = !0, t = this;
            return t._$app.on("mousedown touchstart", function (e) {
                t._isDisableFlipPage || (n = t._$pages.filter(".z-current").get(0), r = null, n && (f = !0, l = !1, c = !0, u = 0, a = 0, "mousedown" == e.type ? (s = e.pageX, o = e.pageY) : (s = e.touches[0].pageX, o = e.touches[0].pageY), n.classList.add("z-move"), n.style.webkitTransition = "none"))
            }).on("mousemove touchmove", function (h) {
                if (f && (r || c) && ("mousemove" == h.type ? (u = h.pageX - s, a = h.pageY - o) : (u = h.touches[0].pageX - s, a = h.touches[0].pageY - o), Math.abs(a) > Math.abs(u)))if (a > 0) {
                    if (t._isDisableFlipPrevPage)return;
                    l || c ? (l = !1, c = !1, r && (r.classList.remove("z-active"), r.classList.remove("z-move")), r = n.previousElementSibling && n.previousElementSibling.classList.contains("page") ? n.previousElementSibling : i ? b._$pages.last().get(0) : !1, r && r.classList.contains("page") ? (r.classList.add("z-active"), r.classList.add("z-move"), r.style.webkitTransition = "none", r.style.webkitTransform = "translateY(-100%)", e(r).trigger("active"), n.style.webkitTransformOrigin = "bottom center") : (n.style.webkitTransform = "translateY(0px)", r = null)) : (n.style.webkitTransform = "translateY(" + a + "px)", r.style.webkitTransform = "translateY(-" + (window.innerHeight - a) + "px)")
                } else if (0 > a) {
                    if (t._isDisableFlipNextPage)return;
                    !l || c ? (l = !0, c = !1, r && (r.classList.remove("z-active"), r.classList.remove("z-move")), n.nextElementSibling && n.nextElementSibling.classList.contains("page") ? r = n.nextElementSibling : (r = t._$pages.first().get(0), i = !0), r && r.classList.contains("page") ? (r.classList.add("z-active"), r.classList.add("z-move"), r.style.webkitTransition = "none", r.style.webkitTransform = "translateY(" + window.innerHeight + "px)", e(r).trigger("active"), n.style.webkitTransformOrigin = "top center") : (n.style.webkitTransform = "translateY(0px)", r = null)) : (n.style.webkitTransform = "translateY(" + a + "px)", r.style.webkitTransform = "translateY(" + (window.innerHeight + a) + "px)")
                }
            }).on("mouseup touchend", function () {
                f && (f = !1, r ? (t._isDisableFlipPage = !0, n.style.webkitTransition = "-webkit-transform 0.3s ease-out", r.style.webkitTransition = "-webkit-transform 0.3s ease-out", Math.abs(a) > Math.abs(u) && Math.abs(a) > 100 ? (l ? (n.style.webkitTransform = "translateY(-" + window.innerHeight + "px)", r.style.webkitTransform = "translateY(0px)") : (n.style.webkitTransform = "translateY(" + window.innerHeight + "px)", r.style.webkitTransform = "translateY(0px)"), setTimeout(function () {
                    r.classList.remove("z-active"), r.classList.remove("z-move"), r.classList.add("z-current"), n.classList.remove("z-current"), n.classList.remove("z-move"), t._isDisableFlipPage = !1, e(n).trigger("hide"), t.$currentPage = e(r).trigger("current")
                }, 500)) : (l ? (n.style.webkitTransform = "translateY(0px)", r.style.webkitTransform = "translateY(100%)") : (n.style.webkitTransform = "translateY(0px)", r.style.webkitTransform = "translateY(-100%)"), setTimeout(function () {
                    e(n).trigger("current"), r.classList.remove("z-active"), r.classList.remove("z-move"), t._isDisableFlipPage = !1
                }, 500))) : (n.classList.remove("z-move"), t._isDisableFlipPage = !1))
            }), t
        }, n.prototype.showPage = function (t) {
            var n = this;
            return window._app_showPage ? window._app_showPage : window._app_showPage = function (t) {
                var n, r = typeof t;
                switch (r) {
                    case"number":
                        n = this._$pages.eq(t);
                        break;
                    case"string":
                        n = this._$pages.filter(t).first();
                        break;
                    case"object":
                        n = e(t)
                }
                !this._isFirstShowPage || n && n.length || (n = this.$currentPage, this._isFirstShowPage = !1), n && n.length && (this._$pages.filter(".z-current").removeClass("z-current"), n.css("-webkit-transform", "none").addClass("z-current"), n.trigger("current"), this.$currentPage = n)
            }, this._isInitComplete ? window._app_showPage.apply(n, [t]) : e(window).one("load", function () {
                window._app_showPage.apply(n, [t])
            }), n
        }, n.prototype.disableFlipPage = function () {
            this._isDisableFlipPage = !0
        }, n.prototype.enableFlipPage = function () {
            this._isDisableFlipPage = !1
        }, n.prototype.setFlipPageMode = function (e) {
            if ("number" != typeof e || 0 > e || e > 3)throw"App.setFlipPageMode 方法调用错误：请提供以下正确的参数（0:禁用翻页、1:启用上下翻页、2:仅启用向上翻页、3:仅启用向下翻页）";
            switch (e) {
                case 0:
                    this._isDisableFlipPage = !0, this._isDisableFlipPrevPage = !0, this._isDisableFlipNextPage = !0;
                    break;
                case 1:
                    this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !1;
                    break;
                case 2:
                    this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !0;
                    break;
                case 3:
                    this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !0, this._isDisableFlipNextPage = !1
            }
        }, n.prototype.init = function () {
            console.log("app init"), this._$app = e("body"), this._$pages = this._$app.find(".page"), this.$currentPage = this._$pages.eq(0), this._isFirstShowPage = !0, this._isInitComplete = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !1;
            var t = this, n = e(window);
            return t.elasticity().addEvent().guideTop().removeLoad(), t
        }, t = new n(e("body"))
    }(window.Zepto), t
}), define("wedding/effect/js/modules/index/leafShower", ["zepto"], function (e) {
    var t = function (e, t) {
        return e + Math.floor(Math.random() * (t - e))
    }, n = function (e, t) {
        return e + Math.random() * (t - e)
    }, r = function (e) {
        return e + "px"
    }, i = function (e) {
        return e + "s"
    }, s = function (e) {
        var s = document.createElement("i"), o = document.createElement("img");
        o.src = "app/wedding/effect/stand1/common/img/animation/" + e + t(1, 5) + ".png", s.style.top = "-50px", s.style.left = r(t(0, 300));
        var u = Math.random() < .5 ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        s.style.webkitAnimationName = "fade, drop", o.style.webkitAnimationName = u;
        var a = i(n(5, 11)), f = i(n(4, 8));
        s.style.webkitAnimationDuration = a + ", " + a;
        var l = i(n(0, 5));
        return s.style.webkitAnimationDelay = l + ", " + l, o.style.webkitAnimationDuration = f, s.appendChild(o), s
    }, o = function (t, n) {
        this.$target = t.addClass("m-leafShower"), this.settings = e.extend({leafCount: 20}, n);
        var r = this.$target.attr("data-plugin");
        if (r)for (var i = 0; i < this.settings.leafCount; i++)this.$target.append(s(r))
    };
    return e.fn.leafShower = function () {
        var t = "init";
        switch (arguments.length > 0 && "string" == typeof arguments[0] && (t = arguments[0]), t) {
            case"init":
                this.each(function (t, n) {
                    var r = e(n), i = new o(r);
                    r.data("plugin_leafShower", i)
                });
                break;
            case"getPluginObject":
                return $item.data("plugin_leafShower")
        }
        return this
    }, e
}), define("wedding/effect/js/modules/index/animationCloudBg", ["zepto"], function (e) {
    var t = function (t) {
        this.$target = t.addClass("m-animationCloudBg"), this.$target.height(window.innerHeight);
        for (var n = 1; 13 > n; n++) {
            var r = e("<i></i>");
            t.append(r)
        }
    };
    return t.prototype.start = function () {
        this.$target.removeClass("z-stop")
    }, t.prototype.stop = function () {
        this.$target.addClass("z-stop")
    }, e.fn.animationCloudBg = function () {
        var n = "init";
        switch (arguments.length > 0 && "string" == typeof arguments[0] && (n = arguments[0]), n) {
            case"init":
                this.each(function (n, r) {
                    var i = e(r), s = new t(i);
                    i.data("plugin_animationcloudbg", s)
                });
                break;
            case"getPluginObject":
                return $item.data("plugin_animationcloudbg");
            case"start":
                var r = this.data("plugin_animationcloudbg");
                r.start();
                break;
            case"stop":
                return $item.data("plugin_animationcloudbg")
        }
        return this
    }, e
}), define("wedding/effect/js/modules/index/meteorShower", ["zepto"], function (e) {
    var t = function (t, n) {
        this.$target = t.addClass("m-meteorShower"), this.settings = e.extend({starCount: 30, meteorCount: 20}, n);
        for (var r, i, s, o, u, a = "", f = 0; f < this.settings.starCount; f++)r = (320 * Math.random()).toFixed(2), i = (600 * Math.random()).toFixed(2), o = Math.random().toFixed(2), u = (1 + 4 * Math.random()).toFixed(), s = Math.round(1 + 3 * Math.random()), a += '<i class="star style' + s + '" style="left:' + r + "px; top:" + i + "px; -webkit-animation-delay:" + o + "s; -webkit-animation: star " + u + 's linear infinite;"></i>';
        for (var f = 0; f < this.settings.meteorCount; f++)r = (400 * Math.random() - 280).toFixed(2), i = (100 * Math.random() - 80).toFixed(2), o = (.5 + 2.5 * Math.random()).toFixed(), u = (1.2 + 2.8 * Math.random()).toFixed(), s = Math.round(1 + 3 * Math.random()), a += '<i class="meteor style' + s + '" style="left:' + r + "px; top:" + i + "px; -webkit-animation-delay:" + o + "s; -webkit-animation: meteor " + u + 's linear infinite;"></i>';
        this.$target.append(a)
    };
    return e.fn.meteorShower = function () {
        var n = "init";
        switch (arguments.length > 0 && "string" == typeof arguments[0] && (n = arguments[0]), n) {
            case"init":
                this.each(function (n, r) {
                    var i = e(r), s = new t(i);
                    i.data("plugin_meteorShower", s)
                });
                break;
            case"getPluginObject":
                return $item.data("plugin_meteorShower")
        }
        return this
    }, e
}), define("wedding/effect/js/modules/index/main", ["zepto", "./leafShower", "./animationCloudBg", "./meteorShower"], function (e) {
    var t = e(".page-index");
    return {
        init: function () {
            var n = e("body");
            t.each(function (t, r) {
                console.log("index init"), $page = e(r), function () {
                    var t = $page.find(".m-animationBox"), r = "appBg1";
                    t.is(".m-leafShower") && t.leafShower(), t.is(".m-animationCloudBg") ? (t.animationCloudBg(), r = "appBg1") : t.is(".m-meteorShower") && (t.meteorShower({
                        starCount: 30,
                        meteorCount: 26
                    }), r = "appBg2"), e(window).on("load", function () {
                        var e = parseInt(n.data("app-id")), t = [3468];
                        t.indexOf(e) >= 0 ? n.css("background-image", "url(skin/img/app_" + e + ".jpg)") : n.addClass(r)
                    })
                }(), $page.on("active", function () {
                    console.log("index active")
                }).on("current", function () {
                    console.log("index current")
                })
            })
        }
    }
}), define("wedding/effect/js/modules/teletext/main", ["zepto"], function (e) {
    var t = function (e, t) {
        var n = new Image;
        n.src = e;
        if (n.complete) {
            t.call(n);
            return
        }
        n.onload = function () {
            t.call(n)
        }
    }, n = function (n) {
        var r = this;
        this.$target = n.addClass("m-cascadingTeletext"), this.$_currentItem = this.$target.find("li").first().addClass("z-current"), e(window).on("resize", function () {
            r.$target.height(window.innerHeight)
        }).trigger("resize"), this.$target.find(".imgText").each(function (t, n) {
            0 == e.trim(n.innerText).length && e(n).remove()
        }), this.$target.on(e.isPC ? "click" : "swipeLeft swipeRight", function (e) {
            var n = r.$_currentItem.next();
            if (n.length > 0) {
                var i = n.find("img"), s = i.attr("data-original");
                if (s) {
                    i.after("<div class='img-loading'></div>");
                    var o = function () {
                        i.attr("src", s).removeAttr("data-original"), i.next().remove()
                    };
                    t.call(i, s, o)
                }
            }
            r.$_currentItem.addClass("swipeLeft" == e.type ? "z-hideToLeft" : "z-hideToRight")
        }).delegate("li", "webkitAnimationEnd", function () {
            r.$target.append(r.$_currentItem), r.$_currentItem.removeClass("z-current z-hideToLeft z-hideToRight"), r.$_currentItem = r.$target.find("li").first().addClass("z-current")
        })
    };
    n.show = function () {
        this.$target.addClass("z-show")
    }, e.fn.cascadingTeletext = function () {
        var t = "init";
        switch (arguments.length > 0 && "string" == typeof arguments[0] && (t = arguments[0]), t) {
            case"init":
                this.each(function (t, r) {
                    var i = e(r), s = new n(i);
                    i.data("plugin_cascadingTeletext", s)
                });
                break;
            case"getPluginObject":
                return $item.data("plugin_cascadingTeletext")
        }
        return this
    };
    var r = e(".page-teletext");
    return {
        init: function () {
            r.each(function (t, n) {
                console.log("teletext init"), $page = e(n);
                var r = $page.find(".m-cascadingTeletext").cascadingTeletext();
                $page.on("active", function () {
                    console.log("teletext active"), r.removeClass("z-viewArea").find("li.z-current").removeClass("z-current")
                }).on("current", function () {
                    console.log("teletext current"), r.addClass("z-viewArea"), setTimeout(function () {
                        r.find("li:first").addClass("z-current")
                    }, 1800)
                })
            })
        }
    }
}), define("wedding/effect/js/units/maskLayer", ["zepto"], function (e) {
    !function () {
        var t = function (t, n) {
            var r = this;
            if (this._$maskLayer = t.addClass("u-maskLayer"), this.state = this._$maskLayer.is(".z-show") ? "show" : "hide", this.settings = e.extend({
                    clickHideMode: 1,
                    closeButton: !0,
                    onShow: function () {
                    },
                    onHide: function () {
                    }
                }, n), this._events = {
                    show: [],
                    hide: []
                }, this._events.show.push(this.settings.onShow), this._events.hide.push(this.settings.onHide), this.settings.closeButton) {
                var i = e('<a href="javascript:void(0);" class="u-maskLayer-close"></a>');
                r._$maskLayer.append(i), i.on(e.isPC ? "click" : "tap", function (e) {
                    e.preventDefault(), r.hide()
                })
            }
            "show" == this.state ? r.show("_init") : r.hide("_init"), this.settings.clickHideMode && (r._$maskLayer.on(e.isPC ? "click" : "tap", function () {
                r.hide()
            }), 1 == r.settings.clickHideMode && r._$maskLayer.children().on(e.isPC ? "click" : "tap", function (e) {
                e.stopPropagation()
            }))
        };
        t.prototype.on = function (e, t) {
            this._events[e] && t && this._events[e].push(t)
        }, t.prototype.trigger = function (e) {
            if (this._events[e])for (var t = this._events[e], n = 0; n < t.length; n++)t[n]()
        }, t.prototype.show = function () {
            var e = this;
            "_init" == arguments[0] ? this._$maskLayer.addClass("z-show").show() : (this._$maskLayer.show().removeClass("z-hide").addClass("z-showing"), setTimeout(function () {
                e._$maskLayer.addClass("z-show").removeClass("z-showing"), e.state = "show", e.trigger("show")
            }, 500))
        }, t.prototype.hide = function () {
            var e = this;
            "_init" == arguments[0] ? this._$maskLayer.addClass("z-hide").hide() : (this._$maskLayer.removeClass("z-show").addClass("z-hideing"), setTimeout(function () {
                e._$maskLayer.addClass("z-hide").removeClass("z-hideing").hide(), e.state = "hide", e.trigger("hide")
            }, 500))
        }, e.fn.maskLayer = function (n) {
            var r = "init";
            switch (arguments.length > 0 && "string" == typeof arguments[0] && (r = arguments[0]), r) {
                case"init":
                    this.each(function (r, i) {
                        var s = e(i), o = new t(s, n);
                        s.data("plugin_maskLayer", o)
                    });
                    break;
                case"getPluginObject":
                    return this.data("plugin_maskLayer");
                default:
                    var i = this.data("plugin_maskLayer"), s = i[r];
                    if (s) {
                        var o = [];
                        arguments.length > 1 && (o = arguments[1]), s.apply(i, o)
                    }
            }
            return this
        }
    }()
}), define("wedding/effect/js/modules/link/main", ["zepto", "../app", "template", "../../units/maskLayer"], function (e, t, n) {
    var r = e(".page-link").add(".page-reback");
    return {
        init: function () {
            r.each(function (r, i) {
                console.log("link init"), $page = e(i);
                var s = $page.find('[href="weixin:share"]'), o = $page.find(".mod-message");
                if (s.length) {
                    var u = $page.find(".u-maskLayer");
                    $page.find(".page-content").append(u), u.maskLayer({
                        clickHideMode: 2, onShow: function () {
                            t.disableFlipPage()
                        }, onHide: function () {
                            t.enableFlipPage()
                        }
                    }), s.on(e.isPC ? "click" : "tap", function () {
                        u.maskLayer("show")
                    })
                }
                o.length && (function (t, r) {
                    var i = {
                        oHeight: function () {
                            var t = e(".app-content").height();
                            e(".mod-message").css({height: t * .9, top: t * .15});
                            var n = t * .85 - 252;
                            e("#leaveContent").height(n)
                        }, weekBox: function () {
                            var t = this;
                            e("#myLeave").on("click", function (n) {
                                n.stopPropagation(), e(".mod-message").on("mousedown mousemove mouseup touchstart touchmove touchend", function (e) {
                                    e.stopPropagation()
                                }), e(".mod-message").removeClass("cpm-hide"), t.showBooks(1)
                            }), e("#J_book_more").on("click", function () {
                                t.showBooks()
                            }), e(".app-content").delegate(".message-close", "click", function (t) {
                                t.preventDefault(), e(".mod-message").addClass("cpm-hide")
                            })
                        }, toRgb: function (e) {
                            var t = e.replace(/[^\d,]/g, "").split(",");
                            return t
                        }, setColor: function () {
                            var t = e(".leave_box").attr("data-color"), n = this.toRgb(t), r = e(".m-leave-item").length;
                            e(".leave-con,.close_btn,.m-leave-item .lea-time,.loading span").css("background-color", "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")"), e(".m-leave-item .name,.m-fill-btn").css("color", "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")");
                            for (var i = 0; i < r; i++)i % 2 == 0 ? e(".m-leave-item").eq(i).find(".lea-time .after").css("border-color", "transparent rgb(" + n[0] + "," + n[1] + "," + n[2] + ") transparent transparent") : e(".m-leave-item").eq(i).find(".lea-time .after").css("border-color", "transparent transparent transparent rgb(" + n[0] + "," + n[1] + "," + n[2] + ")")
                        }, showBooks: function (t) {
                            var r, i, s, o, u, a = 0;
                            t ? this.page = t : this.page = this.page + 1, this.loadstate = !0;
                            var f = e("#J_book_more");
                            this.sitecode = e("#leaveContent").attr("data-sitecode");
                            var l = f.find(".ui-refresh-icon"), c = this;
                            c.loadstate && (!c.totalPage || c.page <= c.totalPage) ? (c.loadstate = !1, l.addClass("ui-loading"), base.ajax.getJSON("app/querybooks", {
                                page: c.page,
                                sitecode: c.sitecode,
                                pagesize: 5
                            }, function (t) {
                                if (t.status === 200) {
                                    var t = t.entity, r = n("app_rebook_template", t), i = e("#J_book_list");
                                    c.page == 1 ? i.html(r) : i.append(r), e("#J_total").text(t.total), c.totalPage = t.totalPage, c.loadstate = !0, l.removeClass("ui-loading"), c.page < c.totalPage ? f.show() : f.hide()
                                } else floatNotify.simple(t.entity, "", 2e3)
                            })) : f.hide()
                        }, saveBook: function () {
                            var t = this, n = e("#J_rebook"), r = n.find('input[name="guestname"]'), i = n.find('input[name="guesttel"]'), s = n.find('textarea[name="bookcontent"]'), o = r.val(), u = i.val(), a = n.find('select[name="guestnum"]').val(), f = n.find('select[name="guesttype"]').val(), l = s.val(), c = e("#J_face_icon .emotion"), h = /\[[^\[\]]+\]/g;
                            l = l.replace(h, function (e) {
                                var t = e.replace(/[\[\]]/g, ""), n = c.find("span[rel='" + t + "']"), r = n.find("img").attr("src"), i = '<img src="' + r + '" />';
                                return i
                            });
                            var p = {
                                guestname: o,
                                guestnum: a,
                                bookcontent: l,
                                guesttel: u,
                                guesttype: f
                            }, d = {sitecode: this.sitecode, book: p};
                            o ? base.ajax.RESTful("app/savebook", "POST", d, function (e) {
                                e.status == 200 ? (s.val(""), r.val(""), floatNotify.simple("恭喜，保存成功", "", 2e3), t.showBooks(1)) : floatNotify.simple(e.entity, "", 2e3)
                            }) : floatNotify.simple("请填写您的姓名", "", 2e3)
                        }
                    };
                    i.weekBox(), t.leave = i
                }(window), e(document).ready(function () {
                    leave.oHeight(), e("#J_SaveReback_btn").click(function () {
                        leave.saveBook()
                    });
                    var t = e("#J_content"), n = e("#J_face_icon .emotion");
                    n.find("span").click(function () {
                        var n = t.val(), r = e(this).attr("rel");
                        t.val(n + "[" + r + "]")
                    })
                })), $page.on("active", function () {
                    console.log("link active")
                }).on("current", function () {
                    console.log("link current")
                })
            })
        }
    }
}), define("wedding/effect/js/modules/video/main", ["zepto", "../app", "../../units/globalAudio", "../../units/maskLayer"], function (e, t, n) {
    !function () {
        if (e("#youkujsapi").length == 0) {
            window._console = window.console;
            var t = document.createElement("script");
            t.id = "youkujsapi", t.onload = function () {
                window.console = window._console
            }, t.src = "http://player.youku.com/jsapi", e(document.head).append(t)
        }
        var n = 0, r = function (t, r) {
            var i = this;
            this.$target = t.addClass("m-youkuVideo"), this.settings = null, this.player = null, this._playerID = "videoBody_" + ++n;
            var s = this.$target.data("devid"), o = this.$target.data("src");
            this.settings = e.extend({
                devID: s ? s : "93ade447b6dbf757",
                url: o && o.indexOf("youku") >= 0 ? o : "http://v.youku.com/v_show/id_XNzAyNDcyMzAw.html",
                onPlayerReady: function () {
                    console.log("event：准备就绪")
                },
                onPlayStart: function () {
                    console.log("event：播放开始")
                },
                onPlayEnd: function () {
                    console.log("event：播放结束")
                }
            }, r), this.$target.attr("id", this._playerID), this.player = new YKU.Player(this._playerID, {
                styleid: "0",
                client_id: i.settings.devID,
                vid: i._getVidByUrl(i.settings.url),
                show_related: !1,
                autoplay: !0,
                events: {
                    onPlayerReady: i.settings.onPlayerReady, onPlayStart: function (e) {
                        i._isPlayStart = !0, i.settings.onPlayStart(e)
                    }, onPlayEnd: i.settings.onPlayEnd
                }
            }), this._isPlayStart = !1, this.$target.on("click", function () {
                i._isPlayStart || setTimeout(function () {
                    i.play()
                }, 200)
            })
        };
        r.prototype._getVidByUrl = function (e) {
            var t = e ? t = e.substring(e.indexOf("/id_") + 4, e.indexOf(".html")) : "";
            return t || console.log("error：视频地址不正确！"), t
        }, r.prototype.play = function () {
            try {
                this.player.playVideo()
            } catch (e) {
                console.log(e)
            }
        }, r.prototype.pause = function () {
            try {
                this.player.pauseVideo()
            } catch (e) {
                console.log(e)
            }
        }, r.prototype.destroy = function () {
            this.$target.html("").data("plugin_video", null), delete this.player
        }, e.fn.youkuVideo = function (t) {
            var n = "init";
            switch (arguments.length > 0 && "string" == typeof arguments[0] && (n = arguments[0]), n) {
                case"init":
                    this.each(function (n, i) {
                        var s = e(i), o = new r(s, t);
                        s.data("plugin_video", o)
                    });
                    break;
                case"getPluginObject":
                    return this.data("plugin_video")
            }
            return this
        }
    }();
    var r = e(".page-video");
    return {
        init: function () {
            r.each(function (r, i) {
                console.log("video init");
                var s, o = e(i), u = o.find(".m-btnPlay"), a = o.find(".m-youkuVideo"), f = "playing", l = o.find(".m-youkuVideoLayer").maskLayer({
                    onShow: function () {
                        u.hide(), t.disableFlipPage(), f = n.playState, n.pause(), n.isAllowManually = !1, s = a.youkuVideo().youkuVideo("getPluginObject")
                    }, onHide: function () {
                        u.show(), t.enableFlipPage(), "playing" == f && n.play(), n.isAllowManually = !0, s.destroy()
                    }
                }).maskLayer("getPluginObject");
                u.on("click", function () {
                    l.show()
                }), o.on("active", function () {
                    console.log("video active")
                }).on("current", function () {
                    console.log("video current")
                })
            })
        }
    }
}), define("wedding/effect/js/modules/kiss/main", ["zepto", "../app"], function (e, t) {
    return {
        init: function () {
            function n(e, t) {
                this.Cover = document.getElementById(e), this.oLip = document.getElementById(t), this.isStop = !1, this.oStyle = ["left", "top", "opacity", t], this.oTips = ["请亲吻手机屏幕哦！", "请再深情一点亲吻吧！", "亲吻好像不给力哦，再试试！"], this.oFloor = Math.floor(Math.random() * this.oTips.length + 1) - 1, this.X = 0, this.Y = 0, this.N = 0, this.H = 0, this.Tx = 0, this.Ty = 0, this.max = 0
            }

            e(".app-cover").on("mousedown mousemove mouseup touchstart touchmove touchend", function (e) {
            }), n.prototype = {
                init: function () {
                    var e = this;
                    if (!e.Cover || !e.oLip)return !1;
                    t.disableFlipPage();
                    var n = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()), r = n ? "touchstart" : "mousedown";
                    this.Cover.addEventListener("touchstart", function (t) {
                        t.preventDefault(), e.toTouchStart(e, t)
                    }, !1), this.Cover.addEventListener("touchmove", function (t) {
                        t.preventDefault(), e.toTouchMove(e, t)
                    }, !1), this.Cover.addEventListener("touchend", function (t) {
                        t.preventDefault(), e.toTouchEnd(e, t)
                    }, !1), n || this.Cover.addEventListener("click", function (t) {
                        t.preventDefault(), e.toOpen(e, t)
                    }, !1)
                }, toTouchStart: function (e, t) {
                    var n = e;
                    n.isStop = !0, t.preventDefault(), n.oFloor = Math.floor(Math.random() * n.oTips.length + 1) - 1, n.Tx = n.oLip.offsetLeft, n.Ty = n.oLip.offsetTop, n.X = t.touches[0].pageX, n.Y = t.touches[0].pageY, n.oLip.style[n.oStyle[0]] = t.touches[0].pageX + "px", n.oLip.style[n.oStyle[1]] = t.touches[0].pageY + "px"
                }, toTouchMove: function (e, t) {
                    var n = e;
                    t.preventDefault();
                    if (!n.isStop)return !1;
                    n.N = t.touches[0].pageX - n.X, n.H = t.touches[0].pageY - n.Y, n.oLip.style[n.oStyle[0]] = t.touches[0].pageX + "px", n.oLip.style[n.oStyle[1]] = t.touches[0].pageY + "px", n.max = t.touches.length
                }, toTouchEnd: function (n, r) {
                    var i = n;
                    return r.preventDefault(), i.max <= 1 ? !1 : (i.oLip.style[i.oStyle[2]] = 1, setTimeout(function () {
                        i.oLip.style.display = "none", i.Cover.style[i.oStyle[1]] = "-100%", e(".m-animationBox").addClass("m-scale"), e(".toour_wedding").addClass("toour_show"), e(".ey_love").addClass("ey_show"), t.enableFlipPage(), e(".m-foregroundImg").show(), e(".tit_cir").addClass("cover"), e(".u-guideTop").show()
                    }, 1500), i.max = 0, i.isStop = !1, !1)
                }, toOpen: function (n, r) {
                    var i = n;
                    return r.preventDefault(), i.oLip.style[i.oStyle[2]] = 1, setTimeout(function () {
                        i.oLip.style.display = "none", i.Cover.style[i.oStyle[1]] = "-100%", e(".m-animationBox").addClass("m-scale"), e(".toour_wedding").addClass("toour_show"), e(".ey_love").addClass("ey_show"), t.enableFlipPage(), e(".m-foregroundImg").show(), e(".tit_cir").addClass("cover"), e(".u-guideTop").show()
                    }, 1500), i.max = 0, i.isStop = !1, !1
                }
            };
            var r = new n("appCover", "kissLip");
            r.init()
        }
    }
}), define("wedding/effect/js/modules/lottery/main", ["zepto", "../app"], function (e, t) {
    return {
        init: function () {
            function n(e, t, n, r, i, s) {
                this.conId = e, this.conNode = document.getElementById(this.conId), this.background = null, this.backCtx = null, this.mask = null, this.maskCtx = null, this.lottery = null, this.lotteryType = "image", this.cover = t || "#000", this.coverType = n, this.pixlesData = null, this.width = r, this.height = i, this.lastPosition = null, this.drawPercentCallback = s, this.vail = !1
            }

            n.prototype = {
                createElement: function (e, t) {
                    var n = document.createElement(e);
                    for (var r in t)n.setAttribute(r, t[r]);
                    return n
                }, getTransparentPercent: function (e, t, n) {
                    var r = e.getImageData(0, 0, t, n), i = r.data, s = [];
                    for (var o = 0, u = i.length; o < u; o += 4) {
                        var a = i[o + 3];
                        a < 128 && s.push(o)
                    }
                    return (s.length / (i.length / 4) * 100).toFixed(2)
                }, resizeCanvas: function (e, t, n) {
                    e.width = t, e.height = n, e.getContext("2d").clearRect(0, 0, t, n)
                }, resizeCanvas_w: function (e, t, n) {
                    e.width = t, e.height = n, e.getContext("2d").clearRect(0, 0, t, n), this.vail ? this.drawLottery() : this.drawMask()
                }, drawPoint: function (e, t, n) {
                    this.maskCtx.beginPath(), this.maskCtx.arc(e, t, 30, 0, Math.PI * 2), this.maskCtx.fill(), this.maskCtx.beginPath(), this.maskCtx.lineWidth = 60, this.maskCtx.lineCap = this.maskCtx.lineJoin = "round", this.lastPosition && this.maskCtx.moveTo(this.lastPosition[0], this.lastPosition[1]), this.maskCtx.lineTo(e, t), this.maskCtx.stroke(), this.lastPosition = [e, t], this.mask.style.zIndex = this.mask.style.zIndex == 20 ? 21 : 20
                }, bindEvent: function () {
                    var e = this, t = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()), n = t ? "touchstart" : "mousedown", r = t ? "touchmove" : "mousemove";
                    if (!t) {
                        var i = !1;
                        e.conNode.addEventListener("mouseup", function (t) {
                            t.preventDefault(), i = !1;
                            var n = e.getTransparentPercent(e.maskCtx, e.width, e.height);
                            n >= 50 && typeof e.drawPercentCallback == "function" && e.drawPercentCallback()
                        }, !1)
                    } else e.conNode.addEventListener("touchmove", function (e) {
                        i && e.preventDefault(), e.cancelable ? e.preventDefault() : window.event.returnValue = !1
                    }, !1), e.conNode.addEventListener("touchend", function (t) {
                        i = !1;
                        var n = e.getTransparentPercent(e.maskCtx, e.width, e.height);
                        n >= 50 && typeof e.drawPercentCallback == "function" && e.drawPercentCallback()
                    }, !1);
                    this.mask.addEventListener(n, function (n) {
                        n.preventDefault(), i = !0;
                        var r = t ? n.touches[0].pageX : n.pageX || n.x, s = t ? n.touches[0].pageY : n.pageY || n.y;
                        e.drawPoint(r, s, i)
                    }, !1), this.mask.addEventListener(r, function (n) {
                        n.preventDefault();
                        if (!i)return !1;
                        n.preventDefault();
                        var r = t ? n.touches[0].pageX : n.pageX || n.x, s = t ? n.touches[0].pageY : n.pageY || n.y;
                        e.drawPoint(r, s, i)
                    }, !1)
                }, drawLottery: function () {
                    if (this.lotteryType == "image") {
                        var e = new Image, t = this;
                        e.onload = function () {
                            this.width = t.width, this.height = t.height, t.resizeCanvas(t.background, t.width, t.height), t.backCtx.drawImage(this, 0, 0, t.width, t.height), t.drawMask()
                        }, e.src = this.lottery
                    } else if (this.lotteryType == "text") {
                        this.width = this.width, this.height = this.height, this.resizeCanvas(this.background, this.width, this.height), this.backCtx.save(), this.backCtx.fillStyle = "#FFF", this.backCtx.fillRect(0, 0, this.width, this.height), this.backCtx.restore(), this.backCtx.save();
                        var n = 30;
                        this.backCtx.font = "Bold " + n + "px Arial", this.backCtx.textAlign = "center", this.backCtx.fillStyle = "#F60", this.backCtx.fillText(this.lottery, this.width / 2, this.height / 2 + n / 2), this.backCtx.restore(), this.drawMask()
                    }
                }, drawMask: function () {
                    if (this.coverType == "color")this.maskCtx.fillStyle = this.cover, this.maskCtx.fillRect(0, 0, this.width, this.height), this.maskCtx.globalCompositeOperation = "destination-out"; else if (this.coverType == "image") {
                        var e = new Image, t = this;
                        e.onload = function () {
                            t.resizeCanvas(t.mask, t.width, t.height);
                            var e = /android/i.test(navigator.userAgent.toLowerCase());
                            t.maskCtx.globalAlpha = .98, t.maskCtx.drawImage(this, 0, 0, this.width, this.height, 0, 0, t.width, t.height), t.maskCtx.globalCompositeOperation = "destination-out"
                        }, e.src = this.cover
                    }
                }, init: function (e, t) {
                    e && (this.lottery = e, this.lottery.width = this.width, this.lottery.height = this.height, this.lotteryType = t || "image", this.vail = !0), this.vail && (this.background = this.background || this.createElement("canvas", {style: "position:fixed;left:50%;top:0;width:100%;margin-left:-50%;height:100%;background-color:transparent;"})), this.mask = this.mask || this.createElement("canvas", {style: "position:fixed;left:50%;top:0;width:100%;margin-left:-50%;height:100%;background-color:transparent;"}), this.mask.style.zIndex = 20, this.conNode.innerHTML.replace(/[\w\W]| /g, "") || (this.vail && this.conNode.appendChild(this.background), this.conNode.appendChild(this.mask), this.bindEvent()), this.vail && (this.backCtx = this.backCtx || this.background.getContext("2d")), this.maskCtx = this.maskCtx || this.mask.getContext("2d"), this.vail ? this.drawLottery() : this.drawMask();
                    var n = this;
                    window.addEventListener("resize", function () {
                        n.width = document.documentElement.clientWidth, n.height = document.documentElement.clientHeight, n.resizeCanvas_w(n.mask, n.width, n.height)
                    }, !1)
                }
            };
            var r = "lotteryContainer", i = e("#" + r);
            if (!(i.length > 0))return !1;
            t.disableFlipPage();
            var s = i.find(".cover-lottery").attr("src"), o = i.find(".cover-background").attr("src"), u = function () {
                i.hide(), t.enableFlipPage(), e(".m-foregroundImg").show(), e(".tit_cir").addClass("cover"), e(".u-guideTop").show()
            };
            if (s) {
                var a = new n(r, s, "image", window.innerWidth, window.innerHeight, u);
                a.init(o, "image")
            }
        }
    }
}), define("wedding/effect/js/modules/fingerprint/main", ["zepto", "../app"], function (e, t) {
    return {
        init: function () {
            if (0 != e(".page-fingerprint").length) {
                t.disableFlipPage();
                var n, r, i, s = 1138, o = !0;
                e(function () {
                    var n = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()), r = n ? "touchstart" : "mousedown", u = n ? "touchend" : "mouseup";
                    e("#finger_print_zw").on(r, function () {
                        o = !0, s = 1138, e("#finger_print_line").show(), e("#finger_print_scaninfo").html("扫描中..."), e("#finger_print_line").animate({marginBottom: "95px"}, 2e3, function () {
                            o && (e("#finger_print_zw").unbind(), e("#finger_print_scaninfo").hide().html("扫描成功"), e("#finger_print_scaninfo").animate({display: "block"}, 600, function () {
                                e("#finger_print").hide(), e("#finger_print_line").hide(), e("#finger_print_zw").animate({display: "none"}), e("#finger_print_kuang").animate({display: "none"}), e("#finger_print_zwt").animate({display: "none"}), e("#finger_print_scaninfo").animate({display: "none"}, 800, function () {
                                }), setTimeout(function () {
                                    i = setInterval(function () {
                                        110 > s ? (t.enableFlipPage(), e(".m-foregroundImg").show(), e(".tit_cir").addClass("cover"), e(".u-guideTop").show(), clearInterval(i)) : s -= 110
                                    }, 20)
                                }, 100)
                            }))
                        })
                    }), e("#finger_print_zw").on(u, function () {
                        e("#finger_print_line").hide(), o = !1, e("#finger_print_line").css({marginBottom: 0}), e("#finger_print_scaninfo").html("扫描失败！请重新扫描")
                    })
                })
            }
        }
    }
}), define("wedding/effect/js/units/widget", ["zepto"], function (e) {
    var t = function () {
        this.name = "基类，扩展共有方法", this._click = "ontouchstart" in window ? "tap" : "click", this.hasTouch = "ontouchstart" in window ? !0 : !1, this._events = {}, this._isMotion = !!window.DeviceMotionEvent, this._elementStyle = document.createElement("div").style, this._UC = RegExp("Android").test(navigator.userAgent) && RegExp("UC").test(navigator.userAgent) ? !0 : !1, this._weixin = RegExp("MicroMessenger").test(navigator.userAgent) ? !0 : !1, this._iPhoen = RegExp("iPhone").test(navigator.userAgent) || RegExp("iPod").test(navigator.userAgent) || RegExp("iPad").test(navigator.userAgent) ? !0 : !1, this._Android = RegExp("Android").test(navigator.userAgent) ? !0 : !1, this._IsPC = function () {
            var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), n = !0, r = 0;
            for (; r < t.length; r++)if (e.indexOf(t[r]) > 0) {
                n = !1;
                break
            }
            return n
        }, this.getTime = Date.now || function () {
                return (new Date).getTime()
            }
    };
    t.prototype = {
        _isOwnEmpty: function (e) {
            var t;
            for (t in e)if (e.hasOwnProperty(t))return !1;
            return !0
        }, _vendor: function () {
            var e, t = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, r = t.length;
            for (; r > n; n++)if (e = t[n] + "ransform", e in this._elementStyle)return t[n].substr(0, t[n].length - 1);
            return !1
        }, _prefixStyle: function (e) {
            return this._vendor() === !1 ? !1 : "" === this._vendor() ? e : this._vendor() + e.charAt(0).toUpperCase() + e.substr(1)
        }, _hasPerspective: function () {
            var e = this._prefixStyle("perspective") in this._elementStyle;
            return e && "webkitPerspective" in this._elementStyle && this._injectStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), !!e
        }, _injectStyles: function (e, t, n, r) {
            var i, s, o, u, a = document.createElement("div"), f = document.body, l = f || document.createElement("body"), c = "modernizr";
            if (parseInt(n, 10))for (; n--;)o = document.createElement("div"), o.id = r ? r[n] : c + (n + 1), a.appendChild(o);
            return i = ["&#173;", '<style id="s', c, '">', e, "</style>"].join(""), a.id = c, (f ? a : l).innerHTML += i, l.appendChild(a), f || (l.style.background = "", l.style.overflow = "hidden", u = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(l)), s = t(a, e), f ? a.parentNode.removeChild(a) : (l.parentNode.removeChild(l), docElement.style.overflow = u), !!s
        }, _translateZ: function () {
            return this._hasPerspective ? " translateZ(0)" : ""
        }, addEvent: function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
        }, removeEvent: function (e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
        }, _handleEvent: function (e) {
            if (this._events[e]) {
                var t = 0, n = this._events[e].length;
                if (n)for (; n > t; t++)this._events[e][t].apply(this, [].slice.call(arguments, 1))
            }
        }, _on: function (e, t) {
            this._events[e] || (this._events[e] = []), this._events[e].push(t)
        }, execHandler: function (e) {
            if (e && e instanceof Object) {
                var t = e.callback || null, n = e.opts || [], r = e.context || null, i = e.delay || -1;
                t && t instanceof Function && ("number" == typeof i && i >= 0 ? setTimeout(function () {
                    t.call(r, n)
                }, i) : t.call(r, n))
            }
        }, momentum: function (e, t, n, r, i) {
            var s, o, u = e - t, a = Math.abs(u) / n, f = .001;
            return s = e + a * a / (2 * f) * (0 > u ? -1 : 1), o = a / f, r > s ? (s = i ? r - i / 2.5 * (a / 8) : r, u = Math.abs(s - e), o = u / a) : s > 0 && (s = i ? i / 2.5 * (a / 8) : 0, u = Math.abs(e) + s, o = u / a), {
                destination: Math.round(s),
                duration: o
            }
        }, loadingPageShow: function (e) {
            e.length >= 1 && e.show()
        }, loadingPageHide: function (e) {
            e.length >= 1 && e.hide()
        }, showCheckMessage: function (e, t, n) {
            n ? (e.removeClass("error").addClass("sucess"), e.html(t), e.addClass("z-show"), setTimeout(function () {
                e.removeClass("z-show")
            }, 2e3)) : (e.addClass("error").removeClass("sucess"), e.html(t), e.addClass("z-show"), setTimeout(function () {
                e.removeClass("z-show")
            }, 2e3))
        }
    };
    var n = new t;
    return n
}), define("wedding/effect/js/modules/mask/mask", ["zepto", "../app", "../../units/widget"], function (e, t, n) {
    var r = function (e) {
        this.click = "ontouchstart" in window ? "tap" : "click", this.setInter = null, this.setInterOne = null, this.setInterTwo = null, this.setInterThree = null, this.touchNum = 0, this.touchFinish = !1;
        for (i in e)this[i] = e[i]
    };
    return r.prototype = e.extend({}, n, {
        init: function () {
            var t = this;
            this.circle1.on(this.click, function () {
                t.touchNum += 1, e(this).hide(), t.maskAnimationTwo(t, 4, 3, 12, 60, function () {
                    t.maskAnimationBack(t)
                })
            }), this.circle2.on(this.click, function () {
                t.touchNum += 1, e(this).hide(), t.maskAnimationOne(t, 4, 3, 12, 60, function () {
                    t.maskAnimationBack(t)
                })
            }), this.circle3.on(this.click, function () {
                t.touchNum += 1, e(this).hide(), t.maskAnimationThree(t, 4, 3, 12, 60, function () {
                    t.maskAnimationBack(t)
                })
            })
        }, maskAnimationBack: function (n) {
            n.touchNum >= 3 && (n.touchFinish || (n.touchFinish = !0, n.touchFinish && t.enableFlipPage(), n.maskAnimation(n, 4, 5, 20, 80, function () {
                e(".tit_cir").addClass("cover"), n.mask.find(".touch-1").hide(), n.mask.find(".touch-2").hide(), n.mask.find(".touch-3").hide(), n.mask.find(".touch-4").removeClass("touch-4"), e(".u-guideTop").show()
            })))
        }, maskAnimationOne: function (t, n, r, i, s, o) {
            clearInterval(t.setInterOne);
            var u = _y_a = _i_a = 0;
            t.setInterOne = setInterval(function () {
                u >= n && (u = 0, _y_a = _y_a >= r ? 0 : _y_a += 1), t.mask.find(".touch-1").css("-webkit-mask-position", e(window).width() * -u + "px " + -_y_a * e(window).height() + "px"), u += 1, _i_a++, _i_a >= i && (clearInterval(t.setInterOne), o())
            }, s)
        }, maskAnimationTwo: function (t, n, r, i, s, o) {
            clearInterval(t.setInterTwo);
            var u = _y_b = _i_b = 0;
            t.setInterTwo = setInterval(function () {
                u >= n && (u = 0, _y_b = _y_b >= r ? 0 : _y_b += 1), t.mask.find(".touch-2").css("-webkit-mask-position", e(window).width() * -u + "px " + -_y_b * e(window).height() + "px"), u += 1, _i_b++, _i_b >= i && (clearInterval(t.setInterTwo), o())
            }, s)
        }, maskAnimationThree: function (t, n, r, i, s, o) {
            clearInterval(t.setInterThree);
            var u = _y_c = _i_c = 0;
            t.setInterThree = setInterval(function () {
                u >= n && (u = 0, _y_c = _y_c >= r ? 0 : _y_c += 1), t.mask.find(".touch-3").css("-webkit-mask-position", e(window).width() * -u - 20 + "px " + -_y_c * e(window).height() + "px"), u += 1, _i_c++, _i_c >= i && (clearInterval(t.setInterThree), o())
            }, s)
        }, maskAnimation: function (t, n, r, i, s, o) {
            clearInterval(t.setInter);
            var u = _y = _i = 0;
            t.setInter = setInterval(function () {
                u >= n && (u = 0, _y = _y >= r ? 0 : _y += 1), t.mask.find(".touch-4").css("-webkit-mask-position", e(window).width() * -u + "px " + -_y * e(window).height() + "px"), u += 1, _i++, _i >= i && (clearInterval(t.setInter), o())
            }, s)
        }
    }), r
}), define("wedding/effect/js/modules/mask/main", ["zepto", "../app", "./mask"], function (e, t, n) {
    var r = e(".page-mask");
    return {
        init: function () {
            r.each(function (r, i) {
                console.log("m-mask init"), t.disableFlipPage();
                var s = e(i), o = {
                    circle1: e(this).find(".mask-circle-1"),
                    circle2: e(this).find(".mask-circle-2"),
                    circle3: e(this).find(".mask-circle-3"),
                    mask: e(this)
                }, u = new n(o);
                e(this).data("mask", u), u.init(), s.on("active", function () {
                    console.log("m-mask active")
                }).on("current", function () {
                    console.log("m-mask current")
                }).one("current", function () {
                })
            })
        }
    }
}), define("wedding/effect/js/modules/main", ["zepto", "./app", "./index/main", "./teletext/main", "./link/main", "./video/main", "./kiss/main", "./lottery/main", "./fingerprint/main", "./mask/main"], function (e, t, n, r, i, s, o, u, a, f) {
    return console.info(t), {
        init: function () {
            n.init(), r.init(), i.init(), s.init(), o.init(), u.init(), f.init(), a.init(), f.init(), console.log("\n运行成功！"), t.init().showPage(".page-index"), e("window").load()
        }
    }
});