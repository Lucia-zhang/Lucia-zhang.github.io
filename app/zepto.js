define([], function () {
    var Zepto = function () {
        function e(e) {
            return null == e ? String(e) : V[$.call(e)] || "object"
        }

        function t(t) {
            return "function" == e(t)
        }

        function n(e) {
            return null != e && e == e.window
        }

        function r(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }

        function i(t) {
            return "object" == e(t)
        }

        function s(e) {
            return i(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
        }

        function o(e) {
            return "number" == typeof e.length
        }

        function u(e) {
            return A.call(e, function (e) {
                return null != e
            })
        }

        function a(e) {
            return e.length > 0 ? x.fn.concat.apply([], e) : e
        }

        function f(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function l(e) {
            return e in _ ? _[e] : _[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
        }

        function c(e, t) {
            return "number" != typeof t || D[f(e)] ? t : t + "px"
        }

        function h(e) {
            var t, n;
            return M[e] || (t = O.createElement(e), O.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), M[e] = n), M[e]
        }

        function p(e) {
            return "children" in e ? L.call(e.children) : x.map(e.childNodes, function (e) {
                return 1 == e.nodeType ? e : void 0
            })
        }

        function d(e, t, n) {
            for (S in t)n && (s(t[S]) || G(t[S])) ? (s(t[S]) && !s(e[S]) && (e[S] = {}), G(t[S]) && !G(e[S]) && (e[S] = []), d(e[S], t[S], n)) : t[S] !== E && (e[S] = t[S])
        }

        function v(e, t) {
            return null == t ? x(e) : x(e).filter(t)
        }

        function m(e, n, r, i) {
            return t(n) ? n.call(e, r, i) : n
        }

        function g(e, t, n) {
            null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function y(e, t) {
            var n = e.className, r = n && n.baseVal !== E;
            return t === E ? r ? n.baseVal : n : void (r ? n.baseVal = t : e.className = t)
        }

        function b(e) {
            var t;
            try {
                return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : /^0/.test(e) || isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? x.parseJSON(e) : e : t) : e
            } catch (n) {
                return e
            }
        }

        function w(e, t) {
            t(e);
            for (var n in e.childNodes)w(e.childNodes[n], t)
        }

        var E, S, x, T, N, C, k = [], L = k.slice, A = k.filter, O = window.document, M = {}, _ = {}, D = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, P = /^\s*<(\w+|!)[^>]*>/, H = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, B = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, j = /^(?:body|html)$/i, F = /([A-Z])/g, I = ["val", "css", "html", "text", "data", "width", "height", "offset"], q = ["after", "prepend", "before", "append"], R = O.createElement("table"), U = O.createElement("tr"), z = {
            tr: O.createElement("tbody"),
            tbody: R,
            thead: R,
            tfoot: R,
            td: U,
            th: U,
            "*": O.createElement("div")
        }, W = /complete|loaded|interactive/, X = /^[\w-]*$/, V = {}, $ = V.toString, J = {}, K = O.createElement("div"), Q = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, G = Array.isArray || function (e) {
                return e instanceof Array
            };
        return J.matches = function (e, t) {
            if (!t || !e || 1 !== e.nodeType)return !1;
            var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n)return n.call(e, t);
            var r, i = e.parentNode, s = !i;
            return s && (i = K).appendChild(e), r = ~J.qsa(i, t).indexOf(e), s && K.removeChild(e), r
        }, N = function (e) {
            return e.replace(/-+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, C = function (e) {
            return A.call(e, function (t, n) {
                return e.indexOf(t) == n
            })
        }, J.fragment = function (e, t, n) {
            var r, i, o;
            return H.test(e) && (r = x(O.createElement(RegExp.$1))), r || (e.replace && (e = e.replace(B, "<$1></$2>")), t === E && (t = P.test(e) && RegExp.$1), t in z || (t = "*"), o = z[t], o.innerHTML = "" + e, r = x.each(L.call(o.childNodes), function () {
                o.removeChild(this)
            })), s(n) && (i = x(r), x.each(n, function (e, t) {
                I.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
            })), r
        }, J.Z = function (e, t) {
            return e = e || [], e.__proto__ = x.fn, e.selector = t || "", e
        }, J.isZ = function (e) {
            return e instanceof J.Z
        }, J.init = function (e, n) {
            var r;
            if (!e)return J.Z();
            if ("string" == typeof e)if (e = e.trim(), "<" == e[0] && P.test(e))r = J.fragment(e, RegExp.$1, n), e = null; else {
                if (n !== E)return x(n).find(e);
                r = J.qsa(O, e)
            } else {
                if (t(e))return x(O).ready(e);
                if (J.isZ(e))return e;
                if (G(e))r = u(e); else if (i(e))r = [e], e = null; else if (P.test(e))r = J.fragment(e.trim(), RegExp.$1, n), e = null; else {
                    if (n !== E)return x(n).find(e);
                    r = J.qsa(O, e)
                }
            }
            return J.Z(r, e)
        }, x = function (e, t) {
            return J.init(e, t)
        }, x.extend = function (e) {
            var t, n = L.call(arguments, 1);
            return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function (n) {
                d(e, n, t)
            }), e
        }, J.qsa = function (e, t) {
            var n, i = "#" == t[0], s = !i && "." == t[0], o = i || s ? t.slice(1) : t, u = X.test(o);
            return r(e) && u && i ? (n = e.getElementById(o)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : L.call(u && !i ? s ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        }, x.contains = function (e, t) {
            return e !== t && e.contains(t)
        }, x.type = e, x.isFunction = t, x.isWindow = n, x.isArray = G, x.isPlainObject = s, x.isEmptyObject = function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, x.inArray = function (e, t, n) {
            return k.indexOf.call(t, e, n)
        }, x.camelCase = N, x.trim = function (e) {
            return null == e ? "" : String.prototype.trim.call(e)
        }, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function (e, t) {
            var n, r, i, s = [];
            if (o(e))for (r = 0; r < e.length; r++)n = t(e[r], r), null != n && s.push(n); else for (i in e)n = t(e[i], i), null != n && s.push(n);
            return a(s)
        }, x.each = function (e, t) {
            var n, r;
            if (o(e)) {
                for (n = 0; n < e.length; n++)if (t.call(e[n], n, e[n]) === !1)return e
            } else for (r in e)if (t.call(e[r], r, e[r]) === !1)return e;
            return e
        }, x.grep = function (e, t) {
            return A.call(e, t)
        }, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            V["[object " + t + "]"] = t.toLowerCase()
        }), x.fn = {
            forEach: k.forEach,
            reduce: k.reduce,
            push: k.push,
            sort: k.sort,
            indexOf: k.indexOf,
            concat: k.concat,
            map: function (e) {
                return x(x.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return x(L.apply(this, arguments))
            },
            ready: function (e) {
                return W.test(O.readyState) && O.body ? e(x) : O.addEventListener("DOMContentLoaded", function () {
                    e(x)
                }, !1), this
            },
            get: function (e) {
                return e === E ? L.call(this) : this[e >= 0 ? e : e + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (e) {
                return k.every.call(this, function (t, n) {
                    return e.call(t, n, t) !== !1
                }), this
            },
            filter: function (e) {
                return t(e) ? this.not(this.not(e)) : x(A.call(this, function (t) {
                    return J.matches(t, e)
                }))
            },
            add: function (e, t) {
                return x(C(this.concat(x(e, t))))
            },
            is: function (e) {
                return this.length > 0 && J.matches(this[0], e)
            },
            not: function (e) {
                var n = [];
                if (t(e) && e.call !== E)this.each(function (t) {
                    e.call(this, t) || n.push(this)
                }); else {
                    var r = "string" == typeof e ? this.filter(e) : o(e) && t(e.item) ? L.call(e) : x(e);
                    this.forEach(function (e) {
                        r.indexOf(e) < 0 && n.push(e)
                    })
                }
                return x(n)
            },
            has: function (e) {
                return this.filter(function () {
                    return i(e) ? x.contains(this, e) : x(this).find(e).size()
                })
            },
            eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function () {
                var e = this[0];
                return e && !i(e) ? e : x(e)
            },
            last: function () {
                var e = this[this.length - 1];
                return e && !i(e) ? e : x(e)
            },
            find: function (e) {
                var t, n = this;
                return t = "object" == typeof e ? x(e).filter(function () {
                    var e = this;
                    return k.some.call(n, function (t) {
                        return x.contains(t, e)
                    })
                }) : 1 == this.length ? x(J.qsa(this[0], e)) : this.map(function () {
                    return J.qsa(this, e)
                })
            },
            closest: function (e, t) {
                var n = this[0], i = !1;
                for ("object" == typeof e && (i = x(e)); n && !(i ? i.indexOf(n) >= 0 : J.matches(n, e));)n = n !== t && !r(n) && n.parentNode;
                return x(n)
            },
            parents: function (e) {
                for (var t = [], n = this; n.length > 0;)n = x.map(n, function (e) {
                    return (e = e.parentNode) && !r(e) && t.indexOf(e) < 0 ? (t.push(e), e) : void 0
                });
                return v(t, e)
            },
            parent: function (e) {
                return v(C(this.pluck("parentNode")), e)
            },
            children: function (e) {
                return v(this.map(function () {
                    return p(this)
                }), e)
            },
            contents: function () {
                return this.map(function () {
                    return L.call(this.childNodes)
                })
            },
            siblings: function (e) {
                return v(this.map(function (e, t) {
                    return A.call(p(t.parentNode), function (e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (e) {
                return x.map(this, function (t) {
                    return t[e]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                })
            },
            replaceWith: function (e) {
                return this.before(e).remove()
            },
            wrap: function (e) {
                var n = t(e);
                if (this[0] && !n)var r = x(e).get(0), i = r.parentNode || this.length > 1;
                return this.each(function (t) {
                    x(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
                })
            },
            wrapAll: function (e) {
                if (this[0]) {
                    x(this[0]).before(e = x(e));
                    for (var t; (t = e.children()).length;)e = t.first();
                    x(e).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                var n = t(e);
                return this.each(function (t) {
                    var r = x(this), i = r.contents(), s = n ? e.call(this, t) : e;
                    i.length ? i.wrapAll(s) : r.append(s)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    x(this).replaceWith(x(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (e) {
                return this.each(function () {
                    var t = x(this);
                    (e === E ? "none" == t.css("display") : e) ? t.show() : t.hide()
                })
            },
            prev: function (e) {
                return x(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function (e) {
                return x(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function (e) {
                return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function (t) {
                    var n = this.innerHTML;
                    x(this).empty().append(m(this, e, t, n))
                })
            },
            text: function (e) {
                return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                    this.textContent = e === E ? "" : "" + e
                })
            },
            attr: function (e, t) {
                var n;
                return "string" == typeof e && t === E ? 0 == this.length || 1 !== this[0].nodeType ? E : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : this.each(function (n) {
                    if (1 === this.nodeType)if (i(e))for (S in e)g(this, S, e[S]); else g(this, e, m(this, t, n, this.getAttribute(e)))
                })
            },
            removeAttr: function (e) {
                return this.each(function () {
                    1 === this.nodeType && g(this, e)
                })
            },
            prop: function (e, t) {
                return e = Q[e] || e, t === E ? this[0] && this[0][e] : this.each(function (n) {
                    this[e] = m(this, t, n, this[e])
                })
            },
            data: function (e, t) {
                var n = this.attr("data-" + e.replace(F, "-$1").toLowerCase(), t);
                return null !== n ? b(n) : E
            },
            val: function (e) {
                return 0 === arguments.length ? this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value) : this.each(function (t) {
                    this.value = m(this, e, t, this.value)
                })
            },
            offset: function (e) {
                if (e)return this.each(function (t) {
                    var n = x(this), r = m(this, e, t, n.offset()), i = n.offsetParent().offset(), s = {
                        top: r.top - i.top,
                        left: r.left - i.left
                    };
                    "static" == n.css("position") && (s.position = "relative"), n.css(s)
                });
                if (0 == this.length)return null;
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: Math.round(t.width),
                    height: Math.round(t.height)
                }
            },
            css: function (t, n) {
                if (arguments.length < 2) {
                    var r = this[0], i = getComputedStyle(r, "");
                    if (!r)return;
                    if ("string" == typeof t)return r.style[N(t)] || i.getPropertyValue(t);
                    if (G(t)) {
                        var s = {};
                        return x.each(G(t) ? t : [t], function (e, t) {
                            s[t] = r.style[N(t)] || i.getPropertyValue(t)
                        }), s
                    }
                }
                var o = "";
                if ("string" == e(t))n || 0 === n ? o = f(t) + ":" + c(t, n) : this.each(function () {
                    this.style.removeProperty(f(t))
                }); else for (S in t)t[S] || 0 === t[S] ? o += f(S) + ":" + c(S, t[S]) + ";" : this.each(function () {
                    this.style.removeProperty(f(S))
                });
                return this.each(function () {
                    this.style.cssText += ";" + o
                })
            },
            index: function (e) {
                return e ? this.indexOf(x(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (e) {
                return e ? k.some.call(this, function (e) {
                    return this.test(y(e))
                }, l(e)) : !1
            },
            addClass: function (e) {
                return e ? this.each(function (t) {
                    T = [];
                    var n = y(this), r = m(this, e, t, n);
                    r.split(/\s+/g).forEach(function (e) {
                        x(this).hasClass(e) || T.push(e)
                    }, this), T.length && y(this, n + (n ? " " : "") + T.join(" "))
                }) : this
            },
            removeClass: function (e) {
                return this.each(function (t) {
                    return e === E ? y(this, "") : (T = y(this), m(this, e, t, T).split(/\s+/g).forEach(function (e) {
                        T = T.replace(l(e), " ")
                    }), void y(this, T.trim()))
                })
            },
            toggleClass: function (e, t) {
                return e ? this.each(function (n) {
                    var r = x(this), i = m(this, e, n, y(this));
                    i.split(/\s+/g).forEach(function (e) {
                        (t === E ? !r.hasClass(e) : t) ? r.addClass(e) : r.removeClass(e)
                    })
                }) : this
            },
            scrollTop: function (e) {
                if (this.length) {
                    var t = "scrollTop" in this[0];
                    return e === E ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
                        this.scrollTop = e
                    } : function () {
                        this.scrollTo(this.scrollX, e)
                    })
                }
            },
            scrollLeft: function (e) {
                if (this.length) {
                    var t = "scrollLeft" in this[0];
                    return e === E ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
                        this.scrollLeft = e
                    } : function () {
                        this.scrollTo(e, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var e = this[0], t = this.offsetParent(), n = this.offset(), r = j.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                    return n.top -= parseFloat(x(e).css("margin-top")) || 0, n.left -= parseFloat(x(e).css("margin-left")) || 0, r.top += parseFloat(x(t[0]).css("border-top-width")) || 0, r.left += parseFloat(x(t[0]).css("border-left-width")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || O.body; e && !j.test(e.nodeName) && "static" == x(e).css("position");)e = e.offsetParent;
                    return e
                })
            }
        }, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function (e) {
            var t = e.replace(/./, function (e) {
                return e[0].toUpperCase()
            });
            x.fn[e] = function (i) {
                var s, o = this[0];
                return i === E ? n(o) ? o["inner" + t] : r(o) ? o.documentElement["scroll" + t] : (s = this.offset()) && s[e] : this.each(function (t) {
                    o = x(this), o.css(e, m(this, i, t, o[e]()))
                })
            }
        }), q.forEach(function (t, n) {
            var r = n % 2;
            x.fn[t] = function () {
                var t, i, s = x.map(arguments, function (n) {
                    return t = e(n), "object" == t || "array" == t || null == n ? n : J.fragment(n)
                }), o = this.length > 1;
                return s.length < 1 ? this : this.each(function (e, t) {
                    i = r ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null, s.forEach(function (e) {
                        if (o)e = e.cloneNode(!0); else if (!i)return x(e).remove();
                        w(i.insertBefore(e, t), function (e) {
                            null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                        })
                    })
                })
            }, x.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function (e) {
                return x(e)[t](this), this
            }
        }), J.Z.prototype = x.fn, J.uniq = C, J.deserializeValue = b, x.zepto = J, x
    }();
    return window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (e) {
        function t(e) {
            return e._zid || (e._zid = h++)
        }

        function n(e, n, s, o) {
            if (n = r(n), n.ns)var u = i(n.ns);
            return (m[t(e)] || []).filter(function (e) {
                return !(!e || n.e && e.e != n.e || n.ns && !u.test(e.ns) || s && t(e.fn) !== t(s) || o && e.sel != o)
            })
        }

        function r(e) {
            var t = ("" + e).split(".");
            return {e: t[0], ns: t.slice(1).sort().join(" ")}
        }

        function i(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function s(e, t) {
            return e.del && !y && e.e in b || !!t
        }

        function o(e) {
            return w[e] || y && b[e] || e
        }

        function u(n, i, u, a, l, h, p) {
            var d = t(n), v = m[d] || (m[d] = []);
            i.split(/\s/).forEach(function (t) {
                if ("ready" == t)return e(document).ready(u);
                var i = r(t);
                i.fn = u, i.sel = l, i.e in w && (u = function (t) {
                    var n = t.relatedTarget;
                    return !n || n !== this && !e.contains(this, n) ? i.fn.apply(this, arguments) : void 0
                }), i.del = h;
                var d = h || u;
                i.proxy = function (e) {
                    if (e = f(e), !e.isImmediatePropagationStopped()) {
                        e.data = a;
                        var t = d.apply(n, e._args == c ? [e] : [e].concat(e._args));
                        return t === !1 && (e.preventDefault(), e.stopPropagation()), t
                    }
                }, i.i = v.length, v.push(i), "addEventListener" in n && n.addEventListener(o(i.e), i.proxy, s(i, p))
            })
        }

        function a(e, r, i, u, a) {
            var f = t(e);
            (r || "").split(/\s/).forEach(function (t) {
                n(e, t, i, u).forEach(function (t) {
                    delete m[f][t.i], "removeEventListener" in e && e.removeEventListener(o(t.e), t.proxy, s(t, a))
                })
            })
        }

        function f(t, n) {
            return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(T, function (e, r) {
                var i = n[e];
                t[e] = function () {
                    return this[r] = E, i && i.apply(n, arguments)
                }, t[r] = S
            }), (n.defaultPrevented !== c ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = E)), t
        }

        function l(e) {
            var t, n = {originalEvent: e};
            for (t in e)x.test(t) || e[t] === c || (n[t] = e[t]);
            return f(n, e)
        }

        var c, h = 1, p = Array.prototype.slice, d = e.isFunction, v = function (e) {
            return "string" == typeof e
        }, m = {}, g = {}, y = "onfocusin" in window, b = {
            focus: "focusin",
            blur: "focusout"
        }, w = {mouseenter: "mouseover", mouseleave: "mouseout"};
        g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", e.event = {
            add: u,
            remove: a
        }, e.proxy = function (n, r) {
            if (d(n)) {
                var i = function () {
                    return n.apply(r, arguments)
                };
                return i._zid = t(n), i
            }
            if (v(r))return e.proxy(n[r], n);
            throw new TypeError("expected function")
        }, e.fn.bind = function (e, t, n) {
            return this.on(e, t, n)
        }, e.fn.unbind = function (e, t) {
            return this.off(e, t)
        }, e.fn.one = function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        };
        var E = function () {
            return !0
        }, S = function () {
            return !1
        }, x = /^([A-Z]|returnValue$|layer[XY]$)/, T = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function (e, t, n) {
            return this.on(t, e, n)
        }, e.fn.undelegate = function (e, t, n) {
            return this.off(t, e, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (t, n, r, i, s) {
            var o, f, h = this;
            return t && !v(t) ? (e.each(t, function (e, t) {
                h.on(e, n, r, t, s)
            }), h) : (v(n) || d(i) || i === !1 || (i = r, r = n, n = c), (d(r) || r === !1) && (i = r, r = c), i === !1 && (i = S), h.each(function (c, h) {
                s && (o = function (e) {
                    return a(h, e.type, i), i.apply(this, arguments)
                }), n && (f = function (t) {
                    var r, s = e(t.target).closest(n, h).get(0);
                    return s && s !== h ? (r = e.extend(l(t), {
                        currentTarget: s,
                        liveFired: h
                    }), (o || i).apply(s, [r].concat(p.call(arguments, 1)))) : void 0
                }), u(h, t, i, r, n, f || o)
            }))
        }, e.fn.off = function (t, n, r) {
            var i = this;
            return t && !v(t) ? (e.each(t, function (e, t) {
                i.off(e, n, t)
            }), i) : (v(n) || d(r) || r === !1 || (r = n, n = c), r === !1 && (r = S), i.each(function () {
                a(this, t, r, n)
            }))
        }, e.fn.trigger = function (t, n) {
            return t = v(t) || e.isPlainObject(t) ? e.Event(t) : f(t), t._args = n, this.each(function () {
                "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, r) {
            var i, s;
            return this.each(function (o, u) {
                i = l(v(t) ? e.Event(t) : t), i._args = r, i.target = u, e.each(n(u, t.type || t), function (e, t) {
                    return s = t.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), s
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return e ? this.bind(t, e) : this.trigger(t)
            }
        }), ["focus", "blur"].forEach(function (t) {
            e.fn[t] = function (e) {
                return e ? this.bind(t, e) : this.each(function () {
                    try {
                        this[t]()
                    } catch (e) {
                    }
                }), this
            }
        }), e.Event = function (e, t) {
            v(e) || (t = e, e = t.type);
            var n = document.createEvent(g[e] || "Events"), r = !0;
            if (t)for (var i in t)"bubbles" == i ? r = !!t[i] : n[i] = t[i];
            return n.initEvent(e, r, !0), f(n)
        }
    }(Zepto), function ($) {
        function triggerAndReturn(e, t, n) {
            var r = $.Event(t);
            return $(e).trigger(r, n), !r.isDefaultPrevented()
        }

        function triggerGlobal(e, t, n, r) {
            return e.global ? triggerAndReturn(t || document, n, r) : void 0
        }

        function ajaxStart(e) {
            e.global && 0 === $.active++ && triggerGlobal(e, null, "ajaxStart")
        }

        function ajaxStop(e) {
            e.global && !--$.active && triggerGlobal(e, null, "ajaxStop")
        }

        function ajaxBeforeSend(e, t) {
            var n = t.context;
            return t.beforeSend.call(n, e, t) === !1 || triggerGlobal(t, n, "ajaxBeforeSend", [e, t]) === !1 ? !1 : void triggerGlobal(t, n, "ajaxSend", [e, t])
        }

        function ajaxSuccess(e, t, n, r) {
            var i = n.context, s = "success";
            n.success.call(i, e, s, t), r && r.resolveWith(i, [e, s, t]), triggerGlobal(n, i, "ajaxSuccess", [t, n, e]), ajaxComplete(s, t, n)
        }

        function ajaxError(e, t, n, r, i) {
            var s = r.context;
            r.error.call(s, n, t, e), i && i.rejectWith(s, [n, t, e]), triggerGlobal(r, s, "ajaxError", [n, r, e || t]), ajaxComplete(t, n, r)
        }

        function ajaxComplete(e, t, n) {
            var r = n.context;
            n.complete.call(r, t, e), triggerGlobal(n, r, "ajaxComplete", [t, n]), ajaxStop(n)
        }

        function empty() {
        }

        function mimeToDataType(e) {
            return e && (e = e.split(";", 2)[0]), e && (e == htmlType ? "html" : e == jsonType ? "json" : scriptTypeRE.test(e) ? "script" : xmlTypeRE.test(e) && "xml") || "text"
        }

        function appendQuery(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function serializeData(e) {
            e.processData && e.data && "string" != $.type(e.data) && (e.data = $.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = appendQuery(e.url, e.data), e.data = void 0)
        }

        function parseArguments(e, t, n, r) {
            return $.isFunction(t) && (r = n, n = t, t = void 0), $.isFunction(n) || (r = n, n = void 0), {
                url: e,
                data: t,
                success: n,
                dataType: r
            }
        }

        function serialize(e, t, n, r) {
            var i, s = $.isArray(t), o = $.isPlainObject(t);
            $.each(t, function (t, u) {
                i = $.type(u), r && (t = n ? r : r + "[" + (o || "object" == i || "array" == i ? t : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == i || !n && "object" == i ? serialize(e, u, n, t) : e.add(t, u)
            })
        }

        var key, name, jsonpID = 0, document = window.document, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/;
        $.active = 0, $.ajaxJSONP = function (e, t) {
            if ("type" in e) {
                var n, r, i = e.jsonpCallback, s = ($.isFunction(i) ? i() : i) || "jsonp" + ++jsonpID, o = document.createElement("script"), u = window[s], a = function (e) {
                    $(o).triggerHandler("error", e || "abort")
                }, f = {abort: a};
                return t && t.promise(f), $(o).on("load error", function (i, a) {
                    clearTimeout(r), $(o).off().remove(), "error" != i.type && n ? ajaxSuccess(n[0], f, e, t) : ajaxError(null, a || "error", f, e, t), window[s] = u, n && $.isFunction(u) && u(n[0]), u = n = void 0
                }), ajaxBeforeSend(f, e) === !1 ? (a("abort"), f) : (window[s] = function () {
                    n = arguments
                }, o.src = e.url.replace(/\?(.+)=\?/, "?$1=" + s), document.head.appendChild(o), e.timeout > 0 && (r = setTimeout(function () {
                    a("timeout")
                }, e.timeout)), f)
            }
            return $.ajax(e)
        }, $.ajaxSettings = {
            type: "GET",
            beforeSend: empty,
            success: empty,
            error: empty,
            complete: empty,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: jsonType,
                xml: "application/xml, text/xml",
                html: htmlType,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, $.ajax = function (options) {
            var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred();
            for (key in $.ajaxSettings)void 0 === settings[key] && (settings[key] = $.ajaxSettings[key]);
            ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
            var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url);
            if ("jsonp" == dataType || hasPlaceholder)return hasPlaceholder || (settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === !1 ? "" : "callback=?")), $.ajaxJSONP(settings, deferred);
            var abortTimeout, mime = settings.accepts[dataType], headers = {}, setHeader = function (e, t) {
                headers[e.toLowerCase()] = [e, t]
            }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader;
            if (deferred && deferred.promise(xhr), settings.crossDomain || setHeader("X-Requested-With", "XMLHttpRequest"), setHeader("Accept", mime || "*/*"), (mime = settings.mimeType || mime) && (mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime)), (settings.contentType || settings.contentType !== !1 && settings.data && "GET" != settings.type.toUpperCase()) && setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded"), settings.headers)for (name in settings.headers)setHeader(name, settings.headers[name]);
            if (xhr.setRequestHeader = setHeader, xhr.onreadystatechange = function () {
                    if (4 == xhr.readyState) {
                        xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
                        var result, error = !1;
                        if (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status || 0 == xhr.status && "file:" == protocol) {
                            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")), result = xhr.responseText;
                            try {
                                "script" == dataType ? (1, eval)(result) : "xml" == dataType ? result = xhr.responseXML : "json" == dataType && (result = blankRE.test(result) ? null : $.parseJSON(result))
                            } catch (e) {
                                error = e
                            }
                            error ? ajaxError(error, "parsererror", xhr, settings, deferred) : ajaxSuccess(result, xhr, settings, deferred)
                        } else ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred)
                    }
                }, ajaxBeforeSend(xhr, settings) === !1)return xhr.abort(), ajaxError(null, "abort", xhr, settings, deferred), xhr;
            if (settings.xhrFields)for (name in settings.xhrFields)xhr[name] = settings.xhrFields[name];
            var async = "async" in settings ? settings.async : !0;
            xhr.open(settings.type, settings.url, async, settings.username, settings.password);
            for (name in headers)nativeSetHeader.apply(xhr, headers[name]);
            return settings.timeout > 0 && (abortTimeout = setTimeout(function () {
                xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings, deferred)
            }, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr
        }, $.get = function () {
            return $.ajax(parseArguments.apply(null, arguments))
        }, $.post = function () {
            var e = parseArguments.apply(null, arguments);
            return e.type = "POST", $.ajax(e)
        }, $.getJSON = function () {
            var e = parseArguments.apply(null, arguments);
            return e.dataType = "json", $.ajax(e)
        }, $.fn.load = function (e, t, n) {
            if (!this.length)return this;
            var r, i = this, s = e.split(/\s/), o = parseArguments(e, t, n), u = o.success;
            return s.length > 1 && (o.url = s[0], r = s[1]), o.success = function (e) {
                i.html(r ? $("<div>").html(e.replace(rscript, "")).find(r) : e), u && u.apply(i, arguments)
            }, $.ajax(o), this
        };
        var escape = encodeURIComponent;
        $.param = function (e, t) {
            var n = [];
            return n.add = function (e, t) {
                this.push(escape(e) + "=" + escape(t))
            }, serialize(n, e, t), n.join("&").replace(/%20/g, "+")
        }
    }(Zepto), function (e) {
        e.fn.serializeArray = function () {
            var t, n = [];
            return e([].slice.call(this.get(0).elements)).each(function () {
                t = e(this);
                var r = t.attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != r && "reset" != r && "button" != r && ("radio" != r && "checkbox" != r || this.checked) && n.push({
                    name: t.attr("name"),
                    value: t.val()
                })
            }), n
        }, e.fn.serialize = function () {
            var e = [];
            return this.serializeArray().forEach(function (t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, e.fn.submit = function (t) {
            if (t)this.bind("submit", t); else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto), function (e) {
        "__proto__" in {} || e.extend(e.zepto, {
            Z: function (t, n) {
                return t = t || [], e.extend(t, e.fn), t.selector = n || "", t.__Z = !0, t
            }, isZ: function (t) {
                return "array" === e.type(t) && "__Z" in t
            }
        }), e.isPC = navigator.platform.indexOf("Win") >= 0 ? !0 : !1;
        try {
            getComputedStyle(void 0)
        } catch (t) {
            var n = getComputedStyle;
            window.getComputedStyle = function (e) {
                try {
                    return n(e)
                } catch (t) {
                    return null
                }
            }
        }
    }(Zepto), Zepto
});
var Zepto = function () {
    function e(e) {
        return null == e ? String(e) : V[$.call(e)] || "object"
    }

    function t(t) {
        return "function" == e(t)
    }

    function n(e) {
        return null != e && e == e.window
    }

    function r(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE
    }

    function i(t) {
        return "object" == e(t)
    }

    function s(e) {
        return i(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
    }

    function o(e) {
        return "number" == typeof e.length
    }

    function u(e) {
        return A.call(e, function (e) {
            return null != e
        })
    }

    function a(e) {
        return e.length > 0 ? x.fn.concat.apply([], e) : e
    }

    function f(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(e) {
        return e in _ ? _[e] : _[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
    }

    function c(e, t) {
        return "number" != typeof t || D[f(e)] ? t : t + "px"
    }

    function h(e) {
        var t, n;
        return M[e] || (t = O.createElement(e), O.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), M[e] = n), M[e]
    }

    function p(e) {
        return "children" in e ? L.call(e.children) : x.map(e.childNodes, function (e) {
            return 1 == e.nodeType ? e : void 0
        })
    }

    function d(e, t, n) {
        for (S in t)n && (s(t[S]) || G(t[S])) ? (s(t[S]) && !s(e[S]) && (e[S] = {}), G(t[S]) && !G(e[S]) && (e[S] = []), d(e[S], t[S], n)) : t[S] !== E && (e[S] = t[S])
    }

    function v(e, t) {
        return null == t ? x(e) : x(e).filter(t)
    }

    function m(e, n, r, i) {
        return t(n) ? n.call(e, r, i) : n
    }

    function g(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function y(e, t) {
        var n = e.className, r = n && n.baseVal !== E;
        return t === E ? r ? n.baseVal : n : void (r ? n.baseVal = t : e.className = t)
    }

    function b(e) {
        var t;
        try {
            return e ? "true" == e || ("false" == e ? !1 : "null" == e ? null : /^0/.test(e) || isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? x.parseJSON(e) : e : t) : e
        } catch (n) {
            return e
        }
    }

    function w(e, t) {
        t(e);
        for (var n in e.childNodes)w(e.childNodes[n], t)
    }

    var E, S, x, T, N, C, k = [], L = k.slice, A = k.filter, O = window.document, M = {}, _ = {}, D = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, P = /^\s*<(\w+|!)[^>]*>/, H = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, B = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, j = /^(?:body|html)$/i, F = /([A-Z])/g, I = ["val", "css", "html", "text", "data", "width", "height", "offset"], q = ["after", "prepend", "before", "append"], R = O.createElement("table"), U = O.createElement("tr"), z = {
        tr: O.createElement("tbody"),
        tbody: R,
        thead: R,
        tfoot: R,
        td: U,
        th: U,
        "*": O.createElement("div")
    }, W = /complete|loaded|interactive/, X = /^[\w-]*$/, V = {}, $ = V.toString, J = {}, K = O.createElement("div"), Q = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, G = Array.isArray || function (e) {
            return e instanceof Array
        };
    return J.matches = function (e, t) {
        if (!t || !e || 1 !== e.nodeType)return !1;
        var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (n)return n.call(e, t);
        var r, i = e.parentNode, s = !i;
        return s && (i = K).appendChild(e), r = ~J.qsa(i, t).indexOf(e), s && K.removeChild(e), r
    }, N = function (e) {
        return e.replace(/-+(.)?/g, function (e, t) {
            return t ? t.toUpperCase() : ""
        })
    }, C = function (e) {
        return A.call(e, function (t, n) {
            return e.indexOf(t) == n
        })
    }, J.fragment = function (e, t, n) {
        var r, i, o;
        return H.test(e) && (r = x(O.createElement(RegExp.$1))), r || (e.replace && (e = e.replace(B, "<$1></$2>")), t === E && (t = P.test(e) && RegExp.$1), t in z || (t = "*"), o = z[t], o.innerHTML = "" + e, r = x.each(L.call(o.childNodes), function () {
            o.removeChild(this)
        })), s(n) && (i = x(r), x.each(n, function (e, t) {
            I.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
        })), r
    }, J.Z = function (e, t) {
        return e = e || [], e.__proto__ = x.fn, e.selector = t || "", e
    }, J.isZ = function (e) {
        return e instanceof J.Z
    }, J.init = function (e, n) {
        var r;
        if (!e)return J.Z();
        if ("string" == typeof e)if (e = e.trim(), "<" == e[0] && P.test(e))r = J.fragment(e, RegExp.$1, n), e = null; else {
            if (n !== E)return x(n).find(e);
            r = J.qsa(O, e)
        } else {
            if (t(e))return x(O).ready(e);
            if (J.isZ(e))return e;
            if (G(e))r = u(e); else if (i(e))r = [e], e = null; else if (P.test(e))r = J.fragment(e.trim(), RegExp.$1, n), e = null; else {
                if (n !== E)return x(n).find(e);
                r = J.qsa(O, e)
            }
        }
        return J.Z(r, e)
    }, x = function (e, t) {
        return J.init(e, t)
    }, x.extend = function (e) {
        var t, n = L.call(arguments, 1);
        return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function (n) {
            d(e, n, t)
        }), e
    }, J.qsa = function (e, t) {
        var n, i = "#" == t[0], s = !i && "." == t[0], o = i || s ? t.slice(1) : t, u = X.test(o);
        return r(e) && u && i ? (n = e.getElementById(o)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : L.call(u && !i ? s ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
    }, x.contains = function (e, t) {
        return e !== t && e.contains(t)
    }, x.type = e, x.isFunction = t, x.isWindow = n, x.isArray = G, x.isPlainObject = s, x.isEmptyObject = function (e) {
        var t;
        for (t in e)return !1;
        return !0
    }, x.inArray = function (e, t, n) {
        return k.indexOf.call(t, e, n)
    }, x.camelCase = N, x.trim = function (e) {
        return null == e ? "" : String.prototype.trim.call(e)
    }, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function (e, t) {
        var n, r, i, s = [];
        if (o(e))for (r = 0; r < e.length; r++)n = t(e[r], r), null != n && s.push(n); else for (i in e)n = t(e[i], i), null != n && s.push(n);
        return a(s)
    }, x.each = function (e, t) {
        var n, r;
        if (o(e)) {
            for (n = 0; n < e.length; n++)if (t.call(e[n], n, e[n]) === !1)return e
        } else for (r in e)if (t.call(e[r], r, e[r]) === !1)return e;
        return e
    }, x.grep = function (e, t) {
        return A.call(e, t)
    }, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    }), x.fn = {
        forEach: k.forEach,
        reduce: k.reduce,
        push: k.push,
        sort: k.sort,
        indexOf: k.indexOf,
        concat: k.concat,
        map: function (e) {
            return x(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return x(L.apply(this, arguments))
        },
        ready: function (e) {
            return W.test(O.readyState) && O.body ? e(x) : O.addEventListener("DOMContentLoaded", function () {
                e(x)
            }, !1), this
        },
        get: function (e) {
            return e === E ? L.call(this) : this[e >= 0 ? e : e + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (e) {
            return k.every.call(this, function (t, n) {
                return e.call(t, n, t) !== !1
            }), this
        },
        filter: function (e) {
            return t(e) ? this.not(this.not(e)) : x(A.call(this, function (t) {
                return J.matches(t, e)
            }))
        },
        add: function (e, t) {
            return x(C(this.concat(x(e, t))))
        },
        is: function (e) {
            return this.length > 0 && J.matches(this[0], e)
        },
        not: function (e) {
            var n = [];
            if (t(e) && e.call !== E)this.each(function (t) {
                e.call(this, t) || n.push(this)
            }); else {
                var r = "string" == typeof e ? this.filter(e) : o(e) && t(e.item) ? L.call(e) : x(e);
                this.forEach(function (e) {
                    r.indexOf(e) < 0 && n.push(e)
                })
            }
            return x(n)
        },
        has: function (e) {
            return this.filter(function () {
                return i(e) ? x.contains(this, e) : x(this).find(e).size()
            })
        },
        eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function () {
            var e = this[0];
            return e && !i(e) ? e : x(e)
        },
        last: function () {
            var e = this[this.length - 1];
            return e && !i(e) ? e : x(e)
        },
        find: function (e) {
            var t, n = this;
            return t = "object" == typeof e ? x(e).filter(function () {
                var e = this;
                return k.some.call(n, function (t) {
                    return x.contains(t, e)
                })
            }) : 1 == this.length ? x(J.qsa(this[0], e)) : this.map(function () {
                return J.qsa(this, e)
            })
        },
        closest: function (e, t) {
            var n = this[0], i = !1;
            for ("object" == typeof e && (i = x(e)); n && !(i ? i.indexOf(n) >= 0 : J.matches(n, e));)n = n !== t && !r(n) && n.parentNode;
            return x(n)
        },
        parents: function (e) {
            for (var t = [], n = this; n.length > 0;)n = x.map(n, function (e) {
                return (e = e.parentNode) && !r(e) && t.indexOf(e) < 0 ? (t.push(e), e) : void 0
            });
            return v(t, e)
        },
        parent: function (e) {
            return v(C(this.pluck("parentNode")), e)
        },
        children: function (e) {
            return v(this.map(function () {
                return p(this)
            }), e)
        },
        contents: function () {
            return this.map(function () {
                return L.call(this.childNodes)
            })
        },
        siblings: function (e) {
            return v(this.map(function (e, t) {
                return A.call(p(t.parentNode), function (e) {
                    return e !== t
                })
            }), e)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (e) {
            return x.map(this, function (t) {
                return t[e]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function (e) {
            return this.before(e).remove()
        },
        wrap: function (e) {
            var n = t(e);
            if (this[0] && !n)var r = x(e).get(0), i = r.parentNode || this.length > 1;
            return this.each(function (t) {
                x(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function (e) {
            if (this[0]) {
                x(this[0]).before(e = x(e));
                for (var t; (t = e.children()).length;)e = t.first();
                x(e).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            var n = t(e);
            return this.each(function (t) {
                var r = x(this), i = r.contents(), s = n ? e.call(this, t) : e;
                i.length ? i.wrapAll(s) : r.append(s)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                x(this).replaceWith(x(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (e) {
            return this.each(function () {
                var t = x(this);
                (e === E ? "none" == t.css("display") : e) ? t.show() : t.hide()
            })
        },
        prev: function (e) {
            return x(this.pluck("previousElementSibling")).filter(e || "*")
        },
        next: function (e) {
            return x(this.pluck("nextElementSibling")).filter(e || "*")
        },
        html: function (e) {
            return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each(function (t) {
                var n = this.innerHTML;
                x(this).empty().append(m(this, e, t, n))
            })
        },
        text: function (e) {
            return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each(function () {
                this.textContent = e === E ? "" : "" + e
            })
        },
        attr: function (e, t) {
            var n;
            return "string" == typeof e && t === E ? 0 == this.length || 1 !== this[0].nodeType ? E : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : this.each(function (n) {
                if (1 === this.nodeType)if (i(e))for (S in e)g(this, S, e[S]); else g(this, e, m(this, t, n, this.getAttribute(e)))
            })
        },
        removeAttr: function (e) {
            return this.each(function () {
                1 === this.nodeType && g(this, e)
            })
        },
        prop: function (e, t) {
            return e = Q[e] || e, t === E ? this[0] && this[0][e] : this.each(function (n) {
                this[e] = m(this, t, n, this[e])
            })
        },
        data: function (e, t) {
            var n = this.attr("data-" + e.replace(F, "-$1").toLowerCase(), t);
            return null !== n ? b(n) : E
        },
        val: function (e) {
            return 0 === arguments.length ? this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function (t) {
                this.value = m(this, e, t, this.value)
            })
        },
        offset: function (e) {
            if (e)return this.each(function (t) {
                var n = x(this), r = m(this, e, t, n.offset()), i = n.offsetParent().offset(), s = {
                    top: r.top - i.top,
                    left: r.left - i.left
                };
                "static" == n.css("position") && (s.position = "relative"), n.css(s)
            });
            if (0 == this.length)return null;
            var t = this[0].getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                width: Math.round(t.width),
                height: Math.round(t.height)
            }
        },
        css: function (t, n) {
            if (arguments.length < 2) {
                var r = this[0], i = getComputedStyle(r, "");
                if (!r)return;
                if ("string" == typeof t)return r.style[N(t)] || i.getPropertyValue(t);
                if (G(t)) {
                    var s = {};
                    return x.each(G(t) ? t : [t], function (e, t) {
                        s[t] = r.style[N(t)] || i.getPropertyValue(t)
                    }), s
                }
            }
            var o = "";
            if ("string" == e(t))n || 0 === n ? o = f(t) + ":" + c(t, n) : this.each(function () {
                this.style.removeProperty(f(t))
            }); else for (S in t)t[S] || 0 === t[S] ? o += f(S) + ":" + c(S, t[S]) + ";" : this.each(function () {
                this.style.removeProperty(f(S))
            });
            return this.each(function () {
                this.style.cssText += ";" + o
            })
        },
        index: function (e) {
            return e ? this.indexOf(x(e)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (e) {
            return e ? k.some.call(this, function (e) {
                return this.test(y(e))
            }, l(e)) : !1
        },
        addClass: function (e) {
            return e ? this.each(function (t) {
                T = [];
                var n = y(this), r = m(this, e, t, n);
                r.split(/\s+/g).forEach(function (e) {
                    x(this).hasClass(e) || T.push(e)
                }, this), T.length && y(this, n + (n ? " " : "") + T.join(" "))
            }) : this
        },
        removeClass: function (e) {
            return this.each(function (t) {
                return e === E ? y(this, "") : (T = y(this), m(this, e, t, T).split(/\s+/g).forEach(function (e) {
                    T = T.replace(l(e), " ")
                }), void y(this, T.trim()))
            })
        },
        toggleClass: function (e, t) {
            return e ? this.each(function (n) {
                var r = x(this), i = m(this, e, n, y(this));
                i.split(/\s+/g).forEach(function (e) {
                    (t === E ? !r.hasClass(e) : t) ? r.addClass(e) : r.removeClass(e)
                })
            }) : this
        },
        scrollTop: function (e) {
            if (this.length) {
                var t = "scrollTop" in this[0];
                return e === E ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
                    this.scrollTop = e
                } : function () {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },
        scrollLeft: function (e) {
            if (this.length) {
                var t = "scrollLeft" in this[0];
                return e === E ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
                    this.scrollLeft = e
                } : function () {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var e = this[0], t = this.offsetParent(), n = this.offset(), r = j.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
                return n.top -= parseFloat(x(e).css("margin-top")) || 0, n.left -= parseFloat(x(e).css("margin-left")) || 0, r.top += parseFloat(x(t[0]).css("border-top-width")) || 0, r.left += parseFloat(x(t[0]).css("border-left-width")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || O.body; e && !j.test(e.nodeName) && "static" == x(e).css("position");)e = e.offsetParent;
                return e
            })
        }
    }, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function (e) {
        var t = e.replace(/./, function (e) {
            return e[0].toUpperCase()
        });
        x.fn[e] = function (i) {
            var s, o = this[0];
            return i === E ? n(o) ? o["inner" + t] : r(o) ? o.documentElement["scroll" + t] : (s = this.offset()) && s[e] : this.each(function (t) {
                o = x(this), o.css(e, m(this, i, t, o[e]()))
            })
        }
    }), q.forEach(function (t, n) {
        var r = n % 2;
        x.fn[t] = function () {
            var t, i, s = x.map(arguments, function (n) {
                return t = e(n), "object" == t || "array" == t || null == n ? n : J.fragment(n)
            }), o = this.length > 1;
            return s.length < 1 ? this : this.each(function (e, t) {
                i = r ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null, s.forEach(function (e) {
                    if (o)e = e.cloneNode(!0); else if (!i)return x(e).remove();
                    w(i.insertBefore(e, t), function (e) {
                        null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                    })
                })
            })
        }, x.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function (e) {
            return x(e)[t](this), this
        }
    }), J.Z.prototype = x.fn, J.uniq = C, J.deserializeValue = b, x.zepto = J, x
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (e) {
    function t(e) {
        return e._zid || (e._zid = h++)
    }

    function n(e, n, s, o) {
        if (n = r(n), n.ns)var u = i(n.ns);
        return (m[t(e)] || []).filter(function (e) {
            return !(!e || n.e && e.e != n.e || n.ns && !u.test(e.ns) || s && t(e.fn) !== t(s) || o && e.sel != o)
        })
    }

    function r(e) {
        var t = ("" + e).split(".");
        return {e: t[0], ns: t.slice(1).sort().join(" ")}
    }

    function i(e) {
        return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
    }

    function s(e, t) {
        return e.del && !y && e.e in b || !!t
    }

    function o(e) {
        return w[e] || y && b[e] || e
    }

    function u(n, i, u, a, l, h, p) {
        var d = t(n), v = m[d] || (m[d] = []);
        i.split(/\s/).forEach(function (t) {
            if ("ready" == t)return e(document).ready(u);
            var i = r(t);
            i.fn = u, i.sel = l, i.e in w && (u = function (t) {
                var n = t.relatedTarget;
                return !n || n !== this && !e.contains(this, n) ? i.fn.apply(this, arguments) : void 0
            }), i.del = h;
            var d = h || u;
            i.proxy = function (e) {
                if (e = f(e), !e.isImmediatePropagationStopped()) {
                    e.data = a;
                    var t = d.apply(n, e._args == c ? [e] : [e].concat(e._args));
                    return t === !1 && (e.preventDefault(), e.stopPropagation()), t
                }
            }, i.i = v.length, v.push(i), "addEventListener" in n && n.addEventListener(o(i.e), i.proxy, s(i, p))
        })
    }

    function a(e, r, i, u, a) {
        var f = t(e);
        (r || "").split(/\s/).forEach(function (t) {
            n(e, t, i, u).forEach(function (t) {
                delete m[f][t.i], "removeEventListener" in e && e.removeEventListener(o(t.e), t.proxy, s(t, a))
            })
        })
    }

    function f(t, n) {
        return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(T, function (e, r) {
            var i = n[e];
            t[e] = function () {
                return this[r] = E, i && i.apply(n, arguments)
            }, t[r] = S
        }), (n.defaultPrevented !== c ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = E)), t
    }

    function l(e) {
        var t, n = {originalEvent: e};
        for (t in e)x.test(t) || e[t] === c || (n[t] = e[t]);
        return f(n, e)
    }

    var c, h = 1, p = Array.prototype.slice, d = e.isFunction, v = function (e) {
        return "string" == typeof e
    }, m = {}, g = {}, y = "onfocusin" in window, b = {
        focus: "focusin",
        blur: "focusout"
    }, w = {mouseenter: "mouseover", mouseleave: "mouseout"};
    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", e.event = {
        add: u,
        remove: a
    }, e.proxy = function (n, r) {
        if (d(n)) {
            var i = function () {
                return n.apply(r, arguments)
            };
            return i._zid = t(n), i
        }
        if (v(r))return e.proxy(n[r], n);
        throw new TypeError("expected function")
    }, e.fn.bind = function (e, t, n) {
        return this.on(e, t, n)
    }, e.fn.unbind = function (e, t) {
        return this.off(e, t)
    }, e.fn.one = function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
    };
    var E = function () {
        return !0
    }, S = function () {
        return !1
    }, x = /^([A-Z]|returnValue$|layer[XY]$)/, T = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    e.fn.delegate = function (e, t, n) {
        return this.on(t, e, n)
    }, e.fn.undelegate = function (e, t, n) {
        return this.off(t, e, n)
    }, e.fn.live = function (t, n) {
        return e(document.body).delegate(this.selector, t, n), this
    }, e.fn.die = function (t, n) {
        return e(document.body).undelegate(this.selector, t, n), this
    }, e.fn.on = function (t, n, r, i, s) {
        var o, f, h = this;
        return t && !v(t) ? (e.each(t, function (e, t) {
            h.on(e, n, r, t, s)
        }), h) : (v(n) || d(i) || i === !1 || (i = r, r = n, n = c), (d(r) || r === !1) && (i = r, r = c), i === !1 && (i = S), h.each(function (c, h) {
            s && (o = function (e) {
                return a(h, e.type, i), i.apply(this, arguments)
            }), n && (f = function (t) {
                var r, s = e(t.target).closest(n, h).get(0);
                return s && s !== h ? (r = e.extend(l(t), {
                    currentTarget: s,
                    liveFired: h
                }), (o || i).apply(s, [r].concat(p.call(arguments, 1)))) : void 0
            }), u(h, t, i, r, n, f || o)
        }))
    }, e.fn.off = function (t, n, r) {
        var i = this;
        return t && !v(t) ? (e.each(t, function (e, t) {
            i.off(e, n, t)
        }), i) : (v(n) || d(r) || r === !1 || (r = n, n = c), r === !1 && (r = S), i.each(function () {
            a(this, t, r, n)
        }))
    }, e.fn.trigger = function (t, n) {
        return t = v(t) || e.isPlainObject(t) ? e.Event(t) : f(t), t._args = n, this.each(function () {
            "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
        })
    }, e.fn.triggerHandler = function (t, r) {
        var i, s;
        return this.each(function (o, u) {
            i = l(v(t) ? e.Event(t) : t), i._args = r, i.target = u, e.each(n(u, t.type || t), function (e, t) {
                return s = t.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), s
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
        e.fn[t] = function (e) {
            return e ? this.bind(t, e) : this.trigger(t)
        }
    }), ["focus", "blur"].forEach(function (t) {
        e.fn[t] = function (e) {
            return e ? this.bind(t, e) : this.each(function () {
                try {
                    this[t]()
                } catch (e) {
                }
            }), this
        }
    }), e.Event = function (e, t) {
        v(e) || (t = e, e = t.type);
        var n = document.createEvent(g[e] || "Events"), r = !0;
        if (t)for (var i in t)"bubbles" == i ? r = !!t[i] : n[i] = t[i];
        return n.initEvent(e, r, !0), f(n)
    }
}(Zepto), function (t) {
    function l(e, n, r) {
        var i = t.Event(n);
        return t(e).trigger(i, r), !i.isDefaultPrevented()
    }

    function h(e, t, r, i) {
        return e.global ? l(t || n, r, i) : void 0
    }

    function p(e) {
        e.global && 0 === t.active++ && h(e, null, "ajaxStart")
    }

    function d(e) {
        e.global && !--t.active && h(e, null, "ajaxStop")
    }

    function m(e, t) {
        var n = t.context;
        return t.beforeSend.call(n, e, t) === !1 || h(t, n, "ajaxBeforeSend", [e, t]) === !1 ? !1 : void h(t, n, "ajaxSend", [e, t])
    }

    function g(e, t, n, r) {
        var i = n.context, s = "success";
        n.success.call(i, e, s, t), r && r.resolveWith(i, [e, s, t]), h(n, i, "ajaxSuccess", [t, n, e]), y(s, t, n)
    }

    function v(e, t, n, r, i) {
        var s = r.context;
        r.error.call(s, n, t, e), i && i.rejectWith(s, [n, t, e]), h(r, s, "ajaxError", [n, r, e || t]), y(t, n, r)
    }

    function y(e, t, n) {
        var r = n.context;
        n.complete.call(r, t, e), h(n, r, "ajaxComplete", [t, n]), d(n)
    }

    function x() {
    }

    function b(e) {
        return e && (e = e.split(";", 2)[0]), e && (e == f ? "html" : e == u ? "json" : s.test(e) ? "script" : a.test(e) && "xml") || "text"
    }

    function w(e, t) {
        return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
    }

    function E(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0)
    }

    function j(e, n, r, i) {
        return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
            url: e,
            data: n,
            success: r,
            dataType: i
        }
    }

    function S(e, n, r, i) {
        var s, o = t.isArray(n), u = t.isPlainObject(n);
        t.each(n, function (n, f) {
            s = t.type(f), i && (n = r ? i : i + "[" + (u || "object" == s || "array" == s ? n : "") + "]"), !i && o ? e.add(f.name, f.value) : "array" == s || !r && "object" == s ? S(e, f, r, n) : e.add(n, f)
        })
    }

    var i, r, e = 0, n = window.document, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/;
    t.active = 0, t.ajaxJSONP = function (r, i) {
        if ("type" in r) {
            var s, o, u = r.jsonpCallback, a = (t.isFunction(u) ? u() : u) || "jsonp" + ++e, f = n.createElement("script"), l = window[a], c = function (e) {
                t(f).triggerHandler("error", e || "abort")
            }, h = {abort: c};
            return i && i.promise(h), t(f).on("load error", function (e, n) {
                clearTimeout(o), t(f).off().remove(), "error" != e.type && s ? g(s[0], h, r, i) : v(null, n || "error", h, r, i), window[a] = l, s && t.isFunction(l) && l(s[0]), l = s = void 0
            }), m(h, r) === !1 ? (c("abort"), h) : (window[a] = function () {
                s = arguments
            }, f.src = r.url.replace(/\?(.+)=\?/, "?$1=" + a), n.head.appendChild(f), r.timeout > 0 && (o = setTimeout(function () {
                c("timeout")
            }, r.timeout)), h)
        }
        return t.ajax(r)
    }, t.ajaxSettings = {
        type: "GET",
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: u,
            xml: "application/xml, text/xml",
            html: f,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var n = t.extend({}, e || {}), o = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings)void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), E(n), n.cache === !1 && (n.url = w(n.url, "_=" + Date.now()));
        var s = n.dataType, a = /\?.+=\?/.test(n.url);
        if ("jsonp" == s || a)return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
        var j, u = n.accepts[s], f = {}, l = function (e, t) {
            f[e.toLowerCase()] = [e, t]
        }, h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, d = n.xhr(), y = d.setRequestHeader;
        if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)for (r in n.headers)l(r, n.headers[r]);
        if (d.setRequestHeader = l, d.onreadystatechange = function () {
                if (4 == d.readyState) {
                    d.onreadystatechange = x, clearTimeout(j);
                    var e, i = !1;
                    if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
                        s = s || b(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText;
                        try {
                            "script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML : "json" == s && (e = c.test(e) ? null : t.parseJSON(e))
                        } catch (r) {
                            i = r
                        }
                        i ? v(i, "parsererror", d, n, o) : g(e, d, n, o)
                    } else v(d.statusText || null, d.status ? "error" : "abort", d, n, o)
                }
            }, m(d, n) === !1)return d.abort(), v(null, "abort", d, n, o), d;
        if (n.xhrFields)for (r in n.xhrFields)d[r] = n.xhrFields[r];
        var T = "async" in n ? n.async : !0;
        d.open(n.type, n.url, T, n.username, n.password);
        for (r in f)y.apply(d, f[r]);
        return n.timeout > 0 && (j = setTimeout(function () {
            d.onreadystatechange = x, d.abort(), v(null, "timeout", d, n, o)
        }, n.timeout)), d.send(n.data ? n.data : null), d
    }, t.get = function () {
        return t.ajax(j.apply(null, arguments))
    }, t.post = function () {
        var e = j.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = j.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, n, r) {
        if (!this.length)return this;
        var i, s = this, u = e.split(/\s/), a = j(e, n, r), f = a.success;
        return u.length > 1 && (a.url = u[0], i = u[1]), a.success = function (e) {
            s.html(i ? t("<div>").html(e.replace(o, "")).find(i) : e), f && f.apply(s, arguments)
        }, t.ajax(a), this
    };
    var T = encodeURIComponent;
    t.param = function (e, t) {
        var n = [];
        return n.add = function (e, t) {
            this.push(T(e) + "=" + T(t))
        }, S(n, e, t), n.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (e) {
    e.fn.serializeArray = function () {
        var n, r = [];
        return e([].slice.call(this.get(0).elements)).each(function () {
            n = e(this);
            var i = n.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && r.push({
                name: n.attr("name"),
                value: n.val()
            })
        }), r
    }, e.fn.serialize = function () {
        var e = [];
        return this.serializeArray().forEach(function (n) {
            e.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
        }), e.join("&")
    }, e.fn.submit = function (n) {
        if (n)this.bind("submit", n); else if (this.length) {
            var r = e.Event("submit");
            this.eq(0).trigger(r), r.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function (e) {
    "__proto__" in {} || e.extend(e.zepto, {
        Z: function (t, n) {
            return t = t || [], e.extend(t, e.fn), t.selector = n || "", t.__Z = !0, t
        }, isZ: function (t) {
            return "array" === e.type(t) && "__Z" in t
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (t) {
        var n = getComputedStyle;
        window.getComputedStyle = function (e) {
            try {
                return n(e)
            } catch (t) {
                return null
            }
        }
    }
}(Zepto);