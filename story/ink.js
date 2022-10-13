! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).inkjs = {})
}(this, function(a) {
    "use strict";

    function P(t) {
        return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function m(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function u(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && o(t, e)
    }

    function r(t) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function o(t, e) {
        return (o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (t) {
            return !1
        }
    }

    function h(t, e, n) {
        return (h = l() ? Reflect.construct : function(t, e, n) {
            var i = [null];
            i.push.apply(i, e);
            var r = new(Function.bind.apply(t, i));
            return n && o(r, n.prototype), r
        }).apply(null, arguments)
    }

    function c(t) {
        var i = "function" == typeof Map ? new Map : void 0;
        return (c = function(t) {
            if (null === t || (e = t, -1 === Function.toString.call(e).indexOf("[native code]"))) return t;
            var e;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, n)
            }

            function n() {
                return h(t, arguments, r(this).constructor)
            }
            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(n, t)
        })(t)
    }

    function f(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function v(n) {
        var i = l();
        return function() {
            var t, e = r(n);
            return f(this, i ? (t = r(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
        }
    }

    function S(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
            if (null == n) return;
            var i, r, a = [],
                s = !0,
                o = !1;
            try {
                for (n = n.call(t); !(s = (i = n.next()).done) && (a.push(i.value), !e || a.length !== e); s = !0);
            } catch (t) {
                o = !0, r = t
            } finally {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (o) throw r
                }
            }
            return a
        }(t, e) || p(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t) {
        return function(t) {
            if (Array.isArray(t)) return y(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || p(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(t, e) {
        if (t) {
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0
        }
    }

    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function pt(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = p(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
            o = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return s = t.done, t
            },
            e: function(t) {
                o = !0, a = t
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (o) throw a
                }
            }
        }
    }
    var t, e, k, n, O = function() {
        function s() {
            var t, e, n, i, r;
            m(this, s), this._components = [], this._componentsString = null, this._isRelative = !1, "string" == typeof arguments[0] ? (t = arguments[0], this.componentsString = t) : arguments[0] instanceof s.Component && arguments[1] instanceof s ? (e = arguments[0], n = arguments[1], this._components.push(e), this._components = this._components.concat(n._components)) : arguments[0] instanceof Array && (i = arguments[0], r = !!arguments[1], this._components = this._components.concat(i), this._isRelative = r)
        }
        return u(s, [{
            key: "isRelative",
            get: function() {
                return this._isRelative
            }
        }, {
            key: "componentCount",
            get: function() {
                return this._components.length
            }
        }, {
            key: "head",
            get: function() {
                return 0 < this._components.length ? this._components[0] : null
            }
        }, {
            key: "tail",
            get: function() {
                return 2 <= this._components.length ? new s(this._components.slice(1, this._components.length)) : s.self
            }
        }, {
            key: "length",
            get: function() {
                return this._components.length
            }
        }, {
            key: "lastComponent",
            get: function() {
                var t = this._components.length - 1;
                return 0 <= t ? this._components[t] : null
            }
        }, {
            key: "containsNamedComponent",
            get: function() {
                for (var t = 0, e = this._components.length; t < e; t++)
                    if (!this._components[t].isIndex) return !0;
                return !1
            }
        }, {
            key: "GetComponent",
            value: function(t) {
                return this._components[t]
            }
        }, {
            key: "PathByAppendingPath",
            value: function(t) {
                for (var e = new s, n = 0, i = 0; i < t._components.length && t._components[i].isParent; ++i) n++;
                for (var r = 0; r < this._components.length - n; ++r) e._components.push(this._components[r]);
                for (var a = n; a < t._components.length; ++a) e._components.push(t._components[a]);
                return e
            }
        }, {
            key: "componentsString",
            get: function() {
                return null == this._componentsString && (this._componentsString = this._components.join("."), this.isRelative && (this._componentsString = "." + this._componentsString)), this._componentsString
            },
            set: function(t) {
                if (this._components.length = 0, this._componentsString = t, null != this._componentsString && "" != this._componentsString) {
                    "." == this._componentsString[0] && (this._isRelative = !0, this._componentsString = this._componentsString.substring(1));
                    var e, n = pt(this._componentsString.split("."));
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value;
                            /^(\-|\+)?([0-9]+|Infinity)$/.test(i) ? this._components.push(new s.Component(parseInt(i))) : this._components.push(new s.Component(i))
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
            }
        }, {
            key: "toString",
            value: function() {
                return this.componentsString
            }
        }, {
            key: "Equals",
            value: function(t) {
                if (null == t) return !1;
                if (t._components.length != this._components.length) return !1;
                if (t.isRelative != this.isRelative) return !1;
                for (var e = 0, n = t._components.length; e < n; e++)
                    if (!t._components[e].Equals(this._components[e])) return !1;
                return !0
            }
        }, {
            key: "PathByAppendingComponent",
            value: function(t) {
                var e, n = new s;
                return (e = n._components).push.apply(e, d(this._components)), n._components.push(t), n
            }
        }], [{
            key: "self",
            get: function() {
                var t = new s;
                return t._isRelative = !0, t
            }
        }]), s
    }();

    function g(t, e) {
        if (!t) throw void 0 !== e && console.warn(e), console.trace && console.trace(), new Error("")
    }

    function yt(t, e) {
        return t instanceof e ? t : null
    }

    function mt(t, e) {
        if (t instanceof e) return t;
        throw new Error("".concat(t, " is not of type ").concat(e))
    }

    function C(t) {
        return t.hasValidName && t.name ? t : null
    }

    function b(t) {
        return void 0 === t ? null : t
    }

    function _(t) {
        return "object" === P(t) && "function" == typeof t.Equals
    }
    O.parentId = "^", t = O = O || {}, e = function() {
        function e(t) {
            m(this, e), this.index = -1, this.name = null, "string" == typeof t ? this.name = t : this.index = t
        }
        return u(e, [{
            key: "isIndex",
            get: function() {
                return 0 <= this.index
            }
        }, {
            key: "isParent",
            get: function() {
                return this.name == t.parentId
            }
        }, {
            key: "toString",
            value: function() {
                return this.isIndex ? this.index.toString() : this.name
            }
        }, {
            key: "Equals",
            value: function(t) {
                return null != t && t.isIndex == this.isIndex && (this.isIndex ? this.index == t.index : this.name == t.name)
            }
        }], [{
            key: "ToParent",
            value: function() {
                return new e(t.parentId)
            }
        }]), e
    }(), t.Component = e, (n = k = k || {}).AssertType = function(t, e, n) {
        g(t instanceof e, n)
    }, n.Assert = g;
    var w = function() {
        s(e, c(Error));
        var t = v(e);

        function e() {
            return m(this, e), t.apply(this, arguments)
        }
        return e
    }();

    function gt(t) {
        throw new w("".concat(t, " is null or undefined"))
    }
    var T = function() {
            function t() {
                m(this, t), this.parent = null, this._debugMetadata = null, this._path = null
            }
            return u(t, [{
                key: "debugMetadata",
                get: function() {
                    return null === this._debugMetadata && this.parent ? this.parent.debugMetadata : this._debugMetadata
                },
                set: function(t) {
                    this._debugMetadata = t
                }
            }, {
                key: "ownDebugMetadata",
                get: function() {
                    return this._debugMetadata
                }
            }, {
                key: "DebugLineNumberOfPath",
                value: function(t) {
                    if (null === t) return null;
                    var e = this.rootContentContainer;
                    if (e) {
                        var n = e.ContentAtPath(t).obj;
                        if (n) {
                            var i = n.debugMetadata;
                            if (null !== i) return i.startLineNumber
                        }
                    }
                    return null
                }
            }, {
                key: "path",
                get: function() {
                    if (null == this._path)
                        if (null == this.parent) this._path = new O;
                        else {
                            for (var t = [], e = this, n = yt(e.parent, Ot); null !== n;) {
                                var i = C(e);
                                null != i && i.hasValidName ? t.unshift(new O.Component(i.name)) : t.unshift(new O.Component(n.content.indexOf(e))), n = yt((e = n).parent, Ot)
                            }
                            this._path = new O(t)
                        }
                    return this._path
                }
            }, {
                key: "ResolvePath",
                value: function(t) {
                    if (null === t) return gt("path");
                    if (t.isRelative) {
                        var e = yt(this, Ot);
                        return null === e && (k.Assert(null !== this.parent, "Can't resolve relative path because we don't have a parent"), e = yt(this.parent, Ot), k.Assert(null !== e, "Expected parent to be a container"), k.Assert(t.GetComponent(0).isParent), t = t.tail), null === e ? gt("nearestContainer") : e.ContentAtPath(t)
                    }
                    var n = this.rootContentContainer;
                    return null === n ? gt("contentContainer") : n.ContentAtPath(t)
                }
            }, {
                key: "ConvertPathToRelative",
                value: function(t) {
                    for (var e = this.path, n = Math.min(t.length, e.length), i = -1, r = 0; r < n; ++r) {
                        var a = e.GetComponent(r),
                            s = t.GetComponent(r);
                        if (!a.Equals(s)) break;
                        i = r
                    }
                    if (-1 == i) return t;
                    for (var o = e.componentCount - 1 - i, u = [], l = 0; l < o; ++l) u.push(O.Component.ToParent());
                    for (var h = i + 1; h < t.componentCount; ++h) u.push(t.GetComponent(h));
                    return new O(u, !0)
                }
            }, {
                key: "CompactPathString",
                value: function(t) {
                    var e = null,
                        n = null;
                    return e = t.isRelative ? (n = t.componentsString, this.path.PathByAppendingPath(t).componentsString) : (n = this.ConvertPathToRelative(t).componentsString, t.componentsString), n.length < e.length ? n : e
                }
            }, {
                key: "rootContentContainer",
                get: function() {
                    for (var t = this; t.parent;) t = t.parent;
                    return yt(t, Ot)
                }
            }, {
                key: "Copy",
                value: function() {
                    throw Error("Not Implemented: Doesn't support copying")
                }
            }, {
                key: "SetChild",
                value: function(t, e, n) {
                    t[e] && (t[e] = null), t[e] = n, t[e] && (t[e].parent = this)
                }
            }]), t
        }(),
        St = function() {
            function e(t) {
                m(this, e), t = void 0 !== t ? t.toString() : "", this.string = t
            }
            return u(e, [{
                key: "Length",
                get: function() {
                    return this.string.length
                }
            }, {
                key: "Append",
                value: function(t) {
                    null !== t && (this.string += t)
                }
            }, {
                key: "AppendLine",
                value: function(t) {
                    void 0 !== t && this.Append(t), this.string += "\n"
                }
            }, {
                key: "AppendFormat",
                value: function(t) {
                    for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                    this.string += t.replace(/{(\d+)}/g, function(t, e) {
                        return void 0 !== n[e] ? n[e] : t
                    })
                }
            }, {
                key: "toString",
                value: function() {
                    return this.string
                }
            }]), e
        }(),
        kt = function() {
            function i() {
                var t, e, n;
                m(this, i), this.originName = null, this.itemName = null, void 0 !== arguments[1] ? (t = arguments[0], e = arguments[1], this.originName = t, this.itemName = e) : arguments[0] && (n = arguments[0].toString().split("."), this.originName = n[0], this.itemName = n[1])
            }
            return u(i, [{
                key: "isNull",
                get: function() {
                    return null == this.originName && null == this.itemName
                }
            }, {
                key: "fullName",
                get: function() {
                    return (null !== this.originName ? this.originName : "?") + "." + this.itemName
                }
            }, {
                key: "toString",
                value: function() {
                    return this.fullName
                }
            }, {
                key: "Equals",
                value: function(t) {
                    return t instanceof i && (t.itemName == this.itemName && t.originName == this.originName)
                }
            }, {
                key: "copy",
                value: function() {
                    return new i(this.originName, this.itemName)
                }
            }, {
                key: "serialized",
                value: function() {
                    return JSON.stringify({
                        originName: this.originName,
                        itemName: this.itemName
                    })
                }
            }], [{
                key: "Null",
                get: function() {
                    return new i(null, null)
                }
            }, {
                key: "fromSerializedKey",
                value: function(t) {
                    var e = JSON.parse(t);
                    if (!i.isLikeInkListItem(e)) return i.Null;
                    return new i(e.originName, e.itemName)
                }
            }, {
                key: "isLikeInkListItem",
                value: function(t) {
                    return "object" === P(t) && (!(!t.hasOwnProperty("originName") || !t.hasOwnProperty("itemName")) && (("string" == typeof t.originName || null === typeof t.originName) && ("string" == typeof t.itemName || null === typeof t.itemName)))
                }
            }]), i
        }(),
        Ct = function() {
            s(l, c(Map));
            var o = v(l);

            function l() {
                var t, e, n = arguments;
                if (m(this, l), (t = o.call(this, n[0] instanceof l ? n[0] : [])).origins = null, t._originNames = [], arguments[0] instanceof l) {
                    var i = arguments[0];
                    t._originNames = i.originNames, null !== i.origins && (t.origins = i.origins.slice())
                } else if ("string" == typeof arguments[0]) {
                    var r = arguments[0],
                        a = arguments[1];
                    if (t.SetInitialOriginName(r), null === a.listDefinitions) return f(t, gt("originStory.listDefinitions"));
                    var s = a.listDefinitions.TryListGetDefinition(r, null);
                    if (!s.exists) throw new Error("InkList origin could not be found in story when constructing new list: " + r);
                    if (null === s.result) return f(t, gt("def.result"));
                    t.origins = [s.result]
                } else {
                    "object" === P(arguments[0]) && arguments[0].hasOwnProperty("Key") && arguments[0].hasOwnProperty("Value") && (e = arguments[0], t.Add(e.Key, e.Value))
                }
                return t
            }
            return u(l, [{
                key: "AddItem",
                value: function(t) {
                    if (t instanceof kt) {
                        var e = t;
                        if (null == e.originName) return void this.AddItem(e.itemName);
                        if (null === this.origins) return gt("this.origins");
                        var n, i = pt(this.origins);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var r = n.value;
                                if (r.name == e.originName) {
                                    var a = r.TryGetValueForItem(e, 0);
                                    if (a.exists) return void this.Add(e, a.result);
                                    throw new Error("Could not add the item " + e + " to this list because it doesn't exist in the original list definition in ink.")
                                }
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                        throw new Error("Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found.")
                    }
                    var s = t,
                        o = null;
                    if (null === this.origins) return gt("this.origins");
                    var u, l = pt(this.origins);
                    try {
                        for (l.s(); !(u = l.n()).done;) {
                            var h = u.value;
                            if (null === s) return gt("itemName");
                            if (h.ContainsItemWithName(s)) {
                                if (null != o) throw new Error("Could not add the item " + s + " to this list because it could come from either " + h.name + " or " + o.name);
                                o = h
                            }
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                    if (null == o) throw new Error("Could not add the item " + s + " to this list because it isn't known to any list definitions previously associated with this list.");
                    var c = new kt(o.name, s),
                        f = o.ValueForItem(c);
                    this.Add(c, f)
                }
            }, {
                key: "ContainsItemNamed",
                value: function(t) {
                    var e, n = pt(this);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = S(e.value, 1)[0];
                            if (kt.fromSerializedKey(i).itemName == t) return !0
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return !1
                }
            }, {
                key: "ContainsKey",
                value: function(t) {
                    return this.has(t.serialized())
                }
            }, {
                key: "Add",
                value: function(t, e) {
                    var n = t.serialized();
                    if (this.has(n)) throw new Error("The Map already contains an entry for ".concat(t));
                    this.set(n, e)
                }
            }, {
                key: "Remove",
                value: function(t) {
                    return this.delete(t.serialized())
                }
            }, {
                key: "Count",
                get: function() {
                    return this.size
                }
            }, {
                key: "originOfMaxItem",
                get: function() {
                    if (null == this.origins) return null;
                    var e = this.maxItem.Key.originName,
                        n = null;
                    return this.origins.every(function(t) {
                        return t.name != e || (n = t, !1)
                    }), n
                }
            }, {
                key: "originNames",
                get: function() {
                    if (0 < this.Count) {
                        null == this._originNames && 0 < this.Count ? this._originNames = [] : (this._originNames || (this._originNames = []), this._originNames.length = 0);
                        var t, e = pt(this);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var n = S(t.value, 1)[0],
                                    i = kt.fromSerializedKey(n);
                                if (null === i.originName) return gt("item.originName");
                                this._originNames.push(i.originName)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                    return this._originNames
                }
            }, {
                key: "SetInitialOriginName",
                value: function(t) {
                    this._originNames = [t]
                }
            }, {
                key: "SetInitialOriginNames",
                value: function(t) {
                    this._originNames = null == t ? null : t.slice()
                }
            }, {
                key: "maxItem",
                get: function() {
                    var t, e = {
                            Key: kt.Null,
                            Value: 0
                        },
                        n = pt(this);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = S(t.value, 2),
                                r = i[0],
                                a = i[1],
                                s = kt.fromSerializedKey(r);
                            (e.Key.isNull || a > e.Value) && (e = {
                                Key: s,
                                Value: a
                            })
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return e
                }
            }, {
                key: "minItem",
                get: function() {
                    var t, e = {
                            Key: kt.Null,
                            Value: 0
                        },
                        n = pt(this);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = S(t.value, 2),
                                r = i[0],
                                a = i[1],
                                s = kt.fromSerializedKey(r);
                            (e.Key.isNull || a < e.Value) && (e = {
                                Key: s,
                                Value: a
                            })
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return e
                }
            }, {
                key: "inverse",
                get: function() {
                    var t = new l;
                    if (null != this.origins) {
                        var e, n = pt(this.origins);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i, r = pt(e.value.items);
                                try {
                                    for (r.s(); !(i = r.n()).done;) {
                                        var a = S(i.value, 2),
                                            s = a[0],
                                            o = a[1],
                                            u = kt.fromSerializedKey(s);
                                        this.ContainsKey(u) || t.Add(u, o)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                    return t
                }
            }, {
                key: "all",
                get: function() {
                    var t = new l;
                    if (null != this.origins) {
                        var e, n = pt(this.origins);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i, r = pt(e.value.items);
                                try {
                                    for (r.s(); !(i = r.n()).done;) {
                                        var a = S(i.value, 2),
                                            s = a[0],
                                            o = a[1],
                                            u = kt.fromSerializedKey(s);
                                        t.set(u.serialized(), o)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                    return t
                }
            }, {
                key: "Union",
                value: function(t) {
                    var e, n = new l(this),
                        i = pt(t);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var r = S(e.value, 2),
                                a = r[0],
                                s = r[1];
                            n.set(a, s)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return n
                }
            }, {
                key: "Intersect",
                value: function(t) {
                    var e, n = new l,
                        i = pt(this);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var r = S(e.value, 2),
                                a = r[0],
                                s = r[1];
                            t.has(a) && n.set(a, s)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return n
                }
            }, {
                key: "Without",
                value: function(t) {
                    var e, n = new l(this),
                        i = pt(t);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var r = S(e.value, 1)[0];
                            n.delete(r)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return n
                }
            }, {
                key: "Contains",
                value: function(t) {
                    var e, n = pt(t);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = S(e.value, 1)[0];
                            if (!this.has(i)) return !1
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return !0
                }
            }, {
                key: "GreaterThan",
                value: function(t) {
                    return 0 != this.Count && (0 == t.Count || this.minItem.Value > t.maxItem.Value)
                }
            }, {
                key: "GreaterThanOrEquals",
                value: function(t) {
                    return 0 != this.Count && (0 == t.Count || this.minItem.Value >= t.minItem.Value && this.maxItem.Value >= t.maxItem.Value)
                }
            }, {
                key: "LessThan",
                value: function(t) {
                    return 0 != t.Count && (0 == this.Count || this.maxItem.Value < t.minItem.Value)
                }
            }, {
                key: "LessThanOrEquals",
                value: function(t) {
                    return 0 != t.Count && (0 == this.Count || this.maxItem.Value <= t.maxItem.Value && this.minItem.Value <= t.minItem.Value)
                }
            }, {
                key: "MaxAsList",
                value: function() {
                    return 0 < this.Count ? new l(this.maxItem) : new l
                }
            }, {
                key: "MinAsList",
                value: function() {
                    return 0 < this.Count ? new l(this.minItem) : new l
                }
            }, {
                key: "ListWithSubRange",
                value: function(t, e) {
                    if (0 == this.Count) return new l;
                    var n = this.orderedItems,
                        i = 0,
                        r = Number.MAX_SAFE_INTEGER;
                    Number.isInteger(t) ? i = t : t instanceof l && 0 < t.Count && (i = t.minItem.Value), Number.isInteger(e) ? r = e : t instanceof l && 0 < t.Count && (r = e.maxItem.Value);
                    var a = new l;
                    a.SetInitialOriginNames(this.originNames);
                    var s, o = pt(n);
                    try {
                        for (o.s(); !(s = o.n()).done;) {
                            var u = s.value;
                            u.Value >= i && u.Value <= r && a.Add(u.Key, u.Value)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    return a
                }
            }, {
                key: "Equals",
                value: function(t) {
                    if (t instanceof l == !1) return !1;
                    if (t.Count != this.Count) return !1;
                    var e, n = pt(this);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = S(e.value, 1)[0];
                            if (!t.has(i)) return !1
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return !0
                }
            }, {
                key: "orderedItems",
                get: function() {
                    var t, e = new Array,
                        n = pt(this);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = S(t.value, 2),
                                r = i[0],
                                a = i[1],
                                s = kt.fromSerializedKey(r);
                            e.push({
                                Key: s,
                                Value: a
                            })
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return e.sort(function(t, e) {
                        return null === t.Key.originName ? gt("x.Key.originName") : null === e.Key.originName ? gt("y.Key.originName") : t.Value == e.Value ? t.Key.originName.localeCompare(e.Key.originName) : t.Value < e.Value ? -1 : t.Value > e.Value ? 1 : 0
                    }), e
                }
            }, {
                key: "toString",
                value: function() {
                    for (var t = this.orderedItems, e = new St, n = 0; n < t.length; n++) {
                        0 < n && e.Append(", ");
                        var i = t[n].Key;
                        if (null === i.itemName) return gt("item.itemName");
                        e.Append(i.itemName)
                    }
                    return e.toString()
                }
            }, {
                key: "valueOf",
                value: function() {
                    return NaN
                }
            }], [{
                key: "FromString",
                value: function(t, e) {
                    var n, i = null === (n = e.listDefinitions) || void 0 === n ? void 0 : n.FindSingleItemListWithName(t);
                    if (i) return null === i.value ? gt("listValue.value") : new l(i.value);
                    throw new Error("Could not find the InkListItem from the string '" + t + "' to create an InkList because it doesn't exist in the original list definition in ink.")
                }
            }]), l
        }(),
        bt = function() {
            s(i, c(Error));
            var n = v(i);

            function i(t) {
                var e;
                return m(this, i), (e = n.call(this, t)).useEndLineNumber = !1, e.message = t, e.name = "StoryException", e
            }
            return i
        }();

    function E(t, e, n) {
        if (null === t) return {
            result: n,
            exists: !1
        };
        var i = t.get(e);
        return void 0 === i ? {
            result: n,
            exists: !1
        } : {
            result: i,
            exists: !0
        }
    }
    var N, A, I = function() {
            s(e, T);
            var t = v(e);

            function e() {
                return m(this, e), t.apply(this, arguments)
            }
            return u(e, [{
                key: "Copy",
                value: function() {
                    return mt(e.Create(this), T)
                }
            }, {
                key: "BadCastException",
                value: function(t) {
                    return new bt("Can't cast " + this.valueObject + " from " + this.valueType + " to " + t)
                }
            }], [{
                key: "Create",
                value: function(t, e) {
                    if (e) {
                        if (e === N.Int && Number.isInteger(Number(t))) return new wt(Number(t));
                        if (e === N.Float && !isNaN(t)) return new F(Number(t))
                    }
                    return "boolean" == typeof t ? new x(Boolean(t)) : "string" == typeof t ? new Tt(String(t)) : Number.isInteger(Number(t)) ? new wt(Number(t)) : isNaN(t) ? t instanceof O ? new Et(mt(t, O)) : t instanceof Ct ? new Pt(mt(t, Ct)) : null : new F(Number(t))
                }
            }]), e
        }(),
        _t = function() {
            s(i, I);
            var n = v(i);

            function i(t) {
                var e;
                return m(this, i), (e = n.call(this)).value = t, e
            }
            return u(i, [{
                key: "valueObject",
                get: function() {
                    return this.value
                }
            }, {
                key: "toString",
                value: function() {
                    return null === this.value ? gt("Value.value") : this.value.toString()
                }
            }]), i
        }(),
        x = function() {
            s(n, _t);
            var e = v(n);

            function n(t) {
                return m(this, n), e.call(this, t || !1)
            }
            return u(n, [{
                key: "isTruthy",
                get: function() {
                    return Boolean(this.value)
                }
            }, {
                key: "valueType",
                get: function() {
                    return N.Bool
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (null === this.value) return gt("Value.value");
                    if (t == this.valueType) return this;
                    if (t == N.Int) return new wt(this.value ? 1 : 0);
                    if (t == N.Float) return new F(this.value ? 1 : 0);
                    if (t == N.String) return new Tt(this.value ? "true" : "false");
                    throw this.BadCastException(t)
                }
            }, {
                key: "toString",
                value: function() {
                    return this.value ? "true" : "false"
                }
            }]), n
        }(),
        wt = function() {
            s(n, _t);
            var e = v(n);

            function n(t) {
                return m(this, n), e.call(this, t || 0)
            }
            return u(n, [{
                key: "isTruthy",
                get: function() {
                    return 0 != this.value
                }
            }, {
                key: "valueType",
                get: function() {
                    return N.Int
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (null === this.value) return gt("Value.value");
                    if (t == this.valueType) return this;
                    if (t == N.Bool) return new x(0 !== this.value);
                    if (t == N.Float) return new F(this.value);
                    if (t == N.String) return new Tt("" + this.value);
                    throw this.BadCastException(t)
                }
            }]), n
        }(),
        F = function() {
            s(n, _t);
            var e = v(n);

            function n(t) {
                return m(this, n), e.call(this, t || 0)
            }
            return u(n, [{
                key: "isTruthy",
                get: function() {
                    return 0 != this.value
                }
            }, {
                key: "valueType",
                get: function() {
                    return N.Float
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (null === this.value) return gt("Value.value");
                    if (t == this.valueType) return this;
                    if (t == N.Bool) return new x(0 !== this.value);
                    if (t == N.Int) return new wt(this.value);
                    if (t == N.String) return new Tt("" + this.value);
                    throw this.BadCastException(t)
                }
            }]), n
        }(),
        Tt = function() {
            s(i, _t);
            var n = v(i);

            function i(t) {
                var e;
                return m(this, i), (e = n.call(this, t || ""))._isNewline = "\n" == e.value, e._isInlineWhitespace = !0, null === e.value ? f(e, gt("Value.value")) : (0 < e.value.length && e.value.split("").every(function(t) {
                    return " " == t || "\t" == t || (e._isInlineWhitespace = !1)
                }), e)
            }
            return u(i, [{
                key: "valueType",
                get: function() {
                    return N.String
                }
            }, {
                key: "isTruthy",
                get: function() {
                    return null === this.value ? gt("Value.value") : 0 < this.value.length
                }
            }, {
                key: "isNewline",
                get: function() {
                    return this._isNewline
                }
            }, {
                key: "isInlineWhitespace",
                get: function() {
                    return this._isInlineWhitespace
                }
            }, {
                key: "isNonWhitespace",
                get: function() {
                    return !this.isNewline && !this.isInlineWhitespace
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (t == this.valueType) return this;
                    if (t == N.Int) {
                        var e = function(t, e) {
                            var n = 1 < arguments.length && void 0 !== e ? e : 0,
                                i = parseInt(t);
                            return Number.isNaN(i) ? {
                                result: n,
                                exists: !1
                            } : {
                                result: i,
                                exists: !0
                            }
                        }(this.value);
                        if (e.exists) return new wt(e.result);
                        throw this.BadCastException(t)
                    }
                    if (t != N.Float) throw this.BadCastException(t);
                    var n = function(t, e) {
                        var n = 1 < arguments.length && void 0 !== e ? e : 0,
                            i = parseFloat(t);
                        return Number.isNaN(i) ? {
                            result: n,
                            exists: !1
                        } : {
                            result: i,
                            exists: !0
                        }
                    }(this.value);
                    if (n.exists) return new F(n.result);
                    throw this.BadCastException(t)
                }
            }]), i
        }(),
        Et = function() {
            s(n, _t);
            var e = v(n);

            function n(t) {
                return m(this, n), e.call(this, t)
            }
            return u(n, [{
                key: "valueType",
                get: function() {
                    return N.DivertTarget
                }
            }, {
                key: "targetPath",
                get: function() {
                    return null === this.value ? gt("Value.value") : this.value
                },
                set: function(t) {
                    this.value = t
                }
            }, {
                key: "isTruthy",
                get: function() {
                    throw new Error("Shouldn't be checking the truthiness of a divert target")
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (t == this.valueType) return this;
                    throw this.BadCastException(t)
                }
            }, {
                key: "toString",
                value: function() {
                    return "DivertTargetValue(" + this.targetPath + ")"
                }
            }]), n
        }(),
        W = function() {
            s(r, _t);
            var i = v(r);

            function r(t) {
                var e, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1;
                return m(this, r), (e = i.call(this, t))._contextIndex = n, e
            }
            return u(r, [{
                key: "contextIndex",
                get: function() {
                    return this._contextIndex
                },
                set: function(t) {
                    this._contextIndex = t
                }
            }, {
                key: "variableName",
                get: function() {
                    return null === this.value ? gt("Value.value") : this.value
                },
                set: function(t) {
                    this.value = t
                }
            }, {
                key: "valueType",
                get: function() {
                    return N.VariablePointer
                }
            }, {
                key: "isTruthy",
                get: function() {
                    throw new Error("Shouldn't be checking the truthiness of a variable pointer")
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (t == this.valueType) return this;
                    throw this.BadCastException(t)
                }
            }, {
                key: "toString",
                value: function() {
                    return "VariablePointerValue(" + this.variableName + ")"
                }
            }, {
                key: "Copy",
                value: function() {
                    return new r(this.variableName, this.contextIndex)
                }
            }]), r
        }(),
        Pt = function() {
            s(r, _t);
            var i = v(r);

            function r(t, e) {
                var n;
                return m(this, r), n = i.call(this, null), t || e ? t instanceof Ct ? n.value = new Ct(t) : t instanceof kt && "number" == typeof e && (n.value = new Ct({
                    Key: t,
                    Value: e
                })) : n.value = new Ct, n
            }
            return u(r, [{
                key: "isTruthy",
                get: function() {
                    return null === this.value ? gt("this.value") : 0 < this.value.Count
                }
            }, {
                key: "valueType",
                get: function() {
                    return N.List
                }
            }, {
                key: "Cast",
                value: function(t) {
                    if (null === this.value) return gt("Value.value");
                    if (t == N.Int) {
                        var e = this.value.maxItem;
                        return e.Key.isNull ? new wt(0) : new wt(e.Value)
                    }
                    if (t == N.Float) {
                        var n = this.value.maxItem;
                        return n.Key.isNull ? new F(0) : new F(n.Value)
                    }
                    if (t == N.String) {
                        var i = this.value.maxItem;
                        return i.Key.isNull ? new Tt("") : new Tt(i.Key.toString())
                    }
                    if (t == this.valueType) return this;
                    throw this.BadCastException(t)
                }
            }], [{
                key: "RetainListOriginsForAssignment",
                value: function(t, e) {
                    var n = yt(t, r),
                        i = yt(e, r);
                    return i && null === i.value ? gt("newList.value") : n && null === n.value ? gt("oldList.value") : void(n && i && 0 == i.value.Count && i.value.SetInitialOriginNames(n.value.originNames))
                }
            }]), r
        }();
    (A = N = N || {})[A.Bool = -1] = "Bool", A[A.Int = 0] = "Int", A[A.Float = 1] = "Float", A[A.List = 2] = "List", A[A.String = 3] = "String", A[A.DivertTarget = 4] = "DivertTarget", A[A.VariablePointer = 5] = "VariablePointer";
    var V, L, R = function() {
            function e() {
                m(this, e), this.obj = null, this.approximate = !1
            }
            return u(e, [{
                key: "correctObj",
                get: function() {
                    return this.approximate ? null : this.obj
                }
            }, {
                key: "container",
                get: function() {
                    return this.obj instanceof Ot ? this.obj : null
                }
            }, {
                key: "copy",
                value: function() {
                    var t = new e;
                    return t.obj = this.obj, t.approximate = this.approximate, t
                }
            }]), e
        }(),
        Ot = function() {
            s(g, T);
            var e = v(g);

            function g() {
                var t;
                return m(this, g), (t = e.apply(this, arguments)).name = "", t._content = [], t.namedContent = new Map, t.visitsShouldBeCounted = !1, t.turnIndexShouldBeCounted = !1, t.countingAtStartOnly = !1, t._pathToFirstLeafContent = null, t
            }
            return u(g, [{
                key: "hasValidName",
                get: function() {
                    return null != this.name && 0 < this.name.length
                }
            }, {
                key: "content",
                get: function() {
                    return this._content
                },
                set: function(t) {
                    this.AddContent(t)
                }
            }, {
                key: "namedOnlyContent",
                get: function() {
                    var t, e = new Map,
                        n = pt(this.namedContent);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = S(t.value, 2),
                                r = i[0],
                                a = mt(i[1], T);
                            e.set(r, a)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    var s, o = pt(this.content);
                    try {
                        for (o.s(); !(s = o.n()).done;) {
                            var u = C(s.value);
                            null != u && u.hasValidName && e.delete(u.name)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    return 0 == e.size && (e = null), e
                },
                set: function(t) {
                    var e = this.namedOnlyContent;
                    if (null != e) {
                        var n, i = pt(e);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var r = S(n.value, 1)[0];
                                this.namedContent.delete(r)
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                    }
                    if (null != t) {
                        var a, s = pt(t);
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var o = C(S(a.value, 2)[1]);
                                null != o && this.AddToNamedContentOnly(o)
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                    }
                }
            }, {
                key: "countFlags",
                get: function() {
                    var t = 0;
                    return this.visitsShouldBeCounted && (t |= g.CountFlags.Visits), this.turnIndexShouldBeCounted && (t |= g.CountFlags.Turns), this.countingAtStartOnly && (t |= g.CountFlags.CountStartOnly), t == g.CountFlags.CountStartOnly && (t = 0), t
                },
                set: function(t) {
                    var e = t;
                    0 < (e & g.CountFlags.Visits) && (this.visitsShouldBeCounted = !0), 0 < (e & g.CountFlags.Turns) && (this.turnIndexShouldBeCounted = !0), 0 < (e & g.CountFlags.CountStartOnly) && (this.countingAtStartOnly = !0)
                }
            }, {
                key: "pathToFirstLeafContent",
                get: function() {
                    return null == this._pathToFirstLeafContent && (this._pathToFirstLeafContent = this.path.PathByAppendingPath(this.internalPathToFirstLeafContent)), this._pathToFirstLeafContent
                }
            }, {
                key: "internalPathToFirstLeafContent",
                get: function() {
                    for (var t = [], e = this; e instanceof g;) 0 < e.content.length && (t.push(new O.Component(0)), e = e.content[0]);
                    return new O(t)
                }
            }, {
                key: "AddContent",
                value: function(t) {
                    if (t instanceof Array) {
                        var e, n = pt(t);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = e.value;
                                this.AddContent(i)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    } else {
                        var r = t;
                        if (this._content.push(r), r.parent) throw new Error("content is already in " + r.parent);
                        (r.parent = this).TryAddNamedContent(r)
                    }
                }
            }, {
                key: "TryAddNamedContent",
                value: function(t) {
                    var e = C(t);
                    null != e && e.hasValidName && this.AddToNamedContentOnly(e)
                }
            }, {
                key: "AddToNamedContentOnly",
                value: function(t) {
                    k.AssertType(t, T, "Can only add Runtime.Objects to a Runtime.Container"), (mt(t, T).parent = this).namedContent.set(t.name, t)
                }
            }, {
                key: "ContentAtPath",
                value: function(t, e, n) {
                    var i = 1 < arguments.length && void 0 !== e ? e : 0,
                        r = 2 < arguments.length && void 0 !== n ? n : -1; - 1 == r && (r = t.length);
                    var a = new R;
                    a.approximate = !1;
                    for (var s = this, o = this, u = i; u < r; ++u) {
                        var l = t.GetComponent(u);
                        if (null == s) {
                            a.approximate = !0;
                            break
                        }
                        var h = s.ContentWithPathComponent(l);
                        if (null == h) {
                            a.approximate = !0;
                            break
                        }
                        s = yt(o = h, g)
                    }
                    return a.obj = o, a
                }
            }, {
                key: "InsertContent",
                value: function(t, e) {
                    if ((this.content[e] = t).parent) throw new Error("content is already in " + t.parent);
                    (t.parent = this).TryAddNamedContent(t)
                }
            }, {
                key: "AddContentsOfContainer",
                value: function(t) {
                    this.content = this.content.concat(t.content);
                    var e, n = pt(t.content);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value;
                            (i.parent = this).TryAddNamedContent(i)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "ContentWithPathComponent",
                value: function(t) {
                    if (t.isIndex) return 0 <= t.index && t.index < this.content.length ? this.content[t.index] : null;
                    if (t.isParent) return this.parent;
                    if (null === t.name) return gt("component.name");
                    var e = E(this.namedContent, t.name, null);
                    return e.exists ? mt(e.result, T) : null
                }
            }, {
                key: "BuildStringOfHierarchy",
                value: function(t, e, n) {
                    var i;
                    if (0 == arguments.length) return i = new St, this.BuildStringOfHierarchy(i, 0, null), i.toString();
                    i = t;
                    var r = e,
                        a = n;

                    function s() {
                        for (var t = 0; t < 4 * r; ++t) i.Append(" ")
                    }
                    s(), i.Append("["), this.hasValidName && i.AppendFormat(" ({0})", this.name), this == a && i.Append("  <---"), i.AppendLine(), r++;
                    for (var o = 0; o < this.content.length; ++o) {
                        var u = this.content[o];
                        u instanceof g ? u.BuildStringOfHierarchy(i, r, a) : (s(), u instanceof Tt ? (i.Append('"'), i.Append(u.toString().replace("\n", "\\n")), i.Append('"')) : i.Append(u.toString())), o != this.content.length - 1 && i.Append(","), u instanceof g || u != a || i.Append("  <---"), i.AppendLine()
                    }
                    var l, h = new Map,
                        c = pt(this.namedContent);
                    try {
                        for (c.s(); !(l = c.n()).done;) {
                            var f = S(l.value, 2),
                                v = f[0],
                                d = f[1];
                            0 <= this.content.indexOf(mt(d, T)) || h.set(v, d)
                        }
                    } catch (t) {
                        c.e(t)
                    } finally {
                        c.f()
                    }
                    if (0 < h.size) {
                        s(), i.AppendLine("-- named: --");
                        var p, y = pt(h);
                        try {
                            for (y.s(); !(p = y.n()).done;) {
                                var m = S(p.value, 2)[1];
                                k.AssertType(m, g, "Can only print out named Containers"), m.BuildStringOfHierarchy(i, r, a), i.AppendLine()
                            }
                        } catch (t) {
                            y.e(t)
                        } finally {
                            y.f()
                        }
                    }
                    r--, s(), i.Append("]")
                }
            }]), g
        }();
    V = Ot = Ot || {}, (L = V.CountFlags || (V.CountFlags = {}))[L.Visits = 1] = "Visits", L[L.Turns = 2] = "Turns", L[L.CountStartOnly = 4] = "CountStartOnly";
    var j, D, Nt, B, G = function() {
            s(e, T);
            var t = v(e);

            function e() {
                return m(this, e), t.apply(this, arguments)
            }
            return u(e, [{
                key: "toString",
                value: function() {
                    return "Glue"
                }
            }]), e
        }(),
        At = function() {
            s(i, T);
            var n = v(i);

            function i() {
                var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i.CommandType.NotSet;
                return m(this, i), (t = n.call(this))._commandType = e, t
            }
            return u(i, [{
                key: "commandType",
                get: function() {
                    return this._commandType
                }
            }, {
                key: "Copy",
                value: function() {
                    return new i(this.commandType)
                }
            }, {
                key: "toString",
                value: function() {
                    return this.commandType.toString()
                }
            }], [{
                key: "EvalStart",
                value: function() {
                    return new i(i.CommandType.EvalStart)
                }
            }, {
                key: "EvalOutput",
                value: function() {
                    return new i(i.CommandType.EvalOutput)
                }
            }, {
                key: "EvalEnd",
                value: function() {
                    return new i(i.CommandType.EvalEnd)
                }
            }, {
                key: "Duplicate",
                value: function() {
                    return new i(i.CommandType.Duplicate)
                }
            }, {
                key: "PopEvaluatedValue",
                value: function() {
                    return new i(i.CommandType.PopEvaluatedValue)
                }
            }, {
                key: "PopFunction",
                value: function() {
                    return new i(i.CommandType.PopFunction)
                }
            }, {
                key: "PopTunnel",
                value: function() {
                    return new i(i.CommandType.PopTunnel)
                }
            }, {
                key: "BeginString",
                value: function() {
                    return new i(i.CommandType.BeginString)
                }
            }, {
                key: "EndString",
                value: function() {
                    return new i(i.CommandType.EndString)
                }
            }, {
                key: "NoOp",
                value: function() {
                    return new i(i.CommandType.NoOp)
                }
            }, {
                key: "ChoiceCount",
                value: function() {
                    return new i(i.CommandType.ChoiceCount)
                }
            }, {
                key: "Turns",
                value: function() {
                    return new i(i.CommandType.Turns)
                }
            }, {
                key: "TurnsSince",
                value: function() {
                    return new i(i.CommandType.TurnsSince)
                }
            }, {
                key: "ReadCount",
                value: function() {
                    return new i(i.CommandType.ReadCount)
                }
            }, {
                key: "Random",
                value: function() {
                    return new i(i.CommandType.Random)
                }
            }, {
                key: "SeedRandom",
                value: function() {
                    return new i(i.CommandType.SeedRandom)
                }
            }, {
                key: "VisitIndex",
                value: function() {
                    return new i(i.CommandType.VisitIndex)
                }
            }, {
                key: "SequenceShuffleIndex",
                value: function() {
                    return new i(i.CommandType.SequenceShuffleIndex)
                }
            }, {
                key: "StartThread",
                value: function() {
                    return new i(i.CommandType.StartThread)
                }
            }, {
                key: "Done",
                value: function() {
                    return new i(i.CommandType.Done)
                }
            }, {
                key: "End",
                value: function() {
                    return new i(i.CommandType.End)
                }
            }, {
                key: "ListFromInt",
                value: function() {
                    return new i(i.CommandType.ListFromInt)
                }
            }, {
                key: "ListRange",
                value: function() {
                    return new i(i.CommandType.ListRange)
                }
            }, {
                key: "ListRandom",
                value: function() {
                    return new i(i.CommandType.ListRandom)
                }
            }]), i
        }();
    j = At = At || {}, (D = j.CommandType || (j.CommandType = {}))[D.NotSet = -1] = "NotSet", D[D.EvalStart = 0] = "EvalStart", D[D.EvalOutput = 1] = "EvalOutput", D[D.EvalEnd = 2] = "EvalEnd", D[D.Duplicate = 3] = "Duplicate", D[D.PopEvaluatedValue = 4] = "PopEvaluatedValue", D[D.PopFunction = 5] = "PopFunction", D[D.PopTunnel = 6] = "PopTunnel", D[D.BeginString = 7] = "BeginString", D[D.EndString = 8] = "EndString", D[D.NoOp = 9] = "NoOp", D[D.ChoiceCount = 10] = "ChoiceCount", D[D.Turns = 11] = "Turns", D[D.TurnsSince = 12] = "TurnsSince", D[D.Random = 13] = "Random", D[D.SeedRandom = 14] = "SeedRandom", D[D.VisitIndex = 15] = "VisitIndex", D[D.SequenceShuffleIndex = 16] = "SequenceShuffleIndex", D[D.StartThread = 17] = "StartThread", D[D.Done = 18] = "Done", D[D.End = 19] = "End", D[D.ListFromInt = 20] = "ListFromInt", D[D.ListRange = 21] = "ListRange", D[D.ListRandom = 22] = "ListRandom", D[D.ReadCount = 23] = "ReadCount", D[D.TOTAL_VALUES = 24] = "TOTAL_VALUES", (B = Nt = Nt || {})[B.Tunnel = 0] = "Tunnel", B[B.Function = 1] = "Function", B[B.FunctionEvaluationFromGame = 2] = "FunctionEvaluationFromGame";
    var It = function() {
            function e() {
                m(this, e), this.container = null, this.index = -1, 2 === arguments.length && (this.container = arguments[0], this.index = arguments[1])
            }
            return u(e, [{
                key: "Resolve",
                value: function() {
                    return this.index < 0 ? this.container : null == this.container ? null : 0 == this.container.content.length ? this.container : this.index >= this.container.content.length ? null : this.container.content[this.index]
                }
            }, {
                key: "isNull",
                get: function() {
                    return null == this.container
                }
            }, {
                key: "path",
                get: function() {
                    return this.isNull ? null : 0 <= this.index ? this.container.path.PathByAppendingComponent(new O.Component(this.index)) : this.container.path
                }
            }, {
                key: "toString",
                value: function() {
                    return this.container ? "Ink Pointer -> " + this.container.path.toString() + " -- index " + this.index : "Ink Pointer (null)"
                }
            }, {
                key: "copy",
                value: function() {
                    return new e(this.container, this.index)
                }
            }], [{
                key: "StartOf",
                value: function(t) {
                    return new e(t, 0)
                }
            }, {
                key: "Null",
                get: function() {
                    return new e(null, -1)
                }
            }]), e
        }(),
        xt = function() {
            s(i, T);
            var n = v(i);

            function i(t) {
                var e;
                return m(this, i), (e = n.call(this))._targetPath = null, e._targetPointer = It.Null, e.variableDivertName = null, e.pushesToStack = !1, e.stackPushType = 0, e.isExternal = !1, e.externalArgs = 0, e.isConditional = !1, e.pushesToStack = !1, void 0 !== t && (e.pushesToStack = !0, e.stackPushType = t), e
            }
            return u(i, [{
                key: "targetPath",
                get: function() {
                    var t;
                    return null == this._targetPath || !this._targetPath.isRelative || (t = this.targetPointer.Resolve()) && (this._targetPath = t.path), this._targetPath
                },
                set: function(t) {
                    this._targetPath = t, this._targetPointer = It.Null
                }
            }, {
                key: "targetPointer",
                get: function() {
                    if (this._targetPointer.isNull) {
                        var t = this.ResolvePath(this._targetPath).obj;
                        if (null === this._targetPath) return gt("this._targetPath");
                        if (null === this._targetPath.lastComponent) return gt("this._targetPath.lastComponent");
                        if (this._targetPath.lastComponent.isIndex) {
                            if (null === t) return gt("targetObj");
                            this._targetPointer.container = t.parent instanceof Ot ? t.parent : null, this._targetPointer.index = this._targetPath.lastComponent.index
                        } else this._targetPointer = It.StartOf(t instanceof Ot ? t : null)
                    }
                    return this._targetPointer.copy()
                }
            }, {
                key: "targetPathString",
                get: function() {
                    return null == this.targetPath ? null : this.CompactPathString(this.targetPath)
                },
                set: function(t) {
                    this.targetPath = null == t ? null : new O(t)
                }
            }, {
                key: "hasVariableTarget",
                get: function() {
                    return null != this.variableDivertName
                }
            }, {
                key: "Equals",
                value: function(t) {
                    var e = t;
                    return e instanceof i && this.hasVariableTarget == e.hasVariableTarget && (this.hasVariableTarget ? this.variableDivertName == e.variableDivertName : null === this.targetPath ? gt("this.targetPath") : this.targetPath.Equals(e.targetPath))
                }
            }, {
                key: "toString",
                value: function() {
                    if (this.hasVariableTarget) return "Divert(variable: " + this.variableDivertName + ")";
                    if (null == this.targetPath) return "Divert(null)";
                    var t = new St,
                        e = this.targetPath.toString();
                    return t.Append("Divert"), this.isConditional && t.Append("?"), this.pushesToStack && (this.stackPushType == Nt.Function ? t.Append(" function") : t.Append(" tunnel")), t.Append(" -> "), t.Append(this.targetPathString), t.Append(" ("), t.Append(e), t.Append(")"), t.toString()
                }
            }]), i
        }(),
        M = function() {
            s(i, T);
            var n = v(i);

            function i() {
                var t, e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                return m(this, i), (t = n.call(this))._pathOnChoice = null, t.hasCondition = !1, t.hasStartContent = !1, t.hasChoiceOnlyContent = !1, t.isInvisibleDefault = !1, t.onceOnly = !0, t.onceOnly = e, t
            }
            return u(i, [{
                key: "pathOnChoice",
                get: function() {
                    var t;
                    return null == this._pathOnChoice || !this._pathOnChoice.isRelative || (t = this.choiceTarget) && (this._pathOnChoice = t.path), this._pathOnChoice
                },
                set: function(t) {
                    this._pathOnChoice = t
                }
            }, {
                key: "choiceTarget",
                get: function() {
                    return null === this._pathOnChoice ? gt("ChoicePoint._pathOnChoice") : this.ResolvePath(this._pathOnChoice).container
                }
            }, {
                key: "pathStringOnChoice",
                get: function() {
                    return null === this.pathOnChoice ? gt("ChoicePoint.pathOnChoice") : this.CompactPathString(this.pathOnChoice)
                },
                set: function(t) {
                    this.pathOnChoice = new O(t)
                }
            }, {
                key: "flags",
                get: function() {
                    var t = 0;
                    return this.hasCondition && (t |= 1), this.hasStartContent && (t |= 2), this.hasChoiceOnlyContent && (t |= 4), this.isInvisibleDefault && (t |= 8), this.onceOnly && (t |= 16), t
                },
                set: function(t) {
                    this.hasCondition = 0 < (1 & t), this.hasStartContent = 0 < (2 & t), this.hasChoiceOnlyContent = 0 < (4 & t), this.isInvisibleDefault = 0 < (8 & t), this.onceOnly = 0 < (16 & t)
                }
            }, {
                key: "toString",
                value: function() {
                    return null === this.pathOnChoice ? gt("ChoicePoint.pathOnChoice") : "Choice: -> " + this.pathOnChoice.toString()
                }
            }]), i
        }(),
        Ft = function() {
            s(i, T);
            var n = v(i);

            function i() {
                var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                return m(this, i), (t = n.call(this)).pathForCount = null, t.name = e, t
            }
            return u(i, [{
                key: "containerForCount",
                get: function() {
                    return null === this.pathForCount ? null : this.ResolvePath(this.pathForCount).container
                }
            }, {
                key: "pathStringForCount",
                get: function() {
                    return null === this.pathForCount ? null : this.CompactPathString(this.pathForCount)
                },
                set: function(t) {
                    this.pathForCount = null === t ? null : new O(t)
                }
            }, {
                key: "toString",
                value: function() {
                    return null != this.name ? "var(" + this.name + ")" : "read_count(" + this.pathStringForCount + ")"
                }
            }]), i
        }(),
        Wt = function() {
            s(r, T);
            var i = v(r);

            function r(t, e) {
                var n;
                return m(this, r), (n = i.call(this)).variableName = t || null, n.isNewDeclaration = !!e, n.isGlobal = !1, n
            }
            return u(r, [{
                key: "toString",
                value: function() {
                    return "VarAssign to " + this.variableName
                }
            }]), r
        }(),
        Vt = function() {
            s(e, T);
            var t = v(e);

            function e() {
                return m(this, e), t.apply(this, arguments)
            }
            return e
        }(),
        Lt = function() {
            s(f, T);
            var r = v(f);

            function f() {
                var t, e, n, i;
                return m(this, f), (t = r.call(this))._name = null, t._numberOfParameters = 0, t._prototype = null, t._isPrototype = !1, t._operationFuncs = null, 0 === arguments.length ? f.GenerateNativeFunctionsIfNecessary() : 1 === arguments.length ? (e = arguments[0], f.GenerateNativeFunctionsIfNecessary(), t.name = e) : 2 === arguments.length && (n = arguments[0], i = arguments[1], t._isPrototype = !0, t.name = n, t.numberOfParameters = i), t
            }
            return u(f, [{
                key: "name",
                get: function() {
                    return null === this._name ? gt("NativeFunctionCall._name") : this._name
                },
                set: function(t) {
                    this._name = t, this._isPrototype || (null === f._nativeFunctions ? gt("NativeFunctionCall._nativeFunctions") : this._prototype = f._nativeFunctions.get(this._name) || null)
                }
            }, {
                key: "numberOfParameters",
                get: function() {
                    return this._prototype ? this._prototype.numberOfParameters : this._numberOfParameters
                },
                set: function(t) {
                    this._numberOfParameters = t
                }
            }, {
                key: "Call",
                value: function(t) {
                    if (this._prototype) return this._prototype.Call(t);
                    if (this.numberOfParameters != t.length) throw new Error("Unexpected number of parameters");
                    var e, n = !1,
                        i = pt(t);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var r = e.value;
                            if (r instanceof Vt) throw new bt('Attempting to perform operation on a void value. Did you forget to "return" a value from a function you called here?');
                            r instanceof Pt && (n = !0)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    if (2 == t.length && n) return this.CallBinaryListOperation(t);
                    var a = this.CoerceValuesToSingleType(t),
                        s = a[0].valueType;
                    return s == N.Int || s == N.Float || s == N.String || s == N.DivertTarget || s == N.List ? this.CallType(a) : null
                }
            }, {
                key: "CallType",
                value: function(t) {
                    var e = mt(t[0], _t),
                        n = e.valueType,
                        i = e,
                        r = t.length;
                    if (2 != r && 1 != r) throw new Error("Unexpected number of parameters to NativeFunctionCall: " + t.length);
                    if (null === this._operationFuncs) return gt("NativeFunctionCall._operationFuncs");
                    var a = this._operationFuncs.get(n);
                    if (!a) {
                        var s = N[n];
                        throw new bt("Cannot perform operation " + this.name + " on " + s)
                    }
                    if (2 == r) {
                        var o = mt(t[1], _t),
                            u = a;
                        if (null === i.value || null === o.value) return gt("NativeFunctionCall.Call BinaryOp values");
                        var l = u(i.value, o.value);
                        return _t.Create(l)
                    }
                    var h = a;
                    if (null === i.value) return gt("NativeFunctionCall.Call UnaryOp value");
                    var c = h(i.value);
                    return this.name === f.Int ? _t.Create(c, N.Int) : this.name === f.Float ? _t.Create(c, N.Float) : _t.Create(c, e.valueType)
                }
            }, {
                key: "CallBinaryListOperation",
                value: function(t) {
                    if (("+" == this.name || "-" == this.name) && t[0] instanceof Pt && t[1] instanceof wt) return this.CallListIncrementOperation(t);
                    var e = mt(t[0], _t),
                        n = mt(t[1], _t);
                    if (!("&&" != this.name && "||" != this.name || e.valueType == N.List && n.valueType == N.List)) {
                        if (null === this._operationFuncs) return gt("NativeFunctionCall._operationFuncs");
                        var i = this._operationFuncs.get(N.Int);
                        if (null === i) return gt("NativeFunctionCall.CallBinaryListOperation op");
                        var r = function(t) {
                            if ("boolean" == typeof t) return t;
                            throw new Error("".concat(t, " is not a boolean"))
                        }(i(e.isTruthy ? 1 : 0, n.isTruthy ? 1 : 0));
                        return new x(r)
                    }
                    if (e.valueType == N.List && n.valueType == N.List) return this.CallType([e, n]);
                    throw new bt("Can not call use " + this.name + " operation on " + N[e.valueType] + " and " + N[n.valueType])
                }
            }, {
                key: "CallListIncrementOperation",
                value: function(t) {
                    var e = mt(t[0], Pt),
                        n = mt(t[1], wt),
                        i = new Ct;
                    if (null === e.value) return gt("NativeFunctionCall.CallListIncrementOperation listVal.value");
                    var r, a = pt(e.value);
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            var s = S(r.value, 2),
                                o = s[0],
                                u = s[1],
                                l = kt.fromSerializedKey(o);
                            if (null === this._operationFuncs) return gt("NativeFunctionCall._operationFuncs");
                            var h = this._operationFuncs.get(N.Int);
                            if (null === n.value) return gt("NativeFunctionCall.CallListIncrementOperation intVal.value");
                            var c = h(u, n.value),
                                f = null;
                            if (null === e.value.origins) return gt("NativeFunctionCall.CallListIncrementOperation listVal.value.origins");
                            var v, d, p = pt(e.value.origins);
                            try {
                                for (p.s(); !(v = p.n()).done;) {
                                    var y = v.value;
                                    if (y.name == l.originName) {
                                        f = y;
                                        break
                                    }
                                }
                            } catch (t) {
                                p.e(t)
                            } finally {
                                p.f()
                            }
                            null == f || (d = f.TryGetItemWithValue(c, kt.Null)).exists && i.Add(d.result, c)
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    return new Pt(i)
                }
            }, {
                key: "CoerceValuesToSingleType",
                value: function(t) {
                    var e, n = N.Int,
                        i = null,
                        r = pt(t);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var a = mt(e.value, _t);
                            a.valueType > n && (n = a.valueType), a.valueType == N.List && (i = yt(a, Pt))
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    var s = [];
                    if (N[n] == N[N.List]) {
                        var o, u = pt(t);
                        try {
                            for (u.s(); !(o = u.n()).done;) {
                                var l = mt(o.value, _t);
                                if (l.valueType == N.List) s.push(l);
                                else {
                                    if (l.valueType != N.Int) {
                                        var h = N[l.valueType];
                                        throw new bt("Cannot mix Lists and " + h + " values in this operation")
                                    }
                                    var c = parseInt(l.valueObject);
                                    if (null === (i = mt(i, Pt)).value) return gt("NativeFunctionCall.CoerceValuesToSingleType specialCaseList.value");
                                    var f = i.value.originOfMaxItem;
                                    if (null === f) return gt("NativeFunctionCall.CoerceValuesToSingleType list");
                                    var v = f.TryGetItemWithValue(c, kt.Null);
                                    if (!v.exists) throw new bt("Could not find List item with the value " + c + " in " + f.name);
                                    var d = new Pt(v.result, c);
                                    s.push(d)
                                }
                            }
                        } catch (t) {
                            u.e(t)
                        } finally {
                            u.f()
                        }
                    } else {
                        var p, y = pt(t);
                        try {
                            for (y.s(); !(p = y.n()).done;) {
                                var m = mt(p.value, _t).Cast(n);
                                s.push(m)
                            }
                        } catch (t) {
                            y.e(t)
                        } finally {
                            y.f()
                        }
                    }
                    return s
                }
            }, {
                key: "AddOpFuncForType",
                value: function(t, e) {
                    null == this._operationFuncs && (this._operationFuncs = new Map), this._operationFuncs.set(t, e)
                }
            }, {
                key: "toString",
                value: function() {
                    return 'Native "' + this.name + '"'
                }
            }], [{
                key: "CallWithName",
                value: function(t) {
                    return new f(t)
                }
            }, {
                key: "CallExistsWithName",
                value: function(t) {
                    return this.GenerateNativeFunctionsIfNecessary(), this._nativeFunctions.get(t)
                }
            }, {
                key: "Identity",
                value: function(t) {
                    return t
                }
            }, {
                key: "GenerateNativeFunctionsIfNecessary",
                value: function() {
                    null == this._nativeFunctions && (this._nativeFunctions = new Map, this.AddIntBinaryOp(this.Add, function(t, e) {
                        return t + e
                    }), this.AddIntBinaryOp(this.Subtract, function(t, e) {
                        return t - e
                    }), this.AddIntBinaryOp(this.Multiply, function(t, e) {
                        return t * e
                    }), this.AddIntBinaryOp(this.Divide, function(t, e) {
                        return Math.floor(t / e)
                    }), this.AddIntBinaryOp(this.Mod, function(t, e) {
                        return t % e
                    }), this.AddIntUnaryOp(this.Negate, function(t) {
                        return -t
                    }), this.AddIntBinaryOp(this.Equal, function(t, e) {
                        return t == e
                    }), this.AddIntBinaryOp(this.Greater, function(t, e) {
                        return e < t
                    }), this.AddIntBinaryOp(this.Less, function(t, e) {
                        return t < e
                    }), this.AddIntBinaryOp(this.GreaterThanOrEquals, function(t, e) {
                        return e <= t
                    }), this.AddIntBinaryOp(this.LessThanOrEquals, function(t, e) {
                        return t <= e
                    }), this.AddIntBinaryOp(this.NotEquals, function(t, e) {
                        return t != e
                    }), this.AddIntUnaryOp(this.Not, function(t) {
                        return 0 == t
                    }), this.AddIntBinaryOp(this.And, function(t, e) {
                        return 0 != t && 0 != e
                    }), this.AddIntBinaryOp(this.Or, function(t, e) {
                        return 0 != t || 0 != e
                    }), this.AddIntBinaryOp(this.Max, function(t, e) {
                        return Math.max(t, e)
                    }), this.AddIntBinaryOp(this.Min, function(t, e) {
                        return Math.min(t, e)
                    }), this.AddIntBinaryOp(this.Pow, function(t, e) {
                        return Math.pow(t, e)
                    }), this.AddIntUnaryOp(this.Floor, f.Identity), this.AddIntUnaryOp(this.Ceiling, f.Identity), this.AddIntUnaryOp(this.Int, f.Identity), this.AddIntUnaryOp(this.Float, function(t) {
                        return t
                    }), this.AddFloatBinaryOp(this.Add, function(t, e) {
                        return t + e
                    }), this.AddFloatBinaryOp(this.Subtract, function(t, e) {
                        return t - e
                    }), this.AddFloatBinaryOp(this.Multiply, function(t, e) {
                        return t * e
                    }), this.AddFloatBinaryOp(this.Divide, function(t, e) {
                        return t / e
                    }), this.AddFloatBinaryOp(this.Mod, function(t, e) {
                        return t % e
                    }), this.AddFloatUnaryOp(this.Negate, function(t) {
                        return -t
                    }), this.AddFloatBinaryOp(this.Equal, function(t, e) {
                        return t == e
                    }), this.AddFloatBinaryOp(this.Greater, function(t, e) {
                        return e < t
                    }), this.AddFloatBinaryOp(this.Less, function(t, e) {
                        return t < e
                    }), this.AddFloatBinaryOp(this.GreaterThanOrEquals, function(t, e) {
                        return e <= t
                    }), this.AddFloatBinaryOp(this.LessThanOrEquals, function(t, e) {
                        return t <= e
                    }), this.AddFloatBinaryOp(this.NotEquals, function(t, e) {
                        return t != e
                    }), this.AddFloatUnaryOp(this.Not, function(t) {
                        return 0 == t
                    }), this.AddFloatBinaryOp(this.And, function(t, e) {
                        return 0 != t && 0 != e
                    }), this.AddFloatBinaryOp(this.Or, function(t, e) {
                        return 0 != t || 0 != e
                    }), this.AddFloatBinaryOp(this.Max, function(t, e) {
                        return Math.max(t, e)
                    }), this.AddFloatBinaryOp(this.Min, function(t, e) {
                        return Math.min(t, e)
                    }), this.AddFloatBinaryOp(this.Pow, function(t, e) {
                        return Math.pow(t, e)
                    }), this.AddFloatUnaryOp(this.Floor, function(t) {
                        return Math.floor(t)
                    }), this.AddFloatUnaryOp(this.Ceiling, function(t) {
                        return Math.ceil(t)
                    }), this.AddFloatUnaryOp(this.Int, function(t) {
                        return Math.floor(t)
                    }), this.AddFloatUnaryOp(this.Float, f.Identity), this.AddStringBinaryOp(this.Add, function(t, e) {
                        return t + e
                    }), this.AddStringBinaryOp(this.Equal, function(t, e) {
                        return t === e
                    }), this.AddStringBinaryOp(this.NotEquals, function(t, e) {
                        return !(t === e)
                    }), this.AddStringBinaryOp(this.Has, function(t, e) {
                        return t.includes(e)
                    }), this.AddStringBinaryOp(this.Hasnt, function(t, e) {
                        return !t.includes(e)
                    }), this.AddListBinaryOp(this.Add, function(t, e) {
                        return t.Union(e)
                    }), this.AddListBinaryOp(this.Subtract, function(t, e) {
                        return t.Without(e)
                    }), this.AddListBinaryOp(this.Has, function(t, e) {
                        return t.Contains(e)
                    }), this.AddListBinaryOp(this.Hasnt, function(t, e) {
                        return !t.Contains(e)
                    }), this.AddListBinaryOp(this.Intersect, function(t, e) {
                        return t.Intersect(e)
                    }), this.AddListBinaryOp(this.Equal, function(t, e) {
                        return t.Equals(e)
                    }), this.AddListBinaryOp(this.Greater, function(t, e) {
                        return t.GreaterThan(e)
                    }), this.AddListBinaryOp(this.Less, function(t, e) {
                        return t.LessThan(e)
                    }), this.AddListBinaryOp(this.GreaterThanOrEquals, function(t, e) {
                        return t.GreaterThanOrEquals(e)
                    }), this.AddListBinaryOp(this.LessThanOrEquals, function(t, e) {
                        return t.LessThanOrEquals(e)
                    }), this.AddListBinaryOp(this.NotEquals, function(t, e) {
                        return !t.Equals(e)
                    }), this.AddListBinaryOp(this.And, function(t, e) {
                        return 0 < t.Count && 0 < e.Count
                    }), this.AddListBinaryOp(this.Or, function(t, e) {
                        return 0 < t.Count || 0 < e.Count
                    }), this.AddListUnaryOp(this.Not, function(t) {
                        return 0 == t.Count ? 1 : 0
                    }), this.AddListUnaryOp(this.Invert, function(t) {
                        return t.inverse
                    }), this.AddListUnaryOp(this.All, function(t) {
                        return t.all
                    }), this.AddListUnaryOp(this.ListMin, function(t) {
                        return t.MinAsList()
                    }), this.AddListUnaryOp(this.ListMax, function(t) {
                        return t.MaxAsList()
                    }), this.AddListUnaryOp(this.Count, function(t) {
                        return t.Count
                    }), this.AddListUnaryOp(this.ValueOfList, function(t) {
                        return t.maxItem.Value
                    }), this.AddOpToNativeFunc(this.Equal, 2, N.DivertTarget, function(t, e) {
                        return t.Equals(e)
                    }), this.AddOpToNativeFunc(this.NotEquals, 2, N.DivertTarget, function(t, e) {
                        return !t.Equals(e)
                    }))
                }
            }, {
                key: "AddOpToNativeFunc",
                value: function(t, e, n, i) {
                    if (null === this._nativeFunctions) return gt("NativeFunctionCall._nativeFunctions");
                    var r = this._nativeFunctions.get(t);
                    r || (r = new f(t, e), this._nativeFunctions.set(t, r)), r.AddOpFuncForType(n, i)
                }
            }, {
                key: "AddIntBinaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 2, N.Int, e)
                }
            }, {
                key: "AddIntUnaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 1, N.Int, e)
                }
            }, {
                key: "AddFloatBinaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 2, N.Float, e)
                }
            }, {
                key: "AddFloatUnaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 1, N.Float, e)
                }
            }, {
                key: "AddStringBinaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 2, N.String, e)
                }
            }, {
                key: "AddListBinaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 2, N.List, e)
                }
            }, {
                key: "AddListUnaryOp",
                value: function(t, e) {
                    this.AddOpToNativeFunc(t, 1, N.List, e)
                }
            }]), f
        }();
    Lt.Add = "+", Lt.Subtract = "-", Lt.Divide = "/", Lt.Multiply = "*", Lt.Mod = "%", Lt.Negate = "_", Lt.Equal = "==", Lt.Greater = ">", Lt.Less = "<", Lt.GreaterThanOrEquals = ">=", Lt.LessThanOrEquals = "<=", Lt.NotEquals = "!=", Lt.Not = "!", Lt.And = "&&", Lt.Or = "||", Lt.Min = "MIN", Lt.Max = "MAX", Lt.Pow = "POW", Lt.Floor = "FLOOR", Lt.Ceiling = "CEILING", Lt.Int = "INT", Lt.Float = "FLOAT", Lt.Has = "?", Lt.Hasnt = "!?", Lt.Intersect = "^", Lt.ListMin = "LIST_MIN", Lt.ListMax = "LIST_MAX", Lt.All = "LIST_ALL", Lt.Count = "LIST_COUNT", Lt.ValueOfList = "LIST_VALUE", Lt.Invert = "LIST_INVERT", Lt._nativeFunctions = null;
    var J = function() {
            s(i, T);
            var n = v(i);

            function i(t) {
                var e;
                return m(this, i), (e = n.call(this)).text = t.toString() || "", e
            }
            return u(i, [{
                key: "toString",
                value: function() {
                    return "# " + this.text
                }
            }]), i
        }(),
        U = function() {
            s(n, T);
            var e = v(n);

            function n() {
                var t;
                return m(this, n), (t = e.apply(this, arguments)).text = "", t.index = 0, t.threadAtGeneration = null, t.sourcePath = "", t.targetPath = null, t.isInvisibleDefault = !1, t.originalThreadIndex = 0, t
            }
            return u(n, [{
                key: "pathStringOnChoice",
                get: function() {
                    return null === this.targetPath ? gt("Choice.targetPath") : this.targetPath.toString()
                },
                set: function(t) {
                    this.targetPath = new O(t)
                }
            }]), n
        }(),
        q = function() {
            function n(t, e) {
                m(this, n), this._name = t || "", this._items = null, this._itemNameToValues = e || new Map
            }
            return u(n, [{
                key: "name",
                get: function() {
                    return this._name
                }
            }, {
                key: "items",
                get: function() {
                    if (null == this._items) {
                        this._items = new Map;
                        var t, e = pt(this._itemNameToValues);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var n = S(t.value, 2),
                                    i = n[0],
                                    r = n[1],
                                    a = new kt(this.name, i);
                                this._items.set(a.serialized(), r)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                    return this._items
                }
            }, {
                key: "ValueForItem",
                value: function(t) {
                    if (!t.itemName) return 0;
                    var e = this._itemNameToValues.get(t.itemName);
                    return void 0 !== e ? e : 0
                }
            }, {
                key: "ContainsItem",
                value: function(t) {
                    return !!t.itemName && (t.originName == this.name && this._itemNameToValues.has(t.itemName))
                }
            }, {
                key: "ContainsItemWithName",
                value: function(t) {
                    return this._itemNameToValues.has(t)
                }
            }, {
                key: "TryGetItemWithValue",
                value: function(t) {
                    var e, n = pt(this._itemNameToValues);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = S(e.value, 2),
                                r = i[0];
                            if (i[1] == t) return {
                                result: new kt(this.name, r),
                                exists: !0
                            }
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return {
                        result: kt.Null,
                        exists: !1
                    }
                }
            }, {
                key: "TryGetValueForItem",
                value: function(t) {
                    if (!t.itemName) return {
                        result: 0,
                        exists: !1
                    };
                    var e = this._itemNameToValues.get(t.itemName);
                    return e ? {
                        result: e,
                        exists: !0
                    } : {
                        result: 0,
                        exists: !1
                    }
                }
            }]), n
        }(),
        K = function() {
            function c(t) {
                m(this, c), this._lists = new Map, this._allUnambiguousListValueCache = new Map;
                var e, n = pt(t);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var i = e.value;
                        this._lists.set(i.name, i);
                        var r, a = pt(i.items);
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var s = S(r.value, 2),
                                    o = s[0],
                                    u = s[1],
                                    l = kt.fromSerializedKey(o),
                                    h = new Pt(l, u);
                                if (!l.itemName) throw new Error("item.itemName is null or undefined.");
                                this._allUnambiguousListValueCache.set(l.itemName, h), this._allUnambiguousListValueCache.set(l.fullName, h)
                            }
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
            return u(c, [{
                key: "lists",
                get: function() {
                    var t, e = [],
                        n = pt(this._lists);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var i = S(t.value, 2)[1];
                            e.push(i)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return e
                }
            }, {
                key: "TryListGetDefinition",
                value: function(t, e) {
                    if (null === t) return {
                        result: e,
                        exists: !1
                    };
                    var n = this._lists.get(t);
                    return n ? {
                        result: n,
                        exists: !0
                    } : {
                        result: e,
                        exists: !1
                    }
                }
            }, {
                key: "FindSingleItemListWithName",
                value: function(t) {
                    if (null === t) return gt("name");
                    var e = this._allUnambiguousListValueCache.get(t);
                    return void 0 !== e ? e : null
                }
            }]), c
        }(),
        z = function() {
            function E() {
                m(this, E)
            }
            return u(E, null, [{
                key: "JArrayToRuntimeObjList",
                value: function(t, e) {
                    var n = 1 < arguments.length && void 0 !== e && e,
                        i = t.length;
                    n && i--;
                    for (var r = [], a = 0; a < i; a++) {
                        var s = t[a],
                            o = this.JTokenToRuntimeObject(s);
                        if (null === o) return gt("runtimeObj");
                        r.push(o)
                    }
                    return r
                }
            }, {
                key: "WriteDictionaryRuntimeObjs",
                value: function(t, e) {
                    t.WriteObjectStart();
                    var n, i = pt(e);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = S(n.value, 2),
                                a = r[0],
                                s = r[1];
                            t.WritePropertyStart(a), this.WriteRuntimeObject(t, s), t.WritePropertyEnd()
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    t.WriteObjectEnd()
                }
            }, {
                key: "WriteListRuntimeObjs",
                value: function(t, e) {
                    t.WriteArrayStart();
                    var n, i = pt(e);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = n.value;
                            this.WriteRuntimeObject(t, r)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    t.WriteArrayEnd()
                }
            }, {
                key: "WriteIntDictionary",
                value: function(t, e) {
                    t.WriteObjectStart();
                    var n, i = pt(e);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = S(n.value, 2),
                                a = r[0],
                                s = r[1];
                            t.WriteIntProperty(a, s)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    t.WriteObjectEnd()
                }
            }, {
                key: "WriteRuntimeObject",
                value: function(t, e) {
                    var n = yt(e, Ot);
                    if (n) this.WriteRuntimeContainer(t, n);
                    else {
                        var i = yt(e, xt);
                        if (i) {
                            var r, a = "->";
                            return i.isExternal ? a = "x()" : i.pushesToStack && (i.stackPushType == Nt.Function ? a = "f()" : i.stackPushType == Nt.Tunnel && (a = "->t->")), r = i.hasVariableTarget ? i.variableDivertName : i.targetPathString, t.WriteObjectStart(), t.WriteProperty(a, r), i.hasVariableTarget && t.WriteProperty("var", !0), i.isConditional && t.WriteProperty("c", !0), 0 < i.externalArgs && t.WriteIntProperty("exArgs", i.externalArgs), void t.WriteObjectEnd()
                        }
                        var s = yt(e, M);
                        if (s) return t.WriteObjectStart(), t.WriteProperty("*", s.pathStringOnChoice), t.WriteIntProperty("flg", s.flags), void t.WriteObjectEnd();
                        var o = yt(e, x);
                        if (o) t.WriteBool(o.value);
                        else {
                            var u = yt(e, wt);
                            if (u) t.WriteInt(u.value);
                            else {
                                var l = yt(e, F);
                                if (l) t.WriteFloat(l.value);
                                else {
                                    var h = yt(e, Tt);
                                    if (h) h.isNewline ? t.Write("\n", !1) : (t.WriteStringStart(), t.WriteStringInner("^"), t.WriteStringInner(h.value), t.WriteStringEnd());
                                    else {
                                        var c = yt(e, Pt);
                                        if (c) this.WriteInkList(t, c);
                                        else {
                                            var f = yt(e, Et);
                                            if (f) return t.WriteObjectStart(), null === f.value ? gt("divTargetVal.value") : (t.WriteProperty("^->", f.value.componentsString), void t.WriteObjectEnd());
                                            var v = yt(e, W);
                                            if (v) return t.WriteObjectStart(), t.WriteProperty("^var", v.value), t.WriteIntProperty("ci", v.contextIndex), void t.WriteObjectEnd();
                                            if (yt(e, G)) t.Write("<>");
                                            else {
                                                var d = yt(e, At);
                                                if (d) t.Write(E._controlCommandNames[d.commandType]);
                                                else {
                                                    var p = yt(e, Lt);
                                                    if (p) {
                                                        var y = p.name;
                                                        return "^" == y && (y = "L^"), void t.Write(y)
                                                    }
                                                    var m = yt(e, Ft);
                                                    if (m) {
                                                        t.WriteObjectStart();
                                                        var g = m.pathStringForCount;
                                                        return null != g ? t.WriteProperty("CNT?", g) : t.WriteProperty("VAR?", m.name), void t.WriteObjectEnd()
                                                    }
                                                    var S = yt(e, Wt);
                                                    if (S) {
                                                        t.WriteObjectStart();
                                                        var k = S.isGlobal ? "VAR=" : "temp=";
                                                        return t.WriteProperty(k, S.variableName), S.isNewDeclaration || t.WriteProperty("re", !0), void t.WriteObjectEnd()
                                                    }
                                                    if (yt(e, Vt)) t.Write("void");
                                                    else {
                                                        var C = yt(e, J);
                                                        if (C) return t.WriteObjectStart(), t.WriteProperty("#", C.text), void t.WriteObjectEnd();
                                                        var b = yt(e, U);
                                                        if (!b) throw new Error("Failed to convert runtime object to Json token: " + e);
                                                        this.WriteChoice(t, b)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, {
                key: "JObjectToDictionaryRuntimeObjs",
                value: function(t) {
                    var e = new Map;
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var i = this.JTokenToRuntimeObject(t[n]);
                            if (null === i) return gt("inkObject");
                            e.set(n, i)
                        }
                    return e
                }
            }, {
                key: "JObjectToIntDictionary",
                value: function(t) {
                    var e = new Map;
                    for (var n in t) t.hasOwnProperty(n) && e.set(n, parseInt(t[n]));
                    return e
                }
            }, {
                key: "JTokenToRuntimeObject",
                value: function(t) {
                    if ("number" == typeof t && !isNaN(t) || "boolean" == typeof t) return _t.Create(t);
                    if ("string" == typeof t) {
                        var e = t.toString(),
                            n = e[0];
                        if ("^" == n) return new Tt(e.substring(1));
                        if ("\n" == n && 1 == e.length) return new Tt("\n");
                        if ("<>" == e) return new G;
                        for (var i = 0; i < E._controlCommandNames.length; ++i) {
                            if (e == E._controlCommandNames[i]) return new At(i)
                        }
                        if ("L^" == e && (e = "^"), Lt.CallExistsWithName(e)) return Lt.CallWithName(e);
                        if ("->->" == e) return At.PopTunnel();
                        if ("~ret" == e) return At.PopFunction();
                        if ("void" == e) return new Vt
                    }
                    if ("object" === P(t) && !Array.isArray(t)) {
                        var r, a = t;
                        if (a["^->"]) return r = a["^->"], new Et(new O(r.toString()));
                        if (a["^var"]) {
                            r = a["^var"];
                            var s = new W(r.toString());
                            return "ci" in a && (r = a.ci, s.contextIndex = parseInt(r)), s
                        }
                        var o = !1,
                            u = !1,
                            l = Nt.Function,
                            h = !1;
                        if ((r = a["->"]) ? o = !0 : (r = a["f()"]) ? (u = o = !0, l = Nt.Function) : (r = a["->t->"]) ? (u = o = !0, l = Nt.Tunnel) : (r = a["x()"]) && (u = !(h = o = !0), l = Nt.Function), o) {
                            var c = new xt;
                            c.pushesToStack = u, c.stackPushType = l, c.isExternal = h;
                            var f = r.toString();
                            return (r = a.var) ? c.variableDivertName = f : c.targetPathString = f, c.isConditional = !!a.c, h && (r = a.exArgs) && (c.externalArgs = parseInt(r)), c
                        }
                        if (r = a["*"]) {
                            var v = new M;
                            return v.pathStringOnChoice = r.toString(), (r = a.flg) && (v.flags = parseInt(r)), v
                        }
                        if (r = a["VAR?"]) return new Ft(r.toString());
                        if (r = a["CNT?"]) {
                            var d = new Ft;
                            return d.pathStringForCount = r.toString(), d
                        }
                        var p = !1,
                            y = !1;
                        if ((r = a["VAR="]) ? y = p = !0 : (r = a["temp="]) && (y = !(p = !0)), p) {
                            var m = r.toString(),
                                g = !a.re,
                                S = new Wt(m, g);
                            return S.isGlobal = y, S
                        }
                        if (void 0 !== a["#"]) return r = a["#"], new J(r.toString());
                        if (r = a.list) {
                            var k, C, b, _ = r,
                                w = new Ct;
                            for (var T in (r = a.origins) && w.SetInitialOriginNames(r), _) {
                                _.hasOwnProperty(T) && (k = _[T], C = new kt(T), b = parseInt(k), w.Add(C, b))
                            }
                            return new Pt(w)
                        }
                        if (null != a.originalChoicePath) return this.JObjectToChoice(a)
                    }
                    if (Array.isArray(t)) return this.JArrayToContainer(t);
                    if (null == t) return null;
                    throw new Error("Failed to convert token to runtime object: " + JSON.stringify(t))
                }
            }, {
                key: "WriteRuntimeContainer",
                value: function(t, e, n) {
                    var i = 2 < arguments.length && void 0 !== n && n;
                    if (t.WriteArrayStart(), null === e) return gt("container");
                    var r, a = pt(e.content);
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            var s = r.value;
                            this.WriteRuntimeObject(t, s)
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    var o = e.namedOnlyContent,
                        u = e.countFlags,
                        l = null != e.name && !i,
                        h = null != o || 0 < u || l;
                    if (h && t.WriteObjectStart(), null != o) {
                        var c, f = pt(o);
                        try {
                            for (f.s(); !(c = f.n()).done;) {
                                var v = S(c.value, 2),
                                    d = v[0],
                                    p = yt(v[1], Ot);
                                t.WritePropertyStart(d), this.WriteRuntimeContainer(t, p, !0), t.WritePropertyEnd()
                            }
                        } catch (t) {
                            f.e(t)
                        } finally {
                            f.f()
                        }
                    }
                    l && t.WriteProperty("#n", e.name), h ? t.WriteObjectEnd() : t.WriteNull(), t.WriteArrayEnd()
                }
            }, {
                key: "JArrayToContainer",
                value: function(t) {
                    var e = new Ot;
                    e.content = this.JArrayToRuntimeObjList(t, !0);
                    var n = t[t.length - 1];
                    if (null != n) {
                        var i, r, a = new Map;
                        for (var s in n) {
                            "#f" == s ? e.countFlags = parseInt(n[s]) : "#n" == s ? e.name = n[s].toString() : ((r = yt(i = this.JTokenToRuntimeObject(n[s]), Ot)) && (r.name = s), a.set(s, i))
                        }
                        e.namedOnlyContent = a
                    }
                    return e
                }
            }, {
                key: "JObjectToChoice",
                value: function(t) {
                    var e = new U;
                    return e.text = t.text.toString(), e.index = parseInt(t.index), e.sourcePath = t.originalChoicePath.toString(), e.originalThreadIndex = parseInt(t.originalThreadIndex), e.pathStringOnChoice = t.targetPath.toString(), e
                }
            }, {
                key: "WriteChoice",
                value: function(t, e) {
                    t.WriteObjectStart(), t.WriteProperty("text", e.text), t.WriteIntProperty("index", e.index), t.WriteProperty("originalChoicePath", e.sourcePath), t.WriteIntProperty("originalThreadIndex", e.originalThreadIndex), t.WriteProperty("targetPath", e.pathStringOnChoice), t.WriteObjectEnd()
                }
            }, {
                key: "WriteInkList",
                value: function(t, e) {
                    var n = e.value;
                    if (null === n) return gt("rawList");
                    t.WriteObjectStart(), t.WritePropertyStart("list"), t.WriteObjectStart();
                    var i, r = pt(n);
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var a = S(i.value, 2),
                                s = a[0],
                                o = a[1],
                                u = kt.fromSerializedKey(s),
                                l = o;
                            if (null === u.itemName) return gt("item.itemName");
                            t.WritePropertyNameStart(), t.WritePropertyNameInner(u.originName ? u.originName : "?"), t.WritePropertyNameInner("."), t.WritePropertyNameInner(u.itemName), t.WritePropertyNameEnd(), t.Write(l), t.WritePropertyEnd()
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    if (t.WriteObjectEnd(), t.WritePropertyEnd(), 0 == n.Count && null != n.originNames && 0 < n.originNames.length) {
                        t.WritePropertyStart("origins"), t.WriteArrayStart();
                        var h, c = pt(n.originNames);
                        try {
                            for (c.s(); !(h = c.n()).done;) {
                                var f = h.value;
                                t.Write(f)
                            }
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                        t.WriteArrayEnd(), t.WritePropertyEnd()
                    }
                    t.WriteObjectEnd()
                }
            }, {
                key: "ListDefinitionsToJToken",
                value: function(t) {
                    var e, n = {},
                        i = pt(t.lists);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var r, a = e.value,
                                s = {},
                                o = pt(a.items);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var u = S(r.value, 2),
                                        l = u[0],
                                        h = u[1],
                                        c = kt.fromSerializedKey(l);
                                    if (null === c.itemName) return gt("item.itemName");
                                    s[c.itemName] = h
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            n[a.name] = s
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return n
                }
            }, {
                key: "JTokenToListDefinitions",
                value: function(t) {
                    var e = t,
                        n = [];
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var r, a = i.toString(),
                                s = e[i],
                                o = new Map;
                            for (var u in s) {
                                e.hasOwnProperty(i) && (r = s[u], o.set(u, parseInt(r)))
                            }
                            var l = new q(a, o);
                            n.push(l)
                        }
                    return new K(n)
                }
            }]), E
        }();
    z._controlCommandNames = function() {
        var t = [];
        t[At.CommandType.EvalStart] = "ev", t[At.CommandType.EvalOutput] = "out", t[At.CommandType.EvalEnd] = "/ev", t[At.CommandType.Duplicate] = "du", t[At.CommandType.PopEvaluatedValue] = "pop", t[At.CommandType.PopFunction] = "~ret", t[At.CommandType.PopTunnel] = "->->", t[At.CommandType.BeginString] = "str", t[At.CommandType.EndString] = "/str", t[At.CommandType.NoOp] = "nop", t[At.CommandType.ChoiceCount] = "choiceCnt", t[At.CommandType.Turns] = "turn", t[At.CommandType.TurnsSince] = "turns", t[At.CommandType.ReadCount] = "readc", t[At.CommandType.Random] = "rnd", t[At.CommandType.SeedRandom] = "srnd", t[At.CommandType.VisitIndex] = "visit", t[At.CommandType.SequenceShuffleIndex] = "seq", t[At.CommandType.StartThread] = "thread", t[At.CommandType.Done] = "done", t[At.CommandType.End] = "end", t[At.CommandType.ListFromInt] = "listInt", t[At.CommandType.ListRange] = "range", t[At.CommandType.ListRandom] = "lrnd";
        for (var e = 0; e < At.CommandType.TOTAL_VALUES; ++e)
            if (null == t[e]) throw new Error("Control command not accounted for in serialisation");
        return t
    }();
    var H = function() {
        function s() {
            if (m(this, s), this._threadCounter = 0, this._startOfRoot = It.Null, arguments[0] instanceof a.Story) {
                var t = arguments[0];
                this._startOfRoot = It.StartOf(t.rootContentContainer), this.Reset()
            } else {
                var e = arguments[0];
                this._threads = [];
                var n, i = pt(e._threads);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var r = n.value;
                        this._threads.push(r.Copy())
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                this._threadCounter = e._threadCounter, this._startOfRoot = e._startOfRoot.copy()
            }
        }
        return u(s, [{
            key: "elements",
            get: function() {
                return this.callStack
            }
        }, {
            key: "depth",
            get: function() {
                return this.elements.length
            }
        }, {
            key: "currentElement",
            get: function() {
                var t = this._threads[this._threads.length - 1].callstack;
                return t[t.length - 1]
            }
        }, {
            key: "currentElementIndex",
            get: function() {
                return this.callStack.length - 1
            }
        }, {
            key: "currentThread",
            get: function() {
                return this._threads[this._threads.length - 1]
            },
            set: function(t) {
                k.Assert(1 == this._threads.length, "Shouldn't be directly setting the current thread when we have a stack of them"), this._threads.length = 0, this._threads.push(t)
            }
        }, {
            key: "canPop",
            get: function() {
                return 1 < this.callStack.length
            }
        }, {
            key: "Reset",
            value: function() {
                this._threads = [], this._threads.push(new s.Thread), this._threads[0].callstack.push(new s.Element(Nt.Tunnel, this._startOfRoot))
            }
        }, {
            key: "SetJsonToken",
            value: function(t, e) {
                this._threads.length = 0;
                var n, i = pt(t.threads);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var r = n.value,
                            a = new s.Thread(r, e);
                        this._threads.push(a)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                this._threadCounter = parseInt(t.threadCounter), this._startOfRoot = It.StartOf(e.rootContentContainer)
            }
        }, {
            key: "WriteJson",
            value: function(t) {
                var i = this;
                t.WriteObject(function(t) {
                    t.WritePropertyStart("threads"), t.WriteArrayStart();
                    var e, n = pt(i._threads);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            e.value.WriteJson(t)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    t.WriteArrayEnd(), t.WritePropertyEnd(), t.WritePropertyStart("threadCounter"), t.WriteInt(i._threadCounter), t.WritePropertyEnd()
                })
            }
        }, {
            key: "PushThread",
            value: function() {
                var t = this.currentThread.Copy();
                this._threadCounter++, t.threadIndex = this._threadCounter, this._threads.push(t)
            }
        }, {
            key: "ForkThread",
            value: function() {
                var t = this.currentThread.Copy();
                return this._threadCounter++, t.threadIndex = this._threadCounter, t
            }
        }, {
            key: "PopThread",
            value: function() {
                if (!this.canPopThread) throw new Error("Can't pop thread");
                this._threads.splice(this._threads.indexOf(this.currentThread), 1)
            }
        }, {
            key: "canPopThread",
            get: function() {
                return 1 < this._threads.length && !this.elementIsEvaluateFromGame
            }
        }, {
            key: "elementIsEvaluateFromGame",
            get: function() {
                return this.currentElement.type == Nt.FunctionEvaluationFromGame
            }
        }, {
            key: "Push",
            value: function(t, e, n) {
                var i = 1 < arguments.length && void 0 !== e ? e : 0,
                    r = 2 < arguments.length && void 0 !== n ? n : 0,
                    a = new s.Element(t, this.currentElement.currentPointer, !1);
                a.evaluationStackHeightWhenPushed = i, a.functionStartInOutputStream = r, this.callStack.push(a)
            }
        }, {
            key: "CanPop",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : null;
                return !!this.canPop && (null == e || this.currentElement.type == e)
            }
        }, {
            key: "Pop",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : null;
                if (!this.CanPop(e)) throw new Error("Mismatched push/pop in Callstack");
                this.callStack.pop()
            }
        }, {
            key: "GetTemporaryVariableWithName",
            value: function(t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : -1; - 1 == n && (n = this.currentElementIndex + 1);
                var i = E(this.callStack[n - 1].temporaryVariables, t, null);
                return i.exists ? i.result : null
            }
        }, {
            key: "SetTemporaryVariable",
            value: function(t, e, n, i) {
                var r = 3 < arguments.length && void 0 !== i ? i : -1; - 1 == r && (r = this.currentElementIndex + 1);
                var a = this.callStack[r - 1];
                if (!n && !a.temporaryVariables.get(t)) throw new Error("Could not find temporary variable to set: " + t);
                var s = E(a.temporaryVariables, t, null);
                s.exists && Pt.RetainListOriginsForAssignment(s.result, e), a.temporaryVariables.set(t, e)
            }
        }, {
            key: "ContextForVariableNamed",
            value: function(t) {
                return this.currentElement.temporaryVariables.get(t) ? this.currentElementIndex + 1 : 0
            }
        }, {
            key: "ThreadWithIndex",
            value: function(e) {
                var t = this._threads.filter(function(t) {
                    if (t.threadIndex == e) return t
                });
                return 0 < t.length ? t[0] : null
            }
        }, {
            key: "callStack",
            get: function() {
                return this.currentThread.callstack
            }
        }, {
            key: "callStackTrace",
            get: function() {
                for (var t = new St, e = 0; e < this._threads.length; e++) {
                    var n = this._threads[e],
                        i = e == this._threads.length - 1;
                    t.AppendFormat("=== THREAD {0}/{1} {2}===\n", e + 1, this._threads.length, i ? "(current) " : "");
                    for (var r = 0; r < n.callstack.length; r++) {
                        n.callstack[r].type == Nt.Function ? t.Append("  [FUNCTION] ") : t.Append("  [TUNNEL] ");
                        var a = n.callstack[r].currentPointer;
                        if (!a.isNull) {
                            if (t.Append("<SOMEWHERE IN "), null === a.container) return gt("pointer.container");
                            t.Append(a.container.path.toString()), t.AppendLine(">")
                        }
                    }
                }
                return t.toString()
            }
        }]), s
    }();
    ! function(t) {
        var y = function() {
            function i(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                m(this, i), this.evaluationStackHeightWhenPushed = 0, this.functionStartInOutputStream = 0, this.currentPointer = e.copy(), this.inExpressionEvaluation = n, this.temporaryVariables = new Map, this.type = t
            }
            return u(i, [{
                key: "Copy",
                value: function() {
                    var t = new i(this.type, this.currentPointer, this.inExpressionEvaluation);
                    return t.temporaryVariables = new Map(this.temporaryVariables), t.evaluationStackHeightWhenPushed = this.evaluationStackHeightWhenPushed, t.functionStartInOutputStream = this.functionStartInOutputStream, t
                }
            }]), i
        }();
        t.Element = y;
        var e = function() {
            function p() {
                if (m(this, p), this.threadIndex = 0, this.previousPointer = It.Null, this.callstack = [], arguments[0] && arguments[1]) {
                    var t = arguments[0],
                        e = arguments[1];
                    this.threadIndex = parseInt(t.threadIndex);
                    var n, i = pt(t.callstack);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = n.value,
                                a = parseInt(r.type),
                                s = It.Null,
                                o = void 0,
                                u = r.cPath;
                            if (void 0 !== u) {
                                o = u.toString();
                                var l = e.ContentAtPath(new O(o));
                                if (s.container = l.container, s.index = parseInt(r.idx), null == l.obj) throw new Error("When loading state, internal story location couldn't be found: " + o + ". Has the story changed since this save data was created?");
                                if (l.approximate) {
                                    if (null === s.container) return gt("pointer.container");
                                    e.Warning("When loading state, exact internal story location couldn't be found: '" + o + "', so it was approximated to '" + s.container.path.toString() + "' to recover. Has the story changed since this save data was created?")
                                }
                            }
                            var h = !!r.exp,
                                c = new y(a, s, h),
                                f = r.temp;
                            void 0 !== f ? c.temporaryVariables = z.JObjectToDictionaryRuntimeObjs(f) : c.temporaryVariables.clear(), this.callstack.push(c)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    var v, d = t.previousContentObject;
                    void 0 !== d && (v = new O(d.toString()), this.previousPointer = e.PointerAtPath(v))
                }
            }
            return u(p, [{
                key: "Copy",
                value: function() {
                    var t = new p;
                    t.threadIndex = this.threadIndex;
                    var e, n = pt(this.callstack);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value;
                            t.callstack.push(i.Copy())
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return t.previousPointer = this.previousPointer.copy(), t
                }
            }, {
                key: "WriteJson",
                value: function(t) {
                    t.WriteObjectStart(), t.WritePropertyStart("callstack"), t.WriteArrayStart();
                    var e, n = pt(this.callstack);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value;
                            if (t.WriteObjectStart(), !i.currentPointer.isNull) {
                                if (null === i.currentPointer.container) return gt("el.currentPointer.container");
                                t.WriteProperty("cPath", i.currentPointer.container.path.componentsString), t.WriteIntProperty("idx", i.currentPointer.index)
                            }
                            t.WriteProperty("exp", i.inExpressionEvaluation), t.WriteIntProperty("type", i.type), 0 < i.temporaryVariables.size && (t.WritePropertyStart("temp"), z.WriteDictionaryRuntimeObjs(t, i.temporaryVariables), t.WritePropertyEnd()), t.WriteObjectEnd()
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    if (t.WriteArrayEnd(), t.WritePropertyEnd(), t.WriteIntProperty("threadIndex", this.threadIndex), !this.previousPointer.isNull) {
                        var r = this.previousPointer.Resolve();
                        if (null === r) return gt("this.previousPointer.Resolve()");
                        t.WriteProperty("previousContentObject", r.path.toString())
                    }
                    t.WriteObjectEnd()
                }
            }]), p
        }();
        t.Thread = e
    }(H = H || {});
    var X = function() {
        function l(t, e) {
            m(this, l), this.variableChangedEventCallbacks = [], this.patch = null, this._batchObservingVariableChanges = !1, this._defaultGlobalVariables = new Map, this._changedVariablesForBatchObs = new Set, this._globalVariables = new Map, this._callStack = t, this._listDefsOrigin = e;
            try {
                return new Proxy(this, {
                    get: function(t, e) {
                        return e in t ? t[e] : t.$(e)
                    },
                    set: function(t, e, n) {
                        return e in t ? t[e] = n : t.$(e, n), !0
                    }
                })
            } catch (t) {}
        }
        return u(l, [{
            key: "variableChangedEvent",
            value: function(t, e) {
                var n, i = pt(this.variableChangedEventCallbacks);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        (0, n.value)(t, e)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
            }
        }, {
            key: "batchObservingVariableChanges",
            get: function() {
                return this._batchObservingVariableChanges
            },
            set: function(t) {
                if (this._batchObservingVariableChanges = t) this._changedVariablesForBatchObs = new Set;
                else if (null != this._changedVariablesForBatchObs) {
                    var e, n = pt(this._changedVariablesForBatchObs);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value,
                                r = this._globalVariables.get(i);
                            r ? this.variableChangedEvent(i, r) : gt("currentValue")
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    this._changedVariablesForBatchObs = null
                }
            }
        }, {
            key: "callStack",
            get: function() {
                return this._callStack
            },
            set: function(t) {
                this._callStack = t
            }
        }, {
            key: "$",
            value: function(t, e) {
                if (void 0 === e) {
                    var n = null;
                    return null !== this.patch && (n = this.patch.TryGetGlobal(t, null)).exists ? n.result.valueObject : (void 0 === (n = this._globalVariables.get(t)) && (n = this._defaultGlobalVariables.get(t)), void 0 !== n ? n.valueObject : null)
                }
                if (void 0 === this._defaultGlobalVariables.get(t)) throw new bt("Cannot assign to a variable (" + t + ") that hasn't been declared in the story");
                var i = _t.Create(e);
                if (null == i) throw null == e ? new Error("Cannot pass null to VariableState") : new Error("Invalid value passed to VariableState: " + e.toString());
                this.SetGlobal(t, i)
            }
        }, {
            key: "ApplyPatch",
            value: function() {
                if (null === this.patch) return gt("this.patch");
                var t, e = pt(this.patch.globals);
                try {
                    for (e.s(); !(t = e.n()).done;) {
                        var n = S(t.value, 2),
                            i = n[0],
                            r = n[1];
                        this._globalVariables.set(i, r)
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                if (null !== this._changedVariablesForBatchObs) {
                    var a, s = pt(this.patch.changedVariables);
                    try {
                        for (s.s(); !(a = s.n()).done;) {
                            var o = a.value;
                            this._changedVariablesForBatchObs.add(o)
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                }
                this.patch = null
            }
        }, {
            key: "SetJsonToken",
            value: function(t) {
                this._globalVariables.clear();
                var e, n = pt(this._defaultGlobalVariables);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var i = S(e.value, 2),
                            r = i[0],
                            a = i[1],
                            s = t[r];
                        if (void 0 !== s) {
                            var o = z.JTokenToRuntimeObject(s);
                            if (null === o) return gt("tokenInkObject");
                            this._globalVariables.set(r, o)
                        } else this._globalVariables.set(r, a)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
        }, {
            key: "WriteJson",
            value: function(t) {
                t.WriteObjectStart();
                var e, n = pt(this._globalVariables);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var i = S(e.value, 2),
                            r = i[0],
                            a = i[1],
                            s = r,
                            o = a;
                        if (l.dontSaveDefaultValues && this._defaultGlobalVariables.has(s)) {
                            var u = this._defaultGlobalVariables.get(s);
                            if (this.RuntimeObjectsEqual(o, u)) continue
                        }
                        t.WritePropertyStart(s), z.WriteRuntimeObject(t, o), t.WritePropertyEnd()
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                t.WriteObjectEnd()
            }
        }, {
            key: "RuntimeObjectsEqual",
            value: function(t, e) {
                if (null === t) return gt("obj1");
                if (null === e) return gt("obj2");
                if (t.constructor !== e.constructor) return !1;
                var n = yt(t, x);
                if (null !== n) return n.value === mt(e, x).value;
                var i = yt(t, wt);
                if (null !== i) return i.value === mt(e, wt).value;
                var r = yt(t, F);
                if (null !== r) return r.value === mt(e, F).value;
                var a = yt(t, _t),
                    s = yt(e, _t);
                if (null !== a && null !== s) return _(a.valueObject) && _(s.valueObject) ? a.valueObject.Equals(s.valueObject) : a.valueObject === s.valueObject;
                throw new Error("FastRoughDefinitelyEquals: Unsupported runtime object type: " + t.constructor.name)
            }
        }, {
            key: "GetVariableWithName",
            value: function(t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : -1,
                    i = this.GetRawVariableWithName(t, n),
                    r = yt(i, W);
                return null !== r && (i = this.ValueAtVariablePointer(r)), i
            }
        }, {
            key: "TryGetDefaultVariableValue",
            value: function(t) {
                var e = E(this._defaultGlobalVariables, t, null);
                return e.exists ? e.result : null
            }
        }, {
            key: "GlobalVariableExistsWithName",
            value: function(t) {
                return this._globalVariables.has(t) || null !== this._defaultGlobalVariables && this._defaultGlobalVariables.has(t)
            }
        }, {
            key: "GetRawVariableWithName",
            value: function(t, e) {
                if (0 == e || -1 == e) {
                    var n = null;
                    if (null !== this.patch && (n = this.patch.TryGetGlobal(t, null)).exists) return n.result;
                    if ((n = E(this._globalVariables, t, null)).exists) return n.result;
                    if (null !== this._defaultGlobalVariables && (n = E(this._defaultGlobalVariables, t, null)).exists) return n.result;
                    if (null === this._listDefsOrigin) return gt("VariablesState._listDefsOrigin");
                    var i = this._listDefsOrigin.FindSingleItemListWithName(t);
                    if (i) return i
                }
                return this._callStack.GetTemporaryVariableWithName(t, e)
            }
        }, {
            key: "ValueAtVariablePointer",
            value: function(t) {
                return this.GetVariableWithName(t.variableName, t.contextIndex)
            }
        }, {
            key: "Assign",
            value: function(t, e) {
                var n = t.variableName;
                if (null === n) return gt("name");
                var i = -1,
                    r = !1,
                    r = t.isNewDeclaration ? t.isGlobal : this.GlobalVariableExistsWithName(n);
                if (t.isNewDeclaration) {
                    var a = yt(e, W);
                    null !== a && (e = this.ResolveVariablePointer(a))
                } else
                    for (var s = null; null != (s = yt(this.GetRawVariableWithName(n, i), W)) && (n = s.variableName, r = 0 == (i = s.contextIndex)), null != s;);
                r ? this.SetGlobal(n, e) : this._callStack.SetTemporaryVariable(n, e, t.isNewDeclaration, i)
            }
        }, {
            key: "SnapshotDefaultGlobals",
            value: function() {
                this._defaultGlobalVariables = new Map(this._globalVariables)
            }
        }, {
            key: "RetainListOriginsForAssignment",
            value: function(t, e) {
                var n = mt(t, Pt),
                    i = mt(e, Pt);
                n.value && i.value && 0 == i.value.Count && i.value.SetInitialOriginNames(n.value.originNames)
            }
        }, {
            key: "SetGlobal",
            value: function(t, e) {
                var n = null;
                if (null === this.patch && (n = E(this._globalVariables, t, null)), null !== this.patch && ((n = this.patch.TryGetGlobal(t, null)).exists || (n = E(this._globalVariables, t, null))), Pt.RetainListOriginsForAssignment(n.result, e), null === t) return gt("variableName");
                if (null !== this.patch ? this.patch.SetGlobal(t, e) : this._globalVariables.set(t, e), null !== this.variableChangedEvent && null !== n && e !== n.result)
                    if (this.batchObservingVariableChanges) {
                        if (null === this._changedVariablesForBatchObs) return gt("this._changedVariablesForBatchObs");
                        null !== this.patch ? this.patch.AddChangedVariable(t) : null !== this._changedVariablesForBatchObs && this._changedVariablesForBatchObs.add(t)
                    } else this.variableChangedEvent(t, e)
            }
        }, {
            key: "ResolveVariablePointer",
            value: function(t) {
                var e = t.contextIndex; - 1 == e && (e = this.GetContextIndexOfVariableNamed(t.variableName));
                var n = yt(this.GetRawVariableWithName(t.variableName, e), W);
                return null != n ? n : new W(t.variableName, e)
            }
        }, {
            key: "GetContextIndexOfVariableNamed",
            value: function(t) {
                return this.GlobalVariableExistsWithName(t) ? 0 : this._callStack.currentElementIndex
            }
        }, {
            key: "ObserveVariableChange",
            value: function(t) {
                this.variableChangedEventCallbacks.push(t)
            }
        }]), l
    }();
    X.dontSaveDefaultValues = !0;
    var Rt = function() {
            function e(t) {
                m(this, e), this.seed = t % 2147483647, this.seed <= 0 && (this.seed += 2147483646)
            }
            return u(e, [{
                key: "next",
                value: function() {
                    return this.seed = 16807 * this.seed % 2147483647
                }
            }, {
                key: "nextFloat",
                value: function() {
                    return (this.next() - 1) / 2147483646
                }
            }]), e
        }(),
        $ = function() {
            function e() {
                var t;
                m(this, e), this._changedVariables = new Set, this._visitCounts = new Map, this._turnIndices = new Map, 1 === arguments.length && null !== arguments[0] ? (t = arguments[0], this._globals = new Map(t._globals), this._changedVariables = new Set(t._changedVariables), this._visitCounts = new Map(t._visitCounts), this._turnIndices = new Map(t._turnIndices)) : (this._globals = new Map, this._changedVariables = new Set, this._visitCounts = new Map, this._turnIndices = new Map)
            }
            return u(e, [{
                key: "globals",
                get: function() {
                    return this._globals
                }
            }, {
                key: "changedVariables",
                get: function() {
                    return this._changedVariables
                }
            }, {
                key: "visitCounts",
                get: function() {
                    return this._visitCounts
                }
            }, {
                key: "turnIndices",
                get: function() {
                    return this._turnIndices
                }
            }, {
                key: "TryGetGlobal",
                value: function(t, e) {
                    return null !== t && this._globals.has(t) ? {
                        result: this._globals.get(t),
                        exists: !0
                    } : {
                        result: e,
                        exists: !1
                    }
                }
            }, {
                key: "SetGlobal",
                value: function(t, e) {
                    this._globals.set(t, e)
                }
            }, {
                key: "AddChangedVariable",
                value: function(t) {
                    return this._changedVariables.add(t)
                }
            }, {
                key: "TryGetVisitCount",
                value: function(t, e) {
                    return this._visitCounts.has(t) ? {
                        result: this._visitCounts.get(t),
                        exists: !0
                    } : {
                        result: e,
                        exists: !1
                    }
                }
            }, {
                key: "SetVisitCount",
                value: function(t, e) {
                    this._visitCounts.set(t, e)
                }
            }, {
                key: "SetTurnIndex",
                value: function(t, e) {
                    this._turnIndices.set(t, e)
                }
            }, {
                key: "TryGetTurnIndex",
                value: function(t, e) {
                    return this._turnIndices.has(t) ? {
                        result: this._turnIndices.get(t),
                        exists: !0
                    } : {
                        result: e,
                        exists: !1
                    }
                }
            }]), e
        }(),
        Y = function() {
            function e() {
                m(this, e)
            }
            return u(e, null, [{
                key: "TextToDictionary",
                value: function(t) {
                    return new e.Reader(t).ToDictionary()
                }
            }, {
                key: "TextToArray",
                value: function(t) {
                    return new e.Reader(t).ToArray()
                }
            }]), e
        }();
    ! function(n) {
        var t = function() {
            function e(t) {
                m(this, e), this._rootObject = JSON.parse(t)
            }
            return u(e, [{
                key: "ToDictionary",
                value: function() {
                    return this._rootObject
                }
            }, {
                key: "ToArray",
                value: function() {
                    return this._rootObject
                }
            }]), e
        }();
        n.Reader = t;
        var e = function() {
            function t() {
                m(this, t), this._currentPropertyName = null, this._currentString = null, this._stateStack = [], this._collectionStack = [], this._propertyNameStack = [], this._jsonObject = null
            }
            return u(t, [{
                key: "WriteObject",
                value: function(t) {
                    this.WriteObjectStart(), t(this), this.WriteObjectEnd()
                }
            }, {
                key: "WriteObjectStart",
                value: function() {
                    this.StartNewObject(!0);
                    var t, e = {};
                    this.state === n.Writer.State.Property ? (this.Assert(null !== this.currentCollection), this.Assert(null !== this.currentPropertyName), t = this._propertyNameStack.pop(), this.currentCollection[t] = e) : this.state === n.Writer.State.Array ? (this.Assert(null !== this.currentCollection), this.currentCollection.push(e)) : (this.Assert(this.state === n.Writer.State.None), this._jsonObject = e), this._collectionStack.push(e), this._stateStack.push(new n.Writer.StateElement(n.Writer.State.Object))
                }
            }, {
                key: "WriteObjectEnd",
                value: function() {
                    this.Assert(this.state === n.Writer.State.Object), this._collectionStack.pop(), this._stateStack.pop()
                }
            }, {
                key: "WriteProperty",
                value: function(t, e) {
                    this.WritePropertyStart(t), e instanceof Function ? e(this) : this.Write(e), this.WritePropertyEnd()
                }
            }, {
                key: "WriteIntProperty",
                value: function(t, e) {
                    this.WritePropertyStart(t), this.WriteInt(e), this.WritePropertyEnd()
                }
            }, {
                key: "WriteFloatProperty",
                value: function(t, e) {
                    this.WritePropertyStart(t), this.WriteFloat(e), this.WritePropertyEnd()
                }
            }, {
                key: "WritePropertyStart",
                value: function(t) {
                    this.Assert(this.state === n.Writer.State.Object), this._propertyNameStack.push(t), this.IncrementChildCount(), this._stateStack.push(new n.Writer.StateElement(n.Writer.State.Property))
                }
            }, {
                key: "WritePropertyEnd",
                value: function() {
                    this.Assert(this.state === n.Writer.State.Property), this.Assert(1 === this.childCount), this._stateStack.pop()
                }
            }, {
                key: "WritePropertyNameStart",
                value: function() {
                    this.Assert(this.state === n.Writer.State.Object), this.IncrementChildCount(), this._currentPropertyName = "", this._stateStack.push(new n.Writer.StateElement(n.Writer.State.Property)), this._stateStack.push(new n.Writer.StateElement(n.Writer.State.PropertyName))
                }
            }, {
                key: "WritePropertyNameEnd",
                value: function() {
                    this.Assert(this.state === n.Writer.State.PropertyName), this.Assert(null !== this._currentPropertyName), this._propertyNameStack.push(this._currentPropertyName), this._currentPropertyName = null, this._stateStack.pop()
                }
            }, {
                key: "WritePropertyNameInner",
                value: function(t) {
                    this.Assert(this.state === n.Writer.State.PropertyName), this.Assert(null !== this._currentPropertyName), this._currentPropertyName += t
                }
            }, {
                key: "WriteArrayStart",
                value: function() {
                    this.StartNewObject(!0);
                    var t, e = [];
                    this.state === n.Writer.State.Property ? (this.Assert(null !== this.currentCollection), this.Assert(null !== this.currentPropertyName), t = this._propertyNameStack.pop(), this.currentCollection[t] = e) : this.state === n.Writer.State.Array ? (this.Assert(null !== this.currentCollection), this.currentCollection.push(e)) : (this.Assert(this.state === n.Writer.State.None), this._jsonObject = e), this._collectionStack.push(e), this._stateStack.push(new n.Writer.StateElement(n.Writer.State.Array))
                }
            }, {
                key: "WriteArrayEnd",
                value: function() {
                    this.Assert(this.state === n.Writer.State.Array), this._collectionStack.pop(), this._stateStack.pop()
                }
            }, {
                key: "Write",
                value: function(t) {
                    null !== t ? (this.StartNewObject(!1), this._addToCurrentObject(t)) : console.error("Warning: trying to write a null string")
                }
            }, {
                key: "WriteBool",
                value: function(t) {
                    null !== t && (this.StartNewObject(!1), this._addToCurrentObject(t))
                }
            }, {
                key: "WriteInt",
                value: function(t) {
                    null !== t && (this.StartNewObject(!1), this._addToCurrentObject(Math.floor(t)))
                }
            }, {
                key: "WriteFloat",
                value: function(t) {
                    null !== t && (this.StartNewObject(!1), t == Number.POSITIVE_INFINITY ? this._addToCurrentObject(34e37) : t == Number.NEGATIVE_INFINITY ? this._addToCurrentObject(-34e37) : isNaN(t) ? this._addToCurrentObject(0) : this._addToCurrentObject(t))
                }
            }, {
                key: "WriteNull",
                value: function() {
                    this.StartNewObject(!1), this._addToCurrentObject(null)
                }
            }, {
                key: "WriteStringStart",
                value: function() {
                    this.StartNewObject(!1), this._currentString = "", this._stateStack.push(new n.Writer.StateElement(n.Writer.State.String))
                }
            }, {
                key: "WriteStringEnd",
                value: function() {
                    this.Assert(this.state == n.Writer.State.String), this._stateStack.pop(), this._addToCurrentObject(this._currentString), this._currentString = null
                }
            }, {
                key: "WriteStringInner",
                value: function(t) {
                    this.Assert(this.state === n.Writer.State.String), null !== t ? this._currentString += t : console.error("Warning: trying to write a null string")
                }
            }, {
                key: "ToString",
                value: function() {
                    return null === this._jsonObject ? "" : JSON.stringify(this._jsonObject)
                }
            }, {
                key: "StartNewObject",
                value: function(t) {
                    t ? this.Assert(this.state === n.Writer.State.None || this.state === n.Writer.State.Property || this.state === n.Writer.State.Array) : this.Assert(this.state === n.Writer.State.Property || this.state === n.Writer.State.Array), this.state === n.Writer.State.Property && this.Assert(0 === this.childCount), this.state !== n.Writer.State.Array && this.state !== n.Writer.State.Property || this.IncrementChildCount()
                }
            }, {
                key: "state",
                get: function() {
                    return 0 < this._stateStack.length ? this._stateStack[this._stateStack.length - 1].type : n.Writer.State.None
                }
            }, {
                key: "childCount",
                get: function() {
                    return 0 < this._stateStack.length ? this._stateStack[this._stateStack.length - 1].childCount : 0
                }
            }, {
                key: "currentCollection",
                get: function() {
                    return 0 < this._collectionStack.length ? this._collectionStack[this._collectionStack.length - 1] : null
                }
            }, {
                key: "currentPropertyName",
                get: function() {
                    return 0 < this._propertyNameStack.length ? this._propertyNameStack[this._propertyNameStack.length - 1] : null
                }
            }, {
                key: "IncrementChildCount",
                value: function() {
                    this.Assert(0 < this._stateStack.length);
                    var t = this._stateStack.pop();
                    t.childCount++, this._stateStack.push(t)
                }
            }, {
                key: "Assert",
                value: function(t) {
                    if (!t) throw Error("Assert failed while writing JSON")
                }
            }, {
                key: "_addToCurrentObject",
                value: function(t) {
                    this.Assert(null !== this.currentCollection), this.state === n.Writer.State.Array ? (this.Assert(Array.isArray(this.currentCollection)), this.currentCollection.push(t)) : this.state === n.Writer.State.Property && (this.Assert(!Array.isArray(this.currentCollection)), this.Assert(null !== this.currentPropertyName), this.currentCollection[this.currentPropertyName] = t, this._propertyNameStack.pop())
                }
            }]), t
        }();
        n.Writer = e,
            function(t) {
                var e;
                (e = t.State || (t.State = {}))[e.None = 0] = "None", e[e.Object = 1] = "Object", e[e.Array = 2] = "Array", e[e.Property = 3] = "Property", e[e.PropertyName = 4] = "PropertyName", e[e.String = 5] = "String";
                t.StateElement = function t(e) {
                    m(this, t), this.type = n.Writer.State.None, this.childCount = 0, this.type = e
                }
            }(e = n.Writer || (n.Writer = {}))
    }(Y = Y || {});
    var Q, Z, tt, et, nt = function() {
            function r() {
                m(this, r);
                var t, e, n = arguments[0],
                    i = arguments[1];
                this.name = n, this.callStack = new H(i), arguments[2] ? (t = arguments[2], this.callStack.SetJsonToken(t.callstack, i), this.outputStream = z.JArrayToRuntimeObjList(t.outputStream), this.currentChoices = z.JArrayToRuntimeObjList(t.currentChoices), void 0 !== (e = t.choiceThreads) && this.LoadFlowChoiceThreads(e, i)) : (this.outputStream = [], this.currentChoices = [])
            }
            return u(r, [{
                key: "WriteJson",
                value: function(t) {
                    var r = this;
                    t.WriteObjectStart(), t.WriteProperty("callstack", function(t) {
                        return r.callStack.WriteJson(t)
                    }), t.WriteProperty("outputStream", function(t) {
                        return z.WriteListRuntimeObjs(t, r.outputStream)
                    });
                    var e, n = !1,
                        i = pt(this.currentChoices);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var a = e.value;
                            if (null === a.threadAtGeneration) return gt("c.threadAtGeneration");
                            a.originalThreadIndex = a.threadAtGeneration.threadIndex, null === this.callStack.ThreadWithIndex(a.originalThreadIndex) && (n || (n = !0, t.WritePropertyStart("choiceThreads"), t.WriteObjectStart()), t.WritePropertyStart(a.originalThreadIndex), a.threadAtGeneration.WriteJson(t), t.WritePropertyEnd())
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    n && (t.WriteObjectEnd(), t.WritePropertyEnd()), t.WriteProperty("currentChoices", function(t) {
                        t.WriteArrayStart();
                        var e, n = pt(r.currentChoices);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = e.value;
                                z.WriteChoice(t, i)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        t.WriteArrayEnd()
                    }), t.WriteObjectEnd()
                }
            }, {
                key: "LoadFlowChoiceThreads",
                value: function(t, e) {
                    var n, i = pt(this.currentChoices);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r, a = n.value,
                                s = this.callStack.ThreadWithIndex(a.originalThreadIndex);
                            null !== s ? a.threadAtGeneration = s.Copy() : (r = t["".concat(a.originalThreadIndex)], a.threadAtGeneration = new H.Thread(r, e))
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                }
            }]), r
        }(),
        it = function() {
            function c(t) {
                m(this, c), this.kInkSaveStateVersion = 9, this.kMinCompatibleLoadVersion = 8, this.onDidLoadState = null, this._currentErrors = null, this._currentWarnings = null, this.divertedPointer = It.Null, this._currentTurnIndex = 0, this.storySeed = 0, this.previousRandom = 0, this.didSafeExit = !1, this._currentText = null, this._currentTags = null, this._outputStreamTextDirty = !0, this._outputStreamTagsDirty = !0, this._patch = null, this._namedFlows = null, this.kDefaultFlowName = "DEFAULT_FLOW", this.story = t, this._currentFlow = new nt(this.kDefaultFlowName, t), this.OutputStreamDirty(), this._evaluationStack = [], this._variablesState = new X(this.callStack, t.listDefinitions), this._visitCounts = new Map, this._turnIndices = new Map, this.currentTurnIndex = -1;
                var e = (new Date).getTime();
                this.storySeed = new Rt(e).next() % 100, this.previousRandom = 0, this.GoToStart()
            }
            return u(c, [{
                key: "ToJson",
                value: function() {
                    var t = new Y.Writer;
                    return this.WriteJson(t), t.ToString()
                }
            }, {
                key: "toJson",
                value: function(t) {
                    var e = 0 < arguments.length && void 0 !== t && t;
                    return this.ToJson(e)
                }
            }, {
                key: "LoadJson",
                value: function(t) {
                    var e = Y.TextToDictionary(t);
                    this.LoadJsonObj(e), null !== this.onDidLoadState && this.onDidLoadState()
                }
            }, {
                key: "VisitCountAtPathString",
                value: function(t) {
                    var e;
                    if (null !== this._patch) {
                        var n = this.story.ContentAtPath(new O(t)).container;
                        if (null === n) throw new Error("Content at path not found: " + t);
                        if ((e = this._patch.TryGetVisitCount(n, 0)).exists) return e.result
                    }
                    return (e = E(this._visitCounts, t, null)).exists ? e.result : 0
                }
            }, {
                key: "VisitCountForContainer",
                value: function(t) {
                    if (null === t) return gt("container");
                    if (!t.visitsShouldBeCounted) return this.story.Error("Read count for target (" + t.name + " - on " + t.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c)."), 0;
                    if (null !== this._patch) {
                        var e = this._patch.TryGetVisitCount(t, 0);
                        if (e.exists) return e.result
                    }
                    var n = t.path.toString(),
                        i = E(this._visitCounts, n, null);
                    return i.exists ? i.result : 0
                }
            }, {
                key: "IncrementVisitCountForContainer",
                value: function(t) {
                    if (null !== this._patch) {
                        var e = this.VisitCountForContainer(t);
                        return e++, void this._patch.SetVisitCount(t, e)
                    }
                    var n = t.path.toString(),
                        i = E(this._visitCounts, n, null);
                    i.exists ? this._visitCounts.set(n, i.result + 1) : this._visitCounts.set(n, 1)
                }
            }, {
                key: "RecordTurnIndexVisitToContainer",
                value: function(t) {
                    var e;
                    null === this._patch ? (e = t.path.toString(), this._turnIndices.set(e, this.currentTurnIndex)) : this._patch.SetTurnIndex(t, this.currentTurnIndex)
                }
            }, {
                key: "TurnsSinceForContainer",
                value: function(t) {
                    if (t.turnIndexShouldBeCounted || this.story.Error("TURNS_SINCE() for target (" + t.name + " - on " + t.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c)."), null !== this._patch) {
                        var e = this._patch.TryGetTurnIndex(t, 0);
                        if (e.exists) return this.currentTurnIndex - e.result
                    }
                    var n = t.path.toString(),
                        i = E(this._turnIndices, n, 0);
                    return i.exists ? this.currentTurnIndex - i.result : -1
                }
            }, {
                key: "callstackDepth",
                get: function() {
                    return this.callStack.depth
                }
            }, {
                key: "outputStream",
                get: function() {
                    return this._currentFlow.outputStream
                }
            }, {
                key: "currentChoices",
                get: function() {
                    return this.canContinue ? [] : this._currentFlow.currentChoices
                }
            }, {
                key: "generatedChoices",
                get: function() {
                    return this._currentFlow.currentChoices
                }
            }, {
                key: "currentErrors",
                get: function() {
                    return this._currentErrors
                }
            }, {
                key: "currentWarnings",
                get: function() {
                    return this._currentWarnings
                }
            }, {
                key: "variablesState",
                get: function() {
                    return this._variablesState
                },
                set: function(t) {
                    this._variablesState = t
                }
            }, {
                key: "callStack",
                get: function() {
                    return this._currentFlow.callStack
                }
            }, {
                key: "evaluationStack",
                get: function() {
                    return this._evaluationStack
                }
            }, {
                key: "currentTurnIndex",
                get: function() {
                    return this._currentTurnIndex
                },
                set: function(t) {
                    this._currentTurnIndex = t
                }
            }, {
                key: "currentPathString",
                get: function() {
                    var t = this.currentPointer;
                    return t.isNull ? null : null === t.path ? gt("pointer.path") : t.path.toString()
                }
            }, {
                key: "currentPointer",
                get: function() {
                    return this.callStack.currentElement.currentPointer.copy()
                },
                set: function(t) {
                    this.callStack.currentElement.currentPointer = t.copy()
                }
            }, {
                key: "previousPointer",
                get: function() {
                    return this.callStack.currentThread.previousPointer.copy()
                },
                set: function(t) {
                    this.callStack.currentThread.previousPointer = t.copy()
                }
            }, {
                key: "canContinue",
                get: function() {
                    return !this.currentPointer.isNull && !this.hasError
                }
            }, {
                key: "hasError",
                get: function() {
                    return null != this.currentErrors && 0 < this.currentErrors.length
                }
            }, {
                key: "hasWarning",
                get: function() {
                    return null != this.currentWarnings && 0 < this.currentWarnings.length
                }
            }, {
                key: "currentText",
                get: function() {
                    if (this._outputStreamTextDirty) {
                        var t, e = new St,
                            n = pt(this.outputStream);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = yt(t.value, Tt);
                                null !== i && e.Append(i.value)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        this._currentText = this.CleanOutputWhitespace(e.toString()), this._outputStreamTextDirty = !1
                    }
                    return this._currentText
                }
            }, {
                key: "CleanOutputWhitespace",
                value: function(t) {
                    for (var e = new St, n = -1, i = 0, r = 0; r < t.length; r++) {
                        var a = t.charAt(r),
                            s = " " == a || "\t" == a;
                        s && -1 == n && (n = r), s || ("\n" != a && 0 < n && n != i && e.Append(" "), n = -1), "\n" == a && (i = r + 1), s || e.Append(a)
                    }
                    return e.toString()
                }
            }, {
                key: "currentTags",
                get: function() {
                    if (this._outputStreamTagsDirty) {
                        this._currentTags = [];
                        var t, e = pt(this.outputStream);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var n = yt(t.value, J);
                                null !== n && this._currentTags.push(n.text)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                        this._outputStreamTagsDirty = !1
                    }
                    return this._currentTags
                }
            }, {
                key: "currentFlowName",
                get: function() {
                    return this._currentFlow.name
                }
            }, {
                key: "inExpressionEvaluation",
                get: function() {
                    return this.callStack.currentElement.inExpressionEvaluation
                },
                set: function(t) {
                    this.callStack.currentElement.inExpressionEvaluation = t
                }
            }, {
                key: "GoToStart",
                value: function() {
                    this.callStack.currentElement.currentPointer = It.StartOf(this.story.mainContentContainer)
                }
            }, {
                key: "SwitchFlow_Internal",
                value: function(t) {
                    if (null === t) throw new Error("Must pass a non-null string to Story.SwitchFlow");
                    var e, n;
                    null === this._namedFlows && (this._namedFlows = new Map, this._namedFlows.set(this.kDefaultFlowName, this._currentFlow)), t !== this._currentFlow.name && ((n = E(this._namedFlows, t, null)).exists ? e = n.result : (e = new nt(t, this.story), this._namedFlows.set(t, e)), this._currentFlow = e, this.variablesState.callStack = this._currentFlow.callStack, this.OutputStreamDirty())
                }
            }, {
                key: "SwitchToDefaultFlow_Internal",
                value: function() {
                    null !== this._namedFlows && this.SwitchFlow_Internal(this.kDefaultFlowName)
                }
            }, {
                key: "RemoveFlow_Internal",
                value: function(t) {
                    if (null === t) throw new Error("Must pass a non-null string to Story.DestroyFlow");
                    if (t === this.kDefaultFlowName) throw new Error("Cannot destroy default flow");
                    if (this._currentFlow.name === t && this.SwitchToDefaultFlow_Internal(), null === this._namedFlows) return gt("this._namedFlows");
                    this._namedFlows.delete(t)
                }
            }, {
                key: "CopyAndStartPatching",
                value: function() {
                    var t, e, n, i, r, a = new c(this.story);
                    if (a._patch = new $(this._patch), a._currentFlow.name = this._currentFlow.name, a._currentFlow.callStack = new H(this._currentFlow.callStack), (t = a._currentFlow.currentChoices).push.apply(t, d(this._currentFlow.currentChoices)), (e = a._currentFlow.outputStream).push.apply(e, d(this._currentFlow.outputStream)), a.OutputStreamDirty(), null !== this._namedFlows) {
                        a._namedFlows = new Map;
                        var s, o = pt(this._namedFlows);
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                var u = S(s.value, 2),
                                    l = u[0],
                                    h = u[1];
                                a._namedFlows.set(l, h)
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                        a._namedFlows.set(this._currentFlow.name, a._currentFlow)
                    }
                    return this.hasError && (a._currentErrors = [], (i = a._currentErrors).push.apply(i, d(this.currentErrors || []))), this.hasWarning && (a._currentWarnings = [], (r = a._currentWarnings).push.apply(r, d(this.currentWarnings || []))), a.variablesState = this.variablesState, a.variablesState.callStack = a.callStack, a.variablesState.patch = a._patch, (n = a.evaluationStack).push.apply(n, d(this.evaluationStack)), this.divertedPointer.isNull || (a.divertedPointer = this.divertedPointer.copy()), a.previousPointer = this.previousPointer.copy(), a._visitCounts = this._visitCounts, a._turnIndices = this._turnIndices, a.currentTurnIndex = this.currentTurnIndex, a.storySeed = this.storySeed, a.previousRandom = this.previousRandom, a.didSafeExit = this.didSafeExit, a
                }
            }, {
                key: "RestoreAfterPatch",
                value: function() {
                    this.variablesState.callStack = this.callStack, this.variablesState.patch = this._patch
                }
            }, {
                key: "ApplyAnyPatch",
                value: function() {
                    if (null !== this._patch) {
                        this.variablesState.ApplyPatch();
                        var t, e = pt(this._patch.visitCounts);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var n = S(t.value, 2),
                                    i = n[0],
                                    r = n[1];
                                this.ApplyCountChanges(i, r, !0)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                        var a, s = pt(this._patch.turnIndices);
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var o = S(a.value, 2),
                                    u = o[0],
                                    l = o[1];
                                this.ApplyCountChanges(u, l, !1)
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        this._patch = null
                    }
                }
            }, {
                key: "ApplyCountChanges",
                value: function(t, e, n) {
                    (n ? this._visitCounts : this._turnIndices).set(t.path.toString(), e)
                }
            }, {
                key: "WriteJson",
                value: function(i) {
                    var e = this;
                    if (i.WriteObjectStart(), i.WritePropertyStart("flows"), i.WriteObjectStart(), null !== this._namedFlows) {
                        var r, n = pt(this._namedFlows);
                        try {
                            var t = function() {
                                var t = S(r.value, 2),
                                    e = t[0],
                                    n = t[1];
                                i.WriteProperty(e, function(t) {
                                    return n.WriteJson(t)
                                })
                            };
                            for (n.s(); !(r = n.n()).done;) t()
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    } else i.WriteProperty(this._currentFlow.name, function(t) {
                        return e._currentFlow.WriteJson(t)
                    });
                    if (i.WriteObjectEnd(), i.WritePropertyEnd(), i.WriteProperty("currentFlowName", this._currentFlow.name), i.WriteProperty("variablesState", function(t) {
                            return e.variablesState.WriteJson(t)
                        }), i.WriteProperty("evalStack", function(t) {
                            return z.WriteListRuntimeObjs(t, e.evaluationStack)
                        }), !this.divertedPointer.isNull) {
                        if (null === this.divertedPointer.path) return gt("divertedPointer");
                        i.WriteProperty("currentDivertTarget", this.divertedPointer.path.componentsString)
                    }
                    i.WriteProperty("visitCounts", function(t) {
                        return z.WriteIntDictionary(t, e._visitCounts)
                    }), i.WriteProperty("turnIndices", function(t) {
                        return z.WriteIntDictionary(t, e._turnIndices)
                    }), i.WriteIntProperty("turnIdx", this.currentTurnIndex), i.WriteIntProperty("storySeed", this.storySeed), i.WriteIntProperty("previousRandom", this.previousRandom), i.WriteIntProperty("inkSaveVersion", this.kInkSaveStateVersion), i.WriteIntProperty("inkFormatVersion", a.Story.inkVersionCurrent), i.WriteObjectEnd()
                }
            }, {
                key: "LoadJsonObj",
                value: function(t) {
                    var e = t,
                        n = e.inkSaveVersion;
                    if (null == n) throw new Error("ink save format incorrect, can't load.");
                    if (parseInt(n) < this.kMinCompatibleLoadVersion) throw new Error("Ink save format isn't compatible with the current version (saw '" + n + "', but minimum is " + this.kMinCompatibleLoadVersion + "), so can't load.");
                    var i = e.flows;
                    if (null != i) {
                        var r = i;
                        1 === Object.keys(r).length ? this._namedFlows = null : null === this._namedFlows ? this._namedFlows = new Map : this._namedFlows.clear();
                        for (var a, s = 0, o = Object.entries(r); s < o.length; s++) {
                            var u = S(o[s], 2),
                                l = u[0],
                                h = u[1],
                                c = new nt(l, this.story, h);
                            if (1 === Object.keys(r).length) this._currentFlow = new nt(l, this.story, h);
                            else {
                                if (null === this._namedFlows) return gt("this._namedFlows");
                                this._namedFlows.set(l, c)
                            }
                        }
                        null != this._namedFlows && 1 < this._namedFlows.size && (a = e.currentFlowName, this._currentFlow = this._namedFlows.get(a))
                    } else {
                        this._namedFlows = null, this._currentFlow.name = this.kDefaultFlowName, this._currentFlow.callStack.SetJsonToken(e.callstackThreads, this.story), this._currentFlow.outputStream = z.JArrayToRuntimeObjList(e.outputStream), this._currentFlow.currentChoices = z.JArrayToRuntimeObjList(e.currentChoices);
                        var f = e.choiceThreads;
                        this._currentFlow.LoadFlowChoiceThreads(f, this.story)
                    }
                    this.OutputStreamDirty(), this.variablesState.SetJsonToken(e.variablesState), this.variablesState.callStack = this._currentFlow.callStack, this._evaluationStack = z.JArrayToRuntimeObjList(e.evalStack);
                    var v, d = e.currentDivertTarget;
                    null != d && (v = new O(d.toString()), this.divertedPointer = this.story.PointerAtPath(v)), this._visitCounts = z.JObjectToIntDictionary(e.visitCounts), this._turnIndices = z.JObjectToIntDictionary(e.turnIndices), this.currentTurnIndex = parseInt(e.turnIdx), this.storySeed = parseInt(e.storySeed), this.previousRandom = parseInt(e.previousRandom)
                }
            }, {
                key: "ResetErrors",
                value: function() {
                    this._currentErrors = null, this._currentWarnings = null
                }
            }, {
                key: "ResetOutput",
                value: function(t) {
                    var e, n = 0 < arguments.length && void 0 !== t ? t : null;
                    this.outputStream.length = 0, null !== n && (e = this.outputStream).push.apply(e, d(n)), this.OutputStreamDirty()
                }
            }, {
                key: "PushToOutputStream",
                value: function(t) {
                    var e = yt(t, Tt);
                    if (null !== e) {
                        var n = this.TrySplittingHeadTailWhitespace(e);
                        if (null !== n) {
                            var i, r = pt(n);
                            try {
                                for (r.s(); !(i = r.n()).done;) {
                                    var a = i.value;
                                    this.PushToOutputStreamIndividual(a)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                            return void this.OutputStreamDirty()
                        }
                    }
                    this.PushToOutputStreamIndividual(t), this.OutputStreamDirty()
                }
            }, {
                key: "PopFromOutputStream",
                value: function(t) {
                    this.outputStream.splice(this.outputStream.length - t, t), this.OutputStreamDirty()
                }
            }, {
                key: "TrySplittingHeadTailWhitespace",
                value: function(t) {
                    var e = t.value;
                    if (null === e) return gt("single.value");
                    for (var n = -1, i = -1, r = 0; r < e.length; r++) {
                        var a = e[r];
                        if ("\n" != a) {
                            if (" " == a || "\t" == a) continue;
                            break
                        } - 1 == n && (n = r), i = r
                    }
                    for (var s = -1, o = -1, u = e.length - 1; 0 <= u; u--) {
                        var l = e[u];
                        if ("\n" != l) {
                            if (" " == l || "\t" == l) continue;
                            break
                        } - 1 == s && (s = u), o = u
                    }
                    if (-1 == n && -1 == s) return null;
                    var h, c, f, v, d = [],
                        p = 0,
                        y = e.length;
                    return -1 != n && (0 < n && (h = new Tt(e.substring(0, n)), d.push(h)), d.push(new Tt("\n")), p = i + 1), -1 != s && (y = o), p < y && (c = e.substring(p, y - p), d.push(new Tt(c))), -1 != s && i < o && (d.push(new Tt("\n")), s < e.length - 1 && (f = e.length - s - 1, v = new Tt(e.substring(s + 1, f)), d.push(v))), d
                }
            }, {
                key: "PushToOutputStreamIndividual",
                value: function(t) {
                    var e = yt(t, G),
                        n = yt(t, Tt),
                        i = !0;
                    if (e) this.TrimNewlinesFromOutputStream(), i = !0;
                    else if (n) {
                        var r = -1,
                            a = this.callStack.currentElement;
                        a.type == Nt.Function && (r = a.functionStartInOutputStream);
                        for (var s = -1, o = this.outputStream.length - 1; 0 <= o; o--) {
                            var u = this.outputStream[o],
                                l = u instanceof At ? u : null;
                            if (null != (u instanceof G ? u : null)) {
                                s = o;
                                break
                            }
                            if (null != l && l.commandType == At.CommandType.BeginString) {
                                r <= o && (r = -1);
                                break
                            }
                        }
                        if (-1 != (-1 != s && -1 != r ? Math.min(r, s) : -1 != s ? s : r)) {
                            if (n.isNewline) i = !1;
                            else if (n.isNonWhitespace && (-1 < s && this.RemoveExistingGlue(), -1 < r))
                                for (var h = this.callStack.elements, c = h.length - 1; 0 <= c; c--) {
                                    var f = h[c];
                                    if (f.type != Nt.Function) break;
                                    f.functionStartInOutputStream = -1
                                }
                        } else n.isNewline && (!this.outputStreamEndsInNewline && this.outputStreamContainsContent || (i = !1))
                    }
                    if (i) {
                        if (null === t) return gt("obj");
                        this.outputStream.push(t), this.OutputStreamDirty()
                    }
                }
            }, {
                key: "TrimNewlinesFromOutputStream",
                value: function() {
                    for (var t = -1, e = this.outputStream.length - 1; 0 <= e;) {
                        var n = this.outputStream[e],
                            i = yt(n, At),
                            r = yt(n, Tt);
                        if (null != i || null != r && r.isNonWhitespace) break;
                        null != r && r.isNewline && (t = e), e--
                    }
                    if (0 <= t)
                        for (e = t; e < this.outputStream.length;) {
                            yt(this.outputStream[e], Tt) ? this.outputStream.splice(e, 1) : e++
                        }
                    this.OutputStreamDirty()
                }
            }, {
                key: "RemoveExistingGlue",
                value: function() {
                    for (var t = this.outputStream.length - 1; 0 <= t; t--) {
                        var e = this.outputStream[t];
                        if (e instanceof G) this.outputStream.splice(t, 1);
                        else if (e instanceof At) break
                    }
                    this.OutputStreamDirty()
                }
            }, {
                key: "outputStreamEndsInNewline",
                get: function() {
                    if (0 < this.outputStream.length)
                        for (var t = this.outputStream.length - 1; 0 <= t; t--) {
                            if (this.outputStream[t] instanceof At) break;
                            var e = this.outputStream[t];
                            if (e instanceof Tt) {
                                if (e.isNewline) return !0;
                                if (e.isNonWhitespace) break
                            }
                        }
                    return !1
                }
            }, {
                key: "outputStreamContainsContent",
                get: function() {
                    var t, e = pt(this.outputStream);
                    try {
                        for (e.s(); !(t = e.n()).done;) {
                            if (t.value instanceof Tt) return !0
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                    return !1
                }
            }, {
                key: "inStringEvaluation",
                get: function() {
                    for (var t = this.outputStream.length - 1; 0 <= t; t--) {
                        var e = yt(this.outputStream[t], At);
                        if (e instanceof At && e.commandType == At.CommandType.BeginString) return !0
                    }
                    return !1
                }
            }, {
                key: "PushEvaluationStack",
                value: function(t) {
                    var e = yt(t, Pt);
                    if (e) {
                        var n = e.value;
                        if (null === n) return gt("rawList");
                        if (null != n.originNames) {
                            n.origins || (n.origins = []), n.origins.length = 0;
                            var i, r = pt(n.originNames);
                            try {
                                for (r.s(); !(i = r.n()).done;) {
                                    var a = i.value;
                                    if (null === this.story.listDefinitions) return gt("StoryState.story.listDefinitions");
                                    var s = this.story.listDefinitions.TryListGetDefinition(a, null);
                                    if (null === s.result) return gt("StoryState def.result");
                                    n.origins.indexOf(s.result) < 0 && n.origins.push(s.result)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }
                    }
                    if (null === t) return gt("obj");
                    this.evaluationStack.push(t)
                }
            }, {
                key: "PopEvaluationStack",
                value: function(t) {
                    if (void 0 === t) return b(this.evaluationStack.pop());
                    if (t > this.evaluationStack.length) throw new Error("trying to pop too many objects");
                    return b(this.evaluationStack.splice(this.evaluationStack.length - t, t))
                }
            }, {
                key: "PeekEvaluationStack",
                value: function() {
                    return this.evaluationStack[this.evaluationStack.length - 1]
                }
            }, {
                key: "ForceEnd",
                value: function() {
                    this.callStack.Reset(), this._currentFlow.currentChoices.length = 0, this.currentPointer = It.Null, this.previousPointer = It.Null, this.didSafeExit = !0
                }
            }, {
                key: "TrimWhitespaceFromFunctionEnd",
                value: function() {
                    k.Assert(this.callStack.currentElement.type == Nt.Function);
                    var t = this.callStack.currentElement.functionStartInOutputStream; - 1 == t && (t = 0);
                    for (var e = this.outputStream.length - 1; t <= e; e--) {
                        var n = this.outputStream[e],
                            i = yt(n, Tt),
                            r = yt(n, At);
                        if (null != i) {
                            if (r) break;
                            if (!i.isNewline && !i.isInlineWhitespace) break;
                            this.outputStream.splice(e, 1), this.OutputStreamDirty()
                        }
                    }
                }
            }, {
                key: "PopCallStack",
                value: function(t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : null;
                    this.callStack.currentElement.type == Nt.Function && this.TrimWhitespaceFromFunctionEnd(), this.callStack.Pop(e)
                }
            }, {
                key: "SetChosenPath",
                value: function(t, e) {
                    this._currentFlow.currentChoices.length = 0;
                    var n = this.story.PointerAtPath(t);
                    n.isNull || -1 != n.index || (n.index = 0), this.currentPointer = n, e && this.currentTurnIndex++
                }
            }, {
                key: "StartFunctionEvaluationFromGame",
                value: function(t, e) {
                    this.callStack.Push(Nt.FunctionEvaluationFromGame, this.evaluationStack.length), this.callStack.currentElement.currentPointer = It.StartOf(t), this.PassArgumentsToEvaluationStack(e)
                }
            }, {
                key: "PassArgumentsToEvaluationStack",
                value: function(t) {
                    if (null !== t)
                        for (var e = 0; e < t.length; e++) {
                            if ("number" != typeof t[e] && "string" != typeof t[e] || t[e] instanceof Ct) throw new Error((b(arguments[e]), "null"));
                            this.PushEvaluationStack(_t.Create(t[e]))
                        }
                }
            }, {
                key: "TryExitFunctionEvaluationFromGame",
                value: function() {
                    return this.callStack.currentElement.type == Nt.FunctionEvaluationFromGame && (this.currentPointer = It.Null, this.didSafeExit = !0)
                }
            }, {
                key: "CompleteFunctionEvaluationFromGame",
                value: function() {
                    if (this.callStack.currentElement.type != Nt.FunctionEvaluationFromGame) throw new Error("Expected external function evaluation to be complete. Stack trace: " + this.callStack.callStackTrace);
                    for (var t = this.callStack.currentElement.evaluationStackHeightWhenPushed, e = null; this.evaluationStack.length > t;) {
                        var n = this.PopEvaluationStack();
                        null === e && (e = n)
                    }
                    if (this.PopCallStack(Nt.FunctionEvaluationFromGame), e) {
                        if (e instanceof Vt) return null;
                        var i = mt(e, _t);
                        return i.valueType == N.DivertTarget ? i.valueObject.toString() : i.valueObject
                    }
                    return null
                }
            }, {
                key: "AddError",
                value: function(t, e) {
                    e ? (null == this._currentWarnings && (this._currentWarnings = []), this._currentWarnings.push(t)) : (null == this._currentErrors && (this._currentErrors = []), this._currentErrors.push(t))
                }
            }, {
                key: "OutputStreamDirty",
                value: function() {
                    this._outputStreamTextDirty = !0, this._outputStreamTagsDirty = !0
                }
            }]), c
        }(),
        rt = function() {
            function t() {
                m(this, t), this.startTime = void 0
            }
            return u(t, [{
                key: "ElapsedMilliseconds",
                get: function() {
                    return void 0 === this.startTime ? 0 : (new Date).getTime() - this.startTime
                }
            }, {
                key: "Start",
                value: function() {
                    this.startTime = (new Date).getTime()
                }
            }, {
                key: "Stop",
                value: function() {
                    this.startTime = void 0
                }
            }]), t
        }();
    (Z = Q = Q || {})[Z.Author = 0] = "Author", Z[Z.Warning = 1] = "Warning", Z[Z.Error = 2] = "Error", Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && -9007199254740992 < t && t < 9007199254740992 && Math.floor(t) === t
    }), a.Story = function() {
        s(f, T);
        var h = v(f);

        function f() {
            var t, e;
            m(this, f), (t = h.call(this)).inkVersionMinimumCompatible = 18, t.onError = null, t.onDidContinue = null, t.onMakeChoice = null, t.onEvaluateFunction = null, t.onCompleteEvaluateFunction = null, t.onChoosePathString = null, t._prevContainers = [], t.allowExternalFunctionFallbacks = !1, t._listDefinitions = null, t._variableObservers = null, t._hasValidatedExternals = !1, t._temporaryEvaluationContainer = null, t._asyncContinueActive = !1, t._stateSnapshotAtLastNewline = null, t._sawLookaheadUnsafeFunctionAfterNewline = !1, t._recursiveContinueCount = 0, t._asyncSaving = !1;
            var n, i = t._profiler = null,
                r = null;
            if (arguments[0] instanceof Ot ? (e = arguments[0], void 0 !== arguments[1] && (i = arguments[1]), t._mainContentContainer = e) : r = "string" == typeof arguments[0] ? (n = arguments[0], Y.TextToDictionary(n)) : arguments[0], null != i && (t._listDefinitions = new K(i)), t._externals = new Map, null !== r) {
                var a = r,
                    s = a.inkVersion;
                if (null == s) throw new Error("ink version number not found. Are you sure it's a valid .ink.json file?");
                var o = parseInt(s);
                if (f.inkVersionCurrent < o) throw new Error("Version of ink used to build story was newer than the current version of the engine");
                if (o < t.inkVersionMinimumCompatible) throw new Error("Version of ink used to build story is too old to be loaded by this version of the engine");
                o != f.inkVersionCurrent && console.warn("WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising.");
                var u, l = a.root;
                if (null == l) throw new Error("Root node for ink not found. Are you sure it's a valid .ink.json file?");
                (u = a.listDefs) && (t._listDefinitions = z.JTokenToListDefinitions(u)), t._mainContentContainer = mt(z.JTokenToRuntimeObject(l), Ot), t.ResetState()
            }
            return t
        }
        return u(f, [{
            key: "currentChoices",
            get: function() {
                var t = [];
                if (null === this._state) return gt("this._state");
                var e, n = pt(this._state.currentChoices);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var i = e.value;
                        i.isInvisibleDefault || (i.index = t.length, t.push(i))
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return t
            }
        }, {
            key: "currentText",
            get: function() {
                return this.IfAsyncWeCant("call currentText since it's a work in progress"), this.state.currentText
            }
        }, {
            key: "currentTags",
            get: function() {
                return this.IfAsyncWeCant("call currentTags since it's a work in progress"), this.state.currentTags
            }
        }, {
            key: "currentErrors",
            get: function() {
                return this.state.currentErrors
            }
        }, {
            key: "currentWarnings",
            get: function() {
                return this.state.currentWarnings
            }
        }, {
            key: "currentFlowName",
            get: function() {
                return this.state.currentFlowName
            }
        }, {
            key: "hasError",
            get: function() {
                return this.state.hasError
            }
        }, {
            key: "hasWarning",
            get: function() {
                return this.state.hasWarning
            }
        }, {
            key: "variablesState",
            get: function() {
                return this.state.variablesState
            }
        }, {
            key: "listDefinitions",
            get: function() {
                return this._listDefinitions
            }
        }, {
            key: "state",
            get: function() {
                return this._state
            }
        }, {
            key: "StartProfiling",
            value: function() {}
        }, {
            key: "EndProfiling",
            value: function() {}
        }, {
            key: "ToJson",
            value: function(t) {
                var e = this,
                    n = !1;
                if (t || (n = !0, t = new Y.Writer), t.WriteObjectStart(), t.WriteIntProperty("inkVersion", f.inkVersionCurrent), t.WriteProperty("root", function(t) {
                        return z.WriteRuntimeContainer(t, e._mainContentContainer)
                    }), null != this._listDefinitions) {
                    t.WritePropertyStart("listDefs"), t.WriteObjectStart();
                    var i, r = pt(this._listDefinitions.lists);
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var a = i.value;
                            t.WritePropertyStart(a.name), t.WriteObjectStart();
                            var s, o = pt(a.items);
                            try {
                                for (o.s(); !(s = o.n()).done;) {
                                    var u = S(s.value, 2),
                                        l = u[0],
                                        h = u[1],
                                        c = kt.fromSerializedKey(l);
                                    t.WriteIntProperty(c.itemName, h)
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            t.WriteObjectEnd(), t.WritePropertyEnd()
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    t.WriteObjectEnd(), t.WritePropertyEnd()
                }
                if (t.WriteObjectEnd(), n) return t.ToString()
            }
        }, {
            key: "ResetState",
            value: function() {
                this.IfAsyncWeCant("ResetState"), this._state = new it(this), this._state.variablesState.ObserveVariableChange(this.VariableStateDidChangeEvent.bind(this)), this.ResetGlobals()
            }
        }, {
            key: "ResetErrors",
            value: function() {
                if (null === this._state) return gt("this._state");
                this._state.ResetErrors()
            }
        }, {
            key: "ResetCallstack",
            value: function() {
                if (this.IfAsyncWeCant("ResetCallstack"), null === this._state) return gt("this._state");
                this._state.ForceEnd()
            }
        }, {
            key: "ResetGlobals",
            value: function() {
                var t;
                this._mainContentContainer.namedContent.get("global decl") && (t = this.state.currentPointer.copy(), this.ChoosePath(new O("global decl"), !1), this.ContinueInternal(), this.state.currentPointer = t), this.state.variablesState.SnapshotDefaultGlobals()
            }
        }, {
            key: "SwitchFlow",
            value: function(t) {
                if (this.IfAsyncWeCant("switch flow"), this._asyncSaving) throw new Error("Story is already in background saving mode, can't switch flow to " + t);
                this.state.SwitchFlow_Internal(t)
            }
        }, {
            key: "RemoveFlow",
            value: function(t) {
                this.state.RemoveFlow_Internal(t)
            }
        }, {
            key: "SwitchToDefaultFlow",
            value: function() {
                this.state.SwitchToDefaultFlow_Internal()
            }
        }, {
            key: "Continue",
            value: function() {
                return this.ContinueAsync(0), this.currentText
            }
        }, {
            key: "canContinue",
            get: function() {
                return this.state.canContinue
            }
        }, {
            key: "asyncContinueComplete",
            get: function() {
                return !this._asyncContinueActive
            }
        }, {
            key: "ContinueAsync",
            value: function(t) {
                this._hasValidatedExternals || this.ValidateExternalBindings(), this.ContinueInternal(t)
            }
        }, {
            key: "ContinueInternal",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : 0;
                null != this._profiler && this._profiler.PreContinue();
                var n = 0 < e;
                if (this._recursiveContinueCount++, !this._asyncContinueActive) {
                    if (this._asyncContinueActive = n, !this.canContinue) throw new Error("Can't continue - should check canContinue before calling Continue");
                    this._state.didSafeExit = !1, this._state.ResetOutput(), 1 == this._recursiveContinueCount && (this._state.variablesState.batchObservingVariableChanges = !0)
                }
                var i = new rt;
                i.Start();
                var r = !1;
                this._sawLookaheadUnsafeFunctionAfterNewline = !1;
                do {
                    try {
                        r = this.ContinueSingleStep()
                    } catch (t) {
                        if (!(t instanceof bt)) throw t;
                        this.AddError(t.message, void 0, t.useEndLineNumber);
                        break
                    }
                    if (r) break;
                    if (this._asyncContinueActive && i.ElapsedMilliseconds > e) break
                } while (this.canContinue);
                if (i.Stop(), !r && this.canContinue || (null !== this._stateSnapshotAtLastNewline && this.RestoreStateSnapshot(), this.canContinue || (this.state.callStack.canPopThread && this.AddError("Thread available to pop, threads should always be flat by the end of evaluation?"), 0 != this.state.generatedChoices.length || this.state.didSafeExit || null != this._temporaryEvaluationContainer || (this.state.callStack.CanPop(Nt.Tunnel) ? this.AddError("unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?") : this.state.callStack.CanPop(Nt.Function) ? this.AddError("unexpectedly reached end of content. Do you need a '~ return'?") : this.state.callStack.canPop ? this.AddError("unexpectedly reached end of content for unknown reason. Please debug compiler!") : this.AddError("ran out of content. Do you need a '-> DONE' or '-> END'?"))), this.state.didSafeExit = !1, this._sawLookaheadUnsafeFunctionAfterNewline = !1, 1 == this._recursiveContinueCount && (this._state.variablesState.batchObservingVariableChanges = !1), this._asyncContinueActive = !1, null !== this.onDidContinue && this.onDidContinue()), this._recursiveContinueCount--, null != this._profiler && this._profiler.PostContinue(), this.state.hasError || this.state.hasWarning) {
                    if (null === this.onError) {
                        var a = new St;
                        throw a.Append("Ink had "), this.state.hasError && (a.Append("".concat(this.state.currentErrors.length)), a.Append(1 == this.state.currentErrors.length ? " error" : "errors"), this.state.hasWarning && a.Append(" and ")), this.state.hasWarning && (a.Append("".concat(this.state.currentWarnings.length)), a.Append(1 == this.state.currentWarnings.length ? " warning" : "warnings"), this.state.hasWarning && a.Append(" and ")), a.Append(". It is strongly suggested that you assign an error handler to story.onError. The first issue was: "), a.Append(this.state.hasError ? this.state.currentErrors[0] : this.state.currentWarnings[0]), new bt(a.toString())
                    }
                    if (this.state.hasError) {
                        var s, o = pt(this.state.currentErrors);
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                var u = s.value;
                                this.onError(u, Q.Error)
                            }
                        } catch (u) {
                            o.e(u)
                        } finally {
                            o.f()
                        }
                    }
                    if (this.state.hasWarning) {
                        var l, h = pt(this.state.currentWarnings);
                        try {
                            for (h.s(); !(l = h.n()).done;) {
                                var c = l.value;
                                this.onError(c, Q.Warning)
                            }
                        } catch (u) {
                            h.e(u)
                        } finally {
                            h.f()
                        }
                    }
                    this.ResetErrors()
                }
            }
        }, {
            key: "ContinueSingleStep",
            value: function() {
                if (null != this._profiler && this._profiler.PreStep(), this.Step(), null != this._profiler && this._profiler.PostStep(), this.canContinue || this.state.callStack.elementIsEvaluateFromGame || this.TryFollowDefaultInvisibleChoice(), null != this._profiler && this._profiler.PreSnapshot(), !this.state.inStringEvaluation) {
                    if (null !== this._stateSnapshotAtLastNewline) {
                        if (null === this._stateSnapshotAtLastNewline.currentTags) return gt("this._stateAtLastNewline.currentTags");
                        if (null === this.state.currentTags) return gt("this.state.currentTags");
                        var t = this.CalculateNewlineOutputStateChange(this._stateSnapshotAtLastNewline.currentText, this.state.currentText, this._stateSnapshotAtLastNewline.currentTags.length, this.state.currentTags.length);
                        if (t == f.OutputStateChange.ExtendedBeyondNewline || this._sawLookaheadUnsafeFunctionAfterNewline) return this.RestoreStateSnapshot(), !0;
                        t == f.OutputStateChange.NewlineRemoved && this.DiscardSnapshot()
                    }
                    this.state.outputStreamEndsInNewline && (this.canContinue ? null == this._stateSnapshotAtLastNewline && this.StateSnapshot() : this.DiscardSnapshot())
                }
                return null != this._profiler && this._profiler.PostSnapshot(), !1
            }
        }, {
            key: "CalculateNewlineOutputStateChange",
            value: function(t, e, n, i) {
                if (null === t) return gt("prevText");
                if (null === e) return gt("currText");
                var r = e.length >= t.length && "\n" == e.charAt(t.length - 1);
                if (n == i && t.length == e.length && r) return f.OutputStateChange.NoChange;
                if (!r) return f.OutputStateChange.NewlineRemoved;
                if (n < i) return f.OutputStateChange.ExtendedBeyondNewline;
                for (var a = t.length; a < e.length; a++) {
                    var s = e.charAt(a);
                    if (" " != s && "\t" != s) return f.OutputStateChange.ExtendedBeyondNewline
                }
                return f.OutputStateChange.NoChange
            }
        }, {
            key: "ContinueMaximally",
            value: function() {
                this.IfAsyncWeCant("ContinueMaximally");
                for (var t = new St; this.canContinue;) t.Append(this.Continue());
                return t.toString()
            }
        }, {
            key: "ContentAtPath",
            value: function(t) {
                return this.mainContentContainer.ContentAtPath(t)
            }
        }, {
            key: "KnotContainerWithName",
            value: function(t) {
                var e = this.mainContentContainer.namedContent.get(t);
                return e instanceof Ot ? e : null
            }
        }, {
            key: "PointerAtPath",
            value: function(t) {
                if (0 == t.length) return It.Null;
                var e = new It,
                    n = t.length,
                    i = null;
                return null === t.lastComponent ? gt("path.lastComponent") : (t.lastComponent.isIndex ? (n = t.length - 1, i = this.mainContentContainer.ContentAtPath(t, void 0, n), e.container = i.container, e.index = t.lastComponent.index) : (i = this.mainContentContainer.ContentAtPath(t), e.container = i.container, e.index = -1), null == i.obj || i.obj == this.mainContentContainer && 0 < n ? this.Error("Failed to find content at path '" + t + "', and no approximation of it was possible.") : i.approximate && this.Warning("Failed to find content at path '" + t + "', so it was approximated to: '" + i.obj.path + "'."), e)
            }
        }, {
            key: "StateSnapshot",
            value: function() {
                this._stateSnapshotAtLastNewline = this._state, this._state = this._state.CopyAndStartPatching()
            }
        }, {
            key: "RestoreStateSnapshot",
            value: function() {
                null === this._stateSnapshotAtLastNewline && gt("_stateSnapshotAtLastNewline"), this._stateSnapshotAtLastNewline.RestoreAfterPatch(), this._state = this._stateSnapshotAtLastNewline, this._stateSnapshotAtLastNewline = null, this._asyncSaving || this._state.ApplyAnyPatch()
            }
        }, {
            key: "DiscardSnapshot",
            value: function() {
                this._asyncSaving || this._state.ApplyAnyPatch(), this._stateSnapshotAtLastNewline = null
            }
        }, {
            key: "CopyStateForBackgroundThreadSave",
            value: function() {
                if (this.IfAsyncWeCant("start saving on a background thread"), this._asyncSaving) throw new Error("Story is already in background saving mode, can't call CopyStateForBackgroundThreadSave again!");
                var t = this._state;
                return this._state = this._state.CopyAndStartPatching(), this._asyncSaving = !0, t
            }
        }, {
            key: "BackgroundSaveComplete",
            value: function() {
                null === this._stateSnapshotAtLastNewline && this._state.ApplyAnyPatch(), this._asyncSaving = !1
            }
        }, {
            key: "Step",
            value: function() {
                var t = !0,
                    e = this.state.currentPointer.copy();
                if (!e.isNull) {
                    for (var n = yt(e.Resolve(), Ot); n && (this.VisitContainer(n, !0), 0 != n.content.length);) n = yt((e = It.StartOf(n)).Resolve(), Ot);
                    this.state.currentPointer = e.copy(), null != this._profiler && this._profiler.Step(this.state.callStack);
                    var i, r, a, s, o, u = e.Resolve(),
                        l = this.PerformLogicAndFlowControl(u);
                    this.state.currentPointer.isNull || (l && (t = !1), (i = yt(u, M)) && ((r = this.ProcessChoice(i)) && this.state.generatedChoices.push(r), u = null, t = !1), u instanceof Ot && (t = !1), t && ((a = yt(u, W)) && -1 == a.contextIndex && (s = this.state.callStack.ContextForVariableNamed(a.variableName), u = new W(a.variableName, s)), this.state.inExpressionEvaluation ? this.state.PushEvaluationStack(u) : this.state.PushToOutputStream(u)), this.NextContent(), (o = yt(u, At)) && o.commandType == At.CommandType.StartThread && this.state.callStack.PushThread())
                }
            }
        }, {
            key: "VisitContainer",
            value: function(t, e) {
                t.countingAtStartOnly && !e || (t.visitsShouldBeCounted && this.state.IncrementVisitCountForContainer(t), t.turnIndexShouldBeCounted && this.state.RecordTurnIndexVisitToContainer(t))
            }
        }, {
            key: "VisitChangedContainersDueToDivert",
            value: function() {
                var t = this.state.previousPointer.copy(),
                    e = this.state.currentPointer.copy();
                if (!e.isNull && -1 != e.index) {
                    if (this._prevContainers.length = 0, !t.isNull)
                        for (var n = yt(t.Resolve(), Ot) || yt(t.container, Ot); n;) this._prevContainers.push(n), n = yt(n.parent, Ot);
                    var i = e.Resolve();
                    if (null != i)
                        for (var r = yt(i.parent, Ot), a = !0; r && (this._prevContainers.indexOf(r) < 0 || r.countingAtStartOnly);) {
                            var s = 0 < r.content.length && i == r.content[0] && a;
                            s || (a = !1), this.VisitContainer(r, s), r = yt((i = r).parent, Ot)
                        }
                }
            }
        }, {
            key: "ProcessChoice",
            value: function(t) {
                var e, n = !0;
                t.hasCondition && (e = this.state.PopEvaluationStack(), this.IsTruthy(e) || (n = !1));
                var i = "",
                    r = "";
                if (t.hasChoiceOnlyContent && (r = mt(this.state.PopEvaluationStack(), Tt).value || ""), t.hasStartContent && (i = mt(this.state.PopEvaluationStack(), Tt).value || ""), t.onceOnly && 0 < this.state.VisitCountForContainer(t.choiceTarget) && (n = !1), !n) return null;
                var a = new U;
                return a.targetPath = t.pathOnChoice, a.sourcePath = t.path.toString(), a.isInvisibleDefault = t.isInvisibleDefault, a.threadAtGeneration = this.state.callStack.ForkThread(), a.text = (i + r).replace(/^[ \t]+|[ \t]+$/g, ""), a
            }
        }, {
            key: "IsTruthy",
            value: function(t) {
                if (t instanceof _t) {
                    var e = t;
                    return e instanceof Et ? (this.Error("Shouldn't use a divert target (to " + e.targetPath + ") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"), !1) : e.isTruthy
                }
                return !1
            }
        }, {
            key: "PerformLogicAndFlowControl",
            value: function(t) {
                if (null == t) return !1;
                if (t instanceof xt) {
                    var e = t;
                    if (e.isConditional) {
                        var n = this.state.PopEvaluationStack();
                        if (!this.IsTruthy(n)) return !0
                    }
                    if (e.hasVariableTarget) {
                        var i, r, a = e.variableDivertName,
                            s = this.state.variablesState.GetVariableWithName(a);
                        null == s ? this.Error("Tried to divert using a target from a variable that could not be found (" + a + ")") : s instanceof Et || (r = "Tried to divert to a target from a variable, but the variable (" + a + ") didn't contain a divert target, it ", (i = yt(s, wt)) instanceof wt && 0 == i.value ? r += "was empty/null (the value 0)." : r += "contained '" + s + "'.", this.Error(r));
                        var o = mt(s, Et);
                        this.state.divertedPointer = this.PointerAtPath(o.targetPath)
                    } else {
                        if (e.isExternal) return this.CallExternalFunction(e.targetPathString, e.externalArgs), !0;
                        this.state.divertedPointer = e.targetPointer.copy()
                    }
                    return e.pushesToStack && this.state.callStack.Push(e.stackPushType, void 0, this.state.outputStream.length), this.state.divertedPointer.isNull && !e.isExternal && (e && e.debugMetadata && null != e.debugMetadata.sourceName ? this.Error("Divert target doesn't exist: " + e.debugMetadata.sourceName) : this.Error("Divert resolution failed: " + e)), !0
                }
                if (t instanceof At) {
                    var u, l, h = t;
                    switch (h.commandType) {
                        case At.CommandType.EvalStart:
                            this.Assert(!1 === this.state.inExpressionEvaluation, "Already in expression evaluation?"), this.state.inExpressionEvaluation = !0;
                            break;
                        case At.CommandType.EvalEnd:
                            this.Assert(!0 === this.state.inExpressionEvaluation, "Not in expression evaluation mode"), this.state.inExpressionEvaluation = !1;
                            break;
                        case At.CommandType.EvalOutput:
                            0 < this.state.evaluationStack.length && ((u = this.state.PopEvaluationStack()) instanceof Vt || (l = new Tt(u.toString()), this.state.PushToOutputStream(l)));
                            break;
                        case At.CommandType.NoOp:
                            break;
                        case At.CommandType.Duplicate:
                            this.state.PushEvaluationStack(this.state.PeekEvaluationStack());
                            break;
                        case At.CommandType.PopEvaluatedValue:
                            this.state.PopEvaluationStack();
                            break;
                        case At.CommandType.PopFunction:
                        case At.CommandType.PopTunnel:
                            var c, f, v, d, p = h.commandType == At.CommandType.PopFunction ? Nt.Function : Nt.Tunnel,
                                y = null;
                            if (p != Nt.Tunnel || null === (y = yt(c = this.state.PopEvaluationStack(), Et)) && this.Assert(c instanceof Vt, "Expected void if ->-> doesn't override target"), this.state.TryExitFunctionEvaluationFromGame()) break;
                            this.state.callStack.currentElement.type == p && this.state.callStack.canPop ? (this.state.PopCallStack(), y && (this.state.divertedPointer = this.PointerAtPath(y.targetPath))) : ((f = new Map).set(Nt.Function, "function return statement (~ return)"), f.set(Nt.Tunnel, "tunnel onwards statement (->->)"), v = f.get(this.state.callStack.currentElement.type), this.state.callStack.canPop || (v = "end of flow (-> END or choice)"), d = "Found " + f.get(p) + ", when expected " + v, this.Error(d));
                            break;
                        case At.CommandType.BeginString:
                            this.state.PushToOutputStream(h), this.Assert(!0 === this.state.inExpressionEvaluation, "Expected to be in an expression when evaluating a string"), this.state.inExpressionEvaluation = !1;
                            break;
                        case At.CommandType.EndString:
                            for (var m = [], g = 0, S = this.state.outputStream.length - 1; 0 <= S; --S) {
                                var k = this.state.outputStream[S];
                                g++;
                                var C = yt(k, At);
                                if (C && C.commandType == At.CommandType.BeginString) break;
                                k instanceof Tt && m.push(k)
                            }
                            this.state.PopFromOutputStream(g), m = m.reverse();
                            var b, _ = new St,
                                w = pt(m);
                            try {
                                for (w.s(); !(b = w.n()).done;) {
                                    var T = b.value;
                                    _.Append(T.toString())
                                }
                            } catch (t) {
                                w.e(t)
                            } finally {
                                w.f()
                            }
                            this.state.inExpressionEvaluation = !0, this.state.PushEvaluationStack(new Tt(_.toString()));
                            break;
                        case At.CommandType.ChoiceCount:
                            var E = this.state.generatedChoices.length;
                            this.state.PushEvaluationStack(new wt(E));
                            break;
                        case At.CommandType.Turns:
                            this.state.PushEvaluationStack(new wt(this.state.currentTurnIndex + 1));
                            break;
                        case At.CommandType.TurnsSince:
                        case At.CommandType.ReadCount:
                            var P = this.state.PopEvaluationStack();
                            if (!(P instanceof Et)) {
                                var O = P instanceof wt ? ". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?" : "";
                                this.Error("TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw " + P + O);
                                break
                            }
                            var N, A = mt(P, Et),
                                I = yt(this.ContentAtPath(A.targetPath).correctObj, Ot);
                            null != I ? N = h.commandType == At.CommandType.TurnsSince ? this.state.TurnsSinceForContainer(I) : this.state.VisitCountForContainer(I) : (N = h.commandType == At.CommandType.TurnsSince ? -1 : 0, this.Warning("Failed to find container for " + h.toString() + " lookup at " + A.targetPath.toString())), this.state.PushEvaluationStack(new wt(N));
                            break;
                        case At.CommandType.Random:
                            var x = yt(this.state.PopEvaluationStack(), wt),
                                F = yt(this.state.PopEvaluationStack(), wt);
                            if (null == F || F instanceof wt == !1) return this.Error("Invalid value for minimum parameter of RANDOM(min, max)");
                            if (null == x || F instanceof wt == !1) return this.Error("Invalid value for maximum parameter of RANDOM(min, max)");
                            if (null === x.value) return gt("maxInt.value");
                            if (null === F.value) return gt("minInt.value");
                            var W = x.value - F.value + 1;
                            (!isFinite(W) || W > Number.MAX_SAFE_INTEGER) && (W = Number.MAX_SAFE_INTEGER, this.Error("RANDOM was called with a range that exceeds the size that ink numbers can use.")), W <= 0 && this.Error("RANDOM was called with minimum as " + F.value + " and maximum as " + x.value + ". The maximum must be larger");
                            var V = this.state.storySeed + this.state.previousRandom,
                                L = new Rt(V).next(),
                                R = L % W + F.value;
                            this.state.PushEvaluationStack(new wt(R)), this.state.previousRandom = L;
                            break;
                        case At.CommandType.SeedRandom:
                            var j = yt(this.state.PopEvaluationStack(), wt);
                            if (null == j || j instanceof wt == !1) return this.Error("Invalid value passed to SEED_RANDOM");
                            if (null === j.value) return gt("minInt.value");
                            this.state.storySeed = j.value, this.state.previousRandom = 0, this.state.PushEvaluationStack(new Vt);
                            break;
                        case At.CommandType.VisitIndex:
                            var D = this.state.VisitCountForContainer(this.state.currentPointer.container) - 1;
                            this.state.PushEvaluationStack(new wt(D));
                            break;
                        case At.CommandType.SequenceShuffleIndex:
                            var B = this.NextSequenceShuffleIndex();
                            this.state.PushEvaluationStack(new wt(B));
                            break;
                        case At.CommandType.StartThread:
                            break;
                        case At.CommandType.Done:
                            this.state.callStack.canPopThread ? this.state.callStack.PopThread() : (this.state.didSafeExit = !0, this.state.currentPointer = It.Null);
                            break;
                        case At.CommandType.End:
                            this.state.ForceEnd();
                            break;
                        case At.CommandType.ListFromInt:
                            var G = yt(this.state.PopEvaluationStack(), wt),
                                M = mt(this.state.PopEvaluationStack(), Tt);
                            if (null === G) throw new bt("Passed non-integer when creating a list element from a numerical value.");
                            var J = null;
                            if (null === this.listDefinitions) return gt("this.listDefinitions");
                            var U = this.listDefinitions.TryListGetDefinition(M.value, null);
                            if (!U.exists) throw new bt("Failed to find LIST called " + M.value);
                            if (null === G.value) return gt("minInt.value");
                            var q = U.result.TryGetItemWithValue(G.value, kt.Null);
                            q.exists && (J = new Pt(q.result, G.value)), null == J && (J = new Pt), this.state.PushEvaluationStack(J);
                            break;
                        case At.CommandType.ListRange:
                            var K = yt(this.state.PopEvaluationStack(), _t),
                                z = yt(this.state.PopEvaluationStack(), _t),
                                H = yt(this.state.PopEvaluationStack(), Pt);
                            if (null === H || null === z || null === K) throw new bt("Expected list, minimum and maximum for LIST_RANGE");
                            if (null === H.value) return gt("targetList.value");
                            var X = H.value.ListWithSubRange(z.valueObject, K.valueObject);
                            this.state.PushEvaluationStack(new Pt(X));
                            break;
                        case At.CommandType.ListRandom:
                            var $ = this.state.PopEvaluationStack();
                            if (null === $) throw new bt("Expected list for LIST_RANDOM");
                            var Y = $.value,
                                Q = null;
                            if (null === Y) throw gt("list");
                            if (0 == Y.Count) Q = new Ct;
                            else {
                                for (var Z = this.state.storySeed + this.state.previousRandom, tt = new Rt(Z).next(), et = tt % Y.Count, nt = Y.entries(), it = 0; it <= et - 1; it++) nt.next();
                                var rt = nt.next().value,
                                    at = {
                                        Key: kt.fromSerializedKey(rt[0]),
                                        Value: rt[1]
                                    };
                                if (null === at.Key.originName) return gt("randomItem.Key.originName");
                                (Q = new Ct(at.Key.originName, this)).Add(at.Key, at.Value), this.state.previousRandom = tt
                            }
                            this.state.PushEvaluationStack(new Pt(Q));
                            break;
                        default:
                            this.Error("unhandled ControlCommand: " + h)
                    }
                    return !0
                }
                if (t instanceof Wt) {
                    var st = t,
                        ot = this.state.PopEvaluationStack();
                    return this.state.variablesState.Assign(st, ot), !0
                }
                if (t instanceof Ft) {
                    var ut, lt, ht = t,
                        ct = null;
                    return null != ht.pathForCount ? (ut = ht.containerForCount, lt = this.state.VisitCountForContainer(ut), ct = new wt(lt)) : null == (ct = this.state.variablesState.GetVariableWithName(ht.name)) && (this.Warning("Variable not found: '" + ht.name + "'. Using default value of 0 (false). This can happen with temporary variables if the declaration hasn't yet been hit. Globals are always given a default value on load if a value doesn't exist in the save state."), ct = new wt(0)), this.state.PushEvaluationStack(ct), !0
                }
                if (t instanceof Lt) {
                    var ft = t,
                        vt = this.state.PopEvaluationStack(ft.numberOfParameters),
                        dt = ft.Call(vt);
                    return this.state.PushEvaluationStack(dt), !0
                }
                return !1
            }
        }, {
            key: "ChoosePathString",
            value: function(t, e, n) {
                var i = !(1 < arguments.length && void 0 !== e) || e,
                    r = 2 < arguments.length && void 0 !== n ? n : [];
                if (this.IfAsyncWeCant("call ChoosePathString right now"), null !== this.onChoosePathString && this.onChoosePathString(t, r), i) this.ResetCallstack();
                else if (this.state.callStack.currentElement.type == Nt.Function) {
                    var a = "",
                        s = this.state.callStack.currentElement.currentPointer.container;
                    throw null != s && (a = "(" + s.path.toString() + ") "), new Error("Story was running a function " + a + "when you called ChoosePathString(" + t + ") - this is almost certainly not not what you want! Full stack trace: \n" + this.state.callStack.callStackTrace)
                }
                this.state.PassArgumentsToEvaluationStack(r), this.ChoosePath(new O(t))
            }
        }, {
            key: "IfAsyncWeCant",
            value: function(t) {
                if (this._asyncContinueActive) throw new Error("Can't " + t + ". Story is in the middle of a ContinueAsync(). Make more ContinueAsync() calls or a single Continue() call beforehand.")
            }
        }, {
            key: "ChoosePath",
            value: function(t, e) {
                var n = !(1 < arguments.length && void 0 !== e) || e;
                this.state.SetChosenPath(t, n), this.VisitChangedContainersDueToDivert()
            }
        }, {
            key: "ChooseChoiceIndex",
            value: function(t) {
                t = t;
                var e = this.currentChoices;
                this.Assert(0 <= t && t < e.length, "choice out of range");
                var n = e[t];
                return null !== this.onMakeChoice && this.onMakeChoice(n), null === n.threadAtGeneration ? gt("choiceToChoose.threadAtGeneration") : null === n.targetPath ? gt("choiceToChoose.targetPath") : (this.state.callStack.currentThread = n.threadAtGeneration, void this.ChoosePath(n.targetPath))
            }
        }, {
            key: "HasFunction",
            value: function(t) {
                try {
                    return null != this.KnotContainerWithName(t)
                } catch (t) {
                    return !1
                }
            }
        }, {
            key: "EvaluateFunction",
            value: function(t, e, n) {
                var i = 1 < arguments.length && void 0 !== e ? e : [],
                    r = 2 < arguments.length && void 0 !== n && n;
                if (null !== this.onEvaluateFunction && this.onEvaluateFunction(t, i), this.IfAsyncWeCant("evaluate a function"), null == t) throw new Error("Function is null");
                if ("" == t || "" == t.trim()) throw new Error("Function is empty or white space.");
                var a = this.KnotContainerWithName(t);
                if (null == a) throw new Error("Function doesn't exist: '" + t + "'");
                var s = [];
                s.push.apply(s, d(this.state.outputStream)), this._state.ResetOutput(), this.state.StartFunctionEvaluationFromGame(a, i);
                for (var o = new St; this.canContinue;) o.Append(this.Continue());
                var u = o.toString();
                this._state.ResetOutput(s);
                var l = this.state.CompleteFunctionEvaluationFromGame();
                return null != this.onCompleteEvaluateFunction && this.onCompleteEvaluateFunction(t, i, u, l), r ? {
                    returned: l,
                    output: u
                } : l
            }
        }, {
            key: "EvaluateExpression",
            value: function(t) {
                var e = this.state.callStack.elements.length;
                this.state.callStack.Push(Nt.Tunnel), this._temporaryEvaluationContainer = t, this.state.GoToStart();
                var n = this.state.evaluationStack.length;
                return this.Continue(), this._temporaryEvaluationContainer = null, this.state.callStack.elements.length > e && this.state.PopCallStack(), n < this.state.evaluationStack.length ? this.state.PopEvaluationStack() : null
            }
        }, {
            key: "CallExternalFunction",
            value: function(t, e) {
                if (null === t) return gt("funcName");
                var n = this._externals.get(t),
                    i = null,
                    r = void 0 !== n;
                if (!r || n.lookAheadSafe || null === this._stateSnapshotAtLastNewline) {
                    if (!r) {
                        if (this.allowExternalFunctionFallbacks) return i = this.KnotContainerWithName(t), this.Assert(null !== i, "Trying to call EXTERNAL function '" + t + "' which has not been bound, and fallback ink function could not be found."), this.state.callStack.Push(Nt.Function, void 0, this.state.outputStream.length), void(this.state.divertedPointer = It.StartOf(i));
                        this.Assert(!1, "Trying to call EXTERNAL function '" + t + "' which has not been bound (and ink fallbacks disabled).")
                    }
                    for (var a = [], s = 0; s < e; ++s) {
                        var o = mt(this.state.PopEvaluationStack(), _t).valueObject;
                        a.push(o)
                    }
                    a.reverse();
                    var u = n.function(a),
                        l = null;
                    null != u ? (l = _t.Create(u), this.Assert(null !== l, "Could not create ink value from returned object of type " + P(u))) : l = new Vt, this.state.PushEvaluationStack(l)
                } else this._sawLookaheadUnsafeFunctionAfterNewline = !0
            }
        }, {
            key: "BindExternalFunctionGeneral",
            value: function(t, e, n) {
                this.IfAsyncWeCant("bind an external function"), this.Assert(!this._externals.has(t), "Function '" + t + "' has already been bound."), this._externals.set(t, {
                    function: e,
                    lookAheadSafe: n
                })
            }
        }, {
            key: "TryCoerce",
            value: function(t) {
                return t
            }
        }, {
            key: "BindExternalFunction",
            value: function(t, r, e) {
                var a = this;
                this.Assert(null != r, "Can't bind a null function"), this.BindExternalFunctionGeneral(t, function(t) {
                    a.Assert(t.length >= r.length, "External function expected " + r.length + " arguments");
                    for (var e = [], n = 0, i = t.length; n < i; n++) e[n] = a.TryCoerce(t[n]);
                    return r.apply(null, e)
                }, e)
            }
        }, {
            key: "UnbindExternalFunction",
            value: function(t) {
                this.IfAsyncWeCant("unbind an external a function"), this.Assert(this._externals.has(t), "Function '" + t + "' has not been bound."), this._externals.delete(t)
            }
        }, {
            key: "ValidateExternalBindings",
            value: function(t, e) {
                var n, i = null,
                    r = null,
                    a = e || new Set;
                if (t instanceof Ot && (i = t), t instanceof T && (r = t), null === i && null === r) this.ValidateExternalBindings(this._mainContentContainer, a), this._hasValidatedExternals = !0, 0 == a.size ? this._hasValidatedExternals = !0 : (n = "Error: Missing function binding for external", n += 1 < a.size ? "s" : "", n += ": '", n += Array.from(a).join("', '"), n += "' ", n += this.allowExternalFunctionFallbacks ? ", and no fallback ink function found." : " (ink fallbacks disabled)", this.Error(n));
                else if (null != i) {
                    var s, o = pt(i.content);
                    try {
                        for (o.s(); !(s = o.n()).done;) {
                            var u = s.value;
                            null != u && u.hasValidName || this.ValidateExternalBindings(u, a)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    var l, h = pt(i.namedContent);
                    try {
                        for (h.s(); !(l = h.n()).done;) {
                            var c = S(l.value, 2)[1];
                            this.ValidateExternalBindings(yt(c, T), a)
                        }
                    } catch (t) {
                        h.e(t)
                    } finally {
                        h.f()
                    }
                } else if (null != r) {
                    var f = yt(r, xt);
                    if (f && f.isExternal) {
                        var v = f.targetPathString;
                        if (null === v) return gt("name");
                        this._externals.has(v) || this.allowExternalFunctionFallbacks && this.mainContentContainer.namedContent.has(v) || a.add(v)
                    }
                }
            }
        }, {
            key: "ObserveVariable",
            value: function(t, e) {
                if (this.IfAsyncWeCant("observe a new variable"), null === this._variableObservers && (this._variableObservers = new Map), !this.state.variablesState.GlobalVariableExistsWithName(t)) throw new Error("Cannot observe variable '" + t + "' because it wasn't declared in the ink story.");
                this._variableObservers.has(t) ? this._variableObservers.get(t).push(e) : this._variableObservers.set(t, [e])
            }
        }, {
            key: "ObserveVariables",
            value: function(t, e) {
                for (var n = 0, i = t.length; n < i; n++) this.ObserveVariable(t[n], e[n])
            }
        }, {
            key: "RemoveVariableObserver",
            value: function(t, e) {
                var n;
                if (this.IfAsyncWeCant("remove a variable observer"), null !== this._variableObservers)
                    if (null != e) this._variableObservers.has(e) && (null != t ? null != (n = this._variableObservers.get(e)) && (n.splice(n.indexOf(t), 1), 0 === n.length && this._variableObservers.delete(e)) : this._variableObservers.delete(e));
                    else if (null != t) {
                    var i, r = pt(this._variableObservers.keys());
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var a = i.value,
                                s = this._variableObservers.get(a);
                            null != s && (s.splice(s.indexOf(t), 1), 0 === s.length && this._variableObservers.delete(a))
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
            }
        }, {
            key: "VariableStateDidChangeEvent",
            value: function(t, e) {
                if (null !== this._variableObservers) {
                    var n = this._variableObservers.get(t);
                    if (void 0 !== n) {
                        if (!(e instanceof _t)) throw new Error("Tried to get the value of a variable that isn't a standard type");
                        var i, r = mt(e, _t),
                            a = pt(n);
                        try {
                            for (a.s(); !(i = a.n()).done;) {
                                (0, i.value)(t, r.valueObject)
                            }
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                    }
                }
            }
        }, {
            key: "globalTags",
            get: function() {
                return this.TagsAtStartOfFlowContainerWithPathString("")
            }
        }, {
            key: "TagsForContentAtPath",
            value: function(t) {
                return this.TagsAtStartOfFlowContainerWithPathString(t)
            }
        }, {
            key: "TagsAtStartOfFlowContainerWithPathString",
            value: function(t) {
                var e = new O(t),
                    n = this.ContentAtPath(e).container;
                if (null === n) return gt("flowContainer");
                for (;;) {
                    var i = n.content[0];
                    if (!(i instanceof Ot)) break;
                    n = i
                }
                var r, a = null,
                    s = pt(n.content);
                try {
                    for (s.s(); !(r = s.n()).done;) {
                        var o = yt(r.value, J);
                        if (!o) break;
                        null == a && (a = []), a.push(o.text)
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                return a
            }
        }, {
            key: "BuildStringOfHierarchy",
            value: function() {
                var t = new St;
                return this.mainContentContainer.BuildStringOfHierarchy(t, 0, this.state.currentPointer.Resolve()), t.toString()
            }
        }, {
            key: "BuildStringOfContainer",
            value: function(t) {
                var e = new St;
                return t.BuildStringOfHierarchy(e, 0, this.state.currentPointer.Resolve()), e.toString()
            }
        }, {
            key: "NextContent",
            value: function() {
                var t;
                this.state.previousPointer = this.state.currentPointer.copy(), (this.state.divertedPointer.isNull || (this.state.currentPointer = this.state.divertedPointer.copy(), this.state.divertedPointer = It.Null, this.VisitChangedContainersDueToDivert(), this.state.currentPointer.isNull)) && (this.IncrementContentPointer() || (t = !1, this.state.callStack.CanPop(Nt.Function) ? (this.state.PopCallStack(Nt.Function), this.state.inExpressionEvaluation && this.state.PushEvaluationStack(new Vt), t = !0) : this.state.callStack.canPopThread ? (this.state.callStack.PopThread(), t = !0) : this.state.TryExitFunctionEvaluationFromGame(), t && !this.state.currentPointer.isNull && this.NextContent()))
            }
        }, {
            key: "IncrementContentPointer",
            value: function() {
                var t = !0,
                    e = this.state.callStack.currentElement.currentPointer.copy();
                if (e.index++, null === e.container) return gt("pointer.container");
                for (; e.index >= e.container.content.length;) {
                    t = !1;
                    var n = yt(e.container.parent, Ot);
                    if (n instanceof Ot == !1) break;
                    var i = n.content.indexOf(e.container);
                    if (-1 == i) break;
                    if ((e = new It(n, i)).index++, t = !0, null === e.container) return gt("pointer.container")
                }
                return t || (e = It.Null), this.state.callStack.currentElement.currentPointer = e.copy(), t
            }
        }, {
            key: "TryFollowDefaultInvisibleChoice",
            value: function() {
                var t = this._state.currentChoices,
                    e = t.filter(function(t) {
                        return t.isInvisibleDefault
                    });
                if (0 == e.length || t.length > e.length) return !1;
                var n = e[0];
                return null === n.targetPath ? gt("choice.targetPath") : null === n.threadAtGeneration ? gt("choice.threadAtGeneration") : (this.state.callStack.currentThread = n.threadAtGeneration, null !== this._stateSnapshotAtLastNewline && (this.state.callStack.currentThread = this.state.callStack.ForkThread()), this.ChoosePath(n.targetPath, !1), !0)
            }
        }, {
            key: "NextSequenceShuffleIndex",
            value: function() {
                var t = yt(this.state.PopEvaluationStack(), wt);
                if (!(t instanceof wt)) return this.Error("expected number of elements in sequence for shuffle index"), 0;
                var e = this.state.currentPointer.container;
                if (null === e) return gt("seqContainer");
                if (null === t.value) return gt("numElementsIntVal.value");
                var n = t.value,
                    i = mt(this.state.PopEvaluationStack(), wt).value;
                if (null === i) return gt("seqCount");
                for (var r = i / n, a = i % n, s = e.path.toString(), o = 0, u = 0, l = s.length; u < l; u++) o += s.charCodeAt(u) || 0;
                for (var h = o + r + this.state.storySeed, c = new Rt(Math.floor(h)), f = [], v = 0; v < n; ++v) f.push(v);
                for (var d = 0; d <= a; ++d) {
                    var p = c.next() % f.length,
                        y = f[p];
                    if (f.splice(p, 1), d == a) return y
                }
                throw new Error("Should never reach here")
            }
        }, {
            key: "Error",
            value: function(t, e) {
                var n = 1 < arguments.length && void 0 !== e && e,
                    i = new bt(t);
                throw i.useEndLineNumber = n, i
            }
        }, {
            key: "Warning",
            value: function(t) {
                this.AddError(t, !0)
            }
        }, {
            key: "AddError",
            value: function(t, e, n) {
                var i, r = 1 < arguments.length && void 0 !== e && e,
                    a = 2 < arguments.length && void 0 !== n && n,
                    s = this.currentDebugMetadata,
                    o = r ? "WARNING" : "ERROR";
                t = null != s ? (i = a ? s.endLineNumber : s.startLineNumber, "RUNTIME " + o + ": '" + s.fileName + "' line " + i + ": " + t) : this.state.currentPointer.isNull ? "RUNTIME " + o + ": " + t : "RUNTIME " + o + ": (" + this.state.currentPointer + "): " + t, this.state.AddError(t, r), r || this.state.ForceEnd()
            }
        }, {
            key: "Assert",
            value: function(t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : null;
                if (0 == t) throw null == n && (n = "Story assert"), new Error(n + " " + this.currentDebugMetadata)
            }
        }, {
            key: "currentDebugMetadata",
            get: function() {
                var t = this.state.currentPointer;
                if (!t.isNull && null !== t.Resolve() && null !== (n = t.Resolve().debugMetadata)) return n;
                for (var e = this.state.callStack.elements.length - 1; 0 <= e; --e)
                    if (!(t = this.state.callStack.elements[e].currentPointer).isNull && null !== t.Resolve() && null !== (n = t.Resolve().debugMetadata)) return n;
                for (var n, i = this.state.outputStream.length - 1; 0 <= i; --i) {
                    if (null !== (n = this.state.outputStream[i].debugMetadata)) return n
                }
                return null
            }
        }, {
            key: "mainContentContainer",
            get: function() {
                return this._temporaryEvaluationContainer ? this._temporaryEvaluationContainer : this._mainContentContainer
            }
        }]), f
    }(), a.Story.inkVersionCurrent = 20, tt = a.Story || (a.Story = {}), (et = tt.OutputStateChange || (tt.OutputStateChange = {}))[et.NoChange = 0] = "NoChange", et[et.ExtendedBeyondNewline = 1] = "ExtendedBeyondNewline", et[et.NewlineRemoved = 2] = "NewlineRemoved", a.InkList = Ct, Object.defineProperty(a, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ink.js.map