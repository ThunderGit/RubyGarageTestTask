/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (re.isFunction(e)) return re.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return re.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (de.test(e)) return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = xe[t] = {};
        return re.each(t.match(be) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (s(), re.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(ke, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (re.acceptData(t)) {
            var r, o, s = re.expando,
                a = t.nodeType,
                l = a ? re.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[s] = V.pop() || re.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: re.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[re.camelCase(e)])) : r = o, r
        }
    }

    function h(t, e, n) {
        if (re.acceptData(t)) {
            var i, r, o = t.nodeType,
                s = o ? re.cache : t,
                a = o ? t[re.expando] : re.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !u(i) : !re.isEmptyObject(i)) return
                }(n || (delete s[a].data, u(s[a]))) && (o ? re.cleanData([t], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return pe.activeElement
        } catch (t) {}
    }

    function m(t) {
        var e = Oe.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function g(t, e) {
        var n, i, r = 0,
            o = typeof t.getElementsByTagName !== _e ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== _e ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || re.nodeName(i, e) ? o.push(i) : re.merge(o, g(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], o) : o
    }

    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function x(t) {
        var e = Ye.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }

    function T(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, r, o = re._data(t),
                s = re._data(e, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++) re.event.add(e, n, a[n][i])
            }
            s.data && (s.data = re.extend({}, s.data))
        }
    }

    function _(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (i in r.events) re.removeEvent(e, i, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, n) {
        var i, r = re(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), o
    }

    function k(t) {
        var e = pe,
            n = Ze[t];
        return n || (n = C(t, e), "none" !== n && n || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Je.detach()), Ze[t] = n), n
    }

    function E(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = fn.length; r--;)
            if (e = fn[r] + n, e in t) return e;
        return i
    }

    function N(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = re._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (o[s] = re._data(i, "olddisplay", k(i.nodeName)))) : (r = Ne(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function D(t, e, n) {
        var i = un.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function A(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += re.css(t, n + Se[o], !0, r)), i ? ("content" === n && (s -= re.css(t, "padding" + Se[o], !0, r)), "margin" !== n && (s -= re.css(t, "border" + Se[o] + "Width", !0, r))) : (s += re.css(t, "padding" + Se[o], !0, r), "padding" !== n && (s += re.css(t, "border" + Se[o] + "Width", !0, r)));
        return s
    }

    function P(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = tn(t),
            s = ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = en(t, e, o), (0 > r || null == r) && (r = t.style[e]), rn.test(r)) return r;
            i = s && (ne.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + A(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function j(t, e, n, i, r) {
        return new j.prototype.init(t, e, n, i, r)
    }

    function H() {
        return setTimeout(function() {
            pn = void 0
        }), pn = re.now()
    }

    function L(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Se[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function I(t, e, n) {
        for (var i, r = (xn[e] || []).concat(xn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function O(t, e, n) {
        var i, r, o, s, a, l, u, c, h = this,
            d = {},
            f = t.style,
            p = t.nodeType && Ne(t),
            m = re._data(t, "fxshow");
        n.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(t, "display"), c = "none" === u ? re._data(t, "olddisplay") || k(t.nodeName) : u, "inline" === c && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], gn.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    p = !0
                }
                d[i] = m && m[i] || re.style(t, i)
            } else u = void 0;
        if (re.isEmptyObject(d)) "inline" === ("none" === u ? k(t.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = re._data(t, "fxshow", {}), o && (m.hidden = !p), p ? re(t).show() : h.done(function() {
                re(t).hide()
            }), h.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in d) re.style(t, e, d[e])
            });
            for (i in d) s = I(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function F(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = re.camelCase(n), r = e[i], o = t[n], re.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = re.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function M(t, e, n) {
        var i, r, o = 0,
            s = bn.length,
            a = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = pn || H(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: pn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); s > o; o++)
            if (i = bn[o].call(u, t, c, u.opts)) return i;
        return re.map(c, I, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function R(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, re.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = t === zn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function W(t, e) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }

    function $(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function B(t, e, n, i) {
        var r, o, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function z(t, e, n, i) {
        var r;
        if (re.isArray(e)) re.each(e, function(e, r) {
            n || Vn.test(t) ? i(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== re.type(e)) i(t, e);
        else
            for (r in e) z(t + "[" + r + "]", e[r], n, i)
    }

    function X() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function Y(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var V = [],
        G = V.slice,
        Q = V.concat,
        K = V.push,
        J = V.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.2",
        re = function(t, e) {
            return new re.fn.init(t, e)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(t, e) {
            return e.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, re.extend = re.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r) t = s[i], n = r[i], s !== n && (u && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, o = t && re.isArray(t) ? t : []) : o = t && re.isPlainObject(t) ? t : {}, s[i] = re.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !re.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], i), r === !1) break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(oe, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (J) return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
                s = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; s > o; o++) r = e(t[o], o, i), null != r && l.push(r);
            else
                for (o in t) r = e(t[o], o, i), null != r && l.push(r);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (n = G.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(G.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ue =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function(t) {
            function e(t, e, n, i) {
                var r, o, s, a, l, u, h, f, p, m;
                if ((e ? e.ownerDocument || e : R) !== j && P(e), e = e || j, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && L) {
                    if (11 !== a && (r = ye.exec(t)))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && M(e, o) && o.id === s) return n.push(o), n
                        } else {
                            if (r[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = r[3]) && w.getElementsByClassName) return J.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (w.qsa && (!I || !I.test(t))) {
                        if (f = h = q, p = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = k(t), (h = e.getAttribute("id")) ? f = h.replace(xe, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                            p = be.test(t) && c(e.parentNode) || e, m = u.join(",")
                        }
                        if (m) try {
                            return J.apply(n, p.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[q] = !0, t
            }

            function r(t) {
                var e = j.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = $++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, s) {
                    var a, l, u = [W, o];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (l = e[q] || (e[q] = {}), (a = l[i]) && a[0] === W && a[1] === o) return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                return i
            }

            function g(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
                return s
            }

            function v(t, e, n, r, o, s) {
                return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), i(function(i, s, a, l) {
                    var u, c, h, d = [],
                        f = [],
                        p = s.length,
                        v = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, d, t, a, l),
                        b = n ? o || (i ? t : p || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (u = g(b, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[f[c]] = !(y[f[c]] = h));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(h = b[c]) && (u = o ? te(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                        }
                    } else b = g(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, r = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, s, !0), u = f(function(t) {
                        return te(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        var r = !o && (i || n !== N) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, r
                    }]; r > a; a++)
                    if (n = T.relative[t[a].type]) c = [f(p(c), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                            for (i = ++a; r > i && !T.relative[t[i].type]; i++);
                            return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && d(t))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function b(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, h, d, f = 0,
                            p = "0",
                            m = i && [],
                            v = [],
                            y = N,
                            b = i || o && T.find.TAG("*", u),
                            x = W += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (N = s !== j && s); p !== w && null != (c = b[p]); p++) {
                            if (o && c) {
                                for (h = 0; d = t[h++];)
                                    if (d(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (W = x)
                            }
                            r && ((c = !d && c) && f--, i && m.push(c))
                        }
                        if (f += p, r && p !== f) {
                            for (h = 0; d = n[h++];) d(m, v, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) m[p] || v[p] || (v[p] = Q.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (W = x, N = y), m
                    };
                return r ? i(s) : s
            }
            var x, w, T, _, C, k, E, S, N, D, A, P, j, H, L, I, O, F, M, q = "sizzle" + 1 * new Date,
                R = t.document,
                W = 0,
                $ = 0,
                B = n(),
                z = n(),
                X = n(),
                U = function(t, e) {
                    return t === e && (A = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                K = G.push,
                J = G.push,
                Z = G.slice,
                te = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = ie.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(se),
                fe = new RegExp("^" + re + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ee + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Te = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                _e = function() {
                    P()
                };
            try {
                J.apply(G = Z.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
            } catch (Ce) {
                J = {
                    apply: G.length ? function(t, e) {
                        K.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, P = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : R;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, H = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), L = !C(i), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function(t) {
                    return H.appendChild(t).id = q, !i.getElementsByName || !i.getElementsByName(q).length
                }), w.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(we, Te);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(we, Te);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return L ? e.getElementsByClassName(t) : void 0
                }, O = [], I = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function(t) {
                    H.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")
                }), r(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                })), (w.matchesSelector = ve.test(F = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), O.push("!=", se)
                }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(H.compareDocumentPosition), M = e || ve.test(H.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && M(R, t) ? -1 : e === i || e.ownerDocument === R && M(R, e) ? 1 : D ? te(D, t) - te(D, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n, r = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : D ? te(D, t) - te(D, e) : 0;
                    if (o === a) return s(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; l[r] === u[r];) r++;
                    return r ? s(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
                }, i) : j
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== j && P(t), n = n.replace(he, "='$1']"), !(!w.matchesSelector || !L || O && O.test(n) || I && I.test(n))) try {
                    var i = F.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (r) {}
                return e(n, j, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== j && P(t), M(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== j && P(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && V.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : w.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (A = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(U), A) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return D = null, t
            }, _ = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += _(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(we, Te), t[3] = (t[3] || t[4] || t[5] || "").replace(we, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(we, Te).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (c = g[q] || (g[q] = {}), u = c[t] || [], f = u[0] === W && u[1], d = u[0] === W && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (d = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++d && h === e) {
                                            c[t] = [W, f, d];
                                            break
                                        }
                                } else if (y && (u = (e[q] || (e[q] = {}))[t]) && u[0] === W) d = u[1];
                                else
                                    for (;
                                        (h = ++f && h && h[m] || (d = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[q] || (h[q] = {}))[t] = [W, d]), h !== e)););
                                return d -= r, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[q] ? o(n) : o.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;) i = te(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = E(t.replace(le, "$1"));
                        return r[q] ? i(function(t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(we, Te),
                            function(e) {
                                return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, Te).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === H
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ge.test(t.nodeName)
                    },
                    input: function(t) {
                        return me.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return h.prototype = T.filters = T.pseudos, T.setFilters = new h, k = e.tokenize = function(t, n) {
                var i, r, o, s, a, l, u, c = z[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = T.preFilter; a;) {
                    (!i || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(r = pe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, E = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = X[t + " "];
                if (!o) {
                    for (e || (e = k(t)), n = e.length; n--;) o = y(e[n]), o[q] ? i.push(o) : r.push(o);
                    o = X(t, b(r, i)), o.selector = t
                }
                return o
            }, S = e.select = function(t, e, n, i) {
                var r, o, s, a, l, u = "function" == typeof t && t,
                    h = !i && k(t = u.selector || t);
                if (n = n || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && L && T.relative[o[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(we, Te), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = pe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(we, Te), be.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && d(o), !t) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || E(t, h))(i, e, !L, n, be.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = q.split("").sort(U).join("") === q, w.detectDuplicates = !!A, P(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(ee, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; r > e; e++)
                    if (re.contains(i[e], this)) return !0
            }));
            for (e = 0; r > e; e++) re.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
        }
    });
    var fe, pe = t.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = re.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pe, !0)), he.test(n[1]) && re.isPlainObject(e))
                        for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = pe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return fe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = pe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
        };
    ge.prototype = re.fn, fe = re(pe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), re.fn.extend({
        has: function(t) {
            var e, n = re(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(n, i) {
            var r = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g,
        xe = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? xe[t] || o(t) : re.extend({}, t);
        var e, n, i, r, s, a, l = [],
            u = !t.once && [],
            c = function(o) {
                for (n = t.memory && o, i = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++)
                    if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : h.disable())
            },
            h = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(e) {
                            re.each(e, function(e, n) {
                                var i = re.type(n);
                                "function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), e ? r = l.length : n && (a = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(t, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (r >= i && r--, s >= i && s--)
                    }), this
                },
                has: function(t) {
                    return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, n) {
                    return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return h
    }, re.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return re.Deferred(function(n) {
                            re.each(e, function(e, o) {
                                var s = re.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? re.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, re.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = G.call(arguments),
                s = o.length,
                a = 1 !== s || t && re.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : re.Deferred(),
                u = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var we;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!pe.body) return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (we.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
            }
        }
    }), re.ready.promise = function(e) {
        if (!we)
            if (we = re.Deferred(), "complete" === pe.readyState) setTimeout(re.ready);
            else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            pe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && pe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    s(), re.ready()
                }
            }()
        }
        return we.promise(e)
    };
    var Te, _e = "undefined";
    for (Te in re(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, re(function() {
            var t, e, n, i;
            n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== _e && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = pe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            t = null
        }(), re.acceptData = function(t) {
            var e = re.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return h(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return h(t, e, !0)
        }
    }), re.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : o ? l(o, t, re.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = re.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = re._queueHooks(t, e),
                s = function() {
                    re.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = re.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = re._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ne = function(t, e) {
            return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
        },
        De = re.access = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === re.type(n)) {
                r = !0;
                for (a in n) re.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, re.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(re(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = pe.createElement("input"),
            e = pe.createElement("div"),
            n = pe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, n, i = pe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Pe = /^(?:input|select|textarea)$/i,
        je = /^key/,
        He = /^(?:mouse|pointer|contextmenu)|click/,
        Le = /^(?:focusinfocus|focusoutblur)$/,
        Ie = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, f, p, m, g = re._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                        return typeof re === _e || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;) o = Ie.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = re.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = re.event.special[f] || {}, h = re.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), re.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, f, p, m, g = re.hasData(t) && re._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(be) || [""], u = e.length; u--;)
                    if (a = Ie.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = re.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || re.removeEvent(t, f, g.handle), delete c[f])
                    } else
                        for (f in c) re.event.remove(t, f + e[u], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, h, d = [i || pe],
                f = ee.call(e, "type") ? e.type : e,
                p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !Le.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[re.expando] ? e : new re.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), u = re.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || f, Le.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (i.ownerDocument || pe) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0;
                    (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || f, o = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && re.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && re.acceptData(i) && s && i[f] && !re.isWindow(i)) {
                    c = i[s], c && (i[s] = null), re.event.triggered = f;
                    try {
                        i[f]()
                    } catch (m) {}
                    re.event.triggered = void 0, c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, n, i, r, o, s = [],
                a = G.call(arguments),
                l = (re._data(this, "events") || {})[t.type] || [],
                u = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = re.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], o = 0; a > o; o++) i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = He.test(r) ? this.mouseHooks : je.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new re.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || pe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pe, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = pe.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === _e && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Pe.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Pe.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, e);
                r || i.addEventListener(t, n, !0), re._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, e) - 1;
                r ? re._data(i, e, r) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }
        }
    }), re.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === r && (s = i, i = function(t) {
                return re().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                re.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Fe = / jQuery\d+="(?:null|\d+)"/g,
        Me = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"),
        qe = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        $e = /<tbody/i,
        Be = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ye = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Qe = m(pe),
        Ke = Qe.appendChild(pe.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a, l = re.contains(t.ownerDocument, t);
            if (ne.html5Clone || re.isXMLDoc(t) || !Me.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = g(o), a = g(t), s = 0; null != (r = a[s]); ++s) i[s] && _(r, i[s]);
            if (e)
                if (n)
                    for (a = a || g(t), i = i || g(o), s = 0; null != (r = a[s]); s++) T(r, i[s]);
                else T(t, o);
            return i = g(o, "script"), i.length > 0 && w(i, !l && g(t, "script")), i = a = r = null, o
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, l, u, c, h = t.length, d = m(e), f = [], p = 0; h > p; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(f, o.nodeType ? [o] : o);
                    else if (Be.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (We.exec(o) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, a.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!ne.leadingWhitespace && qe.test(o) && f.push(e.createTextNode(qe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (re.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else f.push(e.createTextNode(o));
            for (a && d.removeChild(a), ne.appendChecked || re.grep(g(f, "input"), v), p = 0; o = f[p++];)
                if ((!i || -1 === re.inArray(o, i)) && (s = re.contains(o.ownerDocument, o), a = g(d.appendChild(o), "script"), s && w(a), n))
                    for (r = 0; o = a[r++];) Ue.test(o.type || "") && n.push(o);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = t[s]); s++)
                if ((e || re.acceptData(n)) && (r = n[a], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== _e ? n.removeAttribute(a) : n[a] = null, V.push(r))
                }
        }
    }), re.fn.extend({
        text: function(t) {
            return De(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? re.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return De(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Fe, "") : void 0;
                if (!("string" != typeof t || ze.test(t) || !ne.htmlSerialize && Me.test(t) || !ne.leadingWhitespace && qe.test(t) || Ge[(We.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Q.apply([], t);
            var n, i, r, o, s, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = t[0],
                f = re.isFunction(d);
            if (f || u > 1 && "string" == typeof d && !ne.checkClone && Xe.test(d)) return this.each(function(n) {
                var i = c.eq(n);
                f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
            });
            if (u && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = re.map(g(a, "script"), b), r = o.length; u > l; l++) i = a, l !== h && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), e.call(this[l], i, l);
                if (r)
                    for (s = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ve, "")));
                a = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = re(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), re(o[i])[e](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Je, Ze = {};
    ! function() {
        var t;
        ne.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = pe.getElementsByTagName("body")[0], n && n.style ? (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== _e && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var tn, en, nn = /^margin/,
        rn = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, en = function(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || tn(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || re.contains(t.ownerDocument, t) || (s = re.style(t, e)), rn.test(s) && nn.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : pe.documentElement.currentStyle && (tn = function(t) {
            return t.currentStyle
        }, en = function(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || tn(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), rn.test(s) && !on.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
        }),
        function() {
            function e() {
                var e, n, i, r;
                n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, r = e.appendChild(pe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
            }
            var n, i, r, o, s, a, l;
            n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == a && e(), a
                },
                boxSizingReliable: function() {
                    return null == s && e(), s
                },
                pixelPosition: function() {
                    return null == o && e(), o
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), re.swap = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        };
    var sn = /alpha\([^)]*\)/i,
        an = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        un = new RegExp("^(" + Ee + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + Ee + ")", "i"),
        hn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        fn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = en(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = re.camelCase(e),
                    l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = S(l, a)), s = re.cssHooks[e] || re.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = S(t.style, a)), s = re.cssHooks[e] || re.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = en(t, e, i)), "normal" === o && e in dn && (o = dn[e]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ln.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, hn, function() {
                    return P(t, e, i)
                }) : P(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && tn(t);
                return D(t, n, i ? A(t, e, i, ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = sn.test(o) ? o.replace(sn, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = E(ne.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, en, [t, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Se[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nn.test(t) || (re.cssHooks[t + e].set = D)
    }), re.fn.extend({
        css: function(t, e) {
            return De(this, function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (re.isArray(e)) {
                    for (i = tn(t), r = e.length; r > s; s++) o[e[s]] = re.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ne(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = j, j.prototype = {
        constructor: j,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = j.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = j.prototype.init, re.fx.step = {};
    var pn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [O],
        xn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    r = vn.exec(e),
                    o = r && r[3] || (re.cssNumber[t] ? "" : "px"),
                    s = (re.cssNumber[t] || "px" !== o && +i) && vn.exec(re.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, re.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(M, {
            tweener: function(t, e) {
                re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], xn[n] = xn[n] || [], xn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? bn.unshift(t) : bn.push(t)
            }
        }), re.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? re.extend({}, t) : {
                complete: n || !n && e || re.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !re.isFunction(e) && e
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Ne).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = re.isEmptyObject(t),
                    o = re.speed(e, n, i),
                    s = function() {
                        var e = M(this, re.extend({}, t), o);
                        (r || re._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = re.timers,
                        s = re._data(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && yn.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && re.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = re._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = re.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(t, e) {
            var n = re.fn[e];
            re.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, r)
            }
        }), re.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            re.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var t, e = re.timers,
                n = 0;
            for (pn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || re.fx.stop(), pn = void 0
        }, re.fx.timer = function(t) {
            re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            mn || (mn = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(mn), mn = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t, e, n, i, r;
            e = pe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, t = pe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
        }();
    var wn = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = re.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = re.makeArray(e), s = r.length; s--;)
                        if (i = r[s], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Tn, _n, Cn = re.expr.attrHandle,
        kn = /^(?:checked|selected)$/i,
        En = ne.getSetAttribute,
        Sn = ne.input;
    re.fn.extend({
        attr: function(t, e) {
            return De(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === _e ? re.prop(t, e, n) : (1 === o && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? _n : Tn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(be);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Sn && En || !kn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(En ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), _n = {
        set: function(t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : Sn && En || !kn.test(n) ? t.setAttribute(!En && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Cn[e] || re.find.attr;
        Cn[e] = Sn && En || !kn.test(e) ? function(t, e, i) {
            var r, o;
            return i || (o = Cn[e], Cn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Cn[e] = o), r
        } : function(t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Sn && En || (re.attrHooks.value = {
        set: function(t, e, n) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : Tn && Tn.set(t, e, n)
        }
    }), En || (Tn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Cn.id = Cn.name = Cn.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    }, re.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Tn.set(t, "" === e ? !1 : e, n)
        }
    }, re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Nn = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return De(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !re.isXMLDoc(t), o && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Nn.test(t.nodeName) || Dn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = re.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        s = t ? re.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = re(this), o = t.match(be) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === _e || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Pn = re.now(),
        jn = /\?/,
        Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = re.trim(e + "");
        return r && !re.trim(r.replace(Hn, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var Ln, In, On = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        Mn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bn = {},
        zn = {},
        Xn = "*/".concat("*");
    try {
        In = location.href
    } catch (Un) {
        In = pe.createElement("a"), In.href = "", In = In.href
    }
    Ln = $n.exec(In.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: In,
            type: "GET",
            isLocal: qn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? W(W(t, re.ajaxSettings), e) : W(re.ajaxSettings, t)
        },
        ajaxPrefilter: q(Bn),
        ajaxTransport: q(zn),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, c, v, y, x, T = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = $(h, w, n)), y = B(h, y, w, r), r ? (h.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, r = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || T) + "", r ? p.resolveWith(d, [c, T, w]) : p.rejectWith(d, [w, T, v]), w.statusCode(g), g = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? c : v]), m.fireWith(d, [w, T]), l && (f.trigger("ajaxComplete", [w, h]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, l, u, c, h = re.ajaxSetup({}, e),
                d = h.context || h,
                f = h.context && (d.nodeType || d.jquery) ? re(d) : re.event,
                p = re.Deferred(),
                m = re.Callbacks("once memory"),
                g = h.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Mn.exec(s);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || In) + "").replace(On, "").replace(Wn, Ln[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = re.trim(h.dataType || "*").toLowerCase().match(be) || [""], null == h.crossDomain && (i = $n.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = re.param(h.data, h.traditional)), R(Bn, h, e, w), 2 === b) return w;
            l = re.event && h.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Rn.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (jn.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Fn.test(o) ? o.replace(Fn, "$1_=" + Pn++) : o + (jn.test(o) ? "&" : "?") + "_=" + Pn++)), h.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : h.accepts["*"]);
            for (r in h.headers) w.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](h[r]);
            if (u = R(zn, h, e, w)) {
                w.readyState = 1, l && f.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function(t, e) {
        re[e] = function(t, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(re.isFunction(t) ? function(e) {
                re(this).wrapInner(t.call(this, e))
            } : function() {
                var e = re(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    };
    var Yn = /%20/g,
        Vn = /\[\]$/,
        Gn = /\r?\n/g,
        Qn = /^(?:submit|button|image|reset|file)$/i,
        Kn = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) z(n, t[n], e, r);
        return i.join("&").replace(Yn, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Kn.test(this.nodeName) && !Qn.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Gn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Gn, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Jn = 0,
        Zn = {},
        ti = re.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Zn) Zn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials" in ti, ti = ne.ajax = !!ti, ti && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, o = t.xhr(),
                        s = ++Jn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(t.hasContent && t.data || null), e = function(n, r) {
                        var a, l, u;
                        if (e && (r || 4 === o.readyState))
                            if (delete Zn[s], e = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && i(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Zn[s] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = pe.head || re("head")[0] || pe.documentElement;
            return {
                send: function(i, r) {
                    e = pe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ei.pop() || re.expando + "_" + Pn++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ni, "$1" + r) : e.jsonp !== !1 && (e.url += (jn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || re.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, ei.push(r)), s && re.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), re.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || pe;
        var i = he.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function(t, e, n) {
        if ("string" != typeof t && ii) return ii.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && re.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, r || [t.responseText, e, t])
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u, c = re.css(t, "position"),
                h = re(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, re.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== _e && (i = r.getBoundingClientRect()), n = Y(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || ri
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function(i) {
            return De(this, function(t, i, r) {
                var o = Y(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = E(ne.pixelPosition, function(t, n) {
            return n ? (n = en(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return De(this, function(e, n, i) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? re.css(e, n, s) : re.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var oi = t.jQuery,
        si = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = si), e && t.jQuery === re && (t.jQuery = oi), re
    }, typeof e === _e && (t.jQuery = t.$ = re), re
}),
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(e, i) {
        var r, o, s, a = e.nodeName.toLowerCase();
        return "area" === a ? (r = e.parentNode, o = r.name, e.href && o && "map" === r.nodeName.toLowerCase() ? (s = t("img[usemap='#" + o + "']")[0], !!s && n(s)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var n = this.css("position"),
                i = "absolute" === n,
                r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var e = t(this);
                    return i && "static" === e.css("position") ? !1 : r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(n) {
                return !!t.data(n, e)
            }
        }) : function(e, n, i) {
            return !!t.data(e, i[3])
        },
        focusable: function(n) {
            return e(n, !isNaN(t.attr(n, "tabindex")))
        },
        tabbable: function(n) {
            var i = t.attr(n, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && e(n, !r)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, n) {
        function i(e, n, i, o) {
            return t.each(r, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), n
        }
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            o = n.toLowerCase(),
            s = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + n] = function(e) {
            return void 0 === e ? s["inner" + n].call(this) : this.each(function() {
                t(this).css(o, i(this, e) + "px")
            })
        }, t.fn["outer" + n] = function(e, r) {
            return "number" != typeof e ? s["outer" + n].call(this, e) : this.each(function() {
                t(this).css(o, i(this, e, !0, r) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function(e) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), i && i.call(e)
                    }, n)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var n, i, r = t(this[0]); r.length && r[0] !== document;) {
                    if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    r = r.parent()
                }
            return 0
        }
    }), t.ui.plugin = {
        add: function(e, n, i) {
            var r, o = t.ui[e].prototype;
            for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
        },
        call: function(t, e, n, i) {
            var r, o = t.plugins[e];
            if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (r = 0; r < o.length; r++) t.options[o[r][0]] && o[r][1].apply(t.element, n)
        }
    }
}),
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    var e = 0,
        n = Array.prototype.slice;
    return t.cleanData = function(e) {
        return function(n) {
            var i, r, o;
            for (o = 0; null != (r = n[o]); o++) try {
                i = t._data(r, "events"), i && i.remove && t(r).triggerHandler("remove")
            } catch (s) {}
            e(n)
        }
    }(t.cleanData), t.widget = function(e, n, i) {
        var r, o, s, a, l = {},
            u = e.split(".")[0];
        return e = e.split(".")[1], r = u + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function(e) {
            return !!t.data(e, r)
        }, t[u] = t[u] || {}, o = t[u][e], s = t[u][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new s(t, e)
        }, t.extend(s, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
            return t.isFunction(i) ? void(l[e] = function() {
                var t = function() {
                        return n.prototype[e].apply(this, arguments)
                    },
                    r = function(t) {
                        return n.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, n = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = r, e = i.apply(this, arguments), this._super = n, this._superApply = o, e
                }
            }()) : void(l[e] = i)
        }), s.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, l, {
            constructor: s,
            namespace: u,
            widgetName: e,
            widgetFullName: r
        }), o ? (t.each(o._childConstructors, function(e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, s, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(s), t.widget.bridge(e, s), s
    }, t.widget.extend = function(e) {
        for (var i, r, o = n.call(arguments, 1), s = 0, a = o.length; a > s; s++)
            for (i in o[s]) r = o[s][i], o[s].hasOwnProperty(i) && void 0 !== r && (e[i] = t.isPlainObject(r) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], r) : t.widget.extend({}, r) : r);
        return e
    }, t.widget.bridge = function(e, i) {
        var r = i.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var s = "string" == typeof o,
                a = n.call(arguments, 1),
                l = this;
            return s ? this.each(function() {
                var n, i = t.data(this, r);
                return "instance" === o ? (l = i, !1) : i ? t.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            }) : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                var e = t.data(this, r);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, r, new i(o, this))
            })), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(n, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, n) {
            var i, r, o, s = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (s = {}, i = e.split("."), e = i.shift(), i.length) {
                    for (r = s[e] = t.widget.extend({}, this.options[e]), o = 0; o < i.length - 1; o++) r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === r[e] ? null : r[e];
                    r[e] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    s[e] = n
                }
            return this._setOptions(s), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, n, i) {
            var r, o = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), t.each(i, function(i, s) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + o.eventNamespace,
                    c = l[2];
                c ? r.delegate(c, u, a) : n.bind(u, a)
            })
        },
        _off: function(e, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(n).undelegate(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function n() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, n, i) {
            var r, o, s = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(t.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, n) {
        t.Widget.prototype["_" + e] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : e;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), s = !t.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                t(this)[e](), o && o.call(i[0]), n()
            })
        }
    }), t.widget
}),
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
}(function(t) {
    var e = !1;
    return t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!e) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    r = 1 === n.which,
                    o = "string" == typeof this.options.cancel && n.target.nodeName ? t(n.target).closest(this.options.cancel).length : !1;
                return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === t.data(n.target, this.widgetName + ".preventClickEvent") && t.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(n) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, n.target === this._mouseDownEvent.target && t.data(n.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(n)), e = !1, !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}),
/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
}(function(t) {
    return t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, n) {
            return t >= e && e + n > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, n) {
            var i = null,
                r = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (i = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (i = t(e.target)), i && (!this.options.handle || n || (t(this.options.handle, i).find("*").addBack().each(function() {
                this === e.target && (r = !0)
            }), r)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(e, n, i) {
            var r, o, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var n, i, r, o, s = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), e.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                if (i = this.items[n], r = i.item[0], o = this._intersectsWithPointer(i), o && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], r) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                    this._rearrange(e, i), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, n) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var i = this,
                        r = this.placeholder.offset(),
                        o = this.options.axis,
                        s = {};
                    o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(e)
                    })
                } else this._clear(e, n);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected),
                i = [];
            return e = e || {}, t(n).each(function() {
                var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
            }), !i.length && e.key && i.push(e.key + "="), i.join("&")
        },
        toArray: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected),
                i = [];
            return e = e || {}, n.each(function() {
                i.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                n = e + this.helperProportions.width,
                i = this.positionAbs.top,
                r = i + this.helperProportions.height,
                o = t.left,
                s = o + t.width,
                a = t.top,
                l = a + t.height,
                u = this.offset.click.top,
                c = this.offset.click.left,
                h = "x" === this.options.axis || i + u > a && l > i + u,
                d = "y" === this.options.axis || e + c > o && s > e + c,
                f = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : o < e + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < s && a < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                i = e && n,
                r = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && "right" === o || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                i = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && e || "up" === i && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function n() {
                a.push(this)
            }
            var i, r, o, s, a = [],
                l = [],
                u = this._connectWith();
            if (u && e)
                for (i = u.length - 1; i >= 0; i--)
                    for (o = t(u[i], this.document[0]), r = o.length - 1; r >= 0; r--) s = t.data(o[r], this.widgetFullName), s && s !== this && !s.options.disabled && l.push([t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--) l[i][0].each(n);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var n, i, r, o, s, a, l, u, c = this.items,
                h = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (n = d.length - 1; n >= 0; n--)
                    for (r = t(d[n], this.document[0]), i = r.length - 1; i >= 0; i--) o = t.data(r[i], this.widgetFullName), o && o !== this && !o.options.disabled && (h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (n = h.length - 1; n >= 0; n--)
                for (s = h[n][1], a = h[n][0], i = 0, u = a.length; u > i; i++) l = t(a[i]), l.data(this.widgetName + "-item", s), c.push({
                    item: l,
                    instance: s,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, i, r, o;
            for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, e || (i.width = r.outerWidth(), i.height = r.outerHeight()), o = r.offset(), i.left = o.left, i.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var n, i = e.options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function() {
                    var i = e.currentItem[0].nodeName.toLowerCase(),
                        r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === i ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(r)) : "tr" === i ? e._createTrPlaceholder(e.currentItem, r) : "img" === i && r.attr("src", e.currentItem.attr("src")), n || r.css("visibility", "hidden"), r
                },
                update: function(t, r) {
                    (!n || i.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, n) {
            var i = this;
            e.children().each(function() {
                t("<td>&#160;</td>", i.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
            })
        },
        _contactContainers: function(e) {
            var n, i, r, o, s, a, l, u, c, h, d = null,
                f = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (d && t.contains(this.containers[n].element[0], d.element[0])) continue;
                        d = this.containers[n], f = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1);
                else {
                    for (r = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), s = c ? "left" : "top", a = c ? "width" : "height", h = c ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) t.contains(this.containers[f].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[s], u = !1, e[h] - l > this.items[i][a] / 2 && (u = !0), Math.abs(e[h] - l) < r && (r = Math.abs(e[h] - l), o = this.items[i], this.direction = u ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[f]) return void(this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[f].element, !0), this._trigger("change", e, this._uiHash()), this.containers[f]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var n = this.options,
                i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], n = t(r.containment).offset(), i = "hidden" !== t(e).css("overflow"), this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, n) {
            n || (n = this.position);
            var i = "absolute" === e ? 1 : -1,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            }
        },
        _generatePosition: function(e) {
            var n, i, r = this.options,
                o = e.pageX,
                s = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(t, e, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function(t, e) {
            function n(t, e, n) {
                return function(i) {
                    n._trigger(t, i, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && r.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || r.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (r.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), r.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), r.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || r.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (i = 0; i < r.length; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var n = e || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || t([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        handleRemote: function(i) {
            var r, o, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), s = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !n.protocol || !n.host || e.protocol + "//" + e.host != n.protocol + "//" + n.host
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function(e, n, i) {
            var r, o, s = t(),
                a = n || "input,textarea",
                l = e.find(a);
            return l.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    s = s.add(r)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableElement(e)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var r = t(this),
            o = r.data("method"),
            s = r.data("params"),
            a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if (a && (!o || "GET" === o) && !s) return !0;
            var l = n.handleRemote(r);
            return l === !1 ? n.enableElement(r) : l.fail(function() {
                n.enableElement(r)
            }), !1
        }
        return o ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r, o, s = t(this),
            a = s.data("remote") !== e;
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") == e && (r = n.blankInputs(s, n.requiredInputSelector), r && n.fire(s, "ajax:aborted:required", [r]))) return n.stopEverything(i);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    var t, e, n, i, r, o, s, a, l, u, c, h, d, f, p, m, g, v, y, b, x, w, T, _, C, k, E, S, N, D, A, P, j, H, L, I, O, F, M, q, R, W, $, B, z, X, U, Y, V, G, Q, K, J, Z, te, ee, ne = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        ie = function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var i in e) re.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        },
        re = {}.hasOwnProperty,
        oe = [].slice,
        se = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
    H = {}, d = 10, K = !1, M = null, y = null, P = null, W = null, ee = null, i = {
        BEFORE_CHANGE: "page:before-change",
        FETCH: "page:fetch",
        RECEIVE: "page:receive",
        CHANGE: "page:change",
        UPDATE: "page:update",
        LOAD: "page:load",
        RESTORE: "page:restore",
        BEFORE_UNLOAD: "page:before-unload",
        EXPIRE: "page:expire"
    }, _ = function(t) {
        var e;
        return t = new n(t), U(), h(), null != M && M.start(), K && (e = J(t.absolute)) ? (C(e), k(t, null, !1)) : k(t, G)
    }, J = function(t) {
        var e;
        return e = H[t], e && !e.transitionCacheDisabled ? e : void 0
    }, x = function(t) {
        return null == t && (t = !0), K = t
    }, b = function(t) {
        return null == t && (t = !0), u ? t ? null != M ? M : M = new o("html") : (null != M && M.uninstall(), M = null) : void 0
    }, k = function(t, e, n) {
        return null == n && (n = !0), Z(i.FETCH, {
            url: t.absolute
        }), null != ee && ee.abort(), ee = new XMLHttpRequest, ee.open("GET", t.withoutHashForIE10compatibility(), !0), ee.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), ee.setRequestHeader("X-XHR-Referer", W), ee.onload = function() {
            var n;
            return Z(i.RECEIVE, {
                url: t.absolute
            }), (n = F()) ? ($(t), B(), f.apply(null, T(n)), j(), "function" == typeof e && e(), Z(i.LOAD)) : document.location.href = v() || t.absolute
        }, M && n && (ee.onprogress = function() {
            return function(t) {
                var e;
                return e = t.lengthComputable ? t.loaded / t.total * 100 : M.value + (100 - M.value) / 10, M.advanceTo(e)
            }
        }(this)), ee.onloadend = function() {
            return ee = null
        }, ee.onerror = function() {
            return document.location.href = t.absolute
        }, ee.send()
    }, C = function(t) {
        return null != ee && ee.abort(), f(t.title, t.body), q(t), Z(i.RESTORE)
    }, h = function() {
        var t;
        return t = new n(y.url), H[t.absolute] = {
            url: t.relative,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset,
            cachedAt: (new Date).getTime(),
            transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
        }, m(d)
    }, I = function(t) {
        return null == t && (t = d), /^[\d]+$/.test(t) ? d = parseInt(t) : void 0
    }, m = function(t) {
        var e, n, r, o, s, a;
        for (s = Object.keys(H), e = s.map(function(t) {
                return H[t].cachedAt
            }).sort(function(t, e) {
                return e - t
            }), a = [], n = 0, o = s.length; o > n; n++) r = s[n], H[r].cachedAt <= e[t] && (Z(i.EXPIRE, H[r]), a.push(delete H[r]));
        return a
    }, f = function(e, n, r, o) {
        return Z(i.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(n, document.body), null != r && t.update(r), Q(), o && w(), y = window.history.state, null != M && M.done(), Z(i.CHANGE), Z(i.UPDATE)
    }, w = function() {
        var t, e, n, i, r, o, s, a, l, u, c, h;
        for (h = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, r = h.length; r > n; n++)
            if (c = h[n], "" === (l = c.type) || "text/javascript" === l) {
                for (e = document.createElement("script"), u = c.attributes, i = 0, o = u.length; o > i; i++) t = u[i], e.setAttribute(t.name, t.value);
                c.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(c.innerHTML)), a = c.parentNode, s = c.nextSibling, a.removeChild(c), a.insertBefore(e, s)
            }
    }, Y = function(t) {
        return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, Q = function() {
        var t, e;
        return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
    }, $ = function(t) {
        return (t = new n(t)).absolute !== W ? window.history.pushState({
            turbolinks: !0,
            url: t.absolute
        }, "", t.absolute) : void 0
    }, B = function() {
        var t, e;
        return (t = ee.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
    }, v = function() {
        var t;
        return null != (t = ee.getResponseHeader("Location")) && new n(t).crossOrigin() ? t : void 0
    }, U = function() {
        return W = document.location.href
    }, X = function() {
        return window.history.replaceState({
            turbolinks: !0,
            url: document.location.href
        }, "", document.location.href)
    }, z = function() {
        return y = window.history.state
    }, j = function() {
        var t;
        return navigator.userAgent.match(/Firefox/) && !(t = new n).hasNoHash() ? (window.history.replaceState(y, "", t.withoutHash()), document.location.hash = t.hash) : void 0
    }, q = function(t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, G = function() {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, p = function(t) {
        var e, n, i;
        if (null == t || "object" != typeof t) return t;
        e = new t.constructor;
        for (n in t) i = t[n], e[n] = p(i);
        return e
    }, O = function(t) {
        var e, n;
        return n = (null != (e = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? e[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n
    }, Z = function(t, e) {
        var n;
        return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
    }, L = function(t) {
        return !Z(i.BEFORE_CHANGE, {
            url: t
        })
    }, F = function() {
        var t, e, n, i, r, o;
        return e = function() {
            var t;
            return 400 <= (t = ee.status) && 600 > t
        }, o = function() {
            var t;
            return null != (t = ee.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, i = function(t) {
            var e, n, i, r, o;
            for (r = t.querySelector("head").childNodes, o = [], e = 0, n = r.length; n > e; e++) i = r[e], null != ("function" == typeof i.getAttribute ? i.getAttribute("data-turbolinks-track") : void 0) && o.push(i.getAttribute("src") || i.getAttribute("href"));
            return o
        }, t = function(t) {
            var e;
            return P || (P = i(document)), e = i(t), e.length !== P.length || r(e, P).length !== P.length
        }, r = function(t, e) {
            var n, i, r, o, s;
            for (t.length > e.length && (r = [e, t], t = r[0], e = r[1]), o = [], n = 0, i = t.length; i > n; n++) s = t[n], ne.call(e, s) >= 0 && o.push(s);
            return o
        }, !e() && o() && (n = g(ee.responseText), n && !t(n)) ? n : void 0
    }, T = function(e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent : void 0, Y(e.querySelector("body")), t.get(e).token, "runScripts"]
    }, t = {
        get: function(t) {
            var e;
            return null == t && (t = document), {
                node: e = t.querySelector('meta[name="csrf-token"]'),
                token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
            }
        },
        update: function(t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, g = function(t) {
        var e;
        return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
    }, n = function() {
        function t(e) {
            return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
        }
        return t.prototype.withoutHash = function() {
            return this.href.replace(this.hash, "").replace("#", "")
        }, t.prototype.withoutHashForIE10compatibility = function() {
            return this.withoutHash()
        }, t.prototype.hasNoHash = function() {
            return 0 === this.hash.length
        }, t.prototype.crossOrigin = function() {
            return this.origin !== (new t).origin
        }, t.prototype._parse = function() {
            var t;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, t
    }(), r = function(t) {
        function e(t) {
            return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
        }
        return ie(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function() {
            var t, n, i, r;
            for (n = 1 <= arguments.length ? oe.call(arguments, 0) : [], i = 0, r = n.length; r > i; i++) t = n[i], e.HTML_EXTENSIONS.push(t);
            return e.HTML_EXTENSIONS
        }, e.prototype.shouldIgnore = function() {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, e.prototype._anchored = function() {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
        }, e.prototype._nonHtml = function() {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, e.prototype._optOut = function() {
            var t, e;
            for (e = this.originalElement; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
            return t
        }, e.prototype._target = function() {
            return 0 !== this.link.target.length
        }, e
    }(n), e = function() {
        function t(t) {
            this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (L(this.link.absolute) || te(this.link.href), this.event.preventDefault()))
        }
        return t.installHandlerLast = function(e) {
            return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
        }, t.handle = function(e) {
            return new t(e)
        }, t.prototype._extractLink = function() {
            var t;
            for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
            return "A" === t.nodeName && 0 !== t.href.length ? this.link = new r(t) : void 0
        }, t.prototype._validForTurbolinks = function() {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, t.prototype._nonStandardClick = function() {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, t
    }(), o = function() {
        function t(t) {
            this.elementSelector = t, this._trickle = se(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
        }
        var e;
        return e = "turbolinks-progress-bar", t.prototype.install = function() {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, t.prototype.uninstall = function() {
            return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
        }, t.prototype.start = function() {
            return this.advanceTo(5)
        }, t.prototype.advanceTo = function(t) {
            var e;
            if (t > (e = this.value) && 100 >= e) {
                if (this.value = t, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                if (this.value > 0) return this._startTrickle()
            }
        }, t.prototype.done = function() {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, t.prototype._reset = function() {
            var t;
            return t = this.opacity, setTimeout(function(t) {
                return function() {
                    return t.opacity = 0, t._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function(e) {
                return function() {
                    return e.value = 0, e.opacity = t, e._withSpeed(0, function() {
                        return e._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, t.prototype._startTrickle = function() {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, t.prototype._stopTrickle = function() {
            return delete this.trickling
        }, t.prototype._trickle = function() {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, t.prototype._withSpeed = function(t, e) {
            var n, i;
            return n = this.speed, this.speed = t, i = e(), this.speed = n, i
        }, t.prototype._updateStyle = function(t) {
            return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, t.prototype._changeContentToForceRepaint = function() {
            return this.content = "" === this.content ? " " : ""
        }, t.prototype._createCSSRule = function() {
            return this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, t
    }(), c = function(t) {
        return setTimeout(t, 500)
    }, N = function() {
        return document.addEventListener("DOMContentLoaded", function() {
            return Z(i.CHANGE), Z(i.UPDATE)
        }, !0)
    }, A = function() {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(t, e) {
            return jQuery.trim(e.responseText) ? Z(i.UPDATE) : void 0
        }) : void 0
    }, D = function(t) {
        var e, i;
        return (null != (i = t.state) ? i.turbolinks : void 0) ? (e = H[new n(t.state.url).absolute]) ? (h(), C(e)) : te(t.target.location.href) : void 0
    }, S = function() {
        return X(), z(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function() {
            return X(), z()
        }, !1), c(function() {
            return window.addEventListener("popstate", D, !1)
        })
    }, E = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && E, s = !navigator.userAgent.match(/CriOS\//), V = "GET" === (R = O("request_method")) || "" === R, u = l && s && V, a = document.addEventListener && document.createEvent, a && (N(), A()), u ? (te = _, S()) : te = function(t) {
        return document.location.href = t
    }, this.Turbolinks = {
        visit: te,
        pagesCached: I,
        enableTransitionCache: x,
        enableProgressBar: b,
        allowLinkExtensions: r.allowExtensions,
        supported: u,
        EVENTS: p(i)
    }
}.call(this),
    function() {
        var t, e, n, i;
        t = 13, $(function() {
            var t, r, o;
            return $(".todo-list table tbody").sortable({
                update: function(t) {
                    var e, n, i;
                    return i = $.map($(t.target).find("tr"), function(t) {
                        return $(t).data("task-id")
                    }), e = $(t.target).parents("article").data("project-id"), n = "/projects/0/tasks/sort", n = n.replace("0", e), $.ajax({
                        url: n,
                        method: "PUT",
                        data: {
                            project: {
                                tasks: i
                            }
                        }
                    })
                }
            }), r = new n, r.showActionButtons(), r.editProjectMode(), r.updateProjectTitle(), r.deleteProject(), t = new e, t.button(), t.keypress(), o = new i, o.showActionButtons(), o.editTask(), o.taskDescriptionKeypress(), o.taskDescriptionBlur(), o.finishTask(), o.removeTask()
        }), n = function() {
            function e() {}
            return e.prototype.showActionButtons = function() {
                return $(".content .list").on("mouseover", "article .todo-header", function() {
                    return $(this).find("ul").removeClass("hidden")
                }).on("mouseout", "article .todo-header", function() {
                    return $(this).find("ul").addClass("hidden")
                })
            }, e.prototype.editProjectMode = function() {
                return $(".content .list").on("click", ".todo-header .todo-action-edit", function(t) {
                    var e, n;
                    return t.preventDefault(), e = $(this).parents(".todo-header"), n = e.find("h3").text()
                })
            }, e.prototype.deleteProject = function() {
                return $(".content .list").on("click", ".todo-header .todo-action-remove", function(t) {
                    var e, n, i;
                    return t.preventDefault(), confirm("Are you sure ?") ? (e = $(this).parents("article"), n = e.data("project-id"), i = "/projects/0", i = i.replace("0", n), $.ajax({
                        url: i,
                        method: "DELETE"
                    }).done(function() {
                        return e.slideUp(function(t) {
                            return function() {
                                return t.remove
                            }
                        }(this))
                    })) : void 0
                })
            }, e.prototype.updateProjectTitle = function() {
                return $(".content .list").on("blur", ".todo-header input", function(t) {
                    return function(e) {
                        return t._cancelEditing($(e.currentTarget))
                    }
                }(this)), $(".content .list").on("keypress", ".todo-header input", function(e) {
                    return function(n) {
                        return n.which === t ? e._cancelEditing($(n.currentTarget)) : void 0
                    }
                }(this))
            }, e.prototype._cancelEditing = function(t) {
                var e, n, i;
                return i = t.val(), e = $(t).parents("article").data("project-id"), n = "/projects/0", n = n.replace("0", e), $.ajax({
                    url: n,
                    method: "PUT",
                    data: {
                        project: {
                            title: i
                        }
                    }
                }).done(function() {
                    return t.parent(".todo-header").removeClass("edit-mode").find("h3").text(i)
                })
            }, e
        }(), e = function() {
            function e() {}
            return e.prototype.button = function() {
                return $(".content .list").on("click", ".todo-bar .todo-bar-new button", function(t) {
                    return function(e) {
                        return e.preventDefault(), t._newTask($(e.currentTarget))
                    }
                }(this))
            }, e.prototype.keypress = function() {
                return $(".content .list").on("keypress", ".todo-bar .todo-bar-new button", function(e) {
                    return function(n) {
                        return n.which === t ? (n.preventDefault(), e._newTask($(n.currentTarget).next("button"))) : void 0
                    }
                }(this))
            }, e.prototype._newTask = function(t) {
                var e, n, i;
                return e = t.parents("article").data("project-id"), n = "/projects/0/tasks", n = n.replace("0", e), i = t.prev("input").val(), $.ajax({
                    url: n,
                    method: "POST",
                    data: {
                        task: {
                            description: i
                        }
                    }
                }).done(function() {
                    return t.prev("input").val("")
                })
            }, e
        }(), i = function() {
            function e() {}
            return e.prototype.showActionButtons = function() {
                return $(".todo-list").on("mouseover", "tr", function() {
                    return $(this).find("ul").removeClass("hidden")
                }).on("mouseout", "tr", function() {
                    return $(this).find("ul").addClass("hidden")
                })
            }, e.prototype.finishTask = function() {
                return $(".todo-list table").on("change", "tr .todo-list-checkbox input", function(t) {
                    return function(e) {
                        return t._completeTask($(e.currentTarget))
                    }
                }(this))
            }, e.prototype.editTask = function() {
                return $(".todo-list").on("click", "tr .todo-list-task-edit", function(t) {
                    return function(e) {
                        var n, i;
                        return e.preventDefault(), i = $(e.currentTarget).parents("tr").find(".todo-list-task"), i.hasClass("edit-mode") ? void 0 : ( n = i.find("p").text())
                    }
                }(this))
            }, e.prototype.taskDescriptionKeypress = function() {
                return $(".todo-list").on("keypress", "tr .todo-list-task input", function(e) {
                    return function(n) {
                        return n.which === t ? (n.preventDefault(), e._cancelTaskEditing($(n.currentTarget))) : void 0
                    }
                }(this))
            }, e.prototype.taskDescriptionBlur = function() {
                return $(".todo-list").on("blur", "tr .todo-list-task input", function(t) {
                    return function(e) {
                        return e.preventDefault(), t._cancelTaskEditing($(e.currentTarget))
                    }
                }(this))
            }, e.prototype.removeTask = function() {
                return $(".todo-list").on("click", "tr .todo-list-task-delete", function(t) {
                    return function(e) {
                        var n, i, r, o;
                        return e.preventDefault(), confirm("Are you sure ?") ? (r = $(e.currentTarget).parents("tr"), o = r.data("task-id"), n = $(e.currentTarget).parents("article").data("project-id"), i = t._projectTaskPath(n, o), $.ajax({
                            url: i,
                            method: "DELETE"
                        }).done(function() {
                            return r.remove()
                        })) : void 0
                    }
                }(this))
            }, e.prototype._completeTask = function(t) {
                var e, n, i;
                return t.parents("tr").toggleClass("completed-task"), n = t.parents("article").data("project-id"), i = t.parents("tr").data("task-id"), e = "/projects/0/tasks/12345/complete", e = e.replace("0", n).replace("12345", i), $.ajax({
                    url: e,
                    method: "PUT",
                    data: {
                        task: {
                            complete: t.is(":checked")
                        }
                    }
                })
            }, e.prototype._cancelTaskEditing = function(t) {
                var e, n, i, r;
                return e = t.parents("article").data("project-id"), r = t.parents("tr").data("task-id"), n = this._projectTaskPath(e, r), i = t.val(), $.ajax({
                    url: n,
                    method: "PUT",
                    data: {
                        task: {
                            description: i
                        }
                    }
                }).done(function() {
                    var e, n;
                    return e = t.parent(), e.find("p").text(i), null != (n = e.find("input")) && n.remove(), e.removeClass("edit-mode")
                })
            }, e.prototype._projectTaskPath = function(t, e) {
                var n;
                return n = "/projects/0/tasks/12345", n = n.replace("0", t).replace("12345", e)
            }, e.prototype._editTaskInput = function() {
                return "<input type='text' name='' value=''>"
            }, e
        }()
    }.call(this);
