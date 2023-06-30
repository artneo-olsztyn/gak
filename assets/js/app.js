/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.4.1",
        k = function(e, t) { return new k.fn.init(e, t) },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return k.each(this, e) },
        map: function(n) { return this.pushStack(k.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t) { b(e, { nonce: t && t.nonce }) },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(p, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) {
            H = {
                apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { A(t, !0) } finally { s === k && e.removeAttribute("id") }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[k] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Q.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        N = k.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) { return m(n) ? k.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) }
    k.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) { return 1 === e.nodeType })) }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
        not: function(e) { return this.pushStack(j(this, e || [], !0)) },
        is: function(e) { return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };

    function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), k.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return T(e, "parentNode") }, parentsUntil: function(e, t, n) { return T(e, "parentNode", n) }, next: function(e) { return P(e, "nextSibling") }, prev: function(e) { return P(e, "previousSibling") }, nextAll: function(e) { return T(e, "nextSibling") }, prevAll: function(e) { return T(e, "previousSibling") }, nextUntil: function(e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return T(e, "previousSibling", n) }, siblings: function(e) { return S((e.parentNode || {}).firstChild, e) }, children: function(e) { return S(e.firstChild) }, contents: function(e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function(r, i) { k.fn[r] = function(e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n) } });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) { return e }

    function I(e) { throw e }

    function W(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) { n[t] = !0 }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return k.each(arguments, function(e, t) { var n; while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I)) }).promise()
                    },
                    promise: function(e) { return null != e ? k.extend(e, a) : a }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = k.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() }
    k.fn.ready = function(e) { return F.then(e)["catch"](function(e) { k.readyException(e) }), this }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(k(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) { return t.toUpperCase() }

    function V(e) { return e.replace(z, "ms-").replace(U, X) }
    var G = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function Y() { this.expando = k.expando + Y.uid++ }
    Y.uid = 1, Y.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i) } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({ hasData: function(e) { return J.hasData(e) || Q.hasData(e) }, data: function(e, t, n) { return J.access(e, t, n) }, removeData: function(e, t) { J.remove(e, t) }, _data: function(e, t, n) { return Q.access(e, t, n) }, _removeData: function(e, t) { Q.remove(e, t) } }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { J.set(this, n) }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() { J.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { J.remove(this, e) }) }
    }), k.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { k.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function() { Q.remove(e, [t + "queue", n]) }) }) }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { k.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) { return k.contains(e.ownerDocument, e) },
        ae = { composed: !0 };
    ie.getRootNode && (oe = function(e) { return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument });
    var se = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display") },
        ue = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return k.css(e, t, "") },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    k.fn.extend({ show: function() { return fe(this, !0) }, hide: function() { return fe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { se(this) ? k(this).show() : k(this).hide() }) } });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() { return !0 }

    function Se() { return !1 }

    function Ne(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function() { k.event.add(this, t, i, r, n) })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = k.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[k.expando] ? e : new k.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, k.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function(e, t) { k.event.special[e] = { setup: function() { return De(this, e, Ne), !1 }, trigger: function() { return De(this, e), !0 }, delegateType: t } }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({ on: function(e, t, n, r) { return Ae(this, e, t, n, r) }, one: function(e, t, n, r) { return Ae(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() { k.event.remove(this, e, n, t) }) } });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e }

    function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    k.extend({
        htmlPrefilter: function(e) { return e.replace(je, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) { return We(this, e, !0) },
        remove: function(e) { return We(this, e) },
        text: function(e) { return _(this, function(e) { return void 0 === e ? k.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Ie(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return k.clone(this, e, t) }) },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { k.fn[e] = function(e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), a }, scrollboxSize: function() { return e(), i } }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };

    function Ze(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) }
    k.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = _e(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = V(t); return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() { return tt(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function(i, o) { k.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ze) }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r); return o }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = { constructor: nt, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function() { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function(e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = nt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() { it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick()) }

    function ct() { return C.setTimeout(function() { rt = void 0 }), rt = Date.now() }

    function ft(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return le(n.elem, e, ne.exec(t), n), n }] },
        tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, k.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() { for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) }
    }), k.speed = function(e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n) }
    }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { k.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function() { it || (it = !0, lt()) }, k.fx.stop = function() { it = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({ attr: function(e, t) { return _(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { k.removeAttr(this, e) }) } }), k.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = { set: function(e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) { return (e.match(R) || []).join(" ") }

    function xt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] }
    k.fn.extend({ prop: function(e, t) { return _(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { k.propFix[this.toLowerCase()] = this }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).addClass(t.call(this, e, xt(this))) });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).removeClass(t.call(this, e, xt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { k(this).toggleClass(i.call(this, e, xt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = k(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: { get: function(e) { var t = k.find.attr(e, "value"); return null != t ? t : mt(k.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() { k.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) { e.stopPropagation() };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({ trigger: function(e, t) { return this.each(function() { k.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { k.event.simulate(r, e.target, k.event.fix(e)) };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) { r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({ serialize: function() { return k.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function(e) { return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e) },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) { n = {}; while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return k.get(e, t, n, "json") },
        getScript: function(e, t) { return k.get(e, void 0, t, "script") }
    }), k.each(["get", "post"], function(e, i) { k[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function(e, t) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { k.globalEval(e, t) } }) }, k.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { k(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { k(this).replaceWith(this.childNodes) }), this }
    }), k.expr.pseudos.hidden = function(e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var Ut = { 0: 200, 1223: 204 },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), k.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Gt.pop() || k.expando + "_" + kt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { k.fn[t] = function(e) { return this.on(t, e) } }), k.expr.pseudos.animated = function(t) { return k.grep(k.timers, function(e) { return t === e.elem }).length }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === k.css(e, "position")) e = e.offsetParent; return e || ie }) }
    }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) { k.cssHooks[n] = ze(y.pixelPosition, function(e, t) { if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function(a, s) {
        k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { k.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++, i }, k.holdReady = function(e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return k });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) { return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k }, e || (C.jQuery = C.$ = k), k
});

/*! UIkit 3.5.8 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */

! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).UIkit = e() }(this, function() {
    "use strict";
    var t = Object.prototype,
        n = t.hasOwnProperty;

    function l(t, e) { return n.call(t, e) }
    var e = {},
        i = /([a-z\d])([A-Z])/g;

    function d(t) { return t in e || (e[t] = t.replace(i, "$1-$2").toLowerCase()), e[t] }
    var r = /-(\w)/g;

    function f(t) { return t.replace(r, o) }

    function o(t, e) { return e ? e.toUpperCase() : "" }

    function p(t) { return t.length ? o(0, t.charAt(0)) + t.slice(1) : "" }
    var s = String.prototype,
        a = s.startsWith || function(t) { return 0 === this.lastIndexOf(t, 0) };

    function w(t, e) { return a.call(t, e) }
    var h = s.endsWith || function(t) { return this.substr(-t.length) === t };

    function u(t, e) { return h.call(t, e) }

    function c(t, e) { return !!~this.indexOf(t, e) }
    var g = Array.prototype,
        m = s.includes || c,
        v = g.includes || c;

    function b(t, e) { return t && (z(t) ? m : v).call(t, e) }
    var x = g.findIndex || function(t) {
        for (var e = arguments, n = 0; n < this.length; n++)
            if (t.call(e[1], this[n], n, this)) return n;
        return -1
    };

    function y(t, e) { return x.call(t, e) }
    var k = Array.isArray;

    function $(t) { return "function" == typeof t }

    function I(t) { return null !== t && "object" == typeof t }
    var S = t.toString;

    function T(t) { return "[object Object]" === S.call(t) }

    function E(t) { return I(t) && t === t.window }

    function _(t) { return I(t) && 9 === t.nodeType }

    function C(t) { return I(t) && !!t.jquery }

    function A(t) { return I(t) && 1 <= t.nodeType }

    function N(t) { return I(t) && 1 === t.nodeType }

    function M(t) { return S.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/) }

    function D(t) { return "boolean" == typeof t }

    function z(t) { return "string" == typeof t }

    function B(t) { return "number" == typeof t }

    function P(t) { return B(t) || z(t) && !isNaN(t - parseFloat(t)) }

    function O(t) { return !(k(t) ? t.length : I(t) && Object.keys(t).length) }

    function H(t) { return void 0 === t }

    function L(t) { return D(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t }

    function j(t) { var e = Number(t); return !isNaN(e) && e }

    function F(t) { return parseFloat(t) || 0 }

    function W(t) { return A(t) ? t : M(t) || C(t) ? t[0] : k(t) ? W(t[0]) : null }

    function V(t) { return A(t) ? [t] : M(t) ? g.slice.call(t) : k(t) ? t.map(W).filter(Boolean) : C(t) ? t.toArray() : [] }

    function R(t) { return E(t) ? t : (t = W(t)) ? (_(t) ? t : t.ownerDocument).defaultView : window }

    function q(t) { return k(t) ? t : z(t) ? t.split(/,(?![^(]*\))/).map(function(t) { return P(t) ? j(t) : L(t.trim()) }) : [t] }

    function U(t) { return t ? u(t, "ms") ? F(t) : 1e3 * F(t) : 0 }

    function Y(t, n) { return t === n || I(t) && I(n) && Object.keys(t).length === Object.keys(n).length && K(t, function(t, e) { return t === n[e] }) }

    function X(t, e, n) { return t.replace(new RegExp(e + "|" + n, "g"), function(t) { return t === e ? n : e }) }
    var G = Object.assign || function(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        t = Object(t);
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            if (null !== r)
                for (var o in r) l(r, o) && (t[o] = r[o])
        }
        return t
    };

    function J(t) { return t[t.length - 1] }

    function K(t, e) {
        for (var n in t)
            if (!1 === e(t[n], n)) return !1;
        return !0
    }

    function Z(t, r) {
        return t.sort(function(t, e) {
            var n = t[r];
            void 0 === n && (n = 0);
            var i = e[r];
            return void 0 === i && (i = 0), i < n ? 1 : n < i ? -1 : 0
        })
    }

    function Q(t, n) { var i = new Set; return t.filter(function(t) { var e = t[n]; return !i.has(e) && (i.add(e) || !0) }) }

    function tt(t, e, n) { return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(j(t) || 0, e), n) }

    function et() {}

    function nt(t, e) { return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top }

    function it(t, e) { return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top }
    var rt = {
        ratio: function(t, e, n) {
            var i = "width" === e ? "height" : "width",
                r = {};
            return r[i] = t[e] ? Math.round(n * t[i] / t[e]) : t[i], r[e] = n, r
        },
        contain: function(n, i) { var r = this; return K(n = G({}, n), function(t, e) { return n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n }), n },
        cover: function(n, i) { var r = this; return K(n = this.contain(n, i), function(t, e) { return n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n }), n }
    };

    function ot(t, e, n) {
        if (I(e))
            for (var i in e) ot(t, i, e[i]);
        else {
            if (H(n)) return (t = W(t)) && t.getAttribute(e);
            V(t).forEach(function(t) { $(n) && (n = n.call(t, ot(t, e))), null === n ? at(t, e) : t.setAttribute(e, n) })
        }
    }

    function st(t, e) { return V(t).some(function(t) { return t.hasAttribute(e) }) }

    function at(t, e) { t = V(t), e.split(" ").forEach(function(e) { return t.forEach(function(t) { return t.hasAttribute(e) && t.removeAttribute(e) }) }) }

    function ht(t, e) {
        for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
            if (st(t, i[n])) return ot(t, i[n])
    }
    var ut = "undefined" != typeof window,
        ct = ut && /msie|trident/i.test(window.navigator.userAgent),
        lt = ut && "rtl" === ot(document.documentElement, "dir"),
        dt = ut && "ontouchstart" in window,
        ft = ut && window.PointerEvent,
        pt = ut && (dt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints),
        gt = ft ? "pointerdown" : dt ? "touchstart" : "mousedown",
        mt = ft ? "pointermove" : dt ? "touchmove" : "mousemove",
        vt = ft ? "pointerup" : dt ? "touchend" : "mouseup",
        wt = ft ? "pointerenter" : dt ? "" : "mouseenter",
        bt = ft ? "pointerleave" : dt ? "" : "mouseleave",
        xt = ft ? "pointercancel" : "touchcancel";

    function yt(t, e) { return W(t) || It(t, $t(t, e)) }

    function kt(t, e) { var n = V(t); return n.length && n || St(t, $t(t, e)) }

    function $t(t, e) { return void 0 === e && (e = document), Ct(t) || _(e) ? e : e.ownerDocument }

    function It(t, e) { return W(Tt(t, e, "querySelector")) }

    function St(t, e) { return V(Tt(t, e, "querySelectorAll")) }

    function Tt(t, s, e) {
        if (void 0 === s && (s = document), !t || !z(t)) return null;
        var a;
        Ct(t = t.replace(_t, "$1 *")) && (a = [], t = t.match(At).map(function(t) { return t.replace(/,$/, "").trim() }).map(function(t, e) { var n, i, r, o = s; return "!" === t[0] && (n = t.substr(1).trim().split(" "), o = Bt(Pt(s), n[0]), t = n.slice(1).join(" ").trim()), "-" === t[0] && (i = t.substr(1).trim().split(" "), r = (o || s).previousElementSibling, o = Dt(r, t.substr(1)) ? r : null, t = i.slice(1).join(" ")), o ? (o.id || (o.id = "uk-" + Date.now() + e, a.push(function() { return at(o, "id") })), "#" + Ht(o.id) + " " + t) : null }).filter(Boolean).join(","), s = document);
        try { return s[e](t) } catch (t) { return null } finally { a && a.forEach(function(t) { return t() }) }
    }
    var Et = /(^|[^\\],)\s*[!>+~-]/,
        _t = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function Ct(t) { return z(t) && t.match(Et) }
    var At = /.*?[^\\](?:,|$)/g;
    var Nt = ut ? Element.prototype : {},
        Mt = Nt.matches || Nt.webkitMatchesSelector || Nt.msMatchesSelector || et;

    function Dt(t, e) { return V(t).some(function(t) { return Mt.call(t, e) }) }
    var zt = Nt.closest || function(t) {
        var e = this;
        do { if (Dt(e, t)) return e } while (e = Pt(e))
    };

    function Bt(t, e) { return w(e, ">") && (e = e.slice(1)), N(t) ? zt.call(t, e) : V(t).map(function(t) { return Bt(t, e) }).filter(Boolean) }

    function Pt(t) { return (t = W(t)) && N(t.parentNode) && t.parentNode }
    var Ot = ut && window.CSS && CSS.escape || function(t) { return t.replace(/([^\x7f-\uFFFF\w-])/g, function(t) { return "\\" + t }) };

    function Ht(t) { return z(t) ? Ot.call(null, t) : "" }
    var Lt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, menuitem: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

    function jt(t) { return V(t).some(function(t) { return Lt[t.tagName.toLowerCase()] }) }

    function Ft(t) { return V(t).some(function(t) { return t.offsetWidth || t.offsetHeight || t.getClientRects().length }) }
    var Wt = "input,select,textarea,button";

    function Vt(t) { return V(t).some(function(t) { return Dt(t, Wt) }) }

    function Rt(t, e) { return V(t).filter(function(t) { return Dt(t, e) }) }

    function qt(t, e) { return z(e) ? Dt(t, e) || !!Bt(t, e) : t === e || (_(e) ? e.documentElement : W(e)).contains(W(t)) }

    function Ut(t, e) { for (var n = []; t = Pt(t);) e && !Dt(t, e) || n.push(t); return n }

    function Yt(t, e) { var n = (t = W(t)) ? V(t.children) : []; return e ? Rt(n, e) : n }

    function Xt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n, i, r = Qt(t),
            o = r[0],
            s = r[1],
            a = r[2],
            h = r[3],
            u = r[4],
            o = ie(o);
        return 1 < h.length && (n = h, h = function(t) { return k(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t) }), u && u.self && (i = h, h = function(t) { if (t.target === t.currentTarget || t.target === t.current) return i.call(null, t) }), a && (h = function(t, i, r) {
                var o = this;
                return function(n) {
                    t.forEach(function(t) {
                        var e = ">" === i[0] ? St(i, t).reverse().filter(function(t) { return qt(n.target, t) })[0] : Bt(n.target, i);
                        e && (n.delegate = t, n.current = e, r.call(o, n))
                    })
                }
            }(o, a, h)), u = te(u), s.split(" ").forEach(function(e) { return o.forEach(function(t) { return t.addEventListener(e, h, u) }) }),
            function() { return Gt(o, s, h, u) }
    }

    function Gt(t, e, n, i) { void 0 === i && (i = !1), i = te(i), t = ie(t), e.split(" ").forEach(function(e) { return t.forEach(function(t) { return t.removeEventListener(e, n, i) }) }) }

    function Jt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n = Qt(t),
            i = n[0],
            r = n[1],
            o = n[2],
            s = n[3],
            a = n[4],
            h = n[5],
            u = Xt(i, r, o, function(t) {
                var e = !h || h(t);
                e && (u(), s(t, e))
            }, a);
        return u
    }

    function Kt(t, n, i) { return ie(t).reduce(function(t, e) { return t && e.dispatchEvent(Zt(n, !0, !0, i)) }, !0) }

    function Zt(t, e, n, i) { var r; return void 0 === e && (e = !0), void 0 === n && (n = !1), z(t) && ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i), t = r), t }

    function Qt(t) { return $(t[2]) && t.splice(2, 0, !1), t }

    function te(t) { return t && ct && !D(t) ? !!t.capture : t }

    function ee(t) { return t && "addEventListener" in t }

    function ne(t) { return ee(t) ? t : W(t) }

    function ie(t) { return k(t) ? t.map(ne).filter(Boolean) : z(t) ? St(t) : ee(t) ? [t] : V(t) }

    function re(t) { return "touch" === t.pointerType || !!t.touches }

    function oe(t) {
        var e = t.touches,
            n = t.changedTouches,
            i = e && e[0] || n && n[0] || t;
        return { x: i.clientX, y: i.clientY }
    }

    function se() {
        var n = this;
        this.promise = new ae(function(t, e) { n.reject = e, n.resolve = t })
    }
    var ae = ut && window.Promise || ce,
        he = 2,
        ue = ut && window.setImmediate || setTimeout;

    function ce(t) { this.state = he, this.value = void 0, this.deferred = []; var e = this; try { t(function(t) { e.resolve(t) }, function(t) { e.reject(t) }) } catch (t) { e.reject(t) } }
    ce.reject = function(n) { return new ce(function(t, e) { e(n) }) }, ce.resolve = function(n) { return new ce(function(t, e) { t(n) }) }, ce.all = function(o) {
        return new ce(function(n, t) {
            var i = [],
                r = 0;
            0 === o.length && n(i);
            for (var e = 0; e < o.length; e += 1) ce.resolve(o[e]).then(function(e) { return function(t) { i[e] = t, (r += 1) === o.length && n(i) } }(e), t)
        })
    }, ce.race = function(i) { return new ce(function(t, e) { for (var n = 0; n < i.length; n += 1) ce.resolve(i[n]).then(t, e) }) };
    var le = ce.prototype;

    function de(s, a) {
        return new ae(function(t, e) {
            var n = G({ data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest, beforeSend: et, responseType: "" }, a);
            n.beforeSend(n);
            var i, r, o = n.xhr;
            for (i in n)
                if (i in o) try { o[i] = n[i] } catch (t) {}
            for (r in o.open(n.method.toUpperCase(), s), n.headers) o.setRequestHeader(r, n.headers[r]);
            Xt(o, "load", function() { 0 === o.status || 200 <= o.status && o.status < 300 || 304 === o.status ? ("json" === n.responseType && z(o.response) && (o = G(function(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n }(o), { response: JSON.parse(o.response) })), t(o)) : e(G(Error(o.statusText), { xhr: o, status: o.status })) }), Xt(o, "error", function() { return e(G(Error("Network Error"), { xhr: o })) }), Xt(o, "timeout", function() { return e(G(Error("Network Timeout"), { xhr: o })) }), o.send(n.data)
        })
    }

    function fe(i, r, o) {
        return new ae(function(t, e) {
            var n = new Image;
            n.onerror = function(t) { return e(t) }, n.onload = function() { return t(n) }, o && (n.sizes = o), r && (n.srcset = r), n.src = i
        })
    }

    function pe(t) { var e; "loading" === document.readyState ? e = Xt(document, "DOMContentLoaded", function() { e(), t() }) : t() }

    function ge(t, e) { return e ? V(t).indexOf(W(e)) : Yt(Pt(t)).indexOf(t) }

    function me(t, e, n, i) { void 0 === n && (n = 0), void 0 === i && (i = !1); var r = (e = V(e)).length; return t = P(t) ? j(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : ge(e, t), i ? tt(t, 0, r - 1) : (t %= r) < 0 ? t + r : t }

    function ve(t) { return (t = Ne(t)).innerHTML = "", t }

    function we(t, e) { return t = Ne(t), H(e) ? t.innerHTML : be(t.hasChildNodes() ? ve(t) : t, e) }

    function be(e, t) { return e = Ne(e), ke(t, function(t) { return e.appendChild(t) }) }

    function xe(e, t) { return e = Ne(e), ke(t, function(t) { return e.parentNode.insertBefore(t, e) }) }

    function ye(e, t) { return e = Ne(e), ke(t, function(t) { return e.nextSibling ? xe(e.nextSibling, t) : be(e.parentNode, t) }) }

    function ke(t, e) { return (t = z(t) ? Ce(t) : t) ? "length" in t ? V(t).map(e) : e(t) : null }

    function $e(t) { V(t).map(function(t) { return t.parentNode && t.parentNode.removeChild(t) }) }

    function Ie(t, e) { for (e = W(xe(t, e)); e.firstChild;) e = e.firstChild; return be(e, t), e }

    function Se(t, e) { return V(V(t).map(function(t) { return t.hasChildNodes ? Ie(V(t.childNodes), e) : be(t, e) })) }

    function Te(t) { V(t).map(Pt).filter(function(t, e, n) { return n.indexOf(t) === e }).forEach(function(t) { xe(t, t.childNodes), $e(t) }) }
    le.resolve = function(t) {
        var e = this;
        if (e.state === he) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try { var i = t && t.then; if (null !== t && I(t) && $(i)) return void i.call(t, function(t) { n || e.resolve(t), n = !0 }, function(t) { n || e.reject(t), n = !0 }) } catch (t) { return void(n || e.reject(t)) }
            e.state = 0, e.value = t, e.notify()
        }
    }, le.reject = function(t) {
        var e = this;
        if (e.state === he) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.state = 1, e.value = t, e.notify()
        }
    }, le.notify = function() {
        var o = this;
        ue(function() {
            if (o.state !== he)
                for (; o.deferred.length;) {
                    var t = o.deferred.shift(),
                        e = t[0],
                        n = t[1],
                        i = t[2],
                        r = t[3];
                    try { 0 === o.state ? $(e) ? i(e.call(void 0, o.value)) : i(o.value) : 1 === o.state && ($(n) ? i(n.call(void 0, o.value)) : r(o.value)) } catch (t) { r(t) }
                }
        })
    }, le.then = function(n, i) { var r = this; return new ce(function(t, e) { r.deferred.push([n, i, t, e]), r.notify() }) }, le.catch = function(t) { return this.then(void 0, t) };
    var Ee = /^\s*<(\w+|!)[^>]*>/,
        _e = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Ce(t) { var e = _e.exec(t); if (e) return document.createElement(e[1]); var n = document.createElement("div"); return Ee.test(t) ? n.insertAdjacentHTML("beforeend", t.trim()) : n.textContent = t, 1 < n.childNodes.length ? V(n.childNodes) : n.firstChild }

    function Ae(t, e) {
        if (N(t))
            for (e(t), t = t.firstElementChild; t;) {
                var n = t.nextElementSibling;
                Ae(t, e), t = n
            }
    }

    function Ne(t, e) { return z(t) ? De(t) ? W(Ce(t)) : It(t, e) : W(t) }

    function Me(t, e) { return z(t) ? De(t) ? V(Ce(t)) : St(t, e) : V(t) }

    function De(t) { return "<" === t[0] || t.match(/^\s*</) }

    function ze(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        je(t, e, "add")
    }

    function Be(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        je(t, e, "remove")
    }

    function Pe(t, e) { ot(t, "class", function(t) { return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "") }) }

    function Oe(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        e[0] && Be(t, e[0]), e[1] && ze(t, e[1])
    }

    function He(t, e) { return e && V(t).some(function(t) { return t.classList.contains(e.split(" ")[0]) }) }

    function Le(t) {
        for (var i, r = [], e = arguments.length - 1; 0 < e--;) r[e] = arguments[e + 1];
        r.length && (i = z(J(r = Fe(r))) ? [] : r.pop(), r = r.filter(Boolean), V(t).forEach(function(t) { for (var e = t.classList, n = 0; n < r.length; n++) We.Force ? e.toggle.apply(e, [r[n]].concat(i)) : e[(H(i) ? !e.contains(r[n]) : i) ? "add" : "remove"](r[n]) }))
    }

    function je(t, n, i) {
        (n = Fe(n).filter(Boolean)).length && V(t).forEach(function(t) {
            var e = t.classList;
            We.Multiple ? e[i].apply(e, n) : n.forEach(function(t) { return e[i](t) })
        })
    }

    function Fe(t) { return t.reduce(function(t, e) { return t.concat.call(t, z(e) && b(e, " ") ? e.trim().split(" ") : e) }, []) }
    var We = {get Multiple() { return this.get("_multiple") }, get Force() { return this.get("_force") }, get: function(t) { var e; return l(this, t) || ((e = document.createElement("_").classList).add("a", "b"), e.toggle("c", !1), this._multiple = e.contains("b"), this._force = !e.contains("c")), this[t] } },
        Ve = { "animation-iteration-count": !0, "column-count": !0, "fill-opacity": !0, "flex-grow": !0, "flex-shrink": !0, "font-weight": !0, "line-height": !0, opacity: !0, order: !0, orphans: !0, "stroke-dasharray": !0, "stroke-dashoffset": !0, widows: !0, "z-index": !0, zoom: !0 };

    function Re(t, e, r) {
        return V(t).map(function(n) {
            if (z(e)) {
                if (e = Je(e), H(r)) return Ue(n, e);
                r || B(r) ? n.style[e] = P(r) && !Ve[e] ? r + "px" : r : n.style.removeProperty(e)
            } else {
                if (k(e)) { var i = qe(n); return e.reduce(function(t, e) { return t[e] = i[Je(e)], t }, {}) }
                I(e) && K(e, function(t, e) { return Re(n, e, t) })
            }
            return n
        })[0]
    }

    function qe(t, e) { return (t = W(t)).ownerDocument.defaultView.getComputedStyle(t, e) }

    function Ue(t, e, n) { return qe(t, n)[e] }
    var Ye = {};

    function Xe(t) { var e, n = document.documentElement; return ct ? (t in Ye || (ze(e = be(n, document.createElement("div")), "uk-" + t), Ye[t] = Ue(e, "content", ":before").replace(/^["'](.*)["']$/, "$1"), $e(e)), Ye[t]) : qe(n).getPropertyValue("--uk-" + t) }
    var Ge = {};

    function Je(t) {
        return Ge[t] || (Ge[t] = function(t) {
            t = d(t);
            var e = document.documentElement.style;
            if (t in e) return t;
            var n, i = Ke.length;
            for (; i--;)
                if ((n = "-" + Ke[i] + "-" + t) in e) return n
        }(t) || t)
    }
    var Ke = ["webkit", "moz", "ms"];

    function Ze(t, s, a, h) {
        return void 0 === a && (a = 400), void 0 === h && (h = "linear"), ae.all(V(t).map(function(o) {
            return new ae(function(n, i) {
                for (var t in s) { var e = Re(o, t); "" === e && Re(o, t, e) }
                var r = setTimeout(function() { return Kt(o, "transitionend") }, a);
                Jt(o, "transitionend transitioncanceled", function(t) {
                    var e = t.type;
                    clearTimeout(r), Be(o, "uk-transition"), Re(o, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), ("transitioncanceled" === e ? i : n)()
                }, { self: !0 }), ze(o, "uk-transition"), Re(o, G({ transitionProperty: Object.keys(s).map(Je).join(","), transitionDuration: a + "ms", transitionTimingFunction: h }, s))
            })
        }))
    }
    var Qe = { start: Ze, stop: function(t) { return Kt(t, "transitionend"), ae.resolve() }, cancel: function(t) { Kt(t, "transitioncanceled") }, inProgress: function(t) { return He(t, "uk-transition") } },
        tn = "uk-animation-";

    function en(t, e, s, a, h) {
        return void 0 === s && (s = 200), ae.all(V(t).map(function(o) {
            return new ae(function(n, i) {
                Kt(o, "animationcanceled");
                var r = setTimeout(function() { return Kt(o, "animationend") }, s);
                Jt(o, "animationend animationcanceled", function(t) {
                    var e = t.type;
                    clearTimeout(r), ("animationcanceled" === e ? i : n)(), Re(o, "animationDuration", ""), Pe(o, tn + "\\S*")
                }, { self: !0 }), Re(o, "animationDuration", s + "ms"), ze(o, e, tn + (h ? "leave" : "enter")), w(e, tn) && ze(o, a && "uk-transform-origin-" + a, h && tn + "reverse")
            })
        }))
    }
    var nn = new RegExp(tn + "(enter|leave)"),
        rn = { in: en, out: function(t, e, n, i) { return en(t, e, n, i, !0) }, inProgress: function(t) { return nn.test(ot(t, "class")) }, cancel: function(t) { Kt(t, "animationcanceled") } },
        on = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };

    function sn(t, e, c, l, d, n, i, r) {
        c = mn(c), l = mn(l);
        var f = { element: c, target: l };
        if (!t || !e) return f;
        var o, p = hn(t),
            g = hn(e),
            m = g;
        return gn(m, c, p, -1), gn(m, l, g, 1), d = vn(d, p.width, p.height), n = vn(n, g.width, g.height), d.x += n.x, d.y += n.y, m.left += d.x, m.top += d.y, i && (o = [hn(R(t))], r && o.unshift(hn(r)), K(on, function(t, s) {
            var a = t[0],
                h = t[1],
                u = t[2];
            !0 !== i && !b(i, a) || o.some(function(i) {
                var t = c[a] === h ? -p[s] : c[a] === u ? p[s] : 0,
                    e = l[a] === h ? g[s] : l[a] === u ? -g[s] : 0;
                if (m[h] < i[h] || m[h] + p[s] > i[u]) {
                    var n = p[s] / 2,
                        r = "center" === l[a] ? -g[s] / 2 : 0;
                    return "center" === c[a] && (o(n, r) || o(-n, -r)) || o(t, e)
                }

                function o(e, t) { var n = F((m[h] + e + t - 2 * d[a]).toFixed(4)); if (n >= i[h] && n + p[s] <= i[u]) return m[h] = n, ["element", "target"].forEach(function(t) { f[t][a] = e ? f[t][a] === on[s][1] ? on[s][2] : on[s][1] : f[t][a] }), !0 }
            })
        })), an(t, m), f
    }

    function an(n, i) {
        if (!i) return hn(n);
        var r = hn(n),
            o = Re(n, "position");
        ["left", "top"].forEach(function(t) {
            var e;
            t in i && (e = Re(n, t), Re(n, t, i[t] - r[t] + F("absolute" === o && "auto" === e ? un(n)[t] : e)))
        })
    }

    function hn(t) {
        var e = R(t),
            n = e.pageYOffset,
            i = e.pageXOffset,
            r = E(t) ? { height: ln(t), width: dn(t), top: 0, left: 0 } : function(t) {
                if (!t) return {};
                var e;
                Ft(t) || (e = ot(t, "style"), t.style.setProperty("display", "block", "important"));
                var n = t.getBoundingClientRect();
                return ot(t, "style", e), n
            }(W(t));
        return { height: r.height, width: r.width, top: r.top + n, left: r.left + i, bottom: r.top + r.height + n, right: r.left + r.width + i }
    }

    function un(t, e) {
        e = e || (W(t) || {}).offsetParent || R(t).document.documentElement;
        var n = an(t),
            i = an(e);
        return { top: n.top - i.top - F(Re(e, "borderTopWidth")), left: n.left - i.left - F(Re(e, "borderLeftWidth")) }
    }

    function cn(t) {
        var e = [0, 0];
        t = W(t);
        do { if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Re(t, "position")) { var n = R(t); return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e } } while (t = t.offsetParent);
        return e
    }
    var ln = fn("height"),
        dn = fn("width");

    function fn(i) {
        var r = p(i);
        return function(t, e) {
            if (H(e)) { if (E(t)) return t["inner" + r]; if (_(t)) { var n = t.documentElement; return Math.max(n["offset" + r], n["scroll" + r]) } return (e = "auto" === (e = Re(t = W(t), i)) ? t["offset" + r] : F(e) || 0) - pn(t, i) }
            Re(t, i, e || 0 === e ? +e + pn(t, i) + "px" : "")
        }
    }

    function pn(n, t, e) { return void 0 === e && (e = "border-box"), Re(n, "boxSizing") === e ? on[t].slice(1).map(p).reduce(function(t, e) { return t + F(Re(n, "padding" + e)) + F(Re(n, "border" + e + "Width")) }, 0) : 0 }

    function gn(o, s, a, h) {
        K(on, function(t, e) {
            var n = t[0],
                i = t[1],
                r = t[2];
            s[n] === r ? o[i] += a[e] * h : "center" === s[n] && (o[i] += a[e] * h / 2)
        })
    }

    function mn(t) {
        var e = /left|center|right/,
            n = /top|center|bottom/;
        return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), { x: e.test(t[0]) ? t[0] : "center", y: n.test(t[1]) ? t[1] : "center" }
    }

    function vn(t, e, n) {
        var i = (t || "").split(" "),
            r = i[0],
            o = i[1];
        return { x: r ? F(r) * (u(r, "%") ? e / 100 : 1) : 0, y: o ? F(o) * (u(o, "%") ? n / 100 : 1) : 0 }
    }

    function wn(t) {
        switch (t) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "top":
                return "bottom";
            case "bottom":
                return "top";
            default:
                return t
        }
    }

    function bn(t, e, n) { return void 0 === e && (e = "width"), void 0 === n && (n = window), P(t) ? +t : u(t, "vh") ? xn(ln(R(n)), t) : u(t, "vw") ? xn(dn(R(n)), t) : u(t, "%") ? xn(hn(n)[e], t) : F(t) }

    function xn(t, e) { return t * F(e) / 100 }
    var yn = { reads: [], writes: [], read: function(t) { return this.reads.push(t), In(), t }, write: function(t) { return this.writes.push(t), In(), t }, clear: function(t) { return Tn(this.reads, t) || Tn(this.writes, t) }, flush: kn };

    function kn(t) { void 0 === t && (t = 1), Sn(yn.reads), Sn(yn.writes.splice(0, yn.writes.length)), yn.scheduled = !1, (yn.reads.length || yn.writes.length) && In(t + 1) }
    var $n = 4;

    function In(t) { yn.scheduled || (yn.scheduled = !0, t && t < $n ? ae.resolve().then(function() { return kn(t) }) : requestAnimationFrame(function() { return kn() })) }

    function Sn(t) { for (var e; e = t.shift();) e() }

    function Tn(t, e) { var n = t.indexOf(e); return !!~n && !!t.splice(n, 1) }

    function En() {}
    En.prototype = {
        positions: [],
        init: function() {
            var e, t = this;
            this.positions = [], this.unbind = Xt(document, "mousemove", function(t) { return e = oe(t) }), this.interval = setInterval(function() { e && (t.positions.push(e), 5 < t.positions.length && t.positions.shift()) }, 50)
        },
        cancel: function() { this.unbind && this.unbind(), this.interval && clearInterval(this.interval) },
        movesTo: function(t) {
            if (this.positions.length < 2) return !1;
            var n = t.getBoundingClientRect(),
                e = n.left,
                i = n.right,
                r = n.top,
                o = n.bottom,
                s = this.positions[0],
                a = J(this.positions),
                h = [s, a];
            return !it(a, n) && [
                [{ x: e, y: r }, { x: i, y: o }],
                [{ x: e, y: o }, { x: i, y: r }]
            ].some(function(t) {
                var e = function(t, e) {
                    var n = t[0],
                        i = n.x,
                        r = n.y,
                        o = t[1],
                        s = o.x,
                        a = o.y,
                        h = e[0],
                        u = h.x,
                        c = h.y,
                        l = e[1],
                        d = l.x,
                        f = l.y,
                        p = (f - c) * (s - i) - (d - u) * (a - r);
                    if (0 == p) return !1;
                    var g = ((d - u) * (r - c) - (f - c) * (i - u)) / p;
                    if (g < 0) return !1;
                    return { x: i + g * (s - i), y: r + g * (a - r) }
                }(h, t);
                return e && it(e, n)
            })
        }
    };
    var _n = {};

    function Cn(t, e, n) { return _n.computed($(t) ? t.call(n, n) : t, $(e) ? e.call(n, n) : e) }

    function An(t, e) { return t = t && !k(t) ? [t] : t, e ? t ? t.concat(e) : k(e) ? e : [e] : t }

    function Nn(e, n, i) {
        var t, r, o = {};
        if ($(n) && (n = n.options), n.extends && (e = Nn(e, n.extends, i)), n.mixins)
            for (var s = 0, a = n.mixins.length; s < a; s++) e = Nn(e, n.mixins[s], i);
        for (t in e) h(t);
        for (r in n) l(e, r) || h(r);

        function h(t) { o[t] = (_n[t] || function(t, e) { return H(e) ? t : e })(e[t], n[t], i) }
        return o
    }

    function Mn(t, e) {
        var n;
        void 0 === e && (e = []);
        try {
            return t ? w(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function(t, e) {
                var n = e.split(/:(.*)/),
                    i = n[0],
                    r = n[1];
                return i && !H(r) && (t[i.trim()] = r.trim()), t
            }, {}) : {}
        } catch (t) { return {} }
    }

    function Dn(t) { if (On(t) && jn(t, { func: "playVideo", method: "play" }), Pn(t)) try { t.play().catch(et) } catch (t) {} }

    function zn(t) { On(t) && jn(t, { func: "pauseVideo", method: "pause" }), Pn(t) && t.pause() }

    function Bn(t) { On(t) && jn(t, { func: "mute", method: "setVolume", value: 0 }), Pn(t) && (t.muted = !0) }

    function Pn(t) { return t && "VIDEO" === t.tagName }

    function On(t) { return t && "IFRAME" === t.tagName && (Hn(t) || Ln(t)) }

    function Hn(t) { return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/) }

    function Ln(t) { return !!t.src.match(/vimeo\.com\/video\/.*/) }

    function jn(t, e) {
        (function(e) {
            if (e[Wn]) return e[Wn];
            var n, i = Hn(e),
                r = Ln(e),
                o = ++Vn;
            return e[Wn] = new ae(function(t) {
                i && Jt(e, "load", function() {
                    function t() { return Fn(e, { event: "listening", id: o }) }
                    n = setInterval(t, 100), t()
                }), Jt(window, "message", t, !1, function(t) { var e = t.data; try { return (e = JSON.parse(e)) && (i && e.id === o && "onReady" === e.event || r && Number(e.player_id) === o) } catch (t) {} }), e.src = e.src + (b(e.src, "?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + o)
            }).then(function() { return clearInterval(n) })
        })(t).then(function() { return Fn(t, e) })
    }

    function Fn(t, e) { try { t.contentWindow.postMessage(JSON.stringify(G({ event: "command" }, e)), "*") } catch (t) {} }
    _n.events = _n.created = _n.beforeConnect = _n.connected = _n.beforeDisconnect = _n.disconnected = _n.destroy = An, _n.args = function(t, e) { return !1 !== e && An(e || t) }, _n.update = function(t, e) { return Z(An(t, $(e) ? { read: e } : e), "order") }, _n.props = function(t, e) { return k(e) && (e = e.reduce(function(t, e) { return t[e] = String, t }, {})), _n.methods(t, e) }, _n.computed = _n.methods = function(t, e) { return e ? t ? G({}, t, e) : e : t }, _n.data = function(e, n, t) { return t ? Cn(e, n, t) : n ? e ? function(t) { return Cn(e, n, t) } : n : e };
    var Wn = "_ukPlayer",
        Vn = 0;

    function Rn(h, u, c) {
        if (void 0 === u && (u = 0), void 0 === c && (c = 0), !Ft(h)) return !1;
        var l = Jn(h);
        return l.every(function(t, e) {
            var n = an(l[e + 1] || h),
                i = an(Gn(t)),
                r = i.top,
                o = i.left,
                s = i.bottom,
                a = i.right;
            return nt(n, { top: r - u, left: o - c, bottom: s + u, right: a + c })
        })
    }

    function qn(t, e) {
        (t = (E(t) || _(t) ? Kn : W)(t)).scrollTop = e
    }

    function Un(t, e) {
        void 0 === e && (e = {});
        var c = e.offset;
        if (void 0 === c && (c = 0), Ft(t)) {
            for (var l = Jn(t).concat(t), n = ae.resolve(), i = function(u) {
                    n = n.then(function() {
                        return new ae(function(n) {
                            var t, i = l[u],
                                e = l[u + 1],
                                r = i.scrollTop,
                                o = Math.ceil(un(e, Gn(i)).top - c),
                                s = (t = Math.abs(o), 40 * Math.pow(t, .375)),
                                a = Date.now(),
                                h = function() {
                                    var t, e = (t = tt((Date.now() - a) / s), .5 * (1 - Math.cos(Math.PI * t)));
                                    qn(i, r + o * e), 1 != e ? requestAnimationFrame(h) : n()
                                };
                            h()
                        })
                    })
                }, r = 0; r < l.length - 1; r++) i(r);
            return n
        }
    }

    function Yn(t, e) {
        if (void 0 === e && (e = 0), !Ft(t)) return 0;
        var n = J(Xn(t)),
            i = n.scrollHeight,
            r = n.scrollTop,
            o = an(Gn(n)).height,
            s = cn(t)[0] - r - cn(n)[0],
            a = Math.min(o, s + r);
        return tt(-1 * (s - a) / Math.min(an(t).height + e + a, i - (s + r), i - o))
    }

    function Xn(t, e) {
        void 0 === e && (e = /auto|scroll/);
        var n = Kn(t),
            i = Ut(t).filter(function(t) { return t === n || e.test(Re(t, "overflow")) && t.scrollHeight > Math.round(an(t).height) }).reverse();
        return i.length ? i : [n]
    }

    function Gn(t) { return t === Kn(t) ? window : t }

    function Jn(t) { return Xn(t, /auto|scroll|hidden/) }

    function Kn(t) { var e = R(t).document; return e.scrollingElement || e.documentElement }
    var Zn = ut && window.IntersectionObserver || function() {
        function t(e, t) {
            var n = this;
            void 0 === t && (t = {});
            var i = t.rootMargin;
            void 0 === i && (i = "0 0"), this.targets = [];
            var r, o = (i || "0 0").split(" ").map(F),
                s = o[0],
                a = o[1];
            this.offsetTop = s, this.offsetLeft = a, this.apply = function() {
                r = r || requestAnimationFrame(function() {
                    return setTimeout(function() {
                        var t = n.takeRecords();
                        t.length && e(t, n), r = !1
                    })
                })
            }, this.off = Xt(window, "scroll resize load", this.apply, { passive: !0, capture: !0 })
        }
        return t.prototype.takeRecords = function() { var n = this; return this.targets.filter(function(t) { var e = Rn(t.target, n.offsetTop, n.offsetLeft); if (null === t.isIntersecting || e ^ t.isIntersecting) return t.isIntersecting = e, !0 }) }, t.prototype.observe = function(t) { this.targets.push({ target: t, isIntersecting: null }), this.apply() }, t.prototype.disconnect = function() { this.targets = [], this.off() }, t
    }();

    function Qn(t) { return !(!w(t, "uk-") && !w(t, "data-uk-")) && f(t.replace("data-uk-", "").replace("uk-", "")) }

    function ti(t) { this._init(t) }
    var ei, ni, ii, ri, oi, si, ai, hi, ui;

    function ci(t, e) {
        if (t)
            for (var n in t) t[n]._connected && t[n]._callUpdate(e)
    }

    function li(t, e) {
        var n = {},
            i = t.args;
        void 0 === i && (i = []);
        var r = t.props;
        void 0 === r && (r = {});
        var o, s = t.el;
        if (!r) return n;
        for (o in r) {
            var a = d(o),
                h = ht(s, a);
            H(h) || (h = r[o] === Boolean && "" === h || fi(r[o], h), ("target" !== a || h && !w(h, "_")) && (n[o] = h))
        }
        var u, c = Mn(ht(s, e), i);
        for (u in c) {
            var l = f(u);
            void 0 !== r[l] && (n[l] = fi(r[l], c[u]))
        }
        return n
    }

    function di(e, n, i) {
        T(n) || (n = { name: i, handler: n });
        var t = n.name,
            r = n.el,
            o = n.handler,
            s = n.capture,
            a = n.passive,
            h = n.delegate,
            u = n.filter,
            c = n.self,
            r = $(r) ? r.call(e) : r || e.$el;
        k(r) ? r.forEach(function(t) { return di(e, G({}, n, { el: t }), i) }) : !r || u && !u.call(e) || e._events.push(Xt(r, t, h ? z(h) ? h : h.call(e) : null, z(o) ? e[o] : o.bind(e), { passive: a, capture: s, self: c }))
    }

    function fi(t, e) { return t === Boolean ? L(e) : t === Number ? j(e) : "list" === t ? q(e) : t ? t(e) : e }
    ti.util = Object.freeze({ __proto__: null, ajax: de, getImage: fe, transition: Ze, Transition: Qe, animate: en, Animation: rn, attr: ot, hasAttr: st, removeAttr: at, data: ht, addClass: ze, removeClass: Be, removeClasses: Pe, replaceClass: Oe, hasClass: He, toggleClass: Le, positionAt: sn, offset: an, position: un, offsetPosition: cn, height: ln, width: dn, boxModelAdjust: pn, flipPosition: wn, toPx: bn, ready: pe, index: ge, getIndex: me, empty: ve, html: we, prepend: function(e, t) { return (e = Ne(e)).hasChildNodes() ? ke(t, function(t) { return e.insertBefore(t, e.firstChild) }) : be(e, t) }, append: be, before: xe, after: ye, remove: $e, wrapAll: Ie, wrapInner: Se, unwrap: Te, fragment: Ce, apply: Ae, $: Ne, $$: Me, inBrowser: ut, isIE: ct, isRtl: lt, hasTouch: pt, pointerDown: gt, pointerMove: mt, pointerUp: vt, pointerEnter: wt, pointerLeave: bt, pointerCancel: xt, on: Xt, off: Gt, once: Jt, trigger: Kt, createEvent: Zt, toEventTargets: ie, isTouch: re, getEventPos: oe, fastdom: yn, isVoidElement: jt, isVisible: Ft, selInput: Wt, isInput: Vt, filter: Rt, within: qt, parents: Ut, children: Yt, hasOwn: l, hyphenate: d, camelize: f, ucfirst: p, startsWith: w, endsWith: u, includes: b, findIndex: y, isArray: k, isFunction: $, isObject: I, isPlainObject: T, isWindow: E, isDocument: _, isJQuery: C, isNode: A, isElement: N, isNodeCollection: M, isBoolean: D, isString: z, isNumber: B, isNumeric: P, isEmpty: O, isUndefined: H, toBoolean: L, toNumber: j, toFloat: F, toNode: W, toNodes: V, toWindow: R, toList: q, toMs: U, isEqual: Y, swap: X, assign: G, last: J, each: K, sortBy: Z, uniqueBy: Q, clamp: tt, noop: et, intersectRect: nt, pointInRect: it, Dimensions: rt, MouseTracker: En, mergeOptions: Nn, parseOptions: Mn, play: Dn, pause: zn, mute: Bn, Promise: ae, Deferred: se, IntersectionObserver: Zn, query: yt, queryAll: kt, find: It, findAll: St, matches: Dt, closest: Bt, parent: Pt, escape: Ht, css: Re, getStyles: qe, getStyle: Ue, getCssVar: Xe, propName: Je, isInView: Rn, scrollTop: qn, scrollIntoView: Un, scrolledOver: Yn, scrollParents: Xn, getViewport: Gn }), ti.data = "__uikit__", ti.prefix = "uk-", ti.options = {}, ti.version = "3.5.8", ii = (ei = ti).data, ei.use = function(t) { if (!t.installed) return t.call(null, this), t.installed = !0, this }, ei.mixin = function(t, e) {
            (e = (z(e) ? ei.component(e) : e) || this).options = Nn(e.options, t)
        }, ei.extend = function(t) {
            t = t || {};

            function e(t) { this._init(t) }
            return ((e.prototype = Object.create(this.prototype)).constructor = e).options = Nn(this.options, t), e.super = this, e.extend = this.extend, e
        }, ei.update = function(t, e) { Ut(t = t ? W(t) : document.body).reverse().forEach(function(t) { return ci(t[ii], e) }), Ae(t, function(t) { return ci(t[ii], e) }) }, Object.defineProperty(ei, "container", { get: function() { return ni || document.body }, set: function(t) { ni = Ne(t) } }), (ri = ti).prototype._callHook = function(t) {
            var e = this,
                n = this.$options[t];
            n && n.forEach(function(t) { return t.call(e) })
        }, ri.prototype._callConnected = function() { this._connected || (this._data = {}, this._computeds = {}, this._frames = { reads: {}, writes: {} }, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate()) }, ri.prototype._callDisconnected = function() { this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1) }, ri.prototype._callUpdate = function(t) {
            var o = this;
            void 0 === t && (t = "update");
            var s = t.type || t;
            b(["update", "resize"], s) && this._callWatches();
            var e = this.$options.update,
                n = this._frames,
                a = n.reads,
                h = n.writes;
            e && e.forEach(function(t, e) {
                var n = t.read,
                    i = t.write,
                    r = t.events;
                "update" !== s && !b(r, s) || (n && !b(yn.reads, a[e]) && (a[e] = yn.read(function() { var t = o._connected && n.call(o, o._data, s);!1 === t && i ? yn.clear(h[e]) : T(t) && G(o._data, t) })), i && !b(yn.writes, h[e]) && (h[e] = yn.write(function() { return o._connected && i.call(o, o._data, s) })))
            })
        }, ri.prototype._callWatches = function() {
            var h, u = this,
                c = this._frames;
            c._watch || (h = !l(c, "_watch"), c._watch = yn.read(function() {
                if (u._connected) {
                    var t, e = u.$options.computed,
                        n = u._computeds;
                    for (t in e) {
                        var i = l(n, t),
                            r = n[t];
                        delete n[t];
                        var o = e[t],
                            s = o.watch,
                            a = o.immediate;
                        s && (h && a || i && !Y(r, u[t])) && s.call(u, u[t], r)
                    }
                    c._watch = null
                }
            }))
        }, si = 0, (oi = ti).prototype._init = function(t) {
            (t = t || {}).data = function(t, e) {
                var n = t.data,
                    i = (t.el, e.args),
                    r = e.props;
                void 0 === r && (r = {});
                if (n = k(n) ? O(i) ? void 0 : n.slice(0, i.length).reduce(function(t, e, n) { return T(e) ? G(t, e) : t[i[n]] = e, t }, {}) : n)
                    for (var o in n) H(n[o]) ? delete n[o] : n[o] = r[o] ? fi(r[o], n[o]) : n[o];
                return n
            }(t, this.constructor.options), this.$options = Nn(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._uid = si++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
        }, oi.prototype._initData = function() { var t, e = this.$options.data; for (t in void 0 === e && (e = {}), e) this.$props[t] = this[t] = e[t] }, oi.prototype._initMethods = function() {
            var t = this.$options.methods;
            if (t)
                for (var e in t) this[e] = t[e].bind(this)
        }, oi.prototype._initComputeds = function() {
            var t = this.$options.computed;
            if (this._computeds = {}, t)
                for (var e in t) ! function(i, r, o) {
                    Object.defineProperty(i, r, {
                        enumerable: !0,
                        get: function() {
                            var t = i._computeds,
                                e = i.$props,
                                n = i.$el;
                            return l(t, r) || (t[r] = (o.get || o).call(i, e, n)), t[r]
                        },
                        set: function(t) {
                            var e = i._computeds;
                            e[r] = o.set ? o.set.call(i, t) : t, H(e[r]) && delete e[r]
                        }
                    })
                }(this, e, t[e])
        }, oi.prototype._initProps = function(t) { for (var e in t = t || li(this.$options, this.$name)) H(t[e]) || (this.$props[e] = t[e]); var n = [this.$options.computed, this.$options.methods]; for (e in this.$props) e in t && function(t, e) { return t.every(function(t) { return !t || !l(t, e) }) }(n, e) && (this[e] = this.$props[e]) }, oi.prototype._initEvents = function() {
            var n = this;
            this._events = [];
            var t = this.$options.events;
            t && t.forEach(function(t) {
                if (l(t, "handler")) di(n, t);
                else
                    for (var e in t) di(n, t[e], e)
            })
        }, oi.prototype._unbindEvents = function() { this._events.forEach(function(t) { return t() }), delete this._events }, oi.prototype._initObserver = function() {
            var t, r = this,
                e = this.$options,
                o = e.attrs,
                n = e.props,
                i = e.el;
            !this._observer && n && !1 !== o && (o = k(o) ? o : Object.keys(n), this._observer = new MutationObserver(function(t) {
                var i = li(r.$options, r.$name);
                t.some(function(t) {
                    var e = t.attributeName,
                        n = e.replace("data-", "");
                    return (n === r.$name ? o : [f(n), f(e)]).some(function(t) { return !H(i[t]) && i[t] !== r.$props[t] })
                }) && r.$reset()
            }), t = o.map(d).concat(this.$name), this._observer.observe(i, { attributes: !0, attributeFilter: t.concat(t.map(function(t) { return "data-" + t })) }))
        }, hi = (ai = ti).data, ui = {}, ai.component = function(s, t) {
            var e = d(s);
            if (s = f(e), !t) return T(ui[s]) && (ui[s] = ai.extend(ui[s])), ui[s];
            ai[s] = function(t, n) {
                for (var e = arguments.length, i = Array(e); e--;) i[e] = arguments[e];
                var r = ai.component(s);
                return r.options.functional ? new r({ data: T(t) ? t : [].concat(i) }) : t ? Me(t).map(o)[0] : o(t);

                function o(t) {
                    var e = ai.getComponent(t, s);
                    if (e) {
                        if (!n) return e;
                        e.$destroy()
                    }
                    return new r({ el: t, data: n })
                }
            };
            var n = T(t) ? G({}, t) : t.options;
            return n.name = s, n.install && n.install(ai, n, s), ai._initialized && !n.functional && yn.read(function() { return ai[s]("[uk-" + e + "],[data-uk-" + e + "]") }), ui[s] = T(t) ? n : t
        }, ai.getComponents = function(t) { return t && t[hi] || {} }, ai.getComponent = function(t, e) { return ai.getComponents(t)[e] }, ai.connect = function(t) {
            if (t[hi])
                for (var e in t[hi]) t[hi][e]._callConnected();
            for (var n = 0; n < t.attributes.length; n++) {
                var i = Qn(t.attributes[n].name);
                i && i in ui && ai[i](t)
            }
        }, ai.disconnect = function(t) { for (var e in t[hi]) t[hi][e]._callDisconnected() },
        function(i) {
            var r = i.data;
            i.prototype.$create = function(t, e, n) { return i[t](e, n) }, i.prototype.$mount = function(t) {
                var e = this.$options.name;
                t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, qt(t, document) && this._callConnected())
            }, i.prototype.$reset = function() { this._callDisconnected(), this._callConnected() }, i.prototype.$destroy = function(t) {
                void 0 === t && (t = !1);
                var e = this.$options,
                    n = e.el,
                    i = e.name;
                n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][i], O(n[r]) || delete n[r], t && $e(this.$el))
            }, i.prototype.$emit = function(t) { this._callUpdate(t) }, i.prototype.$update = function(t, e) { void 0 === t && (t = this.$el), i.update(t, e) }, i.prototype.$getComponent = i.getComponent;
            var e = {};
            Object.defineProperties(i.prototype, { $container: Object.getOwnPropertyDescriptor(i, "container"), $name: { get: function() { var t = this.$options.name; return e[t] || (e[t] = i.prefix + d(t)), e[t] } } })
        }(ti);
    var pi = { connected: function() { He(this.$el, this.$name) || ze(this.$el, this.$name) } },
        gi = {
            props: { cls: Boolean, animation: "list", duration: Number, origin: String, transition: String },
            data: { cls: !1, animation: [!1], duration: 200, origin: !1, transition: "linear", initProps: { overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: "" }, hideProps: { overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 } },
            computed: { hasAnimation: function(t) { return !!t.animation[0] }, hasTransition: function(t) { var e = t.animation; return this.hasAnimation && !0 === e[0] } },
            methods: {
                toggleElement: function(t, n, i) { var r = this; return ae.all(V(t).map(function(e) { return new ae(function(t) { return r._toggleElement(e, n, i).then(t, et) }) })) },
                isToggled: function(t) { var e = V(t || this.$el); return this.cls ? He(e, this.cls.split(" ")[0]) : !st(e, "hidden") },
                updateAria: function(t) {!1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t)) },
                _toggleElement: function(t, e, n) {
                    var i = this;
                    if (e = D(e) ? e : rn.inProgress(t) ? He(t, "uk-animation-leave") : Qe.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !Kt(t, "before" + (e ? "show" : "hide"), [this])) return ae.reject();
                    var o, r = ($(n) ? n : !1 !== n && this.hasAnimation ? this.hasTransition ? mi(this) : (o = this, function(t, e) {
                        rn.cancel(t);
                        var n = o.animation,
                            i = o.duration,
                            r = o._toggle;
                        return e ? (r(t, !0), rn.in(t, n[0], i, o.origin)) : rn.out(t, n[1] || n[0], i, o.origin).then(function() { return r(t, !1) })
                    }) : this._toggle)(t, e);
                    Kt(t, e ? "show" : "hide", [this]);
                    return (r || ae.resolve()).then(function() { Kt(t, e ? "shown" : "hidden", [i]), i.$update(t) })
                },
                _toggle: function(t, e) {
                    var n;
                    t && (e = Boolean(e), this.cls ? (n = b(this.cls, " ") || e !== He(t, this.cls)) && Le(t, this.cls, b(this.cls, " ") ? void 0 : e) : (n = e === t.hidden) && (t.hidden = !e), Me("[autofocus]", t).some(function(t) { return Ft(t) ? t.focus() || !0 : t.blur() }), this.updateAria(t), n && (Kt(t, "toggled", [this]), this.$update(t)))
                }
            }
        };

    function mi(t) {
        var s = t.isToggled,
            a = t.duration,
            h = t.initProps,
            u = t.hideProps,
            c = t.transition,
            l = t._toggle;
        return function(t, e) {
            var n = Qe.inProgress(t),
                i = t.hasChildNodes ? F(Re(t.firstElementChild, "marginTop")) + F(Re(t.lastElementChild, "marginBottom")) : 0,
                r = Ft(t) ? ln(t) + (n ? 0 : i) : 0;
            Qe.cancel(t), s(t) || l(t, !0), ln(t, ""), yn.flush();
            var o = ln(t) + (n ? 0 : i);
            return ln(t, r), (e ? Qe.start(t, G({}, h, { overflow: "hidden", height: o }), Math.round(a * (1 - r / o)), c) : Qe.start(t, u, Math.round(a * (r / o)), c).then(function() { return l(t, !1) })).then(function() { return Re(t, h) })
        }
    }
    var vi = {
        mixins: [pi, gi],
        props: { targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, transition: String, offset: Number },
        data: { targets: "> *", active: !1, animation: [!0], collapsible: !0, multiple: !1, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", transition: "ease", offset: 0 },
        computed: {
            items: {
                get: function(t, e) { return Me(t.targets, e) },
                watch: function(t, e) {
                    var n, i = this;
                    t.forEach(function(t) { return wi(Ne(i.content, t), !He(t, i.clsOpen)) }), e || He(t, this.clsOpen) || (n = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0]) && this.toggle(n, !1)
                },
                immediate: !0
            }
        },
        events: [{ name: "click", delegate: function() { return this.targets + " " + this.$props.toggle }, handler: function(t) { t.preventDefault(), this.toggle(ge(Me(this.targets + " " + this.$props.toggle, this.$el), t.current)) } }],
        methods: {
            toggle: function(t, r) {
                var o = this,
                    e = [this.items[me(t, this.items)]],
                    n = Rt(this.items, "." + this.clsOpen);
                this.multiple || b(n, e[0]) || (e = e.concat(n)), !this.collapsible && n.length < 2 && !Rt(e, ":not(." + this.clsOpen + ")").length || e.forEach(function(t) {
                    return o.toggleElement(t, !He(t, o.clsOpen), function(e, n) {
                        Le(e, o.clsOpen, n);
                        var i = Ne((e._wrapper ? "> * " : "") + o.content, e);
                        if (!1 !== r && o.hasTransition) return e._wrapper || (e._wrapper = Ie(i, "<div" + (n ? " hidden" : "") + ">")), wi(i, !1), mi(o)(e._wrapper, n).then(function() {
                            var t;
                            wi(i, !n), delete e._wrapper, Te(i), n && (Rn(t = Ne(o.$props.toggle, e)) || Un(t, { offset: o.offset }))
                        });
                        wi(i, !n)
                    })
                })
            }
        }
    };

    function wi(t, e) { t && (t.hidden = e) }
    var bi = {
            mixins: [pi, gi],
            args: "animation",
            props: { close: String },
            data: { animation: [!0], selClose: ".uk-alert-close", duration: 150, hideProps: G({ opacity: 0 }, gi.data.hideProps) },
            events: [{ name: "click", delegate: function() { return this.selClose }, handler: function(t) { t.preventDefault(), this.close() } }],
            methods: {
                close: function() {
                    var t = this;
                    this.toggleElement(this.$el).then(function() { return t.$destroy(!0) })
                }
            }
        },
        xi = {
            args: "autoplay",
            props: { automute: Boolean, autoplay: Boolean },
            data: { automute: !1, autoplay: !0 },
            computed: { inView: function(t) { return "inview" === t.autoplay } },
            connected: function() { this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"), this.automute && Bn(this.$el) },
            update: {
                read: function() { return { visible: Ft(this.$el) && "hidden" !== Re(this.$el, "visibility"), inView: this.inView && Rn(this.$el) } },
                write: function(t) {
                    var e = t.visible,
                        n = t.inView;
                    !e || this.inView && !n ? zn(this.$el) : (!0 === this.autoplay || this.inView && n) && Dn(this.$el)
                },
                events: ["resize", "scroll"]
            }
        },
        yi = {
            mixins: [pi, xi],
            props: { width: Number, height: Number },
            data: { automute: !0 },
            update: {
                read: function() {
                    var t = this.$el,
                        e = function(t) {
                            for (; t = Pt(t);)
                                if ("static" !== Re(t, "position")) return t
                        }(t) || t.parentNode,
                        n = e.offsetHeight,
                        i = e.offsetWidth,
                        r = rt.cover({ width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth, height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight }, { width: i + (i % 2 ? 1 : 0), height: n + (n % 2 ? 1 : 0) });
                    return !(!r.width || !r.height) && r
                },
                write: function(t) {
                    var e = t.height,
                        n = t.width;
                    Re(this.$el, { height: e, width: n })
                },
                events: ["resize"]
            }
        };
    var ki, $i = {
            props: { pos: String, offset: null, flip: Boolean, clsPos: String },
            data: { pos: "bottom-" + (lt ? "right" : "left"), flip: !0, offset: !1, clsPos: "" },
            computed: { pos: function(t) { var e = t.pos; return (e + (b(e, "-") ? "" : "-center")).split("-") }, dir: function() { return this.pos[0] }, align: function() { return this.pos[1] } },
            methods: {
                positionAt: function(t, e, n) {
                    var i;
                    Pe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
                    var r = this.offset,
                        o = this.getAxis();
                    P(r) || (r = (i = Ne(r)) ? an(i)["x" === o ? "left" : "top"] - an(e)["x" === o ? "right" : "bottom"] : 0);
                    var s = sn(t, e, "x" === o ? wn(this.dir) + " " + this.align : this.align + " " + wn(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target,
                        a = s.x,
                        h = s.y;
                    this.dir = "x" === o ? a : h, this.align = "x" === o ? h : a, Le(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                },
                getAxis: function() { return "top" === this.dir || "bottom" === this.dir ? "y" : "x" }
            }
        },
        Ii = {
            mixins: [$i, gi],
            args: "pos",
            props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryAlign: Boolean, delayShow: Number, delayHide: Number, clsDrop: String },
            data: { mode: ["click", "hover"], toggle: "- *", boundary: ut && window, boundaryAlign: !1, delayShow: 0, delayHide: 800, clsDrop: !1, animation: ["uk-animation-fade"], cls: "uk-open" },
            computed: { boundary: function(t, e) { return yt(t.boundary, e) }, clsDrop: function(t) { return t.clsDrop || "uk-" + this.$options.name }, clsPos: function() { return this.clsDrop } },
            created: function() { this.tracker = new En },
            connected: function() {
                ze(this.$el, this.clsDrop);
                var t = this.$props.toggle;
                this.toggle = t && this.$create("toggle", yt(t, this.$el), { target: this.$el, mode: this.mode }), this.toggle || Kt(this.$el, "updatearia")
            },
            disconnected: function() { this.isActive() && (ki = null) },
            events: [{ name: "click", delegate: function() { return "." + this.clsDrop + "-close" }, handler: function(t) { t.preventDefault(), this.hide(!1) } }, {
                name: "click",
                delegate: function() { return 'a[href^="#"]' },
                handler: function(t) {
                    var e = t.defaultPrevented,
                        n = t.current.hash;
                    e || !n || qt(n, this.$el) || this.hide(!1)
                }
            }, { name: "beforescroll", handler: function() { this.hide(!1) } }, { name: "toggle", self: !0, handler: function(t, e) { t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1) } }, { name: "toggleshow", self: !0, handler: function(t, e) { t.preventDefault(), this.show(e) } }, { name: "togglehide", self: !0, handler: function(t) { t.preventDefault(), this.hide() } }, { name: wt, filter: function() { return b(this.mode, "hover") }, handler: function(t) { re(t) || this.clearTimers() } }, { name: bt, filter: function() { return b(this.mode, "hover") }, handler: function(t) {!re(t) && t.relatedTarget && this.hide() } }, { name: "toggled", self: !0, handler: function() { this.isToggled() && (this.clearTimers(), this.position()) } }, {
                name: "show",
                self: !0,
                handler: function() {
                    var o = this;
                    (ki = this).tracker.init(), Kt(this.$el, "updatearia"), Jt(this.$el, "hide", Xt(document, gt, function(t) {
                        var r = t.target;
                        return !qt(r, o.$el) && Jt(document, vt + " " + xt + " scroll", function(t) {
                            var e = t.defaultPrevented,
                                n = t.type,
                                i = t.target;
                            e || n !== vt || r !== i || o.toggle && qt(r, o.toggle.$el) || o.hide(!1)
                        }, !0)
                    }), { self: !0 }), Jt(this.$el, "hide", Xt(document, "keydown", function(t) { 27 === t.keyCode && (t.preventDefault(), o.hide(!1)) }), { self: !0 })
                }
            }, { name: "beforehide", self: !0, handler: function() { this.clearTimers() } }, {
                name: "hide",
                handler: function(t) {
                    var e = t.target;
                    this.$el === e ? (ki = this.isActive() ? null : ki, Kt(this.$el, "updatearia"), this.tracker.cancel()) : ki = null === ki && qt(e, this.$el) && this.isToggled() ? this : ki
                }
            }, { name: "updatearia", self: !0, handler: function(t, e) { t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (ot((e || this.toggle).$el, "aria-expanded", this.isToggled()), Le(this.toggle.$el, this.cls, this.isToggled())) } }],
            update: { write: function() { this.isToggled() && !rn.inProgress(this.$el) && this.position() }, events: ["resize"] },
            methods: {
                show: function(t, e) {
                    var n, i = this;
                    if (void 0 === t && (t = this.toggle), void 0 === e && (e = !0), this.isToggled() && t && this.toggle && t.$el !== this.toggle.$el && this.hide(!1), this.toggle = t, this.clearTimers(), !this.isActive()) {
                        if (ki) { if (e && ki.isDelaying) return void(this.showTimer = setTimeout(this.show, 10)); for (; ki && n !== ki && !qt(this.$el, ki.$el);)(n = ki).hide(!1) }
                        this.showTimer = setTimeout(function() { return !i.isToggled() && i.toggleElement(i.$el, !0) }, e && this.delayShow || 0)
                    }
                },
                hide: function(t) {
                    var e = this;
                    void 0 === t && (t = !0);

                    function n() { return e.toggleElement(e.$el, !1, !1) }
                    var i, r;
                    this.clearTimers(), this.isDelaying = (i = this.$el, r = [], Ae(i, function(t) { return "static" !== Re(t, "position") && r.push(t) }), r.some(function(t) { return e.tracker.movesTo(t) })), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n()
                },
                clearTimers: function() { clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1 },
                isActive: function() { return ki === this },
                position: function() {
                    Be(this.$el, this.clsDrop + "-stack"), Le(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                    var t, e = an(this.boundary),
                        n = this.boundaryAlign ? e : an(this.toggle.$el);
                    "justify" === this.align ? (t = "y" === this.getAxis() ? "width" : "height", Re(this.$el, t, n[t])) : this.$el.offsetWidth > Math.max(e.right - n.left, n.right - e.left) && ze(this.$el, this.clsDrop + "-stack"), this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary)
                }
            }
        };
    var Si = {
            mixins: [pi],
            args: "target",
            props: { target: Boolean },
            data: { target: !1 },
            computed: { input: function(t, e) { return Ne(Wt, e) }, state: function() { return this.input.nextElementSibling }, target: function(t, e) { var n = t.target; return n && (!0 === n && this.input.parentNode === e && this.input.nextElementSibling || yt(n, e)) } },
            update: function() {
                var t, e, n, i = this.target,
                    r = this.input;
                !i || i[e = Vt(i) ? "value" : "textContent"] !== (n = r.files && r.files[0] ? r.files[0].name : Dt(r, "select") && (t = Me("option", r).filter(function(t) { return t.selected })[0]) ? t.textContent : r.value) && (i[e] = n)
            },
            events: [{ name: "change", handler: function() { this.$update() } }, { name: "reset", el: function() { return Bt(this.$el, "form") }, handler: function() { this.$update() } }]
        },
        Ti = {
            update: {
                read: function(t) {
                    var e = Rn(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e
                },
                write: function() { this.$el.src = "" + this.$el.src },
                events: ["scroll", "resize"]
            }
        },
        Ei = {
            props: { margin: String, firstColumn: Boolean },
            data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
            update: {
                read: function() {
                    var n, t = _i(this.$el.children);
                    return {
                        rows: t,
                        columns: (n = [
                            []
                        ], t.forEach(function(t) { return Ci(t, "left", "right").forEach(function(t, e) { return n[e] = n[e] ? n[e].concat(t) : t }) }), lt ? n.reverse() : n)
                    }
                },
                write: function(t) {
                    var n = this,
                        i = t.columns;
                    t.rows.forEach(function(t, e) { return t.forEach(function(t) { Le(t, n.margin, 0 !== e), Le(t, n.firstColumn, b(i[0], t)) }) })
                },
                events: ["resize"]
            }
        };

    function _i(t) { return Ci(t, "top", "bottom") }

    function Ci(t, e, n) {
        for (var i = [
                []
            ], r = 0; r < t.length; r++) {
            var o = t[r];
            if (Ft(o))
                for (var s = Ai(o), a = i.length - 1; 0 <= a; a--) {
                    var h = i[a];
                    if (!h[0]) { h.push(o); break }
                    var u = void 0,
                        u = h[0].offsetParent === o.offsetParent ? Ai(h[0]) : (s = Ai(o, !0), Ai(h[0], !0));
                    if (s[e] >= u[n] - 1 && s[e] !== u[e]) { i.push([o]); break }
                    if (s[n] - 1 > u[e] || s[e] === u[e]) { h.push(o); break }
                    if (0 === a) { i.unshift([o]); break }
                }
        }
        return i
    }

    function Ai(t, e) {
        var n;
        void 0 === e && (e = !1);
        var i = t.offsetTop,
            r = t.offsetLeft,
            o = t.offsetHeight,
            s = t.offsetWidth;
        return e && (i = (n = cn(t))[0], r = n[1]), { top: i, left: r, bottom: i + o, right: r + s }
    }
    var Ni = {
        extends: Ei,
        mixins: [pi],
        name: "grid",
        props: { masonry: Boolean, parallax: Number },
        data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: !1, parallax: 0 },
        connected: function() { this.masonry && ze(this.$el, "uk-flex-top uk-flex-wrap-top") },
        update: [{
            write: function(t) {
                var e = t.columns;
                Le(this.$el, this.clsStack, e.length < 2)
            },
            events: ["resize"]
        }, {
            read: function(t) {
                var e = t.columns,
                    n = t.rows,
                    i = Yt(this.$el);
                if (!i.length || !this.masonry && !this.parallax) return !1;
                var r, o, s, a, h, u = i.some(Qe.inProgress),
                    c = !1,
                    l = e.map(function(t) { return t.reduce(function(t, e) { return t + e.offsetHeight }, 0) }),
                    d = (r = i, o = this.margin, F((s = r.filter(function(t) { return He(t, o) })[0]) ? Re(s, "marginTop") : Re(r[0], "paddingLeft")) * (n.length - 1)),
                    f = Math.max.apply(Math, l) + d;
                this.masonry && (e = e.map(function(t) { return Z(t, "offsetTop") }), a = e, h = n.map(function(t) { return Math.max.apply(Math, t.map(function(t) { return t.offsetHeight })) }), c = a.map(function(n) { var i = 0; return n.map(function(t, e) { return i += e ? h[e - 1] - n[e - 1].offsetHeight : 0 }) }));
                var p = Math.abs(this.parallax);
                return { padding: p = p && l.reduce(function(t, e, n) { return Math.max(t, e + d + (n % 2 ? p : p / 8) - f) }, 0), columns: e, translates: c, height: !u && (this.masonry ? f : "") }
            },
            write: function(t) {
                var e = t.height,
                    n = t.padding;
                Re(this.$el, "paddingBottom", n || ""), !1 !== e && Re(this.$el, "height", e)
            },
            events: ["resize"]
        }, {
            read: function(t) { var e = t.height; return { scrolled: !!this.parallax && Yn(this.$el, e ? e - ln(this.$el) : 0) * Math.abs(this.parallax) } },
            write: function(t) {
                var e = t.columns,
                    i = t.scrolled,
                    r = t.translates;
                !1 === i && !r || e.forEach(function(t, n) { return t.forEach(function(t, e) { return Re(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? n % 2 ? i : i / 8 : 0)) + "px)" : "") }) })
            },
            events: ["scroll", "resize"]
        }]
    };
    var Mi = ct ? {
            props: { selMinHeight: String },
            data: { selMinHeight: !1, forceHeight: !1 },
            computed: { elements: function(t, e) { var n = t.selMinHeight; return n ? Me(n, e) : [e] } },
            update: [{ read: function() { Re(this.elements, "height", "") }, order: -5, events: ["resize"] }, {
                write: function() {
                    var n = this;
                    this.elements.forEach(function(t) {
                        var e = F(Re(t, "minHeight"));
                        e && (n.forceHeight || Math.round(e + pn(t, "height", "content-box")) >= t.offsetHeight) && Re(t, "height", e)
                    })
                },
                order: 5,
                events: ["resize"]
            }]
        } : {},
        Di = { mixins: [Mi], args: "target", props: { target: String, row: Boolean }, data: { target: "> *", row: !0, forceHeight: !0 }, computed: { elements: function(t, e) { return Me(t.target, e) } }, update: { read: function() { return { rows: (this.row ? _i(this.elements) : [this.elements]).map(zi) } }, write: function(t) { t.rows.forEach(function(t) { var n = t.heights; return t.elements.forEach(function(t, e) { return Re(t, "minHeight", n[e]) }) }) }, events: ["resize"] } };

    function zi(t) {
        var e;
        if (t.length < 2) return { heights: [""], elements: t };
        var n = Bi(t),
            i = n.heights,
            r = n.max,
            o = t.some(function(t) { return t.style.minHeight }),
            s = t.some(function(t, e) { return !t.style.minHeight && i[e] < r });
        return o && s && (Re(t, "minHeight", ""), e = Bi(t), i = e.heights, r = e.max), { heights: i = t.map(function(t, e) { return i[e] === r && F(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r }), elements: t }
    }

    function Bi(t) { var e = t.map(function(t) { return an(t).height - pn(t, "height", "content-box") }); return { heights: e, max: Math.max.apply(null, e) } }
    var Pi = {
        mixins: [Mi],
        props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number },
        data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
        update: {
            read: function(t) {
                var e = t.minHeight;
                if (!Ft(this.$el)) return !1;
                var n = "",
                    i = pn(this.$el, "height", "content-box");
                if (this.expand) {
                    if (this.$el.dataset.heightExpand = "", Ne("[data-height-expand]") !== this.$el) return !1;
                    n = ln(window) - (Oi(document.documentElement) - Oi(this.$el)) - i || ""
                } else {
                    var r, n = "calc(100vh";
                    this.offsetTop && (n += 0 < (r = an(this.$el).top) && r < ln(window) / 2 ? " - " + r + "px" : ""), !0 === this.offsetBottom ? n += " - " + Oi(this.$el.nextElementSibling) + "px" : P(this.offsetBottom) ? n += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? n += " - " + F(this.offsetBottom) + "px" : z(this.offsetBottom) && (n += " - " + Oi(yt(this.offsetBottom, this.$el)) + "px"), n += (i ? " - " + i + "px" : "") + ")"
                }
                return { minHeight: n, prev: e }
            },
            write: function(t) {
                var e = t.minHeight,
                    n = t.prev;
                Re(this.$el, { minHeight: e }), e !== n && this.$update(this.$el, "resize"), this.minHeight && F(Re(this.$el, "minHeight")) < this.minHeight && Re(this.$el, "minHeight", this.minHeight)
            },
            events: ["resize"]
        }
    };

    function Oi(t) { return t && an(t).height || 0 }
    var Hi = {
            args: "src",
            props: { id: Boolean, icon: String, src: String, style: String, width: Number, height: Number, ratio: Number, class: String, strokeAnimation: Boolean, focusable: Boolean, attributes: "list" },
            data: { ratio: 1, include: ["style", "class", "focusable"], class: "", strokeAnimation: !1 },
            beforeConnect: function() { this.class += " uk-svg" },
            connected: function() { var t, e = this;!this.icon && b(this.src, "#") && (t = this.src.split("#"), this.src = t[0], this.icon = t[1]), this.svg = this.getSvg().then(function(t) { return e.applyAttributes(t), e.svgEl = function(t, e) { if (jt(e) || "CANVAS" === e.tagName) { e.hidden = !0; var n = e.nextElementSibling; return Vi(t, n) ? n : ye(e, t) } var i = e.lastElementChild; return Vi(t, i) ? i : be(e, t) }(t, e.$el) }, et) },
            disconnected: function() {
                var e = this;
                jt(this.$el) && (this.$el.hidden = !1), this.svg && this.svg.then(function(t) { return (!e._connected || t !== e.svgEl) && $e(t) }, et), this.svg = this.svgEl = null
            },
            update: {
                read: function() { return !!(this.strokeAnimation && this.svgEl && Ft(this.svgEl)) },
                write: function() {
                    var t, e;
                    t = this.svgEl, (e = Wi(t)) && t.style.setProperty("--uk-animation-stroke", e)
                },
                type: ["resize"]
            },
            methods: {
                getSvg: function() { var e = this; return function(n) { if (Li[n]) return Li[n]; return Li[n] = new ae(function(e, t) { n ? w(n, "data:") ? e(decodeURIComponent(n.split(",")[1])) : de(n).then(function(t) { return e(t.response) }, function() { return t("SVG not found.") }) : t() }) }(this.src).then(function(t) { return function(t, e) { e && b(t, "<symbol") && (t = function(t, e) { if (!Fi[t]) { var n; for (Fi[t] = {}, ji.lastIndex = 0; n = ji.exec(t);) Fi[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>" } return Fi[t][e] }(t, e) || t); return (t = Ne(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t }(t, e.icon) || ae.reject("SVG not found.") }) },
                applyAttributes: function(n) {
                    var t, e, i = this;
                    for (t in this.$options.props) this[t] && b(this.include, t) && ot(n, t, this[t]);
                    for (e in this.attributes) {
                        var r = this.attributes[e].split(":", 2),
                            o = r[0],
                            s = r[1];
                        ot(n, o, s)
                    }
                    this.id || at(n, "id");
                    var a = ["width", "height"],
                        h = [this.width, this.height];
                    h.some(function(t) { return t }) || (h = a.map(function(t) { return ot(n, t) }));
                    var u = ot(n, "viewBox");
                    u && !h.some(function(t) { return t }) && (h = u.split(" ").slice(2)), h.forEach(function(t, e) {
                        (t = (0 | t) * i.ratio) && ot(n, a[e], t), t && !h[1 ^ e] && at(n, a[1 ^ e])
                    }), ot(n, "data-svg", this.icon || this.src)
                }
            }
        },
        Li = {};
    var ji = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        Fi = {};

    function Wi(t) { return Math.ceil(Math.max.apply(Math, [0].concat(Me("[stroke]", t).map(function(t) { try { return t.getTotalLength() } catch (t) { return 0 } })))) }

    function Vi(t, e) { return ot(t, "data-svg") === ot(e, "data-svg") }
    var Ri = { spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>', marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>', "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>', "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>', "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>', "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>' },
        qi = {
            install: function(r) {
                r.icon.add = function(t, e) {
                    var n, i = z(t) ? ((n = {})[t] = e, n) : t;
                    K(i, function(t, e) { Ri[e] = t, delete Ki[e] }), r._initialized && Ae(document.body, function(t) { return K(r.getComponents(t), function(t) { t.$options.isIcon && t.icon in i && t.$reset() }) })
                }
            },
            extends: Hi,
            args: "icon",
            props: ["icon"],
            data: { include: ["focusable"] },
            isIcon: !0,
            beforeConnect: function() { ze(this.$el, "uk-icon") },
            methods: {
                getSvg: function() {
                    var t = function(t) {
                        if (!Ri[t]) return null;
                        Ki[t] || (Ki[t] = Ne((Ri[function(t) { return lt ? X(X(t, "left", "right"), "previous", "next") : t }(t)] || Ri[t]).trim()));
                        return Ki[t].cloneNode(!0)
                    }(this.icon);
                    return t ? ae.resolve(t) : ae.reject("Icon not found.")
                }
            }
        },
        Ui = { args: !1, extends: qi, data: function(t) { return { icon: d(t.constructor.options.name) } }, beforeConnect: function() { ze(this.$el, this.$name) } },
        Yi = { extends: Ui, beforeConnect: function() { ze(this.$el, "uk-slidenav") }, computed: { icon: function(t, e) { var n = t.icon; return He(e, "uk-slidenav-large") ? n + "-large" : n } } },
        Xi = { extends: Ui, computed: { icon: function(t, e) { var n = t.icon; return He(e, "uk-search-icon") && Ut(e, ".uk-search-large").length ? "search-large" : Ut(e, ".uk-search-navbar").length ? "search-navbar" : n } } },
        Gi = { extends: Ui, computed: { icon: function() { return "close-" + (He(this.$el, "uk-close-large") ? "large" : "icon") } } },
        Ji = {
            extends: Ui,
            connected: function() {
                var e = this;
                this.svg.then(function(t) { return 1 !== e.ratio && Re(Ne("circle", t), "strokeWidth", 1 / e.ratio) }, et)
            }
        },
        Ki = {};
    var Zi = {
        args: "dataSrc",
        props: { dataSrc: String, dataSrcset: Boolean, sizes: String, width: Number, height: Number, offsetTop: String, offsetLeft: String, target: String },
        data: { dataSrc: "", dataSrcset: !1, sizes: !1, width: !1, height: !1, offsetTop: "50vh", offsetLeft: 0, target: !1 },
        computed: {
            cacheKey: function(t) { var e = t.dataSrc; return this.$name + "." + e },
            width: function(t) {
                var e = t.width,
                    n = t.dataWidth;
                return e || n
            },
            height: function(t) {
                var e = t.height,
                    n = t.dataHeight;
                return e || n
            },
            sizes: function(t) {
                var e = t.sizes,
                    n = t.dataSizes;
                return e || n
            },
            isImg: function(t, e) { return or(e) },
            target: { get: function(t) { var e = t.target; return [this.$el].concat(kt(e, this.$el)) }, watch: function() { this.observe() } },
            offsetTop: function(t) { return bn(t.offsetTop, "height") },
            offsetLeft: function(t) { return bn(t.offsetLeft, "width") }
        },
        connected: function() {
            ar[this.cacheKey] ? Qi(this.$el, ar[this.cacheKey], this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Qi(this.$el, function(t, e, n) {
                var i;
                n && (i = rt.ratio({ width: t, height: e }, "width", bn(er(n))), t = i.width, e = i.height);
                return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
            }(this.width, this.height, this.sizes)), this.observer = new Zn(this.load, { rootMargin: this.offsetTop + "px " + this.offsetLeft + "px" }), requestAnimationFrame(this.observe)
        },
        disconnected: function() { this.observer.disconnect() },
        update: {
            read: function(t) {
                var e = this,
                    n = t.image;
                if (n || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg) return !1;
                n && n.then(function(t) { return t && "" !== t.currentSrc && Qi(e.$el, sr(t)) })
            },
            write: function(t) {
                var e, n, i, r, o;
                this.dataSrcset && 1 !== window.devicePixelRatio && (!(e = Re(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) && F(e) !== t.bgSize || (t.bgSize = (n = this.dataSrcset, i = this.sizes, r = bn(er(i)), (o = (n.match(rr) || []).map(F).sort(function(t, e) { return t - e })).filter(function(t) { return r <= t })[0] || o.pop() || ""), Re(this.$el, "backgroundSize", t.bgSize + "px")))
            },
            events: ["resize"]
        },
        methods: {
            load: function(t) {
                var e = this;
                t.some(function(t) { return H(t.isIntersecting) || t.isIntersecting }) && (this._data.image = fe(this.dataSrc, this.dataSrcset, this.sizes).then(function(t) { return Qi(e.$el, sr(t), t.srcset, t.sizes), ar[e.cacheKey] = sr(t), t }, function(t) { return Kt(e.$el, new t.constructor(t.type, t)) }), this.observer.disconnect())
            },
            observe: function() {
                var e = this;
                this._connected && !this._data.image && this.target.forEach(function(t) { return e.observer.observe(t) })
            }
        }
    };

    function Qi(t, e, n, i) { or(t) ? (i && (t.sizes = i), n && (t.srcset = n), e && (t.src = e)) : e && !b(t.style.backgroundImage, e) && (Re(t, "backgroundImage", "url(" + Ht(e) + ")"), Kt(t, Zt("load", !1))) }
    var tr = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function er(t) {
        var e, n;
        for (tr.lastIndex = 0; e = tr.exec(t);)
            if (!e[1] || window.matchMedia(e[1]).matches) { e = w(n = e[2], "calc") ? n.substring(5, n.length - 1).replace(nr, function(t) { return bn(t) }).replace(/ /g, "").match(ir).reduce(function(t, e) { return t + +e }, 0) : n; break }
        return e || "100vw"
    }
    var nr = /\d+(?:\w+|%)/g,
        ir = /[+-]?(\d+)/g;
    var rr = /\s+\d+w\s*(?:,|$)/g;

    function or(t) { return "IMG" === t.tagName }

    function sr(t) { return t.currentSrc || t.src }
    var ar, hr = "__test__";
    try {
        (ar = window.sessionStorage || {})[hr] = 1, delete ar[hr]
    } catch (t) { ar = {} }
    var ur = {
        props: { media: Boolean },
        data: { media: !1 },
        computed: {
            matchMedia: function() {
                var t = function(t) {
                    if (z(t)) {
                        if ("@" === t[0]) t = F(Xe("breakpoint-" + t.substr(1)));
                        else if (isNaN(t)) return t
                    }
                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                }(this.media);
                return !t || window.matchMedia(t).matches
            }
        }
    };
    var cr = {
            mixins: [pi, ur],
            props: { fill: String },
            data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" },
            computed: { fill: function(t) { return t.fill || Xe("leader-fill-content") } },
            connected: function() {
                var t = Se(this.$el, '<span class="' + this.clsWrapper + '">');
                this.wrapper = t[0]
            },
            disconnected: function() { Te(this.wrapper.childNodes) },
            update: {
                read: function(t) {
                    var e = t.changed,
                        n = t.width,
                        i = n;
                    return { width: n = Math.floor(this.$el.offsetWidth / 2), fill: this.fill, changed: e || i !== n, hide: !this.matchMedia }
                },
                write: function(t) { Le(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill))) },
                events: ["resize"]
            }
        },
        lr = { props: { container: Boolean }, data: { container: !0 }, computed: { container: function(t) { var e = t.container; return !0 === e && this.$container || e && Ne(e) } } },
        dr = [],
        fr = {
            mixins: [pi, lr, gi],
            props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean },
            data: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 },
            computed: { panel: function(t, e) { return Ne(t.selPanel, e) }, transitionElement: function() { return this.panel }, bgClose: function(t) { return t.bgClose && this.panel } },
            beforeDisconnect: function() { this.isToggled() && this.toggleElement(this.$el, !1, !1) },
            events: [{ name: "click", delegate: function() { return this.selClose }, handler: function(t) { t.preventDefault(), this.hide() } }, { name: "toggle", self: !0, handler: function(t) { t.defaultPrevented || (t.preventDefault(), this.isToggled() === b(dr, this) && this.toggle()) } }, { name: "beforeshow", self: !0, handler: function(t) { if (b(dr, this)) return !1;!this.stack && dr.length ? (ae.all(dr.map(function(t) { return t.hide() })).then(this.show), t.preventDefault()) : dr.push(this) } }, {
                name: "show",
                self: !0,
                handler: function() {
                    var o = this;
                    dn(window) - dn(document) && this.overlay && Re(document.body, "overflowY", "scroll"), this.stack && Re(this.$el, "zIndex", F(Re(this.$el, "zIndex")) + dr.length), ze(document.documentElement, this.clsPage), this.bgClose && Jt(this.$el, "hide", Xt(document, gt, function(t) {
                        var r = t.target;
                        J(dr) !== o || o.overlay && !qt(r, o.$el) || qt(r, o.panel) || Jt(document, vt + " " + xt + " scroll", function(t) {
                            var e = t.defaultPrevented,
                                n = t.type,
                                i = t.target;
                            e || n !== vt || r !== i || o.hide()
                        }, !0)
                    }), { self: !0 }), this.escClose && Jt(this.$el, "hide", Xt(document, "keydown", function(t) { 27 === t.keyCode && J(dr) === o && (t.preventDefault(), o.hide()) }), { self: !0 })
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    var e = this;
                    dr.splice(dr.indexOf(this), 1), dr.length || Re(document.body, "overflowY", ""), Re(this.$el, "zIndex", ""), dr.some(function(t) { return t.clsPage === e.clsPage }) || Be(document.documentElement, this.clsPage)
                }
            }],
            methods: { toggle: function() { return this.isToggled() ? this.hide() : this.show() }, show: function() { var e = this; return this.container && this.$el.parentNode !== this.container ? (be(this.container, this.$el), new ae(function(t) { return requestAnimationFrame(function() { return e.show().then(t) }) })) : this.toggleElement(this.$el, !0, pr(this)) }, hide: function() { return this.toggleElement(this.$el, !1, pr(this)) } }
        };

    function pr(t) {
        var s = t.transitionElement,
            a = t._toggle;
        return function(r, o) {
            return new ae(function(n, i) {
                return Jt(r, "show hide", function() {
                    r._reject && r._reject(), r._reject = i, a(r, o);
                    var t = Jt(s, "transitionstart", function() { Jt(s, "transitionend transitioncancel", n, { self: !0 }), clearTimeout(e) }, { self: !0 }),
                        e = setTimeout(function() { t(), n() }, U(Re(s, "transitionDuration")))
                })
            })
        }
    }
    var gr = {
        install: function(t) {
            var a = t.modal;

            function e(t, e, n, i) {
                e = G({ bgClose: !1, escClose: !0, labels: a.labels }, e);
                var r = a.dialog(t(e), e),
                    o = new se,
                    s = !1;
                return Xt(r.$el, "submit", "form", function(t) { t.preventDefault(), o.resolve(i && i(r)), s = !0, r.hide() }), Xt(r.$el, "hide", function() { return !s && n(o) }), o.promise.dialog = r, o.promise
            }
            a.dialog = function(t, e) { var n = a('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", e); return n.show(), Xt(n.$el, "hidden", function() { return ae.resolve().then(function() { return n.$destroy(!0) }) }, { self: !0 }), n }, a.alert = function(n, t) { return e(function(t) { var e = t.labels; return '<div class="uk-modal-body">' + (z(n) ? n : we(n)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + e.ok + "</button> </div>" }, t, function(t) { return t.resolve() }) }, a.confirm = function(n, t) { return e(function(t) { var e = t.labels; return '<form> <div class="uk-modal-body">' + (z(n) ? n : we(n)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + e.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + e.ok + "</button> </div> </form>" }, t, function(t) { return t.reject() }) }, a.prompt = function(n, i, t) { return e(function(t) { var e = t.labels; return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (z(n) ? n : we(n)) + '</label> <input class="uk-input" value="' + (i || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + e.cancel + '</button> <button class="uk-button uk-button-primary">' + e.ok + "</button> </div> </form>" }, t, function(t) { return t.resolve(null) }, function(t) { return Ne("input", t.$el).value }) }, a.labels = { ok: "Ok", cancel: "Cancel" }
        },
        mixins: [fr],
        data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" },
        events: [{ name: "show", self: !0, handler: function() { He(this.panel, "uk-margin-auto-vertical") ? ze(this.$el, "uk-flex") : Re(this.$el, "display", "block"), ln(this.$el) } }, { name: "hidden", self: !0, handler: function() { Re(this.$el, "display", ""), Be(this.$el, "uk-flex") } }]
    };
    var mr = { extends: vi, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } },
        vr = {
            mixins: [pi, Mi],
            props: { dropdown: String, mode: "list", align: String, offset: Number, boundary: Boolean, boundaryAlign: Boolean, clsDrop: String, delayShow: Number, delayHide: Number, dropbar: Boolean, dropbarMode: String, dropbarAnchor: Boolean, duration: Number },
            data: { dropdown: ".uk-navbar-nav > li", align: lt ? "right" : "left", clsDrop: "uk-navbar-dropdown", mode: void 0, offset: void 0, delayShow: void 0, delayHide: void 0, boundaryAlign: void 0, flip: "x", boundary: !0, dropbar: !1, dropbarMode: "slide", dropbarAnchor: !1, duration: 200, forceHeight: !0, selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle" },
            computed: {
                boundary: function(t, e) {
                    var n = t.boundary,
                        i = t.boundaryAlign;
                    return !0 === n || i ? e : n
                },
                dropbarAnchor: function(t, e) { return yt(t.dropbarAnchor, e) },
                pos: function(t) { return "bottom-" + t.align },
                dropbar: { get: function(t) { var e = t.dropbar; return e ? (e = this._dropbar || yt(e, this.$el) || Ne("+ .uk-navbar-dropbar", this.$el)) || (this._dropbar = Ne("<div></div>")) : null }, watch: function(t) { ze(t, "uk-navbar-dropbar") }, immediate: !0 },
                dropdowns: {
                    get: function(t, e) { return Me(t.dropdown + " ." + t.clsDrop, e) },
                    watch: function(t) {
                        var e = this;
                        this.$create("drop", t.filter(function(t) { return !e.getDropdown(t) }), G({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset }))
                    },
                    immediate: !0
                }
            },
            disconnected: function() { this.dropbar && $e(this.dropbar), delete this._dropbar },
            events: [{
                name: "mouseover",
                delegate: function() { return this.dropdown },
                handler: function(t) {
                    var e = t.current,
                        n = this.getActive();
                    n && n.toggle && !qt(n.toggle.$el, e) && !n.tracker.movesTo(n.$el) && n.hide(!1)
                }
            }, {
                name: "mouseleave",
                el: function() { return this.dropbar },
                handler: function() {
                    var t = this.getActive();
                    t && !this.dropdowns.some(function(t) { return Dt(t, ":hover") }) && t.hide()
                }
            }, { name: "beforeshow", capture: !0, filter: function() { return this.dropbar }, handler: function() { this.dropbar.parentNode || ye(this.dropbarAnchor || this.$el, this.dropbar) } }, {
                name: "show",
                filter: function() { return this.dropbar },
                handler: function(t, e) {
                    var n = e.$el,
                        i = e.dir;
                    He(n, this.clsDrop) && ("slide" === this.dropbarMode && ze(this.dropbar, "uk-navbar-dropbar-slide"), this.clsDrop && ze(n, this.clsDrop + "-dropbar"), "bottom" === i && this.transitionTo(n.offsetHeight + F(Re(n, "marginTop")) + F(Re(n, "marginBottom")), n))
                }
            }, {
                name: "beforehide",
                filter: function() { return this.dropbar },
                handler: function(t, e) {
                    var n = e.$el,
                        i = this.getActive();
                    Dt(this.dropbar, ":hover") && i && i.$el === n && t.preventDefault()
                }
            }, { name: "hide", filter: function() { return this.dropbar }, handler: function(t, e) { var n, i = e.$el;!He(i, this.clsDrop) || (!(n = this.getActive()) || n && n.$el === i) && this.transitionTo(0) } }],
            methods: {
                getActive: function() { var t = this.dropdowns.map(this.getDropdown).filter(function(t) { return t && t.isActive() })[0]; return t && b(t.mode, "hover") && qt(t.toggle.$el, this.$el) && t },
                transitionTo: function(t, e) {
                    var n = this,
                        i = this.dropbar,
                        r = Ft(i) ? ln(i) : 0;
                    return Re(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), ln(i, r), Qe.cancel([e, i]), ae.all([Qe.start(i, { height: t }, this.duration), Qe.start(e, { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" }, this.duration)]).catch(et).then(function() { Re(e, { clip: "" }), n.$update(i) })
                },
                getDropdown: function(t) { return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown") }
            }
        },
        wr = {
            mixins: [fr],
            args: "mode",
            props: { mode: String, flip: Boolean, overlay: Boolean },
            data: { mode: "slide", flip: !1, overlay: !1, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: !1 },
            computed: {
                clsFlip: function(t) {
                    var e = t.flip,
                        n = t.clsFlip;
                    return e ? n : ""
                },
                clsOverlay: function(t) {
                    var e = t.overlay,
                        n = t.clsOverlay;
                    return e ? n : ""
                },
                clsMode: function(t) { var e = t.mode; return t.clsMode + "-" + e },
                clsSidebarAnimation: function(t) {
                    var e = t.mode,
                        n = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : n
                },
                clsContainerAnimation: function(t) {
                    var e = t.mode,
                        n = t.clsContainerAnimation;
                    return "push" !== e && "reveal" !== e ? "" : n
                },
                transitionElement: function(t) { return "reveal" === t.mode ? this.panel.parentNode : this.panel }
            },
            events: [{ name: "click", delegate: function() { return 'a[href^="#"]' }, handler: function(t) { var e = t.current.hash;!t.defaultPrevented && e && Ne(e, document.body) && this.hide() } }, {
                name: "touchstart",
                passive: !0,
                el: function() { return this.panel },
                handler: function(t) {
                    var e = t.targetTouches;
                    1 === e.length && (this.clientY = e[0].clientY)
                }
            }, { name: "touchmove", self: !0, passive: !1, filter: function() { return this.overlay }, handler: function(t) { t.cancelable && t.preventDefault() } }, {
                name: "touchmove",
                passive: !1,
                el: function() { return this.panel },
                handler: function(t) {
                    var e, n, i, r, o;
                    1 === t.targetTouches.length && (e = event.targetTouches[0].clientY - this.clientY, i = (n = this.panel).scrollTop, ((r = n.scrollHeight) <= (o = n.clientHeight) || 0 === i && 0 < e || r - i <= o && e < 0) && t.cancelable && t.preventDefault())
                }
            }, { name: "show", self: !0, handler: function() { "reveal" !== this.mode || He(this.panel.parentNode, this.clsMode) || (Ie(this.panel, "<div>"), ze(this.panel.parentNode, this.clsMode)), Re(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), ze(document.body, this.clsContainer, this.clsFlip), Re(document.body, "touch-action", "pan-y pinch-zoom"), Re(this.$el, "display", "block"), ze(this.$el, this.clsOverlay), ze(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), ln(document.body), ze(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (br().content += ",user-scalable=0") } }, { name: "hide", self: !0, handler: function() { Be(document.body, this.clsContainerAnimation), Re(document.body, "touch-action", "") } }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    var t;
                    this.clsContainerAnimation && ((t = br()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && Te(this.panel), Be(this.panel, this.clsSidebarAnimation, this.clsMode), Be(this.$el, this.clsOverlay), Re(this.$el, "display", ""), Be(document.body, this.clsContainer, this.clsFlip), Re(document.documentElement, "overflowY", "")
                }
            }, { name: "swipeLeft swipeRight", handler: function(t) { this.isToggled() && u(t.type, "Left") ^ this.flip && this.hide() } }]
        };

    function br() { return Ne('meta[name="viewport"]', document.head) || be(document.head, '<meta name="viewport">') }
    var xr = {
            mixins: [pi],
            props: { selContainer: String, selContent: String },
            data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog" },
            computed: { container: function(t, e) { return Bt(e, t.selContainer) }, content: function(t, e) { return Bt(e, t.selContent) } },
            connected: function() { Re(this.$el, "minHeight", 150) },
            update: {
                read: function() { return !(!this.content || !this.container) && { current: F(Re(this.$el, "maxHeight")), max: Math.max(150, ln(this.container) - (an(this.content).height - ln(this.$el))) } },
                write: function(t) {
                    var e = t.current,
                        n = t.max;
                    Re(this.$el, "maxHeight", n), Math.round(e) !== Math.round(n) && Kt(this.$el, "resize")
                },
                events: ["resize"]
            }
        },
        yr = { props: ["width", "height"], connected: function() { ze(this.$el, "uk-responsive-width") }, update: { read: function() { return !!(Ft(this.$el) && this.width && this.height) && { width: dn(this.$el.parentNode), height: this.height } }, write: function(t) { ln(this.$el, rt.contain({ height: this.height, width: this.width }, t).height) }, events: ["resize"] } },
        kr = {
            props: { offset: Number },
            data: { offset: 0 },
            methods: {
                scrollTo: function(t) {
                    var e = this;
                    t = t && Ne(t) || document.body, Kt(this.$el, "beforescroll", [this, t]) && Un(t, { offset: this.offset }).then(function() { return Kt(e.$el, "scrolled", [e, t]) })
                }
            },
            events: { click: function(t) { t.defaultPrevented || (t.preventDefault(), this.scrollTo(Ht(decodeURIComponent(this.$el.hash)).substr(1))) } }
        },
        $r = "_ukScrollspy",
        Ir = {
            args: "cls",
            props: { cls: String, target: String, hidden: Boolean, offsetTop: Number, offsetLeft: Number, repeat: Boolean, delay: Number },
            data: function() { return { cls: !1, target: !1, hidden: !0, offsetTop: 0, offsetLeft: 0, repeat: !1, delay: 0, inViewClass: "uk-scrollspy-inview" } },
            computed: { elements: { get: function(t, e) { var n = t.target; return n ? Me(n, e) : [e] }, watch: function(t) { this.hidden && Re(Rt(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden") }, immediate: !0 } },
            update: [{
                read: function(t) {
                    var e = this;
                    t.update && this.elements.forEach(function(t) { t[$r] || (t[$r] = { cls: ht(t, "uk-scrollspy-class") || e.cls }), t[$r].show = Rn(t, e.offsetTop, e.offsetLeft) })
                },
                write: function(i) {
                    var r = this;
                    if (!i.update) return this.$emit(), i.update = !0;
                    this.elements.forEach(function(e) {
                        function t(t) { Re(e, "visibility", !t && r.hidden ? "hidden" : ""), Le(e, r.inViewClass, t), Le(e, n.cls), Kt(e, t ? "inview" : "outview"), n.inview = t, r.$update(e) }
                        var n = e[$r];
                        !n.show || n.inview || n.queued ? !n.show && n.inview && !n.queued && r.repeat && t(!1) : (n.queued = !0, i.promise = (i.promise || ae.resolve()).then(function() { return new ae(function(t) { return setTimeout(t, r.delay) }) }).then(function() { t(!0), setTimeout(function() { n.queued = !1, r.$emit() }, 300) }))
                    })
                },
                events: ["scroll", "resize"]
            }]
        },
        Sr = {
            props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number },
            data: { cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0 },
            computed: { links: { get: function(t, e) { return Me('a[href^="#"]', e).filter(function(t) { return t.hash }) }, watch: function(t) { this.scroll && this.$create("scroll", t, { offset: this.offset || 0 }) }, immediate: !0 }, targets: function() { return Me(this.links.map(function(t) { return Ht(t.hash).substr(1) }).join(",")) }, elements: function(t) { var e = t.closest; return Bt(this.links, e || "*") } },
            update: [{
                read: function() {
                    var n = this,
                        t = this.targets.length;
                    if (!t || !Ft(this.$el)) return !1;
                    var e = J(Xn(this.targets[0])),
                        i = e.scrollTop,
                        r = e.scrollHeight,
                        o = Gn(e),
                        s = r - an(o).height,
                        a = !1;
                    return i === s ? a = t - 1 : (this.targets.every(function(t, e) { if (un(t, o).top - n.offset <= 0) return a = e, !0 }), !1 === a && this.overflow && (a = 0)), { active: a }
                },
                write: function(t) {
                    var e = t.active;
                    this.links.forEach(function(t) { return t.blur() }), Be(this.elements, this.cls), !1 !== e && Kt(this.$el, "active", [e, ze(this.elements[e], this.cls)])
                },
                events: ["scroll", "resize"]
            }]
        },
        Tr = {
            mixins: [pi, ur],
            props: { top: null, bottom: Boolean, offset: String, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, widthElement: Boolean, showOnUp: Boolean, targetOffset: Number },
            data: { top: 0, bottom: !1, offset: 0, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", widthElement: !1, showOnUp: !1, targetOffset: !1 },
            computed: { offset: function(t) { return bn(t.offset) }, selTarget: function(t, e) { var n = t.selTarget; return n && Ne(n, e) || e }, widthElement: function(t, e) { return yt(t.widthElement, e) || this.placeholder }, isActive: { get: function() { return He(this.selTarget, this.clsActive) }, set: function(t) { t && !this.isActive ? (Oe(this.selTarget, this.clsInactive, this.clsActive), Kt(this.$el, "active")) : t || He(this.selTarget, this.clsInactive) || (Oe(this.selTarget, this.clsActive, this.clsInactive), Kt(this.$el, "inactive")) } } },
            connected: function() { this.placeholder = Ne("+ .uk-sticky-placeholder", this.$el) || Ne('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1 },
            disconnected: function() { this.isFixed && (this.hide(), Be(this.selTarget, this.clsInactive)), $e(this.placeholder), this.placeholder = null, this.widthElement = null },
            events: [{
                name: "load hashchange popstate",
                el: ut && window,
                handler: function() {
                    var i, r = this;
                    !1 !== this.targetOffset && location.hash && 0 < window.pageYOffset && ((i = Ne(location.hash)) && yn.read(function() {
                        var t = an(i).top,
                            e = an(r.$el).top,
                            n = r.$el.offsetHeight;
                        r.isFixed && t <= e + n && e <= t + i.offsetHeight && qn(window, t - n - (P(r.targetOffset) ? r.targetOffset : 0) - r.offset)
                    }))
                }
            }],
            update: [{
                read: function(t, e) {
                    var n = t.height;
                    if (this.inactive = !this.matchMedia || !Ft(this.$el), this.inactive) return !1;
                    this.isActive && "update" !== e && (this.hide(), n = this.$el.offsetHeight, this.show()), n = this.isActive ? n : this.$el.offsetHeight, this.topOffset = an(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + n;
                    var i = Er("bottom", this);
                    return this.top = Math.max(F(Er("top", this)), this.topOffset) - this.offset, this.bottom = i && i - this.$el.offsetHeight, this.width = an(Ft(this.widthElement) ? this.widthElement : this.$el).width, { height: n, top: cn(this.placeholder)[0], margins: Re(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"]) }
                },
                write: function(t) {
                    var e = t.height,
                        n = t.margins,
                        i = this.placeholder;
                    Re(i, G({ height: e }, n)), qt(i, document) || (ye(this.$el, i), i.hidden = !0), this.isActive = !!this.isActive
                },
                events: ["resize"]
            }, {
                read: function(t) { var e = t.scroll; return void 0 === e && (e = 0), this.scroll = window.pageYOffset, { dir: e <= this.scroll ? "down" : "up", scroll: this.scroll } },
                write: function(t, e) {
                    var n = this,
                        i = Date.now(),
                        r = t.initTimestamp;
                    void 0 === r && (r = 0);
                    var o = t.dir,
                        s = t.lastDir,
                        a = t.lastScroll,
                        h = t.scroll,
                        u = t.top;
                    if (!((t.lastScroll = h) < 0 || h === a && "scroll" === e || this.showOnUp && "scroll" !== e && !this.isFixed || ((300 < i - r || o !== s) && (t.initScroll = h, t.initTimestamp = i), t.lastDir = o, this.showOnUp && !this.isFixed && Math.abs(t.initScroll - h) <= 30 && Math.abs(a - h) <= 10)))
                        if (this.inactive || h < this.top || this.showOnUp && (h <= this.top || "down" === o && "scroll" === e || "up" === o && !this.isFixed && h <= this.bottomOffset)) {
                            if (!this.isFixed) return void(rn.inProgress(this.$el) && h < u && (rn.cancel(this.$el), this.hide()));
                            this.isFixed = !1, this.animation && h > this.topOffset ? (rn.cancel(this.$el), rn.out(this.$el, this.animation).then(function() { return n.hide() }, et)) : this.hide()
                        } else this.isFixed ? this.update() : this.animation ? (rn.cancel(this.$el), this.show(), rn.in(this.$el, this.animation).catch(et)) : this.show()
                },
                events: ["resize", "scroll"]
            }],
            methods: {
                show: function() { this.isFixed = !0, this.update(), this.placeholder.hidden = !1 },
                hide: function() { this.isActive = !1, Be(this.$el, this.clsFixed, this.clsBelow), Re(this.$el, { position: "", top: "", width: "" }), this.placeholder.hidden = !0 },
                update: function() {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset);
                    P(this.bottom) && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Re(this.$el, { position: "fixed", top: e + "px", width: this.width }), this.isActive = t, Le(this.$el, this.clsBelow, this.scroll > this.bottomOffset), ze(this.$el, this.clsFixed)
                }
            }
        };

    function Er(t, e) {
        var n = e.$props,
            i = e.$el,
            r = e[t + "Offset"],
            o = n[t];
        if (o) return z(o) && o.match(/^-?\d/) ? r + bn(o) : an(!0 === o ? i.parentNode : yt(o, i)).bottom
    }
    var _r, Cr, Ar, Nr = {
            mixins: [gi],
            args: "connect",
            props: { connect: String, toggle: String, active: Number, swiping: Boolean },
            data: { connect: "~.uk-switcher", toggle: "> * > :first-child", active: 0, swiping: !0, cls: "uk-active", clsContainer: "uk-switcher", attrItem: "uk-switcher-item" },
            computed: {
                connects: {
                    get: function(t, e) { return kt(t.connect, e) },
                    watch: function(t) {
                        var e = this;
                        t.forEach(function(t) { return e.updateAria(t.children) }), this.swiping && Re(t, "touch-action", "pan-y pinch-zoom")
                    },
                    immediate: !0
                },
                toggles: {
                    get: function(t, e) { return Me(t.toggle, e).filter(function(t) { return !Dt(t, ".uk-disabled *, .uk-disabled, [disabled]") }) },
                    watch: function(t) {
                        var e = this.index();
                        this.show(~e && e || t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children: function() { var t = this; return Yt(this.$el).filter(function(e) { return t.toggles.some(function(t) { return qt(t, e) }) }) }
            },
            events: [{ name: "click", delegate: function() { return this.toggle }, handler: function(t) { b(this.toggles, t.current) && (t.preventDefault(), this.show(t.current)) } }, { name: "click", el: function() { return this.connects }, delegate: function() { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function(t) { t.preventDefault(), this.show(ht(t.current, this.attrItem)) } }, {
                name: "swipeRight swipeLeft",
                filter: function() { return this.swiping },
                el: function() { return this.connects },
                handler: function(t) {
                    var e = t.type;
                    this.show(u(e, "Left") ? "next" : "previous")
                }
            }],
            methods: {
                index: function() { var e = this; return y(this.children, function(t) { return He(t, e.cls) }) },
                show: function(t) {
                    var n = this,
                        i = this.index(),
                        r = me(t, this.toggles, i);
                    i !== r && (this.children.forEach(function(t, e) { Le(t, n.cls, r === e), ot(n.toggles[e], "aria-expanded", r === e) }), this.connects.forEach(function(t) { var e = t.children; return n.toggleElement(V(e).filter(function(t, e) { return e !== r && n.isToggled(t) }), !1, 0 <= i).then(function() { return n.toggleElement(e[r], !0, 0 <= i) }) }))
                }
            }
        },
        Mr = {
            mixins: [pi],
            extends: Nr,
            props: { media: Boolean },
            data: { media: 960, attrItem: "uk-tab-item" },
            connected: function() {
                var t = He(this.$el, "uk-tab-left") ? "uk-tab-left" : !!He(this.$el, "uk-tab-right") && "uk-tab-right";
                t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media })
            }
        },
        Dr = {
            mixins: [ur, gi],
            args: "target",
            props: { href: String, target: null, mode: "list", queued: Boolean },
            data: { href: !1, target: !1, mode: "click", queued: !0 },
            computed: {
                target: {
                    get: function(t, e) {
                        var n = t.href,
                            i = t.target;
                        return (i = kt(i || n, e)).length && i || [e]
                    },
                    watch: function() { Kt(this.target, "updatearia", [this]) },
                    immediate: !0
                }
            },
            events: [{ name: wt + " " + bt, filter: function() { return b(this.mode, "hover") }, handler: function(t) { re(t) || this.toggle("toggle" + (t.type === wt ? "show" : "hide")) } }, {
                name: "click",
                filter: function() { return b(this.mode, "click") || pt && b(this.mode, "hover") },
                handler: function(t) {
                    var e;
                    (Bt(t.target, 'a[href="#"], a[href=""]') || (e = Bt(t.target, "a[href]")) && (this.cls && !He(this.target, this.cls.split(" ")[0]) || !Ft(this.target) || e.hash && Dt(this.target, e.hash))) && t.preventDefault(), this.toggle()
                }
            }],
            update: {
                read: function() { return !(!b(this.mode, "media") || !this.media) && { match: this.matchMedia } },
                write: function(t) {
                    var e = t.match,
                        n = this.isToggled(this.target);
                    (e ? !n : n) && this.toggle()
                },
                events: ["resize"]
            },
            methods: {
                toggle: function(t) {
                    var e, n = this;
                    Kt(this.target, t || "toggle", [this]) && (this.queued ? (e = this.target.filter(this.isToggled), this.toggleElement(e, !1).then(function() { return n.toggleElement(n.target.filter(function(t) { return !b(e, t) }), !0) })) : this.toggleElement(this.target))
                }
            }
        };
    K(Object.freeze({ __proto__: null, Accordion: vi, Alert: bi, Cover: yi, Drop: Ii, Dropdown: Ii, FormCustom: Si, Gif: Ti, Grid: Ni, HeightMatch: Di, HeightViewport: Pi, Icon: qi, Img: Zi, Leader: cr, Margin: Ei, Modal: gr, Nav: mr, Navbar: vr, Offcanvas: wr, OverflowAuto: xr, Responsive: yr, Scroll: kr, Scrollspy: Ir, ScrollspyNav: Sr, Sticky: Tr, Svg: Hi, Switcher: Nr, Tab: Mr, Toggle: Dr, Video: xi, Close: Gi, Spinner: Ji, SlidenavNext: Yi, SlidenavPrevious: Yi, SearchIcon: Xi, Marker: Ui, NavbarToggleIcon: Ui, OverlayIcon: Ui, PaginationNext: Ui, PaginationPrevious: Ui, Totop: Ui }), function(t, e) { return ti.component(e, t) }), ti.use(function(r) {
        ut && pe(function() {
            var e;
            r.update(), Xt(window, "load resize", function() { return r.update(null, "resize") }), Xt(document, "loadedmetadata load", function(t) { var e = t.target; return r.update(e, "resize") }, !0), Xt(window, "scroll", function(t) { e || (e = !0, yn.write(function() { return e = !1 }), r.update(null, t.type)) }, { passive: !0, capture: !0 });
            var n, i = 0;
            Xt(document, "animationstart", function(t) {
                var e = t.target;
                (Re(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, Re(document.body, "overflowX", "hidden"), setTimeout(function() {--i || Re(document.body, "overflowX", "") }, U(Re(e, "animationDuration")) + 100))
            }, !0), Xt(document, gt, function(t) {
                var s, a;
                n && n(), re(t) && (s = oe(t), a = "tagName" in t.target ? t.target : t.target.parentNode, n = Jt(document, vt + " " + xt, function(t) {
                    var e = oe(t),
                        r = e.x,
                        o = e.y;
                    (a && r && 100 < Math.abs(s.x - r) || o && 100 < Math.abs(s.y - o)) && setTimeout(function() {
                        var t, e, n, i;
                        Kt(a, "swipe"), Kt(a, "swipe" + (t = s.x, e = s.y, n = r, i = o, Math.abs(t - n) >= Math.abs(e - i) ? 0 < t - n ? "Left" : "Right" : 0 < e - i ? "Up" : "Down"))
                    })
                }))
            }, { passive: !0 })
        })
    }), Cr = (_r = ti).connect, Ar = _r.disconnect, ut && window.MutationObserver && yn.read(function() {
        document.body && Ae(document.body, Cr);
        new MutationObserver(function(t) {
            var r = [];
            t.forEach(function(t) {
                return n = r, i = (e = t).target, void(("attributes" !== e.type ? function(t) { for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) Ae(e[i], Cr); for (var r = 0; r < n.length; r++) Ae(n[r], Ar); return 1 } : function(t) {
                    var e = t.target,
                        n = t.attributeName;
                    if ("href" === n) return 1;
                    var i = Qn(n);
                    if (!(i && i in _r)) return;
                    if (st(e, n)) return _r[i](e), 1;
                    var r = _r.getComponent(e, i);
                    if (r) return r.$destroy(), 1
                })(e) && !n.some(function(t) { return t.contains(i) }) && n.push(i.contains ? i : i.parentNode));
                var e, n, i
            }), r.forEach(function(t) { return _r.update(t) })
        }).observe(document, { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), _r._initialized = !0
    });
    var zr = {
        mixins: [pi],
        props: { date: String, clsWrapper: String },
        data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
        computed: { date: function(t) { var e = t.date; return Date.parse(e) }, days: function(t, e) { return Ne(t.clsWrapper.replace("%unit%", "days"), e) }, hours: function(t, e) { return Ne(t.clsWrapper.replace("%unit%", "hours"), e) }, minutes: function(t, e) { return Ne(t.clsWrapper.replace("%unit%", "minutes"), e) }, seconds: function(t, e) { return Ne(t.clsWrapper.replace("%unit%", "seconds"), e) }, units: function() { var e = this; return ["days", "hours", "minutes", "seconds"].filter(function(t) { return e[t] }) } },
        connected: function() { this.start() },
        disconnected: function() {
            var e = this;
            this.stop(), this.units.forEach(function(t) { return ve(e[t]) })
        },
        events: [{ name: "visibilitychange", el: ut && document, handler: function() { document.hidden ? this.stop() : this.start() } }],
        update: {
            write: function() {
                var t, e, i = this,
                    r = (t = this.date, { total: e = t - Date.now(), seconds: e / 1e3 % 60, minutes: e / 1e3 / 60 % 60, hours: e / 1e3 / 60 / 60 % 24, days: e / 1e3 / 60 / 60 / 24 });
                r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function(t) {
                    var e = (e = String(Math.floor(r[t]))).length < 2 ? "0" + e : e,
                        n = i[t];
                    n.textContent !== e && ((e = e.split("")).length !== n.children.length && we(n, e.map(function() { return "<span></span>" }).join("")), e.forEach(function(t, e) { return n.children[e].textContent = t }))
                })
            }
        },
        methods: { start: function() { this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3)) }, stop: function() { this.timer && (clearInterval(this.timer), this.timer = null) } }
    };
    var Br, Pr = "uk-animation-target",
        Or = {
            props: { animation: Number },
            data: { animation: 150 },
            methods: {
                animate: function(t, i) {
                    var n = this;
                    void 0 === i && (i = this.$el),
                        function() {
                            if (Br) return;
                            (Br = be(document.head, "<style>").sheet).insertRule("." + Pr + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0)
                        }();
                    var r = Yt(i),
                        o = r.map(function(t) { return Hr(t, !0) }),
                        e = ln(i),
                        s = window.pageYOffset;
                    t(), Qe.cancel(i), r.forEach(Qe.cancel), Lr(i), this.$update(i, "resize"), yn.flush();
                    var a = ln(i),
                        h = (r = r.concat(Yt(i).filter(function(t) { return !b(r, t) }))).map(function(t, e) { return !!(t.parentNode && e in o) && (o[e] ? Ft(t) ? jr(t) : { opacity: 0 } : { opacity: Ft(t) ? 1 : 0 }) }),
                        o = h.map(function(t, e) { var n = r[e].parentNode === i && (o[e] || Hr(r[e])); return n && (t ? "opacity" in t || (n.opacity % 1 ? t.opacity = 1 : delete n.opacity) : delete n.opacity), n });
                    return ze(i, Pr), r.forEach(function(t, e) { return o[e] && Re(t, o[e]) }), Re(i, { height: e, display: "block" }), qn(window, s), ae.all(r.map(function(t, e) { return ["top", "left", "height", "width"].some(function(t) { return o[e][t] !== h[e][t] }) && Qe.start(t, h[e], n.animation, "ease") }).concat(e !== a && Qe.start(i, { height: a }, this.animation, "ease"))).then(function() { r.forEach(function(t, e) { return Re(t, { display: 0 === h[e].opacity ? "none" : "", zIndex: "" }) }), Lr(i), n.$update(i, "resize"), yn.flush() }, et)
                }
            }
        };

    function Hr(t, e) { var n = Re(t, "zIndex"); return !!Ft(t) && G({ display: "", opacity: e ? Re(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: "auto" === n ? ge(t) : n }, jr(t)) }

    function Lr(t) { Re(t.children, { height: "", left: "", opacity: "", pointerEvents: "", position: "", top: "", width: "" }), Be(t, Pr), Re(t, { height: "", display: "" }) }

    function jr(t) {
        var e = an(t),
            n = e.height,
            i = e.width,
            r = un(t);
        return { top: r.top, left: r.left, height: n, width: i }
    }
    var Fr = {
        mixins: [Or],
        args: "target",
        props: { target: Boolean, selActive: Boolean },
        data: { target: null, selActive: !1, attrItem: "uk-filter-control", cls: "uk-active", animation: 250 },
        computed: {
            toggles: {
                get: function(t, e) { t.attrItem; return Me("[" + this.attrItem + "],[data-" + this.attrItem + "]", e) },
                watch: function() {
                    var e, n = this;
                    this.updateState(), !1 !== this.selActive && (e = Me(this.selActive, this.$el), this.toggles.forEach(function(t) { return Le(t, n.cls, b(e, t)) }))
                },
                immediate: !0
            },
            children: {
                get: function(t, e) { return Me(t.target + " > *", e) },
                watch: function(t, e) {
                    var n, i;
                    i = e, (n = t).length === i.length && n.every(function(t) { return ~i.indexOf(t) }) || this.updateState()
                }
            }
        },
        events: [{ name: "click", delegate: function() { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function(t) { t.preventDefault(), this.apply(t.current) } }],
        methods: {
            apply: function(t) { this.setState(Rr(t, this.attrItem, this.getState())) },
            getState: function() { var n = this; return this.toggles.filter(function(t) { return He(t, n.cls) }).reduce(function(t, e) { return Rr(e, n.attrItem, t) }, { filter: { "": "" }, sort: [] }) },
            setState: function(n, i) {
                var r = this;
                void 0 === i && (i = !0), n = G({ filter: { "": "" }, sort: [] }, n), Kt(this.$el, "beforeFilter", [this, n]), this.toggles.forEach(function(t) {
                    return Le(t, r.cls, !! function(t, e, n) {
                        var i = n.filter;
                        void 0 === i && (i = { "": "" });
                        var r = n.sort,
                            o = r[0],
                            s = r[1],
                            a = Wr(t, e),
                            h = a.filter;
                        void 0 === h && (h = "");
                        var u = a.group;
                        void 0 === u && (u = "");
                        var c = a.sort,
                            l = a.order;
                        void 0 === l && (l = "asc");
                        return H(c) ? u in i && h === i[u] || !h && u && !(u in i) && !i[""] : o === c && s === l
                    }(t, r.attrItem, n))
                }), ae.all(Me(this.target, this.$el).map(function(t) { var e = Yt(t); return i ? r.animate(function() { return Vr(n, t, e) }, t) : Vr(n, t, e) })).then(function() { return Kt(r.$el, "afterFilter", [r]) })
            },
            updateState: function() {
                var t = this;
                yn.write(function() { return t.setState(t.getState(), !1) })
            }
        }
    };

    function Wr(t, e) { return Mn(ht(t, e), ["filter"]) }

    function Vr(t, e, n) {
        var i, r, o = (i = t.filter, r = "", K(i, function(t) { return r += t || "" }), r);
        n.forEach(function(t) { return Re(t, "display", o && !Dt(t, o) ? "none" : "") });
        var s, a, h, u = t.sort,
            c = u[0],
            l = u[1];
        c && (a = c, h = l, Y(s = G([], n).sort(function(t, e) { return ht(t, a).localeCompare(ht(e, a), void 0, { numeric: !0 }) * ("asc" === h || -1) }), n) || be(e, s))
    }

    function Rr(t, e, n) {
        var i = Wr(t, e),
            r = i.filter,
            o = i.group,
            s = i.sort,
            a = i.order;
        return void 0 === a && (a = "asc"), (r || H(s)) && (o ? r ? (delete n.filter[""], n.filter[o] = r) : (delete n.filter[o], (O(n.filter) || "" in n.filter) && (n.filter = { "": r || "" })) : n.filter = { "": r || "" }), H(s) || (n.sort = [s, a]), n
    }
    var qr = { slide: { show: function(t) { return [{ transform: Yr(-100 * t) }, { transform: Yr() }] }, percent: Ur, translate: function(t, e) { return [{ transform: Yr(-100 * e * t) }, { transform: Yr(100 * e * (1 - t)) }] } } };

    function Ur(t) { return Math.abs(Re(t, "transform").split(",")[4] / t.offsetWidth) || 0 }

    function Yr(t, e) { return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", ct ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)" }

    function Xr(t) { return "scale3d(" + t + ", " + t + ", 1)" }
    var Gr = G({}, qr, { fade: { show: function() { return [{ opacity: 0 }, { opacity: 1 }] }, percent: function(t) { return 1 - Re(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t }, { opacity: t }] } }, scale: { show: function() { return [{ opacity: 0, transform: Xr(.8) }, { opacity: 1, transform: Xr(1) }] }, percent: function(t) { return 1 - Re(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, transform: Xr(1 - .2 * t) }, { opacity: t, transform: Xr(.8 + .2 * t) }] } } });

    function Jr(t, e, n) { Kt(t, Zt(e, !1, !1, n)) }
    var Kr = {
        mixins: [{
            props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean },
            data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
            connected: function() { this.autoplay && this.startAutoplay() },
            disconnected: function() { this.stopAutoplay() },
            update: function() { ot(this.slides, "tabindex", "-1") },
            events: [{ name: "visibilitychange", el: ut && document, filter: function() { return this.autoplay }, handler: function() { document.hidden ? this.stopAutoplay() : this.startAutoplay() } }],
            methods: {
                startAutoplay: function() {
                    var t = this;
                    this.stopAutoplay(), this.interval = setInterval(function() { return (!t.draggable || !Ne(":focus", t.$el)) && (!t.pauseOnHover || !Dt(t.$el, ":hover")) && !t.stack.length && t.show("next") }, this.autoplayInterval)
                },
                stopAutoplay: function() { this.interval && clearInterval(this.interval) }
            }
        }, {
            props: { draggable: Boolean },
            data: { draggable: !0, threshold: 10 },
            created: function() {
                var i = this;
                ["start", "move", "end"].forEach(function(t) {
                    var n = i[t];
                    i[t] = function(t) {
                        var e = oe(t).x * (lt ? -1 : 1);
                        i.prevPos = e !== i.pos ? i.pos : i.prevPos, i.pos = e, n(t)
                    }
                })
            },
            events: [{ name: gt, delegate: function() { return this.selSlides }, handler: function(t) { var e;!this.draggable || !re(t) && (!(e = t.target).children.length && e.childNodes.length) || Bt(t.target, Wt) || 0 < t.button || this.length < 2 || this.start(t) } }, { name: "dragstart", handler: function(t) { t.preventDefault() } }],
            methods: {
                start: function() { this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, Xt(document, mt, this.move, { passive: !1 }), Xt(document, vt + " " + xt, this.end, !0), Re(this.list, "userSelect", "none") },
                move: function(t) {
                    var e = this,
                        n = this.pos - this.drag;
                    if (!(0 == n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                        Re(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                        for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth;
                        this.percent = o / a;
                        var h, u = i[r],
                            c = i[s],
                            l = this.index !== s,
                            d = r === s;
                        [this.index, this.prevIndex].filter(function(t) { return !b([s, r], t) }).forEach(function(t) { Kt(i[t], "itemhidden", [e]), d && (h = !0, e.prevIndex = r) }), (this.index === r && this.prevIndex !== r || h) && Kt(i[this.index], "itemshown", [this]), l && (this.prevIndex = r, this.index = s, d || Kt(u, "beforeitemhide", [this]), Kt(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), u, !d && c), l && (d || Kt(u, "itemhide", [this]), Kt(c, "itemshow", [this]))
                    }
                },
                end: function() {
                    var t;
                    Gt(document, mt, this.move, { passive: !1 }), Gt(document, vt + " " + xt, this.end, !0), this.dragging && (this.dragging = null, this.index === this.prevIndex ? (this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null) : (t = (lt ? this.dir * (lt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos, this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0))), Re(this.list, { userSelect: "", pointerEvents: "" }), this.drag = this.percent = null
                }
            }
        }, {
            data: { selNav: !1 },
            computed: { nav: function(t, e) { return Ne(t.selNav, e) }, selNavItem: function(t) { var e = t.attrItem; return "[" + e + "],[data-" + e + "]" }, navItems: function(t, e) { return Me(this.selNavItem, e) } },
            update: {
                write: function() {
                    var n = this;
                    this.nav && this.length !== this.nav.children.length && we(this.nav, this.slides.map(function(t, e) { return "<li " + n.attrItem + '="' + e + '"><a href></a></li>' }).join("")), Le(Me(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{ name: "click", delegate: function() { return this.selNavItem }, handler: function(t) { t.preventDefault(), this.show(ht(t.current, this.attrItem)) } }, { name: "itemshow", handler: "updateNav" }],
            methods: {
                updateNav: function() {
                    var n = this,
                        i = this.getValidIndex();
                    this.navItems.forEach(function(t) {
                        var e = ht(t, n.attrItem);
                        Le(t, n.clsActive, j(e) === i), Le(t, "uk-invisible", n.finite && ("previous" === e && 0 === i || "next" === e && i >= n.maxIndex))
                    })
                }
            }
        }],
        props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number, selSlides: String },
        data: function() { return { easing: "ease", finite: !1, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: !1, Transitioner: !1, transitionOptions: {} } },
        connected: function() { this.prevIndex = -1, this.index = this.getValidIndex(this.index), this.stack = [] },
        disconnected: function() { Be(this.slides, this.clsActive) },
        computed: { duration: function(t, e) { var n = t.velocity; return Zr(e.offsetWidth / n) }, list: function(t, e) { return Ne(t.selList, e) }, maxIndex: function() { return this.length - 1 }, selSlides: function(t) { return t.selList + " " + (t.selSlides || "> *") }, slides: { get: function() { return Me(this.selSlides, this.$el) }, watch: function() { this.$reset() } }, length: function() { return this.slides.length } },
        events: { itemshown: function() { this.$update(this.list) } },
        methods: {
            show: function(t, e) {
                var n = this;
                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                    var i = this.stack,
                        r = e ? 0 : i.length,
                        o = function() { i.splice(r, 1), i.length && n.show(i.shift(), !0) };
                    if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                    else {
                        var s, a, h = this.getIndex(this.index),
                            u = He(this.slides, this.clsActive) && this.slides[h],
                            c = this.getIndex(t, this.index),
                            l = this.slides[c];
                        if (u !== l) { if (this.dir = (a = h, "next" !== (s = t) && ("previous" === s || s < a) ? -1 : 1), this.prevIndex = h, this.index = c, u && !Kt(u, "beforeitemhide", [this]) || !Kt(l, "beforeitemshow", [this, u])) return this.index = this.prevIndex, void o(); var d = this._show(u, l, e).then(function() { return u && Kt(u, "itemhidden", [n]), Kt(l, "itemshown", [n]), new ae(function(t) { yn.write(function() { i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t() }) }) }); return u && Kt(u, "itemhide", [this]), Kt(l, "itemshow", [this]), d }
                        o()
                    }
                }
            },
            getIndex: function(t, e) { return void 0 === t && (t = this.index), void 0 === e && (e = this.index), tt(me(t, this.slides, e, this.finite), 0, this.maxIndex) },
            getValidIndex: function(t, e) { return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e) },
            _show: function(t, e, n) { if (this._transitioner = this._getTransitioner(t, e, this.dir, G({ easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing }, this.transitionOptions)), !n && !t) return this._translate(1), ae.resolve(); var i = this.stack.length; return this._transitioner[1 < i ? "forward" : "show"](1 < i ? Math.min(this.duration, 75 + 75 / (i - 1)) : this.duration, this.percent) },
            _getDistance: function(t, e) { return this._getTransitioner(t, t !== e && e).getDistance() },
            _translate: function(t, e, n) { void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index); var i = this._getTransitioner(e !== n && e, n); return i.translate(t), i },
            _getTransitioner: function(t, e, n, i) { return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(B(t) ? this.slides[t] : t, B(e) ? this.slides[e] : e, n * (lt ? -1 : 1), i) }
        }
    };

    function Zr(t) { return .5 * t + 300 }
    var Qr = {
            mixins: [Kr],
            props: { animation: String },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: qr,
                Transitioner: function(o, s, a, t) {
                    var e = t.animation,
                        h = t.easing,
                        n = e.percent,
                        i = e.translate,
                        r = e.show;
                    void 0 === r && (r = et);
                    var u = r(a),
                        c = new se;
                    return {
                        dir: a,
                        show: function(t, e, n) {
                            var i = this;
                            void 0 === e && (e = 0);
                            var r = n ? "linear" : h;
                            return t -= Math.round(t * tt(e, -1, 1)), this.translate(e), Jr(s, "itemin", { percent: e, duration: t, timing: r, dir: a }), Jr(o, "itemout", { percent: 1 - e, duration: t, timing: r, dir: a }), ae.all([Qe.start(s, u[1], t, r), Qe.start(o, u[0], t, r)]).then(function() { i.reset(), c.resolve() }, et), c.promise
                        },
                        stop: function() { return Qe.stop([s, o]) },
                        cancel: function() { Qe.cancel([s, o]) },
                        reset: function() { for (var t in u[0]) Re([s, o], t, "") },
                        forward: function(t, e) { return void 0 === e && (e = this.percent()), Qe.cancel([s, o]), this.show(t, e, !0) },
                        translate: function(t) {
                            this.reset();
                            var e = i(t, a);
                            Re(s, e[1]), Re(o, e[0]), Jr(s, "itemtranslatein", { percent: t, dir: a }), Jr(o, "itemtranslateout", { percent: 1 - t, dir: a })
                        },
                        percent: function() { return n(o || s, s, a) },
                        getDistance: function() { return o && o.offsetWidth }
                    }
                }
            },
            computed: {
                animation: function(t) {
                    var e = t.animation,
                        n = t.Animations;
                    return G(n[e] || n.slide, { name: e })
                },
                transitionOptions: function() { return { animation: this.animation } }
            },
            events: {
                "itemshow itemhide itemshown itemhidden": function(t) {
                    var e = t.target;
                    this.$update(e)
                },
                beforeitemshow: function(t) { ze(t.target, this.clsActive) },
                itemshown: function(t) { ze(t.target, this.clsActivated) },
                itemhidden: function(t) { Be(t.target, this.clsActive, this.clsActivated) }
            }
        },
        to = {
            mixins: [lr, fr, gi, Qr],
            functional: !0,
            props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String },
            data: function() { return { preload: 1, videoAutoplay: !1, delayControls: 3e3, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", selCaption: ".uk-lightbox-caption", pauseOnHover: !1, velocity: 2, Animations: Gr, template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' } },
            created: function() {
                var t = Ne(this.template),
                    e = Ne(this.selList, t);
                this.items.forEach(function() { return be(e, "<li>") }), this.$mount(be(this.container, t))
            },
            computed: { caption: function(t, e) { t.selCaption; return Ne(".uk-lightbox-caption", e) } },
            events: [{ name: mt + " " + gt + " keydown", handler: "showControls" }, { name: "click", self: !0, delegate: function() { return this.selSlides }, handler: function(t) { t.defaultPrevented || this.hide() } }, { name: "shown", self: !0, handler: function() { this.showControls() } }, { name: "hide", self: !0, handler: function() { this.hideControls(), Be(this.slides, this.clsActive), Qe.stop(this.slides) } }, { name: "hidden", self: !0, handler: function() { this.$destroy(!0) } }, {
                name: "keyup",
                el: ut && document,
                handler: function(t) {
                    if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next")
                    }
                }
            }, { name: "beforeitemshow", handler: function(t) { this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Gr.scale, Be(t.target, this.clsActive), this.stack.splice(1, 0, this.index)) } }, { name: "itemshow", handler: function() { we(this.caption, this.getItem().caption || ""); for (var t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t) } }, { name: "itemshown", handler: function() { this.draggable = this.$props.draggable } }, {
                name: "itemload",
                handler: function(t, r) {
                    var o = this,
                        i = r.source,
                        e = r.type,
                        s = r.alt;
                    void 0 === s && (s = "");
                    var a, h, n, u = r.poster,
                        c = r.attrs;
                    void 0 === c && (c = {}), this.setItem(r, "<span uk-spinner></span>"), i && (h = { frameborder: "0", allow: "autoplay", allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": "" + this.videoAutoplay }, "image" === e || i.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i) ? fe(i, c.srcset, c.size).then(function(t) {
                        var e = t.width,
                            n = t.height;
                        return o.setItem(r, eo("img", G({ src: i, width: e, height: n, alt: s }, c)))
                    }, function() { return o.setError(r) }) : "video" === e || i.match(/\.(mp4|webm|ogv)($|\?)/i) ? (Xt(n = eo("video", G({ src: i, poster: u, controls: "", playsinline: "", "uk-video": "" + this.videoAutoplay }, c)), "loadedmetadata", function() { ot(n, { width: n.videoWidth, height: n.videoHeight }), o.setItem(r, n) }), Xt(n, "error", function() { return o.setError(r) })) : "iframe" === e || i.match(/\.(html|php)($|\?)/i) ? this.setItem(r, eo("iframe", G({ src: i, frameborder: "0", allowfullscreen: "", class: "uk-lightbox-iframe" }, c))) : (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) ? this.setItem(r, eo("iframe", G({ src: "https://www.youtube" + (a[1] || "") + ".com/embed/" + a[2] + (a[3] ? "?" + a[3] : ""), width: 1920, height: 1080 }, h, c))) : (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) && de("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), { responseType: "json", withCredentials: !1 }).then(function(t) {
                        var e = t.response,
                            n = e.height,
                            i = e.width;
                        return o.setItem(r, eo("iframe", G({ src: "https://player.vimeo.com/video/" + a[1] + (a[2] ? "?" + a[2] : ""), width: i, height: n }, h, c)))
                    }, function() { return o.setError(r) }))
                }
            }],
            methods: {
                loadItem: function(t) {
                    void 0 === t && (t = this.index);
                    var e = this.getItem(t);
                    this.getSlide(e).childElementCount || Kt(this.$el, "itemload", [e])
                },
                getItem: function(t) { return void 0 === t && (t = this.index), this.items[me(t, this.slides)] },
                setItem: function(t, e) { Kt(this.$el, "itemloaded", [this, we(this.getSlide(t), e)]) },
                getSlide: function(t) { return this.slides[this.items.indexOf(t)] },
                setError: function(t) { this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>') },
                showControls: function() { clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), ze(this.$el, "uk-active", "uk-transition-active") },
                hideControls: function() { Be(this.$el, "uk-active", "uk-transition-active") }
            }
        };

    function eo(t, e) { var n = Ce("<" + t + ">"); return ot(n, e), n }
    var no, io = {
        install: function(t, e) {
            t.lightboxPanel || t.component("lightboxPanel", to);
            G(e.props, t.component("lightboxPanel").options.props)
        },
        props: { toggle: String },
        data: { toggle: "a" },
        computed: { toggles: { get: function(t, e) { return Me(t.toggle, e) }, watch: function() { this.hide() } } },
        disconnected: function() { this.hide() },
        events: [{ name: "click", delegate: function() { return this.toggle + ":not(.uk-disabled)" }, handler: function(t) { t.preventDefault(), this.show(t.current) } }],
        methods: {
            show: function(t) {
                var n, e = this,
                    i = Q(this.toggles.map(ro), "source");
                return N(t) && (n = ro(t).source, t = y(i, function(t) { var e = t.source; return n === e })), this.panel = this.panel || this.$create("lightboxPanel", G({}, this.$props, { items: i })), Xt(this.panel.$el, "hidden", function() { return e.panel = !1 }), this.panel.show(t)
            },
            hide: function() { return this.panel && this.panel.hide() }
        }
    };

    function ro(e) { var n = {}; return ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function(t) { n["href" === t ? "source" : t] = ht(e, t) }), n.attrs = Mn(n.attrs), n }
    var oo = {
        functional: !0,
        args: ["message", "status"],
        data: { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" },
        install: function(r) { r.notification.closeAll = function(n, i) { Ae(document.body, function(t) { var e = r.getComponent(t, "notification");!e || n && n !== e.group || e.close(i) }) } },
        computed: { marginProp: function(t) { return "margin" + (w(t.pos, "top") ? "Top" : "Bottom") }, startProps: function() { var t = { opacity: 0 }; return t[this.marginProp] = -this.$el.offsetHeight, t } },
        created: function() {
            var t = Ne("." + this.clsContainer + "-" + this.pos, this.$container) || be(this.$container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(be(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
        },
        connected: function() {
            var t, e = this,
                n = F(Re(this.$el, this.marginProp));
            Qe.start(Re(this.$el, this.startProps), ((t = { opacity: 1 })[this.marginProp] = n, t)).then(function() { e.timeout && (e.timer = setTimeout(e.close, e.timeout)) })
        },
        events: ((no = { click: function(t) { Bt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close() } })[wt] = function() { this.timer && clearTimeout(this.timer) }, no[bt] = function() { this.timeout && (this.timer = setTimeout(this.close, this.timeout)) }, no),
        methods: {
            close: function(t) {
                function e() {
                    var t = n.$el.parentNode;
                    Kt(n.$el, "close", [n]), $e(n.$el), t && !t.hasChildNodes() && $e(t)
                }
                var n = this;
                this.timer && clearTimeout(this.timer), t ? e() : Qe.start(this.$el, this.startProps).then(e)
            }
        }
    };
    var so = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
        ao = {
            mixins: [ur],
            props: so.reduce(function(t, e) { return t[e] = "list", t }, {}),
            data: so.reduce(function(t, e) { return t[e] = void 0, t }, {}),
            computed: {
                props: function(g, m) {
                    var v = this;
                    return so.reduce(function(t, e) {
                        if (H(g[e])) return t;
                        var n, i, r = e.match(/color/i),
                            o = r || "opacity" === e,
                            s = g[e].slice(0);
                        o && Re(m, e, ""), s.length < 2 && s.unshift(("scale" === e ? 1 : o ? Re(m, e) : 0) || 0);
                        var a, h, u, c, l, d, f = s.reduce(function(t, e) { return z(e) && e.replace(/-|\d/g, "").trim() || t }, "");
                        if (r ? (a = m.style.color, s = s.map(function(t) { return Re(Re(m, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(F) }), m.style.color = a) : w(e, "bg") ? (h = "bgy" === e ? "height" : "width", s = s.map(function(t) { return bn(t, h, v.$el) }), Re(m, "background-position-" + e[2], ""), i = Re(m, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], n = v.covers ? (u = Math.min.apply(Math, s), c = Math.max.apply(Math, s), l = s.indexOf(u) < s.indexOf(c), d = c - u, s = s.map(function(t) { return t - (l ? u : c) }), (l ? -d : 0) + "px") : i) : s = s.map(F), "stroke" === e) {
                            if (!s.some(function(t) { return t })) return t;
                            var p = Wi(v.$el);
                            Re(m, "strokeDasharray", p), "%" === f && (s = s.map(function(t) { return t * p / 100 })), s = s.reverse(), e = "strokeDashoffset"
                        }
                        return t[e] = { steps: s, unit: f, pos: n, bgPos: i, diff: d }, t
                    }, {})
                },
                bgProps: function() { var e = this; return ["bgx", "bgy"].filter(function(t) { return t in e.props }) },
                covers: function(t, e) { return i = (n = e).style.backgroundSize, r = "cover" === Re(Re(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, r; var n, i, r }
            },
            disconnected: function() { delete this._image },
            update: {
                read: function(t) {
                    var e, n, i, h, u, c, l = this;
                    t.active = this.matchMedia, t.active && (t.image || !this.covers || !this.bgProps.length || (e = Re(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1")) && ((n = new Image).src = e, (t.image = n).naturalWidth || (n.onload = function() { return l.$update() })), (i = t.image) && i.naturalWidth && (h = { width: this.$el.offsetWidth, height: this.$el.offsetHeight }, u = { width: i.naturalWidth, height: i.naturalHeight }, c = rt.cover(u, h), this.bgProps.forEach(function(t) {
                        var e, n = l.props[t],
                            i = n.diff,
                            r = n.bgPos,
                            o = n.steps,
                            s = "bgy" === t ? "height" : "width",
                            a = c[s] - h[s];
                        a < i ? h[s] = c[s] + i - a : i < a && ((e = h[s] / bn(r, s, l.$el)) && (l.props[t].steps = o.map(function(t) { return t - (a - i) / e }))), c = rt.cover(u, h)
                    }), t.dim = c))
                },
                write: function(t) {
                    var e = t.dim;
                    t.active ? e && Re(this.$el, { backgroundSize: e.width + "px " + e.height + "px", backgroundRepeat: "no-repeat" }) : Re(this.$el, { backgroundSize: "", backgroundRepeat: "" })
                },
                events: ["resize"]
            },
            methods: {
                reset: function() {
                    var n = this;
                    K(this.getCss(0), function(t, e) { return Re(n.$el, e, "") })
                },
                getCss: function(l) {
                    var d = this.props;
                    return Object.keys(d).reduce(function(t, e) {
                        var n = d[e],
                            i = n.steps,
                            r = n.unit,
                            o = n.pos,
                            s = function(t, e, n) {
                                void 0 === n && (n = 2);
                                var i = ho(t, e),
                                    r = i[0],
                                    o = i[1],
                                    s = i[2];
                                return (B(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(n)
                            }(i, l);
                        switch (e) {
                            case "x":
                            case "y":
                                r = r || "px", t.transform += " translate" + p(e) + "(" + F(s).toFixed("px" === r ? 0 : 2) + r + ")";
                                break;
                            case "rotate":
                                r = r || "deg", t.transform += " rotate(" + (s + r) + ")";
                                break;
                            case "scale":
                                t.transform += " scale(" + s + ")";
                                break;
                            case "bgy":
                            case "bgx":
                                t["background-position-" + e[2]] = "calc(" + o + " + " + s + "px)";
                                break;
                            case "color":
                            case "backgroundColor":
                            case "borderColor":
                                var a = ho(i, l),
                                    h = a[0],
                                    u = a[1],
                                    c = a[2];
                                t[e] = "rgba(" + h.map(function(t, e) { return t += c * (u[e] - t), 3 === e ? F(t) : parseInt(t, 10) }).join(",") + ")";
                                break;
                            case "blur":
                                r = r || "px", t.filter += " blur(" + (s + r) + ")";
                                break;
                            case "hue":
                                r = r || "deg", t.filter += " hue-rotate(" + (s + r) + ")";
                                break;
                            case "fopacity":
                                r = r || "%", t.filter += " opacity(" + (s + r) + ")";
                                break;
                            case "grayscale":
                            case "invert":
                            case "saturate":
                            case "sepia":
                                r = r || "%", t.filter += " " + e + "(" + (s + r) + ")";
                                break;
                            default:
                                t[e] = s
                        }
                        return t
                    }, { transform: "", filter: "" })
                }
            }
        };

    function ho(t, e) {
        var n = t.length - 1,
            i = Math.min(Math.floor(n * e), n - 1),
            r = t.slice(i, i + 2);
        return r.push(1 === e ? 1 : e % (1 / n) * n), r
    }
    var uo = {
        mixins: [ao],
        props: { target: String, viewport: Number, easing: Number },
        data: { target: !1, viewport: 1, easing: 1 },
        computed: { target: function(t, e) { var n = t.target; return function t(e) { return e ? "offsetTop" in e ? e : t(e.parentNode) : document.body }(n && yt(n, e) || e) } },
        update: {
            read: function(t, e) { var n = t.percent; if ("scroll" !== e && (n = !1), t.active) { var i, r, o = n; return i = Yn(this.target) / (this.viewport || 1), r = this.easing, { percent: n = tt(i * (1 - (r - r * i))), style: o !== n && this.getCss(n) } } },
            write: function(t) {
                var e = t.style;
                t.active ? e && Re(this.$el, e) : this.reset()
            },
            events: ["scroll", "resize"]
        }
    };
    var co = {
        update: {
            write: function() {
                var t;
                this.stack.length || this.dragging || (t = this.getValidIndex(this.index), ~this.prevIndex && this.index === t || this.show(t))
            },
            events: ["resize"]
        }
    };

    function lo(t, e, n) { var i, r = go(t, e); return n ? r - (i = t, an(e).width / 2 - an(i).width / 2) : Math.min(r, fo(e)) }

    function fo(t) { return Math.max(0, po(t) - an(t).width) }

    function po(t) { return vo(t).reduce(function(t, e) { return an(e).width + t }, 0) }

    function go(t, e) { return (un(t).left + (lt ? an(t).width - an(e).width : 0)) * (lt ? -1 : 1) }

    function mo(t, e, n) { Kt(t, Zt(e, !1, !1, n)) }

    function vo(t) { return Yt(t) }
    var wo = {
            mixins: [pi, Kr, co],
            props: { center: Boolean, sets: Boolean },
            data: {
                center: !1,
                sets: !1,
                attrItem: "uk-slider-item",
                selList: ".uk-slider-items",
                selNav: ".uk-slider-nav",
                clsContainer: "uk-slider-container",
                Transitioner: function(o, s, a, t) {
                    var e = t.center,
                        h = t.easing,
                        u = t.list,
                        c = new se,
                        n = o ? lo(o, u, e) : lo(s, u, e) + an(s).width * a,
                        l = s ? lo(s, u, e) : n + an(o).width * a * (lt ? -1 : 1);
                    return {
                        dir: a,
                        show: function(t, e, n) {
                            void 0 === e && (e = 0);
                            var i = n ? "linear" : h;
                            t -= Math.round(t * tt(e, -1, 1)), this.translate(e), o && this.updateTranslates(), e = o ? e : tt(e, 0, 1), mo(this.getItemIn(), "itemin", { percent: e, duration: t, timing: i, dir: a }), o && mo(this.getItemIn(!0), "itemout", { percent: 1 - e, duration: t, timing: i, dir: a });
                            var r = ge(s) / 1e4;
                            return Qe.start(u, { transform: Yr((r - l) * (lt ? -1 : 1), "px") }, t, i).then(c.resolve, et), c.promise
                        },
                        stop: function() { return Qe.stop(u) },
                        cancel: function() { Qe.cancel(u) },
                        reset: function() { Re(u, "transform", "") },
                        forward: function(t, e) { return void 0 === e && (e = this.percent()), Qe.cancel(u), this.show(t, e, !0) },
                        translate: function(t) {
                            var e = this.getDistance() * a * (lt ? -1 : 1);
                            Re(u, "transform", Yr(tt(e - e * t - l, -po(u), an(u).width) * (lt ? -1 : 1), "px")), this.updateTranslates(), o && (t = tt(t, -1, 1), mo(this.getItemIn(), "itemtranslatein", { percent: t, dir: a }), mo(this.getItemIn(!0), "itemtranslateout", { percent: 1 - t, dir: a }))
                        },
                        percent: function() { return Math.abs((Re(u, "transform").split(",")[4] * (lt ? -1 : 1) + n) / (l - n)) },
                        getDistance: function() { return Math.abs(l - n) },
                        getItemIn: function(t) {
                            void 0 === t && (t = !1);
                            var e = this.getActives(),
                                n = Z(vo(u), "offsetLeft"),
                                i = ge(n, e[0 < a * (t ? -1 : 1) ? e.length - 1 : 0]);
                            return ~i && n[i + (o && !t ? a : 0)]
                        },
                        getActives: function() { var n = lo(o || s, u, e); return Z(vo(u).filter(function(t) { var e = go(t, u); return n <= e && e + an(t).width <= an(u).width + n }), "offsetLeft") },
                        updateTranslates: function() {
                            var n = this.getActives();
                            vo(u).forEach(function(t) {
                                var e = b(n, t);
                                mo(t, "itemtranslate" + (e ? "in" : "out"), { percent: e ? 1 : 0, dir: t.offsetLeft <= s.offsetLeft ? 1 : -1 })
                            })
                        }
                    }
                }
            },
            computed: {
                avgWidth: function() { return po(this.list) / this.length },
                finite: function(t) { return t.finite || Math.ceil(po(this.list)) < an(this.list).width + vo(this.list).reduce(function(t, e) { return Math.max(t, an(e).width) }, 0) + this.center },
                maxIndex: function() {
                    if (!this.finite || this.center && !this.sets) return this.length - 1;
                    if (this.center) return J(this.sets);
                    Re(this.slides, "order", "");
                    for (var t = fo(this.list), e = this.length; e--;)
                        if (go(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                    return 0
                },
                sets: function(t) {
                    var o = this,
                        e = t.sets,
                        s = an(this.list).width / (this.center ? 2 : 1),
                        a = 0,
                        h = s,
                        u = 0;
                    return !O(e = e && this.slides.reduce(function(t, e, n) { var i, r = an(e).width; return a < u + r && (!o.center && n > o.maxIndex && (n = o.maxIndex), b(t, n) || (i = o.slides[n + 1], o.center && i && r < h - an(i).width / 2 ? h -= r : (h = s, t.push(n), a = u + s + (o.center ? r / 2 : 0)))), u += r, t }, [])) && e
                },
                transitionOptions: function() { return { center: this.center, list: this.list } }
            },
            connected: function() { Le(this.$el, this.clsContainer, !Ne("." + this.clsContainer, this.$el)) },
            update: {
                write: function() {
                    var n = this;
                    Me("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function(t) {
                        var e = ht(t, n.attrItem);
                        n.maxIndex && Le(t, "uk-hidden", P(e) && (n.sets && !b(n.sets, F(e)) || e > n.maxIndex))
                    }), !this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1));
                    var e = this._getTransitioner(this.index).getActives();
                    this.slides.forEach(function(t) { return Le(t, n.clsActive, b(e, t)) }), this.sets && !b(this.sets, F(this.index)) || this.slides.forEach(function(t) { return Le(t, n.clsActivated, b(e, t)) })
                },
                events: ["resize"]
            },
            events: {
                beforeitemshow: function(t) {
                    !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
                    var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                    if (!this.dragging && 1 < e) {
                        for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                        t.preventDefault()
                    } else this.duration = Zr(this.avgWidth / this.velocity) * (an(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
                },
                itemshow: function() {~this.prevIndex && ze(this._getTransitioner().getItemIn(), this.clsActive) }
            },
            methods: {
                reorder: function() {
                    var n = this;
                    if (this.finite) Re(this.slides, "order", "");
                    else {
                        var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                        if (this.slides.forEach(function(t, e) { return Re(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "") }), this.center)
                            for (var t = this.slides[i], e = an(this.list).width / 2 - an(t).width / 2, r = 0; 0 < e;) {
                                var o = this.getIndex(--r + i, i),
                                    s = this.slides[o];
                                Re(s, "order", i < o ? -2 : -1), e -= an(s).width
                            }
                    }
                },
                getValidIndex: function(t, e) {
                    if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                    var n;
                    do {
                        if (b(this.sets, t)) return t;
                        n = t, t = this.getIndex(t + this.dir, e)
                    } while (t !== n);
                    return t
                }
            }
        },
        bo = {
            mixins: [ao],
            data: { selItem: "!li" },
            computed: { item: function(t, e) { return yt(t.selItem, e) } },
            events: [{ name: "itemshown", self: !0, el: function() { return this.item }, handler: function() { Re(this.$el, this.getCss(.5)) } }, {
                name: "itemin itemout",
                self: !0,
                el: function() { return this.item },
                handler: function(t) {
                    var e = t.type,
                        n = t.detail,
                        i = n.percent,
                        r = n.duration,
                        o = n.timing,
                        s = n.dir;
                    Qe.cancel(this.$el), Re(this.$el, this.getCss(yo(e, s, i))), Qe.start(this.$el, this.getCss(xo(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(et)
                }
            }, { name: "transitioncanceled transitionend", self: !0, el: function() { return this.item }, handler: function() { Qe.cancel(this.$el) } }, {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el: function() { return this.item },
                handler: function(t) {
                    var e = t.type,
                        n = t.detail,
                        i = n.percent,
                        r = n.dir;
                    Qe.cancel(this.$el), Re(this.$el, this.getCss(yo(e, r, i)))
                }
            }]
        };

    function xo(t) { return u(t, "in") }

    function yo(t, e, n) { return n /= 2, xo(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n }
    var ko, $o, Io = G({}, qr, { fade: { show: function() { return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }] }, percent: function(t) { return 1 - Re(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }] } }, scale: { show: function() { return [{ opacity: 0, transform: Xr(1.5), zIndex: 0 }, { zIndex: -1 }] }, percent: function(t) { return 1 - Re(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, transform: Xr(1 + .5 * t), zIndex: 0 }, { zIndex: -1 }] } }, pull: { show: function(t) { return t < 0 ? [{ transform: Yr(30), zIndex: -1 }, { transform: Yr(), zIndex: 0 }] : [{ transform: Yr(-100), zIndex: 0 }, { transform: Yr(), zIndex: -1 }] }, percent: function(t, e, n) { return n < 0 ? 1 - Ur(e) : Ur(t) }, translate: function(t, e) { return e < 0 ? [{ transform: Yr(30 * t), zIndex: -1 }, { transform: Yr(-100 * (1 - t)), zIndex: 0 }] : [{ transform: Yr(100 * -t), zIndex: 0 }, { transform: Yr(30 * (1 - t)), zIndex: -1 }] } }, push: { show: function(t) { return t < 0 ? [{ transform: Yr(100), zIndex: 0 }, { transform: Yr(), zIndex: -1 }] : [{ transform: Yr(-30), zIndex: -1 }, { transform: Yr(), zIndex: 0 }] }, percent: function(t, e, n) { return 0 < n ? 1 - Ur(e) : Ur(t) }, translate: function(t, e) { return e < 0 ? [{ transform: Yr(100 * t), zIndex: 0 }, { transform: Yr(-30 * (1 - t)), zIndex: -1 }] : [{ transform: Yr(-30 * t), zIndex: -1 }, { transform: Yr(100 * (1 - t)), zIndex: 0 }] } } }),
        So = {
            mixins: [pi, Qr, co],
            props: { ratio: String, minHeight: Number, maxHeight: Number },
            data: { ratio: "16:9", minHeight: !1, maxHeight: !1, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: Io },
            update: {
                read: function() {
                    var t = this.ratio.split(":").map(Number),
                        e = t[0],
                        n = (n = t[1]) * this.list.offsetWidth / e || 0;
                    return this.minHeight && (n = Math.max(this.minHeight, n)), this.maxHeight && (n = Math.min(this.maxHeight, n)), { height: n - pn(this.list, "height", "content-box") }
                },
                write: function(t) {
                    var e = t.height;
                    0 < e && Re(this.list, "minHeight", e)
                },
                events: ["resize"]
            }
        },
        To = {
            mixins: [pi, Or],
            props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String },
            data: { group: !1, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: !1, pos: {} },
            created: function() {
                var n = this;
                ["init", "start", "move", "end"].forEach(function(t) {
                    var e = n[t];
                    n[t] = function(t) { G(n.pos, oe(t)), e(t) }
                })
            },
            events: { name: gt, passive: !1, handler: "init" },
            computed: { target: function() { return (this.$el.tBodies || [this.$el])[0] }, items: function() { return Yt(this.target) }, isEmpty: { get: function() { return O(this.items) }, watch: function(t) { Le(this.target, this.clsEmpty, t) }, immediate: !0 }, handles: { get: function(t, e) { var n = t.handle; return n ? Me(n, e) : this.items }, watch: function(t, e) { Re(e, { touchAction: "", userSelect: "" }), Re(t, { touchAction: pt ? "none" : "", userSelect: "none" }) }, immediate: !0 } },
            update: {
                write: function() {
                    if (this.drag && Pt(this.placeholder)) {
                        var t = this.pos,
                            e = t.x,
                            n = t.y,
                            i = this.origin,
                            r = i.offsetTop,
                            o = i.offsetLeft,
                            s = this.drag,
                            a = s.offsetHeight,
                            h = s.offsetWidth,
                            u = an(window),
                            c = u.right,
                            l = u.bottom,
                            d = document.elementFromPoint(e, n);
                        Re(this.drag, { top: tt(n - r, 0, l - a), left: tt(e - o, 0, c - h) });
                        var f = this.getSortable(d),
                            p = this.getSortable(this.placeholder),
                            g = f !== p;
                        if (f && !qt(d, this.placeholder) && (!g || f.group && f.group === p.group)) {
                            if (d = f.target === d.parentNode && d || f.items.filter(function(t) { return qt(d, t) })[0], g) p.remove(this.placeholder);
                            else if (!d) return;
                            f.insert(this.placeholder, d), b(this.touched, f) || this.touched.push(f)
                        }
                    }
                },
                events: ["move"]
            },
            methods: {
                init: function(t) {
                    var e = t.target,
                        n = t.button,
                        i = t.defaultPrevented,
                        r = this.items.filter(function(t) { return qt(e, t) })[0];
                    !r || i || 0 < n || Vt(e) || qt(e, "." + this.clsNoDrag) || this.handle && !qt(e, this.handle) || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = G({ target: e, index: ge(r) }, this.pos), Xt(document, mt, this.move), Xt(document, vt, this.end), this.threshold || this.start(t))
                },
                start: function(t) {
                    var e, n, i;
                    this.drag = (e = this.$container, n = this.placeholder, (i = be(e, n.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"))).style.setProperty("margin", "0", "important"), Re(i, G({ boxSizing: "border-box", width: n.offsetWidth, height: n.offsetHeight, overflow: "hidden" }, Re(n, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), ln(i.firstElementChild, ln(n.firstElementChild)), i);
                    var r, o, s = this.placeholder.getBoundingClientRect(),
                        a = s.left,
                        h = s.top;
                    G(this.origin, { offsetLeft: this.pos.x - a, offsetTop: this.pos.y - h }), ze(this.drag, this.clsDrag, this.clsCustom), ze(this.placeholder, this.clsPlaceholder), ze(this.items, this.clsItem), ze(document.documentElement, this.clsDragState), Kt(this.$el, "start", [this, this.placeholder]), r = this.pos, o = Date.now(), ko = setInterval(function() {
                        var t = r.x,
                            a = r.y;
                        a += window.pageYOffset;
                        var h = .3 * (Date.now() - o);
                        o = Date.now(), Xn(document.elementFromPoint(t, r.y)).some(function(t) {
                            var e = t.scrollTop,
                                n = t.scrollHeight,
                                i = an(Gn(t)),
                                r = i.top,
                                o = i.bottom,
                                s = i.height;
                            if (r < a && a < r + 30) e -= h;
                            else {
                                if (!(a < o && o - 30 < a)) return;
                                e += h
                            }
                            if (0 < e && e < n - s) return qn(t, e), !0
                        })
                    }, 15), this.move(t)
                },
                move: function(t) { this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t) },
                end: function(t) {
                    var e, n;
                    Gt(document, mt, this.move), Gt(document, vt, this.end), Gt(window, "scroll", this.scroll), this.drag && (clearInterval(ko), e = this.getSortable(this.placeholder), this === e ? this.origin.index !== ge(this.placeholder) && Kt(this.$el, "moved", [this, this.placeholder]) : (Kt(e.$el, "added", [e, this.placeholder]), Kt(this.$el, "removed", [this, this.placeholder])), Kt(this.$el, "stop", [this, this.placeholder]), $e(this.drag), this.drag = null, n = this.touched.map(function(t) { return t.clsPlaceholder + " " + t.clsItem }).join(" "), this.touched.forEach(function(t) { return Be(t.items, n) }), Be(document.documentElement, this.clsDragState))
                },
                insert: function(n, i) {
                    var r = this;
                    ze(this.items, this.clsItem);

                    function t() {
                        var t, e;
                        i ? (!qt(n, r.target) || (e = i, (t = n).parentNode === e.parentNode && ge(t) > ge(e)) ? xe : ye)(i, n) : be(r.target, n)
                    }
                    this.animation ? this.animate(t) : t()
                },
                remove: function(t) { qt(t, this.target) && (this.animation ? this.animate(function() { return $e(t) }) : $e(t)) },
                getSortable: function(t) { return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode)) }
            }
        };
    var Eo = [],
        _o = {
            mixins: [lr, gi, $i],
            args: "title",
            props: { delay: Number, title: String },
            data: { pos: "top", title: "", delay: 0, animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active", clsPos: "uk-tooltip" },
            beforeConnect: function() { this._hasTitle = st(this.$el, "title"), ot(this.$el, { title: "", "aria-expanded": !1 }) },
            disconnected: function() { this.hide(), ot(this.$el, { title: this._hasTitle ? this.title : null, "aria-expanded": null }) },
            methods: {
                show: function() { var e = this;!this.isActive() && this.title && (Eo.forEach(function(t) { return t.hide() }), Eo.push(this), this._unbind = Xt(document, vt, function(t) { return !qt(t.target, e.$el) && e.hide() }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay)) },
                hide: function() {
                    var t = this;
                    this.isActive() && !Dt(this.$el, "input:focus") && this.toggleElement(this.tooltip, !1, !1).then(function() { Eo.splice(Eo.indexOf(t), 1), clearTimeout(t.showTimer), t.tooltip = $e(t.tooltip), t._unbind() })
                },
                _show: function() {
                    var e = this;
                    this.tooltip = be(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), Xt(this.tooltip, "toggled", function() {
                        var t = e.isToggled(e.tooltip);
                        ot(e.$el, "aria-expanded", t), t && (e.positionAt(e.tooltip, e.$el), e.origin = "y" === e.getAxis() ? wn(e.dir) + "-" + e.align : e.align + "-" + wn(e.dir))
                    }), this.toggleElement(this.tooltip, !0)
                },
                isActive: function() { return b(Eo, this) }
            },
            events: (($o = { focus: "show", blur: "hide" })[wt + " " + bt] = function(t) { re(t) || (t.type === wt ? this.show() : this.hide()) }, $o[gt] = function(t) { re(t) && (this.isActive() ? this.hide() : this.show()) }, $o)
        },
        Co = {
            props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, method: String, mime: String, msgInvalidMime: String, msgInvalidName: String, msgInvalidSize: String, multiple: Boolean, name: String, params: Object, type: String, url: String },
            data: { allow: !1, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, method: "POST", mime: !1, msgInvalidMime: "Invalid File Type: %s", msgInvalidName: "Invalid File Name: %s", msgInvalidSize: "Invalid File Size: %s Kilobytes Max", multiple: !1, name: "files[]", params: {}, type: "", url: "", abort: et, beforeAll: et, beforeSend: et, complete: et, completeAll: et, error: et, fail: et, load: et, loadEnd: et, loadStart: et, progress: et },
            events: {
                change: function(t) { Dt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "") },
                drop: function(t) {
                    No(t);
                    var e = t.dataTransfer;
                    e && e.files && (Be(this.$el, this.clsDragover), this.upload(e.files))
                },
                dragenter: function(t) { No(t) },
                dragover: function(t) { No(t), ze(this.$el, this.clsDragover) },
                dragleave: function(t) { No(t), Be(this.$el, this.clsDragover) }
            },
            methods: {
                upload: function(t) {
                    var i = this;
                    if (t.length) {
                        Kt(this.$el, "upload", [t]);
                        for (var e = 0; e < t.length; e++) { if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize)); if (this.allow && !Ao(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow)); if (this.mime && !Ao(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime)) }
                        this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                        var r = function(t, e) {
                                for (var n = [], i = 0; i < t.length; i += e) {
                                    for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                                    n.push(r)
                                }
                                return n
                            }(t, this.concurrent),
                            o = function(t) {
                                var e, n = new FormData;
                                for (e in t.forEach(function(t) { return n.append(i.name, t) }), i.params) n.append(e, i.params[e]);
                                de(i.url, {
                                    data: n,
                                    method: i.method,
                                    responseType: i.type,
                                    beforeSend: function(t) {
                                        var e = t.xhr;
                                        e.upload && Xt(e.upload, "progress", i.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function(t) { return Xt(e, t.toLowerCase(), i[t]) }), i.beforeSend(t)
                                    }
                                }).then(function(t) { i.complete(t), r.length ? o(r.shift()) : i.completeAll(t) }, function(t) { return i.error(t) })
                            };
                        o(r.shift())
                    }
                }
            }
        };

    function Ao(t, e) { return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i")) }

    function No(t) { t.preventDefault(), t.stopPropagation() }
    return K(Object.freeze({ __proto__: null, Countdown: zr, Filter: Fr, Lightbox: io, LightboxPanel: to, Notification: oo, Parallax: uo, Slider: wo, SliderParallax: bo, Slideshow: So, SlideshowParallax: bo, Sortable: To, Tooltip: _o, Upload: Co }), function(t, e) { return ti.component(e, t) }), ti
});
/*! UIkit 3.5.8 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define('uikiticons', factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIkitIcons = factory());
}(this, (function() {
    'use strict';

    function plugin(UIkit) {

        if (plugin.installed) {
            return;
        }

        UIkit.icon.add({
            "500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\"/><path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\"/><path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\"/><path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\"/></svg>",
            "album": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5\" y=\"2\" width=\"10\" height=\"1\"/><rect x=\"3\" y=\"4\" width=\"14\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\"/></svg>",
            "arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\"/></svg>",
            "arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\"/><line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\"/></svg>",
            "arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\"/><line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\"/></svg>",
            "arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\"/></svg>",
            "ban": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\"/></svg>",
            "behance": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\"/><path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\"/><rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\"/></svg>",
            "bell": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\"/></svg>",
            "bold": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\"/></svg>",
            "bolt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\"/></svg>",
            "bookmark": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\"/></svg>",
            "calendar": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\"/><rect width=\"1\" height=\"3\" x=\"6\" y=\"2\"/><rect width=\"1\" height=\"3\" x=\"13\" y=\"2\"/></svg>",
            "camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\"/><path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\"/></svg>",
            "cart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/><circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/><polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/></svg>",
            "check": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\"/></svg>",
            "chevron-double-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 14 6 10 10 6\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"14 14 10 10 14 6\"/></svg>",
            "chevron-double-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 6 14 10 10 14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"6 6 10 10 6 14\"/></svg>",
            "chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\"/></svg>",
            "chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\"/></svg>",
            "chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\"/></svg>",
            "chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\"/></svg>",
            "clock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
            "close": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\"/></svg>",
            "cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
            "cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
            "code": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\"/></svg>",
            "cog": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\"/><path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\"/></svg>",
            "comment": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\"/></svg>",
            "commenting": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\"/><circle cx=\"10\" cy=\"8\" r=\"1\"/><circle cx=\"6\" cy=\"8\" r=\"1\"/><circle cx=\"14\" cy=\"8\" r=\"1\"/></svg>",
            "comments": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\"/><path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\"/></svg>",
            "copy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/><polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/></svg>",
            "credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"3\"/></svg>",
            "database": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\"/></svg>",
            "desktop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"11\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"16\" width=\"10\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\"/></svg>",
            "download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\"/></svg>",
            "dribbble": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
            "etsy": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z\"/></svg>",
            "expand": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\"/><polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\"/></svg>",
            "facebook": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\"/></svg>",
            "file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\"/><polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\"/></svg>",
            "file-pdf": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><path d=\"M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z\"/></svg>",
            "file-text": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"12\" y1=\"12.5\" y2=\"12.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"8.5\" y2=\"8.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"6.5\" y2=\"6.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"10.5\" y2=\"10.5\"/></svg>",
            "file": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\"/></svg>",
            "flickr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\"/><circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\"/></svg>",
            "folder": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\"/></svg>",
            "forward": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\"/></svg>",
            "foursquare": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\"/></svg>",
            "future": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\"/></svg>",
            "git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\"/></svg>",
            "git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" r=\"1.79\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\"/></svg>",
            "github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\"/></svg>",
            "github": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\"/></svg>",
            "gitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\"/><rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\"/><rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\"/><rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\"/></svg>",
            "google-plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z\"/><polygon points=\"20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9\"/></svg>",
            "google": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\"/></svg>",
            "grid": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"/></svg>",
            "happy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"1\"/><circle cx=\"7\" cy=\"7\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\"/></svg>",
            "hashtag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\"/></svg>",
            "heart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/></svg>",
            "history": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
            "home": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\"/><polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\"/><polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\"/></svg>",
            "image": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"2.5\" width=\"19\" height=\"15\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\"/></svg>",
            "info": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
            "instagram": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\"/><circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\"/><path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\"/></svg>",
            "italic": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\"/></svg>",
            "joomla": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\"/><path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\"/><path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\"/><path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\"/></svg>",
            "laptop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"16\" width=\"20\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\"/></svg>",
            "lifesaver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\"/></svg>",
            "link": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\"/></svg>",
            "linkedin": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\"/><path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\"/></svg>",
            "list": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"9\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"14\" width=\"12\" height=\"1\"/><rect x=\"2\" y=\"4\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"2\" height=\"1\"/></svg>",
            "location": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\"/></svg>",
            "lock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\"/></svg>",
            "mail": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\"/><path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\"/></svg>",
            "menu": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"4\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"16\" height=\"1\"/></svg>",
            "microphone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" x1=\"10\" x2=\"10\" y1=\"16.44\" y2=\"18.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"7\" x2=\"13\" y1=\"18.5\" y2=\"18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6\"/></svg>",
            "minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
            "minus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect height=\"1\" width=\"18\" y=\"9\" x=\"1\"/></svg>",
            "more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"3\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"17\" r=\"2\"/></svg>",
            "more": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"17\" cy=\"10\" r=\"2\"/></svg>",
            "move": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6\"/><polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19\"/><polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16\"/><rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\"/><rect x=\"1\" y=\"11\" width=\"1\" height=\"3\"/><rect x=\"6\" y=\"18\" width=\"3\" height=\"1\"/></svg>",
            "nut": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\"/></svg>",
            "pagekit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19\"/></svg>",
            "paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\"/><path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\"/></svg>",
            "pencil": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\"/></svg>",
            "phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\"/><circle cx=\"3.8\" cy=\"10.5\" r=\".8\"/></svg>",
            "phone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\"/><circle cx=\"10.5\" cy=\"16.5\" r=\".8\"/></svg>",
            "pinterest": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\"/></svg>",
            "play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
            "play": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\"/></svg>",
            "plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
            "plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"1\" width=\"1\" height=\"17\"/><rect x=\"1\" y=\"9\" width=\"17\" height=\"1\"/></svg>",
            "print": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5\"/><rect fill=\"none\" stroke=\"#000\" width=\"11\" height=\"6\" x=\"4.5\" y=\"11.5\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"13\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"15\"/></svg>",
            "pull": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\"/></svg>",
            "push": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\"/></svg>",
            "question": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\"/></svg>",
            "quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\"/><path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\"/></svg>",
            "receiver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\"/></svg>",
            "reddit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z\"/><path d=\"M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z\"/><path d=\"M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z\"/><path d=\"M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z\"/></svg>",
            "refresh": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\"/></svg>",
            "reply": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\"/></svg>",
            "rss": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\"/></svg>",
            "search": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>",
            "server": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"7\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"16\" y=\"3\" width=\"1\" height=\"1\"/><rect x=\"16\" y=\"10\" width=\"1\" height=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\"/><rect x=\"3\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\"/><rect x=\"3\" y=\"17\" width=\"6\" height=\"1\"/><rect x=\"11\" y=\"17\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\"/></svg>",
            "settings": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\"/><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\"/><circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\"/><rect x=\"1\" y=\"3\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"3\" width=\"8\" height=\"1\"/><rect x=\"1\" y=\"9\" width=\"8\" height=\"1\"/><rect x=\"15\" y=\"9\" width=\"3\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"15\" width=\"8\" height=\"1\"/></svg>",
            "shrink": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\"/><polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\"/></svg>",
            "sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\"/><polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\"/></svg>",
            "sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\"/><polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\"/></svg>",
            "social": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\"/></svg>",
            "soundcloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\"/><rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\"/><rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\"/><rect y=\"10\" width=\"1.5\" height=\"5\"/></svg>",
            "star": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\"/></svg>",
            "strikethrough": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\"/><rect x=\"3\" y=\"10\" width=\"15\" height=\"1\"/></svg>",
            "table": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"3\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"11\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"18\" height=\"1\"/></svg>",
            "tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\"/><circle cx=\"3.7\" cy=\"10.5\" r=\".8\"/></svg>",
            "tablet": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\"/><circle cx=\"10.5\" cy=\"16.3\" r=\".8\"/></svg>",
            "tag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\"/><circle cx=\"14\" cy=\"6\" r=\"1\"/></svg>",
            "thumbnails": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\"/></svg>",
            "trash": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\"/><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\"/><rect x=\"8\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"11\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"2\" y=\"3\" width=\"16\" height=\"1\"/></svg>",
            "triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 7 15 7 10 12\"/></svg>",
            "triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12 5 7 10 12 15\"/></svg>",
            "triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"8 5 13 10 8 15\"/></svg>",
            "triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 13 10 8 15 13\"/></svg>",
            "tripadvisor": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\"/></svg>",
            "tumblr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\"/></svg>",
            "tv": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"7\" y=\"16\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"3.5\" width=\"19\" height=\"11\"/></svg>",
            "twitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\"/></svg>",
            "uikit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\"/><polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\"/></svg>",
            "unlock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\"/></svg>",
            "upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\"/></svg>",
            "user": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\"/></svg>",
            "users": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\"/></svg>",
            "video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9\"/></svg>",
            "vimeo": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\"/></svg>",
            "warning": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"14\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\"/></svg>",
            "whatsapp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\"/></svg>",
            "wordpress": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\"/></svg>",
            "world": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\"/></svg>",
            "xing": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\"/><path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\"/></svg>",
            "yelp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\"/></svg>",
            "youtube": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\"/></svg>"
        });

    }

    if (typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin);
    }

    return plugin;

})));

(function(factory) {
    /* global define */
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    'use strict';

    var $doc = $(document);
    var $win = $(window);

    var pluginName = 'selectric';
    var classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel';
    var eventNamespaceSuffix = '.sl';

    var chars = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'];
    var diacritics = [
        /[\xE0-\xE5]/g, // a
        /[\xE8-\xEB]/g, // e
        /[\xEC-\xEF]/g, // i
        /[\xF2-\xF6]/g, // o
        /[\xF9-\xFC]/g, // u
        /[\xF1]/g, // n
        /[\xE7]/g, // c
        /[\xFD-\xFF]/g // y
    ];

    /**
     * Create an instance of Selectric
     *
     * @constructor
     * @param {Node} element - The &lt;select&gt; element
     * @param {object}  opts - Options
     */
    var Selectric = function(element, opts) {
        var _this = this;

        _this.element = element;
        _this.$element = $(element);

        _this.state = {
            multiple: !!_this.$element.attr('multiple'),
            enabled: false,
            opened: false,
            currValue: -1,
            selectedIdx: -1,
            highlightedIdx: -1
        };

        _this.eventTriggers = {
            open: _this.open,
            close: _this.close,
            destroy: _this.destroy,
            refresh: _this.refresh,
            init: _this.init
        };

        _this.init(opts);
    };

    Selectric.prototype = {
        utils: {
            /**
             * Detect mobile browser
             *
             * @return {boolean}
             */
            isMobile: function() {
                return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
            },

            /**
             * Escape especial characters in string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
             *
             * @param  {string} str - The string to be escaped
             * @return {string}       The string with the special characters escaped
             */
            escapeRegExp: function(str) {
                return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
            },

            /**
             * Replace diacritics
             *
             * @param  {string} str - The string to replace the diacritics
             * @return {string}       The string with diacritics replaced with ascii characters
             */
            replaceDiacritics: function(str) {
                var k = diacritics.length;

                while (k--) {
                    str = str.toLowerCase().replace(diacritics[k], chars[k]);
                }

                return str;
            },

            /**
             * Format string
             * https://gist.github.com/atesgoral/984375
             *
             * @param  {string} f - String to be formated
             * @return {string}     String formated
             */
            format: function(f) {
                var a = arguments; // store outer arguments
                return ('' + f) // force format specifier to String
                    .replace( // replace tokens in format specifier
                        /\{(?:(\d+)|(\w+))\}/g, // match {token} references
                        function(
                            s, // the matched string (ignored)
                            i, // an argument index
                            p // a property name
                        ) {
                            return p && a[1] // if property name and first argument exist
                                ?
                                a[1][p] // return property from first argument
                                :
                                a[i]; // assume argument index and return i-th argument
                        });
            },

            /**
             * Get the next enabled item in the options list.
             *
             * @param  {object} selectItems - The options object.
             * @param  {number}    selected - Index of the currently selected option.
             * @return {object}               The next enabled item.
             */
            nextEnabledItem: function(selectItems, selected) {
                while (selectItems[selected = (selected + 1) % selectItems.length].disabled) {
                    // empty
                }
                return selected;
            },

            /**
             * Get the previous enabled item in the options list.
             *
             * @param  {object} selectItems - The options object.
             * @param  {number}    selected - Index of the currently selected option.
             * @return {object}               The previous enabled item.
             */
            previousEnabledItem: function(selectItems, selected) {
                while (selectItems[selected = (selected > 0 ? selected : selectItems.length) - 1].disabled) {
                    // empty
                }
                return selected;
            },

            /**
             * Transform camelCase string to dash-case.
             *
             * @param  {string} str - The camelCased string.
             * @return {string}       The string transformed to dash-case.
             */
            toDash: function(str) {
                return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
            },

            /**
             * Calls the events registered with function name.
             *
             * @param {string}    fn - The name of the function.
             * @param {number} scope - Scope that should be set on the function.
             */
            triggerCallback: function(fn, scope) {
                var elm = scope.element;
                var func = scope.options['on' + fn];
                var args = [elm].concat([].slice.call(arguments).slice(1));

                if ($.isFunction(func)) {
                    func.apply(elm, args);
                }

                $(elm).trigger(pluginName + '-' + this.toDash(fn), args);
            },

            /**
             * Transform array list to concatenated string and remove empty values
             * @param  {array} arr - Class list
             * @return {string}      Concatenated string
             */
            arrayToClassname: function(arr) {
                var newArr = $.grep(arr, function(item) {
                    return !!item;
                });

                return $.trim(newArr.join(' '));
            }
        },

        /** Initializes */
        init: function(opts) {
            var _this = this;

            // Set options
            _this.options = $.extend(true, {}, $.fn[pluginName].defaults, _this.options, opts);

            _this.utils.triggerCallback('BeforeInit', _this);

            // Preserve data
            _this.destroy(true);

            // Disable on mobile browsers
            if (_this.options.disableOnMobile && _this.utils.isMobile()) {
                _this.disableOnMobile = true;
                return;
            }

            // Get classes
            _this.classes = _this.getClassNames();

            // Create elements
            var input = $('<input/>', { 'class': _this.classes.input, 'readonly': _this.utils.isMobile() });
            var items = $('<div/>', { 'class': _this.classes.items, 'tabindex': -1 });
            var itemsScroll = $('<div/>', { 'class': _this.classes.scroll });
            var wrapper = $('<div/>', { 'class': _this.classes.prefix, 'html': _this.options.arrowButtonMarkup });
            var label = $('<span/>', { 'class': 'label' });
            var outerWrapper = _this.$element.wrap('<div/>').parent().append(wrapper.prepend(label), items, input);
            var hideSelectWrapper = $('<div/>', { 'class': _this.classes.hideselect });

            _this.elements = {
                input: input,
                items: items,
                itemsScroll: itemsScroll,
                wrapper: wrapper,
                label: label,
                outerWrapper: outerWrapper
            };

            if (_this.options.nativeOnMobile && _this.utils.isMobile()) {
                _this.elements.input = undefined;
                hideSelectWrapper.addClass(_this.classes.prefix + '-is-native');

                _this.$element.on('change', function() {
                    _this.refresh();
                });
            }

            _this.$element
                .on(_this.eventTriggers)
                .wrap(hideSelectWrapper);

            _this.originalTabindex = _this.$element.prop('tabindex');
            _this.$element.prop('tabindex', -1);

            _this.populate();
            _this.activate();

            _this.utils.triggerCallback('Init', _this);
        },

        /** Activates the plugin */
        activate: function() {
            var _this = this;
            var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
            var originalWidth = _this.$element.width();

            hiddenChildren.removeClass(_this.classes.tempshow);

            _this.utils.triggerCallback('BeforeActivate', _this);

            _this.elements.outerWrapper.prop('class',
                _this.utils.arrayToClassname([
                    _this.classes.wrapper,
                    _this.$element.prop('class').replace(/\S+/g, _this.classes.prefix + '-$&'),
                    _this.options.responsive ? _this.classes.responsive : ''
                ])
            );

            if (_this.options.inheritOriginalWidth && originalWidth > 0) {
                _this.elements.outerWrapper.width(originalWidth);
            }

            _this.unbindEvents();

            if (!_this.$element.prop('disabled')) {
                _this.state.enabled = true;

                // Not disabled, so... Removing disabled class
                _this.elements.outerWrapper.removeClass(_this.classes.disabled);

                // Remove styles from items box
                // Fix incorrect height when refreshed is triggered with fewer options
                _this.$li = _this.elements.items.removeAttr('style').find('li');

                _this.bindEvents();
            } else {
                _this.elements.outerWrapper.addClass(_this.classes.disabled);

                if (_this.elements.input) {
                    _this.elements.input.prop('disabled', true);
                }
            }

            _this.utils.triggerCallback('Activate', _this);
        },

        /**
         * Generate classNames for elements
         *
         * @return {object} Classes object
         */
        getClassNames: function() {
            var _this = this;
            var customClass = _this.options.customClass;
            var classesObj = {};

            $.each(classList.split(' '), function(i, currClass) {
                var c = customClass.prefix + currClass;
                classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
            });

            classesObj.prefix = customClass.prefix;

            return classesObj;
        },

        /** Set the label text */
        setLabel: function() {
            var _this = this;
            var labelBuilder = _this.options.labelBuilder;

            if (_this.state.multiple) {
                // Make sure currentValues is an array
                var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [_this.state.currValue];
                // I'm not happy with this, but currentValues can be an empty
                // array and we need to fallback to the default option.
                currentValues = currentValues.length === 0 ? [0] : currentValues;

                var labelMarkup = $.map(currentValues, function(value) {
                    return $.grep(_this.lookupItems, function(item) {
                        return item.index === value;
                    })[0]; // we don't want nested arrays here
                });

                labelMarkup = $.grep(labelMarkup, function(item) {
                    // Hide default (please choose) if more then one element were selected.
                    // If no option value were given value is set to option text by default
                    if (labelMarkup.length > 1 || labelMarkup.length === 0) {
                        return $.trim(item.value) !== '';
                    }
                    return item;
                });

                labelMarkup = $.map(labelMarkup, function(item) {
                    return $.isFunction(labelBuilder) ?
                        labelBuilder(item) :
                        _this.utils.format(labelBuilder, item);
                });

                // Limit the amount of selected values shown in label
                if (_this.options.multiple.maxLabelEntries) {
                    if (labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1) {
                        labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries);
                        labelMarkup.push(
                            $.isFunction(labelBuilder) ?
                            labelBuilder({ text: '...' }) :
                            _this.utils.format(labelBuilder, { text: '...' }));
                    } else {
                        labelMarkup.slice(labelMarkup.length - 1);
                    }
                }
                _this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));

            } else {
                var currItem = _this.lookupItems[_this.state.currValue];

                _this.elements.label.html(
                    $.isFunction(labelBuilder) ?
                    labelBuilder(currItem) :
                    _this.utils.format(labelBuilder, currItem)
                );
            }
        },

        /** Get and save the available options */
        populate: function() {
            var _this = this;
            var $options = _this.$element.children();
            var $justOptions = _this.$element.find('option');
            var $selected = $justOptions.filter(':selected');
            var selectedIndex = $justOptions.index($selected);
            var currIndex = 0;
            var emptyValue = (_this.state.multiple ? [] : 0);

            if ($selected.length > 1 && _this.state.multiple) {
                selectedIndex = [];
                $selected.each(function() {
                    selectedIndex.push($(this).index());
                });
            }

            _this.state.currValue = (~selectedIndex ? selectedIndex : emptyValue);
            _this.state.selectedIdx = _this.state.currValue;
            _this.state.highlightedIdx = _this.state.currValue;
            _this.items = [];
            _this.lookupItems = [];

            if ($options.length) {
                // Build options markup
                $options.each(function(i) {
                    var $elm = $(this);

                    if ($elm.is('optgroup')) {

                        var optionsGroup = {
                            element: $elm,
                            label: $elm.prop('label'),
                            groupDisabled: $elm.prop('disabled'),
                            items: []
                        };

                        $elm.children().each(function(i) {
                            var $elm = $(this);

                            optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop('disabled'));

                            _this.lookupItems[currIndex] = optionsGroup.items[i];

                            currIndex++;
                        });

                        _this.items[i] = optionsGroup;

                    } else {

                        _this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop('disabled'));

                        _this.lookupItems[currIndex] = _this.items[i];

                        currIndex++;

                    }
                });

                _this.setLabel();
                _this.elements.items.append(_this.elements.itemsScroll.html(_this.getItemsMarkup(_this.items)));
            }
        },

        /**
         * Generate items object data
         * @param  {integer} index      - Current item index
         * @param  {node}    $elm       - Current element node
         * @param  {boolean} isDisabled - Current element disabled state
         * @return {object}               Item object
         */
        getItemData: function(index, $elm, isDisabled) {
            var _this = this;

            return {
                index: index,
                element: $elm,
                value: $elm.val(),
                className: $elm.prop('class'),
                text: $elm.html(),
                slug: $.trim(_this.utils.replaceDiacritics($elm.html())),
                alt: $elm.attr('data-alt'),
                selected: $elm.prop('selected'),
                disabled: isDisabled
            };
        },

        /**
         * Generate options markup
         *
         * @param  {object} items - Object containing all available options
         * @return {string}         HTML for the options box
         */
        getItemsMarkup: function(items) {
            var _this = this;
            var markup = '<ul>';

            if ($.isFunction(_this.options.listBuilder) && _this.options.listBuilder) {
                items = _this.options.listBuilder(items);
            }

            $.each(items, function(i, elm) {
                if (elm.label !== undefined) {

                    markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
                        _this.utils.arrayToClassname([
                            _this.classes.group,
                            elm.groupDisabled ? 'disabled' : '',
                            elm.element.prop('class')
                        ]),
                        _this.classes.grouplabel,
                        elm.element.prop('label')
                    );

                    $.each(elm.items, function(i, elm) {
                        markup += _this.getItemMarkup(elm.index, elm);
                    });

                    markup += '</ul>';

                } else {

                    markup += _this.getItemMarkup(elm.index, elm);

                }
            });

            return markup + '</ul>';
        },

        /**
         * Generate every option markup
         *
         * @param  {number} index    - Index of current item
         * @param  {object} itemData - Current item
         * @return {string}            HTML for the option
         */
        getItemMarkup: function(index, itemData) {
            var _this = this;
            var itemBuilder = _this.options.optionsItemBuilder;
            // limit access to item data to provide a simple interface
            // to most relevant options.
            var filteredItemData = {
                value: itemData.value,
                text: itemData.text,
                slug: itemData.slug,
                index: itemData.index
            };

            return _this.utils.format('<li data-index="{1}" class="{2}">{3}</li>',
                index,
                _this.utils.arrayToClassname([
                    itemData.className,
                    index === _this.items.length - 1 ? 'last' : '',
                    itemData.disabled ? 'disabled' : '',
                    itemData.selected ? 'selected' : ''
                ]),
                $.isFunction(itemBuilder) ?
                _this.utils.format(itemBuilder(itemData, this.$element, index), itemData) :
                _this.utils.format(itemBuilder, filteredItemData)
            );
        },

        /** Remove events on the elements */
        unbindEvents: function() {
            var _this = this;

            _this.elements.wrapper
                .add(_this.$element)
                .add(_this.elements.outerWrapper)
                .add(_this.elements.input)
                .off(eventNamespaceSuffix);
        },

        /** Bind events on the elements */
        bindEvents: function() {
            var _this = this;

            _this.elements.outerWrapper.on('mouseenter' + eventNamespaceSuffix + ' mouseleave' + eventNamespaceSuffix, function(e) {
                $(this).toggleClass(_this.classes.hover, e.type === 'mouseenter');

                // Delay close effect when openOnHover is true
                if (_this.options.openOnHover) {
                    clearTimeout(_this.closeTimer);

                    if (e.type === 'mouseleave') {
                        _this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout);
                    } else {
                        _this.open();
                    }
                }
            });

            // Toggle open/close
            _this.elements.wrapper.on('click' + eventNamespaceSuffix, function(e) {
                _this.state.opened ? _this.close() : _this.open(e);
            });

            // Translate original element focus event to dummy input.
            // Disabled on mobile devices because the default option list isn't
            // shown due the fact that hidden input gets focused
            if (!(_this.options.nativeOnMobile && _this.utils.isMobile())) {
                _this.$element.on('focus' + eventNamespaceSuffix, function() {
                    _this.elements.input.focus();
                });

                _this.elements.input
                    .prop({ tabindex: _this.originalTabindex, disabled: false })
                    .on('keydown' + eventNamespaceSuffix, $.proxy(_this.handleKeys, _this))
                    .on('focusin' + eventNamespaceSuffix, function(e) {
                        _this.elements.outerWrapper.addClass(_this.classes.focus);

                        // Prevent the flicker when focusing out and back again in the browser window
                        _this.elements.input.one('blur', function() {
                            _this.elements.input.blur();
                        });

                        if (_this.options.openOnFocus && !_this.state.opened) {
                            _this.open(e);
                        }
                    })
                    .on('focusout' + eventNamespaceSuffix, function() {
                        _this.elements.outerWrapper.removeClass(_this.classes.focus);
                    })
                    .on('input propertychange', function() {
                        var val = _this.elements.input.val();
                        var searchRegExp = new RegExp('^' + _this.utils.escapeRegExp(val), 'i');

                        // Clear search
                        clearTimeout(_this.resetStr);
                        _this.resetStr = setTimeout(function() {
                            _this.elements.input.val('');
                        }, _this.options.keySearchTimeout);

                        if (val.length) {
                            // Search in select options
                            $.each(_this.items, function(i, elm) {
                                if (elm.disabled) {
                                    return;
                                }
                                if (searchRegExp.test(elm.text) || searchRegExp.test(elm.slug)) {
                                    _this.highlight(i);
                                    return false;
                                }
                                if (!elm.alt) {
                                    return;
                                }
                                var altItems = elm.alt.split('|');
                                for (var ai = 0; ai < altItems.length; ai++) {
                                    if (!altItems[ai]) {
                                        break;
                                    }
                                    if (searchRegExp.test(altItems[ai].trim())) {
                                        _this.highlight(i);
                                        return false;
                                    }
                                }
                            });
                        }
                    });
            }

            _this.$li.on({
                // Prevent <input> blur on Chrome
                mousedown: function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                },
                click: function() {
                    _this.select($(this).data('index'));

                    // Chrome doesn't close options box if select is wrapped with a label
                    // We need to 'return false' to avoid that
                    return false;
                }
            });
        },

        /**
         * Behavior when keyboard keys is pressed
         *
         * @param {object} e - Event object
         */
        handleKeys: function(e) {
            var _this = this;
            var key = e.which;
            var keys = _this.options.keys;

            var isPrevKey = $.inArray(key, keys.previous) > -1;
            var isNextKey = $.inArray(key, keys.next) > -1;
            var isSelectKey = $.inArray(key, keys.select) > -1;
            var isOpenKey = $.inArray(key, keys.open) > -1;
            var idx = _this.state.highlightedIdx;
            var isFirstOrLastItem = (isPrevKey && idx === 0) || (isNextKey && (idx + 1) === _this.items.length);
            var goToItem = 0;

            // Enter / Space
            if (key === 13 || key === 32) {
                e.preventDefault();
            }

            // If it's a directional key
            if (isPrevKey || isNextKey) {
                if (!_this.options.allowWrap && isFirstOrLastItem) {
                    return;
                }

                if (isPrevKey) {
                    goToItem = _this.utils.previousEnabledItem(_this.lookupItems, idx);
                }

                if (isNextKey) {
                    goToItem = _this.utils.nextEnabledItem(_this.lookupItems, idx);
                }

                _this.highlight(goToItem);
            }

            // Tab / Enter / ESC
            if (isSelectKey && _this.state.opened) {
                _this.select(idx);

                if (!_this.state.multiple || !_this.options.multiple.keepMenuOpen) {
                    _this.close();
                }

                return;
            }

            // Space / Enter / Left / Up / Right / Down
            if (isOpenKey && !_this.state.opened) {
                _this.open();
            }
        },

        /** Update the items object */
        refresh: function() {
            var _this = this;

            _this.populate();
            _this.activate();
            _this.utils.triggerCallback('Refresh', _this);
        },

        /** Set options box width/height */
        setOptionsDimensions: function() {
            var _this = this;

            // Calculate options box height
            // Set a temporary class on the hidden parent of the element
            var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
            var maxHeight = _this.options.maxHeight;
            var itemsWidth = _this.elements.items.outerWidth();
            var wrapperWidth = _this.elements.wrapper.outerWidth() - (itemsWidth - _this.elements.items.width());

            // Set the dimensions, minimum is wrapper width, expand for long items if option is true
            if (!_this.options.expandToItemText || wrapperWidth > itemsWidth) {
                _this.finalWidth = wrapperWidth;
            } else {
                // Make sure the scrollbar width is included
                _this.elements.items.css('overflow', 'scroll');

                // Set a really long width for _this.elements.outerWrapper
                _this.elements.outerWrapper.width(9e4);
                _this.finalWidth = _this.elements.items.width();
                // Set scroll bar to auto
                _this.elements.items.css('overflow', '');
                _this.elements.outerWrapper.width('');
            }

            _this.elements.items.width(_this.finalWidth).height() > maxHeight && _this.elements.items.height(maxHeight);

            // Remove the temporary class
            hiddenChildren.removeClass(_this.classes.tempshow);
        },

        /** Detect if the options box is inside the window */
        isInViewport: function() {
            var _this = this;

            if (_this.options.forceRenderAbove === true) {
                _this.elements.outerWrapper.addClass(_this.classes.above);
            } else if (_this.options.forceRenderBelow === true) {
                _this.elements.outerWrapper.addClass(_this.classes.below);
            } else {
                var scrollTop = $win.scrollTop();
                var winHeight = $win.height();
                var uiPosX = _this.elements.outerWrapper.offset().top;
                var uiHeight = _this.elements.outerWrapper.outerHeight();

                var fitsDown = (uiPosX + uiHeight + _this.itemsHeight) <= (scrollTop + winHeight);
                var fitsAbove = (uiPosX - _this.itemsHeight) > scrollTop;

                // If it does not fit below, only render it
                // above it fit's there.
                // It's acceptable that the user needs to
                // scroll the viewport to see the cut off UI
                var renderAbove = !fitsDown && fitsAbove;
                var renderBelow = !renderAbove;

                _this.elements.outerWrapper.toggleClass(_this.classes.above, renderAbove);
                _this.elements.outerWrapper.toggleClass(_this.classes.below, renderBelow);
            }
        },

        /**
         * Detect if currently selected option is visible and scroll the options box to show it
         *
         * @param {Number|Array} index - Index of the selected items
         */
        detectItemVisibility: function(index) {
            var _this = this;
            var $filteredLi = _this.$li.filter('[data-index]');

            if (_this.state.multiple) {
                // If index is an array, we can assume a multiple select and we
                // want to scroll to the uppermost selected item!
                // Math.min.apply(Math, index) returns the lowest entry in an Array.
                index = ($.isArray(index) && index.length === 0) ? 0 : index;
                index = $.isArray(index) ? Math.min.apply(Math, index) : index;
            }

            var liHeight = $filteredLi.eq(index).outerHeight();
            var liTop = $filteredLi[index].offsetTop;
            var itemsScrollTop = _this.elements.itemsScroll.scrollTop();
            var scrollT = liTop + liHeight * 2;

            _this.elements.itemsScroll.scrollTop(
                scrollT > itemsScrollTop + _this.itemsHeight ? scrollT - _this.itemsHeight :
                liTop - liHeight < itemsScrollTop ? liTop - liHeight :
                itemsScrollTop
            );
        },

        /**
         * Open the select options box
         *
         * @param {Event} e - Event
         */
        open: function(e) {
            var _this = this;

            if (_this.options.nativeOnMobile && _this.utils.isMobile()) {
                return false;
            }

            _this.utils.triggerCallback('BeforeOpen', _this);

            if (e) {
                e.preventDefault();
                if (_this.options.stopPropagation) {
                    e.stopPropagation();
                }
            }

            if (_this.state.enabled) {
                _this.setOptionsDimensions();

                // Find any other opened instances of select and close it
                $('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

                _this.state.opened = true;
                _this.itemsHeight = _this.elements.items.outerHeight();
                _this.itemsInnerHeight = _this.elements.items.height();

                // Toggle options box visibility
                _this.elements.outerWrapper.addClass(_this.classes.open);

                // Give dummy input focus
                _this.elements.input.val('');
                if (e && e.type !== 'focusin') {
                    _this.elements.input.focus();
                }

                // Delayed binds events on Document to make label clicks work
                setTimeout(function() {
                    $doc
                        .on('click' + eventNamespaceSuffix, $.proxy(_this.close, _this))
                        .on('scroll' + eventNamespaceSuffix, $.proxy(_this.isInViewport, _this));
                }, 1);

                _this.isInViewport();

                // Prevent window scroll when using mouse wheel inside items box
                if (_this.options.preventWindowScroll) {
                    /* istanbul ignore next */
                    $doc.on('mousewheel' + eventNamespaceSuffix + ' DOMMouseScroll' + eventNamespaceSuffix, '.' + _this.classes.scroll, function(e) {
                        var orgEvent = e.originalEvent;
                        var scrollTop = $(this).scrollTop();
                        var deltaY = 0;

                        if ('detail' in orgEvent) { deltaY = orgEvent.detail * -1; }
                        if ('wheelDelta' in orgEvent) { deltaY = orgEvent.wheelDelta; }
                        if ('wheelDeltaY' in orgEvent) { deltaY = orgEvent.wheelDeltaY; }
                        if ('deltaY' in orgEvent) { deltaY = orgEvent.deltaY * -1; }

                        if (scrollTop === (this.scrollHeight - _this.itemsInnerHeight) && deltaY < 0 || scrollTop === 0 && deltaY > 0) {
                            e.preventDefault();
                        }
                    });
                }

                _this.detectItemVisibility(_this.state.selectedIdx);

                _this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx);

                _this.utils.triggerCallback('Open', _this);
            }
        },

        /** Close the select options box */
        close: function() {
            var _this = this;

            _this.utils.triggerCallback('BeforeClose', _this);

            // Remove custom events on document
            $doc.off(eventNamespaceSuffix);

            // Remove visible class to hide options box
            _this.elements.outerWrapper.removeClass(_this.classes.open);

            _this.state.opened = false;

            _this.utils.triggerCallback('Close', _this);
        },

        /** Select current option and change the label */
        change: function() {
            var _this = this;

            _this.utils.triggerCallback('BeforeChange', _this);

            if (_this.state.multiple) {
                // Reset old selected
                $.each(_this.lookupItems, function(idx) {
                    _this.lookupItems[idx].selected = false;
                    _this.$element.find('option').prop('selected', false);
                });

                // Set new selected
                $.each(_this.state.selectedIdx, function(idx, value) {
                    _this.lookupItems[value].selected = true;
                    _this.$element.find('option').eq(value).prop('selected', true);
                });

                _this.state.currValue = _this.state.selectedIdx;

                _this.setLabel();

                _this.utils.triggerCallback('Change', _this);
            } else if (_this.state.currValue !== _this.state.selectedIdx) {
                // Apply changed value to original select
                _this.$element
                    .prop('selectedIndex', _this.state.currValue = _this.state.selectedIdx)
                    .data('value', _this.lookupItems[_this.state.selectedIdx].text);

                // Change label text
                _this.setLabel();

                _this.utils.triggerCallback('Change', _this);
            }
        },

        /**
         * Highlight option
         * @param {number} index - Index of the options that will be highlighted
         */
        highlight: function(index) {
            var _this = this;
            var $filteredLi = _this.$li.filter('[data-index]').removeClass('highlighted');

            _this.utils.triggerCallback('BeforeHighlight', _this);

            // Parameter index is required and should not be a disabled item
            if (index === undefined || index === -1 || _this.lookupItems[index].disabled) {
                return;
            }

            $filteredLi
                .eq(_this.state.highlightedIdx = index)
                .addClass('highlighted');

            _this.detectItemVisibility(index);

            _this.utils.triggerCallback('Highlight', _this);
        },

        /**
         * Select option
         *
         * @param {number} index - Index of the option that will be selected
         */
        select: function(index) {
            var _this = this;
            var $filteredLi = _this.$li.filter('[data-index]');

            _this.utils.triggerCallback('BeforeSelect', _this, index);

            // Parameter index is required and should not be a disabled item
            if (index === undefined || index === -1 || _this.lookupItems[index].disabled) {
                return;
            }

            if (_this.state.multiple) {
                // Make sure selectedIdx is an array
                _this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [_this.state.selectedIdx];

                var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
                if (hasSelectedIndex !== -1) {
                    _this.state.selectedIdx.splice(hasSelectedIndex, 1);
                } else {
                    _this.state.selectedIdx.push(index);
                }

                $filteredLi
                    .removeClass('selected')
                    .filter(function(index) {
                        return $.inArray(index, _this.state.selectedIdx) !== -1;
                    })
                    .addClass('selected');
            } else {
                $filteredLi
                    .removeClass('selected')
                    .eq(_this.state.selectedIdx = index)
                    .addClass('selected');
            }

            if (!_this.state.multiple || !_this.options.multiple.keepMenuOpen) {
                _this.close();
            }

            _this.change();

            _this.utils.triggerCallback('Select', _this, index);
        },

        /**
         * Unbind and remove
         *
         * @param {boolean} preserveData - Check if the data on the element should be removed too
         */
        destroy: function(preserveData) {
            var _this = this;

            if (_this.state && _this.state.enabled) {
                _this.elements.items.add(_this.elements.wrapper).add(_this.elements.input).remove();

                if (!preserveData) {
                    _this.$element.removeData(pluginName).removeData('value');
                }

                _this.$element.prop('tabindex', _this.originalTabindex).off(eventNamespaceSuffix).off(_this.eventTriggers).unwrap().unwrap();

                _this.state.enabled = false;
            }
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(args) {
        return this.each(function() {
            var data = $.data(this, pluginName);

            if (data && !data.disableOnMobile) {
                (typeof args === 'string' && data[args]) ? data[args](): data.init(args);
            } else {
                $.data(this, pluginName, new Selectric(this, args));
            }
        });
    };

    /**
     * Default plugin options
     *
     * @type {object}
     */
    $.fn[pluginName].defaults = {
        onChange: function(elm) { $(elm).change(); },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button"></b>',
        disableOnMobile: false,
        nativeOnMobile: true,
        openOnFocus: true,
        openOnHover: false,
        hoverIntentTimeout: 500,
        expandToItemText: false,
        responsive: false,
        preventWindowScroll: true,
        inheritOriginalWidth: false,
        allowWrap: true,
        forceRenderAbove: false,
        forceRenderBelow: false,
        stopPropagation: true,
        optionsItemBuilder: '{text}', // function(itemData, element, index)
        labelBuilder: '{text}', // function(currItem)
        listBuilder: false, // function(items)
        keys: {
            previous: [37, 38], // Left / Up
            next: [39, 40], // Right / Down
            select: [9, 13, 27], // Tab / Enter / Escape
            open: [13, 32, 37, 38, 39, 40], // Enter / Space / Left / Up / Right / Down
            close: [9, 27] // Tab / Escape
        },
        customClass: {
            prefix: pluginName,
            camelCase: false
        },
        multiple: {
            separator: ', ',
            keepMenuOpen: true,
            maxLabelEntries: false
        }
    };
}));

function changeImgSize() {
    var imgWidth1 = $('.gak-article .gak-article-gallery li').width();
    $('.gak-article-gallery li img').css('height', imgWidth1);
}

function changeImgSizeEvent() {
    var imgWidth2 = $('.gak-event-single .gak-article-gallery li').width();
    $('.gak-article-gallery li img').css('height', imgWidth2);
}

function changeImgSizeModal() {
    var imgWidth3 = $('.uk-open .gak-article-modal .gak-article-gallery li').width();
    $('.uk-open .gak-article-gallery li img').css('height', imgWidth3);
}

$(document).ready(function() {
    changeImgSize();
    changeImgSizeModal();
    changeImgSizeEvent();
});


window.onresize = function() {
    changeImgSize();
    changeImgSizeModal();
    changeImgSizeEvent();
}

$('[uk-modal]').on('beforeitemshow', function() {
    $('[uk-modal]').each(function() {
        changeImgSizeModal();
    });
});

$('[uk-modal]').on('show', function() {
    $('[uk-modal]').each(function() {
        changeImgSizeModal();
    });
});

function addClass(selector, myClass) {

    // get all elements that match our selector
    elements = document.querySelectorAll(selector);

    // add class to all chosen elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(myClass);
    }
}

function removeClass(selector, myClass) {

    // get all elements that match our selector
    elements = document.querySelectorAll(selector);

    // remove class from all chosen elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(myClass);
    }
}

function autoHideHeader() {

    var currentTop = window.scrollY;

    if (currentTop > 0) {
        addClass('.cd-auto-hide-header', 'dark-color');
    } else {
        removeClass('.cd-auto-hide-header', 'dark-color');
    }

    (belowNavHeroContent.length > 0) ?
    checkStickyNavigation(currentTop) // secondary navigation below intro
        : checkSimpleNavigation(currentTop);

    previousTop = currentTop;
    scrolling = false;
}

function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
        //if scrolling up...
        removeClass('.cd-auto-hide-header', 'is-hidden');

    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        //if scrolling down...
        addClass('.cd-auto-hide-header', 'is-hidden');

    }
}

var mainHeader = document.getElementsByClassName("cd-auto-hide-header");

belowNavHeroContent = document.getElementsByClassName("sub-nav-hero");

headerHeight = mainHeader.clientHeight;

//set scrolling variables
var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

window.addEventListener('scroll', function() {
    if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ?
        setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
    }
});

window.onresize = function(event) {
    headerHeight = mainHeader.innerHTML = window.innerHeight;
};

// player controls

if ($(".gak-video-container").hasClass("gak-video-play")) {


    var playButton = document.getElementById("play_button");
    var videoContainer = document.getElementById("video");

    var playIt = '<path fill="#fff" d="M119.314 34.655c-4.401-8.536-10.82-16.074-18.561-21.799a2.558 2.558 0 00-3.042 4.114A58.268 58.268 0 01114.767 37c4.238 8.218 6.387 17.107 6.387 26.421 0 31.834-25.9 57.733-57.733 57.733-31.834 0-57.733-25.899-57.733-57.733 0-31.834 25.9-57.733 57.733-57.733a2.558 2.558 0 000-5.116C28.766.572.572 28.766.572 63.421s28.194 62.848 62.849 62.848 62.849-28.193 62.849-62.848c0-9.995-2.405-19.942-6.956-28.766z"/><path fill="#fff" d="M47.34 34.239a2.559 2.559 0 00-1.294 2.223v56.135a2.558 2.558 0 005.115 0V40.962l37.872 22.545-27.85 17.943a2.558 2.558 0 102.772 4.3l31.32-20.18a2.558 2.558 0 00-.078-4.348L49.912 34.264a2.558 2.558 0 00-2.573-.025z"/>';

    var svgPlayIt = '<svg xmlns="http://www.w3.org/2000/svg" width="127" height="127" viewBox="0 0 127 127">' + playIt + '</svg>';

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            playButton.innerHTML = '';
        } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            playButton.innerHTML = '' + svgPlayIt;
        }
    });

    videoContainer.addEventListener("click", function() {
        if (video.paused == false) {
            // Play the video
            video.pause();

            // Update the button text to 'Pause'
            playButton.innerHTML = '' + svgPlayIt;
        }
    });
}


if ($('.gak-facility-video-box').length) {

    var playButton = document.getElementById("gak-video-controls");
    var videoContainer = document.getElementById("video");

    playItSvg = '<svg focusable="false" aria-hidden="true" enable-background="new 0 0 511.448 511.448" height="512" viewBox="0 0 511.448 511.448" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z"/><path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/><path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/></svg>';
    pauseItSvg = '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.051 30.051"><g><path d="M19.982 14.438l-6.24-4.536a.752.752 0 00-1.195.607v9.069a.75.75 0 001.195.606l6.24-4.532a.747.747 0 000-1.214z"/><path d="M15.026.002C6.726.002 0 6.728 0 15.028c0 8.297 6.726 15.021 15.026 15.021 8.298 0 15.025-6.725 15.025-15.021.001-8.3-6.727-15.026-15.025-15.026zm0 27.54c-6.912 0-12.516-5.601-12.516-12.514 0-6.91 5.604-12.518 12.516-12.518 6.911 0 12.514 5.607 12.514 12.518.001 6.913-5.603 12.514-12.514 12.514z"/></g></svg>';

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        var $myBtnAttr = $('.gak-video-controls');
        if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            playButton.innerHTML = playItSvg + 'zatrzymaj film';
            $myBtnAttr.attr({ "aria-label": "zatrzymaj film" });
        } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            playButton.innerHTML = pauseItSvg + 'włącz film';
            $myBtnAttr.attr({ "aria-label": "włącz film" });
        }
    });

    videoContainer.addEventListener("click", function() {
        if (video.paused == false) {
            // Play the video
            video.pause();

        }
    });
}

$(document).ready(function() {
    $('.gak-overlay ').css("display", "none");
    $('#catapult-cookie-bar').attr({
        role: "region",
        "aria-label": "Ciasteczka" // attributes which contain dash(-) should be covered in quotes.
    });

    var cookieInfo = $('#catapult-cookie-bar').detach();
    $('footer').append(cookieInfo);


    $('noscript').attr({ "aria-hidden": "true" });


    if ($('.gak-std-content').length) {
        $('a:contains("Placówka-kat")').closest('li').remove();
    }

});

//# sourceMappingURL=app.js.map

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;

    for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
    }

    return -1;
}

UIkit.util.on('.gak-hide-slider-on-mobile', 'itemshown', function() {
    var $items = this.getElementsByClassName('uk-slideshow-items');
    var $activeItem = $items[0].getElementsByClassName('uk-active');
    var index = indexInParent($activeItem[0]);
    $(".gak-event-min").removeClass('gak-active-slide');
    $("div[uk-slideshow-item=" + index + "]").addClass('gak-active-slide');

});

$(function() {

    if ($('.gak-width-100 ol.uk-grid-small').length) {
        var listElement = $(".gak-width-100 ol.uk-grid-small li");

        $(listElement).each(function(index) {
            //do stuff
            index++;
            $("#modal-center" + index).on({
                'beforeshow.uk.modal': function() {
                    $('ol, ul, li, a, button, label, input').attr("tabindex", "-1");
                    $("#modal-center" + index + " a").attr("tabindex", "1");
                    $("#modal-center" + index + " button").attr("tabindex", "1");
                   
                },
                'beforehide.uk.modal': function() {
                    $("#modal-center" + index + " .gak-arrow-link-back").removeAttr("tabindex");
                    $('ol, ul, li, a, button, label, input').removeAttr("tabindex");

                }
            });

        });

    }

    if ($('.gak-news-grid').length) {
        var newsItem = $(".gak-news-grid a.gak-news-modal");

        $(newsItem).each(function(index) {
            //do stuff
            index++;
            $("#news-" + index).on({
                'beforeshow.uk.modal': function() {
                    $('ol, ul, li, a, button, label, input').attr("tabindex", "-1");
                    $("#news-" + index + " a").attr("tabindex", "1");
                    $("#news-" + index + " button").attr("tabindex", "1");
                    $("#news-" + index + " button").addClass("gak-white-cross");
     
                },

                'beforehide.uk.modal': function() {
                    $("#news-" + index + " .gak-arrow-link-back").removeAttr("tabindex");
                    $('ol, ul, li, a, button, label, input').removeAttr("tabindex");

                }
            });

        });
    }

        for (i = 0; i < 100; i++) {
  
            $("#events-" + i).on({
                'beforeshow.uk.modal': function() {
                    $('ol, ul, li, a, button, label, input').attr("tabindex", "-1");
                    $("a", this).attr("tabindex", "1");
                    $("button", this).attr("tabindex", "1");
                },

                'beforehide.uk.modal': function() {
                    $("a", this).removeAttr("tabindex");
                    $("button", this).removeAttr("tabindex");
                    $('ol, ul, li, a, button, label, input').removeAttr("tabindex");
                }
            });
        }

    UIkit.util.on(document, 'shown', '.uk-modal.uk-open', function() {
            $(".uk-modal .uk-close").focus(); 
    });

    UIkit.util.on(document, 'shown', '.uk-lightbox.uk-open', function() {
        $('ol, ul, li, a, button, label, input').attr("tabindex", "-1");
        $(".uk-lightbox a").attr("tabindex", "1");
        $(".uk-lightbox button").attr("tabindex", "1");
        $(".uk-lightbox .uk-close").focus();

     
    });

    UIkit.util.on(document, 'hide', '.uk-lightbox', function() {

        if ($(".uk-modal.uk-open").length > 0) {
            $('.uk-modal-dialog a, .uk-modal-dialog button').removeAttr("tabindex");


    
        } else {
            $('ol, ul, li, a, button, label, input').removeAttr("tabindex");
            $(".uk-lightbox a").removeAttr("tabindex");
            $(".uk-lightbox button").removeAttr("tabindex");

     
        }

    });



    if ($('noscript').text().indexOf('<style>.lazy') != -1) {
        $("noscript:contains('<style>.lazy')").html('<img height="1" width="1" style="display: none;">');
    }



});

$(".gak-event-min").click(function() {
    $('.gak-event-min').removeClass('gak-active-slide');
    $(this).addClass('gak-active-slide');
});

$('.gak-place-box').hover(

    function() {
        $('.gak-place-box').removeClass('uk-active');
        $(this).addClass('uk-active');
        var addActiveClass = $(this).attr('id');
        $('.gak-full-height').removeClass('uk-active');
        $('.' + addActiveClass).addClass('uk-active');

    }
);

$(".gak-edit-article iframe").each(function() {
    $(this).wrapAll('<div class= "video-container"> </div>').parent().html();
});

$(".e-gak iframe").each(function() {
    $(this).wrapAll('<div class= "video-container"> </div>').parent().html();
});

$('#catapult-cookie-bar h3').remove();

$(function() {
    $('.menu-item-has-children a').focus(function() {
        $(this).siblings('.sub-menu').addClass('focused');
    }).blur(function() {
        $(this).siblings('.sub-menu').removeClass('focused');
    });

    // Sub Menu
    $('.sub-menu a').focus(function() {
        $(this).parents('.sub-menu').addClass('focused');
    }).blur(function() {
        $(this).parents('.sub-menu').removeClass('focused');
    });
});

if ($.trim($(".gak-check-if-empty").html()) == '') {
    $(".pagination").remove();
    $(".gak-check-if-empty").append(' <p class="message">Nie znaleziono wydarzeń spełniających wybrane kryteria.</p>');
}


function filterSearch() {
    var search = $(".uk-search-input").eq(0).val().toLowerCase();
    if (!search) {
        $(".uk-search-input").eq(0).attr("uk-filter-control", "");
    } else {
        $(".uk-search-input").eq(0).attr("uk-filter-control", "filter: [data-name*='" + search + "']");
    }
    $(".uk-search-input").eq(0).click();
}

$(".filter-main").on("beforeFilter", function() {
    $(".skills-no-result").removeClass('visible uk-animation-shake');
});

$(".filter-main").on("afterFilter", function() {
    var isElementVisible = false;
    var i = 0;

    while (!isElementVisible && i < $(".skills-el").length) {
        if ($(".skills-el").eq(i).is(":visible")) {
            isElementVisible = true;
        }

        i++;
    }

    if (isElementVisible === false) {
        $(".skills-no-result").addClass('visible uk-animation-shake');
    }
});

function resetSearchBar() {
    $(".uk-search-input").eq(0).val('');
    $(".uk-search-input").eq(0).val('').attr("uk-filter-control", "");
}
$(".uk-search-input").eq(0).val('');
$(".uk-search-input").eq(0).val('').attr("uk-filter-control", "");


// skip to inicjalizacja

var SkipToConfig = {
    'settings': {
        'skipTo': {
            landmarks: 'main, [role="main"], [role="search"], nav',
            buttonLabel: 'szybki dostęp',
            attachElement: '.cd-auto-hide-header',
            landmarkGroupLabel: 'Punkty orientacyjne',
            headingGroupLabel: 'Nagłówki',
            msgNoLandmarksFound: 'Brak punktów orientacyjnych',
            msgNoHeadingsFound: 'Brak nagłówków'

        }
    }
};

$('a[href^="tel:"]').each(function(i, a){
    var $a = $(a);
    $a.attr('aria-label', $a.attr('href').replace(/tel:(\+48\s*)?(.*)/, '$2'));
    $a.wrap('<span aria-labelledby="Telefon"></span>');
});

setTimeout(function() { 
    $(".cli-plugin-button").click(function() {
        cookieText = $('#wt-cli-privacy-save-btn');
    
        if(cookieText.length) {
            cookieText.text('ZAPISZ I ZAAKCEPTUJ');
        }

        $('.cookielawinfo-row-cat-table thead .cookielawinfo-column-1').text('Ciasteczko');
        $('.cookielawinfo-row-cat-table thead .cookielawinfo-column-3').text('Czas');
        $('.cookielawinfo-row-cat-table thead .cookielawinfo-column-4').text('Opis');

    });
}, 500);
